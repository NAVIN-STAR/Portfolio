import { Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: 'Carelon Global Solutions',
      role: 'Associate Software Engineer (AI/ML)',
      location: 'Bangalore',
      duration: 'Sept 2024 – Present',
      achievements: [
        'Improved RAG ingestion accuracy from 81% to 96% by building a multi-format parsing pipeline (PDF, MD, DOCX) with SentenceTransformers, achieving 75 chunks/sec throughput and enabling reliable enterprise document Q&A at scale.',
        'Reduced end-to-end RAG retrieval latency by 64% (from 125ms to 45ms) and improved retrieval precision from 71% to 93% by engineering a hybrid dense-sparse search system with Cross-Encoder reranking, directly improving answer quality for 5,000+ daily enterprise users.',
        'Architected a context-aware RAG orchestration layer reducing false-positives by 28% with 94% factual accuracy using a 4-criteria scoring framework, Jinja2, and JSON output validation.',
        'Built a high-throughput REST API processing 5,000+ daily requests under 280ms p95 latency via FastAPI, Python AsyncIO, and ThreadPoolExecutor; automated deployment with CI/CD.',
        'Accelerated new engineer onboarding by 35% (from 14 to 9 days) by redesigning 9 tightly-coupled service layers into a dependency-injected hexagonal architecture, enabling seamless LLM and vector DB provider swaps.',
        'Engineered an ETL feature pipeline using Pandas and NumPy to process 11,000+ multi-location corporate records and extract 31 time-series operational features, directly feeding the downstream demand forecasting model.',
        'Deployed a Random Forest regression model (R²: 0.9632) that fully automated demand forecasting inference across 11,000+ corporate locations, eliminating all manual intervention in the zero-touch inference pipeline.',
      ],
      tech: ['FastAPI', 'Python AsyncIO', 'LangChain', 'SentenceTransformers', 'PostgreSQL', 'ChromaDB', 'AWS (EC2, S3)', 'Docker', 'CI/CD', 'Git', 'Pandas', 'NumPy', 'Scikit-learn'],
    },
    {
      company: 'Samsung R&D Institute',
      role: 'Research Intern',
      location: 'Bangalore',
      duration: 'Nov 2022 – Jun 2023',
      achievements: [
        'Engineered a Masked CNN for segmenting complex multi-item Indian dishes, achieving 78% accuracy and improving calorie estimation reliability.',
        'Accelerated experimentation via GPU-optimized training workflows using TensorFlow, Keras and OpenCV on Linux.',
        'Co-authored an IEEE conference publication, translating advanced R&D outcomes into practical business-facing solutions.',
      ],
      tech: ['TensorFlow', 'Keras', 'OpenCV', 'Python', 'Linux', 'Deep Learning'],
    },
  ]

  return (
    <section id="experience" className="section-padding bg-dark-bg">
      <div className="max-w-5xl mx-auto section-glass">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Experience</h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-card border-white/25"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-1">{exp.role}</h3>
                  <p className="text-lg font-semibold text-text-secondary mb-2">{exp.company}</p>
                </div>
                <div className="flex flex-col md:items-end text-sm text-slate-400 mt-2 md:mt-0">
                  <div className="flex items-center gap-1 mb-1">
                    <Calendar size={14} />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="text-text-secondary leading-relaxed flex items-start">
                    <span className="text-text-primary mr-2 mt-1.5 font-bold">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {exp.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-[rgba(24,24,27,0.5)] text-text-primary rounded-full text-xs font-medium border border-core-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

