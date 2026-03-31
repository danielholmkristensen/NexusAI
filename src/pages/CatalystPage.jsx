import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Code2, Shield, FileText, TestTube, Check, Clock, Layers } from 'lucide-react';
import { MagneticButton } from '../components/common';
import { ProductLadderSection, TargetAudienceSection, FAQSection } from '../components/sections';
import { PageMeta, BreadcrumbSchema } from '../components/seo';
import { useInquiry } from '../context/InquiryContext';

gsap.registerPlugin(ScrollTrigger);

const CatalystPage = () => {
  const pageRef = useRef(null);
  const { openInquiry } = useInquiry();

  const catalystFAQs = [
    { q: "What does 'fixed price' mean?", a: "We scope the engagement, agree on deliverables, and quote a fixed price. No hourly billing, no scope creep charges. You know the total cost before we start." },
    { q: "How do you deliver so fast?", a: "AI-powered development with human engineering oversight. We use agentic workflows for implementation while maintaining 80%+ test coverage and full documentation." },
    { q: "Do we need The Spark first?", a: "Recommended but not required. The Spark ensures smooth handoff. Organizations with mature infrastructure can proceed directly after expedited validation." },
    { q: "What tech stack do you work with?", a: "We're stack-agnostic but opinionated. We'll recommend the right tools for your context. Common: TypeScript, Python, Go, React, Rails, PostgreSQL." },
    { q: "Who owns the code?", a: "Agentic Agency retains IP ownership. You receive a perpetual, non-exclusive licence to use the software for your internal business operations. No vendor lock-in — you can run, modify, and extend it. The licence is yours forever upon delivery." },
    { q: "What's included in the deliverable?", a: "Production-ready code, 80%+ test coverage, full documentation, deployment to your infrastructure, and handoff to your team or to The Core for ongoing support." }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.hero-anim',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.08, ease: 'power3.out', delay: 0.2 }
      );

      gsap.fromTo('.guarantee-card',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '#guarantees-section', start: 'top 70%' }
        }
      );

      gsap.fromTo('.process-step',
        { x: -30, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '#process-section', start: 'top 70%' }
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <PageMeta
        title="The Catalyst — AI Development as a Service"
        description="Fixed-price enterprise software delivery. 80%+ test coverage. Full documentation. Perpetual licence included. 8-12 weeks from kickoff to production."
        path="/the-catalyst"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'The Catalyst', path: '/the-catalyst' }
      ]} />

      {/* HERO */}
      <section className="relative h-[100dvh] w-full flex items-end pb-24 px-6 md:px-16 overflow-hidden bg-black text-[#E6E6E1]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-5xl">
          <div className="hero-anim font-mono text-sm uppercase tracking-widest text-[#E6E6E1]/50 mb-4">AI Development as a Service</div>
          <h1 className="hero-anim text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-none tracking-tighter mb-4">
            THE CATALYST
          </h1>
          <p className="hero-anim text-xl md:text-2xl text-[#E6E6E1]/80 max-w-3xl mb-6 font-medium leading-snug">
            Enterprise software. <strong className="text-[#E6E6E1]">Delivered.</strong>
          </p>
          <p className="hero-anim text-lg text-[#E6E6E1]/60 max-w-2xl mb-12 font-medium">
            AI-powered development with human engineering oversight. Fixed price. Production-grade. Yours to keep.
          </p>
          <div className="hero-anim flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <MagneticButton
              onClick={() => openInquiry('catalyst', 'Get a quote')}
              className="bg-[#E6E6E1] text-black px-8 py-5 text-lg font-bold flex items-center gap-2 hover:bg-white"
            >
              Get a quote <ArrowUpRight size={20} />
            </MagneticButton>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#E6E6E1]/60 border-l-2 border-[#E6E6E1]/20 pl-4 py-1">
              Fixed price<br/>Scoped to your needs
            </span>
          </div>
        </div>
      </section>

      {/* WHAT IS ADAAS */}
      <section className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8">What You Get</h2>
              <p className="text-xl text-black/80 font-medium leading-relaxed mb-6">
                AI handles the heavy lifting. Engineers ensure it's done right.
              </p>
              <p className="text-xl text-black/70 font-medium leading-relaxed">
                Every line reviewed. Every feature tested. Every deliverable documented.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black text-[#E6E6E1] rounded-xl p-8">
                <div className="text-5xl font-black mb-2">80%+</div>
                <div className="font-bold uppercase tracking-tight text-lg">Test Coverage</div>
                <div className="text-sm text-[#E6E6E1]/60 mt-2">No untested code ships</div>
              </div>
              <div className="bg-white rounded-xl p-8 border-4 border-black">
                <div className="text-5xl font-black mb-2">100%</div>
                <div className="font-bold uppercase tracking-tight text-lg">Your Code</div>
                <div className="text-sm text-black/60 mt-2">Perpetual licence included</div>
              </div>
              <div className="bg-white rounded-xl p-8 border-4 border-black">
                <div className="text-5xl font-black mb-2">Fixed</div>
                <div className="font-bold uppercase tracking-tight text-lg">Price</div>
                <div className="text-sm text-black/60 mt-2">Agreed before we start</div>
              </div>
              <div className="bg-black text-[#E6E6E1] rounded-xl p-8">
                <div className="text-5xl font-black mb-2">Weeks</div>
                <div className="font-bold uppercase tracking-tight text-lg">Not Months</div>
                <div className="text-sm text-[#E6E6E1]/60 mt-2">Kickoff to production</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section id="guarantees-section" className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">What We Guarantee</h2>
            <p className="text-xl font-medium text-[#E6E6E1]/70 max-w-2xl">Every Catalyst engagement includes these non-negotiables.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Code2,
                title: "Production-Ready Code",
                desc: "Not a prototype. Not a proof of concept. Production-grade software ready for real users."
              },
              {
                icon: TestTube,
                title: "80%+ Test Coverage",
                desc: "Comprehensive test suites. Unit, integration, and e2e where appropriate. No untested code ships."
              },
              {
                icon: FileText,
                title: "Full Documentation",
                desc: "Architecture docs, API references, deployment guides. Your team can maintain and extend."
              },
              {
                icon: Shield,
                title: "Security Review",
                desc: "OWASP compliance, dependency audits, secrets management. Enterprise security standards."
              },
              {
                icon: Layers,
                title: "Your Infrastructure",
                desc: "Deployed to your environment. Your cloud, your repos, your CI/CD. No vendor dependencies."
              },
              {
                icon: Clock,
                title: "Fixed Timeline",
                desc: "Agreed delivery date. Weekly demos showing progress. No scope creep, no delays."
              }
            ].map((item, i) => (
              <div key={i} className="guarantee-card bg-[#111] border border-white/10 rounded-xl p-8 hover:border-white/30 transition-colors">
                <item.icon size={32} className="text-[#E6E6E1]/60 mb-4" />
                <h3 className="text-xl font-bold uppercase tracking-tight mb-3">{item.title}</h3>
                <p className="text-[#E6E6E1]/70 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process-section" className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">How It Works</h2>
            <p className="text-xl font-medium text-black/70 max-w-2xl">From first conversation to production in weeks.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              {[
                { phase: "01", title: "Scope", desc: "Define requirements and deliverables. Fixed-price quote.", duration: "1 week" },
                { phase: "02", title: "Spark", desc: "Capture context. Lock specifications. (Optional if already scoped)", duration: "1-2 weeks" },
                { phase: "03", title: "Build", desc: "AI-powered development. Weekly demos.", duration: "6-10 weeks" },
                { phase: "04", title: "Deliver", desc: "Deploy. Document. Hand off.", duration: "1 week" }
              ].map((step, i) => (
                <div key={i} className="process-step flex gap-6">
                  <div className="w-16 flex-shrink-0">
                    <div className="w-12 h-12 bg-black text-[#E6E6E1] rounded-full flex items-center justify-center font-mono font-bold">
                      {step.phase}
                    </div>
                  </div>
                  <div className="flex-1 border-b border-black/10 pb-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold uppercase tracking-tight">{step.title}</h3>
                      <span className="font-mono text-xs text-black/50">{step.duration}</span>
                    </div>
                    <p className="text-black/70 font-medium">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-black text-[#E6E6E1] rounded-xl p-10">
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-6">Engineering, Not Just Prompting</h3>
              <p className="text-[#E6E6E1]/80 font-medium mb-8 leading-relaxed">
                AI can generate code. But generating code is not engineering. Architecture, testing, maintainability, security — these require human judgment.
              </p>
              <p className="text-[#E6E6E1]/80 font-medium mb-8 leading-relaxed">
                The Catalyst combines AI velocity with engineering discipline. Every feature is architected, every commit is tested, every deployment is documented.
              </p>
              <div className="border-t border-white/20 pt-8">
                <p className="text-sm text-[#E6E6E1]/50 uppercase tracking-wider mb-4">Our principle</p>
                <p className="text-2xl font-bold">Engineering {">"} Prompting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TARGET AUDIENCE */}
      <TargetAudienceSection
        forItems={[
          "Organizations that need production software, not experiments.",
          "Teams without bandwidth to build but with clear requirements.",
          "Companies that value fixed pricing and predictable timelines.",
          "Anyone tired of agency overruns and hourly billing surprises."
        ]}
        requirement="Clear requirements and a designated stakeholder for feedback loops. We move fast — you need to keep pace with reviews."
        alternateTitle="Not sure if this is right for you?"
        alternateItems={[
          "Unclear requirements? We can help scope during discovery.",
          "Small project? We have minimum engagement thresholds.",
          "Want ongoing support? Add The Core after delivery."
        ]}
        alternateCTA={{ text: "Let's discuss", onClick: () => openInquiry('catalyst', "Discuss fit") }}
      />

      {/* PRICING PHILOSOPHY */}
      <section className="py-24 bg-white px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">Fixed Price.<br/>No Surprises.</h2>
              <p className="text-xl font-medium text-black/70 mb-6 leading-relaxed">
                We don't bill hours. We scope your project, agree on deliverables, and quote a fixed price before any work begins.
              </p>
              <p className="text-lg text-black/60 font-medium leading-relaxed">
                Every engagement is custom. The price reflects the complexity of your requirements — not how many hours we spend.
              </p>
            </div>

            <div className="bg-black text-[#E6E6E1] rounded-xl p-10 md:p-12">
              <div className="border-b border-white/10 pb-8 mb-8">
                <div className="font-mono text-xs uppercase tracking-widest text-[#E6E6E1]/50 mb-3">Our Model</div>
                <p className="text-2xl font-bold leading-snug">
                  You know the total cost before we write the first line of code.
                </p>
              </div>

              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-[#E6E6E1]/60 mt-1 flex-shrink-0" />
                  <span className="text-[#E6E6E1]/80 font-medium">Scoped to your requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-[#E6E6E1]/60 mt-1 flex-shrink-0" />
                  <span className="text-[#E6E6E1]/80 font-medium">Fixed timeline with weekly demos</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-[#E6E6E1]/60 mt-1 flex-shrink-0" />
                  <span className="text-[#E6E6E1]/80 font-medium">No hourly billing. No scope creep charges.</span>
                </li>
              </ul>

              <MagneticButton
                onClick={() => openInquiry('catalyst', 'Get a quote')}
                className="bg-[#E6E6E1] text-black px-8 py-4 text-lg font-bold w-full justify-center"
              >
                Get a quote <ArrowUpRight size={18} />
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={catalystFAQs} />

      {/* PRODUCT LADDER */}
      <ProductLadderSection currentProduct="catalyst" variant="journey" />
    </div>
  );
};

export default CatalystPage;
