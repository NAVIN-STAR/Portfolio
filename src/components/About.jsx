import { GraduationCap, MapPin, ArrowUpRight } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 md:py-24 bg-[#0A0D0C] border-t border-[#2B332B]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 reveal-on-scroll">
        <div className="eyebrow mb-3">
          <span>// 01. PROFILE</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F4F5F2] mb-8">
          Engineering Background
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Bio */}
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#A5ADA4] leading-relaxed">
            <p>
              I am an AI/ML Engineer with a primary focus on production RAG pipelines, retrieval systems, and agentic LLM workflows. My day-to-day work centers on bridging generative models with enterprise backend infrastructure.
            </p>
            <p>
              At Carelon Global Solutions, I develop high-throughput parsing architectures, hybrid dense-sparse retrieval systems, and automated triage engines. In parallel, I independently designed and deployed a live multi-agent debate platform (
              <a
                href="https://debate.nabinlabs.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C7F36B] hover:underline inline-flex items-center gap-0.5"
              >
                <span>debate.nabinlabs.in</span>
                <ArrowUpRight size={12} />
              </a>
              ) using LangGraph, FastAPI, and swappable model adapters.
            </p>
            <p>
              My academic foundation includes an IEEE-published research paper in computer vision and deep learning, paired with formal certifications in Azure AI Agents and advanced RAG evaluations.
            </p>
          </div>

          {/* Quick Technical Specs & Education Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="border border-[#2B332B] bg-[#111511] rounded-xl p-5">
              <div className="flex items-center gap-2.5 mb-2 text-[#C7F36B]">
                <GraduationCap size={16} />
                <h3 className="font-mono text-xs uppercase tracking-wider font-semibold">
                  Education & Degree
                </h3>
              </div>
              <div className="text-sm text-[#F4F5F2] font-medium">
                Bachelor of Engineering (BE)
              </div>
              <div className="text-xs text-[#A5ADA4] mt-0.5">
                Cambridge Institute of Technology
              </div>
              <div className="text-xs font-mono text-[#747D73] mt-2">
                Aug 2020 – Aug 2024 • CGPA: 9.2 / 10.0
              </div>
            </div>

            <div className="border border-[#2B332B] bg-[#111511] rounded-xl p-5">
              <div className="flex items-center gap-2.5 mb-2 text-[#C7F36B]">
                <MapPin size={16} />
                <h3 className="font-mono text-xs uppercase tracking-wider font-semibold">
                  Location & Availability
                </h3>
              </div>
              <div className="text-sm text-[#F4F5F2] font-medium">
                Bangalore, India
              </div>
              <div className="text-xs text-[#A5ADA4] mt-0.5">
                Open to Full-Time AI/ML & Backend Roles
              </div>
              <div className="text-xs font-mono text-[#747D73] mt-2">
                navinacharya2000@gmail.com • +91 7019705917
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
