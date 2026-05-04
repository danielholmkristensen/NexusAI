import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Coffee, Check, Zap, Shield, FileText, TestTube, Clock, Play, Eye, ThumbsUp, ArrowRight, Target, Code2, Layers, Scale, GraduationCap, Headphones, Bot } from 'lucide-react';
import { MagneticButton } from '../components/common';
import { ProductLadderSection, FAQSection } from '../components/sections';
import { PageMeta, BreadcrumbSchema } from '../components/seo';
import { useInquiry } from '../context/InquiryContext';

gsap.registerPlugin(ScrollTrigger);

const CatalystPage = () => {
  const pageRef = useRef(null);
  const { openInquiry } = useInquiry();

  const buildFAQs = [
    { q: "What does 'fixed price' mean?", a: "We scope the Build phase, agree on deliverables, and quote a fixed price. No hourly billing. No scope creep. You know the total cost before we start." },
    { q: "How do you deliver so fast?", a: "Agents author the code while you sleep. Engineers review every line. The Agentic OS keeps everyone in sync. It's not magic — it's methodology." },
    { q: "Do we need Discover first?", a: "Recommended. Discover locks your goals, user journeys, designed screens, architecture, and integrations. The foundation agents execute against." },
    { q: "Who actually writes the code?", a: "Agents author. Humans edit. Every feature is AI-generated, then reviewed by senior engineers for architecture, security, and maintainability. 80%+ test coverage is non-negotiable." },
    { q: "Who owns the code?", a: "You receive a perpetual, non-exclusive licence. No vendor lock-in — you can run, modify, and extend it. The licence is yours forever upon delivery." },
    { q: "What happens after delivery?", a: "Either your team takes over with full documentation and handoff, or you continue into Operate for SLA-backed support and ongoing improvements." }
  ];

  // The three-tap workflow
  const threeTaps = [
    { icon: Eye, label: "Review", desc: "See what agents built overnight", color: "bg-[#8B5CF6]" },
    { icon: ThumbsUp, label: "Approve", desc: "One tap to greenlight", color: "bg-[#A78BFA]" },
    { icon: Play, label: "Ship", desc: "Watch it deploy to staging", color: "bg-black" }
  ];

  // The cast for Build phase - speaking to client's team (icon badges, no color)
  const buildCast = [
    {
      initial: "PO",
      role: "Your Product Owner",
      icon: Target,
      signal: "5 screens ready for review",
      action: "Reviews overnight work, approves with context"
    },
    {
      initial: "LD",
      role: "Your Lead Developer",
      icon: Code2,
      signal: "Zero blocking issues",
      action: "Validates architecture, spots edge cases"
    },
    {
      initial: "EA",
      role: "Your Enterprise Architect",
      icon: Layers,
      signal: "Integration patterns approved",
      action: "Ensures system coherence across builds"
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.hero-anim',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.08, ease: 'power3.out', delay: 0.2 }
      );

      gsap.fromTo('.morning-card',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '#morning-section', start: 'top 70%' }
        }
      );

      gsap.fromTo('.tap-step',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.4)',
          scrollTrigger: { trigger: '#workflow-section', start: 'top 70%' }
        }
      );

      gsap.fromTo('.cast-card',
        { x: -20, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '#collaboration-section', start: 'top 70%' }
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <PageMeta
        title="Build — Agentic Studio | Where Agents Author, Humans Edit"
        description="Wake up to finished screens. Review in minutes. Ship by lunch. AI-powered development with human oversight. Fixed price. Production-grade."
        path="/build"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Build', path: '/build' }
      ]} />

      {/* HERO - Sara's Morning */}
      <section className="relative min-h-[100dvh] w-full flex items-end pb-24 px-6 md:px-16 overflow-hidden bg-black text-[#E6E6E1]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-5xl">
          <div className="hero-anim flex items-center gap-3 mb-6">
            <Coffee size={20} className="text-[#A78BFA]" />
            <span className="font-mono text-sm uppercase tracking-widest text-[#E6E6E1]/50">
              The morning ritual
            </span>
          </div>

          <h1 className="hero-anim text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-6">
            Wake up to<br/>
            <span className="text-[#A78BFA]">finished screens.</span>
          </h1>

          <p className="hero-anim text-xl md:text-2xl text-[#E6E6E1]/80 max-w-3xl mb-4 font-medium leading-snug">
            While you slept, agents built 5 screens. Now it's 8:47 AM.
            <br/>Coffee in hand. Agentic Studio open. <strong className="text-[#E6E6E1]">Three taps to ship.</strong>
          </p>

          <p className="hero-anim text-lg text-[#E6E6E1]/50 max-w-2xl mb-12 font-medium">
            This is what software development looks like when agents author and humans edit.
          </p>

          <div className="hero-anim flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <MagneticButton
              onClick={() => openInquiry('build', 'See Build in action')}
              className="bg-[#E6E6E1] text-black px-8 py-5 text-lg font-bold flex items-center gap-2 hover:bg-white"
            >
              See Build in action <ArrowUpRight size={20} />
            </MagneticButton>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#E6E6E1]/60 border-l-2 border-[#E6E6E1]/20 pl-4 py-1">
              Fixed price<br/>Production-grade
            </span>
          </div>
        </div>
      </section>

      {/* THE MORNING RITUAL */}
      <section id="morning-section" className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="font-mono text-sm uppercase tracking-widest text-black/50 mb-4">The Morning Moment</p>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
              "The agents built five screens<br/>while I was sleeping."
            </h2>
            <p className="text-xl text-black/70 font-medium leading-relaxed">
              Your Product Owner opens Agentic Studio at 8:47 AM. Last night's goals are done.
              The customer onboarding flow, the dashboard redesign, the settings page — all waiting for review.
              No code written. Every decision that matters still ahead.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="morning-card bg-white rounded-xl p-8 border-2 border-black/5 hover:border-black/20 transition-colors">
              <div className="text-6xl font-black text-black mb-4">8:47</div>
              <div className="font-bold uppercase tracking-tight text-lg mb-2">Open Agentic Studio</div>
              <p className="text-black/60">Coffee in hand. Notification: "5 screens ready for review."</p>
            </div>

            <div className="morning-card bg-white rounded-xl p-8 border-2 border-black/5 hover:border-black/20 transition-colors">
              <div className="text-6xl font-black text-black mb-4">8:52</div>
              <div className="font-bold uppercase tracking-tight text-lg mb-2">Review & Approve</div>
              <p className="text-black/60">Each screen shows exactly what was built. Tap to approve. Add a note. Move on.</p>
            </div>

            <div className="morning-card bg-white rounded-xl p-8 border-2 border-black/5 hover:border-black/20 transition-colors">
              <div className="text-6xl font-black text-black mb-4">9:00</div>
              <div className="font-bold uppercase tracking-tight text-lg mb-2">Ship to Staging</div>
              <p className="text-black/60">All 5 screens approved. Watch them deploy. Start your actual workday.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THREE TAPS WORKFLOW */}
      <section id="workflow-section" className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <p className="font-mono text-sm uppercase tracking-widest text-[#E6E6E1]/50 mb-4">The Approval Workflow</p>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6">
              Three taps.<br/>That's it.
            </h2>
            <p className="text-xl text-[#E6E6E1]/70 max-w-2xl mx-auto font-medium">
              No sprint ceremonies. No estimation poker. No waiting for the next release train.
              The code is ready. You decide what ships.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
            {threeTaps.map((tap, i) => (
              <React.Fragment key={i}>
                <div className="tap-step flex flex-col items-center">
                  <div className={`w-24 h-24 ${tap.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-white/5`}>
                    <tap.icon size={40} className="text-white" />
                  </div>
                  <div className="text-xl font-bold uppercase tracking-tight mb-1">{tap.label}</div>
                  <div className="text-sm text-[#E6E6E1]/50 text-center max-w-[140px]">{tap.desc}</div>
                </div>
                {i < threeTaps.length - 1 && (
                  <ArrowRight size={24} className="text-[#E6E6E1]/20 mx-8 hidden md:block" />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="mt-20 max-w-3xl mx-auto">
            <div className="bg-[#111] border border-white/10 rounded-xl p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <Zap size={24} className="text-[#A78BFA] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Agents author. You edit.</h3>
                  <p className="text-[#E6E6E1]/70 leading-relaxed">
                    The agents did the heavy lifting overnight. They wrote the code, ran the tests,
                    checked the architecture patterns. Your job isn't to build — it's to decide.
                    To approve what's right. To catch what's off. To ship what matters.
                  </p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-6">
                <p className="text-sm text-[#E6E6E1]/50">
                  Every screen shows the diff. Every approval is logged. Every decision has context.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COLLABORATION - The Cast in Build */}
      <section id="collaboration-section" className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="font-mono text-sm uppercase tracking-widest text-black/50 mb-4">The Build Ensemble</p>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
              Everyone sees their signal.<br/>Everyone plays their part.
            </h2>
            <p className="text-xl text-black/70 font-medium">
              Build isn't one person approving screens. It's your Lead Developer validating architecture.
              Your Enterprise Architect ensuring integration patterns. Each stakeholder with their own view, their own decisions, their own moment to add value.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {buildCast.map((person, i) => (
              <div key={i} className="cast-card bg-white rounded-xl p-8 border-2 border-black/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-[#E6E6E1] font-mono text-sm font-bold mb-1">
                      {person.initial}
                    </div>
                    <person.icon size={12} className="text-black/40" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">{person.role}</div>
                  </div>
                </div>

                <div className="bg-black/5 rounded-lg px-4 py-3 mb-4">
                  <div className="font-mono text-xs text-black/50 uppercase mb-1">Morning Signal</div>
                  <div className="font-medium text-black">{person.signal}</div>
                </div>

                <p className="text-black/60 text-sm">{person.action}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-black text-[#E6E6E1] rounded-xl p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Not a black box.</h3>
                <p className="text-[#E6E6E1]/70 leading-relaxed">
                  Every stakeholder sees what matters to them. Product sees features.
                  Engineering sees architecture. Compliance sees audit trails.
                  The agents work in the open. The decisions stay with you.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#111] rounded-lg p-4">
                  <div className="text-3xl font-black mb-1">80%+</div>
                  <div className="text-sm text-[#E6E6E1]/60">Test coverage on every build</div>
                </div>
                <div className="bg-[#111] rounded-lg p-4">
                  <div className="text-3xl font-black mb-1">100%</div>
                  <div className="text-sm text-[#E6E6E1]/60">Human review before ship</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <p className="font-mono text-sm uppercase tracking-widest text-black/50 mb-4">The Deliverables</p>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">What ships at the end.</h2>
            <p className="text-xl font-medium text-black/70 max-w-2xl">
              Not a prototype. Not a proof of concept. Production software your team can run, maintain, and extend.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FileText,
                title: "Production Code",
                desc: "Deployed to your infrastructure. Your repos. Your CI/CD. No vendor lock-in, ever."
              },
              {
                icon: TestTube,
                title: "80%+ Test Coverage",
                desc: "Unit, integration, e2e. Every feature tested. Every edge case covered."
              },
              {
                icon: Shield,
                title: "Security Reviewed",
                desc: "OWASP compliance. Dependency audits. Secrets management. Enterprise ready."
              },
              {
                icon: FileText,
                title: "Full Documentation",
                desc: "Architecture docs. API references. Deployment guides. Your team can take over."
              },
              {
                icon: Clock,
                title: "Fixed Timeline",
                desc: "Agreed delivery date. Regular demos. No scope creep. No surprises."
              },
              {
                icon: Check,
                title: "Perpetual Licence",
                desc: "Yours to keep forever. Run it, modify it, extend it. No recurring fees."
              },
              {
                icon: Scale,
                title: "Legal & Compliance",
                desc: "Contracts, IP assignment, data handling, and regulatory compliance. Tailored to your jurisdiction."
              },
              {
                icon: GraduationCap,
                title: "Change Management Training",
                desc: "Training materials for your change management team. Adoption playbooks. Stakeholder communication guides."
              },
              {
                icon: Headphones,
                title: "Support Training",
                desc: "First and second line support training. Runbooks. Escalation paths. Your team ready from day one."
              }
            ].map((item, i) => (
              <div key={i} className="bg-[#E6E6E1]/50 border border-black/10 rounded-xl p-8 hover:border-black/30 transition-colors">
                <item.icon size={28} className="text-black/60 mb-4" />
                <h3 className="text-xl font-bold uppercase tracking-tight mb-3">{item.title}</h3>
                <p className="text-black/60 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Optional Add-on */}
          <div className="mt-12 max-w-md">
            <div className="bg-white border-2 border-[#8B5CF6]/20 rounded-xl p-8">
              <div className="font-mono text-xs uppercase tracking-widest text-[#8B5CF6] mb-3">Optional</div>
              <Bot size={28} className="text-[#8B5CF6]/60 mb-4" />
              <h3 className="text-xl font-bold uppercase tracking-tight mb-3">Operate SLA — Agent(s)</h3>
              <p className="text-black/60 font-medium mb-4">
                Ongoing support for your software and agents. Paid yearly, committed for 3–5 years. Includes monitoring, maintenance, and continuous improvement.
              </p>
              <div className="text-sm text-black/50">→ Explore after Build delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* THE JOURNEY - From Discover to Build */}
      <section className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-mono text-sm uppercase tracking-widest text-[#E6E6E1]/50 mb-4">The Agentic Studio Journey</p>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
              Discover locked the goals.<br/>Build executes them.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#111] border border-white/10 rounded-xl p-8">
              <div className="font-mono text-xs uppercase tracking-widest text-[#E6E6E1]/50 mb-4">Before Build</div>
              <h3 className="text-2xl font-bold mb-4">Discover</h3>
              <p className="text-[#E6E6E1]/70 mb-6 leading-relaxed">
                Your stakeholders were interviewed. Your CFO approved the budget. Your Product Owner defined the priorities.
                Your Enterprise Architect signed off on architecture. The goals are locked. The user journeys are mapped.
              </p>
              <div className="flex items-center gap-2 text-[#E6E6E1]/50">
                <Check size={16} />
                <span className="text-sm font-medium">Requirements crystallized</span>
              </div>
            </div>

            <div className="bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-xl p-8">
              <div className="font-mono text-xs uppercase tracking-widest text-[#8B5CF6] mb-4">Now</div>
              <h3 className="text-2xl font-bold mb-4 text-[#8B5CF6]">Build</h3>
              <p className="text-[#E6E6E1]/70 mb-6 leading-relaxed">
                Agents write code every night. Stakeholders review every morning.
                Tests run automatically. Security checks are built in.
                Your software takes shape while you focus on what matters.
              </p>
              <div className="flex items-center gap-2 text-[#8B5CF6]">
                <Zap size={16} />
                <span className="text-sm font-medium">Executing with velocity</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#E6E6E1]/50 mb-6">
              Then? Operate takes the wheel — real-time monitoring, SLA-backed support, continuous improvement.
            </p>
            <MagneticButton
              onClick={() => openInquiry('build', 'Start the journey')}
              className="bg-[#E6E6E1] text-black px-8 py-4 text-lg font-bold"
            >
              Start with Discover <ArrowUpRight size={18} />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 bg-[#E6E6E1] px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-sm uppercase tracking-widest text-black/50 mb-4">The Commercial Model</p>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
                Fixed price.<br/>Zero surprises.
              </h2>
              <p className="text-xl font-medium text-black/70 mb-6 leading-relaxed">
                No hourly billing. No scope creep charges. We scope your project,
                agree on deliverables, and quote a fixed price before any work begins.
              </p>
              <p className="text-lg text-black/60 font-medium">
                You know the total cost before the first agent writes the first line of code.
              </p>
            </div>

            <div className="bg-black text-[#E6E6E1] rounded-xl p-10 md:p-12">
              <div className="border-b border-white/10 pb-8 mb-8">
                <div className="font-mono text-xs uppercase tracking-widest text-[#E6E6E1]/50 mb-3">What's included</div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-[#8B5CF6] mt-1 flex-shrink-0" />
                    <span className="text-[#E6E6E1]/80 font-medium">Scoped to your requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-[#8B5CF6] mt-1 flex-shrink-0" />
                    <span className="text-[#E6E6E1]/80 font-medium">Regular demos and progress reviews</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-[#8B5CF6] mt-1 flex-shrink-0" />
                    <span className="text-[#E6E6E1]/80 font-medium">Production deployment included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-[#8B5CF6] mt-1 flex-shrink-0" />
                    <span className="text-[#E6E6E1]/80 font-medium">Perpetual licence — yours forever</span>
                  </li>
                </ul>
              </div>

              <MagneticButton
                onClick={() => openInquiry('build', 'Get a quote')}
                className="bg-[#E6E6E1] text-black px-8 py-4 text-lg font-bold w-full justify-center"
              >
                Get a quote <ArrowUpRight size={18} />
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={buildFAQs} />

      {/* PRODUCT LADDER */}
      <ProductLadderSection currentProduct="build" variant="journey" />
    </div>
  );
};

export default CatalystPage;
