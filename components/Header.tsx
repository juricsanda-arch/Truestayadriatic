"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/#slojevi", label: "Slojevi povjerenja" },
  { href: "/#knjiga", label: "Knjiga" },
  { href: "/#galerija", label: "Verificirano" },
  { href: "/#djelatnosti", label: "Djelatnosti" },
  { href: "/ponuda", label: "Ponuda za vlasnike" },
  { href: "/ploca", label: "Ploča poruka" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-navy-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="group flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-serif-display text-xl font-semibold tracking-tight text-cream sm:text-2xl">
            TrueStay
          </span>
          <span className="font-mono-terminal text-xs uppercase tracking-[0.25em] text-gold">
            Adriatic
          </span>
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm text-cream-dim transition hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/provjera"
            className="rounded-sm border border-gold px-4 py-2 font-mono-terminal text-xs uppercase tracking-[0.15em] text-gold transition hover:bg-gold hover:text-navy-950"
          >
            Alat za provjeru
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Zatvori izbornik" : "Otvori izbornik"}
          aria-expanded={open}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 sm:hidden"
        >
          <span
            className={`h-px w-6 bg-gold transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-gold transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-gold/20 bg-navy-950 px-6 py-4 sm:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-gold/10 py-3 font-sans text-sm text-cream-dim transition hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/provjera"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-sm border border-gold px-4 py-3 text-center font-mono-terminal text-xs uppercase tracking-[0.15em] text-gold transition hover:bg-gold hover:text-navy-950"
          >
            Alat za provjeru
          </Link>
        </nav>
      )}
    </header>
  );
}
