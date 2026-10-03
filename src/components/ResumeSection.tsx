import React, { useState } from 'react';
import { FileText, Download, Copy, Check, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { resumeTextContent } from '../data/portfolioData';
import { downloadResumeAsPDF } from '../lib/pdfGenerator';

export const ResumeSection: React.FC = () => {
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleDownloadPdf = async () => {
    setIsGeneratingPdf(true);
    try {
      await downloadResumeAsPDF();
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.8 }
      });
    } catch (err) {
      console.error('Failed to generate PDF:', err);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(resumeTextContent.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy resume text:', err);
    }
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-[#090a18] via-[#0d0e24] to-[#090a16] relative overflow-hidden">

      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5 text-purple-400" />
            <span>Official Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Resume
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Download the full resume as a PDF, or copy it as plain text for quick ATS submissions.
          </p>
        </div>

        {/* Action Toolbar */}
        <div className="max-w-2xl mx-auto p-4 sm:p-5 rounded-2xl bg-[#11122e]/90 border border-purple-900/40 shadow-xl flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleDownloadPdf}
            disabled={isGeneratingPdf}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-900/50 hover:shadow-purple-700/60 transition-all cursor-pointer disabled:opacity-75"
            title="Download Resume in PDF Format"
            id="resume-download-pdf-btn"
          >
            {isGeneratingPdf ? (
              <Loader2 className="w-4 h-4 animate-spin text-white" />
            ) : (
              <Download className="w-4 h-4 text-white" />
            )}
            <span>{isGeneratingPdf ? 'Generating PDF...' : 'Download Resume (PDF)'}</span>
          </button>

          <button
            onClick={handleCopyText}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#18193f] hover:bg-[#23245c] text-purple-200 border border-purple-500/30 hover:border-purple-400 transition-all cursor-pointer shadow-sm"
            title="Copy resume as plain text"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Copy className="w-4 h-4 text-purple-400" />
            )}
            <span>{copied ? 'Copied!' : 'Copy Resume Text'}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
