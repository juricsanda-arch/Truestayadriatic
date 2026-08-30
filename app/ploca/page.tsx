import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlocaForm from "@/components/PlocaForm";
import { getSupabaseServerClient } from "@/lib/supabase";
import type { BoardMessage } from "@/lib/supabase";

export const metadata = {
  title: "Ploča poruka — TrueStay Adriatic",
  description:
    "Gosti i vlasnici dijele ideje za unapređenje turizma i ugostiteljstva na Jadranu.",
};

export const revalidate = 0;

const ROLE_LABEL: Record<BoardMessage["role"], string> = {
  gost: "Gost",
  vlasnik: "Vlasnik",
};

async function getApprovedMessages(): Promise<BoardMessage[]> {
  const supabase = getSupabaseServerClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("approved", true)
    .order("created_at", { ascending: false })
    .limit(100);

  if (error) {
    console.error("Fetch messages error:", error);
    return [];
  }

  return data as BoardMessage[];
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("hr-HR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function PlocaPage() {
  const messages = await getApprovedMessages();

  return (
    <div className="flex flex-1 flex-col">
      <Header />

      <main className="flex-1 bg-texture bg-navy-950">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
          <p className="font-mono-terminal text-xs uppercase tracking-[0.3em] text-gold">
            Ploča poruka
          </p>
          <h1 className="mt-4 font-serif-display text-4xl font-semibold text-cream sm:text-5xl">
            Gosti i vlasnici, jedni drugima
          </h1>
          <p className="mt-4 max-w-2xl font-sans text-cream-dim">
            Mjesto za ideje, iskustva i prijedloge za bolji turizam na
            Jadranu — od gostiju vlasnicima, i obrnuto. Svaka poruka prolazi
            kratki pregled prije objave.
          </p>

          <div className="mt-10">
            <PlocaForm />
          </div>

          <div className="mt-14 space-y-5">
            {messages.length === 0 ? (
              <p className="font-mono-terminal text-sm text-cream-dim/60">
                Još nema objavljenih poruka — budite prvi.
              </p>
            ) : (
              messages.map((m) => (
                <div
                  key={m.id}
                  className="border-l-2 border-gold/25 bg-navy-900/40 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono-terminal text-[11px] uppercase tracking-[0.15em] text-gold">
                      [{ROLE_LABEL[m.role]}]
                    </span>
                    {m.name && (
                      <span className="font-sans text-sm text-cream">{m.name}</span>
                    )}
                    <span className="font-mono-terminal text-[11px] text-cream-dim/50">
                      {formatDate(m.created_at)}
                    </span>
                  </div>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-cream-dim">
                    {m.message}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
