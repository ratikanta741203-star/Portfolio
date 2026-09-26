import React from 'react';
import { Users, Award, ShieldCheck, Cpu } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Smart India Hackathon (SIH) — Team Leader',
      organization: 'National Hackathon Initiative',
      period: '2025 – Present',
      badge: 'Team Lead',
      description:
        'Led a 6-member engineering team to design, architect, and prototype real-time emergency triage software (Odisha Disaster Guardian & RUDRAM 2.0). Directed architecture, GIS telemetry pipelines, and pitch presentations.',
      skills: ['Team Leadership', 'GIS Integration', 'Disaster Systems', 'Rapid Prototyping'],
      icon: Users,
    },
    {
      role: 'Full-Stack Software Builder & Open Source Contributor',
      organization: 'Independent Projects & Campus Labs',
      period: '2024 – Present',
      badge: 'Active Builder',
      description:
        'Engineered 7+ complete web and software systems covering threat intelligence (DEFEND AI), conversational speech agents (AI Girl Assistant), and hyper-local merchant platforms (A9 Shop & Restaurant).',
      skills: ['Python', 'Java', 'JavaScript', 'REST Architecture', 'MySQL'],
      icon: Cpu,
    },
    {
      role: 'Technical Student Lead & Hackathon Contributor',
      organization: 'Einstein Academy of Technology & Management (EATM)',
      period: '2025 – Present',
      badge: 'B.Tech CSE',
      description:
        'Facilitated student technical discussions, collaborated on academic software prototypes, and actively spearheaded community technology demos on campus.',
      skills: ['Code Review', 'Mentorship', 'Software Engineering Principles'],
      icon: Award,
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-slate-50 dark:bg-[#0E131F] border-b border-slate-200/60 dark:border-slate-800/60 text-left"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-xs font-mono uppercase tracking-widest text-brand-blue dark:text-brand-electric mb-3">
            05 // LEADERSHIP &amp; IMPACT
          </h2>
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-white">
            Experience &amp; Leadership
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Proven ability to guide teams under hackathon deadlines and build mission-critical solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-brand-darkCard border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-brand-blue/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-blue-500/10 text-brand-blue font-semibold border border-blue-500/20">
                      {exp.period}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-brand-blue transition-colors">
                    {exp.role}
                  </h4>
                  <p className="text-xs font-medium text-brand-purple mb-3">
                    {exp.organization}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
