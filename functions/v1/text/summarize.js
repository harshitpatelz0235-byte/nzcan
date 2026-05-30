export async function onRequestPost(context) {
  const { request } = context;

  try {
    const body = await request.json();
    const text = body.text;

    if (!text || typeof text !== "string") {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Missing required parameter: 'text' string is required in JSON body.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (text.length > 10000) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Text exceeds the 10,000 character limit.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // SIMULATED AI SUMMARY
    // In production, bind @cf/facebook/bart-large-cnn via Cloudflare Workers AI
    
    // We will extract the first and last sentence as a "summary" for demo purposes
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    
    let summary = "";
    if (sentences.length <= 2) {
      summary = text;
    } else {
      summary = sentences[0].trim() + " " + sentences[sentences.length - 1].trim();
    }

    const key_points = sentences.slice(0, Math.min(3, sentences.length)).map(s => s.trim());

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          summary: summary,
          key_points: key_points,
          word_count: {
            original: text.split(/\s+/).length,
            summary: summary.split(/\s+/).length
          },
          compression_ratio: `${Math.round((1 - (summary.length / text.length)) * 100)}%`,
          language: "en"
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
