import { ClayCard } from "./clay/ClayCard";
import { CategoryIcon } from "./clay/CategoryIcon";
import { ShortcutRow } from "./ShortcutRow";
import { AnimatedContent } from "./reactbits/AnimatedContent";
import type { Category } from "../data/shortcuts";

interface CategorySectionProps {
  category: Category;
  os: "windows" | "mac";
  /** Position of this category in the currently-rendered list — used to
   *  compute a per-card stagger delay so cards don't all pop in at once. */
  index: number;
}

/**
 * Renders one Category as a ClayCard: a header row (CategoryIcon + title)
 * followed by its list of ShortcutRows, spaced apart rather than divided
 * by hard borders. The whole card is wrapped in AnimatedContent so it
 * fades/slides in with a stagger delay based on its position in the grid.
 */
export function CategorySection({ category, os, index }: CategorySectionProps) {
  return (
    <AnimatedContent delay={index * 0.08}>
      <ClayCard id={category.id} className="scroll-mt-24 p-6">
        <div className="flex items-center gap-4">
          <CategoryIcon icon={category.icon} />
          <h2
            className="text-charcoal text-xl font-semibold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {category.title}
          </h2>
        </div>

        <div className="mt-6 flex flex-col gap-5">
          {category.shortcuts.map((shortcut) => (
            <ShortcutRow key={shortcut.id} shortcut={shortcut} os={os} />
          ))}
        </div>
      </ClayCard>
    </AnimatedContent>
  );
}
