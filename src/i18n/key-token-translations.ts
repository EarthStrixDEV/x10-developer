import type { Language } from "./languages";

/**
 * KEY_TOKEN_TRANSLATIONS — lookup table for the embedded-English-prose
 * tokens found inside `shortcuts.ts`'s `windows`/`mac` arrays (the tokens
 * that are NOT in `REAL_KEY_TOKENS` — see `key-tokens.ts`).
 *
 * Keyed by the English string itself (not by shortcut id), since these
 * phrases repeat across multiple shortcuts. `ShortcutRow.tsx`'s key-render
 * loop checks `REAL_KEY_TOKENS` first; anything not on that allowlist goes
 * through this lookup with English fallback.
 *
 * Fixed lookup table by design — no heuristic classifier, no runtime
 * discovery. Found exactly 6 prose tokens while reading every windows/mac
 * array in shortcuts.ts (matches the plan's expected set):
 *   "drag only", "Menu key", "n/a", "double-click title bar",
 *   "then click +", "drag tab out"
 */
export const KEY_TOKEN_TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {}, // English is the source itself, no translation needed — empty is correct
  th: {
    "drag only": "ลากเท่านั้น",
    "Menu key": "ปุ่มเมนู",
    "n/a": "ไม่มี",
    "double-click title bar": "ดับเบิลคลิกแถบชื่อหน้าต่าง",
    "then click +": "แล้วคลิก +",
    "drag tab out": "ลากแท็บออก",
  },
  zh: {}, // empty for now — populated in a future round, not this task
  ko: {},
  ja: {},
  es: {},
  fr: {},
};
