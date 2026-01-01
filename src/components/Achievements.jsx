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
    { metric: '40%', label: 'Reduced Inference Latency' },
    { metric: '30%', label: 'Reduced Food Wastage' },
    { metric: '40%', label: 'Cut Data Engineering Overhead' },
    { metric: '78%', label: 'Model Accuracy (Food Segmentation)' },
    { metric: '99.9%', label: 'Backend Data Reliability' },
    { metric: '60%', label: 'Faster Response Generation' },
  ]

  return (
    <section id="achievements" className="section-padding bg-[#1E1E1F]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Achievements & Impact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-[#2A2A2B] rounded-lg p-6 border border-gray-700 hover:-translate-y-1 hover:shadow-md hover:border-accent-light/40 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-gray-300">{achievement.icon}</div>
                <h3 className="text-lg font-bold text-white">{achievement.title}</h3>
              </div>
              {achievement.description && (
                <p className="text-gray-300 mb-2 leading-relaxed">{achievement.description}</p>
              )}
              {achievement.items && (
                <ul className="space-y-2">
                  {achievement.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 text-sm leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              )}
              {achievement.details && (
                <div className="mt-3 pt-3 border-t border-gray-700">
                  <p className="text-sm text-gray-400 mb-1">{achievement.details}</p>
                  <p className="text-sm text-gray-400 italic">{achievement.authors}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-[#2A2A2B] hover:border-accent-light/40 hover:-translate-y-1 rounded-lg p-8 border border-gray-700 shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Key Impact Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-1">{metric.metric}</div>
                <div className="text-sm text-gray-300">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements

