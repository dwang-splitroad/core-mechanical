// app/services/refrigeration/page.tsx
import { Snowflake, AlertTriangle, Clock, Shield, Utensils, Box, CheckSquare, BarChart } from "lucide-react";

// Layout Components

// Reusable Service Page Components
import { ServicePageHero } from "../_components/ServicePageHero";
import { ProblemStatementSection } from "../_components/ProblemStatementSection";
import { SystemsGrid } from "../_components/SystemsGrid";
import { ServiceTabs, type TabItem } from "../_components/ServiceTabs";
import { ProcessTimeline, type ProcessStep } from "../_components/ProcessTimeline";
import { ProofSection } from "../_components/ProofSection";
import { CtaFormSection } from "../_components/CtaFormSection";

// --- Data specific to the Refrigeration page ---

const problemStatementData = {
  mainTitle: "Reliable Refrigeration is Not Optional",
  mainSubtitle: "For food service, cold storage, and processing facilities, proper refrigeration is critical for safety, compliance, and profitability. We keep your systems running flawlessly.",
  problemTitle: "Is Your Refrigeration System a Liability?",
  problemIcon: <AlertTriangle className="w-8 h-8 text-destructive" />,
  problems: [
    "Failing to maintain critical temperatures",
    "Spoiled inventory leading to significant financial loss",
    "Risk of health code violations and shutdowns",
    "Excessive energy consumption from inefficient units",
    "Frequent breakdowns during peak business hours",
    "Ice buildup, water leaks, and seal failures",
  ],
  card: {
    title: "Protect Your Inventory and Your Reputation",
    description: "A single refrigeration failure can cost you thousands in lost product and damage your brand. Our emergency service and preventive maintenance plans are your best insurance.",
    buttonText: "Request Emergency Service",
    buttonHref: "/emergency",
  },
};

const refrigerationSystemsData = [
  { icon: <Box className="w-10 h-10" />, name: "Walk-In Coolers" },
  { icon: <Snowflake className="w-10 h-10" />, name: "Walk-In Freezers" },
  { icon: <Utensils className="w-10 h-10" />, name: "Reach-In Units" },
  { icon: <BarChart className="w-10 h-10" />, name: "Display Cases" },
  { icon: <CheckSquare className="w-10 h-10" />, name: "Prep Tables" },
  { icon: <Utensils className="w-10 h-10" />, name: "Ice Machines" },
];

const serviceTabsData: TabItem[] = [
  {
    value: "repair",
    trigger: "Emergency Repair",
    title: "24/7 Emergency Refrigeration Repair",
    image: "/refrigeration-repair.jpg",
    description: "We understand that refrigeration emergencies can't wait. Our technicians are on call 24/7 to provide rapid, effective repairs to protect your valuable inventory.",
    features: ["Fast dispatch for all emergency calls", "Compressor, evaporator, and condenser repair", "Refrigerant leak detection and recharge", "Thermostat and control system diagnostics"],
  },
  {
    value: "maintenance",
    trigger: "Preventive Maintenance",
    title: "Food Safety & Compliance Maintenance",
    image: "/refrigeration-maintenance.jpg",
    description: "Our preventive maintenance programs are designed to ensure food safety, prevent spoilage, and keep your equipment running efficiently and in compliance with health codes.",
    features: ["Scheduled coil cleaning and inspection", "Temperature logging and calibration", "Door seal and hardware inspection", "Refrigerant level and pressure checks"],
  },
  {
    value: "installation",
    trigger: "Installation & Replacement",
    title: "New System Installation & Replacement",
    image: "/refrigeration-installation.jpg",
    description: "Whether you're opening a new facility or upgrading old equipment, we provide professional installation for all commercial refrigeration systems.",
    features: ["Custom walk-in cooler design and build", "System sizing for optimal performance", "Energy-efficient equipment recommendations", "Turnkey installation and startup"],
  },
];

const processStepsData: ProcessStep[] = [
    { step: "1", title: "Triage & Dispatch", description: "We assess the urgency of your call and immediately dispatch the right technician for the job." },
    { step: "2", title: "Diagnose & Quote", description: "Our tech performs a full diagnostic and provides a clear, upfront quote before any repair work begins." },
    { step: "3", title: "Repair & Sanitize", description: "We execute the repair efficiently and ensure the work area is left clean and sanitary." },
    { step: "4", title: "Test & Verify", description: "We verify that the system is holding the correct temperature and operating to specification." },
];

const refrigerationCaseStudy = {
  title: "Case Study: Restaurant Chain Cold Storage",
  challenge: "A multi-location restaurant was experiencing frequent walk-in cooler failures, leading to significant food spoilage and inconsistent health inspection reports.",
  solution: "We implemented a quarterly preventive maintenance program across all locations and retrofitted two older units with modern, energy-efficient compressors.",
  results: "Eliminated emergency service calls by 95%, completely prevented inventory loss for over 18 months, and ensured consistent 'A' grades on health reports.",
};

const refrigerationTestimonial = {
  quote: "Core Mechanical's 2 AM emergency service saved our entire holiday weekend inventory. Their technician was professional, fast, and a total lifesaver for our business.",
  author: "Maria Garcia",
  title: "General Manager, The Downtown Steakhouse",
};

const ctaFormData = {
  title: "Ensure Your Refrigeration Never Fails",
  description: "Protect your products, customers, and bottom line. Schedule a comprehensive refrigeration system inspection with our certified technicians today.",
  features: [
    { icon: <Clock className="w-4 h-4" />, text: "24/7 Emergency Response" },
    { icon: <Shield className="w-4 h-4" />, text: "Health Code Compliant" },
  ],
  formButtonText: "Schedule Refrigeration Inspection",
};

// --- The Page Component ---

export default function RefrigerationServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <ServicePageHero
          icon={<Snowflake className="w-16 h-16 text-white" />}
          title="Commercial Refrigeration Services"
          description="Protecting your inventory with expert repair, maintenance, and installation for all food service and cold storage refrigeration systems."
          callToAction={{ text: "Emergency Refrigeration Service", href: "tel:574-555-0123" }}
          secondaryAction={{ text: "Get a Maintenance Quote", href: "/quote" }}
        />

        <ProblemStatementSection {...problemStatementData} />

        <SystemsGrid
          title="Refrigeration Systems We Service"
          subtitle="From restaurants to warehouses, we have the expertise to service the commercial refrigeration equipment your business depends on."
          systems={refrigerationSystemsData}
        />

        <ServiceTabs
          title="Our Refrigeration Solutions"
          tabs={serviceTabsData}
        />

        <ProcessTimeline
          title="Our Refrigeration Service Process"
          subtitle="We follow a meticulous process designed for speed and accuracy, ensuring your critical systems are back online as quickly as possible."
          steps={processStepsData}
        />

        <ProofSection
          title="Trusted by Northern Indiana's Food Industry"
          caseStudy={refrigerationCaseStudy}
          testimonial={refrigerationTestimonial}
        />

        <CtaFormSection {...ctaFormData} />
      </main>

    </div>
  );
}