// app/industries/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Factory, Utensils, Building2, ChefHat, Wrench, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function IndustriesPage() {
  const industries = [
    {
      icon: <Factory className="w-12 h-12" />,
      title: "Manufacturing & Process Plants",
      description:
        "Specialized mechanical services for manufacturing facilities, process plants, and industrial operations.",
      specialties: [
        "Process cooling systems",
        "Compressed air systems",
        "Steam and hot water systems",
        "Industrial HVAC solutions",
      ],
      href: "/industries/manufacturing",
      image: "/manufacturing-plant-industrial-facility.jpg",
    },
    {
      icon: <Utensils className="w-12 h-12" />,
      title: "Food & Beverage / Cold Storage",
      description:
        "Critical refrigeration and HVAC services for food processing, storage, and distribution facilities.",
      specialties: [
        "Walk-in coolers and freezers",
        "Process refrigeration",
        "Temperature monitoring",
        "HACCP compliance support",
      ],
      href: "/industries/food-beverage",
      image: "/food-processing-cold-storage-facility.jpg",
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Institutional & Government",
      description: "Reliable mechanical services for schools, hospitals, government buildings, and public facilities.",
      specialties: [
        "Large-scale HVAC systems",
        "Energy efficiency programs",
        "Compliance documentation",
        "Preventive maintenance",
      ],
      href: "/industries/institutional",
      image: "/government-institutional-building.jpg",
    },
    {
      icon: <ChefHat className="w-12 h-12" />,
      title: "Commercial Kitchens & Restaurants",
      description: "Specialized services for commercial kitchens, restaurants, and foodservice operations.",
      specialties: [
        "Kitchen ventilation systems",
        "Walk-in cooler service",
        "Ice machine maintenance",
        "Grease trap systems",
      ],
      href: "/industries/commercial-kitchens",
      image: "/commercial-kitchen-restaurant-equipment.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Emergency Banner */}
      

      {/* Using global layout header */}

      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
              Industry Expertise
            </Badge>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Specialized Mechanical Services by Industry
            </h1>

            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto text-balance">
              We understand that every industry has unique mechanical requirements. Our specialized expertise ensures
              compliance, efficiency, and reliability for your specific sector.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">{industry.icon}</div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl mb-2">{industry.title}</CardTitle>
                  <p className="text-muted-foreground text-lg">{industry.description}</p>
                </CardHeader>

                <CardContent>
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">Specialties</h4>
                    {industry.specialties.map((specialty, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{specialty}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="w-full" size="lg">
                    <Link href={industry.href} className="flex items-center justify-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Deep Industry Knowledge</h2>
            <p className="text-xl text-muted-foreground">
              Our team understands the unique challenges, regulations, and requirements of each industry we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Compliance Expertise",
                description:
                  "We stay current with industry regulations including FDA, OSHA, EPA, and local codes to ensure your facility meets all requirements.",
              },
              {
                title: "Process Understanding",
                description:
                  "Our technicians understand how mechanical systems impact your specific processes and operations.",
              },
              {
                title: "Proven Track Record",
                description:
                  "Years of experience serving Northern Indiana's diverse industrial and commercial sectors.",
              },
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Don't See Your Industry Listed?</h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                We serve a wide range of commercial and industrial facilities throughout Northern Indiana. Contact us to
                discuss your specific mechanical service needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8 py-4">
                  Discuss Your Needs
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 bg-transparent"
                >
                  Request Site Visit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
