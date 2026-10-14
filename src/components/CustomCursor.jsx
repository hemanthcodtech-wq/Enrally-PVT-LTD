import React, { useEffect, useState, useRef } from 'react';

/**
 * CustomCursor - Enterprise-grade interactive pointer tracking system
 * Brand Colors: Turquoise (#12BFD0) & Navy (#073B69)
 * 
 * Features:
 * - Small turquoise dot + smooth delayed outer follower ring
 * - Automatic hover state expansion on buttons, links, service cards, images
 * - Displays "Explore" label on service cards, "View" on clickable images
 * - Magnetic pull on primary CTA buttons
 * - Completely disabled on touch screens, reduced-motion preferences, or text inputs
 * - pointer-events: none guarantees zero click blockage or form disruption
 */
export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorType, setCursorType] = useState('default'); // 'default', 'service', 'image', 'btn'
  const [cursorLabel, setCursorLabel] = useState('');

  const dotRef = useRef(null);
  const ringRef = useRef(null);
  
  // Coordinates for smooth lerp physics
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const activeMagneticEl = useRef(null);
  const magneticOriginalTransform = useRef('');

  useEffect(() => {
    // Disable on touch devices or if user requested reduced motion
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) {
      return;
    }

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth Lerp loop using requestAnimationFrame
    let animationFrameId;
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const render = () => {
      // Direct transform on the dot for immediate response
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      // Slightly delayed smooth movement for the follower ring
      if (ringRef.current) {
        ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.16);
        ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.16);
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      // Subtle Magnetic pull on hover of magnetic-cta buttons (max 6px)
      if (activeMagneticEl.current) {
        const rect = activeMagneticEl.current.getBoundingClientRect();
        const elCenterX = rect.left + rect.width / 2;
        const elCenterY = rect.top + rect.height / 2;
        const deltaX = (mousePos.current.x - elCenterX) * 0.18;
        const deltaY = (mousePos.current.y - elCenterY) * 0.18;
        
        // Clamp to 6px
        const clampedX = Math.max(-6, Math.min(6, deltaX));
        const clampedY = Math.max(-6, Math.min(6, deltaY));
        activeMagneticEl.current.style.transform = `translate3d(${clampedX}px, ${clampedY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Hover detection delegator for performant dynamic detection
    const onMouseOver = (e) => {
      const target = e.target;

      // Text input or selectable area: preserve native text cursor and hide custom cursor ring
      if (target.closest('input, textarea, select, [contenteditable="true"]')) {
        setIsHovered(false);
        setCursorType('text');
        setCursorLabel('');
        return;
      }

      // Service Cards: Show 'Explore'
      if (target.closest('.core-card, .other-srv-card, .capability-card, .sd-why-card')) {
        setIsHovered(true);
        setCursorType('service');
        setCursorLabel('Explore');
        return;
      }

      // Clickable Images / Gallery items: Show 'View'
      if (target.closest('.sd-gallery-item, .overview-building-frame, .handshake-img')) {
        setIsHovered(true);
        setCursorType('image');
        setCursorLabel('View');
        return;
      }

      // Buttons / Links / Magnetic CTAs
      const btn = target.closest('.btn-cyan-pill, .btn-cyan-header, .btn-cyan-cta, .btn-cyan-submit, .btn-white-pill, .floating-btn, a, button');
      if (btn) {
        setIsHovered(true);
        setCursorType('btn');
        setCursorLabel('');

        // Apply magnetic pull only on primary action pills
        if (btn.classList.contains('btn-cyan-pill') || btn.classList.contains('btn-cyan-cta') || btn.classList.contains('btn-cyan-header')) {
          activeMagneticEl.current = btn;
        }
        return;
      }

      // Default state
      setIsHovered(false);
      setCursorType('default');
      setCursorLabel('');
      if (activeMagneticEl.current) {
        activeMagneticEl.current.style.transform = '';
        activeMagneticEl.current = null;
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  // If invisible or on native text inputs, hide elements
  if (cursorType === 'text') {
    return null;
  }

  return (
    <div className={`enrally-cursor-wrapper ${isVisible ? 'visible' : ''} ${isHovered ? 'hovered' : ''} cursor-${cursorType}`}>
      {/* Small precision turquoise dot */}
      <div ref={dotRef} className="cursor-dot" />

      {/* Outer translucent follower ring */}
      <div ref={ringRef} className="cursor-ring">
        {cursorLabel && <span className="cursor-label-text">{cursorLabel}</span>}
      </div>
    </div>
  );
}
