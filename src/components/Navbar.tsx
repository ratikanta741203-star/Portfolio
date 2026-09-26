import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Sun, Moon, Menu, X, ArrowUpRight, FileCode, ExternalLink } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  onHireMeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme, onHireMeClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Journey', href: '#journey', highlight: true },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#0A0D14]/90 shadow-md border-b border-slate-200 dark:border-slate-800/90'
          : 'bg-white/80 dark:bg-[#0A0D14]/85 border-b border-slate-200 dark:border-slate-800/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand identity */}
        <a href="#home" className="group flex items-center space-x-3 text-left">
          <div className="relative flex-shrink-0">
            <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-brand-blue via-brand-purple to-brand-pink shadow-lg shadow-brand-blue/20 group-hover:scale-105 transition-transform overflow-hidden">
              <img
                src={PERSONAL_INFO.avatarImage}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white dark:border-[#0A0D14] rounded-full"></span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg text-slate-900 dark:text-white tracking-wide leading-none group-hover:text-brand-blue transition-colors">
              RATIKANTA SAHOO
            </span>
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-1">
              Full-Stack &amp; Web Dev
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center space-x-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`transition-colors ${
                link.highlight
                  ? 'text-brand-blue dark:text-brand-electric font-semibold'
                  : 'hover:text-brand-blue dark:hover:text-brand-electric'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Items */}
        <div className="flex items-center space-x-3">
          {/* Standalone HTML + CSS + JS Link */}
          <a
            href="/portfolio.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border border-brand-blue/30 dark:border-brand-electric/30 bg-brand-blue/10 dark:bg-brand-electric/10 text-brand-blue dark:text-brand-electric hover:bg-brand-blue/20 transition-colors text-xs font-mono font-medium"
            title="Open pure HTML file with attached CSS and JavaScript"
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>HTML + CSS + JS</span>
            <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
          </a>

          {/* Theme toggle button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark / light theme"
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={isDark ? 'Switch to Clean White mode' : 'Switch to Dark Cyber mode'}
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Hire Me CTA */}
          <button
            type="button"
            onClick={onHireMeClick}
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-md shadow-brand-blue/25 hover:opacity-95 hover:shadow-lg transition-all cursor-pointer"
          >
            <span>Hire Me</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden px-4 pt-2 pb-6 bg-white/95 dark:bg-[#0A0D14]/95 border-b border-slate-200 dark:border-slate-800 backdrop-blur-2xl">
          <nav className="flex flex-col space-y-3 pt-2">
            <a
              href="/portfolio.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-sm font-mono px-3 py-2.5 rounded-lg bg-brand-blue/10 dark:bg-brand-electric/10 text-brand-blue dark:text-brand-electric border border-brand-blue/30"
            >
              <span>📄 Pure HTML + Attached CSS/JS</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium px-3 py-2 rounded-lg transition-colors ${
                  link.highlight
                    ? 'text-brand-blue dark:text-brand-electric bg-blue-500/10 font-semibold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
