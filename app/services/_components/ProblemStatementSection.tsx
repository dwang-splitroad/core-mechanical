import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

type Props = {
  mainTitle: string;
  mainSubtitle: string;
  problemTitle: string;
  problemIcon: React.ReactNode;
  problems: string[];
  card: {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
};

export function ProblemStatementSection({ mainTitle, mainSubtitle, problemTitle, problemIcon, problems, card }: Props) {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">{mainTitle}</h2>
          <p className="text-lg text-muted-foreground">{mainSubtitle}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              {problemIcon}
              {problemTitle}
            </h3>
            <div className="space-y-4">
              {problems.map((symptom) => (
                <div key={symptom} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">{symptom}</span>
                </div>
              ))}
            </div>
          </div>
          <Card className="bg-muted/50 border-border shadow-lg">
            <CardContent className="p-8">
              <h4 className="text-xl font-semibold mb-4">{card.title}</h4>
              <p className="text-muted-foreground mb-6">{card.description}</p>
              <Button className="w-full" size="lg" asChild>
                <Link href={card.buttonHref}>{card.buttonText}</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}