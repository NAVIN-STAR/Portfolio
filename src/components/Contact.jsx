import { Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-dark-bg">
      <div className="max-w-4xl mx-auto text-center section-glass">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects, or just having a conversation about AI/ML and software engineering.
        </p>

        <div className="flex flex-col items-center gap-5 mb-8 max-w-md mx-auto">
          <a
            href="mailto:navinacharya2000@gmail.com"
            className="w-full glass-card flex items-center justify-center gap-3 border-white/25 group"
          >
            <Mail size={24} className="text-text-primary group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="text-sm text-slate-400">Email</div>
              <div className="text-white font-medium">navinacharya2000@gmail.com</div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/nabin-acharya-51755b202/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full glass-card flex items-center justify-center gap-3 border-white/25 group"
          >
            <Linkedin size={24} className="text-text-primary group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="text-sm text-slate-400">LinkedIn</div>
              <div className="text-white font-medium">Connect with me</div>
            </div>
          </a>
          
          <a
            href="https://github.com/NAVIN-STAR"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full glass-card flex items-center justify-center gap-3 border-white/25 group"
          >
            <Github size={24} className="text-text-primary group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="text-sm text-slate-400">GitHub</div>
              <div className="text-white font-medium">View my work</div>
            </div>
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-slate-400">
          <MapPin size={18} />
          <span>Bangalore, India</span>
        </div>
      </div>
    </section>
  )
}

export default Contact

