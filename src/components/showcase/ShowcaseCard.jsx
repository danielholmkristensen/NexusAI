/**
 * Showcase Card Component
 * Interactive 3D card with browser chrome frame, tilt effect, and reflection.
 */

import { useRef } from 'react';
import { useParallaxTilt } from './useParallaxTilt';
import './showcase.css';

const PHASE_COLORS = {
  Discover: { dot: '#8B5CF6', ring: 'rgba(139, 92, 246, 0.2)' },
  Build: { dot: '#A78BFA', ring: 'rgba(167, 139, 250, 0.2)' },
  Operate: { dot: '#10B981', ring: 'rgba(16, 185, 129, 0.2)' },
};

export function ShowcaseCard({ screenshot, index, onClick, className = '' }) {
  const cardRef = useRef(null);
  const { ref, style, glareStyle, handlers } = useParallaxTilt({
    maxRotation: 8,
    perspective: 1000,
    scale: 1.02,
  });

  const handleClick = () => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      onClick(index, rect);
    }
  };

  const phaseColor = PHASE_COLORS[screenshot.phase];
  const displayUrl = screenshot.url || 'portal.stark.com';

  return (
    <div className={`showcase-card-wrapper ${className}`}>
      <div
        ref={(el) => {
          cardRef.current = el;
          ref.current = el;
        }}
        className="showcase-card"
        style={style}
        onClick={handleClick}
        {...handlers}
      >
        {/* Browser chrome header */}
        <div className="browser-chrome">
          <div className="traffic-lights">
            <span className="light red" />
            <span className="light yellow" />
            <span className="light green" />
          </div>
          <div className="address-bar">
            <span className="url">{displayUrl}</span>
          </div>
          <div className="chrome-actions" />
        </div>

        {/* Screenshot content */}
        <div className="screenshot-container">
          <img
            src={screenshot.src}
            alt={screenshot.title}
            loading="lazy"
            draggable={false}
          />
        </div>

        {/* Glare overlay */}
        <div style={glareStyle} />

        {/* Card footer */}
        <div className="card-footer">
          <div className="phase-indicator">
            <span
              className="phase-dot"
              style={{
                backgroundColor: phaseColor.dot,
                boxShadow: `0 0 0 4px ${phaseColor.ring}`,
              }}
            />
            <span className="phase-label">{screenshot.phase}</span>
          </div>
          <h4 className="card-title">{screenshot.title}</h4>
          {screenshot.description && (
            <p className="card-description">{screenshot.description}</p>
          )}
        </div>
      </div>

      {/* Reflection */}
      <div className="card-reflection" />
    </div>
  );
}
