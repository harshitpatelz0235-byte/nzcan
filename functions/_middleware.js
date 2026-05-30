export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);

  // Enable CORS
  if (request.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, X-API-Key",
      },
    });
  }

  // Only protect /v1/* endpoints, skip if it's not an API call
  if (!url.pathname.startsWith("/v1/")) {
    return await next();
  }

  // Check API Key
  const apiKey = request.headers.get("X-API-Key");
  
  if (!apiKey || apiKey.trim() === "") {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Unauthorized: Missing X-API-Key header. Get your key at errordocs.com/pricing",
      }),
      { 
        status: 401,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        }
      }
    );
  }

  // Simulated validation: For now, any key that isn't completely empty works.
  // In production, we would verify this against a database (like Supabase or KV).

  const response = await next();
  
  // Add CORS headers to the actual response
  const newResponse = new Response(response.body, response);
  newResponse.headers.set("Access-Control-Allow-Origin", "*");
  
  return newResponse;
}
