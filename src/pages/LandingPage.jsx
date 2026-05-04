import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ArrowRight, Check, Play, Target, TrendingUp, Code2, Layers, Activity } from 'lucide-react';
import { MagneticButton } from '../components/common';
import { PageMeta, OrganizationSchema, BreadcrumbSchema } from '../components/seo';
import { ScreenshotShowcase } from '../components/showcase';
import { useInquiry } from '../context/InquiryContext';

gsap.registerPlugin(ScrollTrigger);

// Curated screenshots for Netflix-style showcase
const SHOWCASE_SCREENSHOTS = [
  {
    src: '/screenshots/01-discover-echo-henrik.png',
    phase: 'Discover',
    title: 'Echo Interviews the CFO',
    description: 'AI conducts structured stakeholder interviews. Triangulates answers. Surfaces conflicts before they become blockers.',
  },
  {
    src: '/screenshots/02-discover-charter-goals.png',
    phase: 'Discover',
    title: 'Charter Goals Locked',
    description: 'Goals lock when all stakeholders align. Henrik signed off on budget. Sara confirmed features. Christian approved architecture.',
  },
  {
    src: '/screenshots/03-discover-home-sara.png',
    phase: 'Discover',
    title: 'Product Owner Dashboard',
    description: 'Sara sees her attention queue. Henrik would see ROI metrics instead. Persona-aware views for every stakeholder.',
  },
  {
    src: '/screenshots/04-discover-recommendation-paths.png',
    phase: 'Discover',
    title: 'Implementation Paths',
    description: 'Four paths compared. Agent scored each on cost, time, fit, risk. Recommended path highlighted. Henrik taps "Approve."',
  },
  {
    src: '/screenshots/06-build-home-sara.png',
    phase: 'Build',
    title: "Sara's Morning View",
    description: '5 screens ready for review. 92% quality score. Iteration 3 of 4. Three taps to ship.',
  },
  {
    src: '/screenshots/07-build-review-screens.png',
    phase: 'Build',
    title: 'Async Screen Review',
    description: 'Every screen traced to a goal. Every approval tracked to a stakeholder. Architecture gates auto-checked.',
  },
  {
    src: '/screenshots/08-operate-outcomes.png',
    phase: 'Operate',
    title: 'Goal Outcomes',
    description: 'GOAL-01 promised 30% faster fulfillment. Current: 3.1 hours. 93% of target. Direct line from Discovery to Operate.',
  },
  {
    src: '/screenshots/10-operate-home-sponsor.png',
    phase: 'Operate',
    title: 'CFO Dashboard',
    description: 'ROI tracking, goal attainment, monthly run cost. One screen. Full picture. Board-ready.',
  },
];

