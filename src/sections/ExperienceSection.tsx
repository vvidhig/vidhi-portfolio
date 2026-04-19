import React from 'react';
import { useInView } from '../hooks/useInView';

const experiences = [
  {
    role: 'Lead Machine Learning Engineer',
    company: 'Omdena (Italy Chapter)',
    period: 'May 2024 – July 2024',
    type: 'Remote',
    badge: 'Top Contributor',
    project: 'Identifying Potential Areas for Urban Farming in Milan, Italy',
    highlights: [
      { metric: 'Data Collection & Integration', detail: 'Collected and integrated solar, land-use, and amenity data using web scraping and OSM APIs for multi-zone geospatial analysis.' },
      { metric: 'EDA & Preprocessing', detail: 'Performed geospatial EDA and data cleaning to extract insights on sunlight exposure and built-up areas using GeoPandas.' },
      { metric: 'Feature Engineering', detail: 'Merged multi-source geospatial datasets using cKDTree and applied Kriging interpolation to handle missing spatial values.' },
      { metric: 'Model Optimization', detail: 'Built and optimized an XGBoost classifier using Optuna, tracked experiments with MLflow for agricultural suitability prediction.' },
      { metric: 'Backend & Deployment', detail: 'Integrated XGBoost and KMeans models into a Streamlit web app for real-time agricultural suitability predictions.' },
    ],
    stack: ['Python', 'Looker Studio', 'XGBoost', 'Optuna', 'MLflow', 'Streamlit', 'GeoPandas', 'APIs', 'Git/GitHub'],
  },
];

const ExperienceSection: React.FC = () => {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-64 h-64 bg-burgundy/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 mb-16 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs text-sandgold/40 tracking-[0.3em]">02</span>
            <div className="section-divider" />
            <span className="font-mono text-xs text-sandgold/60 tracking-[0.25em] uppercase">Work Experience</span>
          </div>
          <h2 className="font-playfair text-5xl md:text-6xl font-black text-champagne">
            Where I've <span className="italic text-sandgold">Worked.</span>
          </h2>
        </div>

        {experiences.map((exp, i) => (
          <div
            key={i}
            className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="relative bg-maroon/30 gold-border p-6 md:p-10 card-hover mb-6">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-sandgold/60 via-sandgold/20 to-transparent" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                <div className="min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-sandgold text-wine font-mono text-xs px-2 py-0.5 font-bold tracking-wider uppercase">
                      {exp.badge}
                    </span>
                  </div>
                  <h3 className="font-playfair text-2xl md:text-3xl font-bold text-champagne">{exp.role}</h3>
                  <p className="font-cormorant text-xl text-sandgold mt-1">{exp.company}</p>
                  <p className="font-cormorant text-base italic text-champagne/50 mt-1">"{exp.project}"</p>
                </div>
                <div className="md:text-right flex-shrink-0">
                  <p className="font-mono text-sm text-sandgold/80">{exp.period}</p>
                  <p className="font-mono text-xs text-champagne/40 mt-1">{exp.type}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
                {exp.highlights.map((h, idx) => (
                  <div
                    key={idx}
                    className="bg-wine/60 border border-sandgold/15 p-4 group hover:border-sandgold/40 transition-colors duration-200"
                  >
                    <div className="font-mono text-xs font-bold text-sandgold group-hover:text-champagne transition-colors leading-snug mb-2 uppercase tracking-wide">
                      {h.metric}
                    </div>
                    <div className="font-mono text-xs text-champagne/50 leading-relaxed">{h.detail}</div>
                  </div>
                ))}
              </div>

              <div>
                <p className="font-mono text-xs text-champagne/30 uppercase tracking-widest mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs bg-burgundy/30 border border-burgundy/50 text-champagne/80 px-3 py-1 hover:border-sandgold/40 hover:text-sandgold transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="border border-dashed border-sandgold/15 p-8 text-center">
          <p className="font-cormorant text-xl text-champagne/30 italic">
            Open to internships & full-time opportunities · 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;