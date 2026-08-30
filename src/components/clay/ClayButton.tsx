import type { ButtonHTMLAttributes } from "react";

interface ClayButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "cream" | "orange";
  className?: string;
}

/**
 * Generic clickable clay surface: high radius, soft embossed shadow at
 * rest that tucks inward on hover/press to fake being pushed into the
 * clay. No border, no gradient — shadow alone defines the edge.
 */
export function ClayButton({
  variant = "cream",
  className = "",
  children,
  ...rest
}: ClayButtonProps) {
  const bg = variant === "orange" ? "bg-orange" : "bg-cream";

  return (
    <button
      className={`${bg} rounded-clay-lg shadow-clay-raised transition-all duration-200 hover:shadow-clay-pressed hover:translate-y-0.5 active:shadow-clay-pressed active:translate-y-0.5 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
