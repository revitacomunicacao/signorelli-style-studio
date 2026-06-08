import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconBoxProps = {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: "h-10 w-10 [&_svg]:h-4 [&_svg]:w-4",
  md: "h-14 w-14 [&_svg]:h-6 [&_svg]:w-6",
  lg: "h-16 w-16 [&_svg]:h-7 [&_svg]:w-7",
};

export function IconBox({ icon: Icon, size = "md", className }: IconBoxProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-sm border border-[color:var(--sand)]/40 bg-[color:var(--muted)]/60 text-[color:var(--ink)] transition-all duration-500 group-hover:border-[color:var(--sand)] group-hover:bg-[color:var(--sand)]/20",
        sizes[size],
        className,
      )}
    >
      <Icon strokeWidth={1.25} />
    </div>
  );
}
