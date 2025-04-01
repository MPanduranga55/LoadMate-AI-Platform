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
import Footer from "@/components/landing/footer";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // Scroll animation logic
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-5");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="font-sans text-slate-800 bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <HowItWorksSection />
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
