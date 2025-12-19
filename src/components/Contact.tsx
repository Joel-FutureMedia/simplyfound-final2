import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import teamImage from '@/assets/team-work.jpg';
import { cn } from '@/lib/utils';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+264 83 000 1011',
    href: 'tel:+264830001011',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'eric.vanzyl@futuremedia.com.na',
    href: 'mailto:eric.vanzyl@futuremedia.com.na',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Future Media offices, Unit 44, Hyper Motor City, Maxwell Street, Windhoek',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon – Fri, 8am – 5pm',
    href: '#',
  },
];

const Contact = () => {
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
      id="contact"
      ref={sectionRef}
      className="section-padding bg-background"
    >
      <div className="container-max mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="reveal">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={teamImage}
                alt="Our team collaborating"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
            </div>
          </div>

          {/* Right - Contact Info */}
          <div className="reveal">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Contact Us
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Ready to start your project? Get in touch with our team. We're here
              to help bring your vision to life.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300 flex-shrink-0">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm text-muted-foreground mb-1">
                      {item.label}
                    </div>
                    <div className={cn(
                      "font-semibold text-foreground break-words",
                      item.label === 'Email' ? "text-xs" : "text-sm"
                    )}>
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-primary text-primary-foreground">
              <h3 className="font-heading font-bold text-xl mb-2">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-primary-foreground/80 mb-4">
                Fill out our project brief form and we'll get back to you within
                24 hours.
              </p>
              <a
                href="https://forms.simplyfound.com.na"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
