import React from 'react';
import { useInView } from '../hooks/useInView';

const projects = [
  {
    number: '01',
    title: 'Unlearning in Recommendation System',
    date: 'November 2025',
    description:
      'Designed and evaluated machine unlearning strategies for recommendation systems using both exact (SISA-based) and approximate (Gradient Ascent) methods on MovieLens 1M. Implemented shard-based retraining and loss-based forgetting to remove user influence while preserving model performance, and benchmarked trade-offs across privacy, accuracy, efficiency, and user-level recommendation stability.',
    stack: ['Python', 'NumPy', 'Pandas', 'Scikit-Learn'],
    tags: ['Privacy ML', 'Recommendation', 'Research'],
    size: 'large',
    dataset: 'MovieLens 1M',
    techniques: ["SISA", "Matrix Factorization", "SASRec(Transformers)", "Gradient Ascent", "Clustering(K - Means, SVD)"]
  },
  {
    number: '02',
    title: 'NutriVision',
    subtitle: 'AI-Powered Nutrition Scanner',
    date: 'March 2025',
    description:
      'Responsive AI web application that extracts real-time nutritional information from food images using Meta LLaMA 4 Scout via Groq API. Features glassmorphism UI and Firebase Analytics integration.',
    stack: ['HTML', 'JavaScript', 'Tailwind CSS', 'Groq API', 'Firebase'],
    tags: ['LLM', 'Vision AI', 'Web App'],
    size: 'medium',
    model: 'Meta LLaMA 4 Scout',
  },
  {
    number: '03',
    title: 'InterviewMate',
    subtitle: 'AI-Powered Interview Coach',
    date: 'February 2025',
    description:
      'End-to-end interview preparation platform that analyzes resumes (PDF/DOCX), generates personalized technical questions, delivers real-time AI feedback, and produces detailed readiness reports.',
    stack: ['Python', 'Streamlit', 'Hugging Face', 'Groq API', 'PyPDF2'],
    tags: ['AI Tool', 'NLP', 'Streamlit'],
    size: 'medium',
    models: ['LLaMA 3.3', 'Mixtral', 'Gemma 2'],
  },
];

const ProjectCard: React.FC<{ project: typeof projects[0]; delay: number; inView: boolean }> = ({
  project,
  delay,
  inView,
}) => {
  const isLarge = project.size === 'large';

  return (
    <div
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className={`relative bg-maroon/30 gold-border card-hover h-full flex flex-col ${isLarge ? 'p-8 md:p-10' : 'p-6 md:p-8'
          }`}
      >
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sandgold/30 to-transparent" />

        <div className="flex items-start justify-between mb-6">
          <span className="font-playfair text-5xl font-black text-sandgold/15 select-none leading-none">
            {project.number}
          </span>
          <div className="flex flex-wrap gap-2 justify-end">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs bg-burgundy/40 text-sandgold/70 px-2 py-1 border border-burgundy/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <h3
            className={`font-playfair font-black text-champagne leading-tight mb-1 ${isLarge ? 'text-3xl md:text-4xl' : 'text-2xl'
              }`}
          >
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="font-cormorant text-lg italic text-sandgold/70 mb-4">{project.subtitle}</p>
          )}

          <p className="font-mono text-xs text-sandgold/50 mb-4 tracking-wider">{project.date}</p>

          <p
            className={`font-cormorant text-champagne/70 leading-relaxed mb-6 ${isLarge ? 'text-lg' : 'text-base'
              }`}
          >
            {project.description}
          </p>

          {/* Extra metadata for large card */}
          {isLarge && project.techniques && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techniques.map((t) => (
                <div key={t} className="bg-wine/50 border border-sandgold/10 px-3 py-2">
                  <p className="font-mono text-xs text-champagne/50 leading-snug whitespace-nowrap">{t}</p>
                </div>
              ))}
            </div>
          )}

          {project.dataset && (
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-xs text-sandgold/40 uppercase tracking-widest">Dataset:</span>
              <span className="font-mono text-xs text-champagne/60">{project.dataset}</span>
            </div>
          )}
          {project.model && (
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-xs text-sandgold/40 uppercase tracking-widest">Model:</span>
              <span className="font-mono text-xs text-champagne/60">{project.model}</span>
            </div>
          )}
        </div>

        {/* Stack */}
        <div className="mt-auto pt-6 border-t border-sandgold/10">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs text-champagne/60 bg-wine/60 border border-champagne/10 px-2 py-1 hover:text-sandgold hover:border-sandgold/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 w-72 h-72 bg-burgundy/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 mb-16 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs text-sandgold/40 tracking-[0.3em]">03</span>
            <div className="section-divider" />
            <span className="font-mono text-xs text-sandgold/60 tracking-[0.25em] uppercase">Projects</span>
          </div>
          <h2 className="font-playfair text-5xl md:text-6xl font-black text-champagne">
            What I've <span className="italic text-sandgold">Built.</span>
          </h2>
        </div>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Large card spans full width on md */}
          <div className="md:col-span-2">
            <ProjectCard project={projects[0]} delay={100} inView={inView} />
          </div>
          {/* Two medium cards side by side */}
          <ProjectCard project={projects[1]} delay={250} inView={inView} />
          <ProjectCard project={projects[2]} delay={400} inView={inView} />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
