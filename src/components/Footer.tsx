import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-slate-100 dark:bg-black border-t border-slate-200 dark:border-slate-800 text-center text-xs font-mono text-slate-500 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          Designed with Electric Blue, Purple &amp; Pink Accents • Ratikanta Sahoo Portfolio
        </div>
        <div className="flex items-center space-x-4">
          <span>{PERSONAL_INFO.address.split(',')[0]}, Odisha, India</span>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-brand-blue dark:hover:text-brand-electric transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
