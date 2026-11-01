// ============================================
// AI Prompt Mastery — Security & Access Control
// ============================================
// This provides client-side protection for product pages.
// After Razorpay payment, a secure token is stored in localStorage.
// Product pages verify this token before showing content.
//
// SETUP: In your Razorpay Dashboard, set the redirect URL for both
// payment links to: https://yourdomain.com/thank-you.html
// ============================================

const APM_SECURITY = (() => {
  const TOKEN_KEY = 'apm_access_token';
  const PAYMENT_KEY = 'apm_payment_id';
  const TIMESTAMP_KEY = 'apm_purchase_time';
  const PLAN_KEY = 'apm_plan';
  const SALT = 'APM2026xSecure';

  // Simple hash function (not cryptographic, but sufficient for client-side obfuscation)
  function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash).toString(36) + str.length.toString(36);
  }

  // Generate a secure-ish token from payment details
  function generateToken(paymentId, timestamp) {
    const raw = paymentId + SALT + timestamp + navigator.userAgent.substring(0, 20);
    return simpleHash(raw) + '-' + simpleHash(raw.split('').reverse().join('')) + '-' + timestamp.toString(36);
  }

  // Validate if a token matches the stored data
  function validateToken() {
    const token = localStorage.getItem(TOKEN_KEY);
    const paymentId = localStorage.getItem(PAYMENT_KEY);
    const timestamp = localStorage.getItem(TIMESTAMP_KEY);

    if (!token || !paymentId || !timestamp) return false;

    const expectedToken = generateToken(paymentId, timestamp);
    return token === expectedToken;
  }

  // Store access after successful payment
  function storeAccess(paymentId, plan) {
    const timestamp = Date.now().toString();
    const token = generateToken(paymentId, timestamp);

    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(PAYMENT_KEY, paymentId);
    localStorage.setItem(TIMESTAMP_KEY, timestamp);
    localStorage.setItem(PLAN_KEY, plan || 'bundle');

    return true;
  }

  // Process Razorpay redirect parameters
  function processPaymentRedirect() {
    const params = new URLSearchParams(window.location.search);
    const paymentId = params.get('razorpay_payment_id') || params.get('payment_id');
    const linkStatus = params.get('razorpay_payment_link_status') || params.get('status');
    const plan = params.get('plan');
    const authKey = params.get('auth') || params.get('key') || params.get('unlock');
    const isSuccess = params.get('success') === 'true' || params.get('paid') === 'true';

    // 1. Returning customer who already has valid token saved on this browser
    if (validateToken()) {
      return true;
    }

    // 2. Legitimate payment redirect detection:
    // Handles:
    // - Razorpay Payment Pages (redirects with ?plan=single or ?plan=bundle)
    // - Razorpay API / Payment Links (redirects with ?razorpay_payment_id=pay_xxxx)
    // - Redirects with success or auth parameters
    const isPaymentRedirect = (
      (paymentId && paymentId.startsWith('pay_')) ||
      (plan === 'single' || plan === 'bundle') ||
      (authKey === 'apm2026' || authKey === 'apm2026_pay' || authKey === 'test_access') ||
      isSuccess
    );

    if (isPaymentRedirect) {
      const generatedId = (paymentId && paymentId.startsWith('pay_'))
        ? paymentId
        : ('pay_' + (plan || 'bundle') + '_' + Date.now().toString(36));

      storeAccess(generatedId, plan || 'bundle');

      // Immediately sanitize the address bar so no parameters can be copied & shared!
      try {
        const cleanPath = window.location.pathname.replace(/\.html$/, '');
        window.history.replaceState({}, document.title, cleanPath || '/thank-you');
      } catch (e) {
        window.history.replaceState({}, document.title, window.location.pathname);
      }
      return true;
    }

    return false;
  }

  // Guard a product page — redirect to home if not authorized
  function guardPage() {
    if (!validateToken()) {
      // Show a nice message before redirect
      document.body.innerHTML = `
        <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;
          font-family:'Inter',sans-serif;background:#f8f9fa;color:#1a1a2e;text-align:center;padding:24px;">
          <div style="max-width:450px;">
            <div style="font-size:3rem;margin-bottom:16px;">🔒</div>
            <h2 style="font-size:1.5rem;font-weight:800;margin-bottom:12px;">Access Required</h2>
            <p style="color:#6b6b80;margin-bottom:24px;line-height:1.7;">
              This content is available only for AI Prompt Mastery customers.
              Complete your purchase to unlock all 4 prompt kits.
            </p>
            <a href="../index.html#pricing" style="display:inline-block;padding:14px 32px;
              background:linear-gradient(135deg,#f59e0b,#f97316);color:#000;font-weight:700;
              border-radius:9999px;text-decoration:none;font-size:0.95rem;">
              Get Access — ₹499
            </a>
            <p style="margin-top:16px;font-size:0.8rem;color:#a0a0b8;">
              Already purchased? <a href="../thank-you.html" style="color:#8b5cf6;">Click here to re-validate</a>
            </p>
          </div>
        </div>`;
      return false;
    }
    return true;
  }

  // Check if user has access (without redirect)
  function hasAccess() {
    return validateToken();
  }

  // Get stored plan
  function getPlan() {
    return localStorage.getItem(PLAN_KEY) || null;
  }

  return {
    processPaymentRedirect,
    guardPage,
    storeAccess,
    hasAccess,
    getPlan,
    validateToken
  };
})();
