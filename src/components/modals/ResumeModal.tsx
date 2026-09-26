import React, { useState } from 'react';
import { PERSONAL_INFO, PROJECTS, EDUCATION_ITEMS, CERTIFICATION_ITEMS } from '../../data/portfolioData';
import { X, Download, Printer, Check, Copy, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
RATIKANTA SAHOO
Full-Stack & Web Developer | B.Tech CSE (2nd Year)
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone}
Location: ${PERSONAL_INFO.address}

SUMMARY:
${PERSONAL_INFO.aboutQuote}

EDUCATION:
- Bachelor of Technology (B.Tech in Computer Science & Engineering) (2025 - 2029)
  Einstein Academy of Technology and Management (EATM), Bhubaneswar, Odisha
- Higher Secondary School / 12th (Science) (2025): 77.84% (467/600)
  Sri Aurobindo Science College, Cuttack, Odisha
- 10th Secondary School (2023): 67.84% (407/600)
  A.B. Higher Secondary School, Basudevpur, Bhadrak, Odisha

TECHNICAL SKILLS:
- Languages: Java, Python, JavaScript, HTML5, CSS3, SQL (MySQL)
- Technologies & Tools: REST APIs, Git & GitHub, GIS Mapping, Machine Learning Workflows
- Soft Skills: Team Leadership (SIH Team Lead), Problem Solving, Technical Documentation

KEY PROJECTS:
1. Odisha Disaster Guardian (AI • GIS • Disaster Management):
   AI-powered disaster management platform assisting citizens, emergency teams, and volunteers during floods and cyclones with real-time geospatial alerts and SOS dispatching.
2. DEFEND AI (Cybersecurity Threat Detection):
   Intelligent multi-layer threat detection system classifying network packet anomalies, brute-force attacks, and DDoS swarms in real-time.
3. RUDRAM 2.0 (Mission-Critical Disaster Response Grid):
   SIH initiative coordinating emergency supply distribution, live geospatial tracking, and shelter quotas.
4. AI Girl Assistant (Voice AI):
   Conversational agent with speech synthesis, audio waveforms, and context-aware responses.
5. A9 Shop & Restaurant:
   Hyper-local e-commerce store and interactive dining portal with real-time checkout and reservations.

