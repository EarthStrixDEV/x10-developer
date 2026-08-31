import type { Language } from "./languages";

/**
 * All translatable UI-chrome copy, fully typed so `t.emptyState` is a
 * compile-time-checked property access rather than a stringly-typed
 * lookup. Shortcut `description`/`note` text is NOT here — that goes
 * through `getLocalizedShortcut` instead, keyed off shortcut id.
 */
export interface UIStrings {
  heroBadge: string;
  heroHeadlinePart1: string;
  heroHeadlineEmphasis: string;
  heroHeadlinePart2: string;
  heroHeadlineItalic: string;
  heroSubheadline: string;
  statShortcuts: string;
  statCategories: string;
  statPlatforms: string;
  searchPlaceholder: string;
  emptyState: string;
  footerTagline: string;
  footerCopyright: string;
  osToggleAriaLabel: string;
  osToggleWindows: string;
  osToggleMac: string;
  themeToggleToDark: string;
  themeToggleToLight: string;
  navBackToTop: string;
  navCategorySections: string;
  navOpenMenu: string;
  navCloseMenu: string;
  languageSwitcherAriaLabel: string;
  browseByCategory: string;
  viewAllAffordance: string;
  categoryShortcutCount: (count: number) => string;
  breadcrumbHome: string;
  previousLabel: string;
  nextLabel: string;
  categoryFilterPlaceholder: string;
  categoryNotFoundTitle: string;
  categoryNotFoundBody: string;
  backToHome: string;
}

// Real, current English copy — extracted verbatim from Hero.tsx,
// Footer.tsx, OSToggle.tsx, ThemeToggle.tsx, NavBar.tsx, App.tsx, and
// SearchBar.tsx. This is the canonical English source and fallback.
const en: UIStrings = {
  heroBadge: "Zero-mouse reference",
  heroHeadlinePart1: "Work ",
  heroHeadlineEmphasis: "10x",
  heroHeadlinePart2: " faster ",
  heroHeadlineItalic: "without touching the mouse.",
  heroSubheadline:
    "Every shortcut a keyboard-first developer actually needs — Windows and Mac, side by side, in one soft and searchable cheat sheet.",
  statShortcuts: "shortcuts",
  statCategories: "categories",
  statPlatforms: "Windows & Mac",
  searchPlaceholder: "Search shortcuts...",
  emptyState: "No shortcuts found",
  footerTagline: "Built for developers who'd rather reach for a key than a mouse.",
  footerCopyright: "A reference, not a product.",
  osToggleAriaLabel: "Operating system",
  osToggleWindows: "Windows",
  osToggleMac: "Mac",
  themeToggleToDark: "Switch to dark mode",
  themeToggleToLight: "Switch to light mode",
  navBackToTop: "X10 Developer — back to top",
  navCategorySections: "Category sections",
  navOpenMenu: "Open menu",
  navCloseMenu: "Close menu",
  languageSwitcherAriaLabel: "Language",
  browseByCategory: "Browse by category",
  viewAllAffordance: "view all",
  categoryShortcutCount: (count) => `${count} shortcuts`,
  breadcrumbHome: "Home",
  previousLabel: "Previous",
  nextLabel: "Next",
  categoryFilterPlaceholder: "Filter within this category...",
  categoryNotFoundTitle: "Category not found",
  categoryNotFoundBody: "That category doesn't exist. Let's get you back on track.",
  backToHome: "Back to home",
};

/**
 * Scaffolding decision (per plan): only `en` is authored for real in this
 * pass. The other 6 languages are deliberately populated with literal
 * copies of `en` — never an empty object — so `UI_STRINGS[language]` can
 * never return `undefined`/crash for an unauthored language. task-031
 * will overwrite `th` with real Thai translations; the remaining 5 stay
 * English-fallback until translated in a future round. Do not translate
 * anything here yet.
 */
// Real Thai translations (task-031). Headline fragments are reordered from
// the English structure ("Work [10x] faster [without touching the mouse]")
// into natural Thai word order: "ทำงานเร็วขึ้น 10 เท่า โดยไม่ต้องแตะเมาส์เลย"
// ("Work faster, 10x, without ever touching the mouse") — Part1 carries the
// verb+adjective, Emphasis carries just the multiplier (keeps <em> styling
// meaningful on the number, same as English), Part2 bridges into the
// closing clause, Italic closes the sentence. Reads as one complete,
// naturally-ordered Thai sentence when concatenated in order.
const th: UIStrings = {
  heroBadge: "คู่มืออ้างอิงแบบไม่ต้องใช้เมาส์",
  heroHeadlinePart1: "ทำงานเร็วขึ้น ",
  heroHeadlineEmphasis: "10 เท่า",
  heroHeadlinePart2: " ",
  heroHeadlineItalic: "โดยไม่ต้องแตะเมาส์เลย",
  heroSubheadline:
    "ทุกคีย์ลัดที่นักพัฒนาสาย keyboard-first ต้องใช้จริง — Windows และ Mac เทียบกันในที่เดียว ดูง่าย ค้นหาได้ในคู่มือฉบับเดียว",
  statShortcuts: "คีย์ลัด",
  statCategories: "หมวดหมู่",
  statPlatforms: "Windows และ Mac",
  searchPlaceholder: "ค้นหาคีย์ลัด...",
  emptyState: "ไม่พบคีย์ลัดที่ค้นหา",
  footerTagline: "สร้างมาเพื่อนักพัฒนาที่อยากใช้คีย์บอร์ดมากกว่าเมาส์",
  footerCopyright: "คู่มืออ้างอิง ไม่ใช่ผลิตภัณฑ์",
  osToggleAriaLabel: "ระบบปฏิบัติการ",
  osToggleWindows: "Windows",
  osToggleMac: "Mac",
  themeToggleToDark: "สลับเป็นโหมดมืด",
  themeToggleToLight: "สลับเป็นโหมดสว่าง",
  navBackToTop: "X10 Developer — กลับขึ้นด้านบน",
  navCategorySections: "หมวดหมู่ทั้งหมด",
  navOpenMenu: "เปิดเมนู",
  navCloseMenu: "ปิดเมนู",
  languageSwitcherAriaLabel: "ภาษา",
  browseByCategory: "เรียกดูตามหมวดหมู่",
  viewAllAffordance: "ดูทั้งหมด",
  categoryShortcutCount: (count) => `${count} คีย์ลัด`,
  breadcrumbHome: "หน้าแรก",
  previousLabel: "ก่อนหน้า",
  nextLabel: "ถัดไป",
  categoryFilterPlaceholder: "กรองภายในหมวดหมู่นี้...",
  categoryNotFoundTitle: "ไม่พบหมวดหมู่นี้",
  categoryNotFoundBody: "ไม่พบหมวดหมู่ที่คุณค้นหา กลับไปเริ่มต้นใหม่กันเถอะ",
  backToHome: "กลับหน้าแรก",
};

export const UI_STRINGS: Record<Language, UIStrings> = {
  en,
  th,
  zh: { ...en },
  ko: { ...en },
  ja: { ...en },
  es: { ...en },
  fr: { ...en },
};
