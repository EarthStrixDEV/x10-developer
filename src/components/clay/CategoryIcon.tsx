import type { LucideIcon } from "lucide-react";

interface CategoryIconProps {
  icon: LucideIcon;
  className?: string;
  /** Overrides the default `bg-orange` badge fill — used for per-category
   *  accent tinting. Must be a literal Tailwind class, never interpolated. */
  backgroundClassName?: string;
  /** Overrides the default `w-14 h-14` badge size — a dedicated prop
   *  (rather than relying on `className` override order) since Tailwind's
   *  generated-stylesheet cascade doesn't reliably respect JSX
   *  string-concatenation order for conflicting size utilities. */
  sizeClassName?: string;
}

/**
 * Circular embossed badge used atop each category card: flat orange
 * background, small-scale clay shadow, light icon centered for contrast.
 * No border — the shadow alone defines the edge.
 */
export function CategoryIcon({
  icon: Icon,
  className = "",
  backgroundClassName = "bg-orange",
  sizeClassName = "w-14 h-14",
}: CategoryIconProps) {
  return (
    <div
      className={`${sizeClassName} flex items-center justify-center ${backgroundClassName} rounded-clay-full shadow-clay-raised-sm ${className}`}
    >
      <Icon size={26} className="text-cream-light" />
    </div>
  );
}
