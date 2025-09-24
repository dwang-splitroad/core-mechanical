import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
  callToAction: {
    text: string;
    href: string;
  };
  secondaryAction: {
    text: string;
    href: string;
  };
};

export function ServicePageHero({ icon, title, description, callToAction, secondaryAction }: Props) {
  return (
    <section className="text-white py-16 lg:py-20" style={{ backgroundColor: '#8cc63e' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">{icon}</div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">{title}</h1>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto text-balance">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4" asChild>
              <Link href={callToAction.href}>
                <Phone className="w-5 h-5 mr-2" />
                {callToAction.text}
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 bg-transparent" asChild>
              <Link href={secondaryAction.href}>{secondaryAction.text}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}