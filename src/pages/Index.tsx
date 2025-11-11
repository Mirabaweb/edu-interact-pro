import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import BenefitsSection from "@/components/BenefitsSection";
import BlogSection from "@/components/BlogSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WelcomeModal from "@/components/WelcomeModal";

const Index = () => {
  useEffect(() => {
    document.title = "Interaktywne Pracownie - Monitory Interaktywne dla Szkół";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Profesjonalne monitory interaktywne dla szkół i przedszkoli. Monitor interaktywny 65 i 85 cali z montażem i szkoleniem. Kompleksowa obsługa dla placówek edukacyjnych."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <WelcomeModal />
      <Header />
      <main>
        <Hero />
        <WhyUsSection />
        <ProductSection />
        <BlogSection />
        <BenefitsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
