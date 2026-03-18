import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, ArrowLeft, Plus, XSquare, CheckSquare, AlertTriangle, TerminalSquare, Star, Eye, EyeOff, Settings } from 'lucide-react';

/* --- Architectural Registration Mark --- */
const RegMark = ({ className }) => (
  <div className={`absolute w-4 h-4 flex items-center justify-center opacity-40 z-30 ${className}`}>
    <Plus size={16} strokeWidth={1} />
  </div>
);

export default function ExecutiveDeck() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showSlideManager, setShowSlideManager] = useState(false);
  const deckRef = useRef(null);

  // Slide visibility state - all visible by default
  const [slideVisibility, setSlideVisibility] = useState(() => {
    const saved = localStorage.getItem('deckSlideVisibility');
    return saved ? JSON.parse(saved) : {};
  });

  // Save visibility to localStorage
  useEffect(() => {
    localStorage.setItem('deckSlideVisibility', JSON.stringify(slideVisibility));
  }, [slideVisibility]);

  const toggleSlideVisibility = (slideId) => {
    setSlideVisibility(prev => ({
      ...prev,
      [slideId]: !prev[slideId]
    }));
  };

  // All slides with metadata
  const allSlides = [
    // ==========================================
    // ACT I: THE STATUS QUO & THE ENEMY
    // ==========================================
    {
      id: 'cover',
      title: 'Cover',
      numbered: false,
      content: (slideNum) => (
        <div key="s01" className="slide-content w-full h-full bg-black text-[#E6E6E1] p-16 flex flex-col justify-center relative overflow-hidden bg-blueprint-light">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000" alt="Brutalist Architecture" className="w-full h-full object-cover opacity-20 grayscale mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
          </div>
          <RegMark className="top-8 left-8 text-white" /><RegMark className="bottom-8 right-8 text-white" />
          <div className="relative z-20 flex flex-col h-full">
            <span className="font-mono text-sm tracking-widest uppercase text-white/50 mb-8 stagger-item bg-black/50 inline-block px-4 py-1 border border-white/10 w-max backdrop-blur-sm">EXECUTIVE OVERVIEW</span>
            <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-6 stagger-item drop-shadow-2xl">
              ENGINEERING <br/><span className="text-white/30">&gt;</span> PROMPTING.
            </h1>
            <p className="font-mono text-white/50 uppercase tracking-widest mt-auto stagger-item">The Agentic Agency</p>
          </div>
        </div>
      )
    },
    {
      id: 'gap',
      title: 'The Gap',
      numbered: true,
      content: (slideNum) => (
        <div key="s02" className="slide-content w-full h-full bg-[#E6E6E1] text-black p-16 flex flex-col justify-center relative overflow-hidden bg-blueprint-dark">
          <div className="absolute inset-0 z-0"><img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000" alt="Architectural Gap" className="w-full h-full object-cover opacity-10 grayscale" /></div>
          <RegMark className="top-8 left-8 text-black" />
          <span className="absolute top-16 right-16 font-mono text-3xl font-bold text-black/20 z-20">{String(slideNum).padStart(2, '0')}</span>
          <div className="relative z-20 max-w-5xl mx-auto text-center bg-[#E6E6E1]/80 backdrop-blur-sm p-12 border border-black/10 shadow-2xl">
            <p className="text-4xl md:text-6xl font-medium text-black/90 leading-snug mb-12 stagger-item">
              There's a gap between <br/><span className="font-bold italic">"AI helped me write this function"</span><br/>and<br/><span className="font-bold italic">"AI systematically delivered this feature."</span>
            </p>
            <div className="border-t-4 border-black pt-8 mt-4 stagger-item inline-block">
              <p className="text-3xl font-black uppercase tracking-tight">That gap has a name: AGENTIC ENGINEERING</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'anti-pattern',
      title: 'Anti-Pattern',
      numbered: true,
      content: (slideNum) => (
        <div key="s03" className="slide-content w-full h-full bg-[#E6E6E1] text-black p-16 flex flex-col relative overflow-hidden bg-blueprint-dark">
          <span className="absolute top-16 right-16 font-mono text-3xl font-bold text-black/20 z-20">{String(slideNum).padStart(2, '0')}</span>
          <div className="mb-4 stagger-item z-20 relative">
            <span className="font-mono text-xs tracking-widest uppercase text-black/50 mb-1 block bg-[#E6E6E1]/90 w-max px-1">ANTI-PATTERN</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter bg-[#E6E6E1]/90 w-max pr-4">Ad hoc prompting.</h2>
            <p className="text-xs font-medium text-black/70 max-w-xl mt-2 border-l-2 border-black pl-3 bg-[#E6E6E1]/80 backdrop-blur-sm py-1">
              Taking it one step at a time with the agent. AI builds fast — but without structure, it drifts.
            </p>
          </div>
          <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs><marker id="arrow-fail" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto-start-reverse"><polygon points="0 1, 6 4, 0 7" fill="#000000" /></marker></defs>
            <g className="anim-path opacity-70">
              <polyline points="8,55 25,42" fill="none" stroke="#000000" strokeWidth="2" vectorEffect="non-scaling-stroke" markerEnd="url(#arrow-fail)" />
              <polyline points="25,42 42,42" fill="none" stroke="#000000" strokeWidth="2" vectorEffect="non-scaling-stroke" markerEnd="url(#arrow-fail)" />
              <polyline points="42,42 38,72" fill="none" stroke="#000000" strokeWidth="2" vectorEffect="non-scaling-stroke" markerEnd="url(#arrow-fail)" />
              <polyline points="38,72 52,28" fill="none" stroke="#000000" strokeWidth="2" vectorEffect="non-scaling-stroke" markerEnd="url(#arrow-fail)" />
              <polyline points="52,28 65,48" fill="none" stroke="#000000" strokeWidth="2" vectorEffect="non-scaling-stroke" markerEnd="url(#arrow-fail)" />
              <polyline points="65,48 75,48" fill="none" stroke="#000000" strokeWidth="2" vectorEffect="non-scaling-stroke" markerEnd="url(#arrow-fail)" />
              <polyline points="75,48 82,68" fill="none" stroke="#000000" strokeWidth="2" vectorEffect="non-scaling-stroke" markerEnd="url(#arrow-fail)" />
            </g>
          </svg>
          <div className="absolute top-[40%] right-[12%] border-2 border-black px-6 py-2 bg-white z-20 stagger-item shadow-sm">
            <span className="text-sm font-bold uppercase tracking-widest text-black">Goal</span>
          </div>
          <div className="absolute bottom-[6%] right-[8%] w-[42%] max-w-[500px] z-20 stagger-item">
            <div className="bg-black text-[#E6E6E1] p-4 shadow-2xl flex flex-col gap-3 rounded-sm">
              <h3 className="text-xs font-bold uppercase tracking-widest border-b border-white/20 pb-2 flex justify-between">
                <span>Observable Symptoms</span>
                <span className="text-red-400">Cascading Consequences</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-1 text-[10px] font-medium text-white/80">
                  <li><XSquare size={10} className="inline mr-1.5 text-white/40"/>Missed scope</li>
                  <li><XSquare size={10} className="inline mr-1.5 text-white/40"/>Uncaught bugs</li>
                  <li><XSquare size={10} className="inline mr-1.5 text-white/40"/>Architecture violations</li>
                  <li><XSquare size={10} className="inline mr-1.5 text-white/40"/>Long debug sessions</li>
                </ul>
                <ul className="space-y-1 text-[10px] font-bold text-red-200">
                  <li><AlertTriangle size={10} className="inline mr-1.5 text-red-400"/>Regressions compound</li>
                  <li><AlertTriangle size={10} className="inline mr-1.5 text-red-400"/>Context loss</li>
                  <li><AlertTriangle size={10} className="inline mr-1.5 text-red-400"/>Mistakes repeated</li>
                  <li><AlertTriangle size={10} className="inline mr-1.5 text-red-400"/>Developer nursing agent</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'why-it-matters',
      title: 'Why It Matters',
      numbered: true,
      content: (slideNum) => (
        <div key="s04" className="slide-content w-full h-full bg-[#E6E6E1] p-16 flex flex-col relative bg-blueprint-dark">
          <span className="absolute top-16 right-16 font-mono text-3xl font-bold text-black/20 z-20">{String(slideNum).padStart(2, '0')}</span>
          <div className="z-20 relative">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 stagger-item">Why It Matters</h2>
            <p className="text-2xl font-medium text-black/70 mb-12 stagger-item bg-[#E6E6E1]/90 inline-block pr-4">Speed-up comes from two axes.</p>
          </div>
          <div className="grid grid-cols-2 gap-16 flex-1 z-20">
            <div className="stagger-item border-t-4 border-black pt-6 bg-[#E6E6E1]/80 backdrop-blur-sm p-8">
              <span className="font-mono text-sm text-black/50 block mb-8 uppercase font-bold">ADAPT vs. <span className="normal-case">SAFe</span> with humans</span>
              <ul className="space-y-8">
                <li className="flex items-start gap-4"><div className="w-10 h-10 bg-black text-[#E6E6E1] font-mono flex items-center justify-center font-bold text-xl shrink-0">1</div><span className="text-3xl font-medium">AI builds faster than humans</span></li>
                <li className="flex items-start gap-4"><div className="w-10 h-10 bg-black text-[#E6E6E1] font-mono flex items-center justify-center font-bold text-xl shrink-0">2</div><span className="text-3xl font-medium">Zero coordination ceremonies</span></li>
              </ul>
            </div>
            <div className="stagger-item border-t-4 border-black pt-6 bg-black text-[#E6E6E1] p-8 pb-12 -mt-6 shadow-2xl relative overflow-hidden bg-blueprint-light">
              <span className="relative z-10 font-mono text-sm text-white/50 block mb-4 uppercase font-bold bg-black/50 w-max px-2">ADAPT vs. AI without ADAPT</span>
              <p className="relative z-10 text-lg mb-6 pb-6 border-b border-white/20 leading-relaxed bg-black/50 p-2"><span className="font-bold text-white/50 uppercase">Ad hoc prompting:</span><br/>AI builds fast, but drifts. On larger increments, massive time wasted rescuing the project back to scope.</p>
              <span className="relative z-10 font-mono text-sm text-white/50 block mb-4 uppercase font-bold bg-black/50 w-max px-2">With ADAPT</span>
              <ul className="relative z-10 space-y-3 text-base bg-black/50 p-2">
                <li className="flex items-center gap-3"><div className="w-6 h-6 border border-white/30 text-white/50 font-mono flex items-center justify-center text-xs shrink-0">1</div> AI builds faster than humans</li>
                <li className="flex items-start gap-3 text-white font-bold"><div className="w-6 h-6 bg-white text-black font-mono flex items-center justify-center text-xs shrink-0">2</div> <span>AI builds the right thing — accurately, at scale, without human touch</span></li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 border border-white/30 text-white/50 font-mono flex items-center justify-center text-xs shrink-0">3</div> Zero (or very fast) ceremonies</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // ==========================================
    // ACT II: THE PARADIGM SHIFT (THE REVEAL)
    // ==========================================
    {
      id: 'what-is-agentic',
      title: 'What is Agentic Engineering',
      numbered: true,
      content: (slideNum) => (
        <div key="s05" className="slide-content w-full h-full bg-[#E6E6E1] p-16 flex flex-col relative bg-blueprint-dark">
          <span className="absolute top-16 right-16 font-mono text-3xl font-bold text-black/20 z-20">{String(slideNum).padStart(2, '0')}</span>
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 stagger-item z-20 bg-[#E6E6E1]/90 inline-block pr-4 w-max">What is Agentic Engineering</h2>
          <div className="grid grid-cols-3 grid-rows-2 gap-6 flex-1 stagger-item z-20">
            {[
              { t: "Faster development cycles", d: "Compress iteration time — reduce wall-clock latency, not just effort." },
              { t: "Better decision support", d: "Agents surface what matters — structured context, not noise." },
              { t: "Rapid experimentation", d: "High-frequency hypothesis testing with near-zero marginal cost." },
              { t: "Trustworthy delivery", d: "Predictable scope completion on large projects." },
              { t: "Scalable automation", d: "Integration across the full delivery surface, not pointwise assists." },
              { t: "Continuous improvement", d: "Every iteration is smarter than the last. N+1 > N, always." }
            ].map((item, i) => (
              <div key={i} className="border-2 border-black bg-white/90 backdrop-blur-sm p-8 relative flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform group">
                <span className="absolute top-4 right-4 font-mono text-xs font-bold opacity-30 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                <h3 className="font-bold text-2xl uppercase leading-tight mb-4 pr-6">{item.t}</h3>
                <p className="font-medium text-black/80 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'harness',
      title: 'The Harness',
      numbered: true,
      content: (slideNum) => (
        <div key="s06" className="slide-content w-full h-full bg-black text-[#E6E6E1] p-16 flex flex-col relative overflow-hidden bg-blueprint-light">
          <span className="absolute top-16 right-16 font-mono text-3xl font-bold text-white/20 z-20">{String(slideNum).padStart(2, '0')}</span>
          <div className="mb-8 stagger-item text-center z-20">
            <span className="font-mono text-sm tracking-widest uppercase text-white/50 mb-2 block bg-black/50 w-max mx-auto px-2">SOLUTION</span>
            <h2 className="text-5xl font-black tracking-tighter uppercase bg-black/50 inline-block px-4">The Harness.</h2>
            <p className="text-xl font-medium text-white/70 mt-2 bg-black/50 backdrop-blur-sm p-2 w-max mx-auto rounded-lg">
              Long-running, autonomous <span className="italic font-bold">correct</span> delivery of Increments and features to scope
            </p>
          </div>
          <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <marker id="arrow-pass-3" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto-start-reverse"><polygon points="0 2, 8 5, 0 8" fill="none" stroke="#E6E6E1" strokeWidth="1" vectorEffect="non-scaling-stroke" /></marker>
              <marker id="arrow-solid-3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto-start-reverse"><polygon points="0 1, 6 4, 0 7" fill="#E6E6E1" /></marker>
            </defs>
            <g className="anim-path">
              <line x1="5" y1="52" x2="95" y2="52" stroke="#E6E6E1" strokeWidth="1.5" vectorEffect="non-scaling-stroke" markerEnd="url(#arrow-pass-3)" />
              <polygon points="30,50 34,52 30,54" fill="#E6E6E1" />
              <polygon points="50,50 54,52 50,54" fill="#E6E6E1" />
              <polygon points="75,50 79,52 75,54" fill="#E6E6E1" />
              <line x1="18" y1="30" x2="18" y2="85" stroke="#E6E6E1" strokeWidth="1.5" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" opacity="0.4" />
              <line x1="82" y1="30" x2="82" y2="85" stroke="#E6E6E1" strokeWidth="1.5" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" opacity="0.4" />
              <path d="M 38 52 L 38 40 L 62 40 L 62 60 L 38 60 Z" fill="none" stroke="#E6E6E1" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              <line x1="45" y1="40" x2="55" y2="40" stroke="#E6E6E1" strokeWidth="2" vectorEffect="non-scaling-stroke" markerEnd="url(#arrow-pass-3)" />
              <line x1="55" y1="60" x2="45" y2="60" stroke="#E6E6E1" strokeWidth="2" vectorEffect="non-scaling-stroke" markerEnd="url(#arrow-pass-3)" />
              <polygon points="50,38 54,40 50,42" fill="#E6E6E1" />
              <polygon points="50,58 46,60 50,62" fill="#E6E6E1" />
              <path d="M 64 68 L 68 68 L 68 76 L 58 76 L 58 68 L 60 68" fill="none" stroke="#E6E6E1" strokeWidth="2" vectorEffect="non-scaling-stroke" markerEnd="url(#arrow-solid-3)" />
              <path d="M 52 70 L 56 70 L 56 78 L 46 78 L 46 70 L 48 70" fill="none" stroke="#E6E6E1" strokeWidth="2" vectorEffect="non-scaling-stroke" markerEnd="url(#arrow-solid-3)" />
              <path d="M 88 65 L 88 88 L 25 88 L 25 62" fill="none" stroke="#E6E6E1" strokeWidth="1.5" strokeDasharray="6 6" vectorEffect="non-scaling-stroke" markerEnd="url(#arrow-solid-3)" />
            </g>
          </svg>
          <div className="absolute top-[32%] left-[10%] font-black text-xl uppercase tracking-widest stagger-item z-20 bg-black/90 px-2">Define</div>
          <div className="absolute top-[32%] left-[45%] font-black text-xl uppercase tracking-widest stagger-item z-20 bg-black/90 px-2">Execute <span className="text-sm font-mono normal-case opacity-50 tracking-normal">(Iteration 1-N)</span></div>
          <div className="absolute top-[32%] right-[9%] font-black text-xl uppercase tracking-widest stagger-item z-20 bg-black/90 px-2">Deliver</div>
          <div className="absolute top-[55%] left-[5%] w-[12%] stagger-item z-20 bg-[#111]/90 p-3 shadow-sm border border-white/10 text-[#E6E6E1]">
            <h4 className="font-bold text-sm mb-1 uppercase">Spec</h4>
            <p className="text-[9px] font-medium text-white/70 mb-2 leading-tight">Total scope, accept criteria, references, ...</p>
            <p className="text-[9px] font-medium text-white/70 leading-tight">Iteration breakdown: scopes</p>
          </div>
          <div className="absolute top-[54%] left-[19%] w-[13%] stagger-item z-20 bg-white/10 backdrop-blur-md p-3 shadow-md border-2 border-white/20">
            <h4 className="font-bold text-sm mb-1 leading-tight uppercase">Inspect and adapt cycle</h4>
            <p className="text-[9px] font-medium text-white/70 leading-tight">Scope check, QA, re-work?, lessons learned...</p>
          </div>
          <div className="absolute top-[56%] left-[68%] w-[12%] stagger-item z-20 bg-black/90 p-2">
            <h4 className="font-bold text-sm mb-1 uppercase">Plan iteration</h4>
            <p className="text-[9px] font-medium text-white/70 leading-tight">Create Features: Content, tasks, tests</p>
          </div>
          <div className="absolute top-[68%] left-[59%] w-[8%] text-center stagger-item z-20 bg-black/90 p-1">
            <h4 className="font-bold text-xs uppercase">Feature 1</h4>
            <p className="text-[7px] font-medium text-white/70">Tasks, building, tests</p>
          </div>
          <div className="absolute top-[71%] left-[49%] w-[8%] text-center stagger-item z-20 bg-black/90 p-1">
            <h4 className="font-bold text-xs uppercase">Feature 2</h4>
            <p className="text-[7px] font-medium text-white/70">Tasks, building, tests</p>
          </div>
          <div className="absolute top-[55%] right-[5%] w-[12%] stagger-item z-20 bg-[#111] p-3 border-2 border-white/30 shadow-lg">
            <h4 className="font-bold text-sm mb-1 uppercase">Accept</h4>
            <p className="text-[9px] font-bold text-white/80 leading-tight">Scope respected?<br/>Re-work?</p>
          </div>
          <div className="absolute bottom-[12%] w-full text-center font-bold uppercase tracking-widest text-white/70 text-xs stagger-item z-20">
            <span className="bg-black/90 px-4 py-1">Execute iteration</span>
          </div>
        </div>
      )
    },
    {
      id: 'adapt-visual',
      title: 'ADAPT Visual',
      numbered: true,
      content: (slideNum) => (
        <div key="s07" className="slide-content w-full h-full bg-black text-[#E6E6E1] p-16 flex flex-col justify-center relative overflow-hidden bg-blueprint-light">
          <span className="absolute top-16 right-16 font-mono text-3xl font-bold text-white/20 z-20">{String(slideNum).padStart(2, '0')}</span>
          <div className="z-20 text-center mb-16 stagger-item">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2">What distinguishes ADAPT</h2>
            <p className="text-xl font-medium text-white/50 uppercase tracking-widest">From ad hoc prompting</p>
          </div>
          <div className="flex items-center justify-between max-w-6xl mx-auto w-full z-20 stagger-item">
            <div className="w-48 text-right pr-6 border-r-2 border-white/30">
              <p className="font-bold text-2xl uppercase tracking-tight text-white">Large<br/>Increments</p>
              <p className="text-sm font-mono text-white/50 mt-2">High Complexity</p>
            </div>
            <div className="flex-1 flex justify-center items-center gap-4 px-8 relative">
              <div className="absolute inset-0 top-1/2 -translate-y-1/2 h-2 bg-white/20 w-full z-0"></div>
              <div className="absolute inset-0 top-1/2 -translate-y-1/2 h-2 bg-white w-full z-0 anim-path" style={{clipPath: 'inset(0 0 0 0)'}}></div>
              {[
                { n: "01", t: "Persistent Context" },
                { n: "02", t: "Enforced Tests" },
                { n: "03", t: "Well-Defined Scope" }
              ].map((gate, i) => (
                <div key={i} className="z-10 bg-black border-2 border-white px-6 py-8 flex flex-col items-center justify-center text-center w-48 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
                  <span className="font-mono text-xs text-white/50 mb-2">{gate.n}</span>
                  <span className="font-bold uppercase text-sm">{gate.t}</span>
                </div>
              ))}
            </div>
            <div className="w-64 pl-6 border-l-4 border-white">
              <p className="font-bold text-2xl uppercase tracking-tight text-white leading-tight">Accurate without human touch.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'adapt-acronym',
      title: 'A.D.A.P.T. Acronym',
      numbered: true,
      content: (slideNum) => (
        <div key="s08" className="slide-content w-full h-full bg-black text-[#E6E6E1] p-16 flex flex-col relative bg-blueprint-light">
          <span className="absolute top-16 right-16 font-mono text-3xl font-bold text-white/20 z-20">{String(slideNum).padStart(2, '0')}</span>
          <div className="z-20 max-w-5xl mx-auto w-full flex flex-col justify-center h-full">
            <span className="font-mono text-sm tracking-widest uppercase text-white/50 mb-6 block text-center stagger-item">THE METHODOLOGY</span>
            <h2 className="text-6xl font-black uppercase tracking-tighter mb-12 text-center stagger-item">A.D.A.P.T.</h2>
            <div className="space-y-4 stagger-item">
              {[
                { l: "A", t: "AGENTIC", d: "AI agents as autonomous workers, not assistants." },
                { l: "D", t: "DEVELOPMENT", d: "Structured software delivery, not ad-hoc prompting." },
                { l: "A", t: "ARTIFACT", d: "Persistent knowledge stores that survive context boundaries." },
                { l: "P", t: "PERSISTENCE", d: "Every iteration deposits learnings — N+1 is always smarter." },
                { l: "T", t: "TESTING", d: "Iron rule — no task closes with failing tests." }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 bg-[#111] p-4 border border-white/20 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]">
                  <div className="text-4xl font-black text-white w-12 text-center">{item.l}</div>
                  <div className="w-48 font-bold uppercase tracking-widest text-white/50 border-r-2 border-white/20">{item.t}</div>
                  <div className="text-lg font-medium text-white/90 pl-2">{item.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'methodology',
      title: 'Methodology Pillars',
      numbered: true,
      content: (slideNum) => (
        <div key="s09" className="slide-content w-full h-full bg-[#E6E6E1] text-black p-16 flex flex-col relative bg-blueprint-dark">
          <span className="absolute top-16 right-16 font-mono text-3xl font-bold text-black/20 z-20">{String(slideNum).padStart(2, '0')}</span>
          <span className="font-mono text-sm tracking-widest uppercase text-black/50 mb-12 stagger-item z-20 bg-[#E6E6E1]/90 w-max px-2">METHODOLOGY PILLARS</span>
          <div className="grid grid-cols-3 gap-12 flex-1 items-center z-20">
            <div className="border-t-4 border-black/30 pt-8 stagger-item bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-black/10">
              <h2 className="text-6xl font-mono font-black text-black/20 mb-6">01</h2>
              <h3 className="text-4xl font-bold uppercase mb-6 tracking-tight">Collaboration</h3>
              <p className="text-xl font-medium text-black/80 leading-relaxed">How we code, test, and document with AI as a true collaborator — not a tool, a teammate.</p>
            </div>
            <div className="border-t-4 border-black/30 pt-8 stagger-item bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-black/10">
              <h2 className="text-6xl font-mono font-black text-black/20 mb-6">02</h2>
              <h3 className="text-4xl font-bold uppercase mb-6 tracking-tight">Scope control</h3>
              <p className="text-xl font-medium text-black/80 leading-relaxed">How we scope large undertakings without drift — the specification keeps delivery on track.</p>
            </div>
            <div className="border-t-4 border-black/30 pt-8 stagger-item bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-black/10">
              <h2 className="text-6xl font-mono font-black text-black/20 mb-6">03</h2>
              <h3 className="text-4xl font-bold uppercase mb-6 tracking-tight">Systematic problem solving</h3>
              <p className="text-xl font-medium text-black/80 leading-relaxed">Structured approaches to complex engineering problems — decomposition, not guessing.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'not-faster-safe',
      title: 'Not Faster SAFe',
      numbered: true,
      content: (slideNum) => (
        <div key="s10" className="slide-content w-full h-full flex relative overflow-hidden">
          <span className="absolute top-16 right-16 font-mono text-3xl font-bold text-white/20 z-20">{String(slideNum).padStart(2, '0')}</span>
          <div className="w-1/2 bg-[#E6E6E1] p-16 flex flex-col justify-center border-r-4 border-black z-10 bg-blueprint-dark">
            <span className="font-mono text-lg uppercase tracking-widest text-black/50 mb-8 stagger-item font-black">THE OLD PARADIGM</span>
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 stagger-item">This is not <br/>"faster <span className="normal-case">SAFe</span>."</h2>
            <p className="text-2xl font-medium text-black/80 leading-snug mb-8 stagger-item">
              SAFe exists because <span className="font-bold">humans</span> are expensive to coordinate.
            </p>
            <p className="text-lg font-medium text-black/60 mb-8 stagger-item">They forget. They miscommunicate. They need alignment.</p>
            <div className="border-l-4 border-black pl-4 py-2 stagger-item">
              <p className="text-xl font-bold uppercase tracking-tight">Ceremonies are the solution in <span className="normal-case">SAFe</span>.</p>
            </div>
          </div>
          <div className="w-1/2 bg-black text-[#E6E6E1] p-16 flex flex-col justify-center z-10 bg-blueprint-light">
            <span className="font-mono text-lg uppercase tracking-widest text-white/50 mb-8 stagger-item font-black">THE NEW PARADIGM</span>
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 stagger-item text-transparent select-none">Spacer</h2>
            <p className="text-2xl font-medium text-white/90 leading-snug mb-8 stagger-item">
              ADAPT exists because <span className="font-bold">agents</span> are expensive to re-contextualize.
            </p>
            <p className="text-lg font-medium text-white/60 mb-8 stagger-item">They lose memory. They can't talk to each other. They drift.</p>
            <div className="border-l-4 border-white pl-4 py-2 stagger-item bg-white/10 pr-4 w-max">
              <p className="text-xl font-bold uppercase tracking-tight text-white">Persistent artifacts are the solution.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'hierarchy',
      title: 'The ADAPT Hierarchy',
      numbered: true,
      content: (slideNum) => (
        <div key="s11" className="slide-content w-full h-full bg-[#E6E6E1] text-black p-16 flex flex-col relative bg-blueprint-dark">
          <span className="absolute top-16 right-16 font-mono text-3xl font-bold text-black/20 z-20">{String(slideNum).padStart(2, '0')}</span>
          <div className="mb-8 stagger-item z-20">
            <h2 className="text-4xl font-black uppercase tracking-tighter">The ADAPT Hierarchy</h2>
          </div>
          <div className="flex-1 z-20 stagger-item bg-white border-4 border-black rounded-lg overflow-hidden flex flex-col shadow-2xl">
            <div className="grid grid-cols-5 bg-black p-4 border-b-2 border-black font-mono text-xs uppercase tracking-widest font-bold text-white">
              <div>SAFe Concept</div><div>ADAPT</div><div>SAFe Time</div><div>ADAPT Time</div><div>Key Shift</div>
            </div>
            <div className="flex-1 overflow-auto">
              {[
                ["Program Increment", "Increment", "8–12 weeks", "30min – 15hr", "Scope-boxed, not time-boxed"],
                ["Sprint", "Iteration", "2 weeks", "30min – 4hr", "Graph-partitioned planning"],
                ["Feature", "Feature (One Agent)", "1–2 weeks", "15min – 2hr", "Context isolation, zero file overlap"],
                ["Task", "Task", "Hours – Days", "5 – 30min", "Enforced test-gate (not aspirational)"],
                ["Inspect & Adapt", "I&A Cycle", "Once per PI", "Every Iteration", "12-step automated verification"],
                ["ART Sync", "Execution Waves", "Weekly meeting", "Computed", "Dependency graph, not status meeting"]
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-5 p-5 border-b border-black/10 last:border-b-0 items-center hover:bg-[#E6E6E1]/50 transition-colors">
                  <div className="font-bold text-black/60">{row[0]}</div>
                  <div className="font-black text-lg text-black uppercase tracking-tight">{row[1]}</div>
                  <div className="font-mono text-sm text-black/70 font-bold bg-black/10 inline-block px-3 py-1 w-max rounded-sm border border-black/20">{row[2]}</div>
                  <div className="font-mono text-sm text-white font-bold bg-black inline-block px-3 py-1 w-max rounded-sm">{row[3]}</div>
                  <div className="text-sm font-medium text-black/80 pr-4">{row[4]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'timescale',
      title: 'Timescale Compression',
      numbered: true,
      content: (slideNum) => (
        <div key="s12" className="slide-content w-full h-full bg-[#E6E6E1] text-black p-16 flex flex-col justify-center relative bg-blueprint-dark">
          <span className="absolute top-16 right-16 font-mono text-3xl font-bold text-black/20 z-20">{String(slideNum).padStart(2, '0')}</span>
          <div className="max-w-5xl mx-auto w-full z-20">
            <span className="font-mono text-sm tracking-widest uppercase text-black/50 mb-4 block text-center stagger-item">TIMESCALE COMPRESSION</span>
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 text-center stagger-item">Same rigor. Fundamentally different timescale.</h2>
            <p className="text-center text-sm font-mono text-black/60 mb-8 stagger-item italic bg-black/10 py-2 px-4 rounded-lg inline-block w-full border border-black/20">Illustrative — highly dependent on organizational, technical, and data maturity</p>

            <div className="space-y-6 stagger-item">
              {/* Program Increment / Increment */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-base uppercase">Program Increment → Increment</span>
                </div>
                <div className="relative h-10 bg-black/5 rounded-sm overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-black/20 border border-black/30 flex items-center px-4 rounded-sm" style={{width: '100%'}}>
                    <span className="font-mono text-sm font-bold text-black">SAFe: 8–12 weeks</span>
                  </div>
                </div>
                <div className="relative h-10 bg-black/5 rounded-sm overflow-hidden mt-2">
                  <div className="absolute inset-y-0 left-0 bg-black flex items-center px-4 rounded-sm" style={{width: '16%', minWidth: '182px'}}>
                    <span className="font-mono text-sm font-bold text-white whitespace-nowrap">ADAPT: 30m – 15hr</span>
                  </div>
                </div>
              </div>

              {/* Sprint / Iteration */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-base uppercase">Sprint → Iteration</span>
                </div>
                <div className="relative h-10 bg-black/5 rounded-sm overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-black/20 border border-black/30 flex items-center px-4 rounded-sm" style={{width: '65%'}}>
                    <span className="font-mono text-sm font-bold text-black">SAFe: 2 weeks</span>
                  </div>
                </div>
                <div className="relative h-10 bg-black/5 rounded-sm overflow-hidden mt-2">
                  <div className="absolute inset-y-0 left-0 bg-black flex items-center px-4 rounded-sm" style={{width: '13%', minWidth: '163px'}}>
                    <span className="font-mono text-sm font-bold text-white whitespace-nowrap">ADAPT: 30m – 4hr</span>
                  </div>
                </div>
              </div>

              {/* Feature */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-base uppercase">Feature → Feature (One Agent)</span>
                </div>
                <div className="relative h-10 bg-black/5 rounded-sm overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-black/20 border border-black/30 flex items-center px-4 rounded-sm" style={{width: '45%'}}>
                    <span className="font-mono text-sm font-bold text-black">SAFe: 1–2 weeks</span>
                  </div>
                </div>
                <div className="relative h-10 bg-black/5 rounded-sm overflow-hidden mt-2">
                  <div className="absolute inset-y-0 left-0 bg-black flex items-center px-4 rounded-sm" style={{width: '10%', minWidth: '156px'}}>
                    <span className="font-mono text-sm font-bold text-white whitespace-nowrap">ADAPT: 15m – 2hr</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'iteration-n1',
      title: 'Iteration N+1',
      numbered: true,
      content: (slideNum) => (
        <div key="s13" className="slide-content w-full h-full bg-black text-[#E6E6E1] p-16 flex flex-col relative bg-blueprint-light">
          <span className="absolute top-16 right-16 font-mono text-3xl font-bold text-white/20 z-20">{String(slideNum).padStart(2, '0')}</span>
          <div className="mb-12 stagger-item z-20 text-center">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-2">Iteration N+1 is always smarter.</h2>
            <p className="text-xl font-medium text-white/70">Every iteration deposits knowledge into persistent stores.</p>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 gap-6 flex-1 stagger-item z-20">
            {[
              { n: "1", t: "Lessons Learned", d: "Reusable patterns for future agents" },
              { n: "2", t: "Decision Log", d: "Why decisions were made" },
              { n: "3", t: "Implementation Log", d: "File-by-file change record" },
              { n: "4", t: "Increment Overview", d: "Frozen scope contract" },
              { n: "5", t: "I&A Records", d: "Verification + gap analysis" },
              { n: "6", t: "Shared Context Log", d: "Inter-agent communication" }
            ].map((item, i) => (
              <div key={i} className="border-2 border-white/20 bg-[#111] p-6 relative flex flex-col justify-center shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] text-center">
                <span className="font-mono text-4xl font-black opacity-10 absolute top-4 left-4">{item.n}</span>
                <h3 className="font-bold text-xl uppercase leading-tight mb-2 text-white">{item.t}</h3>
                <p className="font-medium text-sm text-white/60">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'validation',
      title: 'Validation',
      numbered: true,
      content: (slideNum) => (
        <div key="s14" className="slide-content w-full h-full bg-black text-[#E6E6E1] p-16 flex flex-col justify-center relative bg-blueprint-light">
          <span className="absolute top-16 right-16 font-mono text-3xl font-bold text-white/20 z-20">{String(slideNum).padStart(2, '0')}</span>
          <div className="max-w-5xl mx-auto z-20 bg-[#111] p-12 backdrop-blur-md border border-white/20 shadow-2xl">
            <span className="font-mono text-sm tracking-widest uppercase text-white/50 mb-8 block">VALIDATION</span>
            <blockquote className="text-3xl md:text-5xl font-medium leading-tight text-white/90 mb-12 stagger-item">
              "Working with the Agentic Agency team quickly moved us from theory to real hands-on experience with agentic AI... It has given us both the confidence and the direction to move forward much faster."
            </blockquote>
            <div className="pt-8 border-t-2 border-white/20 stagger-item inline-block">
              <p className="font-bold text-xl uppercase tracking-widest">Niels Hanberg</p>
              <p className="font-mono text-white/50">Copyright Agent A/S</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'spark',
      title: 'The Spark',
      numbered: true,
      content: (slideNum) => (
        <div key="s15" className="slide-content w-full h-full bg-[#E6E6E1] p-12 flex flex-col relative bg-blueprint-dark">
          <span className="absolute top-16 right-16 font-mono text-3xl font-bold text-black/20 z-20">{String(slideNum).padStart(2, '0')}</span>
          <div className="mb-6 stagger-item z-20">
            <span className="font-mono text-sm tracking-widest uppercase text-black/50 mb-2 block">2-DAY WORKSHOP</span>
            <h2 className="text-5xl font-black uppercase tracking-tighter">The Spark</h2>
            <p className="text-lg font-medium mt-2 text-black/70">Hands-on from hour one. Real code, real challenges.</p>
          </div>
          <div className="grid grid-cols-3 gap-6 flex-1 stagger-item z-20">
            <div className="bg-white border-4 border-black p-6 flex flex-col shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="bg-black text-white px-4 py-2 font-bold uppercase tracking-widest text-center mb-4 -mx-6 -mt-6">Day 1: Orientation</div>
              <ul className="space-y-3 text-sm font-medium text-black/80 flex-1">
                <li className="flex items-start gap-2"><ArrowRight size={16} className="text-black/40 shrink-0 mt-0.5"/>Vibe coding vs. agentic engineering</li>
                <li className="flex items-start gap-2"><ArrowRight size={16} className="text-black/40 shrink-0 mt-0.5"/>Pre-configured tooling, operational in 30 mins</li>
                <li className="flex items-start gap-2"><ArrowRight size={16} className="text-black/40 shrink-0 mt-0.5"/>Learn to interview unfamiliar codebases</li>
                <li className="flex items-start gap-2"><ArrowRight size={16} className="text-black/40 shrink-0 mt-0.5"/>2 hands-on challenge sets (Frontend + Backend)</li>
              </ul>
            </div>
            <div className="bg-white border-4 border-black p-6 flex flex-col shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="bg-black text-white px-4 py-2 font-bold uppercase tracking-widest text-center mb-4 -mx-6 -mt-6">Day 2: Depth & Commitment</div>
              <ul className="space-y-3 text-sm font-medium text-black/80 flex-1">
                <li className="flex items-start gap-2"><ArrowRight size={16} className="text-black/40 shrink-0 mt-0.5"/>Learn from peer accomplishments</li>
                <li className="flex items-start gap-2"><ArrowRight size={16} className="text-black/40 shrink-0 mt-0.5"/>Catching and correcting AI mistakes</li>
                <li className="flex items-start gap-2"><ArrowRight size={16} className="text-black/40 shrink-0 mt-0.5"/>Output a structured plan for your CTO</li>
                <li className="flex items-start gap-2"><ArrowRight size={16} className="text-black/40 shrink-0 mt-0.5"/>Define a real "in the wild" project</li>
              </ul>
            </div>
            <div className="bg-black text-white p-6 flex flex-col shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] border-4 border-black">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#FFD700" stroke="#FFD700"/>)}
              </div>
              <blockquote className="text-sm font-medium leading-relaxed text-white/90 flex-1 italic">
                "We shipped something I'd have scoped at three months in six weeks. The structure felt like overhead on day one. By day two I understood why it exists."
              </blockquote>
              <div className="pt-4 mt-4 border-t border-white/20">
                <p className="font-bold text-sm uppercase tracking-widest">Lead Engineer</p>
                <p className="font-mono text-xs text-white/50">Copyright Agent, Copenhagen</p>
              </div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-4 gap-4 stagger-item z-20">
            {["Repeatable Methodology", "Tool Proficiency", "Three Chapters Framework", "6-Week Reunion"].map((item, i) => (
              <div key={i} className="bg-black/10 px-4 py-3 text-center border border-black/20 rounded-sm">
                <span className="font-bold text-sm uppercase tracking-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'outcomes',
      title: 'Outcomes',
      numbered: true,
      content: (slideNum) => (
        <div key="s16" className="slide-content w-full h-full bg-black text-white p-16 flex flex-col relative overflow-hidden bg-blueprint-light">
          <div className="absolute inset-0 z-0"><img src="https://images.unsplash.com/photo-1504307651254-35680f356f27?q=80&w=2000" alt="Precision Metal Grid" className="w-full h-full object-cover opacity-20 grayscale mix-blend-luminosity" /><div className="absolute inset-0 bg-black/60"></div></div>
          <span className="absolute top-16 right-16 font-mono text-3xl font-bold text-white/20 z-20">{String(slideNum).padStart(2, '0')}</span>
          <div className="mb-12 stagger-item z-20 bg-black/50 w-max pr-8 pb-4">
            <span className="font-mono text-sm tracking-widest uppercase text-white/50 mb-2 block px-2">OUTCOMES</span>
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-2 px-2">What you walk away with.</h2>
            <p className="text-xl font-medium text-white/80 px-2">Action-oriented outcomes you can apply on Monday morning.</p>
          </div>
          <div className="grid grid-cols-2 grid-rows-3 gap-x-12 gap-y-6 flex-1 stagger-item z-20">
            {[
              { title: "Interview unfamiliar codebases using clarifying agents", desc: "Onboard to any project in hours, not weeks." },
              { title: "Write reliable specs for the agent to execute", desc: "Trust the agent to build exactly what you specify." },
              { title: "Execute large, long-running projects autonomously", desc: "Agent works for hours, delivers correct and on scope." },
              { title: "Catch and correct agent mistakes systematically", desc: "Maintain engineering rigor while moving fast." },
              { title: "Build a personal 'in the wild' project", desc: "Apply the methodology to actual work immediately." },
              { title: "Produce a team diagnostic for your CTO", desc: "Show leadership where agentic engineering fits." }
            ].map((out, i) => (
              <div key={i} className="flex gap-4 border-b border-white/20 pb-4 items-center bg-black/60 p-4 rounded-lg backdrop-blur-sm border border-white/5 shadow-sm">
                <div className="font-mono text-3xl font-bold text-white/30">0{i+1}</div>
                <div>
                  <h4 className="font-bold text-lg leading-tight mb-1">{out.title}</h4>
                  <p className="text-sm font-medium text-white/70">{out.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'pricing',
      title: 'Pricing',
      numbered: true,
      content: (slideNum) => (
        <div key="s17" className="slide-content w-full h-full bg-[#E6E6E1] p-16 flex flex-col relative bg-blueprint-dark">
          <span className="absolute top-16 right-16 font-mono text-3xl font-bold text-black/20 z-20">{String(slideNum).padStart(2, '0')}</span>
          <div className="z-20">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-2 text-center stagger-item bg-[#E6E6E1]/90 w-max mx-auto px-4">The Spark — Pricing</h2>
            <p className="text-xl font-bold uppercase tracking-widest text-black/50 text-center mb-12 stagger-item bg-[#E6E6E1]/90 w-max mx-auto px-4">2-Day Workshop</p>
          </div>
          <div className="grid grid-cols-2 gap-12 flex-1 stagger-item max-w-5xl mx-auto w-full z-20">
            <div className="bg-white/90 backdrop-blur-sm border-4 border-black p-10 flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-bold text-2xl uppercase mb-2">Open Workshop</h3>
              <div className="font-mono text-5xl font-black border-b-2 border-black/10 pb-6 mb-6">DKK 49,999</div>
              <ul className="space-y-4 font-medium text-black/80 text-lg flex-1">
                <li>• 3 seats per company</li>
                <li>• Learn with 3–4 companies</li>
                <li>• 12 participants max</li>
                <li className="pt-6 mt-2 border-t border-black/10 font-bold">• Hands-on from hour one</li>
                <li className="font-bold">• Real code, real challenges</li>
              </ul>
            </div>
            <div className="bg-black/95 backdrop-blur-sm text-white border-4 border-black p-10 flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
              <h3 className="font-bold text-2xl uppercase mb-2">Closed Workshop</h3>
              <div className="font-mono text-5xl font-black border-b-2 border-white/20 pb-6 mb-6">DKK 249,999</div>
              <ul className="space-y-4 font-medium text-white/80 text-lg flex-1">
                <li>• Up to 12 participants</li>
                <li>• Exclusive for your team</li>
                <li className="pt-6 mt-2 border-t border-white/20 font-bold text-white">• Customised to your codebase</li>
                <li className="font-bold text-white">• Private environment</li>
                <li className="font-bold text-white">• Team-specific diagnostics</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'terms',
      title: 'Terms & Conditions',
      numbered: true,
      content: (slideNum) => (
        <div key="s-terms" className="slide-content w-full h-full bg-black text-[#E6E6E1] p-16 flex flex-col justify-center relative bg-blueprint-light">
          <span className="absolute top-16 right-16 font-mono text-3xl font-bold text-white/20 z-20">{String(slideNum).padStart(2, '0')}</span>
          <div className="max-w-4xl mx-auto w-full z-20">
            <span className="font-mono text-sm tracking-widest uppercase text-white/50 mb-6 block text-center stagger-item">COMMERCIAL</span>
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-12 text-center stagger-item">Terms & Conditions</h2>

            <div className="space-y-8 stagger-item">
              {/* Payment Terms */}
              <div className="border-l-4 border-white/30 pl-8 py-4">
                <h3 className="font-bold text-xl uppercase tracking-widest mb-4 text-white/80">Payment Terms</h3>
                <div className="space-y-3 text-lg">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-white/40 w-24 shrink-0">Workshops</span>
                    <span className="text-white/90">Payment in full, upfront</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-white/40 w-24 shrink-0">Catalyst</span>
                    <span className="text-white/90">+30 days from end of month (delivery cycle)</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-white/40 w-24 shrink-0">Scale Engine</span>
                    <span className="text-white/90">+30 days from end of month (delivery cycle)</span>
                  </div>
                </div>
              </div>

              {/* Volume Discounts */}
              <div className="border-l-4 border-white pl-8 py-4 bg-white/5">
                <h3 className="font-bold text-xl uppercase tracking-widest mb-4 text-white">Volume Discounts</h3>
                <p className="text-lg text-white/80 mb-4">Discounts are negotiable upon:</p>
                <ul className="space-y-3 text-lg text-white/90">
                  <li className="flex items-center gap-3"><CheckSquare size={18} className="text-white/50"/>Willingness to provide logos, testimonials, reference and intro calls upon successful service delivery</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // ==========================================
    // ACT III: THE MAGIC TRICK (THE PROOF)
    // ==========================================
    {
      id: 'demo-intro',
      title: 'Demo Intro',
      numbered: false,
      content: (slideNum) => (
        <div key="s18" className="slide-content w-full h-full bg-black text-[#E6E6E1] p-16 flex flex-col items-center justify-center text-center relative overflow-hidden bg-blueprint-light">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0,transparent_60%)] z-0"></div>
          <TerminalSquare size={80} className="mb-8 text-white/80 stagger-item z-20 bg-black/50 p-2 rounded-lg backdrop-blur-sm" />
          <span className="font-mono text-sm tracking-widest uppercase text-white/50 mb-4 block stagger-item z-20 bg-black/50 px-4">DEMONSTRATION</span>
          <h2 className="text-7xl font-black uppercase tracking-tighter mb-6 stagger-item z-20 bg-black/50 px-4">Live Demo:<br/>Atomic CRM</h2>
          <p className="text-2xl font-medium text-white/70 mb-12 stagger-item z-20 bg-black/50 px-4">Open-source CRM application.</p>
          <div className="bg-[#E6E6E1] text-black px-10 py-4 font-bold font-mono uppercase tracking-widest stagger-item z-20 shadow-[0_0_30px_rgba(230,230,225,0.3)] border-2 border-[#E6E6E1]">
            → Switch to Cursor / Terminal
          </div>
        </div>
      )
    },
    {
      id: 'demo-insight-1',
      title: 'Demo: Understanding Code',
      numbered: true,
      content: (slideNum) => (
        <div key="s19" className="slide-content w-full h-full bg-[#E6E6E1] p-16 flex flex-col justify-center relative bg-blueprint-dark">
          <span className="absolute top-16 right-16 font-mono text-3xl font-bold text-black/20 z-20">{String(slideNum).padStart(2, '0')}</span>
          <div className="max-w-4xl mx-auto w-full border-l-8 border-black pl-12 py-8 stagger-item z-20 bg-[#E6E6E1]/90 backdrop-blur-sm shadow-xl pr-8">
            <span className="font-mono text-sm uppercase tracking-widest text-black/50 mb-4 block font-bold">Demo Insight</span>
            <h2 className="text-6xl font-black uppercase tracking-tighter mb-8">Understanding Code</h2>
            <div className="flex items-end gap-6 mb-8">
              <div className="font-mono text-7xl font-black bg-black text-white px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">5 min</div>
              <p className="text-3xl font-medium text-black/80 pb-2">to understand what takes a new hire weeks.</p>
            </div>
            <ul className="space-y-4 text-2xl font-mono font-bold text-black/70 mt-12 bg-white/80 p-6 border border-black/10">
              <li className="flex items-center gap-4"><ArrowRight className="text-black"/> Legacy code read</li>
              <li className="flex items-center gap-4"><ArrowRight className="text-black"/> Architecture mapping</li>
              <li className="flex items-center gap-4"><ArrowRight className="text-black"/> Gap analysis</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'demo-insight-2',
      title: 'Demo: Question to Scope',
      numbered: true,
      content: (slideNum) => (
        <div key="s20" className="slide-content w-full h-full bg-black text-white p-16 flex flex-col justify-center relative bg-blueprint-light">
          <span className="absolute top-16 right-16 font-mono text-3xl font-bold text-white/20 z-20">{String(slideNum).padStart(2, '0')}</span>
          <div className="max-w-4xl mx-auto w-full border-l-8 border-white pl-12 py-8 stagger-item z-20 bg-black/60 backdrop-blur-md shadow-2xl pr-8 border-y border-r border-white/10">
            <span className="font-mono text-sm uppercase tracking-widest text-white/50 mb-4 block font-bold">Demo Insight</span>
            <h2 className="text-6xl font-black uppercase tracking-tighter mb-8">From Question to Scope</h2>
            <div className="bg-white/10 p-8 border border-white/20 mb-12 shadow-inner">
              <p className="text-4xl font-medium italic text-white/90">'Can we do X?'</p>
              <div className="my-4 text-white/50 font-bold">↓</div>
              <p className="text-3xl font-bold uppercase tracking-tight">Scoped implementation plan</p>
            </div>
            <ul className="space-y-4 text-2xl font-mono font-bold text-white/70">
              <li className="flex items-center gap-4"><ArrowRight className="text-white"/> Feasibility assessment</li>
              <li className="flex items-center gap-4"><ArrowRight className="text-white"/> Effort estimation</li>
              <li className="flex items-center gap-4"><ArrowRight className="text-white"/> Risk identification</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'demo-insight-3',
      title: 'Demo: Spec to Ship',
      numbered: true,
      content: (slideNum) => (
        <div key="s21" className="slide-content w-full h-full bg-[#E6E6E1] p-16 flex flex-col justify-center relative bg-blueprint-dark">
          <span className="absolute top-16 right-16 font-mono text-3xl font-bold text-black/20 z-20">{String(slideNum).padStart(2, '0')}</span>
          <div className="max-w-5xl mx-auto w-full border-l-8 border-black pl-12 py-8 stagger-item z-20 bg-[#E6E6E1]/90 backdrop-blur-sm shadow-xl pr-8">
            <span className="font-mono text-sm uppercase tracking-widest text-black/50 mb-4 block font-bold">Demo Insight</span>
            <h2 className="text-6xl font-black uppercase tracking-tighter mb-12">Spec to Ship</h2>
            <div className="flex items-center gap-6 font-mono font-bold text-2xl uppercase tracking-widest mb-16">
              <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">Specification</div>
              <ArrowRight size={40} className="text-black/30"/>
              <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">Implementation</div>
              <ArrowRight size={40} className="text-black/30"/>
              <div className="bg-black text-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">Working Feature</div>
            </div>
            <ul className="space-y-4 text-2xl font-medium text-black/80 bg-white/50 p-6 border border-black/10">
              <li className="flex items-center gap-4"><CheckSquare className="text-black"/> Feature built live</li>
              <li className="flex items-center gap-4"><CheckSquare className="text-black"/> Complex features relayed through iteration cycles</li>
            </ul>
          </div>
        </div>
      )
    },

    // ==========================================
    // ACT IV: THE CLOSE
    // ==========================================
    {
      id: 'who-we-are',
      title: 'Who We Are',
      numbered: true,
      content: (slideNum) => (
        <div key="s22" className="slide-content w-full h-full bg-black text-white p-16 flex flex-col justify-center relative bg-blueprint-light">
          <span className="absolute top-16 right-16 font-mono text-3xl font-bold text-white/20 z-20">{String(slideNum).padStart(2, '0')}</span>
          <div className="max-w-[1400px] mx-auto w-full z-20">
            <span className="font-mono text-sm tracking-widest uppercase text-white/50 mb-6 block stagger-item bg-black/50 w-max px-2">AGENTIC AGENCY</span>
            <h2 className="text-6xl font-black uppercase tracking-tighter mb-16 stagger-item bg-black/50 w-max pr-4">Who We Are</h2>
            <div className="grid grid-cols-3 gap-16 stagger-item">
              <div className="border-t-4 border-white/30 pt-8 bg-black/60 p-6 rounded-xl backdrop-blur-sm border border-white/5">
                <h2 className="text-5xl font-mono font-bold text-white/20 mb-6">01</h2>
                <h3 className="text-3xl font-bold uppercase mb-6 leading-tight">Workshops & Programs</h3>
                <p className="text-xl font-medium text-white/70 leading-relaxed">We run workshops and programs for engineering teams — hands-on, code-first, methodology-driven.</p>
              </div>
              <div className="border-t-4 border-white/30 pt-8 bg-black/60 p-6 rounded-xl backdrop-blur-sm border border-white/5">
                <h2 className="text-5xl font-mono font-bold text-white/20 mb-6">02</h2>
                <h3 className="text-3xl font-bold uppercase mb-6 leading-tight">Force Multiplier</h3>
                <p className="text-xl font-medium text-white/70 leading-relaxed">For teams ready to multiply their output — not by adding headcount, but by changing how delivery works.</p>
              </div>
              <div className="border-t-4 border-white/30 pt-8 bg-black/60 p-6 rounded-xl backdrop-blur-sm border border-white/5">
                <h2 className="text-5xl font-mono font-bold text-white/20 mb-6">03</h2>
                <h3 className="text-3xl font-bold uppercase mb-6 leading-tight">Engineering-First AI</h3>
                <p className="text-xl font-medium text-white/70 leading-relaxed">Engineering-first approach to AI adoption — rigour over hype, artifacts over ceremonies.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'closing',
      title: 'Closing',
      numbered: false,
      content: (slideNum) => (
        <div key="s23" className="slide-content w-full h-full bg-[#E6E6E1] text-black p-16 flex flex-col justify-center items-center text-center relative overflow-hidden bg-blueprint-dark">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2000" alt="Architectural Vanishing Point" className="w-full h-full object-cover opacity-15 grayscale" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#E6E6E1] via-transparent to-[#E6E6E1]"></div>
          </div>
          <RegMark className="top-8 left-8 text-black z-10" /><RegMark className="bottom-8 right-8 text-black z-10" />
          <div className="relative z-20 w-full">
            <p className="text-4xl md:text-5xl font-bold leading-snug max-w-4xl mx-auto stagger-item mb-12 bg-[#E6E6E1]/90 backdrop-blur-sm py-4 inline-block px-8 rounded-lg shadow-sm border border-black/5">
              The question isn't <br/><span className="italic text-black/60">"how do we go faster?"</span>
            </p>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter max-w-5xl mx-auto leading-tight stagger-item border-y-4 border-black py-8 bg-[#E6E6E1]/95 backdrop-blur-md shadow-2xl">
              It's what does delivery look like when coordination cost is approximating zero.
            </h2>
            <div className="mt-16 flex justify-center gap-8 font-mono text-sm font-bold uppercase tracking-widest stagger-item bg-[#E6E6E1]/95 backdrop-blur-sm py-3 px-8 inline-flex rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span>agenticagency.dev</span>
              <span className="text-black/30">|</span>
              <span>morten.elm@agenticagency.dev</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  // Filter visible slides
  const visibleSlides = allSlides.filter(slide => slideVisibility[slide.id] !== true);
  const totalSlides = visibleSlides.length;

  // Calculate slide numbers for visible numbered slides
  const getSlideNumber = (index) => {
    let num = 0;
    for (let i = 0; i <= index; i++) {
      if (visibleSlides[i].numbered) num++;
    }
    return num;
  };

  const nextSlide = () => setCurrentSlideIndex((prev) => Math.min(prev + 1, totalSlides - 1));
  const prevSlide = () => setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showSlideManager) return;
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); nextSlide(); }
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') setShowSlideManager(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showSlideManager, totalSlides]);

  useEffect(() => {
    if (currentSlideIndex >= totalSlides) {
      setCurrentSlideIndex(Math.max(0, totalSlides - 1));
    }
  }, [totalSlides, currentSlideIndex]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.slide-content',
        { opacity: 0, filter: 'blur(8px)', scale: 0.98 },
        { opacity: 1, filter: 'blur(0px)', scale: 1, duration: 0.5, ease: 'power3.out' }
      );
      gsap.fromTo('.stagger-item',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: 'power2.out', delay: 0.1 }
      );
      gsap.fromTo('.anim-path',
        { strokeDasharray: 2000, strokeDashoffset: 2000 },
        { strokeDashoffset: 0, duration: 1.5, ease: 'power2.inOut', delay: 0.3 }
      );
    }, deckRef);
    return () => ctx.revert();
  }, [currentSlideIndex]);

  const currentSlide = visibleSlides[currentSlideIndex];
  const slideNumber = currentSlide?.numbered ? getSlideNumber(currentSlideIndex) : null;

  return (
    <>
      <style>{`
        .bg-blueprint-dark {
          background-image:
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
          background-size: 64px 64px;
          background-position: center center;
        }
        .bg-blueprint-light {
          background-image:
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 64px 64px;
          background-position: center center;
        }
        /* Ensure SAFe displays with correct capitalization */
        .normal-case {
          text-transform: none !important;
          font-variant: normal !important;
          font-variant-caps: normal !important;
          -webkit-font-feature-settings: normal !important;
          font-feature-settings: normal !important;
        }
      `}</style>

      {/* Slide Manager Modal */}
      {showSlideManager && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8 font-['Space_Grotesk']">
          <div className="bg-[#111] border border-white/20 rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-white/10 flex justify-between items-center">
              <h2 className="text-xl font-bold text-white uppercase tracking-widest">Slide Manager</h2>
              <button onClick={() => setShowSlideManager(false)} className="text-white/50 hover:text-white transition-colors">
                <XSquare size={24} />
              </button>
            </div>
            <div className="p-6 overflow-auto max-h-[60vh]">
              <div className="grid grid-cols-2 gap-3">
                {allSlides.map((slide, i) => {
                  const isHidden = slideVisibility[slide.id] === true;
                  return (
                    <button
                      key={slide.id}
                      onClick={() => toggleSlideVisibility(slide.id)}
                      className={`flex items-center gap-4 p-4 rounded-lg border transition-all ${
                        isHidden
                          ? 'bg-white/5 border-white/10 opacity-50'
                          : 'bg-white/10 border-white/20 hover:bg-white/15'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isHidden ? 'bg-white/10' : 'bg-white/20'}`}>
                        {isHidden ? <EyeOff size={16} className="text-white/50" /> : <Eye size={16} className="text-white" />}
                      </div>
                      <div className="text-left flex-1">
                        <span className="font-mono text-xs text-white/40">{String(i + 1).padStart(2, '0')}</span>
                        <p className={`font-medium ${isHidden ? 'text-white/40' : 'text-white'}`}>{slide.title}</p>
                      </div>
                      {!slide.numbered && <span className="text-xs text-white/30 uppercase">Unnumbered</span>}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="p-6 border-t border-white/10 flex justify-between items-center">
              <p className="text-white/50 text-sm">{visibleSlides.length} of {allSlides.length} slides visible</p>
              <button
                onClick={() => setSlideVisibility({})}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm font-medium transition-colors"
              >
                Show All
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="w-full h-screen bg-black p-4 md:p-8 flex flex-col items-center justify-center font-['Space_Grotesk']">
        <div ref={deckRef} className="w-full max-w-[1400px] aspect-video bg-white shadow-2xl relative border-2 border-white/20 rounded-lg overflow-hidden">
          {currentSlide?.content(slideNumber)}
        </div>
        <div className="mt-8 flex items-center gap-6 bg-[#111] border border-white/20 text-white rounded-full p-2 shadow-2xl z-50">
          <button onClick={prevSlide} disabled={currentSlideIndex === 0} className="p-3 hover:bg-white hover:text-black rounded-full transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white">
            <ArrowLeft size={24} />
          </button>
          <div className="font-mono font-bold tracking-widest w-32 text-center">
            {String(currentSlideIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
          </div>
          <button onClick={nextSlide} disabled={currentSlideIndex === totalSlides - 1} className="p-3 hover:bg-white hover:text-black rounded-full transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white">
            <ArrowRight size={24} />
          </button>
          <div className="w-px h-8 bg-white/20"></div>
          <button onClick={() => setShowSlideManager(true)} className="p-3 hover:bg-white hover:text-black rounded-full transition-colors" title="Manage Slides">
            <Settings size={24} />
          </button>
        </div>
      </div>
    </>
  );
}
