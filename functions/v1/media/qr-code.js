export async function onRequest(context) {
  const { request } = context;

  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method Not Allowed. Use POST." }), {
      status: 405,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const body = await request.json();
    const data = body.data;
    const size = body.size || "300x300";

    if (!data) {
      return new Response(JSON.stringify({ error: "Missing required parameter: 'data'" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Proxy the image request
    const targetUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${encodeURIComponent(size)}&data=${encodeURIComponent(data)}`;
    const proxyResponse = await fetch(targetUrl);
    
    if (!proxyResponse.ok) {
      return new Response(JSON.stringify({ error: "Failed to generate QR Code" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Return the image blob directly
    return new Response(proxyResponse.body, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=31536000"
      }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid JSON or Internal Error", message: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
