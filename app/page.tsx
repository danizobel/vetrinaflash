import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ChatDemoSection from "@/components/ChatDemoSection";
import FeaturesSection from "@/components/FeaturesSection";
import ComparisonSection from "@/components/ComparisonSection";
import ROICalculator from "@/components/ROICalculator";
import ClientsSection from "@/components/ClientsSection";
import CustomSolutionsSection from "@/components/CustomSolutionsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="relative bg-[#050607] min-h-screen">
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <ProblemSection />
      <SectionDivider />
      <HowItWorksSection />
      <SectionDivider />
      <ChatDemoSection />
      <SectionDivider />
      <FeaturesSection />
      <SectionDivider />
      <ComparisonSection />
      <SectionDivider />
      <ROICalculator />
      <SectionDivider />
      <ClientsSection />
      <SectionDivider />
      <CustomSolutionsSection />
      <SectionDivider />
      <PricingSection />
      <SectionDivider />
      <FAQSection />
      <SectionDivider />
      <FinalCTASection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
