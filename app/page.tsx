// app/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Clock, MapPin, CheckCircle, Wrench, Thermometer, Droplets, Zap, Shield, Users } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Emergency Banner */}
      <div className="bg-accent text-accent-foreground py-2 px-4 text-center text-sm font-medium">
        24/7 Emergency Service Available • Call Now: (574) 555-0123
      </div>

      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Wrench className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Core Mechanical</h1>
              <p className="text-xs text-muted-foreground">Services</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/solutions" className="text-foreground hover:text-primary transition-colors">
              Solutions
            </Link>
            <Link href="/industries" className="text-foreground hover:text-primary transition-colors">
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
      <section className="hero-gradient text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
              Serving Northern Indiana • 70-Mile Radius
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
              Commercial mechanical service that keeps your plant running
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto text-balance">
              Expert HVAC, chiller, boiler, and industrial piping services with 24/7 emergency response. Minimize
              downtime, maximize efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (574) 555-0123
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg bg-transparent"
              >
                Request Free Quote
              </Button>
            </div>

            {/* Trust Bar */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                24/7 Emergency Support
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Northern Indiana Coverage
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Licensed & Insured
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Snapshot */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Complete Mechanical Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From routine maintenance to emergency repairs, we keep your facility running at peak performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Thermometer className="w-8 h-8" />,
                title: "HVAC Systems",
                description: "Complete heating, ventilation, and air conditioning services for commercial facilities.",
              },
              {
                icon: <Droplets className="w-8 h-8" />,
                title: "Chillers & Refrigeration",
                description: "Expert chiller maintenance, repair, and replacement for critical cooling systems.",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Boiler Services",
                description: "Comprehensive boiler maintenance, repair, and efficiency optimization.",
              },
              {
                icon: <Wrench className="w-8 h-8" />,
                title: "Industrial Piping",
                description: "Custom piping solutions, installation, and repair for industrial applications.",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Welding & Fabrication",
                description: "Professional welding and custom fabrication services for industrial needs.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Preventive Maintenance",
                description: "Scheduled maintenance programs to prevent costly breakdowns and extend equipment life.",
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <Button variant="link" className="p-0 mt-4 text-primary">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preventive Maintenance Hook */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 lg:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
                Prevent Costly Breakdowns with Our PM Program
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Our preventive maintenance program reduces emergency calls by up to 80% and extends equipment life by
                years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8 py-4">
                  Download Free PM Checklist
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 bg-transparent"
                >
                  Schedule PM Assessment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-balance">
              Why Facility Managers Choose Core Mechanical
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Self-Performance Excellence",
                  description:
                    "We handle everything in-house with our skilled technicians, ensuring quality control and faster response times.",
                },
                {
                  title: "Local Response Team",
                  description:
                    "Based in Northern Indiana with 70-mile service radius. We know your area and can respond quickly to emergencies.",
                },
                {
                  title: "Industrial Focus",
                  description:
                    "Specialized in commercial and industrial facilities. We understand the unique challenges of keeping plants operational.",
                },
                {
                  title: "Skilled Technicians",
                  description:
                    "EPA-certified technicians with extensive experience in commercial HVAC, chillers, boilers, and industrial systems.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-8">Trusted by Leading Facilities</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold">Chamber of Commerce</div>
              <div className="text-2xl font-bold">BBB A+ Rating</div>
              <div className="text-2xl font-bold">EPA Certified</div>
              <div className="text-2xl font-bold">OSHA Compliant</div>
            </div>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <blockquote className="text-xl text-center mb-6 text-balance">
                "Core Mechanical's preventive maintenance program has eliminated our emergency breakdowns. Their team is
                professional, responsive, and truly understands industrial systems."
              </blockquote>
              <div className="text-center">
                <p className="font-semibold">Mike Johnson</p>
                <p className="text-muted-foreground">Facility Manager, ABC Manufacturing</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold">Core Mechanical</h3>
                  <p className="text-xs text-background/70">Services</p>
                </div>
              </div>
              <p className="text-background/70 mb-4">
                Improving business and life through expert craftsmanship and service to our community.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-background/70">
                <li>
                  <Link href="/services/hvac" className="hover:text-background transition-colors">
                    HVAC Systems
                  </Link>
                </li>
                <li>
                  <Link href="/services/chillers" className="hover:text-background transition-colors">
                    Chillers
                  </Link>
                </li>
                <li>
                  <Link href="/services/boilers" className="hover:text-background transition-colors">
                    Boilers
                  </Link>
                </li>
                <li>
                  <Link href="/services/piping" className="hover:text-background transition-colors">
                    Industrial Piping
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-background/70">
                <li>
                  <Link href="/solutions/maintenance" className="hover:text-background transition-colors">
                    Preventive Maintenance
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/emergency" className="hover:text-background transition-colors">
                    Emergency Service
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/design-build" className="hover:text-background transition-colors">
                    Design-Build
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-background/70">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (574) 555-0123
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Northern Indiana
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  24/7 Emergency Service
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
            <p>&copy; 2024 Core Mechanical Services. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky CTAs */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-50">
        <Button size="lg" className="bg-accent hover:bg-accent/90 shadow-lg" asChild>
          <Link href="/quote">Request Quote</Link>
        </Button>
        <Button size="lg" variant="outline" className="bg-background shadow-lg" asChild>
          <Link href="tel:5745550123">
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Link>
        </Button>
      </div>
    </div>
  )
}
