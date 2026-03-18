import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Terminal, FileText, RefreshCw, Target, TestTube, Zap, CheckCircle2, Layers, ChevronDown } from 'lucide-react';
import { PageMeta, BreadcrumbSchema } from '../components/seo';

gsap.registerPlugin(ScrollTrigger);

const MethodPage = () => {
  const pageRef = useRef(null);
  const [expandedSection, setExpandedSection] = useState(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.hero-anim',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.08, ease: 'power3.out', delay: 0.2 }
      );

      gsap.fromTo('.fade-up',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.fade-up', start: 'top 80%' }
        }
      );

      // Parallax effect on quotes
      gsap.utils.toArray('.parallax-quote').forEach((quote) => {
        gsap.to(quote, {
          y: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: quote,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-[#E6E6E1]">
      <PageMeta
        title="Method & Tooling — A Deep Dive"
        description="Our beliefs about AI-assisted software development. Claude Code, The Harness, and why structure beats chaos at scale."
        path="/method"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Method & Tooling', path: '/method' }
      ]} />

      {/* HERO - Philosophical Opening */}
      <section className="relative min-h-[100vh] w-full flex items-center justify-center px-6 md:px-16 overflow-hidden bg-black text-[#E6E6E1]">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-4xl text-center">
          <p className="hero-anim font-mono text-sm uppercase tracking-widest text-white/40 mb-8">For those who dig deeper</p>
          <h1 className="hero-anim text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-8">
            The question has changed.
          </h1>
          <p className="hero-anim text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-12">
            Most teams are still asking: <em className="text-white/50">"Can it actually code well?"</em><br/>
            That question has already been answered. <strong className="text-white">Yes. Decisively.</strong>
          </p>
          <p className="hero-anim text-lg text-white/50 max-w-xl mx-auto">
            The question that matters now is different.
          </p>
          <div className="hero-anim mt-16 flex justify-center">
            <ChevronDown size={32} className="text-white/30 animate-bounce" />
          </div>
        </div>
      </section>

      {/* THE REAL QUESTION */}
      <section className="py-32 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-black/90 fade-up">
            How do you harness that capability across a large project?
          </p>
          <div className="mt-12 space-y-6 text-lg text-black/70 leading-relaxed fade-up">
            <p>
              Because while the code quality at the Task level is excellent, something breaks down at scale. Left to work without structure, an agent drifts. Not dramatically, not all at once — but persistently.
            </p>
            <p>
              Scope boundaries blur at the edges. Architectural decisions made early get quietly contradicted later. Context that was present at the start of a session evaporates by the middle of it.
            </p>
            <p className="text-black font-medium">
              The agent is not failing to write good code. It is failing to stay oriented across the full arc of a project.
            </p>
          </div>
        </div>
      </section>

      {/* THE LANDSCAPE - Voices */}
      <section className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-white/30 mb-16 text-center">What we're hearing</p>

          <div className="grid md:grid-cols-3 gap-12 mb-24">
            {/* Jensen */}
            <div className="parallax-quote">
              <blockquote className="text-xl font-medium leading-relaxed mb-6 text-white/90">
                "You won't lose your job to AI — you'll lose your job to somebody who uses AI."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-[#76B900]"></div>
                <div>
                  <div className="font-bold text-sm">Jensen Huang</div>
                  <div className="text-white/40 text-xs font-mono">NVIDIA · Milken Institute 2025</div>
                </div>
              </div>
            </div>

            {/* Satya */}
            <div className="parallax-quote">
              <blockquote className="text-xl font-medium leading-relaxed mb-6 text-white/90">
                "20-30% of the code in Microsoft's repositories is written by software."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-[#00A4EF]"></div>
                <div>
                  <div className="font-bold text-sm">Satya Nadella</div>
                  <div className="text-white/40 text-xs font-mono">Microsoft · LlamaCon 2025</div>
                </div>
              </div>
            </div>

            {/* Dario */}
            <div className="parallax-quote">
              <blockquote className="text-xl font-medium leading-relaxed mb-6 text-white/90">
                "In 12 months, we may be in a world where AI is writing essentially all of the code."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-[#D97706]"></div>
                <div>
                  <div className="font-bold text-sm">Dario Amodei</div>
                  <div className="text-white/40 text-xs font-mono">Anthropic · CFR 2025</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hidden insight - Easter egg */}
          <div className="border-t border-white/10 pt-12">
            <p className="text-white/40 text-sm max-w-2xl mx-auto text-center leading-relaxed">
              Y Combinator's Garry Tan noted that for 25% of their Winter 2025 batch, 95% of code was LLM-generated.
              <span className="text-white/20"> The pattern has repeated before — farming, printing, electricity, the internet. The people who adapted early, thrived.</span>
            </p>
          </div>
        </div>
      </section>

      {/* WHY CLAUDE CODE */}
      <section className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-black/40 mb-8">Our current tool of choice</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Claude Code</h2>

          <div className="space-y-6 text-lg text-black/70 leading-relaxed mb-12">
            <p>
              We didn't choose Claude Code because it's trendy. We chose it because the evidence is overwhelming. We continuously test emerging tools to stay in pioneer territory.
            </p>
            <p className="text-black/50">
              For now, Claude Code delivers the best results for complex, multi-file, long-running autonomous work. That may change. The methodology won't.
            </p>
          </div>

          {/* Subtle stats - not shouting */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { stat: "80.9%", label: "SWE-bench Verified" },
              { stat: "1M", label: "Token Context" },
              { stat: "#1", label: "Complex Problems" },
              { stat: "7hr+", label: "Autonomous Work" }
            ].map((item, i) => (
              <div key={i} className="text-center py-6 border-t border-black/10">
                <div className="font-mono text-2xl font-bold text-black/80 mb-1">{item.stat}</div>
                <div className="text-xs uppercase tracking-widest text-black/40">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Practitioner voices - subtle */}
          <div className="bg-black/5 rounded-xl p-8 space-y-6">
            <p className="text-sm text-black/50 uppercase tracking-widest font-mono mb-4">What practitioners say</p>
            <blockquote className="text-black/70 italic border-l-2 border-black/20 pl-4">
              "The strongest tool for hard problems: subtle multi-file bugs, architectural reasoning, unfamiliar codebases."
              <cite className="block mt-2 text-xs text-black/40 not-italic">— Codegen.com, AI Coding Agents Report 2026</cite>
            </blockquote>
            <blockquote className="text-black/70 italic border-l-2 border-black/20 pl-4">
              "Many teams use Cursor for routine work and switch to Claude Code when they hit something genuinely complex."
              <cite className="block mt-2 text-xs text-black/40 not-italic">— Faros.ai Developer Survey</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ADAPT - The Framework */}
      <section className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-white/30 mb-8">The framework</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">ADAPT</h2>
          <p className="text-lg text-white/40 mb-12 font-mono">Agentic Development via Artifacts, Persistence and Testing</p>

          <div className="space-y-6 text-lg text-white/70 leading-relaxed mb-16">
            <p>
              We coined <strong className="text-white">ADAPT</strong> to describe an AI-native approach to software delivery. Not "faster SAFe." Not "agile with copilots." Something structurally different.
            </p>
            <p className="text-white/50">
              ADAPT exists because agents are expensive to re-contextualize. They lose memory. They can't talk to each other. They drift. <span className="text-white/80">Persistent artifacts are the solution.</span>
            </p>
          </div>

          {/* The Hierarchy */}
          <div className="border border-white/20 rounded-lg overflow-hidden mb-12">
            <div className="grid grid-cols-4 bg-white/10 p-4 font-mono text-xs uppercase tracking-widest text-white/50">
              <div><span className="normal-case">SAFe</span> Concept</div>
              <div>ADAPT</div>
              <div>Time Shift</div>
              <div>Key Insight</div>
            </div>
            {[
              { safe: "Program Increment", adapt: "Increment", time: "8–12 wks → 30m–15hr", insight: "Scope-boxed, not time-boxed" },
              { safe: "Sprint", adapt: "Iteration", time: "2 wks → 30m–4hr", insight: "Graph-partitioned planning" },
              { safe: "Feature", adapt: "Feature", time: "1–2 wks → 15m–2hr", insight: "Context isolation, zero file overlap" },
              { safe: "Task", adapt: "Task", time: "Hrs–Days → 5–30m", insight: "Enforced test-gate (not aspirational)" },
              { safe: "Inspect & Adapt", adapt: "I&A Cycle", time: "Once per PI → Every Iteration", insight: "12-step automated verification" }
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-4 p-4 border-t border-white/10 text-sm">
                <div className="text-white/40">{row.safe}</div>
                <div className="text-white font-bold">{row.adapt}</div>
                <div className="text-white/60 font-mono text-xs">{row.time}</div>
                <div className="text-white/50">{row.insight}</div>
              </div>
            ))}
          </div>

          <p className="text-white/40 text-sm leading-relaxed mb-8">
            The compression is not about working faster. It's about working differently — replacing coordination ceremonies with persistent artifacts that give agents the context they need to execute autonomously.
          </p>

          {/* Connection to Harness and Tooling */}
          <div className="border-t border-white/20 pt-8 mt-8">
            <p className="text-white/70 leading-relaxed">
              <strong className="text-white">The Harness</strong> is our implementation of ADAPT — the specific workflow, document templates, and verification protocols that operationalize the framework. It's designed to be <strong className="text-white">tool-agnostic</strong>, though our current tool of choice is Claude Code.
            </p>
            <p className="text-white/40 text-sm mt-4">
              We continuously evaluate emerging tools to stay in pioneer territory. The methodology persists; the tooling evolves.
            </p>
          </div>
        </div>
      </section>

      {/* THE HARNESS - Deep Dive */}
      <section className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-black/40 mb-8">ADAPT in practice</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-black">The Harness</h2>

          <div className="space-y-6 text-lg text-black/70 leading-relaxed mb-16">
            <p>
              A highly capable agent needs structure to sustain that capability across an entire Increment — predictably, coherently, and with minimal human intervention once the scope is set.
            </p>
            <p className="text-black/50">
              If you can give an agent a precise scope — a clear account of what needs to be built and in what order — and if you can give it rich context about your architectural choices, your constraints, your preferences, and what correct looks like, it can work almost indefinitely.
            </p>
          </div>

          {/* Three Phases - Clean */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { phase: "Define", desc: "The architect works with the LLM to produce a Scope Document — what must be built and all contextually relevant knowledge.", icon: FileText },
              { phase: "Execute", desc: "A loop of Plan, Build, and Reflect. Each Iteration follows the same structure, with the I&A Cycle capturing lessons learned.", icon: RefreshCw },
              { phase: "Deliver", desc: "Acceptance criteria are verified. The Scope Document proves its value — criteria are either met or not.", icon: Target }
            ].map((item, i) => (
              <div key={i} className="border-t border-black/20 pt-6">
                <item.icon size={24} className="mb-4 text-black/40" />
                <h4 className="text-xl font-bold mb-3 text-black">{item.phase}</h4>
                <p className="text-black/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE DRIVERS - Expandable Deep Dives */}
      <section className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-white/30 mb-8">The mechanics</p>
          <h2 className="text-3xl font-bold tracking-tight mb-12">Six principles that make it work</h2>

          <div className="space-y-4">
            {[
              {
                title: "The Scope Document is the anchor",
                short: "A rigorously defined scope gives the agent an unambiguous ground truth.",
                long: "The architect's judgment about what context matters — which architectural choices, which constraints, which known pitfalls — is exactly the kind of knowledge an AI agent cannot reconstruct on its own. A great Scope Document reflects years of hard-won engineering experience distilled into a form the agent can act on reliably. Done well, it prevents the most expensive failure mode in AI-assisted development — silent, compounding drift across Iterations — before a single line of code is written."
              },
              {
                title: "The task manager enforces execution fidelity",
                short: "Every Task carries a pointer back to the scope, making recovery seamless.",
                long: "By translating each Iteration plan into discrete, tracked Tasks before a single line is written, the system ensures Claude Code executes what was planned — not what seems convenient in the moment. If the agent loses context mid-Iteration, every Task already carries a pointer back to the scope."
              },
              {
                title: "The I&A Cycle turns errors into institutional knowledge",
                short: "Lessons learned feed forward into subsequent Iterations.",
                long: "After each Iteration, a structured Inspect & Adapt Cycle captures lessons learned — patterns, anti-patterns, testing insights, environment quirks — as written documents. These feed forward into subsequent Iterations, making the agent progressively smarter and less likely to repeat past mistakes across the life of the Increment."
              },
              {
                title: "Tests give the agent an autonomous target",
                short: "An objective, machine-readable definition of done.",
                long: "When correctness is expressed as something that must be true — a green test, a passing assertion, a verified integration — the agent gains something qualitatively different from a written instruction. Rather than proceeding on assumption, the agent can run, fail, reason, adjust, and retry — autonomously, repeatedly, without human involvement — until the tests pass. The gap between an agent that has tests to work against and one that does not is not marginal. It is the difference between a system that self-corrects and one that self-deceives."
              },
              {
                title: "The loop closes itself",
                short: "The final Task in every Iteration is to begin the next.",
                long: "This seemingly small design choice eliminates a powerful trained tendency in the agent to declare victory and stop. The workflow becomes self-perpetuating, allowing the agent to run through many Iterations — and ultimately deliver the full Increment — without requiring the architect to intervene and restart."
              },
              {
                title: "Testing capability matures across Iterations",
                short: "Test quality compounds rather than stagnates.",
                long: "Setting up a meaningful test suite is rarely clean. Tests are difficult to wire up, tricky to make deterministic, and often need to be substantially rethought as understanding of the system deepens. The Harness takes a different view: testing capability is itself something that matures across Iterations. Each I&A Cycle surfaces what the agent got wrong about the test environment, what kinds of tests proved brittle or misleading, and what a better approach looks like. By the later Iterations, the agent is running the right tests, reliably, without thrashing."
              }
            ].map((item, i) => (
              <div key={i} className="border border-white/20 rounded-lg overflow-hidden bg-white/5">
                <button
                  onClick={() => setExpandedSection(expandedSection === i ? null : i)}
                  className="w-full p-6 text-left flex items-start justify-between hover:bg-white/10 transition-colors"
                >
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-white">{item.title}</h4>
                    <p className="text-white/50 text-sm">{item.short}</p>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-white/30 transition-transform mt-1 ${expandedSection === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {expandedSection === i && (
                  <div className="px-6 pb-6 pt-2 border-t border-white/10">
                    <p className="text-white/70 leading-relaxed">{item.long}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE ARCHITECT'S ROLE - Philosophical */}
      <section className="py-32 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-black/40 mb-8">The human in the loop</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-12 text-black">
            The architect's role shifts from moment-to-moment overseer to systems designer.
          </h2>
          <div className="space-y-6 text-lg text-black/60 leading-relaxed">
            <p>
              The emphasis on the Scope Document might create a misleading impression: that the senior engineer is expected to produce a large, comprehensive document through force of will and volume of typing.
            </p>
            <p className="text-black/80">
              That is not what happens in practice.
            </p>
            <p>
              The Scope Document is itself produced in dialogue with Claude Code. The architect directs it to inspect the existing codebase, research the best available architectural approaches, and surface the implicit decisions that have accumulated over time.
            </p>
            <p className="border-l-2 border-black/30 pl-6 py-4 text-black/90">
              The architect's effort is not clerical. It is not about typing volume. It is about <strong>controlling the conversation</strong>: deciding what questions need to be asked, what needs to be researched, what risks need to be named.
            </p>
            <p className="text-black/50 text-base">
              The senior engineer's contribution is the ability to look at a nascent architectural direction and see, from experience, the problem that is hiding in plain sight.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING THOUGHT - Easter Egg territory */}
      <section className="py-32 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-medium leading-relaxed text-white/80 mb-8">
            Not keystrokes. <strong className="text-white">Judgment.</strong>
          </p>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
            The Scope Document is the crystallization of that judgment into a form the agent can carry forward — reliably, indefinitely, across the full arc of the Increment.
          </p>

          {/* Subtle signature - Easter egg */}
          <div className="mt-24 pt-12 border-t border-white/10">
            <p className="font-mono text-xs text-white/30 tracking-widest">
              That is a better use of the human.
            </p>
          </div>
        </div>
      </section>

      {/* Hidden footer insight */}
      <section className="py-12 px-6 md:px-16 bg-black/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-black/30 text-center font-mono">
            If you've read this far, you're probably one of us. • agenticagency.dev
          </p>
        </div>
      </section>
    </div>
  );
};

export default MethodPage;
