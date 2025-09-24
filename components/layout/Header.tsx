// components/layout/Header.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import { cn } from '@/lib/utils';

interface HeaderProps {
  variant?: 'default' | 'onDark' | 'dynamic';
  dynamicTargetId?: string;
}

export function Header({ variant = 'dynamic', dynamicTargetId = 'hero' }: HeaderProps) {
  const [isOnDark, setIsOnDark] = useState<boolean>(variant === 'onDark');

  useEffect(() => {
    if (variant !== 'dynamic') return;
    const target = document.getElementById(dynamicTargetId);
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsOnDark(entry.isIntersecting && entry.intersectionRatio > 0.1);
      },
      { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [variant, dynamicTargetId]);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-colors',
      isOnDark 
        ? 'bg-transparent' 
        : 'bg-[#232323]/98 backdrop-blur-sm border-b border-border/50 will-change-[backdrop-filter]'
    )}>
      <div
        className={cn(
          "w-full px-2 sm:px-4 relative flex items-center justify-between transition-all duration-300",
          isOnDark ? "h-16 sm:h-20 md:h-28 lg:h-32" : "h-12 sm:h-14 md:h-16 lg:h-16"
        )}
      >
        {/* Logo - positioned at far left edge */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="sr-only">Core Mechanical</span>
            <Image
              src={isOnDark ? "/core-logo-white-green.png" : "/core-logo-white-green.png"}
              alt="Core Mechanical Logo"
              width={260}
              height={72}
              className={cn(
                "w-auto transition-all duration-300",
                isOnDark ? "h-8 sm:h-10 md:h-16 lg:h-20 xl:h-24" : "h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14"
              )}
              priority
            />
          </Link>
        </div>

        {/* Center: Desktop Navigation - absolutely centered */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <DesktopNav isOnDark={isOnDark} />
        </div>

        {/* CTA Buttons - positioned at far right edge */}
        <div className="flex items-center">
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
            <Button variant={isOnDark ? 'secondary' : 'default'} size="sm" asChild className="text-xs xl:text-sm px-2 xl:px-3">
              <Link href="/emergency">Emergency</Link>
            </Button>
            <Button variant={isOnDark ? 'secondary' : 'default'} size="sm" asChild className="text-xs xl:text-sm px-2 xl:px-3">
              <Link href="/quote">Quote</Link>
            </Button>
          </div>
          <div className="lg:hidden">
            <MobileNav isOnDark={isOnDark} />
          </div>
        </div>
      </div>
    </header>
  );
}