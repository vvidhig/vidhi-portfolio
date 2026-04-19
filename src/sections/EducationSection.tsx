import React from 'react';
import { useInView } from '../hooks/useInView';

const education = [
  {
    degree: 'Bachelor of Technology',
    specialization: 'Computer Science (Specialization in AIML)',
    institution: 'Heritage Institute of Technology, Kolkata',
    period: 'September 2022 – June 2026',
    gpa: '8.77 GPA',
    type: 'University',
    courses: [
      'Data Structures',
      'Algorithms',
      'Object-Oriented Programming',
      'Database Management Systems',
      'Artificial Intelligence',
      'Data Mining',
      'Web Technologies',
      'Computer Architecture',
      'Formal Language & Automata Theory',
      'Big Data and IoT',
    ],
  },
  {
    degree: 'ISC (Class XII)',
    specialization: 'Science',
    institution: 'Sri Ram Narayan Singh Memorial High School, Kolkata',
    period: 'April 2008 – June 2022',
    gpa: '88%',
    type: 'Higher Secondary',
    courses: [],
  },
  {
    degree: 'ICSE (Class X)',
    specialization: '',
    institution: 'Sri Ram Narayan Singh Memorial High School, Kolkata',
    period: 'April 2008 – June 2020',
    gpa: '96.8%',
    type: 'Secondary',
    courses: [],
  },
];

const EducationSection: React.FC = () => {
  const { ref, inView } = useInView();

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-sandgold/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 mb-16 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs text-sandgold/40 tracking-[0.3em]">05</span>
            <div className="section-divider" />
            <span className="font-mono text-xs text-sandgold/60 tracking-[0.25em] uppercase">Education</span>
          </div>
          <h2 className="font-playfair text-5xl md:text-6xl font-black text-champagne">
            Where I <span className="italic text-sandgold">Learned.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {/* Main university card — large */}
          <div
            className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="relative bg-maroon/40 gold-border p-8 md:p-10 card-hover">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sandgold via-sandgold/50 to-transparent" />

              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <span className="font-mono text-xs text-sandgold/50 uppercase tracking-widest">{education[0].type}</span>
                  <h3 className="font-playfair text-3xl md:text-4xl font-black text-champagne mt-2 leading-tight">
                    {education[0].degree}
                  </h3>
                  <p className="font-cormorant text-xl text-sandgold italic mt-1">{education[0].specialization}</p>
                  <p className="font-cormorant text-lg text-champagne/60 mt-2">{education[0].institution}</p>
                  <p className="font-mono text-xs text-champagne/40 mt-2">{education[0].period}</p>
                </div>

                <div className="flex flex-col justify-center items-center md:items-end gap-4">
                  <div className="text-center md:text-right">
                    <div className="font-playfair text-5xl font-black text-sandgold">{education[0].gpa.split(' ')[0]}</div>
                    <div className="font-mono text-xs text-champagne/40 uppercase tracking-widest mt-1">Grade Point Average</div>
                  </div>
                  <div className="bg-wine/60 border border-sandgold/20 px-4 py-2 text-center">
                    <span className="font-mono text-xs text-sandgold/70">Current · 2026</span>
                  </div>
                </div>
              </div>

              {/* Relevant coursework */}
              <div className="mt-8 pt-6 border-t border-sandgold/10">
                <p className="font-mono text-xs text-champagne/30 uppercase tracking-widest mb-4">Relevant Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {education[0].courses.map((c) => (
                    <span
                      key={c}
                      className="font-mono text-xs bg-burgundy/20 border border-sandgold/10 text-champagne/60 px-3 py-1.5 hover:text-sandgold hover:border-sandgold/30 transition-colors"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* School cards — side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {education.slice(1).map((edu, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${300 + i * 150}ms` }}
              >
                <div className="relative bg-maroon/25 gold-border p-6 card-hover h-full">
                  <div className="absolute top-0 left-6 w-8 h-0.5 bg-sandgold/40" />
                  <span className="font-mono text-xs text-sandgold/40 uppercase tracking-widest">{edu.type}</span>
                  <h3 className="font-playfair text-2xl font-bold text-champagne mt-2">{edu.degree}</h3>
                  <p className="font-cormorant text-lg text-champagne/60 mt-1">{edu.institution}</p>
                  <p className="font-mono text-xs text-champagne/30 mt-2">{edu.period}</p>
                  <div className="mt-4 pt-4 border-t border-sandgold/10 flex items-center justify-between">
                    <span className="font-mono text-xs text-champagne/40">Score</span>
                    <span className="font-playfair text-2xl font-black text-sandgold">{edu.gpa}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
