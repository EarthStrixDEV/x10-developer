import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { OSToggle } from "./OSToggle";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "../i18n/useTranslation";
import type { Language } from "../i18n/languages";
import type { Category } from "../data/shortcuts";

interface NavBarProps {
  categories: Category[];
  os: "windows" | "mac";
  onOsChange: (os: "windows" | "mac") => void;
}

/**
 * Shorter labels for the nav strip only — the full descriptive titles
 * (e.g. "Browser & File Explorer Navigation") stay unchanged everywhere
 * else, including the mobile dropdown, where a single column has room for
 * the real title. Nested by language; `en` and `th` are populated —
 * every other language falls back to `category.title` via the existing
 * `?? category.title` pattern below (same graceful-degradation approach
 * already used elsewhere). Translating these into zh/ko/ja/es/fr is a
 * later, separate content task; the `<nav>` scrolls contained
 * (`overflow-x-auto` + `min-w-0`) so a long fallback title never forces
 * page-level horizontal overflow in the meantime.
 */
const NAV_LABELS: Record<Language, Record<string, string>> = {
  en: {
    "window-management": "Windows",
    "tab-navigation": "Tabs",
    navigation: "Navigation",
    "text-editing": "Text Editing",
    "context-menu": "Context Menu",
    "system-utilities": "Clipboard",
    browser: "Browser",
    "vs-code": "VS Code",
    vim: "Vim",
    terminal: "Terminal",
  },
  th: {
    "window-management": "หน้าต่าง",
    "tab-navigation": "แท็บ",
    navigation: "การนำทาง",
    "text-editing": "แก้ไขข้อความ",
    "context-menu": "เมนูคลิกขวา",
    "system-utilities": "คลิปบอร์ด",
    browser: "เบราว์เซอร์",
    "vs-code": "VS Code",
    vim: "Vim",
    terminal: "เทอร์มินัล",
  },
  zh: {},
  ko: {},
  ja: {},
  es: {},
  fr: {},
};

/**
 * Sticky top bar: logo on the left, anchor links to each visible category
 * in the middle, OS toggle + theme toggle on the right. Below `lg`, the
 * anchor links collapse into a clay dropdown panel toggled by a hamburger
 * button — OSToggle/ThemeToggle stay visible at every width since they're
 * functional controls, not wayfinding.
 *
 * Sits on a translucent cream/dark clay strip (backdrop-blur) so page
 * content visibly slides underneath it on scroll, rather than a hard-edged
 * bar that looks pasted on top.
 */
export function NavBar({ categories, os, onOsChange }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, language } = useTranslation();
  const navLabels = NAV_LABELS[language];

  return (
    <header className="bg-cream/85 sticky top-0 z-40 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="shrink-0" aria-label={t.navBackToTop}>
          <Logo />
        </Link>

        <nav
          aria-label={t.navCategorySections}
          className="scrollbar-hide hidden min-w-0 flex-1 items-center justify-center gap-1 overflow-x-auto lg:flex"
        >
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="text-charcoal-light hover:text-charcoal hover:bg-cream-dark/60 rounded-clay-sm px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-200"
            >
              {navLabels[category.id] ?? category.title}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <OSToggle
            value={os}
            onChange={onOsChange}
            ariaLabel={t.osToggleAriaLabel}
            windowsLabel={t.osToggleWindows}
            macLabel={t.osToggleMac}
            className="hidden sm:grid"
          />
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>
          <ThemeToggle inline />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t.navCloseMenu : t.navOpenMenu}
            className="bg-cream shadow-clay-raised-sm text-charcoal flex h-10 w-10 items-center justify-center rounded-clay-sm transition-all duration-200 hover:shadow-clay-pressed active:translate-y-0.5 active:shadow-clay-pressed lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="px-4 pb-4 sm:px-6 lg:hidden">
          <div className="bg-cream shadow-clay-raised rounded-clay-lg flex flex-col gap-1 p-3">
            <OSToggle
              value={os}
              onChange={onOsChange}
              ariaLabel={t.osToggleAriaLabel}
              windowsLabel={t.osToggleWindows}
              macLabel={t.osToggleMac}
              className="mb-2 grid self-center sm:hidden"
            />
            <LanguageSwitcher />
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                onClick={() => setMenuOpen(false)}
                className="text-charcoal hover:bg-cream-dark/60 rounded-clay-sm px-3 py-2.5 text-sm font-medium transition-colors duration-200"
              >
                {category.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
