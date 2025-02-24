
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a 
            href="/" 
            className="text-2xl font-semibold text-primary hover:opacity-80 transition-opacity"
            aria-label="Homepage"
          >
            Logo
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="nav-link" aria-label="View features">Features</a>
            <a href="#about" className="nav-link" aria-label="About us">About</a>
            <a href="#contact" className="nav-link" aria-label="Contact us">Contact</a>
            <button 
              className="button-primary hover:scale-[1.02] active:scale-[0.98] transition-transform"
              aria-label="Get started with our platform"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={handleMenuToggle}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-t animate-fade-in"
            role="menu"
          >
            <div className="flex flex-col space-y-4 px-6 py-8">
              <a 
                href="#features" 
                className="nav-link text-lg" 
                onClick={handleLinkClick}
                role="menuitem"
              >
                Features
              </a>
              <a 
                href="#about" 
                className="nav-link text-lg" 
                onClick={handleLinkClick}
                role="menuitem"
              >
                About
              </a>
              <a 
                href="#contact" 
                className="nav-link text-lg" 
                onClick={handleLinkClick}
                role="menuitem"
              >
                Contact
              </a>
              <button 
                className="button-primary w-full hover:scale-[1.02] active:scale-[0.98] transition-transform"
                onClick={handleLinkClick}
                role="menuitem"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
