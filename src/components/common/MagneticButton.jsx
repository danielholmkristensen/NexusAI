import React, { useEffect, useRef, useState, forwardRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const MagneticButton = forwardRef(({ children, className = '', onClick, to, href, type = 'button' }, externalRef) => {
  const internalRef = useRef(null);
  const wrapperRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Use external ref if provided, otherwise use internal
  const buttonRef = externalRef || internalRef;

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const move = (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
      gsap.to(wrapper, {
        x,
        y,
        scale: 1.02,
        duration: 0.4,
        ease: "power2.out",
        overwrite: 'auto'
      });
    };

    const enter = () => {
      setIsHovered(true);
    };

    const leave = () => {
      setIsHovered(false);
      gsap.to(wrapper, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "elastic.out(1, 0.4)",
        overwrite: 'auto'
      });
    };

    wrapper.addEventListener('mousemove', move);
    wrapper.addEventListener('mouseenter', enter);
    wrapper.addEventListener('mouseleave', leave);

    return () => {
      wrapper.removeEventListener('mousemove', move);
      wrapper.removeEventListener('mouseenter', enter);
      wrapper.removeEventListener('mouseleave', leave);
    };
  }, []);

  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-xl transition-shadow duration-300 ${isHovered ? 'shadow-[0_8px_30px_rgba(0,0,0,0.3)]' : ''} ${className}`;

  const innerContent = (
    <span className="relative z-10 flex items-center gap-2">{children}</span>
  );

  const sweepOverlay = (
    <span
      className={`absolute inset-0 w-full h-full bg-white/15 transition-transform duration-500 ease-out ${isHovered ? 'translate-x-0' : '-translate-x-full'}`}
      style={{ pointerEvents: 'none' }}
    />
  );

  // If it's a router link
  if (to) {
    return (
      <div ref={wrapperRef} className="inline-block will-change-transform">
        <Link ref={buttonRef} to={to} className={`${baseClasses} relative overflow-hidden`}>
          {sweepOverlay}
          {innerContent}
        </Link>
      </div>
    );
  }

  // If it's an external link
  if (href) {
    return (
      <div ref={wrapperRef} className="inline-block will-change-transform">
        <a ref={buttonRef} href={href} className={`${baseClasses} relative overflow-hidden`}>
          {sweepOverlay}
          {innerContent}
        </a>
      </div>
    );
  }

  // Default: button
  return (
    <div ref={wrapperRef} className="inline-block will-change-transform">
      <button ref={buttonRef} type={type} onClick={onClick} className={`${baseClasses} relative overflow-hidden`}>
        {sweepOverlay}
        {innerContent}
      </button>
    </div>
  );
});

MagneticButton.displayName = 'MagneticButton';

export default MagneticButton;
