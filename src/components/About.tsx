import React from 'react';
import {
  GraduationCap,
  Server,
  FolderGit2,
  Sparkles,
  CheckCircle
} from 'lucide-react';
import { PERSONAL_DETAILS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const About: React.FC = () => {
  const { isDark } = useTheme();

  const highlightIcons = [
    <GraduationCap className="w-6 h-6 text-[#2563EB] dark:text-[#60A5FA]" key="grad" />,
    <Server className="w-6 h-6 text-[#2563EB] dark:text-[#60A5FA]" key="server" />,
    <FolderGit2 className="w-6 h-6 text-[#2563EB] dark:text-[#60A5FA]" key="folder" />,
    <Sparkles className="w-6 h-6 text-[#2563EB] dark:text-[#60A5FA]" key="sparkles" />
  ];

  return (
    <section id="about" className={`py-20 border-b transition-colors duration-300 ${
      isDark ? 'bg-[#0B1F3A] border-[#1E3A60]' : 'bg-white border-[#DCE6F1]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border ${
            isDark
              ? 'text-[#60A5FA] bg-[#162E52] border-[#2A4D7E]'
              : 'text-[#2563EB] bg-[#E0EDFC] border-[#BFDBFE]'
          }`}>
            Background & Objective
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 ${
            isDark ? 'text-white' : 'text-[#0B1F3A]'
          }`}>
            About Me
          </h2>
          <div className="w-12 h-1 bg-[#2563EB] mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-5 leading-relaxed text-base sm:text-lg">
            <div className={`rounded-2xl p-6 sm:p-8 border shadow-2xs transition-colors ${
              isDark
                ? 'bg-[#0F2646] border-[#1E3A60] text-[#CBD5E1]'
                : 'bg-[#F4F7FC] border-[#DCE6F1] text-[#334155]'
            }`}>
              {/* Profile Snapshot Header without photo */}
              <div className={`mb-6 pb-6 border-b ${
                isDark ? 'border-[#1E3A60]' : 'border-[#DCE6F1]'
              }`}>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                    isDark ? 'text-white' : 'text-[#0B1F3A]'
                  }`}>
                    <span className="text-[#2563EB] dark:text-[#60A5FA]">Madhumati</span> B S
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Available for Internships
                  </span>
                </div>
                <p className="text-base font-semibold text-[#2563EB] dark:text-[#60A5FA]">
                  {PERSONAL_DETAILS.title}
                </p>
                <p className={`text-xs sm:text-sm mt-1 font-medium ${isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>
                  Computer Science Engineering Student · Alva's Institute of Engineering and Technology, Mijar–Moodbidri
                </p>
              </div>

              <p className="mb-4">
                I am a Computer Science Engineering student at{' '}
                <strong className={`font-semibold ${isDark ? 'text-white' : 'text-[#0B1F3A]'}`}>
                  Alva's Institute of Engineering and Technology, Mijar–Moodbidri
                </strong>
                . I have hands-on experience in Java, Spring Boot, MySQL, Python, and web development technologies.
              </p>
              <p className={`mb-4 ${isDark ? 'text-[#94A3B8]' : 'text-[#475569]'}`}>
                I have developed projects involving recruitment matching, report card automation, inventory management, and hotel management. I am interested in backend development, REST APIs, database management, and building practical applications.
              </p>
              <p className={`font-medium ${isDark ? 'text-[#60A5FA]' : 'text-[#0B1F3A]'}`}>
                I am currently looking for internship opportunities in Java Development, Backend Development, and Software Development where I can improve my technical skills and contribute to real-world projects.
              </p>
            </div>

            {/* Quick Badges Strip in light blue badges with dark blue text */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold ${
                isDark
                  ? 'bg-[#162E52] border-[#2A4D7E] text-[#C5D5EB]'
                  : 'bg-[#E0EDFC] border-[#BFDBFE] text-[#0B1F3A]'
              }`}>
                <CheckCircle className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#60A5FA]" />
                REST API Integration
              </span>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold ${
                isDark
                  ? 'bg-[#162E52] border-[#2A4D7E] text-[#C5D5EB]'
                  : 'bg-[#E0EDFC] border-[#BFDBFE] text-[#0B1F3A]'
              }`}>
                <CheckCircle className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#60A5FA]" />
                Relational Databases (MySQL)
              </span>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold ${
                isDark
                  ? 'bg-[#162E52] border-[#2A4D7E] text-[#C5D5EB]'
                  : 'bg-[#E0EDFC] border-[#BFDBFE] text-[#0B1F3A]'
              }`}>
                <CheckCircle className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#60A5FA]" />
                Object-Oriented Design (OOP)
              </span>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold ${
                isDark
                  ? 'bg-[#162E52] border-[#2A4D7E] text-[#C5D5EB]'
                  : 'bg-[#E0EDFC] border-[#BFDBFE] text-[#0B1F3A]'
              }`}>
                <CheckCircle className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#60A5FA]" />
                Clean Enterprise Architecture
              </span>
            </div>
          </div>

          {/* Right Column: 4 Small Highlight Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {PERSONAL_DETAILS.highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className={`group p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4 ${
                  isDark
                    ? 'bg-[#0F2646] border-[#1E3A60] hover:border-[#60A5FA] hover:shadow-lg hover:shadow-blue-900/20'
                    : 'bg-white border-[#DCE6F1] hover:border-[#2563EB] hover:shadow-md hover:shadow-blue-500/10'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                  isDark
                    ? 'bg-[#162E52] border border-[#2A4D7E] group-hover:bg-[#2563EB]'
                    : 'bg-[#E0EDFC] border border-[#BFDBFE] group-hover:bg-[#2563EB]'
                }`}>
                  {React.cloneElement(highlightIcons[index], {
                    className: 'w-6 h-6 text-[#2563EB] dark:text-[#60A5FA] group-hover:text-white transition-colors'
                  })}
                </div>
                <div>
                  <h3 className={`font-bold text-base leading-snug transition-colors ${
                    isDark
                      ? 'text-white group-hover:text-[#60A5FA]'
                      : 'text-[#0B1F3A] group-hover:text-[#2563EB]'
                  }`}>
                    {highlight.title}
                  </h3>
                  <p className={`text-xs mt-1 font-medium ${
                    isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
                  }`}>
                    {highlight.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
