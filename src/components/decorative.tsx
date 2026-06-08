import { cn } from "@/lib/utils";

export function GridPattern({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 opacity-[0.35]", className)}
      aria-hidden
      style={{
        backgroundImage:
          "linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />
  );
}

export function CornerAccent({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute h-16 w-16 border-t border-l border-[color:var(--sand)]", className)} aria-hidden />
  );
}

export function SectionDivider() {
  return (
    <div className="mx-auto flex max-w-6xl items-center gap-4 px-6" aria-hidden>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[color:var(--sand)] to-transparent" />
      <div className="h-1.5 w-1.5 rotate-45 border border-[color:var(--sand)]" />
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[color:var(--sand)] to-transparent" />
    </div>
  );
}

export function FloatingLine({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute h-px w-24 bg-gradient-to-r from-[color:var(--sand)] to-transparent animate-float-line", className)}
      aria-hidden
    />
  );
}
