"use client";

import { useState } from "react";

const RECIPIENT = "truestay.info@gmail.com";

const ROLES: { id: "gost" | "vlasnik"; label: string }[] = [
  { id: "gost", label: "Gost" },
  { id: "vlasnik", label: "Vlasnik / pružatelj usluga" },
];

export default function PlocaForm() {
  const [role, setRole] = useState<"gost" | "vlasnik">("gost");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function handleSubmit() {
    setError(null);

    if (message.trim().length < 5) {
      setError("Poruka je prekratka — napišite barem nekoliko riječi.");
      return;
    }

    const roleLabel = role === "gost" ? "Gost" : "Vlasnik / pružatelj usluga";
    const subject = `Poruka za ploču — ${roleLabel}`;
    const bodyLines = [
      `Uloga: ${roleLabel}`,
      `Ime: ${name.trim() || "— (anonimno)"}`,
      "",
      "Poruka:",
      message.trim(),
    ];
    const mailto = `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
    setSent(true);
    setMessage("");
    setName("");
  }

  if (sent) {
    return (
      <div className="terminal-frame p-6 sm:p-8">
        <p className="font-mono-terminal text-xs uppercase tracking-[0.2em] text-gold">
          [ Poruka poslana ]
        </p>
        <p className="mt-3 font-sans text-sm leading-relaxed text-cream">
          Otvorili smo vaš mail program s pripremljenom porukom. Nakon
          pregleda, poruka se može objaviti na ploči.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-5 font-mono-terminal text-xs uppercase tracking-[0.15em] text-gold underline underline-offset-4"
        >
          Pošalji još jednu poruku
        </button>
      </div>
    );
  }

  return (
    <div className="border border-gold/20 bg-navy-900/60 p-6 sm:p-8">
      <div className="flex gap-2 border-b border-gold/20">
        {ROLES.map((r) => (
          <button
            key={r.id}
            onClick={() => setRole(r.id)}
            className={`px-4 py-2.5 font-mono-terminal text-xs uppercase tracking-[0.15em] transition ${
              role === r.id
                ? "border-b-2 border-gold text-gold"
                : "text-cream-dim hover:text-cream"
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <label className="mb-1.5 block font-mono-terminal text-xs uppercase tracking-[0.15em] text-cream-dim/70">
            Ime (nije obavezno)
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="npr. Ana, gošća s Hvara"
            className="w-full border border-cream-dim/25 bg-navy-950 px-4 py-3 font-sans text-sm text-cream placeholder:text-cream-dim/40 outline-none focus:border-gold"
          />
        </div>

        <div>
          <label className="mb-1.5 block font-mono-terminal text-xs uppercase tracking-[0.15em] text-cream-dim/70">
            Poruka
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={
              role === "gost"
                ? "Što bi ti kao gost poručio/la vlasnicima smještaja i objekata?"
                : "Što bi ti kao vlasnik poručio/la gostima?"
            }
            rows={4}
            className="w-full resize-y border border-cream-dim/25 bg-navy-950 px-4 py-3 font-sans text-sm leading-relaxed text-cream placeholder:text-cream-dim/40 outline-none focus:border-gold"
          />
        </div>

        {error && (
          <p className="font-mono-terminal text-sm text-red-400">[ greška ] {error}</p>
        )}

        <button
          onClick={handleSubmit}
          className="rounded-sm bg-gold px-6 py-3 font-mono-terminal text-xs uppercase tracking-[0.15em] text-navy-950 transition hover:bg-gold-light"
        >
          Pošalji poruku
        </button>
      </div>
    </div>
  );
}
