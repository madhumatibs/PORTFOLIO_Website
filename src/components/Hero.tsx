import React, { useState, useEffect } from 'react';
import {
  Download,
  Mail,
  ArrowRight,
  MapPin,
  ExternalLink,
  Code2,
  Database,
  Server,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { PERSONAL_DETAILS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { QuickStats } from './QuickStats';

// Icons for GitHub and LinkedIn
const GithubIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const LinkedinIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { isDark } = useTheme();

  // Typing animation state cycling through Java Developer, Backend Developer, Spring Boot Developer
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = PERSONAL_DETAILS.typingRoles;
    const currentFullText = roles[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing forward
      if (displayedText.length < currentFullText.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        }, 90);
      } else {
        // Pause before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      // Deleting backwards
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
        }, 50);
      } else {
        // Switch to next role
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className={`relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b transition-colors duration-300 ${
        isDark
          ? 'bg-gradient-to-b from-[#09182E] via-[#071324] to-[#0B1F3A] border-[#1E3A60]'
          : 'bg-gradient-to-b from-[#EBF2FA] via-[#F4F7FC] to-[#FFFFFF] border-[#DCE6F1]'
      }`}
    >
      {/* Subtle blue radial glow in background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#60A5FA]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle geometric dot pattern */}
      <div
        className={`absolute inset-0 pointer-events-none ${isDark ? 'opacity-[0.03]' : 'opacity-[0.04]'}`}
        style={{
          backgroundImage: `radial-gradient(${isDark ? '#60A5FA' : '#0B1F3A'} 1.5px, transparent 1.5px)`,
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Internship Availability Badge with message */}
            <div className={`inline-flex flex-col sm:flex-row sm:items-center gap-2 px-3.5 py-2 rounded-2xl mb-6 shadow-2xs border transition-colors ${
              isDark
                ? 'bg-[#0F2646] border-[#2563EB]/50 text-[#93C5FD]'
                : 'bg-[#E0EDFC] border-[#BFDBFE] text-[#1E40AF]'
            }`}>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] animate-pulse" />
                <span className="font-bold text-xs">Open to Internship Opportunities</span>
              </div>
              <span className={`hidden sm:inline ${isDark ? 'text-[#1E3A60]' : 'text-[#BFDBFE]'}`}>|</span>
              <span className={`text-[11px] sm:text-xs font-medium ${isDark ? 'text-[#C5D5EB]' : 'text-[#334155]'}`}>
                Java, Backend & Software Development
              </span>
            </div>

            {/* Main Heading: Highlight name in Royal Blue */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-4 ${
              isDark ? 'text-white' : 'text-[#0B1F3A]'
            }`}>
              Hi, I'm <span className="text-[#2563EB] relative inline-block">
                {PERSONAL_DETAILS.name}
              </span>
            </h1>

            {/* Animated Typing Title */}
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-5 flex items-center gap-2 min-h-[36px]">
              <span className={isDark ? 'text-[#CBD5E1]' : 'text-[#334155]'}>
                Aspiring
              </span>
              <span className="text-[#2563EB] dark:text-[#60A5FA] font-extrabold border-b-2 border-[#2563EB]/40 pb-0.5">
                {displayedText}
                <span className="inline-block w-0.5 h-6 bg-[#2563EB] dark:bg-[#60A5FA] ml-1 animate-pulse align-middle" />
              </span>
            </h2>

            {/* Location indicator */}
            <div className={`flex items-center gap-1.5 text-xs font-semibold mb-6 ${
              isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
            }`}>
              <MapPin className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#60A5FA]" />
              <span>{PERSONAL_DETAILS.location}</span>
              <span className="mx-1">·</span>
              <span>Alva's Institute of Engineering & Technology</span>
            </div>

            {/* Introduction paragraph */}
            <p className={`text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal ${
              isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
            }`}>
              {PERSONAL_DETAILS.summary}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 w-full sm:w-auto">
              {/* Royal blue primary button */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#2563EB] text-white font-semibold text-sm hover:bg-[#1D4ED8] active:bg-[#1E40AF] shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#60A5FA]"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary button: Download Resume */}
              <button
                onClick={onOpenResume}
                className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm shadow-xs transition-all duration-200 cursor-pointer border ${
                  isDark
                    ? 'bg-[#0F2646] border-[#1E3A60] text-white hover:bg-[#162E52] hover:border-[#2563EB]'
                    : 'bg-white border-[#DCE6F1] text-[#0F172A] hover:bg-[#F4F7FC] hover:border-[#2563EB] hover:text-[#2563EB]'
                }`}
              >
                <Download className="w-4 h-4 text-[#2563EB] dark:text-[#60A5FA]" />
                <span>Download Resume</span>
              </button>

              {/* Contact Me button */}
              <a
                href="#contact"
                className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border transition-all duration-200 ${
                  isDark
                    ? 'bg-[#162E52] border-[#2A4D7E] text-[#93C5FD] hover:bg-[#1E3A60]'
                    : 'bg-[#EFF6FF] border-[#BFDBFE] text-[#1D4ED8] hover:bg-[#DBEAFE]'
                }`}
              >
                <Mail className="w-4 h-4 text-[#2563EB] dark:text-[#60A5FA]" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Verified Profiles */}
            <div className={`flex items-center gap-4 pt-4 border-t w-full max-w-md ${
              isDark ? 'border-[#1E3A60]' : 'border-[#DCE6F1]'
            }`}>
              <span className={`text-xs font-semibold uppercase tracking-wider ${
                isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
              }`}>
                Connect:
              </span>
              <a
                href={PERSONAL_DETAILS.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border shadow-2xs hover:shadow-xs transition-all text-xs font-medium ${
                  isDark
                    ? 'bg-[#0F2646] border-[#1E3A60] text-white hover:border-[#60A5FA]'
                    : 'bg-white border-[#DCE6F1] text-[#0F172A] hover:text-[#2563EB] hover:border-[#2563EB]'
                }`}
                aria-label="GitHub Profile"
              >
                <GithubIcon className={`w-4 h-4 ${isDark ? 'text-white' : 'text-[#0B1F3A]'}`} />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-[#64748B]" />
              </a>

              <a
                href={PERSONAL_DETAILS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border shadow-2xs hover:shadow-xs transition-all text-xs font-medium ${
                  isDark
                    ? 'bg-[#0F2646] border-[#1E3A60] text-[#93C5FD] hover:border-[#2563EB]'
                    : 'bg-white border-[#DCE6F1] text-[#1D4ED8] hover:border-[#2563EB]'
                }`}
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-[#2563EB] dark:text-[#60A5FA]" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-[#64748B]" />
              </a>
            </div>
          </div>

          {/* Right Column: Prominent Name & Developer Showcase (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center w-full">
            <div className="relative w-full max-w-lg group">
              {/* Subtle Blue Glow Effect to make the name stand out */}
              <div className="absolute -inset-3 sm:-inset-5 bg-gradient-to-tr from-[#2563EB]/40 via-[#60A5FA]/30 to-[#2563EB]/40 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 pointer-events-none" />

              {/* Decorative delicate orbit border */}
              <div className="absolute -inset-2 sm:-inset-3 rounded-3xl border border-dashed border-[#60A5FA]/30 pointer-events-none" />

              {/* Prominent Name Showcase Card with subtle royal blue border & soft shadow */}
              <div
                className={`relative rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-[#2563EB] shadow-2xl transition-all duration-500 group-hover:border-[#3B82F6] group-hover:shadow-blue-500/25 ${
                  isDark
                    ? 'bg-gradient-to-br from-[#0F2646]/95 via-[#0B1F3A]/95 to-[#071324]/95 shadow-blue-950/80 text-white'
                    : 'bg-gradient-to-br from-white via-[#F4F7FC] to-[#EBF2FA] shadow-blue-500/15 text-[#0B1F3A]'
                }`}
              >
                {/* Status and Role Top Bar */}
                <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-[#2563EB]/20">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 dark:bg-[#2563EB]/25 border border-[#2563EB]/40 text-[#2563EB] dark:text-[#93C5FD] text-xs font-bold tracking-wide uppercase">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Java Developer</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Open to Internships</span>
                  </div>
                </div>

                {/* Central Prominent Name Display */}
                <div className="text-center py-6 my-2">
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#64748B] dark:text-[#94A3B8] block mb-3">
                    Portfolio of
                  </span>

                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight select-none">
                    <span className="bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent drop-shadow-sm">
                      Madhumati B S
                    </span>
                  </h2>

                  {/* Royal blue accent bar */}
                  <div className="w-20 h-1.5 bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#2563EB] mx-auto mt-4 rounded-full shadow-sm shadow-blue-500/50" />
                </div>

                {/* Academic & Specialty Subtitle */}
                <div className="text-center mt-2 mb-6">
                  <p className="text-sm sm:text-base font-bold text-[#2563EB] dark:text-[#60A5FA]">
                    Backend & Software Development
                  </p>
                  <p className={`text-xs sm:text-sm mt-1 font-medium ${
                    isDark ? 'text-[#CBD5E1]' : 'text-[#475569]'
                  }`}>
                    Computer Science Engineering · AIET, Karnataka
                  </p>
                </div>

                {/* Technical Strengths Badges */}
                <div className="flex flex-wrap items-center justify-center gap-2 pt-5 border-t border-[#2563EB]/20">
                  <span className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border shadow-2xs ${
                    isDark
                      ? 'bg-[#162E52] border-[#2A4D7E] text-[#93C5FD]'
                      : 'bg-white border-[#BFDBFE] text-[#1D4ED8]'
                  }`}>
                    <Server className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#60A5FA]" />
                    <span>Spring Boot</span>
                  </span>

                  <span className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border shadow-2xs ${
                    isDark
                      ? 'bg-[#162E52] border-[#2A4D7E] text-[#93C5FD]'
                      : 'bg-white border-[#BFDBFE] text-[#1D4ED8]'
                  }`}>
                    <Database className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#60A5FA]" />
                    <span>MySQL</span>
                  </span>

                  <span className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border shadow-2xs ${
                    isDark
                      ? 'bg-[#162E52] border-[#2A4D7E] text-[#93C5FD]'
                      : 'bg-white border-[#BFDBFE] text-[#1D4ED8]'
                  }`}>
                    <Sparkles className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#60A5FA]" />
                    <span>REST APIs</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Statistics Strip */}
        <QuickStats />
      </div>
    </section>
  );
};
