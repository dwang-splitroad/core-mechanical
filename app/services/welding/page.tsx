// app/services/welding/page.tsx
import { Hammer, AlertTriangle, Shield, CheckCircle, Scan, GitBranch, HandMetal, Layers } from "lucide-react";

// Layout Components
import { EmergencyBanner } from "@/components/layout/EmergencyBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Reusable Service Page Components
import { ServicePageHero } from "../_components/ServicePageHero";
import { ProblemStatementSection } from "../_components/ProblemStatementSection";
import { SystemsGrid } from "../_components/SystemsGrid";
import { ServiceTabs, type TabItem } from "../_components/ServiceTabs";
import { ProcessTimeline, type ProcessStep } from "../_components/ProcessTimeline";
import { ProofSection } from "../_components/ProofSection";
import { CtaFormSection } from "../_components/CtaFormSection";

// --- Data specific to the Welding & Fabrication page ---

const problemStatementData = {
  mainTitle: "Custom Solutions Require Expert Craftsmanship",
  mainSubtitle: "Off-the-shelf parts don't always fit. When you need a custom-built component, a structural repair, or specialized metalwork, our certified welders deliver with precision and strength.",
  problemTitle: "When Standard Parts Just Won't Work",
  problemIcon: <AlertTriangle className="w-8 h-8 text-destructive" />,
  problems: [
    "Need for custom-designed equipment skids or platforms",
    "Urgent structural repairs to existing equipment or supports",
    "Unique piping configurations that require custom fittings",
    "Modifications to existing machinery or systems",
    "Lack of access to certified welders for on-site work",
    "Concerns about the quality and durability of repairs",
  ],
  card: {
    title: "Built Strong, Built Right, Built to Last",
    description: "Quality welding is the foundation of a safe and reliable facility. We don't cut corners. Our certified work ensures every piece we fabricate and every repair we make meets the highest standards of safety and durability.",
    buttonText: "Get a Fabrication Quote",
    buttonHref: "/quote",
  },
};

const weldingSystemsData = [
  { icon: <GitBranch className="w-10 h-10" />, name: "Pipe Welding" },
  { icon: <Layers className="w-10 h-10" />, name: "Structural Steel" },
  { icon: <HandMetal className="w-10 h-10" />, name: "Custom Skids" },
  { icon: <Scan className="w-10 h-10" />, name: "Equipment Repair" },
  { icon: <Shield className="w-10 h-10" />, name: "Safety Guarding" },
  { icon: <CheckCircle className="w-10 h-10" />, name: "Stainless & Carbon" },
];

const serviceTabsData: TabItem[] = [
  {
    value: "shop",
    trigger: "In-Shop Fabrication",
    title: "Controlled In-Shop Fabrication",
    image: "/welding-shop.jpg",
    description: "Our fully equipped fabrication shop allows us to build custom components in a controlled environment, ensuring the highest quality welds and precise adherence to your designs.",
    features: ["Custom pipe and skid fabrication", "Structural steel platforms and supports", "CNC plasma cutting for precision parts", "Work with stainless steel, carbon steel, and alloys"],
  },
  {
    value: "field",
    trigger: "On-Site Field Welding",
    title: "Mobile & On-Site Field Welding",
    image: "/welding-field.jpg",
    description: "We bring our expertise to you. Our mobile welding rigs are fully equipped for on-site installations, modifications, and emergency repairs, minimizing downtime at your facility.",
    features: ["24/7 emergency on-site repair welding", "Certified structural and pipe welding crews", "System tie-ins and modifications", "Heavy equipment repair and reinforcement"],
  },
  {
    value: "repair",
    trigger: "Repair & Modification",
    title: "Expert Repair & Modification",
    image: "/welding-repair.jpg",
    description: "From reinforcing cracked supports to modifying existing equipment, our welding repair services are a cost-effective way to extend the life of your critical assets and adapt them to new processes.",
    features: ["Crack and stress fracture repair", "Hard-facing for wear resistance", "Custom brackets, mounts, and supports", "Line modifications and equipment retrofits"],
  },
];

const processStepsData: ProcessStep[] = [
    { step: "1", title: "Design Review", description: "We collaborate with you to understand the project goals and review all drawings and specifications." },
    { step: "2", title: "Material Sourcing", description: "We source high-quality, traceable materials that meet the exact requirements for strength and durability." },
    { step: "3", title: "Fabricate & Weld", description: "Our certified welders execute the work with precision, following strict quality control procedures." },
    { step: "4", title: "Inspect & Deliver", description: "We perform rigorous quality inspections, including NDT where required, before delivery or final sign-off." },
];

const weldingCaseStudy = {
  title: "Case Study: Custom Skid-Mounted System",
  challenge: "A manufacturing client needed to add a complex new pumping and filtration system into a tight space with minimal plant disruption.",
  solution: "We designed and fabricated a custom, skid-mounted modular unit in our shop. The entire system was built and tested off-site, then delivered and tied into the main plant over a single weekend.",
  results: "The project was completed with only 48 hours of plant downtime, fit perfectly into the designated space, and has operated flawlessly since commissioning.",
};

const weldingTestimonial = {
  quote: "The craftsmanship from Core Mechanical is top-tier. The custom stainless steel platform they built for us was not only functional but also a perfect example of quality welding. They are true artisans of their trade.",
  author: "Emily White",
  title: "Production Supervisor, Hoosier Foods Inc.",
};

const ctaFormData = {
  title: "Bring Your Custom Project to Life",
  description: "Have a unique challenge that requires custom metalwork? Discuss your project with our fabrication experts and get a detailed quote.",
  features: [
    { icon: <Shield className="w-4 h-4" />, text: "ASME & AWS Certified" },
    { icon: <CheckCircle className="w-4 h-4" />, text: "Quality Guaranteed" },
  ],
  formButtonText: "Get a Fabrication Quote",
};

export default function WeldingFabricationPage() {
  return (
    <div className="min-h-screen bg-background">
      <EmergencyBanner text="24/7 Emergency Welding & Repair Service Available" />
      <Header />

      <main>
        <ServicePageHero
          icon={<Hammer className="w-16 h-16 text-white" />}
          title="Welding & Custom Fabrication"
          description="Precision welding and expert fabrication services to create the custom components and structural solutions your facility demands."
          callToAction={{ text: "Request Emergency Repair", href: "tel:574-555-0123" }}
          secondaryAction={{ text: "Get a Fabrication Quote", href: "/quote" }}
        />
        <ProblemStatementSection {...problemStatementData} />
        <SystemsGrid
          title="Our Fabrication & Welding Capabilities"
          subtitle="From intricate pipe welding to heavy structural steel, our certified team has the skill and equipment to handle your project."
          systems={weldingSystemsData}
        />
        <ServiceTabs
          title="Shop, Field, and Repair Solutions"
          tabs={serviceTabsData}
        />
        <ProcessTimeline
          title="A Process Forged in Precision"
          subtitle="We follow a meticulous project management process to ensure every custom fabrication project is delivered on time and to exact specifications."
          steps={processStepsData}
        />
        <ProofSection
          title="Craftsmanship You Can Count On"
          caseStudy={weldingCaseStudy}
          testimonial={weldingTestimonial}
        />
        <CtaFormSection {...ctaFormData} />
      </main>

      <Footer />
    </div>
  );
}