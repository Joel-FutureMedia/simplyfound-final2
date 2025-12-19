import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/#services' },
      { name: 'How It Works', href: '/#how-it-works' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Contact', href: '/#contact' },
    ],
  };

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+264 83 000 1011', href: 'tel:+264830001011' },
    { icon: Mail, label: 'Email', value: 'eric.vanzyl@futuremedia.com.na', href: 'mailto:eric.vanzyl@futuremedia.com.na' },
    { icon: MapPin, label: 'Address', value: 'Future Media offices, Unit 44, Hyper Motor City, Maxwell Street, Windhoek', href: '#' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-max mx-auto section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="SimplyFound"
              className="h-14 w-auto mb-4"
            />
            <p className="text-primary-foreground/80 max-w-md mb-6">
              Your trusted partner in creating stunning, high-performance
              websites that help businesses succeed online. Based in Windhoek,
              Namibia.
            </p>
            <div className="flex gap-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                  aria-label={social}
                >
                  <span className="text-sm font-bold uppercase">
                    {social[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              {contactInfo.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-start gap-2 text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                  >
                    <item.icon className="w-4 h-4 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-primary-foreground/50 mb-0.5">{item.label}</div>
                      <div className="text-sm">{item.value}</div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} SimplyFound. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
