import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Code2, Sun, Moon } from 'lucide-react';
import { PERSONAL_DETAILS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isDark ? 'bg-[#061222]' : 'bg-[#0B1F3A]'
      } ${
        isScrolled
          ? 'shadow-lg shadow-black/30 border-b border-[#1E3A60] py-3'
          : 'border-b border-[#162C4E] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-lg p-1 -m-1"
          >
            <div className="w-9 h-9 rounded-lg bg-[#162E52] border border-[#2A4D7E] text-white flex items-center justify-center font-bold text-base shadow-xs group-hover:bg-[#2563EB] group-hover:border-[#2563EB] transition-all">
              <Code2 className="w-5 h-5 text-[#60A5FA] group-hover:text-white transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-base tracking-tight leading-tight group-hover:text-[#60A5FA] transition-colors">
                {PERSONAL_DETAILS.name}
              </span>
              <span className="text-[11px] font-medium text-[#93A9C8] tracking-wide">
                Java Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all relative ${
                    isActive
                      ? 'text-white font-semibold bg-[#2563EB] shadow-xs'
                      : 'text-[#C5D5EB] hover:text-white hover:bg-[#162E52]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Theme Toggle & Download Resume Button */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-[#162E52] hover:bg-[#1E3E6F] text-[#C5D5EB] hover:text-white border border-[#2A4D7E] transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#60A5FA] focus-visible:outline-hidden"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Switch to Light Blue Theme' : 'Switch to Dark Navy Theme'}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-[#60A5FA]" />
              )}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] active:bg-[#1E40AF] rounded-xl transition-all shadow-md shadow-blue-900/30 hover:shadow-lg hover:shadow-blue-600/30 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#60A5FA] focus-visible:outline-hidden"
              aria-label="Download and view resume"
            >
              <Download className="w-4 h-4 text-white" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Mobile Action Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-[#162E52] text-[#C5D5EB] hover:text-white border border-[#2A4D7E]"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-[#60A5FA]" />
              )}
            </button>

            <button
              onClick={onOpenResume}
              className="sm:hidden inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#2563EB] rounded-lg"
              title="Download Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#C5D5EB] hover:text-white hover:bg-[#162E52] rounded-lg transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-2 border-t border-[#1E3A60] flex flex-col gap-1 bg-[#0F2646] rounded-xl shadow-xl p-3 border border-[#1E3A60] animate-in fade-in">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-white bg-[#2563EB] font-semibold'
                      : 'text-[#C5D5EB] hover:text-white hover:bg-[#162E52]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-2 mt-1 border-t border-[#1E3A60]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg transition-colors shadow-sm cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
