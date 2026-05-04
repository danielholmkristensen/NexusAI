import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProductLadderSection = ({ currentProduct = null, variant = 'full' }) => {
  const sectionRef = useRef(null);

  const products = [
    {
      id: 'discover',
      name: 'DISCOVER',
      subtitle: 'Agentic Studio',
      duration: 'Phase 1',
      tagline: 'Scope it right. Build it once.',
      description: "Before development begins, we nail the context — what you're building, for who, and why. The foundation for AI Development as a Service.",
      price: 'Scoped phase',
      to: '/discover',
      cta: 'Learn more'
    },
    {
      id: 'build',
      name: 'BUILD',
      subtitle: 'Agentic Studio',
      duration: 'Phase 2',
      tagline: 'Enterprise software, delivered',
      description: 'AI-powered software implementation. Production-grade code with 80%+ test coverage, full documentation. Perpetual licence included.',
      price: 'One licence',
      to: '/build',
      cta: 'Learn more'
    },
    {
      id: 'operate',
      name: 'OPERATE',
      subtitle: 'Command Center',
      duration: 'Phase 3',
      tagline: 'Visibility. Control. Continuity.',
      description: 'The Command Center for AI-driven development. Real-time dashboards, session management, and operational control across all phases.',
      price: 'Yearly SLA',
      to: '/operate',
      cta: 'Learn more'
    }
  ];

  useEffect(() => {
    if (!sectionRef.current || variant !== 'full') return;

    let ctx = gsap.context(() => {
      // Animate cards on scroll
      gsap.fromTo('.product-ladder-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%'
          }
        }
      );

      // Animate arrows
      gsap.fromTo('.ladder-arrow',
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          delay: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [variant]);

  // Compact "your journey" variant for product pages
  if (variant === 'journey') {
    return (
      <section className="py-16 px-6 md:px-16 bg-[#E6E6E1] border-t-4 border-black">
        <div className="max-w-[1400px] mx-auto">
          <h3 className="font-mono text-xs tracking-wider uppercase text-black/50 mb-6">HOW WE WORK</h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {products.map((product, index) => {
              const isCurrent = product.id === currentProduct;

              return (
                <React.Fragment key={product.id}>
                  <Link
                    to={product.to}
                    className={`flex flex-col items-center text-center p-4 transition-all ${
                      isCurrent
                        ? 'bg-black text-[#E6E6E1] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]'
                        : 'hover:bg-black/5'
                    }`}
                  >
                    <span className={`font-bold text-sm uppercase tracking-tight ${isCurrent ? 'text-[#E6E6E1]' : 'text-black'}`}>
                      {product.name}
                    </span>
                    <span className={`font-mono text-xs mt-1 ${isCurrent ? 'text-[#E6E6E1]/70' : 'text-black/50'}`}>
                      {product.duration}
                    </span>
                    {isCurrent && (
                      <span className="font-mono text-xs mt-2 text-[#E6E6E1]/50">You are here</span>
                    )}
                  </Link>

                  {index < products.length - 1 && (
                    <ArrowRight className="hidden md:block text-black/30" size={24} />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Contextual CTAs */}
          {currentProduct && (
            <div className="mt-8 text-center">
              {currentProduct === 'discover' && (
                <p className="text-black/70 font-medium">
                  Ready for delivery? <Link to="/build" className="font-bold text-black underline underline-offset-4 hover:no-underline">Explore Build →</Link>
                </p>
              )}
              {currentProduct === 'build' && (
                <div className="space-y-2">
                  <p className="text-black/70 font-medium">
                    Need onboarding first? <Link to="/discover" className="font-bold text-black underline underline-offset-4 hover:no-underline">Start with Discover →</Link>
                  </p>
                  <p className="text-black/70 font-medium">
                    Want ongoing visibility? <Link to="/operate" className="font-bold text-black underline underline-offset-4 hover:no-underline">Explore Operate →</Link>
                  </p>
                </div>
              )}
              {currentProduct === 'operate' && (
                <p className="text-black/70 font-medium">
                  Need a new phase? <Link to="/build" className="font-bold text-black underline underline-offset-4 hover:no-underline">Start with Build →</Link>
                </p>
              )}
            </div>
          )}
        </div>
      </section>
    );
  }

  // Full product ladder for landing page
  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">AI Development as a Service</h2>
          <p className="text-xl font-medium text-black/70 max-w-2xl mx-auto">
            Onboard. Build. Operate. Enterprise software at startup speed.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {products.map((product, index) => (
            <React.Fragment key={product.id}>
              <Link
                to={product.to}
                className="product-ladder-card group bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="font-mono text-xs tracking-wider uppercase text-black/50 mb-2">
                  {product.subtitle} • {product.duration}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4">
                  {product.name}
                </h3>
                <p className="text-black/70 font-medium mb-6 flex-grow">
                  {product.description}
                </p>
                <div className="mt-auto">
                  <div className="font-mono text-sm text-black/50 mb-4">{product.price}</div>
                  <span className="inline-flex items-center gap-2 font-bold text-black group-hover:gap-3 transition-all">
                    {product.cta} <ArrowRight size={16} />
                  </span>
                </div>
              </Link>

              {/* Arrow between cards (desktop only) */}
              {index < products.length - 1 && (
                <div className="ladder-arrow hidden lg:flex items-center justify-center absolute" style={{ display: 'none' }}>
                  {/* Arrows handled by flex layout */}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-black/60 font-medium text-lg">
            One licence. Enterprise quality. Yours forever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductLadderSection;
