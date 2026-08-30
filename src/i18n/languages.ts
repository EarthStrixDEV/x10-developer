export type Language = "en" | "th" | "zh" | "ko" | "ja" | "es" | "fr";

export const STORAGE_KEY = "x10-developer-language";
export const DEFAULT_LANGUAGE: Language = "en";

export function isValidLanguage(value: unknown): value is Language {
  return (
    value === "en" ||
    value === "th" ||
    value === "zh" ||
    value === "ko" ||
    value === "ja" ||
    value === "es" ||
    value === "fr"
  );
}

/**
 * Metadata for every supported language, in display order. `label` is the
 * English name (used in code/logs); `nativeLabel` is what the
 * LanguageSwitcher UI actually renders, so a reader recognizes their own
 * language without needing English literacy first.
 */
export const LANGUAGES: { code: Language; label: string; nativeLabel: string }[] = [
  { code: "en", label: "English", nativeLabel: "English" },
  { code: "th", label: "Thai", nativeLabel: "ไทย" },
  { code: "zh", label: "Chinese", nativeLabel: "简体中文" },
  { code: "ko", label: "Korean", nativeLabel: "한국어" },
  { code: "ja", label: "Japanese", nativeLabel: "日本語" },
  { code: "es", label: "Spanish", nativeLabel: "Español" },
  { code: "fr", label: "French", nativeLabel: "Français" },
];
