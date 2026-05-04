import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ArrowRight, Play } from 'lucide-react';
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
      bio: "Daniel led enterprise transformations across 200+ person programmes at STARK, TDC, Telenor, and Adecco. He saw the same pattern everywhere: AI that demos well but doesn't ship. So he stopped consulting and started building the Agentic OS.",
      credentials: [
        "Led billion-kroner technology programmes",
        "M&A background (Deloitte) · Startup founder (ChefsClub, exited)",
        "INSEAD Entrepreneurship Bootcamp · CBS MSc Applied"
      ],
      quote: "The gap is no longer generating code. The gap is integrating autonomous agents into enterprise architecture — securely, reliably, profitably."
    },
    {
      initials: "MvK",
      name: "Mandy van Kesteren",
      title: "Delivery",
      pedigree: "Rabobank · Philips · The Adecco Group",
      bio: "Mandy transforms complex, stuck operations into scalable, future-ready systems. At Rabobank, Philips, and Adecco, she led digital transformations that actually shipped. She brings that same bias for action to the Agentic OS.",
      credentials: [
        "Executive leader in digital transformation",
        "Senior leadership at Rabobank, Philips, The Adecco Group",
        "Known for getting things done"
      ],
      quote: "I pick up what others don't dare to touch. I take the challenge and give others the confidence to do what they never thought possible."
    },
    {
      initials: "RC",
      name: "Roger Carvalho",
      title: "Delivery",
      pedigree: "Chair of Technical Design Authority, The Adecco Group · MSF Netherlands",
      bio: "Roger governed cloud architecture for 50+ global websites across Adecco brands. Now at MSF, he manages mission-critical systems for field operations. He ensures the Agentic OS runs on infrastructure that doesn't fail.",
      credentials: [
        "Microsoft Certified: Cybersecurity Architect Expert",
        "VMware Certified Professional (VCP6 & VCP5)",
        "Certified Master IT Specialist (The Open Group)"
      ],
      quote: "Agentic systems are only as reliable as the infrastructure they run on. Getting that layer right separates demos from production."
    },
    {
      initials: "CF",
      name: "Christoph Frei",
      title: "Delivery",
      pedigree: "Interim CTO/CIO · DCSO · Twill by Maersk · Berlin",
      bio: "Christoph was Head of Security Engineering at DCSO (Germany's premier cybersecurity org) and Interim CTO at Twill by Maersk. He ensures the Agentic OS meets enterprise security requirements from day one.",
      credentials: [
        "Head of Security Engineering at DCSO",
        "Interim CTO at Twill by Maersk",
        "Diplom Informatik, Karlsruhe Institute of Technology"
      ],
      quote: "Security in agentic systems is not a feature you add at the end. It's an architectural decision you make at the beginning."
    },
    {
      initials: "SLA",
      name: "Steffen Lund Andersen",
      title: "Delivery",
      pedigree: "Head of Engineering & Chief Architect, Qampo · Aarhus University",
      bio: "Steffen leads engineering at Qampo, building AI-driven decision systems. He's CSSLP certified and brings the discipline that separates demos from production systems.",
      credentials: [
        "Head of Engineering & Chief Architect at Qampo",
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
      bio: "Production-grade data science. Speaker at GOTO Copenhagen and Aarhus. MSc Information Technology, Aalborg University."
    },
    {
      domain: "Applied Analytics",
      name: "Simon Eiriksson",
      pedigree: "Eiriksson Consulting · Technical University of Denmark",
      bio: "End-to-end analytics and shipped ML systems. Specialist in probabilistic ML and Bayesian inference. MSc Mathematical Modelling, DTU."
    },
    {
      domain: "Developer Experience",
      name: "Kræn Hansen",
      pedigree: "Developer Experience Engineer, ElevenLabs · MongoDB",
      bio: "Developer tooling for AI-native products. Contributed to Realm JS at MongoDB. MSc Computer Science, DTU."
    },
    {
      domain: "Security & Trust",
      name: "Thomas J. Frivold",
      pedigree: "Cyber Security Program Manager, Aker BP · WEF contributor",
      bio: "Cybersecurity and zero-trust architecture. Contributed to a World Economic Forum paper. CBS Cand.Merc."
    },
    {
      domain: "Platform Infrastructure",
      name: "Nana Lin",
      pedigree: "Director, The LEGO Group · IMD · INSEAD",
      bio: "Platform architecture at LEGO. Responsible for the LEGO Play App (7M+ users). IMD & INSEAD executive programmes."
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.hero-anim',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.08, ease: 'power3.out', delay: 0.2 }
      );

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
        title="About — Agentic Agency | The Agentic OS Pioneers"
        description="Operators building the operating system for AI-native enterprises — where agents author and humans edit."
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

      {/* A. HERO — THE ORIGIN STORY */}
      <section className="relative min-h-[70vh] w-full flex items-end pb-24 px-6 md:px-16 overflow-hidden bg-[#E6E6E1]">
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }}></div>

        <div className="relative z-10 max-w-5xl">
          <div className="hero-anim font-mono text-sm text-black/40 tracking-widest mb-4">{'>>'} OUR STORY</div>
          <h1 className="hero-anim text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.95] tracking-tight mb-6 text-black">
            Operators.
          </h1>
          <p className="hero-anim text-xl md:text-2xl text-black/70 max-w-3xl leading-snug">
            We spent years inside enterprise transformations. We saw AI that demos well but doesn't ship. So we stopped advising and started building the <strong className="text-black">Agentic OS</strong>.
          </p>
        </div>
      </section>

      {/* B. THE PROBLEM WE SAW */}
      <section className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xl md:text-2xl text-[#E6E6E1]/70 font-medium mb-8 leading-relaxed">
                AI can generate code.<br/>
                But generating code is not engineering software.
              </p>
              <p className="text-lg text-[#E6E6E1]/50 font-medium mb-8">
                We saw it in every programme. Tools that promise autonomy but require constant nursing. Agents that build fast but drift from scope. Demos that impress but don't ship.
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">
                So we built the bridge.
              </h2>
              <p className="text-lg text-[#E6E6E1]/70 font-medium">
                The <strong className="text-white">Agentic OS</strong> — where agents author and humans edit. Where your Product Owner reviews screens while your CFO tracks ROI. Where the agent does the heavy lifting, in service of human decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* C. OUR PRINCIPLES */}
      <section id="values-section" className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">Built into the Agentic OS.</h2>
            <p className="text-xl text-black/60 max-w-2xl mx-auto">
              Three principles that separate demos from production systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="value-item bg-white rounded-xl p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="font-mono text-sm text-black/30 mb-4">01</div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Agents author. Humans edit.</h3>
              <p className="text-black/70">
                The agent does the heavy lifting — drafting, analyzing, proposing. The human decides — approving, adjusting, redirecting. Three taps, not three meetings.
              </p>
            </div>
            <div className="value-item bg-white rounded-xl p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="font-mono text-sm text-black/30 mb-4">02</div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Structure beats prompting.</h3>
              <p className="text-black/70">
                Tools change every quarter. The Agentic OS encodes methodology into software. Your team inherits discipline, not documents.
              </p>
            </div>
            <div className="value-item bg-white rounded-xl p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="font-mono text-sm text-black/30 mb-4">03</div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Production or it doesn't count.</h3>
              <p className="text-black/70">
                The Agentic OS ships real software — tested, documented, deployed. Not slide decks. Not prototypes. The output speaks for itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* D. THE TEAM */}
      <section id="team-section" className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">The pioneers.</h2>
            <p className="text-xl text-[#E6E6E1]/60 max-w-2xl mx-auto">
              Enterprise transformation veterans who got tired of demos that don't ship. Now we're building the Agentic OS.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="founder-card bg-[#111] rounded-xl border-2 border-white/10 overflow-hidden group hover:border-white/30 transition-colors"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
                      <span className="font-mono text-sm font-bold tracking-wider text-[#E6E6E1]">{member.initials}</span>
                    </div>
                    <div>
                      <div className="font-mono text-xs uppercase tracking-wider text-[#E6E6E1]/50">{member.title}</div>
                      <h3 className="text-xl font-bold uppercase tracking-tight">{member.name}</h3>
                    </div>
                  </div>

                  <p className="text-sm text-[#E6E6E1]/60 font-medium mb-4">{member.pedigree}</p>
                  <p className="text-[#E6E6E1]/70 text-sm mb-6 leading-relaxed">{member.bio}</p>

                  <ul className="space-y-2 mb-6">
                    {member.credentials.map((cred, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#E6E6E1]/50 font-medium">
                        <div className="w-1 h-1 rounded-full bg-[#E6E6E1]/30 mt-1.5 flex-shrink-0"></div>
                        {cred}
                      </li>
                    ))}
                  </ul>

                  {member.quote && (
                    <div className="border-t border-white/10 pt-6">
                      <p className="text-sm italic text-[#E6E6E1]/60">"{member.quote}"</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E. ADVISORY BOARD */}
      <section className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">Our Advisory Board.</h2>
            <p className="text-xl text-black/60 max-w-2xl mx-auto">
              Domain experts who extend our reach into ML, security, and platform infrastructure.
            </p>
          </div>

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

      {/* F. LOCATIONS */}
      <section className="py-24 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
                Founded in Denmark.<br/>Building for Europe.
              </h2>
              <p className="text-lg text-[#E6E6E1]/70 font-medium leading-relaxed">
                Close enough for face-to-face when it matters. Remote-first for everything else. Building the Agentic OS for enterprises who want to win their category in 2026.
              </p>
            </div>
            <div className="bg-[#111] rounded-xl p-8 border-2 border-white/10">
              <div className="font-mono text-xs uppercase tracking-wider text-[#E6E6E1]/50 mb-4">Team locations</div>
              <p className="text-2xl font-bold mb-2">Copenhagen · Amsterdam · Zurich · Berlin · Aarhus</p>
              <p className="text-[#E6E6E1]/60 font-medium">Building for enterprises across Europe</p>
            </div>
          </div>
        </div>
      </section>

      {/* G. CTA */}
      <section className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-xl p-12 md:p-16 border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">Join the pioneers.</h2>
            <p className="text-xl text-black/70 font-medium mb-8">
              We're looking for design partners who want to shape what agentic delivery looks like. Let's build the Agentic OS together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <MagneticButton
                onClick={() => openInquiry('general', 'Book a conversation')}
                className="bg-black text-[#E6E6E1] px-10 py-5 text-lg font-bold flex items-center gap-3"
              >
                <Play size={18} /> See the demo
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
