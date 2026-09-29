import React from 'react';
import { FolderGit2, Award, Server, Sparkles } from 'lucide-react';
import { QUICK_STATS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const QuickStats: React.FC = () => {
  const { isDark } = useTheme();

  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'FolderGit2':
        return <FolderGit2 className="w-6 h-6 text-[#2563EB] dark:text-[#60A5FA]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#2563EB] dark:text-[#60A5FA]" />;
      case 'Server':
        return <Server className="w-6 h-6 text-[#2563EB] dark:text-[#60A5FA]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#2563EB] dark:text-[#60A5FA]" />;
      default:
        return <Server className="w-6 h-6 text-[#2563EB] dark:text-[#60A5FA]" />;
    }
  };

  return (
    <div className="w-full mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {QUICK_STATS.map((stat) => (
          <div
            key={stat.value}
            className={`p-5 rounded-2xl border transition-all duration-300 group hover:-translate-y-1 ${
              isDark
                ? 'bg-[#0F2646] border-[#1E3A60] hover:border-[#2563EB] hover:shadow-lg hover:shadow-blue-900/20'
                : 'bg-white border-[#DCE6F1] hover:border-[#2563EB] hover:shadow-md hover:shadow-blue-500/10'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className={`text-2xl font-extrabold tracking-tight ${
                isDark ? 'text-white' : 'text-[#0B1F3A]'
              } group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors`}>
                {stat.value}
              </span>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                isDark ? 'bg-[#162E52] border border-[#2A4D7E]' : 'bg-[#E0EDFC] border border-[#BFDBFE]'
              }`}>
                {getStatIcon(stat.icon)}
              </div>
            </div>

            <h4 className={`text-sm font-bold ${
              isDark ? 'text-[#C5D5EB]' : 'text-[#334155]'
            }`}>
              {stat.label}
            </h4>

            <p className={`text-xs mt-1 leading-relaxed ${
              isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
            }`}>
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
