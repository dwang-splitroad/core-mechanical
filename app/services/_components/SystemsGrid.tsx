import { Card } from "@/components/ui/card";

type System = {
  icon: React.ReactNode;
  name: string;
};

type Props = {
  title: string;
  subtitle: string;
  systems: System[];
};

export function SystemsGrid({ title, subtitle, systems }: Props) {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">{title}</h2>
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {systems.map((system) => (
            <Card key={system.name} className="p-6 flex flex-col items-center justify-center hover:shadow-md transition-shadow">
              <div className="text-primary mb-3">{system.icon}</div>
              <h3 className="text-sm font-semibold">{system.name}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}