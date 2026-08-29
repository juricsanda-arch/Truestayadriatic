import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { ANALYSIS_JSON_SCHEMA, getSystemPrompt } from "@/lib/prompts";
import type { AnalysisResult, AnalyzeRequestBody, CheckMode } from "@/lib/types";

// Server-only route — the Anthropic API key never reaches the browser.
// Configure ANTHROPIC_API_KEY in your environment (see README.md).
const client = new Anthropic();

const MIN_TEXT_LENGTH = 20;
const MAX_TEXT_LENGTH = 12000;
const MAX_URL_LENGTH = 2000;

function isCheckMode(value: unknown): value is CheckMode {
  return value === "gosti" || value === "pruzatelji";
}

function normalizeUrl(raw: string): string | null {
  const trimmed = raw.trim().slice(0, MAX_URL_LENGTH);
  if (!trimmed) return null;
  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") return null;
    return parsed.toString();
  } catch {
    return null;
  }
}

export async function POST(req: NextRequest) {
  let body: Partial<AnalyzeRequestBody>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Neispravan zahtjev." }, { status: 400 });
  }

  const mode = isCheckMode(body.mode) ? body.mode : "gosti";
  const propertyName = typeof body.propertyName === "string" ? body.propertyName.trim().slice(0, 200) : "";
  const text = typeof body.text === "string" ? body.text.trim() : "";
  const rawUrl = typeof body.url === "string" ? body.url : "";
  const url = normalizeUrl(rawUrl);

  if (rawUrl.trim() && !url) {
    return NextResponse.json(
      { error: "URL nije valjan. Provjerite počinje li s http:// ili https://." },
      { status: 400 },
    );
  }

  if (!url && text.length < MIN_TEXT_LENGTH) {
    return NextResponse.json(
      { error: `Unesite URL oglasa ili tekst za analizu (najmanje ${MIN_TEXT_LENGTH} znakova).` },
      { status: 400 },
    );
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      {
        error:
          "Anthropic API ključ nije postavljen na serveru. Dodajte ANTHROPIC_API_KEY u environment varijable.",
      },
      { status: 500 },
    );
  }

  const trimmedText = text.slice(0, MAX_TEXT_LENGTH);

  const contentParts = [`Naziv objekta: ${propertyName || "nije naveden"}`];
  if (url) {
    contentParts.push(
      `URL oglasa: ${url}\n(Upotrijebi web_fetch alat da dohvatiš sadržaj ove stranice prije analize.)`,
    );
  }
  contentParts.push(
    trimmedText
      ? `Tekst za analizu:\n"""\n${trimmedText}\n"""`
      : url
        ? "Dodatni tekst nije priložen — analiziraj sadržaj dohvaćen s gornjeg URL-a."
        : "",
  );

  try {
    const response = await client.messages.create({
      model: "claude-opus-5",
      max_tokens: url ? 4096 : 1800,
      thinking: { type: "disabled" },
      output_config: {
        effort: "medium",
        format: {
          type: "json_schema",
          schema: ANALYSIS_JSON_SCHEMA,
        },
      },
      ...(url
        ? { tools: [{ type: "web_fetch_20260209" as const, name: "web_fetch" as const, max_uses: 1 }] }
        : {}),
      system: getSystemPrompt(mode),
      messages: [
        {
          role: "user",
          content: contentParts.filter(Boolean).join("\n\n"),
        },
      ],
    });

    if (response.stop_reason === "refusal") {
      return NextResponse.json(
        { error: "Analiza nije mogla biti dovršena za dostavljeni sadržaj. Pokušajte s drugim sadržajem." },
        { status: 422 },
      );
    }

    const textBlock = response.content.find((block) => block.type === "text");
    if (!textBlock || textBlock.type !== "text") {
      return NextResponse.json({ error: "Analiza nije vratila rezultat." }, { status: 502 });
    }

    const parsed = JSON.parse(textBlock.text) as AnalysisResult;
    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Analyze route error:", error);
    return NextResponse.json(
      { error: "Analiza trenutno nije dostupna. Pokušajte ponovno za nekoliko trenutaka." },
      { status: 500 },
    );
  }
}
