import type { ReactNode } from "react";

export function SectionLabel({ number, children }: { number?: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-[color:var(--sand)]">
      {number && <span>{number}</span>}
      <span className="h-px w-8 bg-[color:var(--sand)]" />
      <span>{children}</span>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-20 pb-12 md:pt-28">
      {eyebrow && (
        <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-[color:var(--sand)]">{eyebrow}</p>
      )}
      <h1 className="font-display text-4xl leading-[1.05] text-[color:var(--ink)] md:text-6xl">
        {title}
      </h1>
      {intro && (
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[color:var(--ink)]/80">{intro}</p>
      )}
    </div>
  );
}