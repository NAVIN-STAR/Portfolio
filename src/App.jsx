import { useState, useEffect, useRef } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  // Scroll spy for nav highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact']
      const scrollPosition = window.scrollY + 170

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // IntersectionObserver for scroll-reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -60px 0px',
      }
    )

    // Observe all .reveal and .reveal-stagger elements
    const revealElements = document.querySelectorAll('.reveal, .reveal-stagger')
    revealElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen relative">
      {/* Ambient gradient orbs — fixed background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="ambient-orb animate-float-slow"
          style={{
            width: '500px',
            height: '500px',
            top: '10%',
            left: '-5%',
            background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)',
          }}
        />
        <div
          className="ambient-orb animate-float-slower"
          style={{
            width: '600px',
            height: '600px',
            top: '40%',
            right: '-10%',
            background: 'radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)',
          }}
        />
        <div
          className="ambient-orb animate-float-slowest"
          style={{
            width: '450px',
            height: '450px',
            bottom: '10%',
            left: '20%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />

        {/* Footer */}
        <footer className="relative px-6 md:px-12 lg:px-24 py-8 border-t border-white/5">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Nabin Acharya. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Built with <span className="text-accent-glow">♥</span> and too much coffee
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
