import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Mail } from 'lucide-react';
import { MagneticButton } from '../components/common';
import { PageMeta, OrganizationSchema, FounderSchema, BreadcrumbSchema } from '../components/seo';
import { useInquiry } from '../context/InquiryContext';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const pageRef = useRef(null);
  const { openInquiry } = useInquiry();

  const team = [
    {
      initials: "DHK",
      name: "Daniel H. Kristensen",
      title: "Founder",
      pedigree: "STARK Group · TDC · Telenor · Adecco · INSEAD",
      bio: "Daniel is a transformation leader who has guided engineering teams through billion-kroner technology programmes at STARK Group, TDC, Telenor, and Adecco. He specialises in aligning leadership, rebuilding momentum in complex programmes, and ensuring technology investments deliver real business impact.",
      credentials: [
        "Led enterprise transformations across 200+ person programmes",
        "Background in M&A (Deloitte) and startup founding (ChefsClub, exited)",
        "INSEAD Entrepreneurship Bootcamp · CBS MSc Applied"
      ],
      quote: "The gap is no longer generating code. The gap is integrating autonomous agents into complex enterprise architecture — securely, reliably, and profitably. That is what we solve."
    },
    {
      initials: "MvK",
      name: "Mandy van Kesteren",
      title: "Delivery",
      pedigree: "Group SVP Digital Channels, The Adecco Group · IMD",
      bio: "Mandy is a seasoned executive with a strong background in digital transformation, marketing, and IT. At The Adecco Group she led the global transformation of digital channels — including web, app, chatbot, and AI agents — enhancing candidate and client experiences across 60+ countries.",
      credentials: [
        "Group SVP of Digital Channels and Web Services, The Adecco Group",
        "Group SVP of Marketing Operations and Transformation",
        "IT Leadership, IMD · BASc IT Project Management, Fontys University"
      ],
      quote: "The enterprises that win the next decade will be those that integrate agentic systems into their core operations today — not as experiments, but as production infrastructure."
    },
    {
      initials: "RC",
      name: "Roger Carvalho",
      title: "Delivery",
      pedigree: "Chair of Technical Design Authority, The Adecco Group · MSF Netherlands",
      bio: "Roger is a senior infrastructure and cloud architect with over 15 years of experience. At The Adecco Group he served as Chair of the Technical Design Authority, governing cloud architecture for 50+ global websites across all Adecco brands. He now serves as Senior Infrastructure Advisor at Artsen zonder Grenzen Nederland (MSF), managing mission-critical systems for field operations.",
      credentials: [
        "Microsoft Certified: Cybersecurity Architect Expert · Azure Security Engineer",
        "VMware Certified Professional (VCP6 & VCP5): Data Center Virtualization",
        "Certified Master IT Specialist (The Open Group)"
      ],
      quote: "Agentic systems are only as reliable as the infrastructure they run on. Getting that layer right is what separates a proof of concept from a production system."
    },
    {
      initials: "CF",
      name: "Christoph Frei",
      title: "Delivery",
      pedigree: "Interim CTO/CIO · DCSO · Twill by Maersk · Berlin",
      bio: "Christoph is a Berlin-based independent technology executive operating through Frei IT Services & Consulting UG. He brings a career spanning senior engineering leadership, interim CTO/CIO mandates, and security architecture across European technology companies — including Head of Security Engineering at DCSO Deutsche Cyber-Sicherheitsorganisation and Interim CTO at Twill by Maersk.",
      credentials: [
        "Head of Security Engineering at DCSO, Germany's premier public-private cybersecurity organisation",
        "Interim CTO at Twill by Maersk (Maersk's digital freight platform)",
        "Diplom in Informatik, Karlsruhe Institute of Technology (KIT)"
      ],
      quote: "Security in agentic systems is not a feature you add at the end. It is an architectural decision you make at the beginning."
    },
    {
      initials: "SLA",
      name: "Steffen Lund Andersen",
      title: "Delivery",
      pedigree: "Head of Engineering & Chief Architect, Qampo · Aarhus University",
      bio: "Steffen is an experienced IT consultant and technical leader with a background in secure software development. He currently serves as Head of Engineering & Chief Architect at Qampo, a decision science company, where he leads the engineering organisation and defines the technical architecture for AI-driven decision systems.",
      credentials: [
        "Head of Engineering & Chief Architect at Qampo (decision science)",
        "CSSLP (Certified Secure Software Lifecycle Professional)",
        "BSc Computer Science, Aarhus University"
      ],
      quote: "The difference between a demo and a production system is the engineering discipline behind it. That discipline is what we bring."
    }
  ];

  const advisors = [
    {
      domain: "Data Science & ML",
      name: "Prayson Wilfred Daniel",
      pedigree: "Principal Data Scientist, Norlys · Team _42",
      bio: "Production-grade data science and autonomous systems. Speaker at GOTO Copenhagen and GOTO Aarhus. MSc Information Technology & Persuasive Design, Aalborg University."
    },
    {
      domain: "Applied Analytics",
      name: "Simon Eiriksson",
      pedigree: "Eiriksson Consulting · Technical University of Denmark",
      bio: "End-to-end analytics and shipped ML systems. MSc Mathematical Modelling & Computation, DTU. Specialist in probabilistic ML, Bayesian inference, and generative modelling."
    },
    {
      domain: "Developer Experience",
      name: "Kræn Hansen",
      pedigree: "Developer Experience Engineer, ElevenLabs · MongoDB",
      bio: "Developer tooling and infrastructure for AI-native products. Contributed to Realm JS at MongoDB and the Node.js Conformance Test Suite. MSc Computer Science, DTU."
    },
    {
      domain: "Security & Trust Architecture",
      name: "Thomas J. Frivold",
      pedigree: "Cyber Security Program Manager, Aker BP · WEF contributor",
      bio: "Cybersecurity, risk evaluation, and zero-trust architecture. Contributed to a World Economic Forum paper on zero-trust models. Cand.Merc International Studies, Copenhagen Business School."
    },
    {
      domain: "Infrastructure & Programme Management",
      name: "Nana Lin",
      pedigree: "Director, The LEGO Group · IMD · INSEAD",
      bio: "Enterprise-scale platform infrastructure and engineering leadership. Director at The LEGO Group since 2021, responsible for platform architecture and the LEGO Play App (7M+ users). IMD executive programme, INSEAD."
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
      {team.map((member) => (
        <FounderSchema
          key={member.name}
          name={member.name}
          jobTitle={member.title}
          description={member.bio}
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

          <div className="grid lg:grid-cols-2 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="founder-card bg-[#111] rounded-xl border border-white/10 overflow-hidden group hover:border-white/20 transition-colors"
              >
                <div className="p-8">
                  <div className="font-mono text-xs uppercase tracking-wider text-[#E6E6E1]/35 mb-2">{member.title}</div>
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-1">{member.name}</h3>
                  <p className="text-sm text-green-500 tracking-wide mb-4">{member.pedigree}</p>
                  <p className="text-[#E6E6E1]/60 font-medium text-sm mb-6 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Credentials */}
                  <ul className="space-y-2 mb-6">
                    {member.credentials.map((cred, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#E6E6E1]/50 font-medium">
                        <span className="text-[#E6E6E1]/30">•</span>
                        {cred}
                      </li>
                    ))}
                  </ul>

                  {/* Quote */}
                  {member.quote && (
                    <div className="border-t border-white/10 pt-5">
                      <p className="text-sm italic text-[#E6E6E1]/40">
                        "{member.quote}"
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

      {/* F. FOUNDED IN DENMARK */}
      <section className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
                Founded in Denmark,<br/>based in Europe.
              </h2>
              <p className="text-lg text-[#E6E6E1]/70 font-medium mb-6 leading-relaxed">
                We are a Danish company building agentic systems for enterprises across the Nordics and Europe. Close enough for face-to-face when it matters. Remote-first for everything else.
              </p>
              <p className="text-lg text-[#E6E6E1]/70 font-medium leading-relaxed">
                Our team spans Copenhagen, Aarhus, Berlin, Amsterdam, and Zurich.
              </p>
            </div>
            <div className="bg-[#111] rounded-xl p-8 border border-white/10">
              <div className="font-mono text-xs uppercase tracking-wider text-[#E6E6E1]/35 mb-2">Headquarters</div>
              <p className="text-2xl font-bold mb-4">Copenhagen, Denmark</p>
              <div className="font-mono text-xs uppercase tracking-wider text-[#E6E6E1]/35 mb-2">Coverage</div>
              <p className="text-xl font-bold mb-4">Nordics & Europe</p>
              <p className="text-[#E6E6E1]/45 text-sm font-medium">Accepting enterprise engagements for Q2 2026.</p>
            </div>
          </div>
        </div>
      </section>

      {/* G. ADVISORY BOARD */}
      <section className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">Advisory Board</h2>
          <p className="text-xl text-black/60 font-medium mb-12 max-w-2xl">
            Deep specialist expertise in data science, infrastructure, security, and developer experience — drawn from some of Europe's most demanding technology organisations.
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {advisors.map((advisor) => (
              <div key={advisor.name} className="bg-white border border-black/10 p-6 hover:bg-black/5 transition-colors">
                <div className="font-mono text-[10px] uppercase tracking-wider text-black/35 mb-2">{advisor.domain}</div>
                <h3 className="text-base font-bold mb-1">{advisor.name}</h3>
                <p className="text-xs text-black/50 mb-3">{advisor.pedigree}</p>
                <p className="text-xs text-black/55 leading-relaxed">{advisor.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* H. GET IN TOUCH */}
      <section className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-xl p-12 md:p-16 border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">Get in Touch</h2>
            <p className="text-xl text-black/70 font-medium mb-8">
              Ready to explore how agentic engineering could transform your team?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <MagneticButton
                onClick={() => openInquiry('general', 'Book a conversation')}
                className="bg-black text-[#E6E6E1] px-10 py-5 text-lg font-bold"
              >
                Book a conversation <ArrowUpRight size={20} />
              </MagneticButton>
              <MagneticButton
                onClick={() => openInquiry('general', 'Get in touch')}
                className="bg-white text-black px-10 py-5 text-lg font-bold border-2 border-black"
              >
                <Mail size={20} /> Get in touch
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
