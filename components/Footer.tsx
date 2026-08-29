export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-navy-900">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-10">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-serif-display text-lg text-cream">
              TrueStay <span className="text-gold">Adriatic</span>
            </p>
            <p className="mt-3 max-w-xs font-sans text-sm leading-relaxed text-cream-dim">
              Hrvatski sustav digitalnog povjerenja u turizmu. Standardizacija
              vjerodostojnosti smještaja i destinacijske ponude.
            </p>
          </div>

          <div>
            <p className="font-mono-terminal text-xs uppercase tracking-[0.2em] text-gold">
              Kontakt
            </p>
            <div className="mt-3 space-y-1.5 font-sans text-sm text-cream-dim">
              <p>Sanda Jurić</p>
              <a
                href="mailto:truestay.info@gmail.com"
                className="block transition hover:text-gold"
              >
                truestay.info@gmail.com
              </a>
            </div>
          </div>

          <div>
            <p className="font-mono-terminal text-xs uppercase tracking-[0.2em] text-gold">
              Izdavač
            </p>
            <p className="mt-3 font-sans text-sm text-cream-dim">
              Plava produkcija j.d.o.o.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-gold/10 pt-6 font-mono-terminal text-[11px] uppercase tracking-[0.15em] text-cream-dim/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TrueStay Adriatic · Plava produkcija j.d.o.o.</p>
          <p className="text-gold/70">No filters. No lies. Just the truth.</p>
        </div>
      </div>
    </footer>
  );
}
