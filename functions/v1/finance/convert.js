export async function onRequestGet(context) {
  const { request } = context;
  const url = new URL(request.url);

  // Extract query parameters
  const from = url.searchParams.get("from")?.toUpperCase();
  const to = url.searchParams.get("to")?.toUpperCase();
  const amountStr = url.searchParams.get("amount") || "1";
  
  if (!from || !to) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Missing required parameters: 'from' and 'to' currency codes are required.",
      }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const amount = parseFloat(amountStr);
  if (isNaN(amount) || amount <= 0) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Invalid amount. Must be a positive number.",
      }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    // Fetch real-time exchange rates from a public open API
    const response = await fetch(`https://open.er-api.com/v6/latest/${from}`);
    const data = await response.json();

    if (data.result !== "success") {
      throw new Error("Currency not supported or API error");
    }

    const rate = data.rates[to];
    if (!rate) {
      return new Response(
        JSON.stringify({
          success: false,
          error: `Target currency '${to}' is not supported or invalid.`,
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const result = amount * rate;

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          from,
          to,
          amount,
          result: parseFloat(result.toFixed(4)),
          rate,
          timestamp: data.time_last_update_unix
        }
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to fetch exchange rates. Please try again later.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
