import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown, Download, Mail, ExternalLink, MapPin } from 'lucide-react';

interface HeroProps {
  onResumeClick: () => void;
  onViewWorkClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onResumeClick, onViewWorkClick }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = PERSONAL_INFO.roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative pt-16 pb-20 lg:pt-20 lg:pb-28 bg-grid-pattern border-b border-slate-200/60 dark:border-slate-800/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>{PERSONAL_INFO.status}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-serif font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-5">
              Hi, I'm <br className="hidden sm:block" />
              <span className="text-gradient">{PERSONAL_INFO.name}</span>
            </h1>

            {/* Dynamic Typing Title */}
            <div className="h-10 text-lg sm:text-2xl font-mono text-slate-700 dark:text-slate-300 font-medium mb-4 flex items-center justify-center lg:justify-start">
              <span className="text-brand-blue dark:text-brand-electric">&gt;&nbsp;</span>
              <span className="text-slate-900 dark:text-white font-semibold">{displayedText}</span>
              <span className="typing-cursor">&nbsp;</span>
            </div>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-6 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>

            {/* Location Tag */}
            <div className="flex items-center justify-center lg:justify-start text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mb-8 space-x-2">
              <MapPin className="w-4 h-4 text-brand-pink flex-shrink-0" />
              <span>{PERSONAL_INFO.address}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={onViewWorkClick}
                className="px-6 py-3.5 rounded-xl bg-brand-blue hover:bg-blue-600 text-white font-medium text-sm shadow-lg shadow-brand-blue/30 hover:-translate-y-0.5 transition-all flex items-center space-x-2 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onResumeClick}
                className="px-6 py-3.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-medium text-sm border border-slate-300 dark:border-slate-700 transition-all flex items-center space-x-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-brand-purple" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl border border-brand-blue/50 text-brand-blue dark:text-brand-electric hover:bg-brand-blue/10 font-medium text-sm transition-all inline-block"
              >
                Contact Me
              </a>
            </div>

            {/* Social Connect Links */}
            <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold">
                Connect:
              </span>
              <div className="flex items-center flex-wrap gap-2.5">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  aria-label={`Email: ${PERSONAL_INFO.email}`}
                  title={`Email: ${PERSONAL_INFO.email}`}
                  className="group relative inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-brand-blue/50 dark:hover:border-brand-blue/50 text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-electric shadow-sm hover:shadow-brand-blue/20 transition-all"
                >
                  <Mail className="w-4 h-4 text-brand-blue group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Email</span>
                </a>

                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  title="GitHub - Ratikanta Sahoo"
                  className="group relative inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-brand-purple/50 dark:hover:border-brand-purple/50 text-slate-700 dark:text-slate-300 hover:text-brand-purple dark:hover:text-purple-300 shadow-sm hover:shadow-purple-500/20 transition-all"
                >
                  <svg
                    className="w-4 h-4 text-slate-800 dark:text-slate-200 group-hover:text-brand-purple dark:group-hover:text-purple-300 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  <span className="font-medium">GitHub</span>
                </a>

                <a
                  href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp: ${PERSONAL_INFO.phone}`}
                  title={`WhatsApp / Call (${PERSONAL_INFO.phone})`}
                  className="group relative inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 shadow-sm hover:shadow-emerald-500/20 transition-all"
                >
                  <svg
                    className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="font-medium">WhatsApp</span>
                </a>

                <a
                  href={PERSONAL_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Instagram: ${PERSONAL_INFO.instagramHandle}`}
                  title={`Instagram: ${PERSONAL_INFO.instagramHandle}`}
                  className="group relative inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-brand-pink/50 dark:hover:border-brand-pink/50 text-slate-700 dark:text-slate-300 hover:text-brand-pink dark:hover:text-pink-300 shadow-sm hover:shadow-pink-500/20 transition-all"
                >
                  <svg
                    className="w-4 h-4 text-brand-pink group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" />
                  </svg>
                  <span className="font-medium">Instagram</span>
                </a>

                <a
                  href={PERSONAL_INFO.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`X: ${PERSONAL_INFO.twitterHandle}`}
                  title={`X: ${PERSONAL_INFO.twitterHandle}`}
                  className="group relative inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white shadow-sm hover:shadow-cyan-500/20 transition-all"
                >
                  <svg
                    className="w-3.5 h-3.5 fill-current text-slate-800 dark:text-slate-200 group-hover:scale-110 transition-transform"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span className="font-medium">X</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Developer Portrait & JSON Card */}
          <div className="w-full max-w-md lg:w-[420px] flex flex-col gap-6">
            {/* Top Portrait Card with glowing border */}
            <div className="relative rounded-3xl p-1 bg-gradient-to-br from-brand-blue via-brand-purple to-brand-pink shadow-2xl glow-blue">
              <div className="bg-white dark:bg-brand-darkCard rounded-[22px] p-5 sm:p-6 backdrop-blur-xl">
                <div className="flex items-center space-x-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-24 h-28 sm:w-28 sm:h-32 rounded-2xl p-0.5 bg-gradient-to-tr from-brand-electric via-brand-blue to-brand-purple shadow-xl overflow-hidden">
                      <img
                        src={PERSONAL_INFO.heroCardImage}
                        alt="Ratikanta Sahoo Profile"
                        className="w-full h-full object-cover rounded-[14px]"
                        onError={(e) => {
                          // graceful fallback if direct link fails
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>
                    <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white dark:border-brand-darkCard"></span>
                    </span>
                  </div>

                  <div className="flex-1 min-w-0 text-left">
                    <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 mb-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>Open for Internships</span>
                    </div>
                    <h3 className="text-lg font-bold font-serif text-slate-900 dark:text-white leading-snug truncate">
                      {PERSONAL_INFO.name}
                    </h3>
                    <p className="text-xs text-brand-blue dark:text-brand-electric font-mono font-semibold">
                      Full-Stack &amp; Web Developer
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-brand-pink flex-shrink-0" />
                      <span>Odisha, India</span>
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-100 dark:bg-slate-800 text-brand-blue dark:text-brand-electric font-semibold">
                        Java
                      </span>
                      <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-100 dark:bg-slate-800 text-brand-purple font-semibold">
                        Python
                      </span>
                      <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-100 dark:bg-slate-800 text-brand-pink font-semibold">
                        Web
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Developer Profile JSON Card */}
            <div className="relative rounded-3xl p-1 bg-gradient-to-br from-brand-blue via-brand-purple to-brand-pink shadow-2xl glow-blue">
              <div className="bg-white dark:bg-brand-darkCard rounded-[22px] p-5 backdrop-blur-xl text-left">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2 mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">developer-profile.json</span>
                </div>
                <div className="font-mono text-xs space-y-1 text-slate-600 dark:text-slate-300">
                  <p>
                    <span className="text-brand-purple font-semibold">const</span>{' '}
                    <span className="text-brand-blue font-bold">developer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    name: <span className="text-emerald-500">"Ratikanta Sahoo"</span>,
                  </p>
                  <p className="pl-4">
                    role: <span className="text-emerald-500">"Aspiring Full-Stack Dev"</span>,
                  </p>
                  <p className="pl-4">
                    leadership: <span className="text-emerald-500">"SIH Team Lead"</span>,
                  </p>
                  <p className="pl-4">
                    stack: [
                    <span className="text-amber-500">"Java"</span>,{' '}
                    <span className="text-amber-500">"Python"</span>,{' '}
                    <span className="text-amber-500">"JS"</span>,{' '}
                    <span className="text-amber-500">"MySQL"</span>
                    ]
                  </p>
                  <p>&#125;;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
