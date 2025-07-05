"use client";

import { useEffect, useState, useCallback, useRef } from 'react';

interface UseScrollOptimizedOptions {
  threshold?: number;
  throttleMs?: number;
}

export const useScrollOptimized = (options: UseScrollOptimizedOptions = {}) => {
  const { threshold = 100, throttleMs = 16 } = options;
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY < lastScrollY || currentScrollY < threshold);
    setLastScrollY(currentScrollY);
  }, [lastScrollY, threshold]);

  useEffect(() => {
    let ticking = false;
    
    const throttledScroll = () => {
      if (!ticking) {
        timeoutRef.current = setTimeout(() => {
          handleScroll();
          ticking = false;
        }, throttleMs);
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handleScroll, throttleMs]);

  return { isVisible, lastScrollY };
}; 