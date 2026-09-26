/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Journey } from './components/Journey';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { ResumeCTA } from './components/ResumeCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/modals/ResumeModal';
import { HireMeModal } from './components/modals/HireMeModal';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Ratikanta_Sahoo_Resume_OnePage_Enhanced.pdf';
    link.download = 'Ratikanta_Sahoo_Resume_OnePage_Enhanced.pdf';
    link.click();
  };

  useEffect(() => {
    // Check saved theme preference
    const savedTheme = localStorage.getItem('app-theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('app-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('app-theme', 'light');
      }
      return next;
    });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0A0D14] text-slate-800 dark:text-slate-200 font-sans transition-colors duration-300 relative selection:bg-brand-blue selection:text-white overflow-x-hidden">
      {/* Ambient Light Orbs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
      <div className="fixed top-1/3 right-10 w-96 h-96 bg-brand-purple/15 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="fixed bottom-10 left-1/3 w-80 h-80 bg-brand-pink/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Navigation Bar */}
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        onHireMeClick={() => setIsHireMeOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onResumeClick={downloadResume}
          onViewWorkClick={() => scrollToSection('projects')}
        />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Featured Projects Section with Interactive Demos */}
        <Projects />

        {/* Leadership & Experience Section */}
        <Experience />

        {/* Academic & Developer Journey Timeline */}
        <Journey onContactClick={() => scrollToSection('contact')} />

        {/* Education Section */}
        <Education />

        {/* Certifications Section */}
        <Certifications />

        {/* Resume Download CTA Section */}
        <ResumeCTA onOpenResume={downloadResume} />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <HireMeModal
        isOpen={isHireMeOpen}
        onClose={() => setIsHireMeOpen(false)}
      />
    </div>
  );
}
