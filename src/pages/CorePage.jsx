import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Monitor, Activity, Shield, Clock, Bell, BarChart3, Check, Eye, Zap } from 'lucide-react';
import { MagneticButton } from '../components/common';
import { ProductLadderSection, FAQSection } from '../components/sections';
import { PageMeta, BreadcrumbSchema } from '../components/seo';
import { useInquiry } from '../context/InquiryContext';

gsap.registerPlugin(ScrollTrigger);

const CorePage = () => {
  const pageRef = useRef(null);
  const { openInquiry } = useInquiry();

  const coreFAQs = [
    { q: "What is The Core?", a: "The Core is the Command Center for AI-driven development. Today: real-time dashboards, session management, and SLA-backed support. Tomorrow: a system that learns your preferences and anticipates your needs." },
    { q: "Do we need it after The Catalyst?", a: "Optional but recommended. The Core provides ongoing visibility, support, and the ability to quickly spin up new engagements without re-onboarding." },
    { q: "What's the vision?", a: "A Command Center that learns you. Where we author, you edit. Where we anticipate, you confirm. Each engagement makes the next one smoother. Friction approaches zero over time." },
    { q: "What's included?", a: "One tier. High standards for all. Dashboard access, rapid response times, direct escalation, screen spec reviews, look & feel acceptance, and delivery sign-off. No feature gates." },
    { q: "How is pricing structured?", a: "Yearly retainer based on scope of coverage. Contact us for a quote tailored to your operational needs." },
    { q: "Can we add new Catalyst engagements through The Core?", a: "Yes — that's a key benefit. The Core maintains your organizational context, so new engagements start faster and integrate seamlessly." }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.hero-anim',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.08, ease: 'power3.out', delay: 0.2 }
      );

      gsap.fromTo('.feature-card',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '#features-section', start: 'top 70%' }
        }
      );

      gsap.fromTo('.dashboard-element',
        { scale: 0.95, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '#dashboard-section', start: 'top 70%' }
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <PageMeta
        title="The Core — Command Center for AI Development"
        description="Real-time visibility into AI-driven development. Dashboards, session management, operational control, and SLA-backed support."
        path="/the-core"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'The Core', path: '/the-core' }
      ]} />

      {/* HERO */}
      <section className="relative h-[100dvh] w-full flex items-end pb-24 px-6 md:px-16 overflow-hidden bg-[#111] text-[#E6E6E1]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }}></div>
          {/* Subtle glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E6E6E1]/5 rounded-full blur-[200px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl">
          <div className="hero-anim font-mono text-sm uppercase tracking-widest text-[#E6E6E1]/50 mb-4">Ongoing</div>
          <h1 className="hero-anim text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-none tracking-tighter mb-4">
            THE CORE
          </h1>
          <p className="hero-anim text-xl md:text-2xl text-[#E6E6E1]/80 max-w-3xl mb-6 font-medium leading-snug">
            The Command Center. <strong className="text-[#E6E6E1]">Visibility. Control. Continuity.</strong>
          </p>
          <p className="hero-anim text-lg text-[#E6E6E1]/60 max-w-2xl mb-12 font-medium">
            Today: dashboards, session management, SLA-backed support. Tomorrow: a system that learns your preferences and anticipates your needs.
          </p>
          <div className="hero-anim flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <MagneticButton
              onClick={() => openInquiry('core', 'Learn more')}
              className="bg-[#E6E6E1] text-black px-8 py-5 text-lg font-bold flex items-center gap-2 hover:bg-white"
            >
              Learn more <ArrowUpRight size={20} />
            </MagneticButton>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#E6E6E1]/60 border-l-2 border-[#E6E6E1]/20 pl-4 py-1">
              SLA-based<br/>Yearly retainer
            </span>
          </div>
        </div>
      </section>

      {/* WHAT IS THE CORE */}
      <section className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8">The Command Center</h2>
              <p className="text-xl text-black/80 font-medium leading-relaxed mb-6">
                After The Catalyst delivers, The Core keeps you connected. Real-time visibility into ongoing engagements, operational metrics, and direct access to support.
              </p>
              <p className="text-xl text-black/70 font-medium leading-relaxed mb-8">
                No more status meetings. No more "let me check on that." Everything you need to know — in one place, updated in real time.
              </p>

              <div className="space-y-4">
                {[
                  "Real-time project dashboards",
                  "Active session monitoring",
                  "SLA tracking and reporting",
                  "Direct escalation channels"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={20} className="text-black" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard Preview */}
            <div id="dashboard-section" className="bg-[#111] rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="font-mono text-sm text-[#E6E6E1]/70">COMMAND CENTER</span>
                </div>
                <span className="font-mono text-xs text-[#E6E6E1]/50">LIVE</span>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Active Sessions", value: "3" },
                  { label: "This Week", value: "47 hrs" },
                  { label: "Test Coverage", value: "84%" }
                ].map((stat, i) => (
                  <div key={i} className="dashboard-element bg-white/5 rounded-lg p-4 text-center">
                    <div className="font-mono text-2xl font-bold text-[#E6E6E1]">{stat.value}</div>
                    <div className="text-xs text-[#E6E6E1]/50 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="dashboard-element space-y-3">
                {[
                  { name: "Market Leader X", status: "active", progress: 65 },
                  { name: "Invoice Automation", status: "active", progress: 40 },
                  { name: "Dashboard v2", status: "pending", progress: 0 }
                ].map((project, i) => (
                  <div key={i} className="bg-white/5 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-[#E6E6E1]/90 text-sm">{project.name}</span>
                      <span className={`text-xs uppercase tracking-wider ${project.status === 'active' ? 'text-green-400' : 'text-[#E6E6E1]/40'}`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#E6E6E1] rounded-full transition-all duration-500"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features-section" className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">What You Get</h2>
            <p className="text-xl font-medium text-[#E6E6E1]/70 max-w-2xl">Operational visibility and control, backed by SLA commitments.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Monitor,
                title: "Real-Time Dashboards",
                desc: "Live project status, session activity, and progress metrics. No more weekly status emails."
              },
              {
                icon: Activity,
                title: "Session Monitoring",
                desc: "See active development sessions, agent activity, and work in progress. Full transparency."
              },
              {
                icon: BarChart3,
                title: "Operational Metrics",
                desc: "Test coverage trends, deployment frequency, code quality metrics. Data-driven oversight."
              },
              {
                icon: Bell,
                title: "Proactive Alerts",
                desc: "Notifications for key milestones, blockers, and items requiring your attention."
              },
              {
                icon: Shield,
                title: "SLA Guarantees",
                desc: "Response time commitments, availability targets, and escalation paths. Accountability built in."
              },
              {
                icon: Zap,
                title: "Rapid New Engagements",
                desc: "Start new Catalyst projects faster. Your context is already loaded — no re-onboarding needed."
              }
            ].map((item, i) => (
              <div key={i} className="feature-card bg-[#111] border border-white/10 rounded-xl p-8 hover:border-white/30 transition-colors">
                <item.icon size={32} className="text-[#E6E6E1]/60 mb-4" />
                <h3 className="text-xl font-bold uppercase tracking-tight mb-3">{item.title}</h3>
                <p className="text-[#E6E6E1]/70 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLA — ONE STANDARD */}
      <section className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-black/40 mb-4">Service Level</div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
                One Tier.<br/>High Standards for All.
              </h2>
              <p className="text-xl text-black/80 font-medium leading-relaxed mb-6">
                With us, you get a highly responsive feedback loop. No tiers to navigate, no feature gates to unlock. Everyone gets our best.
              </p>
              <p className="text-lg text-black/60 font-medium leading-relaxed">
                We're a small team working closely with each client. That's the advantage — tight feedback loops, fast responses, real partnership.
              </p>
            </div>

            <div className="bg-black text-[#E6E6E1] rounded-xl p-10 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
              <div className="font-mono text-xs uppercase tracking-wider text-[#E6E6E1]/50 mb-2">The Standard</div>
              <h3 className="text-3xl font-bold uppercase tracking-tight mb-6">Everything. Always.</h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Real-time dashboard access",
                  "Rapid response times",
                  "Direct escalation channels",
                  "Regular sync cadence",
                  "Screen spec reviews",
                  "Look & feel acceptance",
                  "Delivery sign-off"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-[#E6E6E1]/80">
                    <Check size={16} className="text-[#E6E6E1]" />
                    {item}
                  </li>
                ))}
              </ul>
              <MagneticButton
                onClick={() => openInquiry('core', 'Learn more')}
                className="w-full bg-[#E6E6E1] text-black px-6 py-4 font-bold justify-center"
              >
                Get in touch
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      {/* ONE FLUID MOTION */}
      <section className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <div className="font-mono text-xs uppercase tracking-widest text-[#E6E6E1]/40 mb-4">The Flow</div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
              One Fluid Motion
            </h2>
            <p className="text-xl text-[#E6E6E1]/70 font-medium max-w-3xl mx-auto">
              From screen specifications to look & feel reviews to final acceptance.
              We author. You edit. Each interaction takes less effort than the last.
            </p>
          </div>

          {/* The Flow Steps */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { num: "01", title: "Screen Specs", desc: "We draft complete screen specifications. You confirm or adjust. One tap." },
              { num: "02", title: "Look & Feel", desc: "Visual reviews with your preferences pre-applied. Familiar patterns, no surprises." },
              { num: "03", title: "Acceptance", desc: "Polished deliveries ready for sign-off. The hard work is done — you just approve." },
              { num: "04", title: "Iterate", desc: "Each review trains us. Next time, we're faster. Friction approaches zero." }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6 h-full hover:border-white/30 transition-colors">
                  <div className="font-mono text-3xl font-bold text-[#E6E6E1]/20 mb-4">{step.num}</div>
                  <h3 className="text-lg font-bold uppercase tracking-tight mb-3">{step.title}</h3>
                  <p className="text-sm text-[#E6E6E1]/60">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-[#E6E6E1]/20 text-2xl">→</div>
                )}
              </div>
            ))}
          </div>

          {/* The Experience Promise */}
          <div className="bg-gradient-to-br from-[#E6E6E1]/5 to-transparent border border-[#E6E6E1]/10 rounded-xl p-10 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="border-l-2 border-[#E6E6E1]/30 pl-6">
                  <p className="text-2xl text-[#E6E6E1]/90 italic font-medium leading-relaxed">
                    "Working with them felt like having a team that read my mind. I barely had to do anything."
                  </p>
                  <p className="text-[#E6E6E1]/40 text-sm mt-4">— The experience we're building toward</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check size={20} className="text-green-400 mt-0.5 shrink-0" />
                  <span className="text-[#E6E6E1]/70">Primary button is always "Looks Good (Next)"</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="text-green-400 mt-0.5 shrink-0" />
                  <span className="text-[#E6E6E1]/70">Your preferences pre-applied before you see it</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="text-green-400 mt-0.5 shrink-0" />
                  <span className="text-[#E6E6E1]/70">Continuation is effortless — you just confirm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE VISION */}
      <section className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-black/40 mb-4">The Vision</div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8">
                Make Them Love<br/>Their Job Again
              </h2>
              <p className="text-xl text-black/80 font-medium leading-relaxed mb-6">
                The Core is the foundation for a <strong className="text-black">Command Center</strong> that transforms how you work with us.
              </p>
              <p className="text-lg text-black/60 font-medium leading-relaxed mb-8">
                Not "good enough." Astonishment. Kill them with kindness until they can't ignore you. That's the bar.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Before", items: ['"Another vendor review"', '"This is draining"', '"I have to do this"'] },
                  { label: "After", items: ['"I look forward to this"', '"They read my mind"', '"I want to see what\'s next"'] }
                ].map((col, i) => (
                  <div key={i} className={`p-5 rounded-xl ${i === 0 ? 'bg-black/5' : 'bg-black text-[#E6E6E1]'}`}>
                    <div className="font-mono text-xs uppercase tracking-wider mb-3 opacity-60">{col.label}</div>
                    <ul className="space-y-2">
                      {col.items.map((item, j) => (
                        <li key={j} className={`text-sm italic ${i === 0 ? 'text-black/60' : 'text-[#E6E6E1]/80'}`}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="font-mono text-xs uppercase tracking-wider text-black/50">Available Now</span>
                </div>
                <ul className="space-y-3">
                  {["Real-time project dashboards", "Session visibility", "SLA-backed support", "Screen specification reviews", "Look & feel acceptance", "Delivery sign-off"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-black/80">
                      <Check size={16} className="text-black" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/60 border border-black/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-black/30"></div>
                  <span className="font-mono text-xs uppercase tracking-wider text-black/40">On the Horizon</span>
                </div>
                <ul className="space-y-3">
                  {["Preference learning system", "Multi-phase orchestration", "Security posture dashboards", "Automated validation chains", "One-tap approval workflows"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-black/50">
                      <Eye size={16} className="text-black/30" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={coreFAQs} />

      {/* PRODUCT LADDER */}
      <ProductLadderSection currentProduct="core" variant="journey" />
    </div>
  );
};

export default CorePage;
