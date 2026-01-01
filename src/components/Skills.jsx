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
      skills: ['LLMs', 'RAG', 'Deep Learning', 'NLP', 'Vector DBs', 'Pandas', 'NumPy', 'Scikit-learn'],
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MSSQL'],
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'Jira', 'Swagger', 'Linux', 'Postman', 'VS Code', 'Ollama'],
    },
  ]

  return (
    <section id="skills" className="section-padding bg-[#1E1E1F]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-[#2A2A2B] p-6 rounded-lg  hover:-translate-y-1 shadow-sm border border-gray-700 hover:shadow-lg hover:border-accent-light/30 transition-all">
              <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-[#1E1E1F] text-gray-300 rounded-full text-xs font-medium border border-gray-400/40"                  >
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

