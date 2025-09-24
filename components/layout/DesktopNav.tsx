'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { navigationLinks } from '@/config/nav';
import { cn } from '@/lib/utils';
import ListItem from '@/components/ui/ListItem';

export function DesktopNav({ isOnDark }: { isOnDark: boolean }) {
  const pathname = usePathname();

  return (
    <NavigationMenu className="hidden md:flex flex-initial" delayDuration={0}>
      <NavigationMenuList>
        {navigationLinks.map((item) => (
          <NavigationMenuItem key={item.title}>
            {item.children ? (
              <>
                <NavigationMenuTrigger
                  className={cn(
                    // Base styles
                    'bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent text-base md:text-lg',
                    // Variant styles
                    {
                      'text-white hover:bg-white/10 focus:bg-white/10 data-[active]:bg-white/10 data-[state=open]:bg-white/10':
                        isOnDark,
                      'hover:bg-accent focus:bg-accent data-[active]:bg-accent/50 data-[state=open]:bg-accent/50':
                        !isOnDark,
                    },
                    // Active page indicator styles
                  {
                      // Indicate active section without applying background pills
                      'underline underline-offset-8 text-primary':
                        !isOnDark && item.children.some((child) => pathname.startsWith(child.href)),
                      'underline underline-offset-8 text-white':
                        isOnDark && item.children.some((child) => pathname.startsWith(child.href)),
                    }
                  )}
                >
                  {item.title}
                </NavigationMenuTrigger>
                
                {/* THIS IS THE KEY CHANGE */}
                <NavigationMenuContent
                  className={cn(
                    // Apply tw-animate-css classes using our custom variants
                    'open:animate-in open:fade-in open:zoom-in-95',
                    'closed:animate-out closed:fade-out closed:zoom-out-95',
                    'duration-200' // Control the speed
                  )}
                >
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {item.children.map((child) => (
                      <ListItem
                        key={child.title}
                        title={child.title}
                        href={child.href}
                        icon={child.icon}
                      >
                        {child.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              // Logic for simple links remains the same
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    // Force transparent background for simple links to avoid white pill look
                    'bg-transparent hover:bg-transparent focus:bg-transparent text-base md:text-lg',
                    // Color behavior per theme
                    isOnDark ? 'text-white hover:bg-white/10 focus:bg-white/10' : 'text-foreground hover:text-primary',
                    // Active state: emphasize via text, not background
                    pathname === item.href && (isOnDark
                      ? 'text-white underline underline-offset-8'
                      : 'text-primary underline underline-offset-8')
                  )}
                >
                  {item.title}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}