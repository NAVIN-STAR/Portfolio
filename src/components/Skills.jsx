import { Terminal, Brain, Cpu, Database, Server } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: <Terminal size={18} className="text-[#C7F36B]" />,
      title: 'Python & Backend Engineering',
      description: 'Production API design, modular patterns, and robust testability.',
      skills: [
        'Python 3.x',
        'FastAPI',
        'SQLModel',
        'Pytest',
        'Jinja2',
        'REST APIs',
        'Hexagonal Architecture',
        'Dependency Injection',
        'SOLID Principles',
        'Template Method Pattern',
      ],
    },
    {
      icon: <Brain size={18} className="text-[#C7F36B]" />,
      title: 'AI/ML & Retrieval Systems',
      description: 'Production RAG, dense-sparse search, and reranking pipelines.',
      skills: [
        'Production RAG',
        'Hybrid Retrieval',
        'Cross-Encoder Reranking',
        'SentenceTransformers',
        'Vector Embeddings',
        'NLP',
        'Scikit-learn',
        'Cosine & BM25 Similarity',
      ],
    },
    {
      icon: <Cpu size={18} className="text-[#C7F36B]" />,
      title: 'LLM Orchestration & Agentic Systems',
      description: 'Stateful multi-agent graphs, autonomous debate, and routing.',
      skills: [
        'LangGraph',
        'LangChain',
        'Multi-Agent Systems',
        'Conditional State Routing',
        'Server-Sent Events (SSE)',
        'Ollama & Groq Adapters',
        'Prompt Engineering',
      ],
    },
    {
      icon: <Database size={18} className="text-[#C7F36B]" />,
      title: 'Data Engineering & Machine Learning',
      description: 'High-throughput ETL, feature engineering, and tabular modeling.',
      skills: [
        'Pandas',
        'NumPy',
        'ETL Pipelines',
        'Feature Engineering',
        'Random Forest Regression',
        'Data Cleaning & Validation',
      ],
    },
    {
      icon: <Server size={18} className="text-[#C7F36B]" />,
      title: 'Infrastructure, Cloud & Delivery',
      description: 'Containerization, persistent storage, and CI/CD automation.',
      skills: [
        'Docker',
        'Docker Compose',
        'GitHub Actions CI/CD',
        'PostgreSQL',
        'ChromaDB',
        'AWS (EC2, S3)',
        'Git & Linux',
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 md:py-24 bg-[#0A0D0C] border-t border-[#2B332B]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 reveal-on-scroll">
        <div className="eyebrow mb-3">
          <span>// 04. TECHNICAL SKILLS</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F4F5F2] mb-3">
          Core Competencies
        </h2>
        <p className="text-[#A5ADA4] text-base max-w-2xl mb-10">
          Strictly grounded in shipped code, enterprise systems, and evaluated architectures. No arbitrary percentage bars.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`border border-[#2B332B] bg-[#111511] rounded-xl p-6 transition-colors duration-200 hover:border-[#3D4A3D] flex flex-col justify-between ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-1.5 rounded-md bg-[#171C17] border border-[#2B332B]">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-base text-[#F4F5F2]">
                    {category.title}
                  </h3>
                </div>
                <p className="text-xs text-[#747D73] font-mono mb-4">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="tech-tag">
                    {skill}
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

export default Skills
