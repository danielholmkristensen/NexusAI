import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

// Simple markdown-like formatting
const formatContent = (text) => {
  return text
    .split('\n\n')
    .map((paragraph, i) => {
      // Handle blockquotes
      if (paragraph.startsWith('> ')) {
        const quoteText = paragraph.slice(2);
        return (
          <blockquote key={i} className="my-8 pl-6 border-l-2 border-black/20 text-xl italic text-black/70">
            {formatInline(quoteText)}
          </blockquote>
        );
      }
      return (
        <p key={i} className="mb-6">
          {formatInline(paragraph)}
        </p>
      );
    });
};

const formatInline = (text) => {
  const parts = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Bold: **text**
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    // Italic: *text*
    const italicMatch = remaining.match(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/);

    const boldIndex = boldMatch ? remaining.indexOf(boldMatch[0]) : Infinity;
    const italicIndex = italicMatch ? remaining.indexOf(italicMatch[0]) : Infinity;

    if (boldIndex === Infinity && italicIndex === Infinity) {
      parts.push(remaining);
      break;
    }

    if (boldIndex < italicIndex) {
      if (boldIndex > 0) {
        parts.push(remaining.slice(0, boldIndex));
      }
      parts.push(<strong key={key++} className="font-semibold">{boldMatch[1]}</strong>);
      remaining = remaining.slice(boldIndex + boldMatch[0].length);
    } else {
      if (italicIndex > 0) {
        parts.push(remaining.slice(0, italicIndex));
      }
      parts.push(<em key={key++}>{italicMatch[1]}</em>);
      remaining = remaining.slice(italicIndex + italicMatch[0].length);
    }
  }

  return parts;
};

// Image component for different placement modes
// All images crop from the right to hide Gemini watermarks
const ArticleImage = ({ image, mode }) => {
  if (!image) return null;

  switch (mode || image.mode) {
    case 'full-bleed':
      return (
        <figure className="my-12 -mx-6 md:-mx-8 lg:-mx-16 xl:-mx-32">
          <div className="relative bg-black overflow-hidden">
            <img
              src={image.src}
              alt={image.caption || ''}
              className="w-[105%] h-auto object-cover object-left"
            />
          </div>
          {image.caption && (
            <figcaption className="mt-3 px-6 md:px-8 lg:px-16 xl:px-32 font-mono text-[11px] uppercase tracking-[0.08em] text-[#5A5A55]">
              {image.caption}
            </figcaption>
          )}
        </figure>
      );

    case 'inset-left':
      return (
        <figure className="float-left w-[45%] mr-6 mb-4 mt-2 border-r border-[#1A1A1A] overflow-hidden">
          <img
            src={image.src}
            alt={image.caption || ''}
            className="w-[110%] h-auto pr-4 object-cover object-left"
          />
          {image.caption && (
            <figcaption className="mt-2 pr-4 font-mono text-[11px] uppercase tracking-[0.08em] text-[#5A5A55]">
              {image.caption}
            </figcaption>
          )}
        </figure>
      );

    case 'inset-right':
      return (
        <figure className="float-right w-[45%] ml-6 mb-4 mt-2 border-l border-[#1A1A1A] overflow-hidden">
          <img
            src={image.src}
            alt={image.caption || ''}
            className="w-[110%] h-auto pl-4 object-cover object-left"
          />
          {image.caption && (
            <figcaption className="mt-2 pl-4 font-mono text-[11px] uppercase tracking-[0.08em] text-[#5A5A55]">
              {image.caption}
            </figcaption>
          )}
        </figure>
      );

    default:
      return null;
  }
};

// Pullquote with optional background image (plain black if no image)
// Background crops from right to hide watermarks
const PullquotePanel = ({ text, backgroundImage }) => {
  return (
    <div className="relative my-16 -mx-6 md:-mx-8 lg:-mx-16 xl:-mx-32 min-h-[400px] flex items-center justify-center bg-black overflow-hidden">
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-left"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: '105% auto'
            }}
          />
          <div className="absolute inset-0 bg-black/30" />
        </>
      )}
      <blockquote className="relative z-10 text-white text-center px-8 max-w-[32ch] mx-auto">
        <p className="font-['Space_Grotesk'] font-normal italic text-[44px] md:text-[56px] leading-tight">
          {text}
        </p>
      </blockquote>
    </div>
  );
};

// Section break texture
const SectionBreak = () => {
  return (
    <div
      className="my-16 -mx-6 md:-mx-8 lg:-mx-16 xl:-mx-32 h-[120px] bg-black"
      style={{
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.15'/></svg>")`
      }}
    />
  );
};

