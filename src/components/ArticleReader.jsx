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

  // Find relevant pull quote for a section
  const getPullQuoteAfter = (sectionNumber) => {
    const quote = article.pullQuotes.find(q => q.section === sectionNumber);
    return quote;
  };

  if (!isExpanded) {
    // Collapsed state - compelling entry point
    return (
      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <article className="relative">
            {/* Headline */}
            <header className="mb-12">
              <p className="font-mono text-xs uppercase tracking-widest text-black/40 mb-4">
                Long-form Interview
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none mb-6">
                {article.headline}
              </h2>
              <p className="text-xl md:text-2xl text-black/60 font-medium leading-relaxed max-w-3xl">
                {article.dek}
              </p>
            </header>

            {/* Byline */}
            <div className="flex items-center gap-4 mb-12 pb-8 border-b border-black/10">
              <div>
                <p className="font-medium">By {article.byline}</p>
                <p className="text-sm text-black/50">{article.reportedDate} · {article.readingTime}</p>
              </div>
            </div>

            {/* Opening paragraph with drop cap */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="first-letter:text-7xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 text-xl text-black/80 leading-relaxed">
                {article.sections[0].content.split('\n\n')[0]}
              </p>
            </div>

            {/* Fade overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent pointer-events-none" />

            {/* Expand button */}
            <div className="relative z-10 text-center pt-8">
              <button
                onClick={() => setIsExpanded(true)}
                className="group inline-flex flex-col items-center gap-3"
              >
                <span className="px-8 py-4 bg-black text-[#E6E6E1] font-bold uppercase tracking-wider hover:bg-black/80 transition-colors">
                  Continue Reading
                </span>
                <span className="flex items-center gap-2 text-sm text-black/50 group-hover:text-black transition-colors">
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
    <section className="bg-white" ref={articleRef}>
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-black/5 z-50">
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

      <div className="max-w-3xl mx-auto px-6 md:px-8 py-24">
        {/* Header */}
        <header className="mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-black/40 mb-4">
            Long-form Interview
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none mb-6">
            {article.headline}
          </h1>
          <p className="text-xl md:text-2xl text-black/60 font-medium leading-relaxed">
            {article.dek}
          </p>
          <div className="mt-8 pt-8 border-t border-black/10">
            <p className="font-medium">By {article.byline}</p>
            <p className="text-sm text-black/50">{article.reportedDate}</p>
          </div>
        </header>

        {/* Article content */}
        <div className="prose prose-lg prose-black max-w-none">
          {article.sections.map((section, index) => {
            const pullQuote = getPullQuoteAfter(section.number);
            const isFirst = index === 0;

            return (
              <React.Fragment key={section.number}>
                <section
                  ref={el => sectionRefs.current[section.number] = el}
                  className="mb-16 scroll-mt-24"
                >
                  {/* Section header */}
                  <div className="flex items-baseline gap-4 mb-8 mt-16 first:mt-0">
                    <span className="font-mono text-sm text-black/30">{section.number}</span>
                    <h2 className="text-2xl font-bold uppercase tracking-tight">{section.title}</h2>
                  </div>

                  {/* Section content */}
                  <div className={`text-lg text-black/80 leading-relaxed ${isFirst ? 'first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1' : ''}`}>
                    {formatContent(section.content)}
                  </div>
                </section>

                {/* Pull quote between sections */}
                {pullQuote && (
                  <div className="my-16 py-12 border-y border-black/10">
                    <p className="text-2xl md:text-3xl font-light text-center leading-relaxed text-black/80 max-w-2xl mx-auto">
                      "{pullQuote.text}"
                    </p>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* End mark */}
        <div className="mt-24 pt-12 border-t border-black/10 text-center">
          <div className="inline-block w-4 h-4 bg-black" />
          <p className="mt-6 text-sm text-black/40">
            Interview conducted April 2026
          </p>
        </div>

        {/* Newsletter signup */}
        <div className="mt-16 p-8 md:p-12 bg-black text-[#E6E6E1] text-center">
          <p className="text-[#E6E6E1]/50 text-sm mb-4 italic">
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
