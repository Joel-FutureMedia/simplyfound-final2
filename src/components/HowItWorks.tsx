import { useEffect, useRef } from 'react';
import { FileText, Image, Sparkles, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    number: '01',
    title: 'Fill Out the Form',
    description:
      'Start by completing our simple project brief form. Tell us about your business, your goals, and your vision for your website.',
    color: 'bg-accent',
  },
  {
    icon: Image,
    number: '02',
    title: 'Submit Your Assets',
    description:
      'Send us your logo, images, and brand materials. You\'ll receive an email confirmation once we process your submission.',
    color: 'bg-primary',
  },
  {
    icon: Sparkles,
    number: '03',
    title: 'Receive Your Draft',
    description:
      'Our expert team will process your request and deliver your website draft or prototype directly to your email for review.',
    color: 'bg-accent',
  },
];

const HowItWorks = () => {
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
      id="how-it-works"
      ref={sectionRef}
      className="section-padding bg-secondary/30"
    >
      <div className="container-max mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Getting your professional website is easy. Follow these three simple
            steps to launch your online presence.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-4 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="reveal relative"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-card card-hover relative overflow-hidden group">
                  {/* Step Number Background */}
                  <div className="absolute -top-4 -right-4 text-9xl font-heading font-bold text-secondary/80 group-hover:text-accent/10 transition-colors duration-500">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className={`relative w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-accent font-bold text-sm">
                        STEP {step.number}
                      </span>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                {/* Arrow pointing to next card - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20 items-center">
                    {/* Connecting line */}
                    <div className="w-8 h-0.5 bg-gradient-to-r from-accent to-primary"></div>
                    {/* Arrow circle */}
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-lg border-2 border-white animate-pulse">
                      <ArrowRight className="w-6 h-6 text-accent-foreground animate-bounce-x" />
                    </div>
                  </div>
                )}

                {/* Arrow pointing to next card - Mobile/Tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex flex-col items-center my-6">
                    {/* Connecting line */}
                    <div className="w-0.5 h-8 bg-gradient-to-b from-accent to-primary"></div>
                    {/* Arrow circle */}
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-lg border-2 border-white animate-pulse">
                      <ArrowRight className="w-6 h-6 text-accent-foreground rotate-90 animate-bounce-y" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 reveal">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to get started? It only takes a few minutes!
          </p>
          <a
            href="https://forms.simplyfound.com.na"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 hover:-translate-y-1 transition-all duration-300"
          >
            Be Simply Found
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
