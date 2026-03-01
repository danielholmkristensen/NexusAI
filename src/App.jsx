import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Activity, Cpu, TerminalSquare } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

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
            REWRITE THE
          </h1>
          <h1 className="hero-anim text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-none tracking-tighter mb-8">
            OPERATING SYSTEM.
          </h1>
          <p className="hero-anim text-xl md:text-2xl text-black/70 max-w-2xl mb-12 font-medium leading-snug">
            Nexus AI is the strategic transformation partner that reignites innovation capability for ambitious organizations trapped in rigid processes.
          </p>
          <div className="hero-anim">
            <MagneticButton className="bg-black text-[#E6E6E1] px-8 py-5 text-lg font-bold flex items-center gap-2 hover:bg-black/90">
              Book The Spark <ArrowUpRight size={20} />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* C. FEATURES */}
      <section className="py-32 px-6 md:px-16 bg-[#E6E6E1] relative z-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            <DiagnosticShuffler />
            <TelemetryTypewriter />
            <CursorScheduler />
          </div>
        </div>
      </section>

      {/* D. PHILOSOPHY */}
      <section id="philosophy" className="relative py-48 px-6 md:px-16 bg-black text-[#E6E6E1] overflow-hidden rounded-xl mx-4 my-12">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356f27?q=80&w=2000" alt="Industrial Textures" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="phil-word text-xl md:text-2xl text-[#E6E6E1]/60 mb-8 font-medium">
            Most consultancies focus on: implementing tools.
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight uppercase">
            <span className="phil-word inline-block mr-3">We</span>
            <span className="phil-word inline-block mr-3">focus</span>
            <span className="phil-word inline-block mr-3">on:</span>
            <span className="phil-word inline-block mr-3">upgrading</span>
            <span className="phil-word inline-block mr-3">your</span>
            <span className="phil-word inline-block mr-3">team's</span>
            <span className="phil-word inline-block mr-3">entire</span><br/>
            <span className="phil-word inline-block text-[#E6E6E1] bg-white/10 px-4 mt-4 border border-white/20 rounded-xl">OPERATING SYSTEM.</span>
          </h2>
        </div>
      </section>

      {/* E. PROTOCOL */}
      <section className="bg-[#E6E6E1] py-24 px-6 md:px-16 relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative">
            {/* Card 1 */}
            <div className="protocol-card sticky top-32 h-[60vh] md:h-[500px] bg-white rounded-xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 mb-12 shadow-xl border border-black/5">
              <div className="flex-1">
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">01. THE SPARK</h3>
                <p className="text-black/70 text-lg md:text-xl leading-relaxed max-w-md font-medium">
                  Diagnose the core problem. We map your value streams and pinpoint the exact legacy systems where agentic workflows will deliver the highest ROI.
                </p>
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
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">02. THE CATALYST</h3>
                <p className="text-[#E6E6E1]/70 text-lg md:text-xl leading-relaxed max-w-md font-medium">
                  Prove the value with a pilot team. We guide a single, high-impact team to a measurable win in one quarter, creating the internal case study for change.
                </p>
              </div>
              <div className="w-64 h-64 md:w-96 md:h-96 relative bg-[#111] rounded-xl overflow-hidden border border-white/10">
                 <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                 <div className="absolute top-0 left-0 w-full h-[3px] bg-[#E6E6E1] shadow-[0_0_15px_#E6E6E1] animate-[scan_3s_linear_infinite] opacity-80"></div>
                 <style>{`@keyframes scan { 0% { top: 0; } 100% { top: 100%; } }`}</style>
              </div>
            </div>

            {/* Card 3 */}
            <div className="protocol-card sticky top-48 h-[60vh] md:h-[500px] bg-white rounded-xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-xl border border-black/5">
              <div className="flex-1">
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">03. THE SCALE ENGINE</h3>
                <p className="text-black/70 text-lg md:text-xl leading-relaxed max-w-md font-medium">
                  Embed the capability. We help you build a self-sustaining Center of Excellence and a talent ecosystem to make agentic engineering your new default.
                </p>
              </div>
              <div className="w-64 h-64 md:w-96 md:h-96 relative flex items-center justify-center bg-[#E6E6E1]/30 rounded-xl border border-black/10">
                 <svg viewBox="0 0 200 100" className="w-full px-4">
                    <path d="M0 50 L 40 50 L 50 20 L 60 80 L 70 50 L 200 50" fill="none" stroke="#000000" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter" className="animate-[dash_2s_linear_infinite]" strokeDasharray="300" strokeDashoffset="300"/>
                 </svg>
                 <style>{`@keyframes dash { to { stroke-dashoffset: 0; } }`}</style>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* F. CTA SECTION */}
      <section className="py-32 bg-[#E6E6E1] text-center px-6">
        <div className="max-w-4xl mx-auto border-4 border-black rounded-xl p-12 md:p-24 bg-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6">Start The Transformation.</h2>
          <p className="text-xl md:text-2xl text-black/70 mb-12 font-medium max-w-2xl mx-auto">
            The Spark is a fixed-price, high-impact two-day diagnostic. It is the fastest way to understand the potential of agentic engineering in your organization.
          </p>
          <MagneticButton className="mx-auto bg-black text-[#E6E6E1] px-12 py-6 text-xl font-bold flex items-center gap-3 hover:bg-black/90">
            Book The Spark <ArrowUpRight size={24}/>
          </MagneticButton>
        </div>
      </section>

      {/* G. FOOTER */}
      <footer className="bg-black text-[#E6E6E1]/60 py-16 px-6 md:px-16 rounded-t-[4rem]">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h4 className="font-bold text-3xl text-[#E6E6E1] mb-2 tracking-tighter">NEXUS AI</h4>
            <p className="font-medium text-sm">Strategic transformation for the agentic era.</p>
          </div>
          <div>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-[#E6E6E1] transition-colors hover:-translate-y-px inline-block">The Spark</a></li>
              <li><a href="#" className="hover:text-[#E6E6E1] transition-colors hover:-translate-y-px inline-block">The Catalyst</a></li>
              <li><a href="#" className="hover:text-[#E6E6E1] transition-colors hover:-translate-y-px inline-block">The Scale Engine</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-[#E6E6E1] transition-colors hover:-translate-y-px inline-block">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#E6E6E1] transition-colors hover:-translate-y-px inline-block">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20">
          <p className="text-sm font-medium mb-4 md:mb-0">© 2026 Nexus AI. All rights reserved.</p>
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
    <div className="fixed top-6 left-0 w-full z-40 flex justify-center px-4 hover:-translate-y-px transition-transform duration-300">
      <nav className={`transition-all duration-500 rounded-full px-6 py-3 flex items-center gap-8 ${scrolled ? 'bg-[#E6E6E1]/60 backdrop-blur-xl border border-black/10 shadow-lg' : 'bg-transparent'}`}>
        <span className="font-bold tracking-tighter text-xl uppercase">NEXUS AI</span>
        <div className="hidden md:flex gap-6 text-sm font-semibold">
          <a href="#" className="hover:opacity-60 transition-opacity">The Spark</a>
          <a href="#" className="hover:opacity-60 transition-opacity">The Catalyst</a>
          <a href="#" className="hover:opacity-60 transition-opacity">The Scale Engine</a>
        </div>
        <MagneticButton className="bg-black text-[#E6E6E1] px-5 py-2.5 text-xs font-bold uppercase tracking-wide">
          Book The Spark
        </MagneticButton>
      </nav>
    </div>
  );
};

