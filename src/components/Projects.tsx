import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectDemoModal } from './modals/ProjectDemoModal';
import { ExternalLink, Play, Code2 } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-[#0A0D14] border-b border-slate-200/60 dark:border-slate-800/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 text-left">
          <h2 className="text-xs font-mono uppercase tracking-widest text-brand-blue dark:text-brand-electric mb-3">
            04 // PORTFOLIO WORK
          </h2>
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-white">
            Featured Projects
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Click any project preview to launch the live interactive simulation and test its workflows.
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {/* Project 1: Odisha Disaster Guardian (Card LEFT, Preview RIGHT) */}
          <div className="animate-float-1 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center rounded-3xl p-1 bg-gradient-to-r from-blue-500/30 via-indigo-500/20 to-transparent shadow-2xl shadow-blue-500/10 hover:border-cyan-400/60 transition-all duration-300">
            <div className="lg:col-span-12 rounded-[22px] bg-white/80 dark:bg-brand-darkCard/90 backdrop-blur-xl border border-blue-500/30 p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Card Left */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-4 text-left">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-brand-blue/15 text-brand-blue border border-brand-blue/30">
                        AI • GIS
                      </span>
                      <span className="text-[11px] font-mono text-cyan-400 font-semibold">
                        Featured Project #01
                      </span>
                    </div>
                    <h4 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <span>🌊 Odisha Disaster Guardian</span>
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      An AI-powered disaster-management platform designed to assist citizens, volunteers, and emergency teams during floods and cyclones with real-time situational response.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">AI</span>
                    <span className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">Python</span>
                    <span className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">GIS</span>
                    <span className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">Disaster Response</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800 text-xs font-mono">
                    <span className="text-slate-500 dark:text-slate-400">Hackathon Flagship</span>
                    <div className="flex items-center space-x-3">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(PROJECTS[0])}
                        className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors cursor-pointer"
                      >
                        <Play className="w-3 h-3" />
                        <span>Try Interactive Demo</span>
                      </button>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-brand-blue dark:text-brand-electric font-semibold hover:underline"
                      >
                        GitHub →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Visual Preview Right */}
                <div
                  onClick={() => setSelectedProject(PROJECTS[0])}
                  className="lg:col-span-5 flex items-center justify-center p-4 rounded-2xl bg-slate-950/80 border border-blue-500/20 shadow-inner h-56 sm:h-64 overflow-hidden group cursor-pointer relative"
                >
                  <img
                    src={PROJECTS[0].image}
                    alt="Odisha Disaster Guardian"
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-mono font-bold shadow-lg flex items-center space-x-1.5">
                      <Play className="w-3.5 h-3.5" />
                      <span>Launch Interactive Simulation</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: DEFEND AI (Preview LEFT, Card RIGHT) */}
          <div className="animate-float-2 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center rounded-3xl p-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-brand-electric/30 shadow-2xl shadow-cyan-500/10 hover:border-brand-electric/60 transition-all duration-300">
            <div className="lg:col-span-12 rounded-[22px] bg-white/80 dark:bg-brand-darkCard/90 backdrop-blur-xl border border-cyan-400/30 p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Preview Left */}
                <div
                  onClick={() => setSelectedProject(PROJECTS[1])}
                  className="lg:col-span-5 order-2 lg:order-1 flex items-center justify-center p-4 rounded-2xl bg-slate-950/90 border border-cyan-500/20 shadow-inner h-56 sm:h-64 overflow-hidden group cursor-pointer relative"
                >
                  <img
                    src={PROJECTS[1].image}
                    alt="DEFEND AI Threat Detection"
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-cyan-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 text-xs font-mono font-bold shadow-lg flex items-center space-x-1.5">
                      <Play className="w-3.5 h-3.5" />
                      <span>Launch Packet Scanner</span>
                    </span>
                  </div>
                </div>

                {/* Card Right */}
                <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-between space-y-4 text-left">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-brand-electric/15 text-brand-electric border border-brand-electric/30">
                        Cybersecurity
                      </span>
                      <span className="text-[11px] font-mono text-cyan-300 font-semibold">
                        Featured Project #02
                      </span>
                    </div>
                    <h4 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <span>🛡️ DEFEND AI</span>
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      AI-based threat detection and cybersecurity intelligence platform to detect and neutralize cyber attacks, breach attempts, and suspicious network anomalies.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">AI</span>
                    <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">Python</span>
                    <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">ML</span>
                    <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">Intrusion Detection</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800 text-xs font-mono">
                    <span className="text-slate-500 dark:text-slate-400">Threat Intelligence</span>
                    <div className="flex items-center space-x-3">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(PROJECTS[1])}
                        className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors cursor-pointer"
                      >
                        <Play className="w-3 h-3" />
                        <span>Try Threat Scanner</span>
                      </button>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-cyan-400 font-semibold hover:underline"
                      >
                        GitHub →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3: AI Girl Assistant with IMAGE_6 (Card LEFT, Preview RIGHT) */}
          <div className="animate-float-3 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center rounded-3xl p-1 bg-gradient-to-r from-brand-purple/30 via-purple-500/20 to-transparent shadow-2xl shadow-purple-500/10 hover:border-purple-300 transition-all duration-300">
            <div className="lg:col-span-12 rounded-[22px] bg-white/80 dark:bg-brand-darkCard/90 backdrop-blur-xl border border-purple-500/30 p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Card Left */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-4 text-left">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-brand-purple/15 text-brand-purple border border-brand-purple/30">
                        Voice AI
                      </span>
                      <span className="text-[11px] font-mono text-purple-300 font-semibold">
                        Featured Project #03
                      </span>
                    </div>
                    <h4 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <span>🤖 AI Girl Assistant</span>
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Personal AI assistant web application featuring intuitive natural voice interaction, real-time speech synthesis, persistent conversational memory, and responsive UI.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">Python</span>
                    <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">Flask</span>
                    <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">JavaScript</span>
                    <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">Voice Synthesis</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800 text-xs font-mono">
                    <span className="text-slate-500 dark:text-slate-400">Conversational Agent</span>
                    <div className="flex items-center space-x-3">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(PROJECTS[2])}
                        className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-brand-purple text-white font-semibold hover:bg-purple-600 transition-colors cursor-pointer"
                      >
                        <Play className="w-3 h-3" />
                        <span>Try Voice Bench</span>
                      </button>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-brand-purple font-semibold hover:underline"
                      >
                        GitHub →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Visual Preview Right */}
                <div
                  onClick={() => setSelectedProject(PROJECTS[2])}
                  className="lg:col-span-5 flex items-center justify-center p-4 rounded-2xl bg-slate-950/80 border border-purple-500/20 shadow-inner h-56 sm:h-64 overflow-hidden group cursor-pointer relative"
                >
                  <img
                    src={PROJECTS[2].image}
                    alt="AI Girl Assistant"
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-purple-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-mono font-bold shadow-lg flex items-center space-x-1.5">
                      <Play className="w-3.5 h-3.5" />
                      <span>Launch Voice Interaction</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 4: A9 Shop with IMAGE_10 (Preview LEFT, Card RIGHT) */}
          <div className="animate-float-4 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center rounded-3xl p-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-emerald-600/30 shadow-2xl shadow-emerald-500/10 hover:border-emerald-400/60 transition-all duration-300">
            <div className="lg:col-span-12 rounded-[22px] bg-white/80 dark:bg-brand-darkCard/90 backdrop-blur-xl border border-emerald-500/30 p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Preview Left */}
                <div
                  onClick={() => setSelectedProject(PROJECTS[3])}
                  className="lg:col-span-5 order-2 lg:order-1 flex items-center justify-center p-4 rounded-2xl bg-slate-950/80 border border-emerald-500/20 shadow-inner h-56 sm:h-64 overflow-hidden group cursor-pointer relative"
                >
                  <img
                    src={PROJECTS[3].image}
                    alt="A9 Shop Platform"
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-emerald-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-4 py-2 rounded-xl bg-emerald-500 text-white text-xs font-mono font-bold shadow-lg flex items-center space-x-1.5">
                      <Play className="w-3.5 h-3.5" />
                      <span>Launch Store Demo</span>
                    </span>
                  </div>
                </div>

                {/* Card Right */}
                <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-between space-y-4 text-left">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        E-Commerce
                      </span>
                      <span className="text-[11px] font-mono text-emerald-300 font-semibold">
                        Featured Project #04
                      </span>
                    </div>
                    <h4 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <span>🛍️ A9 Shop Platform</span>
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Hyper-local store platform with responsive product catalog, dynamic cart management, instant checkout, and live inventory indicators tailored for local merchants.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">HTML5</span>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">CSS3</span>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">JavaScript</span>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Local Commerce</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800 text-xs font-mono">
                    <span className="text-slate-500 dark:text-slate-400">Local Retail Tech</span>
                    <div className="flex items-center space-x-3">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(PROJECTS[3])}
                        className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-colors cursor-pointer"
                      >
                        <Play className="w-3 h-3" />
                        <span>Try Cart &amp; Shop</span>
                      </button>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-emerald-400 font-semibold hover:underline"
                      >
                        GitHub →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 5: A9 Restaurant with IMAGE_8 (Card LEFT, Preview RIGHT) */}
          <div className="animate-float-1 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center rounded-3xl p-1 bg-gradient-to-r from-amber-500/30 via-orange-500/20 to-transparent shadow-2xl shadow-amber-500/10 hover:border-amber-400/60 transition-all duration-300">
            <div className="lg:col-span-12 rounded-[22px] bg-white/80 dark:bg-brand-darkCard/90 backdrop-blur-xl border border-amber-500/30 p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Card Left */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-4 text-left">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/15 text-amber-500 border border-amber-500/30">
                        Hospitality
                      </span>
                      <span className="text-[11px] font-mono text-amber-400 font-semibold">
                        Featured Project #05
                      </span>
                    </div>
                    <h4 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <span>🍽️ A9 Restaurant Concept</span>
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Modern restaurant digital portal featuring interactive visual menus, category filtering, chef specials, table reservations, and backend order management.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-500 border border-amber-500/20">HTML</span>
                    <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-500 border border-amber-500/20">CSS</span>
                    <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-500 border border-amber-500/20">MySQL</span>
                    <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-500 border border-amber-500/20">Reservations</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800 text-xs font-mono">
                    <span className="text-slate-500 dark:text-slate-400">Dining &amp; Hospitality</span>
                    <div className="flex items-center space-x-3">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(PROJECTS[4])}
                        className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition-colors cursor-pointer"
                      >
                        <Play className="w-3 h-3" />
                        <span>Reserve Table Demo</span>
                      </button>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-amber-500 font-semibold hover:underline"
                      >
                        GitHub →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Visual Preview Right */}
                <div
                  onClick={() => setSelectedProject(PROJECTS[4])}
                  className="lg:col-span-5 flex items-center justify-center p-4 rounded-2xl bg-slate-950/80 border border-amber-500/20 shadow-inner h-56 sm:h-64 overflow-hidden group cursor-pointer relative"
                >
                  <img
                    src={PROJECTS[4].image}
                    alt="A9 Restaurant Concept"
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-amber-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-mono font-bold shadow-lg flex items-center space-x-1.5">
                      <Play className="w-3.5 h-3.5" />
                      <span>Launch Reservation Pass</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 6: EATM Smart School with IMAGE_7 (Preview LEFT, Card RIGHT) */}
          <div className="animate-float-2 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center rounded-3xl p-1 bg-gradient-to-r from-transparent via-lime-500/20 to-lime-600/30 shadow-2xl shadow-lime-500/10 hover:border-lime-400/60 transition-all duration-300">
            <div className="lg:col-span-12 rounded-[22px] bg-white/80 dark:bg-brand-darkCard/90 backdrop-blur-xl border border-lime-500/30 p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Preview Left */}
                <div
                  onClick={() => setSelectedProject(PROJECTS[5])}
                  className="lg:col-span-5 order-2 lg:order-1 flex items-center justify-center p-4 rounded-2xl bg-slate-950/80 border border-lime-500/20 shadow-inner h-56 sm:h-64 overflow-hidden group cursor-pointer relative"
                >
                  <img
                    src={PROJECTS[5].image}
                    alt="EATM Smart School"
                    className="max-h-36 max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-lime-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-4 py-2 rounded-xl bg-lime-500 text-slate-950 text-xs font-mono font-bold shadow-lg flex items-center space-x-1.5">
                      <Play className="w-3.5 h-3.5" />
                      <span>Open Student Dashboard</span>
                    </span>
                  </div>
                </div>

                {/* Card Right */}
                <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-between space-y-4 text-left">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-lime-600/15 text-lime-500 border border-lime-500/30">
                        EdTech Portal
                      </span>
                      <span className="text-[11px] font-mono text-lime-400 font-semibold">
                        Featured Project #06
                      </span>
                    </div>
                    <h4 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <span>🏫 EATM Smart School</span>
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Academic management platform unifying student dashboards, notice dissemination, daily attendance tracking, grade tracking, and institutional timetables.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-md bg-lime-500/10 text-lime-500 border border-lime-500/20">Web</span>
                    <span className="px-2.5 py-1 rounded-md bg-lime-500/10 text-lime-500 border border-lime-500/20">Java</span>
                    <span className="px-2.5 py-1 rounded-md bg-lime-500/10 text-lime-500 border border-lime-500/20">MySQL</span>
                    <span className="px-2.5 py-1 rounded-md bg-lime-500/10 text-lime-500 border border-lime-500/20">EdTech</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800 text-xs font-mono">
                    <span className="text-slate-500 dark:text-slate-400">Campus Systems</span>
                    <div className="flex items-center space-x-3">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(PROJECTS[5])}
                        className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-lime-500 text-slate-950 font-bold hover:bg-lime-400 transition-colors cursor-pointer"
                      >
                        <Play className="w-3 h-3" />
                        <span>View Portal Simulation</span>
                      </button>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-lime-500 font-semibold hover:underline"
                      >
                        GitHub →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 7: RUDRAM 2.0 (Card LEFT, Preview RIGHT) */}
          <div className="animate-float-3 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center rounded-3xl p-1 bg-gradient-to-r from-brand-pink/30 via-red-500/20 to-transparent shadow-2xl shadow-pink-500/10 hover:border-pink-300 transition-all duration-300">
            <div className="lg:col-span-12 rounded-[22px] bg-white/80 dark:bg-brand-darkCard/90 backdrop-blur-xl border border-pink-500/30 p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Card Left */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-4 text-left">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-pink-500/15 text-pink-400 border border-pink-500/30">
                        🚨 Emergency Platform
                      </span>
                      <span className="text-[11px] font-mono text-pink-300 font-semibold">
                        Featured Project #07
                      </span>
                    </div>
                    <h4 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <span>🚨 RUDRAM 2.0</span>
                    </h4>
                    <div className="text-xs font-mono text-brand-electric font-semibold mb-3">
                      AI • Python • GIS • Web • Real-Time Systems
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Advanced disaster-management and emergency-response platform designed to support flood, cyclone, heatwave, and other disaster situations through real-time monitoring, rescue coordination, citizen assistance, and emergency resource management.
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block mb-2">
                      KEY CAPABILITIES &amp; FEATURES:
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs font-mono">
                      <span className="px-2.5 py-1 rounded-md bg-pink-500/15 text-pink-300 border border-pink-500/20">SOS</span>
                      <span className="px-2.5 py-1 rounded-md bg-blue-500/15 text-blue-300 border border-blue-500/20">Live Location</span>
                      <span className="px-2.5 py-1 rounded-md bg-purple-500/15 text-purple-300 border border-purple-500/20">Rescue Coordination</span>
                      <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/20">Shelters</span>
                      <span className="px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-300 border border-amber-500/20">Emergency Teams</span>
                      <span className="px-2.5 py-1 rounded-md bg-cyan-500/15 text-cyan-300 border border-cyan-500/20">Disaster Monitoring</span>
                      <span className="px-2.5 py-1 rounded-md bg-pink-500/15 text-pink-300 border border-pink-500/20">Resource Tracking</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800 text-xs font-mono">
                    <span className="text-slate-500 dark:text-slate-400">SIH Initiative</span>
                    <div className="flex items-center space-x-3">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(PROJECTS[6])}
                        className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-pink-500 text-white font-semibold hover:bg-pink-600 transition-colors cursor-pointer"
                      >
                        <Play className="w-3 h-3" />
                        <span>Try Command Console</span>
                      </button>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-pink-400 font-semibold hover:underline"
                      >
                        GitHub →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Telemetry Node / Visual Preview Right */}
                <div
                  onClick={() => setSelectedProject(PROJECTS[6])}
                  className="lg:col-span-5 p-6 rounded-2xl bg-slate-950/90 border border-pink-500/30 shadow-inner flex flex-col justify-between space-y-4 h-64 font-mono cursor-pointer hover:border-pink-400/80 transition-colors"
                >
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-ping"></span>
                      <span className="text-xs font-bold text-pink-400">RUDRAM TELEMETRY NODE</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                      LIVE SYNC
                    </span>
                  </div>
                  <div className="space-y-2 text-xs text-slate-300 text-left">
                    <div className="flex justify-between items-center bg-slate-900/80 px-3 py-1.5 rounded">
                      <span className="text-slate-400">Emergency Feed:</span>
                      <span className="text-pink-300 font-semibold">Active Flood / Cyclone Alert</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-900/80 px-3 py-1.5 rounded">
                      <span className="text-slate-400">GIS Dispatch:</span>
                      <span className="text-brand-electric font-semibold">Spatial Geo-Fencing</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-900/80 px-3 py-1.5 rounded">
                      <span className="text-slate-400">Citizen SOS:</span>
                      <span className="text-emerald-400 font-semibold">Triaged &amp; Assigned</span>
                    </div>
                  </div>
                  <div className="text-[11px] text-slate-400 border-t border-slate-800 pt-2 flex items-center justify-between">
                    <span>Node: RUDRAM-EAST-01</span>
                    <span className="text-pink-400 font-bold">Real-Time Grid</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Project Simulation Modal */}
      <ProjectDemoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
