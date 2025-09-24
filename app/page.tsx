// app/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Thermometer, Droplets, Zap, Shield, Users, Phone, Clock, MapPin, Wrench } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Core Mechanical - Premier HVAC & Mechanical Services | Northern Indiana',
  description: 'Core Mechanical provides expert HVAC, plumbing, refrigeration, and mechanical services throughout Northern Indiana. Serving commercial, industrial, and institutional facilities with 24/7 emergency service, preventive maintenance, and energy-efficient solutions.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* Hero Section with Background Video */}
      <section className="relative overflow-hidden text-white min-h-[100svh] flex items-center">
        <div className="absolute inset-x-0 top-0 z-20">
          <Header variant="onDark" />
        </div>
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/manufacturing-plant-industrial-facility.jpg"
        >
          <source src="/header-video-portrait.mp4" media="(max-aspect-ratio: 3/4)" type="video/mp4" />
          <source src="/header-video-landscape.mp4" media="(min-aspect-ratio: 3/4)" type="video/mp4" />
          <source src="/header-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#323232]/80" />

        <div className="relative z-10 container mx-auto px-4 pt-20 sm:pt-24 md:pt-8">
          <div className="w-full mx-auto text-center">
            {/* <Badge variant="secondary" className="mb-4 sm:mb-6 bg-[#323232]/20 text-[#b0b1b1] border-[#b0b1b1]/30 text-xs sm:text-sm">
              Serving Northern Indiana • 70-Mile Radius
            </Badge> */}

            <div className="font-bold mb-4 sm:mb-6 text-white font-universe w-full mx-auto text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-2 tracking-wide">
                INDUSTRY LEADING
              </div>
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl leading-none tracking-tight whitespace-nowrap" style={{fontSize: 'clamp(2rem, 8vw, 8rem)'}}>
                MECHANICAL CONTRACTING
              </div>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-6 sm:mb-8 text-[#b0b1b1] max-w-4xl mx-auto text-balance">
              Minimize Downtime, Maximize Efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12">
              <Button size="lg" className="bg-[#8cc63e] hover:bg-[#255553] text-white px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg w-full sm:w-auto transition-colors duration-200">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Call Now: (574) 555-0123
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#8cc63e] text-[#8cc63e] hover:bg-[#8cc63e] hover:text-white px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg bg-transparent w-full sm:w-auto transition-colors duration-200"
                asChild
              >
                <Link href="/quote">Request Free Quote</Link>
              </Button>
            </div>

            {/* Trust Bar */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-[#b0b1b1]">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance text-black">Complete Mechanical Solutions</h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              From routine maintenance to emergency repairs, we keep your facility running at peak performance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white border-none shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                <CardContent className="p-6">
                  <div className="text-[#8cc63e] mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-[#323232]">{service.title}</h3>
                  <p className="text-[#323232]/80">{service.description}</p>
                  <Button variant="link" className="p-0 mt-4 text-[#8cc63e] hover:text-[#255553] transition-colors">
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
          <div className="bg-[#323232] text-white rounded-2xl p-8 lg:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
                Prevent Costly Breakdowns with Our PM Program
              </h2>
              <p className="text-xl mb-8 text-white">
                Our preventive maintenance program reduces emergency calls by up to 80% and extends equipment life by
                years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#8cc63e] text-white hover:bg-[#255553] border border-white px-8 py-4 transition-colors duration-200">
                  Download Free PM Checklist
                </Button>
                <Button
                  size="lg"
                  className="bg-[#8cc63e] text-white hover:bg-[#255553] border border-white px-8 py-4 transition-colors duration-200"
                >
                  Schedule PM Assessment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-balance text-[#323232]">
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
                  <CheckCircle className="w-6 h-6 text-[#8cc63e] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#323232]">{item.title}</h3>
                    <p className="text-[#323232]/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-[#323232]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-8 text-white">Trusted by Leading Facilities</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 text-[#b0b1b1]">
              <div className="text-2xl font-bold">Chamber of Commerce</div>
              <div className="text-2xl font-bold">BBB A+ Rating</div>
              <div className="text-2xl font-bold">EPA Certified</div>
              <div className="text-2xl font-bold">OSHA Compliant</div>
            </div>
          </div>

          <Card className="max-w-4xl mx-auto bg-white border-[#b0b1b1]/20">
            <CardContent className="p-8">
              <blockquote className="text-xl text-center mb-6 text-balance text-[#323232]">
                "Core Mechanical's preventive maintenance program has eliminated our emergency breakdowns. Their team is
                professional, responsive, and truly understands industrial systems."
              </blockquote>
              <div className="text-center">
                <p className="font-semibold text-[#323232]">Mike Johnson</p>
                <p className="text-[#323232]/70">Facility Manager, ABC Manufacturing</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
