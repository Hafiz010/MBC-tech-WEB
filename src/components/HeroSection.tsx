"use client";

import React, { useEffect, useState, useMemo } from 'react';
import { ScrollAnimatedSection } from '@/components/ScrollAnimatedSection';
import { VideoBackground } from '@/components/VideoBackground';
import { motion, AnimatePresence } from 'framer-motion';
import { HERO_TEXTS, HASHTAGS, HERO_VIDEO_ID, ANIMATION_CONFIG, SCROLL_CONFIG } from '@/lib/constants';

export const HeroSection: React.FC = () => {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, ANIMATION_CONFIG.heroTextDuration);

    return () => clearInterval(interval);
  }, []);
  
  const currentText = useMemo(() => 
    showFirst ? HERO_TEXTS[0] : HERO_TEXTS[1], 
    [showFirst]
  );
  
  return (
    <ScrollAnimatedSection className="relative w-full min-h-screen -mt-[120px] md:-mt-[140px] lg:-mt-[180px]" threshold={SCROLL_CONFIG.animationThreshold}>
      <VideoBackground videoId={HERO_VIDEO_ID} className="min-h-screen">
        <div className="bg-[rgba(54,54,54,0.3)] flex w-full flex-col items-center font-bold pt-[200px] sm:pt-[250px] md:pt-[300px] lg:pt-[325px] pb-[100px] sm:pb-[150px] md:pb-[180px] lg:pb-[200px] px-4 sm:px-8 md:px-12 lg:px-20 min-h-screen">
          <div className="flex mb-[-50px] sm:mb-[-80px] md:mb-[-100px] lg:mb-[-114px] w-full max-w-[1047px] flex-col items-stretch">
            {/* Animated Hero Text */}
            <div className="relative h-[60px] sm:h-[70px] md:h-[80px] lg:h-[100px] mb-4 sm:mb-6">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentText.id}
                  className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center absolute w-full leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ 
                    duration: ANIMATION_CONFIG.fadeDuration,
                    ease: "easeInOut"
                  }}
                >
                  {currentText.text} <span className={currentText.highlightColor}>{currentText.highlight}</span>
                </motion.h1>
              </AnimatePresence>
            </div>
            
            {/* Hashtags */}
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-[40px] text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[rgba(125,125,125,1)] mt-6 sm:mt-8 md:mt-10 lg:mt-[50px]">
              {HASHTAGS.map((hashtag: string, index: number) => (
                <motion.div
                  key={hashtag}
                  className="cursor-pointer hover:text-white transition-colors text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * ANIMATION_CONFIG.hashtagDelay,
                    duration: ANIMATION_CONFIG.hashtagDuration
                  }}
                >
                  {hashtag}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </VideoBackground>
    </ScrollAnimatedSection>
  );
};
