import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MagneticButton } from '../common';

const FloatingNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/the-spark', label: 'The Spark' },
    { to: '/the-catalyst', label: 'The Catalyst' },
    { to: '/the-scale-engine', label: 'The Scale Engine' },
    { to: '/about', label: 'About' },
  ];

  const isActive = (path) => location.pathname === path;

  // Contextual CTA based on current page
  const getCTA = () => {
    switch (location.pathname) {
      case '/the-catalyst':
        return { label: 'Book a discovery call', href: 'mailto:catalyst@agenticagency.dev?subject=Catalyst%20Program%20Inquiry' };
      case '/the-scale-engine':
        return { label: 'Schedule a conversation', href: 'mailto:scaleengine@agenticagency.dev?subject=Scale%20Engine%20Inquiry' };
      case '/about':
        return { label: 'Get in touch', href: 'mailto:about@agenticagency.dev?subject=Let\'s%20Talk' };
      default:
        return { label: 'Book a workshop', href: 'mailto:spark@agenticagency.dev?subject=Spark%20Workshop%20Inquiry' };
    }
  };

  const cta = getCTA();

  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 hover:-translate-y-px transition-transform duration-300">
      <nav className={`transition-all duration-500 rounded-full px-6 py-3 flex items-center gap-8 ${scrolled ? 'bg-[#E6E6E1]/90 backdrop-blur-xl border border-black/10 shadow-lg' : 'bg-transparent'}`}>
        <Link to="/" className="font-bold tracking-tighter text-xl uppercase hover:opacity-80 transition-opacity">
          AGENTIC AGENCY
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-6 text-sm font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`hover:opacity-60 transition-opacity ${isActive(link.to) ? 'opacity-100 border-b-2 border-black' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <MagneticButton
          href={cta.href}
          className="hidden md:flex bg-black text-[#E6E6E1] px-5 py-2.5 text-xs font-bold uppercase tracking-wide"
        >
          {cta.label}
        </MagneticButton>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-black transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-black transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-black transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed top-24 left-4 right-4 bg-[#E6E6E1] border border-black/10 rounded-2xl shadow-2xl p-6 z-50">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-lg font-semibold py-2 px-4 rounded-lg hover:bg-black/5 transition-colors ${isActive(link.to) ? 'bg-black text-[#E6E6E1]' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <MagneticButton
              href={cta.href}
              className="bg-black text-[#E6E6E1] px-6 py-3 text-sm font-bold uppercase tracking-wide mt-4"
            >
              {cta.label}
            </MagneticButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingNav;
