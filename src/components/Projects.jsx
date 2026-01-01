import { Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'ChatWithPDF',
      description: 'A web application that enables users to upload PDF, TXT, and Word documents and chat with their content using Retrieval-Augmented Generation (RAG). Features document chunking, embedding-based similarity search with FAISS vector store, and contextual LLM responses. Built with FastAPI backend for asynchronous processing and a stateless chat interface.',
      techStack: ['FastAPI', 'Python', 'FAISS', 'PostgreSQL', 'Asyncio', 'JavaScript', 'Tailwind CSS', 'RAG'],
      githubUrl: 'https://github.com/NAVIN-STAR/ChatWithPDF',
    },
  ]

  return (
    <section id="projects" className="section-padding bg-[#1E1E1F]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#2A2A2B] border border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col hover:border-accent-light/50"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent-light transition-colors p-2 hover:bg-gradient-to-br hover:from-accent/20 hover:to-accent-light/20 rounded-lg"
                  aria-label="View on GitHub"
                >
                  <Github size={20} />
                </a>
              </div>
              
              <p className="text-gray-300 mb-4 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-[#1E1E1F] text-gray-300 rounded-full text-xs font-medium border border-gray-400/40"                  >
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

