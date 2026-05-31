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
    const webhookUrl = body.webhook_url;
    const content = body.content;
    const username = body.username || "Errordocs API";

    if (!webhookUrl || !content) {
      return new Response(JSON.stringify({ error: "Missing required parameters: 'webhook_url' and 'content'" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    if (!webhookUrl.startsWith("https://discord.com/api/webhooks/")) {
      return new Response(JSON.stringify({ error: "Invalid Discord webhook URL" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Proxy to Discord
    const discordPayload = {
      content: content,
      username: username
    };

    const proxyResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(discordPayload)
    });

    if (!proxyResponse.ok) {
      const errorText = await proxyResponse.text();
      return new Response(JSON.stringify({ error: "Discord rejected the message", details: errorText }), {
        status: proxyResponse.status,
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify({
      success: true,
      message: "Message broadcasted to Discord successfully",
      delivered_at: new Date().toISOString()
    }), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid JSON or Internal Error", message: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
