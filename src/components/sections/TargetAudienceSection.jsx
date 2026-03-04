import React from 'react';
import { Link } from 'react-router-dom';
import { CheckSquare, MessageCircle, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from '../common';

const TargetAudienceSection = ({
  forItems = [],
  forTitle = "Who It's For",
  alternateItems = [],
  alternateTitle = "Interested but have a different background?",
  requirement = null,
  alternateCTA = null, // { text: "Get in touch", to: "/about" }
}) => {
  return (
    <section className="py-24 bg-black text-[#E6E6E1] px-6 md:px-16">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-0 border-4 border-white/30 rounded-xl overflow-hidden">
        {/* Who It's For */}
        <div className="p-12 md:p-16 bg-black border-b md:border-b-0 md:border-r border-white/30">
          <div className="flex items-center gap-4 mb-8">
            <CheckSquare size={32} className="text-[#E6E6E1]" />
            <h3 className="text-3xl font-bold uppercase">{forTitle}</h3>
          </div>
          <ul className="space-y-6 text-lg font-medium text-[#E6E6E1]/90">
            {forItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          {requirement && (
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-[#E6E6E1]/80 font-medium">
                <strong className="text-[#E6E6E1]">Note:</strong> {requirement}
              </p>
            </div>
          )}
        </div>

        {/* Alternate Section (formerly "Who It's Not For") */}
        <div className="p-12 md:p-16 bg-[#111]">
          <div className="flex items-center gap-4 mb-8">
            <MessageCircle size={32} className="text-[#E6E6E1]/80" />
            <h3 className="text-2xl md:text-3xl font-bold uppercase text-[#E6E6E1]/90">{alternateTitle}</h3>
          </div>
          <ul className="space-y-6 text-lg font-medium text-[#E6E6E1]/80">
            {alternateItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          {alternateCTA && (
            <div className="mt-8 pt-6 border-t border-white/20">
              <MagneticButton
                to={alternateCTA.to}
                href={alternateCTA.href}
                className="bg-[#E6E6E1] text-black px-6 py-3 text-base font-bold"
              >
                {alternateCTA.text} <ArrowUpRight size={16} />
              </MagneticButton>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
