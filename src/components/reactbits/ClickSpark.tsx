import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";

const SPARK_STYLE_ID = "click-spark-keyframes";

/** Injects the shared @keyframes rule into <head> once, no matter how many ClickSpark instances mount. */
function ensureSparkStylesInjected() {
  if (typeof document === "undefined") return;
  if (document.getElementById(SPARK_STYLE_ID)) return;

  const style = document.createElement("style");
  style.id = SPARK_STYLE_ID;
  style.textContent = `
    .click-spark-line {
      position: absolute;
      left: 0;
      top: 0;
      width: 2px;
      height: var(--spark-length);
      background: var(--spark-color);
      border-radius: 1px;
      transform-origin: 50% 0%;
      transform: rotate(var(--spark-angle)) translateY(0) scaleY(1);
      opacity: 0.85;
      animation: click-spark-fly var(--spark-duration) ease-out forwards;
    }

    @keyframes click-spark-fly {
      0% {
        transform: rotate(var(--spark-angle)) translateY(0) scaleY(1);
        opacity: 0.85;
      }
      100% {
        transform: rotate(var(--spark-angle))
          translateY(calc(var(--spark-length) * 1.6)) scaleY(0.4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

interface ClickSparkProps {
  children: ReactNode;
  /** Line color for the spark burst. Defaults to the clay palette's burnt orange. */
  sparkColor?: string;
  /** Length in px of each radiating line. */
  sparkSize?: number;
  /** Number of lines per burst. */
  sparkCount?: number;
  /** Total animation duration in ms, from spawn to fully faded out. */
  duration?: number;
  className?: string;
}

interface Spark {
  id: number;
  x: number;
  y: number;
}

let sparkUid = 0;

/**
 * Vendored equivalent of ReactBits' "ClickSpark" — a wrapper that listens
 * for clicks anywhere within itself and renders a short burst of thin
 * radiating lines from the click point, fading out and cleaning up after
 * `duration` ms. Pure DOM + CSS animation (no canvas, no dependency):
 * this wraps arbitrary children whose layout can reflow (e.g. search
 * filtering resizing a grid), so absolutely-positioned divs anchored to
 * the click coordinates avoid the resize-tracking a canvas overlay would
 * need to stay pinned over a moving layout.
 *
 * Each burst is a fixed count of lines evenly spaced in a circle,
 * animated outward + fading via a single shared @keyframes rule injected
 * into <head> once no matter how many instances mount. Sparks are removed
 * from state via timeout once their animation finishes, so nothing
 * accumulates in the DOM.
 */
export function ClickSpark({
  children,
  sparkColor = "#E8703A",
  sparkSize = 10,
  sparkCount = 8,
  duration = 400,
  className = "",
}: ClickSparkProps) {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const timeoutsRef = useRef<Map<number, ReturnType<typeof setTimeout>>>(
    new Map(),
  );

  useEffect(() => {
    ensureSparkStylesInjected();
    // Capture the map instance so cleanup clears exactly the timeouts this
    // instance scheduled, not a ref value read after unmount.
    const timeouts = timeoutsRef.current;
    return () => {
      timeouts.forEach((timeoutId) => clearTimeout(timeoutId));
      timeouts.clear();
    };
  }, []);

  const handleClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const id = sparkUid++;

      setSparks((prev) => [...prev, { id, x, y }]);

      const timeoutId = setTimeout(() => {
        setSparks((prev) => prev.filter((spark) => spark.id !== id));
        timeoutsRef.current.delete(id);
      }, duration);
      timeoutsRef.current.set(id, timeoutId);
    },
    [duration],
  );

  return (
    <div className={`relative ${className}`} onClick={handleClick}>
      {children}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {sparks.map((spark) => (
          <SparkBurst
            key={spark.id}
            x={spark.x}
            y={spark.y}
            color={sparkColor}
            lineLength={sparkSize}
            count={sparkCount}
            duration={duration}
          />
        ))}
      </div>
    </div>
  );
}

interface SparkBurstProps {
  x: number;
  y: number;
  color: string;
  lineLength: number;
  count: number;
  duration: number;
}

/** One burst: `count` thin lines radiating evenly from (x, y). */
function SparkBurst({ x, y, color, lineLength, count, duration }: SparkBurstProps) {
  const lines = Array.from({ length: count }, (_, index) => {
    const angle = (360 / count) * index;
    return (
      <span
        key={index}
        className="click-spark-line"
        style={
          {
            "--spark-angle": `${angle}deg`,
            "--spark-length": `${lineLength}px`,
            "--spark-duration": `${duration}ms`,
            "--spark-color": color,
          } as CSSProperties
        }
      />
    );
  });

  return (
    <div
      className="absolute"
      style={{ left: x, top: y, width: 0, height: 0 }}
    >
      {lines}
    </div>
  );
}

export default ClickSpark;
