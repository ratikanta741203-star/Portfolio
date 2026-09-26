import React from 'react';
import { JOURNEY_MILESTONES } from '../data/portfolioData';

interface JourneyProps {
  onContactClick: () => void;
}

export const Journey: React.FC<JourneyProps> = ({ onContactClick }) => {
  return (
    <section
      id="journey"
      className="py-24 lg:py-32 bg-slate-50/50 dark:bg-[#0A0D14] border-b border-slate-200/60 dark:border-slate-800/60 relative overflow-hidden text-left"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-purple/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-xs font-mono uppercase tracking-widest text-brand-blue dark:text-brand-electric mb-3 flex items-center justify-center space-x-2">
            <span>// MILESTONES &amp; GROWTH</span>
          </h2>
          <h3 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 dark:text-white tracking-tight">
            My Academic &amp; Developer Journey
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            Chronological path from foundational academics to leading hackathon prototypes and software engineering aspirations.
          </p>
        </div>

        {/* Timeline Main Wrapper */}
        <div className="relative">
          {/* Central Glowing Vertical Line (centered on md+, left-aligned on mobile) */}
          <div className="absolute top-6 bottom-6 left-6 md:left-1/2 md:-translate-x-1/2 w-1 md:w-1.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-[0_0_18px_rgba(59,130,246,0.65)] z-0"></div>

          <div className="space-y-12 md:space-y-20 relative z-10">
            {/* 1st Item (2023 | 10th Standard Completed) -> RIGHT SIDE */}
            <div className="relative flex flex-col md:flex-row md:items-center">
              {/* Center Node Marker */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-500 dark:border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.6)] z-20">
                <span className="w-4 h-4 rounded-full bg-blue-500 animate-pulse"></span>
              </div>

              {/* Left spacer (desktop) */}
              <div className="hidden md:block md:w-1/2 md:pr-14 text-right">
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500 tracking-wider">
                  FOUNDATION • 2023
                </span>
              </div>

              {/* Horizontal connector (desktop) */}
              <div className="hidden md:block absolute left-1/2 w-14 h-[2px] bg-gradient-to-r from-blue-500 to-blue-400/40 z-10"></div>

              {/* Right Content Card (1st item on right) */}
              <div className="pl-16 md:pl-14 md:w-1/2">
                <div className="animate-float-1 backdrop-blur-xl bg-white/90 dark:bg-slate-900/85 border border-blue-500/30 rounded-2xl p-6 sm:p-7 shadow-2xl shadow-blue-500/10 hover:border-cyan-400/60 hover:shadow-cyan-500/25 transition-all duration-300 group">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30">
                      2023
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">Matriculation</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-blue dark:group-hover:text-cyan-300 transition-colors">
                    10th Standard Completed
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    A.B. Higher Secondary School, Basudevpur, Bhadrak •{' '}
                    <strong className="text-brand-blue dark:text-blue-400 font-semibold">67.84%</strong> (407/600)
                  </p>
                  <div className="mt-4 pt-3.5 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span>Basudevpur, Bhadrak</span>
                    <span className="text-brand-blue dark:text-blue-400 font-medium">Schooling Base</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2nd Item (2025 | 12th Higher Secondary) -> LEFT SIDE */}
            <div className="relative flex flex-col md:flex-row md:items-center">
              {/* Center Node Marker */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-500 dark:border-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.6)] z-20">
                <span className="w-4 h-4 rounded-full bg-indigo-500 animate-ping"></span>
              </div>

              {/* Left Content Card (2nd item on left) */}
              <div className="pl-16 md:pl-0 md:pr-14 md:w-1/2 order-2 md:order-1">
                <div className="animate-float-2 backdrop-blur-xl bg-white/90 dark:bg-slate-900/85 border border-indigo-500/30 rounded-2xl p-6 sm:p-7 shadow-2xl shadow-indigo-500/10 hover:border-cyan-400/60 hover:shadow-cyan-500/25 transition-all duration-300 group">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30">
                      2025
                    </span>
                    <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                      Higher Secondary Science
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-300 transition-colors">
                    12th Higher Secondary (Science) &amp; Started B.Tech
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    Sri Aurobindo Science College, Cuttack •{' '}
                    <strong className="text-brand-blue dark:text-cyan-300 font-semibold">
                      77.84%
                    </strong>{' '}
                    (467/600)
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    Embarked on Bachelor of Technology degree journey at EATM Bhubaneswar.
                  </p>
                  <div className="mt-4 pt-3.5 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span>Cuttack → Bhubaneswar</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium">B.Tech Transition</span>
                  </div>
                </div>
              </div>

              {/* Horizontal connector (desktop) */}
              <div className="hidden md:block absolute right-1/2 w-14 h-[2px] bg-gradient-to-l from-indigo-500 to-indigo-400/40 z-10"></div>

              {/* Right spacer (desktop) */}
              <div className="hidden md:block md:w-1/2 md:pl-14 text-left order-1 md:order-2">
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500 tracking-wider">
                  COLLEGE ENTRY • 2025
                </span>
              </div>
            </div>

            {/* 3rd Item (2026 Present | SIH Team Leader) -> RIGHT SIDE */}
            <div className="relative flex flex-col md:flex-row md:items-center">
              {/* Center Node Marker */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-slate-900 border-2 border-purple-500 dark:border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.6)] z-20">
                <span className="w-4 h-4 rounded-full bg-purple-500 animate-pulse"></span>
              </div>

              {/* Left spacer (desktop) */}
              <div className="hidden md:block md:w-1/2 md:pr-14 text-right">
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500 tracking-wider">
                  ACTIVE INITIATIVE • CURRENT
                </span>
              </div>

              {/* Horizontal connector (desktop) */}
              <div className="hidden md:block absolute left-1/2 w-14 h-[2px] bg-gradient-to-r from-purple-500 to-purple-400/40 z-10"></div>

              {/* Right Content Card (3rd item on right) */}
              <div className="pl-16 md:pl-14 md:w-1/2">
                <div className="animate-float-3 backdrop-blur-xl bg-white/90 dark:bg-slate-900/85 border border-purple-500/30 rounded-2xl p-6 sm:p-7 shadow-2xl shadow-purple-500/10 hover:border-purple-300 hover:shadow-purple-500/25 transition-all duration-300 group">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/30">
                      2026 (Present)
                    </span>
                    <span className="inline-flex items-center space-x-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                      <span>Active Now</span>
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-purple dark:group-hover:text-purple-300 transition-colors">
                    2nd Year B.Tech • SIH Team Leader • Multi-Project Building
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    Leading hackathon projects (Odisha Disaster Guardian, DEFEND AI, RUDRAM 2.0), developing interactive web applications, and actively learning modern software stacks.
                  </p>
                  <div className="mt-4 pt-3.5 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap gap-2 text-xs font-mono">
                    <span className="px-2 py-0.5 rounded bg-purple-500/10 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300">
                      Hackathon Lead
                    </span>
                    <span className="px-2 py-0.5 rounded bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300">
                      Full-Stack Building
                    </span>
                    <span className="px-2 py-0.5 rounded bg-pink-500/10 dark:bg-pink-500/20 text-pink-700 dark:text-pink-300">
                      AI Solutions
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4th Item (2026 → Future | Full-Stack Engineer) -> LEFT SIDE */}
            <div className="relative flex flex-col md:flex-row md:items-center">
              {/* Center Node Marker */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-slate-900 border-2 border-pink-500 dark:border-pink-400 shadow-[0_0_20px_rgba(244,63,94,0.6)] z-20">
                <span className="w-4 h-4 rounded-full bg-pink-500 animate-ping"></span>
              </div>

              {/* Left Content Card (4th item on left) */}
              <div className="pl-16 md:pl-0 md:pr-14 md:w-1/2 order-2 md:order-1">
                <div className="animate-float-4 backdrop-blur-xl bg-white/90 dark:bg-slate-900/85 border border-pink-500/30 rounded-2xl p-6 sm:p-7 shadow-2xl shadow-pink-500/10 hover:border-pink-300 hover:shadow-pink-500/25 transition-all duration-300 group">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold bg-pink-500/15 text-pink-600 dark:text-pink-400 border border-pink-500/30">
                      2026 → Future
                    </span>
                    <span className="text-[11px] font-mono text-brand-blue dark:text-cyan-400 font-semibold">Career Horizon</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-pink dark:group-hover:text-pink-300 transition-colors">
                    Industry-Ready Full-Stack Software Engineer 🚀
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    Targeting dynamic internship and entry-level positions to build enterprise web architectures at scale.
                  </p>
                  <div className="mt-4 pt-3.5 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span className="text-pink-600 dark:text-pink-400 font-semibold">Open for Opportunities</span>
                    <button
                      type="button"
                      onClick={onContactClick}
                      className="text-brand-blue dark:text-cyan-400 hover:underline font-semibold transition-colors cursor-pointer"
                    >
                      Get in touch →
                    </button>
                  </div>
                </div>
              </div>

              {/* Horizontal connector (desktop) */}
              <div className="hidden md:block absolute right-1/2 w-14 h-[2px] bg-gradient-to-l from-pink-500 to-pink-400/40 z-10"></div>

              {/* Right spacer (desktop) */}
              <div className="hidden md:block md:w-1/2 md:pl-14 text-left order-1 md:order-2">
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500 tracking-wider">
                  NEXT FRONTIER • FUTURE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
