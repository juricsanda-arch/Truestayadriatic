import { CATEGORIES } from "@/lib/categories";

export default function CategoryGrid() {
  return (
    <div className="flex flex-wrap gap-2.5">
      {CATEGORIES.map((category) => (
        <span
          key={category.label}
          className="border border-gold/25 bg-navy-950/60 px-3.5 py-2 font-mono-terminal text-xs tracking-[0.05em] text-cream-dim"
        >
          <span className="text-gold/70">[</span> {category.label}{" "}
          <span className="text-gold/70">]</span>
        </span>
      ))}
    </div>
  );
}
