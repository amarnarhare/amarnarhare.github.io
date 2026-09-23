/**
 * Amar Narhare - Frontend Developer Portfolio
 * Interactive Application Scripts
 */

// Project Case Study Data Store
const projectData = {
  signlanguage: {
    title: "AI Sign Language Recognition & Web Application",
    subtitle: "Real-time gesture-to-speech accessible web portal powered by Deep Learning",
    badge: "AI & Computer Vision",
    metrics: [
      { label: "Accuracy", value: "95.30%" },
      { label: "Stream Latency", value: "<50ms" },
      { label: "Supported Signs", value: "A–Z Alphabets + Dynamic Gestures" },
      { label: "Protocol", value: "Bi-directional WebSockets" }
    ],
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "Python", "OpenCV", "TensorFlow / Keras", "WebSockets", "Web Audio API"],
    overview: "Architected a full-stack digital accessibility platform that translates American Sign Language (ASL) alphabets and dynamic hand motions into real-time speech and textual captions. Designed to bridge the communication gap for deaf and hard-of-hearing individuals during virtual meetings, educational classes, and public service interactions.",
    architecturePoints: [
      "Low-Latency Video Pipeline: Captured high-frame webcam feeds in the browser and transmitted serialized frames over persistent WebSockets to a Python inference engine.",
      "Deep Learning Model: Trained a custom Convolutional Neural Network (CNN) with OpenCV preprocessing, background subtraction, and hand contour segmentation, delivering 95.3% recognition accuracy.",
      "Responsive Accessible Interface: Developed real-time bounding box overlays, confidence score gauges, high-contrast accessible mode, and automated Web Speech API audio synthesis."
    ],
    githubUrl: "https://github.com/amarnarhare",
    demoUrl: "#"
  },
  transitfleet: {
    title: "TransitFleet – Real-Time Geotagging & Fleet Tracking",
    subtitle: "Live commuter bus tracking and predictive arrival dashboard",
    badge: "IoT & Geospatial",
    metrics: [
      { label: "Telemetry Polling", value: "2.0s intervals" },
      { label: "Map Engine", value: "Mapbox GL & Leaflet" },
      { label: "Data Pipeline", value: "Node.js + WebSockets" },
      { label: "Hardware", value: "Raspberry Pi + GPS" }
    ],
    techStack: ["React.js", "Next.js", "TypeScript", "Leaflet / Mapbox GL", "Node.js", "WebSockets", "Tailwind CSS", "Raspberry Pi"],
    overview: "Built an interactive real-time municipal transit portal empowering commuters to pinpoint live bus coordinates, monitor traffic congestion along routes, and view hyper-accurate dynamic arrival estimates (ETAs).",
    architecturePoints: [
      "Interactive Geospatial Canvas: Integrated Mapbox GL and Leaflet with custom SVG markers, smooth vehicle trajectory interpolation, and dynamic route polyline rendering.",
      "IoT Telemetry Ingestion: Connected onboard Raspberry Pi GPS units transmitting NMEA coordinate packets over cellular SIM modules to a high-concurrency WebSocket server.",
      "Client-Side State Synchronization: Leveraged TanStack Query and WebSocket event listeners to refresh moving fleet markers every 2 seconds without UI stutter or memory leaks."
    ],
    githubUrl: "https://github.com/amarnarhare",
    demoUrl: "#"
  },
  mazerover: {
    title: "Autonomous Maze-Solving Rover & Telemetry Visualizer",
    subtitle: "National Finalist Project – e-Yantra Robotics Competition (IIT Bombay)",
    badge: "Robotics & Visualization",
    metrics: [
      { label: "Competition", value: "IIT Bombay eYRC National Finalist" },
      { label: "Pathfinding", value: "A* Graph Search Algorithm" },
      { label: "Visualizer", value: "HTML5 Canvas + WebSockets" },
      { label: "Ranking", value: "Top Finalist across 500+ Colleges" }
    ],
    techStack: ["Python", "OpenCV", "A* Algorithm", "JavaScript", "HTML5 Canvas", "WebSocket Telemetry", "Embedded C"],
    overview: "Led a 4-engineer team to the national finals of the prestigious e-Yantra Robotics Competition hosted by IIT Bombay. Designed an autonomous hardware rover coupled with an interactive web telemetry cockpit that parses overhead arena camera feeds, calculates the shortest path through dynamic maze barriers, and navigates without human intervention.",
    architecturePoints: [
      "Overhead Computer Vision: Built an OpenCV pipeline extracting maze node graphs, grid cells, and robot orientation markers from top-down camera feeds.",
      "Optimal Path Planning: Formulated an optimized A* heuristic search algorithm ensuring shortest traversal while dynamically replanning around unexpected obstacles.",
      "Interactive Telemetry Dashboard: Crafted an HTML5 Canvas web cockpit displaying rover coordinate vectors, proximity sensor graphs, and motor RPMs in real time."
    ],
    githubUrl: "https://github.com/amarnarhare",
    demoUrl: "#"
  },
  accenture: {
    title: "Enterprise Commercial Banking & Loan Suite (Accenture / nCino)",
    subtitle: "Mission-critical financial workflow & commercial lending cloud UI",
    badge: "Enterprise FinTech",
    metrics: [
      { label: "Active Users", value: "500+ Loan Officers" },
      { label: "Test Coverage", value: "85%+ Code Coverage" },
      { label: "Core Platform", value: "Salesforce & nCino Cloud" },
      { label: "Component Architecture", value: "LWC + SLDS" }
    ],
    techStack: ["Lightning Web Components (LWC)", "JavaScript (ES6+)", "Salesforce SLDS", "Apex REST APIs", "Jest", "Agile / Scrum"],
    overview: "Engineered scalable, enterprise-grade user interfaces for multinational financial institutions migrating legacy commercial lending operations to modern Salesforce and nCino cloud architectures.",
    architecturePoints: [
      "Modular LWC Component Architecture: Engineered reusable loan application wizards, dynamic multi-stage approval flows, and audit dashboards for 500+ commercial loan officers.",
      "Asynchronous Data Layer: Integrated frontend components with backend Apex REST controllers, handling asynchronous schema binding, complex validation matrices, and state sync.",
      "Strict Enterprise Compliance: Maintained 85%+ automated test coverage with Jest and Apex unit tests, complying with strict banking data privacy and WCAG accessibility standards."
    ],
    githubUrl: "https://github.com/amarnarhare",
    demoUrl: "#"
  }
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLucideIcons();
  initNavigation();
  initProjectFiltering();
  initModal();
  initClipboard();
  initTerminalTabs();
  initContactForm();
});

