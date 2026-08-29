"use client";

import { useState, type FormEvent } from "react";

interface UpgradeFormProps {
  title: string;
  price: string;
  description: string;
  subject: string;
  contextLabel?: string;
  contextValue?: string;
  ctaLabel?: string;
}

const RECIPIENT = "truestay.info@gmail.com";

export default function UpgradeForm({
  title,
  price,
  description,
  subject,
  contextLabel,
  contextValue,
  ctaLabel = "Pošalji zahtjev",
}: UpgradeFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const bodyLines = [
      `Ime i prezime: ${name || "—"}`,
      `Email za odgovor: ${email || "—"}`,
    ];
    if (contextLabel && contextValue) {
      bodyLines.push(`${contextLabel}: ${contextValue}`);
    }
    bodyLines.push("", "Napomena:", note || "—");

    const mailto = `mailto:${RECIPIENT}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
    setSent(true);
  }

  return (
    <div className="border border-gold/25 bg-navy-900/60 p-6 sm:p-7">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-serif-display text-xl font-semibold text-cream">
          {title}
        </h3>
        <span className="font-mono-terminal text-sm text-gold">{price}</span>
      </div>
      <p className="mt-2 font-sans text-sm leading-relaxed text-cream-dim">
        {description}
      </p>

      <form onSubmit={handleSubmit} className="mt-5 space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            type="text"
            required
            placeholder="Ime i prezime"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-cream-dim/25 bg-navy-950 px-3 py-2.5 font-sans text-sm text-cream placeholder:text-cream-dim/40 outline-none focus:border-gold"
          />
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-cream-dim/25 bg-navy-950 px-3 py-2.5 font-sans text-sm text-cream placeholder:text-cream-dim/40 outline-none focus:border-gold"
          />
        </div>
        <textarea
          placeholder="Napomena (nije obavezno)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={3}
          className="w-full resize-none border border-cream-dim/25 bg-navy-950 px-3 py-2.5 font-sans text-sm text-cream placeholder:text-cream-dim/40 outline-none focus:border-gold"
        />

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            className="rounded-sm bg-gold px-5 py-2.5 font-mono-terminal text-xs uppercase tracking-[0.15em] text-navy-950 transition hover:bg-gold-light"
          >
            {ctaLabel}
          </button>
          <p className="font-mono-terminal text-[11px] text-cream-dim/60">
            Otvara e-mail klijent · plaćanje dodajemo uskoro
          </p>
        </div>

        {sent && (
          <p className="font-mono-terminal text-xs text-emerald-400">
            ✓ Priprema e-maila za {RECIPIENT} — provjerite svoj mail program.
          </p>
        )}
      </form>
    </div>
  );
}
