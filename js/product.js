// ============================================
// AI Prompt Mastery — Product Page Features (v2.0)
// ============================================
// Features:
// 1. Client-side access guard via APM_SECURITY
// 2. Default light theme with Light/Dark toggle
// 3. Top sticky navbar with Home, Kit Switcher, Jump to Section, Search, Print, Theme & TOC
// 4. Interactive Category Filter Pills Bar (All, Category 1, Category 2...)
// 5. Live Search with match counter and highlight
// 6. 1-Click Copy-to-Clipboard with tactile feedback
// 7. Collapsible prompt accordions with Expand/Collapse All
// 8. Floating Table of Contents Sidebar with active scrollspy
// 9. Smooth Scroll-to-Top button
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Guard the page first ---
  if (typeof APM_SECURITY !== 'undefined' && !APM_SECURITY.guardPage()) return;

  // ============================================
  // 2. THEME MANAGEMENT (Always default to Light)
  // ============================================
  // User requirement: "always light theme when choose then dark"
  // Default is light. If user explicitly chooses dark during their session, respect it.
  const THEME_KEY = 'apm_theme';
  const savedTheme = sessionStorage.getItem(THEME_KEY) || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    sessionStorage.setItem(THEME_KEY, next);
    updateThemeIcon();
  }

  function updateThemeIcon() {
    const btn = document.getElementById('themeToggleBtn');
    if (!btn) return;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    btn.innerHTML = isDark ? '☀️' : '🌙';
    btn.title = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  }

  // ============================================
  // 3. EXTRACT SECTIONS & PROMPTS DATA
  // ============================================
  const sections = Array.from(document.querySelectorAll('.prompt-section'));
  const allPrompts = Array.from(document.querySelectorAll('.prompt-block'));
  const sectionData = [];

  sections.forEach((sec, i) => {
    const titleEl = sec.querySelector('.prompt-section-title');
    if (titleEl) {
      const id = 'section-' + i;
      sec.id = id;
      const titleText = titleEl.textContent.trim();
      const promptCount = sec.querySelectorAll('.prompt-block').length;
      sectionData.push({ id, title: titleText, element: sec, count: promptCount });
    }
  });

  // Current file detection for Kit Switcher
  const currentFile = window.location.pathname.split('/').pop() || 'd2c-brand-kit.html';
  const kits = [
    { file: 'd2c-brand-kit.html', label: '🛍️ D2C Brand Kit' },
    { file: 'real-estate-kit.html', label: '🏠 Real Estate Kit' },
    { file: 'content-creator-kit.html', label: '🎬 Content Creator Kit' },
    { file: 'job-seeker-kit.html', label: '💼 Job Seeker Kit' }
  ];

  const kitOptions = kits.map(k => `
    <option value="${k.file}" ${currentFile === k.file ? 'selected' : ''}>${k.label}</option>
  `).join('');

  // Dropdown filter options
  const filterOptions = sectionData.map(s =>
    `<option value="${s.id}">${s.title} (${s.count})</option>`
  ).join('');

  // ============================================
  // 4. INJECT TOP NAVIGATION BAR
  // ============================================
  const nav = document.createElement('nav');
  nav.className = 'pnav';
  nav.innerHTML = `
    <div class="pnav-inner">
      <a href="../index.html" class="pnav-back" title="Back to Home">← Home</a>
      <select id="kitSwitcher" class="pnav-kit-select" title="Switch to another Prompt Kit" aria-label="Switch Kit">
        ${kitOptions}
      </select>
      <div class="pnav-center">
        <select id="sectionFilter" class="pnav-filter" aria-label="Jump to section">
          <option value="">📑 Jump to Section...</option>
          ${filterOptions}
        </select>
        <div class="pnav-search-wrap">
          <input type="text" id="promptSearch" class="pnav-search" placeholder="🔍 Search prompts..." aria-label="Search prompts" />
        </div>
      </div>
      <div class="pnav-actions">
        <button id="printBtn" class="pnav-btn pnav-print-btn" title="Print / Save as PDF" aria-label="Print kit">🖨️</button>
        <button id="themeToggleBtn" class="pnav-btn" title="Toggle Light/Dark Theme" aria-label="Toggle theme">🌙</button>
        <button id="tocToggleBtn" class="pnav-btn pnav-toc-btn" title="Table of Contents" aria-label="Table of contents">☰</button>
      </div>
    </div>
  `;
  document.body.prepend(nav);

  // Kit Switcher event
  document.getElementById('kitSwitcher')?.addEventListener('change', (e) => {
    const val = e.target.value;
    if (val && val !== currentFile) {
      window.location.href = val;
    }
  });

  // Print button event
  document.getElementById('printBtn')?.addEventListener('click', () => {
    window.print();
  });

  // ============================================
  // 5. INJECT CATEGORY FILTER PILLS BAR
  // ============================================
  const header = document.querySelector('.product-header');
  let currentActiveSection = 'all';

  if (header) {
    const filterWrap = document.createElement('div');
    filterWrap.className = 'category-filter-wrap';

    const pillsHtml = sectionData.map(s => `
      <button class="cat-pill" data-sec-id="${s.id}" type="button">
        <span>${s.title}</span>
        <span class="cat-pill-count">${s.count}</span>
      </button>
    `).join('');

    filterWrap.innerHTML = `
      <div class="category-filter-header">
        <span>⚡ Quick Filter by Category</span>
        <span id="activeFilterCount" style="font-size:0.75rem;font-weight:600;opacity:0.8;">Showing all ${allPrompts.length} prompts</span>
      </div>
      <div class="category-pills">
        <button class="cat-pill active" data-sec-id="all" type="button">
          <span>✨ All Categories</span>
          <span class="cat-pill-count">${allPrompts.length}</span>
        </button>
        ${pillsHtml}
      </div>
      <div id="filterBanner" class="active-filter-banner" style="display:none;margin-top:14px;">
        <span id="filterBannerText"></span>
        <button id="filterResetBtn" class="active-filter-reset" type="button">Show All Prompts</button>
      </div>
    `;

    header.after(filterWrap);

    // Pill click handlers
    const pills = filterWrap.querySelectorAll('.cat-pill');
    const filterBanner = document.getElementById('filterBanner');
    const filterBannerText = document.getElementById('filterBannerText');
    const filterResetBtn = document.getElementById('filterResetBtn');
    const countDisplay = document.getElementById('activeFilterCount');

    function applyCategoryFilter(targetId) {
      currentActiveSection = targetId;

      pills.forEach(p => {
        p.classList.toggle('active', p.getAttribute('data-sec-id') === targetId);
      });

      if (targetId === 'all') {
        sections.forEach(s => s.style.display = '');
        allPrompts.forEach(p => p.style.display = '');
        filterBanner.style.display = 'none';
        countDisplay.textContent = `Showing all ${allPrompts.length} prompts`;
      } else {
        const selected = sectionData.find(s => s.id === targetId);
        sections.forEach(s => {
          s.style.display = (s.id === targetId) ? '' : 'none';
        });
        filterBanner.style.display = 'flex';
        filterBannerText.innerHTML = `Showing: <strong>${selected ? selected.title : ''}</strong> (${selected ? selected.count : 0} prompts)`;
        countDisplay.textContent = `Filtered: ${selected ? selected.count : 0} prompts`;
      }
    }

    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        const secId = pill.getAttribute('data-sec-id');
        applyCategoryFilter(secId);
      });
    });

    filterResetBtn?.addEventListener('click', () => {
      applyCategoryFilter('all');
    });
  }

  // ============================================
  // 6. TABLE OF CONTENTS SIDEBAR
  // ============================================
  const tocItems = sectionData.map(s => `
    <a href="#${s.id}" class="toc-link" data-target="${s.id}">
      <span>${s.title}</span>
      <span style="font-size:0.75rem;opacity:0.7;">(${s.count})</span>
    </a>
  `).join('');

  const toc = document.createElement('aside');
  toc.className = 'toc-sidebar';
  toc.id = 'tocSidebar';
  toc.innerHTML = `
    <div class="toc-header">
      <span>📑 Sections & Workflows</span>
      <button class="toc-close" id="tocClose" aria-label="Close sidebar">✕</button>
    </div>
    <div class="toc-links">${tocItems}</div>
    <div class="toc-stats">
      <div class="toc-stat">${allPrompts.length} total prompts • Ready to copy</div>
    </div>
  `;
  document.body.appendChild(toc);

  // TOC toggle events
  const tocToggle = document.getElementById('tocToggleBtn');
  const tocSidebar = document.getElementById('tocSidebar');
  const tocClose = document.getElementById('tocClose');

  tocToggle?.addEventListener('click', () => {
    tocSidebar.classList.toggle('open');
  });
  tocClose?.addEventListener('click', () => {
    tocSidebar.classList.remove('open');
  });

  // TOC links smooth scroll
  document.querySelectorAll('.toc-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById(link.dataset.target);
      if (target) {
        // Reset category filter if section is hidden
        if (target.style.display === 'none') {
          sections.forEach(s => s.style.display = '');
          const allPill = document.querySelector('.cat-pill[data-sec-id="all"]');
          document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
          allPill?.classList.add('active');
          const filterBanner = document.getElementById('filterBanner');
          if (filterBanner) filterBanner.style.display = 'none';
        }
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        tocSidebar.classList.remove('open');
      }
    });
  });

  // Active TOC highlight on scroll
  const tocLinks = document.querySelectorAll('.toc-link');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tocLinks.forEach(l => l.classList.remove('active'));
        const activeLink = document.querySelector(`.toc-link[data-target="${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, { threshold: 0.2, rootMargin: '-80px 0px -60% 0px' });

  sectionData.forEach(s => sectionObserver.observe(s.element));

  // ============================================
  // 7. SECTION FILTER DROPDOWN
  // ============================================
  const sectionFilter = document.getElementById('sectionFilter');
  sectionFilter?.addEventListener('change', (e) => {
    const val = e.target.value;
    if (val) {
      const target = document.getElementById(val);
      if (target) {
        // Ensure visible
        sections.forEach(s => s.style.display = '');
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    e.target.value = '';
  });

  // ============================================
  // 8. REAL-TIME SEARCH FUNCTIONALITY
  // ============================================
  const searchInput = document.getElementById('promptSearch');

  searchInput?.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    if (!query) {
      // Restore based on category filter
      allPrompts.forEach(b => {
        b.style.display = '';
        b.classList.remove('search-highlight');
      });
      sections.forEach(s => {
        if (currentActiveSection === 'all') {
          s.style.display = '';
        } else {
          s.style.display = (s.id === currentActiveSection) ? '' : 'none';
        }
      });
      return;
    }

    let matchCount = 0;
    let visibleSections = new Set();

    allPrompts.forEach(b => {
      const text = b.textContent.toLowerCase();
      if (text.includes(query)) {
        b.style.display = '';
        b.classList.add('search-highlight');
        matchCount++;
        const parentSec = b.closest('.prompt-section');
        if (parentSec) visibleSections.add(parentSec);
      } else {
        b.style.display = 'none';
        b.classList.remove('search-highlight');
      }
    });

    sections.forEach(s => {
      s.style.display = visibleSections.has(s) ? '' : 'none';
    });
  });

  // ============================================
  // 9. COPY-TO-CLIPBOARD BUTTONS
  // ============================================
  document.querySelectorAll('.prompt-block-body').forEach(body => {
    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.innerHTML = '📋 Copy';
    btn.title = 'Copy prompt to clipboard';
    btn.type = 'button';

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      let text = body.textContent.trim();
      navigator.clipboard.writeText(text).then(() => {
        btn.innerHTML = '✅ Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.innerHTML = '📋 Copy';
          btn.classList.remove('copied');
        }, 2200);
      }).catch(() => {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        btn.innerHTML = '✅ Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.innerHTML = '📋 Copy';
          btn.classList.remove('copied');
        }, 2200);
      });
    });

    body.parentElement.style.position = 'relative';
    body.parentElement.insertBefore(btn, body);
  });

  // ============================================
  // 10. COLLAPSIBLE ACCORDION PROMPT BLOCKS
  // ============================================
  document.querySelectorAll('.prompt-block').forEach(block => {
    const header = block.querySelector('h3');
    if (!header) return;

    const numberEl = block.querySelector('.prompt-block-number');
    const toggleWrap = document.createElement('div');
    toggleWrap.className = 'prompt-toggle-header';
    toggleWrap.style.cursor = 'pointer';

    if (numberEl) toggleWrap.appendChild(numberEl.cloneNode(true));
    toggleWrap.appendChild(header.cloneNode(true));

    const arrow = document.createElement('span');
    arrow.className = 'prompt-arrow';
    arrow.innerHTML = '▼';
    toggleWrap.appendChild(arrow);

    const content = document.createElement('div');
    content.className = 'prompt-collapsible';

    const children = Array.from(block.children);
    let afterTitle = false;
    children.forEach(child => {
      if (child === header || child.classList?.contains('prompt-block-number')) {
        afterTitle = true;
        return;
      }
      if (child.classList?.contains('copy-btn')) {
        content.appendChild(child);
        return;
      }
      if (afterTitle) {
        content.appendChild(child);
      }
    });

    if (numberEl) numberEl.remove();
    header.remove();

    block.prepend(content);
    block.prepend(toggleWrap);

    toggleWrap.addEventListener('click', () => {
      block.classList.toggle('collapsed');
      arrow.innerHTML = block.classList.contains('collapsed') ? '▶' : '▼';
    });
  });

  // ============================================
  // 11. EXPAND ALL / COLLAPSE ALL PER SECTION
  // ============================================
  document.querySelectorAll('.prompt-section-title').forEach(title => {
    const btnGroup = document.createElement('div');
    btnGroup.className = 'section-toggle-btns';
    btnGroup.innerHTML = `
      <button class="section-expand-btn" title="Expand all prompts in this section" type="button">Expand All</button>
      <button class="section-collapse-btn" title="Collapse all prompts in this section" type="button">Collapse All</button>
    `;
    title.appendChild(btnGroup);

    const section = title.closest('.prompt-section');

    btnGroup.querySelector('.section-expand-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      section.querySelectorAll('.prompt-block').forEach(b => {
        b.classList.remove('collapsed');
        const arrow = b.querySelector('.prompt-arrow');
        if (arrow) arrow.innerHTML = '▼';
      });
    });

    btnGroup.querySelector('.section-collapse-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      section.querySelectorAll('.prompt-block').forEach(b => {
        b.classList.add('collapsed');
        const arrow = b.querySelector('.prompt-arrow');
        if (arrow) arrow.innerHTML = '▶';
      });
    });
  });

  // ============================================
  // 12. SCROLL-TO-TOP BUTTON
  // ============================================
  const scrollBtn = document.createElement('button');
  scrollBtn.className = 'scroll-top-btn';
  scrollBtn.innerHTML = '↑';
  scrollBtn.title = 'Back to top';
  scrollBtn.type = 'button';
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  document.body.appendChild(scrollBtn);

  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('visible', window.scrollY > 350);
  });

  // ============================================
  // 13. FIX TOP PADDING FOR STICKY NAV
  // ============================================
  const productPage = document.querySelector('.product-page');
  if (productPage) {
    productPage.style.paddingTop = '70px';
  }

  // ============================================
  // 14. INITIALIZE THEME & TOGGLE EVENT
  // ============================================
  updateThemeIcon();
  document.getElementById('themeToggleBtn')?.addEventListener('click', toggleTheme);
});
