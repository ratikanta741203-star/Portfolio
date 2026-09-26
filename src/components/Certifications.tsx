import React, { useState } from 'react';
import { CERTIFICATION_ITEMS } from '../data/portfolioData';
import { CertificationItem } from '../types';
import { CheckCircle2, X, Award, ExternalLink } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section
      id="certifications"
      className="py-20 bg-white dark:bg-[#0A0D14] border-b border-slate-200/60 dark:border-slate-800/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs font-mono uppercase tracking-widest text-brand-blue dark:text-brand-electric mb-3">
            07 // CREDENTIALS
          </h2>
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-white">
            Certifications &amp; Courses
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Verified technical coursework from GeeksforGeeks validating core programming principles.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-50 dark:bg-brand-darkCard rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm divide-y divide-slate-200 dark:divide-slate-800 text-left">
          {CERTIFICATION_ITEMS.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="p-5 flex items-center justify-between hover:bg-slate-100/70 dark:hover:bg-slate-800/40 transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm font-mono ${cert.badgeBg} ${cert.badgeColor}`}
                >
                  {cert.badgeText}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    {cert.issuer} • Issued {cert.date}
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-brand-blue dark:text-brand-electric font-semibold flex items-center space-x-1">
                <span>Verified →</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Certification Detail Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-white dark:bg-brand-darkCard border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-2xl text-left">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-brand-blue" />
                <span className="font-mono text-xs font-bold text-brand-blue uppercase">
                  Verified Credential
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-3">
              <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white">
                {selectedCert.title}
              </h3>
              <p className="text-xs font-mono text-slate-500">
                Issued by {selectedCert.issuer} • Credential ID: {selectedCert.verificationId}
              </p>

              <div className="pt-2">
                <span className="text-xs font-mono text-slate-400 block mb-2">Verified Competencies:</span>
                <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                  {selectedCert.skillsLearned.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      ✓ {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-xl bg-brand-blue text-white font-medium text-xs shadow-md"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
