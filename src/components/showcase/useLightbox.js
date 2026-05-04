/**
 * Lightbox State Management Hook
 * Manages lightbox open/close state, current index, and keyboard navigation.
 */

import { useState, useCallback, useEffect } from 'react';

export function useLightbox(totalItems) {
  const [state, setState] = useState({
    isOpen: false,
    currentIndex: 0,
    originRect: null,
  });

  const open = useCallback((index, rect) => {
    setState({
      isOpen: true,
      currentIndex: index,
      originRect: rect || null,
    });
    document.body.style.overflow = 'hidden';
  }, []);

  const close = useCallback(() => {
    setState(prev => ({
      ...prev,
      isOpen: false,
    }));
    document.body.style.overflow = '';
  }, []);

  const next = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % totalItems,
      originRect: null,
    }));
  }, [totalItems]);

  const prev = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + totalItems) % totalItems,
      originRect: null,
    }));
  }, [totalItems]);

  // Keyboard navigation
  useEffect(() => {
    if (!state.isOpen) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
          close();
          break;
        case 'ArrowRight':
          next();
          break;
        case 'ArrowLeft':
          prev();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [state.isOpen, close, next, prev]);

  return {
    ...state,
    open,
    close,
    next,
    prev,
  };
}
