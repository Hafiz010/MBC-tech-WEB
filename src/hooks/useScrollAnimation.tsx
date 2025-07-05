
"use client";

import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold: number = 0.3) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);
        } else {
          // Only fade out if element has been animated and is completely out of view
          if (hasAnimated && entry.intersectionRatio === 0) {
            setIsVisible(false);
          }
        }
      },
      {
        threshold: [0, threshold],
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, hasAnimated]);

  return { elementRef, isVisible };
};
