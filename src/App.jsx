import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Code2, GitBranch, ShieldAlert, CheckSquare, XSquare } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* --- SEO Structured Data --- */
const StructuredData = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "The Spark — Agentic Engineering Workshop",
    "description": "A 2-day hands-on workshop that transforms development teams into agentic engineering practitioners.",
    "provider": {
      "@type": "Organization",
      "name": "The Agentic Agency"
    },
    "courseMode": "onsite",
    "duration": "P2D",
    "offers": {
      "@type": "Offer",
      "price": "49999",
      "priceCurrency": "DKK",
      "availability": "https://schema.org/InStock"
    },
    "occupationalCategory": "Software Development",
    "teaches": "Agentic engineering methodology for production-grade AI-assisted software development",
    "coursePrerequisites": "Software development experience",
    "maximumAttendeeCapacity": 12
  };

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

      {/* A. NAVBAR */}
      <FloatingNav />

      {/* B. HERO SECTION */}
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
            <MagneticButton className="bg-black text-[#E6E6E1] px-8 py-5 text-lg font-bold flex items-center gap-2 hover:bg-black/90">
              Book a workshop <ArrowUpRight size={20} />
            </MagneticButton>
            <span className="font-mono text-sm font-bold uppercase tracking-widest text-black/50 border-l-2 border-black/20 pl-4 py-1">
              Trusted by leading engineering<br/>teams across Denmark
            </span>
          </div>
        </div>
      </section>

      {/* C. THE PROBLEM (Philosophy Style) */}
      <section id="philosophy" className="relative py-48 px-6 md:px-16 bg-black text-[#E6E6E1] overflow-hidden rounded-xl mx-4 my-12">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356f27?q=80&w=2000" alt="Industrial Textures" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="phil-word text-xl md:text-3xl text-[#E6E6E1]/60 mb-8 font-medium">
            Vibe coding gets you started. It won't get you to production.
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight uppercase">
            <span className="phil-word inline-block mr-3">We</span>
            <span className="phil-word inline-block mr-3">bridge</span>
            <span className="phil-word inline-block mr-3">the</span>
            <span className="phil-word inline-block mr-3">gap</span>
            <span className="phil-word inline-block mr-3">to</span><br/>
            <span className="phil-word inline-block text-[#E6E6E1] bg-white/10 px-4 mt-4 border border-white/20 rounded-xl">AGENTIC ENGINEERING.</span>
          </h2>
          <p className="mt-12 text-lg text-[#E6E6E1]/70 max-w-3xl mx-auto font-medium phil-word">
            Teams that figure out agentic engineering first will ship faster, with fewer defects, and with documentation as a byproduct — not an afterthought. Teams that don't will keep treating AI as a productivity trick and wonder why the results are inconsistent.
          </p>
        </div>
      </section>

      {/* D. THE THREE CHAPTERS (Features) */}
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

      {/* E. HOW IT WORKS (Protocol Stacking) */}
      <section className="bg-[#E6E6E1] py-24 px-6 md:px-16 relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">Hands-on from the first hour.</h2>
            <p className="text-xl font-medium text-black/70">Not slides. Not theory. Real code.</p>
          </div>
          <div className="relative">
            {/* Card 1 */}
            <div className="protocol-card sticky top-32 h-[60vh] md:h-[500px] bg-white rounded-xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 mb-12 shadow-xl border border-black/5">
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
            <div className="protocol-card sticky top-40 h-[60vh] md:h-[500px] bg-black text-[#E6E6E1] rounded-xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 mb-12 shadow-2xl">
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
            <div className="protocol-card sticky top-48 h-[60vh] md:h-[500px] bg-white rounded-xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-xl border border-black/5">
              <div className="flex-1">
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">THE PRACTICE BEGINS</h3>
                <p className="text-black/80 font-medium text-lg mb-6">This isn't a certificate you hang on the wall. It's a practice you bring to work on Monday.</p>
                <ul className="space-y-4 text-black/80 font-medium text-lg border-l-4 border-black pl-6">
                  <li><strong>Shooting Star Community:</strong> Ongoing support channel.</li>
                  <li><strong>6-Week Reunion:</strong> Physical meetup to demo results.</li>
                  <li><strong>Recognition Tiers:</strong> Reward application and evangelism.</li>
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

      {/* F. TARGET AUDIENCE */}
      <section className="py-24 bg-black text-[#E6E6E1] px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-0 border-4 border-white/20 rounded-xl overflow-hidden">
          <div className="p-12 md:p-16 bg-black border-b md:border-b-0 md:border-r border-white/20">
            <div className="flex items-center gap-4 mb-8">
              <CheckSquare size={32} className="text-[#E6E6E1]" />
              <h3 className="text-3xl font-bold uppercase">Who It's For</h3>
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
              <h3 className="text-3xl font-bold uppercase text-white/50">Who It's Not For</h3>
            </div>
            <ul className="space-y-6 text-lg font-medium text-white/50">
              <li>Business-side stakeholders (stay tuned).</li>
              <li>Complete beginners in software development.</li>
              <li>Teams looking for a 1-hour overview or rubber-stamp certification.</li>
              <li className="pt-4 mt-4 border-t border-white/10 text-white/80">
                <strong>Requirement:</strong> Minimum group size is 3 participants from the same organization. This is a team capability, not a personal credential.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* G. PRICING */}
      <section className="py-24 bg-[#E6E6E1] text-center px-6">
        <div className="max-w-4xl mx-auto border-4 border-black rounded-xl p-12 md:p-24 bg-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase mb-2">One Price. No Complexity.</h2>
          <p className="text-xl font-medium text-black/70 mb-12">Under your approval threshold.</p>

          <div className="font-mono text-7xl md:text-8xl font-bold mb-6 tracking-tighter">
            49,999 <span className="text-2xl text-black/50">DKK</span>
          </div>
          <p className="text-lg font-bold mb-12 border-b-2 border-black/10 pb-12 max-w-lg mx-auto">
            Ex. VAT. Up to 12 participants.<br/><span className="font-medium text-black/70">Open or Closed (On-site) Workshops.</span>
          </p>

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

      {/* H. FAQ */}
      <section className="py-24 bg-[#E6E6E1] px-6 md:px-16 border-t-4 border-black">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-16">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              { q: "What is agentic engineering?", a: "The discipline of using AI agents systematically across the full software development lifecycle—from specs to TDD and implementation. It's the step beyond autocomplete." },
              { q: "How is this different from a regular AI course?", a: "Most courses teach prompting. The Spark teaches a methodology. It's hands-on: your team writes real code on a real application for two full days." },
              { q: "What tools do you use?", a: "Industry-leading agentic tools including Claude Code and Cursor. Workstations come pre-configured—your team is coding within the first hour." },
              { q: "Do participants need prior AI experience?", a: "Basic development experience is required, but no specific AI tool experience is needed. We build from fundamentals to advanced patterns." },
              { q: "Can you run this on-site?", a: "Yes. Closed workshops are delivered on-site at your location for a minimum of 3 participants from your organization. Same price, same format." },
              { q: "Is this a certification?", a: "No. No one is an authority on agentic engineering yet. This is a practical, evolving methodology delivered by practitioners. Pioneer spirit, not institutional authority." }
            ].map((faq, i) => (
              <div key={i} className="border-b-2 border-black/20 pb-6">
                <h4 className="text-xl font-bold mb-3">{faq.q}</h4>
                <p className="text-black/70 font-medium leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* I. FOOTER CTA */}
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
          <a href="#" className="hover:opacity-60 transition-opacity">The Problem</a>
          <a href="#" className="hover:opacity-60 transition-opacity">Chapters</a>
          <a href="#" className="hover:opacity-60 transition-opacity">Curriculum</a>
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
    <div className="bg-white rounded-xl p-8 border border-black/10 shadow-sm flex flex-col h-[400px]">
      <div className="flex items-center gap-3 mb-4">
        <Code2 size={24} className="text-black" />
        <h3 className="font-bold text-2xl uppercase tracking-tight">Chap. 1: Greenfield</h3>
      </div>
      <p className="text-black/70 font-medium text-sm mb-8 leading-relaxed">Building something entirely new. The agent drives architecture and TDD from day one.</p>

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
    <div className="bg-black rounded-xl p-8 border border-black/30 shadow-sm flex flex-col h-[400px] text-[#E6E6E1]">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <GitBranch size={24} className="text-[#E6E6E1]" />
          <h3 className="font-bold text-2xl uppercase tracking-tight">Chap. 2: Extension</h3>
        </div>
      </div>
      <p className="text-[#E6E6E1]/60 font-medium text-sm mb-8 leading-relaxed">New on existing. Ensure new features don't break what's already there.</p>

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
    <div ref={scheduleRef} className="bg-white rounded-xl p-8 border border-black/10 shadow-sm flex flex-col h-[400px] relative overflow-hidden">
      <div className="flex items-center gap-3 mb-4">
        <ShieldAlert size={24} className="text-black" />
        <h3 className="font-bold text-2xl uppercase tracking-tight">Chap. 3: Stewardship</h3>
      </div>
      <p className="text-black/70 font-medium text-sm mb-8 leading-relaxed">Refactoring, test coverage, and documentation recovery. The agent understands the codebase before touching it.</p>

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
