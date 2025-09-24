// components/layout/Header.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import { cn } from '@/lib/utils';

interface HeaderProps {
  variant?: 'default' | 'onDark';
}

export function Header({ variant = 'default' }: HeaderProps) {
  const isOnDark = variant === 'onDark';

  return (
    <header className={cn(
      isOnDark 
        ? 'bg-transparent' 
        : 'bg-background/95 backdrop-blur border-b border-border/50'
    )}>
      <div className="w-full px-4 relative h-32 md:h-36 flex items-center justify-between">
        {/* Logo - positioned at far left edge */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="sr-only">Core Mechanical</span>
            <Image
              src={isOnDark ? "/core-logo-white-green.png" : "/core-logo-no-inc.svg"}
              alt="Core Mechanical Logo"
              width={300}
              height={84}
              className="h-20 sm:h-22 md:h-24 lg:h-28 w-auto"
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
          <div className="hidden md:flex items-center space-x-3">
            <Button variant={isOnDark ? 'secondary' : 'default'} size="sm" asChild>
              <Link href="/emergency">Emergency Service</Link>
            </Button>
            <Button variant={isOnDark ? 'secondary' : 'default'} size="sm" asChild>
              <Link href="/quote">Request Quote</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <MobileNav isOnDark={isOnDark} />
          </div>
        </div>
      </div>
    </header>
  );
}