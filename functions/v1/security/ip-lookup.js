export async function onRequest(context) {
  const { request } = context;

  // Only allow GET requests
  if (request.method !== "GET") {
    return new Response(JSON.stringify({ error: "Method Not Allowed. Use GET." }), {
      status: 405,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const url = new URL(request.url);
    const ip = url.searchParams.get("ip");

    if (!ip) {
      return new Response(JSON.stringify({ error: "Missing required parameter: 'ip'" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Call the public ip-api
    const targetUrl = `http://ip-api.com/json/${encodeURIComponent(ip)}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query`;
    const proxyResponse = await fetch(targetUrl);
    const data = await proxyResponse.json();

    if (data.status === "fail") {
      return new Response(JSON.stringify({ error: data.message || "Failed to lookup IP" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify({
      success: true,
      ip: data.query,
      location: {
        country: data.country,
        countryCode: data.countryCode,
        region: data.regionName,
        city: data.city,
        zip: data.zip,
        latitude: data.lat,
        longitude: data.lon,
        timezone: data.timezone
      },
      network: {
        isp: data.isp,
        organization: data.org,
        as: data.as
      }
    }), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error", message: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
