/**
 * Parallax Tilt Hook
 * Mouse-following 3D tilt effect for cards.
 */

import { useRef, useState, useCallback } from 'react';

export function useParallaxTilt({
  maxRotation = 8,
  perspective = 1000,
  scale = 1.02,
} = {}) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});
  const [glareStyle, setGlareStyle] = useState({});

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxRotation;
    const rotateY = ((x - centerX) / centerX) * maxRotation;

    setStyle({
      transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
      transition: 'transform 0.1s ease-out',
    });

    // Glare position
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlareStyle({
      position: 'absolute',
      inset: 0,
      background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
      pointerEvents: 'none',
      borderRadius: 'inherit',
    });
  }, [maxRotation, perspective, scale]);

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    });
    setGlareStyle({});
  }, []);

  const handlers = {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };

  return { ref, style, glareStyle, handlers };
}
