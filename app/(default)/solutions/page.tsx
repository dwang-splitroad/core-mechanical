// app/solutions/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Wrench, Building, Phone, Clock, Shield, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SolutionsPage() {
  const solutions = [
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "Planned Maintenance",
      description: "Proactive maintenance programs that prevent breakdowns and extend equipment life.",
      benefits: [
        "Reduce emergency calls by up to 80%",
        "Extend equipment life by 3-5 years",
        "Lower energy costs through optimization",
        "Predictable maintenance budgets",
      ],
      href: "/solutions/maintenance",
      cta: "Learn About PM Programs",
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Service & Install",
      description: "Complete installation and service solutions for all your mechanical systems.",
      benefits: [
        "Expert installation and commissioning",
        "Comprehensive service and repair",
        "System upgrades and retrofits",
        "Performance optimization",
      ],
      href: "/solutions/service-install",
      cta: "Explore Service Options",
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: "Custom Build / Design-Build",
      description: "Tailored mechanical solutions designed and built to meet your specific requirements.",
      benefits: [
        "Custom system design and engineering",
        "Single-source responsibility",
        "Faster project completion",
        "Integrated project management",
      ],
      href: "/solutions/design-build",
      cta: "Start Your Project",
    },
    {
      icon: <Phone className="w-12 h-12" />,
      title: "Emergency Response",
      description: "24/7 emergency service to minimize downtime and restore operations quickly.",
      benefits: [
        "24/7 emergency response team",
        "Rapid diagnosis and repair",
        "Minimize costly downtime",
        "Priority service for PM customers",
      ],
      href: "/emergency",
      cta: "Request Emergency Service",
      urgent: true,
    },
  ]

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
              Strategic Mechanical Solutions
            </Badge>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Solutions for uptime, compliance and efficiency
            </h1>

            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto text-balance">
              Comprehensive mechanical solutions designed to keep your facility running smoothly, meet regulatory
              requirements, and optimize operational efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Blocks */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${solution.urgent ? "border-accent" : ""}`}
              >
                <CardHeader className="pb-4">
                  <div className={`text-primary mb-4 ${solution.urgent ? "text-accent" : ""}`}>{solution.icon}</div>
                  <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                    {solution.title}
                    {solution.urgent && (
                      <Badge variant="destructive" className="text-xs">
                        URGENT
                      </Badge>
                    )}
                  </CardTitle>
                  <p className="text-muted-foreground text-lg">{solution.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {solution.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${solution.urgent ? "text-accent" : "text-primary"}`}
                        />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    variant={solution.urgent ? "outline" : "default"}
                    className="w-full"
                    size="lg"
                  >
                    <Link href={solution.href} className="flex items-center justify-center gap-2">
                      {solution.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Solutions */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
              Why Facility Managers Choose Our Solutions
            </h2>
            <p className="text-xl text-muted-foreground">
              Our integrated approach combines expertise, technology, and proven processes to deliver measurable
              results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Proven Reliability",
                description:
                  "Over 15 years of experience serving Northern Indiana's industrial and commercial facilities.",
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Rapid Response",
                description:
                  "Local team with 70-mile service radius ensures fast response times when you need us most.",
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Measurable Results",
                description: "Our solutions deliver quantifiable improvements in uptime, efficiency, and cost savings.",
              },
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-4 flex justify-center">{item.icon}</div>
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Ready to Optimize Your Facility?</h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Let's discuss how our solutions can improve your uptime, ensure compliance, and reduce operating costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8 py-4">
                  Schedule Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 bg-transparent"
                >
                  Request Custom Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
