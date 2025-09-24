"use client"; // This is required for usePathname to work

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils"; // Make sure you have this utility from shadcn
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

// Define navigation links in one place for easy maintenance
const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header({ variant = "default" }: { variant?: "default" | "onDark" }) {
  const pathname = usePathname();
  const isOnDark = variant === "onDark";
  const services = [
    { href: "/services/hvac", label: "HVAC" },
    { href: "/services/chillers", label: "Chillers" },
    { href: "/services/boiler", label: "Boilers" },
    { href: "/services/piping", label: "Industrial Piping" },
    { href: "/services/plumbing", label: "Plumbing" },
    { href: "/services/refrigeration", label: "Refrigeration" },
    { href: "/services/welding", label: "Welding" },
    { href: "/services/maintenance", label: "Maintenance" },
  ];
  const industries = [{ href: "/industries/manufacturing", label: "Manufacturing" }];

  return (
    <header
      className={cn(
        "sticky top-0 z-50",
        isOnDark ? "bg-transparent" : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      )}
    >
      <div
        className={cn(
          isOnDark
            ? "w-full px-4 sm:px-6 lg:px-10 py-3 sm:py-5"
            : "container mx-auto px-4 sm:px-6 lg:px-10 py-3 sm:py-5",
          "relative flex items-center justify-between gap-6 w-full"
        )}
      >
        {/* Logo back in normal flow on the left */}
        <Link href="/" className="flex items-center shrink-0">
          <span className="sr-only">Core Mechanical</span>
          <Image
            src={isOnDark ? "/core-logo-white-green.png" : "/core-logo-no-inc.svg"}
            alt="Core Mechanical"
            width={640}
            height={160}
            className="h-14 sm:h-20 md:h-24 lg:h-28 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn("text-xl px-6 py-3", isOnDark && "text-primary-foreground")}>
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-[700px] p-8">
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3 text-white">Our Services</h3>
                    <p className="text-base text-white/80">Comprehensive mechanical solutions for your facility</p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    {services.map((item) => (
                      <NavigationMenuLink key={item.href} asChild>
                        <Link href={item.href} className="group block rounded-xl p-5 hover:bg-white/20 transition-colors">
                          <div className="font-semibold text-base text-white group-hover:text-white transition-colors mb-2">{item.label}</div>
                          <div className="text-sm text-white/70 group-hover:text-white/90 transition-colors leading-relaxed">
                            Professional mechanical service
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <NavigationMenuLink asChild>
                      <Link href="/services" className="inline-flex items-center text-base font-medium text-white hover:text-white/80 transition-colors">
                        View All Services →
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn("text-xl px-6 py-3", isOnDark && "text-primary-foreground")}>
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-[500px] p-8">
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3 text-white">Solutions</h3>
                    <p className="text-base text-white/80">Tailored approaches to optimize your operations</p>
                  </div>
                  <div className="space-y-6">
                    <NavigationMenuLink asChild>
                      <Link href="/solutions" className="group block rounded-xl p-5 hover:bg-white/20 transition-colors">
                        <div className="font-semibold text-base text-white group-hover:text-white transition-colors mb-2">Preventive Maintenance Programs</div>
                        <div className="text-sm text-white/70 group-hover:text-white/90 transition-colors leading-relaxed">Reduce downtime with scheduled maintenance</div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/solutions" className="group block rounded-xl p-5 hover:bg-white/20 transition-colors">
                        <div className="font-semibold text-base text-white group-hover:text-white transition-colors mb-2">Emergency Response</div>
                        <div className="text-sm text-white/70 group-hover:text-white/90 transition-colors leading-relaxed">24/7 rapid response for critical systems</div>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <NavigationMenuLink asChild>
                      <Link href="/solutions" className="inline-flex items-center text-base font-medium text-white hover:text-white/80 transition-colors">
                        View All Solutions →
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn("text-xl px-6 py-3", isOnDark && "text-primary-foreground")}>
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-[500px] p-8">
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3 text-white">Industries We Serve</h3>
                    <p className="text-base text-white/80">Specialized expertise for your industry</p>
                  </div>
                  <div className="space-y-6">
                    {industries.map((item) => (
                      <NavigationMenuLink key={item.href} asChild>
                        <Link href={item.href} className="group block rounded-xl p-5 hover:bg-white/20 transition-colors">
                          <div className="font-semibold text-base text-white group-hover:text-white transition-colors mb-2">{item.label}</div>
                          <div className="text-sm text-white/70 group-hover:text-white/90 transition-colors leading-relaxed">Industrial facilities and production plants</div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                    <NavigationMenuLink asChild>
                      <Link href="/industries" className="group block rounded-xl p-5 hover:bg-white/20 transition-colors">
                        <div className="font-semibold text-base text-white group-hover:text-white transition-colors mb-2">Commercial & Institutional</div>
                        <div className="text-sm text-white/70 group-hover:text-white/90 transition-colors leading-relaxed">Offices, schools, healthcare, and government</div>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <NavigationMenuLink asChild>
                      <Link href="/industries" className="inline-flex items-center text-base font-medium text-white hover:text-white/80 transition-colors">
                        View All Industries →
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/projects" className={cn("text-xl px-6 py-3 rounded-md", isOnDark && "text-primary-foreground")}>
                    Projects
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about" className={cn("text-xl px-6 py-3 rounded-md", isOnDark && "text-primary-foreground")}>
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/contact" className={cn("text-xl px-6 py-3 rounded-md", isOnDark && "text-primary-foreground")}>
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            asChild
            className={cn(isOnDark && "bg-white text-black hover:bg-white/90")}
          >
            <Link href="/emergency">Emergency Service</Link>
          </Button>
          <Button
            size="sm"
            asChild
            className={cn(isOnDark && "bg-white text-black hover:bg-white/90")}
          >
            <Link href="/quote">Request Quote</Link>
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden flex-1 flex justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className={cn(isOnDark && "text-white")}
              >
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
                        isActive ? "text-primary font-medium" : "text-white hover:text-primary"
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