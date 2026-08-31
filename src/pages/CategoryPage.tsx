import { useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, Home as HomeIcon } from "lucide-react";
import { useShortcutFilter } from "../hooks/useShortcutFilter";
import { useLanguage } from "../i18n/useLanguage";
import { useTranslation } from "../i18n/useTranslation";
import { ClayCard } from "../components/clay/ClayCard";
import { CategoryIcon } from "../components/clay/CategoryIcon";
import { ShortcutRow } from "../components/ShortcutRow";
import { SearchBar } from "../components/SearchBar";
import { OSToggle } from "../components/OSToggle";
import { NotFoundPage } from "./NotFoundPage";
import { categories } from "../data/shortcuts";
import type { LayoutContext } from "../components/Layout";

/**
 * Category detail route: breadcrumb, icon+title+count header, a local
 * filter scoped to just this category's shortcuts, the full shortcut list
 * with row dividers, and a prev/next row that wraps around at both ends of
 * the categories array.
 */
export function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { os, setOs } = useOutletContext<LayoutContext>();
  const [language] = useLanguage();
  const { t } = useTranslation();
  const [query, setQuery] = useState("");

  const categoryIndex = categories.findIndex((category) => category.id === categoryId);
  const category = categoryIndex === -1 ? undefined : categories[categoryIndex];

  // Hook must run unconditionally on every render (rules-of-hooks) — falls
  // back to an empty source array when the category doesn't exist, since
  // the not-found render path below never reads `shortcuts` anyway.
  const [filteredCategory] = useShortcutFilter(category ? [category] : [], query, os, language);

  if (!category) {
    return <NotFoundPage />;
  }

  const shortcuts = filteredCategory?.shortcuts ?? [];

  const prevIndex = (categoryIndex - 1 + categories.length) % categories.length;
  const nextIndex = (categoryIndex + 1) % categories.length;
  const prevCategory = categories[prevIndex];
  const nextCategory = categories[nextIndex];

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-4 pb-20 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="text-charcoal-light flex items-center gap-2 pt-8 pb-4 text-sm">
        <Link to="/" className="hover:text-charcoal flex items-center gap-1.5 font-medium transition-colors">
          <HomeIcon size={14} />
          {t.breadcrumbHome}
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-charcoal font-medium">{category.title}</span>
      </nav>

      <div className="flex flex-wrap items-center justify-between gap-4 pb-6">
        <div className="flex items-center gap-4">
          <CategoryIcon icon={category.icon} sizeClassName="h-14 w-14" />
          <div>
            <h1
              className="text-charcoal text-3xl font-semibold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {category.title}
            </h1>
            <p className="text-charcoal-light text-sm">
              {t.categoryShortcutCount(category.shortcuts.length)}
            </p>
          </div>
        </div>

        <OSToggle
          value={os}
          onChange={setOs}
          ariaLabel={t.osToggleAriaLabel}
          windowsLabel={t.osToggleWindows}
          macLabel={t.osToggleMac}
        />
      </div>

      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder={t.categoryFilterPlaceholder}
        className="mb-6 max-w-md"
      />

      {shortcuts.length === 0 ? (
        <ClayCard className="p-10 text-center">
          <p className="text-charcoal-light text-lg">{t.emptyState}</p>
        </ClayCard>
      ) : (
        <ClayCard className="px-7 py-1">
          {shortcuts.map((shortcut, index) => (
            <ShortcutRow
              key={shortcut.id}
              shortcut={shortcut}
              os={os}
              language={language}
              showDivider={index < shortcuts.length - 1}
            />
          ))}
        </ClayCard>
      )}

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <Link
          to={`/category/${prevCategory.id}`}
          className="bg-cream shadow-clay-raised-sm hover:shadow-clay-pressed rounded-clay flex items-center gap-2 px-5 py-3 text-sm transition-all duration-200"
        >
          <ChevronLeft size={16} className="text-charcoal-light shrink-0" />
          <span className="flex flex-col items-start">
            <span className="text-charcoal-light text-xs font-medium">{t.previousLabel}</span>
            <span className="text-charcoal font-semibold">{prevCategory.title}</span>
          </span>
        </Link>

        <Link
          to={`/category/${nextCategory.id}`}
          className="bg-cream shadow-clay-raised-sm hover:shadow-clay-pressed rounded-clay flex items-center gap-2 px-5 py-3 text-right text-sm transition-all duration-200"
        >
          <span className="flex flex-col items-end">
            <span className="text-charcoal-light text-xs font-medium">{t.nextLabel}</span>
            <span className="text-charcoal font-semibold">{nextCategory.title}</span>
          </span>
          <ChevronRight size={16} className="text-charcoal-light shrink-0" />
        </Link>
      </div>
    </main>
  );
}
