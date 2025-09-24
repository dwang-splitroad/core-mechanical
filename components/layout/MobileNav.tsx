// components/layout/MobileNav.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Wrench } from 'lucide-react';

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

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <Link
            href="/"
            className="mb-8 flex items-center space-x-2"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Wrench className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Core Mechanical</h1>
              <p className="text-xs text-muted-foreground">Services</p>
            </div>
          </Link>
          <nav className="flex flex-col">
            <Accordion type="multiple" className="w-full">
              {navigationLinks.map((item) =>
                item.children ? (
                  <AccordionItem key={item.title} value={item.title}>
                    <AccordionTrigger className="py-4 text-lg hover:no-underline">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="pl-4">
                      <div className="flex flex-col space-y-2">
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
                      'flex w-full items-center py-4 text-lg font-medium hover:underline',
                      { 'text-primary': pathname === item.href }
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                )
              )}
            </Accordion>
            <div className="border-t border-border pt-6 mt-6 flex flex-col gap-4">
              <Button asChild>
                <Link href="/quote" onClick={() => setIsOpen(false)}>Request Quote</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/emergency" onClick={() => setIsOpen(false)}>Emergency Service</Link>
              </Button>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}