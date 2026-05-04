/**
 * Showcase Lightbox Component
 * Fullscreen image viewer with FLIP animation and keyboard navigation.
 */

import { useEffect, useRef, useState } from 'react';
import './showcase.css';

const PHASE_COLORS = {
  Discover: '#8B5CF6',
  Build: '#A78BFA',
  Operate: '#10B981',
};

export function ShowcaseLightbox({
  screenshots,
  currentIndex,
  isOpen,
  originRect,
  onClose,
  onNext,
  onPrev,
}) {
  const [animationState, setAnimationState] = useState('exited');
  const [initialTransform, setInitialTransform] = useState('');
  const imageRef = useRef(null);
  const exitTimeoutRef = useRef(null);

  const current = screenshots[currentIndex];

  // Handle open animation
  useEffect(() => {
    if (isOpen && animationState === 'exited') {
      if (exitTimeoutRef.current) {
        clearTimeout(exitTimeoutRef.current);
        exitTimeoutRef.current = null;
      }

      if (originRect && imageRef.current) {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const targetWidth = Math.min(viewportWidth * 0.85, 1200);
        const targetHeight = targetWidth * (10 / 16);
        const targetX = (viewportWidth - targetWidth) / 2;
        const targetY = (viewportHeight - targetHeight) / 2;

        const scaleX = originRect.width / targetWidth;
        const scaleY = originRect.height / targetHeight;
        const translateX = originRect.left - targetX;
        const translateY = originRect.top - targetY;

        setInitialTransform(`translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`);
      }

      setAnimationState('entering');

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimationState('entered');
        });
      });
    }
  }, [isOpen, originRect, animationState]);

  // Handle close animation
  useEffect(() => {
    if (!isOpen && (animationState === 'entered' || animationState === 'entering')) {
      setAnimationState('exiting');

      exitTimeoutRef.current = setTimeout(() => {
        setAnimationState('exited');
        exitTimeoutRef.current = null;
      }, 350);
    }
  }, [isOpen, animationState]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (exitTimeoutRef.current) {
        clearTimeout(exitTimeoutRef.current);
      }
    };
  }, []);

  if (animationState === 'exited') return null;

  const showContent = animationState === 'entered' || animationState === 'exiting';

  return (
    <div
      className={`lightbox ${animationState}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="lightbox-backdrop" />

      <div
        ref={imageRef}
        className="lightbox-image-container"
        style={
          animationState === 'entering' && initialTransform
            ? { transform: initialTransform }
            : undefined
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className="browser-chrome">
          <div className="traffic-lights">
            <span className="light red" />
            <span className="light yellow" />
            <span className="light green" />
          </div>
          <div className="address-bar">
            <span className="url">conduit.stark.com</span>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="lightbox-image-wrapper">
          <img src={current.src} alt={current.title} draggable={false} />
        </div>
      </div>

      {showContent && (
        <>
          <button
            className="lightbox-nav-btn lightbox-nav-prev"
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            aria-label="Previous"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            className="lightbox-nav-btn lightbox-nav-next"
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            aria-label="Next"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </>
      )}

      {showContent && (
        <div className="caption-panel" onClick={(e) => e.stopPropagation()}>
          <div className="phase-badge" style={{ backgroundColor: PHASE_COLORS[current.phase] }}>
            {current.phase}
          </div>
          <h3 className="caption-title">{current.title}</h3>
          {current.description && (
            <p className="caption-desc">{current.description}</p>
          )}
          <div className="pagination">
            {screenshots.map((_, i) => (
              <span key={i} className={`pagination-dot ${i === currentIndex ? 'active' : ''}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
