import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ArrowRight, Check, Users, Target, FileCheck, Zap, Play } from 'lucide-react';
import { MagneticButton } from '../components/common';
import { ProductLadderSection, FAQSection } from '../components/sections';
import { PageMeta, BreadcrumbSchema } from '../components/seo';
import { useInquiry } from '../context/InquiryContext';

gsap.registerPlugin(ScrollTrigger);

const SparkPage = () => {
  const pageRef = useRef(null);
  const { openInquiry } = useInquiry();

  const discoverFAQs = [
    { q: "What happens in a Discover phase?", a: "Echo — our AI interviewer — conducts structured conversations with your stakeholders: sponsors, domain experts, architects, engineers. It surfaces conflicts, locks goals with numbers, and creates a scope document that agents can actually execute against." },
    { q: "Who needs to be involved?", a: "Your sponsor who owns the budget, your product owner who owns the features, and your technical stakeholders who own the architecture. Echo handles the coordination and conflict resolution." },
    { q: "How is this different from traditional discovery?", a: "Traditional discovery produces documents that get interpreted. Discover produces specifications that agents can execute. Every goal has a baseline, a target, and an owner. Nothing is ambiguous." },
    { q: "What if we already have clear requirements?", a: "Great — Echo will validate them faster. But even well-prepared teams find conflicts when the agent asks 'What happens if we don't hit this goal?' and the CFO and Product Owner give different answers." },
    { q: "Can we skip Discover and go straight to Build?", a: "You can. But Build without Discover means agents working against unclear goals. Every failed AI initiative shares the same root cause: unclear goals, unmeasured outcomes. Discover prevents that." }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.hero-anim',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.08, ease: 'power3.out', delay: 0.2 }
      );

      gsap.fromTo('.section-reveal',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.section-reveal',
            start: 'top 75%'
          }
        }
      );

      gsap.fromTo('.screenshot-reveal',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.screenshot-reveal',
            start: 'top 80%'
          }
        }
      );

      gsap.fromTo('.step-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#process-section',
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
        title="Discover — Agentic Studio | Where Echo interviews your stakeholders"
        description="Before a single line of code, Echo captures what humans forget to ask. Goals with numbers, stakeholder alignment, locked scope. The foundation for agentic delivery."
        path="/discover"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Discover', path: '/discover' }
      ]} />

      {/* HERO — THE HENRIK MOMENT */}
      <section className="relative min-h-[90vh] w-full flex items-end pb-24 px-6 md:px-16 overflow-hidden bg-[#E6E6E1]">
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.03) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}></div>

        <div className="relative z-10 max-w-5xl">
          <div className="hero-anim font-mono text-sm uppercase tracking-widest text-black/40 mb-4">
            {'>>'} AGENTIC STUDIO
          </div>
          <h1 className="hero-anim text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-none tracking-tighter mb-6 text-black">
            DISCOVER
          </h1>
          <p className="hero-anim text-xl md:text-2xl text-black/80 max-w-3xl mb-4 font-medium leading-snug">
            Your CFO thinks they know what they want. Then Echo asks: <em className="text-black">"What happens to the budget if we don't hit the 30% target?"</em>
          </p>
          <p className="hero-anim text-lg text-black/60 max-w-2xl mb-12">
            Echo — our AI interviewer — asks the questions humans forget. Surfaces conflicts before they become blockers. Locks goals, user journeys, and architecture with numbers, not wishes. This is where agentic delivery begins.
          </p>
          <div className="hero-anim flex items-center gap-6 flex-wrap">
            <MagneticButton
              onClick={() => openInquiry('discover', 'See Discover in action')}
              className="bg-black text-[#E6E6E1] px-8 py-5 text-lg font-bold flex items-center gap-2 hover:bg-black/90"
            >
              <Play size={18} /> See Discover in action
            </MagneticButton>
            <a href="#process" className="text-black/60 hover:text-black text-sm font-medium flex items-center gap-2 transition-colors">
              How it works <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* THE PROBLEM — WHY DISCOVER EXISTS */}
      <section className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="section-reveal">
              <div className="font-mono text-xs uppercase tracking-widest text-[#E6E6E1]/40 mb-4">THE PROBLEM</div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8">
                Every failed AI initiative shares the same root cause.
              </h2>
              <p className="text-xl text-[#E6E6E1]/70 font-medium leading-relaxed mb-6">
                Unclear goals. Unmeasured outcomes. Humans as bottlenecks.
              </p>
              <p className="text-lg text-[#E6E6E1]/60">
                Agents don't need more prompts. <strong className="text-[#E6E6E1]">They need clearer missions.</strong>
              </p>
            </div>
            <div className="section-reveal bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-6">Discover solves this.</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target size={16} />
                  </div>
                  <div>
                    <div className="font-bold mb-1">Goals with numbers</div>
                    <p className="text-sm text-[#E6E6E1]/60">"Reduce fulfillment time 30%" not "improve operations"</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users size={16} />
                  </div>
                  <div>
                    <div className="font-bold mb-1">Stakeholder alignment</div>
                    <p className="text-sm text-[#E6E6E1]/60">Echo interviews your CFO, Product Owner, Architect — surfacing conflicts early</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FileCheck size={16} />
                  </div>
                  <div>
                    <div className="font-bold mb-1">Locked scope</div>
                    <p className="text-sm text-[#E6E6E1]/60">Every goal gets a baseline, a target, and an owner</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ECHO IN ACTION — HERO SCREENSHOT */}
      <section className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-6xl mx-auto">
          <div className="section-reveal text-center mb-12">
            <div className="font-mono text-sm tracking-widest text-black/35 mb-4">ECHO IN ACTION</div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
              "What does success look like in 90 days?"
            </h2>
            <p className="text-lg text-black/60 max-w-2xl mx-auto">
              Echo asks the questions that surface real constraints. Watch your CFO's expression when the budget question lands.
            </p>
          </div>

          <div className="screenshot-reveal relative">
            <div className="absolute top-4 left-4 z-10 bg-black text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Live: Echo interviewing your CFO
            </div>
            <img
              src="/screenshots/01-discover-echo-henrik.png"
              alt="Echo interviews Henrik"
              className="w-full rounded-xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
            />
            <p className="text-sm text-black/50 mt-6 text-center italic">
              "I've been in discovery workshops for 20 years. Echo asked a question in minute five that no consultant has ever asked."
            </p>
          </div>
        </div>
      </section>

      {/* THE PROCESS — HOW DISCOVER WORKS */}
      <section id="process" className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="font-mono text-sm tracking-widest text-black/35 mb-4">HOW IT WORKS</div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">Agent-led conversations. One locked scope.</h2>
            <p className="text-lg text-black/60 max-w-2xl mx-auto">
              15-minute sessions — voice or chat. Echo interviews each stakeholder and transforms conversations into consistent artefacts. Goals, user journeys, screens, architecture, and integrations lock when everyone aligns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="step-card bg-[#E6E6E1] rounded-xl p-6 border-2 border-black">
              <div className="font-mono text-xs text-black/40 mb-3">CONVERSATION 01</div>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-3">The Why</h3>
              <p className="text-sm text-black/70 mb-4">Strategy, ambition, success criteria. What does winning look like?</p>
              <div className="text-xs font-medium text-black/50 uppercase tracking-wide bg-white px-3 py-1.5 rounded inline-block">
                With: Your Sponsor
              </div>
            </div>
            <div className="step-card bg-[#E6E6E1] rounded-xl p-6 border-2 border-black">
              <div className="font-mono text-xs text-black/40 mb-3">CONVERSATION 02</div>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-3">The What</h3>
              <p className="text-sm text-black/70 mb-4">Features, workflows, user needs. How does the work actually happen today?</p>
              <div className="text-xs font-medium text-black/50 uppercase tracking-wide bg-white px-3 py-1.5 rounded inline-block">
                With: Your Product Owner
              </div>
            </div>
            <div className="step-card bg-[#E6E6E1] rounded-xl p-6 border-2 border-black">
              <div className="font-mono text-xs text-black/40 mb-3">CONVERSATION 03</div>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-3">The Where</h3>
              <p className="text-sm text-black/70 mb-4">Infrastructure, integrations, constraints. What does the technical landscape look like?</p>
              <div className="text-xs font-medium text-black/50 uppercase tracking-wide bg-white px-3 py-1.5 rounded inline-block">
                With: Your Enterprise Architect
              </div>
            </div>
            <div className="step-card bg-black text-[#E6E6E1] rounded-xl p-6 border-2 border-black">
              <div className="font-mono text-xs text-[#E6E6E1]/40 mb-3">CONVERSATION 04</div>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-3">The How</h3>
              <p className="text-sm text-[#E6E6E1]/70 mb-4">Technical approach, stack decisions, build strategy. How do we execute?</p>
              <div className="text-xs font-medium text-[#E6E6E1]/50 uppercase tracking-wide bg-white/10 px-3 py-1.5 rounded inline-block">
                With: Your Lead Developer
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE OUTPUTS — WHAT YOU GET */}
      <section className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="section-reveal">
              <div className="font-mono text-xs uppercase tracking-widest text-[#E6E6E1]/40 mb-4">THE OUTPUT</div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
                Goals that agents can execute against.
              </h2>
              <p className="text-xl text-[#E6E6E1]/70 font-medium leading-relaxed mb-8">
                Discover ends with a locked scope document. Every goal has a baseline, a target, and an owner. Build can begin immediately — no ambiguity, no drift.
              </p>
              <ul className="space-y-4">
                {[
                  "Charter with numbered goals",
                  "Stakeholder alignment captured",
                  "Conflict resolutions documented",
                  "Workflow analysis with automation potential",
                  "Recommended path with cost/time/risk scores"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#E6E6E1]/80">
                    <Check size={16} className="text-green-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="screenshot-reveal space-y-6">
              <div className="relative group">
                <img
                  src="/screenshots/02-discover-charter-goals.png"
                  alt="Charter with locked goals"
                  className="w-full rounded-lg border border-white/10 shadow-lg group-hover:shadow-2xl transition-shadow"
                />
                <p className="text-sm text-[#E6E6E1]/50 mt-3">Goals lock when all stakeholders align. GOAL-01 through GOAL-05: numbered, measured, owned.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE DASHBOARD — PERSONA-AWARE VIEWS */}
      <section className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-6xl mx-auto">
          <div className="section-reveal text-center mb-12">
            <div className="font-mono text-sm tracking-widest text-black/35 mb-4">EVERY STAKEHOLDER. ONE AGENTIC OS.</div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
              Your Product Owner sees features. Your CFO sees ROI.
            </h2>
            <p className="text-lg text-black/60 max-w-2xl mx-auto">
              Same data. Different views. Each stakeholder sees exactly what they need to make their decision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="screenshot-reveal group">
              <div className="relative">
                <div className="absolute top-4 left-4 z-10 bg-[#8B5CF6] text-white px-3 py-1.5 rounded-full text-xs font-bold">
                  Product Owner View
                </div>
                <img
                  src="/screenshots/03-discover-home-sara.png"
                  alt="Sara's dashboard"
                  className="w-full rounded-lg border-2 border-black shadow-md group-hover:shadow-xl transition-shadow"
                />
              </div>
              <p className="text-sm text-black/50 mt-4">Quality ring, attention queue, screens ready for review. Your Product Owner sees their work.</p>
            </div>
            <div className="screenshot-reveal group">
              <div className="relative">
                <div className="absolute top-4 left-4 z-10 bg-[#8B5CF6] text-white px-3 py-1.5 rounded-full text-xs font-bold">
                  Path Comparison — Decision Time
                </div>
                <img
                  src="/screenshots/04-discover-recommendation-paths.png"
                  alt="Path recommendations"
                  className="w-full rounded-lg border-2 border-black shadow-md group-hover:shadow-xl transition-shadow"
                />
              </div>
              <p className="text-sm text-black/50 mt-4">Four paths compared. Cost, time, fit, risk — all scored. Your Sponsor taps "Approve" on the recommended path.</p>
            </div>
          </div>

          <div className="mt-8">
            <div className="screenshot-reveal group">
              <div className="relative">
                <div className="absolute top-4 left-4 z-10 bg-[#A78BFA] text-white px-3 py-1.5 rounded-full text-xs font-bold">
                  Workflow Analysis — Automation Potential
                </div>
                <img
                  src="/screenshots/05-discover-workflow-analyzer.png"
                  alt="Workflow analyzer"
                  className="w-full rounded-lg border-2 border-black shadow-md group-hover:shadow-xl transition-shadow"
                />
              </div>
              <p className="text-sm text-black/50 mt-4">9 workflows analyzed. 71% automation potential. The agent did the analysis. Your Lead Developer just reviews.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT STEP — BUILD */}
      <section className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-mono text-sm text-[#E6E6E1]/40 mb-4">WHAT HAPPENS NEXT</div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
            Discover locks the goals.<br/>Build executes them.
          </h2>
          <p className="text-xl text-[#E6E6E1]/60 max-w-2xl mx-auto mb-8">
            Once your Sponsor signs off on the charter, the scope is locked. Build can begin immediately — agents working against clear goals, your Product Owner reviewing screens, your Architect governing integrations.
          </p>
          <Link
            to="/build"
            className="inline-flex items-center gap-3 bg-[#E6E6E1] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-white transition-colors"
          >
            Explore Build <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={discoverFAQs} />

      {/* PRODUCT LADDER */}
      <ProductLadderSection currentProduct="discover" variant="journey" />

      {/* CTA */}
      <section className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-xl p-12 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">
              See Echo in action.
            </h2>
            <p className="text-lg text-black/70 mb-8">
              Watch how Echo interviews stakeholders, surfaces conflicts, and locks goals. 30 minutes. Live product.
            </p>
            <MagneticButton
              onClick={() => openInquiry('discover', 'Book a Discover demo')}
              className="bg-black text-[#E6E6E1] px-10 py-5 text-lg font-bold"
            >
              <Play size={18} className="mr-2" /> Book a demo
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SparkPage;
