import type { ReactNode } from "react";

interface ClayCardProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

/**
 * Base clay surface: cream background, high radius, soft embossed
 * double-shadow. No border — the shadow alone defines the edge.
 */
export function ClayCard({ children, className = "", id }: ClayCardProps) {
  return (
    <div
      id={id}
      className={`bg-cream rounded-clay-lg shadow-clay-raised transition-all duration-200 hover:shadow-clay-pressed hover:translate-y-0.5 ${className}`}
    >
      {children}
    </div>
  );
}
