import { Award, GraduationCap, FileText } from 'lucide-react'

const Achievements = () => {
  const achievements = [
    {
      icon: <GraduationCap size={24} />,
      title: 'Education Excellence',
      description: 'CGPA: 9.2/10 in Bachelor of Engineering, Information Science and Engineering',
    },
    {
      icon: <Award size={24} />,
      title: 'Certifications',
      items: [
        'Artificial Intelligence Course - Samsung Innovation Campus (Jun 2023)',
        'Beginner Machine Learning - Skillsoft, Percipio (Valid until Nov 2025)',
      ],
    },
    {
      icon: <FileText size={24} />,
      title: 'IEEE Conference Publication',
      description: 'Co-authored "Indian Food Segmentation and Calorie Estimation using Masked Convolutional Neural Networks"',
      details: 'Published Oct 2023 | DOI: 10.1109/NMITCON58196.2023.10275885',
      authors: 'Nabin Acharya, Anshuman Kumar Dwivedi, Ayush Kumar Singh',
    },
  ]

  const impactMetrics = [
    { metric: '81% → 96%', label: 'RAG Ingestion Accuracy' },
    { metric: '64%', label: 'RAG Latency Reduction' },
    { metric: '35%', label: 'Onboarding Acceleration' },
    { metric: '94%', label: 'Factual Accuracy' },
    { metric: '5000+', label: 'Daily Requests (280ms p95)' },
    { metric: '0.9632', label: 'Model R² Score' },
  ]

  return (
    <section id="achievements" className="section-padding bg-dark-bg">
      <div className="max-w-6xl mx-auto section-glass">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Achievements & Impact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="glass-card border-white/25"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-text-primary">{achievement.icon}</div>
                <h3 className="text-lg font-bold text-text-primary">{achievement.title}</h3>
              </div>
              {achievement.description && (
                <p className="text-slate-300 mb-2 leading-relaxed">{achievement.description}</p>
              )}
              {achievement.items && (
                <ul className="space-y-2">
                  {achievement.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-slate-300 text-sm leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              )}
              {achievement.details && (
                <div className="mt-3 pt-3 border-t border-white/10">
                  <p className="text-sm text-slate-400 mb-1">{achievement.details}</p>
                  <p className="text-sm text-slate-400 italic">{achievement.authors}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="glass-card border-white/25 p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Key Impact Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-text-primary mb-1">{metric.metric}</div>
                <div className="text-sm text-text-secondary">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements

