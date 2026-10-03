import React, { useState } from 'react';
import { User, Code2, Server, Database, Cpu, Award, MapPin, Mail, Phone, GraduationCap, CheckCircle, Copy, Check, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState(false);

  const javaCodeSnippet = `public class NavyathaRHegde {
    private final String name = "Navyatha R Hegde";
    private final String role = "Java Full-Stack Developer";
    private final String college = "AMC Engineering College (CGPA: 8.36)";
    private final String[] coreStack = {
        "Java 8+", "Spring Boot", "Spring MVC", 
        "Hibernate / JPA", "MySQL", "ReactJS", 
        "RESTful APIs", "Docker", "Kafka"
    };

    public boolean isPassionateAboutEngineering() {
        return true;
    }

    public Solution solveComplexProblem(Requirement req) {
        Architecture arch = designLayeredArchitecture(req); // Controller-Service-Repository
        cleanCode = applySOLIDAndDSA(arch); // 100+ Problems Solved
        return deployScalableSystem(cleanCode);
    }
}`;

  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(javaCodeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const pillars = [
    {
      icon: Server,
      title: "Backend & Microservices",
      description: "Layered Controller–Service–Repository architectures, Spring Boot REST APIs, Spring Security with BCrypt, and transactional consistency.",
      color: "text-purple-400 bg-purple-950/50 border-purple-500/30"
    },
    {
      icon: Code2,
      title: "Full-Stack Web Dev",
      description: "End-to-end integration combining responsive ReactJS frontends with Spring Boot RESTful web services and seamless JSON DTOs.",
      color: "text-indigo-400 bg-indigo-950/50 border-indigo-500/30"
    },
    {
      icon: Database,
      title: "Relational Databases",
      description: "Relational data modeling, Spring Data JPA/Hibernate ORM, pagination, sorting, and SQL query tuning in MySQL & Oracle SQL.",
      color: "text-blue-400 bg-blue-950/50 border-blue-500/30"
    },
    {
      icon: Cpu,
      title: "DSA & Problem Solving",
      description: "100+ Data Structures & Algorithms problems solved in Java covering Arrays, Strings, Linked Lists, Trees, Graphs, and Collections.",
      color: "text-emerald-400 bg-emerald-950/50 border-emerald-500/30"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0c0d1e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Biography & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About <span className="text-purple-400">{personalInfo.name}</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A software engineer committed to writing clean, maintainable code and engineering resilient enterprise backends.
          </p>
        </div>

        {/* Grid Layout: Biography text + Interactive Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Bio & Quick Facts */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#12132e]/80 border border-purple-900/30 shadow-xl backdrop-blur-sm space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Who I Am</span>
                <span className="h-px flex-1 bg-gradient-to-r from-purple-500/40 to-transparent"></span>
              </h3>
              
              {personalInfo.bioParagraphs.map((paragraph, index) => (
                <p key={index} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Quick Key Facts List */}
              <div className="pt-4 border-t border-purple-900/40 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-slate-300">
                  <GraduationCap className="w-4 h-4 text-purple-400 shrink-0" />
                  <span><strong>Education:</strong> B.E. in CSE (8.36 CGPA)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                  <span><strong>Location:</strong> Bengaluru, Karnataka</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="truncate"><strong>Email:</strong> {personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                  <span><strong>Phone:</strong> {personalInfo.phone}</span>
                </div>
              </div>

              {/* Key Achievements Box */}
              <div className="pt-4 border-t border-purple-900/40 space-y-2">
                <div className="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  <span>Key Recognitions & Leadership</span>
                </div>
                <div className="space-y-2">
                  {personalInfo.achievements.map((ach, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/20 text-xs text-slate-300">
                      <strong className="text-white block mb-0.5">{ach.title}</strong>
                      <span className="text-slate-400">{ach.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Core Values / Strengths Chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                'Core & Advanced Java (Java 8+)',
                'Spring Boot Microservices',
                'Hibernate / JPA',
                'Controller-Service-Repository',
                'MySQL & Oracle SQL',
                'ReactJS Frontend',
                '100+ DSA in Java',
                'BCrypt & Spring Security',
                'RESTful APIs'
              ].map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#16183a] text-purple-200 border border-purple-500/20 hover:border-purple-500/50 transition-colors"
                >
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Code Terminal Card */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Terminal Window */}
            <div className="rounded-2xl bg-[#090a16] border border-purple-900/40 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
              {/* Terminal Titlebar */}
              <div className="px-4 py-3 bg-[#111229] border-b border-purple-900/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs text-slate-400 font-sans font-medium">NavyathaRHegde.java</span>
                </div>
                
                <button
                  onClick={copyCodeToClipboard}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-purple-950/80 hover:bg-purple-900 text-purple-300 border border-purple-500/30 text-xs transition-colors cursor-pointer"
                  title="Copy Java Snippet"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>

              {/* Code Content Area */}
              <div className="p-5 overflow-x-auto text-slate-200 leading-relaxed bg-[#080914]/90">
                <pre className="text-xs sm:text-[13px] leading-6">
                  <span className="text-purple-400 font-semibold">package</span> <span className="text-slate-300">com.navyatha.developer;</span>{'\n\n'}
                  <span className="text-purple-400 font-semibold">public class</span> <span className="text-yellow-300 font-bold">NavyathaRHegde</span> {'{'}{'\n'}
                  {'  '}<span className="text-purple-400">private final</span> String name = <span className="text-emerald-300">"{personalInfo.name}"</span>;{'\n'}
                  {'  '}<span className="text-purple-400">private final</span> String role = <span className="text-emerald-300">"{personalInfo.title}"</span>;{'\n'}
                  {'  '}<span className="text-purple-400">private final</span> String college = <span className="text-emerald-300">"AMC Engineering College (8.36 CGPA)"</span>;{'\n'}
                  {'  '}<span className="text-purple-400">private final</span> String phone = <span className="text-emerald-300">"{personalInfo.phone}"</span>;{'\n'}
                  {'  '}<span className="text-purple-400">private final</span> String email = <span className="text-emerald-300">"{personalInfo.email}"</span>;{'\n\n'}
                  {'  '}<span className="text-purple-400">private final</span> String[] coreStack = {'{'}{'\n'}
                  {'    '}<span className="text-emerald-300">"Java (Java 8+)"</span>, <span className="text-emerald-300">"Spring Boot"</span>, <span className="text-emerald-300">"Spring MVC"</span>,{'\n'}
                  {'    '}<span className="text-emerald-300">"Hibernate/JPA"</span>, <span className="text-emerald-300">"MySQL"</span>, <span className="text-emerald-300">"ReactJS"</span>,{'\n'}
                  {'    '}<span className="text-emerald-300">"100+ DSA in Java"</span>, <span className="text-emerald-300">"Docker"</span>, <span className="text-emerald-300">"Kafka"</span>{'\n'}
                  {'  '}{'}'};{'\n\n'}
                  {'  '}<span className="text-purple-400">public</span> Architecture <span className="text-blue-300 font-medium">buildEnterpriseSolution</span>(Requirement req) {'{'}{'\n'}
                  {'    '}LayeredService backend = <span className="text-purple-400">new</span> SpringBootService(req);{'\n'}
                  {'    '}backend.applySecurity(<span className="text-purple-400">new</span> BCryptPasswordEncoder());{'\n'}
                  {'    '}backend.mapEntities(<span className="text-purple-400">new</span> HibernateJPA(<span className="text-emerald-300">"MySQL"</span>));{'\n'}
                  {'    '}<span className="text-purple-400">return</span> backend.integrateWithReactUI();{'\n'}
                  {'  '}{'}'}{'\n'}
                  {'}'}
                </pre>
              </div>

              {/* Terminal Footer status */}
              <div className="px-4 py-2 bg-[#0d0e21] border-t border-purple-900/20 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle className="w-3 h-3" /> Java 8+ • Spring Boot • ReactJS Verified
                </span>
                <span>Bengaluru • IST (UTC+5:30)</span>
              </div>
            </div>

          </div>

        </div>

        {/* Engineering Pillars 4-grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#12132e]/60 hover:bg-[#16183a]/80 border border-purple-900/30 hover:border-purple-500/40 transition-all duration-300 shadow-lg group"
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${pillar.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

