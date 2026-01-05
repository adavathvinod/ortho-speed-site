import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Specialist", path: "/specialist" },
    { name: "Clinical Specialities", path: "/specialities" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container-hospital flex flex-wrap justify-between items-center text-sm gap-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>24/7 Emergency Services</span>
            </div>
            <a 
              href="mailto:mehetrey.hospital@gmail.com" 
              className="hidden sm:flex items-center gap-2 hover:text-hospital-sky transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>mehetrey.hospital@gmail.com</span>
            </a>
          </div>
          <a 
            href="tel:+919110709110" 
            className="flex items-center gap-2 font-semibold hover:text-hospital-sky transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>+91 91107 09110</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container-hospital py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-primary leading-tight">MEHETREY HOSPITAL</h1>
              <p className="text-xs text-muted-foreground">Orthopaedic & Trauma Center</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors hover:text-primary ${
                  isActive(link.path) 
                    ? "text-primary border-b-2 border-primary pb-1" 
                    : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact">
              <Button variant="outline" className="font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Book Consultation
              </Button>
            </Link>
            <a href="tel:+919110709110">
              <Button className="btn-emergency flex items-center gap-2">
                <Phone className="h-4 w-4" />
                24 HR EMERGENCY
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium py-2 transition-colors ${
                    isActive(link.path) ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full font-semibold border-primary text-primary">
                    Book Consultation
                  </Button>
                </Link>
                <a href="tel:+919110709110">
                  <Button className="w-full btn-emergency flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    24 HR EMERGENCY
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
