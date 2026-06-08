import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale";

type AnimateInProps = {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
};

export function AnimateIn({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 700,
  className,
  style,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("animate-on-scroll", `animate-${variant}`, visible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms`, ...style }}
    >
      {children}
    </div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  variant?: Variant;
};

export function StaggerChildren({ children, className, stagger = 100, variant = "fade-up" }: StaggerProps) {
  const items = Array.isArray(children) ? children : [children];

  return (
    <div className={className}>
      {items.map((child, i) => (
        <AnimateIn key={i} variant={variant} delay={i * stagger}>
          {child}
        </AnimateIn>
      ))}
    </div>
  );
}
