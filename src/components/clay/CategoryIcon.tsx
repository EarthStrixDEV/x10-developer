import type { LucideIcon } from "lucide-react";

interface CategoryIconProps {
  icon: LucideIcon;
  className?: string;
}

/**
 * Circular embossed badge used atop each category card: flat orange
 * background, small-scale clay shadow, light icon centered for contrast.
 * No border — the shadow alone defines the edge.
 */
export function CategoryIcon({ icon: Icon, className = "" }: CategoryIconProps) {
  return (
    <div
      className={`w-14 h-14 flex items-center justify-center bg-orange rounded-clay-full shadow-clay-raised-sm ${className}`}
    >
      <Icon size={26} className="text-cream-light" />
    </div>
  );
}