// 1. Theme Management (Dark / Light)
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeToggleMobileBtn = document.getElementById('theme-toggle-mobile-btn');
  const html = document.documentElement;

  // Retrieve saved preference or default to dark
  const savedTheme = localStorage.getItem('amar-portfolio-theme') || 'dark';
  applyTheme(savedTheme);

  function toggleTheme() {
    const isDark = html.classList.contains('dark');
    const newTheme = isDark ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('amar-portfolio-theme', newTheme);
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      html.classList.add('dark');
      html.classList.remove('light');
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
    }
    updateThemeIcons(theme);
  }

  function updateThemeIcons(theme) {
    const icons = document.querySelectorAll('.theme-toggle-icon');
    icons.forEach(icon => {
      if (theme === 'dark') {
        icon.setAttribute('data-lucide', 'sun');
      } else {
        icon.setAttribute('data-lucide', 'moon');
      }
    });
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
  if (themeToggleMobileBtn) themeToggleMobileBtn.addEventListener('click', toggleTheme);
}

// 2. Navigation & Mobile Drawer
function initNavigation() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Active link highlighter on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('text-indigo-500', 'font-semibold');
        } else {
          navLink.classList.remove('text-indigo-500', 'font-semibold');
        }
      }
    });
  });
}

// 3. Project Filtering
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Set active button UI
      filterBtns.forEach(b => {
        b.classList.remove('bg-indigo-600', 'text-white', 'shadow-lg');
        b.classList.add('bg-slate-800/60', 'text-slate-300', 'hover:bg-slate-700/60');
      });
      btn.classList.remove('bg-slate-800/60', 'text-slate-300', 'hover:bg-slate-700/60');
      btn.classList.add('bg-indigo-600', 'text-white', 'shadow-lg');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

