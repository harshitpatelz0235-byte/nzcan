export default function sitemap() {
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

  const sitemapEntries = [];

  // Generate an entry for every route in the primary language (en), and specify alternate hreflang links
  routes.forEach((route) => {
    
    // For every language, generate its own main entry, but link all the alternates
    languages.forEach((lang) => {
      const alternates = {};
      
      // Populate the alternates block for this URL
      languages.forEach((altLang) => {
        if (altLang !== lang) {
          alternates[altLang] = `${baseUrl}/${altLang}${route}`;
        }
      });
      
      // Also add 'x-default' mapping to English
      alternates['x-default'] = `${baseUrl}/en${route}`;

      sitemapEntries.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: alternates
        }
      });
    });
  });

  return sitemapEntries;
}
