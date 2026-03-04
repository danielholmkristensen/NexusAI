import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
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

      // Philosophy word reveal
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
              Explore our programs <ArrowUpRight size={20} />
            </MagneticButton>
            <span className="font-mono text-sm font-bold uppercase tracking-widest text-black/50 border-l-2 border-black/20 pl-4 py-1">
              Workshops. Transformation.<br/>Advisory.
            </span>
          </div>
        </div>
      </section>

      {/* B. THE GAP (Problem/Solution) */}
      <section id="problem-section" className="relative py-48 px-6 md:px-16 bg-black text-[#E6E6E1] overflow-hidden rounded-xl mx-4 my-12">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356f27?q=80&w=2000"
            alt="Industrial Textures"
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="phil-word text-xl md:text-3xl text-[#E6E6E1]/80 mb-8 font-medium">
            There's a gap between "AI helped me write this function" and "AI systematically helped us deliver this feature."
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight uppercase">
            <span className="phil-word inline-block mr-3">That</span>
            <span className="phil-word inline-block mr-3">gap</span>
            <span className="phil-word inline-block mr-3">has</span>
            <span className="phil-word inline-block mr-3">a</span>
            <span className="phil-word inline-block mr-3">name:</span><br />
            <span className="phil-word inline-block text-[#E6E6E1] bg-white/15 px-4 mt-4 border border-white/30 rounded-xl">AGENTIC ENGINEERING.</span>
          </h2>
          <p className="mt-12 text-lg text-[#E6E6E1]/80 max-w-3xl mx-auto font-medium phil-word">
            We close that gap — systematically. Through hands-on workshops, embedded programs, and advisory partnerships.
          </p>
        </div>
      </section>

      {/* C. PRODUCT LADDER */}
      <ProductLadderSection variant="full" />

      {/* D. WHY US */}
      <section className="py-32 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="md:sticky md:top-32">
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
            <div className="bg-[#111] rounded-xl p-10 md:p-12 border-4 border-white/30">
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
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8">
            Ready to start?
          </h2>
          <p className="text-xl text-black/70 font-medium mb-12 max-w-2xl mx-auto mt-6">
            Most teams begin with The Spark — a 2-day workshop that establishes the methodology. From there, you decide how deep to go.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
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
