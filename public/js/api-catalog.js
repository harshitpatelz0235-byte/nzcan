// ============================================
// Errordocs - API Catalog Registry
// Add new APIs here as they are created
// ============================================

const CATEGORIES = [
  { id: "all", name: "All APIs", icon: "⚡", count: 0 },
  { id: "text-nlp", name: "Text & NLP", icon: "📝", count: 0 },
  { id: "image-vision", name: "Image & Vision", icon: "🖼️", count: 0 },
  { id: "document-file", name: "Document & File", icon: "📄", count: 0 },
  { id: "web-scraping", name: "Web & Scraping", icon: "🌐", count: 0 },
  { id: "finance", name: "Finance & Business", icon: "💰", count: 0 },
  { id: "dev-tools", name: "Developer Tools", icon: "👨‍💻", count: 0 },
  { id: "communication", name: "Communication", icon: "📧", count: 0 },
  { id: "security", name: "Security & Auth", icon: "🔒", count: 0 },
  { id: "data-analytics", name: "Data & Analytics", icon: "📊", count: 0 },
  { id: "media-creative", name: "Media & Creative", icon: "🎨", count: 0 }
];

const EXTENSIONS = [
  {
    id: "api-tester",
    name: "API Tester Pro",
    icon: "🧪",
    desc: "Test any API endpoint directly from your browser. Send requests, inspect responses, and debug APIs without leaving your tab.",
    features: ["GET/POST/PUT/DELETE", "Headers editor", "Response viewer", "History log"],
    status: "coming-soon"
  },
  {
    id: "tab-manager",
    name: "Tab Manager AI",
    icon: "🗂️",
    desc: "AI-powered tab grouping that automatically organizes your 50+ tabs into smart workspaces. Save sessions and restore them instantly.",
    features: ["AI grouping", "Session save", "RAM saver", "Smart search"],
    status: "coming-soon"
  },
  {
    id: "focus-mode",
    name: "Focus Mode",
    icon: "🎯",
    desc: "Block distracting websites during work hours. Built-in Pomodoro timer and detailed analytics on your browsing habits.",
    features: ["Site blocker", "Pomodoro timer", "Analytics", "Schedules"],
    status: "coming-soon"
  },
  {
    id: "price-tracker",
    name: "Price Tracker",
    icon: "💸",
    desc: "Track product prices across Amazon, Flipkart, and 50+ stores. Get instant alerts when prices drop to your target.",
    features: ["Price history", "Drop alerts", "Multi-store", "Coupon finder"],
    status: "coming-soon"
  },
  {
    id: "job-filler",
    name: "Job Auto-Filler",
    icon: "💼",
    desc: "Save your profile once, auto-fill job applications across LinkedIn, Indeed, and more. Track all your applications in one place.",
    features: ["One-click fill", "App tracker", "AI cover letter", "Multi-platform"],
    status: "coming-soon"
  }
];

// Master catalog - lightweight entries for listing/search
// Full details are loaded from individual files in /apis/
const API_CATALOG = [
  {
    id: 1,
    name: "Text Summarizer",
    slug: "text-summarizer",
    category: "text-nlp",
    icon: "📝",
    shortDesc: "Summarize long text into concise key points instantly",
    method: "POST",
    endpoint: "/v1/text/summarize"
  },
  {
    id: 2,
    name: "Sentiment Analysis",
    slug: "sentiment-analysis",
    category: "text-nlp",
    icon: "🎭",
    shortDesc: "Detect emotions and sentiment in text content instantly",
    method: "POST",
    endpoint: "/v1/text/sentiment"
  },
  {
    id: 11,
    name: "Background Remover",
    slug: "background-remover",
    category: "image-vision",
    icon: "✂️",
    shortDesc: "Remove backgrounds from images instantly with AI",
    method: "POST",
    endpoint: "/v1/image/remove-background"
  },
  {
    id: 21,
    name: "PDF Generator",
    slug: "pdf-generator",
    category: "document-file",
    icon: "📄",
    shortDesc: "Convert HTML and URLs to high-quality PDF documents",
    method: "POST",
    endpoint: "/v1/document/pdf"
  },
  {
    id: 41,
    name: "Currency Converter",
    slug: "currency-converter",
    category: "finance",
    icon: "💱",
    shortDesc: "Real-time exchange rates and currency conversion",
    method: "GET",
    endpoint: "/v1/finance/convert"
  },
  {
    id: 51,
    name: "Email Validator",
    slug: "email-validator",
    category: "dev-tools",
    icon: "✉️",
    shortDesc: "Validate email addresses and detect disposable domains",
    method: "POST",
    endpoint: "/v1/dev/email-validate"
  },
  {
    id: 31,
    name: "Website Screenshot API",
    slug: "website-screenshot",
    category: "web-scraping",
    icon: "📸",
    shortDesc: "Generate high-resolution screenshots of any URL",
    method: "POST",
    endpoint: "/v1/web/screenshot"
  },
  {
    id: 22,
    name: "Resume/CV Parser",
    slug: "resume-parser",
    category: "document-file",
    icon: "👔",
    shortDesc: "Extract structured data from PDF/DOCX resumes instantly",
    method: "POST",
    endpoint: "/v1/document/parse-resume"
  }
];

// ---- Will add more APIs below as we build them ----

// Auto-calculate category counts
function updateCategoryCounts() {
  CATEGORIES.forEach(cat => {
    if (cat.id === "all") {
      cat.count = API_CATALOG.length;
    } else {
      cat.count = API_CATALOG.filter(a => a.category === cat.id).length;
    }
  });
}
updateCategoryCounts();
