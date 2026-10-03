import React, { useState } from 'react';
import { Cpu, Search, CheckCircle2, Star, Zap, Terminal, Layers } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const allSkills = skillCategories.flatMap(cat => 
    cat.skills.map(s => ({ ...s, categoryName: cat.name }))
  );

  const filteredSkills = searchQuery.trim() === ''
    ? skillCategories[activeCategoryIndex].skills
    : allSkills.filter(s => 
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
      );

  return (
    <section id="skills" className="py-20 lg:py-28 bg-[#0b0c16] relative">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & <span className="text-purple-400">Technical Expertise</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A comprehensive overview of my programming languages, frameworks, databases, and architectural toolkits.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-6 mb-12">
          
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Java, Spring, React, SQL, Docker)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#12132e] border border-purple-900/40 text-slate-200 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs (shown when not searching) */}
          {searchQuery.trim() === '' && (
            <div className="flex flex-wrap items-center justify-center gap-2">
              {skillCategories.map((cat, index) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategoryIndex(index)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    activeCategoryIndex === index
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/50 scale-105'
                      : 'bg-[#15163a] text-slate-300 hover:text-white hover:bg-[#1f2152] border border-purple-900/30'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          )}

        </div>

        {/* Category Description if not searching */}
        {searchQuery.trim() === '' && (
          <div className="text-center mb-8">
            <p className="text-xs sm:text-sm text-purple-300/90 font-medium">
              {skillCategories[activeCategoryIndex].description}
            </p>
          </div>
        )}

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, i) => (
            <div
              key={i}
              className="p-5 sm:p-6 rounded-2xl bg-[#12132e]/80 border border-purple-900/30 hover:border-purple-500/40 shadow-lg hover:shadow-purple-950/40 transition-all duration-200 space-y-3.5 group"
            >
              {/* Skill Title & Level */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {skill.name}
                  </h3>
                  {'categoryName' in skill && (
                    <span className="text-[11px] text-purple-400 font-medium">
                      {(skill as { categoryName: string }).categoryName}
                    </span>
                  )}
                </div>
                
                <span className="text-xs font-mono font-semibold text-purple-300 bg-purple-950/80 px-2.5 py-1 rounded-md border border-purple-500/30">
                  {skill.experience}
                </span>
              </div>

              {/* Proficiency Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Proficiency</span>
                  <span className="font-mono font-semibold text-slate-200">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-[#1c1d42] rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-400 rounded-full transition-all duration-700 group-hover:brightness-125"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>

              {/* Tags / Sub-competencies */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {skill.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#191a42] text-slate-300 border border-purple-900/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-400 space-y-2">
            <p className="text-base font-semibold text-slate-300">No skills found matching "{searchQuery}"</p>
            <p className="text-xs">Try searching for keywords like "Java", "Spring", "React", or "SQL".</p>
          </div>
        )}

      </div>
    </section>
  );
};
