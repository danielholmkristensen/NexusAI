import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Code2, GitBranch, ShieldAlert, CheckSquare, XSquare, Target, Users, Clock, Star, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* --- SEO Structured Data (Enhanced for GEO) --- */
const StructuredData = () => {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "The Spark — Agentic Engineering Workshop",
    "description": "2-day hands-on workshop transforming development teams into agentic engineering practitioners. Move beyond vibe coding to production-grade AI-assisted software development.",
    "provider": {
      "@type": "Organization",
      "name": "The Agentic Agency",
      "url": "https://theagenticagency.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "DK"
      }
    },
    "courseMode": "onsite",
    "duration": "P2D",
    "teaches": [
      "Agentic engineering methodology",
      "Clarifying agent protocol",
      "Spec-driven development with AI",
      "Test-driven development with AI agents",
      "Three Chapters framework (Greenfield, Extension, Stewardship)",
      "Production-grade AI-assisted software development"
    ],
    "coursePrerequisites": "Software development experience",
    "maximumAttendeeCapacity": 12,
    "inLanguage": "en",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Onsite",
      "instructor": {
        "@type": "Person",
        "name": "Daniel Holm Kristensen",
        "jobTitle": "Founder",
        "worksFor": {
          "@type": "Organization",
          "name": "The Agentic Agency"
        }
      },
      "offers": {
        "@type": "Offer",
        "price": "49999",
        "priceCurrency": "DKK",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-01-01"
      }
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "The Agentic Agency",
    "url": "https://theagenticagency.com",
    "description": "Transforming development teams into agentic engineering practitioners through hands-on workshops and embedded support.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DK"
    },
    "foundingDate": "2026",
    "founder": {
      "@type": "Person",
      "name": "Daniel Holm Kristensen"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is agentic engineering?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The discipline of using AI agents systematically across the full software development lifecycle—from requirements to TDD and implementation. It's the step beyond autocomplete."
        }
      },
      {
        "@type": "Question",
        "name": "How is this different from a regular AI course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most courses teach prompting. The Spark teaches a methodology. Your team writes real code on a real application for two full days."
        }
      },
      {
        "@type": "Question",
        "name": "What tools do you use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Claude Code and Cursor. Workstations come pre-configured—your team is coding within the first hour."
        }
      },
      {
        "@type": "Question",
        "name": "Do participants need prior AI experience?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Basic development experience required. No specific AI tool experience needed. We build from fundamentals to advanced patterns."
        }
      },
      {
        "@type": "Question",
        "name": "Can you run this on-site?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Closed workshops delivered at your location. Minimum 3 participants. Same price, same format."
        }
      },
      {
        "@type": "Question",
        "name": "Is this a certification?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. No one is an authority on agentic engineering yet. Pioneer spirit, not institutional authority."
        }
      },
      {
        "@type": "Question",
        "name": "What happens after the workshop?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Shooting Star community access, personal 'in the wild' project, 6-week physical reunion to demo results."
        }
      },
      {
        "@type": "Question",
        "name": "What's the minimum group size?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "3 participants from the same organization. We don't sell individual seats—this is a team capability."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
};

