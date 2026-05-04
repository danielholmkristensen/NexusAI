/**
 * Screenshot Showcase Component
 * Netflix-style horizontal scrolling gallery with phase indicators.
 */

import { useRef, useState, useEffect, useCallback } from 'react';
import { ShowcaseCard } from './ShowcaseCard';
import { ShowcaseLightbox } from './ShowcaseLightbox';
import { useLightbox } from './useLightbox';
import './showcase.css';

const PHASE_COLORS = {
  Discover: { color: '#8B5CF6', label: 'Discover' },
  Build: { color: '#A78BFA', label: 'Build' },
  Operate: { color: '#10B981', label: 'Operate' },
};

export function ScreenshotShowcase({
  title = 'See the Agentic OS in Action',
  subtitle = 'From discovery to delivery',
  screenshots,
}) {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const lightbox = useLightbox(screenshots.length);

  // Track scroll position
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollPosition = carousel.scrollLeft;
      const cardWidth = 452;
      const newIndex = Math.round(scrollPosition / cardWidth);
      setActiveIndex(Math.min(newIndex, screenshots.length - 1));
    };

    carousel.addEventListener('scroll', handleScroll, { passive: true });
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, [screenshots.length]);

  // Mouse drag scrolling
  const handleMouseDown = useCallback((e) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    setIsDragging(true);
    setStartX(e.pageX - carousel.offsetLeft);
    setScrollLeft(carousel.scrollLeft);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    const carousel = carouselRef.current;
    if (!carousel) return;

    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.5;
    carousel.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const scrollToIndex = (index) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const cardWidth = 452;
    carousel.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
  };

  const scrollPrev = () => {
    if (activeIndex > 0) scrollToIndex(activeIndex - 1);
  };

  const scrollNext = () => {
    if (activeIndex < screenshots.length - 1) scrollToIndex(activeIndex + 1);
  };

  const handleCardClick = (index, rect) => {
    if (!isDragging) {
      lightbox.open(index, rect);
    }
  };

  const phases = [...new Set(screenshots.map(s => s.phase))];
  const activePhase = screenshots[activeIndex]?.phase || 'Discover';
  const progress = screenshots.length > 1 ? activeIndex / (screenshots.length - 1) : 0;

  return (
    <>
      <section className="showcase-section">
        <div className="showcase-header">
          <div className="header-content">
            <h2 className="showcase-title">{title}</h2>
            <p className="showcase-subtitle">{subtitle}</p>
          </div>

          <div className="phase-indicator-header">
            {phases.map((phase) => (
              <div key={phase} className={`phase-item ${phase === activePhase ? 'active' : ''}`}>
                <span className="phase-dot" style={{ backgroundColor: PHASE_COLORS[phase].color }} />
                <span className="phase-label">{phase}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="progress-track">
          <div className="progress-fill" style={{ transform: `scaleX(${progress})` }} />
        </div>

        <div className="carousel-container">
          <button
            className={`nav-arrow nav-prev ${activeIndex === 0 ? 'hidden' : ''}`}
            onClick={scrollPrev}
            aria-label="Previous"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            ref={carouselRef}
            className={`carousel ${isDragging ? 'dragging' : ''}`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {screenshots.map((screenshot, index) => (
              <ShowcaseCard
                key={index}
                screenshot={screenshot}
                index={index}
                onClick={handleCardClick}
              />
            ))}
          </div>

          <button
            className={`nav-arrow nav-next ${activeIndex === screenshots.length - 1 ? 'hidden' : ''}`}
            onClick={scrollNext}
            aria-label="Next"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="dot-indicators">
          {screenshots.map((screenshot, index) => (
            <button
              key={index}
              className={`dot-indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to ${screenshot.title}`}
              style={{ backgroundColor: index === activeIndex ? PHASE_COLORS[screenshot.phase].color : undefined }}
            />
          ))}
        </div>

        <div className="counter">
          <span className="current">{String(activeIndex + 1).padStart(2, '0')}</span>
          <span className="divider">/</span>
          <span className="total">{String(screenshots.length).padStart(2, '0')}</span>
        </div>
      </section>

      <ShowcaseLightbox
        screenshots={screenshots}
        currentIndex={lightbox.currentIndex}
        isOpen={lightbox.isOpen}
        originRect={lightbox.originRect}
        onClose={lightbox.close}
        onNext={lightbox.next}
        onPrev={lightbox.prev}
      />
    </>
  );
}
