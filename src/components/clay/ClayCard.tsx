import type { ReactNode } from "react";

interface ClayCardProps {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Overrides the default `bg-cream` surface — used for accent-colored
   *  category cards. Must be a literal Tailwind class (e.g. "bg-mint-light"),
   *  never string-interpolated, so Tailwind's JIT scanner can find it. */
  backgroundClassName?: string;
}

/**
 * Base clay surface: cream background, high radius, soft embossed
 * double-shadow. No border — the shadow alone defines the edge.
 */
export function ClayCard({
  children,
  className = "",
  id,
  backgroundClassName = "bg-cream",
}: ClayCardProps) {
  return (
    <div
      id={id}
      className={`${backgroundClassName} rounded-clay-lg shadow-clay-raised transition-all duration-200 hover:shadow-clay-pressed hover:translate-y-0.5 ${className}`}
    >
      {children}
    </div>
  );
}
