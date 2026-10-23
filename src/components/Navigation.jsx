import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navigation = ({ activeSection, scrollToSection, isScrolled = false }) => {
  const [isOpen, setIsOpen] = useState(false)

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled
          ? 'bg-[#0A0D0C]/85 backdrop-blur-md border-b border-[#2B332B] shadow-md shadow-black/30'
          : 'bg-transparent border-b border-transparent'
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
        {/* Brand */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2.5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7F36B] rounded-lg p-1"
          aria-label="Scroll to top of page"
        >
          <span className="flex items-center justify-center w-7 h-7 rounded bg-[#171C17] border border-[#2B332B] font-mono text-xs font-semibold text-[#C7F36B] transition-colors group-hover:border-[#C7F36B]/60">
            NA
          </span>
          <span className="font-mono text-sm font-medium tracking-tight text-[#F4F5F2] group-hover:text-[#C7F36B] transition-colors">
            nabin<span className="text-[#747D73]">.lab</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 font-mono text-xs text-[#A5ADA4]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-1.5 rounded transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C7F36B] ${
                  isActive
                    ? 'text-[#F4F5F2] font-medium'
                    : 'hover:text-[#F4F5F2] hover:bg-[#111511]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#C7F36B] rounded-full transition-all duration-300" />
                )}
              </button>
            )
          })}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center w-9 h-9 rounded bg-[#111511] border border-[#2B332B] text-[#A5ADA4] hover:text-[#F4F5F2] hover:border-[#3D4A3D] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7F36B]"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="mobile-navigation-menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          id="mobile-navigation-menu"
          className="md:hidden border-b border-[#2B332B] bg-[#0E130E] px-5 py-3 space-y-1 font-mono text-sm shadow-xl"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center justify-between w-full px-3 py-2 rounded text-left transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C7F36B] ${
                  isActive
                    ? 'bg-[#171C17] text-[#C7F36B] font-medium'
                    : 'text-[#A5ADA4] hover:bg-[#111511] hover:text-[#F4F5F2]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span>{item.label}</span>
                {isActive && <span className="text-xs text-[#C7F36B]">●</span>}
              </button>
            )
          })}
        </div>
      )}
    </nav>
  )
}

export default Navigation
