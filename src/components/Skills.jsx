import { Code2, Brain, Layers, Hexagon, Database, Cloud } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 size={18} />,
      title: 'Languages',
      skills: ['Python', 'SQL'],
    },
    {
      icon: <Brain size={18} />,
      title: 'AI/ML & Data Science',
      skills: ['LLMs & RAG', 'Agentic AI', 'NLP', 'Scikit-learn', 'SentenceTransformers', 'Pandas', 'NumPy'],
    },
    {
      icon: <Layers size={18} />,
      title: 'Frameworks & Orchestration',
      skills: ['LangGraph', 'LangChain', 'FastAPI', 'SQLModel', 'Pytest', 'Jinja2'],
    },
    {
      icon: <Hexagon size={18} />,
      title: 'Architecture & Design',
      skills: ['Hexagonal Architecture', 'Dependency Injection', 'REST API', 'SOLID Principles', 'Design Patterns (Template Method)'],
    },
    {
      icon: <Database size={18} />,
      title: 'Databases & Vector Stores',
      skills: ['PostgreSQL', 'ChromaDB'],
    },
    {
      icon: <Cloud size={18} />,
      title: 'Cloud & DevOps',
      skills: ['AWS (EC2, S3)', 'Docker', 'Git', 'CI/CD'],
    },
  ]

  return (
    <section id="skills" className="section-padding bg-transparent">
      <div className="max-w-6xl mx-auto section-glass reveal">
        <h2 className="text-3xl md:text-4xl font-bold section-heading mb-8 text-center">Skills & Technologies</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-glow">
                  {category.icon}
                </div>
                <h3 className="text-base font-semibold text-text-primary">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="pill-glow px-3 py-1.5 bg-[rgba(24,24,27,0.5)] text-text-primary rounded-full text-xs font-medium border border-core-border"
                  >
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
