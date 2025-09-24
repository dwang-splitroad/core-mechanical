// app/services/piping/page.tsx
import { Link as PipeIcon, AlertTriangle, Clock, Shield, Wind, Flame, Waves, Milk, FlaskConical, CheckCircle, CloudCog } from "lucide-react";

// Layout Components

// Reusable Service Page Components
import { ServicePageHero } from "../_components/ServicePageHero";
import { ProblemStatementSection } from "../_components/ProblemStatementSection";
import { SystemsGrid } from "../_components/SystemsGrid";
import { ServiceTabs, type TabItem } from "../_components/ServiceTabs";
import { ProcessTimeline, type ProcessStep } from "../_components/ProcessTimeline";
import { ProofSection } from "../_components/ProofSection";
import { CtaFormSection } from "../_components/CtaFormSection";

// --- Data specific to the Industrial Piping page ---

const problemStatementData = {
  mainTitle: "Precision Piping is the Lifeline of Your Plant",
  mainSubtitle: "Your facility's productivity, safety, and efficiency depend on the integrity of its piping systems. We deliver engineered solutions that perform under pressure.",
  problemTitle: "Are Leaks and Inefficiencies Costing You?",
  problemIcon: <AlertTriangle className="w-8 h-8 text-destructive" />,
  problems: [
    "Lost production due to system downtime",
    "Serious safety hazards from steam or gas leaks",
    "High energy costs from compressed air leaks",
    "Product contamination from improperly designed systems",
    "Failing to meet ASME, API, or other industry codes",
    "Bottlenecks from inefficient system design",
  ],
  card: {
    title: "Engineered for Performance and Safety",
    description: "Our certified welders and pipefitters don't just install pipes; they build critical infrastructure. We mitigate risks and ensure your systems are built for long-term reliability and safety.",
    buttonText: "Schedule a System Assessment",
    buttonHref: "/quote",
  },
};

const pipingSystemsData = [
  { icon: <CloudCog className="w-10 h-10" />, name: "Steam & Condensate" },
  { icon: <Wind className="w-10 h-10" />, name: "Compressed Air" },
  { icon: <Flame className="w-10 h-10" />, name: "Natural & Process Gas" },
  { icon: <Waves className="w-10 h-10" />, name: "Chilled & Hot Water" },
  { icon: <Milk className="w-10 h-10" />, name: "Food Grade / Sanitary" },
  { icon: <FlaskConical className="w-10 h-10" />, name: "Chemical & Process" },
];

const serviceTabsData: TabItem[] = [
  {
    value: "fabrication",
    trigger: "Welding & Fabrication",
    title: "Certified Welding & Custom Fabrication",
    image: "/piping-welding.jpg",
    description: "Our core strength lies in our certified welding and fabrication capabilities. We work with carbon steel, stainless steel, and various alloys in our shop or on-site to meet exact project specifications.",
    features: ["ASME & API certified welders", "TIG, MIG, and Stick welding processes", "Custom skid and module fabrication", "Pipe supports, hangers, and structural steel"],
  },
  {
    value: "installation",
    trigger: "Design & Installation",
    title: "Piping System Design & Installation",
    image: "/piping-installation.jpg",
    description: "We manage piping projects from initial design and material selection to final installation and testing, ensuring systems are safe, efficient, and code-compliant.",
    features: ["P&ID review and system layout", "New construction and plant retrofits", "Process and utility piping installation", "Turnkey project management"],
  },
  {
    value: "repair",
    trigger: "Maintenance & Repair",
    title: "Emergency Repair & Maintenance",
    image: "/piping-repair.jpg",
    description: "Downtime is not an option. We provide rapid-response emergency repairs for leaks and system failures, as well as preventive maintenance to keep your plant running smoothly.",
    features: ["24/7 emergency leak repair", "System modifications and tie-ins", "Valve replacement and component repair", "Preventive maintenance and system audits"],
  },
];

const processStepsData: ProcessStep[] = [
    { step: "1", title: "Consult & Design", description: "We start by understanding your process needs, reviewing P&IDs, and developing an engineered plan." },
    { step: "2", title: "Fabricate & Prep", description: "We pre-fabricate components in our controlled shop environment to ensure quality and minimize on-site downtime." },
    { step: "3", title: "Install & Weld", description: "Our certified crews perform on-site installation with a rigorous focus on safety and quality control." },
    { step: "4", title: "Test & Commission", description: "We conduct hydrostatic or pneumatic testing to verify integrity before commissioning the system for service." },
];

const pipingCaseStudy = {
  title: "Case Study: Food Processing Sanitary Piping",
  challenge: "A food processing facility needed to upgrade its product transfer lines to meet new FDA standards and improve clean-in-place (CIP) efficiency without a major shutdown.",
  solution: "We fabricated custom stainless steel components off-site and performed the installation in scheduled phases during planned maintenance windows.",
  results: "The new system passed all FDA inspections, reduced CIP cycle times by 30%, and eliminated any risk of product contamination, all with zero unplanned downtime.",
};

const pipingTestimonial = {
  quote: "The quality of Core Mechanical's pipe welding is second to none. They understand the critical nature of our processes and worked safely and efficiently around our production schedule. They are our go-to partner for any piping project.",
  author: "Robert Jensen",
  title: "Lead Engineer, Midwest Chemical Processing",
};

const ctaFormData = {
  title: "Start Your Industrial Piping Project",
  description: "Whether it's a new installation, a critical repair, or a system modification, our industrial piping experts are ready to help. Contact us for a project consultation.",
  features: [
    { icon: <Shield className="w-4 h-4" />, text: "OSHA Compliant" },
    { icon: <CheckCircle className="w-4 h-4" />, text: "ASME Certified Welders" },
  ],
  formButtonText: "Request Project Consultation",
};

// --- The Page Component ---

export default function IndustrialPipingPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <ServicePageHero
          icon={<PipeIcon className="w-16 h-16 text-white" />}
          title="Industrial & Process Piping Services"
          description="Precision-engineered piping solutions for steam, compressed air, gas, and process applications. Built for safety, compliance, and performance."
          callToAction={{ text: "Request Emergency Repair", href: "tel:574-555-0123" }}
          secondaryAction={{ text: "Discuss Your Project", href: "/quote" }}
        />

        <ProblemStatementSection {...problemStatementData} />

        <SystemsGrid
          title="Specialized Piping Systems & Applications"
          subtitle="Our expertise covers the full range of utility and process piping systems that are essential to your facility's operations."
          systems={pipingSystemsData}
        />

        <ServiceTabs
          title="Our Industrial Piping Capabilities"
          tabs={serviceTabsData}
        />

        <ProcessTimeline
          title="Our Project-Focused Process"
          subtitle="We manage every piping project with a disciplined, four-stage process that ensures quality, safety, and on-time completion."
          steps={processStepsData}
        />

        <ProofSection
          title="Proven Performance in Demanding Environments"
          caseStudy={pipingCaseStudy}
          testimonial={pipingTestimonial}
        />

        <CtaFormSection {...ctaFormData} />
      </main>

    </div>
  );
}