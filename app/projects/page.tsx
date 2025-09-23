import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, TrendingDown, Clock, DollarSign, Wrench } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Manufacturing Plant Chiller Upgrade",
      industry: "Manufacturing",
      challenge:
        "Aging 400-ton chiller system causing frequent breakdowns and high energy costs at automotive parts facility.",
      solution:
        "Complete chiller replacement with high-efficiency units, upgraded controls, and preventive maintenance program.",
      results: [
        { metric: "Energy Savings", value: "35%" },
        { metric: "Downtime Reduction", value: "90%" },
        { metric: "Annual Savings", value: "$52,000" },
      ],
      image: "/project-manufacturing-chiller-upgrade.jpg",
      duration: "3 weeks",
    },
    {
      title: "Food Processing Facility Refrigeration",
      industry: "Food & Beverage",
      challenge:
        "Cold storage facility needed expanded refrigeration capacity while maintaining HACCP compliance and temperature consistency.",
      solution:
        "Installed new ammonia refrigeration system with advanced controls and monitoring for temperature-sensitive food storage.",
      results: [
        { metric: "Capacity Increase", value: "60%" },
        { metric: "Temperature Variance", value: "±0.5°F" },
        { metric: "Energy Efficiency", value: "28% better" },
      ],
      image: "/project-food-processing-refrigeration.jpg",
      duration: "5 weeks",
    },
    {
      title: "Hospital HVAC System Modernization",
      industry: "Healthcare",
      challenge:
        "Regional hospital required HVAC upgrade to meet strict air quality standards while maintaining 24/7 operations.",
      solution:
        "Phased HVAC replacement with medical-grade air filtration, humidity control, and redundant systems for critical areas.",
      results: [
        { metric: "Air Quality Improvement", value: "99.97%" },
        { metric: "Energy Reduction", value: "42%" },
        { metric: "Zero Downtime", value: "100%" },
      ],
      image: "/project-hospital-hvac-modernization.jpg",
      duration: "8 weeks",
    },
    {
      title: "Data Center Cooling Optimization",
      industry: "Technology",
      challenge:
        "Growing data center experiencing cooling inefficiencies and hot spots affecting server performance and reliability.",
      solution:
        "Implemented precision cooling system with hot/cold aisle containment and intelligent airflow management.",
      results: [
        { metric: "Cooling Efficiency", value: "45% better" },
        { metric: "Hot Spots Eliminated", value: "100%" },
        { metric: "PUE Improvement", value: "1.8 to 1.3" },
      ],
      image: "/project-data-center-cooling.jpg",
      duration: "4 weeks",
    },
    {
      title: "School District Boiler Replacement",
      industry: "Education",
      challenge:
        "Elementary school's 30-year-old boiler system failing frequently, causing classroom heating issues during winter months.",
      solution: "Emergency boiler replacement with high-efficiency condensing boilers and modern control systems.",
      results: [
        { metric: "Reliability", value: "Zero failures" },
        { metric: "Fuel Savings", value: "38%" },
        { metric: "Installation Time", value: "2 days" },
      ],
      image: "/project-school-boiler-replacement.jpg",
      duration: "1 week",
    },
    {
      title: "Restaurant Chain HVAC Retrofit",
      industry: "Food Service",
      challenge:
        "Multi-location restaurant chain needed energy-efficient HVAC solutions to reduce operating costs across 12 locations.",
      solution:
        "Standardized high-efficiency HVAC systems with smart controls and centralized monitoring across all locations.",
      results: [
        { metric: "Energy Savings", value: "31%" },
        { metric: "Maintenance Reduction", value: "55%" },
        { metric: "ROI Timeline", value: "2.3 years" },
      ],
      image: "/project-restaurant-hvac-retrofit.jpg",
      duration: "12 weeks",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Emergency Banner */}
      <div className="bg-accent text-accent-foreground py-2 px-4 text-center text-sm font-medium">
        24/7 Emergency Service Available • Call Now: (574) 555-0123
      </div>

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
            <Link href="/projects" className="text-primary font-medium">
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
      <section className="hero-gradient text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
              Proven Results
            </Badge>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Projects That Deliver Measurable Results
            </h1>

            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto text-balance">
              See how we've helped facilities across Northern Indiana reduce downtime, save energy, and improve
              operational efficiency through expert mechanical solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-foreground">
                      {project.industry}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 text-white text-sm flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {project.duration}
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-accent mb-2">Challenge</h4>
                    <p className="text-muted-foreground text-sm">{project.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-primary mb-2">Solution</h4>
                    <p className="text-muted-foreground text-sm">{project.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-green-600 mb-3">Results</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="text-center p-2 bg-muted/50 rounded">
                          <div className="font-bold text-lg text-green-600">{result.value}</div>
                          <div className="text-xs text-muted-foreground">{result.metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Project Success by the Numbers</h2>
            <p className="text-xl text-muted-foreground">
              Our track record speaks for itself - delivering measurable improvements across all project types.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Building className="w-8 h-8" />, stat: "150+", label: "Projects Completed" },
              { icon: <TrendingDown className="w-8 h-8" />, stat: "35%", label: "Average Energy Savings" },
              { icon: <Clock className="w-8 h-8" />, stat: "85%", label: "Downtime Reduction" },
              { icon: <DollarSign className="w-8 h-8" />, stat: "$2.3M", label: "Client Savings Generated" },
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-4 flex justify-center">{item.icon}</div>
                  <div className="text-3xl font-bold mb-2">{item.stat}</div>
                  <p className="text-muted-foreground text-sm">{item.label}</p>
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Ready to Start Your Project?</h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Let's discuss how we can deliver similar results for your facility. Every project starts with
                understanding your unique challenges and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8 py-4">
                  Schedule Project Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 bg-transparent"
                >
                  Request Project Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
