import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Code2, GitBranch, ShieldAlert, CheckSquare, XSquare, Check } from 'lucide-react';
import { MagneticButton } from '../components/common';
import { ProductLadderSection, TargetAudienceSection, FAQSection } from '../components/sections';
import { PageMeta, SparkCourseSchema, FAQSchema, BreadcrumbSchema } from '../components/seo';

gsap.registerPlugin(ScrollTrigger);

const SparkPage = () => {
  const pageRef = useRef(null);

  const sparkFAQs = [
    { q: "What's the difference between open and closed?", a: "Open workshops include 3-4 companies learning together (12 participants max). Closed workshops are exclusively for your organization. Same curriculum, different dynamics." },
    { q: "Can we send just 1 or 2 people?", a: "We require minimum 3 participants because agentic engineering changes how a team collaborates — not just how individuals code. With fewer than 3, the shared vocabulary and workflow changes don't survive re-entry to the team." },
    { q: "Do we need prior AI experience?", a: "Basic development experience required. No specific AI tool experience needed — we build from fundamentals." },
    { q: "What tools do you use?", a: "Claude Code and Cursor. Workstations come pre-configured so you're coding within the first hour." },
    { q: "Is this a certification?", a: "No. We focus on practical capability, not credentials. You'll leave with skills you can apply immediately — that's the proof that matters." },
    { q: "What happens after?", a: "Shooting Star community access, your personal 'in the wild' project, and a 6-week reunion where you demo real results." }
  ];

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
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '#philosophy', start: 'top 70%' }
        }
      );

      // Outcomes grid animation
      gsap.fromTo('.outcome-card',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '#outcomes-section', start: 'top 70%' }
        }
      );

      // Testimonials animation
      gsap.fromTo('.testimonial-card',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: '.testimonial-card', start: 'top 80%' }
        }
      );

      // Protocol Stacking - blur starts when next card reaches center (natural eye position)
      const cards = gsap.utils.toArray('.protocol-card');
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        gsap.to(card, {
          scale: 0.95,
          filter: 'blur(3px)',
          opacity: 0.6,
          scrollTrigger: {
            trigger: cards[i + 1],
            start: 'top center',
            end: 'top 30%',
            scrub: true,
          }
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <PageMeta
        title="The Spark — 2-Day Agentic Engineering Workshop"
        description="2-day hands-on workshop. Move beyond ad-hoc AI prompting to structured agentic engineering methodology. DKK 49,999 for open workshops. Max 12 participants."
        path="/the-spark"
      />
      <SparkCourseSchema />
      <FAQSchema faqs={sparkFAQs} />
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'The Spark', path: '/the-spark' }
      ]} />

      {/* A. HERO SECTION */}
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
          <div className="hero-anim font-mono text-sm uppercase tracking-widest text-black/50 mb-4">2-Day Workshop</div>
          <h1 className="hero-anim text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-none tracking-tighter mb-4 text-black">
            THE SPARK
          </h1>
          <p className="hero-anim text-xl md:text-2xl text-black/80 max-w-3xl mb-12 font-medium leading-snug">
            Your team already uses AI to write code. <strong>The Spark</strong> teaches them to engineer with it. Two days. Hands-on from hour one. Real code, real challenges.
          </p>
          <div className="hero-anim flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <MagneticButton
              href="mailto:hello@theagenticagency.com?subject=Spark%20Workshop%20Inquiry"
              className="bg-black text-[#E6E6E1] px-8 py-5 text-lg font-bold flex items-center gap-2 hover:bg-black/90"
            >
              Book a workshop <ArrowUpRight size={20} />
            </MagneticButton>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-black/60 border-l-2 border-black/20 pl-4 py-1">
              Open: DKK 49,999 / 3 pax<br/>Closed: From DKK 249,000
            </span>
          </div>
        </div>
      </section>

      {/* B. THE PROBLEM (Philosophy) */}
      <section id="philosophy" className="relative py-48 px-6 md:px-16 bg-black text-[#E6E6E1] overflow-hidden rounded-xl mx-4 my-12">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356f27?q=80&w=2000" alt="Industrial Textures" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="phil-word text-xl md:text-3xl text-[#E6E6E1]/80 mb-8 font-medium">
            Ad-hoc AI prompting gets you started. It won't get you to production.
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight uppercase">
            <span className="phil-word inline-block mr-3">We</span>
            <span className="phil-word inline-block mr-3">bridge</span>
            <span className="phil-word inline-block mr-3">the</span>
            <span className="phil-word inline-block mr-3">gap</span>
            <span className="phil-word inline-block mr-3">to</span><br/>
            <span className="phil-word inline-block text-[#E6E6E1] bg-white/15 px-4 mt-4 border border-white/30 rounded-xl">AGENTIC ENGINEERING.</span>
          </h2>
          <p className="mt-12 text-lg text-[#E6E6E1]/85 max-w-3xl mx-auto font-medium phil-word">
            Teams that figure out agentic engineering first will ship faster, with fewer defects, and with documentation as a byproduct — not an afterthought.
          </p>
        </div>
      </section>

      {/* C. THREE CHAPTERS */}
      <section className="py-24 px-6 md:px-16 bg-[#E6E6E1] relative z-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">The Three Chapters</h2>
            <p className="text-xl font-medium text-black/70 max-w-2xl">Every software project falls into one of three chapters. Your team will learn the right agentic approach for each.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            <DiagnosticShuffler />
            <TelemetryTypewriter />
            <CursorScheduler />
          </div>
        </div>
      </section>

      {/* C2. WHAT YOU'LL WALK AWAY WITH */}
      <section id="outcomes-section" className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">What You'll Walk Away With</h2>
            <p className="text-xl font-medium text-[#E6E6E1]/70 max-w-2xl">Concrete outcomes, not just theory. Here's what your team gains.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "A Repeatable Methodology",
                desc: "Move from ad-hoc prompting to structured agentic engineering you can apply to any project."
              },
              {
                num: "02",
                title: "Tool Proficiency",
                desc: "Hands-on fluency with Claude Code and Cursor — configured and operational from day one."
              },
              {
                num: "03",
                title: "The Three Chapters Framework",
                desc: "Know which agentic approach fits greenfield, extension, or stewardship work."
              },
              {
                num: "04",
                title: "Real Code Experience",
                desc: "Frontend and backend challenges you've actually solved — not slides you've watched."
              },
              {
                num: "05",
                title: "Your 'In The Wild' Project",
                desc: "A defined project to apply immediately at work, with community support to ship it."
              },
              {
                num: "06",
                title: "Ongoing Community Access",
                desc: "Join the Shooting Star community — our alumni network where practitioners share results and stay current — plus a 6-week reunion to demo real progress."
              }
            ].map((item) => (
              <div key={item.num} className="outcome-card bg-[#111] border border-white/10 rounded-xl p-6 hover:border-white/30 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-2xl font-bold text-[#E6E6E1]/30">{item.num}</span>
                  <div className="h-px flex-1 bg-white/10"></div>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-3">{item.title}</h3>
                <p className="text-[#E6E6E1]/70 font-medium text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* D. CURRICULUM (Protocol Stacking) */}
      <section className="bg-[#E6E6E1] py-24 px-6 md:px-16 relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">Hands-on from the first hour.</h2>
            <p className="text-xl font-medium text-black/70">Not slides. Not theory. Real code.</p>
          </div>
          <div className="relative">
            {/* Card 1 */}
            <div className="protocol-card sticky top-32 h-auto min-h-[400px] md:h-[500px] bg-white rounded-xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 mb-12 shadow-xl border border-black/5">
              <div className="flex-1">
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">DAY 1: ORIENTATION</h3>
                <ul className="space-y-4 text-black/80 font-medium text-lg">
                  <li className="flex gap-3"><strong>Framework:</strong> Vibe coding vs. agentic engineering.</li>
                  <li className="flex gap-3"><strong>Setup:</strong> Pre-configured tooling. Operational in 30 mins.</li>
                  <li className="flex gap-3"><strong>Exploration:</strong> Learn to interview the agent about unfamiliar codebases.</li>
                  <li className="flex gap-3"><strong>Execution:</strong> 2 hands-on challenge sets (Frontend + Backend).</li>
                </ul>
              </div>
              <div className="w-64 h-64 md:w-96 md:h-96 relative flex items-center justify-center border-2 border-dashed border-black/20 rounded-full overflow-hidden bg-[#E6E6E1]/50">
                <svg viewBox="0 0 100 100" className="w-3/4 h-3/4 animate-[spin_15s_linear_infinite] opacity-60">
                  <path d="M50 10 L55 25 L70 20 L65 35 L80 40 L70 50 L80 60 L65 65 L70 80 L55 75 L50 90 L45 75 L30 80 L35 65 L20 60 L30 50 L20 40 L35 35 L30 20 L45 25 Z" fill="none" stroke="#000000" strokeWidth="2" strokeLinejoin="round"/>
                  <circle cx="50" cy="50" r="15" fill="none" stroke="#000000" strokeWidth="2"/>
                </svg>
              </div>
            </div>

            {/* Card 2 */}
            <div className="protocol-card sticky top-40 h-auto min-h-[400px] md:h-[500px] bg-black text-[#E6E6E1] rounded-xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 mb-12 shadow-2xl">
              <div className="flex-1">
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">DAY 2: DEPTH & COMMITMENT</h3>
                <ul className="space-y-4 text-[#E6E6E1]/80 font-medium text-lg">
                  <li className="flex gap-3"><strong>Demos:</strong> Learn from peer accomplishments.</li>
                  <li className="flex gap-3"><strong>Deep Challenges:</strong> Catching and correcting AI mistakes.</li>
                  <li className="flex gap-3"><strong>Diagnostic:</strong> Output a structured plan for your CTO.</li>
                  <li className="flex gap-3"><strong>Commitment:</strong> Define a real "in the wild" project.</li>
                </ul>
              </div>
              <div className="w-64 h-64 md:w-96 md:h-96 relative bg-[#111] rounded-xl overflow-hidden border border-white/10">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="absolute top-0 left-0 w-full h-[3px] bg-[#E6E6E1] shadow-[0_0_15px_#E6E6E1] animate-[scan_3s_linear_infinite] opacity-80"></div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="protocol-card sticky top-48 h-auto min-h-[400px] md:h-[500px] bg-white rounded-xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-xl border border-black/5">
              <div className="flex-1">
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">THE PRACTICE BEGINS</h3>
                <p className="text-black/80 font-medium text-lg mb-6">This isn't a certificate you hang on the wall. It's a practice you bring to work on Monday.</p>
                <ul className="space-y-4 text-black/80 font-medium text-lg border-l-4 border-black pl-6">
                  <li><strong>Shooting Star Community:</strong> Ongoing support channel.</li>
                  <li><strong>6-Week Reunion:</strong> Physical meetup to demo results.</li>
                  <li><strong>Practitioner Levels:</strong> Recognize contribution and community involvement.</li>
                </ul>
              </div>
              <div className="w-64 h-64 md:w-96 md:h-96 relative flex items-center justify-center bg-[#E6E6E1]/30 rounded-xl border border-black/10">
                <svg viewBox="0 0 200 100" className="w-full px-4">
                  <path d="M0 50 L 40 50 L 50 20 L 60 80 L 70 50 L 200 50" fill="none" stroke="#000000" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter" className="animate-[dash_2s_linear_infinite]" strokeDasharray="300" strokeDashoffset="300"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E. TARGET AUDIENCE */}
      <TargetAudienceSection
        forItems={[
          "Lead developers and senior engineers wanting a structured methodology.",
          "Architects evaluating agentic engineering strategies.",
          "Team leads aligning their team on AI workflows.",
          "AI/Data engineers bridging models to production."
        ]}
        requirement="Minimum 3 participants from the same organization. This is a team capability, not a personal credential."
        alternateTitle="Interested but have a different background?"
        alternateItems={[
          "Business-side stakeholders — executive briefings coming soon.",
          "Earlier in your development career — we can point you to foundational resources.",
          "Looking for certification — we focus on capability, but happy to discuss your goals."
        ]}
        alternateCTA={{ text: "Let's talk", href: "mailto:hello@theagenticagency.com?subject=Workshop%20Inquiry" }}
      />

      {/* E2. WHAT ENGINEERS SAY */}
      <section className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">What Engineers Say</h2>
            <p className="text-xl font-medium text-[#E6E6E1]/70 max-w-2xl">From skeptical to systematic in two days.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "I went from using Copilot for autocomplete to actually engineering with AI. The Three Chapters framework changed how I approach every project now.",
                name: "Senior Backend Engineer",
                company: "Fintech Scale-up"
              },
              {
                quote: "The hands-on format is what made it click. By the end of day one, I'd already shipped a feature I'd been procrastinating on for weeks.",
                name: "Tech Lead",
                company: "E-commerce Platform"
              },
              {
                quote: "Finally, a workshop that treats AI as a serious engineering tool, not a toy. The methodology for catching AI mistakes alone was worth it.",
                name: "Staff Engineer",
                company: "Enterprise SaaS"
              },
              {
                quote: "Our team came back aligned on vocabulary and approach. That shared understanding accelerated our AI adoption more than any tool could.",
                name: "Engineering Manager",
                company: "Healthcare Tech"
              },
              {
                quote: "The 'in the wild' project kept me accountable. Six weeks later, I demoed a real feature built with the methodology. That's rare for training.",
                name: "Full-Stack Developer",
                company: "Media Company"
              },
              {
                quote: "I was skeptical about another AI workshop. But this wasn't about prompts — it was about systematic engineering. Exactly what we needed.",
                name: "Principal Architect",
                company: "Logistics Platform"
              }
            ].map((testimonial, i) => (
              <div key={i} className="testimonial-card bg-[#111] border border-white/10 rounded-xl p-8 flex flex-col">
                <div className="flex-1">
                  <svg className="w-8 h-8 text-[#E6E6E1]/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-[#E6E6E1]/90 font-medium leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-bold text-sm">{testimonial.name}</p>
                  <p className="text-[#E6E6E1]/50 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* F. PRICING */}
      <section className="py-24 bg-[#E6E6E1] px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">Two Ways to Join</h2>
            <p className="text-xl text-black/70 font-medium">Choose the format that fits your team.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Open Workshop */}
            <div className="bg-white rounded-xl p-10 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <div className="font-mono text-xs uppercase tracking-wider text-black/50 mb-2">Learn with peers</div>
              <h3 className="text-3xl font-bold uppercase tracking-tight mb-2">Open Workshop</h3>
              <div className="font-mono text-5xl font-bold mb-2">49,999 <span className="text-lg text-black/50">DKK</span></div>
              <p className="text-black/60 font-medium mb-8">Per company for 3 participants</p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-black mt-1 flex-shrink-0" />
                  <span className="font-medium">3 seats for engineers from your organization</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-black mt-1 flex-shrink-0" />
                  <span className="font-medium">Learn alongside up to 3 other companies</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-black mt-1 flex-shrink-0" />
                  <span className="font-medium">Cross-company perspectives and networking</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-black mt-1 flex-shrink-0" />
                  <span className="font-medium">Maximum 12 participants total</span>
                </li>
              </ul>

              <p className="text-sm text-black/60 font-medium mb-6 border-t border-black/10 pt-6">
                <strong>Ideal for:</strong> Teams testing the methodology before committing org-wide.
              </p>

              <MagneticButton
                href="mailto:hello@theagenticagency.com?subject=Open%20Workshop%20—%20Reserve%20Seats"
                className="w-full bg-black text-[#E6E6E1] px-8 py-4 text-lg font-bold justify-center"
              >
                Reserve seats <ArrowUpRight size={18} />
              </MagneticButton>
            </div>

            {/* Closed Workshop */}
            <div className="bg-black text-[#E6E6E1] rounded-xl p-10 border-4 border-white/30 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.3)]">
              <div className="font-mono text-xs uppercase tracking-wider text-[#E6E6E1]/70 mb-2">Your team only</div>
              <h3 className="text-3xl font-bold uppercase tracking-tight mb-2">Closed Workshop</h3>
              <div className="font-mono text-4xl font-bold mb-2">From 249,000 <span className="text-lg text-[#E6E6E1]/70">DKK</span></div>
              <p className="text-[#E6E6E1]/80 font-medium mb-8">Exclusive session, up to 12 participants. Customization premium included.</p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-[#E6E6E1] mt-1 flex-shrink-0" />
                  <span className="font-medium text-[#E6E6E1]/90">Exclusive 2-day workshop for your team</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-[#E6E6E1] mt-1 flex-shrink-0" />
                  <span className="font-medium text-[#E6E6E1]/90">Customized challenge sets using your context</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-[#E6E6E1] mt-1 flex-shrink-0" />
                  <span className="font-medium text-[#E6E6E1]/90">Team alignment on shared vocabulary</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-[#E6E6E1] mt-1 flex-shrink-0" />
                  <span className="font-medium text-[#E6E6E1]/90">Up to 12 participants from your org</span>
                </li>
              </ul>

              <p className="text-sm text-[#E6E6E1]/80 font-medium mb-6 border-t border-white/20 pt-6">
                <strong>Ideal for:</strong> Organizations ready to transform a full team.
              </p>

              <MagneticButton
                href="mailto:hello@theagenticagency.com?subject=Closed%20Workshop%20Inquiry"
                className="w-full bg-[#E6E6E1] text-black px-8 py-4 text-lg font-bold justify-center"
              >
                Book closed session <ArrowUpRight size={18} />
              </MagneticButton>
            </div>
          </div>

          {/* What's Included */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-6 text-center">What Both Formats Include</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Pre-configured workstations (Claude Code + Cursor)",
                "Full 2-day curriculum with hands-on challenges",
                "Three Chapters framework (Greenfield, Extension, Stewardship)",
                "Access to Shooting Star alumni community",
                "6-week physical reunion to demo results",
                "Personal 'in the wild' project assignment"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/50 p-4 rounded-lg">
                  <Check size={18} className="text-black mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium text-black/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* G. FAQ */}
      <FAQSection faqs={sparkFAQs} />

      {/* H. PRODUCT LADDER */}
      <ProductLadderSection currentProduct="spark" variant="journey" />
    </div>
  );
};

/* --- Subcomponents for Features Section --- */

const DiagnosticShuffler = () => {
  // Fixed order: TDD sequence flows top-to-bottom (define → scaffold → implement)
  const items = [
    { step: "01", label: "Define Acceptance Criteria" },
    { step: "02", label: "Generate Test Scaffolds" },
    { step: "03", label: "Implement to Pass" }
  ];

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % items.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-xl p-8 border border-black/10 shadow-sm flex flex-col h-[400px]">
      <div className="flex items-center gap-3 mb-4">
        <Code2 size={24} className="text-black" />
        <h3 className="font-bold text-2xl uppercase tracking-tight">01: Greenfield</h3>
      </div>
      <p className="text-black/80 font-medium text-sm mb-6 leading-relaxed">Building something new. The agent helps you define what "done" looks like before writing implementation code.</p>

      <div className="flex-1 flex flex-col justify-center space-y-3">
        {items.map((item, index) => (
          <div
            key={item.step}
            className={`w-full border-2 rounded-xl p-4 flex items-center gap-4 transition-all duration-500 ${
              index === activeStep
                ? 'bg-black text-[#E6E6E1] border-black shadow-lg scale-[1.02]'
                : 'bg-[#E6E6E1] text-black/70 border-black/20'
            }`}
          >
            <span className={`font-mono text-xs font-bold ${index === activeStep ? 'text-[#E6E6E1]/60' : 'text-black/40'}`}>{item.step}</span>
            <span className="font-bold uppercase tracking-wide text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const TelemetryTypewriter = () => {
  // Logical sequence: understand → protect → extend → verify
  const lines = [
    "→ Analyzing dependency graph...",
    "→ Identifying integration points...",
    "→ Generating regression tests...",
    "→ Implementing feature module...",
    "✓ All tests passing. Ready for review."
  ];
  const [currentLine, setCurrentLine] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const fullText = lines[currentLine];

      if (!isDeleting) {
        setText(fullText.substring(0, text.length + 1));
        if (text === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setText(fullText.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setCurrentLine((prev) => (prev + 1) % lines.length);
        }
      }
    }, isDeleting ? 25 : 50);

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentLine]);

  return (
    <div className="bg-black rounded-xl p-8 border border-white/20 shadow-sm flex flex-col h-[400px] text-[#E6E6E1]">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <GitBranch size={24} className="text-[#E6E6E1]" />
          <h3 className="font-bold text-2xl uppercase tracking-tight">02: Extension</h3>
        </div>
      </div>
      <p className="text-[#E6E6E1]/80 font-medium text-sm mb-6 leading-relaxed">Adding features to existing code. The agent maps dependencies and protects what's already working.</p>

      <div className="flex-1 bg-[#111] border border-white/20 rounded-xl p-6 font-mono text-sm flex items-start shadow-inner">
        <span className="text-[#E6E6E1]/60 mr-2">$</span>
        <p className="leading-relaxed text-[#E6E6E1]/90">
          {text}
          <span className="inline-block w-2 h-4 bg-[#E6E6E1] ml-1 animate-[pulse_1s_step-end_infinite]"></span>
        </p>
      </div>
    </div>
  );
};

const CursorScheduler = () => {
  const scheduleRef = useRef(null);
  const [activeTask, setActiveTask] = useState(0);

  const tasks = [
    { label: "Audit Coverage Gaps", status: "done" },
    { label: "Generate Missing Tests", status: "done" },
    { label: "Extract Documentation", status: "active" },
    { label: "Validate & Commit", status: "pending" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTask(prev => (prev + 1) % tasks.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={scheduleRef} className="bg-white rounded-xl p-8 border border-black/10 shadow-sm flex flex-col h-[400px] relative overflow-hidden">
      <div className="flex items-center gap-3 mb-4">
        <ShieldAlert size={24} className="text-black" />
        <h3 className="font-bold text-2xl uppercase tracking-tight">03: Stewardship</h3>
      </div>
      <p className="text-black/80 font-medium text-sm mb-6 leading-relaxed">Maintaining and improving existing code. The agent audits, documents, and refactors systematically.</p>

      <div className="flex-1 flex flex-col justify-center space-y-2">
        {tasks.map((task, index) => {
          const isActive = index === activeTask;
          const isDone = index < activeTask;

          return (
            <div
              key={task.label}
              className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-all duration-300 ${
                isActive
                  ? 'bg-black text-[#E6E6E1] border-black'
                  : isDone
                  ? 'bg-[#E6E6E1] border-black/30 text-black/60'
                  : 'bg-[#E6E6E1]/50 border-black/10 text-black/40'
              }`}
            >
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                isActive ? 'border-[#E6E6E1] bg-[#E6E6E1] text-black' : isDone ? 'border-black/30 bg-black/20' : 'border-black/20'
              }`}>
                {isDone ? '✓' : ''}
              </div>
              <span className="font-bold text-sm uppercase tracking-wide">{task.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SparkPage;
