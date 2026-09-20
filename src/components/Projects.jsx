import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Multi-Agent Debate System',
      subtitle: 'LangGraph, FastAPI, Docker Compose, GitHub Actions CI',
      liveUrl: 'https://debate.nabinlabs.in',
      liveLabel: 'debate.nabinlabs.in',
      githubUrl: 'https://github.com/navin-star/Multi_Agent_Debate',
      githubLabel: 'github.com/navin-star/Multi_Agent_Debate',
      points: [
        'Designed an agentic AI debate system with 3 autonomous agents (Optimist/Critic/Judge) using Hexagonal Architecture and the Template Method pattern, orchestrated via LangGraph with conditional routing and round-based termination.',
        'Developed swappable LLM provider adapters (Ollama, Groq) behind a shared port interface for zero-code-change provider switching, validated by isolated unit tests using Dependency Injection.',
        'Shipped the system to production via Docker Compose at debate.nabinlabs.in with GitHub Actions CI, and exposed a streaming FastAPI endpoint (SSE) for real-time debate updates.',
      ],
      tech: ['LangGraph', 'FastAPI (SSE)', 'Agentic AI', 'Hexagonal Architecture', 'Docker Compose', 'GitHub Actions CI', 'Ollama Adapter', 'Groq Adapter', 'Dependency Injection'],
    },
  ]

  return (
    <section id="projects" className="section-padding bg-transparent">
      <div className="max-w-5xl mx-auto section-glass reveal">
        <h2 className="text-3xl md:text-4xl font-bold section-heading mb-8 text-center">Projects</h2>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="glass-card glow-border border-white/5">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-1">{project.title}</h3>
                  <p className="text-sm md:text-base font-medium text-text-secondary">{project.subtitle}</p>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent-glow/10 hover:bg-accent-glow/20 text-xs font-mono text-accent-glow transition-all duration-300 border border-accent-glow/20 hover:shadow-glow-sm"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                      {/* Pulsing ring */}
                      <span className="relative ml-1 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-glow opacity-50" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-glow" />
                      </span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-text-primary transition-all duration-300 border border-white/10 hover:border-white/20"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-6 reveal-stagger">
                {project.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-text-secondary leading-relaxed flex items-start text-sm md:text-base">
                    <span className="text-accent-glow mr-3 mt-1.5 text-lg leading-none">›</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="pill-glow px-3 py-1 bg-[rgba(24,24,27,0.5)] text-text-primary rounded-full text-xs font-medium border border-core-border"
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

export default Projects
