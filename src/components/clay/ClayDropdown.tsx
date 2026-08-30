import { useEffect, useRef, useState, type ReactNode } from "react";

interface ClayDropdownProps {
  /** Content shown inside the always-visible trigger button. */
  trigger: ReactNode;
  /** Content rendered inside the floating panel when open. */
  children: ReactNode;
  /** Extra classes for the trigger `<button>`. */
  triggerClassName?: string;
  /** Extra classes for the floating panel. */
  panelClassName?: string;
  /** `aria-label` applied to the trigger button. */
  triggerLabel?: string;
}

/**
 * Generic clay-styled dropdown shell: owns its own open/closed state, shows
 * a trigger `<button>`, and floats a `shadow-clay-raised` panel below it
 * when open. Closes on outside click, Escape, or any click inside the
 * panel — the latter is a deliberate simplification over a render-prop
 * "close" callback, since every current consumer (LanguageSwitcher) wants
 * "pick one option, then close" and nothing here needs multi-select.
 */
export function ClayDropdown({
  trigger,
  children,
  triggerClassName = "",
  panelClassName = "",
  triggerLabel,
}: ClayDropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative inline-block">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={triggerLabel}
        onClick={() => setOpen((prev) => !prev)}
        className={triggerClassName}
      >
        {trigger}
      </button>

      {open && (
        <div
          role="menu"
          onClick={() => setOpen(false)}
          className={`bg-cream shadow-clay-raised rounded-clay-lg absolute top-full right-0 z-50 mt-2 ${panelClassName}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
