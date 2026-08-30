interface KeyBadgeProps {
  label: string;
  tone?: "orange" | "cream";
  className?: string;
}

/**
 * Renders a single keyboard key token (e.g. "Ctrl", "←", "Win") as a
 * small tactile keycap. Smaller radius than ClayCard, uses the baked-in
 * bottom-edge shadow-key utility for depth. No border, no gradient.
 */
export function KeyBadge({ label, tone = "cream", className = "" }: KeyBadgeProps) {
  const bg = tone === "orange" ? "bg-orange" : "bg-cream";
  const text = tone === "orange" ? "text-cream-light" : "text-charcoal";

  return (
    <span
      className={`${bg} ${text} rounded-clay-sm shadow-key transition-all duration-200 hover:shadow-key-pressed hover:translate-y-0.5 inline-flex items-center px-2.5 py-1 text-sm font-medium ${className}`}
    >
      {label}
    </span>
  );
}
