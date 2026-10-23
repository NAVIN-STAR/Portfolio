import { Calendar, MapPin, Building2 } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: 'Carelon Global Solutions',
      role: 'Associate Software Engineer - AIML',
      location: 'Bangalore, India',
      duration: 'Sept 2024 – Present',
      isCurrent: true,
      summary:
        'Engineering production-scale RAG retrieval systems, agentic workflow orchestration, and resilient Python backend services.',
      achievements: [
        {
          highlight: 'RAG Ingestion Accuracy (81% → 96%)',
          description:
            'Built a multi-format document parsing pipeline (PDF, Markdown, DOCX) using SentenceTransformers, achieving high ingestion throughput and enabling reliable enterprise document Q&A at scale.',
        },
        {
          highlight: 'Retrieval Latency (-64%) & Precision (71% → 93%)',
          description:
            'Reduced end-to-end RAG retrieval latency from 125ms to 45ms and improved retrieval precision from 71% to 93% by engineering a hybrid dense-sparse search system with Cross-Encoder reranking.',
        },
        {
          highlight: 'IdeaFlux Semantic Duplicate Screening (~87.5% Triage Reduction)',
          description:
            'Architected a context-aware RAG orchestration layer for automated duplicate-idea detection, continuously screening new submissions against the institutional knowledge base — cutting manual review effort by ~87.5% and auto-resolving 350 of 400 test-set submissions, routing only the ambiguous 12.5% to human reviewers.',
        },
        {
          highlight: 'High-Throughput REST API (5,000+ daily requests)',
          description:
            'Built a high-throughput REST API processing 5,000+ daily requests under 280ms p95 latency via FastAPI, Python AsyncIO, and ThreadPoolExecutor; streamlined deployment with automated CI/CD pipelines.',
        },
        {
          highlight: 'Hexagonal Architecture & Pluggable Providers (+35% Onboarding Speed)',
          description:
            'Accelerated new engineer onboarding by 35% (from 14 to 9 days) by redesigning 9 tightly-coupled service layers into a dependency-injected hexagonal architecture, enabling seamless LLM and vector DB provider swaps with zero downstream code changes.',
        },
        {
          highlight: 'Automated Demand Forecasting (R² = 0.9632)',
          description:
            'Engineered an ETL feature pipeline (Pandas, NumPy) for 11,000+ corporate records and deployed a Random Forest regression model (R² = 0.9632), fully automating multi-location demand forecasting with zero manual intervention.',
        },
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
        'CI/CD',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 md:py-24 bg-[#0A0D0C] border-t border-[#2B332B]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 reveal-on-scroll">
        <div className="eyebrow mb-3">
          <span>// 02. CAREER & EXPERIENCE</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F4F5F2] mb-3">
          Industry Experience
        </h2>
        <p className="text-[#A5ADA4] text-base max-w-2xl mb-10">
          Professional software engineering track record focusing on enterprise AI/ML systems, latency-critical pipelines, and clean backend architecture.
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border border-[#2B332B] bg-[#111511] rounded-xl p-6 sm:p-8 lg:p-10 transition-colors duration-200 hover:border-[#3D4A3D]"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-[#2B332B]">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#C7F36B]" />
                    <span className="font-mono text-xs uppercase tracking-wider text-[#C7F36B] font-medium">
                      Current Position
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F4F5F2]">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-[#A5ADA4] font-medium mt-1">
                    <Building2 size={15} className="text-[#747D73]" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 text-xs font-mono text-[#747D73]">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={13} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Achievements Grid */}
              <div className="py-6 space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-[#747D73]">
                  Key Technical Contributions & Impact
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {exp.achievements.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="p-4 rounded-lg bg-[#171C17] border border-[#2B332B] text-sm"
                    >
                      <div className="text-[#F4F5F2] font-semibold mb-1 flex items-start gap-2">
                        <span className="text-[#C7F36B] font-mono text-xs mt-0.5">›</span>
                        <span>{item.highlight}</span>
                      </div>
                      <p className="text-[#A5ADA4] text-xs sm:text-sm pl-4 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="pt-5 border-t border-[#2B332B]">
                <div className="text-xs font-mono uppercase tracking-wider text-[#747D73] mb-3">
                  Technologies Utilized
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, techIdx) => (
                    <span key={techIdx} className="tech-tag">
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
