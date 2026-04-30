import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-[#E6E6E1]/60 pt-16 pb-12 px-6 md:px-16">
      <div className="max-w-[1400px] mx-auto">
        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-sm">
          <div>
            <h4 className="font-bold text-[#E6E6E1] uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/the-spark" className="hover:text-[#E6E6E1] transition-colors">The Spark</Link></li>
              <li><Link to="/the-catalyst" className="hover:text-[#E6E6E1] transition-colors">The Catalyst</Link></li>
              <li><Link to="/the-core" className="hover:text-[#E6E6E1] transition-colors">The Core</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#E6E6E1] uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-[#E6E6E1] transition-colors">About Us</Link></li>
              <li><a href="mailto:contact@agenticagency.dev" className="hover:text-[#E6E6E1] transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#E6E6E1] uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/the-catalyst#faq" className="hover:text-[#E6E6E1] transition-colors">FAQ</Link></li>
              <li><Link to="/the-spark" className="hover:text-[#E6E6E1] transition-colors">Onboarding</Link></li>
              <li><Link to="/the-catalyst" className="hover:text-[#E6E6E1] transition-colors">AI Development</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#E6E6E1] uppercase tracking-wider mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="mailto:contact@agenticagency.dev" className="hover:text-[#E6E6E1] transition-colors">contact@agenticagency.dev</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <span className="font-bold text-xl text-[#E6E6E1] tracking-tighter uppercase">AGENTIC AGENCY</span>
            <span className="text-sm font-medium">© 2026 Agentic Agency. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 px-4 py-2 border border-white/20">
            <div className="w-2 h-2 rounded-full bg-[#E6E6E1]"></div>
            <span className="font-mono text-xs tracking-wider uppercase">Accepting engagements for Q2 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
