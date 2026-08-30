"use client";

import { useState } from "react";

const ROLES: { id: "gost" | "vlasnik"; label: string }[] = [
  { id: "gost", label: "Gost" },
  { id: "vlasnik", label: "Vlasnik / pružatelj usluga" },
];

export default function PlocaForm() {
  const [role, setRole] = useState<"gost" | "vlasnik">("gost");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  async function handleSubmit() {
    setError(null);

    if (message.trim().length < 5) {
      setError("Poruka je prekratka — napišite barem nekoliko riječi.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/poruke", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role, name, message }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data?.error ?? "Slanje poruke nije uspjelo. Pokušajte ponovno.");
        return;
      }

      setSent(true);
      setMessage("");
      setName("");
    } catch {
      setError("Greška u vezi sa serverom. Provjerite internetsku vezu i pokušajte ponovno.");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="terminal-frame p-6 sm:p-8">
        <p className="font-mono-terminal text-xs uppercase tracking-[0.2em] text-gold">
          [ Poruka poslana ]
        </p>
        <p className="mt-3 font-sans text-sm leading-relaxed text-cream">
          Hvala! Vaša poruka čeka pregled i pojavit će se na ploči čim bude
          odobrena.
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
          disabled={loading}
          className="rounded-sm bg-gold px-6 py-3 font-mono-terminal text-xs uppercase tracking-[0.15em] text-navy-950 transition hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Šaljem…" : "Pošalji poruku"}
        </button>
      </div>
    </div>
  );
}
