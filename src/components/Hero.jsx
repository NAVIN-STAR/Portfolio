import { ArrowRight, Terminal, ExternalLink } from 'lucide-react'
import profilePhoto from '../images/Confident Portrait in a Modern Studio.png'

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-4rem)] pt-24 pb-16 flex items-center bg-[#0A0D0C] relative"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 w-full">
        {/* Main Hero Card Container */}
        <div className="border border-[#2B332B] bg-[#111511] rounded-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          {/* Subtle top lime line accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C7F36B]/50 to-transparent" />

          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C7F36B] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#C7F36B]">
              AI/ML & Python Backend Engineer
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headline and Core Value */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F5F2] leading-[1.18] mb-5">
                Building AI systems that work{' '}
                <span className="text-[#C7F36B]">beyond the demo.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#A5ADA4] leading-relaxed mb-6">
                Hi, I'm <strong className="text-[#F4F5F2] font-semibold">Nabin Acharya</strong>. I engineer production-oriented RAG pipelines, retrieval architectures, and autonomous agent systems backed by clean Python backend infrastructure. Focused on latency, rigorous evaluation, and high-availability enterprise services.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-8">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="btn-primary"
                >
                  <span>Explore Projects</span>
                  <ArrowRight size={16} />
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn-secondary"
                >
                  <span>Get in Touch</span>
                </button>

                <a
                  href="https://debate.nabinlabs.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono text-[#A5ADA4] hover:text-[#C7F36B] border border-[#2B332B] hover:border-[#C7F36B]/40 transition-colors bg-[#171C17]"
                  title="View live production deployment"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C7F36B]" />
                  <span>Live Demo: debate.nabinlabs.in</span>
                  <ExternalLink size={12} className="opacity-70" />
                </a>
              </div>

              {/* Technical Capabilities Metadata */}
              <div className="pt-6 border-t border-[#2B332B]">
                <div className="text-xs font-mono uppercase tracking-wider text-[#747D73] mb-3 flex items-center gap-1.5">
                  <Terminal size={12} />
                  <span>Core Engineering Focus</span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  <span className="tech-tag">Production RAG & Hybrid Retrieval</span>
                  <span className="tech-tag">LangGraph Agentic Orchestration</span>
                  <span className="tech-tag">FastAPI & Hexagonal Architecture</span>
                  <span className="tech-tag">Cross-Encoder Reranking</span>
                  <span className="tech-tag">IEEE Published Researcher</span>
                </div>
              </div>
            </div>

            {/* Right Column: Prominent Portrait & Availability Status */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
              <div className="w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[320px] flex flex-col items-center lg:items-end">
                {/* Portrait Frame */}
                <div className="w-full p-2 rounded-2xl bg-[#171C17] border border-[#2B332B] transition-all duration-300 hover:border-[#C7F36B]/60 shadow-xl group">
                  <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#0A0D0C]">
                    <img
                      src={profilePhoto}
                      alt="Nabin Acharya - AI/ML & Python Backend Engineer"
                      className="w-full h-full object-cover object-[center_20%] transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* Status Indicator Badge — Positioned neatly below the portrait */}
                <div className="mt-3.5 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#111511] border border-[#2B332B] text-xs font-mono text-[#A5ADA4] shadow-sm">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C7F36B] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C7F36B]" />
                  </span>
                  <span>Available for AI/ML Roles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
