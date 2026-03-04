import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Code2, GitBranch, ShieldAlert, CheckSquare, XSquare, Star, TerminalSquare, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* --- FAQ Data (Used for UI and Schema) --- */
const faqs = [
  { q: "What is agentic engineering?", a: "The discipline of using AI agents systematically across the full software development lifecycle—from requirements to TDD and implementation. It's the step beyond autocomplete." },
  { q: "How is this different from a regular AI course?", a: "Most courses teach prompting. The Spark teaches a methodology. Your team writes real code on a real application for two full days." },
  { q: "What tools do you use?", a: "Claude Code and Cursor. Workstations come pre-configured—your team is coding within the first hour." },
  { q: "Do participants need prior AI experience?", a: "Basic development experience required. No specific AI tool experience needed. We build from fundamentals to advanced patterns." },
  { q: "Can you run this on-site?", a: "Yes. Closed workshops delivered at your location. Minimum 3 participants. Same price, same format." },
  { q: "Is this a certification?", a: "No. No one is an authority on agentic engineering yet. Pioneer spirit, not institutional authority." },
  { q: "What happens after the workshop?", a: "Shooting Star community access, personal 'in the wild' project, 6-week physical reunion to demo results." },
  { q: "What's the minimum group size?", a: "3 participants from the same organization. We don't sell individual seats—this is a team capability." }
];

/* --- SEO/GEO Structured Data Component --- */
const StructuredData = () => {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "The Spark — Agentic Engineering Workshop",
      "description": "2-day hands-on workshop transforming development teams into agentic engineering practitioners",
      "provider": { "@type": "Organization", "name": "The Agentic Agency" },
      "courseMode": "onsite",
      "duration": "P2D",
      "teaches": [
        "Agentic engineering methodology",
        "Clarifying agent protocol",
        "Spec-driven development",
        "Test-driven development with AI"
      ],
      "coursePrerequisites": "Software development experience",
      "maximumAttendeeCapacity": 12,
      "inLanguage": "en"
    },
    {
      "@context": "https://schema.org",
      "@type": "CourseInstance",
      "courseMode": "Onsite",
      "instructor": { "@type": "Person", "name": "Daniel Holm Kristensen" },
      "offers": {
        "@type": "Offer",
        "price": "49999",
        "priceCurrency": "DKK",
        "availability": "InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "The Agentic Agency",
      "url": "https://theagenticagency.com",
      "address": { "@type": "PostalAddress", "addressCountry": "DK" }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    }
  ];

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
};

