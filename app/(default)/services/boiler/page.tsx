// app/services/boilers/page.tsx
import { Flame, AlertTriangle, Clock, Shield, Heater, Layers, ToggleRight, Wind } from "lucide-react";

// Layout Components

// Reusable Service Page Components
import { ServicePageHero } from "../_components/ServicePageHero";
import { ProblemStatementSection } from "../_components/ProblemStatementSection";
import { SystemsGrid } from "../_components/SystemsGrid";
import { ServiceTabs, type TabItem } from "../_components/ServiceTabs";
import { ProcessTimeline, type ProcessStep } from "../_components/ProcessTimeline";
import { ProofSection } from "../_components/ProofSection";
import { CtaFormSection } from "../_components/CtaFormSection";

// --- Data specific to the Boiler page ---

const problemStatementData = {
  mainTitle: "Safe, Reliable Heat You Can Depend On",
  mainSubtitle: "Boiler systems are the heart of your facility's heating and process operations. We provide expert service to ensure they run safely, efficiently, and reliably.",
  problemTitle: "Is Your Boiler a Ticking Time Bomb?",
  problemIcon: <AlertTriangle className="w-8 h-8 text-destructive" />,
  problems: [
    "Unexpected shutdowns in the dead of winter",
    "Rising fuel costs from inefficient operation",
    "Loud banging or kettling noises indicating scale buildup",
    "Water leaks or pressure loss",
    "Concerns about carbon monoxide and combustion safety",
    "Failure to meet compliance and inspection standards",
  ],
  card: {
    title: "Don't Gamble with Your Facility's Safety",
    description: "A neglected boiler is a major safety and financial risk. Our comprehensive inspections and maintenance services identify critical issues before they lead to catastrophic failure.",
    buttonText: "Schedule a Boiler Safety Inspection",
    buttonHref: "/quote",
  },
};

const boilerSystemsData = [
  { icon: <Heater className="w-10 h-10" />, name: "Steam Boilers" },
  { icon: <Layers className="w-10 h-10" />, name: "Hot Water Boilers" },
  { icon: <ToggleRight className="w-10 h-10" />, name: "Condensing" },
  { icon: <Wind className="w-10 h-10" />, name: "Non-Condensing" },
  { icon: <Flame className="w-10 h-10" />, name: "Fire-Tube" },
  { icon: <Layers className="w-10 h-10" />, name: "Water-Tube" },
];

const serviceTabsData: TabItem[] = [
  {
    value: "safety",
    trigger: "Safety & Maintenance",
    title: "Boiler Safety, Maintenance & Tuning",
    image: "/boiler-maintenance.jpg",
    description: "Annual maintenance is critical for safe and efficient boiler operation. Our technicians perform comprehensive inspections and combustion analysis to keep your system compliant and running at peak performance.",
    features: ["Annual safety and compliance inspections", "Combustion analysis and efficiency tuning", "Burner and tube cleaning", "Safety control and limit testing"],
  },
  {
    value: "repair",
    trigger: "Emergency Repair",
    title: "24/7 Emergency Boiler Repair",
    image: "/boiler-repair.jpg",
    description: "A boiler failure in winter is a true emergency. Our team is on call 24/7 to handle 'no-heat' situations, leaks, and critical component failures to get your facility warm and operational.",
    features: ["24/7 'no-heat' emergency response", "Ignitor, pump, and control replacement", "Leak detection and pressure vessel repair", "Carbon monoxide testing"],
  },
  {
    value: "installation",
    trigger: "Installation & Replacement",
    title: "High-Efficiency Boiler Installation",
    image: "/boiler-installation.jpg",
    description: "Upgrading an old boiler can lead to significant fuel savings. We specialize in designing and installing modern, high-efficiency boiler systems for commercial and industrial applications.",
    features: ["High-efficiency condensing boiler upgrades", "System design and heat load calculation", "Code-compliant installation and venting", "Seamless removal of old equipment"],
  },
];

const processStepsData: ProcessStep[] = [
    { step: "1", title: "Safety Assessment", description: "Every service begins with a thorough safety assessment of the boiler room and equipment." },
    { step: "2", title: "Diagnose & Propose", description: "We use advanced diagnostics, including combustion analysis, to find the root cause and propose a clear solution." },
    { step: "3", title: "Execute to Code", description: "All repairs and installations are performed meticulously, adhering to all safety and building codes." },
    { step: "4", title: "Verify & Tune", description: "We conduct final performance tests and fine-tune the system for optimal safety and efficiency." },
];

const boilerCaseStudy = {
  title: "Case Study: School District Boiler Replacement",
  challenge: "An elementary school's 30-year-old boiler was failing frequently, causing classroom heating issues and posing a reliability risk during winter months.",
  solution: "We performed an emergency replacement over a weekend with a new high-efficiency condensing boiler system and modern, user-friendly controls.",
  results: "Achieved 100% heating reliability, a 38% reduction in annual fuel costs, and improved comfort and safety for students and staff.",
};

const boilerTestimonial = {
  quote: "Core Mechanical's response to our boiler failure during a January cold snap was incredible. They had a temporary heat source running in hours and the new system installed in record time. They are true professionals.",
  author: "John Peterson",
  title: "Facilities Director, Northwood Commercial Properties",
};

const ctaFormData = {
  title: "Ensure Your Facility Stays Warm & Safe",
  description: "Schedule a comprehensive boiler inspection or get a free quote on a high-efficiency upgrade. Protect your people and your property with expert boiler service.",
  features: [
    { icon: <Clock className="w-4 h-4" />, text: "24/7 Emergency Service" },
    { icon: <Shield className="w-4 h-4" />, text: "Certified & Insured" },
  ],
  formButtonText: "Schedule Boiler Inspection",
};

// --- The Page Component ---

export default function BoilerServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <ServicePageHero
          icon={<Flame className="w-16 h-16 text-white" />}
          title="Commercial Boiler Services"
          description="Ensuring your facility has safe, reliable, and efficient heat with expert boiler repair, maintenance, and installation."
          callToAction={{ text: "Emergency Boiler Service", href: "tel:574-555-0123" }}
          secondaryAction={{ text: "Get a Replacement Quote", href: "/quote" }}
        />

        <ProblemStatementSection {...problemStatementData} />

        <SystemsGrid
          title="Boiler Systems We Service"
          subtitle="Our licensed technicians are trained to service all types of commercial and industrial steam and hot water boiler systems."
          systems={boilerSystemsData}
        />

        <ServiceTabs
          title="Our Comprehensive Boiler Solutions"
          tabs={serviceTabsData}
        />

        <ProcessTimeline
          title="Our Boiler Service Process"
          subtitle="Our process is built on a foundation of safety-first, ensuring every job is done right, to code, and with full transparency."
          steps={processStepsData}
        />

        <ProofSection
          title="Northern Indiana's Boiler Experts"
          caseStudy={boilerCaseStudy}
          testimonial={boilerTestimonial}
        />

        <CtaFormSection {...ctaFormData} />
      </main>

    </div>
  );
}