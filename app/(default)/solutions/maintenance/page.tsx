// app/solutions/maintenance/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, CheckCircle, TrendingUp, DollarSign, Clock, Shield, Users, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PlannedMaintenancePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
              <Calendar className="w-4 h-4 mr-2" />
              Planned Maintenance
            </Badge>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Prevent Problems Before They Happen
            </h1>

            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto text-balance">
              Our proactive maintenance programs reduce emergency calls by up to 80%, extend equipment life by 3-5 years, 
              and deliver predictable maintenance budgets for your facility.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-4" asChild>
                <Link href="/quote">Get Custom PM Plan</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 bg-transparent" asChild>
                <Link href="tel:574-555-0123">
                  <Phone className="w-4 h-4 mr-2" />
                  Discuss Your Facility
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
              Why Facility Managers Choose Planned Maintenance
            </h2>
            <p className="text-xl text-muted-foreground">
              Transform your facility from reactive "break-fix" to proactive, reliable operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Reduce Emergency Calls",
                description: "Up to 80% reduction in unexpected breakdowns and emergency service calls",
                stat: "80% fewer emergencies"
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Lower Operating Costs",
                description: "Significant energy savings through optimized equipment performance",
                stat: "15-30% energy savings"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Extended Equipment Life",
                description: "Proper maintenance extends equipment lifespan by 3-5 years on average",
                stat: "3-5 years longer life"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Predictable Budgets",
                description: "Fixed maintenance costs eliminate surprise capital expenditures",
                stat: "100% predictable costs"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Improved Reliability",
                description: "Consistent system performance keeps your operations running smoothly",
                stat: "99%+ uptime"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Priority Service",
                description: "PM customers get priority scheduling for any additional service needs",
                stat: "Priority response"
              }
            ].map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground mb-4">{benefit.description}</p>
                  <Badge variant="outline" className="text-primary border-primary">
                    {benefit.stat}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
              What Our PM Programs Include
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive maintenance plans tailored to your facility's specific needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-primary" />
                  Customized Maintenance Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Complete equipment inventory and assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Customized task checklists for each asset</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Flexible scheduling to minimize disruption</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Seasonal preparation and shutdown services</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  Advanced Diagnostics & Reporting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Infrared thermography to detect hot spots</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Vibration analysis for rotating equipment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Detailed maintenance reports and recommendations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Digital maintenance history and asset tracking</span>
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
                Ready to Stop Reacting and Start Preventing?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Let's discuss a customized maintenance plan that fits your facility, your budget, and your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8 py-4" asChild>
                  <Link href="/quote">Get Free PM Assessment</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 bg-transparent"
                  asChild
                >
                  <Link href="/services/maintenance">
                    Learn More About Our Services
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
