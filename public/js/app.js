// ============================================
// Errordocs - Main Application
// SPA Router, Rendering, Search & Filters
// ============================================

(function () {
  "use strict";

  // ---- State ----
  let currentPage = "home";
  let currentCategory = "all";
  let searchQuery = "";
  let apiDetailCache = {};

  // ---- Router ----
  function navigateTo(page, data) {
    currentPage = page;
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Close mobile menu if open
    const navLinks = document.getElementById("nav-links");
    if (navLinks && navLinks.classList.contains("open")) {
      navLinks.classList.remove("open");
    }

    render(data);
    updateNavLinks();
  }

  function handleHashChange() {
    const hash = window.location.hash.slice(1) || "home";
    if (hash.startsWith("api/")) {
      const slug = hash.replace("api/", "");
      navigateTo("api-detail", { slug });
    } else if (hash === "pricing") {
      navigateTo("pricing");
    } else if (hash === "extensions") {
      navigateTo("extensions");
    } else if (hash === "apis") {
      navigateTo("home");
      setTimeout(() => {
        document.getElementById("api-grid-section")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      navigateTo("home");
    }
  }

  function updateNavLinks() {
    document.querySelectorAll(".nav-links a").forEach(a => {
      a.classList.remove("active");
      const href = a.getAttribute("href")?.replace("#", "");
      if (href === currentPage || (currentPage === "home" && href === "")) {
        a.classList.add("active");
      }
    });
  }

  // ---- Render ----
  function render(data) {
    const app = document.getElementById("app");
    app.classList.add("page-transition-enter");
    setTimeout(() => app.classList.remove("page-transition-enter"), 400);

    switch (currentPage) {
      case "home":
        app.innerHTML = renderHome();
        bindHomeEvents();
        break;
      case "api-detail":
        app.innerHTML = renderLoading();
        loadApiDetail(data.slug);
        break;
      case "pricing":
        app.innerHTML = renderPricing();
        bindPricingEvents();
        break;
      case "extensions":
        app.innerHTML = renderExtensions();
        break;
    }
    initScrollAnimations();
  }

  // ---- Home Page ----
  function renderHome() {
    const filtered = getFilteredApis();
    return `
      ${renderHero()}
      ${renderCategories()}
      <section class="api-grid-section" id="api-grid-section">
        <div class="api-grid-header">
          <h2 class="api-grid-title">All APIs</h2>
          <span class="api-grid-count"><span id="api-count">${filtered.length}</span> APIs available</span>
        </div>
        <div class="api-grid" id="api-grid">
          ${filtered.length > 0 ? filtered.map(renderApiCard).join("") : renderEmptyState()}
        </div>
      </section>
      ${renderPricingSection()}
      ${renderExtensionsSection()}
      ${renderFooter()}
    `;
  }

  function renderHero() {
    return `
      <section class="hero">
        <div class="hero-bg-effects">
          <div class="hero-orb hero-orb-1"></div>
          <div class="hero-orb hero-orb-2"></div>
          <div class="hero-orb hero-orb-3"></div>
          <div class="hero-grid"></div>
        </div>
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-dot"></span>
            <span>100+ Production-Ready APIs</span>
          </div>
          <h1 class="hero-title">
            One Platform.<br>
            <span class="highlight">Every API You Need.</span>
          </h1>
          <p class="hero-subtitle">
            Production-ready APIs for text, image, finance, security & more.
            Free tier included. Start building in minutes.
          </p>
          <div class="search-section">
            <div class="search-wrapper">
              <span class="search-icon">🔍</span>
              <input type="text" class="search-input" id="search-input"
                placeholder="Search APIs... (e.g. summarizer, image, pdf)"
                value="${searchQuery}" autocomplete="off">
            </div>
            <p class="search-count">Showing <span id="search-count">${API_CATALOG.length}</span> of ${API_CATALOG.length} APIs</p>
          </div>
          <div class="hero-stats">
            <div class="hero-stat">
              <div class="hero-stat-value">${API_CATALOG.length}+</div>
              <div class="hero-stat-label">APIs Available</div>
            </div>
            <div class="hero-stat">
              <div class="hero-stat-value">99.9%</div>
              <div class="hero-stat-label">Uptime SLA</div>
            </div>
            <div class="hero-stat">
              <div class="hero-stat-value">50ms</div>
              <div class="hero-stat-label">Avg Response</div>
            </div>
            <div class="hero-stat">
              <div class="hero-stat-value">Free</div>
              <div class="hero-stat-label">Tier Available</div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderCategories() {
    return `
      <section class="categories-section">
        <div class="category-pills" id="category-pills">
          ${CATEGORIES.map(cat => `
            <button class="category-pill ${currentCategory === cat.id ? "active" : ""}" data-cat="${cat.id}">
              <span class="pill-icon">${cat.icon}</span>
              <span>${cat.name}</span>
              <span class="pill-count">${cat.count}</span>
            </button>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderApiCard(api) {
    const catInfo = CATEGORIES.find(c => c.id === api.category) || {};
    return `
      <article class="api-card" data-slug="${api.slug}" onclick="window.location.hash='api/${api.slug}'">
        <div class="api-card-header">
          <div class="api-card-icon">${api.icon}</div>
          <div>
            <h3 class="api-card-title">${api.name}</h3>
            <span class="api-card-category">${catInfo.icon || ""} ${catInfo.name || api.category}</span>
          </div>
        </div>
        <p class="api-card-desc">${api.shortDesc}</p>
        <div class="api-card-meta">
          <span class="api-card-method method-${api.method}">${api.method}</span>
          <span class="api-card-endpoint">${api.endpoint}</span>
          <span class="api-card-arrow">→</span>
        </div>
      </article>
    `;
  }

  function renderEmptyState() {
    return `
      <div class="empty-state" style="grid-column:1/-1">
        <div class="empty-state-icon">🔍</div>
        <h3 class="empty-state-title">No APIs found</h3>
        <p class="empty-state-desc">Try a different search term or category</p>
      </div>
    `;
  }

  // ---- API Detail Page ----
  async function loadApiDetail(slug) {
    try {
      let apiData;
      if (apiDetailCache[slug]) {
        apiData = apiDetailCache[slug];
      } else {
        const res = await fetch(`apis/${slug}.json`);
        if (!res.ok) throw new Error("API not found");
        apiData = await res.json();
        apiDetailCache[slug] = apiData;
      }
      document.getElementById("app").innerHTML = renderApiDetail(apiData);
      bindDetailEvents(apiData);
      initScrollAnimations();
    } catch (err) {
      document.getElementById("app").innerHTML = renderNotFound(slug);
    }
  }

  function renderApiDetail(api) {
    const catInfo = CATEGORIES.find(c => c.id === api.category) || {};
    return `
      <div class="detail-page page-transition-enter">
        <button class="detail-back" onclick="window.location.hash='home'">
          ← Back to all APIs
        </button>

        <div class="detail-header">
          <div class="detail-icon">${api.icon}</div>
          <div class="detail-info">
            <span class="detail-category-badge">${catInfo.icon || ""} ${api.categoryName || api.category}</span>
            <h1 class="detail-title">${api.name}</h1>
            <p class="detail-desc">${api.description}</p>
            <div class="detail-actions">
              <button class="btn-primary" onclick="document.getElementById('pricing-section')?.scrollIntoView({behavior:'smooth'})">
                🔑 Get API Key
              </button>
              <button class="btn-secondary" onclick="document.getElementById('code-section')?.scrollIntoView({behavior:'smooth'})">
                📖 View Docs
              </button>
            </div>
          </div>
        </div>

        <div class="detail-sections">
          ${renderHowItWorks(api)}
          ${renderEndpointDocs(api)}
          ${renderCodeExamples(api)}
          ${renderResponseExample(api)}
          ${renderUseCases(api)}
          ${renderApiPricing(api)}
        </div>

        ${renderFooter()}
      </div>
    `;
  }

  function renderHowItWorks(api) {
    if (!api.howItWorks || !api.howItWorks.length) return "";
    return `
      <section class="detail-section animate-on-scroll">
        <h2 class="detail-section-title"><span class="section-icon">⚡</span> How It Works</h2>
        <div class="how-it-works-steps">
          ${api.howItWorks.map((step, i) => `
            <div class="step-item">
              <div class="step-number">${i + 1}</div>
              <div class="step-text">${step}</div>
            </div>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderEndpointDocs(api) {
    return `
      <section class="detail-section animate-on-scroll" id="endpoint-section">
        <h2 class="detail-section-title"><span class="section-icon">📡</span> Endpoint</h2>
        <div class="endpoint-block">
          <div class="endpoint-header">
            <span class="endpoint-method method-${api.method}">${api.method}</span>
            <span class="endpoint-path">${api.baseUrl}${api.endpoint}</span>
          </div>
          ${api.params && api.params.length ? `
            <div class="endpoint-params">
              <table class="param-table">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Type</th>
                    <th>Required</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  ${api.params.map(p => `
                    <tr>
                      <td><span class="param-name">${p.name}</span></td>
                      <td><span class="param-type">${p.type}</span></td>
                      <td><span class="param-required ${p.required ? "required" : "optional"}">${p.required ? "Required" : "Optional"}</span></td>
                      <td>${p.desc}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          ` : ""}
        </div>
      </section>
    `;
  }

  function renderCodeExamples(api) {
    const curl = generateCurl(api);
    const js = generateJS(api);
    const python = generatePython(api);
    return `
      <section class="detail-section animate-on-scroll" id="code-section">
        <h2 class="detail-section-title"><span class="section-icon">💻</span> Code Examples</h2>
        <div class="code-tabs" id="code-tabs">
          <button class="code-tab active" data-lang="curl">cURL</button>
          <button class="code-tab" data-lang="javascript">JavaScript</button>
          <button class="code-tab" data-lang="python">Python</button>
        </div>
        <div class="code-block-wrapper">
          <button class="code-copy-btn" id="copy-btn" onclick="copyCode()">📋 Copy</button>
          <pre class="code-block" id="code-content">${escapeHtml(curl)}</pre>
        </div>
      </section>
    `;
  }

  function renderResponseExample(api) {
    if (!api.responseExample) return "";
    return `
      <section class="detail-section animate-on-scroll">
        <h2 class="detail-section-title"><span class="section-icon">📦</span> Response Example</h2>
        <div class="response-block">
          <div class="response-header">
            <div class="response-status">
              <span class="status-dot"></span>
              <span>200 OK</span>
            </div>
            <span style="font-size:var(--text-xs);color:var(--text-dim)">application/json</span>
          </div>
          <pre class="response-body">${escapeHtml(JSON.stringify(api.responseExample, null, 2))}</pre>
        </div>
      </section>
    `;
  }

  function renderUseCases(api) {
    if (!api.useCases || !api.useCases.length) return "";
    return `
      <section class="detail-section animate-on-scroll">
        <h2 class="detail-section-title"><span class="section-icon">🎯</span> Use Cases</h2>
        <div class="use-cases-grid">
          ${api.useCases.map(uc => `
            <div class="use-case-item">
              <span class="use-case-icon">✓</span>
              <span>${uc}</span>
            </div>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderApiPricing(api) {
    const rl = api.rateLimit || { free: "100/mo", pro: "10,000/mo", enterprise: "Unlimited" };
    return `
      <section class="detail-section animate-on-scroll" id="pricing-section">
        <h2 class="detail-section-title"><span class="section-icon">💳</span> Pricing for ${api.name}</h2>
        <div class="pricing-grid" style="margin-top:var(--space-lg)">
          <div class="pricing-card">
            <h3 class="pricing-name">Free</h3>
            <p class="pricing-desc">Get started at no cost</p>
            <div class="pricing-price"><span class="pricing-currency">$</span><span class="pricing-amount">0</span><span class="pricing-period">/month</span></div>
            <div class="pricing-features">
              <div class="pricing-feature"><span class="check">✓</span> ${rl.free}</div>
              <div class="pricing-feature"><span class="check">✓</span> 10 req/min rate limit</div>
              <div class="pricing-feature"><span class="check">✓</span> Community support</div>
            </div>
            <button class="pricing-btn pricing-btn-secondary" onclick="alert('Free tier — sign up to get your API key!')">Start Free</button>
          </div>
          <div class="pricing-card featured">
            <span class="pricing-popular">Most Popular</span>
            <h3 class="pricing-name">Pro</h3>
            <p class="pricing-desc">For growing projects</p>
            <div class="pricing-price"><span class="pricing-currency">$</span><span class="pricing-amount">9</span><span class="pricing-period">/month</span></div>
            <div class="pricing-features">
              <div class="pricing-feature"><span class="check">✓</span> ${rl.pro}</div>
              <div class="pricing-feature"><span class="check">✓</span> 100 req/min rate limit</div>
              <div class="pricing-feature"><span class="check">✓</span> Email support</div>
              <div class="pricing-feature"><span class="check">✓</span> Priority processing</div>
            </div>
            <button class="pricing-btn pricing-btn-primary" id="payment-btn-pro" onclick="handlePayment('pro')">Subscribe — $9/mo</button>
          </div>
          <div class="pricing-card">
            <h3 class="pricing-name">Enterprise</h3>
            <p class="pricing-desc">Unlimited scale</p>
            <div class="pricing-price"><span class="pricing-currency">$</span><span class="pricing-amount">49</span><span class="pricing-period">/month</span></div>
            <div class="pricing-features">
              <div class="pricing-feature"><span class="check">✓</span> ${rl.enterprise}</div>
              <div class="pricing-feature"><span class="check">✓</span> 1000 req/min rate limit</div>
              <div class="pricing-feature"><span class="check">✓</span> Priority support</div>
              <div class="pricing-feature"><span class="check">✓</span> Custom endpoints</div>
              <div class="pricing-feature"><span class="check">✓</span> SLA guarantee</div>
            </div>
            <button class="pricing-btn pricing-btn-secondary" id="payment-btn-ent" onclick="handlePayment('enterprise')">Subscribe — $49/mo</button>
          </div>
        </div>
      </section>
    `;
  }

  // ---- Code Generation ----
  function generateCurl(api) {
    const bodyParams = {};
    (api.params || []).forEach(p => {
      if (p.required) bodyParams[p.name] = p.type === "string" ? `your_${p.name}_here` : "value";
    });
    if (api.method === "POST") {
      return `curl -X POST "${api.baseUrl}${api.endpoint}" \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: your_api_key_here" \\
  -d '${JSON.stringify(bodyParams, null, 2)}'`;
    }
    const qs = Object.entries(bodyParams).map(([k, v]) => `${k}=${v}`).join("&");
    return `curl -X GET "${api.baseUrl}${api.endpoint}${qs ? "?" + qs : ""}" \\
  -H "X-API-Key: your_api_key_here"`;
  }

  function generateJS(api) {
    const bodyParams = {};
    (api.params || []).forEach(p => {
      if (p.required) bodyParams[p.name] = `your_${p.name}_here`;
    });
    if (api.method === "POST") {
      return `const response = await fetch("${api.baseUrl}${api.endpoint}", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-API-Key": "your_api_key_here"
  },
  body: JSON.stringify(${JSON.stringify(bodyParams, null, 4)})
});

const data = await response.json();
console.log(data);`;
    }
    const qs = Object.entries(bodyParams).map(([k, v]) => `${k}=${v}`).join("&");
    return `const response = await fetch("${api.baseUrl}${api.endpoint}${qs ? "?" + qs : ""}", {
  headers: {
    "X-API-Key": "your_api_key_here"
  }
});

const data = await response.json();
console.log(data);`;
  }

  function generatePython(api) {
    const bodyParams = {};
    (api.params || []).forEach(p => {
      if (p.required) bodyParams[p.name] = `your_${p.name}_here`;
    });
    if (api.method === "POST") {
      return `import requests

url = "${api.baseUrl}${api.endpoint}"
headers = {
    "Content-Type": "application/json",
    "X-API-Key": "your_api_key_here"
}
payload = ${JSON.stringify(bodyParams, null, 4)}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`;
    }
    const qs = Object.entries(bodyParams).map(([k, v]) => `${k}=${v}`).join("&");
    return `import requests

url = "${api.baseUrl}${api.endpoint}${qs ? "?" + qs : ""}"
headers = {
    "X-API-Key": "your_api_key_here"
}

response = requests.get(url, headers=headers)
print(response.json())`;
  }

  let currentCodeLang = "curl";
  let currentApiData = null;

  function bindDetailEvents(api) {
    currentApiData = api;
    currentCodeLang = "curl";
    document.querySelectorAll("#code-tabs .code-tab").forEach(tab => {
      tab.addEventListener("click", () => {
        document.querySelectorAll("#code-tabs .code-tab").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        currentCodeLang = tab.dataset.lang;
        let code = "";
        if (currentCodeLang === "curl") code = generateCurl(api);
        else if (currentCodeLang === "javascript") code = generateJS(api);
        else if (currentCodeLang === "python") code = generatePython(api);
        document.getElementById("code-content").textContent = code;
      });
    });
  }

  window.copyCode = function () {
    const code = document.getElementById("code-content")?.textContent;
    if (code) {
      navigator.clipboard.writeText(code).then(() => {
        const btn = document.getElementById("copy-btn");
        btn.textContent = "✅ Copied!";
        setTimeout(() => (btn.textContent = "📋 Copy"), 2000);
      });
    }
  };

  // ---- Pricing Page ----
  function renderPricing() {
    return `
      <div class="detail-page page-transition-enter">
        <button class="detail-back" onclick="window.location.hash='home'">← Back to Home</button>
        ${renderPricingSection()}
        ${renderFooter()}
      </div>
    `;
  }

  function renderPricingSection() {
    return `
      <section class="pricing-section animate-on-scroll" id="pricing-page-section">
        <div class="section-header">
          <p class="section-overline">Pricing</p>
          <h2 class="section-title">Simple, Transparent Pricing</h2>
          <p class="section-subtitle">Start free. Scale as you grow. All APIs included in every plan.</p>
        </div>
        <div class="pricing-grid">
          <div class="pricing-card">
            <h3 class="pricing-name">Free</h3>
            <p class="pricing-desc">Perfect for testing & prototyping</p>
            <div class="pricing-price"><span class="pricing-currency">$</span><span class="pricing-amount">0</span><span class="pricing-period">/month</span></div>
            <div class="pricing-features">
              <div class="pricing-feature"><span class="check">✓</span> 100 API calls / month</div>
              <div class="pricing-feature"><span class="check">✓</span> All APIs accessible</div>
              <div class="pricing-feature"><span class="check">✓</span> 10 requests / minute</div>
              <div class="pricing-feature"><span class="check">✓</span> Community support</div>
              <div class="pricing-feature"><span class="check">✓</span> API documentation</div>
            </div>
            <button class="pricing-btn pricing-btn-secondary" onclick="alert('Free tier — sign up to get your API key!')">Start Free</button>
          </div>
          <div class="pricing-card featured">
            <span class="pricing-popular">Most Popular</span>
            <h3 class="pricing-name">Pro</h3>
            <p class="pricing-desc">For developers & startups</p>
            <div class="pricing-price"><span class="pricing-currency">$</span><span class="pricing-amount">9</span><span class="pricing-period">/month</span></div>
            <div class="pricing-features">
              <div class="pricing-feature"><span class="check">✓</span> 10,000 API calls / month</div>
              <div class="pricing-feature"><span class="check">✓</span> All APIs accessible</div>
              <div class="pricing-feature"><span class="check">✓</span> 100 requests / minute</div>
              <div class="pricing-feature"><span class="check">✓</span> Email support</div>
              <div class="pricing-feature"><span class="check">✓</span> Priority processing</div>
              <div class="pricing-feature"><span class="check">✓</span> Webhook notifications</div>
            </div>
            <button class="pricing-btn pricing-btn-primary" onclick="handlePayment('pro')">Subscribe — $9/mo</button>
          </div>
          <div class="pricing-card">
            <h3 class="pricing-name">Enterprise</h3>
            <p class="pricing-desc">For teams & businesses at scale</p>
            <div class="pricing-price"><span class="pricing-currency">$</span><span class="pricing-amount">49</span><span class="pricing-period">/month</span></div>
            <div class="pricing-features">
              <div class="pricing-feature"><span class="check">✓</span> Unlimited API calls</div>
              <div class="pricing-feature"><span class="check">✓</span> All APIs accessible</div>
              <div class="pricing-feature"><span class="check">✓</span> 1,000 requests / minute</div>
              <div class="pricing-feature"><span class="check">✓</span> Priority support & SLA</div>
              <div class="pricing-feature"><span class="check">✓</span> Custom endpoints</div>
              <div class="pricing-feature"><span class="check">✓</span> Dedicated infrastructure</div>
              <div class="pricing-feature"><span class="check">✓</span> Team management</div>
            </div>
            <button class="pricing-btn pricing-btn-secondary" onclick="handlePayment('enterprise')">Subscribe — $49/mo</button>
          </div>
        </div>
      </section>
    `;
  }

  function bindPricingEvents() {}

  // ---- Extensions Page ----
  function renderExtensions() {
    return `
      <div class="detail-page page-transition-enter">
        <button class="detail-back" onclick="window.location.hash='home'">← Back to Home</button>
        ${renderExtensionsSection()}
        ${renderFooter()}
      </div>
    `;
  }

  function renderExtensionsSection() {
    return `
      <section class="extensions-section animate-on-scroll" id="extensions-section">
        <div class="section-header" style="text-align:center;margin-bottom:var(--space-3xl)">
          <p class="section-overline">Extensions</p>
          <h2 class="section-title">Browser Extensions</h2>
          <p class="section-subtitle">Powerful browser extensions to supercharge your productivity</p>
        </div>
        <div class="extensions-grid">
          ${EXTENSIONS.map(ext => `
            <div class="extension-card">
              <div class="extension-icon">${ext.icon}</div>
              <h3 class="extension-name">${ext.name}</h3>
              <p class="extension-desc">${ext.desc}</p>
              <div class="extension-features">
                ${ext.features.map(f => `<span class="extension-feature-tag">${f}</span>`).join("")}
              </div>
              <button class="extension-install-btn">
                ${ext.status === "coming-soon" ? "🔔 Notify Me" : "⬇️ Install"}
              </button>
            </div>
          `).join("")}
        </div>
      </section>
    `;
  }

  // ---- Loading & 404 ----
  function renderLoading() {
    return `
      <div class="detail-page" style="text-align:center;padding-top:200px">
        <div style="font-size:48px;margin-bottom:var(--space-lg);animation:pulse 1s ease-in-out infinite">⚡</div>
        <p style="color:var(--text-muted)">Loading API documentation...</p>
      </div>
    `;
  }

  function renderNotFound(slug) {
    return `
      <div class="detail-page">
        <button class="detail-back" onclick="window.location.hash='home'">← Back to all APIs</button>
        <div class="empty-state" style="padding-top:100px">
          <div class="empty-state-icon">🚧</div>
          <h3 class="empty-state-title">API "${slug}" Coming Soon</h3>
          <p class="empty-state-desc">This API is being built. Check back soon!</p>
        </div>
      </div>
    `;
  }

  // ---- Footer ----
  function renderFooter() {
    return `
      <footer class="footer">
        <div class="footer-container">
          <div class="footer-brand">
            <div class="footer-brand-name">⚡ Errordocs</div>
            <p class="footer-brand-desc">
              Production-ready APIs for developers. Build faster with our comprehensive
              suite of 100+ APIs spanning text, image, finance, security, and more.
            </p>
          </div>
          <div>
            <h4 class="footer-col-title">Product</h4>
            <div class="footer-links">
              <a href="#home">All APIs</a>
              <a href="#pricing">Pricing</a>
              <a href="#extensions">Extensions</a>
              <a href="#apis">Documentation</a>
            </div>
          </div>
          <div>
            <h4 class="footer-col-title">Categories</h4>
            <div class="footer-links">
              <a href="#home" onclick="setTimeout(()=>{filterByCategory('text-nlp')},100)">Text & NLP</a>
              <a href="#home" onclick="setTimeout(()=>{filterByCategory('image-vision')},100)">Image & Vision</a>
              <a href="#home" onclick="setTimeout(()=>{filterByCategory('dev-tools')},100)">Developer Tools</a>
              <a href="#home" onclick="setTimeout(()=>{filterByCategory('security')},100)">Security</a>
            </div>
          </div>
          <div>
            <h4 class="footer-col-title">Support</h4>
            <div class="footer-links">
              <a href="#">API Status</a>
              <a href="#">Contact</a>
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 Errordocs. All rights reserved.</span>
          <span>Built with ⚡ for developers</span>
        </div>
      </footer>
    `;
  }

  // ---- Search & Filter ----
  function getFilteredApis() {
    let apis = API_CATALOG;
    if (currentCategory !== "all") {
      apis = apis.filter(a => a.category === currentCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      apis = apis.filter(a =>
        a.name.toLowerCase().includes(q) ||
        a.shortDesc.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.endpoint.toLowerCase().includes(q)
      );
    }
    return apis;
  }

  function bindHomeEvents() {
    // Search
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        updateGrid();
      });
    }
    // Category pills
    document.querySelectorAll(".category-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        currentCategory = pill.dataset.cat;
        document.querySelectorAll(".category-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        updateGrid();
      });
    });
  }

  function updateGrid() {
    const filtered = getFilteredApis();
    const grid = document.getElementById("api-grid");
    const count = document.getElementById("api-count");
    const searchCount = document.getElementById("search-count");
    if (grid) {
      grid.innerHTML = filtered.length > 0 ? filtered.map(renderApiCard).join("") : renderEmptyState();
    }
    if (count) count.textContent = filtered.length;
    if (searchCount) searchCount.textContent = filtered.length;
  }

  window.filterByCategory = function (catId) {
    currentCategory = catId;
    const pills = document.querySelectorAll(".category-pill");
    pills.forEach(p => p.classList.remove("active"));
    const target = document.querySelector(`.category-pill[data-cat="${catId}"]`);
    if (target) target.classList.add("active");
    updateGrid();
  };

  // ---- Payment ----
  // PLACEHOLDER: Replace with your actual payment link
  const PAYMENT_LINKS = {
    pro: null,       // e.g., "https://buy.stripe.com/xxx"
    enterprise: null  // e.g., "https://buy.stripe.com/yyy"
  };

  window.handlePayment = function (plan) {
    const link = PAYMENT_LINKS[plan];
    if (link) {
      window.open(link, "_blank");
    } else {
      showToast("🔗 Payment link coming soon! Contact us for early access.");
    }
  };

  // ---- Toast ----
  function showToast(msg) {
    let toast = document.querySelector(".toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3000);
  }

  // ---- Scroll Animations ----
  function initScrollAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".animate-on-scroll, .stagger-children").forEach(el => {
      observer.observe(el);
    });
  }

  // ---- Navbar Scroll & Mobile Menu ----
  function initNavbar() {
    const nav = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) nav?.classList.add("scrolled");
      else nav?.classList.remove("scrolled");
    });
    // Mobile toggle
    const toggle = document.querySelector(".nav-mobile-toggle");
    const links = document.querySelector(".nav-links");
    toggle?.addEventListener("click", () => {
      links?.classList.toggle("open");
      const spans = toggle.querySelectorAll("span");
      if (links?.classList.contains("open")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
      } else {
        spans[0].style.transform = "";
        spans[1].style.opacity = "";
        spans[2].style.transform = "";
      }
    });
    // Close on link click
    document.querySelectorAll(".nav-links a").forEach(a => {
      a.addEventListener("click", () => links?.classList.remove("open"));
    });
  }

  // ---- Mouse Glow on Cards ----
  function initCardGlow() {
    document.addEventListener("mousemove", (e) => {
      document.querySelectorAll(".api-card").forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--mouse-x", x + "%");
        card.style.setProperty("--mouse-y", y + "%");
      });
    });
  }

  // ---- Utils ----
  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  // ---- Init ----
  function init() {
    initNavbar();
    initCardGlow();
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
