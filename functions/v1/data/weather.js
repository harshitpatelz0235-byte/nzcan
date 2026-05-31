export async function onRequest(context) {
  const { request } = context;

  if (request.method !== "GET") {
    return new Response(JSON.stringify({ error: "Method Not Allowed. Use GET." }), {
      status: 405,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const url = new URL(request.url);
    const lat = url.searchParams.get("lat");
    const lon = url.searchParams.get("lon");

    if (!lat || !lon) {
      return new Response(JSON.stringify({ error: "Missing required parameters: 'lat' and 'lon'" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const targetUrl = `https://api.open-meteo.com/v1/forecast?latitude=${encodeURIComponent(lat)}&longitude=${encodeURIComponent(lon)}&current=temperature_2m,relative_humidity_2m,is_day,precipitation,wind_speed_10m&timezone=auto`;
    const proxyResponse = await fetch(targetUrl);
    const data = await proxyResponse.json();

    if (data.error) {
      return new Response(JSON.stringify({ error: data.reason || "Failed to fetch weather data" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify({
      success: true,
      location: {
        latitude: data.latitude,
        longitude: data.longitude,
        timezone: data.timezone
      },
      current_weather: {
        temperature: data.current.temperature_2m,
        temperature_unit: data.current_units.temperature_2m,
        humidity: data.current.relative_humidity_2m,
        humidity_unit: data.current_units.relative_humidity_2m,
        is_day: data.current.is_day === 1,
        precipitation: data.current.precipitation,
        wind_speed: data.current.wind_speed_10m,
        wind_speed_unit: data.current_units.wind_speed_10m,
        time: data.current.time
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
