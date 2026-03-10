import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Mail } from 'lucide-react';
import { MagneticButton } from '../components/common';
import { PageMeta, OrganizationSchema, FounderSchema, BreadcrumbSchema } from '../components/seo';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const pageRef = useRef(null);

  const founders = [
    {
      initials: "DHK",
      name: "Daniel Holm Kristensen",
      title: "Co-Founder",
      bio: "Daniel is a transformation leader who has guided engineering teams through billion-kroner technology programs at STARK Group, TDC, Telenor, and Adecco. He specializes in aligning leadership, rebuilding momentum in complex programs, and ensuring technology investments deliver real impact.",
      credentials: [
        "Led enterprise transformations across 200+ person programs",
        "Background in M&A (Deloitte) and startup founding (ChefsClub, exited)"
      ],
      quote: "There's a gap between using AI tools and engineering with them systematically. We help teams close that gap."
    },
    {
      initials: "ME",
      name: "Morten Elk",
      title: "Co-Founder",
      bio: "Morten combines scientific rigor with entrepreneurial execution. With a PhD in Physics and decades of building technology businesses, he brings analytical depth to understanding what actually works in engineering practice.",
      credentials: [
        "PhD Physics, University of Copenhagen",
        "CEO of SimpleSite; Founder of Nordic Growth Hackers",
        "Entrepreneur and investor in Copenhagen's technology ecosystem"
      ],
      quote: "The best engineering practices are discovered through rigorous observation, not invented through theory. We measure what works."
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo('.hero-anim',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.08, ease: 'power3.out', delay: 0.2 }
      );

      // Founder cards
      gsap.fromTo('.founder-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#team-section',
            start: 'top 70%'
          }
        }
      );

      // Values reveal
      gsap.fromTo('.value-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#values-section',
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
        title="About — Agentic Agency"
        description="Practitioners at the forefront of agentic engineering. Meet the team behind hands-on workshops and transformation programs."
        path="/about"
      />
      <OrganizationSchema />
      {founders.map((founder) => (
        <FounderSchema
          key={founder.name}
          name={founder.name}
          jobTitle={founder.title}
          description={founder.bio}
        />
      ))}
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' }
      ]} />

      {/* A. HERO SECTION */}
      <section className="relative h-[70dvh] w-full flex items-end pb-24 px-6 md:px-16 overflow-hidden bg-[#E6E6E1]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000"
            alt="Workshop Tools"
            className="w-full h-full object-cover opacity-20 mix-blend-multiply grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#E6E6E1] via-[#E6E6E1]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl">
          <h1 className="hero-anim text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-none tracking-tighter mb-4 text-black">
            ABOUT US
          </h1>
          <p className="hero-anim text-xl md:text-2xl text-black/80 max-w-3xl font-medium leading-snug">
            We help engineering teams master agentic AI — systematically.
          </p>
        </div>
      </section>

      {/* B. WHAT WE DO */}
      <section className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1] rounded-xl mx-4 my-12">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-[#E6E6E1]/70 font-medium mb-8">
            Most teams use AI to write code faster.<br/>
            Few have a methodology to engineer with it.
          </p>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8">
            We close that gap.
          </h2>
          <p className="text-lg text-[#E6E6E1]/70 font-medium max-w-3xl mx-auto">
            Through hands-on workshops, embedded programs, and advisory partnerships, we transform how engineering teams work with AI — from ad-hoc prompting to production-grade agentic engineering.
          </p>
        </div>
      </section>

      {/* C. OUR APPROACH / VALUES */}
      <section id="values-section" className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">We Believe In</h2>
          <p className="text-xl text-black/70 font-medium mb-16 max-w-2xl">
            Our approach is built on three principles that guide everything we do.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="value-item bg-white rounded-xl p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Methodology over tools.</h3>
              <p className="text-black/70 font-medium">
                Tools change every quarter. The discipline of working systematically with AI agents persists. We teach frameworks that outlast any single product.
              </p>
            </div>
            <div className="value-item bg-white rounded-xl p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Practice over theory.</h3>
              <p className="text-black/70 font-medium">
                Our programs are hands-on from hour one. Real code. Real challenges. Real results you can measure on Monday morning.
              </p>
            </div>
            <div className="value-item bg-white rounded-xl p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Results over credentials.</h3>
              <p className="text-black/70 font-medium">
                We don't sell certifications. We help teams ship faster, with fewer defects, and with documentation as a byproduct. The work speaks for itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* D. THE TEAM */}
      <section id="team-section" className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">The Team</h2>
          <p className="text-xl text-[#E6E6E1]/70 font-medium mb-16 max-w-2xl">
            Enterprise transformation experience, AI product leadership, and technical depth. From hands-on workshops to strategic advisory, we meet you where you are.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="founder-card bg-[#111] rounded-xl border-4 border-white/20 overflow-hidden group hover:border-white/40 transition-colors"
              >
                {/* Initials Avatar */}
                <div className="h-48 bg-[#E6E6E1] flex items-center justify-center">
                  <span className="text-6xl font-black text-black/20 tracking-tighter">
                    {founder.initials}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="font-mono text-xs uppercase tracking-wider text-[#E6E6E1]/50 mb-2">{founder.title}</div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{founder.name}</h3>
                  <p className="text-[#E6E6E1]/70 font-medium text-sm mb-6 leading-relaxed">
                    {founder.bio}
                  </p>

                  {/* Credentials */}
                  <ul className="space-y-2 mb-6">
                    {founder.credentials.map((cred, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#E6E6E1]/50 font-medium">
                        <div className="w-1 h-1 rounded-full bg-[#E6E6E1]/30 mt-1.5 flex-shrink-0"></div>
                        {cred}
                      </li>
                    ))}
                  </ul>

                  {/* Quote */}
                  {founder.quote && (
                    <div className="border-t border-white/10 pt-6">
                      <p className="text-sm italic text-[#E6E6E1]/60">
                        "{founder.quote}"
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E. WHY WORK WITH US */}
      <section className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-12 md:p-16 border-4 border-black">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-6">
              Practitioners at the Forefront
            </h2>
            <p className="text-lg text-black/70 font-medium mb-6 leading-relaxed">
              Agentic engineering is evolving rapidly. We invest heavily in staying current — continuously refining our methodology as tools and best practices advance.
            </p>
            <p className="text-lg text-black/70 font-medium mb-6 leading-relaxed">
              We're not theorists. We build with these tools daily, encounter the edge cases, and know what actually works in production environments.
            </p>
            <p className="text-xl text-black font-bold">
              You get that experience transferred directly to your team.
            </p>
          </div>
        </div>
      </section>

      {/* F. BASED IN DENMARK */}
      <section className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
                Based in Denmark
              </h2>
              <p className="text-lg text-[#E6E6E1]/70 font-medium mb-6 leading-relaxed">
                We're a Danish company serving engineering teams across the Nordics and beyond.
              </p>
              <p className="text-lg text-[#E6E6E1]/70 font-medium leading-relaxed">
                Our workshops run in-person. Our transformation programs include on-site days. When we say hands-on, we mean it.
              </p>
            </div>
            <div className="bg-[#111] rounded-xl p-8 border-4 border-white/20">
              <div className="font-mono text-xs uppercase tracking-wider text-[#E6E6E1]/50 mb-4">Location</div>
              <p className="text-2xl font-bold mb-2">Copenhagen, Denmark</p>
              <p className="text-[#E6E6E1]/60 font-medium">Serving teams across the Nordics and Europe</p>
            </div>
          </div>
        </div>
      </section>

      {/* G. GET IN TOUCH */}
      <section className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-xl p-12 md:p-16 border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">Get in Touch</h2>
            <p className="text-xl text-black/70 font-medium mb-8">
              Ready to explore how agentic engineering could transform your team?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <MagneticButton
                href="mailto:about@agenticagency.dev?subject=Let's%20Talk"
                className="bg-black text-[#E6E6E1] px-10 py-5 text-lg font-bold"
              >
                Book a conversation <ArrowUpRight size={20} />
              </MagneticButton>
              <MagneticButton
                href="mailto:about@agenticagency.dev"
                className="bg-white text-black px-10 py-5 text-lg font-bold border-2 border-black"
              >
                <Mail size={20} /> about@agenticagency.dev
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
