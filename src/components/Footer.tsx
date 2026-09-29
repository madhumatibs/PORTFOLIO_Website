import React from 'react';
import { ArrowUp, Mail, Code2 } from 'lucide-react';
import { PERSONAL_DETAILS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

const GithubIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
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

const LinkedinIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const Footer: React.FC = () => {
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`text-white py-12 border-t transition-colors duration-300 ${
      isDark ? 'bg-[#061222] border-[#162E52]' : 'bg-[#0B1F3A] border-[#1E3A60]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1E3A60]/80">
          {/* Brand info with light blue accent icon */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#162E52] border border-[#2A4D7E] flex items-center justify-center text-[#60A5FA]">
              <Code2 className="w-5 h-5 text-[#60A5FA]" />
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">
                {PERSONAL_DETAILS.name}
              </h3>
              <p className="text-xs text-[#93A9C8]">
                Java Developer Portfolio
              </p>
            </div>
          </div>

          {/* Social Links: GitHub, LinkedIn, Email with Light Blue Accent Icons */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_DETAILS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#162E52] hover:bg-[#2563EB] text-[#C5D5EB] hover:text-white transition-all text-xs font-semibold border border-[#2A4D7E] hover:border-[#2563EB]"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4 text-[#60A5FA]" />
              <span>GitHub</span>
            </a>

            <a
              href={PERSONAL_DETAILS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#162E52] hover:bg-[#2563EB] text-[#C5D5EB] hover:text-white transition-all text-xs font-semibold border border-[#2A4D7E] hover:border-[#2563EB]"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4 text-[#60A5FA]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${PERSONAL_DETAILS.email}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#162E52] hover:bg-[#2563EB] text-[#C5D5EB] hover:text-white transition-all text-xs font-semibold border border-[#2A4D7E] hover:border-[#2563EB]"
              aria-label="Email Madhumati"
            >
              <Mail className="w-4 h-4 text-[#60A5FA]" />
              <span>Email</span>
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#162E52] hover:bg-[#2563EB] active:bg-[#1E40AF] text-[#C5D5EB] hover:text-white text-xs font-semibold transition-all cursor-pointer border border-[#2A4D7E]"
            aria-label="Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-[#60A5FA]" />
          </button>
        </div>

        {/* Copyright notice with year 2026 */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#93A9C8] gap-3 text-center sm:text-left">
          <p>© 2026 {PERSONAL_DETAILS.name}. All rights reserved.</p>
          <p className="text-[#64748B] dark:text-[#94A3B8]">
            Professional Java Developer Portfolio · Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
