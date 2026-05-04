import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ArrowRight, Check, Play, Target, TrendingUp, Code2, Layers, Activity } from 'lucide-react';
import { MagneticButton } from '../components/common';
import { PageMeta, OrganizationSchema, BreadcrumbSchema } from '../components/seo';
import { useInquiry } from '../context/InquiryContext';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const pageRef = useRef(null);
  const { openInquiry } = useInquiry();

  // The cast — stakeholders with role icons (no color, just shape + icon)
  const cast = [
    { name: "Sara", initials: "SL", role: "Product Owner", icon: Target, signal: "5 screens ready for review" },
    { name: "Henrik", initials: "HC", role: "CFO & Sponsor", icon: TrendingUp, signal: "ROI tracking on target" },
    { name: "Christian", initials: "CD", role: "Lead Developer", icon: Code2, signal: "Zero blocking issues" },
    { name: "Emma", initials: "EA", role: "Enterprise Architect", icon: Layers, signal: "Integration approved" },
    { name: "Hugo", initials: "HO", role: "Operations", icon: Activity, signal: "4 of 5 goals on track" }
  ];

  const socialProof = [
    "STARK Group",
    "TDC",
    "Telenor",
    "The Adecco Group",
    "Rabobank",
    "Philips",
    "DCSO",
    "Maersk"
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.hero-anim',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.4, stagger: 0.12, ease: 'power3.out', delay: 0.3 }
      );

      gsap.to('.scroll-indicator', {
        y: 8,
        duration: 1.5,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true,
        delay: 2
      });

      gsap.to('.scroll-indicator', {
        opacity: 0,
        duration: 0.4,
        scrollTrigger: {
          trigger: '#paradigm-section',
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      });

      gsap.fromTo('.paradigm-anim',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#paradigm-section',
            start: 'top 60%'
          }
        }
      );

      gsap.fromTo('.cast-card',
        { y: 20, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#cast-section',
            start: 'top 70%'
          }
        }
      );

      gsap.fromTo('.service-reveal',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.service-reveal',
            start: 'top 75%',
            toggleActions: 'play none none none'
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

      gsap.fromTo('.cta-reveal',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#cta-section',
            start: 'top 85%'
          }
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <PageMeta
        title="Agentic Agency — The operating system for AI-native enterprises"
        description="Agentic Studio and Command Center: where agents author and humans edit. The Agentic OS for enterprises to discover, build, and operate production-grade agentic systems."
        path="/"
      />
      <OrganizationSchema />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }]} />

      {/* HERO — THE PROMISE */}
      <section className="relative min-h-screen w-full flex flex-col justify-end px-6 md:px-16 pb-16 pt-28 overflow-hidden bg-[#E6E6E1]">
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>

        <div className="relative z-10 max-w-5xl">
          <div className="hero-anim font-mono text-base text-black/40 tracking-widest mb-6">{'>>'} AGENTIC OS</div>
          <h1 className="hero-anim text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.95] tracking-tight mb-8 text-black max-w-5xl">
            Agents author.<br/>
            Humans edit.<br/>
            <span className="text-black/40">Categories won.</span>
          </h1>
          <p className="hero-anim text-lg md:text-xl text-black/60 max-w-2xl mb-12 leading-relaxed">
            The operating system for AI-native enterprises. Your stakeholders review. Your agents deliver. Your category wins.
          </p>
          <div className="hero-anim flex items-center gap-6 flex-wrap">
            <MagneticButton
              onClick={() => openInquiry('general', 'Book a walkthrough')}
              className="bg-black text-[#E6E6E1] px-8 py-4 text-sm font-bold uppercase tracking-wider"
            >
              See it in action
            </MagneticButton>
            <a href="#cast" className="text-black/60 hover:text-black text-sm font-medium flex items-center gap-2 transition-colors">
              Meet the cast <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="scroll-indicator absolute bottom-8 right-8 z-10">
          <span className="text-xs uppercase tracking-widest text-black/35 writing-mode-vertical" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        </div>
      </section>

      {/* SOCIAL PROOF STRIP */}
      <div className="bg-black py-8 px-6 md:px-16">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="text-[11px] uppercase tracking-widest text-white/40 whitespace-nowrap">Team pedigree from</span>
          <div className="w-px h-4 bg-white/20"></div>
          <div className="flex items-center gap-8 flex-wrap">
            {socialProof.map((company) => (
              <span key={company} className="text-sm font-semibold uppercase tracking-wide text-white/55 hover:text-white/90 transition-colors whitespace-nowrap">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* THE PARADIGM SHIFT */}
      <section id="paradigm-section" className="py-32 md:py-40 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="paradigm-anim font-mono text-sm text-[#E6E6E1]/40 mb-4">THE OLD WAY</div>
              <h2 className="paradigm-anim text-3xl md:text-4xl font-bold uppercase leading-tight tracking-tight mb-6 text-[#E6E6E1]/40 line-through decoration-2">
                Humans author.<br/>AI assists.
              </h2>
              <p className="paradigm-anim text-lg text-[#E6E6E1]/40 mb-8">
                You write the spec. You manage the timeline. You chase updates. AI helps where you let it.
              </p>
            </div>
            <div className="lg:border-l lg:border-white/10 lg:pl-16">
              <div className="paradigm-anim font-mono text-sm text-[#E6E6E1]/70 mb-4">THE AGENTIC WAY</div>
              <h2 className="paradigm-anim text-3xl md:text-4xl font-bold uppercase leading-tight tracking-tight mb-6">
                Agents author.<br/>Humans edit.
              </h2>
              <p className="paradigm-anim text-lg text-[#E6E6E1]/70">
                Agents draft the spec. Agents propose the screens. Agents flag the blockers. <strong className="text-[#E6E6E1]">You approve, adjust, or redirect.</strong> Three taps. Done.
              </p>
            </div>
          </div>

          <div className="paradigm-anim mt-16 border-t border-white/10 pt-12">
            <p className="text-xl md:text-2xl font-medium text-center max-w-3xl mx-auto leading-relaxed">
              "The question isn't how fast can you code. <br/>It's <span className="text-white font-bold">how fast can you decide.</span>"
            </p>
          </div>
        </div>
      </section>

      {/* THE CAST — MEET YOUR TEAM */}
      <section id="cast" className="py-32 md:py-40 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="font-mono text-sm tracking-widest text-black/35 mb-4">MEET THE CAST</div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">Every stakeholder. One Agentic OS.</h2>
            <p className="text-lg text-black/60 max-w-2xl mx-auto">
              Your Product Owner sees their review queue. Your CFO sees the ROI dashboard. Your Architect sees the architecture gates. Everyone sees what matters to them — nothing more, nothing less.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {cast.map((person, i) => (
              <div key={person.name} className="cast-card bg-white rounded-xl p-6 border border-black/10 hover:border-black/30 hover:shadow-lg transition-all group">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-[#E6E6E1] font-mono text-sm font-bold mb-2 group-hover:scale-110 transition-transform">
                    {person.initials}
                  </div>
                  <person.icon size={14} className="text-black/40" />
                </div>
                <div className="text-lg font-bold text-black mb-1">{person.name}</div>
                <div className="text-xs text-black/50 uppercase tracking-wider mb-3">{person.role}</div>
                <div className="text-xs text-black/70 bg-black/5 rounded px-2 py-1">
                  {person.signal}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-black/50 italic">
              "Each stakeholder gets exactly what they need to make their decision. Agent authored. Human approved."
            </p>
          </div>
        </div>
      </section>

      {/* DISCOVER — AGENTIC STUDIO */}
      <section id="discover" className="py-24 md:py-32 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="service-reveal mb-12">
            <div className="font-mono text-sm tracking-widest text-black/35 mb-6 flex items-center gap-3">
              <span className="bg-black text-white px-2 py-1 rounded text-xs">01</span>
              <span className="text-black/50">AGENTIC STUDIO</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">Discover</h2>
            <p className="text-xl font-semibold text-black mb-4">Where Echo interviews your stakeholders.</p>
            <p className="text-black/65 leading-relaxed max-w-2xl">
              Before a single line of code, Echo — our AI interviewer — talks to Henrik about budget, Sara about features, and Christian about architecture. It captures what humans forget to ask, surfaces conflicts before they become blockers, and locks goals with numbers, not wishes.
            </p>
          </div>

          {/* Screenshot showcase */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Main screenshot */}
            <div className="screenshot-reveal">
              <div className="text-xs font-mono text-black/40 mb-2 flex items-center gap-2">
                <span className="text-green-600">Live:</span> Echo interviewing Henrik (CFO)
                <span className="text-black/30 ml-auto">01/05</span>
              </div>
              <div className="bg-black rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,0.15)]">
                <div className="bg-black/90 px-4 py-2 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <img src="/screenshots/01-discover-echo-henrik.png" alt="Echo interviewing Henrik" className="w-full" />
              </div>
              <p className="text-sm text-black/60 mt-3">Echo asks the hard questions: "What does success look like in 90 days? What's the budget if we don't hit it?"</p>
            </div>

            {/* Story beats */}
            <div className="space-y-6">
              <div className="border-l-4 border-black pl-6">
                <div className="text-base font-bold text-black mb-2">Goals with numbers</div>
                <p className="text-sm text-black/60">"Reduce fulfillment time 30%" not "improve operations." Agents need measurable targets.</p>
              </div>
              <div className="border-l-4 border-black pl-6">
                <div className="text-base font-bold text-black mb-2">Conflicts surfaced early</div>
                <p className="text-sm text-black/60">Henrik wants fast. Emma wants compliant. Echo flags it before it derails the build.</p>
              </div>
              <div className="border-l-4 border-black pl-6">
                <div className="text-base font-bold text-black mb-2">Locked scope, traced outcomes</div>
                <p className="text-sm text-black/60">Every goal gets a baseline, a target, and an owner. Nothing ships without knowing what success looks like.</p>
              </div>
            </div>
          </div>

          {/* Secondary screenshots grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="screenshot-reveal">
              <div className="text-xs font-mono text-black/40 mb-2">Charter goals locked <span className="text-black/30 ml-1">02/05</span></div>
              <div className="bg-black rounded-lg overflow-hidden">
                <img src="/screenshots/02-discover-charter-goals.png" alt="Charter goals" className="w-full" />
              </div>
              <p className="text-xs text-black/50 mt-2">Goals lock when all stakeholders align. Henrik signed off on budget. Sara confirmed features.</p>
            </div>
            <div className="screenshot-reveal">
              <div className="text-xs font-mono text-black/40 mb-2">Sara's persona-aware home <span className="text-black/30 ml-1">03/05</span></div>
              <div className="bg-black rounded-lg overflow-hidden">
                <img src="/screenshots/03-discover-home-sara.png" alt="Sara's home view" className="w-full" />
              </div>
              <p className="text-xs text-black/50 mt-2">Quality ring, attention queue, screens needing review. Henrik would see ROI metrics instead.</p>
            </div>
            <div className="screenshot-reveal">
              <div className="text-xs font-mono text-black/40 mb-2">Path comparison <span className="text-black/30 ml-1">04/05</span></div>
              <div className="bg-black rounded-lg overflow-hidden">
                <img src="/screenshots/04-discover-recommendation-paths.png" alt="Path comparison" className="w-full" />
              </div>
              <p className="text-xs text-black/50 mt-2">Four paths compared. Agent scored each on cost, time, fit, risk. Recommended path highlighted.</p>
            </div>
            <div className="screenshot-reveal">
              <div className="text-xs font-mono text-black/40 mb-2">Workflow analyzer <span className="text-black/30 ml-1">05/05</span></div>
              <div className="bg-black rounded-lg overflow-hidden">
                <img src="/screenshots/05-discover-workflow-analyzer.png" alt="Workflow analyzer" className="w-full" />
              </div>
              <p className="text-xs text-black/50 mt-2">9 workflows analyzed for agent fit. 71% automation potential. The agent did the analysis.</p>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-black/10 pt-8">
            <div>
              <p className="text-sm font-bold text-black uppercase tracking-wider">Building in public</p>
              <p className="text-xs text-black/50 mt-1">Early access available for design partners</p>
            </div>
            <Link to="/discover" className="text-sm font-bold text-black flex items-center gap-2 hover:gap-3 transition-all">
              Explore Discover <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* BUILD — AGENTIC STUDIO */}
      <section id="build" className="py-24 md:py-32 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-6xl mx-auto">
          <div className="service-reveal mb-12">
            <div className="font-mono text-sm tracking-widest text-[#E6E6E1]/35 mb-6 flex items-center gap-3">
              <span className="bg-white text-black px-2 py-1 rounded text-xs">02</span>
              <span className="text-[#E6E6E1]/50">AGENTIC STUDIO</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">Build</h2>
            <p className="text-xl font-semibold text-[#E6E6E1] mb-4">Sara's morning ritual: coffee, Command Center, three taps.</p>
            <p className="text-[#E6E6E1]/65 leading-relaxed max-w-2xl">
              Agents built 5 screens overnight. Sara reviews each in her queue. "Looks good" or "Adjust." No meetings. No status updates. Just decisions at the speed of thought.
            </p>
          </div>

          {/* Screenshot showcase */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Main screenshot - Sara's View */}
            <div className="screenshot-reveal">
              <div className="text-xs font-mono text-[#E6E6E1]/40 mb-2 flex items-center gap-2">
                <span className="text-green-400">Sara's View</span> — Product Owner
              </div>
              <div className="bg-[#111] rounded-xl overflow-hidden border border-white/10">
                <div className="bg-black/90 px-4 py-2 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <img src="/screenshots/06-build-home-sara.png" alt="Sara's build home view" className="w-full" />
              </div>
              <p className="text-sm text-[#E6E6E1]/50 mt-3">5 screens ready for review. 92% quality score. Iteration 3 of 4. Sara sees exactly what needs her attention.</p>
            </div>

            {/* Review Tab screenshot */}
            <div className="screenshot-reveal">
              <div className="text-xs font-mono text-[#E6E6E1]/40 mb-2 flex items-center gap-2">
                <span className="text-green-400">Review Tab</span> — Approvals
              </div>
              <div className="bg-[#111] rounded-xl overflow-hidden border border-white/10">
                <div className="bg-black/90 px-4 py-2 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <img src="/screenshots/07-build-review-screens.png" alt="Review tab with screens" className="w-full" />
              </div>
              <p className="text-sm text-[#E6E6E1]/50 mt-3">Every screen traced to a goal. Every approval tracked to a stakeholder. Christian's architecture gates auto-checked.</p>
            </div>
          </div>

          {/* The "Three Taps" moment */}
          <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10 mb-12">
            <div className="text-center mb-8">
              <div className="font-mono text-xs text-[#E6E6E1]/40 uppercase tracking-wider mb-2">The Daily Ritual</div>
              <h3 className="text-2xl md:text-3xl font-bold">Three taps. Done before the coffee gets cold.</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-mono font-bold">01</span>
                </div>
                <p className="text-sm text-[#E6E6E1]/70">Agent drafts the screen. Preferences pre-applied from Sara's history.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-mono font-bold">02</span>
                </div>
                <p className="text-sm text-[#E6E6E1]/70">Sara reviews. "Looks good" or "The button should be blue."</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check size={20} className="text-green-400" />
                </div>
                <p className="text-sm text-[#E6E6E1]/70">Done. Agent incorporates feedback. Next screen ready.</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/10 pt-8">
            <div>
              <p className="text-sm font-bold text-[#E6E6E1] uppercase tracking-wider">In early use</p>
              <p className="text-xs text-[#E6E6E1]/50 mt-1">Running on real client implementations</p>
            </div>
            <Link to="/build" className="text-sm font-bold text-[#E6E6E1] flex items-center gap-2 hover:gap-3 transition-all">
              Explore Build <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* OPERATE — COMMAND CENTER */}
      <section id="operate" className="py-24 md:py-32 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-6xl mx-auto">
          <div className="service-reveal mb-12">
            <div className="font-mono text-sm tracking-widest text-black/35 mb-6 flex items-center gap-3">
              <span className="bg-black text-white px-2 py-1 rounded text-xs">03</span>
              <span className="text-black/50">COMMAND CENTER</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">Operate</h2>
            <p className="text-xl font-semibold text-black mb-4">Henrik's quarterly review just got very short.</p>
            <p className="text-black/65 leading-relaxed max-w-2xl">
              Remember those goals Echo locked in Discover? Operate shows if they landed. Henrik opens his CFO dashboard: 4 of 5 goals on track. GOAL-01 promised 30% faster fulfillment. Current: 3.1 hours. 93% of target. One glance. Full accountability.
            </p>
          </div>

          {/* Screenshot showcase */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Goal Outcomes screenshot */}
            <div className="screenshot-reveal">
              <div className="text-xs font-mono text-black/40 mb-2 flex items-center gap-2">
                <span className="text-green-600">Goal Outcomes</span> — Live
              </div>
              <div className="bg-black rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,0.15)]">
                <div className="bg-black/90 px-4 py-2 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <img src="/screenshots/08-operate-outcomes.png" alt="Goal outcomes dashboard" className="w-full" />
              </div>
              <p className="text-sm text-black/60 mt-3">GOAL-01: "Reduce fulfillment time 30%". Baseline: 4.5 hours. Target: 3.15 hours. Current: 3.1 hours. 93% achieved.</p>
            </div>

            {/* CFO Dashboard screenshot */}
            <div className="screenshot-reveal">
              <div className="text-xs font-mono text-black/40 mb-2 flex items-center gap-2">
                <span className="text-green-600">Henrik's View</span> — CFO Dashboard
              </div>
              <div className="bg-black rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,0.15)]">
                <div className="bg-black/90 px-4 py-2 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <img src="/screenshots/10-operate-home-sponsor.png" alt="CFO dashboard" className="w-full" />
              </div>
              <p className="text-sm text-black/60 mt-3">ROI tracking, goal attainment, monthly run cost. One screen. Full picture. Board-ready.</p>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-black/10 pt-8">
            <div>
              <p className="text-sm font-bold text-black uppercase tracking-wider">In development</p>
              <p className="text-xs text-black/50 mt-1">Command Center design complete, engineering underway</p>
            </div>
            <Link to="/operate" className="text-sm font-bold text-black flex items-center gap-2 hover:gap-3 transition-all">
              Explore Operate <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* THE STORY — OPERATORS */}
      <section className="py-24 md:py-32 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-4xl mx-auto">
          <div className="font-mono text-sm text-[#E6E6E1]/40 mb-6 text-center">OUR STORY</div>
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8 text-center">
            Operators.
          </h2>
          <div className="space-y-6 text-lg text-[#E6E6E1]/70 leading-relaxed">
            <p>
              We spent years inside enterprise transformation programmes at STARK, TDC, Adecco, Maersk. We saw the gap: <strong className="text-[#E6E6E1]">AI that demos well but doesn't ship.</strong> Agents that generate code but don't understand architecture. Tools that promise autonomy but require constant nursing.
            </p>
            <p>
              So we stopped consulting and started building. The result is the <strong className="text-[#E6E6E1]">Agentic OS</strong> — the operating system for AI-native enterprises. Not another AI tool. An operating system where agents work in service of human decisions, not the other way around.
            </p>
            <p>
              <strong className="text-[#E6E6E1]">Agents author. Humans edit. Categories won.</strong>
            </p>
          </div>
          <div className="mt-12 text-center">
            <Link to="/about" className="inline-block text-sm font-bold uppercase tracking-wider text-[#E6E6E1] border border-white/30 rounded-full px-8 py-4 hover:border-white hover:bg-white hover:text-black transition-all">
              Meet the team <ArrowUpRight size={14} className="inline ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* WIN YOUR CATEGORY — THE STAKES */}
      <section className="py-24 md:py-32 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-8">
            Shape what agentic<br/>delivery looks like.
          </h2>
          <p className="text-xl text-black/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            We're building the Agentic OS in public. We need design partners who want to push the boundaries with us — and shape the methodology before it's set in stone.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-8 border border-black/10">
              <div className="text-4xl font-bold text-black mb-2">3–5</div>
              <p className="text-sm text-black/60">Design partners we're looking for in 2026</p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-black/10">
              <div className="text-4xl font-bold text-black mb-2">Real</div>
              <p className="text-sm text-black/60">Projects to prove the model together</p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-black/10">
              <div className="text-4xl font-bold text-black mb-2">Your</div>
              <p className="text-sm text-black/60">Feedback shaping the product direction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="cta-section" className="py-24 md:py-32 px-6 md:px-16 bg-black text-[#E6E6E1] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="cta-reveal text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-none mb-6">
            See the Agentic OS<br/>in action.
          </h2>
          <p className="cta-reveal text-[#E6E6E1]/55 mb-10 leading-relaxed text-lg">
            Not a pitch deck. Not a vision video. A live walkthrough of the product — where agents author and humans edit. We're looking for design partners who want to shape what agentic delivery looks like.
          </p>
          <div className="cta-reveal flex flex-col items-center gap-6">
            <MagneticButton
              onClick={() => openInquiry('general', 'Become a design partner')}
              className="bg-[#E6E6E1] text-black px-10 py-5 text-sm font-bold uppercase tracking-wider flex items-center gap-3"
            >
              <Play size={18} /> Watch the demo
            </MagneticButton>
            <p className="text-xs text-[#E6E6E1]/30">30 minutes. Live product. Your stakeholders.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
