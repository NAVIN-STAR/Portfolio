import { GraduationCap, MapPin } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="section-padding bg-transparent">
      <div className="max-w-5xl mx-auto section-glass reveal">
        <h2 className="text-3xl md:text-4xl font-bold section-heading mb-6 text-center">About Me</h2>
        <div className="space-y-4 text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto">
          <p>
            AI/ML Engineer specializing in production RAG systems and agentic AI orchestration for enterprise-scale applications, with an IEEE-published research background in computer vision.
          </p>
          <p>
            Built and shipped a live multi-agent LLM system (<a href="https://debate.nabinlabs.in" target="_blank" rel="noopener noreferrer" className="text-accent-glow hover:underline transition-colors">debate.nabinlabs.in</a>) end-to-end — from architecture design through production deployment. Core stack focused on Python, LangChain, LangGraph, and FastAPI.
          </p>
        </div>

        {/* Gradient divider */}
        <div className="mt-8 mb-6 h-px bg-gradient-to-r from-transparent via-accent-glow/20 to-transparent" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal-stagger">
          <div className="glass-card">
            <div className="flex items-center gap-3 mb-3">
              <div className="icon-glow">
                <GraduationCap size={18} />
              </div>
              <h3 className="font-semibold text-text-primary text-lg">Education</h3>
            </div>
            <p className="text-text-secondary">
              <span className="font-medium text-white">Bachelor of Engineering (BE)</span><br />
              Cambridge Institute of Technology<br />
              <span className="text-sm text-slate-400">Aug 2020 – Aug 2024 | CGPA: 9.2/10</span>
            </p>
          </div>
          <div className="glass-card">
            <div className="flex items-center gap-3 mb-3">
              <div className="icon-glow">
                <MapPin size={18} />
              </div>
              <h3 className="font-semibold text-text-primary text-lg">Location & Contact</h3>
            </div>
            <p className="text-text-secondary">
              Bangalore, India<br />
              <span className="text-sm text-slate-400">+91 7019705917 | navinacharya2000@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
