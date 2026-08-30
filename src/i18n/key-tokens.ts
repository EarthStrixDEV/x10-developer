/**
 * REAL_KEY_TOKENS — the fixed allowlist of literal keyboard key names/symbols
 * that appear in `shortcuts.ts`'s `windows`/`mac` arrays and must NEVER be
 * translated (a localized "Ctrl" would be actively wrong — these are
 * universal physical/virtual key names, not prose).
 *
 * This set was built by reading every `windows: [...]` / `mac: [...]` array
 * across all 6 existing categories (48 shortcuts) in `src/data/shortcuts.ts`
 * and enumerating every distinct literal string. Anything that reads as a
 * phrase/sentence fragment rather than a key label (e.g. "drag only",
 * "Menu key") is intentionally excluded here — those go through
 * `key-token-translations.ts` instead.
 *
 * Fixed allowlist by design — no heuristic/regex classifier, no dynamic
 * discovery. When new categories/shortcuts are added, this set must be
 * updated by hand.
 */
export const REAL_KEY_TOKENS: ReadonlySet<string> = new Set([
  // Modifier names (Windows/generic)
  "Win",
  "Ctrl",
  "Alt",
  "Shift",

  // Mac modifier symbols
  "⌘",
  "⌥",
  "⌃",

  // Named keys
  "Tab",
  "Esc",
  "Return",
  "Enter",
  "Delete",
  "Backspace",
  "Space",
  "click",

  // Function keys
  "F2",
  "F3",
  "F4",
  "F5",
  "F10",

  // Print Screen
  "PrtScn",

  // Letters used as keys
  "A",
  "C",
  "D",
  "E",
  "F",
  "I",
  "L",
  "M",
  "N",
  "Q",
  "R",
  "S",
  "T",
  "V",
  "W",
  "Y",
  "Z",

  // Digits and punctuation-as-keys
  "3",
  "4",
  "8",
  ".",
  "[",
  "]",

  // Arrow symbols
  "←",
  "→",
  "↑",
  "↓",

  // Composite arrow-pair / range tokens — these represent a real keyboard
  // concept (a pair of arrow keys, or a digit range) rather than a
  // translatable sentence, so they stay in the allowlist as single tokens.
  "← / →",
  "↑ / ↓",
  "Home / End",
  "+ / -",
  "1–9",
]);