// 4. Modal Case Study System
function initModal() {
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-body');
  const closeModalBtns = document.querySelectorAll('.close-modal-btn');
  const openModalBtns = document.querySelectorAll('.open-case-study');

  if (!modal) return;

  function openModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    modalContent.innerHTML = `
      <div class="p-6 md:p-8">
        <!-- Header -->
        <div class="flex items-start justify-between gap-4 mb-4">
          <div>
            <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 mb-2">
              ${data.badge}
            </span>
            <h3 class="text-2xl md:text-3xl font-bold text-slate-100">${data.title}</h3>
            <p class="text-sm md:text-base text-slate-400 mt-1">${data.subtitle}</p>
          </div>
          <button class="close-modal-btn text-slate-400 hover:text-white p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 transition" aria-label="Close modal">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <!-- Key Metrics Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
          ${data.metrics.map(m => `
            <div class="bg-slate-800/60 border border-slate-700/50 p-3 rounded-xl text-center">
              <div class="text-xs text-slate-400 uppercase tracking-wider font-semibold">${m.label}</div>
              <div class="text-base font-bold text-indigo-400 mt-1">${m.value}</div>
            </div>
          `).join('')}
        </div>

        <!-- Overview -->
        <div class="mb-6">
          <h4 class="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-2">Executive Overview</h4>
          <p class="text-slate-300 text-sm md:text-base leading-relaxed">${data.overview}</p>
        </div>

        <!-- Architectural Highlights -->
        <div class="mb-6">
          <h4 class="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-2">Architectural Highlights & Engineering Wins</h4>
          <ul class="space-y-2 text-sm text-slate-300">
            ${data.architecturePoints.map(point => `
              <li class="flex items-start gap-2">
                <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0"></i>
                <span>${point}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Tech Stack Badges -->
        <div class="mb-8">
          <h4 class="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-2">Technologies Used</h4>
          <div class="flex flex-wrap gap-2">
            ${data.techStack.map(tech => `
              <span class="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 rounded-md text-xs font-mono">
                ${tech}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Footer Actions -->
        <div class="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-slate-800">
          <div class="flex items-center gap-3">
            <a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-lg text-sm font-medium border border-slate-700 transition">
              <i data-lucide="github" class="w-4 h-4"></i> GitHub Repository
            </a>
          </div>
          <button class="close-modal-btn px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition">
            Close Case Study
          </button>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    initLucideIcons();

    // Re-attach close event listeners for newly injected buttons
    modal.querySelectorAll('.close-modal-btn').forEach(b => {
      b.addEventListener('click', closeModal);
    });
  }

  function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-project');
      openModal(id);
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

// 5. Clipboard & Toast Notifications
function initClipboard() {
  const copyEmailBtns = document.querySelectorAll('.copy-email-btn');

  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'amarnarhare@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Copied ${email} to clipboard!`);
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    });
  });
}

function showToast(message) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-900/95 text-white border border-indigo-500/40 shadow-2xl backdrop-blur-lg toast-enter font-medium text-sm';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <span class="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping"></span>
    <span>${message}</span>
  `;
  toast.classList.remove('hidden');

  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3500);
}

// 6. Terminal Tab Switcher
function initTerminalTabs() {
  const tabs = document.querySelectorAll('.terminal-tab');
  const panels = document.querySelectorAll('.terminal-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');

      tabs.forEach(t => {
        t.classList.remove('bg-slate-800', 'text-indigo-400', 'border-indigo-500');
        t.classList.add('text-slate-400', 'border-transparent');
      });
      tab.classList.add('bg-slate-800', 'text-indigo-400', 'border-indigo-500');
      tab.classList.remove('text-slate-400', 'border-transparent');

      panels.forEach(p => {
        if (p.getAttribute('data-tab-content') === target) {
          p.classList.remove('hidden');
        } else {
          p.classList.add('hidden');
        }
      });
    });
  });
}

// 7. Contact Form Handling
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name')?.value || 'Recruiter';
    const email = document.getElementById('contact-email')?.value || '';
    const subject = document.getElementById('contact-subject')?.value || 'Front End Developer Opportunity';
    const message = document.getElementById('contact-message')?.value || '';

    // Generate mailto link
    const mailtoUrl = `mailto:amarnarhare@gmail.com?subject=${encodeURIComponent(`[Portfolio Inquiry] ${subject} - from ${name}`)}&body=${encodeURIComponent(`Hi Amar,\n\n${message}\n\nFrom: ${name} (${email})`)}`;
    
    window.location.href = mailtoUrl;
    showToast("Launching your default email client...");
    form.reset();
  });
}

// Helper: Refresh Lucide Icons safely
function initLucideIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}
