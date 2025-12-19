import { useEffect, useRef } from 'react';
import {
  Globe,
  Smartphone,
  Settings,
} from 'lucide-react';
import servicesImage from '@/assets/services-design.jpg';

const services = [
  {
    icon: Globe,
    title: 'A credible online presence',
    description:
      'We create clean, professional websites that give customers confidence in your business from the first click.',
    features: ['Clean', 'Responsive', 'Fast Loading'],
  },
  {
    icon: Smartphone,
    title: 'Easy to Find & Contact',
    description:
      'Your website makes it simple for customers to find you, call you, message you, or share your details.',
    features: ['Optimised for Mobile', 'Calls to Action'],
  },
  {
    icon: Settings,
    title: 'Simple, Fast & Flexible',
    description:
      'A guided process designed to get you online quickly — with no lock-in and no technical hassle.',
    features: ['Update your details anytime', 'Nothing is permanent'],
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

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
    <section
      id="services"
      ref={sectionRef}
      className="section-padding bg-background"
    >
      <div className="container-max mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We build clean, reliable websites that make it easy for customers to find and trust you
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="reveal card-hover bg-card rounded-2xl p-6 lg:p-8 border border-border/50 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Feature Image */}
        <div className="reveal grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Crafted with Excellence
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team of experienced designers and developers combines
              creativity with technical expertise to deliver websites that not
              only look stunning but also perform exceptionally.
            </p>
            <ul className="space-y-3">
              {[
                'Modern, responsive designs',
                'SEO-optimized from the start',
                'Fast loading and secure',
                'Easy to manage content',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={servicesImage}
                alt="Web development workspace"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