CERTIFICATIONS:
- HTML & CSS Certification — GeeksforGeeks
- Python Programming Certification — GeeksforGeeks
- Java Programming Certification — GeeksforGeeks
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white dark:bg-[#0E131F] border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col text-left">
        {/* Header Actions Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60">
          <div>
            <span className="text-xs font-mono text-brand-blue dark:text-brand-electric font-semibold uppercase">
              Curriculum Vitae
            </span>
            <h3 className="font-serif font-bold text-lg text-slate-900 dark:text-white">
              Ratikanta_Sahoo_Resume.pdf
            </h3>
          </div>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 flex items-center space-x-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-brand-blue text-white hover:bg-blue-600 text-xs font-mono font-semibold flex items-center space-x-1.5 shadow-md shadow-brand-blue/25 transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Paper Canvas */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 font-sans bg-white dark:bg-[#111726] text-slate-800 dark:text-slate-200 text-sm leading-relaxed">
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-700 pb-5">
            <h1 className="text-2xl sm:text-3xl font-serif font-extrabold text-slate-900 dark:text-white">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-mono text-brand-blue dark:text-brand-electric font-semibold mt-1">
              Full-Stack Developer &amp; B.Tech CSE (2nd Year Student)
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-3 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="flex items-center space-x-1">
                <Mail className="w-3.5 h-3.5 text-brand-blue" />
                <span>{PERSONAL_INFO.email}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Phone className="w-3.5 h-3.5 text-emerald-500" />
                <span>{PERSONAL_INFO.phone}</span>
              </span>
              <span className="flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-brand-pink" />
                <span>Odisha, India</span>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
              PROFILE SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Aspiring Full-Stack Software Engineer and 2nd Year Computer Science student at Einstein Academy of Technology and Management. Selected as Smart India Hackathon (SIH) team leader, specializing in Python, Java, JavaScript, and mission-critical spatial disaster platforms. Experienced in taking real-world civic challenges to functional, robust digital architectures.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
              TECHNICAL PROFICIENCIES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              <p>
                <strong className="text-slate-900 dark:text-white">Languages:</strong> Java, Python, JavaScript, HTML5, CSS3, SQL
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white">Databases &amp; Systems:</strong> MySQL, Relational Schema Design, REST APIs
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white">Tools &amp; Workflow:</strong> Git, GitHub, VS Code, Fast Typing, MS Office
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white">Leadership:</strong> SIH Team Leader, Crisis Triage, Technical Writing
              </p>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3">
              KEY PROJECT EXPERIENCE
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                    Odisha Disaster Guardian &amp; RUDRAM 2.0
                  </h3>
                  <span className="text-xs font-mono text-slate-400">SIH Initiative • 2025 - Present</span>
                </div>
                <p className="text-xs font-mono text-brand-blue dark:text-brand-electric">
                  Team Leader • AI • Python • GIS • Real-Time Systems
                </p>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 mt-1.5 space-y-1">
                  <li>Designed GIS mapping pipeline integrating weather telemetry for coastal flood and cyclone warnings.</li>
                  <li>Engineered citizen emergency SOS dispatch module with GPS geotagging for rescue boat allocation.</li>
                  <li>Coordinated 6-member team to deliver high-fidelity prototype under hackathon deadlines.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                    DEFEND AI — Cyber Threat Detection Engine
                  </h3>
                  <span className="text-xs font-mono text-slate-400">Cybersecurity • 2025</span>
                </div>
                <p className="text-xs font-mono text-cyan-400">
                  Python • ML • Intrusion Detection • Risk Analytics
                </p>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 mt-1.5 space-y-1">
                  <li>Engineered anomaly packet inspector to identify DDoS flood vectors and SQL injection attempts.</li>
                  <li>Automated quarantine rules achieving &gt; 96% simulated classification precision.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                    AI Girl Assistant &amp; A9 Local Platforms
                  </h3>
                  <span className="text-xs font-mono text-slate-400">Web Engineering • 2024 - 2025</span>
                </div>
                <p className="text-xs font-mono text-purple-400">
                  Python • JavaScript • HTML5 • CSS3 • MySQL
                </p>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 mt-1.5 space-y-1">
                  <li>Developed voice interactive companion with real-time waveform reactions and conversational synthesis.</li>
                  <li>Built hyper-local store platform (A9 Shop) and restaurant reservation engine with zero dependencies.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3">
              EDUCATION &amp; ACADEMIC RECORD
            </h2>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    Bachelor of Technology (B.Tech) in Computer Science &amp; Engineering
                  </h4>
                  <p className="text-slate-500 font-mono">
                    Einstein Academy of Technology and Management (EATM), Bhubaneswar
                  </p>
                </div>
                <span className="font-mono text-slate-400">2025 – 2029 (2nd Year)</span>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    Higher Secondary / 12th (Science)
                  </h4>
                  <p className="text-slate-500 font-mono">
                    Sri Aurobindo Science College, Cuttack • Score: 467/600 (77.84%)
                  </p>
                </div>
                <span className="font-mono text-slate-400">2025</span>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    10th Secondary School
                  </h4>
                  <p className="text-slate-500 font-mono">
                    A.B. Higher Secondary School, Basudevpur, Bhadrak • Score: 407/600 (67.84%)
                  </p>
                </div>
                <span className="font-mono text-slate-400">2023</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
              CERTIFICATIONS
            </h2>
            <div className="flex flex-wrap gap-3 text-xs font-mono text-slate-600 dark:text-slate-300">
              <span>• HTML &amp; CSS Certification (GeeksforGeeks)</span>
              <span>• Python Programming Certification (GeeksforGeeks)</span>
              <span>• Java Programming Certification (GeeksforGeeks)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
