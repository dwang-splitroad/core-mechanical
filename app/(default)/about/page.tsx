// app/about/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Award, Heart, Wrench, ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Accountability",
      description: "We take full responsibility for our work and stand behind every service we provide.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Communication",
      description: "Clear, honest communication keeps our clients informed and builds lasting relationships.",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Craftsmanship",
      description: "Expert workmanship and attention to detail in every project, large or small.",
    },
  ]

  const leadership = [
    {
      name: "Michael Thompson",
      title: "Founder & President",
      bio: "With over 20 years in commercial mechanical services, Mike founded Core Mechanical to provide Northern Indiana with reliable, expert mechanical solutions. His background in industrial engineering and hands-on experience drives our commitment to excellence.",
      image: "/team-founder-michael-thompson.jpg",
    },
    {
      name: "Sarah Chen",
      title: "Vice President of Operations",
      bio: "Sarah brings 15 years of operations management experience to Core Mechanical. She oversees our service delivery, quality assurance, and customer satisfaction initiatives, ensuring every project meets our high standards.",
      image: "/team-vp-sarah-chen.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Emergency Banner */}
      


      {/* Hero Section */}
      <section className="text-white py-16 lg:py-24" style={{ backgroundColor: '#8cc63e' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
              About Core Mechanical
            </Badge>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Improving business and life through expert craftsmanship
            </h1>

            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto text-balance">
              Our mission is to serve our Northern Indiana community with reliable mechanical services that keep
              businesses running and people comfortable.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Service Area */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At Core Mechanical Services, we believe that reliable mechanical systems are the foundation of
                  successful businesses and comfortable communities. Our mission is to improve business and life through
                  expert craftsmanship and dedicated service to our community.
                </p>
                <p className="text-lg text-muted-foreground">
                  We're not just fixing equipment - we're helping businesses stay operational, keeping employees
                  comfortable, and ensuring critical processes run smoothly when it matters most.
                </p>
              </div>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Service Area</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    We proudly serve commercial and industrial facilities throughout Northern Indiana with a 70-mile
                    service radius from our base of operations.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>• Fort Wayne & surrounding areas</div>
                    <div>• South Bend & Elkhart County</div>
                    <div>• Warsaw & Kosciusko County</div>
                    <div>• Angola & Steuben County</div>
                    <div>• And many more communities</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-balance">Our Core Values</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="text-primary mb-4 flex justify-center">{value.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-balance">Leadership Team</h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {leadership.map((leader, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center overflow-hidden">
                        <img
                          src={leader.image || "/placeholder.svg"}
                          alt={leader.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{leader.name}</h3>
                        <p className="text-primary font-medium">{leader.title}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{leader.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-balance">
              Why Choose Core Mechanical
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Local Expertise",
                  description:
                    "Based in Northern Indiana, we understand the unique challenges of our region's climate and industrial landscape.",
                },
                {
                  title: "24/7 Emergency Response",
                  description:
                    "When your systems fail, we're here. Our emergency response team is available around the clock.",
                },
                {
                  title: "Skilled Technicians",
                  description:
                    "EPA-certified technicians with extensive experience in commercial and industrial mechanical systems.",
                },
                {
                  title: "Self-Performance",
                  description:
                    "We handle everything in-house with our own skilled team, ensuring quality control and accountability.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
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

      {/* Careers CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 lg:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-8 h-8" />
                    <h2 className="text-3xl font-bold">Join Our Team</h2>
                  </div>
                  <p className="text-xl mb-6 text-primary-foreground/90">
                    We're always looking for skilled technicians who share our commitment to excellence and community
                    service.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <span>Competitive wages and benefits</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <span>Ongoing training and development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <span>Supportive team environment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <span>Opportunities for advancement</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button size="lg" variant="secondary" className="w-full" asChild>
                    <Link href="/careers" className="flex items-center justify-center gap-2">
                      View Open Positions
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white hover:text-primary bg-transparent"
                    asChild
                  >
                    <Link href="/contact" className="flex items-center justify-center gap-2">
                      Contact Us
                      <Phone className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
