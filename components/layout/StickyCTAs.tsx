// components/layout/StickyCTAs.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function StickyCTAs() {
  return (
    <>
      {/* Desktop Sticky CTAs */}
      <div className="hidden md:flex fixed bottom-4 right-4 flex-col gap-2 z-50">
        <Button size="lg" className="bg-accent hover:bg-accent/90 shadow-lg" asChild>
          <Link href="/quote">Request Quote</Link>
        </Button>
        <Button size="lg" variant="outline" className="bg-background shadow-lg" asChild>
          <Link href="tel:5745550123">
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Link>
        </Button>
      </div>

      {/* Mobile Sticky Bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 border-t bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-3 grid grid-cols-2 gap-3">
          <Button size="sm" variant="outline" className="w-full" asChild>
            <Link href="tel:5745550123">
              <Phone className="w-4 h-4 mr-2" />
              Call
            </Link>
          </Button>
          <Button size="sm" className="w-full" asChild>
            <Link href="/quote">Quote</Link>
          </Button>
        </div>
      </div>
    </>
  );
}