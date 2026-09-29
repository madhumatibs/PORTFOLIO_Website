import React from 'react';
import {
  Code2,
  Layers,
  Globe,
  Database,
  Cpu,
  Terminal,
  FileText,
  CheckCircle2,
  Languages,
  HeartHandshake
} from 'lucide-react';
import { SKILL_CATEGORIES, SOFT_SKILLS, LANGUAGES } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Skills: React.FC = () => {
  const { isDark } = useTheme();

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#2563EB] dark:text-[#60A5FA]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#2563EB] dark:text-[#60A5FA]" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#2563EB] dark:text-[#60A5FA]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-[#2563EB] dark:text-[#60A5FA]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#2563EB] dark:text-[#60A5FA]" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-[#2563EB] dark:text-[#60A5FA]" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-[#2563EB] dark:text-[#60A5FA]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#2563EB] dark:text-[#60A5FA]" />;
    }
  };

  return (
    <section id="skills" className={`py-20 border-b transition-colors duration-300 ${
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
            Technical Competencies
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 ${
            isDark ? 'text-white' : 'text-[#0B1F3A]'
          }`}>
            Technical Skills
          </h2>
          <p className={`text-sm sm:text-base mt-2 ${
            isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
          }`}>
            Structured skill stack developed through coursework, certifications, and hands-on project implementations.
          </p>
          <div className="w-12 h-1 bg-[#2563EB] mx-auto mt-3 rounded-full" />
        </div>

        {/* 7 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.name}
              className={`rounded-2xl p-6 border shadow-2xs transition-all duration-200 flex flex-col justify-between hover:-translate-y-0.5 ${
                isDark
                  ? 'bg-[#0F2646] border-[#1E3A60] hover:border-[#60A5FA] hover:shadow-lg hover:shadow-blue-900/20'
                  : 'bg-white border-[#DCE6F1] hover:border-[#2563EB] hover:shadow-md hover:shadow-blue-500/10'
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${
                    isDark
                      ? 'bg-[#162E52] border-[#2A4D7E]'
                      : 'bg-[#E0EDFC] border-[#BFDBFE]'
                  }`}>
                    {getCategoryIcon(category.icon)}
                  </div>
                  <h3 className={`font-bold text-base ${
                    isDark ? 'text-white' : 'text-[#0B1F3A]'
                  }`}>
                    {category.name}
                  </h3>
                </div>

                {/* Display skills in light blue badges with dark blue text */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                        isDark
                          ? 'bg-[#162E52] border-[#2A4D7E] text-[#C5D5EB] hover:border-[#60A5FA]'
                          : 'bg-[#EBF2FA] border-[#DCE6F1] text-[#0B1F3A] hover:bg-[#DBEAFE] hover:border-[#93C5FD]'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] dark:bg-[#60A5FA]" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-medium flex items-center justify-between">
                <span className={isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'}>
                  {category.skills.length} competencies
                </span>
                <span className="text-[#2563EB] dark:text-[#60A5FA] font-semibold">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row: Soft Skills & Languages side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Soft Skills Section (7 cols) */}
          <div className={`lg:col-span-7 rounded-2xl p-6 sm:p-8 border shadow-2xs ${
            isDark
              ? 'bg-[#0F2646] border-[#1E3A60]'
              : 'bg-white border-[#DCE6F1]'
          }`}>
            <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${
                isDark
                  ? 'bg-[#162E52] border-[#2A4D7E] text-[#60A5FA]'
                  : 'bg-[#E0EDFC] border-[#BFDBFE] text-[#2563EB]'
              }`}>
                <HeartHandshake className="w-5 h-5 text-[#2563EB] dark:text-[#60A5FA]" />
              </div>
              <div>
                <h3 className={`font-bold text-lg ${
                  isDark ? 'text-white' : 'text-[#0B1F3A]'
                }`}>
                  Soft Skills
                </h3>
                <p className={`text-xs ${
                  isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
                }`}>
                  Collaborative and professional attributes
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {SOFT_SKILLS.map((skill) => (
                <div
                  key={skill}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold transition-colors ${
                    isDark
                      ? 'bg-[#071324] border-[#1E3A60] text-[#C5D5EB] hover:border-[#60A5FA]'
                      : 'bg-[#F4F7FC] border-[#DCE6F1] text-[#0B1F3A] hover:border-[#2563EB] hover:bg-[#EBF2FA]'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] dark:text-[#60A5FA]" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Section (5 cols) */}
          <div className={`lg:col-span-5 rounded-2xl p-6 sm:p-8 border shadow-2xs ${
            isDark
              ? 'bg-[#0F2646] border-[#1E3A60]'
              : 'bg-white border-[#DCE6F1]'
          }`}>
            <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${
                isDark
                  ? 'bg-[#162E52] border-[#2A4D7E] text-[#60A5FA]'
                  : 'bg-[#E0EDFC] border-[#BFDBFE] text-[#2563EB]'
              }`}>
                <Languages className="w-5 h-5 text-[#2563EB] dark:text-[#60A5FA]" />
              </div>
              <div>
                <h3 className={`font-bold text-lg ${
                  isDark ? 'text-white' : 'text-[#0B1F3A]'
                }`}>
                  Languages
                </h3>
                <p className={`text-xs ${
                  isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
                }`}>
                  Multilingual communication capabilities
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {LANGUAGES.map((lang) => (
                <div
                  key={lang.name}
                  className={`p-3 rounded-xl border flex flex-col ${
                    isDark
                      ? 'bg-[#071324] border-[#1E3A60]'
                      : 'bg-[#F4F7FC] border-[#DCE6F1]'
                  }`}
                >
                  <span className={`font-bold text-sm ${
                    isDark ? 'text-white' : 'text-[#0B1F3A]'
                  }`}>
                    {lang.name}
                  </span>
                  <span className={`text-[11px] font-medium ${
                    isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
                  }`}>
                    {lang.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
