// app/services/plumbing/page.tsx
import { Droplets, AlertTriangle, Clock, Shield, Heater, Waves, Flame, Recycle, Wrench } from "lucide-react";

// Layout Components

// Reusable Service Page Components
import { ServicePageHero } from "../_components/ServicePageHero";
import { ProblemStatementSection } from "../_components/ProblemStatementSection";
import { SystemsGrid } from "../_components/SystemsGrid";
import { ServiceTabs, type TabItem } from "../_components/ServiceTabs";
import { ProcessTimeline, type ProcessStep } from "../_components/ProcessTimeline";
import { ProofSection } from "../_components/ProofSection";
import { CtaFormSection } from "../_components/CtaFormSection";

// --- Data specific to the Plumbing page ---

const problemStatementData = {
  mainTitle: "Plumbing Problems Can Halt Your Operations",
  mainSubtitle: "A small leak or clog can quickly escalate, leading to costly water damage, safety hazards, and operational downtime. We provide fast, effective solutions to keep your facility running.",
  problemTitle: "Are You Ignoring These Plumbing Red Flags?",
  problemIcon: <AlertTriangle className="w-8 h-8 text-destructive" />,
  problems: [
    "Persistent drain clogs and slow-moving backups",
    "A sudden drop in water pressure affecting equipment",
    "Hidden leaks causing water damage, mold, and high utility bills",
    "Failing or inefficient commercial water heaters",
    "Backflow prevention compliance issues",
    "Frequent grease trap overflows and odors",
  ],
  card: {
    title: "A Small Drip Can Become a Major Disaster",
    description: "Proactive plumbing maintenance and swift, professional repairs are the best way to protect your facility from water damage, ensure safety, and prevent costly business interruptions.",
    buttonText: "Schedule a Plumbing Assessment",
    buttonHref: "/quote",
  },
};

const plumbingSystemsData = [
  { icon: <Heater className="w-10 h-10" />, name: "Water Heaters" },
  { icon: <Waves className="w-10 h-10" />, name: "Drain & Sewer Lines" },
  { icon: <Recycle className="w-10 h-10" />, name: "Backflow Prevention" },
  { icon: <Flame className="w-10 h-10" />, name: "Gas Piping" },
  { icon: <Wrench className="w-10 h-10" />, name: "Sump Pumps" },
  { icon: <Droplets className="w-10 h-10" />, name: "Grease Traps" },
];

const serviceTabsData: TabItem[] = [
  {
    value: "repair",
    trigger: "Emergency Repair",
    title: "24/7 Emergency Plumbing Repair",
    image: "/plumbing-repair.jpg",
    description: "Plumbing emergencies demand immediate attention. Our licensed plumbers are on call 24/7 to handle burst pipes, major clogs, gas leaks, and any issue that threatens your property.",
    features: ["24/7 emergency leak and clog response", "Commercial water line and drain repair", "Sump pump and water heater failure service", "Gas line leak detection and repair"],
  },
  {
    value: "installation",
    trigger: "Installation & Repiping",
    title: "System Installation & Facility Repiping",
    image: "/plumbing-installation.jpg",
    description: "We provide comprehensive installation and retrofit services for all commercial plumbing systems, ensuring code compliance and long-term reliability.",
    features: ["Complete facility repiping projects", "Commercial water heater and boiler installation", "Fixture, appliance, and equipment hookups", "New construction plumbing"],
  },
  {
    value: "maintenance",
    trigger: "Maintenance & Jetting",
    title: "Preventive Maintenance & Drain Jetting",
    image: "/plumbing-jetting.jpg",
    description: "Keep your plumbing systems flowing freely and prevent unexpected problems with our scheduled maintenance programs, including high-pressure hydro-jetting for drain and sewer lines.",
    features: ["Video pipe inspection services", "High-pressure drain and sewer jetting", "Certified backflow preventer testing", "Grease trap cleaning and maintenance"],
  },
];

const processStepsData: ProcessStep[] = [
    { step: "1", title: "Assess & Isolate", description: "Our first priority is to quickly assess the situation and isolate the problem to prevent any further water or property damage." },
    { step: "2", title: "Diagnose & Plan", description: "We use advanced tools like video pipe inspectors to diagnose the root cause and present a clear, upfront repair plan and quote." },
    { step: "3", title: "Repair & Restore", description: "Our licensed plumbers execute the repair to the highest industry standards, using quality materials for a durable solution." },
    { step: "4", title: "Test & Clean Up", description: "We thoroughly test the repair under pressure and always leave the work area cleaner than we found it." },
];

const plumbingCaseStudy = {
  title: "Case Study: Commercial Kitchen Grease Trap",
  challenge: "A busy restaurant was facing repeated health code warnings and costly emergency cleanups due to constant grease trap overflows and sewer line backups.",
  solution: "We installed a larger, more efficient grease interceptor properly sized for their needs and implemented a scheduled hydro-jetting maintenance plan.",
  results: "Achieved zero code violations in the past 12 months, completely eliminated business disruptions from backups, and improved overall kitchen sanitation.",
};

const plumbingTestimonial = {
  quote: "A burst pipe at 5 AM threatened to shut us down for the day. Core Mechanical was on-site in under an hour and had the repair done before our first customers arrived. They saved the day.",
  author: "Mark Finley",
  title: "Manager, Crossroads Retail Plaza",
};

const ctaFormData = {
  title: "Get a Quote For Your Plumbing Needs",
  description: "From routine maintenance and inspections to major installations and emergency repairs, get a fast and transparent quote from our licensed commercial plumbers.",
  features: [
    { icon: <Clock className="w-4 h-4" />, text: "24/7 Emergency Service" },
    { icon: <Shield className="w-4 h-4" />, text: "Licensed, Bonded & Insured" },
  ],
  formButtonText: "Request Plumbing Quote",
};

// --- The Page Component ---

export default function PlumbingServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <ServicePageHero
          icon={<Droplets className="w-16 h-16 text-white" />}
          title="Commercial & Industrial Plumbing Services"
          description="Expert plumbing solutions designed to keep your facility safe, compliant, and operational. From emergency repairs to new system installations."
          callToAction={{ text: "Emergency Plumbing Service", href: "tel:574-555-0123" }}
          secondaryAction={{ text: "Request a Plumbing Quote", href: "/quote" }}
        />

        <ProblemStatementSection {...problemStatementData} />

        <SystemsGrid
          title="Our Commercial Plumbing Capabilities"
          subtitle="Our licensed plumbers are equipped to handle the complex plumbing systems of commercial kitchens, manufacturing plants, and large facilities."
          systems={plumbingSystemsData}
        />

        <ServiceTabs
          title="Complete Plumbing Solutions For Your Facility"
          tabs={serviceTabsData}
        />

        <ProcessTimeline
          title="Our Plumbing Service Process"
          subtitle="We handle every plumbing job with professionalism, precision, and the utmost respect for your property and ongoing operations."
          steps={processStepsData}
        />

        <ProofSection
          title="Reliable Plumbing for Northern Indiana Businesses"
          caseStudy={plumbingCaseStudy}
          testimonial={plumbingTestimonial}
        />

        <CtaFormSection {...ctaFormData} />
      </main>

    </div>
  );
}