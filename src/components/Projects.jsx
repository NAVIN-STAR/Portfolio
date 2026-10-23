import { Github, ArrowUpRight, CheckCircle2, Cpu } from 'lucide-react'

const Projects = () => {
  const caseStudies = [
    {
      id: 'multi-agent-debate',
      title: 'Multi-Agent Debate System',
      category: 'Autonomous Multi-Agent AI & Distributed Backend',
      type: 'Production Open-Source System',
      liveUrl: 'https://debate.nabinlabs.in',
      liveLabel: 'debate.nabinlabs.in',
      githubUrl: 'https://github.com/navin-star/Multi_Agent_Debate',
      githubLabel: 'navin-star/Multi_Agent_Debate',
      summary:
        'An autonomous multi-agent consensus engine designed to eliminate single-model hallucinations and unilateral bias through structured adversarial debate.',
      problem:
        'Standard single-prompt LLM interactions often produce one-sided hallucinations and lack self-correcting critique mechanisms. Hardcoded sequential chains fail to terminate intelligently or dynamically evaluate argument cogency.',
      architecture:
        'Built with LangGraph state graphs orchestrating 3 autonomous personas: an Optimist agent arguing pro, a Critic agent challenging premises, and an impartial Judge agent weighing argument validity against predefined rubrics and issuing round-based termination decisions.',
      keyDecisions: [
        'Hexagonal Architecture: Decoupled domain debate logic from external LLM infrastructure through shared port interfaces.',
        'Zero-Code-Change Model Swapping: Implemented pluggable Ollama (local) and Groq (cloud) provider adapters with runtime Dependency Injection.',
        'Real-time Streaming: Implemented FastAPI Server-Sent Events (SSE) to push token-level agent deliberations to the client with sub-100ms first-token latency.',
        'CI/CD & Containerization: Shipped via Docker Compose with automated GitHub Actions testing and linting pipelines.',
      ],
      outcomes: [
        'Shipped live to production at debate.nabinlabs.in.',
        'Demonstrated automated consensus convergence across multi-turn debates.',
        'Complete test suite with mock adapters ensuring 100% deterministic CI testing.',
      ],
      tech: [
        'LangGraph',
        'FastAPI (SSE)',
        'Agentic AI',
        'Hexagonal Architecture',
        'Docker Compose',
        'GitHub Actions CI',
        'Ollama Adapter',
        'Groq Adapter',
        'Dependency Injection',
        'Python 3.11',
      ],
      diagram: 'tri-agent',
    },
    {
      id: 'enterprise-rag-pipeline',
      title: 'Enterprise Document Intelligence & Hybrid RAG',
      category: 'High-Throughput Ingestion & Retrieval Engineering',
      type: 'Enterprise Production System (Carelon)',
      summary:
        'A resilient enterprise document ingestion and hybrid retrieval architecture for multi-format knowledge bases serving high-precision Q&A.',
      problem:
        'Heterogeneous enterprise files (PDF tables, DOCX headers, Markdown documents) suffered from 81% ingestion accuracy due to parser fragmentation, while standard dense vector search suffered high retrieval latency (125ms) and poor keyword precision (71%).',
      architecture:
        'Engineered an asynchronous multi-stage parsing pipeline leveraging SentenceTransformers for dense semantic representation combined with BM25 sparse keyword indices, followed by a Cross-Encoder reranking pass to re-score candidate chunks before LLM synthesis.',
      keyDecisions: [
        'Hybrid Dense-Sparse Fusion: Merged semantic vector similarity with lexical BM25 matching to handle specialized domain terminology and acronyms.',
        'Cross-Encoder Reranker: Applied a localized cross-encoder stage on top-k candidates, filtering out false-positive vector neighbors prior to context assembly.',
        'Multi-Format Streaming Parser: Standardized custom chunking strategies per document MIME type with metadata extraction.',
      ],
      outcomes: [
        'Ingestion accuracy elevated from 81% to 96% across complex enterprise documents.',
        'End-to-end retrieval latency slashed by 64% (from 125ms to 45ms).',
        'Retrieval precision boosted from 71% to 93%, directly improving final response truthfulness.',
      ],
      tech: [
        'Hybrid Retrieval',
        'Cross-Encoder Reranking',
        'SentenceTransformers',
        'BM25 Sparse Search',
        'Vector DB',
        'FastAPI',
        'Document Ingestion',
        'Python AsyncIO',
      ],
      diagram: null,
    },
    {
      id: 'ideaflux-duplicate-detection',
      title: 'IdeaFlux: Context-Aware Semantic Duplicate Detection',
      category: 'Decision Intelligence & Automated Workflow Screening',
      type: 'Enterprise Production System (Carelon)',
      summary:
        'A continuous screening and triage system detecting duplicate innovation submissions against historical corporate repositories.',
      problem:
        'Managing thousands of incoming employee proposals required exhaustive human triage to filter out redundant submissions, creating a severe operational bottleneck in review cycles.',
      architecture:
        'Architected a context-aware RAG screening engine that embeds novel submissions, retrieves semantic neighbors from the institutional corpus, evaluates contextual overlap against calibrated thresholds, and generates structured similarity rationales.',
      keyDecisions: [
        'Contextual Screening Engine: Moved beyond cosine distance alone by prompting a verified evaluation model with retrieved candidate pairs to confirm actual novelty.',
        'Human-in-the-Loop Triage: Designed a three-tier decision funnel (Definite Duplicate, Ambiguous Edge Case, Novel Idea) routing only uncertain cases to humans.',
      ],
      outcomes: [
        'Cut manual review workload by ~87.5% across production workloads.',
        'Auto-resolved 350 out of 400 test-set submissions without human intervention.',
        'Successfully deployed to continuously screen incoming enterprise proposals.',
      ],
      tech: [
        'Context-Aware RAG',
        'Semantic Embeddings',
        'Automated Screening',
        'Human-in-the-Loop',
        'Decision Logic',
        'FastAPI',
        'Enterprise Knowledge Base',
      ],
      diagram: null,
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#0A0D0C] border-t border-[#2B332B]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-12 reveal-on-scroll">
          <div className="eyebrow mb-3">
            <span>// 03. CASE STUDIES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F4F5F2] mb-3">
            Featured Technical Projects
          </h2>
          <p className="text-[#A5ADA4] text-base max-w-2xl">
            In-depth architecture, technical decisions, and verifiable outcomes across agentic orchestration, high-precision RAG systems, and backend infrastructure.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-10">
          {caseStudies.map((project, index) => (
            <article
              key={project.id}
              className={`reveal-on-scroll stagger-${index + 1} border border-[#2B332B] bg-[#111511] rounded-xl p-6 sm:p-8 lg:p-10 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#3D4A3D] hover:shadow-[0_12px_28px_-8px_rgba(0,0,0,0.6)] focus-within:border-[#C7F36B]/50`}
            >
              {/* Header Bar */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-[#2B332B]">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="font-mono text-xs text-[#C7F36B] uppercase tracking-wider font-medium">
                      {project.category}
                    </span>
                    <span className="text-[#747D73] text-xs">•</span>
                    <span className="font-mono text-xs text-[#747D73]">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F4F5F2]">
                    {project.title}
                  </h3>
                </div>

                {/* Action Links */}
                {(project.liveUrl || project.githubUrl) && (
                  <div className="flex items-center gap-3 shrink-0 pt-1">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium text-[#0A0D0C] bg-[#C7F36B] hover:bg-[#D6F78A] transition-colors focus-visible:ring-2 focus-visible:ring-[#C7F36B]"
                        aria-label={`Visit live demo for ${project.title}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0A0D0C]" />
                        <span>Live Demo</span>
                        <ArrowUpRight size={13} className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium text-[#F4F5F2] bg-[#171C17] border border-[#2B332B] hover:border-[#C7F36B]/50 transition-colors focus-visible:ring-2 focus-visible:ring-[#C7F36B]"
                        aria-label={`View source code for ${project.title} on GitHub`}
                      >
                        <Github size={13} />
                        <span>Source</span>
                        <ArrowUpRight size={13} className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Architecture Diagram for Multi-Agent System */}
              {project.diagram === 'tri-agent' && (
                <div className="my-6 p-4 rounded-lg bg-[#0E130E] border border-[#1F261F]">
                  <div className="text-[11px] font-mono text-[#747D73] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Cpu size={12} className="text-[#C7F36B]" />
                    <span>LangGraph Agent State Routing Architecture</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                    <div className="border border-[#2B332B] bg-[#171C17] rounded p-3">
                      <div className="text-[#C7F36B] font-semibold mb-1 flex items-center justify-between">
                        <span>Optimist Agent</span>
                        <span className="text-[10px] text-[#747D73]">Node 1</span>
                      </div>
                      <p className="text-[11px] text-[#A5ADA4] leading-relaxed">
                        Formulates affirmative thesis, cites premises, responds to counterarguments.
                      </p>
                    </div>

                    <div className="border border-[#2B332B] bg-[#171C17] rounded p-3">
                      <div className="text-[#F4F5F2] font-semibold mb-1 flex items-center justify-between">
                        <span>Critic Agent</span>
                        <span className="text-[10px] text-[#747D73]">Node 2</span>
                      </div>
                      <p className="text-[11px] text-[#A5ADA4] leading-relaxed">
                        Stress-tests logical gaps, detects confirmation bias, presents counter-evidence.
                      </p>
                    </div>

                    <div className="border border-[#2B332B] bg-[#171C17] rounded p-3">
                      <div className="text-[#C7F36B] font-semibold mb-1 flex items-center justify-between">
                        <span>Judge Agent</span>
                        <span className="text-[10px] text-[#747D73]">Evaluator</span>
                      </div>
                      <p className="text-[11px] text-[#A5ADA4] leading-relaxed">
                        Applies consensus rubrics, checks round limit, routes to next turn or terminates.
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#1F261F] flex items-center justify-between text-[11px] font-mono text-[#747D73]">
                    <span>SSE Streaming Gateway ➔ Client</span>
                    <span>Hexagonal Port Interface ➔ Ollama / Groq</span>
                  </div>
                </div>
              )}

              {/* Structured Body: Problem / Approach / Decisions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 text-sm">
                <div className="space-y-3">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#F4F5F2] font-semibold flex items-center gap-1.5">
                    <span className="text-[#C7F36B]">01.</span> The Challenge
                  </h4>
                  <p className="text-[#A5ADA4] leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#F4F5F2] font-semibold flex items-center gap-1.5">
                    <span className="text-[#C7F36B]">02.</span> System Approach
                  </h4>
                  <p className="text-[#A5ADA4] leading-relaxed">
                    {project.architecture}
                  </p>
                </div>
              </div>

              {/* Key Technical Decisions */}
              <div className="my-6 pt-5 border-t border-[#2B332B]">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#F4F5F2] font-semibold mb-3 flex items-center gap-1.5">
                  <span className="text-[#C7F36B]">03.</span> Architecture & Implementation Highlights
                </h4>
                <ul className="space-y-2 text-sm">
                  {project.keyDecisions.map((decision, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-[#A5ADA4]">
                      <span className="text-[#C7F36B] font-mono text-xs mt-1 shrink-0">›</span>
                      <span>{decision}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verified Outcomes */}
              <div className="my-6 pt-5 border-t border-[#2B332B]">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#C7F36B] font-semibold mb-3 flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-[#C7F36B]" />
                  <span>Verified Outcomes & Metrics</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.outcomes.map((outcome, oIdx) => (
                    <div
                      key={oIdx}
                      className="p-3 rounded-lg bg-[#171C17] border border-[#2B332B] text-xs font-mono text-[#F4F5F2] leading-relaxed"
                    >
                      {outcome}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Badges */}
              <div className="pt-5 border-t border-[#2B332B] flex flex-wrap gap-2">
                {project.tech.map((techItem, tIdx) => (
                  <span key={tIdx} className="tech-tag">
                    {techItem}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
