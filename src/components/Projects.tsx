import React, { useState, useMemo } from 'react';
import {
  ArrowUpRight,
  FolderGit2,
  Search,
  X,
  Github,
  ExternalLink,
  Layers,
  Sparkles,
  RotateCcw
} from 'lucide-react';
import { Project, PROJECTS } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { useTheme } from '../context/ThemeContext';

export const Projects: React.FC = () => {
  const { isDark } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Search and Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Projects');

  const filterCategories = [
    'All Projects',
    'Java',
    'Spring Boot',
    'Python',
    'Web Development',
    'Database'
  ];

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Projects');
  };

  // Filtered Projects Logic
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      // Category Filter
      let matchesCategory = true;
      if (selectedCategory === 'Java') {
        matchesCategory = project.technologies.includes('Java');
      } else if (selectedCategory === 'Spring Boot') {
        matchesCategory = project.technologies.includes('Spring Boot');
      } else if (selectedCategory === 'Python') {
        matchesCategory = project.technologies.includes('Python');
      } else if (selectedCategory === 'Web Development') {
        matchesCategory = project.technologies.some((t) =>
          ['HTML', 'CSS', 'JSP', 'Servlets', 'REST API'].includes(t)
        );
      } else if (selectedCategory === 'Database') {
        matchesCategory = project.technologies.some((t) =>
          ['MySQL', 'SQL'].includes(t)
        );
      }

      // Search Query Filter
      const query = searchQuery.trim().toLowerCase();
      let matchesSearch = true;
      if (query) {
        const inTitle = project.title.toLowerCase().includes(query);
        const inDesc = project.shortDescription.toLowerCase().includes(query) ||
                       project.fullDescription.toLowerCase().includes(query);
        const inTech = project.technologies.some((t) =>
          t.toLowerCase().includes(query)
        );
        const inRole = project.role.toLowerCase().includes(query);
        matchesSearch = inTitle || inDesc || inTech || inRole;
      }

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'All Projects';

  return (
    <section id="projects" className={`py-20 border-b transition-colors duration-300 ${
      isDark ? 'bg-[#071324] border-[#1E3A60]' : 'bg-[#F4F7FC] border-[#DCE6F1]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border ${
            isDark
              ? 'text-[#60A5FA] bg-[#162E52] border-[#2A4D7E]'
              : 'text-[#2563EB] bg-[#E0EDFC] border-[#BFDBFE]'
          }`}>
            Featured Portfolio Work
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 ${
            isDark ? 'text-white' : 'text-[#0B1F3A]'
          }`}>
            Projects
          </h2>
          <p className={`text-sm sm:text-base mt-2 ${
            isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
          }`}>
            Enterprise backend architectures, automated data pipelines, and full-stack software applications.
          </p>
          <div className="w-12 h-1 bg-[#2563EB] mx-auto mt-3 rounded-full" />
        </div>

        {/* 5. Project Search and Technology Filters Bar */}
        <div className={`mb-12 p-5 sm:p-6 rounded-2xl border shadow-sm transition-colors ${
          isDark
            ? 'bg-[#0F2646] border-[#1E3A60]'
            : 'bg-white border-[#DCE6F1]'
        }`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 ${
                isDark ? 'text-[#60A5FA]' : 'text-[#64748B]'
              }`} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, technology, or description..."
                className={`w-full pl-10 pr-9 py-2.5 rounded-xl text-sm border transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] ${
                  isDark
                    ? 'bg-[#071324] border-[#1E3A60] text-white placeholder-[#64748B]'
                    : 'bg-[#F4F7FC] border-[#DCE6F1] text-[#0F172A] placeholder-[#94A3B8]'
                }`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 p-0.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 ${
                    isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
                  }`}
                  aria-label="Clear search text"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Match Counter & Clear Option */}
            <div className="flex items-center gap-3">
              <span className={`text-xs font-semibold ${
                isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
              }`}>
                Showing <strong className={isDark ? 'text-white' : 'text-[#0B1F3A]'}>{filteredProjects.length}</strong> of {PROJECTS.length} projects
              </span>

              {hasActiveFilters && (
                <button
                  onClick={handleClearFilters}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                    isDark
                      ? 'bg-[#162E52] border-[#2A4D7E] text-[#60A5FA] hover:bg-[#1E3A60]'
                      : 'bg-[#E0EDFC] border-[#BFDBFE] text-[#2563EB] hover:bg-[#DBEAFE]'
                  }`}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Clear Filters</span>
                </button>
              )}
            </div>
          </div>

          {/* Technology Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <span className={`text-xs font-semibold mr-1 ${
              isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
            }`}>
              Filters:
            </span>
            {filterCategories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-xs'
                      : isDark
                      ? 'bg-[#162E52] border-[#2A4D7E] text-[#C5D5EB] hover:text-white hover:border-[#60A5FA]'
                      : 'bg-[#F4F7FC] border-[#DCE6F1] text-[#0B1F3A] hover:bg-[#EBF2FA] hover:border-[#BFDBFE]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 
          3-Column Grid on Desktop (lg:grid-cols-3)
          2-Column Grid on Tablet (md:grid-cols-2)
          1-Column Grid on Mobile (grid-cols-1)
          Projects 1, 2, 3 occupy row 1
          Project 4 occupies row 2, aligned to the left
        */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`group rounded-2xl border transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1 ${
                  isDark
                    ? 'bg-[#0F2646] border-[#1E3A60] hover:border-[#2563EB] hover:shadow-xl hover:shadow-blue-900/30'
                    : 'bg-white border-[#DCE6F1] hover:border-[#2563EB] hover:shadow-xl hover:shadow-blue-500/15'
                }`}
              >
                {/* Card Image Slot: Large Dashboard Screenshot at the top */}
                <div
                  className="relative aspect-video w-full bg-[#0B1F3A] overflow-hidden border-b border-[#DCE6F1] dark:border-[#1E3A60] cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {!imageErrors[project.id] ? (
                    <img
                      src={project.image}
                      alt={`${project.title} dashboard interface preview`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(project.id)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0B1F3A] text-white p-4">
                      <FolderGit2 className="w-10 h-10 text-[#60A5FA] mb-2" />
                      <span className="text-xs font-semibold">{project.title}</span>
                    </div>
                  )}

                  {/* Subtle Hover Overlay with Quick View Details CTA */}
                  <div className="absolute inset-0 bg-[#0B1F3A]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white text-[#0B1F3A] text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#2563EB]" />
                    </span>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Project Title: Dark Navy Blue / White in Dark */}
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className={`text-xl font-bold leading-snug mb-2.5 cursor-pointer transition-colors ${
                        isDark
                          ? 'text-white group-hover:text-[#60A5FA]'
                          : 'text-[#0B1F3A] group-hover:text-[#2563EB]'
                      }`}
                    >
                      {project.title}
                    </h3>

                    {/* Project Short Description: Slate Gray */}
                    <p className={`text-sm leading-relaxed mb-6 font-normal ${
                      isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
                    }`}>
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Technology Tags & Interactive Card Action Buttons */}
                  <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
                    {/* Technology Tags: Light blue backgrounds with dark blue text */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border transition-colors ${
                            isDark
                              ? 'bg-[#162E52] border-[#2A4D7E] text-[#93C5FD]'
                              : 'bg-[#EBF2FA] border-[#BFDBFE] text-[#0B1F3A]'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Interactive Action Buttons on Card */}
                    <div className="flex items-center gap-2 pt-2">
                      {/* View Details Button */}
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold transition-all shadow-xs cursor-pointer focus-visible:ring-2 focus-visible:ring-[#60A5FA]"
                      >
                        <span>View Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      {/* GitHub Repository button when available */}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                            isDark
                              ? 'bg-[#162E52] border-[#2A4D7E] text-[#C5D5EB] hover:text-white hover:border-[#60A5FA]'
                              : 'bg-white border-[#DCE6F1] text-[#0B1F3A] hover:border-[#2563EB] hover:text-[#2563EB]'
                          }`}
                          title="View GitHub Repository"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#60A5FA]" />
                          <span className="hidden sm:inline">GitHub</span>
                        </a>
                      )}

                      {/* Live Demo button when available */}
                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-all shadow-xs"
                          title="View Live Demo"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty Search Results State */
          <div className={`p-12 text-center rounded-2xl border ${
            isDark ? 'bg-[#0F2646] border-[#1E3A60]' : 'bg-white border-[#DCE6F1]'
          }`}>
            <FolderGit2 className={`w-12 h-12 mx-auto mb-3 ${
              isDark ? 'text-[#60A5FA]' : 'text-[#2563EB]'
            }`} />
            <h3 className={`text-lg font-bold ${
              isDark ? 'text-white' : 'text-[#0B1F3A]'
            }`}>
              No matching projects found
            </h3>
            <p className={`text-sm mt-1 max-w-md mx-auto ${
              isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
            }`}>
              No projects matched the search term "{searchQuery}". Try searching for another skill like "Spring Boot", "MySQL", or "Python".
            </p>
            <button
              onClick={handleClearFilters}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2563EB] text-white text-xs font-semibold hover:bg-[#1D4ED8] transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Search and Filters</span>
            </button>
          </div>
        )}
      </div>

      {/* Project Lightbox & Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
