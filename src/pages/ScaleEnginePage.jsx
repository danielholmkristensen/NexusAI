import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Repeat, Building2, TrendingUp, Calendar, Users, FileText, MessageSquare, Check, X, ClipboardCheck } from 'lucide-react';
import { MagneticButton } from '../components/common';
import { ProductLadderSection, FAQSection } from '../components/sections';
import { PageMeta, ScaleEngineServiceSchema, FAQSchema, BreadcrumbSchema } from '../components/seo';

gsap.registerPlugin(ScrollTrigger);

const ScaleEnginePage = () => {
  const pageRef = useRef(null);

  const scaleFAQs = [
    { q: "Do we need a successful Catalyst first?", a: "Yes. Scale Engine builds on proof. Without demonstrated success, scaling is premature." },
    { q: "How is pricing determined?", a: "We scope engagements based on your organization's size, number of teams, and rollout timeline. Contact us for a discovery conversation." },
    { q: "What if we want hands-on help for additional teams?", a: "That's a Catalyst engagement. Scale Engine is advisory; Catalyst is embedded. You can run both." },
    { q: "How long do most clients stay?", a: "Initial commitment is 6 months. Most clients extend to 12+ months as they scale to more teams." },
    { q: "What's included in advisory?", a: "Regular strategic sessions, champion coaching, async support, and access to our evolving methodology and tools." },
    { q: "Can we start without completing the full journey?", a: "Scale Engine requires demonstrated success from a Catalyst engagement. This ensures we're scaling something that works, not just spreading hope." }
  ];

  const pillars = [
    {
      icon: Repeat,
      name: "Replication",
      subtitle: "Multiply capability horizontally",
      description: "Roll out agentic workflows to additional teams. Internal champions (Spark alumni, Catalyst team members) lead rollout. We serve as advisor, not doer.",
      items: ["Champion-led rollout", "Scalable playbooks", "Cross-team knowledge transfer"]
    },
    {
      icon: Building2,
      name: "Institutionalization",
      subtitle: "Build internal structures",
      description: "Build the organizational structures that sustain the practice beyond any individual or external support.",
      items: ["Center of Excellence design", "Internal coaching program", "Tooling standardization", "Governance frameworks"]
    },
    {
      icon: TrendingUp,
      name: "Evolution",
      subtitle: "Stay at the frontier",
      description: "Keep your organization at the leading edge as agentic engineering continues to evolve rapidly.",
      items: ["Methodology updates", "Quarterly briefings", "Early access to new frameworks"]
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo('.hero-anim',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.08, ease: 'power3.out', delay: 0.2 }
      );

      // Pillar cards animation
      gsap.fromTo('.pillar-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#pillars-section',
            start: 'top 70%'
          }
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <PageMeta
        title="The Scale Engine — Advisory Retainer for Agentic Engineering"
        description="Advisory retainer to scale agentic engineering org-wide. Build internal capability with expert guidance."
        path="/the-scale-engine"
      />
      <ScaleEngineServiceSchema />
      <FAQSchema faqs={scaleFAQs} />
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'The Scale Engine', path: '/the-scale-engine' }
      ]} />

      {/* A. HERO SECTION */}
      <section className="relative h-[100dvh] w-full flex items-end pb-24 px-6 md:px-16 overflow-hidden bg-[#E6E6E1]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000"
            alt="Network Constellation"
            className="w-full h-full object-cover opacity-25 mix-blend-multiply grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#E6E6E1] via-[#E6E6E1]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl">
          <div className="hero-anim font-mono text-sm uppercase tracking-widest text-black/60 mb-4">Advisory Retainer</div>
          <h1 className="hero-anim text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tighter mb-4 text-black">
            THE SCALE ENGINE
          </h1>
          <p className="hero-anim text-xl md:text-2xl text-black/80 max-w-3xl mb-12 font-medium leading-snug">
            One team proved it works. Now build it into an internal capability of staying at the frontier.
          </p>
          <div className="hero-anim flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <MagneticButton className="bg-black text-[#E6E6E1] px-8 py-5 text-lg font-bold flex items-center gap-2 hover:bg-black/90">
              Schedule a discovery conversation <ArrowUpRight size={20} />
            </MagneticButton>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-black/60 border-l-2 border-black/20 pl-4 py-1">
              Prerequisite: The Catalyst<br/>Custom scoped
            </span>
          </div>
        </div>
      </section>

      {/* B. THE THREE PILLARS */}
      <section id="pillars-section" className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1] rounded-xl mx-4 my-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">The Three Pillars</h2>
            <p className="text-xl text-[#E6E6E1]/80 font-medium max-w-2xl mx-auto">
              Scale isn't about doing more of the same. It's about building organizational capability.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.name}
                className="pillar-card bg-[#111] rounded-xl p-8 border-4 border-white/30 hover:border-white/50 transition-colors"
              >
                <pillar.icon size={40} className="mb-6 text-[#E6E6E1]" />
                <div className="font-mono text-xs uppercase tracking-wider text-[#E6E6E1]/70 mb-2">{pillar.subtitle}</div>
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4">{pillar.name}</h3>
                <p className="text-[#E6E6E1]/80 font-medium mb-6">{pillar.description}</p>
                <ul className="space-y-2">
                  {pillar.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm font-medium text-[#E6E6E1]/75">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E6E6E1]/60"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* C. ENGAGEMENT FORMAT */}
      <section className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-16">Engagement Format</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-8 border-4 border-black">
              <Calendar size={32} className="mb-4" />
              <h3 className="font-bold text-xl uppercase tracking-tight mb-2">Strategic Advisory</h3>
              <p className="text-black/70 font-medium text-sm mb-4">2 days/month</p>
              <p className="text-black/80 font-medium">On-site or virtual strategic sessions with leadership.</p>
            </div>
            <div className="bg-white rounded-xl p-8 border-4 border-black">
              <Users size={32} className="mb-4" />
              <h3 className="font-bold text-xl uppercase tracking-tight mb-2">Champion Coaching</h3>
              <p className="text-black/70 font-medium text-sm mb-4">2x/month</p>
              <p className="text-black/80 font-medium">90-minute sessions with internal champions leading rollout.</p>
            </div>
            <div className="bg-white rounded-xl p-8 border-4 border-black">
              <FileText size={32} className="mb-4" />
              <h3 className="font-bold text-xl uppercase tracking-tight mb-2">Quarterly Briefing</h3>
              <p className="text-black/70 font-medium text-sm mb-4">1x/quarter</p>
              <p className="text-black/80 font-medium">2-hour executive session on state of agentic engineering.</p>
            </div>
            <div className="bg-white rounded-xl p-8 border-4 border-black">
              <MessageSquare size={32} className="mb-4" />
              <h3 className="font-bold text-xl uppercase tracking-tight mb-2">Async Advisory</h3>
              <p className="text-black/70 font-medium text-sm mb-4">Continuous</p>
              <p className="text-black/80 font-medium">Next-business-day response on strategic questions.</p>
            </div>
          </div>

          <div className="mt-12 bg-black text-[#E6E6E1] rounded-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-shrink-0">
                <TrendingUp size={48} className="text-[#E6E6E1]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">Methodology Updates</h3>
                <p className="text-[#E6E6E1]/85 font-medium">
                  Ongoing access to our evolving methodology, playbooks, templates, and tools. As agentic engineering advances, so does your organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* D. WHY NOT JUST RUN MORE CATALYSTS */}
      <section className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">Why Not Just Run More Catalysts?</h2>
          <p className="text-xl text-[#E6E6E1]/80 font-medium mb-16 max-w-3xl">
            Scale Engine is fundamentally different from running multiple Catalyst engagements. Here's why:
          </p>

          <div className="grid md:grid-cols-2 gap-0 border-4 border-white/30 rounded-xl overflow-hidden">
            {/* Multiple Catalysts */}
            <div className="p-8 md:p-12 bg-[#111] border-b md:border-b-0 md:border-r border-white/30">
              <div className="flex items-center gap-3 mb-8">
                <X size={32} className="text-[#E6E6E1]/60" />
                <h3 className="text-2xl font-bold uppercase text-[#E6E6E1]/70">Multiple Catalysts</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "We deliver (hands-on)",
                  "High dependency on us",
                  "Linear scale (1 team at a time)",
                  "We're embedded practitioners",
                  "Build capability per team"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#E6E6E1]/70 font-medium">
                    <div className="w-2 h-2 rounded-full bg-[#E6E6E1]/50 mt-2 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Scale Engine */}
            <div className="p-8 md:p-12 bg-black">
              <div className="flex items-center gap-3 mb-8">
                <Check size={32} className="text-[#E6E6E1]" />
                <h3 className="text-2xl font-bold uppercase">The Scale Engine</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Your champions deliver",
                  "Decreasing dependency",
                  "Exponential (champions multiply)",
                  "We're strategic architects + advisors",
                  "Build organizational capability"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#E6E6E1]/90 font-medium">
                    <div className="w-2 h-2 rounded-full bg-[#E6E6E1] mt-2 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* E. WHO IT'S FOR + ASSESSMENT OFFER */}
      <section className="py-24 bg-black text-[#E6E6E1] px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-0 border-4 border-white/30 rounded-xl overflow-hidden">
          {/* Who It's For */}
          <div className="p-12 md:p-16 bg-black border-b md:border-b-0 md:border-r border-white/30">
            <div className="flex items-center gap-4 mb-8">
              <Check size={32} className="text-[#E6E6E1]" />
              <h3 className="text-3xl font-bold uppercase">Who It's For</h3>
            </div>
            <ul className="space-y-6 text-lg font-medium text-[#E6E6E1]/90">
              <li>Organizations with successful Catalyst engagement wanting to scale.</li>
              <li>CTOs/VP Engineering with budget authority for multi-team transformation.</li>
              <li>Companies ready to build internal Centers of Excellence.</li>
            </ul>
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-[#E6E6E1]/80 font-medium">
                <strong className="text-[#E6E6E1]">Prerequisite:</strong> Completed Catalyst with documented success metrics.
              </p>
            </div>
          </div>

          {/* Assessment Offer */}
          <div className="p-12 md:p-16 bg-[#111]">
            <div className="flex items-center gap-4 mb-8">
              <ClipboardCheck size={32} className="text-[#E6E6E1]" />
              <h3 className="text-2xl md:text-3xl font-bold uppercase text-[#E6E6E1]">Not sure how mature your practice is?</h3>
            </div>
            <p className="text-lg font-medium text-[#E6E6E1]/85 mb-6">
              We offer a complimentary <strong>Adoption Assessment</strong> to help you understand where you stand:
            </p>
            <ul className="space-y-4 text-[#E6E6E1]/80 font-medium mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#E6E6E1]/60 mt-2 flex-shrink-0"></div>
                Current AI tooling and usage patterns across your org
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#E6E6E1]/60 mt-2 flex-shrink-0"></div>
                Readiness indicators for scaling agentic engineering
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#E6E6E1]/60 mt-2 flex-shrink-0"></div>
                Recommended path forward based on your situation
              </li>
            </ul>
            <p className="text-sm text-[#E6E6E1]/70 mb-6 italic">An investment by us in understanding your needs.</p>
            <MagneticButton
              className="bg-[#E6E6E1] text-black px-6 py-3 text-base font-bold"
            >
              Get assessed <ArrowUpRight size={16} />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* F. CTA */}
      <section className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-xl p-12 md:p-16 border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">Ready to scale?</h2>
            <p className="text-xl text-black/80 font-medium mb-8">
              The Scale Engine is a strategic advisory partnership.<br/>
              Pricing is scoped to your organization's size, rollout ambitions, and timeline.
            </p>
            <MagneticButton className="bg-black text-[#E6E6E1] px-10 py-5 text-xl font-bold mx-auto">
              Schedule a discovery conversation <ArrowUpRight size={22} />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* G. FAQ */}
      <FAQSection faqs={scaleFAQs} />

      {/* H. PRODUCT LADDER */}
      <ProductLadderSection currentProduct="scale-engine" variant="journey" />
    </div>
  );
};

export default ScaleEnginePage;
