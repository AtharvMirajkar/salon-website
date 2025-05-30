import PageTransition from '../components/ui/PageTransition';
import HeroSection from '../components/home/HeroSection';
import ServiceHighlights from '../components/home/ServiceHighlights';
import TestimonialsSection from '../components/home/TestimonialsSection';
import AboutSection from '../components/home/AboutSection';
import CtaSection from '../components/home/CtaSection';
import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Glow & Style - Premium Unisex Salon';
  }, []);

  return (
    <PageTransition>
      <HeroSection />
      <ServiceHighlights />
      <AboutSection />
      <TestimonialsSection />
      <CtaSection />
    </PageTransition>
  );
};

export default HomePage;