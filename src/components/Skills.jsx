const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'SQL'],
    },
    {
      title: 'Frameworks',
      skills: ['FastAPI', 'Flask', 'LangChain'],
    },
    {
      title: 'ML/AI',
      skills: ['LLMs', 'RAG', 'NLP', 'Scikit-learn', 'SentenceTransformers', 'Deep Learning', 'Vector DBs', 'Pandas', 'NumPy'],
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'ChromaDB', 'SQLModel'],
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS (EC2, S3)', 'Docker', 'CI/CD', 'Git', 'Linux'],
    },
    {
      title: 'Tools & Technologies',
      skills: ['Swagger (OpenAPI)', 'Postman', 'VS Code', 'Jira'],
    },
  ]

  return (
    <section id="skills" className="section-padding bg-dark-bg">
      <div className="max-w-6xl mx-auto section-glass">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card border-white/25">
              <h3 className="text-lg font-semibold text-text-primary mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-[rgba(24,24,27,0.5)] text-text-primary rounded-full text-xs font-medium border border-core-border hover:border-core-borderHighlight hover:text-text-primary transition-all"
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

