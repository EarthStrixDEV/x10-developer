import { Keyboard, MousePointerBan } from "lucide-react";
import { SearchBar } from "./SearchBar";
import { useTranslation } from "../i18n/useTranslation";

interface HeroProps {
  query: string;
  onQueryChange: (query: string) => void;
  shortcutCount: number;
  categoryCount: number;
}

/**
 * Landing-page banner: an oversized display headline set diagonally against
 * a field of soft, asymmetric clay blobs (pure CSS radial shapes, no image
 * assets) that echo the card shadow language at a much larger scale. The
 * search bar doubles as the hero's primary call to action — "search" is
 * the actual product action here, not a decorative field.
 */
export function Hero({
  query,
  onQueryChange,
  shortcutCount,
  categoryCount,
}: HeroProps) {
  const { t } = useTranslation();

  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-28 lg:px-8"
    >
      {/* Decorative clay blobs — purely atmospheric, aria-hidden */}
      <div
        aria-hidden="true"
        className="bg-violet-light/55 rounded-full pointer-events-none absolute -top-24 -right-20 h-72 w-72 blur-2xl sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="bg-mint-light/50 rounded-full pointer-events-none absolute top-40 -left-24 h-64 w-64 blur-2xl sm:h-80 sm:w-80"
      />
      <div
        aria-hidden="true"
        className="border-pink/40 pointer-events-none absolute top-14 right-[12%] hidden h-16 w-16 -rotate-12 rounded-clay-lg border-[3px] sm:block"
      />
      <div
        aria-hidden="true"
        className="bg-orange/35 pointer-events-none absolute bottom-8 left-[8%] hidden h-10 w-10 rotate-12 rounded-clay-sm sm:block"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <span className="bg-cream shadow-clay-raised-sm text-charcoal-light inline-flex items-center gap-2 rounded-clay-full px-4 py-1.5 text-xs font-semibold tracking-[0.08em] uppercase">
          <MousePointerBan size={14} className="text-orange" />
          {t.heroBadge}
        </span>

        <h1
          className="text-charcoal max-w-3xl text-5xl leading-[1.05] font-semibold sm:text-6xl md:text-7xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t.heroHeadlinePart1}
          <em className="text-orange not-italic">{t.heroHeadlineEmphasis}</em>
          {t.heroHeadlinePart2}
          <span className="italic">{t.heroHeadlineItalic}</span>
        </h1>

        <p className="text-charcoal-light max-w-xl text-lg text-balance sm:text-xl">
          {t.heroSubheadline}
        </p>

        <SearchBar
          value={query}
          onChange={onQueryChange}
          placeholder={t.searchPlaceholder}
          className="w-full max-w-lg py-3.5 text-base"
        />

        <div className="text-charcoal-light mt-2 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium">
          <span className="inline-flex items-center gap-2">
            <Keyboard size={16} className="text-orange" />
            <strong className="text-charcoal font-semibold">
              {shortcutCount}+
            </strong>
            {t.statShortcuts}
          </span>
          <span className="bg-charcoal-light/30 hidden h-4 w-px sm:inline-block" />
          <span>
            <strong className="text-charcoal font-semibold">
              {categoryCount}
            </strong>{" "}
            {t.statCategories}
          </span>
          <span className="bg-charcoal-light/30 hidden h-4 w-px sm:inline-block" />
          <span>{t.statPlatforms}</span>
        </div>
      </div>
    </section>
  );
}
