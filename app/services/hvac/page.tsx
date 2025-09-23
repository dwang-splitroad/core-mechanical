// app/services/hvac/page.tsx
import { Thermometer, Building, Wind, Snowflake, Factory, Wrench, AlertTriangle, Clock, Shield } from "lucide-react";

// Reusable Components
import { ServicePageHero } from "../_components/ServicePageHero";
import { ProblemStatementSection } from "../_components/ProblemStatementSection";
import { SystemsGrid } from "../_components/SystemsGrid";
import { ServiceTabs, type TabItem } from "../_components/ServiceTabs";
import { ProcessTimeline, type ProcessStep } from "../_components/ProcessTimeline";
import { ProofSection } from "../_components/ProofSection";
import { CtaFormSection } from "../_components/CtaFormSection";
import { Header } from "@/components/layout/Header"; // Assuming you have a reusable Header
import { Footer } from "@/components/layout/Footer"; // Assuming you have a reusable Footer
import { EmergencyBanner } from "@/components/layout/EmergencyBanner"; // Assuming you have a reusable Banner

// --- Data specific to the HVAC page ---

const problemStatementData = {
  mainTitle: "Reliable HVAC Solutions That Keep Your Business Running",
  mainSubtitle: "Our certified technicians provide comprehensive HVAC services designed to minimize downtime and maximize energy efficiency for commercial and industrial facilities.",
  problemTitle: "Is Your HVAC System a Risk?",
  problemIcon: <AlertTriangle className="w-8 h-8 text-destructive" />,
  problems: [
    "Inconsistent temperatures affecting productivity",
    "Rising energy bills cutting into profits",
    "Strange noises or odors signaling failure",
    "Poor air quality and humidity issues",
    "Frequent breakdowns and costly repairs",
    "Outdated, inefficient, and unreliable equipment",
  ],
  card: {
    title: "Don't Wait for a Complete System Failure",
    description: "Early intervention can save thousands in emergency repairs and prevent costly operational downtime. Our diagnostic services identify and solve problems before they become catastrophic.",
    buttonText: "Schedule a Diagnostic Inspection",
    buttonHref: "/quote",
  },
};

const hvacSystemsData = [
  { icon: <Building className="w-10 h-10" />, name: "Rooftop Units" },
  { icon: <Wind className="w-10 h-10" />, name: "Split Systems" },
  { icon: <Snowflake className="w-10 h-10" />, name: "Ductless Systems" },
  { icon: <Factory className="w-10 h-10" />, name: "VAV Systems" },
  { icon: <Thermometer className="w-10 h-10" />, name: "Air Handlers" },
  { icon: <Wrench className="w-10 h-10" />, name: "Exhaust & Ventilation" },
];



const serviceTabsData: TabItem[] = [
  {
    value: "installation",
    trigger: "Installation & Retrofit",
    title: "System Installation & Retrofit",
    image: "https://plus.unsplash.com/premium_photo-1683134512538-7b390d0adc9e?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "From new construction to upgrading outdated systems, we provide expert installation and retrofit services to ensure peak efficiency.",
    features: ["Load calculations and system design", "Energy-efficient equipment selection", "Professional installation and commissioning"],
  },
  {
    value: "repair",
    trigger: "Repair & Diagnostics",
    title: "24/7 Repair & Diagnostics",
    image: "https://plus.unsplash.com/premium_photo-1682126009570-3fe2399162f7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Our technicians are available 24/7 for emergency repairs, using advanced diagnostics to quickly identify and fix the root cause.",
    features: ["Rapid emergency response", "Advanced troubleshooting", "Quality parts for lasting repairs"],
  },
  {
    value: "maintenance",
    trigger: "Preventive Maintenance",
    title: "Preventive Maintenance Programs",
    image: "https://images.unsplash.com/photo-1721250527686-9b31f11bfe3e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Our customized PM programs keep your equipment running at peak efficiency, extend its lifespan, and reduce energy costs.",
    features: ["Customized maintenance checklists", "Scheduled inspections and tune-ups", "Priority service and preferred pricing"],
  },
];

const processStepsData: ProcessStep[] = [
  { step: "1", title: "Inspect & Diagnose", description: "Our technicians perform a comprehensive system evaluation to pinpoint the exact issue." },
  { step: "2", title: "Plan & Quote", description: "We provide a detailed repair plan and a transparent, upfront quote. No hidden fees." },
  { step: "3", title: "Execute & Repair", description: "We carry out the repair using high-quality parts and industry best practices." },
  { step: "4", title: "Test & Verify", description: "We thoroughly test the system to ensure it's operating at peak performance before we leave." },
];

const hvacCaseStudy = {
  title: "Case Study: Manufacturing Plant HVAC Upgrade",
  challenge: "A 50,000 sq ft manufacturing facility with an aging HVAC system was causing temperature control issues and excessive energy costs.",
  solution: "We engineered and installed a complete system replacement with high-efficiency rooftop units and smart controls integrated into their BAS.",
  results: "Achieved a 35% reduction in energy costs, stable temperature consistency, and zero unplanned downtime in the first year of operation.",
};

const hvacTestimonial = {
  quote: "Core Mechanical transformed our facility's comfort and efficiency. Their team was professional, knowledgeable, and completed the project on time and within budget.",
  author: "Sarah Mitchell",
  title: "Facilities Manager, TechCorp Industries",
};


const ctaFormData = {
  title: "Take Control of Your Facility's Climate",
  description: "Get a comprehensive evaluation of your HVAC system. Schedule an inspection today and receive a detailed report with actionable recommendations.",
  features: [
    { icon: <Clock className="w-4 h-4" />, text: "Same-day service available" },
    { icon: <Shield className="w-4 h-4" />, text: "Licensed & Insured" },
  ],
  formButtonText: "Schedule Inspection",
};

// --- The Page Component ---

export default function HVACServicePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* These general layout components can also be abstracted in your RootLayout */}
      <EmergencyBanner text="24/7 Emergency HVAC Service Available" />
      <Header />

      <main>
        <ServicePageHero
          icon={<Thermometer className="w-16 h-16 text-white" />}
          title="Commercial HVAC Service & Repair in Northern Indiana"
          description="Keep your facility comfortable and energy-efficient with expert HVAC installation, repair, and maintenance services."
          callToAction={{ text: "Call (574) 555-0123", href: "tel:574-555-0123" }}
          secondaryAction={{ text: "Schedule HVAC Inspection", href: "/quote" }}
        />

        <ProblemStatementSection {...problemStatementData} />

        <SystemsGrid
          title="HVAC Systems We Service"
          subtitle="Our EPA-certified technicians are experts in a wide range of commercial and industrial HVAC systems."
          systems={hvacSystemsData}
        />

        <ServiceTabs
          title="Our Complete HVAC Services"
          tabs={serviceTabsData}
        />

        <ProcessTimeline
          title="Our Transparent Service Process"
          subtitle="We believe in clear communication and a structured process from the moment you call us to the completion of your service."
          steps={processStepsData}
        />

        <ProofSection
          title="Proven Results You Can Trust"
          caseStudy={hvacCaseStudy}
          testimonial={hvacTestimonial}
        />

        <CtaFormSection {...ctaFormData} />
      </main>

      <Footer />
    </div>
  );
}