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
    <div className="lg:hidden">
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
        <SheetContent side="right" className="w-[300px] sm:w-[350px] flex flex-col p-0">
          {/* Header Section */}
          <div className="p-6 border-b border-border">
            <Link
              href="/"
              className="flex items-center space-x-2"
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
          </div>

          {/* Navigation Section */}
          <nav className="flex-1 px-6 py-4">
            <Accordion type="multiple" className="w-full">
              {navigationLinks.map((item) =>
                item.children ? (
                  <AccordionItem key={item.title} value={item.title}>
                    <AccordionTrigger className="py-4 text-base font-semibold hover:no-underline capitalize border-b-0">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="pl-0 pb-2">
                      <div className="flex flex-col space-y-0">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            href={child.href}
                            className={cn(
                              'py-3 px-4 text-sm text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-colors',
                              { 'text-primary font-semibold bg-accent/20': pathname === child.href }
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
                      'flex w-full items-center py-4 text-base font-semibold hover:text-primary hover:bg-accent/50 rounded-md px-4 transition-colors',
                      { 'text-primary bg-accent/20': pathname === item.href }
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                )
              )}
            </Accordion>
          </nav>
          {/* CTA Section */}
          <div className="border-t border-border p-6 flex flex-col gap-3">
            <Button asChild className="w-full h-12 text-base font-semibold">
              <Link href="/quote" onClick={() => setIsOpen(false)}>
                Request Quote
              </Link>
            </Button>
            <Button variant="outline" asChild className="w-full h-12 text-base font-semibold">
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