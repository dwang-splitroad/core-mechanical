import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";

export type TabItem = {
  value: string;
  trigger: string;
  title: string;
  image: string;
  description: string;
  features: string[];
};

type Props = {
  title: string;
  tabs: TabItem[];
};

export function ServiceTabs({ title, tabs }: Props) {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">{title}</h2>
        </div>
        <Tabs defaultValue={tabs[0]?.value || ""} className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
            {tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.trigger}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <img src={tab.image} alt={tab.title} className="rounded-lg object-cover aspect-video" />
                <div>
                  <h3 className="text-2xl font-semibold mb-4">{tab.title}</h3>
                  <p className="text-muted-foreground mb-4">{tab.description}</p>
                  <ul className="space-y-2 text-muted-foreground">
                    {tab.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}