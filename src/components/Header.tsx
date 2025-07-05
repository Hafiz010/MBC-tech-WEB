"use client";

import React, { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useScrollOptimized } from '@/hooks/useScrollOptimized';
import { NAVIGATION_ITEMS, LOGO_CONFIG, SCROLL_CONFIG } from '@/lib/constants';

interface NavigationItem {
  id: number;
  label: string;
  url: string;
}

interface LogoItem {
  id: number;
  label: string;
  url: string;
  image_url: string;
}

export const Header: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const { isVisible } = useScrollOptimized({ 
    threshold: SCROLL_CONFIG.headerHideThreshold 
  });

  // Memoized navigation data
  const navigationItems: NavigationItem[] = useMemo(() => [...NAVIGATION_ITEMS], []);
  const logoItem: LogoItem = useMemo(() => ({ ...LOGO_CONFIG }), []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Loading skeleton
  if (isLoading) {
    return (
      <header className="bg-[rgba(13,13,13,1)] flex w-full items-center justify-between text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold whitespace-nowrap px-3 sm:px-4 md:px-6 lg:px-[30px] py-2 sm:py-3 md:py-4 fixed top-0 z-50 transition-transform duration-300 translate-y-0">
        <div className="animate-pulse bg-gray-600 rounded w-[120px] sm:w-[150px] md:w-[180px] lg:w-[220px] xl:w-[289px] h-[30px] sm:h-[35px] md:h-[40px] lg:h-[50px] xl:h-[61px]" />
        <nav className="flex items-center justify-center flex-1 gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse bg-gray-600 rounded w-10 sm:w-12 md:w-14 lg:w-16 xl:w-20 h-4 sm:h-5 md:h-6 lg:h-7 xl:h-8" />
          ))}
        </nav>
      </header>
    );
  }

  return (
    <header className={`bg-[rgba(13,13,13,1)] flex w-full items-center justify-between text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold whitespace-nowrap px-3 sm:px-4 md:px-6 lg:px-[30px] py-2 sm:py-3 md:py-4 fixed top-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {logoItem && (
        <Link href={logoItem.url} className="block" aria-label="Go to homepage">
          <Button
            variant="ghost"
            className="p-0 h-auto hover:bg-transparent"
          >
            <img
              src={logoItem.image_url}
              alt={logoItem.label}
              className="aspect-[4.74] object-contain w-[120px] sm:w-[150px] md:w-[180px] lg:w-[220px] xl:w-[300px] shrink-0 max-w-full"
              loading="eager"
            />
          </Button>
        </Link>
      )}
      
      <nav className="flex items-center justify-center flex-1 gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-[60px]" role="navigation" aria-label="Main navigation">
        {navigationItems.map((item) => {
          const isActive = pathname === item.url;
          return (
            <Link key={item.id} href={item.url}>
              <Button
                variant="ghost"
                className={`font-bold transition-colors px-1 sm:px-2 md:px-3 lg:px-4 py-2 h-auto text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl ${
                  isActive 
                    ? 'text-red-500 bg-transparent' 
                    : 'text-white hover:text-red-500 hover:bg-transparent'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </Button>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