const LandingPage = () => {
  const pageRef = useRef(null);
  const { openInquiry } = useInquiry();

  const cast = [
    { name: "Sara", initials: "SL", role: "Product Owner", icon: Target, signal: "5 screens ready for review" },
    { name: "Henrik", initials: "HC", role: "CFO & Sponsor", icon: TrendingUp, signal: "ROI tracking on target" },
    { name: "Christian", initials: "CD", role: "Lead Developer", icon: Code2, signal: "Zero blocking issues" },
    { name: "Emma", initials: "EA", role: "Enterprise Architect", icon: Layers, signal: "Integration approved" },
    { name: "Hugo", initials: "HO", role: "Operations", icon: Activity, signal: "4 of 5 goals on track" }
  ];

  const socialProof = [
    "STARK Group", "TDC", "Telenor", "The Adecco Group", "Rabobank", "Philips", "DCSO", "Maersk"
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
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '#paradigm-section', start: 'top 60%' }
        }
      );

      gsap.fromTo('.cast-card',
        { y: 20, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: '#cast-section', start: 'top 70%' }
        }
      );

      gsap.fromTo('.phase-content',
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '#phases-section', start: 'top 70%' }
        }
      );

      gsap.fromTo('.cta-reveal',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: '#cta-section', start: 'top 85%' }
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

      {/* HERO */}
      <section className="relative min-h-screen w-full flex flex-col justify-end px-6 md:px-16 pb-16 pt-28 overflow-hidden bg-[#E6E6E1]">
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>

        <div className="relative z-10 max-w-5xl">
          <div className="hero-anim font-mono text-base text-black/40 tracking-widest mb-6">{'>>'} AGENTIC OS</div>
          <h1 className="hero-anim text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.95] tracking-tight mb-8 text-black max-w-5xl">
            Agents author.<br/>Humans edit.<br/>
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

      {/* SOCIAL PROOF */}
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

      {/* PARADIGM SHIFT */}
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

      {/* THE CAST */}
      <section id="cast" className="py-32 md:py-40 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="font-mono text-sm tracking-widest text-black/35 mb-4">MEET THE CAST</div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">Every stakeholder. One Agentic OS.</h2>
            <p className="text-lg text-black/60 max-w-2xl mx-auto">
              Your Product Owner sees their review queue. Your CFO sees the ROI dashboard. Your Architect sees the architecture gates. Everyone sees what matters to them.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {cast.map((person) => (
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
        </div>
      </section>

      {/* THE SHOWCASE — Netflix-style carousel */}
      <ScreenshotShowcase
        title="See the Agentic OS in Action"
        subtitle="From discovery to delivery — every screenshot is from a real implementation"
        screenshots={SHOWCASE_SCREENSHOTS}
      />

      {/* THREE PHASES */}
      <section id="phases-section" className="py-24 md:py-32 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">Three Phases. One OS.</h2>
            <p className="text-lg text-black/60 max-w-2xl mx-auto">
              From first interview to continuous operation. Each phase builds on the last.
            </p>
          </div>

          {/* DISCOVER */}
          <div className="phase-content grid lg:grid-cols-2 gap-16 items-center mb-24 pb-24 border-b border-black/10">
            <div>
              <div className="font-mono text-sm tracking-widest text-black/35 mb-4 flex items-center gap-3">
                <span className="bg-black text-white px-2 py-1 rounded text-xs">01</span>
                AGENTIC STUDIO
              </div>
              <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">Discover</h3>
              <p className="text-xl font-semibold text-black mb-4">Where Echo interviews your stakeholders.</p>
              <p className="text-black/65 leading-relaxed mb-8">
                Before a single line of code, Echo — our AI interviewer — talks to Henrik about budget, Sara about features, and Christian about architecture. It captures what humans forget to ask, surfaces conflicts before they become blockers, and locks goals with numbers, not wishes.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-green-600 mt-0.5" />
                  <span className="text-black/70"><strong className="text-black">Goals with numbers.</strong> "Reduce fulfillment time 30%" not "improve operations."</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-green-600 mt-0.5" />
                  <span className="text-black/70"><strong className="text-black">Conflicts surfaced early.</strong> Henrik wants fast. Emma wants compliant. Echo flags it.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-green-600 mt-0.5" />
                  <span className="text-black/70"><strong className="text-black">Locked scope.</strong> Every goal gets a baseline, target, and owner.</span>
                </div>
              </div>
              <Link to="/discover" className="inline-flex items-center gap-2 mt-8 text-sm font-bold text-black hover:gap-3 transition-all">
                Explore Discover <ArrowRight size={16} />
              </Link>
            </div>
            <div className="hidden lg:block text-right">
              <div className="inline-block bg-black/5 rounded-2xl p-8">
                <div className="font-mono text-4xl font-bold text-black mb-2">4-6 weeks</div>
                <div className="text-black/60">Charter locked. Scope defined.</div>
              </div>
            </div>
          </div>

          {/* BUILD */}
          <div className="phase-content grid lg:grid-cols-2 gap-16 items-center mb-24 pb-24 border-b border-black/10">
            <div className="hidden lg:block">
              <div className="inline-block bg-black/5 rounded-2xl p-8">
                <div className="font-mono text-4xl font-bold text-black mb-2">Three taps.</div>
                <div className="text-black/60">Done before the coffee gets cold.</div>
              </div>
            </div>
            <div>
              <div className="font-mono text-sm tracking-widest text-black/35 mb-4 flex items-center gap-3">
                <span className="bg-black text-white px-2 py-1 rounded text-xs">02</span>
                AGENTIC STUDIO
              </div>
              <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">Build</h3>
              <p className="text-xl font-semibold text-black mb-4">Sara's morning ritual: coffee, Command Center, three taps.</p>
              <p className="text-black/65 leading-relaxed mb-8">
                Agents built 5 screens overnight. Sara reviews each in her queue. "Looks good" or "Adjust." No meetings. No status updates. Just decisions at the speed of thought. Architecture gates auto-checked by Christian's rules.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-green-600 mt-0.5" />
                  <span className="text-black/70"><strong className="text-black">Agent-authored screens.</strong> Preferences pre-applied from review history.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-green-600 mt-0.5" />
                  <span className="text-black/70"><strong className="text-black">80%+ test coverage.</strong> Production-grade from day one.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-green-600 mt-0.5" />
                  <span className="text-black/70"><strong className="text-black">One licence.</strong> Perpetual. Yours forever.</span>
                </div>
              </div>
              <Link to="/build" className="inline-flex items-center gap-2 mt-8 text-sm font-bold text-black hover:gap-3 transition-all">
                Explore Build <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* OPERATE */}
          <div className="phase-content grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="font-mono text-sm tracking-widest text-black/35 mb-4 flex items-center gap-3">
                <span className="bg-black text-white px-2 py-1 rounded text-xs">03</span>
                COMMAND CENTER
              </div>
              <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">Operate</h3>
              <p className="text-xl font-semibold text-black mb-4">Henrik's quarterly review just got very short.</p>
              <p className="text-black/65 leading-relaxed mb-8">
                Remember those goals Echo locked in Discover? Operate shows if they landed. Henrik opens his CFO dashboard: 4 of 5 goals on track. GOAL-01 promised 30% faster fulfillment. Current: 3.1 hours. 93% of target. One glance. Full accountability.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-green-600 mt-0.5" />
                  <span className="text-black/70"><strong className="text-black">Goal tracking.</strong> Direct line from Discovery to ROI.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-green-600 mt-0.5" />
                  <span className="text-black/70"><strong className="text-black">SLA Agents.</strong> Continuous monitoring by AI, not people.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-green-600 mt-0.5" />
                  <span className="text-black/70"><strong className="text-black">Board-ready.</strong> One screen. Full picture.</span>
                </div>
              </div>
              <Link to="/operate" className="inline-flex items-center gap-2 mt-8 text-sm font-bold text-black hover:gap-3 transition-all">
                Explore Operate <ArrowRight size={16} />
              </Link>
            </div>
            <div className="hidden lg:block text-right">
              <div className="inline-block bg-green-50 rounded-2xl p-8 border border-green-200">
                <div className="font-mono text-4xl font-bold text-green-700 mb-2">93%</div>
                <div className="text-green-700/70">GOAL-01 achieved. 3.1 hours.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPERATORS STORY */}
      <section className="py-24 md:py-32 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-4xl mx-auto">
          <div className="font-mono text-sm text-[#E6E6E1]/40 mb-6 text-center">OUR STORY</div>
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8 text-center">Operators.</h2>
          <div className="space-y-6 text-lg text-[#E6E6E1]/70 leading-relaxed">
            <p>
              We spent years inside enterprise transformation programmes at STARK, TDC, Adecco, Maersk. We saw the gap: <strong className="text-[#E6E6E1]">AI that demos well but doesn't ship.</strong> Agents that generate code but don't understand architecture. Tools that promise autonomy but require constant nursing.
            </p>
            <p>
              So we stopped advising and started building. The result is the <strong className="text-[#E6E6E1]">Agentic OS</strong> — the operating system for AI-native enterprises. Not another AI tool. An operating system where agents work in service of human decisions, not the other way around.
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

      {/* DESIGN PARTNERS */}
      <section className="py-24 md:py-32 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-8">
            Shape what agentic<br/>delivery looks like.
          </h2>
          <p className="text-xl text-black/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            We're building the Agentic OS in public. We need design partners who want to push the boundaries with us.
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

      {/* CTA */}
      <section id="cta-section" className="py-24 md:py-32 px-6 md:px-16 bg-black text-[#E6E6E1] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="cta-reveal text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-none mb-6">
            See the Agentic OS<br/>in action.
          </h2>
          <p className="cta-reveal text-[#E6E6E1]/55 mb-10 leading-relaxed text-lg">
            Not a pitch deck. Not a vision video. A live walkthrough of the product — where agents author and humans edit.
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
