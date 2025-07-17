import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import WhyWorkWithMeSection from "@/components/WhyWorkWithMeSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import ScaleTogetherSection from "@/components/ScaleTogetherSection";
import CallToActionSection from "@/components/CallToActionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";

const Index = () => {
  return (
    <motion.div 
      className="min-h-screen bg-background font-body"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Floating Navigation */}
      <FloatingNav />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <section id="hero">
          <HeroSection />
        </section>

        {/* About Section */}
        <section id="about">
          <AboutSection />
        </section>

        {/* Stats Section */}
        <section id="stats">
          <StatsSection />
        </section>

        {/* Why Work With Me Section */}
        <section id="why-work-with-me">
          <WhyWorkWithMeSection />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <ProjectsSection />
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Blog Section */}
        <section id="blog">
          <BlogSection />
        </section>

        {/* Lead Magnet Section */}
        <LeadMagnetSection />

        {/* Scale Together Section */}
        <ScaleTogetherSection />

        {/* Call to Action Section */}
        <CallToActionSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

export default Index;
