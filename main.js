/* ==========================================================================
   PORTFOLIO JAVASCRIPT LOGIC
   Canvas Wave Rendering, Navbar Interactions, Terminal Execution
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initHeroCanvas();
  initNavbar();
  initThemeToggle();
  initPlaygroundTerminal();
  initScrollAnimations();
  initSmoothScrolling();
  initProjectFilters();
});

/* --- DAY / NIGHT THEME TOGGLE --- */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme') || 'dark';

  document.documentElement.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }
}

/* --- HERO CANVAS WAVE ANIMATION (CORA FLUID CURVES) --- */
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = 600;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = 600;
  });

  let step = 0;

  function drawCurves() {
    ctx.clearRect(0, 0, width, height);

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const waveCount = 5;

    for (let i = 0; i < waveCount; i++) {
      ctx.beginPath();
      ctx.lineWidth = 1.2 - i * 0.2;

      const alpha = 0.15 - i * 0.025;
      const strokeColor = isLight 
        ? `rgba(15, 23, 42, ${Math.max(alpha, 0.03)})`
        : `rgba(255, 255, 255, ${Math.max(alpha, 0.02)})`;

      ctx.strokeStyle = strokeColor;

      for (let x = 0; x <= width; x += 15) {
        const y = Math.sin((x * 0.003) + (step * 0.015) + (i * 0.8)) * (40 + i * 15) 
                + Math.cos((x * 0.001) + (step * 0.01)) * (30 - i * 5) 
                + 180 + i * 25;
        
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();
    }

    step += 1;
    requestAnimationFrame(drawCurves);
  }

  drawCurves();
}

/* --- NAVBAR SCROLL & MOBILE MENU --- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileToggle.classList.toggle('active');
    });

    // Close menu when clicking link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.classList.remove('active');
      });
    });
  }
}

/* --- INTERACTIVE PLAYGROUND TERMINAL --- */
function initPlaygroundTerminal() {
  const runBtn = document.getElementById('run-cmd-btn');
  const terminalInput = document.getElementById('terminal-input');

  const sampleCommands = [
    'salah --deploy --env production',
    'npm run build:scalable-system',
    'python train_agent.py --voice-native',
    'docker compose up -d'
  ];
  let cmdIndex = 0;

  if (runBtn && terminalInput) {
    runBtn.addEventListener('click', () => {
      cmdIndex = (cmdIndex + 1) % sampleCommands.length;
      terminalInput.value = sampleCommands[cmdIndex];

      // Add quick pulse visual response
      runBtn.style.transform = 'scale(0.85)';
      setTimeout(() => {
        runBtn.style.transform = 'scale(1.05)';
      }, 150);
    });
  }
}

/* --- SCROLL REVEAL ANIMATION --- */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.glass-card, .section-header, .pill-tag').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
  });
}

/* --- SMOOTH SCROLLING FOR ALL NAV LINKS & BACK TO TOP --- */
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');

      if (!targetId || targetId === '#') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      if (targetId === '#hero') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const navbarHeight = 65;
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* --- INTERACTIVE PROJECT CATEGORY FILTER & SEARCH --- */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('#project-filters .filter-btn');
  const projectCards = document.querySelectorAll('#projects-grid .project-card');
  const searchInput = document.getElementById('project-search-input');
  const noProjectsMsg = document.getElementById('no-projects-msg');

  if (!projectCards.length) return;

  let activeFilter = 'all';
  let searchQuery = '';

  function applyFilters() {
    let visibleCount = 0;

    projectCards.forEach(card => {
      const cardCategories = (card.dataset.category || '').toLowerCase();
      const cardText = (card.innerText || '').toLowerCase();

      const matchesCategory = activeFilter === 'all' || cardCategories.includes(activeFilter);
      const matchesSearch = !searchQuery || cardText.includes(searchQuery);

      if (matchesCategory && matchesSearch) {
        card.classList.remove('filtered-out');
        visibleCount++;
      } else {
        card.classList.add('filtered-out');
      }
    });

    if (noProjectsMsg) {
      noProjectsMsg.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  // Filter button clicks
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter || 'all';
      applyFilters();
    });
  });

  // Search input typing
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = (e.target.value || '').trim().toLowerCase();
      applyFilters();
    });
  }
}
