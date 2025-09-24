// app/industries/food-beverage/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Utensils, CheckCircle, Thermometer, Droplets, Shield, Clock, Users, Phone, ArrowRight, Snowflake, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function FoodBeveragePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-white py-16 lg:py-24" style={{ backgroundColor: '#8cc63e' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
              <Utensils className="w-4 h-4 mr-2" />
              Food & Beverage Industry
            </Badge>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Critical Refrigeration & HVAC for Food Processing
            </h1>

            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto text-balance">
              Protecting your products and profits with specialized mechanical services for food processing, 
              storage, and distribution facilities. HACCP compliant solutions you can trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-4" asChild>
                <Link href="/quote">Get Food Safety Assessment</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 bg-transparent" asChild>
                <Link href="tel:574-555-0123">
                  <Phone className="w-4 h-4 mr-2" />
                  Emergency Cold Storage Service
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Systems Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
              Critical Systems We Service
            </h2>
            <p className="text-xl text-muted-foreground">
              Specialized expertise for the unique demands of food and beverage operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Snowflake className="w-8 h-8" />,
                title: "Walk-in Coolers & Freezers",
                description: "Expert service for all commercial refrigeration units",
                features: ["Temperature monitoring", "Door seal replacement", "Compressor service", "Defrost system repair"]
              },
              {
                icon: <Thermometer className="w-8 h-8" />,
                title: "Process Cooling Systems",
                description: "Specialized cooling for food processing equipment",
                features: ["Blast chillers", "Spiral freezers", "Process water cooling", "Glycol systems"]
              },
              {
                icon: <Droplets className="w-8 h-8" />,
                title: "Ice Machines & Dispensers",
                description: "Complete ice system service and sanitation",
                features: ["Cleaning & sanitizing", "Water filtration", "Production optimization", "Preventive maintenance"]
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "HVAC & Air Quality",
                description: "Climate control for food safety and worker comfort",
                features: ["Temperature control", "Humidity management", "Air filtration", "Positive pressure systems"]
              }
            ].map((system, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">{system.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{system.title}</h3>
                  <p className="text-muted-foreground mb-4 text-center text-sm">{system.description}</p>
                  <ul className="space-y-2">
                    {system.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Food Safety Compliance */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
              Food Safety & Compliance Expertise
            </h2>
            <p className="text-xl text-muted-foreground">
              We understand the critical importance of food safety regulations and compliance requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  HACCP Compliance Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Temperature monitoring and documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Critical control point system maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Sanitation system design and service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>FDA and USDA compliance assistance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  Emergency Response for Food Loss Prevention
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>24/7 emergency refrigeration service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Rapid response to prevent product loss</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Temporary cooling solutions available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Insurance documentation support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
              Trusted by Food Industry Leaders
            </h2>
            <p className="text-xl text-muted-foreground">
              Years of experience serving Northern Indiana's food and beverage sector
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Industry Experience",
                description: "Over 15 years serving food processing, restaurants, and distribution facilities throughout Northern Indiana."
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Rapid Emergency Response",
                description: "Understanding that equipment failure means product loss, we provide priority emergency service to minimize downtime."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Regulatory Knowledge",
                description: "Deep understanding of FDA, USDA, and local health department requirements for food facility mechanical systems."
              },
              {
                icon: <Thermometer className="w-8 h-8" />,
                title: "Temperature Control Expertise",
                description: "Specialized knowledge in maintaining precise temperature control for different food products and processes."
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Preventive Maintenance",
                description: "Customized PM programs designed to prevent costly equipment failures and product loss."
              },
              {
                icon: <Snowflake className="w-8 h-8" />,
                title: "Cold Chain Specialists",
                description: "Expert service for the entire cold chain from processing through storage and distribution."
              }
            ].map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 lg:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
                Protect Your Products & Profits
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Don't let equipment failure put your business at risk. Partner with Northern Indiana's 
                food industry mechanical experts for reliable, compliant solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8 py-4" asChild>
                  <Link href="/quote">Schedule Food Safety Assessment</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 bg-transparent"
                  asChild
                >
                  <Link href="/services/refrigeration">
                    Learn About Our Refrigeration Services
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
