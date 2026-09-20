import { Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-transparent relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 100%, rgba(34,211,238,0.04) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center section-glass reveal relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold section-heading mb-4">Get In Touch</h2>
        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects, or just having a conversation about AI/ML and software engineering.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-lg mx-auto reveal-stagger">
          <a
            href="mailto:navinacharya2000@gmail.com"
            className="glass-card flex items-center gap-3 border-white/5 group"
          >
            <div className="icon-glow shrink-0 group-hover:shadow-glow-sm transition-shadow duration-300">
              <Mail size={16} />
            </div>
            <div className="text-left min-w-0">
              <div className="text-xs text-slate-400">Email</div>
              <div className="text-white font-medium text-sm truncate">navinacharya2000@gmail.com</div>
            </div>
          </a>

          <a
            href="tel:+917019705917"
            className="glass-card flex items-center gap-3 border-white/5 group"
          >
            <div className="icon-glow shrink-0 group-hover:shadow-glow-sm transition-shadow duration-300">
              <Phone size={16} />
            </div>
            <div className="text-left">
              <div className="text-xs text-slate-400">Phone</div>
              <div className="text-white font-medium text-sm">+91 7019705917</div>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/nabin-acharya"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card flex items-center gap-3 border-white/5 group"
          >
            <div className="icon-glow shrink-0 group-hover:shadow-glow-sm transition-shadow duration-300">
              <Linkedin size={16} />
            </div>
            <div className="text-left min-w-0">
              <div className="text-xs text-slate-400">LinkedIn</div>
              <div className="text-white font-medium text-sm truncate">linkedin.com/in/nabin-acharya</div>
            </div>
          </a>

          <a
            href="https://github.com/navin-star"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card flex items-center gap-3 border-white/5 group"
          >
            <div className="icon-glow shrink-0 group-hover:shadow-glow-sm transition-shadow duration-300">
              <Github size={16} />
            </div>
            <div className="text-left min-w-0">
              <div className="text-xs text-slate-400">GitHub</div>
              <div className="text-white font-medium text-sm truncate">github.com/navin-star</div>
            </div>
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
          <MapPin size={16} />
          <span>Bangalore, India</span>
        </div>
      </div>
    </section>
  )
}

export default Contact
