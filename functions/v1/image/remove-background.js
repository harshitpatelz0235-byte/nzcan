export async function onRequestPost(context) {
  const { request } = context;

  try {
    const body = await request.json();
    
    if (!body.image_url && !body.image_base64) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Missing required parameter: 'image_url' or 'image_base64' is required.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // SIMULATED RESPONSE
    // In production, this would route to a GPU server for segmentation
    const id = Math.random().toString(36).substring(7);
    const format = body.format || "png";

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          result_url: `https://errordocs.com/demo/bg-removed-${id}.${format}`,
          format: format,
          original_size: { width: 1024, height: 1024 },
          credits_remaining: 99
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
