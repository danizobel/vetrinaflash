import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import ClientsSection from "@/components/ClientsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import LeadFormProvider from "@/components/LeadFormProvider";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <LeadFormProvider>
      <main className="relative bg-ink min-h-screen grain">
        <Navbar />
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <FeaturesSection />
        <ClientsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
        <Footer />
        <StickyCTA />
      </main>
    </LeadFormProvider>
  );
}
