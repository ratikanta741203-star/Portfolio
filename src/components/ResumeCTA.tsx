import React from 'react';
import { Download } from 'lucide-react';

interface ResumeCTAProps {
  onOpenResume: () => void;
}

export const ResumeCTA: React.FC<ResumeCTAProps> = ({ onOpenResume }) => {
  return (
    <section
      id="resume"
      className="py-16 bg-slate-50 dark:bg-[#0E131F] border-b border-slate-200/60 dark:border-slate-800/60"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-brand-blue/10 via-brand-purple/10 to-brand-pink/10 border border-brand-blue/20 shadow-sm">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-3">
            Want to Know More About My Work?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xl mx-auto mb-6 leading-relaxed">
            Download my updated curriculum vitae detailing technical coursework, hackathon achievements, and project codebases.
          </p>
          <button
            type="button"
            onClick={onOpenResume}
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-semibold text-sm shadow-xl shadow-brand-blue/25 hover:opacity-95 hover:scale-[1.02] transition-all cursor-pointer"
          >
            <Download className="w-5 h-5" />
            <span>Download Ratikanta_Sahoo_Resume.pdf</span>
          </button>
        </div>
      </div>
    </section>
  );
};
