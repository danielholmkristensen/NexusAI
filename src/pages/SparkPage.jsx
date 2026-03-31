import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Shield, GitBranch, Users, FileCheck, Zap, Check, MessageSquare } from 'lucide-react';
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
        title="The Spark — Train Your Teams in Agentic Engineering"
        description="We train your teams to use AI in software development. Move from ad-hoc AI usage to structured, production-grade agentic engineering. Results visible and immediate."
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
            Your team. <strong>Upgraded.</strong>
          </p>
          <p className="hero-anim text-lg text-black/60 max-w-2xl mb-12 font-medium">
            Two weeks from now, your developers ship production code with AI — not prompts, not experiments. Real engineering. We install the capability, you keep it forever.
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
            <div className="font-mono text-xs uppercase tracking-widest text-[#E6E6E1]/40 mb-4">Engineering {'>'} Prompting</div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8">From Ad-Hoc to Production-Grade</h2>
            <p className="text-xl text-[#E6E6E1]/80 font-medium leading-relaxed mb-8">
              Most teams use AI casually — copy-paste prompts, no versioning, no testing, no governance. That's not engineering. That's experimentation.
            </p>
            <p className="text-xl text-[#E6E6E1]/80 font-medium leading-relaxed">
              <strong className="text-[#E6E6E1]">The Spark</strong> transforms your team into agentic engineering practitioners. Structured methodology. Proper tooling. Ready for high-velocity delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Shield,
                title: "Security & Compliance",
                desc: "Audit existing controls, establish approval workflows, document governance requirements before delivery begins."
              },
              {
                icon: GitBranch,
                title: "Infrastructure Readiness",
                desc: "Validate CI/CD pipelines, staging environments, deployment targets. No blocked PRs during delivery."
              },
              {
                icon: Users,
                title: "Team Alignment",
                desc: "Identify stakeholders, establish communication protocols, define escalation paths. Everyone knows their role."
              }
            ].map((item, i) => (
              <div key={i} className="border border-white/10 rounded-xl p-8">
                <item.icon size={32} className="text-[#E6E6E1]/60 mb-4" />
                <h3 className="text-xl font-bold uppercase tracking-tight mb-3">{item.title}</h3>
                <p className="text-[#E6E6E1]/70 font-medium">{item.desc}</p>
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
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="font-mono text-xs tracking-wider uppercase text-black/50">Session 1</div>
                    <h3 className="text-xl font-bold uppercase tracking-tight">The Why</h3>
                  </div>
                  <span className="font-mono text-xs text-black/50">15-20 min</span>
                </div>
                <p className="text-black/70 font-medium text-sm mb-3">Strategy, ambition, customer promises. What success looks like.</p>
                <div className="text-xs font-medium text-black/50 uppercase tracking-wide">With: Sponsors & Leadership</div>
              </div>

              {/* The What */}
              <div className="bg-white rounded-xl p-6 border-2 border-black">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="font-mono text-xs tracking-wider uppercase text-black/50">Session 2</div>
                    <h3 className="text-xl font-bold uppercase tracking-tight">The What</h3>
                  </div>
                  <span className="font-mono text-xs text-black/50">25-30 min</span>
                </div>
                <p className="text-black/70 font-medium text-sm mb-3">Operational reality, process truth. How the work actually happens today.</p>
                <div className="text-xs font-medium text-black/50 uppercase tracking-wide">With: Domain Experts</div>
              </div>

              {/* The How */}
              <div className="bg-white rounded-xl p-6 border-2 border-black">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="font-mono text-xs tracking-wider uppercase text-black/50">Session 3</div>
                    <h3 className="text-xl font-bold uppercase tracking-tight">The How</h3>
                  </div>
                  <span className="font-mono text-xs text-black/50">30-45 min</span>
                </div>
                <p className="text-black/70 font-medium text-sm mb-3">Technical depth, system constraints. What's possible and what's not.</p>
                <div className="text-xs font-medium text-black/50 uppercase tracking-wide">With: Architects & Engineers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE THREE PHASES */}
      <section id="phases-section" className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">Three Phases</h2>
            <p className="text-xl font-medium text-black/70 max-w-2xl">Parallel workstreams that converge into delivery readiness.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Phase 1 */}
            <div className="phase-card bg-[#E6E6E1] rounded-xl p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="font-mono text-xs tracking-wider uppercase text-black/50 mb-2">Phase 1</div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-black">Assessment</h3>
              <p className="text-black/70 font-medium mb-6">
                We audit your current state: infrastructure, security posture, team structure, and existing workflows.
              </p>
              <ul className="space-y-3">
                {[
                  "Infrastructure audit",
                  "Security & compliance review",
                  "Team capability mapping",
                  "Tooling inventory"
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
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Alignment</h3>
              <p className="text-[#E6E6E1]/70 font-medium mb-6">
                We establish shared protocols: communication channels, approval workflows, escalation paths.
              </p>
              <ul className="space-y-3">
                {[
                  "Stakeholder identification",
                  "Communication protocols",
                  "Approval workflows",
                  "Escalation paths"
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
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-black">Preparation</h3>
              <p className="text-black/70 font-medium mb-6">
                We prepare the delivery environment: access provisioning, pipeline validation, documentation.
              </p>
              <ul className="space-y-3">
                {[
                  "Environment provisioning",
                  "Access & credentials",
                  "Pipeline validation",
                  "Handoff documentation"
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
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8">What you receive</h2>
              <p className="text-xl font-medium text-black/70 mb-8">
                The Spark concludes with a Readiness Report and formal handoff to The Catalyst delivery phase.
              </p>

              <div className="space-y-4">
                {[
                  { icon: FileCheck, title: "Readiness Report", desc: "Complete assessment of infrastructure, governance, and team readiness." },
                  { icon: Shield, title: "Governance Framework", desc: "Documented approval workflows, security protocols, compliance requirements." },
                  { icon: Users, title: "Communication Charter", desc: "Stakeholder map, escalation paths, meeting cadences, reporting structure." },
                  { icon: Zap, title: "Catalyst Kickoff Brief", desc: "Scoped first engagement, timeline, success criteria, team assignments." }
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
              <div className="font-mono text-xs uppercase tracking-wider text-[#E6E6E1]/50 mb-4">After The Spark</div>
              <h3 className="text-3xl font-bold uppercase tracking-tight mb-6">Ready for The Catalyst</h3>
              <p className="text-[#E6E6E1]/80 font-medium mb-8">
                With onboarding complete, The Catalyst delivery begins immediately. No ramp-up delays. No infrastructure surprises. Just execution.
              </p>
              <div className="border-t border-white/20 pt-8">
                <p className="text-sm text-[#E6E6E1]/60 mb-6">Typical flow:</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs bg-white/10 px-3 py-1 rounded">Week 1-2</span>
                    <span className="font-medium">The Spark (Onboarding)</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs bg-white/10 px-3 py-1 rounded">Week 3+</span>
                    <span className="font-medium">The Catalyst (Delivery)</span>
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
