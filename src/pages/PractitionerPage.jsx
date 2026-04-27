import React, { useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowLeft, ArrowUpRight, Linkedin, Play } from 'lucide-react';
import { PageMeta, BreadcrumbSchema } from '../components/seo';
import { getPractitionerBySlug, practitioners } from '../data/practitioners';

const PractitionerPage = () => {
  const { slug } = useParams();
  const pageRef = useRef(null);
  const practitioner = getPractitionerBySlug(slug);

  useEffect(() => {
    if (!practitioner) return;

    let ctx = gsap.context(() => {
      gsap.fromTo('.fade-in',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
      );
    }, pageRef);

    return () => ctx.revert();
  }, [practitioner]);

  if (!practitioner) {
    return <Navigate to="/practitioners" replace />;
  }

  // Find adjacent practitioners for navigation
  const currentIndex = practitioners.findIndex(p => p.slug === slug);
  const prevPractitioner = currentIndex > 0 ? practitioners[currentIndex - 1] : null;
  const nextPractitioner = currentIndex < practitioners.length - 1 ? practitioners[currentIndex + 1] : null;

  return (
    <div ref={pageRef}>
      <PageMeta
        title={`${practitioner.name} — The Practitioners | Agentic Agency`}
        description={practitioner.interviewTeaser}
        path={`/practitioners/${practitioner.slug}`}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Practitioners', path: '/practitioners' },
        { name: practitioner.name, path: `/practitioners/${practitioner.slug}` }
      ]} />

      {/* HERO */}
      <section className="relative min-h-[60dvh] w-full flex items-end pb-16 px-6 md:px-16 overflow-hidden bg-black text-[#E6E6E1]">
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }}></div>

        <div className="relative z-10 max-w-5xl w-full">
          {/* Back link */}
          <Link
            to="/practitioners"
            className="fade-in inline-flex items-center gap-2 text-[#E6E6E1]/60 hover:text-[#E6E6E1] font-medium mb-8 transition-colors"
          >
            <ArrowLeft size={18} />
            All Practitioners
          </Link>

          <div className="fade-in font-mono text-xs uppercase tracking-widest text-[#E6E6E1]/50 mb-4">
            Episode {String(practitioner.episode).padStart(2, '0')} · The Practitioners Series
          </div>

          <h1 className="fade-in text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-none tracking-tighter mb-4">
            {practitioner.name}
          </h1>

          <p className="fade-in text-xl md:text-2xl text-[#E6E6E1]/60 font-medium mb-6">
            {practitioner.title}{practitioner.organisation ? `, ${practitioner.organisation}` : ''}
          </p>

          <p className="fade-in text-lg text-[#E6E6E1]/70 font-medium max-w-2xl">
            {practitioner.pedigree}
          </p>
        </div>
      </section>

      {/* INTERVIEW TEASER */}
      <section className="py-16 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in bg-white rounded-xl p-8 md:p-12 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="font-mono text-xs uppercase tracking-widest text-black/40 mb-4">
              In this interview
            </div>
            <p className="text-xl md:text-2xl text-black/80 font-medium leading-relaxed">
              {practitioner.interviewTeaser}
            </p>
          </div>
        </div>
      </section>

      {/* LINKEDIN CONTENT */}
      <section className="py-16 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-5xl mx-auto">
          <div className="font-mono text-xs uppercase tracking-widest text-[#E6E6E1]/50 mb-8">
            LinkedIn Content
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Carousel Preview */}
            <div className="bg-[#111] rounded-xl border-2 border-white/10 overflow-hidden">
              <div className="bg-white/5 px-4 py-2 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-[#E6E6E1]/40">Carousel</span>
                <span className="font-mono text-xs text-[#E6E6E1]/30">10 slides</span>
              </div>

              {practitioner.carouselUrl ? (
                /* Embedded PDF carousel */
                <div className="aspect-square bg-[#0a0a0a] relative">
                  <iframe
                    src={`${practitioner.carouselUrl}#view=FitH&toolbar=0&navpanes=0`}
                    className="w-full h-full"
                    title={`${practitioner.name} Carousel`}
                  />
                </div>
              ) : (
                /* Mock carousel slide */
                <div className="aspect-square bg-[#0a0a0a] p-8 flex flex-col justify-between">
                  <div className="font-mono text-xs uppercase tracking-widest text-[#E6E6E1]/30">
                    01/10 — Cover
                  </div>
                  <div>
                    <div className="w-12 h-0.5 bg-[#E6E6E1]/30 mb-6"></div>
                    <p className="text-2xl font-bold leading-tight mb-6">
                      "{practitioner.pullQuote.split('.')[0]}."
                    </p>
                    <div>
                      <p className="font-bold">{practitioner.name}</p>
                      <p className="text-sm text-[#E6E6E1]/50">
                        {practitioner.title}{practitioner.organisation ? `, ${practitioner.organisation}` : ''}
                      </p>
                    </div>
                  </div>
                  <div className="font-mono text-xs uppercase tracking-widest text-[#E6E6E1]/20">
                    Agentic Agency
                  </div>
                </div>
              )}

              <div className="p-4 border-t border-white/5">
                {practitioner.carouselUrl ? (
                  <a
                    href={practitioner.carouselUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-sm font-medium text-[#E6E6E1]/70 hover:text-[#E6E6E1] transition-colors"
                  >
                    View full carousel
                    <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <p className="text-center text-sm text-[#E6E6E1]/30">
                    Carousel in production
                  </p>
                )}
              </div>
            </div>

            {/* Short Post Preview */}
            <div className="bg-[#111] rounded-xl border-2 border-white/10 overflow-hidden">
              <div className="bg-white/5 px-4 py-2 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-[#E6E6E1]/40">Short Post</span>
                <span className="font-mono text-xs text-[#E6E6E1]/30">Statement + Attribution</span>
              </div>

              {/* Mock LinkedIn post */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="font-mono text-xs font-bold">AA</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm">Agentic Agency</p>
                    <p className="text-xs text-[#E6E6E1]/40">Practitioner Series</p>
                  </div>
                </div>

                <div className="bg-[#0a0a0a] rounded-lg p-6 mb-4">
                  <div className="font-mono text-xs uppercase tracking-widest text-[#E6E6E1]/30 mb-4">
                    Practitioner Series
                  </div>
                  <p className="text-lg font-bold mb-4">
                    "{practitioner.pullQuote}"
                  </p>
                  <div className="w-8 h-0.5 bg-[#E6E6E1]/20 mb-4"></div>
                  <p className="text-sm text-[#E6E6E1]/60">
                    {practitioner.name}
                  </p>
                  <p className="text-xs text-[#E6E6E1]/40">
                    {practitioner.title}{practitioner.organisation ? ` · ${practitioner.organisation}` : ''}
                  </p>
                </div>

                <p className="text-sm text-[#E6E6E1]/50 leading-relaxed">
                  {practitioner.interviewTeaser.split('.')[0]}.
                </p>
                <p className="text-sm text-[#E6E6E1]/30 mt-2">
                  Full practitioner interview below.
                </p>
                <p className="text-xs text-[#0A66C2] mt-3">
                  #AgenticAI #PractitionerSeries #Engineering
                </p>
              </div>

              <div className="p-4 border-t border-white/5">
                <a
                  href={practitioner.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-medium text-[#E6E6E1]/70 hover:text-[#E6E6E1] transition-colors"
                >
                  <Linkedin size={16} />
                  Follow for updates
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIO & CREDENTIALS */}
      <section className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Bio */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-6">About {practitioner.name.split(' ')[0]}</h2>
              <div className="prose prose-lg text-black/70 font-medium leading-relaxed">
                {practitioner.bio.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="mb-4">{paragraph}</p>
                ))}
              </div>

              {/* Pull quote */}
              <div className="mt-8 border-l-4 border-black pl-6 py-2">
                <p className="text-xl italic text-black/70">
                  "{practitioner.pullQuote}"
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Credentials */}
              <div className="mb-8">
                <h3 className="font-mono text-xs uppercase tracking-widest text-black/40 mb-4">
                  Credentials
                </h3>
                <ul className="space-y-3">
                  {practitioner.credentials.map((cred, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-black/70 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-black/30 mt-2 flex-shrink-0"></div>
                      {cred}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Topics */}
              <div className="mb-8">
                <h3 className="font-mono text-xs uppercase tracking-widest text-black/40 mb-4">
                  Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {practitioner.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-black text-[#E6E6E1] text-xs font-medium rounded"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href={practitioner.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0A66C2] text-white px-5 py-3 font-bold text-sm rounded hover:bg-[#004182] transition-colors"
              >
                <Linkedin size={18} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LONG-FORM INTERVIEW PLACEHOLDER */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="font-mono text-xs uppercase tracking-widest text-black/40 mb-6">
            Long-form Interview
          </div>
          <div className="bg-[#E6E6E1] rounded-xl p-12 md:p-16 border-2 border-black/10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4">
              Full Interview Coming Soon
            </h2>
            <p className="text-lg text-black/60 font-medium max-w-xl mx-auto mb-8">
              The complete long-form interview with {practitioner.name} is being edited and will be published here.
            </p>
            <a
              href={practitioner.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-black font-bold hover:text-black/70 transition-colors"
            >
              Follow {practitioner.name.split(' ')[0]} on LinkedIn for updates
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="py-16 px-6 md:px-16 bg-black text-[#E6E6E1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Previous */}
            <div>
              {prevPractitioner ? (
                <Link
                  to={`/practitioners/${prevPractitioner.slug}`}
                  className="group block bg-[#111] rounded-xl p-6 border-2 border-white/10 hover:border-white/30 transition-colors"
                >
                  <div className="flex items-center gap-2 text-[#E6E6E1]/50 font-mono text-xs uppercase tracking-wider mb-3">
                    <ArrowLeft size={14} />
                    Previous Episode
                  </div>
                  <p className="text-xl font-bold group-hover:text-[#E6E6E1]/80 transition-colors">
                    {prevPractitioner.name}
                  </p>
                  <p className="text-sm text-[#E6E6E1]/50">
                    {prevPractitioner.tagline}
                  </p>
                </Link>
              ) : (
                <div className="bg-[#111] rounded-xl p-6 border-2 border-white/5 opacity-50">
                  <div className="text-[#E6E6E1]/30 font-mono text-xs uppercase tracking-wider mb-3">
                    Previous Episode
                  </div>
                  <p className="text-[#E6E6E1]/30">
                    This is the first episode
                  </p>
                </div>
              )}
            </div>

            {/* Next */}
            <div>
              {nextPractitioner ? (
                <Link
                  to={`/practitioners/${nextPractitioner.slug}`}
                  className="group block bg-[#111] rounded-xl p-6 border-2 border-white/10 hover:border-white/30 transition-colors text-right"
                >
                  <div className="flex items-center justify-end gap-2 text-[#E6E6E1]/50 font-mono text-xs uppercase tracking-wider mb-3">
                    Next Episode
                    <ArrowUpRight size={14} />
                  </div>
                  <p className="text-xl font-bold group-hover:text-[#E6E6E1]/80 transition-colors">
                    {nextPractitioner.name}
                  </p>
                  <p className="text-sm text-[#E6E6E1]/50">
                    {nextPractitioner.tagline}
                  </p>
                </Link>
              ) : (
                <div className="bg-[#111] rounded-xl p-6 border-2 border-white/5 opacity-50 text-right">
                  <div className="text-[#E6E6E1]/30 font-mono text-xs uppercase tracking-wider mb-3">
                    Next Episode
                  </div>
                  <p className="text-[#E6E6E1]/30">
                    More episodes coming soon
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Back to all */}
          <div className="text-center mt-12">
            <Link
              to="/practitioners"
              className="inline-flex items-center gap-2 text-[#E6E6E1]/60 hover:text-[#E6E6E1] font-medium transition-colors"
            >
              <ArrowLeft size={18} />
              Back to all Practitioners
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PractitionerPage;
