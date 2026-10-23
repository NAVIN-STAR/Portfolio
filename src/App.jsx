import { useState, useEffect } from 'react'
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
  const [isScrolled, setIsScrolled] = useState(false)

  // Smooth scroll handler using native scrollIntoView and CSS scroll-margin-top
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      element.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start'
      })
    }
  }

  // Consolidated, throttled scroll handler for activeSection & navbar elevation
  useEffect(() => {
    const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact']
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY

          // Navbar elevation threshold
          const pastTop = currentY > 20
          setIsScrolled(prev => (prev !== pastTop ? pastTop : prev))

          // Active section scroll spy
          const scrollPosition = currentY + 140
          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i])
            if (el && scrollPosition >= el.offsetTop) {
              setActiveSection(prev => (prev !== sections[i] ? sections[i] : prev))
              break
            }
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Progressive enhancement: IntersectionObserver for scroll-triggered entrance animations
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      return // Elements remain 100% visible by default via CSS
    }

    // Enable reveal mode
    document.documentElement.classList.add('reveal-ready')

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            obs.unobserve(entry.target) // Unobserve immediately once revealed to free memory
          }
        })
      },
      {
        root: null,
        rootMargin: '0px 0px -20px 0px',
        threshold: 0.05,
      }
    )

    const elements = document.querySelectorAll('.reveal-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('reveal-ready')
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0A0D0C] text-[#F4F5F2] font-sans antialiased selection:bg-[#C7F36B] selection:text-[#0A0D0C]">
      {/* Fixed Navigation with consolidated scroll state */}
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isScrolled={isScrolled}
      />

      {/* Main Content Sections */}
      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-[#2B332B] bg-[#0A0D0C] py-8 px-6 md:px-12 text-xs font-mono text-[#747D73]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7F36B]"></span>
            <span className="text-[#A5ADA4]">Nabin Acharya</span>
            <span>—</span>
            <span>AI/ML & Python Backend Engineer</span>
          </div>
          <div>
            <span>© {new Date().getFullYear()} Nabin Acharya. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
