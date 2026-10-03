import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { educations } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 bg-[#0c0d1e] relative">
      {/* Background glow */}
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education & <span className="text-purple-400">Qualifications</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Strong foundations in Computer Science principles, algorithms, and software engineering.
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {educations.map((edu) => (
            <div
              key={edu.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#12132e]/80 border border-purple-900/30 hover:border-purple-500/40 shadow-xl backdrop-blur-sm transition-all duration-300 space-y-6 group"
            >
              {/* Top Row: Degree & Institution */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-purple-900/30">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {edu.grade}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-purple-400" />
                      {edu.location}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="text-base font-medium text-purple-400">
                    {edu.institution}
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#18193f] border border-purple-500/20 text-xs sm:text-sm font-mono text-purple-200 shrink-0 self-start">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  <span>{edu.period}</span>
                </div>
              </div>

              {/* Coursework */}
              {edu.coursework && edu.coursework.length > 0 && (
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Relevant Coursework & Subjects</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs bg-[#191a42] text-slate-300 border border-purple-900/40"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights & Leadership */}
              {edu.highlights && edu.highlights.length > 0 && (
                <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/20 space-y-2">
                  <div className="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Academic Highlights & Activities</span>
                  </div>
                  <div className="space-y-1.5">
                    {edu.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="text-xs sm:text-sm text-slate-200 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
