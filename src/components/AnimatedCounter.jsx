import { useEffect, useState, useRef } from 'react';

/**
 * AnimatedCounter counts up smoothly from 0 to target value once scrolled into view.
 * Respects prefers-reduced-motion by rendering target number immediately.
 * 
 * @param {number} target - The number to reach (e.g., 2500, 150, 100, 72)
 * @param {string} suffix - Optional suffix like '+', '%', ' Hrs'
 * @param {number} duration - Animation duration in ms (default: 1600ms)
 */
export default function AnimatedCounter({ target, suffix = '', duration = 1600 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(target);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = performance.now();
          const easeOutQuad = (t) => t * (2 - t);

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutQuad(progress);
            
            const currentVal = Math.floor(easedProgress * target);
            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <span ref={elementRef} className="counter-animated-number">
      {count.toLocaleString()}{suffix}
    </span>
  );
}
