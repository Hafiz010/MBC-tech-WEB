"use client";

import React from 'react';
import { ScrollAnimatedSection } from '@/components/ScrollAnimatedSection';

export const Footer: React.FC = () => {
  return (
    <ScrollAnimatedSection>
      <footer className="w-full flex flex-col items-center text-base sm:text-lg md:text-xl lg:text-2xl text-[rgba(125,125,125,1)] font-bold">
        <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl self-center mt-10 sm:mt-16 md:mt-24 lg:mt-[120px] xl:mt-[180px] 2xl:mt-[249px] text-center px-4 leading-tight">
          <span className="text-white">We Attack, </span>
          <span className="text-red-600">We Protect.</span>
        </div>
        
        <div className="bg-[rgba(13,13,13,1)] self-center flex w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] items-center justify-center mt-6 sm:mt-8 md:mt-10 lg:mt-[40px] xl:mt-[60px] 2xl:mt-[72px] py-4 sm:py-5 md:py-6 lg:py-[20px] xl:py-[26px] rounded-[20px] px-4 my-6 sm:my-8 md:my-10 lg:my-[40px] xl:my-[70px] mx-4">
          <div className="text-center text-xs sm:text-sm md:text-base lg:text-lg">© MBC Laboratory, 2025.</div>
        </div>
      </footer>
    </ScrollAnimatedSection>
  );
};
