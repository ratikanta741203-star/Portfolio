import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    setErrorMessage('');
    // Open default email client with populated info
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Hello Ratikanta,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-[#0A0D14] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-xs font-mono uppercase tracking-widest text-brand-blue dark:text-brand-electric mb-3">
            09 // GET IN TOUCH
          </h2>
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-white">
            Let's Build Something Together
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Available for software engineering internships, collaborative hackathons, and technical roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-brand-darkCard border border-slate-200 dark:border-slate-800 space-y-5 shadow-sm">
              <div>
                <span className="text-xs text-slate-400 font-mono uppercase block mb-1">
                  Primary Email
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm font-semibold text-brand-blue dark:text-brand-electric hover:underline flex items-center space-x-1.5"
                >
                  <Mail className="w-4 h-4" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </div>

              <div>
                <span className="text-xs text-slate-400 font-mono uppercase block mb-1">
                  Phone / WhatsApp
                </span>
                <a
                  href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-emerald-500 transition-colors flex items-center space-x-1.5"
                >
                  <Phone className="w-4 h-4 text-emerald-500" />
                  <span>{PERSONAL_INFO.phone}</span>
                </a>
              </div>

              <div>
                <span className="text-xs text-slate-400 font-mono uppercase block mb-1">
                  Location
                </span>
                <p className="text-sm text-slate-600 dark:text-slate-300 flex items-center space-x-1.5">
                  <MapPin className="w-4 h-4 text-brand-pink" />
                  <span>{PERSONAL_INFO.address}</span>
                </p>
              </div>
            </div>

            {/* Quick response badge */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Fast response rate • Typically replies within 2–4 hours.</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-8 sm:p-12 rounded-2xl bg-slate-50 dark:bg-brand-darkCard border border-slate-200 dark:border-slate-800 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-serif font-bold text-slate-900 dark:text-white">
                  Message Prepared!
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                  Your email client has been launched with your message. If it did not open automatically, you can email directly to{' '}
                  <strong className="text-brand-blue">{PERSONAL_INFO.email}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-mono text-brand-blue hover:underline"
                >
                  ← Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-brand-darkCard border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm"
              >
                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-mono">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Aditi Sharma"
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@domain.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project, team, or opportunity..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue transition-colors"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-brand-blue hover:bg-blue-600 text-white font-semibold text-sm shadow-lg shadow-brand-blue/30 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
