import React, { useState, useEffect } from 'react';
import { Download, ExternalLink, ArrowRight, Code2, Sparkles, Terminal, CheckCircle2, MapPin } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';
import developerImg from '../assets/images/developer_illustration_1788004407091.jpg';
import { LINKEDIN_PROFILE_URL } from '../lib/externalLinks';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  // Pure React dynamic typewriter implementation
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = personalInfo.roles;

  useEffect(() => {
    const handleType = () => {
      const fullText = roles[currentRoleIndex];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(45);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(90);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setTypingSpeed(400);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0b0c1e] via-[#0e0f2b] to-[#0b0c16]"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Status chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-medium shadow-inner shadow-purple-900/50">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 -ml-3.5 mr-0.5"></span>
              <span>{personalInfo.availability}</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-purple-300">
                Hi, My name is
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
                <span className="bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              
              {/* Typewriter Subtitle */}
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-200 pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="text-slate-300">and I am a passionate</span>
                <span className="text-purple-400 font-bold underline decoration-purple-500/50 decoration-wavy underline-offset-4 min-h-[36px] inline-flex items-center">
                  {currentText}
                  <span className="w-0.5 h-7 bg-purple-400 ml-1 inline-block animate-pulse"></span>
                </span>
              </div>
            </div>

            {/* Short Tagline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Specialized in developing resilient <strong className="text-purple-300 font-semibold">Java/Spring Boot</strong> enterprise backends, microservices architectures, and modern responsive <strong className="text-purple-300 font-semibold">React</strong> web applications.
            </p>

            {/* Quick Location & Email Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-purple-400" />
                {personalInfo.location}
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-600"></span>
              <span className="inline-flex items-center gap-1.5 font-mono text-slate-300">
                <Terminal className="w-4 h-4 text-indigo-400" />
                {personalInfo.email}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-900/40 hover:shadow-purple-700/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                id="hero-download-resume-btn"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <a
                href={LINKEDIN_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-[#181846] hover:bg-[#22225a] text-purple-200 border border-purple-500/40 hover:border-purple-400 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
                id="hero-visit-linkedin-btn"
              >
                <ExternalLink className="w-4 h-4 text-purple-400" />
                <span>Visit LinkedIn</span>
              </a>

              <button
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-300 hover:text-white bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/50 transition-all cursor-pointer"
                id="hero-view-projects-btn"
              >
                <Code2 className="w-4 h-4 text-indigo-400" />
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full border-t border-purple-900/30">
              {personalInfo.stats.map((stat, i) => (
                <div key={i} className="p-3 rounded-xl bg-[#12132e]/60 border border-purple-900/20 text-center sm:text-left">
                  <div className="text-lg sm:text-xl font-bold text-white bg-gradient-to-r from-purple-300 to-indigo-200 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-slate-400 truncate">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Developer Illustration & Interactive Floating Chips */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full max-w-[480px]">
              
              {/* Outer decorative halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 rounded-3xl blur-xl opacity-40 animate-pulse"></div>
              
              {/* Card Container */}
              <div className="relative rounded-3xl bg-[#111232]/80 border border-purple-500/30 p-3 sm:p-4 shadow-2xl backdrop-blur-sm overflow-hidden group">
                <img
                  src={developerImg}
                  alt="Navyatha Hegde - Software Engineer & Full Stack Developer"
                  className="w-full h-auto rounded-2xl object-cover shadow-inner group-hover:scale-[1.01] transition-transform duration-500"
                  loading="eager"
                />

                {/* Floating Tech Chips */}
                <div className="absolute top-6 left-6 px-3 py-1.5 rounded-xl bg-[#0e0e24]/90 border border-purple-500/40 text-purple-300 text-xs font-mono font-semibold shadow-lg shadow-black/50 backdrop-blur-md flex items-center gap-1.5 animate-bounce [animation-duration:4s]">
                  <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                  &lt;Java 21 / Spring Boot&gt;
                </div>

                <div className="absolute bottom-8 right-6 px-3 py-1.5 rounded-xl bg-[#0e0e24]/90 border border-indigo-500/40 text-indigo-300 text-xs font-mono font-semibold shadow-lg shadow-black/50 backdrop-blur-md flex items-center gap-1.5 animate-bounce [animation-duration:5s]">
                  <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                  React & TypeScript
                </div>

                <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 hidden sm:flex px-2.5 py-1 rounded-lg bg-[#151638]/95 border border-purple-500/40 text-slate-200 text-xs font-medium shadow-xl items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Microservices & REST</span>
                </div>

                <div className="absolute bottom-6 left-6 hidden sm:flex px-2.5 py-1 rounded-lg bg-[#151638]/95 border border-blue-500/40 text-blue-300 text-xs font-mono shadow-xl items-center gap-1">
                  <span>PostgreSQL / MySQL</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
