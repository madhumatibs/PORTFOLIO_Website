import React, { useEffect, useState } from 'react';
import {
  X,
  Printer,
  Download,
  Copy,
  Check
} from 'lucide-react';
import {
  PERSONAL_DETAILS,
  PROJECTS,
  EDUCATION_LIST,
  CERTIFICATIONS_LIST,
  SKILL_CATEGORIES
} from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { isDark } = useTheme();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const generateResumeText = () => {
    return `=====================================================
${PERSONAL_DETAILS.name.toUpperCase()}
${PERSONAL_DETAILS.title}
=====================================================
Location : ${PERSONAL_DETAILS.location}
Email    : ${PERSONAL_DETAILS.email}
Phone    : ${PERSONAL_DETAILS.phone}
LinkedIn : ${PERSONAL_DETAILS.linkedin}
GitHub   : ${PERSONAL_DETAILS.github}

PROFESSIONAL SUMMARY
-----------------------------------------------------
${PERSONAL_DETAILS.summary}

EDUCATION
-----------------------------------------------------
${EDUCATION_LIST.map(
  (edu) =>
    `* ${edu.degree} ${edu.field ? `(${edu.field})` : ''}
  Institution: ${edu.institution}
  Period     : ${edu.period} ${edu.score ? `| Score: ${edu.score}` : ''}`
).join('\n\n')}

TECHNICAL SKILLS
-----------------------------------------------------
${SKILL_CATEGORIES.map(
  (cat) => `* ${cat.name}: ${cat.skills.join(', ')}`
).join('\n')}

PROJECTS
-----------------------------------------------------
${PROJECTS.map(
  (p, i) =>
    `${i + 1}. ${p.title}
   Technologies : ${p.technologies.join(', ')}
   Description  : ${p.shortDescription}
   Highlights   :
   ${p.highlights.map((h) => `  - ${h}`).join('\n')}`
).join('\n\n')}

CERTIFICATIONS
-----------------------------------------------------
${CERTIFICATIONS_LIST.map(
  (c) =>
    `* ${c.title}
  Institution: ${c.institution} (${c.platform}) | Year: ${c.year}`
).join('\n\n')}

LANGUAGES
-----------------------------------------------------
Kannada, English, Hindi, Telugu
=====================================================
`;
  };

  const handleDownloadText = () => {
    const text = generateResumeText();
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Madhumati_BS_Java_Developer_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateResumeText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-[#0B1F3A]/80 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white text-slate-900 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#DCE6F1] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#DCE6F1] flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#0B1F3A] text-base">
              Resume Preview
            </span>
            <span className="hidden sm:inline text-xs font-semibold px-2.5 py-0.5 rounded-md bg-[#E0EDFC] text-[#2563EB] border border-[#BFDBFE]">
              ATS-Optimized
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F4F7FC] hover:bg-[#EBF2FA] text-[#0B1F3A] text-xs font-semibold border border-[#DCE6F1] transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold transition-colors cursor-pointer shadow-xs"
              title="Download text resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download (.txt)</span>
            </button>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[#DCE6F1] hover:bg-[#F4F7FC] text-[#0B1F3A] text-xs font-semibold transition-colors cursor-pointer"
              title="Copy plain text resume"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-[#2563EB]" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-[#64748B]" />
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-[#64748B] hover:text-[#0B1F3A] hover:bg-[#F4F7FC] rounded-lg transition-colors cursor-pointer ml-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Sheet (always clean crisp paper layout for readability & print accuracy) */}
        <div className="p-6 sm:p-10 text-slate-800 space-y-7 bg-white font-sans">
          {/* Resume Header */}
          <div className="border-b-2 border-[#0B1F3A] pb-5 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
                {PERSONAL_DETAILS.name}
              </h1>
              <h2 className="text-base font-bold text-[#2563EB] mt-1">
                {PERSONAL_DETAILS.title}
              </h2>
            </div>
            <div className="text-xs text-[#64748B] space-y-1 sm:text-right">
              <div>{PERSONAL_DETAILS.location}</div>
              <div>{PERSONAL_DETAILS.email}</div>
              <div>{PERSONAL_DETAILS.phone}</div>
              <div>linkedin.com/in/madhumati-bs</div>
              <div>github.com/MadhumatiBS</div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] border-b border-[#DCE6F1] pb-1 mb-2.5">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              {PERSONAL_DETAILS.summary}
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] border-b border-[#DCE6F1] pb-1 mb-3">
              Education
            </h3>
            <div className="space-y-3">
              {EDUCATION_LIST.map((edu) => (
                <div key={edu.degree} className="flex justify-between items-start text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-[#0B1F3A]">{edu.degree}</span>
                    {edu.field && <span className="text-[#334155]"> — {edu.field}</span>}
                    <div className="text-[#64748B]">{edu.institution}</div>
                  </div>
                  <div className="text-right text-xs text-[#64748B] shrink-0 font-medium">
                    <div>{edu.period}</div>
                    {edu.score && <div className="font-semibold text-[#2563EB]">{edu.score}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] border-b border-[#DCE6F1] pb-1 mb-3">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.name}>
                  <strong className="text-[#0B1F3A]">{cat.name}: </strong>
                  <span className="text-[#475569]">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] border-b border-[#DCE6F1] pb-1 mb-3">
              Key Projects
            </h3>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="text-xs sm:text-sm">
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-[#0B1F3A]">{proj.title}</span>
                    <span className="text-xs text-[#2563EB] font-semibold font-mono">
                      [{proj.technologies.join(', ')}]
                    </span>
                  </div>
                  <p className="text-[#64748B] text-xs mt-0.5">{proj.shortDescription}</p>
                  <ul className="list-disc list-inside text-xs text-[#475569] mt-1 space-y-0.5">
                    {proj.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] border-b border-[#DCE6F1] pb-1 mb-3">
              Certifications
            </h3>
            <div className="space-y-2 text-xs sm:text-sm">
              {CERTIFICATIONS_LIST.map((cert) => (
                <div key={cert.title} className="flex justify-between">
                  <div>
                    <span className="font-bold text-[#0B1F3A]">{cert.title}</span>
                    <span className="text-[#64748B]"> — {cert.institution} ({cert.platform})</span>
                  </div>
                  <span className="text-xs text-[#2563EB] font-semibold shrink-0">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
