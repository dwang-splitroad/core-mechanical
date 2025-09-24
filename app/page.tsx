// app/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Thermometer, Droplets, Zap, Shield, Users, Phone, Clock, MapPin, Wrench, MessageSquare, Handshake, ShieldCheck, Snowflake, Hammer, Calendar, Building } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
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
      <section id="hero" className="relative overflow-hidden text-white min-h-[100svh] flex items-center">
        <div className="absolute inset-x-0 top-0 z-20">
          <Header variant="dynamic" dynamicTargetId="hero" />
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

        <div className="relative z-10 w-full mx-auto px-4 pt-20 sm:pt-24 md:pt-8">
          <div className="w-full mx-auto text-center">
            {/* <Badge variant="secondary" className="mb-4 sm:mb-6 bg-[#323232]/20 text-[#b0b1b1] border-[#b0b1b1]/30 text-xs sm:text-sm">
              Serving Northern Indiana • 70-Mile Radius
            </Badge> */}

            <div className="font-bold mb-4 sm:mb-6 text-white font-universe w-full mx-auto text-center">
              <div className="leading-tight mb-2 tracking-wide text-[1.6875rem] sm:text-[2.025rem] md:text-[2.7rem] lg:text-[3.375rem] xl:text-[4.05rem]">
                INDUSTRY LEADING
              </div>
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl leading-none tracking-tight whitespace-nowrap" style={{fontSize: 'clamp(1.8rem, 7.2vw, 7.2rem)'}}>
                MECHANICAL CONTRACTING
              </div>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-6 sm:mb-8 text-[#8cc63e] max-w-4xl mx-auto text-center text-balance">
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
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-white">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                24/7 Emergency Support
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Nationwide Coverage
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance text-[#8cc63e]">Complete Mechanical Services</h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              From routine maintenance to emergency repairs, we keep your facility running at peak performance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: <Thermometer className="w-8 h-8" />,
                title: "Heating & Air Conditioning",
                description: "Complete HVAC solutions including installation, 24/7 repair, and preventive maintenance for commercial facilities.",
                href: "/services/hvac",
              },
              {
                icon: <Snowflake className="w-8 h-8" />,
                title: "Refrigeration Systems",
                description: "Expert service for walk-in coolers, freezers, ice machines, and all critical commercial refrigeration equipment.",
                href: "/services/chillers",
              },
              {
                icon: <Droplets className="w-8 h-8" />,
                title: "Chiller Service",
                description: "Specialized maintenance, emergency repair, and efficiency optimization for industrial and commercial chillers.",
                href: "/services/boiler",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Boiler Service",
                description: "Comprehensive boiler services focused on safety, compliance, and reliability, from annual tuning to emergency repair.",
                href: "/services/piping",
              },
              {
                icon: <Droplets className="w-8 h-8" />,
                title: "Plumbing Services",
                description: "Licensed commercial plumbing solutions, from emergency leak repair and drain jetting to new system installations.",
                href: "/services/welding",
              },
              {
                icon: <Wrench className="w-8 h-8" />,
                title: "Industrial Piping",
                description: "Certified welding and installation of process piping for steam, compressed air, gas, and other critical applications.",
                href: "/services/maintenance",
              },
              {
                icon: <Hammer className="w-8 h-8" />,
                title: "Welding & Fabrication",
                description: "Custom, in-shop and on-site fabrication and repair services delivered by AWS certified welders.",
                href: "/services/welding",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Maintenance Programs",
                description: "Proactive, customized preventive maintenance plans that reduce costs, prevent downtime, and extend equipment life.",
                href: "/services/maintenance",
              },
            ].map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8cc63e] rounded-xl"
                aria-label={`${service.title} – Learn more`}
              >
                <Card className="transition-colors bg-white border border-transparent shadow-[0_4px_12px_rgba(0,0,0,0.12)] group-hover:bg-[#8cc63e] group-hover:border-[#8cc63e] h-full">
                  <CardContent className="p-6 h-full flex flex-col items-center text-center">
                    <div className="mb-4 text-[#8cc63e] group-hover:text-white flex justify-center">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-[#323232] group-hover:text-white">{service.title}</h3>
                    <p className="text-[#323232]/80 group-hover:text-white/90 flex-grow mt-1">{service.description}</p>
                    <span className="inline-block mt-4 text-[#8cc63e] group-hover:text-white">Learn More →</span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Bubbles */}
      <section className="py-12" style={{ backgroundColor: '#2b2b2b' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#8cc63e] mb-3">Solutions to Keep Your Facility Running</h2>
            <p className="text-white/80 max-w-2xl mx-auto">Choose the path that best fits your needs - prevent issues before they happen, build to your specs, install with confidence, or get rapid repairs.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: <Calendar className="w-7 h-7" />,
                title: "Planned Maintenance",
                description: "Reduce emergencies, extend equipment life, and control costs.",
                href: "/solutions/maintenance",
              },
              {
                icon: <Building className="w-7 h-7" />,
                title: "Custom Build",
                description: "Design-build solutions tailored to your facility’s needs.",
                href: "/solutions/design-build",
              },
              {
                icon: <Wrench className="w-7 h-7" />,
                title: "Service & Install",
                description: "Expert installation, optimization, and system upgrades.",
                href: "/solutions/service-install",
              },
              {
                icon: <Shield className="w-7 h-7" />,
                title: "Emergency Repair",
                description: "24/7 emergency repair to minimize downtime and risk.",
                href: "/emergency",
              },
            ].map((s, i) => (
              <Link key={i} href={s.href} className="group block">
                <Card className="bg-[#2b2b2b] text-white h-full shadow-[0_6px_20px_rgba(255,255,255,0.12)]">
                  <CardContent className="p-6 text-center flex flex-col items-center">
                    <div className="text-[#8cc63e] mb-3">{s.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                    <p className="text-white/80 text-sm mb-4 flex-grow">{s.description}</p>
                    <span className="text-[#8cc63e] group-hover:underline">Learn More →</span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Preventive Maintenance Hook */}
      {/* <section className="py-16">
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
                <Button size="lg" className="bg-[#8cc63e] text-white hover:bg-[#255553] px-8 py-4 transition-colors duration-200">
                  Download Free PM Checklist
                </Button>
                <Button
                  size="lg"
                  className="bg-[#8cc63e] text-white hover:bg-[#255553] px-8 py-4 transition-colors duration-200"
                >
                  Schedule PM Assessment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

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
      <section
        className="relative py-16 text-white"
        style={{
          backgroundImage: "url('/us-flag-black.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#232323',
        }}
      >
          <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Image
              src="/core-values-text.png"
              alt="Core Values"
              width={320}
              height={64}
              className="mx-auto mb-8 h-auto w-[300px] sm:w-[420px]"
              priority
            />
          </div>

            {/* Core Values Grid */}
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
              {/* Open Communication */}
              <Card className="bg-black border border-[#8cc63e] h-full lg:col-span-2">
                <CardContent className="p-5 sm:p-6 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="text-[#8cc63e]">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">We Openly Communicate</h3>
                      <p className="text-sm text-white/80 mt-1">Fast updates, clear expectations, no surprises.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Value Every Opinion */}
              <Card className="bg-black border border-[#8cc63e] h-full lg:col-span-2">
                <CardContent className="p-5 sm:p-6 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="text-[#8cc63e]">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">We Value Everyone’s Opinion</h3>
                      <p className="text-sm text-white/80 mt-1">We listen to your team and align work to your goals.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Do the Right Thing */}
              <Card className="bg-black border border-[#8cc63e] h-full lg:col-span-2">
                <CardContent className="p-5 sm:p-6 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="text-[#8cc63e]">
                      <Shield className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">We Do The Right Thing</h3>
                      <p className="text-sm text-white/80 mt-1">Safety and integrity first—every task, every time.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Treat Others Well */}
              <Card className="bg-black border border-[#8cc63e] h-full lg:col-span-2 lg:col-start-2">
                <CardContent className="p-5 sm:p-6 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="text-[#8cc63e]">
                      <Handshake className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">We Treat Others As We Want To Be Treated</h3>
                      <p className="text-sm text-white/80 mt-1">Respectful, transparent partnerships that last.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Accountability */}
              <Card className="bg-black border border-[#8cc63e] h-full lg:col-span-2 lg:col-start-4">
                <CardContent className="p-5 sm:p-6 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="text-[#8cc63e]">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">We Hold Ourselves Accountable</h3>
                      <p className="text-sm text-white/80 mt-1">Clear ownership, measurable outcomes, on-time delivery.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
