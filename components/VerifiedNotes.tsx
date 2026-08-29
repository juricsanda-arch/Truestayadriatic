import type { AnalysisResult, FlagTone } from "@/lib/types";

const LEVEL_STYLES: Record<AnalysisResult["level"], { border: string; text: string; bar: string }> = {
  low: { border: "border-emerald-500/40", text: "text-emerald-400", bar: "bg-emerald-500/70" },
  medium: { border: "border-gold/50", text: "text-gold", bar: "bg-gold/70" },
  high: { border: "border-red-500/40", text: "text-red-400", bar: "bg-red-500/70" },
};

const TONE_STYLES: Record<FlagTone, { text: string; dot: string; tag: string }> = {
  warning: { text: "text-red-400", dot: "bg-red-500", tag: "UPOZORENJE" },
  good: { text: "text-emerald-400", dot: "bg-emerald-500", tag: "DOBAR ZNAK" },
  neutral: { text: "text-cream-dim", dot: "bg-cream-dim/60", tag: "NAPOMENA" },
};

export default function VerifiedNotes({ result }: { result: AnalysisResult }) {
  const levelStyle = LEVEL_STYLES[result.level];

  return (
    <div className="terminal-frame font-mono-terminal text-sm text-cream-dim">
      <div className="flex items-center justify-between border-b border-gold/20 px-5 py-3">
        <span className="text-xs uppercase tracking-[0.2em] text-gold">
          [ verified_notes.log ]
        </span>
        <span className="text-xs uppercase tracking-[0.15em] text-cream-dim/50">
          truestay // forensic scan
        </span>
      </div>

      <div className="space-y-6 px-5 py-6 sm:px-7">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-cream-dim/60">
            &gt; razina_pažnje
          </span>
          <div className={`mt-2 inline-flex items-center gap-2 border px-3 py-1.5 ${levelStyle.border}`}>
            <span className={`h-2 w-2 rounded-full ${levelStyle.bar}`} />
            <span className={`text-sm font-medium tracking-wide ${levelStyle.text}`}>
              [{result.level.toUpperCase()}] {result.level_label}
            </span>
          </div>
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-cream-dim/60">
            &gt; sažetak
          </span>
          <p className="mt-2 leading-relaxed text-cream">{result.summary}</p>
        </div>

        {result.flags.length > 0 && (
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-cream-dim/60">
              &gt; zapažanja [{result.flags.length}]
            </span>
            <ul className="mt-3 space-y-3">
              {result.flags.map((flag, i) => {
                const toneStyle = TONE_STYLES[flag.tone];
                return (
                  <li
                    key={`${flag.label}-${i}`}
                    className="border-l-2 border-gold/20 pl-4"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`h-1.5 w-1.5 rounded-full ${toneStyle.dot}`} />
                      <span className={`text-xs tracking-[0.1em] ${toneStyle.text}`}>
                        [{toneStyle.tag}]
                      </span>
                      <span className="text-cream">{flag.label}</span>
                    </div>
                    <p className="mt-1 text-cream-dim">{flag.detail}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {result.actions.length > 0 && (
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-cream-dim/60">
              &gt; preporučeni_koraci
            </span>
            <ul className="mt-3 space-y-2">
              {result.actions.map((action, i) => (
                <li key={i} className="flex gap-2 text-cream">
                  <span className="text-gold">{`0${i + 1}`.slice(-2)}.</span>
                  <span>{action}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="cursor-blink border-t border-gold/10 pt-4 text-xs text-cream-dim/50">
          end_of_scan
        </p>
      </div>
    </div>
  );
}
