import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowLeft, ArrowRight, XSquare, CheckSquare } from 'lucide-react';

export default function FlowSlides() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);

  const nextSlide = () => setCurrentSlide(1);
  const prevSlide = () => setCurrentSlide(0);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Reset animations
      gsap.set('.anim-path', { strokeDasharray: 2000, strokeDashoffset: 2000 });
      gsap.set('.anim-text', { opacity: 0, y: 10 });

      // Animate based on current slide
      if (currentSlide === 0) {
        const tl = gsap.timeline();
        tl.to('.anim-path-1', { strokeDashoffset: 0, duration: 2, ease: 'power2.out' })
          .to('.anim-text-1', { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: 'power2.out' }, "-=1");
      } else {
        const tl = gsap.timeline();
        tl.to('.anim-path-2', { strokeDashoffset: 0, duration: 2.5, ease: 'power2.inOut' })
          .to('.anim-text-2', { opacity: 1, y: 0, stagger: 0.05, duration: 0.5, ease: 'power2.out' }, "-=1.5");
      }
    }, containerRef);

    return () => ctx.revert();
  }, [currentSlide]);

  return (
    <div className="w-full min-h-screen bg-[#E6E6E1] p-4 md:p-8 flex flex-col items-center justify-center font-['Space_Grotesk']">

      {/* 16:9 Presentation Canvas */}
      <div ref={containerRef} className="w-full max-w-[1400px] aspect-[16/9] relative overflow-hidden rounded-xl shadow-2xl border-4 border-black">

        {/* ==========================================
            SLIDE 1: THE ANTI-PATTERN
            ========================================== */}
        <div className={`absolute inset-0 w-full h-full bg-black text-[#E6E6E1] transition-opacity duration-700 ${currentSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>

          {/* Header */}
          <div className="absolute top-[8%] w-full text-center anim-text-1">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">Anti-pattern in agentic dev: Ad hoc prompting</h1>
            <p className="text-xl md:text-2xl font-medium text-[#E6E6E1]/70">Taking it one step at a time with the agent</p>
          </div>

          {/* Exact Mapped Erratic Path SVG */}
          <svg className="absolute inset-0 w-full h-full z-0" preserveAspectRatio="none">
            <defs>
              <marker id="arrowhead-fail" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#E6E6E1" />
              </marker>
            </defs>
            {/* Erratic Path derived exactly from source image coordinates */}
            <path
              className="anim-path anim-path-1"
              d="M 6% 55% L 21% 43% L 40% 43% L 35% 75% L 50% 32% L 65% 50% L 72% 50% L 82% 70%"
              fill="none"
              stroke="#E6E6E1"
              strokeWidth="4"
              markerMid="url(#arrowhead-fail)"
              markerEnd="url(#arrowhead-fail)"
              strokeLinejoin="miter"
            />
            {/* Manual mid-arrows to perfectly match the original visual */}
            <path d="M 6% 55% L 21% 43%" fill="none" stroke="#E6E6E1" strokeWidth="4" markerEnd="url(#arrowhead-fail)" className="anim-path anim-path-1" />
            <path d="M 21% 43% L 40% 43%" fill="none" stroke="#E6E6E1" strokeWidth="4" markerEnd="url(#arrowhead-fail)" className="anim-path anim-path-1" />
            <path d="M 40% 43% L 35% 75%" fill="none" stroke="#E6E6E1" strokeWidth="4" markerEnd="url(#arrowhead-fail)" className="anim-path anim-path-1" />
            <path d="M 35% 75% L 50% 32%" fill="none" stroke="#E6E6E1" strokeWidth="4" markerEnd="url(#arrowhead-fail)" className="anim-path anim-path-1" />
            <path d="M 50% 32% L 65% 50%" fill="none" stroke="#E6E6E1" strokeWidth="4" markerEnd="url(#arrowhead-fail)" className="anim-path anim-path-1" />
            <path d="M 65% 50% L 72% 50%" fill="none" stroke="#E6E6E1" strokeWidth="4" markerEnd="url(#arrowhead-fail)" className="anim-path anim-path-1" />
            <path d="M 72% 50% L 82% 70%" fill="none" stroke="#E6E6E1" strokeWidth="4" markerEnd="url(#arrowhead-fail)" className="anim-path anim-path-1" />
          </svg>

          {/* Goal Box (Floating unhit) */}
          <div className="absolute top-[35%] left-[80%] border-2 border-[#E6E6E1] px-10 py-3 rounded-sm anim-text-1 bg-black z-10">
            <span className="text-xl font-bold uppercase tracking-widest">Goal</span>
          </div>

          {/* Anti-Patterns List */}
          <div className="absolute top-[60%] left-[48%] anim-text-1">
            <h3 className="text-2xl font-bold mb-4">Typical anti-patterns seen</h3>
            <ul className="space-y-1.5 text-[#E6E6E1]/80 font-medium text-sm md:text-base">
              <li>Missed scope</li>
              <li>Uncaught bugs</li>
              <li>Does not respect architecture, principles, ...</li>
              <li>Long debug & missed scope catching sessions</li>
              <li>Regressions</li>
              <li>Context loss</li>
              <li>Same mistakes repeated repeatedly</li>
              <li>Developer time wasted</li>
              <li>Developer caught in nursing the agent</li>
            </ul>
          </div>
        </div>

        {/* ==========================================
            SLIDE 2: THE SOLUTION (HARNESS)
            ========================================== */}
        <div className={`absolute inset-0 w-full h-full bg-[#E6E6E1] text-black transition-opacity duration-700 ${currentSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>

          {/* Header */}
          <div className="absolute top-[8%] w-full text-center anim-text-2">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">Solution: The harness</h1>
            <p className="text-xl md:text-2xl font-medium text-black/70">Long-running, autonomous <span className="italic font-bold">correct</span> delivery of Increments and features to scope</p>
          </div>

          {/* Grid Lines (Exact matches to source image vertical lines) */}
          <div className="absolute top-[30%] bottom-[10%] left-[15%] w-px border-l-2 border-dashed border-black/30"></div>
          <div className="absolute top-[30%] bottom-[10%] right-[15%] w-px border-l-2 border-dashed border-black/30"></div>

          {/* Top Row Headers */}
          <div className="absolute top-[35%] left-[7%] text-2xl font-bold anim-text-2">Define</div>
          <div className="absolute top-[35%] left-[45%] text-2xl font-bold anim-text-2">Execute</div>
          <div className="absolute top-[35%] right-[6%] text-2xl font-bold anim-text-2">Deliver</div>

          {/* SVG Complex Harness Flow */}
          <svg className="absolute inset-0 w-full h-full z-0" preserveAspectRatio="none">
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#000000" />
              </marker>
            </defs>

            {/* Main horizontal spine passing through */}
            <path className="anim-path anim-path-2" d="M 5% 50% L 95% 50%" fill="none" stroke="#000000" strokeWidth="3" markerEnd="url(#arrowhead)" />

            {/* Exact Harness Loop (Orthogonal transformation of the oval) */}
            {/* Starts near Inspect, goes right (top), down (plan), left (bottom), up (inspect) */}
            <path
              className="anim-path anim-path-2"
              d="M 35% 50% L 35% 42% L 65% 42% L 65% 68% L 35% 68% Z"
              fill="none"
              stroke="#000000"
              strokeWidth="3"
            />
            {/* Arrows for the loop */}
            <path className="anim-path anim-path-2" d="M 45% 42% L 55% 42%" fill="none" stroke="#000000" strokeWidth="3" markerEnd="url(#arrowhead)" />
            <path className="anim-path anim-path-2" d="M 55% 68% L 45% 68%" fill="none" stroke="#000000" strokeWidth="3" markerEnd="url(#arrowhead)" />

            {/* Feature Sub-loops (Replaced circles with sharp brutalist reload arrows) */}
            {/* Feature 1 Loop */}
            <path className="anim-path anim-path-2" d="M 60% 75% L 63% 75% L 63% 80% L 57% 80% L 57% 75% L 59% 75%" fill="none" stroke="#000000" strokeWidth="2" markerEnd="url(#arrowhead)" />
            {/* Feature 2 Loop */}
            <path className="anim-path anim-path-2" d="M 50% 75% L 53% 75% L 53% 80% L 47% 80% L 47% 75% L 49% 75%" fill="none" stroke="#000000" strokeWidth="2" markerEnd="url(#arrowhead)" />
            {/* Empty Loop (Left) */}
            <path className="anim-path anim-path-2 opacity-40" d="M 40% 75% L 43% 75% L 43% 80% L 37% 80% L 37% 75% L 39% 75%" fill="none" stroke="#000000" strokeWidth="2" markerEnd="url(#arrowhead)" />

            {/* Internal node triangles on main line */}
            <polygon points="23%,49% 25%,50% 23%,51%" fill="#000000" className="anim-text-2"/>
            <polygon points="48%,49% 50%,50% 48%,51%" fill="#000000" className="anim-text-2"/>
            <polygon points="73%,49% 75%,50% 73%,51%" fill="#000000" className="anim-text-2"/>
          </svg>

          {/* Text Blocks (Absolute Positioned exactly per source) */}

          {/* ZONE 1: DEFINE */}
          <div className="absolute top-[55%] left-[2%] w-[12%] anim-text-2">
            <h4 className="font-bold text-xl mb-1">Spec</h4>
            <p className="text-xs font-medium text-black/70 mb-4 leading-tight">Total scope, accept criteria, references, ...</p>
            <p className="text-xs font-medium text-black/70 leading-tight">Iteration breakdown: scopes</p>
          </div>

          {/* ZONE 2: EXECUTE */}
          <div className="absolute top-[55%] left-[17%] w-[15%] anim-text-2">
            <h4 className="font-bold text-lg mb-1">Inspect and adapt cycle on iteration</h4>
            <p className="text-xs font-medium text-black/70 leading-tight">Scope check, QA, re-work?, lessons learned...</p>
          </div>

          <div className="absolute top-[55%] left-[45%] text-center w-[10%] anim-text-2">
            <h4 className="font-bold text-lg">Iteration 1-N</h4>
          </div>

          <div className="absolute top-[58%] left-[68%] w-[15%] anim-text-2">
            <h4 className="font-bold text-lg mb-1">Plan iteration</h4>
            <p className="text-xs font-medium text-black/70 leading-tight">Create Features: Content, tasks, tests</p>
          </div>

          {/* Feature labels */}
          <div className="absolute top-[72%] left-[58%] text-center w-[10%] anim-text-2">
            <h4 className="font-bold">Feature 1</h4>
            <p className="text-[10px] font-medium text-black/70">Tasks, building, tests</p>
          </div>
          <div className="absolute top-[75%] left-[48%] text-center w-[10%] anim-text-2">
            <h4 className="font-bold">Feature 2</h4>
            <p className="text-[10px] font-medium text-black/70">Tasks, building, tests</p>
          </div>

          <div className="absolute bottom-[5%] w-full text-center anim-text-2">
            <p className="font-bold uppercase tracking-widest text-black/70">Execute iteration</p>
          </div>

          {/* ZONE 3: DELIVER */}
          <div className="absolute top-[55%] right-[2%] w-[12%] anim-text-2">
            <h4 className="font-bold text-xl mb-1">Accept</h4>
            <p className="text-xs font-medium text-black/70 leading-tight">Scope respected?<br/>Re-work?</p>
          </div>

        </div>
      </div>

      {/* Presentation Controls */}
      <div className="mt-8 flex items-center gap-6 bg-white border-2 border-black rounded-full p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <button onClick={prevSlide} disabled={currentSlide === 0} className="p-3 hover:bg-black hover:text-white rounded-full transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-black">
          <ArrowLeft size={24} />
        </button>
        <div className="font-mono font-bold tracking-widest w-24 text-center">
          0{currentSlide + 1} / 02
        </div>
        <button onClick={nextSlide} disabled={currentSlide === 1} className="p-3 hover:bg-black hover:text-white rounded-full transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-black">
          <ArrowRight size={24} />
        </button>
      </div>

    </div>
  );
}
