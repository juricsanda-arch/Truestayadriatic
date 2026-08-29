import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryGrid from "@/components/CategoryGrid";

interface TrustLayer {
  label: string;
  title: string;
  description: string;
  price: string;
  href: string;
  cta: string;
  secondaryHref?: string;
  secondaryCta?: string;
}

const trustLayers: TrustLayer[] = [
  {
    label: "Sloj 01",
    title: "Za goste",
    description:
      "Stručna provjera oglasa prije rezervacije. Članarina i personalizirani pronalazak ili planiranje odmora po osobnim kriterijima.",
    price: "od 4,00 €/mj ili 30 €/sezona",
    href: "/provjera?mod=gosti",
    cta: "Provjeri oglas",
  },
  {
    label: "Sloj 02",
    title: "Za pružatelje usluga",
    description:
      "Stručni izvještaj o online ugledu, za sve djelatnosti u turizmu i ugostiteljstvu — sustavna analiza recenzija, spomena i digitalnog otiska vašeg objekta.",
    price: "30–49 € po izvještaju",
    href: "/provjera?mod=pruzatelji",
    cta: "Naruči izvještaj",
    secondaryHref: "/ponuda",
    secondaryCta: "Pogledajte pune pakete",
  },
  {
    label: "Sloj 03",
    title: "Za destinacije",
    description:
      "Verified video sustav i AI Concierge za gradove i turističke zajednice — vizualna vjerodostojnost na razini destinacije.",
    price: "od 1.999 €",
    href: "mailto:truestay.info@gmail.com?subject=Upit%20-%20Verified%20video%20sustav%20za%20destinaciju",
    cta: "Zatraži ponudu",
  },
];

