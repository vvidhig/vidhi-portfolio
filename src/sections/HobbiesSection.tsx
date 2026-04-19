import React from 'react';
import { useInView } from '../hooks/useInView';

const hobbies = [
  {
    emoji: '📖',
    title: 'Reading',
    description: 'Diving into sci-fi, philosophy, and tech literature. Currently exploring the intersection of AI and human cognition.',
    color: 'from-burgundy/40 to-wine',
    tag: 'Books & Ideas',
  },
  {
    emoji: '✍️',
    title: 'Technical Writing',
    description: 'Documenting complex concepts in clear, approachable language. I believe good documentation is an art form.',
    color: 'from-maroon/50 to-wine',
    tag: 'Content',
  },
  {
    emoji: '🧩',
    title: 'Problem Solving',
    description: 'Competitive coding on LeetCode. Solving algorithmic puzzles is my mental gym — every challenge sharpens the mind.',
    color: 'from-burgundy/30 to-maroon/40',
    tag: 'LeetCode',
  },
  {
    emoji: '🎨',
    title: 'UI/UX Design',
    description: 'Sketching interfaces, exploring color palettes, and crafting user experiences that feel both beautiful and intuitive.',
    color: 'from-maroon/40 to-wine',
    tag: 'Design',
  },
  {
    emoji: '🌍',
    title: 'Geospatial Exploration',
    description: 'Fascinated by maps, satellite data, and how geography intersects with data science — sparked by my Milan project.',
    color: 'from-burgundy/40 to-maroon/30',
    tag: 'GIS & Maps',
  },
  {
    emoji: '🎵',
    title: 'Music',
    description: 'Classical Indian music and ambient electronica form the soundtrack to late-night coding sessions.',
    color: 'from-maroon/50 to-wine',
    tag: 'Listening',
  },
];

const HobbiesSection: React.FC = () => {
  const { ref, inView } = useInView();

  return (
    <>
      <section id="hobbies" className="py-24 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 w-80 h-80 bg-burgundy/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div
            ref={ref}
            className={`transition-all duration-700 mb-16 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-xs text-sandgold/40 tracking-[0.3em]">06</span>
              <div className="section-divider" />
              <span className="font-mono text-xs text-sandgold/60 tracking-[0.25em] uppercase">Hobbies</span>
            </div>
            <h2 className="font-playfair text-5xl md:text-6xl font-black text-champagne">
              Beyond the <span className="italic text-sandgold">Code.</span>
            </h2>
            <p className="font-cormorant text-xl text-champagne/50 mt-4 max-w-xl">
              The pursuits that fuel curiosity and keep the creative spark alive.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hobbies.map((hobby, i) => (
              <div
                key={hobby.title}
                className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className={`relative bg-gradient-to-br ${hobby.color} gold-border p-6 card-hover h-full group cursor-default`}
                >
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden opacity-20 group-hover:opacity-40 transition-opacity">
                    <div className="absolute top-0 right-0 w-0 h-0 border-l-[64px] border-l-transparent border-t-[64px] border-t-sandgold/30" />
                  </div>

                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{hobby.emoji}</span>
                    <span className="font-mono text-xs bg-wine/60 border border-sandgold/20 text-sandgold/60 px-2 py-0.5">
                      {hobby.tag}
                    </span>
                  </div>

                  <h3 className="font-playfair text-xl font-bold text-champagne mb-3 group-hover:text-sandgold transition-colors">
                    {hobby.title}
                  </h3>
                  <p className="font-cormorant text-base text-champagne/60 leading-relaxed">
                    {hobby.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-sandgold/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div>
              <div className="font-playfair text-2xl font-black text-sandgold mb-2">
                Vidhi Gupta<span className="text-champagne">.</span>
              </div>
              <p className="font-cormorant text-champagne/40 text-sm">
                ML Engineer · Full Stack Developer · B.Tech AIML 2026
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-mono text-xs text-champagne/30 uppercase tracking-widest mb-2">Navigate</p>
              {['About', 'Experience', 'Projects', 'Skills', 'Education', 'Hobbies'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-mono text-xs text-champagne/50 hover:text-sandgold transition-colors tracking-wider"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-mono text-xs text-champagne/30 uppercase tracking-widest mb-2">Contact</p>
              <a
                href="mailto:vvidhig417@gmail.com"
                className="font-mono text-xs text-champagne/50 hover:text-sandgold transition-colors"
              >
                vvidhig417@gmail.com
              </a>
              <a
                href="tel:+916290188873"
                className="font-mono text-xs text-champagne/50 hover:text-sandgold transition-colors"
              >
                +91-6290188873
              </a>
              <div className="flex gap-4 mt-3">
                {['LinkedIn', 'GitHub', 'LeetCode'].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="font-mono text-xs text-champagne/30 hover:text-sandgold transition-colors uppercase tracking-wider"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-sandgold/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono text-xs text-champagne/20">
              © 2026 Vidhi Gupta. Crafted with React, TypeScript & Tailwind CSS.
            </p>
            <p className="font-cormorant text-sm italic text-champagne/20">
              Designed with intention. Built with precision.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HobbiesSection;
