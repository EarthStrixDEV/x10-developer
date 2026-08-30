import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { OSToggle } from "./OSToggle";
import { ThemeToggle } from "./ThemeToggle";
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
 * the real title. Falls back to the full title for any category id not
 * listed here, so a future category never renders blank.
 */
const NAV_LABELS: Record<string, string> = {
  "window-management": "Windows",
  "tab-navigation": "Tabs",
  navigation: "Navigation",
  "text-editing": "Text Editing",
  "context-menu": "Context Menu",
  "system-utilities": "Clipboard",
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

  return (
    <header className="bg-cream/85 sticky top-0 z-40 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="shrink-0" aria-label="X10 Developer — back to top">
          <Logo />
        </a>

        <nav
          aria-label="Category sections"
          className="hidden flex-1 items-center justify-center gap-1 lg:flex"
        >
          {categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="text-charcoal-light hover:text-charcoal hover:bg-cream-dark/60 rounded-clay-sm px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-200"
            >
              {NAV_LABELS[category.id] ?? category.title}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <OSToggle value={os} onChange={onOsChange} className="hidden sm:grid" />
          <ThemeToggle inline />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
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
              className="mb-2 grid self-center sm:hidden"
            />
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                onClick={() => setMenuOpen(false)}
                className="text-charcoal hover:bg-cream-dark/60 rounded-clay-sm px-3 py-2.5 text-sm font-medium transition-colors duration-200"
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
