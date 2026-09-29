import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Education: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section id="education" className={`py-20 border-b transition-colors duration-300 ${
      isDark ? 'bg-[#071324] border-[#1E3A60]' : 'bg-white border-[#DCE6F1]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border ${
            isDark
              ? 'text-[#60A5FA] bg-[#162E52] border-[#2A4D7E]'
              : 'text-[#2563EB] bg-[#E0EDFC] border-[#BFDBFE]'
          }`}>
            Academic Background
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 ${
            isDark ? 'text-white' : 'text-[#0B1F3A]'
          }`}>
            Education
          </h2>
          <p className={`text-sm sm:text-base mt-2 ${
            isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
          }`}>
            Academic milestones and computer science engineering foundation.
          </p>
          <div className="w-12 h-1 bg-[#2563EB] mx-auto mt-3 rounded-full" />
        </div>

        {/* Education Timeline / Cards Layout with Blue Timeline Markers */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Blue Timeline Line */}
          <div className={`hidden sm:block absolute left-8 top-6 bottom-6 w-0.5 ${
            isDark ? 'bg-[#1E3A60]' : 'bg-[#BFDBFE]'
          }`} />

          <div className="space-y-8">
            {EDUCATION_LIST.map((item) => (
              <div
                key={item.degree}
                className="relative flex flex-col sm:flex-row items-start gap-6 group"
              >
                {/* Blue Timeline Marker */}
                <div className={`hidden sm:flex w-16 h-16 rounded-2xl border-2 border-[#2563EB] shadow-md items-center justify-center shrink-0 z-10 group-hover:scale-105 transition-all duration-300 ${
                  isDark
                    ? 'bg-[#0F2646] shadow-blue-900/30 group-hover:bg-[#162E52]'
                    : 'bg-white shadow-blue-500/15 group-hover:bg-[#E0EDFC]'
                }`}>
                  <GraduationCap className="w-7 h-7 text-[#2563EB] dark:text-[#60A5FA]" />
                </div>

                {/* White Card with Subtle Blue Border */}
                <div className={`flex-1 w-full rounded-2xl p-6 sm:p-7 border shadow-2xs hover:shadow-lg transition-all duration-200 ${
                  isDark
                    ? 'bg-[#0F2646] border-[#1E3A60] hover:border-[#60A5FA] hover:shadow-blue-900/20'
                    : 'bg-white border-[#DCE6F1] hover:border-[#2563EB] hover:shadow-blue-500/10'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div>
                      <div className={`sm:hidden inline-flex items-center gap-2 mb-2 px-2.5 py-1 rounded-lg ${
                        isDark ? 'bg-[#162E52] text-[#60A5FA]' : 'bg-[#E0EDFC] text-[#2563EB]'
                      }`}>
                        <GraduationCap className="w-4 h-4" />
                        <span className="text-xs font-bold">Academic</span>
                      </div>
                      <h3 className={`text-xl font-bold ${
                        isDark ? 'text-white' : 'text-[#0B1F3A]'
                      }`}>
                        {item.degree}
                      </h3>
                      {item.field && (
                        <p className="text-[#2563EB] dark:text-[#60A5FA] font-semibold text-sm mt-0.5">
                          {item.field}
                        </p>
                      )}
                      <p className={`font-medium text-sm mt-1 ${
                        isDark ? 'text-[#C5D5EB]' : 'text-[#334155]'
                      }`}>
                        {item.institution}
                      </p>
                    </div>

                    {/* Badges for period & score in Blue Theme */}
                    <div className="flex sm:flex-col items-start sm:items-end gap-2 shrink-0">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold ${
                        isDark
                          ? 'bg-[#071324] border-[#1E3A60] text-[#C5D5EB]'
                          : 'bg-[#F4F7FC] border-[#DCE6F1] text-[#0B1F3A]'
                      }`}>
                        <Calendar className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#60A5FA]" />
                        {item.period}
                      </span>

                      {item.score && (
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full border text-xs font-bold ${
                          isDark
                            ? 'bg-[#162E52] border-[#2563EB]/40 text-[#93C5FD]'
                            : 'bg-[#E0EDFC] border-[#BFDBFE] text-[#1D4ED8]'
                        }`}>
                          <Award className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#60A5FA]" />
                          Score: {item.score}
                        </span>
                      )}

                      {item.type && (
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md border text-[11px] font-semibold ${
                          isDark
                            ? 'bg-[#162E52] border-[#2A4D7E] text-[#93C5FD]'
                            : 'bg-[#EFF6FF] border-[#BFDBFE] text-[#1E40AF]'
                        }`}>
                          {item.type}
                        </span>
                      )}
                    </div>
                  </div>

                  {item.location && (
                    <div className={`flex items-center gap-1.5 text-xs mb-3 ${
                      isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
                    }`}>
                      <MapPin className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#60A5FA]" />
                      <span>{item.location}</span>
                    </div>
                  )}

                  {item.description && (
                    <p className={`text-sm leading-relaxed pt-3 border-t ${
                      isDark ? 'border-slate-800 text-[#CBD5E1]' : 'border-[#F1F5F9] text-[#475569]'
                    }`}>
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
