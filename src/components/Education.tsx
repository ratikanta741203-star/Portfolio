import React from 'react';
import { EDUCATION_ITEMS } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-20 bg-slate-50 dark:bg-[#0E131F] border-b border-slate-200/60 dark:border-slate-800/60 text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-xs font-mono uppercase tracking-widest text-brand-blue dark:text-brand-electric mb-3">
            06 // FOUNDATION
          </h2>
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-white">
            Education
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION_ITEMS.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white dark:bg-brand-darkCard border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-brand-blue/30 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold ${
                      index === 0
                        ? 'bg-brand-blue/10 text-brand-blue'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {item.yearRange}
                  </span>
                  <span
                    className={`text-xs font-semibold ${
                      index === 0 ? 'text-emerald-500' : 'font-mono text-slate-400'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {item.degree}
                </h4>
                <p
                  className={`text-sm font-medium mb-2 ${
                    index === 0 ? 'text-brand-purple' : 'text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {item.institution}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {item.location}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs font-mono flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400">{item.footerLabel}</span>
                <span
                  className={`font-bold ${
                    index === 1
                      ? 'text-brand-blue'
                      : index === 2
                      ? 'text-brand-purple'
                      : 'text-slate-900 dark:text-white'
                  }`}
                >
                  {item.footerValue}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
