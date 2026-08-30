import { useMemo, useState } from "react";
import { useOS } from "./hooks/useOS";
import { useShortcutFilter } from "./hooks/useShortcutFilter";
import { useLanguage } from "./i18n/useLanguage";
import { useTranslation } from "./i18n/useTranslation";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { CategorySection } from "./components/CategorySection";
import { Footer } from "./components/Footer";
import { categories } from "./data/shortcuts";

/**
 * Landing-page shell: sticky NavBar (logo, category anchors, OS/theme
 * toggles) → Hero banner (headline + search, doubling as the page's
 * primary call to action) → the shortcut categories as landing-page
 * sections → Footer. `os` (persisted via useOS), `language` (persisted via
 * useLanguage), and `query` (session-only) are still owned here and
 * threaded down to every consumer.
 */
function App() {
  const [os, setOs] = useOS();
  const [language] = useLanguage();
  const { t } = useTranslation();
  const [query, setQuery] = useState("");

  const filteredCategories = useShortcutFilter(categories, query, os, language);

  const totalShortcuts = useMemo(
    () => categories.reduce((sum, category) => sum + category.shortcuts.length, 0),
    []
  );

  return (
    <div className="flex min-h-full flex-col">
      <NavBar categories={categories} os={os} onOsChange={setOs} />

      <Hero
        query={query}
        onQueryChange={setQuery}
        shortcutCount={totalShortcuts}
        categoryCount={categories.length}
      />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-20 sm:px-6 lg:px-8">
        {filteredCategories.length === 0 ? (
          <p className="text-charcoal-light py-16 text-center text-lg">
            {t.emptyState}
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredCategories.map((category, index) => (
              <CategorySection
                key={category.id}
                category={category}
                os={os}
                language={language}
                index={index}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
