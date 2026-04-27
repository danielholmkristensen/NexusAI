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
        description="AI Development as a Service. Enterprise software built by AI, overseen by engineers. Meet the team."
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
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }}></div>

        <div className="relative z-10 max-w-5xl">
          <h1 className="hero-anim text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-none tracking-tighter mb-4 text-black">
            ABOUT US
          </h1>
          <p className="hero-anim text-xl md:text-2xl text-black/80 max-w-3xl font-medium leading-snug">
            We build enterprise software. AI does the heavy lifting. Engineers ensure it's done&nbsp;right.
          </p>
        </div>
      </section>

      {/* B. WHAT WE DO */}
      <section className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1] rounded-xl mx-4 my-12">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-[#E6E6E1]/70 font-medium mb-8">
            AI can generate code.<br/>
            But generating code is not the same as engineering software.
          </p>
          <p className="text-lg text-[#E6E6E1]/50 font-medium mb-8">
            Most people just want results — fast results — when they invest themselves.
          </p>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8">
            We do both.
          </h2>
          <p className="text-lg text-[#E6E6E1]/70 font-medium max-w-3xl mx-auto">
            We do our best to unify all of that, and make it happen through technology.
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
                Tools change every quarter. The discipline of engineering systematically with AI persists. Our process outlasts any single product.
              </p>
            </div>
            <div className="value-item bg-white rounded-xl p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Delivery over theory.</h3>
              <p className="text-black/70 font-medium">
                We ship production code, not slide decks. Real software. Real test coverage. Real documentation as a byproduct.
              </p>
            </div>
            <div className="value-item bg-white rounded-xl p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Results over credentials.</h3>
              <p className="text-black/70 font-medium">
                We don't sell certifications. We deliver working software. The work speaks for&nbsp;itself.
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
            Enterprise transformation experience, AI product leadership, and technical depth. We build software for companies who need it done right.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="founder-card bg-[#111] rounded-xl border-4 border-white/20 overflow-hidden group hover:border-white/40 transition-colors"
              >
                {/* Content */}
                <div className="p-8">
                  {/* Initials badge */}
                  <div className="inline-block bg-white/10 px-3 py-1.5 rounded mb-4">
                    <span className="font-mono text-sm font-bold tracking-wider text-[#E6E6E1]">{member.initials}</span>
                  </div>

                  <div className="font-mono text-xs uppercase tracking-wider text-[#E6E6E1]/50 mb-2">{member.title}</div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">{member.name}</h3>
                  <p className="text-sm text-[#E6E6E1]/60 font-medium mb-4">{member.pedigree}</p>
                  <p className="text-[#E6E6E1]/70 font-medium text-sm mb-6 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Credentials */}
                  <ul className="space-y-2 mb-6">
                    {member.credentials.map((cred, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#E6E6E1]/50 font-medium">
                        <div className="w-1 h-1 rounded-full bg-[#E6E6E1]/30 mt-1.5 flex-shrink-0"></div>
                        {cred}
                      </li>
                    ))}
                  </ul>

                  {/* Quote */}
                  {member.quote && (
                    <div className="border-t border-white/10 pt-6">
                      <p className="text-sm italic text-[#E6E6E1]/60">
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
              You get that experience applied directly to your software.
            </p>
          </div>
        </div>
      </section>

      {/* F. ADVISORY BOARD */}
      <section className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">Advisory Board</h2>
          <p className="text-xl text-black/70 font-medium mb-16 max-w-2xl">
            Domain experts who extend our reach into specialised areas — from ML infrastructure to security architecture.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisors.map((advisor) => (
              <div
                key={advisor.name}
                className="bg-white rounded-xl p-6 border-2 border-black/10 hover:border-black/30 transition-colors"
              >
                <div className="font-mono text-xs uppercase tracking-wider text-black/40 mb-3">{advisor.domain}</div>
                <h3 className="text-xl font-bold tracking-tight mb-1">{advisor.name}</h3>
                <p className="text-sm text-black/60 font-medium mb-3">{advisor.pedigree}</p>
                <p className="text-sm text-black/70 leading-relaxed">{advisor.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* G. FOUNDED IN DENMARK */}
      <section className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
                Founded in Denmark, Based in Europe
              </h2>
              <p className="text-lg text-[#E6E6E1]/70 font-medium mb-6 leading-relaxed">
                We're a Danish company with a distributed team building software for enterprises across Europe.
              </p>
              <p className="text-lg text-[#E6E6E1]/70 font-medium leading-relaxed">
                Close enough for face-to-face when it matters. Remote-first for everything else.
              </p>
            </div>
            <div className="bg-[#111] rounded-xl p-8 border-4 border-white/20">
              <div className="font-mono text-xs uppercase tracking-wider text-[#E6E6E1]/50 mb-4">Locations</div>
              <p className="text-2xl font-bold mb-2">Copenhagen · Amsterdam · Zurich · Berlin · Aarhus</p>
              <p className="text-[#E6E6E1]/60 font-medium">Building for enterprises across Europe</p>
            </div>
          </div>
        </div>
      </section>

      {/* H. GET IN TOUCH */}
      <section className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-xl p-12 md:p-16 border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">Get in Touch</h2>
            <p className="text-xl text-black/70 font-medium mb-8">
              Have a project in mind? Let's talk about what you need built.
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
