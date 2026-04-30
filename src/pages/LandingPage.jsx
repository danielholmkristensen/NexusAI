import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
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
      name: "Mandy van Kesteren",
      pedigree: "Rabobank · Philips · The Adecco Group"
    },
    {
      role: "Delivery",
      name: "Roger Carvalho",
      pedigree: "Chair of TDA, The Adecco Group · MSF Netherlands"
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
      // Hero Animation
      gsap.fromTo('.hero-anim',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.4, stagger: 0.12, ease: 'power3.out', delay: 0.3 }
      );

      // Scroll indicator
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
          trigger: '#pivot-section',
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      });

      // Pivot section
      gsap.fromTo('.pivot-anim',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#pivot-section',
            start: 'top 60%'
          }
        }
      );

      // Service sections
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

      // Value cards
      gsap.fromTo('.value-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#values-section',
            start: 'top 70%'
          }
        }
      );

      // Team cells
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

    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <PageMeta
        title="Agentic Agency — Rethink your Enterprise with Agents"
        description="One unifying experience to drive adoption and measure impact, weekly not yearly."
        path="/"
      />
      <OrganizationSchema />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }]} />

      {/* HERO */}
      <section className="relative min-h-screen w-full flex flex-col justify-end px-6 md:px-16 pb-16 pt-28 overflow-hidden bg-[#E6E6E1]">
        {/* Grid texture */}
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>

        <div className="relative z-10">
          <div className="hero-anim font-mono text-base text-black/40 tracking-widest mb-6">{'>>'}</div>
          <h1 className="hero-anim text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.95] tracking-tight mb-8 text-black max-w-4xl">
            Rethink your<br/>Enterprise with<br/>Agents.
          </h1>
          <p className="hero-anim text-lg md:text-xl text-black/60 max-w-2xl mb-10 leading-relaxed">
            One unifying experience to drive adoption of agents across discovery, build and operations. Empower the individual to contribute — and unify the people who are involved. We provide you with the platform that lets you discover, build, and operate production-grade agentic systems that transform enterprise workflows — led by industry veterans, delivered with engineering rigour.
          </p>
          <div className="hero-anim flex items-center gap-6 flex-wrap">
            <MagneticButton
              to="/the-spark"
              className="bg-black text-[#E6E6E1] px-8 py-4 text-sm font-bold uppercase tracking-wider"
            >
              Start with The Spark
            </MagneticButton>
            <button
              onClick={() => openInquiry('general', 'Book a strategy session')}
              className="text-black/60 hover:text-black text-sm font-medium flex items-center gap-2 transition-colors"
            >
              Book a strategy session <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
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

      {/* PIVOT SECTION */}
      <section id="pivot-section" className="py-24 md:py-32 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-4xl mx-auto">
          <p className="pivot-anim text-lg md:text-xl text-[#E6E6E1]/50 mb-6 leading-relaxed">
            The knowledge gap is how to effectively integrate agents into the enterprise.
          </p>
          <h2 className="pivot-anim text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-none tracking-tight mb-8">
            Co-creation<br/>between people<br/>and agents.
          </h2>
          <p className="pivot-anim text-lg md:text-xl text-[#E6E6E1]/70 max-w-3xl leading-relaxed mb-6">
            Autonomous systems require a fundamentally different approach to co-creation between people and agents. The speed made possible changes the dynamics and how different roles interact. Fast code means more alignment is needed up front. The burden is now with product and architects, not development.
          </p>
          <p className="pivot-anim text-lg md:text-xl text-[#E6E6E1]/70 max-w-3xl leading-relaxed">
            Fast code also means you can review something tangible, instead of discussing endlessly in meetings. Nailing this E2E process of delivering helpful agents or software — and getting them into production — reliably, safely, and at enterprise scale — is the hard problem. <strong className="text-[#E6E6E1]">That is what we solve.</strong>
          </p>
        </div>
      </section>

      {/* SERVICE: THE SPARK */}
      <section id="spark" className="py-24 md:py-32 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-5xl mx-auto">
          <div className="service-reveal grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <div className="font-mono text-sm tracking-widest text-black/35 mb-6 flex items-center gap-3">
                <span>{'>'} 01</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">The Spark</h2>
              <p className="text-lg font-semibold text-black mb-4">Agentic Discovery & Architecture Alignment.</p>
              <p className="text-black/65 leading-relaxed mb-4">
                Before we build, we map. Where can autonomous agents safely replace or augment human workflows? Which systems do they touch? What are the security and governance constraints? We nail the architecture so the build goes fast and the deployment goes right.
              </p>
              <p className="text-black/65 leading-relaxed mb-6">
                One scope document. Full clarity on what gets built.
              </p>
              <Link to="/the-spark" className="inline-flex items-center gap-2 font-semibold text-black border-b border-black pb-0.5 hover:opacity-60 transition-opacity">
                Start with The Spark <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="bg-white border border-black/12 rounded p-8">
              <div className="text-[11px] uppercase tracking-widest text-black/40 mb-3">Output</div>
              <div className="text-base font-bold uppercase tracking-wide mb-5">Agentic Readiness Report</div>
              <ul className="space-y-2 text-sm text-black/65">
                <li className="flex items-start gap-2"><span className="mt-1.5">•</span> Workflow mapping & agent opportunity analysis</li>
                <li className="flex items-start gap-2"><span className="mt-1.5">•</span> Enterprise architecture alignment assessment</li>
                <li className="flex items-start gap-2"><span className="mt-1.5">•</span> Security & governance risk framework</li>
                <li className="flex items-start gap-2"><span className="mt-1.5">•</span> Fixed price for The Catalyst</li>
                <li className="flex items-start gap-2"><span className="mt-1.5">•</span> Integration map across existing systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE: THE CATALYST */}
      <section id="catalyst" className="py-24 md:py-32 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-5xl mx-auto">
          <div className="service-reveal grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="lg:order-2">
              <div className="font-mono text-sm tracking-widest text-[#E6E6E1]/35 mb-6 flex items-center gap-3">
                <span>{'>>'} 02</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">The Catalyst</h2>
              <p className="text-lg font-semibold text-[#E6E6E1] mb-4">Secure, scalable agentic delivery.</p>
              <p className="text-[#E6E6E1]/65 leading-relaxed mb-4">
                We build. AI-powered development with senior engineering oversight. Production-grade agentic systems with 80%+ test coverage, full documentation, and security-first architecture. Fixed price — you know the cost before we start.
              </p>
              <p className="text-[#E6E6E1]/65 leading-relaxed mb-6">
                Your infrastructure. Your licence. Yours to keep.
              </p>
              <Link to="/the-catalyst" className="inline-flex items-center gap-2 font-semibold text-[#E6E6E1] border-b border-[#E6E6E1] pb-0.5 hover:opacity-60 transition-opacity">
                Learn more <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="lg:order-1 bg-[#111] border border-white/10 rounded p-8">
              <div className="text-[11px] uppercase tracking-widest text-[#E6E6E1]/40 mb-3">Delivery</div>
              <div className="text-base font-bold uppercase tracking-wide mb-5">Your Agentic System</div>
              <ul className="space-y-2 text-sm text-[#E6E6E1]/70">
                <li className="flex items-start gap-2"><span className="mt-1.5">•</span> Production-ready agentic workflows</li>
                <li className="flex items-start gap-2"><span className="mt-1.5">•</span> Deployed to your infrastructure</li>
                <li className="flex items-start gap-2"><span className="mt-1.5">•</span> Full test coverage & documentation</li>
                <li className="flex items-start gap-2"><span className="mt-1.5">•</span> Security-hardened & audit-ready</li>
                <li className="flex items-start gap-2"><span className="mt-1.5">•</span> Perpetual licence — yours to keep</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE: THE CORE */}
      <section id="core" className="py-24 md:py-32 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-5xl mx-auto">
          <div className="service-reveal grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <div className="font-mono text-sm tracking-widest text-black/35 mb-6 flex items-center gap-3">
                <span>{'>>>'} 03</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">The Core</h2>
              <p className="text-lg font-semibold text-black mb-4">Agentic operations & governance.</p>
              <p className="text-black/65 leading-relaxed mb-4">
                We keep it in peak condition. The Command Center for ongoing agentic operations — real-time visibility into agent behaviour, one-tap human-in-the-loop approvals, SLA-backed support, and continuous refinement as your enterprise evolves.
              </p>
              <p className="text-black/65 leading-relaxed mb-6">
                Control, observability, and governance. Always on.
              </p>
              <Link to="/the-core" className="inline-flex items-center gap-2 font-semibold text-black border-b border-black pb-0.5 hover:opacity-60 transition-opacity">
                Learn more <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="bg-white border border-black/12 rounded p-8">
              <div className="text-[11px] uppercase tracking-widest text-black/40 mb-3">Operations</div>
              <div className="text-base font-bold uppercase tracking-wide mb-5">Command Center</div>
              <ul className="space-y-2 text-sm text-black/65">
                <li className="flex items-start gap-2"><span className="mt-1.5">•</span> Real-time agent monitoring & dashboards</li>
                <li className="flex items-start gap-2"><span className="mt-1.5">•</span> Human-in-the-loop approval workflows</li>
                <li className="flex items-start gap-2"><span className="mt-1.5">•</span> SLA-backed response times</li>
                <li className="flex items-start gap-2"><span className="mt-1.5">•</span> Continuous model & workflow refinement</li>
                <li className="flex items-start gap-2"><span className="mt-1.5">•</span> New engagements without re-onboarding</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section id="values-section" className="py-24 md:py-32 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] uppercase tracking-widest text-black/40 mb-6">We believe in</p>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-12">How we work.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="value-card bg-white border border-black/10 rounded p-8">
              <div className="text-base font-bold uppercase tracking-wide mb-3 leading-tight">Methodology over tools.</div>
              <p className="text-sm text-black/60 leading-relaxed">
                Tools change every quarter. The discipline of engineering agentic systems systematically — with rigorous architecture, security, and governance — persists. Our process outlasts any single product.
              </p>
            </div>
            <div className="value-card bg-white border border-black/10 rounded p-8">
              <div className="text-base font-bold uppercase tracking-wide mb-3 leading-tight">Delivery over theory.</div>
              <p className="text-sm text-black/60 leading-relaxed">
                We ship production systems, not slide decks. Real agentic workflows. Real test coverage. Real documentation. We build with these tools daily and know what actually works in enterprise environments.
              </p>
            </div>
            <div className="value-card bg-white border border-black/10 rounded p-8">
              <div className="text-base font-bold uppercase tracking-wide mb-3 leading-tight">Security & architecture first.</div>
              <p className="text-sm text-black/60 leading-relaxed">
                Agentic systems require a fundamentally different approach to trust and infrastructure. Our team includes experts in zero-trust models, enterprise cloud architecture, and cybersecurity governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM PREVIEW */}
      <section id="team-section" className="py-24 md:py-32 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight leading-none">
              The team<br/>behind it.
            </h2>
            <p className="text-[#E6E6E1]/55 max-w-sm leading-relaxed">
              Enterprise transformation experience, production-grade engineering, and deep infrastructure expertise. Built for the era of the Agentic Enterprise.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8 border border-white/8">
            {team.map((member) => (
              <div key={member.name} className="team-cell bg-black p-6 hover:bg-[#111] transition-colors">
                <div className="text-[10px] uppercase tracking-widest text-[#E6E6E1]/35 mb-2">{member.role}</div>
                <div className="text-base font-bold text-[#E6E6E1] mb-1">{member.name}</div>
                <div className="text-xs text-[#E6E6E1]/45 leading-relaxed">{member.pedigree}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/about"
              className="inline-block text-sm font-bold uppercase tracking-wider text-[#E6E6E1] border border-white/30 rounded-full px-8 py-4 hover:border-white hover:bg-white/5 transition-all"
            >
              Meet the full team <ArrowUpRight size={14} className="inline ml-1" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
