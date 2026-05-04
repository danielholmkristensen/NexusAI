import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { MagneticButton } from '../components/common';
import { PageMeta, OrganizationSchema, BreadcrumbSchema } from '../components/seo';
import { useInquiry } from '../context/InquiryContext';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const pageRef = useRef(null);
  const { openInquiry } = useInquiry();

  const team = [
    {
      role: "Founder",
      name: "Daniel H. Kristensen",
      pedigree: "STARK Group · TDC · Telenor · Adecco · INSEAD"
    },
    {
      role: "Delivery",
      name: "Christoph Frei",
      pedigree: "Interim CTO/CIO · DCSO · Twill by Maersk"
    },
    {
      role: "Delivery",
      name: "Steffen Lund Andersen",
      pedigree: "Head of Engineering, Qampo · Aarhus University"
    }
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
          trigger: '#problem-section',
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      });

      gsap.fromTo('.problem-anim',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#problem-section',
            start: 'top 60%'
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

      gsap.fromTo('.transparency-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#transparency-section',
            start: 'top 70%'
          }
        }
      );

      gsap.fromTo('.team-cell',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#team-section',
            start: 'top 70%'
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
        title="Agentic Agency — Most companies buy AI tools. We help you become AI-native."
        description="Agentic Studio and Command Center: the platform for enterprises to discover, build, and operate production-grade agentic systems."
        path="/"
      />
      <OrganizationSchema />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }]} />

      {/* HERO */}
      <section className="relative min-h-screen w-full flex flex-col justify-end px-6 md:px-16 pb-16 pt-28 overflow-hidden bg-[#E6E6E1]">
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>

        <div className="relative z-10">
          <div className="hero-anim font-mono text-base text-black/40 tracking-widest mb-6">{'>>'}</div>
          <p className="hero-anim text-lg md:text-xl text-black/50 mb-4">Most companies buy AI tools.</p>
          <h1 className="hero-anim text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.95] tracking-tight mb-8 text-black max-w-4xl">
            We help you<br/>become<br/>AI-native.
          </h1>
          <p className="hero-anim text-lg md:text-xl text-black/60 max-w-2xl mb-6 leading-relaxed">
            Agentic Studio and Command Center are how enterprises run agentic delivery — from goal-setting to production, with AI that actually ships.
          </p>
          <p className="hero-anim text-base text-black/45 max-w-xl mb-10">
            We're building it in the open. Here's where we are.
          </p>
          <div className="hero-anim flex items-center gap-6 flex-wrap">
            <MagneticButton
              onClick={() => openInquiry('general', 'Book a walkthrough')}
              className="bg-black text-[#E6E6E1] px-8 py-4 text-sm font-bold uppercase tracking-wider"
            >
              Book a Walkthrough
            </MagneticButton>
            <a href="#discover" className="text-black/60 hover:text-black text-sm font-medium flex items-center gap-2 transition-colors">
              See the platform <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="scroll-indicator absolute bottom-8 right-8 z-10">
          <span className="text-xs uppercase tracking-widest text-black/35 writing-mode-vertical" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        </div>
      </section>

      {/* SOCIAL PROOF STRIP */}
      <div className="bg-black py-5 px-6 md:px-16">
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

      {/* THE PROBLEM */}
      <section id="problem-section" className="py-24 md:py-32 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-4xl mx-auto">
          <h2 className="problem-anim text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-none tracking-tight mb-8">
            You can't automate<br/>what you haven't<br/>defined.
          </h2>
          <p className="problem-anim text-lg md:text-xl text-[#E6E6E1]/70 max-w-3xl leading-relaxed mb-6">
            Every failed AI initiative shares the same root cause: unclear goals, unmeasured outcomes, humans as bottlenecks.
          </p>
          <p className="problem-anim text-lg md:text-xl text-[#E6E6E1]/70 max-w-3xl leading-relaxed">
            Agents don't need more prompts. <strong className="text-[#E6E6E1]">They need clearer missions.</strong>
          </p>
        </div>
      </section>

      {/* DISCOVER — AGENTIC STUDIO */}
      <section id="discover" className="py-24 md:py-32 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-6xl mx-auto">
          <div className="service-reveal mb-16">
            <div className="font-mono text-sm tracking-widest text-black/35 mb-6 flex items-center gap-3">
              <span>{'>'} 01</span>
              <span className="text-black/20">·</span>
              <span className="text-black/50">AGENTIC STUDIO</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">Discover</h2>
            <p className="text-lg font-semibold text-black mb-4">Where agentic delivery begins.</p>
            <p className="text-black/65 leading-relaxed max-w-2xl">
              Before a single line of code, Discover does the hard work that makes autonomous delivery possible: goals with numbers, stakeholder alignment, and locked scope with traced outcomes.
            </p>
          </div>

          {/* Hero screenshot */}
          <div className="screenshot-reveal mb-8">
            <img
              src="/screenshots/01-discover-echo-henrik.png"
              alt="Echo conducts stakeholder interviews"
              className="w-full rounded-lg border border-black/10 shadow-lg"
            />
            <p className="text-sm text-black/50 mt-3">Echo conducts stakeholder interviews, asking the questions humans forget.</p>
          </div>

          {/* Feature bullets */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-base font-bold text-black mb-2">Goals with numbers, not wishes</div>
              <p className="text-sm text-black/60">"Reduce fulfillment time 30%" not "improve operations"</p>
            </div>
            <div>
              <div className="text-base font-bold text-black mb-2">Stakeholder alignment, automated</div>
              <p className="text-sm text-black/60">Echo interviews your CFO, CISO, and Product Owner — surfacing conflicts before they become blockers</p>
            </div>
            <div>
              <div className="text-base font-bold text-black mb-2">Locked scope, traced outcomes</div>
              <p className="text-sm text-black/60">Every goal gets a baseline, a target, and an owner. Nothing ships without knowing what success looks like.</p>
            </div>
          </div>

          {/* Screenshot grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="screenshot-reveal">
              <img
                src="/screenshots/02-discover-charter-goals.png"
                alt="Charter goals locked"
                className="w-full rounded-lg border border-black/10 shadow-md"
              />
              <p className="text-sm text-black/50 mt-3">Goals lock when stakeholders align. No ambiguity survives Discover.</p>
            </div>
            <div className="screenshot-reveal">
              <img
                src="/screenshots/03-discover-home-sara.png"
                alt="Persona-aware home view"
                className="w-full rounded-lg border border-black/10 shadow-md"
              />
              <p className="text-sm text-black/50 mt-3">Every persona sees what matters to them. Product Owners see adoption. CFOs see ROI.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="screenshot-reveal">
              <img
                src="/screenshots/04-discover-recommendation-paths.png"
                alt="Path comparison"
                className="w-full rounded-lg border border-black/10 shadow-md"
              />
              <p className="text-sm text-black/50 mt-3">Four paths compared. Cost, time, fit, risk — all scored. Recommended path highlighted.</p>
            </div>
            <div className="screenshot-reveal">
              <img
                src="/screenshots/05-discover-workflow-analyzer.png"
                alt="Workflow analyzer"
                className="w-full rounded-lg border border-black/10 shadow-md"
              />
              <p className="text-sm text-black/50 mt-3">9 workflows analyzed for agent fit. 71% automation potential identified.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm font-semibold text-black/70">Shipping in weeks.</p>
          </div>
        </div>
      </section>

      {/* BUILD — AGENTIC STUDIO */}
      <section id="build" className="py-24 md:py-32 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-6xl mx-auto">
          <div className="service-reveal mb-16">
            <div className="font-mono text-sm tracking-widest text-[#E6E6E1]/35 mb-6 flex items-center gap-3">
              <span>{'>>'} 02</span>
              <span className="text-[#E6E6E1]/20">·</span>
              <span className="text-[#E6E6E1]/50">AGENTIC STUDIO</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">Build</h2>
            <p className="text-lg font-semibold text-[#E6E6E1] mb-4">Agents that ship, not suggest.</p>
            <p className="text-[#E6E6E1]/65 leading-relaxed max-w-2xl">
              Once Discover locks the goals, Build executes autonomously. Screen-by-screen delivery with human review at gates. Agents flag decisions, not ask permission. Iteration velocity measured in hours, not sprints.
            </p>
          </div>

          {/* Screenshot grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="screenshot-reveal">
              <img
                src="/screenshots/06-build-home-sara.png"
                alt="Build home view"
                className="w-full rounded-lg border border-white/10 shadow-lg"
              />
              <p className="text-sm text-[#E6E6E1]/50 mt-3">5 screens ready for review. Iteration 3 in progress.</p>
            </div>
            <div className="screenshot-reveal">
              <img
                src="/screenshots/07-build-review-screens.png"
                alt="Review tab with screens"
                className="w-full rounded-lg border border-white/10 shadow-lg"
              />
              <p className="text-sm text-[#E6E6E1]/50 mt-3">Every screen traced to a goal. Every review tracked to a stakeholder.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm font-semibold text-[#E6E6E1]/70">Currently in early use. Shipping June 2026.</p>
          </div>
        </div>
      </section>

      {/* OPERATE — COMMAND CENTER */}
      <section id="operate" className="py-24 md:py-32 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-6xl mx-auto">
          <div className="service-reveal mb-16">
            <div className="font-mono text-sm tracking-widest text-black/35 mb-6 flex items-center gap-3">
              <span>{'>>>'} 03</span>
              <span className="text-black/20">·</span>
              <span className="text-black/50">COMMAND CENTER</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">Operate</h2>
            <p className="text-lg font-semibold text-black mb-4">Proof that it worked.</p>
            <p className="text-black/65 leading-relaxed max-w-2xl">
              Discover promised. Build delivered. Operate validates. Goal tracking against production metrics, automated feedback loops back to agents, and the CFO dashboard they actually wanted.
            </p>
          </div>

          {/* Screenshot grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="screenshot-reveal">
              <img
                src="/screenshots/08-operate-outcomes.png"
                alt="Outcomes tab"
                className="w-full rounded-lg border border-black/10 shadow-md"
              />
              <p className="text-sm text-black/50 mt-3">GOAL-01 promised 30% faster. Current: 3.1 hours. 93% of target.</p>
            </div>
            <div className="screenshot-reveal">
              <img
                src="/screenshots/09-operate-home-hugo.png"
                alt="CFO dashboard"
                className="w-full rounded-lg border border-black/10 shadow-md"
              />
              <p className="text-sm text-black/50 mt-3">The CFO sees what matters: 4 of 5 goals on track.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm font-semibold text-black/70">Shipping July 2026.</p>
          </div>
        </div>
      </section>

      {/* TRANSPARENCY */}
      <section id="transparency-section" className="py-24 md:py-32 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">Where we actually are.</h2>
          <p className="text-[#E6E6E1]/55 max-w-2xl mb-12 leading-relaxed">
            We're not pretending to be further along than we are. We're consultants who got tired of the gap between what AI promises and what enterprises can actually use. So we're building the bridge.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="transparency-card border border-white/10 rounded p-8">
              <div className="text-[11px] uppercase tracking-widest text-[#E6E6E1]/40 mb-3">Discover</div>
              <div className="text-base font-bold uppercase tracking-wide mb-2">Shipping in weeks</div>
              <p className="text-sm text-[#E6E6E1]/60">Agentic Studio for stakeholder alignment and goal-setting.</p>
            </div>
            <div className="transparency-card border border-white/10 rounded p-8">
              <div className="text-[11px] uppercase tracking-widest text-[#E6E6E1]/40 mb-3">Build</div>
              <div className="text-base font-bold uppercase tracking-wide mb-2">In internal use</div>
              <p className="text-sm text-[#E6E6E1]/60">Early version running on real client engagements.</p>
            </div>
            <div className="transparency-card border border-white/10 rounded p-8">
              <div className="text-[11px] uppercase tracking-widest text-[#E6E6E1]/40 mb-3">Operate</div>
              <div className="text-base font-bold uppercase tracking-wide mb-2">In development</div>
              <p className="text-sm text-[#E6E6E1]/60">Command Center design complete, engineering underway.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM PREVIEW */}
      <section id="team-section" className="py-24 md:py-32 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight leading-none text-black">
              The team<br/>behind it.
            </h2>
            <p className="text-black/55 max-w-sm leading-relaxed">
              Enterprise transformation experience, production-grade engineering, and deep infrastructure expertise.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-black/8 border border-black/8">
            {team.map((member) => (
              <div key={member.name} className="team-cell bg-[#E6E6E1] p-6 hover:bg-white transition-colors">
                <div className="text-[10px] uppercase tracking-widest text-black/35 mb-2">{member.role}</div>
                <div className="text-base font-bold text-black mb-1">{member.name}</div>
                <div className="text-xs text-black/45 leading-relaxed">{member.pedigree}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/about"
              className="inline-block text-sm font-bold uppercase tracking-wider text-black border border-black/30 rounded-full px-8 py-4 hover:border-black hover:bg-black hover:text-[#E6E6E1] transition-all"
            >
              Meet the full team <ArrowUpRight size={14} className="inline ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="cta-section" className="py-24 md:py-32 px-6 md:px-16 bg-black text-[#E6E6E1] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="cta-reveal text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-none mb-6">
            Want to see<br/>the real thing?
          </h2>
          <p className="cta-reveal text-[#E6E6E1]/55 mb-10 leading-relaxed">
            Not a pitch deck. Not a vision video. A walkthrough of where we are and where we're going. We're looking for design partners who want to shape what agentic delivery looks like.
          </p>
          <div className="cta-reveal flex flex-col items-center gap-6">
            <MagneticButton
              onClick={() => openInquiry('general', 'Book a 30-minute walkthrough')}
              className="bg-[#E6E6E1] text-black px-10 py-5 text-sm font-bold uppercase tracking-wider"
            >
              Book a 30-minute walkthrough <ArrowUpRight size={18} />
            </MagneticButton>
            <p className="text-xs text-[#E6E6E1]/30">No spam. We'll only contact you about your engagement.</p>
            <a
              href="mailto:hello@agenticagency.dev"
              className="text-sm text-[#E6E6E1]/50 border-b border-[#E6E6E1]/20 pb-0.5 hover:text-[#E6E6E1] hover:border-[#E6E6E1] transition-colors"
            >
              Questions? Talk to us <ArrowUpRight size={12} className="inline ml-1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
