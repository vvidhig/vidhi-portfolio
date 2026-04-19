import React, { useEffect, useState } from 'react';

const HeroSection: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center grid-pattern overflow-hidden"
    >
      {/* Decorative background orbs */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-burgundy/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full bg-maroon/30 blur-3xl pointer-events-none" />

      {/* Roman numeral decorative */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 font-playfair text-9xl font-black text-sandgold/5 select-none pointer-events-none hidden lg:block">
        I
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — Text */}
          <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="section-divider" />
              <span className="font-mono text-xs text-sandgold/70 tracking-[0.25em] uppercase">
                ML Engineer & Developer
              </span>
            </div>

            <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-2 text-champagne">
              Vidhi
            </h1>
            <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-8 italic text-sandgold">
              Gupta.
            </h1>

            <p className="font-cormorant text-xl text-champagne/70 leading-relaxed mb-8 max-w-xl">
              Computer Science undergraduate (AIML) at Heritage Institute of Technology, Kolkata.
              I build intelligent systems — from geospatial ML models to AI-powered web apps —
              obsessed with turning data into decisions.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3 mb-10">
              <a
                href="mailto:vvidhig417@gmail.com"
                className="flex items-center gap-3 group w-fit"
              >
                <span className="font-mono text-xs text-sandgold/40 uppercase tracking-widest">Email</span>
                <span className="font-mono text-sm text-champagne/70 group-hover:text-sandgold transition-colors">vvidhig417@gmail.com</span>
              </a>
              <a
                href="tel:+916290188873"
                className="flex items-center gap-3 group w-fit"
              >
                <span className="font-mono text-xs text-sandgold/40 uppercase tracking-widest">Phone</span>
                <span className="font-mono text-sm text-champagne/70 group-hover:text-sandgold transition-colors">+91-6290188873</span>
              </a>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:vvidhig417@gmail.com"
                className="font-mono text-xs text-wine bg-sandgold px-6 py-3 tracking-widest uppercase hover:bg-champagne transition-colors duration-200"
              >
                Get In Touch
              </a>
              <a
                href="https://www.linkedin.com/in/vidhigupta310105/"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-sandgold border border-sandgold/40 px-6 py-3 tracking-widest uppercase hover:border-sandgold hover:bg-sandgold/10 transition-all duration-200"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/vvidhig"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-champagne/60 border border-champagne/20 px-6 py-3 tracking-widest uppercase hover:border-champagne/50 hover:text-champagne transition-all duration-200"
              >
                GitHub
              </a>
              <a
                href="https://leetcode.com/vvidhig"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-champagne/60 border border-champagne/20 px-6 py-3 tracking-widest uppercase hover:border-champagne/50 hover:text-champagne transition-all duration-200"
              >
                Leetcode
              </a>
            </div>
          </div>

          {/* RIGHT — Floating photo blob */}
          <div
            className={`transition-all duration-1000 delay-300 flex items-center justify-center ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="relative flex items-center justify-center">
              {/* Outer glow ring */}
              <div className="absolute w-72 h-72 rounded-full bg-burgundy/20 blur-2xl animate-pulse-slow" />

              {/* Rotating dashed ring */}
              <svg
                className="absolute w-[360px] h-[360px] opacity-50"
                viewBox="0 0 320 320"
                style={{ animation: 'spin 20s linear infinite' }}
              >
                <rect
                  x="10"
                  y="10"
                  width="300"
                  height="300"
                  rx="40"  // controls corner roundness
                  ry="40"
                  fill="none"
                  stroke="#F2D9A0"
                  strokeWidth="1"
                  strokeDasharray="8 12"
                />
              </svg>

              {/* Photo circle */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-2 border-sandgold/30 animate-float shadow-2xl shadow-wine">
                <img
                  src="/photo.JPEG"
                  alt="Vidhi Gupta"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Small floating badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-wine border border-sandgold/30 px-4 py-1.5 whitespace-nowrap">
                <span className="font-mono text-xs text-sandgold/80 tracking-widest">Vidhi Gupta</span>
              </div>
            </div>

            <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="flex justify-center mt-16">
          <div className="flex flex-col items-center gap-2 animate-pulse-slow">
            <span className="font-mono text-xs text-champagne/30 uppercase tracking-[0.3em]">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-sandgold/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
