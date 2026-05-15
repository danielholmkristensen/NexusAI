import React, { useEffect, useRef, useState, Suspense, lazy } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowLeft, ArrowUpRight, Linkedin, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { PageMeta, BreadcrumbSchema } from '../components/seo';
import { getPractitionerBySlug, practitioners } from '../data/practitioners';
import ArticleReader from '../components/ArticleReader';

// Dynamic article imports
const articleModules = {
  'anton-gersvang-golles': () => import('../data/articles/anton-gersvang-golles').then(m => m.article)
};

const TOTAL_SLIDES = 10;

const VisualEssaySection = ({ practitioner }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const iframeRef = useRef(null);

  const goToSlide = (slide) => {
    const newSlide = Math.max(1, Math.min(TOTAL_SLIDES, slide));
    setCurrentSlide(newSlide);
  };

  const scrollToContent = () => {
    const section = document.getElementById('bio-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-black text-[#E6E6E1]">
      <div className="grid lg:grid-cols-5 min-h-screen">
        {/* PDF Viewer - takes 3 columns */}
        <div className="lg:col-span-3 relative flex flex-col">
          <div className="flex-1 relative bg-[#0a0a0a]">
            <iframe
              ref={iframeRef}
              src={`${practitioner.carouselUrl}#page=${currentSlide}&view=Fit&toolbar=0&navpanes=0&scrollbar=0`}
              className="w-full h-full absolute inset-0"
              title={`${practitioner.name} Visual Essay - Slide ${currentSlide}`}
              key={currentSlide}
            />
          </div>

          {/* Navigation controls */}
          <div className="bg-[#0a0a0a] border-t border-white/5 px-6 py-4">
            <div className="flex items-center justify-between max-w-lg mx-auto">
              {/* Previous */}
              <button
                onClick={() => goToSlide(currentSlide - 1)}
                disabled={currentSlide === 1}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium disabled:opacity-20 hover:text-white transition-colors disabled:cursor-not-allowed"
              >
                <ChevronLeft size={18} />
                <span className="hidden sm:inline">Previous</span>
              </button>

              {/* Slide indicators */}
              <div className="flex items-center gap-1.5">
                {Array.from({ length: TOTAL_SLIDES }, (_, i) => i + 1).map((slide) => (
                  <button
                    key={slide}
                    onClick={() => goToSlide(slide)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      slide === currentSlide
                        ? 'bg-white w-6'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to slide ${slide}`}
                  />
                ))}
              </div>

              {/* Next */}
              <button
                onClick={() => goToSlide(currentSlide + 1)}
                disabled={currentSlide === TOTAL_SLIDES}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium disabled:opacity-20 hover:text-white transition-colors disabled:cursor-not-allowed"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Slide counter */}
            <div className="text-center mt-3">
              <span className="font-mono text-xs text-white/30">
                {String(currentSlide).padStart(2, '0')} / {TOTAL_SLIDES}
              </span>
            </div>
          </div>
        </div>

        {/* Editorial sidebar - takes 2 columns */}
        <div className="lg:col-span-2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-black">
          <div className="max-w-md">
            <div className="w-12 h-px bg-[#E6E6E1]/30 mb-8"></div>
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-[#E6E6E1]/90 mb-8">
              "{practitioner.pullQuote}"
            </p>

            <div className="pt-6 border-t border-[#E6E6E1]/10">
              <p className="text-sm text-[#E6E6E1]/50 leading-relaxed">
                {practitioner.interviewTeaser}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#E6E6E1]/40 hover:text-[#E6E6E1]/70 transition-colors group"
      >
        <span className="text-xs font-mono uppercase tracking-widest">Continue</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
};

const PractitionerPage = () => {
  const { slug } = useParams();
  const pageRef = useRef(null);
  const practitioner = getPractitionerBySlug(slug);
  const [article, setArticle] = useState(null);

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

  // Load article if available
  useEffect(() => {
    if (practitioner?.articleSlug && articleModules[practitioner.articleSlug]) {
      articleModules[practitioner.articleSlug]().then(setArticle);
    }
  }, [practitioner]);

  if (!practitioner) {
    return <Navigate to="/practitioners" replace />;
  }

  // Find adjacent practitioners for navigation
  const currentIndex = practitioners.findIndex(p => p.slug === slug);
  const prevPractitioner = currentIndex > 0 ? practitioners[currentIndex - 1] : null;
  const nextPractitioner = currentIndex < practitioners.length - 1 ? practitioners[currentIndex + 1] : null;

  const scrollToInterview = () => {
    const section = document.getElementById('interview-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={pageRef}>
      <PageMeta
        title={`${practitioner.name} — The Practitioners | Agentic Agency`}
        description={practitioner.interviewTeaser}
        path={`/practitioners/${practitioner.slug}`}
        image={article?.sections?.[0]?.image?.src
          ? `https://agenticagency.dev${article.sections[0].image.src}`
          : practitioner.portrait
            ? `https://agenticagency.dev${practitioner.portrait}`
            : 'https://agenticagency.dev/og-practitioners.jpg'}
        type="article"
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
            Episode {String(practitioner.episode).padStart(2, '0')} · {practitioner.publishedDisplay} · The Practitioners Series
          </div>

          <h1 className="fade-in text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-none tracking-tighter mb-4">
            {practitioner.name}
          </h1>

          <p className="fade-in text-xl md:text-2xl text-[#E6E6E1]/60 font-medium mb-6">
            {practitioner.title}{practitioner.organisation ? `, ${practitioner.organisation}` : ''}
          </p>

          <div className="fade-in">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E6E6E1]/30 block mb-2">
              Current and former employers · Education
            </span>
            <p className="text-lg text-[#E6E6E1]/70 font-medium max-w-2xl">
              {practitioner.pedigree}
            </p>
          </div>
        </div>
      </section>

      {/* LONG-FORM INTERVIEW — value up front */}
      <div id="interview-section">
        {article ? (
          <ArticleReader article={article} practitionerName={practitioner.name} />
        ) : (
          <section className="py-24 px-6 md:px-16 bg-white">
            <div className="max-w-4xl mx-auto">
              <div className="font-mono text-xs uppercase tracking-widest text-black/40 mb-6">
                Long-form Interview
              </div>
              <div className="bg-[#E6E6E1] p-12 md:p-16 border-2 border-black/10 text-center">
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
        )}
      </div>

      {/* VISUAL ESSAY */}
      {practitioner.carouselUrl && (
        <VisualEssaySection practitioner={practitioner} />
      )}

      {/* ABOUT */}
      <section id="bio-section" className="py-24 px-6 md:px-16 bg-[#E6E6E1]">
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

      {/* IN THIS INTERVIEW — for those who scrolled too far */}
      {article && (
        <section className="py-16 px-6 md:px-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#E6E6E1] p-8 md:p-12 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="font-mono text-xs uppercase tracking-widest text-black/40 mb-4">
                In this interview
              </div>
              <p className="text-xl md:text-2xl text-black/80 font-medium leading-relaxed mb-8">
                {practitioner.interviewTeaser}
              </p>
              <button
                onClick={scrollToInterview}
                className="inline-flex items-center gap-2 bg-black text-[#E6E6E1] px-6 py-3 font-bold uppercase tracking-wider hover:bg-black/80 transition-colors"
              >
                Read the interview
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </section>
      )}

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
