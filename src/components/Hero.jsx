import profilePhoto from '../images/profile_picture (2).jpg'

const Hero = ({ scrollToSection }) => {
  return (
    <section id="hero" className="section-padding bg-core-bg text-text-primary section-grid overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="glass-panel p-8 lg:p-10">
          <div className="flex flex-col gap-5">
            <div className="text-xs uppercase font-mono tracking-[0.3em] text-text-secondary">
              AI systems engineering
            </div>

            <div className="flex items-center gap-4 border-t border-core-border pt-6">
              <img src={profilePhoto} alt="Profile" className="w-16 h-16 rounded-3xl border border-core-border" />
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-text-secondary">Nabin Acharya</p>
                <p className="text-lg font-semibold text-text-primary">AI/ML Engineer</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

