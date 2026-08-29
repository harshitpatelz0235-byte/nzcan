export async function GET() {
  const languages = ['en', 'hi', 'pt', 'es', 'de', 'id'];
  const baseUrl = "https://errordocs.com";

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  languages.forEach((lang) => {
    xml += '  <sitemap>\n';
    xml += `    <loc>${baseUrl}/sitemap-${lang}.xml</loc>\n`;
    xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
    xml += '  </sitemap>\n';
  });

  xml += '</sitemapindex>';

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate'
    },
  });
}
