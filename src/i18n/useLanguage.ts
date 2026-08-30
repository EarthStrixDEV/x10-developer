import { useContext } from "react";
import { LanguageContext } from "./LanguageProvider";
import type { Language } from "./languages";

/**
 * Thin consumer hook over `LanguageContext`. All state lives in
 * `LanguageProvider` — every call site shares the same instance, so a
 * language change anywhere (e.g. LanguageSwitcher) is reflected everywhere
 * else without a page reload.
 */
export function useLanguage(): [Language, (language: Language) => void] {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
