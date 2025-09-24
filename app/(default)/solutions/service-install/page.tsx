// app/solutions/service-install/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wrench, CheckCircle, Clock, Shield, Users, Zap, Phone, ArrowRight, Settings, Hammer, ThermometerSun, Snowflake } from "lucide-react"
import Link from "next/link"

export default function ServiceInstallPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-white py-16 lg:py-24" style={{ backgroundColor: '#8cc63e' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
              <Wrench className="w-4 h-4 mr-2" />
              Service & Installation
            </Badge>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Expert Installation & Comprehensive Service Solutions
            </h1>

            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto text-balance">
              From new system installations to emergency repairs and performance optimization, 
              we provide complete mechanical solutions that keep your facility running efficiently.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-4" asChild>
                <Link href="/quote">Get Service Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 bg-transparent" asChild>
                <Link href="tel:574-555-0123">
                  <Phone className="w-4 h-4 mr-2" />
                  24/7 Emergency Service
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
              Complete Mechanical Solutions
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional installation, repair, and optimization services for all your mechanical systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <ThermometerSun className="w-8 h-8" />,
                title: "HVAC Systems",
                description: "Complete heating, ventilation, and air conditioning solutions",
                services: ["Installation & Replacement", "Emergency Repair", "Performance Optimization", "Energy Efficiency Upgrades"]
              },
              {
                icon: <Snowflake className="w-8 h-8" />,
                title: "Refrigeration",
                description: "Commercial refrigeration and cooling system services",
                services: ["Walk-in Coolers & Freezers", "Ice Machine Service", "Process Cooling", "Temperature Controls"]
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Boilers & Chillers",
                description: "Industrial heating and cooling equipment expertise",
                services: ["Boiler Installation & Repair", "Chiller Maintenance", "System Upgrades", "Efficiency Testing"]
              },
              {
                icon: <Settings className="w-8 h-8" />,
                title: "Process Systems",
                description: "Specialized industrial and process mechanical systems",
                services: ["Industrial Piping", "Process Controls", "Utility Systems", "Custom Applications"]
              }
            ].map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">{category.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{category.title}</h3>
                  <p className="text-muted-foreground mb-4 text-center text-sm">{category.description}</p>
                  <ul className="space-y-2">
                    {category.services.map((service, idx) => (
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

      {/* Service Types Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
              Our Service Capabilities
            </h2>
            <p className="text-xl text-muted-foreground">
              From emergency repairs to planned installations, we handle it all
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-6 h-6 text-primary" />
                  Emergency Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>24/7 emergency response team</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Rapid diagnosis and repair</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Minimize costly downtime</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Temporary solutions available</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Hammer className="w-6 h-6 text-primary" />
                  Installation & Replacement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Expert system installation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Equipment replacement and upgrades</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>System commissioning and testing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Warranty and ongoing support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  Performance Optimization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Energy efficiency improvements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>System retrofits and modernization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Performance monitoring and tuning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Compliance and code updates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
              Why Choose Core Mechanical?
            </h2>
            <p className="text-xl text-muted-foreground">
              Experience, expertise, and commitment to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Technicians",
                description: "Licensed, certified professionals with extensive experience in commercial and industrial systems."
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Rapid Response",
                description: "Local team with 70-mile service radius ensures fast response times when you need us most."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Quality Guarantee",
                description: "All work backed by comprehensive warranties and our commitment to excellence."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Advanced Diagnostics",
                description: "State-of-the-art tools and technology for accurate problem diagnosis and solutions."
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Code Compliance",
                description: "All installations and repairs meet or exceed local codes and industry standards."
              },
              {
                icon: <Hammer className="w-8 h-8" />,
                title: "Full-Service Solutions",
                description: "From initial consultation to ongoing maintenance, we handle every aspect of your project."
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
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Whether you need emergency service, system installation, or performance optimization, 
                our expert team is ready to deliver the solutions you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8 py-4" asChild>
                  <Link href="/quote">Request Service Quote</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 bg-transparent"
                  asChild
                >
                  <Link href="/services">
                    Explore Our Services
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
