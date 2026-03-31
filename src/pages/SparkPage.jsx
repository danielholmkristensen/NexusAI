import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Shield, GitBranch, Users, FileCheck, Zap, Check } from 'lucide-react';
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
    { q: "What do we need to prepare?", a: "Access to your development infrastructure documentation, key stakeholders' availability, and clarity on which project you want to tackle first in The Catalyst." },
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
        title="The Spark — AI Delivery Readiness"
        description="Structured onboarding that prepares your organization to receive and benefit from AI Development as a Service. Infrastructure, governance, team alignment."
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
            Get ready for AI delivery. <strong>The Spark</strong> is structured onboarding that prepares your organization to receive and benefit from AI Development as a Service.
          </p>
          <p className="hero-anim text-lg text-black/60 max-w-2xl mb-12 font-medium">
            Infrastructure. Governance. Team alignment. Everything in place before we write a single line of code.
          </p>
          <div className="hero-anim flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <MagneticButton
              onClick={() => openInquiry('spark', 'Start onboarding')}
              className="bg-black text-[#E6E6E1] px-8 py-5 text-lg font-bold flex items-center gap-2 hover:bg-black/90"
            >
              Start onboarding <ArrowUpRight size={20} />
            </MagneticButton>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-black/60 border-l-2 border-black/20 pl-4 py-1">
              From DKK 75,000<br/>Scoped to complexity
            </span>
          </div>
        </div>
      </section>

      {/* WHY ONBOARDING MATTERS */}
      <section className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8">Why onboarding matters</h2>
            <p className="text-xl text-[#E6E6E1]/80 font-medium leading-relaxed mb-8">
              AI-powered development moves fast. Without proper preparation, that speed becomes chaos — blocked deployments, security reviews, unclear ownership.
            </p>
            <p className="text-xl text-[#E6E6E1]/80 font-medium leading-relaxed">
              <strong className="text-[#E6E6E1]">The Spark</strong> ensures you're ready to receive high-velocity delivery. When The Catalyst begins, there are no surprises — just execution.
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

      {/* THE THREE PHASES */}
      <section id="phases-section" className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">Three Phases</h2>
            <p className="text-xl font-medium text-black/70 max-w-2xl">Parallel workstreams that converge into delivery readiness.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Phase 1 */}
            <div className="phase-card bg-white rounded-xl p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="font-mono text-xs tracking-wider uppercase text-black/50 mb-2">Phase 1</div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Assessment</h3>
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
            <div className="phase-card bg-white rounded-xl p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="font-mono text-xs tracking-wider uppercase text-black/50 mb-2">Phase 3</div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Preparation</h3>
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
              <div className="font-mono text-xs uppercase tracking-wider text-black/50 mb-2">Investment</div>
              <h2 className="text-4xl font-bold uppercase tracking-tighter mb-2">The Spark</h2>
              <div className="font-mono text-5xl font-bold">From 75,000 <span className="text-lg text-black/50">DKK</span></div>
              <p className="text-black/60 font-medium mt-2">Scoped to organizational complexity</p>
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
