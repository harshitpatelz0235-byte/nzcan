export async function onRequestPost(context) {
  const { request } = context;

  try {
    const body = await request.json();
    
    if (!body.html && !body.url) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Missing required parameter: 'html' or 'url' is required.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // SIMULATED RESPONSE
    // In production, this would route to a Puppeteer/Playwright instance
    const id = Math.random().toString(36).substring(7);

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          pdf_url: `https://errordocs.com/demo/doc-${id}.pdf`,
          pages: Math.floor(Math.random() * 5) + 1,
          size_bytes: Math.floor(Math.random() * 500000) + 100000,
          expires_in: "24 hours"
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
