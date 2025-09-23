import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Factory, CheckCircle, Phone, Clock, Shield, Star, Wrench, Thermometer, Droplets } from "lucide-react"
import Link from "next/link"

export default function ManufacturingIndustryPage() {
  return (
    <div className="min-h-screen">
      {/* Emergency Banner */}
      <div className="bg-accent text-accent-foreground py-2 px-4 text-center text-sm font-medium">
        24/7 Emergency Service for Manufacturing Facilities • Call Now: (574) 555-0123
      </div>

      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Wrench className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Core Mechanical</h1>
              <p className="text-xs text-muted-foreground">Services</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/solutions" className="text-foreground hover:text-primary transition-colors">
              Solutions
            </Link>
            <Link href="/industries" className="text-primary font-medium">
              Industries
            </Link>
            <Link href="/projects" className="text-foreground hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/emergency">Emergency Service</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/quote">Request Quote</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Factory className="w-16 h-16 text-white" />
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Mechanical Services for Manufacturing & Process Plants
            </h1>

            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto text-balance">
              Keep your production lines running with specialized mechanical services designed for manufacturing
              facilities and industrial process plants throughout Northern Indiana.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Emergency Plant Service
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 bg-transparent"
              >
                Schedule Plant Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Challenges */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-balance">
              Manufacturing Mechanical Challenges We Solve
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Common Manufacturing Issues:</h3>
                <div className="space-y-4">
                  {[
                    "Unplanned downtime from equipment failures",
                    "Process cooling system inefficiencies",
                    "Compressed air system leaks and pressure drops",
                    "Steam system maintenance and safety concerns",
                    "HVAC systems struggling with industrial heat loads",
                    "Aging equipment requiring frequent repairs",
                  ].map((issue, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-muted/50 rounded-2xl p-8">
                <h4 className="text-xl font-semibold mb-4">The Cost of Downtime</h4>
                <p className="text-muted-foreground mb-6">
                  Manufacturing downtime can cost thousands per hour. Our preventive maintenance programs and rapid
                  emergency response minimize production interruptions and keep your facility profitable.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Average 2-hour emergency response</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>OSHA compliant safety procedures</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Wrench className="w-4 h-4 text-primary" />
                    <span>Industrial-grade parts and materials</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Services */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-balance">
              Specialized Manufacturing Services
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Droplets className="w-8 h-8" />,
                  title: "Process Cooling Systems",
                  description:
                    "Chillers, cooling towers, and process water systems designed to maintain precise temperatures for manufacturing processes.",
                },
                {
                  icon: <Thermometer className="w-8 h-8" />,
                  title: "Compressed Air Systems",
                  description:
                    "Complete compressed air solutions including compressors, dryers, filtration, and distribution piping systems.",
                },
                {
                  icon: <Factory className="w-8 h-8" />,
                  title: "Steam & Hot Water Systems",
                  description:
                    "Boiler systems, steam distribution, condensate return, and hot water systems for industrial processes.",
                },
                {
                  icon: <Wrench className="w-8 h-8" />,
                  title: "Industrial HVAC",
                  description:
                    "Heavy-duty HVAC systems designed to handle industrial heat loads, ventilation, and air quality requirements.",
                },
              ].map((service, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="text-primary mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Manufacturing Success Story</h2>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  Case Study: Automotive Parts Manufacturing Plant
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-accent">Challenge</h4>
                    <p className="text-muted-foreground text-sm">
                      75,000 sq ft automotive parts facility experiencing frequent chiller failures causing production
                      delays and quality issues with temperature-sensitive processes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Solution</h4>
                    <p className="text-muted-foreground text-sm">
                      Implemented comprehensive chiller maintenance program, upgraded controls, and installed backup
                      cooling system to ensure continuous operation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-green-600">Results</h4>
                    <p className="text-muted-foreground text-sm">
                      Zero unplanned downtime in 18 months, 22% reduction in energy costs, and improved product quality
                      consistency.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-6 h-6 text-accent" />
                  Customer Testimonial
                </CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg mb-4">
                  "Core Mechanical understands manufacturing. They don't just fix equipment - they understand how our
                  processes work and help us prevent problems before they impact production."
                </blockquote>
                <div>
                  <p className="font-semibold">Mark Rodriguez</p>
                  <p className="text-sm text-muted-foreground">Plant Manager, Precision Automotive Components</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Form Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Schedule Manufacturing Plant Assessment</h2>
                  <p className="text-primary-foreground/90 mb-6">
                    Get a comprehensive evaluation of your manufacturing facility's mechanical systems and receive
                    recommendations to improve efficiency and prevent downtime.
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Minimal production disruption
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      OSHA compliant procedures
                    </div>
                  </div>
                </div>

                <Card>
                  <CardContent className="p-6">
                    <form className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" placeholder="Your name" />
                        </div>
                        <div>
                          <Label htmlFor="company">Company</Label>
                          <Input id="company" placeholder="Manufacturing company" />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" placeholder="(574) 555-0123" />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="email@company.com" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="facility">Plant Address</Label>
                        <Input id="facility" placeholder="Manufacturing facility location" />
                      </div>
                      <div>
                        <Label htmlFor="description">Manufacturing Process & Mechanical Systems</Label>
                        <Textarea
                          id="description"
                          placeholder="Describe your manufacturing processes and current mechanical system challenges..."
                        />
                      </div>
                      <Button type="submit" className="w-full" size="lg">
                        Schedule Plant Assessment
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
