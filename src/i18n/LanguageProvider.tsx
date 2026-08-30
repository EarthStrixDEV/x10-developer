import { createContext, useEffect, useState, type ReactNode } from "react";
import { STORAGE_KEY, DEFAULT_LANGUAGE, isValidLanguage, type Language } from "./languages";

function readStoredLanguage(): Language {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isValidLanguage(stored) ? stored : DEFAULT_LANGUAGE;
  } catch {
    // localStorage unavailable (SSR, private browsing, disabled storage, etc.)
    return DEFAULT_LANGUAGE;
  }
}

/**
 * Also loads the matching Noto Sans Google Font for non-Latin languages
 * (Thai/CJK — Fraunces/Figtree have no glyphs for them) by injecting a
 * <link> tag, mirroring the pre-paint font loader in index.html. That HTML
 * script only covers page load, so this effect duplicates the same fontMap
 * to also cover a runtime language switch; it can't just call into the HTML
 * script since that one runs before React (and this module) exists — the
 * same reason index.html and useTheme.ts duplicate the theme flash-prevention
 * logic instead of sharing it. Each language's <link> is tagged with
 * data-lang-font so we never inject a duplicate for a language already
 * fetched this session.
 */
const FONT_MAP: Partial<Record<Language, string>> = {
  th: "Noto+Sans+Thai:wght@400;500;600;700",
  zh: "Noto+Sans+SC:wght@400;500;600;700",
  ko: "Noto+Sans+KR:wght@400;500;600;700",
  ja: "Noto+Sans+JP:wght@400;500;600;700",
};

type LanguageContextValue = [Language, (language: Language) => void];

export const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * Owns the ACTUAL selected-language state and persists it to localStorage
 * under the "x10-developer-language" key, so a returning visitor keeps
 * their choice. Falls back silently to "en" if storage is unavailable.
 *
 * Also syncs <html>'s `lang` and `data-lang` attributes to match, both on
 * mount and whenever the language changes. Unlike useTheme's dark-mode sync
 * (a 2-value presence/absence trick where the default state is "attribute
 * absent"), every one of the 7 languages — including the default "en" —
 * must set an explicit value, so both attributes are written unconditionally
 * on every render of this effect rather than only for a non-default case.
 *
 * Every consumer of `useLanguage()` reads/writes this single shared
 * instance via context, so a language change made anywhere (e.g.
 * LanguageSwitcher) is immediately visible everywhere else without a page
 * reload.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(readStoredLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.setAttribute("data-lang", language);

    const fontFamily = FONT_MAP[language];
    if (fontFamily && !document.querySelector(`link[data-lang-font="${language}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = `https://fonts.googleapis.com/css2?family=${fontFamily}&display=swap`;
      link.setAttribute("data-lang-font", language);
      document.head.appendChild(link);
    }
  }, [language]);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage write failed (e.g. private browsing quota) — state still
      // updates in-memory, we just silently skip persistence.
    }
  };

  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      {children}
    </LanguageContext.Provider>
  );
}
