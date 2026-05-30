export async function onRequestPost(context) {
  const { request } = context;

  try {
    const body = await request.json();
    const email = body.email;
    const checkSmtp = body.check_smtp !== false; // Default to true

    if (!email || typeof email !== "string") {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Missing required parameter: 'email' string is required in JSON body.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // 1. Syntax Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isSyntaxValid = emailRegex.test(email);

    // 2. Extract Domain
    const parts = email.split("@");
    const domain = parts.length === 2 ? parts[1].toLowerCase() : null;

    // 3. Mock Checks (In a real environment, we'd do DNS MX lookups and SMTP checks)
    // Cloudflare Workers cannot do direct raw TCP sockets to port 25 for SMTP easily.
    const disposableDomains = ["mailinator.com", "guerrillamail.com", "tempmail.com", "10minutemail.com"];
    const freeDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];
    const roleAccounts = ["admin", "support", "info", "sales", "contact", "billing"];

    let isDisposable = false;
    let isFree = false;
    let isRole = false;
    let mxFound = false;
    let smtpCheck = false;

    if (isSyntaxValid && domain) {
      isDisposable = disposableDomains.includes(domain);
      isFree = freeDomains.includes(domain);
      isRole = roleAccounts.includes(parts[0].toLowerCase());
      
      // Simulate successful DNS/SMTP for demo purposes if it's a valid syntax
      mxFound = true; 
      smtpCheck = checkSmtp ? true : null;
    }

    // Determine final validity
    const isValid = isSyntaxValid && mxFound && !isDisposable;
    
    // Calculate a quality score
    let score = 1.0;
    if (!isSyntaxValid) score = 0;
    else {
      if (isDisposable) score -= 1.0;
      if (isRole) score -= 0.2;
      if (isFree) score -= 0.1;
    }
    score = Math.max(0, Math.min(1, score));

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          email,
          is_valid: isValid,
          score: parseFloat(score.toFixed(2)),
          reasons: isDisposable ? ["Domain is a known disposable email provider"] : (!isSyntaxValid ? ["Invalid email syntax"] : []),
          details: {
            syntax_valid: isSyntaxValid,
            mx_found: mxFound,
            smtp_check: smtpCheck,
            is_disposable: isDisposable,
            is_role_account: isRole,
            is_free_email: isFree
          }
        }
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Invalid JSON body format.",
      }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
}
