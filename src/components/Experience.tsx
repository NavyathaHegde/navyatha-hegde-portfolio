import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#0b0c16] relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-purple-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work & Internships</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            What I Have <span className="text-purple-400">Done So Far</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Practical industry experience building production-ready Java backend systems and full-stack solutions.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical timeline spine */}
          <div className="hidden md:block absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-slate-800"></div>

          <div className="space-y-12">
            {experiences.map((exp) => {
              return (
                <div key={exp.id} className="relative md:pl-20">
                  
                  {/* Timeline node icon */}
                  <div className="hidden md:flex absolute left-4.5 top-0 -translate-x-1/2 w-8 h-8 rounded-full bg-[#11122e] border-2 border-purple-500 items-center justify-center text-purple-300 shadow-lg shadow-purple-900/50">
                    <Briefcase className="w-4 h-4" />
                  </div>

                  {/* Experience Card */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-[#12132e]/80 border border-purple-900/30 hover:border-purple-500/40 shadow-xl backdrop-blur-sm transition-all duration-300 group">
                    
                    {/* Card Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-purple-900/30">
                      <div>
                        <div className="inline-flex items-center gap-2 mb-1">
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                            {exp.type}
                          </span>
                          <span className="text-xs text-slate-400 flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-purple-400" />
                            {exp.location}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="text-base font-medium text-purple-400/90">
                          {exp.company}
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#18193f] border border-purple-500/20 text-xs sm:text-sm font-mono text-purple-200 shrink-0 self-start sm:self-auto">
                        <Calendar className="w-3.5 h-3.5 text-purple-400" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Bullet points */}
                    <div className="py-4 space-y-2.5">
                      {exp.description.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
                          <ChevronRight className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Key Achievements */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="mt-2 p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/20 space-y-1.5">
                        <div className="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          <span>Key Milestones & Impact</span>
                        </div>
                        {exp.achievements.map((ach, j) => (
                          <div key={j} className="text-xs sm:text-sm text-slate-200 flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech stack used */}
                    <div className="mt-4 pt-4 border-t border-purple-900/30 flex flex-wrap gap-2">
                      {exp.techStack.map((tech, k) => (
                        <span
                          key={k}
                          className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[#1a1b42] text-slate-300 border border-purple-900/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
