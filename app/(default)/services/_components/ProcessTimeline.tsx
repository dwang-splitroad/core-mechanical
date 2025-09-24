export type ProcessStep = {
    step: string;
    title: string;
    description: string;
  };
  
  type Props = {
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };
  
  export function ProcessTimeline({ title, subtitle, steps }: Props) {
    return (
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">{title}</h2>
            <p className="text-lg text-muted-foreground">{subtitle}</p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2"></div>
            <div className="grid md:grid-cols-4 gap-8 relative">
              {steps.map((process) => (
                <div key={process.step} className="text-center p-6 bg-background rounded-lg shadow-md border border-border">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                  <p className="text-sm text-muted-foreground">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }