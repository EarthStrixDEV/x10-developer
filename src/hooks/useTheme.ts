import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "x10-developer-theme";
const DEFAULT_THEME: Theme = "light";

function isValidTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark";
}

function readStoredTheme(): Theme {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isValidTheme(stored) ? stored : DEFAULT_THEME;
  } catch {
    // localStorage unavailable (SSR, private browsing, disabled storage, etc.)
    return DEFAULT_THEME;
  }
}

/**
 * Owns the selected theme ("light" | "dark") and persists it to localStorage
 * under the "x10-developer-theme" key, so a returning visitor keeps their
 * choice. Falls back silently to "light" if storage is unavailable — this
 * default is deliberate and must never fall back to prefers-color-scheme
 * or any other OS/system preference.
 *
 * Also syncs the `data-theme` attribute on <html> to match, both on mount
 * and whenever the theme changes, so dark mode applies at first paint with
 * no flash of the wrong theme.
 */
export function useTheme(): [Theme, (theme: Theme) => void] {
  const [theme, setThemeState] = useState<Theme>(readStoredTheme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [theme]);

  const setTheme = (next: Theme) => {
    setThemeState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage write failed (e.g. private browsing quota) — state still
      // updates in-memory, we just silently skip persistence.
    }
  };

  return [theme, setTheme];
}
