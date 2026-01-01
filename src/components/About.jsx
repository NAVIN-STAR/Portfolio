const About = () => {
  return (
    <section id="about" className="section-padding bg-[#1E1E1F]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
        <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
          <p>
            I'm a software engineer specializing in AI/ML, with a strong foundation in building production-grade 
            machine learning systems and full-stack applications. My work focuses on creating scalable solutions 
            that bridge the gap between cutting-edge research and practical business impact.
          </p>
          <p>
            Currently at Carelon Global Solutions, I've engineered systems that improved vector retrieval accuracy, 
            reduced inference latency by 40%, and cut data engineering overhead significantly. My experience spans 
            from research at Samsung R&D, where I co-authored an IEEE publication on food segmentation using deep 
            learning, to building production ML pipelines and REST APIs that serve millions of requests.
          </p>
          <p>
            I'm driven by curiosity, analytical thinking, and a commitment to writing clean, maintainable code. 
            Whether it's optimizing FAISS indices, designing RAG systems, or automating ML workflows, I approach 
            every problem with a focus on impact and scalability.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[#2A2A2B] rounded-lg border border-gray-700 hover:border-accent-light/40 hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-white mb-2">Education</h3>
            <p className="text-gray-300">
              <span className="font-medium">Bachelor of Engineering</span><br />
              Information Science and Engineering<br />
              Cambridge Institute of Technology<br />
              <span className="text-sm text-gray-400">Aug 2020 – Aug 2024 | CGPA: 9.2/10</span>
            </p>
          </div>
          <div className="p-6 bg-[#2A2A2B] rounded-lg border border-gray-700 hover:border-accent-light/40 hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-white mb-2">Location</h3>
            <p className="text-gray-300">
              Bangalore, India<br />
              <span className="text-sm text-gray-400">Open to opportunities</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