/* --- Magnetic Button Component --- */
const MagneticButton = ({ children, className = '', onClick, href }) => {
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

  const Component = href ? 'a' : 'button';
  const props = href ? { href } : { onClick };

  return (
    <Component ref={buttonRef} {...props} className={`relative overflow-hidden group rounded-xl ${className}`}>
      <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-magnetic"></span>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Component>
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
          trigger: '#problem',
          start: 'top 70%'
        }}
      );

      // Outcomes Animation
      gsap.fromTo('.outcome-item',
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: {
          trigger: '#outcomes',
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

      {/* A. NAVBAR */}
      <FloatingNav />

      {/* B. HERO SECTION (Enhanced) */}
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
          <div className="hero-anim flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
            <MagneticButton className="bg-black text-[#E6E6E1] px-8 py-5 text-lg font-bold flex items-center gap-2 hover:bg-black/90">
              Book a workshop <ArrowUpRight size={20} />
            </MagneticButton>
            <span className="font-mono text-sm font-bold uppercase tracking-widest text-black/50 border-l-2 border-black/20 pl-4 py-1">
              Limited to 12 participants<br/>per workshop
            </span>
          </div>
          {/* Social Proof Signal */}
          <div className="hero-anim flex items-center gap-4 pt-4 border-t border-black/10">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-black/20 border-2 border-[#E6E6E1]"></div>
              <div className="w-8 h-8 rounded-full bg-black/30 border-2 border-[#E6E6E1]"></div>
              <div className="w-8 h-8 rounded-full bg-black/40 border-2 border-[#E6E6E1]"></div>
            </div>
            <span className="text-sm font-medium text-black/60">Trusted by leading engineering teams across Denmark</span>
          </div>
        </div>
      </section>

      {/* C. TARGET AUDIENCE (Moved up for self-selection) */}
      <section id="audience" className="py-24 bg-black text-[#E6E6E1] px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-0 border-4 border-white/20 rounded-xl overflow-hidden">
          <div className="p-12 md:p-16 bg-black border-b md:border-b-0 md:border-r border-white/20">
            <div className="flex items-center gap-4 mb-8">
              <CheckSquare size={32} className="text-[#E6E6E1]" />
              <h3 className="text-3xl font-bold uppercase">Who It's For</h3>
            </div>
            <ul className="space-y-6 text-lg font-medium text-[#E6E6E1]/80">
              <li className="flex gap-3"><span className="text-[#E6E6E1]">—</span> Lead developers & senior engineers wanting a structured methodology</li>
              <li className="flex gap-3"><span className="text-[#E6E6E1]">—</span> Architects evaluating agentic engineering strategies</li>
              <li className="flex gap-3"><span className="text-[#E6E6E1]">—</span> Team leads aligning their team on AI workflows</li>
              <li className="flex gap-3"><span className="text-[#E6E6E1]">—</span> AI/Data engineers bridging models to production</li>
            </ul>
          </div>
          <div className="p-12 md:p-16 bg-[#111]">
            <div className="flex items-center gap-4 mb-8">
              <XSquare size={32} className="text-white/50" />
              <h3 className="text-3xl font-bold uppercase text-white/50">Who It's Not For</h3>
            </div>
            <ul className="space-y-6 text-lg font-medium text-white/50">
              <li className="flex gap-3"><span>—</span> Business-side stakeholders (stay tuned)</li>
              <li className="flex gap-3"><span>—</span> Complete beginners in software development</li>
              <li className="flex gap-3"><span>—</span> Teams looking for a 1-hour overview or rubber-stamp certification</li>
            </ul>
            <div className="pt-6 mt-6 border-t border-white/10 text-white/80">
              <p className="font-bold mb-2">Requirement:</p>
              <p className="text-white/60">Minimum 3 participants from the same organization. This is a team capability, not a personal credential.</p>
            </div>
          </div>
        </div>
      </section>

      {/* D. THE PROBLEM (Enhanced Philosophy Style) */}
      <section id="problem" className="relative py-48 px-6 md:px-16 bg-[#E6E6E1] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356f27?q=80&w=2000" alt="Industrial Textures" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="phil-word text-xl md:text-2xl text-black/50 mb-8 font-medium">
            Vibe coding gets you started. It won't get you to production.
          </p>
          <div className="phil-word text-lg md:text-xl text-black/70 max-w-3xl mb-12 font-medium leading-relaxed space-y-6">
            <p>Your developers are already using AI — Copilot, ChatGPT, Claude — to write code faster. That's good. But there's a gap between "AI helped me write this function" and "AI systematically helped us deliver this feature, tested, documented, and ready for production."</p>
            <p>That gap has a name: <strong className="text-black">agentic engineering</strong>.</p>
          </div>
          <div className="phil-word bg-black text-[#E6E6E1] rounded-xl p-8 md:p-12 max-w-3xl">
            <p className="text-lg md:text-xl font-medium leading-relaxed">
              Teams that figure out agentic engineering first will ship faster, with fewer defects, and with documentation as a byproduct — not an afterthought. Teams that don't will keep treating AI as a productivity trick and wonder why the results are inconsistent.
            </p>
          </div>
        </div>
      </section>

      {/* E. KEY OUTCOMES (NEW SECTION) */}
      <section id="outcomes" className="py-24 bg-black text-[#E6E6E1] px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">What You'll Walk Away With</h2>
            <p className="text-xl font-medium text-[#E6E6E1]/60 max-w-2xl">Action-oriented outcomes you can apply on Monday morning.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                action: "Interview unfamiliar codebases using clarifying agents",
                result: "onboard to any project in hours, not weeks"
              },
              {
                action: "Apply the Three Chapters framework (Greenfield, Extension, Stewardship)",
                result: "choose the right agentic approach for every project type"
              },
              {
                action: "Write specs that agents can execute reliably",
                result: "your AI output is production-grade, not 'works on my machine'"
              },
              {
                action: "Catch and correct agent mistakes systematically",
                result: "maintain engineering rigor while moving fast"
              },
              {
                action: "Build a personal 'in the wild' project with defined success criteria",
                result: "apply the methodology to your actual work immediately"
              },
              {
                action: "Produce a team diagnostic for your CTO",
                result: "leadership sees exactly where agentic engineering fits in your organization"
              }
            ].map((outcome, i) => (
              <div key={i} className="outcome-item bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#E6E6E1] text-black flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-2">You'll be able to {outcome.action}</p>
                    <p className="text-[#E6E6E1]/60">so you can {outcome.result}.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* F. THE THREE CHAPTERS (Features) */}
      <section id="chapters" className="py-24 px-6 md:px-16 bg-[#E6E6E1] relative z-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">The Three Chapters Framework</h2>
            <p className="text-xl font-medium text-black/70 max-w-2xl">Every software project falls into one of three chapters. Your team will learn the right agentic approach for each.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            <DiagnosticShuffler />
            <TelemetryTypewriter />
            <CursorScheduler />
          </div>
        </div>
      </section>

      {/* G. DETAILED CURRICULUM (Enhanced Protocol Stacking) */}
      <section id="curriculum" className="bg-[#E6E6E1] py-24 px-6 md:px-16 relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">Hands-on from the first hour.</h2>
            <p className="text-xl font-medium text-black/70">Not slides. Not theory. Real code on real challenges.</p>
          </div>
          <div className="relative">
            {/* Card 1: Day 1 */}
            <div className="protocol-card sticky top-32 min-h-[600px] md:min-h-[550px] bg-white rounded-xl p-8 md:p-12 mb-12 shadow-xl border border-black/5">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-full bg-black text-[#E6E6E1] flex items-center justify-center font-bold text-2xl">1</div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold tracking-tight">DAY 1</h3>
                      <p className="text-black/60 font-medium">ORIENTATION & FIRST CONTACT</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-sm md:text-base">
                    <div className="grid grid-cols-[80px_1fr] gap-4 py-3 border-b border-black/10">
                      <span className="font-mono font-bold text-black/50">09:00</span>
                      <div><strong>Opening</strong> — The promise. Why agentic engineering matters for your career.</div>
                    </div>
                    <div className="grid grid-cols-[80px_1fr] gap-4 py-3 border-b border-black/10">
                      <span className="font-mono font-bold text-black/50">09:20</span>
                      <div><strong>Framework</strong> — Vibe coding vs. agentic engineering. Three chapters. Clarifying agent protocol.</div>
                    </div>
                    <div className="grid grid-cols-[80px_1fr] gap-4 py-3 border-b border-black/10">
                      <span className="font-mono font-bold text-black/50">10:45</span>
                      <div><strong>Tooling Setup</strong> — Pre-configured workstations. Claude Code + Cursor operational in 30 mins.</div>
                    </div>
                    <div className="grid grid-cols-[80px_1fr] gap-4 py-3 border-b border-black/10">
                      <span className="font-mono font-bold text-black/50">11:15</span>
                      <div><strong>Application Exploration</strong> — Interview the agent about an unfamiliar codebase. Self-guided exploration.</div>
                    </div>
                    <div className="grid grid-cols-[80px_1fr] gap-4 py-3 border-b border-black/10">
                      <span className="font-mono font-bold text-black/50">12:45</span>
                      <div><strong>Challenge Set 1</strong> — Frontend modification tasks. Hands-on coding.</div>
                    </div>
                    <div className="grid grid-cols-[80px_1fr] gap-4 py-3 border-b border-black/10">
                      <span className="font-mono font-bold text-black/50">14:30</span>
                      <div><strong>Challenge Set 2</strong> — Backend modification tasks. Less scaffolding, more autonomy.</div>
                    </div>
                    <div className="grid grid-cols-[80px_1fr] gap-4 py-3">
                      <span className="font-mono font-bold text-black/50">16:00</span>
                      <div><strong>Debrief</strong> — What surprised you? What broke? What worked?</div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-64 flex items-center justify-center">
                  <div className="w-48 h-48 md:w-64 md:h-64 relative flex items-center justify-center border-2 border-dashed border-black/20 rounded-full overflow-hidden bg-[#E6E6E1]/50">
                    <svg viewBox="0 0 100 100" className="w-3/4 h-3/4 animate-[spin_15s_linear_infinite] opacity-60">
                      <path d="M50 10 L55 25 L70 20 L65 35 L80 40 L70 50 L80 60 L65 65 L70 80 L55 75 L50 90 L45 75 L30 80 L35 65 L20 60 L30 50 L20 40 L35 35 L30 20 L45 25 Z" fill="none" stroke="#000000" strokeWidth="2" strokeLinejoin="round"/>
                      <circle cx="50" cy="50" r="15" fill="none" stroke="#000000" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Day 2 */}
            <div className="protocol-card sticky top-40 min-h-[600px] md:min-h-[550px] bg-black text-[#E6E6E1] rounded-xl p-8 md:p-12 mb-12 shadow-2xl">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-full bg-[#E6E6E1] text-black flex items-center justify-center font-bold text-2xl">2</div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold tracking-tight">DAY 2</h3>
                      <p className="text-[#E6E6E1]/60 font-medium">DEPTH & COMMITMENT</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-sm md:text-base">
                    <div className="grid grid-cols-[80px_1fr] gap-4 py-3 border-b border-white/10">
                      <span className="font-mono font-bold text-[#E6E6E1]/50">09:00</span>
                      <div><strong>Demos</strong> — 3-4 participants show Day 1 results. Learn from peers.</div>
                    </div>
                    <div className="grid grid-cols-[80px_1fr] gap-4 py-3 border-b border-white/10">
                      <span className="font-mono font-bold text-[#E6E6E1]/50">10:15</span>
                      <div><strong>Challenge Set 3</strong> — Multi-file changes. Catching and correcting agent mistakes.</div>
                    </div>
                    <div className="grid grid-cols-[80px_1fr] gap-4 py-3 border-b border-white/10">
                      <span className="font-mono font-bold text-[#E6E6E1]/50">12:00</span>
                      <div><strong>Why Things Fail</strong> — Live failure mode demo. What to monitor, how to recover.</div>
                    </div>
                    <div className="grid grid-cols-[80px_1fr] gap-4 py-3 border-b border-white/10">
                      <span className="font-mono font-bold text-[#E6E6E1]/50">13:00</span>
                      <div><strong>Challenge Set 4</strong> — Participant's choice across all 3 chapters. Full autonomy.</div>
                    </div>
                    <div className="grid grid-cols-[80px_1fr] gap-4 py-3 border-b border-white/10">
                      <span className="font-mono font-bold text-[#E6E6E1]/50">14:30</span>
                      <div><strong>Org Diagnostic</strong> — Where should your company apply agentic engineering?</div>
                    </div>
                    <div className="grid grid-cols-[80px_1fr] gap-4 py-3 border-b border-white/10">
                      <span className="font-mono font-bold text-[#E6E6E1]/50">15:15</span>
                      <div><strong>The Bleeding Edge</strong> — Demo: agents self-organizing operations. Where this is heading.</div>
                    </div>
                    <div className="grid grid-cols-[80px_1fr] gap-4 py-3">
                      <span className="font-mono font-bold text-[#E6E6E1]/50">15:35</span>
                      <div><strong>Close</strong> — Q&A. Shooting Star community. 6-week reunion.</div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-64 flex items-center justify-center">
                  <div className="w-48 h-48 md:w-64 md:h-64 relative bg-[#111] rounded-xl overflow-hidden border border-white/10">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-[#E6E6E1] shadow-[0_0_15px_#E6E6E1] animate-[scan_3s_linear_infinite] opacity-80"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: The Practice */}
            <div className="protocol-card sticky top-48 min-h-[450px] bg-white rounded-xl p-8 md:p-12 shadow-xl border border-black/5">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">THE PRACTICE BEGINS</h3>
                  <p className="text-black/80 font-medium text-lg mb-8">This isn't a certificate you hang on the wall. It's a practice you bring to work on Monday.</p>
                  <ul className="space-y-4 text-black/80 font-medium text-lg border-l-4 border-black pl-6">
                    <li><strong>Shooting Star Community:</strong> Ongoing support channel for alumni.</li>
                    <li><strong>6-Week Physical Reunion:</strong> Return to demo your "in the wild" project results.</li>
                    <li><strong>Recognition Tiers:</strong> Reward application and evangelism within your org.</li>
                  </ul>
                </div>
                <div className="lg:w-64 flex items-center justify-center">
                  <div className="w-48 h-48 md:w-64 md:h-64 relative flex items-center justify-center bg-[#E6E6E1]/30 rounded-xl border border-black/10">
                    <svg viewBox="0 0 200 100" className="w-full px-4">
                      <path d="M0 50 L 40 50 L 50 20 L 60 80 L 70 50 L 200 50" fill="none" stroke="#000000" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter" className="animate-[dash_2s_linear_infinite]" strokeDasharray="300" strokeDashoffset="300"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H. INSTRUCTOR SECTION (NEW) */}
      <section id="instructor" className="py-24 bg-[#E6E6E1] px-6 md:px-16 border-t border-black/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-sm font-bold uppercase tracking-widest text-black/50 mb-4">Your Instructor</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">Daniel Holm Kristensen</h2>
              <p className="text-xl font-medium text-black/60 mb-8">Founder, The Agentic Agency</p>

              <ul className="space-y-4 text-lg font-medium text-black/80 mb-8">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-black mt-2.5 flex-shrink-0"></span>
                  Building production AI systems since the early GPT era
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-black mt-2.5 flex-shrink-0"></span>
                  Developed agentic workflows for enterprise-scale deployments
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-black mt-2.5 flex-shrink-0"></span>
                  Passionate about bridging the gap between AI hype and engineering reality
                </li>
              </ul>

              <blockquote className="border-l-4 border-black pl-6 py-2 text-lg italic text-black/70">
                "We've spent years watching engineering teams struggle with the same agentic AI mistakes. The Spark compresses 18 months of trial-and-error into 2 days of structured practice."
              </blockquote>

              <p className="mt-8 text-sm text-black/50 font-medium">
                This is not a certification. No one in the world is an authority on agentic engineering yet. This is a practical, evolving methodology delivered by practitioners who invest massive effort staying at the forefront. <strong>Pioneer spirit, not institutional authority.</strong>
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-black/10 rounded-2xl flex items-center justify-center border-4 border-black/5">
                <div className="text-center">
                  <Users size={64} className="mx-auto mb-4 text-black/30" />
                  <span className="text-sm font-medium text-black/40">Instructor Photo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* I. SOCIAL PROOF (NEW - Placeholder) */}
      <section id="testimonials" className="py-24 bg-black text-[#E6E6E1] px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <Star size={20} className="text-yellow-400 fill-yellow-400" />
              <span className="font-bold">4.9/5</span>
              <span className="text-[#E6E6E1]/60">from workshop participants</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">What Engineers Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Before The Spark, I was using Claude like a fancy autocomplete. Now I have a systematic methodology I can apply to any project. The three chapters framework changed how I think about AI in my work.",
                name: "Senior Developer",
                company: "Copenhagen Tech Company",
                placeholder: true
              },
              {
                quote: "Day 2's failure mode demos were worth the entire workshop. Understanding how to catch and correct agent mistakes systematically has made my code reviews completely different.",
                name: "Lead Engineer",
                company: "Danish Scale-up",
                placeholder: true
              },
              {
                quote: "Our team came in skeptical and left with a shared vocabulary and methodology. The CTO diagnostic we produced is now part of our quarterly planning.",
                name: "Engineering Manager",
                company: "Enterprise Client",
                placeholder: true
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-8 relative">
                {testimonial.placeholder && (
                  <div className="absolute top-4 right-4 bg-white/10 px-2 py-1 rounded text-xs font-mono">
                    Placeholder
                  </div>
                )}
                <p className="text-lg font-medium leading-relaxed mb-6 text-[#E6E6E1]/90">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20"></div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-[#E6E6E1]/60">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Client Logos Placeholder */}
          <div className="mt-16 pt-16 border-t border-white/10 text-center">
            <p className="text-sm font-medium text-[#E6E6E1]/40 mb-8">Engineers from these companies have attended The Spark</p>
            <div className="flex justify-center items-center gap-12 flex-wrap opacity-30">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="w-24 h-8 bg-white/20 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* J. PRICING */}
      <section id="pricing" className="py-24 bg-[#E6E6E1] text-center px-6">
        <div className="max-w-4xl mx-auto border-4 border-black rounded-xl p-12 md:p-24 bg-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase mb-2">One Price. No Complexity.</h2>
          <p className="text-xl font-medium text-black/70 mb-12">Under your approval threshold.</p>

          <div className="font-mono text-7xl md:text-8xl font-bold mb-6 tracking-tighter">
            49,999 <span className="text-2xl text-black/50">DKK</span>
          </div>
          <p className="text-lg font-bold mb-4">Ex. VAT</p>

          <ul className="text-left max-w-md mx-auto mb-12 space-y-3">
            <li className="flex items-center gap-3">
              <CheckSquare size={20} className="text-black flex-shrink-0" />
              <span className="font-medium">Up to 12 participants per workshop</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckSquare size={20} className="text-black flex-shrink-0" />
              <span className="font-medium">Open or closed (on-site) workshops</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckSquare size={20} className="text-black flex-shrink-0" />
              <span className="font-medium">Pre-configured workstations included</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckSquare size={20} className="text-black flex-shrink-0" />
              <span className="font-medium">All materials and resources</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckSquare size={20} className="text-black flex-shrink-0" />
              <span className="font-medium">Access to Shooting Star community</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckSquare size={20} className="text-black flex-shrink-0" />
              <span className="font-medium">6-week physical reunion</span>
            </li>
          </ul>

          <div className="bg-[#E6E6E1]/50 p-6 rounded-lg mb-12 text-left border border-black/10">
            <p className="font-medium text-sm text-black/80">
              <strong>Early Adopter?</strong> Founding partner rate available for early clients. Shape the program's evolution in exchange for testimonials.
            </p>
          </div>

          <MagneticButton className="mx-auto bg-black text-[#E6E6E1] px-12 py-6 text-xl font-bold flex items-center gap-3 hover:bg-black/90">
            Get in touch <ArrowUpRight size={24}/>
          </MagneticButton>
        </div>
      </section>

      {/* K. FAQ (Expanded) */}
      <section id="faq" className="py-24 bg-[#E6E6E1] px-6 md:px-16 border-t-4 border-black">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-16">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              { q: "What is agentic engineering?", a: "The discipline of using AI agents systematically across the full software development lifecycle—from requirements to TDD and implementation. It's the step beyond autocomplete." },
              { q: "How is this different from a regular AI course?", a: "Most courses teach prompting. The Spark teaches a methodology. It's hands-on: your team writes real code on a real application for two full days." },
              { q: "What tools do you use?", a: "Industry-leading agentic tools including Claude Code and Cursor. Workstations come pre-configured—your team is coding within the first hour." },
              { q: "Do participants need prior AI experience?", a: "Basic development experience is required, but no specific AI tool experience is needed. We build from fundamentals to advanced patterns." },
              { q: "Can you run this on-site?", a: "Yes. Closed workshops are delivered on-site at your location for a minimum of 3 participants from your organization. Same price, same format." },
              { q: "Is this a certification?", a: "No. No one is an authority on agentic engineering yet. This is a practical, evolving methodology delivered by practitioners. Pioneer spirit, not institutional authority." },
              { q: "What happens after the workshop?", a: "Shooting Star community access for ongoing support, a personal 'in the wild' project with defined success criteria, and a 6-week physical reunion to demo your results and learn from peers." },
              { q: "What's the minimum group size?", a: "3 participants from the same organization. We don't sell individual seats—this is a team capability, not a personal credential." }
            ].map((faq, i) => (
              <div key={i} className="border-b-2 border-black/20 pb-6">
                <h4 className="text-xl font-bold mb-3">{faq.q}</h4>
                <p className="text-black/70 font-medium leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* L. PRODUCT LADDER HINT (NEW - Light) */}
      <section className="py-16 bg-[#E6E6E1] px-6 md:px-16 border-t border-black/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-black/5 rounded-xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">What Comes After The Spark?</h3>
            <p className="text-lg text-black/70 mb-8 max-w-2xl">The Spark is the door. For teams that want to go deeper:</p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-black/10">
                <ChevronRight size={24} className="text-black/40 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-1">The Catalyst <span className="text-black/40 font-normal">(12 weeks)</span></h4>
                  <p className="text-black/60">Transform one team with embedded support and coaching.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-black/10">
                <ChevronRight size={24} className="text-black/40 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-1">The Scale Engine <span className="text-black/40 font-normal">(6-12 months)</span></h4>
                  <p className="text-black/60">Scale the practice organization-wide with full implementation support.</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-black/50 font-medium">Start with The Spark. Let the results speak for themselves.</p>
          </div>
        </div>
      </section>

      {/* M. FOOTER CTA */}
      <footer className="bg-black text-[#E6E6E1]/60 pt-24 pb-12 px-6 md:px-16 rounded-t-[4rem]">
        <div className="max-w-[1400px] mx-auto text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 text-[#E6E6E1]">Ready to move beyond vibe coding?</h2>
          <p className="text-xl font-medium mb-12 max-w-2xl mx-auto">The Spark is running now. Founding partner spots are limited.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <MagneticButton className="bg-[#E6E6E1] text-black px-10 py-5 text-lg font-bold">
              Book a workshop
            </MagneticButton>
            <a href="#" className="font-bold text-[#E6E6E1] hover:underline underline-offset-4">Questions? Talk to us →</a>
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

/* --- Subcomponents for Features Section --- */

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
          <a href="#audience" className="hover:opacity-60 transition-opacity">Who It's For</a>
          <a href="#chapters" className="hover:opacity-60 transition-opacity">Framework</a>
          <a href="#curriculum" className="hover:opacity-60 transition-opacity">Curriculum</a>
          <a href="#pricing" className="hover:opacity-60 transition-opacity">Pricing</a>
        </div>
        <MagneticButton className="bg-black text-[#E6E6E1] px-5 py-2.5 text-xs font-bold uppercase tracking-wide">
          Book a workshop
        </MagneticButton>
      </nav>
    </div>
  );
};

const DiagnosticShuffler = () => {
  const [items, setItems] = useState([
    "Gather Requirements",
    "Structure Specs",
    "Drive Test-Driven Dev"
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev => {
        const newArr = [...prev];
        const last = newArr.pop();
        newArr.unshift(last);
        return newArr;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-xl p-8 border border-black/10 shadow-sm flex flex-col h-[450px]">
      <div className="flex items-center gap-3 mb-4">
        <Code2 size={24} className="text-black" />
        <h3 className="font-bold text-2xl uppercase tracking-tight">Chap. 1: Greenfield</h3>
      </div>
      <p className="text-black/70 font-medium text-sm mb-4 leading-relaxed">Building something entirely new. The agent drives architecture and TDD from day one.</p>
      <ul className="text-sm text-black/60 space-y-2 mb-6">
        <li>• New applications, services, integrations</li>
        <li>• Agent drives architecture decisions</li>
        <li>• Clarifying agents focus on requirements and boundaries</li>
      </ul>

      <div className="relative flex-1 mt-4">
        {items.map((item, index) => (
          <div
            key={item}
            className="absolute w-full bg-[#E6E6E1] border border-black/20 rounded-xl p-4 flex items-center justify-center transition-all duration-700 ease-bounce-spring shadow-sm"
            style={{
              top: `${index * 60}px`,
              zIndex: 10 - index,
              transform: `scale(${1 - index * 0.05})`,
              opacity: 1 - index * 0.2
            }}
          >
            <span className="font-bold text-black uppercase tracking-wide text-xs">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const TelemetryTypewriter = () => {
  const lines = [
    "Mapping existing architecture...",
    "Identifying coupling points...",
    "Generating non-breaking specs...",
    "Feature integrated safely."
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
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(fullText.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setCurrentLine((prev) => (prev + 1) % lines.length);
        }
      }
    }, isDeleting ? 30 : 70);

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentLine]);

  return (
    <div className="bg-black rounded-xl p-8 border border-black/30 shadow-sm flex flex-col h-[450px] text-[#E6E6E1]">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <GitBranch size={24} className="text-[#E6E6E1]" />
          <h3 className="font-bold text-2xl uppercase tracking-tight">Chap. 2: Extension</h3>
        </div>
      </div>
      <p className="text-[#E6E6E1]/60 font-medium text-sm mb-4 leading-relaxed">New on existing. Ensure new features don't break what's already there.</p>
      <ul className="text-sm text-[#E6E6E1]/50 space-y-2 mb-6">
        <li>• Adding capabilities to working platforms</li>
        <li>• Agent maps existing architecture</li>
        <li>• Identifies coupling points before changes</li>
      </ul>

      <div className="flex-1 bg-[#111] border border-white/10 rounded-xl p-6 font-mono text-sm flex items-start shadow-inner">
        <span className="text-[#E6E6E1]/50 mr-2">~%</span>
        <p className="leading-relaxed">
          {text}
          <span className="inline-block w-2 h-4 bg-[#E6E6E1] ml-1 animate-[pulse_1s_step-end_infinite]"></span>
        </p>
      </div>
    </div>
  );
};

const CursorScheduler = () => {
  const scheduleRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

      tl.set('.anim-cursor-2', { x: 0, y: 150, opacity: 0 });
      tl.set('.doc-cell', { backgroundColor: '#E6E6E1', color: '#000000' });

      tl.to('.anim-cursor-2', { opacity: 1, duration: 0.3 });
      tl.to('.anim-cursor-2', { x: 140, y: 40, duration: 1, ease: 'power2.inOut' });

      tl.to('.anim-cursor-2', { scale: 0.8, duration: 0.1 });
      tl.to('.doc-cell', { backgroundColor: '#000000', color: '#E6E6E1', duration: 0.1 });
      tl.to('.anim-cursor-2', { scale: 1, duration: 0.1 });

      tl.to('.anim-cursor-2', { x: 220, y: 180, duration: 1, ease: 'power2.inOut', delay: 0.5 });
      tl.to('.anim-cursor-2', { scale: 0.8, duration: 0.1 });
      tl.to('.save-btn', { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 });
      tl.to('.anim-cursor-2', { scale: 1, duration: 0.1 });

      tl.to('.anim-cursor-2', { opacity: 0, duration: 0.3, delay: 0.2 });

    }, scheduleRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={scheduleRef} className="bg-white rounded-xl p-8 border border-black/10 shadow-sm flex flex-col h-[450px] relative overflow-hidden">
      <div className="flex items-center gap-3 mb-4">
        <ShieldAlert size={24} className="text-black" />
        <h3 className="font-bold text-2xl uppercase tracking-tight">Chap. 3: Stewardship</h3>
      </div>
      <p className="text-black/70 font-medium text-sm mb-4 leading-relaxed">Refactoring, test coverage, and documentation recovery. The agent understands the codebase before touching it.</p>
      <ul className="text-sm text-black/60 space-y-2 mb-6">
        <li>• Focus on naming conventions, data architecture</li>
        <li>• Documentation recovery as byproduct</li>
        <li>• Governance and compliance support</li>
      </ul>

      <div className="flex-1 relative">
        <div className="grid grid-cols-2 gap-2 mb-6 text-center font-mono text-xs font-bold">
          <div className="h-10 border border-black/20 rounded-lg flex items-center justify-center bg-[#E6E6E1]">Test Cov.</div>
          <div className="h-10 border border-black/20 rounded-lg flex items-center justify-center bg-[#E6E6E1]">Refactor</div>
          <div className="doc-cell h-10 border border-black/20 rounded-lg flex items-center justify-center transition-colors shadow-sm col-span-2">Recover Docs</div>
        </div>

        <div className="absolute bottom-0 right-0 save-btn bg-black text-[#E6E6E1] px-6 py-2 rounded-lg text-sm font-bold uppercase tracking-wide border-2 border-transparent">
          Commit
        </div>

        <div className="anim-cursor-2 absolute top-0 left-0 w-8 h-8 z-20" style={{ pointerEvents: 'none' }}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4L18 10L12 12L10 18L4 4Z" fill="#000000" stroke="#FFFFFF" strokeWidth="1.5" strokeLinejoin="miter"/>
          </svg>
        </div>
      </div>
    </div>
  );
};
