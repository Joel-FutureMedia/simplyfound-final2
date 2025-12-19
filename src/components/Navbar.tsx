import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'How It Works', path: '/#how-it-works' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // If path includes a hash (section link)
    if (path.includes('#')) {
      const hash = path.split('#')[1];
      
      // If we're not on the home page, navigate to home with hash
      if (location.pathname !== '/') {
        navigate(`/#${hash}`);
      } else {
        // We're already on home page, navigate to hash and scroll
        navigate(`/#${hash}`, { replace: true });
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 50);
      }
    } else {
      // Regular page navigation
      navigate(path);
      if (path === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/95 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div
              className={cn(
                "transition-all duration-300 rounded-lg flex items-center justify-center",
                scrolled ? "px-3 py-2 bg-[#323e4a]" : ""
              )}
            >
              <img
                src={logo}
                alt="SimplyFound"
                className={cn(
                  "w-auto transition-all duration-300 hover:scale-105",
                  scrolled ? "h-10 md:h-12" : "h-12 md:h-16 lg:h-20"
                )}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={cn(
                  'text-sm font-medium transition-colors duration-300 relative',
                  'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full',
                  location.pathname === link.path
                    ? 'text-accent'
                    : scrolled
                    ? 'text-muted-foreground hover:text-foreground'
                    : 'text-white hover:text-accent'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button
              variant="accent"
              size="sm"
              onClick={() => window.open('https://forms.simplyfound.com.na', '_blank')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden p-2 transition-colors",
              scrolled ? "text-foreground" : "text-white"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300',
            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          )}
        >
          <div className={cn(
            "flex flex-col gap-4 pb-4 rounded-lg p-4",
            scrolled ? "bg-transparent" : "bg-primary/80 backdrop-blur-md"
          )}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={cn(
                  'text-base font-medium py-2 transition-colors duration-300',
                  location.pathname === link.path
                    ? 'text-accent'
                    : scrolled
                    ? 'text-foreground hover:text-accent'
                    : 'text-white hover:text-accent'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button
              variant="accent"
              onClick={() => {
                setIsOpen(false);
                window.open('https://forms.simplyfound.com.na', '_blank');
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
