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

    if (text.length > 5000) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Text exceeds the 5000 character limit.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // SIMULATED AI RESPONSE
    // In a real production environment, you would bind Cloudflare Workers AI 
    // and use context.env.AI.run('@cf/huggingface/distilbert-sst-2-int8', { text })
    
    // We will do a basic keyword analysis to simulate the AI for now
    const lowerText = text.toLowerCase();
    const positiveWords = ["good", "great", "excellent", "amazing", "love", "happy", "best", "awesome"];
    const negativeWords = ["bad", "terrible", "awful", "hate", "sad", "worst", "horrible", "angry"];

    let posCount = 0;
    let negCount = 0;

    positiveWords.forEach(w => { if (lowerText.includes(w)) posCount++; });
    negativeWords.forEach(w => { if (lowerText.includes(w)) negCount++; });

    let sentiment = "neutral";
    let score = 0.5;
    let emotions = { joy: 0.1, surprise: 0.1, neutral: 0.8, sadness: 0.0, anger: 0.0 };

    if (posCount > negCount) {
      sentiment = "positive";
      score = 0.8 + (Math.random() * 0.19); // 0.8 to 0.99
      emotions = { joy: 0.85, surprise: 0.1, neutral: 0.05, sadness: 0.0, anger: 0.0 };
    } else if (negCount > posCount) {
      sentiment = "negative";
      score = 0.8 + (Math.random() * 0.19); // 0.8 to 0.99
      emotions = { joy: 0.0, surprise: 0.05, neutral: 0.05, sadness: 0.4, anger: 0.5 };
    }

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          sentiment,
          score: parseFloat(score.toFixed(2)),
          emotions,
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
