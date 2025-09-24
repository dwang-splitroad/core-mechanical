// app/contact/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Clock, Mail, Wrench, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen">      



      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
              Get In Touch
            </Badge>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Contact Core Mechanical Services</h1>

            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto text-balance">
              Ready to discuss your mechanical service needs? We're here to help with everything from routine
              maintenance to emergency repairs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Call (574) 555-0123
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 bg-transparent"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>

              <div className="space-y-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="text-muted-foreground mb-2">(574) 555-0123</p>
                        <p className="text-sm text-muted-foreground">24/7 Emergency Service Available</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-muted-foreground mb-2">info@coremechanical.com</p>
                        <p className="text-sm text-muted-foreground">We respond within 2 hours during business hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Service Area</h3>
                        <p className="text-muted-foreground mb-2">Northern Indiana</p>
                        <p className="text-sm text-muted-foreground">70-mile radius from Fort Wayne</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Business Hours</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                          <p>Saturday: 8:00 AM - 4:00 PM</p>
                          <p>Sunday: Emergency Service Only</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Need Emergency Service?</h3>
                <p className="text-muted-foreground mb-4">
                  For urgent mechanical repairs and emergency service, call our 24/7 emergency line or visit our
                  emergency service page.
                </p>
                <Button asChild className="w-full">
                  <Link href="/emergency">Emergency Service</Link>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 2 hours during business hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
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

                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Your company name" />
                    </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone *</Label>
                        <Input id="phone" placeholder="(574) 555-0123" required />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="john@company.com" required />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="facility">Facility Address</Label>
                      <Input id="facility" placeholder="123 Industrial Drive, Fort Wayne, IN" />
                    </div>

                    <div>
                      <Label htmlFor="serviceType">Service Needed</Label>
                      <select
                        id="serviceType"
                        className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                      >
                        <option value="">Select a service</option>
                        <option value="hvac">HVAC Service</option>
                        <option value="chiller">Chiller Service</option>
                        <option value="boiler">Boiler Service</option>
                        <option value="refrigeration">Refrigeration</option>
                        <option value="piping">Industrial Piping</option>
                        <option value="welding">Welding & Fabrication</option>
                        <option value="maintenance">Preventive Maintenance</option>
                        <option value="emergency">Emergency Service</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Please describe your mechanical service needs, current issues, or questions..."
                        rows={4}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="preferredContact">Preferred Contact Time</Label>
                      <select
                        id="preferredContact"
                        className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                      >
                        <option value="">No preference</option>
                        <option value="morning">Morning (8 AM - 12 PM)</option>
                        <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                        <option value="evening">Evening (5 PM - 7 PM)</option>
                      </select>
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Send Message
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to be contacted by Core Mechanical Services regarding your
                      inquiry.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Our Service Area</h2>
            <p className="text-xl text-muted-foreground">
              We proudly serve commercial and industrial facilities throughout Northern Indiana within a 70-mile radius.
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Northern Indiana Service Area</h3>
                  <p className="text-muted-foreground">70-mile radius from Fort Wayne</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold mb-2">Primary Coverage</h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Fort Wayne</p>
                    <p>South Bend</p>
                    <p>Elkhart</p>
                    <p>Warsaw</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Extended Coverage</h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Angola</p>
                    <p>Auburn</p>
                    <p>Huntington</p>
                    <p>Wabash</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Emergency Service</h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Available 24/7</p>
                    <p>All service areas</p>
                    <p>Rapid response</p>
                    <p>Priority for PM customers</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