/* --- Magnetic Button Component --- */
const MagneticButton = ({ children, className = '', onClick }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    const move = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
      gsap.to(btn, { x, y, scale: 1.03, duration: 0.4, ease: "power2.out" });
    };
    const leave = () => {
      gsap.to(btn, { x: 0, y: 0, scale: 1, duration: 0.7, ease: "elastic.out(1, 0.3)" });
    };

    btn.addEventListener('mousemove', move);
    btn.addEventListener('mouseleave', leave);
    return () => {
      btn.removeEventListener('mousemove', move);
      btn.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (
    <button ref={buttonRef} onClick={onClick} className={`relative overflow-hidden group rounded-xl ${className}`}>
      <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-magnetic"></span>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

/* --- Main App Component --- */
export default function App() {
  const appRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo('.hero-anim',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.08, ease: 'power3.out', delay: 0.2 }
      );

      // Philosophy Reveal
      gsap.fromTo('.phil-word',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: {
          trigger: '#philosophy',
          start: 'top 70%'
        }}
      );

      // Protocol Stacking
      const cards = gsap.utils.toArray('.protocol-card');
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        gsap.to(card, {
          scale: 0.9,
          filter: 'blur(5px)',
          opacity: 0.5,
          scrollTrigger: {
            trigger: cards[i + 1],
            start: 'top bottom',
            end: 'top center',
            scrub: true,
          }
        });
      });
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={appRef} className="bg-[#E6E6E1] text-[#000000] selection:bg-[#000000] selection:text-[#E6E6E1] relative min-h-screen">
      <StructuredData />
      <div className="bg-noise"></div>

      {/* 1. NAVBAR */}
      <FloatingNav />

      {/* 2. HERO SECTION */}
      <section className="relative h-[100dvh] w-full flex items-end pb-24 px-6 md:px-16 overflow-hidden bg-[#E6E6E1]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2000"
            alt="Raw Concrete"
            className="w-full h-full object-cover opacity-30 mix-blend-multiply grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#E6E6E1] via-[#E6E6E1]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl">
          <h1 className="hero-anim text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none mb-2">
            YOUR TEAM ALREADY USES AI.
          </h1>
          <h1 className="hero-anim text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-none tracking-tighter mb-8 text-black">
            LEARN TO ENGINEER.
          </h1>
          <p className="hero-anim text-xl md:text-2xl text-black/80 max-w-3xl mb-12 font-medium leading-snug">
            <strong>The Spark</strong> is a 2-day intensive workshop that takes your developers from ad-hoc AI prompting to structured, production-grade agentic engineering. Hands-on from hour one.
          </p>
          <div className="hero-anim flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <MagneticButton className="bg-black text-[#E6E6E1] px-8 py-5 text-lg font-bold flex items-center gap-2 hover:bg-black/90 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
              Book a workshop <ArrowUpRight size={20} />
            </MagneticButton>
            <div className="flex flex-col gap-1 border-l-4 border-black/20 pl-4 py-1">
              <div className="flex text-black mb-1">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-black/70">
                Rated 4.9/5 by top engineering teams
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-black/50 flex items-center gap-1 mt-1">
                <Users size={10} /> Limited to 12 participants per workshop
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TARGET AUDIENCE (Self-Selection) */}
      <section className="py-24 bg-black text-[#E6E6E1] px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-0 border-4 border-white/20 rounded-xl overflow-hidden shadow-2xl">
          <div className="p-12 md:p-16 bg-black border-b md:border-b-0 md:border-r border-white/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
            <div className="flex items-center gap-4 mb-8">
              <CheckSquare size={32} className="text-[#E6E6E1]" />
              <h3 className="text-3xl font-bold uppercase tracking-tight">Who It's For</h3>
            </div>
            <ul className="space-y-6 text-lg font-medium text-[#E6E6E1]/80">
              <li>Lead developers & senior engineers wanting a structured methodology.</li>
              <li>Architects evaluating agentic engineering strategies.</li>
              <li>Team leads aligning their team on AI workflows.</li>
              <li>AI/Data engineers bridging models to production.</li>
            </ul>
          </div>
          <div className="p-12 md:p-16 bg-[#111]">
            <div className="flex items-center gap-4 mb-8">
              <XSquare size={32} className="text-white/50" />
              <h3 className="text-3xl font-bold uppercase tracking-tight text-white/50">Who It's Not For</h3>
            </div>
            <ul className="space-y-6 text-lg font-medium text-white/50">
              <li>Business-side stakeholders (stay tuned).</li>
              <li>Complete beginners in software development.</li>
              <li>Teams looking for a 1-hour overview or rubber-stamp certification.</li>
              <li className="pt-6 mt-6 border-t border-white/10 text-white/80">
                <strong>Requirement:</strong> Minimum group size is 3 participants from the same organization. This is a team capability, not a personal credential.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. THE PROBLEM */}
      <section id="philosophy" className="relative py-48 px-6 md:px-16 bg-[#E6E6E1] text-black overflow-hidden border-b-4 border-black">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="phil-word text-xl md:text-3xl text-black/60 mb-8 font-medium">
            Vibe coding gets you started. It won't get you to production.
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight uppercase">
            <span className="phil-word inline-block mr-3">We</span>
            <span className="phil-word inline-block mr-3">bridge</span>
            <span className="phil-word inline-block mr-3">the</span>
            <span className="phil-word inline-block mr-3">gap</span>
            <span className="phil-word inline-block mr-3">to</span><br/>
            <span className="phil-word inline-block text-[#E6E6E1] bg-black px-4 mt-4 border border-black rounded-xl">AGENTIC ENGINEERING.</span>
          </h2>
          <p className="mt-12 text-lg text-black/70 max-w-3xl mx-auto font-medium phil-word leading-relaxed">
            Your developers are already using AI — Copilot, ChatGPT, Claude — to write code faster. That's good. But there's a gap between "AI helped me write this function" and "AI systematically helped us deliver this feature, tested, documented, and ready for production."
            <br/><br/>
            <strong>Teams that figure out agentic engineering first will ship faster, with fewer defects, and with documentation as a byproduct — not an afterthought.</strong> Teams that don't will keep treating AI as a productivity trick and wonder why the results are inconsistent.
          </p>
        </div>
      </section>

      {/* 5. KEY OUTCOMES (New Section) */}
      <section className="py-32 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 border-l-8 border-black pl-8">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">Action-Oriented Outcomes</h2>
            <p className="text-xl font-medium text-black/70">What your team will actually be able to do on Monday morning.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { act: "Interview unfamiliar codebases using clarifying agents", res: "you can onboard to any project in hours, not weeks." },
              { act: "Apply the Three Chapters framework", res: "you choose the right agentic approach for every project type." },
              { act: "Write specs that agents can execute reliably", res: "your AI output is production-grade, not 'works on my machine'." },
              { act: "Catch and correct agent mistakes systematically", res: "you maintain engineering rigor while moving fast." },
              { act: "Build a personal 'in the wild' project", res: "you apply the methodology to your actual work immediately." },
              { act: "Produce a team diagnostic for your CTO", res: "leadership sees exactly where agentic engineering fits in your org." }
            ].map((outcome, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-black/10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex gap-6 items-start hover:-translate-y-1 transition-transform">
                <div className="font-mono text-4xl font-bold text-black/20 leading-none">0{idx + 1}</div>
                <div>
                  <p className="font-bold text-lg leading-snug mb-2">You'll be able to {outcome.act}—</p>
                  <p className="text-black/60 font-medium">So {outcome.res}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. THE THREE CHAPTERS */}
      <section className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1] relative z-20 rounded-t-[4rem] -mt-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">The Three Chapters</h2>
            <p className="text-xl font-medium text-white/70 max-w-2xl">Every software project falls into one of three chapters. Your team will learn the right agentic approach for each.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Chap 1 */}
            <div className="bg-[#111] rounded-xl p-8 border border-white/10 shadow-sm flex flex-col h-[400px]">
              <div className="flex items-center gap-3 mb-4">
                <Code2 size={24} className="text-[#E6E6E1]" />
                <h3 className="font-bold text-2xl uppercase tracking-tight">Chap. 1: Greenfield</h3>
              </div>
              <p className="text-white/60 font-medium text-sm mb-6 leading-relaxed">Building something entirely new. New applications, services, integrations.</p>
              <ul className="space-y-3 text-sm font-medium text-white/80 border-l-2 border-white/20 pl-4 mt-auto">
                <li>→ Agent drives architecture and TDD from day one.</li>
                <li>→ Focus on: requirements, architecture decisions, boundaries.</li>
              </ul>
            </div>

            {/* Chap 2 */}
            <div className="bg-[#111] rounded-xl p-8 border border-white/10 shadow-sm flex flex-col h-[400px]">
              <div className="flex items-center gap-3 mb-4">
                <GitBranch size={24} className="text-[#E6E6E1]" />
                <h3 className="font-bold text-2xl uppercase tracking-tight">Chap. 2: Extension</h3>
              </div>
              <p className="text-white/60 font-medium text-sm mb-6 leading-relaxed">New on existing. Adding capabilities to platforms that already work.</p>
              <ul className="space-y-3 text-sm font-medium text-white/80 border-l-2 border-white/20 pl-4 mt-auto">
                <li>→ Agent maps architecture, identifies coupling points.</li>
                <li>→ Ensures new features don't break what's there.</li>
              </ul>
            </div>

            {/* Chap 3 */}
            <div className="bg-[#111] rounded-xl p-8 border border-white/10 shadow-sm flex flex-col h-[400px]">
              <div className="flex items-center gap-3 mb-4">
                <ShieldAlert size={24} className="text-[#E6E6E1]" />
                <h3 className="font-bold text-2xl uppercase tracking-tight">Chap. 3: Stewardship</h3>
              </div>
              <p className="text-white/60 font-medium text-sm mb-6 leading-relaxed">Making existing systems perform. Refactoring, test coverage, documentation recovery.</p>
              <ul className="space-y-3 text-sm font-medium text-white/80 border-l-2 border-white/20 pl-4 mt-auto">
                <li>→ Agent understands the codebase before touching it.</li>
                <li>→ Focus on: naming conventions, data architecture, governance.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DETAILED CURRICULUM (Protocol Stacking) */}
      <section className="bg-[#E6E6E1] py-24 px-6 md:px-16 relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">Hands-on from the first hour.</h2>
            <p className="text-xl font-medium text-black/70">Not slides. Not theory. Real code.</p>
          </div>
          <div className="relative">
            {/* Card 1 */}
            <div className="protocol-card sticky top-32 min-h-[60vh] md:h-[550px] bg-white rounded-xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12 mb-12 shadow-[0px_20px_40px_rgba(0,0,0,0.1)] border border-black/10">
              <div className="flex-1 w-full">
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">DAY 1: ORIENTATION</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  <div className="border-t-2 border-black/20 pt-4">
                    <span className="font-mono text-xs font-bold text-black/50 block mb-2">09:00 - 10:45 | FOUNDATION</span>
                    <h4 className="font-bold text-lg">Framework & Theory</h4>
                    <p className="text-sm font-medium text-black/70 mt-1">Vibe coding vs. agentic engineering. Three chapters. Clarifying agent protocol.</p>
                  </div>
                  <div className="border-t-2 border-black/20 pt-4">
                    <span className="font-mono text-xs font-bold text-black/50 block mb-2">10:45 - 12:45 | SETUP & EXPLORE</span>
                    <h4 className="font-bold text-lg">Tooling & First Contact</h4>
                    <p className="text-sm font-medium text-black/70 mt-1">Pre-configured workstations (operational in 30m). Interview the agent about unfamiliar codebases.</p>
                  </div>
                  <div className="border-t-2 border-black/20 pt-4">
                    <span className="font-mono text-xs font-bold text-black/50 block mb-2">12:45 - 16:00 | EXECUTION</span>
                    <h4 className="font-bold text-lg">Challenge Sets 1 & 2</h4>
                    <p className="text-sm font-medium text-black/70 mt-1">Frontend and Backend modification tasks. Real hands-on coding. Less scaffolding as day progresses.</p>
                  </div>
                  <div className="border-t-2 border-black/20 pt-4">
                    <span className="font-mono text-xs font-bold text-black/50 block mb-2">16:00 | WRAP UP</span>
                    <h4 className="font-bold text-lg">Debrief</h4>
                    <p className="text-sm font-medium text-black/70 mt-1">What surprised you? What broke? What worked?</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="protocol-card sticky top-40 min-h-[60vh] md:h-[550px] bg-black text-[#E6E6E1] rounded-xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12 mb-12 shadow-[0px_20px_40px_rgba(0,0,0,0.5)] border border-white/10">
              <div className="flex-1 w-full">
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">DAY 2: DEPTH & COMMITMENT</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  <div className="border-t-2 border-white/20 pt-4">
                    <span className="font-mono text-xs font-bold text-white/40 block mb-2">09:00 - 12:00 | REFINEMENT</span>
                    <h4 className="font-bold text-lg">Demos & Error Handling</h4>
                    <p className="text-sm font-medium text-white/70 mt-1">Peer demos. Multi-file changes. Live failure mode demo—catching and correcting agent mistakes.</p>
                  </div>
                  <div className="border-t-2 border-white/20 pt-4">
                    <span className="font-mono text-xs font-bold text-white/40 block mb-2">13:00 - 14:30 | AUTONOMY</span>
                    <h4 className="font-bold text-lg">Participant's Choice</h4>
                    <p className="text-sm font-medium text-white/70 mt-1">Challenge Set 4 across all 3 chapters. Full autonomy to build.</p>
                  </div>
                  <div className="border-t-2 border-white/20 pt-4">
                    <span className="font-mono text-xs font-bold text-white/40 block mb-2">14:30 - 15:15 | STRATEGY</span>
                    <h4 className="font-bold text-lg">Organizational Diagnostic</h4>
                    <p className="text-sm font-medium text-white/70 mt-1">Where should your company apply agentic engineering? Output a structured plan for your CTO.</p>
                  </div>
                  <div className="border-t-2 border-white/20 pt-4">
                    <span className="font-mono text-xs font-bold text-white/40 block mb-2">15:15 - 16:00 | FUTURE</span>
                    <h4 className="font-bold text-lg">The Bleeding Edge</h4>
                    <p className="text-sm font-medium text-white/70 mt-1">Agents self-organizing operations. Where this is heading. Defining your "in the wild" project.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="protocol-card sticky top-48 min-h-[60vh] md:h-[550px] bg-white rounded-xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12 shadow-[0px_20px_40px_rgba(0,0,0,0.1)] border border-black/10">
              <div className="flex-1">
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">THE PRACTICE BEGINS</h3>
                <p className="text-black/80 font-medium text-xl mb-10 leading-relaxed max-w-2xl">This isn't a certificate you hang on the wall. It's a practice you bring to work on Monday. Every participant leaves with a personal <strong>"in the wild" project</strong>—a real problem in their own codebase.</p>
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4 items-start bg-[#E6E6E1]/50 p-6 rounded-lg border border-black/5 hover:-translate-y-1 transition-transform">
                    <TerminalSquare size={28} className="text-black shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg">Shooting Star Community</h4>
                      <p className="text-sm font-medium text-black/70">An ongoing support channel to share progress, debug issues, and trade prompts.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start bg-[#E6E6E1]/50 p-6 rounded-lg border border-black/5 hover:-translate-y-1 transition-transform">
                    <Users size={28} className="text-black shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg">6-Week Reunion</h4>
                      <p className="text-sm font-medium text-black/70">A physical meetup where participants demo their results, get recognized, and share what they've learned with leadership.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INSTRUCTOR SECTION */}
      <section className="py-24 bg-black text-white px-6 md:px-16 border-y-4 border-white/20">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-square bg-white rounded-xl overflow-hidden grayscale mix-blend-luminosity opacity-90 border border-white/20">
              {/* Professional headshot placeholder matching aesthetic */}
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800" alt="Daniel Holm Kristensen" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-white/30 hidden md:block"></div>
          </div>
          <div className="lg:col-span-7">
            <span className="font-mono text-sm uppercase tracking-widest text-white/50 block mb-2">Lead Instructor</span>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-2">Daniel Holm Kristensen</h2>
            <h3 className="text-xl text-white/70 font-medium mb-8">Founder, The Agentic Agency</h3>

            <ul className="space-y-4 text-lg font-medium text-white/90 mb-10">
              <li className="flex gap-3"><CheckSquare size={20} className="text-white/40 shrink-0 mt-1"/> Years building production AI systems</li>
              <li className="flex gap-3"><CheckSquare size={20} className="text-white/40 shrink-0 mt-1"/> Former senior engineering leadership</li>
              <li className="flex gap-3"><CheckSquare size={20} className="text-white/40 shrink-0 mt-1"/> Architected agentic workflows across legacy and greenfield B2B platforms</li>
            </ul>

            <blockquote className="border-l-4 border-white pl-6 italic text-xl text-white/80 font-medium leading-relaxed mb-8">
              "We've spent years watching engineering teams struggle with the same agentic AI mistakes. The Spark compresses 18 months of trial-and-error into 2 days of structured practice."
            </blockquote>

            <p className="text-sm font-mono uppercase text-white/50 bg-white/5 inline-block px-4 py-2 rounded-lg border border-white/10">
              Pioneer spirit, not institutional authority.
            </p>
          </div>
        </div>
      </section>

      {/* 9. SOCIAL PROOF (Testimonials) */}
      <section className="py-24 bg-[#E6E6E1] px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-2">The Results</h2>
              <p className="text-xl font-medium text-black/70">From ad-hoc to systematic.</p>
            </div>
            <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-4 border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
              <div className="flex text-white">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <span className="font-mono font-bold">4.9/5 Average Rating</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-10 rounded-xl border border-black/10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-lg font-medium leading-relaxed mb-8 italic">
                "Before The Spark, I was using Claude like a fancy autocomplete. Now I have a systematic methodology I can apply to any project. The three chapters framework changed how I think about AI in my work."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#E6E6E1] rounded-full border border-black/20"></div>
                <div>
                  <h4 className="font-bold text-black uppercase tracking-tight">[Name Placeholder]</h4>
                  <p className="text-sm font-mono text-black/60">Senior Engineer, [Company]</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-10 rounded-xl border border-black/10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-lg font-medium leading-relaxed mb-8 italic">
                "We sent 6 developers to the workshop. The immediate shift in our code review discussions and velocity was staggering. They aren't just coding faster; they are engineering better."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#E6E6E1] rounded-full border border-black/20"></div>
                <div>
                  <h4 className="font-bold text-black uppercase tracking-tight">[Name Placeholder]</h4>
                  <p className="text-sm font-mono text-black/60">CTO, [Company]</p>
                </div>
              </div>
            </div>
          </div>

          {/* Logo Strip Placeholder */}
          <div className="mt-16 pt-12 border-t-2 border-black/10 flex flex-wrap justify-center gap-12 opacity-40 grayscale">
            <div className="font-bold text-2xl tracking-tighter">LOGOIPSUM</div>
            <div className="font-bold text-2xl tracking-tighter">ACME CORP</div>
            <div className="font-bold text-2xl tracking-tighter">TECHFLOW</div>
            <div className="font-bold text-2xl tracking-tighter">NORDIC DEV</div>
          </div>
        </div>
      </section>

      {/* 10. PRICING */}
      <section className="py-24 bg-black text-[#E6E6E1] text-center px-6">
        <div className="max-w-4xl mx-auto border-4 border-white/20 rounded-xl p-12 md:p-24 bg-[#111] shadow-[16px_16px_0px_0px_rgba(230,230,225,0.2)]">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase mb-2">One Price. No Complexity.</h2>
          <p className="text-xl font-medium text-white/60 mb-12">Under your approval threshold.</p>

          <div className="font-mono text-6xl md:text-8xl font-bold mb-6 tracking-tighter text-white">
            49,999 <span className="text-2xl text-white/50">DKK</span>
          </div>
          <p className="text-lg font-bold mb-12 border-b-2 border-white/10 pb-12 max-w-lg mx-auto">
            Ex. VAT. Up to 12 participants.<br/><span className="font-medium text-white/60">Open or Closed (On-site) Workshops.</span>
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-left mb-12 max-w-2xl mx-auto">
            <ul className="space-y-3 font-medium text-white/80">
              <li className="flex gap-2 items-center"><CheckSquare size={16} className="text-white/40"/> Pre-configured workstations</li>
              <li className="flex gap-2 items-center"><CheckSquare size={16} className="text-white/40"/> All materials & resources</li>
            </ul>
            <ul className="space-y-3 font-medium text-white/80">
              <li className="flex gap-2 items-center"><CheckSquare size={16} className="text-white/40"/> Shooting Star community access</li>
              <li className="flex gap-2 items-center"><CheckSquare size={16} className="text-white/40"/> 6-week physical reunion</li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-lg mb-12 text-left border border-white/10 flex gap-4 items-start">
            <Star size={24} className="text-white shrink-0" />
            <p className="font-medium text-sm text-white/80">
              <strong>Early Adopter?</strong> Founding partner rate available for early clients. Shape the program's evolution in exchange for testimonials.
            </p>
          </div>

          <MagneticButton className="mx-auto bg-[#E6E6E1] text-black px-12 py-6 text-xl font-bold flex items-center gap-3 hover:bg-white transition-colors">
            Get in touch <ArrowUpRight size={24}/>
          </MagneticButton>
        </div>
      </section>

      {/* 11. THE PRODUCT LADDER (Optional/Light) */}
      <section className="py-16 bg-[#E6E6E1] px-6 md:px-16 border-b-4 border-black text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6">What Comes After The Spark?</h3>
          <p className="text-lg font-medium text-black/70 mb-8">The Spark is the door. Start there and let the results speak for themselves. For teams that want to go deeper later:</p>
          <div className="flex flex-col md:flex-row justify-center gap-4 text-sm font-mono uppercase font-bold text-black/60">
            <div className="bg-black/5 px-6 py-3 rounded-lg border border-black/10">→ The Catalyst (12 Weeks)</div>
            <div className="bg-black/5 px-6 py-3 rounded-lg border border-black/10">→ The Scale Engine (6-12 Months)</div>
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="py-24 bg-[#E6E6E1] px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-16">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b-2 border-black/20 pb-6 hover:border-black transition-colors">
                <h4 className="text-xl font-bold mb-3">{faq.q}</h4>
                <p className="text-black/70 font-medium leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. FOOTER CTA */}
      <footer className="bg-black text-[#E6E6E1]/60 pt-24 pb-12 px-6 md:px-16 rounded-t-[4rem]">
        <div className="max-w-[1400px] mx-auto text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 text-[#E6E6E1]">Ready to move beyond vibe coding?</h2>
          <p className="text-xl font-medium mb-12 max-w-2xl mx-auto">The Spark is running now. Founding partner spots are limited.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <MagneticButton className="bg-[#E6E6E1] text-black px-10 py-5 text-lg font-bold">
              Book a workshop
            </MagneticButton>
            <a href="#" className="font-bold text-[#E6E6E1] hover:text-white transition-colors flex items-center gap-2">
              Questions? Talk to us <ArrowUpRight size={16}/>
            </a>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <span className="font-bold text-xl text-[#E6E6E1] tracking-tighter uppercase">THE AGENTIC AGENCY</span>
            <span className="text-sm font-medium">© 2026 The Agentic Agency. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-xl border border-white/20">
            <div className="w-2 h-2 rounded-full bg-[#E6E6E1] animate-pulse"></div>
            <span className="font-mono text-xs tracking-wider uppercase">System Operational</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* --- Navigation Component --- */
const FloatingNav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 hover:-translate-y-px transition-transform duration-300">
      <nav className={`transition-all duration-500 rounded-full px-6 py-3 flex items-center gap-8 ${scrolled ? 'bg-[#E6E6E1]/90 backdrop-blur-xl border border-black/10 shadow-lg' : 'bg-transparent'}`}>
        <span className="font-bold tracking-tighter text-xl uppercase">THE AGENTIC AGENCY</span>
        <div className="hidden md:flex gap-6 text-sm font-semibold">
          <a href="#" className="hover:opacity-60 transition-opacity text-black">The Problem</a>
          <a href="#" className="hover:opacity-60 transition-opacity text-black">Curriculum</a>
          <a href="#" className="hover:opacity-60 transition-opacity text-black">FAQ</a>
        </div>
        <MagneticButton className="bg-black text-[#E6E6E1] px-5 py-2.5 text-xs font-bold uppercase tracking-wide">
          Book a workshop
        </MagneticButton>
      </nav>
    </div>
  );
};
