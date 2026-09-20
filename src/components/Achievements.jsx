import { Award, GraduationCap, FileText } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

// Animated counter hook
const useCounter = (end, duration = 1500, shouldStart = false) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return

    // Parse number from string like "81% → 96%", "64%", "~87.5%", "5,000+", "35%", "0.9632"
    const numStr = end.replace(/[^0-9.]/g, '')
    const target = parseFloat(numStr)
    if (isNaN(target) || target === 0) {
      setCount(0)
      return
    }

    const isDecimal = numStr.includes('.') && target < 10
    const startTime = performance.now()

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = eased * target

      setCount(isDecimal ? parseFloat(current.toFixed(4)) : Math.floor(current))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, shouldStart])

  // Format back to display string
  const numStr = end.replace(/[^0-9.]/g, '')
  const target = parseFloat(numStr)
  const isDecimal = numStr.includes('.') && target < 10

  // Reconstruct the original format with the animated number
  const formatted = isDecimal ? count.toFixed(4) : count.toLocaleString()
  return end.replace(numStr, formatted)
}

const MetricCard = ({ metric, label }) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const animatedValue = useCounter(metric, 1500, isVisible)

  return (
    <div ref={ref} className="text-center group">
      <div className="text-2xl md:text-3xl font-bold text-accent-glow mb-1 transition-transform duration-300 group-hover:scale-110">
        {animatedValue}
      </div>
      <div className="text-xs md:text-sm text-text-secondary">{label}</div>
    </div>
  )
}

const Achievements = () => {
  const achievements = [
    {
      icon: <GraduationCap size={18} />,
      title: 'Education',
      description: 'Bachelor of Engineering (BE) — Cambridge Institute of Technology',
      details: 'Aug 2020 – Aug 2024 | CGPA: 9.2/10',
    },
    {
      icon: <Award size={18} />,
      title: 'Certifications & Training',
      items: [
        'Microsoft Certified: Azure AI Apps and Agents Developer Associate (AI-103) — Microsoft (Sept 2026)',
        'Building & Evaluating Advanced RAG Applications — DeepLearning.AI (Jul 2026)',
        'Artificial Intelligence Professional Certification — Samsung Innovation Campus (Jun 2023)',
      ],
    },
    {
      icon: <FileText size={18} />,
      title: 'Publications',
      description: 'Indian Food Segmentation and Calorie Estimation using Masked CNNs — IEEE NMITCON',
      details: 'Applied computer vision for real-world nutrition estimation using instance segmentation on Indian food datasets. | DOI: 10.1109/NMITCON58196.2023.10275885',
      doiUrl: 'https://doi.org/10.1109/NMITCON58196.2023.10275885',
    },
  ]

  const impactMetrics = [
    { metric: '81→96%', label: 'RAG Ingestion Accuracy' },
    { metric: '64%', label: 'Latency Reduction' },
    { metric: '87.5%', label: 'Manual Review Cut' },
    { metric: '5000+', label: 'Daily API Requests' },
    { metric: '35%', label: 'Onboarding Speed-up' },
    { metric: '0.9632', label: 'R² Score' },
  ]

  return (
    <section id="achievements" className="section-padding bg-transparent">
      <div className="max-w-6xl mx-auto section-glass reveal">
        <h2 className="text-3xl md:text-4xl font-bold section-heading mb-8 text-center">Achievements & Impact</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8 reveal-stagger">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="glass-card border-white/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-glow">
                  {achievement.icon}
                </div>
                <h3 className="text-base font-bold text-text-primary">{achievement.title}</h3>
              </div>
              {achievement.description && (
                <p className="text-slate-300 mb-2 leading-relaxed text-sm">{achievement.description}</p>
              )}
              {achievement.items && (
                <ul className="space-y-2">
                  {achievement.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-slate-300 text-sm leading-relaxed flex items-start">
                      <span className="text-accent-glow mr-2 mt-0.5">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {achievement.details && (
                <div className="mt-3 pt-3 border-t border-white/5">
                  <p className="text-sm text-slate-400 mb-1">{achievement.details}</p>
                  {achievement.doiUrl && (
                    <a
                      href={achievement.doiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-accent-glow hover:underline transition-colors"
                    >
                      View DOI →
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Impact Metrics with animated counters */}
        <div className="glass-card border-white/5 p-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">Key Impact Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {impactMetrics.map((item, index) => (
              <MetricCard key={index} metric={item.metric} label={item.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
