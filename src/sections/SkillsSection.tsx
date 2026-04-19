import React from 'react';
import { useInView } from '../hooks/useInView';

const skillGroups = [
  {
    category: 'Languages',
    icon: '</>',
    skills: ['C++', 'Python', 'Java', 'C', 'JavaScript', 'MySQL'],
    accent: 'sandgold',
  },
  {
    category: 'Machine Learning',
    icon: '⬡',
    skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'MLflow', 'Large Language Models'],
    accent: 'burgundy',
  },
  {
    category: 'Data Analysis',
    icon: '∿',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Tableau', 'Looker Studio'],
    accent: 'sandgold',
  },
  {
    category: 'Tools & Technologies',
    icon: '⚙',
    skills: ['Linux', 'Git', 'VS Code', 'Jupyter Notebook', 'Google Colab', 'MS Excel'],
    accent: 'burgundy',
  },
  {
    category: 'Soft Skills',
    icon: '◈',
    skills: ['Leadership', 'Technical Writing', 'Presentation', 'Teamwork', 'Deadline-Oriented'],
    accent: 'sandgold',
  },
];

const SkillsSection: React.FC = () => {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-maroon/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 mb-16 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs text-sandgold/40 tracking-[0.3em]">04</span>
            <div className="section-divider" />
            <span className="font-mono text-xs text-sandgold/60 tracking-[0.25em] uppercase">Skills</span>
          </div>
          <h2 className="font-playfair text-5xl md:text-6xl font-black text-champagne">
            What I <span className="italic text-sandgold">Know.</span>
          </h2>
        </div>

        {/* Skill group cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="relative bg-maroon/30 gold-border p-6 card-hover h-full">
                {/* Accent top border */}
                <div
                  className={`absolute top-0 left-0 w-12 h-0.5 ${group.accent === 'sandgold' ? 'bg-sandgold' : 'bg-burgundy'
                    }`}
                />

                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-playfair text-xl font-bold text-champagne">{group.category}</h3>
                  <span className="font-mono text-lg text-sandgold/30">{group.icon}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs bg-wine/70 border border-sandgold/15 text-champagne/80 px-3 py-1.5 hover:bg-burgundy/40 hover:border-sandgold/40 hover:text-sandgold transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Wide certifications card */}
          <div
            className={`sm:col-span-2 lg:col-span-3 transition-all duration-700 delay-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <div className="relative bg-wine/40 border border-sandgold/20 p-6 card-hover">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-sandgold/50 via-sandgold/20 to-transparent" />
              <p className="font-mono text-xs text-sandgold/50 uppercase tracking-widest mb-4">Certifications</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    title: 'Oracle Cloud Infrastructure 2025',
                    sub: 'Certified AI Foundations Associate',
                    issuer: 'Oracle',
                  },
                  {
                    title: 'AWS Fundamentals',
                    sub: 'Amazon Web Services',
                    issuer: 'Coursera',
                  },
                  {
                    title: 'Machine Learning Specialization',
                    sub: 'DeepLearning.AI & Stanford University',
                    issuer: 'Coursera',
                  },
                  {
                    title: 'The Git & Github Bootcamp',
                    sub: 'Version Control Mastery',
                    issuer: 'Udemy',
                  },
                  {
                    title: 'The Web Developer Bootcamp 2023',
                    sub: 'Full-Stack Development',
                    issuer: 'Udemy',
                  },
                ].map((cert) => (
                  <div
                    key={cert.title}
                    className="bg-maroon/30 border border-sandgold/10 p-4 hover:border-sandgold/30 transition-colors"
                  >
                    <p className="font-mono text-xs text-sandgold/50 mb-1">{cert.issuer}</p>
                    <p className="font-cormorant text-lg text-champagne font-semibold">{cert.title}</p>
                    <p className="font-mono text-xs text-champagne/40 mt-1">{cert.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
