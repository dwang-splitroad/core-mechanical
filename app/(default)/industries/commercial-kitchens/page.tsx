// app/industries/commercial-kitchens/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChefHat, CheckCircle, Flame, Droplets, Wind, Snowflake, Users, Phone, ArrowRight, AlertTriangle, Clock } from "lucide-react"
import Link from "next/link"

export default function CommercialKitchensPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-white py-16 lg:py-24" style={{ backgroundColor: '#8cc63e' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
              <ChefHat className="w-4 h-4 mr-2" />
              Commercial Kitchens & Restaurants
            </Badge>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Specialized Services for Commercial Kitchens
            </h1>

            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto text-balance">
              Expert mechanical services for restaurants, commercial kitchens, and foodservice operations. 
              From ventilation systems to refrigeration, we keep your kitchen running efficiently and safely.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-4" asChild>
                <Link href="/quote">Get Kitchen Assessment</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 bg-transparent" asChild>
                <Link href="tel:574-555-0123">
                  <Phone className="w-4 h-4 mr-2" />
                  Emergency Kitchen Service
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen Systems Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
              Commercial Kitchen Systems We Service
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive mechanical services for every aspect of your commercial kitchen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Wind className="w-8 h-8" />,
                title: "Kitchen Ventilation",
                description: "Hood systems, exhaust fans, and makeup air",
                features: ["Hood cleaning access", "Fire suppression integration", "Variable speed controls", "Energy recovery systems"]
              },
              {
                icon: <Snowflake className="w-8 h-8" />,
                title: "Walk-in Coolers & Freezers",
                description: "Commercial refrigeration for food storage",
                features: ["Temperature monitoring", "Door seals & gaskets", "Evaporator cleaning", "Compressor maintenance"]
              },
              {
                icon: <Droplets className="w-8 h-8" />,
                title: "Ice Machines",
                description: "Ice production and dispensing systems",
                features: ["Cleaning & sanitizing", "Water filtration", "Production optimization", "Bin and dispenser service"]
              },
              {
                icon: <Flame className="w-8 h-8" />,
                title: "Kitchen HVAC",
                description: "Climate control for dining and prep areas",
                features: ["Temperature control", "Humidity management", "Air quality systems", "Energy efficiency"]
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

      {/* Restaurant Types */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
              Restaurant & Foodservice Facilities We Serve
            </h2>
            <p className="text-xl text-muted-foreground">
              Specialized expertise for every type of commercial kitchen operation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Full-Service Restaurants",
                description: "Complete kitchen and dining area mechanical services",
                services: ["Kitchen ventilation systems", "Walk-in refrigeration", "HVAC for dining areas", "Grease management systems"]
              },
              {
                title: "Fast Food & Quick Service",
                description: "High-volume equipment service and maintenance",
                services: ["Drive-through equipment", "High-capacity fryers", "Rapid cooling systems", "Efficient ventilation"]
              },
              {
                title: "Catering & Food Production",
                description: "Large-scale food preparation facility services",
                services: ["Industrial refrigeration", "Blast chillers", "Large hood systems", "Process cooling"]
              }
            ].map((type, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
              Emergency Service for Restaurant Operations
            </h2>
            <p className="text-xl text-muted-foreground">
              When kitchen equipment fails, every minute counts. We understand the urgency.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-destructive/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <AlertTriangle className="w-6 h-6" />
                  Critical Equipment Failures
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Walk-in cooler/freezer failures</strong> - Immediate response to prevent food loss</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Ventilation system breakdowns</strong> - Safety and code compliance priority</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>HVAC failures</strong> - Customer and staff comfort restoration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Ice machine problems</strong> - Critical for beverage service</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-6 h-6 text-primary" />
                  Our Emergency Response Promise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>24/7 emergency service availability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Priority response for restaurant clients</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Temporary solutions to keep you operational</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Understanding of peak service hours</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
              Why Restaurants Choose Core Mechanical
            </h2>
            <p className="text-xl text-muted-foreground">
              We understand the unique challenges of commercial kitchen operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Restaurant Industry Experience",
                description: "Years of experience serving restaurants, cafeterias, and commercial kitchens throughout Northern Indiana."
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Flexible Service Hours",
                description: "We work around your business hours, including early morning prep times and late-night cleaning schedules."
              },
              {
                icon: <AlertTriangle className="w-8 h-8" />,
                title: "Emergency Priority Service",
                description: "Understanding that equipment failure means lost revenue, we prioritize restaurant emergency calls."
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Health Code Compliance",
                description: "All work performed to meet health department requirements and food safety standards."
              },
              {
                icon: <Droplets className="w-8 h-8" />,
                title: "Preventive Maintenance",
                description: "Custom PM programs designed to prevent equipment failures during peak service hours."
              },
              {
                icon: <ChefHat className="w-8 h-8" />,
                title: "Kitchen Operations Knowledge",
                description: "We understand kitchen workflow and design our services to minimize operational disruption."
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
                Keep Your Kitchen Running Smoothly
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Don't let equipment failures disrupt your service. Partner with Northern Indiana's 
                commercial kitchen mechanical experts for reliable, responsive service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8 py-4" asChild>
                  <Link href="/quote">Schedule Kitchen Assessment</Link>
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
