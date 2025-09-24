// app/services/chillers/page.tsx
import { Droplets, AlertTriangle, Clock, Shield, Wind, Waves, RefreshCw, Unplug, Cog, Heater } from "lucide-react";

// Layout Components

// Reusable Service Page Components
import { ServicePageHero } from "../_components/ServicePageHero";
import { ProblemStatementSection } from "../_components/ProblemStatementSection";
import { SystemsGrid } from "../_components/SystemsGrid";
import { ServiceTabs, type TabItem } from "../_components/ServiceTabs";
import { ProcessTimeline, type ProcessStep } from "../_components/ProcessTimeline";
import { ProofSection } from "../_components/ProofSection";
import { CtaFormSection } from "../_components/CtaFormSection";

// --- Data specific to the Chiller page ---

const problemStatementData = {
  mainTitle: "Prevent Costly Downtime with Expert Chiller Service",
  mainSubtitle: "Our certified technicians specialize in all major chiller brands, providing comprehensive service to keep your critical cooling systems operating at peak efficiency.",
  problemTitle: "Critical Chiller Warning Signs",
  problemIcon: <AlertTriangle className="w-8 h-8 text-destructive" />,
  problems: [
    "Rising energy consumption and operating costs",
    "Inconsistent cooling or loss of capacity",
    "Unusual noises, vibrations, or refrigerant leaks",
    "Frequent high or low pressure alarms",
    "Compressor cycling issues or failures",
    "Poor water quality causing tube fouling",
  ],
  card: {
    title: "Chiller Failure Can Cost Thousands Per Hour",
    description: "Manufacturing processes, data centers, and commercial facilities depend on reliable cooling. Our preventive maintenance programs identify issues before they cause catastrophic failure.",
    buttonText: "Get a Preventive Maintenance Quote",
    buttonHref: "/quote",
  },
};

const chillerSystemsData = [
  { icon: <Wind className="w-10 h-10" />, name: "Air-Cooled" },
  { icon: <Waves className="w-10 h-10" />, name: "Water-Cooled" },
  { icon: <RefreshCw className="w-10 h-10" />, name: "Centrifugal" },
  { icon: <Unplug className="w-10 h-10" />, name: "Scroll Compressor" },
  { icon: <Cog className="w-10 h-10" />, name: "Screw Compressor" },
  { icon: <Heater className="w-10 h-10" />, name: "Absorption" },
];

const serviceTabsData: TabItem[] = [
  {
    value: "maintenance",
    trigger: "Preventive Maintenance",
    title: "Comprehensive Preventive Maintenance",
    image: "/chiller-maintenance.jpg",
    description: "Proactive maintenance is key to chiller reliability. Our detailed programs prevent breakdowns, improve efficiency, and extend the life of your equipment.",
    features: ["Eddy current testing and tube cleaning", "Refrigerant analysis and oil testing", "Vibration analysis and performance logging", "Control system calibration"],
  },
  {
    value: "repair",
    trigger: "Emergency Repair",
    title: "24/7 Emergency Chiller Repair",
    image: "/chiller-repair.jpg",
    description: "When a chiller goes down, every minute counts. Our rapid-response team is on call 24/7 to diagnose and repair your system, minimizing operational downtime.",
    features: ["2-hour emergency response time", "Compressor repair and complete rebuilds", "Refrigerant leak detection and repair", "Access to OEM and quality parts"],
  },
  {
    value: "retrofit",
    trigger: "Installation & Retrofit",
    title: "Chiller Installation & Retrofit",
    image: "/chiller-installation.jpg",
    description: "We provide turnkey chiller replacement and retrofit solutions, from system design and equipment selection to professional installation and commissioning.",
    features: ["High-efficiency system design", "Refrigerant retrofits (CFC phase-out)", "Turnkey project management", "Integration with Building Automation Systems"],
  },
];

const processStepsData: ProcessStep[] = [
    { step: "1", title: "Performance Analysis", description: "We start with a thorough inspection and performance analysis to understand the complete health of your system." },
    { step: "2", title: "Detailed Service Plan", description: "We provide a clear, detailed service plan and an upfront quote outlining our recommended solutions." },
    { step: "3", title: "Execute Expert Service", description: "Our certified technicians perform all work to the highest industry standards using quality parts and tools." },
    { step: "4", title: "Verify & Document", description: "We verify system performance against benchmarks and provide complete service documentation for your records." },
];

const chillerCaseStudy = {
  title: "Case Study: Data Center Chiller Optimization",
  challenge: "A 500-ton chiller system at a critical data center was suffering from efficiency loss and high energy costs, risking server uptime.",
  solution: "We implemented a comprehensive PM program, including tube cleaning, control optimization, and variable frequency drive (VFD) installation.",
  results: "Achieved a 28% reduction in energy consumption, improved PUE from 1.7 to 1.4, and generated $45,000 in annual savings with zero downtime.",
};

const chillerTestimonial = {
  quote: "When our main process chiller failed during peak summer production, Core Mechanical had us back online in 6 hours. Their emergency response saved us from a very costly shutdown.",
  author: "David Chen",
  title: "Plant Manager, Precision Manufacturing",
};

const ctaFormData = {
  title: "Schedule a Professional Chiller Inspection",
  description: "Get a comprehensive chiller evaluation from our certified experts. Receive a detailed report with recommendations to improve efficiency and prevent unexpected failures.",
  features: [
    { icon: <Clock className="w-4 h-4" />, text: "24/7 Emergency Service" },
    { icon: <Shield className="w-4 h-4" />, text: "All Major Brands Serviced" },
  ],
  formButtonText: "Schedule Chiller Inspection",
};

// --- The Page Component ---

export default function ChillerServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <ServicePageHero
          icon={<Droplets className="w-16 h-16 text-white" />}
          title="Commercial Chiller Service & Repair"
          description="Expert maintenance, repair, and optimization for the critical cooling systems that keep your facility running."
          callToAction={{ text: "Emergency Chiller Repair", href: "tel:574-555-0123" }}
          secondaryAction={{ text: "Schedule Chiller Inspection", href: "/quote" }}
        />

        <ProblemStatementSection {...problemStatementData} />

        <SystemsGrid
          title="Chiller Systems We Service"
          subtitle="Our technicians are factory-trained on a wide range of industrial and commercial chiller systems from all major manufacturers."
          systems={chillerSystemsData}
        />

        <ServiceTabs
          title="Our Complete Chiller Services"
          tabs={serviceTabsData}
        />

        <ProcessTimeline
          title="Our Chiller Service Process"
          subtitle="We follow a systematic, data-driven process to ensure every chiller service is performed effectively and documented thoroughly."
          steps={processStepsData}
        />

        <ProofSection
          title="Proven Chiller Expertise"
          caseStudy={chillerCaseStudy}
          testimonial={chillerTestimonial}
        />

        <CtaFormSection {...ctaFormData} />
      </main>

    </div>
  );
}