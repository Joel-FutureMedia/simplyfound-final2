import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingCard from '@/components/PricingCard';
import ConsultationForm from '@/components/ConsultationForm';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    price: 'N$3,700',
    description: 'Perfect for small businesses and startups',
    features: [
      'Up to 5 pages',
      'Responsive design',
      'Contact form integration',
      'Social media links',
      'Basic SEO optimization',
      'Domain name registration (.com.na and other domains priced separately)',
      'Hosting',
      '1 email address',
      'Consultation session',
      'Mobile-friendly',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: 'N$6,799',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 8 pages',
      'Advanced responsive design',
      'Contact & custom forms',
      'Newsletter integration',
      'Advanced SEO optimization',
      'Blog/News section',
      'Analytics integration',
      'Content management system',
      'Hosting and domain name registration',
      'Consultation session',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'N$12,799',
    description: 'For large businesses with complex needs',
    features: [
      'Unlimited pages',
      'Custom design & features',
      'E-commerce capabilities',
      'User authentication',
      'Advanced integrations',
      'Database management',
      'Priority support',
      'Performance optimization',
      'Hosting and domain name registration',
      'Custom CMS',
    ],
    highlighted: false,
  },
];

const benefits = [
  'No hidden fees or charges',
  'Free consultation before starting',
  'Revision rounds included',
  'Source files delivered',
];

const Pricing = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = sectionRef.current?.querySelectorAll('.reveal');
    revealElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Pricing - SimplyFound Web Development Namibia</title>
        <meta
          name="description"
          content="Affordable web development packages in Namibia. Choose from Starter, Professional, or Enterprise plans to get your business online."
        />
      </Helmet>

      <Navbar />

      <main ref={sectionRef}>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary to-primary/90 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 50%, hsl(180, 70%, 40%) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(180, 70%, 40%) 0%, transparent 50%)',
              }}
            />
          </div>

          <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-up">
                <span className="text-sm font-medium text-accent">
                  Transparent Pricing
                </span>
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-up animation-delay-100">
                Simple, Affordable{' '}
                <span className="text-accent">Pricing</span>
              </h1>

              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 animate-fade-up animation-delay-200">
                Choose the perfect plan for you. We aim to offer competitive pricing and superior speed of delivery
              </p>

              <div className="flex flex-wrap justify-center gap-4 animate-fade-up animation-delay-300">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-primary-foreground/90"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 lg:gap-4 max-w-6xl mx-auto items-start">
              {pricingPlans.map((plan, index) => (
                <PricingCard
                  key={plan.name}
                  {...plan}
                  delay={index * 150}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Not Sure Which Plan to Choose?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss your project requirements. Our team will help you
                find the perfect solution for your business needs.
              </p>
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 hover:-translate-y-1 transition-all duration-300"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ConsultationForm open={isConsultationOpen} onOpenChange={setIsConsultationOpen} />
    </>
  );
};

export default Pricing;
