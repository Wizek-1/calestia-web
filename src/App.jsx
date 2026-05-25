import { useState, useEffect } from "react";
import initResponsive from "./utils/responsive";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import ProcessSection from "./components/ProcessSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { Footer } from "./components/Footer";
import LightningPath from "./components/LightningPath";
import ContactModal from "./components/ContactModal";

import PrivacyPolicy from "./pages/InformacjePrawne";
import TermsOfService from "./pages/Zasady";

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    initResponsive();

    // Simple robust hash router
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#/polityka-prywatnosci") {
        setCurrentPage("privacy");
      } else if (hash === "#/regulamin") {
        setCurrentPage("terms");
      } else {
        setCurrentPage("home");
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="relative min-h-screen">
      <LightningPath />
      
      <Navigation onOpenContact={() => setIsContactModalOpen(true)} />
      
      {currentPage === "home" && (
        <main>
          <HeroSection onOpenContact={() => setIsContactModalOpen(true)} />
          <AboutSection />
          <ProcessSection />
          <PortfolioSection />
          <TestimonialsSection />
        </main>
      )}
      
      {currentPage === "privacy" && <PrivacyPolicy />}
      {currentPage === "terms" && <TermsOfService />}
      
      <Footer onOpenContact={() => setIsContactModalOpen(true)} />

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}

export default App;
