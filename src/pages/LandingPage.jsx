import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { MagneticButton } from '../components/common';
import { PageMeta, OrganizationSchema, BreadcrumbSchema } from '../components/seo';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Animation - slower, more deliberate
      gsap.fromTo('.hero-anim',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.4, stagger: 0.12, ease: 'power3.out', delay: 0.3 }
      );

      // Scroll indicator
      gsap.to('.scroll-indicator', {
        y: 8,
        duration: 1.5,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true,
        delay: 2
      });

      gsap.to('.scroll-indicator', {
        opacity: 0,
        duration: 0.4,
        scrollTrigger: {
          trigger: '#gap-section',
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      });

      // The Gap - word by word reveal
      gsap.fromTo('.gap-word',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#gap-section',
            start: 'top 60%'
          }
        }
      );

      // Product sections - each reveals on scroll
      gsap.fromTo('.product-reveal',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.product-reveal',
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Chevron marks animation
      gsap.fromTo('.chevron-mark',
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.chevron-mark',
            start: 'top 80%'
          }
        }
      );

      // Final CTA
      gsap.fromTo('.cta-reveal',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.cta-reveal',
            start: 'top 85%'
          }
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <PageMeta
        title="Agentic Agency — AI Development as a Service"
        description="Enterprise software. Built by AI. Overseen by engineers. Fixed price. Production-grade. Scope it, build it, run it."
        path="/"
      />
      <OrganizationSchema />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }]} />

      {/* HERO — Statement only. No CTA. Let it breathe. */}
      <section className="relative h-[100dvh] w-full flex flex-col justify-center px-6 md:px-16 overflow-hidden bg-[#E6E6E1]">
        {/* Grid texture only - no stock photos */}
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }}></div>

        {/* Subtle >> mark in corner */}
        <div className="absolute top-8 right-8 md:top-12 md:right-16 z-10">
          <span className="hero-anim text-black/10 text-6xl md:text-8xl font-black tracking-tighter">{'>>'}</span>
        </div>

        <div className="relative z-10 max-w-5xl">
          <h1 className="hero-anim text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-8 text-black">
            Enterprise software.<br/>
            Built by AI.<br/>
            Overseen by engineers.
          </h1>
          <p className="hero-anim text-xl md:text-2xl text-black/60 max-w-2xl font-medium">
            Fixed&nbsp;price. Production-grade. Yours to&nbsp;keep.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <ChevronDown size={24} className="text-black/30" />
        </div>
      </section>

      {/* THE GAP — Typography only. Words as visuals. */}
      <section id="gap-section" className="py-32 md:py-48 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-5xl mx-auto">
          <p className="gap-word text-lg md:text-xl text-[#E6E6E1]/50 font-medium mb-12">
            There's a gap between "AI helped me write this function"<br className="hidden md:block" />
            and "AI systematically delivered this&nbsp;project."
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight uppercase mb-8">
            <span className="gap-word inline-block">We</span>{' '}
            <span className="gap-word inline-block">close</span>{' '}
            <span className="gap-word inline-block">that</span>{' '}
            <span className="gap-word inline-block">gap.</span>
          </h2>
          <p className="gap-word text-xl md:text-2xl text-[#E6E6E1]/60 font-medium max-w-3xl mb-6">
            The bridge is called <strong className="text-[#E6E6E1]">Agentic Engineering</strong> — and it changes how software can be delivered. We aim to make it an experience.
          </p>
          <p className="gap-word text-lg text-[#E6E6E1]/40 font-medium">
            And one more thing. It practically pays for itself.
          </p>
        </div>
      </section>

      {/* PRODUCT REVEAL — Sequential. Each earns its moment. */}

      {/* THE SPARK */}
      <section className="py-24 md:py-32 px-6 md:px-16 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="product-reveal grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="chevron-mark text-4xl md:text-5xl font-black text-black/20">{'>'}</span>
                <span className="font-mono text-xs uppercase tracking-widest text-black/40">01</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">The Spark</h3>
              <p className="text-xl text-black/70 font-medium mb-4">
                Before we build, we scope.
              </p>
              <p className="text-black/60 font-medium leading-relaxed mb-8">
                What are you building? For who? Why? Which systems does it touch? We nail the context so the build goes fast. 1-2&nbsp;weeks. One scope&nbsp;document. Zero&nbsp;ambiguity.
              </p>
              <Link to="/the-spark" className="inline-flex items-center gap-2 font-bold text-black hover:gap-3 transition-all">
                Learn more <ArrowUpRight size={18} />
              </Link>
            </div>
            <div className="bg-[#E6E6E1] rounded-xl p-10 md:p-12">
              <div className="font-mono text-xs uppercase tracking-wider text-black/40 mb-4">Output</div>
              <div className="text-2xl font-bold uppercase tracking-tight mb-4">Development Scope</div>
              <ul className="space-y-3 text-black/70 font-medium">
                <li>• Feature breakdown with acceptance criteria</li>
                <li>• Technical architecture decisions</li>
                <li>• Integration map</li>
                <li>• Fixed timeline and price</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THE CATALYST */}
      <section className="py-24 md:py-32 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="product-reveal grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <span className="chevron-mark text-4xl md:text-5xl font-black text-[#E6E6E1]/20">{'>>'}</span>
                <span className="font-mono text-xs uppercase tracking-widest text-[#E6E6E1]/40">02</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">The Catalyst</h3>
              <p className="text-xl text-[#E6E6E1]/70 font-medium mb-4">
                Then we build.
              </p>
              <p className="text-[#E6E6E1]/60 font-medium leading-relaxed mb-8">
                AI-powered development with human engineering oversight. Production-grade code. 80%+ test coverage. Full documentation. Fixed price — you know the cost before we start.
              </p>
              <Link to="/the-catalyst" className="inline-flex items-center gap-2 font-bold text-[#E6E6E1] hover:gap-3 transition-all">
                Learn more <ArrowUpRight size={18} />
              </Link>
            </div>
            <div className="lg:order-1 bg-[#111] rounded-xl p-10 md:p-12 border border-white/10">
              <div className="font-mono text-xs uppercase tracking-wider text-[#E6E6E1]/40 mb-4">Delivery</div>
              <div className="text-2xl font-bold uppercase tracking-tight mb-4">Your Software</div>
              <ul className="space-y-3 text-[#E6E6E1]/70 font-medium">
                <li>• Production-ready code</li>
                <li>• Deployed to your infrastructure</li>
                <li>• Full test coverage</li>
                <li>• Perpetual licence — yours to keep</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THE CORE */}
      <section className="py-24 md:py-32 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="product-reveal grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="chevron-mark text-4xl md:text-5xl font-black text-black/20">{'>>>'}</span>
                <span className="font-mono text-xs uppercase tracking-widest text-black/40">03</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">The Core</h3>
              <p className="text-xl text-black/70 font-medium mb-4">
                Then we keep it in peak condition.
              </p>
              <p className="text-black/60 font-medium leading-relaxed mb-8">
                The Command Center for ongoing operations. Real-time visibility. One-tap approvals. SLA-backed support. Your software, always at its best.
              </p>
              <Link to="/the-core" className="inline-flex items-center gap-2 font-bold text-black hover:gap-3 transition-all">
                Learn more <ArrowUpRight size={18} />
              </Link>
            </div>
            <div className="bg-white rounded-xl p-10 md:p-12 border-2 border-black">
              <div className="font-mono text-xs uppercase tracking-wider text-black/40 mb-4">Operations</div>
              <div className="text-2xl font-bold uppercase tracking-tight mb-4">Command Center</div>
              <ul className="space-y-3 text-black/70 font-medium">
                <li>• Real-time dashboards</li>
                <li>• Feedback queue & approvals</li>
                <li>• SLA-backed response times</li>
                <li>• New engagements without re-onboarding</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA — Single, confident */}
      <section className="py-24 md:py-32 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="cta-reveal text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-8">
            Ready to talk?
          </h2>
          <p className="cta-reveal text-lg text-black/60 font-medium mb-12 max-w-xl mx-auto">
            Most projects start with The Spark — 1-2 weeks to nail the scope. From there, we build.
          </p>
          <div className="cta-reveal">
            <MagneticButton
              to="/the-spark"
              className="bg-black text-[#E6E6E1] px-10 py-5 text-lg font-bold"
            >
              Start with The Spark <ArrowUpRight size={20} />
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