// Closer image with fade - crops right edge to hide watermark
const CloserImage = ({ image }) => {
  return (
    <figure className="relative my-16 -mx-6 md:-mx-8 lg:-mx-16 xl:-mx-32 overflow-hidden">
      <div className="relative">
        <img
          src={image.src}
          alt={image.caption || ''}
          className="w-[105%] h-auto object-cover object-left"
        />
        {/* Fade to page background at top */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#FAFAF7] to-transparent" />
      </div>
      {image.caption && (
        <figcaption className="absolute bottom-4 left-6 md:left-8 lg:left-16 xl:left-32 font-mono text-[11px] uppercase tracking-[0.08em] text-white/80">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
};

const ArticleReader = ({ article, practitionerName }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [readingProgress, setReadingProgress] = useState(0);
  const articleRef = useRef(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    if (!isExpanded) return;

    const handleScroll = () => {
      if (!articleRef.current) return;

      const articleTop = articleRef.current.offsetTop;
      const articleHeight = articleRef.current.offsetHeight;
      const scrollPosition = window.scrollY - articleTop + window.innerHeight / 2;
      const progress = Math.min(100, Math.max(0, (scrollPosition / articleHeight) * 100));
      setReadingProgress(progress);

      // Find active section
      let currentSection = null;
      Object.entries(sectionRefs.current).forEach(([number, ref]) => {
        if (ref && ref.offsetTop <= window.scrollY + 200) {
          currentSection = number;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isExpanded]);

  const scrollToSection = (number) => {
    const ref = sectionRefs.current[number];
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!isExpanded) {
    // Collapsed state - compelling entry point with hero image
    return (
      <section className="bg-[#FAFAF7]">
        {/* Hero image - centered on subject, crops right edge to hide watermark */}
        {article.heroImage && (
          <div className="relative w-full pt-20 overflow-hidden">
            <img
              src={article.heroImage}
              alt=""
              className="w-[105%] h-[75vh] md:h-[85vh] object-cover object-[center_15%]"
            />
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#FAFAF7] to-transparent" />
          </div>
        )}

        <div className="max-w-4xl mx-auto px-6 md:px-8 pb-24">
          <article className="relative">
            {/* Headline */}
            <header className="mb-12">
              <p className="font-mono text-xs uppercase tracking-widest text-[#5A5A55] mb-4">
                Long-form Interview
              </p>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-none mb-6"
                style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
              >
                {article.headline}
              </h2>
              <p
                className="text-xl md:text-2xl text-[#5A5A55] leading-relaxed max-w-3xl"
                style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}
              >
                {article.dek}
              </p>
            </header>

            {/* Byline */}
            <div className="flex items-center gap-4 mb-12 pb-8 border-b border-[#1A1A1A]/10">
              <div>
                <p className="font-medium" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                  By {article.byline}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#5A5A55]">
                  {article.reportedDate} · {article.readingTime}
                </p>
              </div>
            </div>

            {/* Opening paragraph with drop cap */}
            <div className="mb-12" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              <p className="text-lg text-[#0A0A0A] leading-[1.7] first-letter:text-[5em] first-letter:font-light first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-[0.8]" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                <span style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: 300 }} className="first-letter-override">
                  {article.sections[0].content.charAt(0)}
                </span>
                {article.sections[0].content.split('\n\n')[0]}
              </p>
            </div>

            {/* Fade overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#FAFAF7] to-transparent pointer-events-none" />

            {/* Expand button */}
            <div className="relative z-10 text-center pt-8">
              <button
                onClick={() => setIsExpanded(true)}
                className="group inline-flex flex-col items-center gap-3"
              >
                <span className="px-8 py-4 bg-black text-[#E6E6E1] font-bold uppercase tracking-wider hover:bg-black/80 transition-colors">
                  Continue Reading
                </span>
                <span className="flex items-center gap-2 text-sm text-[#5A5A55] group-hover:text-black transition-colors">
                  {article.sections.length} chapters · {article.readingTime}
                  <ChevronDown size={16} className="animate-bounce" />
                </span>
              </button>
            </div>
          </article>
        </div>
      </section>
    );
  }

  // Expanded state - full immersive reader
  return (
    <section className="bg-[#FAFAF7]" ref={articleRef}>
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#D8D8D3] z-50">
        <div
          className="h-full bg-black transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Floating table of contents */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
        <div className="flex flex-col gap-2">
          {article.sections.map((section) => (
            <button
              key={section.number}
              onClick={() => scrollToSection(section.number)}
              className={`w-8 h-8 rounded-full text-xs font-mono transition-all ${
                activeSection === section.number
                  ? 'bg-black text-white scale-110'
                  : 'bg-black/5 text-black/40 hover:bg-black/10 hover:text-black/60'
              }`}
              title={section.title}
            >
              {section.number}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero image for expanded state - centered on subject, crops right edge */}
      {article.heroImage && (
        <div className="relative w-full pt-20 overflow-hidden">
          <img
            src={article.heroImage}
            alt=""
            className="w-[105%] h-[65vh] md:h-[75vh] object-cover object-[center_15%]"
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAF7] to-transparent" />
        </div>
      )}

      <div className="max-w-3xl mx-auto px-6 md:px-8 py-24">
        {/* Header */}
        <header className="mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-[#5A5A55] mb-4">
            Long-form Interview
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-none mb-6"
            style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
          >
            {article.headline}
          </h1>
          <p
            className="text-xl md:text-2xl text-[#5A5A55] leading-relaxed"
            style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}
          >
            {article.dek}
          </p>
          <div className="mt-8 pt-8 border-t border-[#1A1A1A]/10">
            <p className="font-medium" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              By {article.byline}
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#5A5A55]">
              {article.reportedDate}
            </p>
          </div>
        </header>

        {/* Article content */}
        <div style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
          {article.sections.map((section, index) => {
            const isFirst = index === 0;
            const isLastSection = section.number === 'XII';
            const prevSection = index > 0 ? article.sections[index - 1] : null;

            return (
              <React.Fragment key={section.number}>
                {/* Section break after previous section */}
                {prevSection?.sectionBreakAfter && <SectionBreak />}

                {/* Closer image before section (typically §XII) */}
                {section.closerImage && (
                  <CloserImage image={section.closerImage} />
                )}

                <section
                  ref={el => sectionRefs.current[section.number] = el}
                  className="mb-16 scroll-mt-24 overflow-hidden"
                >
                  {/* Section header */}
                  <div className="flex items-baseline gap-4 mb-8 mt-16 first:mt-0">
                    <span className="font-mono text-sm text-[#5A5A55]">{section.number}</span>
                    <h2
                      className="text-2xl font-light uppercase tracking-tight"
                      style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
                    >
                      {section.title}
                    </h2>
                  </div>

                  {/* Full-bleed image after header */}
                  {section.image?.mode === 'full-bleed' && (
                    <ArticleImage image={section.image} />
                  )}

                  {/* Inset images float within content */}
                  {(section.image?.mode === 'inset-left' || section.image?.mode === 'inset-right') && (
                    <ArticleImage image={section.image} />
                  )}

                  {/* Section content with drop cap on first section */}
                  <div className={`text-lg text-[#0A0A0A] leading-[1.7] ${isFirst ? '' : ''}`}>
                    {isFirst ? (
                      <>
                        <p className="mb-6 first-letter:text-[5em] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-[0.8] first-letter:font-light" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                          {formatInline(section.content.split('\n\n')[0])}
                        </p>
                        {section.content.split('\n\n').slice(1).map((para, i) => (
                          <p key={i} className="mb-6">{formatInline(para)}</p>
                        ))}
                      </>
                    ) : (
                      formatContent(section.content)
                    )}
                  </div>

                  {/* Clear floats */}
                  <div className="clear-both" />
                </section>

                {/* Pullquote panel after section if specified */}
                {section.pullquote && (
                  <PullquotePanel
                    text={section.pullquote.text}
                    backgroundImage={section.pullquote.backgroundImage}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Endnote */}
        {article.endnote && (
          <div className="mt-16 pt-8 border-t border-[#1A1A1A]/10">
            <p className="text-sm text-[#5A5A55] italic leading-relaxed" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              {article.endnote}
            </p>
          </div>
        )}

        {/* End mark */}
        <div className="mt-24 pt-12 border-t border-[#1A1A1A]/10 text-center">
          <div className="inline-block w-4 h-4 bg-black" />
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.08em] text-[#5A5A55]">
            Interview conducted April 2026
          </p>
        </div>

        {/* Newsletter signup */}
        <div className="mt-16 p-8 md:p-12 bg-black text-[#E6E6E1] text-center">
          <p className="text-[#E6E6E1]/50 text-sm mb-4 italic" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
            You've made it this far. Might as well commit.
          </p>
          <a
            href="mailto:daniel.holm@agenticagency.dev?subject=Newsletter%20Signup&body=Sign%20me%20up%20please!"
            className="inline-block px-8 py-4 bg-[#E6E6E1] text-black font-medium hover:bg-white transition-colors"
          >
            Do send me more of this sort of thing.
          </a>
        </div>
      </div>
    </section>
  );
};

export default ArticleReader;
