import { Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Document Chat App',
      subtitle: 'FastAPI, PostgreSQL, ChromaDB, LangChain, JWT Auth',
      linkLabel: 'Project Link',
      linkUrl: 'https://github.com/NAVIN-STAR/ChatWithPDF',
      points: [
        'Implemented a GenAI-powered RAG backend supporting 5+ document formats (PDF, DOCX, TXT, etc.) with contextual chunking and semantic search using LangChain, ChromaDB, FAISS.',
        'Achieved 60% faster response generation with asynchronous FastAPI endpoints and optimized chunk-based vector indexing, secured with JWT access + refresh tokens.',
        'Delivered a full-stack conversational interface using HTML, JavaScript, Tailwind CSS with persistent chat history, ensuring scalable document-aware interactions.',
      ],
      tech: ['FastAPI', 'LangChain', 'ChromaDB', 'FAISS', 'PostgreSQL', 'JWT Auth', 'Tailwind', 'Async APIs'],
    },
  ]

  return (
    <section id="projects" className="section-padding bg-dark-bg">
      <div className="max-w-5xl mx-auto section-glass">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Projects</h2>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="glass-card border-white/25">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-1">{project.title}</h3>
                  <p className="text-lg font-semibold text-text-secondary mb-2">{project.subtitle}</p>
                </div>
                <a
                  href={project.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-mono uppercase tracking-[0.2em] text-text-primary hover:text-white transition-colors"
                >
                  {project.linkLabel}
                </a>
              </div>

              <ul className="space-y-3 mb-6">
                {project.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-text-secondary leading-relaxed flex items-start">
                    <span className="text-text-primary mr-2 mt-1.5 font-bold">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {project.tech.map((tech, techIndex) => (
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

export default Projects

