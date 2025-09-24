// app/services/maintenance/page.tsx
import { CalendarCheck, AlertTriangle, Clock, Shield, TrendingDown, DollarSign, CheckCircle, FileText } from "lucide-react";

// Layout Components

// Reusable Service Page Components
import { ServicePageHero } from "../_components/ServicePageHero";
import { ProblemStatementSection } from "../_components/ProblemStatementSection";
import { SystemsGrid } from "../_components/SystemsGrid";
import { ServiceTabs, type TabItem } from "../_components/ServiceTabs";
import { ProcessTimeline, type ProcessStep } from "../_components/ProcessTimeline";
import { ProofSection } from "../_components/ProofSection";
import { CtaFormSection } from "../_components/CtaFormSection";

// --- Data specific to the Maintenance page ---

const problemStatementData = {
  mainTitle: "Stop Reacting to Breakdowns. Start Preventing Them.",
  mainSubtitle: "The most expensive repair is always the one you weren't expecting. Our Planned Preventive Maintenance (PM) programs shift your facility from a reactive 'break-fix' cycle to a proactive, reliable, and cost-effective strategy.",
  problemTitle: "Does This Sound Familiar?",
  problemIcon: <AlertTriangle className="w-8 h-8 text-destructive" />,
  problems: [
    "Constant, disruptive emergency equipment failures",
    "Production downtime costing thousands per hour",
    "Skyrocketing energy bills from inefficient equipment",
    "Shorter equipment lifespan and frequent capital expenses",
    "Struggling to keep up with maintenance tasks",
    "No clear data on the health of your critical systems",
  ],
  card: {
    title: "Invest in Uptime, Not Downtime",
    description: "A customized PM program is one of the highest ROI investments you can make in your facility. It pays for itself through reduced emergency costs, lower energy bills, and extended equipment life.",
    buttonText: "Get a Custom PM Proposal",
    buttonHref: "/quote",
  },
};

const maintenanceSystemsData = [
  { icon: <TrendingDown className="w-10 h-10" />, name: "Reduce Breakdowns" },
  { icon: <DollarSign className="w-10 h-10" />, name: "Lower Energy Costs" },
  { icon: <CalendarCheck className="w-10 h-10" />, name: "Extend Asset Life" },
  { icon: <Shield className="w-10 h-10" />, name: "Improve Safety" },
  { icon: <Clock className="w-10 h-10" />, name: "Priority Service" },
  { icon: <FileText className="w-10 h-10" />, name: "Detailed Reporting" },
];

const serviceTabsData: TabItem[] = [
  {
    value: "custom",
    trigger: "Customized PM Plans",
    title: "Plans Tailored to Your Facility",
    image: "/maintenance-planning.jpg",
    description: "One size does not fit all. We analyze your specific equipment, operating hours, and critical systems to design a PM program that delivers the most value for your budget.",
    features: ["Full equipment and asset inventory", "Tiered plans from basic inspection to comprehensive coverage", "Customized task checklists for each asset", "Flexible scheduling to minimize operational disruption"],
  },
  {
    value: "tech",
    trigger: "Advanced Diagnostics",
    title: "Data-Driven Maintenance",
    image: "/maintenance-diagnostics.jpg",
    description: "We go beyond visual inspections, using advanced diagnostic tools to uncover hidden issues before they become major failures. This data helps you make informed repair or replace decisions.",
    features: ["Vibration analysis for rotating equipment", "Infrared thermography to detect hot spots", "Combustion analysis for fuel-burning appliances", "Refrigerant and oil analysis"],
  },
  {
    value: "reporting",
    trigger: "Reporting & Asset Management",
    title: "Transparent Reporting",
    image: "/maintenance-reporting.jpg",
    description: "You get more than just service; you get a partner in asset management. We provide detailed reports after every visit, giving you a clear picture of your equipment's health and a long-term capital plan.",
    features: ["Detailed digital service reports with photos", "Deficiency tracking and recommendations", "Asset condition and lifecycle tracking", "Budget forecasting for future capital expenses"],
  },
];

const processStepsData: ProcessStep[] = [
    { step: "1", title: "Discovery", description: "We start with a complete on-site assessment of your equipment and discuss your operational goals." },
    { step: "2", title: "Proposal", description: "We present a customized, tiered PM proposal with clear deliverables and transparent pricing." },
    { step: "3", title: "Execution", description: "Our dedicated technicians perform scheduled maintenance tasks with meticulous attention to detail." },
    { step: "4", title: "Review", description: "We provide detailed reports and meet with you regularly to review our findings and adjust the plan as needed." },
];

const maintenanceCaseStudy = {
  title: "Case Study: Manufacturing Plant PM Program",
  challenge: "A local manufacturing plant was losing over $20,0s00 per month due to unplanned downtime from failures in their HVAC, chiller, and compressed air systems.",
  solution: "We implemented a comprehensive quarterly PM program with advanced diagnostics. The plan identified two critical motors on the verge of failure, which were replaced during planned downtime.",
  results: "Reduced unplanned emergency calls by 85% in the first year, lowered energy costs by 15%, and achieved a 250% return on their maintenance investment.",
};

const maintenanceTestimonial = {
  quote: "Core Mechanical's PM program has been a game-changer for our budget and my stress levels. I can finally be proactive instead of just putting out fires. Their detailed reports are invaluable for our capital planning.",
  author: "Mike Johnson",
  title: "Facility Manager, ABC Manufacturing",
};

const ctaFormData = {
  title: "Build Your Proactive Maintenance Strategy",
  description: "Stop letting your equipment dictate your schedule. Contact us for a free site assessment and a custom preventive maintenance proposal.",
  features: [
    { icon: <Clock className="w-4 h-4" />, text: "Priority Emergency Service" },
    { icon: <CheckCircle className="w-4 h-4" />, text: "Guaranteed Peace of Mind" },
  ],
  formButtonText: "Request a PM Proposal",
};

export default function MaintenanceServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <ServicePageHero
          icon={<CalendarCheck className="w-16 h-16 text-white" />}
          title="Preventive Maintenance Programs"
          description="Maximize uptime, reduce energy costs, and extend the life of your critical systems with a proactive, planned maintenance strategy."
          callToAction={{ text: "Discuss Your Facility", href: "tel:574-555-0123" }}
          secondaryAction={{ text: "Get a Free PM Proposal", href: "/quote" }}
        />
        <ProblemStatementSection {...problemStatementData} />
        <SystemsGrid
          title="The Benefits of a Planned Maintenance Program"
          subtitle="A partnership with Core Mechanical is an investment in reliability and a direct boost to your bottom line."
          systems={maintenanceSystemsData}
        />
        <ServiceTabs
          title="What Our PM Programs Include"
          tabs={serviceTabsData}
        />
        <ProcessTimeline
          title="Our Partnership Process"
          subtitle="We build long-term partnerships focused on the health of your facility and your financial success."
          steps={processStepsData}
        />
        <ProofSection
          title="The Proven Value of Proactive Maintenance"
          caseStudy={maintenanceCaseStudy}
          testimonial={maintenanceTestimonial}
        />
        <CtaFormSection {...ctaFormData} />
      </main>

    </div>
  );
}