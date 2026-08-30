import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-navy-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-serif-display text-xl font-semibold tracking-tight text-cream sm:text-2xl">
            TrueStay
          </span>
          <span className="font-mono-terminal text-xs uppercase tracking-[0.25em] text-gold">
            Adriatic
          </span>
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          <Link
            href="/#slojevi"
            className="font-sans text-sm text-cream-dim transition hover:text-gold"
          >
            Slojevi povjerenja
          </Link>
          <Link
            href="/#knjiga"
            className="font-sans text-sm text-cream-dim transition hover:text-gold"
          >
            Knjiga
          </Link>
          <Link
            href="/#galerija"
            className="font-sans text-sm text-cream-dim transition hover:text-gold"
          >
            Verificirano
          </Link>
          <Link
            href="/#djelatnosti"
            className="font-sans text-sm text-cream-dim transition hover:text-gold"
          >
            Djelatnosti
          </Link>
          <Link
            href="/ponuda"
            className="font-sans text-sm text-cream-dim transition hover:text-gold"
          >
            Ponuda za vlasnike
          </Link>
          <Link
            href="/ploca"
            className="font-sans text-sm text-cream-dim transition hover:text-gold"
          >
            Ploča poruka
          </Link>
          <Link
            href="/provjera"
            className="rounded-sm border border-gold px-4 py-2 font-mono-terminal text-xs uppercase tracking-[0.15em] text-gold transition hover:bg-gold hover:text-navy-950"
          >
            Alat za provjeru
          </Link>
        </nav>

        <Link
          href="/provjera"
          className="rounded-sm border border-gold px-3 py-1.5 font-mono-terminal text-[11px] uppercase tracking-[0.1em] text-gold sm:hidden"
        >
          Provjera
        </Link>
      </div>
    </header>
  );
}
