import { ChevronDown } from 'lucide-react'
import profilePhoto from '../images/profile_picture (2).jpg'

const Hero = ({ scrollToSection }) => {
  return (
    <section id="hero" className="section-padding bg-transparent text-text-primary section-grid overflow-hidden min-h-[calc(100vh-4rem)] flex items-center relative">
      {/* Hero-specific ambient orbs (stronger, closer) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="ambient-orb animate-float-slow"
          style={{
            width: '400px',
            height: '400px',
            top: '20%',
            right: '10%',
            background: 'radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%)',
          }}
        />
        <div
          className="ambient-orb animate-float-slower"
          style={{
            width: '350px',
            height: '350px',
            bottom: '20%',
            left: '5%',
            background: 'radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <div className="glass-panel p-8 lg:p-12">
          <div className="flex flex-col gap-6">
            {/* Tagline */}
            <div className="flex items-center gap-3">
              <span className="accent-dot" />
              <span className="text-xs uppercase font-mono tracking-[0.3em] text-text-secondary">
                Production RAG & Agentic AI Orchestration
              </span>
            </div>

            {/* Profile row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 border-t border-white/5 pt-8">
              <div className="photo-glow rounded-3xl shrink-0">
                <img
                  src={profilePhoto}
                  alt="Nabin Acharya"
                  className="w-24 h-24 rounded-3xl border border-core-border object-cover relative z-10"
                />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-2 tracking-tight">
                  Nabin Acharya
                </h1>
                <p className="text-lg font-semibold text-accent-glow mb-3">AI/ML Engineer</p>
                <p className="text-sm text-text-secondary leading-relaxed max-w-2xl">
                  Specializing in production RAG systems and agentic AI orchestration for enterprise-scale applications, with an IEEE-published research background in computer vision. Built and shipped a live multi-agent LLM system (<a href="https://debate.nabinlabs.in" target="_blank" rel="noopener noreferrer" className="text-accent-glow hover:underline transition-colors">debate.nabinlabs.in</a>) end-to-end.
                </p>
              </div>
            </div>

            {/* Stack tags */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-white/5 text-xs font-mono">
              {['Python', 'LangChain', 'LangGraph', 'FastAPI'].map((tag) => (
                <span
                  key={tag}
                  className="pill-glow px-3 py-1.5 bg-[rgba(24,24,27,0.6)] text-text-primary rounded-full border border-core-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 z-10">
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} className="animate-bounce-subtle" />
      </div>
    </section>
  )
}

export default Hero
