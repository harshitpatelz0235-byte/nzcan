export async function GET() {
  const baseUrl = "https://errordocs.com";
  const languages = ['en', 'hi', 'pt', 'es', 'de', 'id'];
  const routes = [
    '',
    '/json-validator',
    '/json-minifier',
    '/json-viewer',
    '/json-repair',
    '/json-to-csv',
    '/csv-to-json',
    '/json-to-ts'
  ];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

  routes.forEach((route) => {
    xml += '  <url>\n';
    xml += '    <loc>' + baseUrl + '/en' + route + '</loc>\n';
    xml += '    <lastmod>' + new Date().toISOString() + '</lastmod>\n';
    xml += '    <changefreq>' + (route === '' ? 'daily' : 'weekly') + '</changefreq>\n';
    xml += '    <priority>' + (route === '' ? '1.0' : '0.8') + '</priority>\n';

    languages.forEach((altLang) => {
      if (altLang !== 'en') {
        xml += '    <xhtml:link rel="alternate" hreflang="' + altLang + '" href="' + baseUrl + '/' + altLang + route + '" />\n';
      }
    });
    
    xml += '    <xhtml:link rel="alternate" hreflang="x-default" href="' + baseUrl + '/en' + route + '" />\n';
    xml += '  </url>\n';
  });

  xml += '</urlset>';

  return new Response(xml, {
    headers: {
      'Content-Type': 'text/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate'
    },
  });
}