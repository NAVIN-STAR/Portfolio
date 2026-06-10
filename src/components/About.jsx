const About = () => {
  return (
    <section id="about" className="section-padding bg-dark-bg">
      <div className="max-w-5xl mx-auto section-glass">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 text-center">About Me</h2>
          <div className="space-y-4 text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto">
          <p>
            Software engineer building production-ready AI and ML systems, with a focus on retrieval architecture, vector search, and document intelligence.
            I turn complex models and data workflows into reliable, measurable products for enterprise use.
          </p>
          <p>
            Currently shaping end-to-end RAG and vector database platforms that support document ingestion, API-driven retrieval, and low-latency delivery.
            I prioritize performance, maintainability, and engineering rigor across every layer of the stack.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card">
            <h3 className="font-semibold text-text-primary mb-2">Education</h3>
            <p className="text-text-secondary">
              <span className="font-medium text-white">Bachelor of Engineering</span><br />
              Information Science and Engineering<br />
              Cambridge Institute of Technology<br />
              <span className="text-sm text-slate-400">Aug 2020 – Aug 2024 | CGPA: 9.2/10</span>
            </p>
          </div>
          <div className="glass-card">
            <h3 className="font-semibold text-text-primary mb-2">Location</h3>
            <p className="text-text-secondary">
              Bangalore, India<br />
              <span className="text-sm text-slate-400">Open to opportunities</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

