import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Download, ShieldCheck, Award } from 'lucide-react';
import { CertificationItem } from '../types';

interface CertificateModalProps {
  certificate: CertificationItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    if (!certificate) return;
    setImageFailed(false);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [certificate?.id, onClose]);

  if (!certificate) return null;

  const isUiPath = certificate.issuer.toLowerCase().includes('uipath');
  const imageSrc = certificate.imageUrl;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200 no-print">
      <div className="fixed inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#0f111a] border border-purple-900/50 shadow-2xl overflow-hidden z-10">

        {/* Header */}
        <div className="px-4 sm:px-5 py-3 flex items-start justify-between gap-3 border-b border-purple-900/40 bg-[#151726] shrink-0">
          <div className="min-w-0">
            <div className="text-sm font-bold text-white truncate">{certificate.title}</div>
            <div className="text-[11px] text-slate-400">
              <span className="text-purple-300 font-medium">{certificate.issuer}</span>
              <span className="mx-1.5">•</span>
              <span>{certificate.issueDate}</span>
            </div>
          </div>

          {/* Subtle top-right actions */}
          <div className="flex items-center gap-1.5 shrink-0">
            {imageSrc && (
              <a
                href={imageSrc}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-medium text-slate-400 hover:text-purple-200 hover:bg-[#1e2238] transition-colors"
                title="Download certificate"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Preview */}
        <div className="flex-1 overflow-auto bg-[#121422] p-4 sm:p-6 flex items-center justify-center">
          {imageSrc && !imageFailed ? (
            <img
              src={imageSrc}
              alt={`${certificate.title} certificate issued by ${certificate.issuer}`}
              onError={() => setImageFailed(true)}
              className="max-w-full max-h-[78vh] w-auto h-auto object-contain rounded-xl bg-white shadow-2xl border border-slate-300"
            />
          ) : (
            <div className="text-center max-w-md p-8 rounded-2xl bg-[#17192b] border border-purple-900/40 shadow-xl space-y-4">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                <Award className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">{certificate.title}</h3>
                <p className="text-xs text-slate-400">
                  Issued by <strong className="text-purple-300">{certificate.issuer}</strong> · {certificate.issueDate}
                </p>
              </div>
              <p className="text-[11px] text-slate-500">Preview unavailable right now.</p>
            </div>
          )}
        </div>

        {/* UiPath-only online verification */}
        {isUiPath && certificate.credentialUrl && (
          <div className="px-4 sm:px-5 py-3 border-t border-purple-900/40 bg-[#151726] flex justify-end shrink-0">
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-400 hover:text-purple-200 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
              <span>Verify Online</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>
        )}

      </div>
    </div>
  );
};
