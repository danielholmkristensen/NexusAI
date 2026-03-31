import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Shield, GitBranch, Users, FileCheck, Zap, Check, MessageSquare, Layers } from 'lucide-react';
import { MagneticButton } from '../components/common';
import { ProductLadderSection, TargetAudienceSection, FAQSection } from '../components/sections';
import { PageMeta, BreadcrumbSchema } from '../components/seo';
import { useInquiry } from '../context/InquiryContext';

gsap.registerPlugin(ScrollTrigger);

const SparkPage = () => {
  const pageRef = useRef(null);
  const { openInquiry } = useInquiry();

  const sparkFAQs = [
    { q: "How long does The Spark take?", a: "Typically 1-2 weeks depending on organizational complexity. We assess your infrastructure, governance requirements, and team readiness in parallel streams." },
    { q: "What do we need to prepare?", a: "Ideally: scope documentation — project descriptions, process diagrams, use cases, feature specs, or user screens. Don't have these? No problem. The Spark includes AI Sync Sessions where we capture context directly from your stakeholders through structured conversations." },
    { q: "Is this mandatory before The Catalyst?", a: "Strongly recommended. Organizations that skip onboarding often face delays during delivery. The Spark ensures a smooth handoff." },
    { q: "What if we already have mature DevOps?", a: "Great — The Spark will be faster. We'll validate your setup, establish communication protocols, and align on governance. Even mature orgs benefit from explicit alignment." },
    { q: "Who needs to be involved?", a: "Engineering lead, security/compliance stakeholder, and a business sponsor. We'll identify additional stakeholders during assessment." },
    { q: "What's the output?", a: "A Readiness Report documenting infrastructure status, governance framework, communication protocols, and a clear handoff to The Catalyst delivery phase." }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.hero-anim',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.08, ease: 'power3.out', delay: 0.2 }
      );

      gsap.fromTo('.phase-card',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '#phases-section', start: 'top 70%' }
        }
      );

      gsap.fromTo('.output-item',
        { x: -20, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: '#outputs-section', start: 'top 70%' }
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <PageMeta
        title="The Spark — Scope & Context for AI Development"
        description="Before development begins, we nail the context — what you're building, for who, and why. The foundation for AI Development as a Service. Alignment now, speed later."
        path="/the-spark"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'The Spark', path: '/the-spark' }
      ]} />

      {/* HERO */}
      <section className="relative h-[100dvh] w-full flex items-end pb-24 px-6 md:px-16 overflow-hidden bg-[#E6E6E1]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#E6E6E1] via-[#E6E6E1] to-[#d4d4cf]"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.03) 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-5xl">
          <div className="hero-anim font-mono text-sm uppercase tracking-widest text-black/50 mb-4">1-2 Weeks</div>
          <h1 className="hero-anim text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-none tracking-tighter mb-4 text-black">
            THE SPARK
          </h1>
          <p className="hero-anim text-xl md:text-2xl text-black/80 max-w-3xl mb-6 font-medium leading-snug">
            Scope it right. <strong>Build it once.</strong>
          </p>
          <p className="hero-anim text-lg text-black/60 max-w-2xl mb-12 font-medium">
            Before we write a line of code, we nail the context — what you're building, for who, and why. Alignment now means speed later. This is the foundation for everything that follows.
          </p>
          <div className="hero-anim flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <MagneticButton
              onClick={() => openInquiry('spark', 'Start onboarding')}
              className="bg-black text-[#E6E6E1] px-8 py-5 text-lg font-bold flex items-center gap-2 hover:bg-black/90"
            >
              Start onboarding <ArrowUpRight size={20} />
            </MagneticButton>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-black/60 border-l-2 border-black/20 pl-4 py-1">
              1-2 weeks<br/>Scoped to complexity
            </span>
          </div>
        </div>
      </section>

      {/* WHY ONBOARDING MATTERS */}
      <section className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-widest text-[#E6E6E1]/40 mb-4">Why This Matters</div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8">Context Is Everything</h2>
            <p className="text-xl text-[#E6E6E1]/80 font-medium leading-relaxed mb-8">
              AI-powered development moves fast. But speed without context is waste. Without knowing what you're building, for who, and why — the end result suffers.
            </p>
            <p className="text-xl text-[#E6E6E1]/80 font-medium leading-relaxed">
              <strong className="text-[#E6E6E1]">The Spark</strong> captures the context that makes The Catalyst succeed. Specification. Alignment. A shared understanding of what "done" looks like. Time spent here is time saved later.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {[
              {
                icon: Users,
                title: "Who & Why",
                desc: "Users, stakeholders, business goals. The human context that shapes every decision."
              },
              {
                icon: Layers,
                title: "What & How",
                desc: "Features, workflows, technical approach. The blueprint for what we're building."
              },
              {
                icon: GitBranch,
                title: "Where",
                desc: "Existing systems, integrations, infrastructure. The landscape we're building into."
              },
              {
                icon: Shield,
                title: "Constraints",
                desc: "Security, compliance, deployment paths. The boundaries that shape the solution."
              }
            ].map((item, i) => (
              <div key={i} className="border border-white/10 rounded-xl p-6">
                <item.icon size={28} className="text-[#E6E6E1]/60 mb-4" />
                <h3 className="text-lg font-bold uppercase tracking-tight mb-2">{item.title}</h3>
                <p className="text-[#E6E6E1]/70 font-medium text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI SYNC SESSIONS - SCOPE CREATION */}
      <section className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="font-mono text-xs tracking-wider uppercase text-black/50 mb-4">No scope docs? No problem.</div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8">AI Sync Sessions</h2>
              <p className="text-xl text-black/80 font-medium leading-relaxed mb-6">
                Great software starts with great understanding. Our AI-powered sync sessions capture context directly from your stakeholders — no lengthy interviews, no lost nuance.
              </p>
              <p className="text-xl text-black/70 font-medium leading-relaxed mb-8">
                Three perspectives. One shared understanding. AI synthesizes, humans validate.
              </p>
              <div className="flex items-center gap-3 text-sm font-medium text-black/60">
                <MessageSquare size={18} />
                <span>Replaces 2-4 weeks of traditional requirements gathering</span>
              </div>
            </div>

            <div className="space-y-4">
              {/* The Why */}
              <div className="bg-white rounded-xl p-6 border-2 border-black">
                <div className="mb-3">
                  <div className="font-mono text-xs tracking-wider uppercase text-black/50">Session 1</div>
                  <h3 className="text-xl font-bold uppercase tracking-tight">The Why</h3>
                </div>
                <p className="text-black/70 font-medium text-sm mb-3">Strategy, ambition, customer promises. What success looks like.</p>
                <div className="text-xs font-medium text-black/50 uppercase tracking-wide">With: Sponsors & Leadership</div>
              </div>

              {/* The What */}
              <div className="bg-white rounded-xl p-6 border-2 border-black">
                <div className="mb-3">
                  <div className="font-mono text-xs tracking-wider uppercase text-black/50">Session 2</div>
                  <h3 className="text-xl font-bold uppercase tracking-tight">The What</h3>
                </div>
                <p className="text-black/70 font-medium text-sm mb-3">Operational reality, process truth. How the work actually happens today.</p>
                <div className="text-xs font-medium text-black/50 uppercase tracking-wide">With: Domain Experts</div>
              </div>

              {/* The Where */}
              <div className="bg-white rounded-xl p-6 border-2 border-black">
                <div className="mb-3">
                  <div className="font-mono text-xs tracking-wider uppercase text-black/50">Session 3</div>
                  <h3 className="text-xl font-bold uppercase tracking-tight">The Where</h3>
                </div>
                <p className="text-black/70 font-medium text-sm mb-3">Infrastructure, existing systems, integration paths. The technical landscape.</p>
                <div className="text-xs font-medium text-black/50 uppercase tracking-wide">With: Architects & DevOps</div>
              </div>

              {/* The How */}
              <div className="bg-white rounded-xl p-6 border-2 border-black">
                <div className="mb-3">
                  <div className="font-mono text-xs tracking-wider uppercase text-black/50">Session 4</div>
                  <h3 className="text-xl font-bold uppercase tracking-tight">The How</h3>
                </div>
                <p className="text-black/70 font-medium text-sm mb-3">Technical approach, stack decisions, deployment strategy. How we build it.</p>
                <div className="text-xs font-medium text-black/50 uppercase tracking-wide">With: Engineers & Tech Leads</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT SCOPE */}
      <section className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-[#E6E6E1]/40 mb-4">The Main Event</div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
                Your Development Scope
              </h2>
              <p className="text-xl text-[#E6E6E1]/80 font-medium leading-relaxed mb-6">
                The Spark ends with something concrete: a fully scoped development engagement. Not a vague proposal — an executable plan.
              </p>
              <p className="text-lg text-[#E6E6E1]/60 font-medium leading-relaxed">
                Features prioritised. Architecture decided. Timeline fixed. Price locked. You know exactly what you're getting before The Catalyst begins.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="font-bold text-xl uppercase tracking-tight mb-6">Your Scope Document</h3>
              <ul className="space-y-4">
                {[
                  "Feature breakdown with acceptance criteria",
                  "Technical architecture & stack decisions",
                  "Screen inventory with complexity ratings",
                  "Integration map & API contracts",
                  "Fixed timeline with milestones",
                  "Fixed price — no surprises"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#E6E6E1]/80 font-medium">
                    <Check size={16} className="text-green-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THE THREE PHASES */}
      <section id="phases-section" className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">How We Get There</h2>
            <p className="text-xl font-medium text-black/70 max-w-2xl">Three phases that converge into your Development Scope.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Phase 1 */}
            <div className="phase-card bg-[#E6E6E1] rounded-xl p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="font-mono text-xs tracking-wider uppercase text-black/50 mb-2">Phase 1</div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-black">Discovery</h3>
              <p className="text-black/70 font-medium mb-6">
                We map what you need: features, workflows, users, integrations. The blueprint for your software.
              </p>
              <ul className="space-y-3">
                {[
                  "Feature prioritisation",
                  "User journey mapping",
                  "Integration inventory",
                  "Complexity assessment"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-black/80">
                    <Check size={16} className="text-black" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="phase-card bg-black text-[#E6E6E1] rounded-xl p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
              <div className="font-mono text-xs tracking-wider uppercase text-[#E6E6E1]/50 mb-2">Phase 2</div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Architecture</h3>
              <p className="text-[#E6E6E1]/70 font-medium mb-6">
                We design how it's built: stack, structure, security. Technical decisions locked before code begins.
              </p>
              <ul className="space-y-3">
                {[
                  "Technology selection",
                  "System architecture",
                  "Security framework",
                  "Infrastructure plan"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-[#E6E6E1]/80">
                    <Check size={16} className="text-[#E6E6E1]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="phase-card bg-[#E6E6E1] rounded-xl p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="font-mono text-xs tracking-wider uppercase text-black/50 mb-2">Phase 3</div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-black">Scoping</h3>
              <p className="text-black/70 font-medium mb-6">
                We lock the scope: timeline, milestones, deliverables. Fixed price. No ambiguity.
              </p>
              <ul className="space-y-3">
                {[
                  "Timeline & milestones",
                  "Acceptance criteria",
                  "Fixed pricing",
                  "Catalyst kickoff plan"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-black/80">
                    <Check size={16} className="text-black" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OUTPUTS */}
      <section id="outputs-section" className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8">What You Leave With</h2>
              <p className="text-xl font-medium text-black/70 mb-8">
                Not just alignment — a complete Development Scope ready for execution.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Layers, title: "Development Scope", desc: "Feature breakdown, architecture, timeline, fixed price. The complete plan for The Catalyst." },
                  { icon: FileCheck, title: "Screen Specifications", desc: "Every screen inventoried with complexity ratings and acceptance criteria." },
                  { icon: Shield, title: "Technical Architecture", desc: "Stack decisions, integration contracts, security framework, infrastructure plan." },
                  { icon: Zap, title: "Catalyst Kickoff", desc: "Day-one ready. No ramp-up. Development starts immediately." }
                ].map((item, i) => (
                  <div key={i} className="output-item flex items-start gap-4 p-4 bg-[#E6E6E1]/30 rounded-lg">
                    <item.icon size={24} className="text-black mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-black/70 font-medium text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black text-[#E6E6E1] rounded-xl p-10">
              <div className="font-mono text-xs uppercase tracking-wider text-[#E6E6E1]/50 mb-4">The Handoff</div>
              <h3 className="text-3xl font-bold uppercase tracking-tight mb-6">Scope Locked. Build Begins.</h3>
              <p className="text-[#E6E6E1]/80 font-medium mb-8">
                The Spark ends with complete clarity. You know what's being built, how it's being built, when it ships, and what it costs. The Catalyst is pure execution.
              </p>
              <div className="border-t border-white/20 pt-8">
                <p className="text-sm text-[#E6E6E1]/60 mb-6">Typical timeline:</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs bg-white/10 px-3 py-1 rounded">Week 1-2</span>
                    <span className="font-medium">The Spark → Development Scope</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs bg-white/10 px-3 py-1 rounded">Week 3+</span>
                    <span className="font-medium">The Catalyst → Your Software</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TARGET AUDIENCE */}
      <TargetAudienceSection
        forItems={[
          "Organizations planning their first AI-powered software delivery.",
          "Teams with complex infrastructure or compliance requirements.",
          "Enterprises requiring formal governance documentation.",
          "Anyone who wants a clean start with The Catalyst."
        ]}
        requirement="The Spark is recommended but not required. Organizations with mature DevOps may proceed directly to The Catalyst with expedited validation."
        alternateTitle="Already have mature infrastructure?"
        alternateItems={[
          "We can run an expedited validation (2-3 days) instead of full onboarding.",
          "If validation passes, proceed directly to The Catalyst.",
          "If gaps emerge, we scope targeted remediation."
        ]}
        alternateCTA={{ text: "Discuss your situation", onClick: () => openInquiry('spark', "Discuss readiness") }}
      />

      {/* PRICING */}
      <section className="py-24 bg-[#E6E6E1] px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-10 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <div className="text-center mb-8">
              <div className="font-mono text-xs uppercase tracking-wider text-black/50 mb-2">Engagement</div>
              <h2 className="text-4xl font-bold uppercase tracking-tighter mb-2">The Spark</h2>
              <p className="text-xl text-black/80 font-medium mt-2">Scoped to organizational complexity</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-bold uppercase tracking-tight mb-4">Includes</h3>
                <ul className="space-y-3">
                  {[
                    "Full infrastructure assessment",
                    "Security & compliance review",
                    "Stakeholder alignment sessions",
                    "Governance framework documentation",
                    "Environment preparation",
                    "Catalyst kickoff brief"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-black/80">
                      <Check size={16} className="text-black" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold uppercase tracking-tight mb-4">Timeline</h3>
                <ul className="space-y-3">
                  {[
                    "1-2 weeks typical duration",
                    "Parallel workstreams",
                    "Async collaboration where possible",
                    "Minimal stakeholder time required",
                    "Formal handoff to Catalyst"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-black/80">
                      <Check size={16} className="text-black" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <MagneticButton
              onClick={() => openInquiry('spark', 'Start onboarding')}
              className="w-full bg-black text-[#E6E6E1] px-8 py-4 text-lg font-bold justify-center"
            >
              Start onboarding <ArrowUpRight size={18} />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={sparkFAQs} />

      {/* PRODUCT LADDER */}
      <ProductLadderSection currentProduct="spark" variant="journey" />
    </div>
  );
};

export default SparkPage;
