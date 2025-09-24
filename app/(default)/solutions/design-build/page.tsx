// app/solutions/design-build/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, CheckCircle, Users, Clock, Shield, Zap, Phone, ArrowRight, Lightbulb, Target, Wrench } from "lucide-react"
import Link from "next/link"

export default function DesignBuildPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
              <Building className="w-4 h-4 mr-2" />
              Design-Build Solutions
            </Badge>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Custom Mechanical Solutions from Concept to Completion
            </h1>

            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto text-balance">
              Single-source responsibility for your mechanical systems. We design, engineer, and build 
              tailored solutions that meet your exact requirements, timeline, and budget.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-4" asChild>
                <Link href="/quote">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 bg-transparent" asChild>
                <Link href="tel:574-555-0123">
                  <Phone className="w-4 h-4 mr-2" />
                  Discuss Your Vision
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Design-Build Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
              Why Choose Design-Build?
            </h2>
            <p className="text-xl text-muted-foreground">
              Streamlined process, single accountability, faster completion, better value
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Single Point of Contact",
                description: "One team handles design, engineering, procurement, and installation",
                benefit: "Eliminates coordination issues"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Faster Project Delivery",
                description: "Concurrent design and construction phases reduce overall timeline",
                benefit: "30-50% faster completion"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Single Source Responsibility",
                description: "We're accountable for the entire project from start to finish",
                benefit: "No finger pointing"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Budget Certainty",
                description: "Fixed-price contracts with clear scope and deliverables",
                benefit: "No surprise costs"
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Innovative Solutions",
                description: "Creative problem-solving with latest technologies and methods",
                benefit: "Optimized performance"
              },
              {
                icon: <Wrench className="w-8 h-8" />,
                title: "Seamless Integration",
                description: "Systems designed specifically for your facility and operations",
                benefit: "Perfect fit every time"
              }
            ].map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground mb-4">{benefit.description}</p>
                  <Badge variant="outline" className="text-primary border-primary">
                    {benefit.benefit}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
              Our Design-Build Process
            </h2>
            <p className="text-xl text-muted-foreground">
              A proven methodology that delivers results on time and on budget
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "We analyze your needs, site conditions, and operational requirements to develop the optimal solution."
              },
              {
                step: "02", 
                title: "Design & Engineering",
                description: "Our team creates detailed designs and specifications, incorporating your feedback throughout the process."
              },
              {
                step: "03",
                title: "Construction & Installation", 
                description: "We manage all procurement, scheduling, and installation with minimal disruption to your operations."
              },
              {
                step: "04",
                title: "Commissioning & Support",
                description: "Complete system testing, training, and ongoing support to ensure optimal performance."
              }
            ].map((phase, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-4">{phase.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                  <p className="text-muted-foreground">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
              Design-Build Project Types
            </h2>
            <p className="text-xl text-muted-foreground">
              From complete facility buildouts to system upgrades and expansions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-6 h-6 text-primary" />
                  New Construction Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Complete HVAC system design and installation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Process piping and utility systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Commercial kitchen and restaurant buildouts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Cold storage and refrigeration facilities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-primary" />
                  Retrofit & Expansion Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Energy efficiency upgrades and modernization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Capacity expansion and system additions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Code compliance and safety improvements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Process optimization and automation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 lg:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
                Ready to Bring Your Vision to Life?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Let's discuss your project requirements and show you how design-build can deliver 
                better results, faster timelines, and greater value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8 py-4" asChild>
                  <Link href="/quote">Get Project Quote</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 bg-transparent"
                  asChild
                >
                  <Link href="/projects">
                    View Our Portfolio
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
