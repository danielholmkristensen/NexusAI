import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-[#E6E6E1]/60 pt-16 pb-12 px-6 md:px-16">
      <div className="max-w-[1400px] mx-auto">
        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-sm">
          <div>
            <h4 className="font-bold text-[#E6E6E1] uppercase tracking-wider mb-4">Agentic OS</h4>
            <ul className="space-y-2">
              <li><Link to="/discover" className="hover:text-[#E6E6E1] transition-colors">Discover</Link></li>
              <li><Link to="/build" className="hover:text-[#E6E6E1] transition-colors">Build</Link></li>
              <li><Link to="/operate" className="hover:text-[#E6E6E1] transition-colors">Operate</Link></li>
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
              <li><Link to="/build#faq" className="hover:text-[#E6E6E1] transition-colors">FAQ</Link></li>
              <li><Link to="/discover" className="hover:text-[#E6E6E1] transition-colors">Agentic Studio</Link></li>
              <li><Link to="/operate" className="hover:text-[#E6E6E1] transition-colors">Command Center</Link></li>
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
          <div className="flex items-center gap-6">
            <span className="font-bold text-xl text-[#E6E6E1] tracking-tighter uppercase">AGENTIC AGENCY</span>
            <span className="text-sm font-medium">© 2026 Agentic Agency. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
