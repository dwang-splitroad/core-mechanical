// app/emergency/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Phone, Clock, AlertTriangle, Wrench, CheckCircle, Zap } from "lucide-react"
import Link from "next/link"

export default function EmergencyPage() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-full">
                <AlertTriangle className="w-12 h-12 text-white" />
              </div>
            </div>

            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
              24/7 Emergency Response Available
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
              Emergency Mechanical Repairs
            </h1>

            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto text-balance">
              When your mechanical systems fail, every minute counts. Our emergency response team is standing by 24/7 to
              get your facility back online fast.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-white text-red-600 hover:bg-white/90 px-8 py-6 text-xl font-bold">
                <Phone className="w-6 h-6 mr-3" />
                CALL (574) 555-0123
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-6 text-lg bg-transparent">
                Submit Emergency Request
              </Button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                24/7 Availability
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Rapid Response
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4" />
                Expert Technicians
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Form & Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Emergency Form */}
            <div>
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-600">
                    <AlertTriangle className="w-6 h-6" />
                    Emergency Service Request
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out this form for fastest response, or call (574) 555-0123 directly for immediate assistance.
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input id="name" placeholder="Your name" required />
                      </div>
                      <div>
                        <Label htmlFor="company">Company *</Label>
                        <Input id="company" placeholder="Company name" required />
                      </div>
                    </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone *</Label>
                        <Input id="phone" placeholder="(574) 555-0123" required />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="email@company.com" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="facility">Facility Address *</Label>
                      <Input id="facility" placeholder="123 Industrial Drive, Fort Wayne, IN" required />
                    </div>

                    <div>
                      <Label htmlFor="problem">Emergency Problem *</Label>
                      <select
                        id="problem"
                        className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                        required
                      >
                        <option value="">Select emergency type</option>
                        <option value="hvac-failure">HVAC System Failure</option>
                        <option value="chiller-down">Chiller Down</option>
                        <option value="boiler-failure">Boiler Failure</option>
                        <option value="refrigeration-failure">Refrigeration Failure</option>
                        <option value="pipe-leak">Major Pipe Leak</option>
                        <option value="no-heat">No Heat</option>
                        <option value="no-cooling">No Cooling</option>
                        <option value="gas-leak">Gas Leak</option>
                        <option value="other">Other Emergency</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="description">Problem Description *</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe the emergency situation, symptoms, and any safety concerns..."
                        rows={4}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="contactTime">Best Time to Contact</Label>
                      <select
                        id="contactTime"
                        className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                      >
                        <option value="immediately">Immediately</option>
                        <option value="within-hour">Within 1 hour</option>
                        <option value="within-2-hours">Within 2 hours</option>
                        <option value="business-hours">During business hours</option>
                      </select>
                    </div>

                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" size="lg">
                      Submit Emergency Request
                    </Button>

                    <div className="text-center p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-sm font-medium text-red-700">
                        For immediate assistance, call (574) 555-0123
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Emergency Process */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Our Emergency Response Process</h2>

              <div className="space-y-6 mb-8">
                {[
                  {
                    step: "1",
                    title: "Dispatch",
                    description: "Immediate dispatch of certified technician to your location",
                    time: "Within 15 minutes",
                  },
                  {
                    step: "2",
                    title: "Assess",
                    description: "Rapid diagnosis of the problem and safety assessment",
                    time: "15-30 minutes on-site",
                  },
                  {
                    step: "3",
                    title: "Fix",
                    description: "Emergency repair to restore critical operations",
                    time: "Varies by complexity",
                  },
                  {
                    step: "4",
                    title: "Plan",
                    description: "Develop plan for permanent solution if needed",
                    time: "Before leaving site",
                  },
                ].map((process, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {process.step}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{process.title}</h3>
                          <p className="text-muted-foreground text-sm mb-2">{process.description}</p>
                          <Badge variant="outline" className="text-xs">
                            {process.time}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Priority Service for PM Customers
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Customers enrolled in our Preventive Maintenance program receive priority emergency response with
                    guaranteed 2-hour response time and preferred scheduling.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/solutions/maintenance">Learn About PM Programs</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Types */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-balance">
              Common Emergency Situations We Handle
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                "HVAC system complete failure",
                "Chiller breakdown during peak season",
                "Boiler failure in winter",
                "Refrigeration system failure",
                "Major pipe leaks or bursts",
                "Gas leaks and safety issues",
                "No heat in critical areas",
                "Cooling system failure in data centers",
                "Steam system emergencies",
              ].map((emergency, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <span className="text-sm">{emergency}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-red-600 text-white rounded-2xl p-8 lg:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Don't Wait - Call Now</h2>
              <p className="text-xl mb-8 text-white/90">
                Every minute of downtime costs money. Our emergency response team is ready to help restore your
                operations quickly and safely.
              </p>
              <Button size="lg" className="bg-white text-red-600 hover:bg-white/90 px-12 py-6 text-xl font-bold">
                <Phone className="w-6 h-6 mr-3" />
                CALL (574) 555-0123
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