const gallery = [
  { tag: "Verified Stay", desc: "Provjeren smještaj, bez filtera" },
  { tag: "Hero", desc: "Uvodni destinacijski kadar" },
  { tag: "Gastro Short", desc: "Autentična gastro priča, 30s" },
  { tag: "Coast Short", desc: "Obala u stvarnom svjetlu" },
  { tag: "Konoba Story", desc: "Verificirana priča domaćina" },
  { tag: "Hotel Story", desc: "Hotelski doživljaj, bez uljepšavanja" },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="bg-texture relative overflow-hidden border-b border-gold/15 bg-navy-950">
          <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
            <p className="font-mono-terminal text-xs uppercase tracking-[0.3em] text-gold">
              [ Sustav digitalnog povjerenja ]
            </p>

            <h1 className="mt-6 font-serif-display text-5xl leading-[1.05] font-semibold text-cream sm:text-7xl">
              TrueStay <span className="text-gold">Adriatic</span>
            </h1>

            <div className="mt-8 space-y-3 font-serif-display text-xl text-cream-dim sm:text-2xl">
              <p>
                <span className="mr-2 text-gold">🎬</span>The Gold Standard of
                Visual Trust.
              </p>
              <p>
                <span className="mr-2 text-gold">🇭🇷</span>Verifying Croatia,
                one destination at a time.
              </p>
              <p>
                <span className="mr-2 text-gold">✨</span>No filters. No
                lies. Just the truth.
              </p>
            </div>

            <p className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-cream-dim sm:text-lg">
              Verifikacija kvalitete ponude i forenzika vjerodostojnosti za
              cijeli spektar turizma i ugostiteljstva na Jadranu.
            </p>

            <p className="mt-2 font-mono-terminal text-sm uppercase tracking-[0.2em] text-gold">
              Standardizacija digitalnog povjerenja
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/provjera"
                className="rounded-sm bg-gold px-7 py-3.5 font-mono-terminal text-sm uppercase tracking-[0.15em] text-navy-950 transition hover:bg-gold-light"
              >
                Otvori alat za provjeru →
              </Link>
              <Link
                href="#slojevi"
                className="rounded-sm border border-cream-dim/30 px-7 py-3.5 font-mono-terminal text-sm uppercase tracking-[0.15em] text-cream-dim transition hover:border-gold hover:text-gold"
              >
                Istraži slojeve
              </Link>
            </div>
          </div>
        </section>

        {/* DJELATNOSTI */}
        <section id="djelatnosti" className="border-b border-gold/15 bg-navy-950">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
            <p className="font-mono-terminal text-xs uppercase tracking-[0.3em] text-gold">
              [ Djelatnosti ]
            </p>
            <h2 className="mt-4 font-serif-display text-2xl font-semibold text-cream sm:text-3xl">
              Radimo sa svima koji ugošćuju
            </h2>
            <p className="mt-3 max-w-2xl font-sans text-sm text-cream-dim">
              Od privatnog smještaja do nautike — isti standard
              vjerodostojnosti, prilagođen svakoj djelatnosti.
            </p>
            <div className="mt-8">
              <CategoryGrid />
            </div>
          </div>
        </section>

        {/* TRI SLOJA POVJERENJA */}
        <section id="slojevi" className="border-b border-gold/15 bg-navy-900">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
            <div className="max-w-2xl">
              <p className="font-mono-terminal text-xs uppercase tracking-[0.3em] text-gold">
                [ Arhitektura povjerenja ]
              </p>
              <h2 className="mt-4 font-serif-display text-4xl font-semibold text-cream sm:text-5xl">
                Tri sloja povjerenja
              </h2>
              <p className="mt-4 font-sans text-cream-dim">
                Sustav koji povezuje goste, pružatelje usluga i destinacije
                jedinstvenim standardom vjerodostojnosti.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {trustLayers.map((layer) => (
                <div
                  key={layer.title}
                  className="flex flex-col justify-between border border-gold/20 bg-navy-950/60 p-7 transition hover:border-gold/50"
                >
                  <div>
                    <p className="font-mono-terminal text-[11px] uppercase tracking-[0.2em] text-gold/70">
                      {layer.label}
                    </p>
                    <h3 className="mt-3 font-serif-display text-2xl font-semibold text-cream">
                      {layer.title}
                    </h3>
                    <p className="mt-4 font-sans text-sm leading-relaxed text-cream-dim">
                      {layer.description}
                    </p>
                  </div>

                  <div className="mt-8">
                    <p className="font-mono-terminal text-sm text-gold">
                      {layer.price}
                    </p>
                    <Link
                      href={layer.href}
                      className="mt-4 inline-flex items-center gap-2 font-sans text-sm text-cream underline decoration-gold/40 underline-offset-4 transition hover:text-gold hover:decoration-gold"
                    >
                      {layer.cta} <span aria-hidden>→</span>
                    </Link>
                    {layer.secondaryHref && layer.secondaryCta && (
                      <Link
                        href={layer.secondaryHref}
                        className="mt-2 block font-sans text-xs text-cream-dim underline decoration-cream-dim/30 underline-offset-4 transition hover:text-gold hover:decoration-gold"
                      >
                        {layer.secondaryCta} →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KNJIGA */}
        <section id="knjiga" className="border-b border-gold/15 bg-navy-950">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
            <div className="grid gap-12 sm:grid-cols-[280px_1fr] sm:items-center">
              {/* Naslovnica knjige */}
              <div className="mx-auto aspect-[2/3] w-56 overflow-hidden border border-gold/30 shadow-[0_0_40px_rgba(201,163,90,0.12)] sm:mx-0 sm:w-full">
                <Image
                  src="/kod-jadranske-casti-cover.jpg"
                  alt="Naslovnica knjige Kod jadranske časti — Kome prepuštamo more?"
                  width={1023}
                  height={1382}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>

              <div>
                <p className="font-mono-terminal text-xs uppercase tracking-[0.3em] text-gold">
                  [ Edicija Velebit ]
                </p>
                <h2 className="mt-4 font-serif-display text-4xl font-semibold text-cream sm:text-5xl">
                  Kod jadranske časti
                </h2>
                <p className="mt-5 max-w-xl font-sans leading-relaxed text-cream-dim">
                  Priča o vrijednostima koje stoje iza svakog verificiranog
                  smještaja na Jadranu — o časti, gostoprimstvu i istini kao
                  temelju povjerenja. Prvo izdanje u nizu Edicije Velebit, koje
                  prati misiju TrueStay Adriatic sustava.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <p className="font-serif-display text-3xl text-gold">
                    9,99 €
                  </p>
                  <a
                    href="https://payhip.com/b/6Yzvn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm border border-gold px-6 py-3 font-mono-terminal text-sm uppercase tracking-[0.15em] text-gold transition hover:bg-gold hover:text-navy-950"
                  >
                    Naruči knjigu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GALERIJA */}
        <section id="galerija" className="border-b border-gold/15 bg-navy-900">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
            <div className="max-w-2xl">
              <p className="font-mono-terminal text-xs uppercase tracking-[0.3em] text-gold">
                [ Verificirani materijali ]
              </p>
              <h2 className="mt-4 font-serif-display text-4xl font-semibold text-cream sm:text-5xl">
                Vizualni dokaz istine
              </h2>
              <p className="mt-4 font-sans text-cream-dim">
                Primjeri verificiranih video i foto formata koje TrueStay
                Adriatic standardizira za destinacije i pružatelje usluga.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((item) => (
                <div
                  key={item.tag}
                  className="group relative flex aspect-video flex-col justify-end overflow-hidden border border-gold/20 bg-navy-950 p-5"
                >
                  <div className="bg-texture absolute inset-0 opacity-60 transition group-hover:opacity-90" />
                  <div className="relative">
                    <span className="font-mono-terminal text-[11px] uppercase tracking-[0.2em] text-gold">
                      [ {item.tag} ]
                    </span>
                    <p className="mt-2 font-sans text-sm text-cream-dim">
                      {item.desc}
                    </p>
                  </div>
                  <span className="absolute top-4 right-4 font-mono-terminal text-[10px] uppercase tracking-[0.2em] text-cream-dim/50">
                    Placeholder
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