const DiagnosticShuffler = () => {
  const [items, setItems] = useState([
    "1. Pinpoint Bottlenecks",
    "2. Quantify Agentic Lift",
    "3. Build The Roadmap"
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
        <Activity size={24} className="text-black" />
        <h3 className="font-bold text-2xl uppercase tracking-tight">The Spark</h3>
      </div>
      <p className="text-black/70 font-medium text-sm mb-8 leading-relaxed">A high-impact diagnostic audit to identify bottlenecks and map the agentic opportunity.</p>

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
            <span className="font-bold text-black uppercase tracking-wide text-sm">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const TelemetryTypewriter = () => {
  const lines = [
    "Initializing pilot team...",
    "Deploying AXIOM framework...",
    "Measuring velocity increase...",
    "Success criteria met."
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
          <TerminalSquare size={24} className="text-[#E6E6E1]" />
          <h3 className="font-bold text-2xl uppercase tracking-tight">The Catalyst</h3>
        </div>
      </div>
      <p className="text-[#E6E6E1]/60 font-medium text-sm mb-8 leading-relaxed">A 3-month implementation program to guide a pilot team to a measurable win.</p>

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
      tl.set('.qbr-cell', { backgroundColor: 'transparent', color: '#000000' });

      tl.to('.anim-cursor-2', { opacity: 1, duration: 0.3 });
      tl.to('.anim-cursor-2', { x: 140, y: 40, duration: 1, ease: 'power2.inOut' });

      tl.to('.anim-cursor-2', { scale: 0.8, duration: 0.1 });
      tl.to('.qbr-cell', { backgroundColor: '#000000', color: '#E6E6E1', duration: 0.1 });
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
        <Cpu size={24} className="text-black" />
        <h3 className="font-bold text-2xl uppercase tracking-tight">The Scale Engine</h3>
      </div>
      <p className="text-black/70 font-medium text-sm mb-8 leading-relaxed">An ongoing partnership to build a self-sustaining, scalable transformation.</p>

      <div className="flex-1 relative">
        <div className="grid grid-cols-5 gap-2 mb-6 text-center font-mono text-xs font-bold">
          <div className="text-black/40">M</div><div className="text-black/40">T</div><div className="text-black/40">W</div><div className="text-black/40">T</div><div className="text-black/40">F</div>
          <div className="h-10 border border-black/20 rounded-lg flex items-center justify-center bg-[#E6E6E1]"></div>
          <div className="h-10 border border-black/20 rounded-lg flex items-center justify-center bg-[#E6E6E1]"></div>
          <div className="qbr-cell h-10 border border-black/20 rounded-lg flex items-center justify-center transition-colors shadow-sm">QBR</div>
          <div className="h-10 border border-black/20 rounded-lg flex items-center justify-center bg-[#E6E6E1]"></div>
          <div className="h-10 border border-black/20 rounded-lg flex items-center justify-center bg-[#E6E6E1]"></div>
        </div>

        <div className="absolute bottom-0 right-0 save-btn bg-black text-[#E6E6E1] px-6 py-2 rounded-lg text-sm font-bold uppercase tracking-wide border-2 border-transparent">
          Save
        </div>

        {/* Brutalist Cursor */}
        <div className="anim-cursor-2 absolute top-0 left-0 w-8 h-8 z-20" style={{ pointerEvents: 'none' }}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4L18 10L12 12L10 18L4 4Z" fill="#000000" stroke="#FFFFFF" strokeWidth="1.5" strokeLinejoin="miter"/>
          </svg>
        </div>
      </div>
    </div>
  );
};
