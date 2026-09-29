/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ScrollToTop } from './components/ScrollToTop';

const AppContent: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
      isDark
        ? 'bg-[#071324] text-[#F8FAFC] selection:bg-[#2563EB] selection:text-white'
        : 'bg-[#F4F7FC] text-[#0F172A] selection:bg-[#E0EDFC] selection:text-[#1D4ED8]'
    }`}>
      {/* 13. Fixed/Sticky Navigation Bar with Dark/Light Theme Toggle */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Animated Hero Section with Typing Animation & Quick Statistics */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Technical Skills, Soft Skills & Languages */}
        <Skills />

        {/* 4 & 5. Projects Section with Search Bar, Filters & Interactive Cards */}
        <Projects />

        {/* 6. Education Section with Blue Timeline Markers */}
        <Education />

        {/* 7. Certifications Section with Certificate Preview Modal */}
        <Certifications />

        {/* 8. Contact Section with Working Validation & Internship Badge */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* 12. Floating Scroll-to-Top Button */}
      <ScrollToTop />

      {/* Resume Viewer / Downloader / Print Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
