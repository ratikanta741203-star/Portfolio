/**
 * Ratikanta Sahoo Portfolio - Master Interaction Script (script.js)
 * Standalone vanilla JavaScript for all screens, modals, and simulation engines.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. TYPING TEXT ANIMATION
  const roles = [
    'Full-Stack Developer',
    'SIH Hackathon Leader',
    'B.Tech Software Builder',
    'Python & Java Developer',
    'Disaster Tech Innovator',
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingElement = document.getElementById('typing-role');

  function typeEffect() {
    if (!typingElement) return;
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentRole.length) {
      typeSpeed = 1800; // Pause at end of text
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typeSpeed = 400; // Brief pause before next role
    }

    setTimeout(typeEffect, typeSpeed);
  }
  typeEffect();

  // 2. THEME SWITCHER (Dark / Light Mode)
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');

  function applyTheme(isDark) {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('app-theme', 'dark');
      if (sunIcon && moonIcon) {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
      }
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('app-theme', 'light');
      if (sunIcon && moonIcon) {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
      }
    }
  }

  // Load stored theme or default to dark
  const savedTheme = localStorage.getItem('app-theme');
  const isDarkMode = savedTheme !== 'light';
  applyTheme(isDarkMode);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentlyDark = document.documentElement.classList.contains('dark');
      applyTheme(!currentlyDark);
    });
  }

  // 3. MOBILE MENU TOGGLE
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });

    // Close mobile drawer upon link click
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.add('hidden');
      });
    });
  }

  // 4. MODAL HELPERS
  window.openModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  // Close modals when clicking backdrop
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // 5. RESUME MODAL ACTIONS
  window.copyResumeText = function() {
    const resumeText = `
RATIKANTA SAHOO
Full-Stack & Web Developer | B.Tech CSE (2nd Year)
Email: ratikanta741203@gmail.com | Phone: +91 9078835620
Location: Chakradharpur, Kujang, Jagatsinghpur, Odisha, India

PROFILE SUMMARY:
B.Tech student and aspiring Full-Stack Developer with hands-on experience in Java, Python, JavaScript, HTML, CSS, MySQL, and modern web architectures. Smart India Hackathon (SIH) Team Leader building real-time disaster-management and threat-detection systems.

EDUCATION:
- Bachelor of Technology (B.Tech) in CSE (2025 - 2029) | EATM Bhubaneswar, Odisha
- Higher Secondary / 12th (Science) (2025): 77.84% (467/600) | Sri Aurobindo Science College, Cuttack
- 10th Secondary School (2023): 67.84% (407/600) | A.B. Higher Secondary School, Basudevpur, Bhadrak

TECHNICAL SKILLS:
- Languages: Java, Python, JavaScript, HTML5, CSS3, SQL (MySQL)
- Technologies: REST APIs, Git & GitHub, GIS Mapping, Machine Learning Workflows
- Leadership: SIH Team Lead, Crisis Triage, Technical Presentation

FEATURED PROJECTS:
1. Odisha Disaster Guardian (AI • GIS • Disaster Management)
2. DEFEND AI (AI-Based Threat Detection System)
3. AI Girl Assistant (Conversational Voice AI Companion)
4. A9 Shop Platform (Hyper-Local E-Commerce)
5. A9 Restaurant Concept (Hospitality & Reservation Engine)
6. EATM Smart School (Unified Campus Academic Hub)
7. RUDRAM 2.0 (Mission-Critical Disaster Operations Grid)
    `.trim();

    navigator.clipboard.writeText(resumeText).then(() => {
      const copyBtn = document.getElementById('copy-resume-btn');
      if (copyBtn) {
        const oldHtml = copyBtn.innerHTML;
        copyBtn.innerHTML = '<span>✓ Copied to Clipboard!</span>';
        setTimeout(() => {
          copyBtn.innerHTML = oldHtml;
        }, 2000);
      }
    });
  };

  // 6. HIRE ME RECRUITER DISPATCHERS
  window.dispatchHireWhatsApp = function() {
    const name = document.getElementById('recruiter-name')?.value || 'A Recruiter';
    const org = document.getElementById('recruiter-org')?.value || 'Our Company';
    const role = document.getElementById('recruiter-role')?.value || 'Full-Stack Developer';
    const msg = document.getElementById('recruiter-msg')?.value || 'We would love to discuss an internship or opportunity with you.';

    const text = `Hi Ratikanta, I am ${name} from ${org}. We are considering you for the ${role} position. ${msg}`;
    window.open(`https://wa.me/919078835620?text=${encodeURIComponent(text)}`, '_blank');
    window.closeModal('hire-modal');
  };

  window.dispatchHireEmail = function() {
    const name = document.getElementById('recruiter-name')?.value || 'Recruiter';
    const org = document.getElementById('recruiter-org')?.value || 'Company';
    const role = document.getElementById('recruiter-role')?.value || 'Full-Stack Developer';
    const msg = document.getElementById('recruiter-msg')?.value || 'We came across your portfolio and would like to connect.';

    const subject = `Opportunity: ${role} - ${org}`;
    const body = `Hi Ratikanta,\n\nI am ${name} from ${org}.\nRole: ${role}\n\n${msg}\n\nBest regards,\n${name}`;
    window.location.href = `mailto:ratikanta741203@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.closeModal('hire-modal');
  };

  // 7. CONTACT FORM SUBMISSION
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name')?.value;
      const email = document.getElementById('contact-email')?.value;
      const msg = document.getElementById('contact-message')?.value;

      if (!name || !email || !msg) {
        alert('Please fill out all fields.');
        return;
      }

      const subject = `Portfolio Inquiry from ${name}`;
      const body = `Hello Ratikanta,\n\n${msg}\n\nFrom: ${name}\nEmail: ${email}`;
      window.location.href = `mailto:ratikanta741203@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      const responseNotice = document.getElementById('contact-success-notice');
      if (responseNotice) {
        responseNotice.classList.remove('hidden');
        contactForm.reset();
      }
    });
  }

  // 8. PROJECT SIMULATION DEMO ENGINES
  // Odisha Disaster SOS Trigger
  window.triggerDisasterSos = function() {
    const btn = document.getElementById('disaster-sos-btn');
    const notice = document.getElementById('disaster-sos-notice');
    if (btn) {
      btn.className = "py-2.5 px-4 rounded-xl font-semibold text-xs bg-emerald-500 text-white flex items-center justify-center space-x-2";
      btn.innerHTML = "<span>✓ SOS Beacon Active & Dispatched</span>";
    }
    if (notice) {
      notice.classList.remove('hidden');
    }
  };

  // DEFEND AI Attack Mitigation
  window.simulateCyberAttack = function() {
    const scoreEl = document.getElementById('cyber-threat-score');
    const barEl = document.getElementById('cyber-threat-bar');
    const logEl = document.getElementById('cyber-threat-log');

    if (scoreEl && barEl) {
      scoreEl.textContent = '89%';
      barEl.style.width = '89%';
      barEl.className = 'h-full bg-red-500 transition-all duration-500';

      setTimeout(() => {
        scoreEl.textContent = '18%';
        barEl.style.width = '18%';
        barEl.className = 'h-full bg-cyan-400 transition-all duration-500';
        if (logEl) {
          logEl.innerHTML = `
            <div class="p-2 rounded bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-between">
              <span>⛔ 192.168.4.102 (DDoS Syn Flood)</span>
              <span class="text-[10px] bg-red-500/20 px-1.5 py-0.5 rounded">BLOCKED</span>
            </div>
            <div class="p-2 rounded bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-between">
              <span>⛔ 10.0.12.88 (SQL Injection Attempt)</span>
              <span class="text-[10px] bg-red-500/20 px-1.5 py-0.5 rounded">BLOCKED</span>
            </div>
          `;
        }
      }, 1000);
    }
  };

  // Voice Speech Synthesis for AI Girl Assistant
  window.speakAssistantQuery = function(text) {
    const chatBox = document.getElementById('voice-chat-box');
    const inputField = document.getElementById('voice-chat-input');
    const query = text || inputField?.value;
    if (!query) return;

    if (chatBox) {
      const userMsg = document.createElement('div');
      userMsg.className = 'p-2.5 rounded-xl max-w-[85%] ml-auto bg-brand-purple text-white';
      userMsg.innerHTML = `<span class="block text-[10px] opacity-70 mb-0.5">You</span>${query}`;
      chatBox.appendChild(userMsg);
      if (inputField) inputField.value = '';

      setTimeout(() => {
        let reply = "I'm processing that request. Ratikanta is ready to bring high-impact software solutions to your team!";
        const lower = query.toLowerCase();
        if (lower.includes('skill') || lower.includes('stack')) {
          reply = "Ratikanta is proficient in Java, Python, JavaScript, MySQL, HTML5, CSS3, REST APIs, and UI engineering.";
        } else if (lower.includes('hackathon') || lower.includes('sih') || lower.includes('disaster')) {
          reply = "He led the SIH team developing Odisha Disaster Guardian and RUDRAM 2.0 with real-time GIS telemetry and emergency SOS systems.";
        } else if (lower.includes('contact') || lower.includes('hire')) {
          reply = "You can reach Ratikanta via email at ratikanta741203@gmail.com or WhatsApp at +91 9078835620!";
        }

        const botMsg = document.createElement('div');
        botMsg.className = 'p-2.5 rounded-xl max-w-[85%] bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700';
        botMsg.innerHTML = `<span class="block text-[10px] opacity-70 mb-0.5">AI Girl Assistant</span>${reply}`;
        chatBox.appendChild(botMsg);
        chatBox.scrollTop = chatBox.scrollHeight;

        // Speak aloud via SpeechSynthesis if supported
        if ('speechSynthesis' in window) {
          try {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(reply);
            utterance.rate = 1.0;
            utterance.pitch = 1.1;
            window.speechSynthesis.speak(utterance);
          } catch (e) {
            console.warn(e);
          }
        }
      }, 400);
    }
  };

  // A9 Shop Cart Calculation
  let cartSubtotal = 465;
  window.addShopCartItem = function(price, name) {
    cartSubtotal += price;
    const subtotalEl = document.getElementById('shop-cart-total');
    const itemsListEl = document.getElementById('shop-cart-items');
    if (subtotalEl) subtotalEl.textContent = `₹${cartSubtotal}`;
    if (itemsListEl) {
      const itemRow = document.createElement('div');
      itemRow.className = 'flex justify-between items-center py-1 border-b border-slate-200 dark:border-slate-800';
      itemRow.innerHTML = `<span class="truncate pr-2">${name}</span><span class="font-bold">₹${price}</span>`;
      itemsListEl.appendChild(itemRow);
    }
  };

  window.checkoutShopCart = function() {
    const successNotice = document.getElementById('shop-checkout-notice');
    if (successNotice) {
      successNotice.classList.remove('hidden');
    }
  };

  // A9 Restaurant Table Reservation
  window.confirmRestaurantReservation = function() {
    const guests = document.getElementById('res-guests')?.value || '2';
    const time = document.getElementById('res-time')?.value || '07:30 PM';
    const passNotice = document.getElementById('restaurant-pass-notice');
    if (passNotice) {
      passNotice.innerHTML = `✓ Table Reserved! Pass ID #A9-RES-882 confirmed for <strong>${guests} Guests</strong> at <strong>${time}</strong>.`;
      passNotice.classList.remove('hidden');
    }
  };

  // Direct File Downloader for Standalone Package
  window.downloadPortfolioFile = function(fileName) {
    const link = document.createElement('a');
    link.href = fileName;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
});
