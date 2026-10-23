import { Award, GraduationCap, FileText, ArrowUpRight } from 'lucide-react'

const Achievements = () => {
  const achievements = [
    {
      icon: <GraduationCap size={18} className="text-[#C7F36B]" />,
      title: 'Academic Education',
      category: 'Degree',
      items: [
        'Bachelor of Engineering (BE) in Computer Science / Information Technology',
        'Cambridge Institute of Technology (Aug 2020 – Aug 2024)',
        'Academic Performance: CGPA 9.2 / 10.0',
      ],
    },
    {
      icon: <Award size={18} className="text-[#C7F36B]" />,
      title: 'Professional Certifications',
      category: 'Industry Credentials',
      items: [
        'Microsoft Certified: Azure AI Apps and Agents Developer Associate (AI-103) — Microsoft (Sept 2026)',
        'Building & Evaluating Advanced RAG Applications — DeepLearning.AI (Jul 2026)',
        'Artificial Intelligence Professional Certification — Samsung Innovation Campus (Jun 2023)',
      ],
    },
    {
      icon: <FileText size={18} className="text-[#C7F36B]" />,
      title: 'IEEE Research Publication',
      category: 'Peer-Reviewed Research',
      description:
        'Indian Food Segmentation and Calorie Estimation using Masked CNNs — IEEE NMITCON',
      details:
        'Applied computer vision for real-world nutrition estimation using instance segmentation on Indian food datasets. Published and indexed in IEEE Xplore.',
      doiUrl: 'https://doi.org/10.1109/NMITCON58196.2023.10275885',
      doiLabel: '10.1109/NMITCON58196.2023.10275885',
    },
  ]

  const metrics = [
    { value: '81% → 96%', label: 'RAG Ingestion Accuracy', detail: 'Multi-format document parsing' },
    { value: '-64%', label: 'Retrieval Latency', detail: '125ms down to 45ms' },
    { value: '~87.5%', label: 'Manual Review Cut', detail: 'IdeaFlux automated screening' },
    { value: '5,000+', label: 'Daily API Requests', detail: 'FastAPI REST under 280ms p95' },
    { value: '+35%', label: 'Onboarding Speed', detail: '14 to 9 days via Hexagonal arch' },
    { value: '0.9632', label: 'Regression R² Score', detail: 'Demand forecasting pipeline' },
  ]

  return (
    <section id="achievements" className="py-20 md:py-24 bg-[#0A0D0C] border-t border-[#2B332B]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 reveal-on-scroll">
        <div className="eyebrow mb-3">
          <span>// 05. CREDENTIALS & METRICS</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F4F5F2] mb-3">
          Achievements & Impact
        </h2>
        <p className="text-[#A5ADA4] text-base max-w-2xl mb-10">
          Recognized publications, certified technical domains, and quantitative production engineering results.
        </p>

        {/* Impact Metrics Grid */}
        <div className="border border-[#2B332B] bg-[#111511] rounded-xl p-6 sm:p-8 mb-10">
          <div className="text-xs font-mono uppercase tracking-wider text-[#747D73] mb-6">
            Quantitative Engineering Outcomes
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {metrics.map((metric, mIdx) => (
              <div key={mIdx} className="flex flex-col">
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#C7F36B] tracking-tight mb-1">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold text-[#F4F5F2] mb-0.5">
                  {metric.label}
                </div>
                <div className="text-[11px] text-[#747D73] leading-snug">
                  {metric.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="border border-[#2B332B] bg-[#111511] rounded-xl p-6 flex flex-col justify-between transition-colors duration-200 hover:border-[#3D4A3D]"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 rounded-md bg-[#171C17] border border-[#2B332B]">
                    {item.icon}
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#747D73] uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <h3 className="font-bold text-base text-[#F4F5F2]">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {item.description && (
                  <p className="text-sm font-medium text-[#F4F5F2] mb-2 leading-relaxed">
                    {item.description}
                  </p>
                )}

                {item.details && (
                  <p className="text-xs text-[#A5ADA4] mb-3 leading-relaxed">
                    {item.details}
                  </p>
                )}

                {item.items && (
                  <ul className="space-y-2.5 text-xs text-[#A5ADA4]">
                    {item.items.map((subItem, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <span className="text-[#C7F36B] font-mono mt-0.5">›</span>
                        <span className="leading-relaxed">{subItem}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {item.doiUrl && (
                <div className="pt-4 mt-4 border-t border-[#2B332B]">
                  <a
                    href={item.doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#C7F36B] hover:underline"
                    aria-label={`View publication on IEEE Xplore via DOI: ${item.doiLabel}`}
                  >
                    <span>IEEE Xplore Entry</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
