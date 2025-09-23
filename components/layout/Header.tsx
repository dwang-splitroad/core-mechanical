"use client"; // This is required for usePathname to work

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Wrench, Menu } from "lucide-react";
import { cn } from "@/lib/utils"; // Make sure you have this utility from shadcn
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

// Define navigation links in one place for easy maintenance
const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Wrench className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Core Mechanical</h1>
            <p className="text-xs text-muted-foreground">Services</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors",
                  isActive
                    ? "text-primary font-medium"
                    : "text-foreground hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="/emergency">Emergency Service</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/quote">Request Quote</Link>
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 p-4">
                {navLinks.map((link) => {
                  const isActive = pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "text-base",
                        isActive ? "text-primary font-medium" : "text-foreground hover:text-primary"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
              <div className="mt-auto p-4 grid grid-cols-1 gap-3">
                <Button variant="outline" asChild>
                  <Link href="/emergency">Emergency Service</Link>
                </Button>
                <Button asChild>
                  <Link href="/quote">Request Quote</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}