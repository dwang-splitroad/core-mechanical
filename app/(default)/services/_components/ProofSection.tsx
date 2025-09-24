import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Star } from "lucide-react";

type CaseStudy = {
  title: string;
  challenge: string;
  solution: string;
  results: string;
};

type Testimonial = {
  quote: string;
  author: string;
  title: string;
};

type Props = {
  title: string;
  caseStudy: CaseStudy;
  testimonial: Testimonial;
};

export function ProofSection({ title, caseStudy, testimonial }: Props) {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">{title}</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Shield className="w-6 h-6" /> {caseStudy.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground"><strong>Challenge:</strong> {caseStudy.challenge}</p>
              <p className="text-muted-foreground"><strong>Solution:</strong> {caseStudy.solution}</p>
              <p className="text-muted-foreground"><strong>Results:</strong> {caseStudy.results}</p>
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent-foreground">
                <Star className="w-6 h-6 text-amber-500" /> Customer Testimonial
              </CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="text-lg font-medium mb-4 text-balance">{testimonial.quote}</blockquote>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}