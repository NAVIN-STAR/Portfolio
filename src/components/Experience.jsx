import { Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: 'Carelon Global Solutions',
      role: 'Associate Software Engineer - AIML',
      location: 'Bangalore, India',
      duration: 'Sept 2024 – Present',
      isCurrent: true,
      achievements: [
        'Improved RAG ingestion accuracy from 81% to 96% by building a multi-format parsing pipeline (PDF, MD, DOCX) with SentenceTransformers, achieving high throughput and enabling reliable enterprise document Q&A at scale.',
        'Reduced end-to-end RAG retrieval latency by 64% (125ms to 45ms) and improved retrieval precision from 71% to 93% by engineering a hybrid dense-sparse search system with Cross-Encoder reranking, boosting answer quality for enterprise document workflows.',
        'Architected a context-aware RAG orchestration layer for automated duplicate-idea detection, deployed in production to continuously screen new submissions against the existing idea base — cutting manual review effort by ~87.5% and auto-resolving 350 of 400 test-set submissions, routing only the ambiguous 12.5% to human reviewers.',
        'Built a high-throughput REST API processing 5,000+ daily requests under 280ms p95 latency via FastAPI, Python AsyncIO, and ThreadPoolExecutor; streamlined deployment with CI/CD.',
        'Accelerated new engineer onboarding by 35% (14 to 9 days), redesigning 9 tightly-coupled service layers into a dependency-injected hexagonal architecture, enabling seamless LLM and vector DB provider swaps with zero downstream code changes.',
        'Engineered an ETL feature pipeline (Pandas, NumPy) for 11,000+ corporate records and deployed a Random Forest regression model (R² = 0.9632), fully automating multi-location demand forecasting with zero manual intervention.',
      ],
      tech: [
        'Python',
        'SentenceTransformers',
        'Cross-Encoder Reranking',
        'FastAPI',
        'Python AsyncIO',
        'ThreadPoolExecutor',
        'Hexagonal Architecture',
        'Dependency Injection',
        'Pandas',
        'NumPy',
        'Scikit-learn',
        'CI/CD'
      ],
    },
  ]

  return (
    <section id="experience" className="section-padding bg-transparent">
      <div className="max-w-5xl mx-auto section-glass reveal">
        <h2 className="text-3xl md:text-4xl font-bold section-heading mb-8 text-center">Experience</h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-card border-white/5 relative"
            >
              {/* Timeline accent bar */}
              <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-gradient-to-b from-accent-glow/40 via-accent-glow/20 to-transparent rounded-full hidden md:block" />

              <div className="md:pl-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-1">{exp.role}</h3>
                    <p className="text-lg font-semibold text-text-secondary mb-2">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end text-sm text-slate-400 mt-2 md:mt-0">
                    <div className="flex items-center gap-1.5 mb-1">
                      {exp.isCurrent && <span className="accent-dot" />}
                      <Calendar size={14} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6 reveal-stagger">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-text-secondary leading-relaxed flex items-start text-sm md:text-base">
                      <span className="text-accent-glow mr-3 mt-1.5 text-lg leading-none">›</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {exp.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="pill-glow px-3 py-1 bg-[rgba(24,24,27,0.5)] text-text-primary rounded-full text-xs font-medium border border-core-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
