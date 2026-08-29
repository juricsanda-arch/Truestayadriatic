"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UpgradeForm from "@/components/UpgradeForm";
import type { CheckMode } from "@/lib/types";

const RECIPIENT = "truestay.info@gmail.com";

const TABS: { id: CheckMode; label: string }[] = [
  { id: "gosti", label: "Za goste" },
  { id: "pruzatelji", label: "Za pružatelje usluga" },
];

const PLACEHOLDERS: Record<CheckMode, string> = {
  gosti:
    "Zalijepite tekst oglasa i/ili recenzija (smještaj, hotel, restoran, kafić...) koje želite provjeriti prije odluke...",
  pruzatelji:
    "Zalijepite opis vašeg objekta (smještaj, hotel, restoran, slastičarnica...) i/ili primljene recenzije gostiju za analizu online ugleda...",
};

function looksLikeUrl(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return false;
  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export default function ProvjeraClient({ initialMode }: { initialMode: CheckMode }) {
  const [mode, setMode] = useState<CheckMode>(initialMode);
  const [propertyName, setPropertyName] = useState("");
  const [url, setUrl] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function switchMode(next: CheckMode) {
    setMode(next);
    setSent(false);
    setError(null);
  }

  function handleSubmit() {
    setError(null);

    const trimmedUrl = url.trim();
    const hasUrl = trimmedUrl.length > 0;

    if (hasUrl && !looksLikeUrl(trimmedUrl)) {
      setError("URL nije valjan. Provjerite počinje li s http:// ili https://.");
      return;
    }

    if (!hasUrl && text.trim().length < 20) {
      setError("Unesite URL oglasa ili zalijepite barem nekoliko rečenica teksta.");
      return;
    }

    const modeLabel = mode === "gosti" ? "Za goste" : "Za pružatelje usluga";
    const subject = `Zahtjev za provjeru — ${modeLabel}`;
    const bodyLines = [
      `Način provjere: ${modeLabel}`,
      `Naziv objekta: ${propertyName.trim() || "—"}`,
      `URL oglasa: ${trimmedUrl || "—"}`,
      "",
      "Tekst za analizu:",
      text.trim() || "—",
    ];
    const mailto = `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
    setSent(true);
  }

  return (
    <div className="flex flex-1 flex-col">
      <Header />

      <main className="flex-1 bg-texture bg-navy-950">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-24">
          <p className="font-mono-terminal text-xs uppercase tracking-[0.3em] text-gold">
            [ Alat za provjeru ]
          </p>
          <h1 className="mt-4 font-serif-display text-4xl font-semibold text-cream sm:text-5xl">
            Provjera vjerodostojnosti
          </h1>
          <p className="mt-4 max-w-2xl font-sans text-cream-dim">
            Zalijepite tekst oglasa, opis ili URL i pošaljite nam ga na uvid.
            Tim TrueStay Adriatic ručno pregledava svaki upit i javlja se s
            procjenom vjerodostojnosti.
          </p>

          {/* Tabs */}
          <div className="mt-10 flex gap-2 border-b border-gold/20">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => switchMode(tab.id)}
                className={`px-5 py-3 font-mono-terminal text-xs uppercase tracking-[0.15em] transition ${
                  mode === tab.id
                    ? "border-b-2 border-gold text-gold"
                    : "text-cream-dim hover:text-cream"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Form */}
          <div className="mt-8 space-y-4">
            <div>
              <label className="mb-1.5 block font-mono-terminal text-xs uppercase tracking-[0.15em] text-cream-dim/70">
                Naziv objekta (nije obavezno)
              </label>
              <input
                type="text"
                value={propertyName}
                onChange={(e) => setPropertyName(e.target.value)}
                placeholder="npr. Villa Adria, Hvar ili Konoba Marina, Split"
                className="w-full border border-cream-dim/25 bg-navy-900/60 px-4 py-3 font-sans text-sm text-cream placeholder:text-cream-dim/40 outline-none focus:border-gold"
              />
            </div>

            <div>
              <label className="mb-1.5 block font-mono-terminal text-xs uppercase tracking-[0.15em] text-cream-dim/70">
                URL oglasa
              </label>
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Booking, TripAdvisor, Google Maps ili web poveznica"
                className="w-full border border-cream-dim/25 bg-navy-900/60 px-4 py-3 font-sans text-sm text-cream placeholder:text-cream-dim/40 outline-none focus:border-gold"
              />
              <p className="mt-1 font-mono-terminal text-[11px] text-cream-dim/50">
                Zalijepite poveznicu na oglas koji želite da pregledamo.
              </p>
            </div>

            <div className="flex items-center gap-3 py-1">
              <div className="h-px flex-1 bg-cream-dim/15" />
              <span className="font-mono-terminal text-[11px] uppercase tracking-[0.2em] text-cream-dim/40">
                ili
              </span>
              <div className="h-px flex-1 bg-cream-dim/15" />
            </div>

            <div>
              <label className="mb-1.5 block font-mono-terminal text-xs uppercase tracking-[0.15em] text-cream-dim/70">
                Tekst za analizu {url.trim() && "(nije obavezno ako je URL priložen)"}
              </label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={PLACEHOLDERS[mode]}
                rows={10}
                className="w-full resize-y border border-cream-dim/25 bg-navy-900/60 px-4 py-3 font-sans text-sm leading-relaxed text-cream placeholder:text-cream-dim/40 outline-none focus:border-gold"
              />
              <p className="mt-1 font-mono-terminal text-[11px] text-cream-dim/50">
                {text.trim().length} znakova
              </p>
            </div>

            {error && (
              <p className="font-mono-terminal text-sm text-red-400">
                [ greška ] {error}
              </p>
            )}

            <button
              onClick={handleSubmit}
              className="rounded-sm bg-gold px-7 py-3.5 font-mono-terminal text-sm uppercase tracking-[0.15em] text-navy-950 transition hover:bg-gold-light"
            >
              Pošalji na provjeru
            </button>
          </div>

          {/* Confirmation + upsell */}
          {sent && (
            <div className="mt-12 space-y-10">
              <div className="terminal-frame p-6 sm:p-8">
                <p className="font-mono-terminal text-xs uppercase tracking-[0.2em] text-gold">
                  [ Zahtjev poslan ]
                </p>
                <p className="mt-3 font-sans text-sm leading-relaxed text-cream">
                  Otvorili smo vaš mail program s pripremljenom porukom. Ako se
                  nije otvorio automatski, pošaljite upit ručno na{" "}
                  <a
                    href={`mailto:${RECIPIENT}`}
                    className="text-gold underline underline-offset-4"
                  >
                    {RECIPIENT}
                  </a>
                  .
                </p>
                <p className="mt-2 font-sans text-sm leading-relaxed text-cream-dim">
                  Osnovna provjera je besplatna — javljamo se u roku 24–48h.
                  Za detaljniju, prioritetnu analizu pogledajte opcije ispod.
                </p>
              </div>

              <div>
                <p className="font-mono-terminal text-xs uppercase tracking-[0.3em] text-gold">
                  [ Nadogradnja ]
                </p>
                <h2 className="mt-3 font-serif-display text-2xl font-semibold text-cream">
                  Idete korak dalje?
                </h2>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {mode === "gosti" ? (
                    <>
                      <UpgradeForm
                        title="Osobno mišljenje stručnjaka"
                        price="19 €"
                        description="Naš stručnjak ručno pregledava oglas i šalje vam osobnu, detaljnu procjenu prije rezervacije."
                        subject="Zahtjev - Osobno mišljenje stručnjaka (19€)"
                        contextLabel="Naziv objekta"
                        contextValue={propertyName || "nije naveden"}
                      />
                      <UpgradeForm
                        title="Personalizirani plan odmora"
                        price="150 €"
                        description="Kreiranje personaliziranog plana savršenog odmora bez stresa, po vašim osobnim kriterijima, uz mišljenje stručnjaka."
                        subject="Zahtjev - Personalizirani plan odmora (150€)"
                        contextLabel="Naziv objekta"
                        contextValue={propertyName || "nije naveden"}
                      />
                    </>
                  ) : (
                    <UpgradeForm
                      title="Osobni pregled"
                      price="35 €"
                      description="Naš stručnjak ručno pregledava vaš online ugled i šalje vam detaljne preporuke za poboljšanje."
                      subject="Zahtjev - Osobni pregled (35€)"
                      contextLabel="Naziv objekta"
                      contextValue={propertyName || "nije naveden"}
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
