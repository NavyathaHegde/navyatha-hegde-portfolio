import React, { useState } from 'react';
import { Code, Github, ExternalLink, Sparkles, Layers, ArrowUpRight, CheckCircle, Info, Play, ShieldCheck, Copy, Check, Award, Gamepad2, X, Eye, Download } from 'lucide-react';
import { projects, hackathonCertificate } from '../data/portfolioData';
import { Project, CertificationItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { GamifiedPrototypePlayer } from './GamifiedPrototypePlayer';
import { CertificateModal } from './CertificateModal';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copiedCertId, setCopiedCertId] = useState<string | null>(null);
  const [showPrototypeModal, setShowPrototypeModal] = useState<boolean>(false);
  const [viewingCertificate, setViewingCertificate] = useState<CertificationItem | null>(null);

  const copyCertId = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedCertId(id);
    setTimeout(() => setCopiedCertId(null), 2000);
  };

  const hackathonCert = hackathonCertificate;

  const categories = ['All', 'Full Stack', 'Java Backend', 'Cloud & System'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#0e0f2b] relative">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Code className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Projects <span className="text-purple-400">Showcase</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Real-world enterprise systems, microservices architectures, and full-stack web applications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/50 scale-105'
                  : 'bg-[#15163a] text-slate-300 hover:text-white hover:bg-[#1f2152] border border-purple-900/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-2xl bg-[#12132e]/90 border border-purple-900/40 hover:border-purple-500/50 shadow-xl overflow-hidden group transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Card Banner */}
              <div className={`h-40 bg-gradient-to-br ${project.imagePlaceholderColor || 'from-purple-900 to-indigo-950'} p-5 flex flex-col justify-between relative overflow-hidden`}>
                
                {/* Background geometric pattern */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

                <div className="flex items-center justify-between relative z-10">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/40 backdrop-blur-md text-purple-200 border border-white/10">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Featured
                    </span>
                  )}
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Impact metric if present */}
                  {project.metrics && (
                    <div className="p-2.5 rounded-lg bg-purple-950/40 border border-purple-500/20 text-xs text-purple-200 flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{project.metrics}</span>
                    </div>
                  )}

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.slice(0, 5).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#1a1c4b] text-slate-300 border border-purple-900/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="px-1.5 py-0.5 rounded text-[11px] font-mono text-purple-400 bg-purple-950/60">
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-purple-900/30 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-300 hover:text-purple-100 hover:underline transition-colors cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Deep Dive & Schema</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {/* GitHub Link or Coming Soon indicator */}
                    <div className="relative group/btn">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#181940] hover:bg-[#22245e] text-slate-300 hover:text-white border border-purple-900/40 transition-colors flex items-center gap-1.5"
                        title={project.githubStatus === 'Coming Soon' ? 'GitHub Repo (Code Release Coming Soon)' : 'View GitHub Repository'}
                      >
                        <Github className="w-4 h-4" />
                        {project.githubStatus === 'Coming Soon' && (
                          <span className="text-[10px] font-mono text-purple-300 font-normal px-1 py-0.2 bg-purple-950/80 rounded border border-purple-500/20">
                            Coming Soon
                          </span>
                        )}
                      </a>
                    </div>

                    {/* Live Demo or Coming Soon indicator */}
                    {project.liveUrl && (
                      <div className="relative group/btn">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-purple-600/20 hover:bg-purple-600/40 text-purple-200 hover:text-white border border-purple-500/30 transition-colors flex items-center gap-1.5"
                          title={project.status === 'Coming Soon' ? 'Live Demo (Deployment Coming Soon)' : 'Open Live Application'}
                        >
                          <ArrowUpRight className="w-4 h-4" />
                          {project.status === 'Coming Soon' && (
                            <span className="text-[10px] font-mono text-amber-300 font-normal px-1 py-0.2 bg-amber-950/60 rounded border border-amber-500/20">
                              Live Soon
                            </span>
                          )}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Hackathon Prototypes & Innovation Showcase */}
        <div className="mt-20 pt-12 border-t border-purple-900/40 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>National & Regional Hackathon Prototypes</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Hackathon <span className="text-purple-400">Innovations</span>
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Rapid prototypes engineered for high-impact social problem statements in national competitions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Hack2skill: Logic Smiths */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#131438] to-[#1a1338] border border-purple-500/30 hover:border-purple-500/60 shadow-xl space-y-4 transition-all duration-300 group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-purple-400" />
                    <span>Google Cloud & Hack2skill</span>
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Team Logic Smiths</span>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    Generative AI for Youth Mental Wellness
                  </h4>
                  <div className="text-xs text-purple-300/90 font-medium mt-0.5">
                    Gen AI Exchange Hackathon 2025 by Google Cloud
                  </div>
                </div>

                {/* Verified Certificate ID Box */}
                <div className="p-3 rounded-xl bg-[#0b0c1e] border border-purple-500/30 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-purple-300 font-semibold flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Verified Certificate ID</span>
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Jan 14, 2026
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-[#141538] border border-purple-900/40 text-xs font-mono text-emerald-300">
                    <span className="truncate">2025H2S08GH-P601607</span>
                    <button
                      onClick={() => copyCertId('2025H2S08GH-P601607')}
                      className="p-1 text-slate-400 hover:text-purple-300 transition-colors ml-2 shrink-0 cursor-pointer"
                      title="Copy Certificate ID"
                    >
                      {copiedCertId === '2025H2S08GH-P601607' ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-purple-950/50 border border-purple-500/20 space-y-1 text-xs">
                  <strong className="text-purple-300 block">Problem Statement:</strong>
                  <p className="text-slate-300 leading-relaxed italic">
                    "Design an AI-powered, confidential, and empathetic mental wellness solution that supports and guides youth in overcoming stigma and accessing help."
                  </p>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  A confidential, empathetic, and accessible mental health support platform for young adults in India. Leveraging <strong>Google Cloud’s generative AI</strong>, the solution provides a safe space for students and youth to express their concerns without fear of judgment, while receiving personalized guidance, emotional support, and resources. Fosters culturally sensitive conversations, offering AI-powered chat support, self-help modules, and curated wellness content.
                </p>

                {/* View / Download Hackathon Certificate Button */}
                <div className="pt-2">
                  <button
                    onClick={() => setViewingCertificate(hackathonCert)}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-purple-600/30 hover:bg-purple-600 text-purple-200 hover:text-white border border-purple-500/40 transition-all cursor-pointer shadow-lg"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-1.5">
                {['Google Cloud GenAI', 'Confidential Support', 'Culturally Sensitive NLP', 'Youth Mental Wellness', 'Hack2skill'].map((t, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded text-[11px] font-mono bg-purple-900/30 text-purple-200 border border-purple-500/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* SIH 2025: Gamified Learning Platform */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#101438] to-[#122238] border border-indigo-500/30 hover:border-indigo-500/60 shadow-xl space-y-4 transition-all duration-300 group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1.5">
                    <Gamepad2 className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Smart India Hackathon (SIH) 2025</span>
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Game Development Theme</span>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    Gamified Learning Platform for Rural Education (Empathy Field)
                  </h4>
                  <div className="text-xs text-indigo-300/90 font-medium mt-0.5">
                    Interactive 2D Agricultural Coding & Empathy Quest Prototype
                  </div>
                </div>

                {/* Video Prototype Interactive CTA */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-indigo-950/80 to-purple-950/80 border border-indigo-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>Working Prototype Video & Simulation</span>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      Watch & play through the 7 real gamified levels (loops, conditionals, exception handling).
                    </p>
                  </div>

                  <button
                    onClick={() => setShowPrototypeModal(true)}
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-900/40 transition-all cursor-pointer shrink-0"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Launch Prototype Player</span>
                  </button>
                </div>

                <div className="p-3 rounded-xl bg-indigo-950/50 border border-indigo-500/20 space-y-1 text-xs">
                  <strong className="text-indigo-300 block">Problem Statement:</strong>
                  <p className="text-slate-300 leading-relaxed italic">
                    "Develop interactive gamification systems to improve STEM and literacy engagement for rural students with low-bandwidth constraints."
                  </p>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  An interactive educational game environment (<strong>Empathy Field</strong>) teaching algorithmic thinking and Python foundations. Features team initialization, iterative rice planting loops, soil hydration sprinklers, crop harvest conditionals, village community feasts, and resilient <code>try / except</code> error recovery.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-1.5">
                {['Smart India Hackathon', 'Gamified STEM', 'Empathy Field', 'Python Logic', 'Low-Bandwidth UX'].map((t, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded text-[11px] font-mono bg-indigo-900/30 text-indigo-200 border border-indigo-500/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Gamified Learning Platform Prototype Modal */}
        {showPrototypeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0c0d24] border border-indigo-500/40 shadow-2xl p-6 sm:p-8 space-y-6">
              
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-indigo-900/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-300">
                    <Gamepad2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Empathy Field — Prototype Walkthrough & Simulation
                    </h3>
                    <p className="text-xs text-indigo-300">
                      Smart India Hackathon 2025 • Interactive Gameplay & Code Demonstration
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setShowPrototypeModal(false)}
                  className="p-2 rounded-xl bg-[#141538] hover:bg-[#1f2154] text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Close Walkthrough"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Player Component */}
              <GamifiedPrototypePlayer onClose={() => setShowPrototypeModal(false)} />

            </div>
          </div>
        )}

        {/* Modal deep dive */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        {/* Certificate Modal */}
        <CertificateModal
          certificate={viewingCertificate}
          onClose={() => setViewingCertificate(null)}
        />

      </div>
    </section>
  );
};
