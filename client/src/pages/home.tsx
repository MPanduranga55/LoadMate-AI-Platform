import Navbar from "@/components/landing/navbar";
import HeroSection from "@/components/landing/hero-section";
import StatsSection from "@/components/landing/stats-section";
import FeaturesSection from "@/components/landing/features-section";
import HowItWorksSection from "@/components/landing/how-it-works-section";
import BenefitsSection from "@/components/landing/benefits-section";
import TestimonialSection from "@/components/landing/testimonial-section";
import AboutSection from "@/components/landing/about-section";
import CTASection from "@/components/landing/cta-section";
import ContactSection from "@/components/landing/contact-section";
import NewsletterSection from "@/components/landing/newsletter-section";
import FreightMatcherSimulator from "@/components/landing/freight-matcher-simulator";
import TruckDriverSection from "@/components/landing/truck-driver-section";
import Footer from "@/components/landing/footer";
import useScrollAnimation from "@/hooks/use-scroll-animation";

const Home = () => {
  // Hook for scroll animations
  useScrollAnimation();

  return (
    <div className="font-sans text-slate-800 bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TruckDriverSection />
        <FreightMatcherSimulator />
        <BenefitsSection />
        <TestimonialSection />
        <AboutSection />
        <CTASection />
        <ContactSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
