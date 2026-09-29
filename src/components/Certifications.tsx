import React, { useState } from 'react';
import {
  CheckCircle2,
  Calendar,
  ShieldCheck,
  Building2,
  ExternalLink,
  Award,
  X,
  FileCheck2,
  Sparkles
} from 'lucide-react';
import { CERTIFICATIONS_LIST, CertificationItem, PERSONAL_DETAILS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Certifications: React.FC = () => {
  const { isDark } = useTheme();
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className={`py-20 border-b transition-colors duration-300 ${
      isDark ? 'bg-[#0B1F3A] border-[#1E3A60]' : 'bg-[#F4F7FC] border-[#DCE6F1]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border ${
            isDark
              ? 'text-[#60A5FA] bg-[#162E52] border-[#2A4D7E]'
              : 'text-[#2563EB] bg-[#E0EDFC] border-[#BFDBFE]'
          }`}>
            Professional Credentials
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 ${
            isDark ? 'text-white' : 'text-[#0B1F3A]'
          }`}>
            Certifications
          </h2>
          <p className={`text-sm sm:text-base mt-2 ${
            isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
          }`}>
            Rigorous coursework in software engineering, data structures, and computer architecture.
          </p>
          <div className="w-12 h-1 bg-[#2563EB] mx-auto mt-3 rounded-full" />
        </div>

        {/* 3 Certification Cards Grid: White cards with subtle blue borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {CERTIFICATIONS_LIST.map((cert) => (
            <div
              key={cert.title}
              className={`rounded-2xl p-6 sm:p-7 border shadow-2xs transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                isDark
                  ? 'bg-[#0F2646] border-[#1E3A60] hover:border-[#60A5FA] hover:shadow-xl hover:shadow-blue-900/20'
                  : 'bg-white border-[#DCE6F1] hover:border-[#2563EB] hover:shadow-xl hover:shadow-blue-500/10'
              }`}
            >
              <div>
                {/* Platform and Year Strip */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md border text-xs font-semibold ${
                    isDark
                      ? 'bg-[#162E52] border-[#2A4D7E] text-[#93C5FD]'
                      : 'bg-[#E0EDFC] border-[#BFDBFE] text-[#1D4ED8]'
                  }`}>
                    <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#60A5FA]" />
                    {cert.platform}
                  </span>
                  <span className={`inline-flex items-center gap-1 text-xs font-medium ${
                    isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
                  }`}>
                    <Calendar className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#60A5FA]" />
                    {cert.year}
                  </span>
                </div>

                {/* Certificate Title */}
                <h3 className={`text-lg font-bold leading-snug mb-3 transition-colors ${
                  isDark
                    ? 'text-white group-hover:text-[#60A5FA]'
                    : 'text-[#0B1F3A] group-hover:text-[#2563EB]'
                }`}>
                  {cert.title}
                </h3>

                {/* Issuing Institution */}
                <div className={`flex items-center gap-2 text-sm font-semibold mb-3 ${
                  isDark ? 'text-[#CBD5E1]' : 'text-[#334155]'
                }`}>
                  <Building2 className="w-4 h-4 text-[#2563EB] dark:text-[#60A5FA] shrink-0" />
                  <span>{cert.institution}</span>
                </div>

                {/* Topic / Focus Area */}
                <p className={`text-xs leading-relaxed mb-4 ${
                  isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
                }`}>
                  Focus: {cert.credentialTopic}
                </p>

                {/* Skills Preview Tags */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {cert.skillsAcquired.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className={`text-[11px] px-2 py-0.5 rounded-md border ${
                        isDark
                          ? 'bg-[#162E52]/60 border-[#2A4D7E] text-[#93C5FD]'
                          : 'bg-[#F4F7FC] border-[#DCE6F1] text-[#0B1F3A]'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Certificate & Verification Bottom Strip */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] dark:text-[#60A5FA]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Verified
                </span>

                {/* View Certificate Button */}
                <button
                  onClick={() => setSelectedCert(cert)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                    isDark
                      ? 'bg-[#162E52] border-[#2A4D7E] text-white hover:bg-[#2563EB] hover:border-[#2563EB]'
                      : 'bg-[#E0EDFC] border-[#BFDBFE] text-[#1D4ED8] hover:bg-[#2563EB] hover:text-white'
                  }`}
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>View Certificate</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Verification Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1F3A]/80 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className={`relative max-w-lg w-full rounded-2xl border p-6 sm:p-8 shadow-2xl transition-colors ${
              isDark
                ? 'bg-[#0F2646] border-[#1E3A60] text-white'
                : 'bg-white border-[#DCE6F1] text-[#0B1F3A]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-[#2563EB] dark:text-[#60A5FA]" />
                <h3 className="font-bold text-base">Certificate Credential Details</h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Certificate Details */}
            <div className="mt-5 space-y-4">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#64748B] dark:text-[#94A3B8] block">
                  Course Title
                </span>
                <h4 className="text-lg font-extrabold text-[#2563EB] dark:text-[#60A5FA] mt-0.5">
                  {selectedCert.title}
                </h4>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className={`p-3 rounded-xl border ${
                  isDark ? 'bg-[#162E52]/60 border-[#2A4D7E]' : 'bg-[#F4F7FC] border-[#DCE6F1]'
                }`}>
                  <span className="text-[#64748B] dark:text-[#94A3B8] block">Issuing University</span>
                  <strong className="text-sm font-bold block mt-0.5">{selectedCert.institution}</strong>
                </div>

                <div className={`p-3 rounded-xl border ${
                  isDark ? 'bg-[#162E52]/60 border-[#2A4D7E]' : 'bg-[#F4F7FC] border-[#DCE6F1]'
                }`}>
                  <span className="text-[#64748B] dark:text-[#94A3B8] block">Platform / Year</span>
                  <strong className="text-sm font-bold block mt-0.5">{selectedCert.platform} · {selectedCert.year}</strong>
                </div>
              </div>

              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#64748B] dark:text-[#94A3B8] block mb-1">
                  Recipient
                </span>
                <p className="text-sm font-bold">{PERSONAL_DETAILS.name}</p>
                <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">Alva's Institute of Engineering and Technology</p>
              </div>

              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#64748B] dark:text-[#94A3B8] block mb-1.5">
                  Competencies Verified
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCert.skillsAcquired.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-[#E0EDFC] dark:bg-[#162E52] text-[#1D4ED8] dark:text-[#93C5FD]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`p-3.5 rounded-xl border flex items-start gap-2.5 text-xs ${
                isDark
                  ? 'bg-[#071324] border-[#1E3A60] text-[#CBD5E1]'
                  : 'bg-[#EFF6FF] border-[#BFDBFE] text-[#1E40AF]'
              }`}>
                <ShieldCheck className="w-4 h-4 text-[#2563EB] dark:text-[#60A5FA] shrink-0 mt-0.5" />
                <span>{selectedCert.verificationNote}</span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold cursor-pointer transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
