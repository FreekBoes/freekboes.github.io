/* ═══════════════════════════════════════════
   FREEK BOES · PORTFOLIO — script.js
   Features: dark/light mode · EN/NL language switch
            · scroll animations · skill bars
   Requires: data.js (loaded first in index.html)
═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ──────────────────────────────────────────
     DARK MODE
  ────────────────────────────────────────── */
  const moonIcon = document.getElementById('icon-moon');
  const sunIcon  = document.getElementById('icon-sun');

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    // Swap sun/moon icons
    if (moonIcon && sunIcon) {
      moonIcon.style.display = theme === 'dark' ? 'none'  : 'block';
      sunIcon.style.display  = theme === 'dark' ? 'block' : 'none';
    }
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  }

  // Restore saved theme (or system preference)
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark');
  }

  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
  document.getElementById('theme-toggle-m')?.addEventListener('click', toggleTheme);


  /* ──────────────────────────────────────────
     LANGUAGE SWITCHER
  ────────────────────────────────────────── */
  let currentLang = localStorage.getItem('portfolio-lang') || 'en';

  // Deep-get: get('about.facts.0.label') on a nested object
  function get(obj, path) {
    return path.split('.').reduce((o, k) => (o != null ? o[k] : undefined), obj);
  }

  function updateContent(lang) {
    const t = DATA[lang];
    if (!t) return;

    // Update all elements with data-i18n="path"
document.querySelectorAll('[data-i18n]').forEach(el => {
  const key = el.getAttribute('data-i18n');
  const val = get(t, key);
  if (val !== undefined && typeof val === 'string') el.textContent = val;
});

// HTML content elements (voor elementen met strong tags e.d.)
document.querySelectorAll('[data-i18n-html]').forEach(el => {
  const key = el.getAttribute('data-i18n-html');
  const val = get(t, key);
  if (val !== undefined && typeof val === 'string') el.innerHTML = val;
});

    // Re-render lists that come from arrays

    // Outcomes
    const outcomesList = document.getElementById('outcomes-list');
    if (outcomesList) {
      outcomesList.innerHTML = t.featured.outcomes.map(o =>
        `<li><span class="prefix-plus">[+]</span> ${o}</li>`
      ).join('');
    }

    // Learned
    const learnedList = document.getElementById('learned-list');
    if (learnedList) {
      learnedList.innerHTML = t.featured.learned.map(o =>
        `<li><span class="prefix-arrow">[→]</span> ${o}</li>`
      ).join('');
    }

    // Projects grid
    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid) {
      projectsGrid.innerHTML = t.projects.items.map((p) => `
  <div class="project-card" data-project="${p.key}" data-category="${p.category}">
    <div class="project-card-img">
      <div class="project-card-img-bg">${p.name.toUpperCase()}</div>
    </div>
    <div class="project-card-body">
      <div class="project-card-meta">
        <span class="project-card-num label label-accent">${p.type}</span>
        <span class="project-card-year">${p.year}</span>
      </div>
      <div class="project-name">${p.name}</div>
      <p class="project-desc">${p.blurb}</p>
      <div class="project-tags">${p.stack.map(s => `<span class="project-tag">${s}</span>`).join('')}</div>
      <button class="project-read-more">Read more →</button>
    </div>
  </div>
`).join('');
    }

    // Experience entries
    const expList = document.getElementById('experience-list');
    if (expList) {
      expList.innerHTML = t.experience.items.map(e => `
        <div class="exp-entry">
          <div class="exp-entry-top">
            <span class="exp-title">${e.role}</span>
            <span class="exp-period">${e.period}</span>
          </div>
          <div class="exp-org">${e.company} · ${e.location}</div>
          <p class="exp-desc">${e.summary}</p>
        </div>
      `).join('');
    }

    // Education entries
    const eduList = document.getElementById('education-list');
    if (eduList) {
      eduList.innerHTML = t.education.items.map(e => `
        <div class="exp-entry">
          <div class="exp-entry-top">
            <span class="exp-title">${e.degree}</span>
            <span class="exp-period">${e.period}</span>
          </div>
          <div class="exp-org">${e.school}</div>
          <p class="exp-desc">${e.detail}</p>
        </div>
      `).join('');
    }

    // Stage outcomes
    const stageOutcomes = document.getElementById('stage-outcomes-list');
    if (stageOutcomes && t.stage) {
      stageOutcomes.innerHTML = t.stage.outcomes.map(o =>
        `<li><span class="prefix-plus">[+]</span> ${o}</li>`
      ).join('');
    }

    // Stage learned
    const stageLearned = document.getElementById('stage-learned-list');
    if (stageLearned && t.stage) {
      stageLearned.innerHTML = t.stage.learned.map(o =>
        `<li><span class="prefix-arrow">[→]</span> ${o}</li>`
      ).join('');
    }

    // Update lang toggle button label (show the other language)
    const nextLang = lang === 'en' ? 'NL' : 'EN';
    document.querySelectorAll('#lang-toggle, #lang-toggle-m').forEach(btn => {
      btn.textContent = nextLang;
    });

    // Update html lang attribute
    document.documentElement.lang = lang;
  }

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    updateContent(lang);
  }

  function toggleLang() {
    setLang(currentLang === 'en' ? 'nl' : 'en');
  }

  document.getElementById('lang-toggle')?.addEventListener('click', toggleLang);
  document.getElementById('lang-toggle-m')?.addEventListener('click', toggleLang);

  // Apply saved language on load
  updateContent(currentLang);


  /* ──────────────────────────────────────────
     MOBILE NAV
  ────────────────────────────────────────── */
  const navBtn    = document.getElementById('nav-toggle-btn');
  const mobileNav = document.getElementById('mobile-menu');

  if (navBtn && mobileNav) {
    navBtn.addEventListener('click', e => {
      e.stopPropagation();
      mobileNav.classList.toggle('open');
    });
    document.querySelectorAll('.mobile-link').forEach(a => {
      a.addEventListener('click', () => mobileNav.classList.remove('open'));
    });
    document.addEventListener('click', e => {
      if (!mobileNav.contains(e.target) && !navBtn.contains(e.target)) {
        mobileNav.classList.remove('open');
      }
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') mobileNav.classList.remove('open');
    });
  }


  /* ──────────────────────────────────────────
     SCROLL FADE-UP
     "in-view" avoids conflict with Tailwind's .visible
  ────────────────────────────────────────── */
  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06 });

  document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));


  /* ──────────────────────────────────────────
     SKILL BARS — width animatie via JS
  ────────────────────────────────────────── */
  const barObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const pct = Math.round(parseFloat(entry.target.dataset.w) * 100);
        entry.target.style.width = pct + '%';
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.skill-fill').forEach(fill => barObserver.observe(fill));


  /* ──────────────────────────────────────────
     PROJECT MODAL
  ────────────────────────────────────────── */
  const modal      = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close');

  function openModal(projectKey) {
    const t = DATA[currentLang];
    const p = t.projectDetails && t.projectDetails[projectKey];
    if (!p || !modal) return;

    document.getElementById('modal-title').textContent = p.title;
    document.getElementById('modal-meta').textContent  = p.type + ' · ' + p.year;

    document.getElementById('modal-assignment').textContent = p.assignment;
    document.getElementById('modal-approach').textContent   = p.approach;
    document.getElementById('modal-result').textContent     = p.finalResult;
    document.getElementById('modal-input').textContent      = p.myInput;

    // Photos
    const photosSection = document.getElementById('modal-photos-section');
    const photosGrid    = document.getElementById('modal-photos');
    if (p.photos && p.photos.length > 0) {
      photosGrid.innerHTML = p.photos.map(src =>
        `<div class="modal-photo-placeholder"><img src="${src}" alt="screenshot"></div>`
      ).join('');
      photosSection.style.display = 'block';
    } else {
      photosSection.style.display = 'none';
    }

    const stackEl = document.getElementById('modal-stack');
    stackEl.innerHTML = p.stack.map(s =>
      `<span class="stack-tag">${s}</span>`
    ).join('');

    const linkBtn = document.getElementById('modal-link');
    if (p.link) { linkBtn.href = p.link; linkBtn.classList.remove('hidden'); }
    else { linkBtn.classList.add('hidden'); }

    const githubBtn = document.getElementById('modal-github');
    if (p.github) { githubBtn.href = p.github; githubBtn.classList.remove('hidden'); }
    else { githubBtn.classList.add('hidden'); }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Click on project card
  document.querySelectorAll('.project-card[data-project]').forEach(card => {
    card.addEventListener('click', e => {
      e.preventDefault();
      openModal(card.dataset.project);
    });
  });

  // Also handle dynamically rendered cards (language switch)
  document.getElementById('projects-grid')?.addEventListener('click', e => {
    const card = e.target.closest('.project-card[data-project]');
    if (card) { e.preventDefault(); openModal(card.dataset.project); }
  });

  // Close button
  modalClose?.addEventListener('click', closeModal);

  // Click on backdrop
  modal?.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  // Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  // Project filter
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.project-card').forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

}); // ← einde DOMContentLoaded

// Lightbox — globaal zodat onclick in HTML ze kan bereiken
function openLightbox(btn) {
  const img = btn.closest('.stage-photo-cell').querySelector('img');
  if (!img || img.style.display === 'none') return;
  document.getElementById('lightbox-img').src = img.src;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});