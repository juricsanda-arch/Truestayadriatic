import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase";

const MAX_MESSAGE_LENGTH = 1000;
const MAX_NAME_LENGTH = 80;

function isRole(value: unknown): value is "gost" | "vlasnik" {
  return value === "gost" || value === "vlasnik";
}

export async function POST(req: NextRequest) {
  let body: { role?: unknown; name?: unknown; message?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Neispravan zahtjev." }, { status: 400 });
  }

  const role = isRole(body.role) ? body.role : null;
  const name = typeof body.name === "string" ? body.name.trim().slice(0, MAX_NAME_LENGTH) : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!role) {
    return NextResponse.json({ error: "Odaberite jeste li gost ili vlasnik." }, { status: 400 });
  }
  if (message.length < 5 || message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      { error: `Poruka mora imati između 5 i ${MAX_MESSAGE_LENGTH} znakova.` },
      { status: 400 },
    );
  }

  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return NextResponse.json(
      { error: "Ploča poruka trenutno nije dostupna. Pokušajte kasnije." },
      { status: 500 },
    );
  }

  const { error } = await supabase.from("messages").insert({
    role,
    name: name || null,
    message,
    approved: false,
  });

  if (error) {
    console.error("Insert message error:", error);
    return NextResponse.json({ error: "Slanje poruke nije uspjelo." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
