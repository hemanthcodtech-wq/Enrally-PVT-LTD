import React, { useState, useEffect } from 'react';
import { ShieldCheck, Sparkles } from 'lucide-react';

/**
 * SplashScreen - Premium branded intro animation for Enrally (OPC) PVT. LTD.
 * Displays during initial load, features ambient cyber glowing halo,
 * high-res animated logo, loading progress pulse, and smooth exit curtain fade.
 */
export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Only show once per session so browsing between pages isn't obstructed
    const hasSeenSplash = sessionStorage.getItem('enrally_splash_seen');
    if (hasSeenSplash) {
      setVisible(false);
      return;
    }

    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 1800);

    const removeTimer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem('enrally_splash_seen', 'true');
    }, 2400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`enrally-splash-screen ${fading ? 'splash-fade-out' : ''}`} aria-hidden="true">
      {/* Dynamic Ambient Glow Orbs */}
      <div className="splash-ambient-orb orb-1"></div>
      <div className="splash-ambient-orb orb-2"></div>
      <div className="splash-cyber-mesh"></div>

      <div className="splash-center-content">
        {/* Rotating Cyan Cyber Halo */}
        <div className="splash-halo-stage">
          <div className="splash-ring-inner"></div>
          <div className="splash-ring-outer"></div>

          <div className="splash-logo-card">
            <img 
              src="/logo.png" 
              alt="ENRALLY (OPC) PVT. LTD." 
              className="splash-brand-logo" 
            />
          </div>
        </div>

        {/* Corporate Identity Tagline */}
        <div className="splash-tagline-area">
          <span className="splash-badge">
            <Sparkles size={13} className="splash-sparkle" />
            <span>OPERATIONAL EXCELLENCE & STATUTORY ASSURANCE</span>
          </span>
          <p className="splash-subtext">Enterprise Workforce & Facility Care</p>
        </div>

        {/* Loading Progress Bar */}
        <div className="splash-loader-track">
          <div className="splash-loader-fill"></div>
        </div>
      </div>
    </div>
  );
}
