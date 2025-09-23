import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Thermometer, Droplets, Zap, Wrench, Users, Snowflake, Hammer, Clock, ShieldCheck, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { EmergencyBanner } from "@/components/layout/EmergencyBanner"

export default function ServicesPage() {
  const services = [
    {
      icon: <Thermometer className="w-10 h-10" />,
      title: "Heating & Air Conditioning",
      description: "Complete HVAC solutions including installation, 24/7 repair, and preventive maintenance for commercial facilities.",
      href: "/services/hvac",
    },
    {
      icon: <Snowflake className="w-10 h-10" />,
      title: "Refrigeration Systems",
      description: "Expert service for walk-in coolers, freezers, ice machines, and all critical commercial refrigeration equipment.",
      href: "/services/refrigeration",
    },
    {
      icon: <Droplets className="w-10 h-10" />,
      title: "Chiller Service",
      description: "Specialized maintenance, emergency repair, and efficiency optimization for industrial and commercial chillers.",
      href: "/services/chillers",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Boiler Service",
      description: "Comprehensive boiler services focused on safety, compliance, and reliability, from annual tuning to emergency repair.",
      href: "/services/boilers",
    },
    {
      icon: <Droplets className="w-10 h-10" />,
      title: "Plumbing Services",
      description: "Licensed commercial plumbing solutions, from emergency leak repair and drain jetting to new system installations.",
      href: "/services/plumbing",
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "Industrial Piping",
      description: "Certified welding and installation of process piping for steam, compressed air, gas, and other critical applications.",
      href: "/services/piping",
    },
    {
      icon: <Hammer className="w-10 h-10" />,
      title: "Welding & Fabrication",
      description: "Custom, in-shop and on-site fabrication and repair services delivered by AWS certified welders.",
      href: "/services/welding",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Maintenance Programs",
      description: "Proactive, customized preventive maintenance plans that reduce costs, prevent downtime, and extend equipment life.",
      href: "/services/maintenance",
    },
  ]

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Emergency Response",
      description: "Our technicians are on call around the clock to minimize downtime when critical systems fail.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Certified & Insured Experts",
      description: "All work is performed by licensed, insured, and EPA-certified technicians to the highest industry standards.",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Local & Reliable",
      description: "Based in Northern Indiana, our local team provides a rapid response within our 70-mile service radius.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <EmergencyBanner text="24/7 Emergency Service Available" />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero-gradient text-white py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
                Complete Mechanical Solutions
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
                Expert Mechanical Services for Commercial & Industrial Facilities
              </h1>
              <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto text-balance">
                From HVAC and chillers to boilers and industrial piping, we provide comprehensive mechanical services to
                keep your facility running at peak performance.
              </p>
            </div>
          </div>
        </section>

        {/* NEW: Why Choose Us Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">The Core Mechanical Advantage</h2>
              <p className="text-lg text-muted-foreground">Reliability, expertise, and a commitment to our community.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IMPROVED: Services Grid */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Complete Mechanical Solutions for Your Facility</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Select a service to learn more about how we can help improve your uptime, efficiency, and safety.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <Link href={service.href} key={service.href} className="group">
                  <Card className="flex flex-col h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <CardHeader className="text-center">
                      <div className="text-primary mb-4 flex justify-center">{service.icon}</div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow pt-0">
                      <p className="text-muted-foreground text-sm flex-grow">{service.description}</p>
                      <div className="mt-auto pt-4 text-sm font-semibold text-primary flex items-center justify-center group-hover:underline">
                        Learn More <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 lg:p-12">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Need Emergency Service?</h2>
                <p className="text-xl mb-8 text-primary-foreground/90">
                  Our experienced technicians are available 24/7 for emergency mechanical repairs and service calls.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="px-8 py-4" asChild>
                    <Link href="/emergency">Emergency Service</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 bg-transparent"
                    asChild
                  >
                    <Link href="/quote">Request Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}