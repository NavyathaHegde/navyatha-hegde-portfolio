import React, { useEffect } from 'react';
import { X, Github, ExternalLink, CheckCircle2, Layers, Cpu, Database, Award, ArrowRight, GitFork, Calculator, ShieldCheck, Clock } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      {/* Backdrop click handler */}
      <div className="fixed inset-0" onClick={onClose}></div>

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#0f1026] border border-purple-500/40 shadow-2xl shadow-purple-950/80 overflow-hidden z-10 my-auto">
        
        {/* Header gradient banner */}
        <div className={`h-28 sm:h-32 bg-gradient-to-r ${project.imagePlaceholderColor || 'from-purple-900 to-indigo-900'} p-6 flex flex-col justify-end relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-slate-300 hover:text-white hover:bg-black/80 border border-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 flex-wrap">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-purple-200 text-xs font-semibold">
              <Layers className="w-3.5 h-3.5" />
              <span>{project.category}</span>
            </div>
            {project.status === 'Coming Soon' && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/70 backdrop-blur-sm border border-amber-500/30 text-amber-300 text-xs font-semibold">
                <Clock className="w-3 h-3" />
                <span>Repo & Live Deployment: Coming Soon</span>
              </div>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Title & Tagline */}
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-purple-300 font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Metrics highlight if present */}
          {project.metrics && (
            <div className="p-3.5 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center gap-3">
              <Award className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-purple-100">
                {project.metrics}
              </span>
            </div>
          )}

          {/* Detailed Overview */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider">
              Project Overview & Architecture
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Entity & Relationship Model if available (e.g. OrderFlow API) */}
          {project.entityModel && (
            <div className="space-y-4 pt-2 border-t border-purple-900/40">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2">
                  <Database className="w-4 h-4 text-amber-400" />
                  <span>JPA Entity & Relational Architecture</span>
                </h4>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-500/30">
                  Explicit Junction Pattern
                </span>
              </div>

              {/* Entities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.entityModel.entities.map((ent, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#141638] border border-purple-900/50 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs sm:text-sm text-purple-200 font-mono">@{ent.name}</span>
                      <span className="text-[10px] text-slate-400">{ent.desc}</span>
                    </div>
                    <p className="text-[11px] font-mono text-slate-300 bg-[#0c0d24] p-1.5 rounded border border-purple-950">
                      {ent.fields}
                    </p>
                  </div>
                ))}
              </div>

              {/* Relational Table */}
              <div className="rounded-xl border border-purple-900/50 overflow-hidden bg-[#10122e]">
                <div className="px-3 py-2 bg-purple-950/60 border-b border-purple-900/50 text-xs font-bold text-purple-300 flex items-center gap-1.5">
                  <GitFork className="w-3.5 h-3.5" />
                  <span>Entity Relationships & Multiplicity</span>
                </div>
                <div className="divide-y divide-purple-950 text-xs">
                  {project.entityModel.relationships.map((rel, idx) => (
                    <div key={idx} className="p-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 hover:bg-purple-950/20">
                      <div className="flex items-center gap-2 font-mono">
                        <span className="text-purple-300 font-semibold">{rel.from}</span>
                        <span className="px-1.5 py-0.5 rounded bg-purple-900/40 text-purple-200 text-[10px] font-bold border border-purple-500/20">{rel.type}</span>
                        <span className="text-indigo-300 font-semibold">{rel.to}</span>
                      </div>
                      <span className="text-slate-300 text-[11px] italic">{rel.meaning}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cascading & Zero Trust Calculations */}
              {project.entityModel.cascades && (
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-purple-950/50 to-indigo-950/50 border border-purple-500/30 space-y-1.5">
                  <div className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Cascade Persistence (CascadeType.ALL)</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.entityModel.cascades}
                  </p>
                </div>
              )}

              {project.entityModel.businessLogic && (
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-950/40 to-orange-950/40 border border-amber-500/30 space-y-1.5">
                  <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                    <Calculator className="w-4 h-4 text-amber-400" />
                    <span>Server-Side Financial Computation Engine</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.entityModel.businessLogic}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Architecture Highlights if any */}
          {project.architectureHighlights && project.architectureHighlights.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-indigo-400" />
                <span>Architecture Highlights</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.architectureHighlights.map((arch, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-[#151638] border border-purple-900/40 text-xs text-slate-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    <span>{arch}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider">
              Key Engineering Features
            </h4>
            <div className="space-y-2">
              {project.keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-slate-300 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack tags */}
          <div className="space-y-2 pt-2 border-t border-purple-900/30">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Technologies & Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[#171940] text-purple-200 border border-purple-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Action Links */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-purple-900/30">
            <div className="text-xs text-slate-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{project.githubStatus === 'Coming Soon' ? 'Code repository releasing soon' : 'Repository available on GitHub'}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
              >
                Close
              </button>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#1a1c4b] hover:bg-[#252869] text-white border border-purple-500/40 transition-all relative group"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
                {project.githubStatus === 'Coming Soon' && (
                  <span className="text-[10px] font-mono text-purple-300 bg-purple-950/80 px-1.5 py-0.5 rounded border border-purple-500/30">
                    Coming Soon
                  </span>
                )}
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-900/40 transition-all"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                  {project.status === 'Coming Soon' && (
                    <span className="text-[10px] font-mono text-amber-200 bg-amber-950/80 px-1.5 py-0.5 rounded border border-amber-500/30">
                      Coming Soon
                    </span>
                  )}
                </a>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

