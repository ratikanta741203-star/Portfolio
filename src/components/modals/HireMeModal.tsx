import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { X, Send, CheckCircle2, MessageSquare, Mail, Phone, MapPin } from 'lucide-react';

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HireMeModal: React.FC<HireMeModalProps> = ({ isOpen, onClose }) => {
  const [roleType, setRoleType] = useState('Full-Stack Intern');
  const [recruiterName, setRecruiterName] = useState('');
  const [recruiterOrg, setRecruiterOrg] = useState('');
  const [recruiterMessage, setRecruiterMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleWhatsAppDispatch = () => {
    const text = `Hi Ratikanta, this is ${recruiterName || 'a Recruiter'} from ${recruiterOrg || 'our team'}. We are interested in you for the role of ${roleType}. ${recruiterMessage}`;
    const url = `https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleEmailDispatch = () => {
    const subject = `Opportunity: ${roleType} - ${recruiterOrg || 'Engineering Team'}`;
    const body = `Hi Ratikanta,\n\nI am ${recruiterName || 'reaching out'} from ${recruiterOrg || 'our company'}.\n\nRole: ${roleType}\n\n${recruiterMessage || 'We came across your portfolio and would love to discuss potential opportunities with you.'}\n\nBest regards,\n${recruiterName || ''}`;
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-white dark:bg-brand-darkCard border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-left">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-[11px] font-mono font-bold text-emerald-500 uppercase tracking-wider">
              Immediate Availability • 2026
            </span>
            <h3 className="font-serif font-bold text-2xl text-slate-900 dark:text-white mt-0.5">
              Hire Ratikanta Sahoo
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">
              Inquiry Dispatched!
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
              Thank you for connecting. Ratikanta will respond promptly via email or WhatsApp within a few hours.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-brand-blue text-white text-xs font-semibold shadow-md"
            >
              Back to Portfolio
            </button>
          </div>
        ) : (
          <div className="py-4 space-y-4 text-xs font-mono">
            <div>
              <label className="block text-slate-400 mb-1 font-semibold">SELECT POSITION OF INTEREST:</label>
              <div className="grid grid-cols-2 gap-2">
                {['Full-Stack Intern', 'Frontend Developer', 'Python / ML Intern', 'Junior Software Engineer'].map(
                  (role) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => setRoleType(role)}
                      className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                        roleType === role
                          ? 'border-brand-blue bg-brand-blue/10 text-brand-blue dark:text-brand-electric font-bold'
                          : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                      }`}
                    >
                      {role}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-400 mb-1">YOUR NAME</label>
                <input
                  type="text"
                  value={recruiterName}
                  onChange={(e) => setRecruiterName(e.target.value)}
                  placeholder="e.g. Aditi Sharma"
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-sans text-xs"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">COMPANY / ORGANIZATION</label>
                <input
                  type="text"
                  value={recruiterOrg}
                  onChange={(e) => setRecruiterOrg(e.target.value)}
                  placeholder="e.g. Tech Innovations Inc."
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-sans text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-400 mb-1">PROJECT / ROLE BRIEF (OPTIONAL)</label>
              <textarea
                rows={3}
                value={recruiterMessage}
                onChange={(e) => setRecruiterMessage(e.target.value)}
                placeholder="Share role requirements, stipend, location (Remote / Onsite), or timeline..."
                className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-sans text-xs"
              ></textarea>
            </div>

            {/* Quick Dispatch Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={handleWhatsAppDispatch}
                className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors flex items-center justify-center space-x-2 shadow-md shadow-emerald-600/20"
              >
                <Phone className="w-4 h-4" />
                <span>Send on WhatsApp</span>
              </button>
              <button
                type="button"
                onClick={handleEmailDispatch}
                className="py-3 px-4 rounded-xl bg-brand-blue hover:bg-blue-600 text-white font-semibold text-xs transition-colors flex items-center justify-center space-x-2 shadow-md shadow-brand-blue/25"
              >
                <Mail className="w-4 h-4" />
                <span>Send via Email</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
