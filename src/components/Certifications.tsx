import React, { useState, useMemo } from 'react';
import { Award, ExternalLink, ShieldCheck, Calendar, Eye, Search } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { CertificationItem } from '../types';
import { CertificateModal } from './CertificateModal';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Java & Development', 'Cloud & Database', 'AI & Automation', 'Internships & Labs'];

  const filteredCertifications = useMemo(() => {
    return certifications.filter((cert) => {
      // Category filter
      const matchesCategory = (() => {
        if (selectedCategory === 'All') return true;
        if (selectedCategory === 'Java & Development') {
          return cert.issuer.includes('JSpiders') || cert.issuer.includes('Infosys') || cert.title.includes('Java');
        }
        if (selectedCategory === 'Cloud & Database') {
          return cert.issuer.includes('Oracle') || cert.issuer.includes('AWS') || cert.title.includes('Cloud') || cert.title.includes('Database');
        }
        if (selectedCategory === 'AI & Automation') {
          return cert.issuer.includes('UiPath') || cert.title.includes('AI') || cert.title.includes('Automation');
        }
        if (selectedCategory === 'Internships & Labs') {
          return cert.issuer.includes('AICTE') || cert.issuer.includes('Innomatics') || cert.issuer.includes('Internz') || cert.title.includes('Internship');
        }
        return true;
      })();

      // Search filter
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        cert.title.toLowerCase().includes(query) ||
        cert.issuer.toLowerCase().includes(query) ||
        cert.skillsCovered.some(s => s.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="certifications" className="py-20 lg:py-28 bg-[#0b0c16] relative">
      {/* Glow */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-purple-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials & Documents</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Certifications & <span className="text-purple-400">Credentials</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Explore authentic technical certifications, institutional credentials, and verification portals.
          </p>
        </div>

        {/* Filter Toolbar & Search */}
        <div className="max-w-4xl mx-auto mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-xl bg-[#12132e]/80 border border-purple-900/40">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
                {cat === 'All' ? ` (${certifications.length})` : ''}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search credentials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-[#12132e]/90 border border-purple-900/40 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500"
            />
          </div>

        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertifications.map((cert) => {
            const isUiPath = cert.issuer.toLowerCase().includes('uipath');

            return (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-[#12132e]/80 border border-purple-900/30 hover:border-purple-500/50 shadow-xl backdrop-blur-sm transition-all duration-300 flex flex-col justify-between space-y-4 group hover:-translate-y-1"
              >
                <div className="space-y-3">
                  
                  {/* Issuer Badge & Year */}
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${cert.badgeColor}`}>
                      {cert.issuer}
                    </span>
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-purple-400" />
                      {cert.issueDate}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {cert.title}
                  </h3>

                  {/* Skills Covered */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Competencies
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsCovered.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#1a1c48] text-slate-300 border border-purple-900/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-purple-900/30 flex flex-col gap-2">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-purple-600/20 hover:bg-purple-600 text-purple-200 hover:text-white border border-purple-500/30 hover:border-purple-400 shadow-sm transition-all duration-200 cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-purple-400 group-hover:text-white" />
                    <span>View Certificate</span>
                  </button>

                  {isUiPath && cert.credentialUrl && cert.credentialUrl !== '#' && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg text-[11px] font-medium bg-[#141530] hover:bg-purple-950/60 text-slate-300 hover:text-purple-300 border border-purple-900/30 transition-all"
                    >
                      <ShieldCheck className="w-3 h-3 text-purple-400" />
                      <span>Verify Online</span>
                      <ExternalLink className="w-2.5 h-2.5 ml-1 opacity-70" />
                    </a>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {filteredCertifications.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm">
            No certifications found matching your search.
          </div>
        )}

      </div>

      {/* Certificate Viewer / Download Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};


