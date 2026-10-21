import React, { useState, useEffect } from 'react';
import {
  Play, Maximize2, X, ChevronLeft, ChevronRight,
  Film, Image as ImageIcon, Volume2, VolumeX
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { allCuratedMedia } from '../data/galleryData';

export default function Gallery() {
  useScrollReveal();

  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isMuted, setIsMuted] = useState(true);

  // Video hover preview
  const handleMouseEnterVideo = (e) => {
    const video = e.currentTarget.querySelector('video');
    if (video) video.play().catch(() => {});
  };

  const handleMouseLeaveVideo = (e) => {
    const video = e.currentTarget.querySelector('video');
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const onKey = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev + 1) % allCuratedMedia.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev - 1 + allCuratedMedia.length) % allCuratedMedia.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex]);

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  const activeMedia = lightboxIndex !== null ? allCuratedMedia[lightboxIndex] : null;

  return (
    <div className="pure-gallery-page editorial-gallery">
      {/* Dynamic ambient lighting backdrop */}
      <div className="gallery-ambient-glow glow-1"></div>
      <div className="gallery-ambient-glow glow-2"></div>
      <div className="gallery-ambient-glow glow-3"></div>

      {/* ========================================================
          DESIGN MOSAIC COMPOSITION (NO FILTERS / ZERO CLUTTER)
          ======================================================== */}
      <main className="editorial-mosaic-container">
        <div className="editorial-bento-grid">
          {allCuratedMedia.map((item, index) => {
            const isVideo = item.type === 'video';
            const layoutClass = item.layout || 'standard';

            return (
              <div
                key={item.id}
                className={`mosaic-tile layout-${layoutClass} type-${item.type}`}
                data-reveal="fade-up"
                onMouseEnter={isVideo ? handleMouseEnterVideo : undefined}
                onMouseLeave={isVideo ? handleMouseLeaveVideo : undefined}
                onClick={() => setLightboxIndex(index)}
              >
                <div className="tile-canvas-frame">
                  {isVideo ? (
                    <div className="tile-video-wrapper">
                      <video
                        src={item.src}
                        preload="metadata"
                        muted
                        loop
                        playsInline
                        className="tile-media-element"
                      />
                      <div className="tile-video-center-orb">
                        <Play size={20} className="orb-play-icon" />
                      </div>
                      <div className="tile-glass-badge">
                        <Film size={11} />
                        <span>VIDEO</span>
                      </div>
                    </div>
                  ) : (
                    <div className="tile-image-wrapper">
                      <img
                        src={item.src}
                        alt="Enrally Media Asset"
                        loading="lazy"
                        className="tile-media-element"
                      />
                      <div className="tile-glass-badge image-badge">
                        <ImageIcon size={11} />
                        <span>PHOTO</span>
                      </div>
                    </div>
                  )}

                  {/* Atmospheric Light Sweep on hover */}
                  <div className="tile-hover-aurora">
                    <div className="aurora-zoom-circle">
                      <Maximize2 size={22} />
                    </div>
                  </div>

                  {/* Border Light Sheen */}
                  <div className="tile-border-glow"></div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* ========================================================
          FULLSCREEN CINEMATIC LIGHTBOX
          ======================================================== */}
      {lightboxIndex !== null && activeMedia && (
        <div
          className="cinematic-lightbox-backdrop"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Glass Top Controls */}
          <div className="lightbox-glass-bar" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-index-badge">
              <span className="current-idx">{lightboxIndex + 1}</span>
              <span className="idx-separator">/</span>
              <span className="total-idx">{allCuratedMedia.length}</span>
            </div>

            <div className="lightbox-right-controls">
              {activeMedia.type === 'video' && (
                <button
                  className="control-circle-btn"
                  onClick={() => setIsMuted(!isMuted)}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
              )}
              <button
                className="control-circle-btn close-circle-btn"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Left / Right Nav Arrows */}
          <button
            className="lightbox-side-arrow arrow-left"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev - 1 + allCuratedMedia.length) % allCuratedMedia.length);
            }}
            aria-label="Previous Media"
          >
            <ChevronLeft size={34} />
          </button>

          <button
            className="lightbox-side-arrow arrow-right"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev + 1) % allCuratedMedia.length);
            }}
            aria-label="Next Media"
          >
            <ChevronRight size={34} />
          </button>

          {/* Media Viewport with Touch-Friendly Fullscreen Stage */}
          <div
            className="lightbox-pure-stage"
            onClick={(e) => e.stopPropagation()}
          >
            {activeMedia.type === 'video' ? (
              <video
                key={activeMedia.src}
                src={activeMedia.src}
                controls
                autoPlay
                playsInline
                muted={isMuted}
                className="stage-video"
              />
            ) : (
              <img
                key={activeMedia.src}
                src={activeMedia.src}
                alt="Enrally Media Asset"
                className="stage-image"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
