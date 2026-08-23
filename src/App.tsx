import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import PageLoader from './components/PageLoader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import IntroSection from './components/IntroSection';
import ProjectsSection from './components/ProjectsSection';
import CreativeEngine from './components/CreativeEngine';
import DesignAiSection from './components/DesignAiSection';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import ExpertiseSection from './components/ExpertiseSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 60;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Page Loader Initial Splash */}
      {isLoading && <PageLoader onComplete={() => setIsLoading(false)} />}

      <div className="min-h-screen bg-[#FAFAF7] text-[#111111] selection:bg-[#B6FF00] selection:text-[#111111] relative antialiased">
        {/* Interactive Custom Cursor for Desktop */}
        <CustomCursor />

        {/* Floating Capsule Navbar */}
        <Navbar onNavigate={handleNavigate} />

        {/* Main Content Sections */}
        <main>
          {/* 00 — Hero Section */}
          <Hero onNavigate={handleNavigate} />

          {/* Infinite Marquee Banner */}
          <Marquee />

          {/* 01 — WHO I AM & Statistics */}
          <IntroSection onNavigate={handleNavigate} />

          {/* 02 — Selected Works */}
          <ProjectsSection />

          {/* 03 — Interactive Creative Engine Workflow Network */}
          <CreativeEngine />

          {/* 04 — Design × AI Manifesto */}
          <DesignAiSection />

          {/* 05 — Before / After Precision Comparison */}
          <BeforeAfterSlider />

          {/* 06 — Tools & Software Stack */}
          <ExpertiseSection />

          {/* 07 — Services & Creative Solutions */}
          <ServicesSection onNavigate={handleNavigate} />

          {/* 08 — Process & Workflow */}
          <ProcessSection />

          {/* 09 — About Daniel & Mantra */}
          <AboutSection onNavigate={handleNavigate} />

          {/* 10 — Testimonials */}
          <TestimonialsSection />

          {/* 11 — Frequently Asked Questions */}
          <FaqSection />

          {/* 12 — Contact & Brief Initiation */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer onNavigate={handleNavigate} />

        {/* Floating AI Assistant Widget */}
        <AIAssistant onNavigate={handleNavigate} />
      </div>
    </>
  );
}
