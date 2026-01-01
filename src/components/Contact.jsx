import { Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-[#1E1E1F]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects, or just having a conversation about AI/ML and software engineering.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <a
            href="mailto:navinacharya2000@gmail.com"
            className="flex items-center justify-center gap-3 p-6 bg-[#2A2A2B] rounded-lg border border-gray-700 hover:border-accent-light hover:shadow-md hover:-translate-y-1 transition-all group"
          >
            <Mail size={24} className="text-accent-light group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="text-sm text-gray-400">Email</div>
              <div className="text-white font-medium">navinacharya2000@gmail.com</div>
            </div>
          </a>

          <a
            href="tel:+917019705917"
            className="flex items-center justify-center gap-3 p-6 bg-[#2A2A2B] rounded-lg border border-gray-700 hover:border-accent-light hover:shadow-md hover:-translate-y-1 transition-all group"
          >
            <Phone size={24} className="text-accent-light group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="text-sm text-gray-400">Phone</div>
              <div className="text-white font-medium">+91 7019705917</div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/nabin-acharya-51755b202/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-6 bg-[#2A2A2B] rounded-lg border border-gray-700 hover:border-accent-light hover:shadow-md hover:-translate-y-1 transition-all group"
          >
            <Linkedin size={24} className="text-accent-light group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="text-sm text-gray-400">LinkedIn</div>
              <div className="text-white font-medium">Connect with me</div>
            </div>
          </a>

          <a
            href="https://github.com/NAVIN-STAR"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-6 bg-[#2A2A2B] rounded-lg border border-gray-700 hover:border-accent-light hover:shadow-md hover:-translate-y-1 transition-all group"
          >
            <Github size={24} className="text-accent-light group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="text-sm text-gray-400">GitHub</div>
              <div className="text-white font-medium">View my work</div>
            </div>
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-gray-400">
          <MapPin size={18} />
          <span>Bangalore, India</span>
        </div>
      </div>
    </section>
  )
}

export default Contact

