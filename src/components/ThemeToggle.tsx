import { Moon, Sun } from "lucide-react";
import { ClayButton } from "./clay/ClayButton";
import { useTheme } from "../hooks/useTheme";

interface ThemeToggleProps {
  /** Render as a normal inline element (for use inside NavBar) instead of
   *  a fixed, floating corner button. Defaults to the original fixed
   *  top-right placement for any caller that doesn't opt in. */
  inline?: boolean;
}

/**
 * Circular icon button that flips between light/dark. Owns its own
 * `useTheme()` call since it's simple enough not to need the
 * component/integration split OSToggle and SearchBar use.
 *
 * Icon shows the mode a click would switch TO: Moon while in light mode
 * (click to go dark), Sun while in dark mode (click to go light).
 */
export function ThemeToggle({ inline = false }: ThemeToggleProps) {
  const [theme, setTheme] = useTheme();
  const isLight = theme === "light";

  const label = isLight ? "Switch to dark mode" : "Switch to light mode";

  return (
    <ClayButton
      type="button"
      aria-label={label}
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className={`flex h-10 w-10 items-center justify-center !rounded-clay-full p-0 ${
        inline ? "" : "fixed top-4 right-4 z-50 h-12 w-12"
      }`}
    >
      {isLight ? (
        <Moon className="h-5 w-5 text-charcoal" />
      ) : (
        <Sun className="h-5 w-5 text-charcoal" />
      )}
    </ClayButton>
  );
}
