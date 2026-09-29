import React, { useEffect } from 'react';
import {
  X,
  CheckCircle2,
  ExternalLink,
  ArrowLeft,
  Workflow,
  Code2,
  Layers,
  Sparkles,
  Github
} from 'lucide-react';
import { Project, PERSONAL_DETAILS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { isDark } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-[#0B1F3A]/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={`relative rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border transition-colors ${
          isDark
            ? 'bg-[#0F2646] border-[#1E3A60] text-[#F8FAFC]'
            : 'bg-white border-[#DCE6F1] text-[#0F172A]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header with Back to Projects & Close Button */}
        <div className={`sticky top-0 z-10 px-6 py-4 border-b flex items-center justify-between backdrop-blur-md ${
          isDark
            ? 'bg-[#0F2646]/95 border-[#1E3A60]'
            : 'bg-white/95 border-[#DCE6F1]'
        }`}>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer border ${
                isDark
                  ? 'bg-[#162E52] border-[#2A4D7E] text-[#60A5FA] hover:bg-[#1E3A60]'
                  : 'bg-[#E0EDFC] border-[#BFDBFE] text-[#2563EB] hover:bg-[#DBEAFE]'
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Projects</span>
            </button>
            <span className="text-xs font-semibold text-[#60A5FA] uppercase tracking-wider hidden sm:inline">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-xl transition-colors cursor-pointer ${
              isDark
                ? 'text-[#94A3B8] hover:text-white hover:bg-[#162E52]'
                : 'text-[#64748B] hover:text-[#0B1F3A] hover:bg-[#F4F7FC]'
            }`}
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-7">
          {/* Project Title and Header */}
          <div>
            <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-[#0B1F3A]'
            }`}>
              {project.title}
            </h3>
            <p className={`text-sm mt-1 font-medium ${
              isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
            }`}>
              Role: <strong className={isDark ? 'text-white' : 'text-[#0B1F3A]'}>{project.role}</strong>
            </p>
          </div>

          {/* Large Dashboard Screenshot */}
          <div className={`rounded-xl overflow-hidden border shadow-inner ${
            isDark ? 'bg-[#071324] border-[#1E3A60]' : 'bg-[#0B1F3A] border-[#DCE6F1]'
          }`}>
            <img
              src={project.image}
              alt={`${project.title} dashboard interface`}
              className="w-full h-auto object-cover max-h-[380px]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Action Buttons: GitHub Repository & Live Demo if available */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] active:bg-[#1E40AF] text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-500/20 hover:shadow-lg transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.liveDemoUrl ? (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold shadow-md transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            ) : (
              <span className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border ${
                isDark
                  ? 'bg-[#162E52]/60 border-[#2A4D7E] text-[#94A3B8]'
                  : 'bg-[#F4F7FC] border-[#DCE6F1] text-[#64748B]'
              }`}>
                <span>Enterprise Local Deployment</span>
              </span>
            )}

            <button
              onClick={onClose}
              className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                isDark
                  ? 'bg-[#162E52] border-[#2A4D7E] text-[#C5D5EB] hover:bg-[#1E3A60]'
                  : 'bg-white border-[#DCE6F1] text-[#0F172A] hover:bg-[#F4F7FC]'
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Projects</span>
            </button>
          </div>

          {/* Project Overview */}
          <div>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${
              isDark ? 'text-[#60A5FA]' : 'text-[#0B1F3A]'
            }`}>
              Project Overview
            </h4>
            <p className={`leading-relaxed text-sm sm:text-base ${
              isDark ? 'text-[#CBD5E1]' : 'text-[#475569]'
            }`}>
              {project.fullDescription}
            </p>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-2.5 ${
              isDark ? 'text-[#60A5FA]' : 'text-[#0B1F3A]'
            }`}>
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full border ${
                    isDark
                      ? 'bg-[#162E52] border-[#2A4D7E] text-[#93C5FD]'
                      : 'bg-[#EBF2FA] border-[#BFDBFE] text-[#0B1F3A]'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className={`rounded-xl p-5 border ${
            isDark ? 'bg-[#071324] border-[#1E3A60]' : 'bg-[#F4F7FC] border-[#DCE6F1]'
          }`}>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-3.5 flex items-center gap-2 ${
              isDark ? 'text-[#60A5FA]' : 'text-[#0B1F3A]'
            }`}>
              <Sparkles className="w-4 h-4 text-[#2563EB] dark:text-[#60A5FA]" />
              <span>Key Features</span>
            </h4>
            <ul className="space-y-2.5">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className={`flex items-start gap-2.5 text-sm ${
                  isDark ? 'text-[#CBD5E1]' : 'text-[#334155]'
                }`}>
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] dark:text-[#60A5FA] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How the Project Works */}
          <div className={`rounded-xl p-5 border ${
            isDark ? 'bg-[#071324] border-[#1E3A60]' : 'bg-[#F4F7FC] border-[#DCE6F1]'
          }`}>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-3.5 flex items-center gap-2 ${
              isDark ? 'text-[#60A5FA]' : 'text-[#0B1F3A]'
            }`}>
              <Workflow className="w-4 h-4 text-[#2563EB] dark:text-[#60A5FA]" />
              <span>How the Project Works</span>
            </h4>
            <div className="space-y-3">
              {project.howItWorks.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 shadow-2xs">
                    {idx + 1}
                  </span>
                  <p className={`text-sm leading-relaxed ${
                    isDark ? 'text-[#CBD5E1]' : 'text-[#475569]'
                  }`}>
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer note with author attribution and closing CTA */}
          <div className={`pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs ${
            isDark ? 'border-[#1E3A60] text-[#94A3B8]' : 'border-[#F1F5F9] text-[#64748B]'
          }`}>
            <span>Developed by {PERSONAL_DETAILS.name} · CSE AIET</span>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-[#2563EB] dark:text-[#60A5FA] hover:underline font-semibold cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Projects</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
