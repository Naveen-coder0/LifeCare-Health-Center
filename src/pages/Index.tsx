import Navbar from "@/components/clinic/Navbar";
import HeroSection from "@/components/clinic/HeroSection";
import AboutSection from "@/components/clinic/AboutSection";
import ServicesSection from "@/components/clinic/ServicesSection";
import DoctorsSection from "@/components/clinic/DoctorsSection";
import AppointmentSection from "@/components/clinic/AppointmentSection";
import TestimonialsSection from "@/components/clinic/TestimonialsSection";
import PricingSection from "@/components/clinic/PricingSection";
import GallerySection from "@/components/clinic/GallerySection";
import FAQSection from "@/components/clinic/FAQSection";
import BlogSection from "@/components/clinic/BlogSection";
import ContactSection from "@/components/clinic/ContactSection";
import EmergencyBanner from "@/components/clinic/EmergencyBanner";
import Footer from "@/components/clinic/Footer";
import FloatingWhatsApp from "@/components/clinic/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DoctorsSection />
        <EmergencyBanner />
        <AppointmentSection />
        <TestimonialsSection />
        <PricingSection />
        <GallerySection />
        <BlogSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
