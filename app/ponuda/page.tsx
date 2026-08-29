import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryGrid from "@/components/CategoryGrid";
import { OFFER_PACKAGES } from "@/lib/offers";

export const metadata = {
  title: "Ponuda za vlasnike — TrueStay Adriatic",
  description:
    "TrueStay Adriatic paketi za vlasnike smještaja: Quick Check, Reality Check, Reputation Report i Content Experience.",
};

const FUNNEL_STEPS = [
  { name: "Quick Check", note: "prvi korak, brza dijagnostika" },
  { name: "Reality Check", note: "fizička provjera na licu mjesta" },
  { name: "Reputation Report", note: "dubinska analiza recenzija" },
  { name: "Content Experience", note: "sadržaj iz perspektive gosta" },
  { name: "TrueStay Annual", note: "kontinuirano partnerstvo" },
];

function mailtoFor(pkg: { name: string; price: string }) {
  const subject = `Upit — ${pkg.name}`;
  const body = [
    `Zanima me paket ${pkg.name} (${pkg.price}).`,
    "",
    "Naziv objekta:",
    "Booking / Google / Instagram poveznice:",
    "Napomena:",
  ].join("\n");
  return `mailto:truestay.info@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function PonudaPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="bg-texture border-b border-gold/15 bg-navy-950">
          <div className="mx-auto max-w-4xl px-6 py-20 sm:px-10 sm:py-28">
            <p className="font-mono-terminal text-xs uppercase tracking-[0.3em] text-gold">
              [ Ponuda za vlasnike ]
            </p>
            <h1 className="mt-6 font-serif-display text-4xl leading-tight font-semibold text-cream sm:text-6xl">
              See your property through your guest&rsquo;s eyes.
            </h1>
            <p className="mt-8 max-w-2xl font-sans text-lg leading-relaxed text-cream-dim">
              Ne prodajemo &ldquo;video verifikaciju&rdquo;. Pokazujemo vam
              što vaš gost stvarno vidi, čuje i doživi — prije nego što ode
              na Booking i napiše recenziju.
            </p>
            <p className="mt-4 max-w-2xl font-sans text-cream-dim">
              Svugdje gdje gost donosi odluku prije nego što uopće dođe.
              Četiri jasna paketa, bez čekanja na natječaje ili velike
              institucije — od brze digitalne dijagnostike do potpune
              produkcije sadržaja iz perspektive gosta.
            </p>

            <div className="mt-10">
              <CategoryGrid />
            </div>
          </div>
        </section>

        {/* PACKAGES */}
        <section className="border-b border-gold/15 bg-navy-900">
          <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10 sm:py-28">
            <div className="space-y-14">
              {OFFER_PACKAGES.map((pkg, i) => (
                <div
                  key={pkg.id}
                  className="border border-gold/20 bg-navy-950/60 p-7 sm:p-10"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-gold/15 pb-6">
                    <div>
                      <p className="font-mono-terminal text-[11px] uppercase tracking-[0.2em] text-gold/70">
                        Paket {`0${i + 1}`.slice(-2)}
                      </p>
                      <h2 className="mt-2 font-serif-display text-2xl font-semibold text-cream sm:text-3xl">
                        {pkg.name}
                      </h2>
                    </div>
                    <div className="text-right">
                      <p className="font-serif-display text-3xl text-gold">{pkg.price}</p>
                      <p className="font-mono-terminal text-xs uppercase tracking-[0.15em] text-cream-dim/60">
                        {pkg.turnaround}
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 font-sans text-sm leading-relaxed text-cream-dim">
                    {pkg.forWhom}
                  </p>

                  <div className="mt-8 grid gap-8 sm:grid-cols-2">
                    <div>
                      <p className="font-mono-terminal text-xs uppercase tracking-[0.15em] text-gold">
                        Što nam pošaljete
                      </p>
                      <ul className="mt-3 space-y-1.5 font-sans text-sm text-cream-dim">
                        {pkg.whatYouSend.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-gold">·</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="font-mono-terminal text-xs uppercase tracking-[0.15em] text-gold">
                        Što dobivate
                      </p>
                      <ul className="mt-3 space-y-1.5 font-sans text-sm text-cream-dim">
                        {pkg.included.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-gold">·</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-gold/10 pt-6">
                    <p className="font-mono-terminal text-xs uppercase tracking-[0.15em] text-gold">
                      Format izvještaja / videa
                    </p>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-cream">
                      {pkg.deliverable}
                    </p>
                  </div>

                  <a
                    href={mailtoFor(pkg)}
                    className="mt-8 inline-flex items-center gap-2 rounded-sm border border-gold px-6 py-3 font-mono-terminal text-xs uppercase tracking-[0.15em] text-gold transition hover:bg-gold hover:text-navy-950"
                  >
                    Naruči {pkg.name} <span aria-hidden>→</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FUNNEL / ANNUAL */}
        <section className="border-b border-gold/15 bg-navy-950">
          <div className="mx-auto max-w-4xl px-6 py-20 sm:px-10 sm:py-28">
            <p className="font-mono-terminal text-xs uppercase tracking-[0.3em] text-gold">
              [ Kako klijenti obično napreduju ]
            </p>
            <h2 className="mt-4 font-serif-display text-3xl font-semibold text-cream sm:text-4xl">
              Od brze dijagnostike do stalnog partnerstva
            </h2>

            <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-4 font-mono-terminal text-sm">
              {FUNNEL_STEPS.map((step, i) => (
                <div key={step.name} className="flex items-center gap-3">
                  <div className="border border-gold/30 px-4 py-2 text-cream">
                    <span className="text-gold">{step.name}</span>
                    <span className="ml-2 hidden text-xs text-cream-dim/60 sm:inline">
                      — {step.note}
                    </span>
                  </div>
                  {i < FUNNEL_STEPS.length - 1 && (
                    <span className="text-gold/50" aria-hidden>
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-14 border border-gold/25 bg-navy-900/60 p-8 sm:p-10">
              <p className="font-mono-terminal text-xs uppercase tracking-[0.2em] text-gold">
                Nadogradnja
              </p>
              <h3 className="mt-3 font-serif-display text-2xl font-semibold text-cream">
                TrueStay Annual
              </h3>
              <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-cream-dim">
                Kontinuirano mjesečno praćenje reputacije, kvartalni audit
                objekta i redovita produkcija sadržaja — jedan partner koji
                brine da vaš objekt uvijek izgleda onako kako gost stvarno
                očekuje.
              </p>
              <p className="mt-4 font-serif-display text-xl text-gold">od 1.000 €/god</p>
              <a
                href="mailto:truestay.info@gmail.com?subject=Upit%20-%20TrueStay%20Annual"
                className="mt-6 inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3 font-mono-terminal text-xs uppercase tracking-[0.15em] text-navy-950 transition hover:bg-gold-light"
              >
                Zatraži ponudu <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
