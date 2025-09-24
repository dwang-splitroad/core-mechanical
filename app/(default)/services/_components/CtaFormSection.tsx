import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Feature = {
  icon: React.ReactNode;
  text: string;
};

type Props = {
  title: string;
  description: string;
  features: Feature[];
  formButtonText: string;
};

export function CtaFormSection({ title, description, features, formButtonText }: Props) {
  // NOTE: This form is for display. In a real application, you would use
  // react-hook-form and zod for state management and validation.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Form submitted:", data);
    alert("Thank you for your submission! We will be in touch shortly.");
    event.currentTarget.reset();
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">{title}</h2>
              <p className="text-primary-foreground/90 mb-6">{description}</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 text-sm">
                {features.map((feature) => (
                  <div key={feature.text} className="flex items-center gap-2">
                    {feature.icon}
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-background text-foreground">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><Label htmlFor="name">Name</Label><Input id="name" name="name" placeholder="Your name" required /></div>
                    <div><Label htmlFor="company">Company</Label><Input id="company" name="company" placeholder="Company name" /></div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><Label htmlFor="phone">Phone</Label><Input id="phone" name="phone" placeholder="(574) 555-0123" required/></div>
                    <div><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" placeholder="email@company.com" required/></div>
                  </div>
                  <div>
                    <Label htmlFor="description">Brief Description of Issues</Label>
                    <Textarea id="description" name="description" placeholder="Describe your concerns or service needs..." />
                  </div>
                  <Button type="submit" className="w-full" size="lg">{formButtonText}</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}