import { useState } from "react";

type OS = "windows" | "mac";

const STORAGE_KEY = "x10-developer-os";
const DEFAULT_OS: OS = "windows";

function isValidOS(value: unknown): value is OS {
  return value === "windows" || value === "mac";
}

function readStoredOS(): OS {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isValidOS(stored) ? stored : DEFAULT_OS;
  } catch {
    // localStorage unavailable (SSR, private browsing, disabled storage, etc.)
    return DEFAULT_OS;
  }
}

/**
 * Owns the selected OS ("windows" | "mac") and persists it to localStorage
 * under the "x10-developer-os" key, so a returning visitor keeps their
 * choice. Falls back silently to "windows" if storage is unavailable.
 */
export function useOS(): [OS, (os: OS) => void] {
  const [os, setOsState] = useState<OS>(readStoredOS);

  const setOs = (next: OS) => {
    setOsState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage write failed (e.g. private browsing quota) — state still
      // updates in-memory, we just silently skip persistence.
    }
  };

  return [os, setOs];
}
