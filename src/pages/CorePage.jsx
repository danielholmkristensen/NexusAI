import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Monitor, Check, Eye } from 'lucide-react';
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
          y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: '.feature-card', start: 'top 80%' }
        }
      );

      // Morning demo animations
      gsap.fromTo('.morning-card',
        { x: -30, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '#morning-demo', start: 'top 60%' }
        }
      );

      gsap.fromTo('.morning-stat',
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: '#morning-demo', start: 'top 50%' }
        }
      );

      // Continuous pulse for live indicator
      gsap.to('.morning-pulse', {
        scale: 1.5,
        opacity: 0.3,
        duration: 1.2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
      });

      // Operations demo animations
      gsap.fromTo('.ops-card',
        { x: -20, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '#ops-demo', start: 'top 60%' }
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
            Working with us should feel like nothing you've experienced before. <strong className="text-[#E6E6E1]">Effortless. Transparent. Delightful.</strong>
          </p>
          <p className="hero-anim text-lg text-[#E6E6E1]/60 max-w-2xl mb-12 font-medium">
            We author. You edit. Real-time visibility. One-tap approvals. The more we work together, the less effort each interaction takes.
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

      {/* PHASE 1: DEVELOPMENT — PRODUCT OWNER MORNING VIEW */}
      <section id="morning-demo" className="py-24 px-6 md:px-16 bg-[#E6E6E1] overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <div className="font-mono text-xs uppercase tracking-widest text-black/40 mb-4">During Development</div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-black mb-6">
              Your Morning View
            </h2>
            <p className="text-xl text-black/70 font-medium max-w-2xl mx-auto">
              Open your dashboard. See what needs your attention. Three taps, done.
            </p>
          </div>

          {/* Command Center Demo - Development Phase */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-2xl border border-black/10">
              {/* Nav Bar */}
              <div className="bg-black text-[#E6E6E1] px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="font-bold text-sm">{'>>'} COMMAND CENTER</span>
                  <span className="text-xs text-[#E6E6E1]/40">|</span>
                  <span className="text-xs text-[#E6E6E1]/50">Development Phase</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-1">
                    <span className="text-xs text-[#E6E6E1]/50">View:</span>
                    <span className="text-xs font-medium">Product Owner</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs text-green-400">Live</span>
                  </div>
                </div>
              </div>

              {/* Welcome Banner */}
              <div className="px-6 py-4 bg-gradient-to-r from-black/[0.03] to-transparent border-b border-black/5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-semibold text-black">Good morning, Product Owner</span>
                    <p className="text-sm text-black/50 mt-0.5">3 items need your attention today</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-black/40 font-mono">Week 6 of 8</span>
                    <div className="h-1.5 w-32 bg-black/10 rounded-full mt-1.5 overflow-hidden">
                      <div className="h-full bg-black rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 grid lg:grid-cols-3 gap-6">
                {/* Left: Feedback Queue */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="bg-white rounded-xl border border-black/10 overflow-hidden">
                    <div className="px-4 py-3 border-b border-black/5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-sm">Feedback Queue</h4>
                        <span className="text-xs text-black/40">Your reviews</span>
                      </div>
                      <span className="px-2 py-0.5 bg-black text-[#E6E6E1] text-xs rounded-full font-bold">3 pending</span>
                    </div>

                    <div className="divide-y divide-black/5">
                      {/* Feedback Item 1 - HIGH PRIORITY */}
                      <div className="morning-card p-4 border-l-4 border-amber-500 hover:bg-black/[0.02] transition-colors cursor-pointer group">
                        <div className="flex items-start gap-4">
                          <div className="relative">
                            <span className="w-8 h-8 bg-black/5 text-black text-xs font-bold rounded flex items-center justify-center shrink-0">A1</span>
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-500 rounded-full"></span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium text-sm">Dashboard Filters</span>
                              <span className="px-1.5 py-0.5 bg-amber-500/10 text-amber-700 text-[10px] rounded font-medium">Blocking</span>
                              <span className="text-xs text-black/40">10 min ago</span>
                            </div>
                            <p className="text-sm text-black/70">"Priority filter added as requested. Sort by urgency enabled."</p>
                            <div className="text-xs text-black/40 mt-1">Your preferences pre-applied • <span className="text-amber-600">Blocks 2 other items</span></div>
                          </div>
                          <button className="px-3 py-1.5 rounded-lg bg-green-500 text-white font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Looks Good →
                          </button>
                        </div>
                      </div>

                      {/* Feedback Item 2 */}
                      <div className="morning-card p-4 border-l-4 border-purple-500 hover:bg-black/[0.02] transition-colors cursor-pointer group">
                        <div className="flex items-start gap-4">
                          <span className="w-8 h-8 bg-black/5 text-black text-xs font-bold rounded flex items-center justify-center shrink-0">B4</span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium text-sm">Invoice Module</span>
                              <span className="px-1.5 py-0.5 bg-purple-500/10 text-purple-600 text-[10px] rounded font-medium">Look & Feel</span>
                              <span className="text-xs text-black/40">2 hrs ago</span>
                            </div>
                            <p className="text-sm text-black/70">"Colour scheme aligned with your brand guidelines."</p>
                            <div className="text-xs text-black/40 mt-1">Based on your previous approvals</div>
                          </div>
                          <button className="px-3 py-1.5 rounded-lg bg-green-500 text-white font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Looks Good →
                          </button>
                        </div>
                      </div>

                      {/* Feedback Item 3 - READY FOR SIGN-OFF */}
                      <div className="morning-card p-4 border-l-4 border-green-500 hover:bg-black/[0.02] transition-colors cursor-pointer group">
                        <div className="flex items-start gap-4">
                          <div className="relative">
                            <span className="w-8 h-8 bg-black/5 text-black text-xs font-bold rounded flex items-center justify-center shrink-0">D2</span>
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium text-sm">Reporting Feature</span>
                              <span className="px-1.5 py-0.5 bg-green-500/10 text-green-600 text-[10px] rounded font-medium">Ready</span>
                              <span className="text-xs text-black/40">1 day ago</span>
                            </div>
                            <p className="text-sm text-black/70">"Feature complete. 94% test coverage. Ready for sign-off."</p>
                            <div className="text-xs text-black/40 mt-1">All acceptance criteria met</div>
                          </div>
                          <button className="px-3 py-1.5 rounded-lg bg-green-500 text-white font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Accept →
                          </button>
                        </div>
                      </div>

                      {/* Resolved Item */}
                      <div className="p-4 bg-black/[0.02]">
                        <div className="flex items-start gap-4">
                          <span className="w-8 h-8 bg-green-100 text-green-700 text-xs font-bold rounded flex items-center justify-center shrink-0">C1</span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium text-sm text-black/50">API Integration</span>
                              <span className="text-xs text-black/30">2 days ago</span>
                            </div>
                            <p className="text-sm text-black/50">"Endpoint validation added per your feedback."</p>
                            <div className="flex items-center gap-2 mt-2">
                              <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded font-medium">Resolved</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Stats & Activity */}
                <div className="space-y-4">
                  {/* Sprint Progress */}
                  <div className="bg-white rounded-xl border border-black/10 p-4">
                    <h4 className="font-semibold text-sm mb-4">Sprint Progress</h4>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-black">12</div>
                        <div className="text-[10px] text-black/40 uppercase">Features</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">3</div>
                        <div className="text-[10px] text-black/40 uppercase">In Review</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">9</div>
                        <div className="text-[10px] text-black/40 uppercase">Accepted</div>
                      </div>
                    </div>
                    <div className="h-2 bg-black/10 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>

                  {/* Activity Feed */}
                  <div className="bg-white rounded-xl border border-black/10 overflow-hidden">
                    <div className="px-4 py-3 border-b border-black/5 flex items-center justify-between">
                      <h4 className="font-semibold text-sm">Activity Feed</h4>
                      <div className="flex items-center gap-1">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-[10px] text-green-600">Live</span>
                      </div>
                    </div>
                    <div className="divide-y divide-black/5 text-xs">
                      {[
                        { time: "10:34", type: "feedback", text: "New spec ready for review" },
                        { time: "10:32", type: "code", text: "Dashboard filters implemented" },
                        { time: "10:28", type: "test", text: "287 tests passing (100%)" },
                        { time: "09:45", type: "approved", text: "Invoice module approved" }
                      ].map((item, i) => (
                        <div key={i} className="morning-stat px-4 py-2 flex items-center gap-3">
                          <span className="text-black/30 w-10 font-mono">{item.time}</span>
                          <span className={`px-1.5 py-0.5 rounded text-[9px] font-medium ${
                            item.type === 'feedback' ? 'bg-blue-100 text-blue-700' :
                            item.type === 'approved' ? 'bg-green-100 text-green-700' :
                            item.type === 'test' ? 'bg-purple-100 text-purple-700' :
                            'bg-black/5 text-black/60'
                          }`}>{item.type}</span>
                          <span className="text-black/70 truncate">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="bg-black text-[#E6E6E1] rounded-xl p-4">
                    <div className="text-[10px] uppercase tracking-wider text-[#E6E6E1]/50 mb-1">Avg Response</div>
                    <div className="text-3xl font-bold">1.5 hrs</div>
                    <div className="text-xs text-[#E6E6E1]/50 mt-1">Same-day turnaround</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Caption */}
            <div className="text-center mt-8">
              <p className="text-black/50 text-sm italic">
                "Three taps. Done before your coffee gets cold."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BRIDGE: HANDOVER TO OPERATIONS */}
      <section className="py-16 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#E6E6E1]/20"></div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#E6E6E1]/40">Then</div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#E6E6E1]/20"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-6">
            Handover to Operations
          </h2>
          <p className="text-xl text-[#E6E6E1]/60 font-medium max-w-2xl mx-auto">
            Development complete. Your software is live. Now it's about keeping the lights on — and that should be just as effortless.
          </p>
        </div>
      </section>

      {/* PHASE 2: OPERATIONS — KEEPING THE LIGHTS ON */}
      <section id="ops-demo" className="py-24 px-6 md:px-16 bg-[#E6E6E1] overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <div className="font-mono text-xs uppercase tracking-widest text-black/40 mb-4">During Operations</div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-black mb-6">
              Keeping the Lights On
            </h2>
            <p className="text-xl text-black/70 font-medium max-w-2xl mx-auto">
              Fun and frictionless. Your operational dashboard — peace of mind at a glance.
            </p>
          </div>

          {/* Command Center Demo - Operations Phase */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-2xl border border-black/10">
              {/* Nav Bar */}
              <div className="bg-black text-[#E6E6E1] px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="font-bold text-sm">{'>>'} COMMAND CENTER</span>
                  <span className="text-xs text-[#E6E6E1]/40">|</span>
                  <span className="text-xs text-[#E6E6E1]/50">Operations</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-1">
                    <span className="text-xs text-[#E6E6E1]/50">View:</span>
                    <span className="text-xs font-medium">Operations</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <span className="relative flex h-2 w-2">
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs text-green-400">All Systems Nominal</span>
                  </div>
                </div>
              </div>

              {/* Welcome Banner - Operations */}
              <div className="px-6 py-4 bg-gradient-to-r from-green-500/5 to-transparent border-b border-black/5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-semibold text-black">Good morning, Operations</span>
                    <p className="text-sm text-black/50 mt-0.5">Everything running smoothly. 0 issues.</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-center px-4 py-2 bg-green-500/10 rounded-lg">
                      <span className="text-xs text-green-700 font-medium">99.9% uptime</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 grid lg:grid-cols-3 gap-6">
                {/* Left: System Status */}
                <div className="lg:col-span-2 space-y-4">
                  {/* Health Overview */}
                  <div className="bg-white rounded-xl border border-black/10 overflow-hidden">
                    <div className="px-4 py-3 border-b border-black/5 flex items-center justify-between">
                      <h4 className="font-semibold text-sm">System Health</h4>
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-bold">Healthy</span>
                    </div>
                    <div className="p-4 grid grid-cols-4 gap-4">
                      {[
                        { label: "API", status: "operational" },
                        { label: "Database", status: "operational" },
                        { label: "Auth", status: "operational" },
                        { label: "CDN", status: "operational" }
                      ].map((sys, i) => (
                        <div key={i} className="ops-card text-center p-3 bg-green-50 rounded-lg">
                          <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
                          <span className="text-xs font-medium text-black/70">{sys.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Activity - Operations Focus */}
                  <div className="bg-white rounded-xl border border-black/10 overflow-hidden">
                    <div className="px-4 py-3 border-b border-black/5">
                      <h4 className="font-semibold text-sm">Maintenance Log</h4>
                    </div>
                    <div className="divide-y divide-black/5">
                      <div className="ops-card p-4 flex items-center gap-4">
                        <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                          <Check size={14} className="text-green-700" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">Security patch applied</span>
                            <span className="text-xs text-black/40">2 days ago</span>
                          </div>
                          <p className="text-sm text-black/50">v2.4.1 — No downtime required</p>
                        </div>
                      </div>
                      <div className="ops-card p-4 flex items-center gap-4">
                        <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                          <Monitor size={14} className="text-blue-700" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">Performance optimization</span>
                            <span className="text-xs text-black/40">1 week ago</span>
                          </div>
                          <p className="text-sm text-black/50">API response time improved 23%</p>
                        </div>
                      </div>
                      <div className="ops-card p-4 flex items-center gap-4">
                        <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                          <Check size={14} className="text-green-700" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">Database backup verified</span>
                            <span className="text-xs text-black/40">Today, 03:00</span>
                          </div>
                          <p className="text-sm text-black/50">Automated • Next backup in 21 hours</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Ops Stats */}
                <div className="space-y-4">
                  {/* Uptime */}
                  <div className="bg-white rounded-xl border border-black/10 p-4">
                    <h4 className="font-semibold text-sm mb-4">Uptime (30 days)</h4>
                    <div className="text-center mb-4">
                      <div className="text-4xl font-bold text-green-600">99.9%</div>
                      <div className="text-xs text-black/40 mt-1">2 min total downtime</div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(30)].map((_, i) => (
                        <div key={i} className={`flex-1 h-6 rounded-sm ${i === 14 ? 'bg-amber-400' : 'bg-green-500'}`}></div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-white rounded-xl border border-black/10 p-4">
                    <h4 className="font-semibold text-sm mb-3">Quick Actions</h4>
                    <div className="space-y-2">
                      <button className="ops-card w-full px-3 py-2 text-left text-sm bg-black/5 hover:bg-black/10 rounded-lg transition-colors">
                        Request support ticket
                      </button>
                      <button className="ops-card w-full px-3 py-2 text-left text-sm bg-black/5 hover:bg-black/10 rounded-lg transition-colors">
                        Schedule maintenance window
                      </button>
                      <button className="ops-card w-full px-3 py-2 text-left text-sm bg-black/5 hover:bg-black/10 rounded-lg transition-colors">
                        Download monthly report
                      </button>
                    </div>
                  </div>

                  {/* SLA Status */}
                  <div className="bg-black text-[#E6E6E1] rounded-xl p-4">
                    <div className="text-[10px] uppercase tracking-wider text-[#E6E6E1]/50 mb-1">SLA Status</div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-lg font-bold">All commitments met</span>
                    </div>
                    <div className="text-xs text-[#E6E6E1]/50 mt-2">Last incident: 47 days ago</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Caption */}
            <div className="text-center mt-8">
              <p className="text-black/50 text-sm italic">
                "Peace of mind. At a glance."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE DIFFERENCE */}
      <section className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl mb-16">
            <div className="font-mono text-xs uppercase tracking-widest text-black/40 mb-4">The Difference</div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
              We Author. You Edit.
            </h2>
            <p className="text-xl text-black/70 font-medium leading-relaxed">
              Most vendors ask you to write requirements, manage timelines, chase updates. We flip that. You receive polished work. You confirm or adjust. That's it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Monitor,
                title: "Screen Specifications",
                desc: "We draft complete specs with your preferences pre-applied. You tap 'Looks Good' or mark adjustments."
              },
              {
                icon: Eye,
                title: "Look & Feel Reviews",
                desc: "Visual designs that match your brand and previous approvals. Familiar patterns, no surprises."
              },
              {
                icon: Check,
                title: "Delivery Acceptance",
                desc: "Polished features with test coverage and documentation. The hard work is done — you just approve."
              }
            ].map((item, i) => (
              <div key={i} className="feature-card bg-white rounded-xl p-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <item.icon size={32} className="text-black mb-4" />
                <h3 className="text-xl font-bold uppercase tracking-tight mb-3">{item.title}</h3>
                <p className="text-black/70 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* One Tier */}
          <div className="bg-black text-[#E6E6E1] rounded-2xl p-10 md:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-[#E6E6E1]/40 mb-4">Service Level</div>
                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-6">
                  One Tier. High Standards for All.
                </h3>
                <p className="text-lg text-[#E6E6E1]/70 font-medium leading-relaxed mb-6">
                  No tiers to navigate. No feature gates. With us, you get a highly responsive feedback loop and a team that works closely with you.
                </p>
                <p className="text-[#E6E6E1]/50 font-medium">
                  That's the advantage of a small team — tight feedback loops, fast responses, real partnership.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "Same Day", label: "Response Time" },
                  { value: "Direct", label: "Escalation Path" },
                  { value: "Weekly", label: "Sync Cadence" },
                  { value: "24/7", label: "Dashboard Access" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-6 text-center">
                    <div className="font-mono text-2xl font-bold text-[#E6E6E1] mb-1">{stat.value}</div>
                    <div className="text-xs text-[#E6E6E1]/40 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE VISION — BRIEF */}
      <section className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-mono text-xs uppercase tracking-widest text-[#E6E6E1]/40 mb-4">Where We're Going</div>
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-8">
            A System That Learns You
          </h2>
          <p className="text-xl text-[#E6E6E1]/70 font-medium leading-relaxed mb-12">
            Each interaction trains us. Your preferences get pre-applied. Friction approaches zero over time. The more we work together, the less effort each review takes.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#E6E6E1]/50">Now</span>
              </div>
              <ul className="space-y-2 text-sm text-[#E6E6E1]/70">
                <li>• Real-time dashboards</li>
                <li>• Screen spec reviews</li>
                <li>• Look & feel acceptance</li>
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
                <li>• One-tap approvals</li>
                <li>• Multi-phase orchestration</li>
                <li>• Security posture dashboards</li>
              </ul>
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
