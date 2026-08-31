import { useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useShortcutFilter } from "../hooks/useShortcutFilter";
import { useLanguage } from "../i18n/useLanguage";
import { useTranslation } from "../i18n/useTranslation";
import { Hero } from "../components/Hero";
import { CategoryIndexCard } from "../components/CategoryIndexCard";
import { categories } from "../data/shortcuts";
import type { LayoutContext } from "../components/Layout";

/**
 * Home route: Hero (headline + global search) → a grid of category index
 * cards, one per category, each linking out to its detail page. Search
 * live-filters which cards render but never changes a surviving card's
 * displayed shortcut count — see the `original` lookup below.
 */
export function HomePage() {
  const { os } = useOutletContext<LayoutContext>();
  const [language] = useLanguage();
  const { t } = useTranslation();
  const [query, setQuery] = useState("");

  const filteredCategories = useShortcutFilter(categories, query, os, language);

  const totalShortcuts = useMemo(
    () => categories.reduce((sum, category) => sum + category.shortcuts.length, 0),
    []
  );

  return (
    <>
      <Hero
        query={query}
        onQueryChange={setQuery}
        shortcutCount={totalShortcuts}
        categoryCount={categories.length}
      />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-20 sm:px-6 lg:px-8">
        <h2
          className="text-charcoal mb-5 text-xl font-semibold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t.browseByCategory}
        </h2>

        {filteredCategories.length === 0 ? (
          <p className="text-charcoal-light py-16 text-center text-lg">
            {t.emptyState}
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredCategories.map((filtered) => {
              const original = categories.find((category) => category.id === filtered.id)!;
              return (
                <CategoryIndexCard
                  key={original.id}
                  category={original}
                  shortcutCount={original.shortcuts.length}
                />
              );
            })}
          </div>
        )}
      </main>
    </>
  );
}
