const languages = ['en', 'hi', 'pt', 'es', 'de', 'id'];
const baseUrl = "https://errordocs.com";

// This function automatically generates a Sitemap Index in Next.js
// /sitemap.xml -> Sitemap Index pointing to /sitemap/en.xml, /sitemap/hi.xml, etc.
export async function generateSitemaps() {
  return languages.map((lang) => ({ id: lang }));
}

// This generates the individual sitemap per language
export default function sitemap({ id }) {
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

  const sitemapEntries = routes.map((route) => {
    const alternates = {};
    
    // Add hreflang links for all alternate languages
    languages.forEach((altLang) => {
      if (altLang !== id) {
        alternates[altLang] = `${baseUrl}/${altLang}${route}`;
      }
    });
    
    // Always include x-default pointing to English
    alternates['x-default'] = `${baseUrl}/en${route}`;

    return {
      url: `${baseUrl}/${id}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'daily' : 'weekly',
      priority: route === '' ? 1 : 0.8,
      alternates: {
        languages: alternates
      }
    };
  });

  return sitemapEntries;
}
