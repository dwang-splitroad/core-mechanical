// app/quote/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { FileText, Clock, CheckCircle, Wrench, Phone } from "lucide-react"
import Link from "next/link"

export default function QuotePage() {
  return (
    <div className="min-h-screen">
      {/* Emergency Banner */}
      

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
      <section className="hero-gradient text-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <FileText className="w-16 h-16 text-white" />
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Request a Free Quote</h1>

            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto text-balance">
              Get a detailed quote for your mechanical service needs. We provide transparent pricing and comprehensive
              solutions tailored to your facility.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Free Estimates
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                24-Hour Response
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4" />
                Expert Assessment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form & Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Quote Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Project Information</CardTitle>
                  <p className="text-muted-foreground">
                    Please provide as much detail as possible to help us prepare an accurate quote for your project.
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    {/* Contact Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" placeholder="John" required />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" placeholder="Smith" required />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4 mt-4">
                        <div>
                          <Label htmlFor="phone">Phone *</Label>
                          <Input id="phone" placeholder="(574) 555-0123" required />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input id="email" type="email" placeholder="john@company.com" required />
                        </div>
                      </div>
                    </div>

                    {/* Company Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Company & Facility Information</h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="company">Company Name *</Label>
                          <Input id="company" placeholder="Your company name" required />
                        </div>
                        <div>
                          <Label htmlFor="facilityAddress">Facility Address *</Label>
                          <Input
                            id="facilityAddress"
                            placeholder="123 Industrial Drive, Fort Wayne, IN 46804"
                            required
                          />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="facilityType">Facility Type</Label>
                            <select
                              id="facilityType"
                              className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                            >
                              <option value="">Select facility type</option>
                              <option value="manufacturing">Manufacturing Plant</option>
                              <option value="warehouse">Warehouse/Distribution</option>
                              <option value="office">Office Building</option>
                              <option value="retail">Retail/Commercial</option>
                              <option value="healthcare">Healthcare Facility</option>
                              <option value="education">School/University</option>
                              <option value="food-service">Food Service/Restaurant</option>
                              <option value="data-center">Data Center</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                          <div>
                            <Label htmlFor="facilitySize">Facility Size (sq ft)</Label>
                            <Input id="facilitySize" placeholder="e.g., 50,000" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Service Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Service Requirements</h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="serviceNeeded">Primary Service Needed *</Label>
                          <select
                            id="serviceNeeded"
                            className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                            required
                          >
                            <option value="">Select primary service</option>
                            <option value="hvac-installation">HVAC Installation</option>
                            <option value="hvac-repair">HVAC Repair/Service</option>
                            <option value="chiller-service">Chiller Service/Repair</option>
                            <option value="chiller-replacement">Chiller Replacement</option>
                            <option value="boiler-service">Boiler Service/Repair</option>
                            <option value="boiler-replacement">Boiler Replacement</option>
                            <option value="refrigeration">Refrigeration Systems</option>
                            <option value="piping">Industrial Piping</option>
                            <option value="welding">Welding & Fabrication</option>
                            <option value="maintenance-program">Preventive Maintenance Program</option>
                            <option value="design-build">Design-Build Project</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div>
                          <Label htmlFor="projectDescription">Project Description *</Label>
                          <Textarea
                            id="projectDescription"
                            placeholder="Please describe your project in detail including current equipment, issues, goals, and any specific requirements..."
                            rows={5}
                            required
                          />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="timeline">Desired Timeline</Label>
                            <select
                              id="timeline"
                              className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                            >
                              <option value="">Select timeline</option>
                              <option value="asap">As soon as possible</option>
                              <option value="1-month">Within 1 month</option>
                              <option value="3-months">Within 3 months</option>
                              <option value="6-months">Within 6 months</option>
                              <option value="planning">Planning phase</option>
                            </select>
                          </div>
                          <div>
                            <Label htmlFor="budget">Estimated Budget Range</Label>
                            <select
                              id="budget"
                              className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                            >
                              <option value="">Select budget range</option>
                              <option value="under-10k">Under $10,000</option>
                              <option value="10k-25k">$10,000 - $25,000</option>
                              <option value="25k-50k">$25,000 - $50,000</option>
                              <option value="50k-100k">$50,000 - $100,000</option>
                              <option value="over-100k">Over $100,000</option>
                              <option value="not-sure">Not sure</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="additionalInfo">Additional Information</Label>
                          <Textarea
                            id="additionalInfo"
                            placeholder="Any additional details, special requirements, or questions..."
                            rows={3}
                          />
                        </div>
                      </div>
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Submit Quote Request
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to be contacted by Core Mechanical Services regarding your
                      quote request. We respect your privacy and will not share your information.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Quote Information Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    What to Expect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Initial Review</h4>
                      <p className="text-xs text-muted-foreground">We'll review your request within 2 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Site Assessment</h4>
                      <p className="text-xs text-muted-foreground">Schedule on-site evaluation if needed</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Detailed Quote</h4>
                      <p className="text-xs text-muted-foreground">Receive comprehensive proposal within 48 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Need Immediate Assistance?</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    For urgent projects or emergency service, call us directly for immediate response.
                  </p>
                  <Button className="w-full mb-3" asChild>
                    <Link href="tel:5745550123">
                      <Phone className="w-4 h-4 mr-2" />
                      Call (574) 555-0123
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/emergency">Emergency Service</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Why Choose Core Mechanical?</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Free, no-obligation quotes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Licensed & insured</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>15+ years experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Local Northern Indiana team</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
