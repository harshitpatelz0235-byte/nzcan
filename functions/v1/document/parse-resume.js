export async function onRequestPost(context) {
  const { request } = context;

  try {
    const body = await request.json();
    
    if (!body.file_url && !body.file_base64) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Missing required parameter: 'file_url' or 'file_base64' is required.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // SIMULATED RESPONSE
    return new Response(
      JSON.stringify({
        success: true,
        data: {
          personal_info: {
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "+1-555-0198",
            location: "New York, NY"
          },
          skills: ["JavaScript", "React", "Node.js", "API Design", "Cloudflare"],
          experience: [
            {
              company: "Tech Innovations Inc",
              title: "Senior Developer",
              start_date: "2021-03",
              end_date: "Present",
              description: "Developed highly scalable backend APIs."
            }
          ],
          education: [
            {
              institution: "University of Technology",
              degree: "B.S. Computer Engineering",
              year: "2020"
            }
          ]
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
