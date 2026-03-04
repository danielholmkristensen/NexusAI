import React from 'react';

const FAQSection = ({ faqs = [], title = "Frequently Asked Questions" }) => {
  return (
    <section id="faq" className="pt-24 pb-32 bg-[#E6E6E1] px-6 md:px-16 border-t-4 border-black">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-16">{title}</h2>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b-2 border-black/20 pb-6">
              <h4 className="text-xl font-bold mb-3">{faq.q}</h4>
              <p className="text-black/80 font-medium leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
