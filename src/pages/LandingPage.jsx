import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { MagneticButton } from '../components/common';
import { ProductLadderSection } from '../components/sections';
import { PageMeta, OrganizationSchema, BreadcrumbSchema } from '../components/seo';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo('.hero-anim',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.08, ease: 'power3.out', delay: 0.2 }
      );

      // Scroll indicator: gentle bounce, then fade out on scroll
      const scrollIndicator = document.querySelector('.scroll-indicator');
      if (scrollIndicator) {
        // Initial bounce animation
        gsap.to('.scroll-indicator', {
          y: 8,
          duration: 1.2,
          ease: 'power2.inOut',
          repeat: 3,
          yoyo: true,
          delay: 2
        });

        // Fade out when user starts scrolling
        gsap.to('.scroll-indicator', {
          opacity: 0,
          duration: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#problem-section',
            start: 'top 95%',
            toggleActions: 'play none none reverse'
          }
        });
      }

      // Philosophy word reveal (main headline)
      gsap.fromTo('.phil-word',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#problem-section',
            start: 'top 70%'
          }
        }
      );

      // Subtext reveal (below fold)
      gsap.fromTo('.subtext-reveal',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#subtext-section',
            start: 'top 70%'
          }
        }
      );


      // Pillar items stagger in as path widens
      gsap.fromTo('.pillar-item',
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.pillar-item',
            start: 'top 85%'
          }
        }
      );

      // Why Us section reveal
      gsap.fromTo('.why-us-content',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#why-us-section',
            start: 'top 70%'
          }
        }
      );

      // Final CTA reveal
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
        title="The Agentic Agency — Transform Teams into Agentic Engineers"
        description="We close the gap from vibe coding to production-grade agentic engineering. Workshops, transformation programs, and advisory retainers for engineering teams."
        path="/"
      />
      <OrganizationSchema />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }]} />

      {/* A. HERO SECTION */}
      <section className="relative h-[100dvh] w-full flex flex-col justify-end pb-16 px-6 md:px-16 overflow-hidden bg-[#E6E6E1]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2000"
            alt="Raw Concrete"
            className="w-full h-full object-cover opacity-30 mix-blend-multiply grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#E6E6E1] via-[#E6E6E1]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mb-16">
          <h1 className="hero-anim text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none mb-2">
            THE AGENTIC AGENCY
          </h1>
          <h1 className="hero-anim text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-none tracking-tighter mb-8 text-black">
            ENGINEERING &gt; PROMPTING
          </h1>
          <p className="hero-anim text-xl md:text-2xl text-black/80 max-w-3xl mb-12 font-medium leading-snug">
            We transform development teams from ad-hoc AI usage into structured, production-grade agentic engineering practitioners.
          </p>
          <div className="hero-anim flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <MagneticButton
              to="/the-spark"
              className="bg-black text-[#E6E6E1] px-8 py-5 text-lg font-bold flex items-center gap-2 hover:bg-black/90"
            >
              Start with The Spark <ArrowUpRight size={20} />
            </MagneticButton>
            <span className="font-mono text-sm font-bold uppercase tracking-widest text-black/50 border-l-2 border-black/20 pl-4 py-1">
              Workshops. Transformation.<br/>Advisory.
            </span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="font-mono text-xs uppercase tracking-widest text-black/50">Scroll</span>
          <div className="w-8 h-12 border-2 border-black/30 rounded-full flex items-start justify-center pt-2">
            <ChevronDown size={16} className="text-black/50" />
          </div>
        </div>
      </section>

      {/* B. THE GAP (Problem Statement) */}
      <section id="problem-section" className="relative py-32 md:py-48 px-6 md:px-16 bg-black text-[#E6E6E1] overflow-hidden rounded-xl mx-4 mt-12 mb-0 rounded-b-none">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356f27?q=80&w=2000"
            alt="Industrial Textures"
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="phil-word text-xl md:text-3xl text-[#E6E6E1]/80 mb-12 font-medium leading-relaxed">
            There's a gap between "AI helped me write this function" and<br className="hidden md:block" /> "AI systematically helped us deliver this feature."
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight uppercase">
            <span className="phil-word inline-block mr-2 md:mr-3">That</span>
            <span className="phil-word inline-block mr-2 md:mr-3">gap</span>
            <span className="phil-word inline-block mr-2 md:mr-3">has</span>
            <span className="phil-word inline-block mr-2 md:mr-3">a</span>
            <span className="phil-word inline-block">name:</span>
          </h2>
          <div className="mt-8 md:mt-12">
            <span className="phil-word inline-block text-4xl md:text-6xl lg:text-7xl font-bold uppercase text-[#E6E6E1] bg-white/15 px-6 py-3 border-2 border-white/30 rounded-xl">
              AGENTIC ENGINEERING.
            </span>
          </div>
        </div>
      </section>

      {/* B2. THE SOLUTION (Below Fold) - Clean Contrast */}
      <section id="subtext-section" className="relative py-32 md:py-48 px-6 md:px-16 overflow-hidden rounded-xl mx-4 mt-0 mb-12 rounded-t-none bg-[#E6E6E1]">
        {/* Subtle top gradient blend from black section above */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h3 className="subtext-reveal text-4xl md:text-6xl font-bold uppercase tracking-tight mb-8 text-black">
            We close that gap.
          </h3>

          <p className="subtext-reveal text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-16 text-black/70">
            Systematically.
          </p>

          {/* Three pillars */}
          <div className="subtext-reveal grid md:grid-cols-3 gap-6 mt-8 mb-12">
            <div className="pillar-item p-6 rounded-xl bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-4xl font-black text-black/20 mb-2">01</div>
              <div className="font-bold uppercase tracking-tight text-black">Workshops</div>
              <div className="text-sm text-black/60 mt-1">2-day intensives</div>
            </div>
            <div className="pillar-item p-6 rounded-xl bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-4xl font-black text-black/20 mb-2">02</div>
              <div className="font-bold uppercase tracking-tight text-black">Transformation</div>
              <div className="text-sm text-black/60 mt-1">12-week programs</div>
            </div>
            <div className="pillar-item p-6 rounded-xl bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-4xl font-black text-black/20 mb-2">03</div>
              <div className="font-bold uppercase tracking-tight text-black">Advisory</div>
              <div className="text-sm text-black/60 mt-1">Ongoing partnership</div>
            </div>
          </div>

          <div className="subtext-reveal mt-12">
            <MagneticButton
              to="/the-spark"
              className="bg-black text-[#E6E6E1] px-8 py-4 text-lg font-bold"
            >
              Start with The Spark <ArrowUpRight size={18} />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* C. PRODUCT LADDER */}
      <ProductLadderSection variant="full" />

      {/* D. WHY US */}
      <section id="why-us-section" className="py-32 px-6 md:px-16 bg-black text-[#E6E6E1] rounded-xl mx-4 my-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="why-us-content md:sticky md:top-32">
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8">
                Practitioners at the forefront.
              </h2>
              <p className="text-lg text-[#E6E6E1]/80 font-medium leading-relaxed mb-6">
                Agentic engineering is evolving rapidly. We invest heavily in staying current — continuously refining our methodology as tools and best practices advance.
              </p>
              <p className="text-lg text-[#E6E6E1]/80 font-medium leading-relaxed mb-10">
                We're not theorists. We build with these tools daily, encounter the edge cases, and know what actually works in production environments.
              </p>
              <MagneticButton
                to="/about"
                className="bg-[#E6E6E1] text-black px-8 py-4 text-lg font-bold"
              >
                Meet the team <ArrowUpRight size={18} />
              </MagneticButton>
            </div>
            <div className="why-us-content bg-[#111] rounded-xl p-10 md:p-12 border-4 border-white/30">
              <div className="space-y-10">
                <div>
                  <h4 className="font-bold text-xl uppercase tracking-tight mb-3">Methodology over tools.</h4>
                  <p className="text-[#E6E6E1]/80 font-medium leading-relaxed">Tools change every quarter. The discipline persists.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl uppercase tracking-tight mb-3">Practice over theory.</h4>
                  <p className="text-[#E6E6E1]/80 font-medium leading-relaxed">Hands-on from hour one. Real code, real results.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl uppercase tracking-tight mb-3">Results over credentials.</h4>
                  <p className="text-[#E6E6E1]/80 font-medium leading-relaxed">No certifications. Just measurable capability.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E. FINAL CTA */}
      <section className="pt-24 pb-32 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="cta-reveal text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8">
            Ready to start?
          </h2>
          <p className="cta-reveal text-xl text-black/70 font-medium mb-12 max-w-2xl mx-auto mt-6">
            Most teams begin with The Spark — a 2-day workshop that establishes the methodology. From there, you decide how deep to go.
          </p>
          <div className="cta-reveal flex flex-col sm:flex-row justify-center gap-6">
            <MagneticButton
              to="/the-spark"
              className="bg-black text-[#E6E6E1] px-10 py-5 text-lg font-bold"
            >
              Explore The Spark <ArrowUpRight size={20} />
            </MagneticButton>
            <MagneticButton
              to="/about"
              className="bg-white text-black px-10 py-5 text-lg font-bold border-2 border-black"
            >
              Learn about us
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
