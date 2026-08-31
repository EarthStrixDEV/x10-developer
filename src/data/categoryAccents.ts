/**
 * Per-category accent lookup for the Home page's category index grid.
 * Values transcribed directly from design/mockups/home.html's 10 literal
 * cards. Fields store full literal Tailwind class strings — Tailwind v4's
 * JIT scanner needs statically-greppable class names, so these must be
 * used directly as `className={accent.cardBgClass}`, never concatenated
 * into a template string at render time, or the CSS won't be generated.
 */
export interface CategoryAccent {
  cardBgClass: string;
  iconBgClass: string;
  titleColorClass: string;
  countColorClass: string;
  viewAllColorClass: string;
  /** True only for the one dark "feature" card (VS Code) whose card
   *  background itself is charcoal, distinct from the context-menu slot
   *  which uses a light card with a plain charcoal icon badge. */
  inverted: boolean;
}

export const CATEGORY_ACCENTS: Record<string, CategoryAccent> = {
  "window-management": {
    cardBgClass: "bg-cream-light",
    iconBgClass: "bg-orange",
    titleColorClass: "text-charcoal",
    countColorClass: "text-charcoal-light",
    viewAllColorClass: "text-orange-dark",
    inverted: false,
  },
  "tab-navigation": {
    cardBgClass: "bg-mint-light",
    iconBgClass: "bg-mint-dark",
    titleColorClass: "text-accent-ink",
    countColorClass: "text-accent-ink-light",
    viewAllColorClass: "text-mint-dark",
    inverted: false,
  },
  navigation: {
    cardBgClass: "bg-violet-light",
    iconBgClass: "bg-violet-dark",
    titleColorClass: "text-accent-ink",
    countColorClass: "text-accent-ink-light",
    viewAllColorClass: "text-violet-dark",
    inverted: false,
  },
  "text-editing": {
    cardBgClass: "bg-pink-light",
    iconBgClass: "bg-pink-dark",
    titleColorClass: "text-accent-ink",
    countColorClass: "text-accent-ink-light",
    viewAllColorClass: "text-pink-dark",
    inverted: false,
  },
  "context-menu": {
    cardBgClass: "bg-cream-light",
    iconBgClass: "bg-charcoal",
    titleColorClass: "text-charcoal",
    countColorClass: "text-charcoal-light",
    viewAllColorClass: "text-charcoal",
    inverted: false,
  },
  "system-utilities": {
    cardBgClass: "bg-orange-light",
    iconBgClass: "bg-orange-dark",
    titleColorClass: "text-charcoal-dark",
    countColorClass: "text-charcoal-dark",
    viewAllColorClass: "text-orange-dark",
    inverted: false,
  },
  browser: {
    cardBgClass: "bg-mint-light",
    iconBgClass: "bg-mint-dark",
    titleColorClass: "text-accent-ink",
    countColorClass: "text-accent-ink-light",
    viewAllColorClass: "text-mint-dark",
    inverted: false,
  },
  "vs-code": {
    cardBgClass: "bg-charcoal",
    iconBgClass: "bg-orange",
    titleColorClass: "text-cream-light",
    countColorClass: "text-cream-light",
    viewAllColorClass: "text-orange-light",
    inverted: true,
  },
  vim: {
    cardBgClass: "bg-violet-light",
    iconBgClass: "bg-violet-dark",
    titleColorClass: "text-accent-ink",
    countColorClass: "text-accent-ink-light",
    viewAllColorClass: "text-violet-dark",
    inverted: false,
  },
  terminal: {
    cardBgClass: "bg-pink-light",
    iconBgClass: "bg-pink-dark",
    titleColorClass: "text-accent-ink",
    countColorClass: "text-accent-ink-light",
    viewAllColorClass: "text-pink-dark",
    inverted: false,
  },
};

export const CATEGORY_ACCENT_FALLBACK: CategoryAccent = {
  cardBgClass: "bg-cream-light",
  iconBgClass: "bg-orange",
  titleColorClass: "text-charcoal",
  countColorClass: "text-charcoal-light",
  viewAllColorClass: "text-orange-dark",
  inverted: false,
};

export function getCategoryAccent(categoryId: string): CategoryAccent {
  return CATEGORY_ACCENTS[categoryId] ?? CATEGORY_ACCENT_FALLBACK;
}
