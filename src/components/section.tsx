import type { ReactNode } from "react";
import { AnimateIn } from "./animate-in";

export function SectionLabel({ number, children }: { number?: string; children: ReactNode }) {
  return (
    <AnimateIn variant="fade-in" duration={500}>
      <div className="flex items-center gap-4 text-sm uppercase tracking-[0.25em] text-[color:var(--sand)] md:text-base">
        {number && <span className="font-display text-2xl text-[color:var(--ink)]/50 md:text-3xl">{number}</span>}
        <span className="h-px w-10 bg-[color:var(--sand)] md:w-12" />
        <span className="font-medium text-[color:var(--ink)]/70">{children}</span>
      </div>
    </AnimateIn>
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
    <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-12 md:pt-28">
      <div
        className="pointer-events-none absolute right-6 top-16 h-32 w-32 opacity-20"
        aria-hidden
        style={{
          backgroundImage: "radial-gradient(circle, var(--sand) 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />
      {eyebrow && (
        <AnimateIn variant="fade-in" duration={500}>
          <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-[color:var(--sand)]">{eyebrow}</p>
        </AnimateIn>
      )}
      <AnimateIn variant="fade-up" delay={80}>
        <h1 className="font-display text-4xl leading-[1.05] text-[color:var(--ink)] md:text-6xl">{title}</h1>
      </AnimateIn>
      {intro && (
        <AnimateIn variant="fade-up" delay={160}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[color:var(--ink)]/80">{intro}</p>
        </AnimateIn>
      )}
    </div>
  );
}
