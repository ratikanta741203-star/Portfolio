import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section
      id="skills"
      className="py-20 bg-slate-50 dark:bg-[#0E131F] border-b border-slate-200/60 dark:border-slate-800/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-mono uppercase tracking-widest text-brand-blue dark:text-brand-electric mb-3">
            03 // EXPERTISE
          </h2>
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-3">
            Categorized Skills &amp; Stack
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            A comprehensive overview of programming languages, development tools, productivity software, and leadership abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.title;
            return (
              <div
                key={cat.title}
                onClick={() => setSelectedCategory(isSelected ? null : cat.title)}
                className={`rounded-2xl p-6 bg-white dark:bg-brand-darkCard border transition-all duration-300 shadow-sm cursor-pointer ${
                  isSelected
                    ? 'border-brand-blue dark:border-brand-electric ring-2 ring-brand-blue/20 shadow-lg -translate-y-1'
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-0.5'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4 ${
                    cat.badgeColor === 'blue'
                      ? 'bg-brand-blue/10 text-brand-blue'
                      : cat.badgeColor === 'purple'
                      ? 'bg-brand-purple/10 text-brand-purple'
                      : cat.badgeColor === 'pink'
                      ? 'bg-brand-pink/10 text-brand-pink'
                      : 'bg-emerald-500/10 text-emerald-500'
                  }`}
                >
                  {cat.icon}
                </div>

                <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-1">
                  {cat.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 font-mono">
                  {cat.subtitle}
                </p>

                <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-2.5 py-1 rounded transition-colors ${
                        skill.highlight && skill.colorClass
                          ? `bg-slate-100 dark:bg-slate-800 ${skill.colorClass}`
                          : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
