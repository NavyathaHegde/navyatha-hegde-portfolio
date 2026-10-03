import React, { useState } from 'react';
import { Mail, Send, MapPin, Linkedin, Github, MessageSquare, CheckCircle2, Copy, Check, Clock, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, socialLinks } from '../data/portfolioData';
import { LINKEDIN_PROFILE_URL } from '../lib/externalLinks';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Full-time Opportunity',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in your name, email, and message before sending.');
      return;
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    // Simulate sending process
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleOpenMailClient = () => {
    const subject = encodeURIComponent(formData.subject || `Inquiry from Portfolio: ${formData.inquiryType}`);
    const body = encodeURIComponent(
      `Hi Navyatha,\n\nName: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      inquiryType: 'Full-time Opportunity',
      subject: '',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0b0c16] relative">
      {/* Ambient background glows */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Contact & <span className="text-purple-400">Inquiries</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have a project, role opportunity, or question? Send me a message and I'll respond promptly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info Cards & Quick Reach */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Email Card */}
            <div className="p-6 rounded-2xl bg-[#12132e]/90 border border-purple-900/40 shadow-xl backdrop-blur-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1a1b46] hover:bg-[#252763] text-purple-200 border border-purple-500/30 text-xs font-medium transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  id="contact-copy-email-btn"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
                </button>
              </div>

              <div>
                <div className="text-xs text-slate-400 font-medium">Direct Email</div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-base sm:text-lg font-bold text-white hover:text-purple-300 transition-colors font-mono break-all"
                >
                  {personalInfo.email}
                </a>
              </div>
              <p className="text-xs text-slate-400">
                Guaranteed response within 24 hours for professional inquiries.
              </p>
            </div>

            {/* Quick Location & Availability */}
            <div className="p-6 rounded-2xl bg-[#12132e]/80 border border-purple-900/30 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-400 font-medium">Location & Timezone</div>
                  <div className="text-sm font-semibold text-slate-200">
                    {personalInfo.location} ({personalInfo.timezone})
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-purple-900/30">
                <Clock className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-400 font-medium">Availability</div>
                  <div className="text-sm font-semibold text-slate-200">
                    {personalInfo.availability}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Profile Links */}
            <div className="p-6 rounded-2xl bg-[#12132e]/80 border border-purple-900/30 space-y-3">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Professional Networks
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={LINKEDIN_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[#17183e] hover:bg-[#202254] border border-purple-900/40 text-slate-200 hover:text-white transition-all text-xs font-semibold"
                >
                  <Linkedin className="w-4 h-4 text-purple-400" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={socialLinks.find(s => s.platform === 'GitHub')?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[#17183e] hover:bg-[#202254] border border-purple-900/40 text-slate-200 hover:text-white transition-all text-xs font-semibold"
                >
                  <Github className="w-4 h-4 text-purple-400" />
                  <span>GitHub Repos</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#12132e]/90 border border-purple-900/40 shadow-2xl backdrop-blur-md relative overflow-hidden">
              
              {isSubmitted ? (
                /* Success Message State */
                <div className="py-12 px-4 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-400 shadow-lg shadow-emerald-950">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">Thank You, {formData.name}!</h3>
                    <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto">
                      Your message regarding <strong className="text-purple-300">"{formData.subject || formData.inquiryType}"</strong> has been logged successfully.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#191b45] border border-purple-500/20 text-xs sm:text-sm text-purple-200 max-w-md mx-auto">
                    You can also dispatch this inquiry directly through your default email client:
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={handleOpenMailClient}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-900/40 transition-all cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Email Client</span>
                    </button>

                    <button
                      onClick={resetForm}
                      className="px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Form */
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="flex items-center justify-between pb-2 border-b border-purple-900/30">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-purple-400" />
                      <span>Send an Inquiry</span>
                    </h3>
                    <span className="text-xs text-purple-300 font-mono">* All fields recorded</span>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs sm:text-sm flex items-center gap-2">
                      <span>⚠️ {errorMsg}</span>
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 block">
                        Your Name <span className="text-purple-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#0b0c1b] border border-purple-900/40 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 transition-colors shadow-inner"
                        id="contact-form-name"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 block">
                        Email Address <span className="text-purple-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. john@company.com"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#0b0c1b] border border-purple-900/40 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 transition-colors shadow-inner"
                        id="contact-form-email"
                      />
                    </div>
                  </div>

                  {/* Inquiry Category & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 block">
                        Inquiry Nature
                      </label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0b0c1b] border border-purple-900/40 text-slate-200 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                        id="contact-form-inquiry-type"
                      >
                        <option value="Full-time Opportunity">Full-time Job Opportunity</option>
                        <option value="Internship">Internship Opportunity</option>
                        <option value="Freelance Project">Freelance / Contract Project</option>
                        <option value="Technical Collaboration">Technical Collaboration</option>
                        <option value="General Inquiry">General Networking & Inquiries</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 block">
                        Subject Line
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Java Engineer Role at TechCorp"
                        className="w-full px-4 py-3 rounded-xl bg-[#0b0c1b] border border-purple-900/40 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 transition-colors shadow-inner"
                        id="contact-form-subject"
                      />
                    </div>
                  </div>

                  {/* Message textarea */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 block">
                      Your Message <span className="text-purple-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Navyatha, I would love to discuss an engineering opportunity with you..."
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#0b0c1b] border border-purple-900/40 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 transition-colors resize-y shadow-inner"
                      id="contact-form-message"
                    ></textarea>
                  </div>

                  {/* Form Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={handleOpenMailClient}
                      className="text-xs text-purple-300 hover:text-purple-100 hover:underline flex items-center gap-1 cursor-pointer order-2 sm:order-1"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Prefer sending via Mail Client? Click here</span>
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-900/50 hover:shadow-purple-700/60 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50 order-1 sm:order-2"
                      id="contact-submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
