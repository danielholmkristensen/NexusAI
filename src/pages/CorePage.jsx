import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, TrendingUp, Check, Shield, Clock, Activity, ChevronDown, MessageCircle, Zap, BarChart3, HeartPulse, Target } from 'lucide-react';
import { MagneticButton } from '../components/common';
import { ProductLadderSection, FAQSection } from '../components/sections';
import { PageMeta, BreadcrumbSchema } from '../components/seo';
import { useInquiry } from '../context/InquiryContext';

gsap.registerPlugin(ScrollTrigger);

const CorePage = () => {
  const pageRef = useRef(null);
  const { openInquiry } = useInquiry();
  const [expandedItem, setExpandedItem] = useState(null);

  const operateFAQs = [
    { q: "What is the Command Center?", a: "Your cockpit for everything we've built together. Real-time visibility into system health, ROI tracking, and operational metrics. Different stakeholders see different signals — but everyone sees what matters to them." },
    { q: "Do we need Operate after Build?", a: "Optional but powerful. Without Operate, you take over maintenance. With Operate, you get SLA-backed support, continuous optimization, and the ability to spin up new implementations without re-onboarding." },
    { q: "How does it work for our CFO?", a: "Henrik sees quarterly ROI dashboards, cost-per-feature metrics, and investment tracking. No technical jargon — just business outcomes mapped to dollars spent." },
    { q: "How does it work for Operations?", a: "Hugo sees system health, uptime metrics, maintenance logs, and security posture. Real-time status, historical trends, and one-tap support requests." },
    { q: "What's included in the subscription?", a: "Dashboard access for all stakeholders, SLA-backed response times, proactive monitoring, security patches, performance optimization, and priority access for new Build implementations." },
    { q: "Can we add new features through Operate?", a: "Yes — that's a key benefit. Your organizational context is preserved, so new Build implementations start faster and integrate seamlessly with existing systems." }
  ];

  // The cast for Operate phase (icon badges, no color)
  const operateCast = [
    {
      initials: "HC",
      role: "Your CFO",
      title: "Sponsor",
      icon: TrendingUp,
      signal: "ROI on track",
      view: "Quarterly business outcomes"
    },
    {
      initials: "HO",
      role: "Your Ops Lead",
      title: "Operations",
      icon: Activity,
      signal: "99.9% uptime",
      view: "System health & maintenance"
    },
    {
      initials: "SL",
      role: "Your Product Owner",
      title: "Product",
      icon: Target,
      signal: "12 features this quarter",
      view: "Continuous improvement backlog"
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.hero-anim',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.08, ease: 'power3.out', delay: 0.2 }
      );

      gsap.fromTo('.quarter-card',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '#henrik-section', start: 'top 70%' }
        }
      );

      gsap.fromTo('.ops-stat',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'back.out(1.4)',
          scrollTrigger: { trigger: '#hugo-section', start: 'top 70%' }
        }
      );

      gsap.fromTo('.cast-card',
        { x: -20, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '#stakeholders-section', start: 'top 70%' }
        }
      );

      // Continuous pulse for live indicators
      gsap.to('.live-pulse', {
        scale: 1.5,
        opacity: 0.3,
        duration: 1.2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <PageMeta
        title="Operate — Command Center | Where ROI Becomes Visible"
        description="Your cockpit for everything we've built. Henrik sees ROI. Hugo sees uptime. Everyone sees proof it worked. SLA-backed support and continuous improvement."
        path="/operate"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Operate', path: '/operate' }
      ]} />

      {/* HERO - Henrik's Quarterly Review */}
      <section className="relative min-h-[100dvh] w-full flex items-end pb-24 px-6 md:px-16 overflow-hidden bg-[#111] text-[#E6E6E1]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8B5CF6]/5 rounded-full blur-[200px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl">
          <div className="hero-anim flex items-center gap-3 mb-6">
            <TrendingUp size={20} className="text-[#A78BFA]" />
            <span className="font-mono text-sm uppercase tracking-widest text-[#E6E6E1]/50">
              Henrik's quarterly review
            </span>
          </div>

          <h1 className="hero-anim text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-6">
            "Show me the<br/>
            <span className="text-[#A78BFA]">ROI."</span>
          </h1>

          <p className="hero-anim text-xl md:text-2xl text-[#E6E6E1]/80 max-w-3xl mb-4 font-medium leading-snug">
            Henrik opens the Command Center.
            <br/><strong className="text-[#E6E6E1]">12 features shipped.</strong> 62% below benchmark. 99.9% uptime. Zero escalations.
          </p>

          <p className="hero-anim text-lg text-[#E6E6E1]/50 max-w-2xl mb-12 font-medium">
            This is what "it worked" looks like when the CFO can see it.
          </p>

          <div className="hero-anim flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <MagneticButton
              onClick={() => openInquiry('operate', 'See the Command Center')}
              className="bg-[#E6E6E1] text-black px-8 py-5 text-lg font-bold flex items-center gap-2 hover:bg-white"
            >
              See the Command Center <ArrowUpRight size={20} />
            </MagneticButton>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#E6E6E1]/60 border-l-2 border-[#E6E6E1]/20 pl-4 py-1">
              SLA-backed<br/>Annual subscription
            </span>
          </div>
        </div>
      </section>

      {/* HENRIK'S VIEW - The ROI Dashboard */}
      <section id="henrik-section" className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="font-mono text-sm uppercase tracking-widest text-black/50 mb-4">The Henrik View</p>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
              "The board wanted proof.<br/>I showed them this."
            </h2>
            <p className="text-xl text-black/70 font-medium leading-relaxed">
              Henrik doesn't care about sprint velocity or test coverage. He cares about business outcomes.
              The Command Center speaks his language: features shipped, cost per feature, time to value.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="quarter-card bg-white rounded-xl p-6 border-2 border-black/5 text-center">
              <div className="text-5xl font-black text-[#10B981] mb-2">12</div>
              <div className="font-bold uppercase tracking-tight text-sm mb-1">Features Shipped</div>
              <p className="text-xs text-black/50">A feature a week</p>
            </div>
            <div className="quarter-card bg-white rounded-xl p-6 border-2 border-black/5 text-center">
              <div className="text-5xl font-black text-green-600 mb-2">62%</div>
              <div className="font-bold uppercase tracking-tight text-sm mb-1">Below Benchmark</div>
              <p className="text-xs text-black/50">Cost per feature</p>
            </div>
            <div className="quarter-card bg-white rounded-xl p-6 border-2 border-black/5 text-center">
              <div className="text-5xl font-black text-black mb-2">3</div>
              <div className="font-bold uppercase tracking-tight text-sm mb-1">Weeks Average</div>
              <p className="text-xs text-black/50">Idea to production</p>
            </div>
            <div className="quarter-card bg-white rounded-xl p-6 border-2 border-black/5 text-center">
              <div className="text-5xl font-black text-black mb-2">0</div>
              <div className="font-bold uppercase tracking-tight text-sm mb-1">Escalations</div>
              <p className="text-xs text-black/50">This quarter</p>
            </div>
          </div>

          <div className="bg-black text-[#E6E6E1] rounded-xl p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-mono text-sm font-bold mb-1">HC</div>
                    <TrendingUp size={12} className="text-[#E6E6E1]/40" />
                  </div>
                  <div>
                    <div className="font-bold">Your CFO</div>
                    <div className="text-sm text-[#E6E6E1]/50">Sponsor</div>
                  </div>
                </div>
                <p className="text-xl text-[#E6E6E1]/80 leading-relaxed mb-4">
                  "I don't need to understand how agents work. I need to see that the investment is paying off.
                  The Command Center shows me exactly that — in language I can present to the board."
                </p>
                <div className="flex items-center gap-2 text-[#A78BFA]">
                  <BarChart3 size={16} />
                  <span className="text-sm font-medium">Quarterly ROI dashboard</span>
                </div>
              </div>
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-white/10">
                <div className="font-mono text-xs text-[#E6E6E1]/50 uppercase mb-4">CFO Dashboard</div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#E6E6E1]/60">Features delivered</span>
                    <span className="font-bold">12</span>
                  </div>
                  <div className="border-t border-white/10 pt-3 mt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#E6E6E1]/60">vs. Industry benchmark</span>
                      <span className="font-bold text-green-400">-62%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HUGO'S VIEW - Operations Dashboard */}
      <section id="hugo-section" className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="font-mono text-sm uppercase tracking-widest text-[#E6E6E1]/50 mb-4">The Hugo View</p>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
              "Everything's green.<br/>That's all I need to know."
            </h2>
            <p className="text-xl text-[#E6E6E1]/70 font-medium leading-relaxed">
              Hugo's job is keeping systems running. The Command Center gives him real-time health,
              maintenance logs, and one-tap support requests. No surprises. Just peace of mind.
            </p>
          </div>

          {/* Operations Dashboard Demo */}
          <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/10">
            <div className="bg-black px-6 py-3 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-4">
                <span className="font-bold text-sm">{'>>'} COMMAND CENTER</span>
                <span className="text-xs text-[#E6E6E1]/40">|</span>
                <span className="text-xs text-[#E6E6E1]/50">Operations View</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="live-pulse absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs text-green-400">All Systems Nominal</span>
              </div>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="ops-stat bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center">
                  <HeartPulse size={24} className="text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-400">99.9%</div>
                  <div className="text-xs text-[#E6E6E1]/50">Uptime (30d)</div>
                </div>
                <div className="ops-stat bg-[#222] rounded-xl p-4 text-center">
                  <Activity size={24} className="text-[#E6E6E1]/60 mx-auto mb-2" />
                  <div className="text-2xl font-bold">142ms</div>
                  <div className="text-xs text-[#E6E6E1]/50">Avg Response</div>
                </div>
                <div className="ops-stat bg-[#222] rounded-xl p-4 text-center">
                  <Shield size={24} className="text-[#E6E6E1]/60 mx-auto mb-2" />
                  <div className="text-2xl font-bold">A+</div>
                  <div className="text-xs text-[#E6E6E1]/50">Security Score</div>
                </div>
                <div className="ops-stat bg-[#222] rounded-xl p-4 text-center">
                  <Clock size={24} className="text-[#E6E6E1]/60 mx-auto mb-2" />
                  <div className="text-2xl font-bold">47d</div>
                  <div className="text-xs text-[#E6E6E1]/50">Since Last Incident</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#222] rounded-xl p-6">
                  <h4 className="font-bold text-sm mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    System Health
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {['API', 'Database', 'Auth', 'CDN', 'Queue', 'Cache'].map((sys) => (
                      <div key={sys} className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span className="text-[#E6E6E1]/70">{sys}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#222] rounded-xl p-6">
                  <h4 className="font-bold text-sm mb-4">Recent Maintenance</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Check size={14} className="text-green-400" />
                      <span className="text-[#E6E6E1]/70">Security patch v2.4.1</span>
                      <span className="text-xs text-[#E6E6E1]/40 ml-auto">2d ago</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check size={14} className="text-green-400" />
                      <span className="text-[#E6E6E1]/70">Performance optimization</span>
                      <span className="text-xs text-[#E6E6E1]/40 ml-auto">1w ago</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check size={14} className="text-green-400" />
                      <span className="text-[#E6E6E1]/70">Database backup verified</span>
                      <span className="text-xs text-[#E6E6E1]/40 ml-auto">Today</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-[#E6E6E1]/50 text-sm italic">
              "Green means I can focus on what's next, not what's broken."
            </p>
          </div>
        </div>
      </section>

      {/* EVERYONE'S VIEW - Stakeholder Sections */}
      <section id="stakeholders-section" className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="font-mono text-sm uppercase tracking-widest text-black/50 mb-4">The Operate Ensemble</p>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
              Different roles.<br/>Same source of truth.
            </h2>
            <p className="text-xl text-black/70 font-medium">
              The Command Center adapts to who's looking. Your CFO sees business outcomes.
              Your Ops Lead sees system health. Your Product Owner sees the improvement backlog. Everyone sees what they need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {operateCast.map((person, i) => (
              <div key={i} className="cast-card bg-white rounded-xl p-8 border-2 border-black/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-[#E6E6E1] font-mono text-sm font-bold mb-1">
                      {person.initials}
                    </div>
                    <person.icon size={12} className="text-black/40" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">{person.role}</div>
                    <div className="text-sm text-black/50">{person.title}</div>
                  </div>
                </div>

                <div className="bg-black/5 rounded-lg px-4 py-3 mb-4">
                  <div className="font-mono text-xs text-black/50 uppercase mb-1">Signal</div>
                  <div className="font-medium text-black">{person.signal}</div>
                </div>

                <p className="text-black/60 text-sm">{person.view}</p>
              </div>
            ))}
          </div>

          <div className="bg-black text-[#E6E6E1] rounded-xl p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">The paradigm continues.</h3>
                <p className="text-[#E6E6E1]/70 leading-relaxed mb-4">
                  In Discover, agents interviewed. In Build, agents authored code.
                  In Operate, agents monitor, optimize, and maintain.
                  <strong className="text-[#E6E6E1]"> The pattern never changes: we author, you edit.</strong>
                </p>
                <p className="text-[#E6E6E1]/50">
                  Every security patch, every performance improvement, every maintenance task —
                  prepared by agents, approved by you.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <Zap size={48} className="text-[#A78BFA] mx-auto mb-4" />
                  <div className="text-2xl font-bold">Agents maintain.</div>
                  <div className="text-lg text-[#E6E6E1]/60">Humans approve.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE FULL JOURNEY */}
      <section className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-mono text-sm uppercase tracking-widest text-[#E6E6E1]/50 mb-4">The Complete Journey</p>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
              Discover → Build → Operate
            </h2>
            <p className="text-xl text-[#E6E6E1]/70 max-w-2xl mx-auto font-medium">
              From first conversation to ongoing excellence. Each phase builds on the last.
              Context compounds. Friction decreases. Value accumulates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-8">
              <div className="font-mono text-xs uppercase tracking-widest text-[#E6E6E1]/50 mb-4">Phase 1</div>
              <h3 className="text-2xl font-bold mb-4">Discover</h3>
              <p className="text-[#E6E6E1]/60 mb-6">
                Echo interviews your stakeholders. Goals lock. Personas map. Everyone aligns on what to build.
              </p>
              <div className="flex items-center gap-2 text-[#E6E6E1]/40">
                <Check size={16} />
                <span className="text-sm">Requirements crystallized</span>
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-8">
              <div className="font-mono text-xs uppercase tracking-widest text-[#E6E6E1]/50 mb-4">Phase 2</div>
              <h3 className="text-2xl font-bold mb-4">Build</h3>
              <p className="text-[#E6E6E1]/60 mb-6">
                Agents author code overnight. Sara approves screens each morning. Christian validates architecture. Ship weekly.
              </p>
              <div className="flex items-center gap-2 text-[#E6E6E1]/40">
                <Check size={16} />
                <span className="text-sm">Production-grade delivery</span>
              </div>
            </div>

            <div className="bg-[#10B981]/10 border border-[#10B981]/30 rounded-xl p-8">
              <div className="font-mono text-xs uppercase tracking-widest text-[#10B981] mb-4">Phase 3</div>
              <h3 className="text-2xl font-bold text-[#10B981] mb-4">Operate</h3>
              <p className="text-[#E6E6E1]/60 mb-6">
                Your CFO sees ROI. Your Ops lead sees uptime. Your Product Owner plans what's next. The system learns your preferences.
              </p>
              <div className="flex items-center gap-2 text-[#10B981]">
                <Zap size={16} />
                <span className="text-sm">Continuous improvement</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#E6E6E1]/50 mb-6">
              Each phase makes the next one smoother. Context compounds. Friction approaches zero.
            </p>
            <MagneticButton
              onClick={() => openInquiry('operate', 'Start the journey')}
              className="bg-[#E6E6E1] text-black px-8 py-4 text-lg font-bold"
            >
              Start with Discover <ArrowUpRight size={18} />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* ONE TIER */}
      <section className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-sm uppercase tracking-widest text-black/50 mb-4">Service Level</p>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
                One tier.<br/>High standards for all.
              </h2>
              <p className="text-xl font-medium text-black/70 mb-6 leading-relaxed">
                No tiers to navigate. No feature gates. You get a highly responsive feedback loop
                and a team that works closely with you.
              </p>
              <p className="text-lg text-black/60 font-medium">
                That's the advantage of a small team — tight feedback loops, fast responses, real partnership.
              </p>
            </div>

            <div className="bg-black text-[#E6E6E1] rounded-xl p-10 md:p-12">
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { value: "Same Day", label: "Response Time" },
                  { value: "Direct", label: "Escalation Path" },
                  { value: "Weekly", label: "Sync Cadence" },
                  { value: "24/7", label: "Dashboard Access" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-4 text-center">
                    <div className="font-mono text-xl font-bold mb-1">{stat.value}</div>
                    <div className="text-xs text-[#E6E6E1]/40 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>

              <MagneticButton
                onClick={() => openInquiry('operate', 'Discuss Operate')}
                className="bg-[#E6E6E1] text-black px-8 py-4 text-lg font-bold w-full justify-center"
              >
                Discuss Operate <ArrowUpRight size={18} />
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      {/* THE VISION */}
      <section className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-mono text-xs uppercase tracking-widest text-[#E6E6E1]/40 mb-4">Where We're Going</div>
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-8">
            A system that learns you.
          </h2>
          <p className="text-xl text-[#E6E6E1]/70 font-medium leading-relaxed mb-12">
            Each interaction trains us. Your preferences get pre-applied. Friction approaches zero over time.
            The more we work together, the less effort each review takes.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#E6E6E1]/50">Now</span>
              </div>
              <ul className="space-y-2 text-sm text-[#E6E6E1]/70">
                <li>• ROI dashboards for sponsors</li>
                <li>• System health for operations</li>
                <li>• Backlog views for product</li>
                <li>• SLA-backed support</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#E6E6E1]/30"></div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#E6E6E1]/50">Coming</span>
              </div>
              <ul className="space-y-2 text-sm text-[#E6E6E1]/50">
                <li>• Preference learning</li>
                <li>• Predictive maintenance</li>
                <li>• Multi-phase orchestration</li>
                <li>• Industry benchmarking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={operateFAQs} />

      {/* PRODUCT LADDER */}
      <ProductLadderSection currentProduct="operate" variant="journey" />
    </div>
  );
};

export default CorePage;
