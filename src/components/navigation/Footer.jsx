import React from 'react';
import { Link } from 'react-router-dom';
import { WaitlistForm } from '../common';

const Footer = () => {
  return (
    <footer className="bg-black text-[#E6E6E1]/60 pt-24 pb-12 px-6 md:px-16 rounded-t-[4rem]">
      <div className="max-w-[1400px] mx-auto text-center mb-24">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 text-[#E6E6E1]">
          Ready to move beyond vibe coding?
        </h2>
        <p className="text-xl font-medium mb-8 max-w-2xl mx-auto">
          Scheduled The Spark sessions are filling up. Join the waitlist to secure your spot.
        </p>

        {/* Waitlist Form */}
        <div className="max-w-xl mx-auto mb-8">
          <WaitlistForm variant="dark" />
        </div>

        <Link
          to="/about"
          className="font-bold text-[#E6E6E1]/70 hover:text-[#E6E6E1] hover:underline underline-offset-4 transition-colors"
        >
          Questions? Talk to us →
        </Link>
      </div>

      <div className="max-w-[1400px] mx-auto">
        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-sm">
          <div>
            <h4 className="font-bold text-[#E6E6E1] uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-2">
              <li><Link to="/the-spark" className="hover:text-[#E6E6E1] transition-colors">The Spark</Link></li>
              <li><Link to="/the-catalyst" className="hover:text-[#E6E6E1] transition-colors">The Catalyst</Link></li>
              <li><Link to="/the-scale-engine" className="hover:text-[#E6E6E1] transition-colors">The Scale Engine</Link></li>
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
              <li><Link to="/the-spark#faq" className="hover:text-[#E6E6E1] transition-colors">FAQ</Link></li>
              <li><Link to="/the-spark" className="hover:text-[#E6E6E1] transition-colors">Workshop Overview</Link></li>
              <li><Link to="/the-catalyst" className="hover:text-[#E6E6E1] transition-colors">Transformation Programs</Link></li>
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
          <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-xl border border-white/20">
            <div className="w-2 h-2 rounded-full bg-[#E6E6E1]"></div>
            <span className="font-mono text-xs tracking-wider uppercase">Accepting bookings for Q2 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
