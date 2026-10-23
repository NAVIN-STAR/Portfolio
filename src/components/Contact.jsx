import { Mail, Linkedin, Github, Phone, MapPin, ArrowUpRight } from 'lucide-react'

const Contact = () => {
  const channels = [
    {
      icon: <Mail size={18} className="text-[#C7F36B]" />,
      label: 'Direct Email',
      value: 'navinacharya2000@gmail.com',
      href: 'mailto:navinacharya2000@gmail.com',
      action: 'Send email',
      isExternal: false,
    },
    {
      icon: <Phone size={18} className="text-[#C7F36B]" />,
      label: 'Phone / WhatsApp',
      value: '+91 7019705917',
      href: 'tel:+917019705917',
      action: 'Call directly',
      isExternal: false,
    },
    {
      icon: <Linkedin size={18} className="text-[#C7F36B]" />,
      label: 'LinkedIn Profile',
      value: 'linkedin.com/in/nabin-acharya',
      href: 'https://linkedin.com/in/nabin-acharya',
      action: 'Connect on LinkedIn',
      isExternal: true,
    },
    {
      icon: <Github size={18} className="text-[#C7F36B]" />,
      label: 'GitHub Code Repositories',
      value: 'github.com/navin-star',
      href: 'https://github.com/navin-star',
      action: 'Browse GitHub',
      isExternal: true,
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0A0D0C] border-t border-[#2B332B]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 reveal-on-scroll">
        <div className="eyebrow mb-3">
          <span>// 06. CONTACT & CHANNELS</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F4F5F2] mb-3">
          Let's Connect
        </h2>
        <p className="text-[#A5ADA4] text-base max-w-2xl mb-10">
          Interested in discussing production RAG architectures, agentic pipelines, or Python backend roles? Reach out through any channel below.
        </p>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mb-8">
          {channels.map((channel, index) => (
            <a
              key={index}
              href={channel.href}
              target={channel.isExternal ? '_blank' : undefined}
              rel={channel.isExternal ? 'noopener noreferrer' : undefined}
              className="border border-[#2B332B] bg-[#111511] rounded-xl p-5 flex items-center justify-between group transition-colors duration-200 hover:border-[#C7F36B]/60 hover:bg-[#141914]"
              aria-label={`${channel.action} at ${channel.value}`}
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-2.5 rounded-lg bg-[#171C17] border border-[#2B332B] group-hover:border-[#C7F36B]/40 transition-colors shrink-0">
                  {channel.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#747D73]">
                    {channel.label}
                  </div>
                  <div className="text-sm font-semibold text-[#F4F5F2] truncate group-hover:text-[#C7F36B] transition-colors">
                    {channel.value}
                  </div>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-[#747D73] group-hover:text-[#C7F36B] transition-colors shrink-0 ml-2" />
            </a>
          ))}
        </div>

        {/* Location & Timezone note */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#747D73] pt-2">
          <MapPin size={14} className="text-[#C7F36B]" />
          <span>Based in Bangalore, India (IST / UTC+5:30) • Open to remote & hybrid engagements</span>
        </div>
      </div>
    </section>
  )
}

export default Contact
