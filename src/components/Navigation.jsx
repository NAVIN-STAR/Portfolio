import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const Navigation = ({ activeSection, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId)
    setIsOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'glass-panel-strong border-b border-core-border backdrop-blur-xxl'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection('hero')}
            className="group flex items-center gap-2"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-glow/10 border border-accent-glow/20 text-accent-glow text-xs font-bold font-mono transition-all duration-300 group-hover:bg-accent-glow/20 group-hover:shadow-glow-sm">
              NA
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1 text-sm font-mono text-text-secondary">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-text-primary'
                    : 'hover:text-text-primary hover:bg-white/5'
                }`}
              >
                {item.label}
                {/* Glowing active indicator */}
                {activeSection === item.id && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-accent-glow shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-secondary hover:text-text-primary transition-colors p-2 rounded-lg hover:bg-white/5"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu with smooth transition */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="border-t border-core-border bg-[rgba(24,24,27,0.8)] backdrop-blur-xxl">
          <div className="px-6 py-4 space-y-1 text-sm font-mono text-text-secondary">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left py-2.5 px-3 rounded-lg transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-text-primary bg-white/5'
                    : 'hover:text-text-primary hover:bg-white/5'
                }`}
              >
                <span className="flex items-center gap-2">
                  {activeSection === item.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-glow shadow-[0_0_6px_rgba(34,211,238,0.6)]" />
                  )}
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
