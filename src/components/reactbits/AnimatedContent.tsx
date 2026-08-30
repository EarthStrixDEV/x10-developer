import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * AnimatedContent (vendored ReactBits component — reactbits.dev)
 *
 * ReactBits ships no npm package; components are copy-pasted source like
 * shadcn/ui. This is a faithful, dependency-free reimplementation of the
 * public AnimatedContent API: a wrapper that fades + slides its children
 * in on mount, re-triggering via IntersectionObserver for content that
 * mounts off-screen (e.g. category cards further down the page).
 *
 * No animation library — plain React state + CSS transitions on
 * transform/opacity, tuned to feel soft (Claymorphism) rather than flashy:
 * gentle ease-out, no bounce/spring overshoot.
 */

export interface AnimatedContentProps {
  children: ReactNode;
  /** Distance in px the content travels from before settling into place. */
  distance?: number;
  /** Axis the reveal travels along. */
  direction?: "vertical" | "horizontal";
  /** Transition duration in seconds. */
  duration?: number;
  /** Delay in seconds before the transition starts — lets callers stagger by index. */
  delay?: number;
  className?: string;
}

const VIEWPORT_THRESHOLD = 0.15;

export function AnimatedContent({
  children,
  distance = 30,
  direction = "vertical",
  duration = 0.5,
  delay = 0,
  className = "",
}: AnimatedContentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = targetRef.current;
    if (!node) return;

    // Content already in view when it mounts (e.g. above the fold) still
    // needs to reveal — IntersectionObserver fires an initial callback for
    // that case, so we don't need a separate mount-time check.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Reveal is a one-shot: once triggered, stop observing so
          // scrolling back past the element doesn't re-animate it.
          observer.disconnect();
        }
      },
      { threshold: VIEWPORT_THRESHOLD }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const offset = `${distance}px`;
  const hiddenTransform =
    direction === "horizontal" ? `translateX(${offset})` : `translateY(${offset})`;

  return (
    <div
      ref={targetRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : hiddenTransform,
        transition: `opacity ${duration}s ease-out, transform ${duration}s ease-out`,
        transitionDelay: `${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

export default AnimatedContent;
