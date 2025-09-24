// app/industries/institutional/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, CheckCircle, Shield, Users, Clock, Zap, Phone, ArrowRight, GraduationCap, Heart, Building } from "lucide-react"
import Link from "next/link"

export default function InstitutionalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-white py-16 lg:py-24" style={{ backgroundColor: '#8cc63e' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
              <Building2 className="w-4 h-4 mr-2" />
              Institutional & Government
            </Badge>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Reliable Mechanical Services for Public Facilities
            </h1>

            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto text-balance">
              Trusted mechanical solutions for schools, hospitals, government buildings, and public facilities. 
              Ensuring comfort, safety, and compliance for the communities we serve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-4" asChild>
                <Link href="/quote">Request Facility Assessment</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 bg-transparent" asChild>
                <Link href="tel:574-555-0123">
                  <Phone className="w-4 h-4 mr-2" />
                  Emergency Service
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Types Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
              Facilities We Serve
            </h2>
            <p className="text-xl text-muted-foreground">
              Specialized mechanical services for institutional and government facilities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <GraduationCap className="w-12 h-12" />,
                title: "Educational Facilities",
                description: "Schools, universities, and training centers",
                services: ["Large-scale HVAC systems", "Energy efficiency programs", "Summer maintenance schedules", "Indoor air quality solutions"]
              },
              {
                icon: <Heart className="w-12 h-12" />,
                title: "Healthcare Facilities",
                description: "Hospitals, clinics, and medical centers",
                services: ["Critical system redundancy", "Infection control HVAC", "Medical gas systems", "Emergency power systems"]
              },
              {
                icon: <Building className="w-12 h-12" />,
                title: "Government Buildings",
                description: "Municipal, county, and federal facilities",
                services: ["Compliance documentation", "Energy audits", "Preventive maintenance", "Security system integration"]
              }
            ].map((facility, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-4 flex justify-center">{facility.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{facility.title}</h3>
                  <p className="text-muted-foreground mb-4">{facility.description}</p>
                  <ul className="space-y-2 text-left">
                    {facility.services.map((service, idx) => (
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

      {/* Specialized Services */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
              Specialized Institutional Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Meeting the unique requirements of public and institutional facilities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  Compliance & Documentation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Complete compliance documentation for all work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Licensed and insured for public facility work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Background checks for sensitive facility access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Detailed reporting and maintenance records</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-primary" />
                  Energy Efficiency Programs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Energy audits and efficiency assessments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Utility rebate program assistance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>HVAC system optimization and retrofits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Cost-benefit analysis for upgrades</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Institutional Work */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
              Why Institutions Trust Core Mechanical
            </h2>
            <p className="text-xl text-muted-foreground">
              Experience, reliability, and accountability for public sector projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Public Sector Experience",
                description: "Extensive experience working with schools, hospitals, and government facilities throughout Northern Indiana."
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Flexible Scheduling",
                description: "We work around your operational schedule, including evenings, weekends, and school breaks to minimize disruption."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Fully Licensed & Insured",
                description: "All necessary licenses, insurance, and bonding for public facility work, with background-checked technicians."
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Budget-Conscious Solutions",
                description: "Understanding public budget constraints, we provide cost-effective solutions that maximize value and longevity."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Emergency Response",
                description: "Priority emergency service to keep critical public facilities operational when unexpected issues arise."
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: "Long-Term Partnerships",
                description: "We build lasting relationships with facilities, providing consistent service and institutional knowledge over time."
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
                Partner with Northern Indiana's Public Sector Experts
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                From routine maintenance to major system upgrades, we provide reliable mechanical services 
                that keep public facilities comfortable, safe, and efficient.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8 py-4" asChild>
                  <Link href="/quote">Request Facility Consultation</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 bg-transparent"
                  asChild
                >
                  <Link href="/solutions/maintenance">
                    Learn About Our Maintenance Programs
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
