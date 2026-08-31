import { Link } from "react-router-dom";
import { ClayCard } from "./clay/ClayCard";
import { CategoryIcon } from "./clay/CategoryIcon";
import { getCategoryAccent } from "../data/categoryAccents";
import { useTranslation } from "../i18n/useTranslation";
import type { Category } from "../data/shortcuts";

interface CategoryIndexCardProps {
  category: Category;
  /** Always the category's TRUE total shortcut count — passed explicitly
   *  (not derived from `category.shortcuts.length` in here) so a
   *  search-filtered category object can never shrink the displayed count. */
  shortcutCount: number;
}

/**
 * One card in the Home page's category index grid: icon badge, title,
 * shortcut count, and a "view all" affordance, tinted per the category's
 * accent from categoryAccents.ts. The whole card links to the category's
 * detail page.
 */
export function CategoryIndexCard({ category, shortcutCount }: CategoryIndexCardProps) {
  const { t } = useTranslation();
  const accent = getCategoryAccent(category.id);

  return (
    <Link to={`/category/${category.id}`} className="block">
      <ClayCard
        backgroundClassName={accent.cardBgClass}
        className="flex min-h-[158px] flex-col gap-3.5 p-6"
      >
        <CategoryIcon
          icon={category.icon}
          backgroundClassName={accent.iconBgClass}
          sizeClassName="h-12 w-12"
        />

        <div>
          <h3
            className={`${accent.titleColorClass} mb-1 text-lg font-semibold`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            {category.title}
          </h3>
          <p className={`${accent.countColorClass} text-sm`}>
            {t.categoryShortcutCount(shortcutCount)}
          </p>
        </div>

        <span className={`${accent.viewAllColorClass} mt-auto self-end text-sm font-bold`}>
          {t.viewAllAffordance} →
        </span>
      </ClayCard>
    </Link>
  );
}
