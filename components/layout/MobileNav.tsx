'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navigationLinks } from '@/config/nav';
import { cn } from '@/lib/utils';

export function MobileNav({ isOnDark }: { isOnDark: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={cn('hover:bg-transparent', {
              'text-white hover:text-white/90 focus:bg-white/10': isOnDark,
              'text-foreground': !isOnDark,
            })}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col">
          <Link
            href="/"
            className="mb-4 flex items-center space-x-2"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/core-logo-no-inc.svg"
              alt="Core Mechanical Logo"
              width={160}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <nav className="flex-1">
            <Accordion type="multiple" className="w-full">
              {navigationLinks.map((item) =>
                item.children ? (
                  <AccordionItem key={item.title} value={item.title}>
                    <AccordionTrigger className="py-4 text-lg hover:no-underline capitalize">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="pl-4">
                      <div className="flex flex-col space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            href={child.href}
                            className={cn(
                              'py-2 text-muted-foreground hover:text-primary',
                              { 'text-primary font-semibold': pathname === child.href }
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={cn(
                      'flex w-full items-center border-b py-4 text-lg font-medium hover:underline',
                      { 'text-primary': pathname === item.href }
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                )
              )}
            </Accordion>
          </nav>
          <div className="border-t border-border pt-6 mt-6 flex flex-col gap-4">
            <Button asChild className="w-full">
              <Link href="/quote" onClick={() => setIsOpen(false)}>
                Request Quote
              </Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <Link href="/emergency" onClick={() => setIsOpen(false)}>
                Emergency Service
              </Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}