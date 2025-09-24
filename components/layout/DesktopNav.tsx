'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationLinks } from '@/config/nav';
import { cn } from '@/lib/utils';

export function DesktopNav({ isOnDark }: { isOnDark: boolean }) {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center space-x-1">
      {navigationLinks.map((item) => (
        <div key={item.title} className="relative group">
          {item.children ? (
            <>
              {/* Dropdown Trigger */}
              <button
                className={cn(
                  'inline-flex items-center justify-center rounded-md px-4 py-2 text-base md:text-lg font-medium transition-colors',
                  {
                    'text-white hover:bg-white/10': isOnDark,
                    'text-foreground hover:bg-accent hover:text-accent-foreground': !isOnDark,
                  },
                  // Active page indicator styles
                  {
                    'underline underline-offset-8 text-primary':
                      !isOnDark && item.children.some((child) => pathname.startsWith(child.href)),
                    'underline underline-offset-8 text-white':
                      isOnDark && item.children.some((child) => pathname.startsWith(child.href)),
                  }
                )}
              >
                {item.title}
                <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Content - Immediate CSS hover */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[500px] lg:w-[600px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 ease-out z-50">
                <div className={cn(
                  "backdrop-blur-md border shadow-xl rounded-md p-4",
                  isOnDark 
                    ? "bg-black/30 text-white border-white/20" 
                    : "bg-background/95 text-foreground border-border shadow-lg"
                )}>
                  <div className="grid grid-cols-2 gap-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.href}
                        className={cn(
                          "block rounded-md p-3 transition-colors",
                          isOnDark 
                            ? "hover:bg-white/20" 
                            : "hover:bg-accent/20"
                        )}
                      >
                        <div className="flex items-start space-x-3">
                          {child.icon && (
                            <child.icon className={cn(
                              "h-5 w-5 mt-0.5",
                              isOnDark ? "text-white/80" : "text-muted-foreground"
                            )} />
                          )}
                          <div>
                            <div className={cn(
                              "font-semibold",
                              isOnDark ? "text-white" : "text-foreground"
                            )}>
                              {child.title}
                            </div>
                            <div className={cn(
                              "text-sm mt-1",
                              isOnDark ? "text-white/70" : "text-muted-foreground"
                            )}>
                              {child.description}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            // Simple link
            <Link
              href={item.href}
              className={cn(
                'inline-flex items-center justify-center rounded-md px-4 py-2 text-base md:text-lg font-medium transition-colors',
                {
                  'text-white hover:bg-white/10': isOnDark,
                  'text-foreground hover:bg-accent hover:text-accent-foreground': !isOnDark,
                },
                // Active state
                pathname === item.href && (isOnDark
                  ? 'text-white underline underline-offset-8'
                  : 'text-primary underline underline-offset-8')
              )}
            >
              {item.title}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}