import { useEffect } from 'react';

/**
 * useScrollReveal initializes an IntersectionObserver that attaches an '.in-view'
 * class to any element possessing '[data-reveal]' or '[data-stagger]' once it enters the viewport.
 * If prefers-reduced-motion is active, or if elements are already visible, they are marked immediately.
 */
export function useScrollReveal() {
  useEffect(() => {
    // Check user accessibility preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const targets = document.querySelectorAll('[data-reveal], [data-stagger]');
    if (targets.length === 0) return;

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      targets.forEach((el) => el.classList.add('in-view'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            // When scrolling out, remove in-view to allow re-reveal animation
            const rect = entry.boundingClientRect;
            // Only unreveal if it scrolled below or well above the screen
            if (rect.top > 0) {
              entry.target.classList.remove('in-view');
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    targets.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
