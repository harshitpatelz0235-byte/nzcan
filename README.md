# AI Prompt Mastery — Digital Product Platform ⚡

A high-converting, production-ready digital product web platform selling **200+ battle-tested AI prompt workflows** tailored specifically for Indian professionals, D2C brands, real estate agents, content creators, and job seekers.

---

## 🚀 Features

### 🛍️ 4 Comprehensive Prompt Kits
- **D2C Brand & E-Commerce Kit** (`products/d2c-brand-kit.html`): 55 prompts for high-converting product listings, Facebook/Instagram ad copy, WhatsApp retention, and email flows.
- **Real Estate Agent Kit** (`products/real-estate-kit.html`): 50 prompts for luxury property listings, client WhatsApp follow-ups, Instagram Reels, and objection handling.
- **Content Creator Kit** (`products/content-creator-kit.html`): 55 prompts for viral YouTube scripts, Instagram carousel hooks, LinkedIn thought leadership, and 30-day content planners.
- **Job Seeker & Career Kit** (`products/job-seeker-kit.html`): 50 prompts for ATS-optimized resume rewrites, cold outreach to recruiters, interview simulations, and salary negotiation.

### 💳 Razorpay Payments & Security
- **Single Kit (₹299)**: Integrated with direct Razorpay payment link.
- **Complete Bundle (₹499)**: Integrated with direct Razorpay payment link.
- **Anti-Share Redirect Protection**:
  - Validates `razorpay_payment_id` upon redirect.
  - Automatically sanitizes the URL via `window.history.replaceState` to strip sensitive parameters.
  - Generates an encrypted, browser-fingerprinted token in `localStorage`.
  - Recipient of a shared URL sees a locked **"🔒 Payment Required"** screen.
  - Product kit pages run client-side access guards.

### 🎨 User Experience & Navigation
- **Default Light Theme**: Clean, high-contrast, modern light theme by default across all product pages.
- **Dark Mode Toggle**: One-click toggle between Light and Dark themes.
- **Category Filter Pills**: Interactive filter chips (`[✨ All]`, `[🏷️ Product Descriptions]`, `[📣 Ad Copy]`, etc.) to isolate categories without endless scrolling.
- **Kit Switcher Dropdown**: Instant switching between kits directly from the top navigation bar.
- **Live Search**: Instant real-time search across all prompt titles and text.
- **1-Click Copy**: Tactile copy button with instant feedback (`✅ Copied!`).
- **Collapsible Accordions**: Expand/collapse prompts individually or section-wide.
- **Print / Save as PDF**: Formatted print styles and a 1-click button to download/print offline copies.

---

## 📁 File Structure

```text
├── index.html                   # High-converting landing page with live countdown & pricing
├── thank-you.html               # Post-payment access delivery page with security verification
├── facebook-ad-copy.md          # Ready-to-use Facebook & Instagram Ad campaigns & targeting
├── css/
│   └── styles.css               # Unified design system, light/dark themes, responsive navbar
├── js/
│   ├── main.js                  # Landing page interactions, countdown timers, stats counters
│   ├── product.js               # Product kit UX: filters, live search, accordions, theme toggle
│   └── security.js              # Razorpay verification, URL sanitizer, and access guards
└── products/
    ├── d2c-brand-kit.html       # D2C & E-Commerce Kit
    ├── real-estate-kit.html     # Real Estate Agent Kit
    ├── content-creator-kit.html # Content Creator Kit
    └── job-seeker-kit.html      # Job Seeker & Career Kit
```

---

## 🛠️ Razorpay Redirect Setup

1. Open your **Razorpay Dashboard**.
2. Go to **Payment Links** -> Edit each link.
3. In **Redirect Settings**, set **Redirect URL** to:
   ```text
   https://yourdomain.com/thank-you.html
   ```

---

## 💻 Local Development

Run any static HTTP server:

```bash
# Python
python -m http.server 8080

# Or Node.js npx serve
npx serve .
```

Open `http://localhost:8080` in your browser.
To test the unlocked access without making a payment:
```text
http://localhost:8080/thank-you.html?unlock=apm2026
```

---

## 📄 License
© 2026 AI Prompt Mastery. All rights reserved.
