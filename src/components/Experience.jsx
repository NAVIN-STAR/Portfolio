import { Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: 'Carelon Global Solutions',
      role: 'Associate Software Engineer (AI/ML)',
      location: 'Bangalore',
      duration: 'Sept 2024 – Present',
      achievements: [
        'Built IdeaFlux, a Local LLM and Semantic Search based duplicate detection system using FAISS; improved vector retrieval accuracy and reduced inference latency by 40% through index optimization and query caching.',
        'Designed and deployed scalable REST APIs using FastAPI and Flask to serve ML models; ensured 99.9% backend data reliability across PostgreSQL and MSSQL systems.',
        'Developed ML-driven demand forecasting using Pandas, NumPy, Scikit-learn, reducing food wastage by approximately 30% across internal cafeteria operations.',
        'Automated ML preprocessing and validation pipelines to eliminate manual checks, achieving a 40% cut in data engineering overhead.',
        'Contributed Full-Stack features with Tailwind CSS & JavaScript, improving internal developer onboarding and UI workflows by 30%.',
      ],
      tech: ['FastAPI', 'Flask', 'LangChain', 'PostgreSQL', 'MSSQL', 'Swagger (OpenAPI)', 'Linux', 'Git', 'JWT Auth'],
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
    <section id="experience" className="section-padding bg-[#1E1E1F]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[#2A2A2B] rounded-lg p-6 md:p-8 shadow-sm border border-gray-700 hover:shadow-lg hover:border-accent-light/30 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  <p className="text-lg font-semibold bg-gradient-to-r from-accent-light to-accent bg-clip-text  mb-2 text-gray-400">{exp.company}</p>
                </div>
                <div className="flex flex-col md:items-end text-sm text-gray-400 mt-2 md:mt-0">
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
                  <li key={achIndex} className="text-gray-300 leading-relaxed flex items-start">
                    <span className="text-gray-400 mr-2 mt-1.5 font-bold">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-700">
                {exp.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-[#1E1E1F] text-gray-300 rounded-full text-xs font-medium border border-gray-400/40"
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

