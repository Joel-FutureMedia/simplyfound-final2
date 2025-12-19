import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation when page loads or hash changes
    if (location.hash) {
      const id = location.hash.substring(1); // Remove the #
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <>
      <Helmet>
        <title>SimplyFound - Professional Web Development in Namibia</title>
        <meta
          name="description"
          content="SimplyFound creates stunning, high-performance websites for businesses in Namibia. Custom web design, e-commerce, and digital marketing solutions."
        />
      </Helmet>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
