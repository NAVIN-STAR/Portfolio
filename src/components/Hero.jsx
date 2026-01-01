import { ChevronDown } from 'lucide-react'
import profilePhoto from '../images/profile_picture (2).jpg'

const Hero = ({ scrollToSection }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding pt-24 bg-[#1E1E1F] text-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Photo */}
        <div className="mb-8 flex justify-center">
          <img 
            src={profilePhoto} 
            alt="Nabin Acharya" 
            className="w-28 h-28 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover shadow-xl ring-4 ring-accent-light/20"
          />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Nabin Acharya
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 font-medium">
          Software Engineer (AI/ML)
        </h2>

        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
          Building scalable ML systems and AI-powered solutions. Passionate about leveraging deep learning, 
          LLMs, and vector databases to solve complex engineering challenges.
        </p>

        <div className="flex justify-center gap-4 mb-12">
          <a
            href="mailto:navinacharya2000@gmail.com"
            className="px-6 py-3 border-2 border-accent-light text-white rounded-lg font-medium hover:border-accent-light hover:bg-accent-light/10 transition-all"
          >
            Get In Touch
          </a>
          <button
            onClick={() => scrollToSection('projects')}
            className="px-6 py-3 border-2 border-accent-light text-white rounded-lg font-medium hover:border-accent-light hover:bg-accent-light/10 transition-all"
          >
            View Work
          </button>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-accent-light hover:text-accent-lighter transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  )
}

export default Hero

