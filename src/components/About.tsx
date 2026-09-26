import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const whatIDoItems = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Building responsive, accessible, and interactive frontend interfaces and web tools.',
    },
    {
      icon: '💻',
      title: 'Software Engineering',
      description: 'Writing clean, structured programs with Java, Python, and SQL database backings.',
    },
    {
      icon: '🤖',
      title: 'AI & Innovation',
      description: 'Integrating machine learning workflows, conversational agents, and disaster triage systems.',
    },
    {
      icon: '🚀',
      title: 'Problem Solving',
      description: 'Transforming real-world public challenges into tangible prototypes under time constraints.',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-[#0A0D14]/90 border-b border-slate-200/60 dark:border-slate-800/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-xs font-mono uppercase tracking-widest text-brand-blue dark:text-brand-electric mb-3">
            02 // DISCOVER
          </h2>
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-white">
            About Me
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative and Stats */}
          <div className="lg:col-span-7 space-y-6 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            <p className="p-5 rounded-2xl bg-slate-50 dark:bg-brand-darkCard border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-medium border-l-4 border-l-brand-blue shadow-sm">
              "{PERSONAL_INFO.aboutQuote}"
            </p>

            {PERSONAL_INFO.aboutParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            {/* Stats Row */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-center transition-transform hover:-translate-y-1">
                <span className="block text-xl font-bold text-slate-900 dark:text-white">2nd Year</span>
                <span className="text-xs text-slate-500 font-mono">B.Tech Student</span>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-center transition-transform hover:-translate-y-1">
                <span className="block text-xl font-bold text-brand-blue">Team Lead</span>
                <span className="text-xs text-slate-500 font-mono">Hackathons</span>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-center transition-transform hover:-translate-y-1">
                <span className="block text-xl font-bold text-brand-purple">7+</span>
                <span className="text-xs text-slate-500 font-mono">Active Projects</span>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-center transition-transform hover:-translate-y-1">
                <span className="block text-xl font-bold text-brand-pink">Fresher</span>
                <span className="text-xs text-slate-500 font-mono">Ready to Join</span>
              </div>
            </div>
          </div>

          {/* Right Column: What I Do */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-2">
              What I Do
            </h4>

            {whatIDoItems.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl bg-white dark:bg-brand-darkCard border border-slate-200 dark:border-slate-800 shadow-sm hover:border-brand-blue/40 transition-colors"
              >
                <div className="flex items-center space-x-3 mb-1.5">
                  <span className="text-2xl">{item.icon}</span>
                  <h5 className="font-bold text-slate-900 dark:text-white text-base">
                    {item.title}
                  </h5>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
