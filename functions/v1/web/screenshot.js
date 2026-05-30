export async function onRequestPost(context) {
  const { request } = context;

  try {
    const body = await request.json();
    
    if (!body.url) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Missing required parameter: 'url' is required.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // SIMULATED RESPONSE
    const id = Math.random().toString(36).substring(7);
    const isMobile = body.viewport === "mobile";

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          screenshot_url: `https://errordocs.com/demo/screenshot-${id}.png`,
          format: "png",
          dimensions: isMobile ? { width: 375, height: 812 } : { width: 1920, height: 1080 },
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
