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
          <div className="hero-anim font-mono text-sm uppercase tracking-widest text-black/60 mb-4">AI Transformation</div>
          <h1 className="hero-anim text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tighter mb-4 text-black">
            THE SCALE ENGINE
          </h1>
          <p className="hero-anim text-xl md:text-2xl text-black/80 max-w-3xl mb-12 font-medium leading-snug">
            One team proved it works. Now make it an organizational capability — and stay at the frontier.
          </p>
          <div className="hero-anim flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <MagneticButton
              href="mailto:hello@theagenticagency.com?subject=Scale%20Engine%20Inquiry"
              className="bg-black text-[#E6E6E1] px-8 py-5 text-lg font-bold flex items-center gap-2 hover:bg-black/90"
            >
              Schedule a discovery conversation <ArrowUpRight size={20} />
            </MagneticButton>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-black/60 border-l-2 border-black/20 pl-4 py-1">
              Prerequisite: The Catalyst<br/>From DKK 50,000/month
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

      {/* D. DECISION FLOW - Numbered Steps */}
      <section className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1] rounded-xl mx-4 my-12">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">Is Scale Engine Right For You?</h2>
          <p className="text-xl text-[#E6E6E1]/70 font-medium mb-16 max-w-2xl">
            Three steps to decide.
          </p>

          {/* Step 1: Compare */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#E6E6E1] text-black rounded-lg flex items-center justify-center font-black text-xl">1</div>
              <h3 className="text-2xl font-bold uppercase tracking-tight">Compare the approaches</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-0 border-4 border-white/30 rounded-xl overflow-hidden">
              <div className="p-8 bg-[#111] border-b md:border-b-0 md:border-r border-white/30">
                <div className="flex items-center gap-3 mb-6">
                  <X size={24} className="text-[#E6E6E1]/50" />
                  <span className="font-bold uppercase text-[#E6E6E1]/60">Multiple Catalysts</span>
                </div>
                <ul className="space-y-3 text-sm">
                  {["We deliver (hands-on)", "Tactical dependency", "Linear scale", "Build capability per team"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#E6E6E1]/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E6E6E1]/40"></div>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-black">
                <div className="flex items-center gap-3 mb-6">
                  <Check size={24} className="text-[#E6E6E1]" />
                  <span className="font-bold uppercase">Scale Engine</span>
                </div>
                <ul className="space-y-3 text-sm">
                  {["Your champions deliver", "Established autonomy", "Self-reinforcing adoption", "Build org capability"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#E6E6E1]/90">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E6E6E1]"></div>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Step 2: Qualify */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#E6E6E1] text-black rounded-lg flex items-center justify-center font-black text-xl">2</div>
              <h3 className="text-2xl font-bold uppercase tracking-tight">Check the prerequisites</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: "Proven Success", desc: "Completed Catalyst with documented metrics" },
                { label: "C-Level Sponsorship", desc: "Executive backing for multi-team transformation" },
                { label: "CoE Ambition", desc: "Ready to build internal Centers of Excellence" }
              ].map((item, i) => (
                <div key={i} className="bg-[#111] rounded-xl p-6 border-2 border-white/20">
                  <Check size={20} className="text-[#E6E6E1] mb-3" />
                  <div className="font-bold uppercase text-sm tracking-tight mb-1">{item.label}</div>
                  <p className="text-sm text-[#E6E6E1]/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Step 3: Assess */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#E6E6E1] text-black rounded-lg flex items-center justify-center font-black text-xl">3</div>
              <h3 className="text-2xl font-bold uppercase tracking-tight">Not sure? Get assessed</h3>
            </div>
            <div className="bg-[#111] rounded-xl p-8 md:p-10 border-2 border-white/20">
              <p className="text-lg font-medium text-[#E6E6E1]/90 mb-8">
                Complimentary <strong className="text-[#E6E6E1]">Adoption Assessment</strong> — we'll help you understand where you stand.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-black rounded-lg p-5 border border-white/10">
                  <div className="font-bold text-sm uppercase tracking-tight mb-2">Current State</div>
                  <p className="text-sm text-[#E6E6E1]/60">AI tooling and usage patterns across your organization</p>
                </div>
                <div className="bg-black rounded-lg p-5 border border-white/10">
                  <div className="font-bold text-sm uppercase tracking-tight mb-2">Readiness</div>
                  <p className="text-sm text-[#E6E6E1]/60">Indicators for scaling agentic engineering practice</p>
                </div>
                <div className="bg-black rounded-lg p-5 border border-white/10">
                  <div className="font-bold text-sm uppercase tracking-tight mb-2">Path Forward</div>
                  <p className="text-sm text-[#E6E6E1]/60">Recommended next steps based on your situation</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <MagneticButton
                  href="mailto:hello@theagenticagency.com?subject=Adoption%20Assessment%20Request"
                  className="bg-[#E6E6E1] text-black px-6 py-4 font-bold"
                >
                  Get assessed <ArrowUpRight size={16} />
                </MagneticButton>
                <span className="text-sm text-[#E6E6E1]/50 italic">An investment by us in understanding your needs</span>
              </div>
            </div>
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
              Retainers typically start at DKK 50,000/month, scoped to your organization's size and rollout ambitions.
            </p>
            <MagneticButton
              href="mailto:hello@theagenticagency.com?subject=Scale%20Engine%20Inquiry"
              className="bg-black text-[#E6E6E1] px-10 py-5 text-xl font-bold mx-auto"
            >
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
