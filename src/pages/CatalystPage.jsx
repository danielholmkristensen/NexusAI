import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Calendar, MessageSquare, FileText, Target, Clock, CheckCircle } from 'lucide-react';
import { MagneticButton } from '../components/common';
import { ProductLadderSection, TargetAudienceSection, FAQSection } from '../components/sections';
import { PageMeta, CatalystCourseSchema, FAQSchema, BreadcrumbSchema } from '../components/seo';
import { useInquiry } from '../context/InquiryContext';

gsap.registerPlugin(ScrollTrigger);

const CatalystPage = () => {
  const pageRef = useRef(null);
  const timelineRef = useRef(null);
  const [activePhase, setActivePhase] = useState(0);
  const { openInquiry } = useInquiry();

  const catalystFAQs = [
    { q: "Do we need to complete The Spark first?", a: "Yes. The Spark teaches the methodology; The Catalyst embeds it. Without shared vocabulary and baseline skills, the 12 weeks are less effective." },
    { q: "How many team members should be involved?", a: "Minimum 3 who completed The Spark. Ideal is 4-6. Larger teams can participate but primary focus is the core group." },
    { q: "What happens if we have an emergency?", a: "Up to 2 emergency half-days during the engagement for production-impacting issues related to agentic workflows. Critical issues get 2-hour response with on-site support if needed." },
    { q: "What's the Scaling Readiness Assessment?", a: "Week 12 deliverable that identifies which other teams could benefit from agentic engineering, what prerequisites must exist, and realistic timeline. It's both a deliverable and the foundation for Scale Engine conversations." },
    { q: "Can we pause the engagement?", a: "Pauses are possible but not recommended. Momentum matters. If business circumstances require it, we work together on a modified timeline." },
    { q: "How is pricing determined?", a: "We scope engagements based on your team's size and specific needs. Contact us for a discovery conversation." }
  ];

  const phases = [
    {
      name: "Foundation",
      weeks: "1-3",
      focus: "Setup & First Workflows",
      yourTeam: "Learning patterns",
      consultant: "Heavy guidance"
    },
    {
      name: "Momentum",
      weeks: "4-8",
      focus: "Independent Execution",
      yourTeam: "Running workflows",
      consultant: "Coach & reviewer"
    },
    {
      name: "Autonomy",
      weeks: "9-11",
      focus: "Full Operation",
      yourTeam: "Leading practice",
      consultant: "Advisor & sparring partner"
    },
    {
      name: "Handoff",
      weeks: "12",
      focus: "Documentation & Assessment",
      yourTeam: "Presenting results",
      consultant: "Preparing scale readiness"
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo('.hero-anim',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.08, ease: 'power3.out', delay: 0.2 }
      );

      // Horizontal timeline scroll - "running in place" effect
      if (timelineRef.current) {
        ScrollTrigger.create({
          trigger: timelineRef.current,
          start: 'top 30%',
          end: 'bottom 70%',
          onUpdate: (self) => {
            const progress = self.progress;
            const phaseIndex = Math.min(Math.floor(progress * phases.length), phases.length - 1);
            setActivePhase(phaseIndex);
          }
        });
      }
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <PageMeta
        title="The Catalyst — 12-Week Agentic Transformation"
        description="12-week embedded program transforming one team into agentic engineering practitioners. 1 day/week on-site + async support."
        path="/the-catalyst"
      />
      <CatalystCourseSchema />
      <FAQSchema faqs={catalystFAQs} />
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'The Catalyst', path: '/the-catalyst' }
      ]} />

      {/* A. HERO SECTION */}
      <section className="relative h-[100dvh] w-full flex items-end pb-24 px-6 md:px-16 overflow-hidden bg-[#E6E6E1]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000"
            alt="Industrial Forge"
            className="w-full h-full object-cover opacity-25 mix-blend-multiply grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#E6E6E1] via-[#E6E6E1]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl">
          <div className="hero-anim font-mono text-sm uppercase tracking-widest text-black/60 mb-4">12-WEEK Acceleration</div>
          <h1 className="hero-anim text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-none tracking-tighter mb-4 text-black">
            THE CATALYST
          </h1>
          <p className="hero-anim text-xl md:text-2xl text-black/80 max-w-3xl mb-12 font-medium leading-snug">
            A workshop gives you the methodology. <strong>The Catalyst</strong> embeds it into your team's daily workflow — with expert guidance every step of the way.
          </p>
          <div className="hero-anim flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <MagneticButton
              onClick={() => openInquiry('catalyst', 'Book a discovery call')}
              className="bg-black text-[#E6E6E1] px-8 py-5 text-lg font-bold flex items-center gap-2 hover:bg-black/90"
            >
              Book a discovery call <ArrowUpRight size={20} />
            </MagneticButton>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-black/60 border-l-2 border-black/20 pl-4 py-1">
              Prerequisite: The Spark<br/>Custom scoped
            </span>
          </div>
        </div>
      </section>

      {/* B. BY WEEK 12 - OUTCOMES (moved to just below fold) */}
      <section className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1] rounded-xl mx-4 my-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">By Week 12</h2>
            <p className="text-xl text-[#E6E6E1]/80 font-medium">Your team will:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Run agentic workflows independently without consultant initiation",
              "Handle edge cases and failure modes systematically",
              "Have documented before/after metrics proving ROI",
              "Know exactly where else in your organization agentic engineering should expand"
            ].map((outcome, i) => (
              <div key={i} className="bg-[#111] p-8 rounded-xl border-2 border-white/20">
                <div className="font-mono text-sm text-[#E6E6E1]/60 mb-3">{String(i + 1).padStart(2, '0')}</div>
                <p className="text-xl font-bold text-[#E6E6E1]/95">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* C. THE MODEL */}
      <section className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">The Structured Pulse Model</h2>
            <p className="text-xl text-black/70 font-medium max-w-2xl mx-auto">
              1 day per week on-site + async support between visits. Consistent rhythm, measurable progress.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-black text-center">
              <Calendar size={32} className="mx-auto mb-4 text-black/80" />
              <div className="font-mono text-3xl font-bold mb-2">12</div>
              <div className="text-sm text-black/70 font-medium uppercase tracking-wider">On-site days</div>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-black text-center">
              <MessageSquare size={32} className="mx-auto mb-4 text-black/80" />
              <div className="font-mono text-3xl font-bold mb-2">4hr</div>
              <div className="text-sm text-black/70 font-medium uppercase tracking-wider">Async SLA</div>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-black text-center">
              <FileText size={32} className="mx-auto mb-4 text-black/80" />
              <div className="font-mono text-3xl font-bold mb-2">12</div>
              <div className="text-sm text-black/70 font-medium uppercase tracking-wider">Weekly briefs</div>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-black text-center">
              <Target size={32} className="mx-auto mb-4 text-black/80" />
              <div className="font-mono text-3xl font-bold mb-2">3</div>
              <div className="text-sm text-black/70 font-medium uppercase tracking-wider">Monthly reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* D. TIMELINE / PHASES - Horizontal with scroll focus */}
      <section ref={timelineRef} className="min-h-[150vh] py-24 px-6 md:px-16 bg-black text-[#E6E6E1] relative">
        <div className="sticky top-24 max-w-[1400px] mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">12-Week Journey</h2>
            <p className="text-xl text-[#E6E6E1]/80 font-medium">From heavy guidance to full autonomy.</p>
          </div>

          {/* Horizontal Timeline */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {phases.map((phase, i) => (
                <div key={phase.name} className="flex-1 flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    i <= activePhase ? 'bg-[#E6E6E1] border-[#E6E6E1]' : 'border-[#E6E6E1]/40'
                  }`}></div>
                  <span className={`font-mono text-xs mt-2 transition-opacity duration-300 ${
                    i === activePhase ? 'opacity-100' : 'opacity-50'
                  }`}>W{phase.weeks}</span>
                </div>
              ))}
            </div>
            <div className="h-1 bg-[#E6E6E1]/20 rounded-full relative">
              <div
                className="absolute top-0 left-0 h-full bg-[#E6E6E1] rounded-full transition-all duration-500"
                style={{ width: `${((activePhase + 1) / phases.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Active Phase Card */}
          <div className="bg-[#111] rounded-xl p-8 md:p-12 border-2 border-white/30 min-h-[300px]">
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="md:w-1/3">
                <div className="font-mono text-sm uppercase tracking-wider text-[#E6E6E1]/60 mb-2">
                  Weeks {phases[activePhase].weeks}
                </div>
                <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
                  {phases[activePhase].name}
                </h3>
                <p className="text-lg text-[#E6E6E1]/80 font-medium">
                  {phases[activePhase].focus}
                </p>
              </div>
              <div className="md:w-2/3 grid md:grid-cols-2 gap-6">
                <div className="bg-black/50 p-6 rounded-lg border border-white/10">
                  <div className="font-mono text-xs uppercase tracking-wider text-[#E6E6E1]/60 mb-3">Your Team</div>
                  <p className="text-xl font-bold">{phases[activePhase].yourTeam}</p>
                </div>
                <div className="bg-black/50 p-6 rounded-lg border border-white/10">
                  <div className="font-mono text-xs uppercase tracking-wider text-[#E6E6E1]/60 mb-3">Our Consultant</div>
                  <p className="text-xl font-bold">{phases[activePhase].consultant}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Phase indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {phases.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activePhase ? 'bg-[#E6E6E1] w-8' : 'bg-[#E6E6E1]/30'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* E. WHAT'S INCLUDED */}
      <section className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-16">What's Included</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Delivery */}
            <div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-6 flex items-center gap-3">
                <Clock size={24} /> Delivery
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 bg-white p-4 rounded-lg border-2 border-black">
                  <CheckCircle size={20} className="mt-1 flex-shrink-0" />
                  <span className="font-medium">12 on-site days (1 per week, full day embedded with team)</span>
                </li>
                <li className="flex items-start gap-4 bg-white p-4 rounded-lg border-2 border-black">
                  <CheckCircle size={20} className="mt-1 flex-shrink-0" />
                  <span className="font-medium">Continuous async support (4-hour response SLA, business hours)</span>
                </li>
                <li className="flex items-start gap-4 bg-white p-4 rounded-lg border-2 border-black">
                  <CheckCircle size={20} className="mt-1 flex-shrink-0" />
                  <span className="font-medium">Up to 2 emergency half-days during engagement for production-impacting issues</span>
                </li>
              </ul>
            </div>

            {/* Documentation */}
            <div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-6 flex items-center gap-3">
                <FileText size={24} /> Documentation
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 bg-white p-4 rounded-lg border-2 border-black">
                  <CheckCircle size={20} className="mt-1 flex-shrink-0" />
                  <span className="font-medium">12 weekly written briefs (progress, blockers, recommendations)</span>
                </li>
                <li className="flex items-start gap-4 bg-white p-4 rounded-lg border-2 border-black">
                  <CheckCircle size={20} className="mt-1 flex-shrink-0" />
                  <span className="font-medium">3 monthly progress reviews with CTO/sponsor</span>
                </li>
                <li className="flex items-start gap-4 bg-white p-4 rounded-lg border-2 border-black">
                  <CheckCircle size={20} className="mt-1 flex-shrink-0" />
                  <span className="font-medium">Final case study with before/after metrics</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Assessment */}
          <div className="mt-12 bg-black text-[#E6E6E1] rounded-xl p-8 border-4 border-black">
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 flex items-center gap-3">
              <Target size={24} /> Week 12: Scaling Readiness Assessment
            </h3>
            <p className="text-[#E6E6E1]/80 font-medium text-lg mb-6">
              By Week 12, we deliver a comprehensive assessment that:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#111] p-4 rounded-lg border border-white/20">
                <p className="font-medium text-[#E6E6E1]/90">Identifies which other teams could benefit</p>
              </div>
              <div className="bg-[#111] p-4 rounded-lg border border-white/20">
                <p className="font-medium text-[#E6E6E1]/90">Defines prerequisites that must exist</p>
              </div>
              <div className="bg-[#111] p-4 rounded-lg border border-white/20">
                <p className="font-medium text-[#E6E6E1]/90">Provides realistic timeline for org-wide rollout</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* F. TESTIMONIAL */}
      <section className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#111] border-4 border-white/30 rounded-xl p-8 md:p-12">
            <svg className="w-12 h-12 text-[#E6E6E1]/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl md:text-2xl text-[#E6E6E1]/90 font-medium leading-relaxed mb-4">
              "This project had been on our roadmap for years. Huge business value. But every time we scoped it out traditionally, the large effort needed made it lose in the prioritization. Now we did it. One calendar month. One person. End to end."
            </p>
            <p className="text-lg text-[#E6E6E1]/70 font-medium leading-relaxed mb-8">
              "That outcome wasn't luck. It was a methodology that front-loads the thinking and then executes fast with agentic methods. The delivery record is real."
            </p>
            <div className="border-t border-white/20 pt-6">
              <p className="font-bold text-lg">Niels Hanberg</p>
              <p className="text-[#E6E6E1]/60">CTO · Copyright Agent, Copenhagen</p>
            </div>
          </div>
        </div>
      </section>

      {/* G. TARGET AUDIENCE */}
      <TargetAudienceSection
        forItems={[
          "Teams that completed The Spark and want to go deeper.",
          "Engineering leaders who need measurable transformation (not just training).",
          "Organizations with a high-value project that could prove agentic engineering ROI."
        ]}
        requirement="At least 3 team members must have completed The Spark."
        alternateTitle="Not sure if you're ready?"
        alternateItems={[
          "Haven't completed The Spark yet — that's the prerequisite.",
          "Looking for staff augmentation — we coach, not do.",
          "Project timeline under 12 weeks — momentum requires commitment."
        ]}
        alternateCTA={{ text: "Let's discuss your situation", to: "/about" }}
      />

      {/* G. CTA */}
      <section className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-xl p-12 md:p-16 border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">Ready to move faster with agentic engineering?</h2>
            <p className="text-xl text-black/70 font-medium mb-8">
              The Catalyst is a 12-week embedded transformation program.<br/>
              Pricing is scoped to your team's size and specific needs.
            </p>
            <MagneticButton
              onClick={() => openInquiry('catalyst', 'Book a discovery call')}
              className="bg-black text-[#E6E6E1] px-10 py-5 text-xl font-bold mx-auto"
            >
              Book a discovery call <ArrowUpRight size={22} />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* H. FAQ - with extra bottom padding */}
      <div className="pb-8">
        <FAQSection faqs={catalystFAQs} />
      </div>

      {/* I. PRODUCT LADDER */}
      <ProductLadderSection currentProduct="catalyst" variant="journey" />
    </div>
  );
};

export default CatalystPage;
