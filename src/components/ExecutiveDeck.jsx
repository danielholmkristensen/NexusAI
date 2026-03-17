import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, ArrowLeft, Plus, XSquare, CheckSquare, AlertTriangle } from 'lucide-react';

/* --- Architectural Registration Mark --- */
const RegMark = ({ className }) => (
  <div className={`absolute w-4 h-4 flex items-center justify-center opacity-30 ${className}`}>
    <Plus size={16} strokeWidth={1} />
  </div>
);

export default function ExecutiveDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, 4));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.slide-content',
        { opacity: 0, filter: 'blur(10px)', scale: 0.98 },
        { opacity: 1, filter: 'blur(0px)', scale: 1, duration: 0.6, ease: 'power3.out' }
      );
      gsap.fromTo('.stagger-item',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: 'power2.out', delay: 0.2 }
      );
    }, slideRef);
    return () => ctx.revert();
  }, [currentSlide]);

  const slides = [
    // SLIDE 1: Executive Overview
    <div key="1" className="slide-content w-full h-full bg-black text-[#E6E6E1] p-16 flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2000')] bg-cover grayscale mix-blend-screen"></div>
      <RegMark className="top-8 left-8 text-white" />
      <RegMark className="top-8 right-8 text-white" />
      <RegMark className="bottom-8 left-8 text-white" />
      <RegMark className="bottom-8 right-8 text-white" />

      <span className="font-mono text-sm tracking-widest uppercase text-white/50 mb-8 stagger-item">EXECUTIVE OVERVIEW</span>
      <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-6 stagger-item">
        ENGINEERING <br/>
        <span className="text-white/30">&gt;</span> PROMPTING.
      </h1>
      <p className="font-mono text-white/50 uppercase tracking-widest mt-auto stagger-item">The Agentic Agency</p>
    </div>,

    // SLIDE 2: The Gap & Testimonial
    <div key="2" className="slide-content w-full h-full flex relative">
      <RegMark className="top-8 left-8 text-black" />
      <RegMark className="bottom-8 right-8 text-white z-10" />

      {/* Left: The Gap */}
      <div className="w-1/2 bg-[#E6E6E1] p-16 flex flex-col justify-center border-r-2 border-black">
        <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 stagger-item">The Gap</h2>
        <p className="text-2xl font-medium text-black/80 leading-snug mb-8 stagger-item">
          There's a gap between <br/>
          <span className="font-bold italic">"AI helped me write this function"</span> <br/>
          and <br/>
          <span className="font-bold italic">"AI systematically delivered this feature."</span>
        </p>
        <div className="border-l-4 border-black pl-4 py-2 mt-4 stagger-item">
          <p className="text-xl font-bold uppercase tracking-tight">That gap has a name: AGENTIC ENGINEERING</p>
        </div>
      </div>

      {/* Right: Testimonial */}
      <div className="w-1/2 bg-black text-[#E6E6E1] p-16 flex flex-col justify-center">
        <blockquote className="text-2xl font-medium leading-relaxed text-white/90 mb-8 stagger-item">
          "Working with the Agentic Agency team quickly moved us from theory to real hands-on experience with agentic AI. This practical approach significantly accelerated our development... It has given us both the confidence and the direction to move forward much faster."
        </blockquote>
        <div className="mt-8 pt-8 border-t-2 border-white/20 stagger-item">
          <p className="font-bold uppercase tracking-widest">Niels Hanberg</p>
          <p className="font-mono text-sm text-white/50">Copyright Agent A/S</p>
        </div>
      </div>
    </div>,

    // SLIDE 8: The Anti-Pattern (Chaotic but Orthogonal)
    <div key="3" className="slide-content w-full h-full bg-[#E6E6E1] p-16 flex flex-col relative">
      <RegMark className="top-8 left-8 text-black" />
      <div className="mb-12 stagger-item">
        <span className="font-mono text-sm tracking-widest uppercase text-black/50 mb-2 block">ANTI-PATTERN</span>
        <h2 className="text-5xl font-black uppercase tracking-tighter">Ad hoc prompting.</h2>
        <p className="text-xl font-medium text-black/70 max-w-3xl mt-4 border-l-4 border-black pl-4">
          AI builds fast — but without structure, it drifts. On larger increments, massive time is wasted rescuing the project back to scope.
        </p>
      </div>

      <div className="flex-1 grid grid-cols-12 gap-8 items-start relative mt-8">
        {/* Top Flow */}
        <div className="col-span-12 flex justify-between items-center border-b-4 border-black pb-8 stagger-item">
          <div className="bg-black text-white px-8 py-3 font-bold uppercase tracking-widest rounded-sm">Define</div>
          <div className="h-1 flex-1 bg-black mx-4"></div>
          <div className="bg-black text-white px-8 py-3 font-bold uppercase tracking-widest rounded-sm">Execute</div>
          <div className="h-1 flex-1 bg-black mx-4"></div>
          <div className="bg-black text-white px-8 py-3 font-bold uppercase tracking-widest rounded-sm opacity-50 border-2 border-dashed border-white">Deliver</div>
        </div>

        {/* Fractured Cascades */}
        <div className="col-span-5 pt-8 relative stagger-item">
          <div className="absolute top-0 right-8 w-1 h-16 bg-black"></div>
          <div className="absolute top-16 right-8 w-full h-1 bg-black"></div>
          <h3 className="text-xl font-bold uppercase tracking-tight mb-6 bg-white p-4 border-2 border-black inline-block relative z-10">Observable Symptoms</h3>
          <ul className="space-y-4 font-medium text-lg">
            <li className="flex items-center gap-3"><XSquare className="text-black/50 shrink-0"/> Missed scope</li>
            <li className="flex items-center gap-3"><XSquare className="text-black/50 shrink-0"/> Uncaught bugs</li>
            <li className="flex items-center gap-3"><XSquare className="text-black/50 shrink-0"/> Architecture violations</li>
            <li className="flex items-center gap-3"><XSquare className="text-black/50 shrink-0"/> Long debug sessions</li>
          </ul>
        </div>

        <div className="col-span-2 relative h-full">
           {/* Orthogonal fracture lines connecting the two blocks */}
           <div className="absolute top-8 left-1/2 w-1 h-32 bg-black/30"></div>
           <div className="absolute top-40 left-1/4 w-3/4 h-1 bg-black/30"></div>
           <div className="absolute top-40 right-0 w-1 h-24 bg-black/30"></div>
        </div>

        <div className="col-span-5 pt-24 relative stagger-item">
          <h3 className="text-xl font-bold uppercase tracking-tight mb-6 bg-black text-white p-4 inline-block relative z-10">Cascading Consequences</h3>
          <ul className="space-y-4 font-medium text-lg border-l-4 border-black pl-6 py-2">
            <li className="flex items-center gap-3"><AlertTriangle className="text-black shrink-0"/> Regressions compound</li>
            <li className="flex items-center gap-3"><AlertTriangle className="text-black shrink-0"/> Context loss across sessions</li>
            <li className="flex items-center gap-3"><AlertTriangle className="text-black shrink-0"/> Same mistakes repeated</li>
            <li className="flex items-center gap-3"><AlertTriangle className="text-black shrink-0"/> Developer trapped nursing the agent</li>
          </ul>
        </div>
      </div>
    </div>,

    // SLIDE 9: The Solution (The Harness)
    <div key="4" className="slide-content w-full h-full bg-black text-white p-16 flex flex-col relative overflow-hidden">
      <RegMark className="top-8 right-8 text-white" />
      <div className="mb-12 stagger-item">
        <span className="font-mono text-sm tracking-widest uppercase text-white/50 mb-2 block">SOLUTION</span>
        <h2 className="text-5xl font-black uppercase tracking-tighter">The Harness.</h2>
        <p className="text-xl font-medium text-white/70 max-w-3xl mt-4 border-l-4 border-white/30 pl-4">
          Long-running, autonomous, accurate delivery of projects and features to scope.
        </p>
      </div>

      {/* Orthogonal Blueprint Grid */}
      <div className="flex-1 grid grid-cols-3 gap-0 border-4 border-white/20 rounded-xl relative mt-4">

        {/* Define */}
        <div className="p-8 border-r-2 border-white/20 flex flex-col stagger-item bg-[#111]">
          <div className="flex items-center gap-4 mb-8 border-b-2 border-white/10 pb-4">
            <span className="font-mono text-2xl font-bold text-white/30">01</span>
            <h3 className="text-2xl font-bold uppercase tracking-tight">DEFINE</h3>
          </div>
          <ul className="space-y-6 font-medium text-lg text-white/80">
            <li className="flex items-start gap-3"><CheckSquare className="shrink-0 mt-1"/> Spec: total scope, acceptance criteria, references</li>
            <li className="flex items-start gap-3"><CheckSquare className="shrink-0 mt-1"/> Iteration breakdown: scopes</li>
          </ul>
        </div>

        {/* Execute */}
        <div className="p-8 border-r-2 border-white/20 flex flex-col relative stagger-item bg-[#1a1a1a]">
          {/* Incoming Arrow */}
          <div className="absolute top-1/4 -left-4 w-8 h-1 bg-white z-10"></div>

          <div className="flex items-center gap-4 mb-8 border-b-2 border-white/10 pb-4">
            <span className="font-mono text-2xl font-bold text-white/30">02</span>
            <h3 className="text-2xl font-bold uppercase tracking-tight">EXECUTE</h3>
            <span className="font-mono text-xs text-white/50 ml-auto bg-white/10 px-2 py-1">(Iteration 1–N)</span>
          </div>
          <div className="bg-black p-4 rounded-md border border-white/10 mb-4">
            <span className="font-mono text-sm text-white/50">Plan iteration → Create Features</span>
          </div>
          <ul className="space-y-4 font-medium text-white/80 border-l-2 border-white/20 pl-4 ml-4">
            <li>Feature 1: tasks, build, tests</li>
            <li>Feature 2: tasks, build, tests</li>
          </ul>
        </div>

        {/* Deliver */}
        <div className="p-8 flex flex-col relative stagger-item bg-[#111]">
          {/* Incoming Arrow */}
          <div className="absolute top-1/3 -left-4 w-8 h-1 bg-white z-10"></div>

          <div className="flex items-center gap-4 mb-8 border-b-2 border-white/10 pb-4">
            <span className="font-mono text-2xl font-bold text-white/30">03</span>
            <h3 className="text-2xl font-bold uppercase tracking-tight">DELIVER</h3>
          </div>
          <ul className="space-y-6 font-medium text-lg text-white/80 z-10">
            <li className="flex items-start gap-3 bg-white/5 p-3 rounded-md border border-white/10"><CheckSquare className="shrink-0 mt-1"/> Accept: scope respected?</li>
            <li className="flex items-start gap-3"><CheckSquare className="shrink-0 mt-1"/> Reflect: QA, lessons learned</li>
            <li className="flex items-start gap-3 text-[#E6E6E1] font-bold"><AlertTriangle className="shrink-0 mt-1"/> Re-work loop if needed</li>
          </ul>
        </div>

        {/* The Orthogonal Re-Work Loop SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ padding: '2rem' }}>
          {/* Line starting from Deliver bottom, going left, and up into Execute */}
          <path
            d="M 85% 85% L 85% 95% L 50% 95% L 50% 85%"
            fill="none"
            stroke="#ffffff"
            strokeWidth="4"
            strokeDasharray="8 8"
            className="opacity-40 animate-[dash_20s_linear_infinite]"
          />
          {/* Arrow head pointing up into Execute */}
          <polygon points="50%,85% 49%,88% 51%,88%" fill="#ffffff" className="opacity-40" />
        </svg>
      </div>
    </div>
  ];

  return (
    <div className="w-full h-screen bg-[#E6E6E1] p-4 md:p-8 flex flex-col items-center justify-center font-['Space_Grotesk']">
      {/* Aspect Ratio Container mapping to 16:9 Presentation Format */}
      <div ref={slideRef} className="w-full max-w-[1280px] aspect-video bg-white shadow-2xl relative border-4 border-black rounded-lg overflow-hidden">
        {slides[currentSlide]}
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center gap-6 bg-white border-2 border-black rounded-full p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <button onClick={prevSlide} disabled={currentSlide === 0} className="p-3 hover:bg-black hover:text-white rounded-full transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-black">
          <ArrowLeft size={24} />
        </button>
        <div className="font-mono font-bold tracking-widest w-24 text-center">
          0{currentSlide + 1} / 0{slides.length}
        </div>
        <button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="p-3 hover:bg-black hover:text-white rounded-full transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-black">
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}
