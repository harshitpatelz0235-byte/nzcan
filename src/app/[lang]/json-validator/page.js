import { getDictionary, getSeoDictionary } from "../../../../get-dictionary";
import JsonValidatorClient from "../../../components/JsonValidatorClient";
import ToolSeoContent from "../../../components/ToolSeoContent";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = (await getDictionary(lang)).jsonValidator;

  return {
    title: dict.title,
    description: dict.subtitle,
    alternates: {
      canonical: `https://errordocs.com/${lang}/json-validator`,
      languages: {
        'en': 'https://errordocs.com/en/json-validator',
        'hi': 'https://errordocs.com/hi/json-validator',
        'pt': 'https://errordocs.com/pt/json-validator',
        'es': 'https://errordocs.com/es/json-validator',
        'de': 'https://errordocs.com/de/json-validator',
        'id': 'https://errordocs.com/id/json-validator',
      }
    }
  };
}

export default async function JsonValidatorPage({ params }) {
  const { lang } = await params;
  const dict = (await getDictionary(lang)).jsonValidator;
  const seoContent = (await getSeoDictionary(lang)).jsonValidator;

  // Schema Markup Generation for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": dict.breadcrumbs.home,
            "item": `https://errordocs.com/${lang}`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": dict.breadcrumbs.tools,
            "item": `https://errordocs.com/${lang}/tools`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": dict.breadcrumbs.current,
            "item": `https://errordocs.com/${lang}/json-validator`
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "name": dict.title,
        "operatingSystem": "Web",
        "applicationCategory": "DeveloperApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "1520"
        }
      }
    ]
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 mt-6">
      {/* Inject SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumbs UI */}
      <nav className="text-sm font-medium text-gray-500 mb-6 flex gap-2">
        <a href={`/${lang}`} className="hover:text-indigo-600">{dict.breadcrumbs.home}</a>
        <span>›</span>
        <span className="hover:text-indigo-600 cursor-pointer">{dict.breadcrumbs.tools}</span>
        <span>›</span>
        <span className="text-gray-900 dark:text-gray-200">{dict.breadcrumbs.current}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          {dict.title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {dict.subtitle}
        </p>
      </div>

      {/* Client Component */}
      <JsonValidatorClient dict={dict} />

      {/* SEO Content Section */}
      <ToolSeoContent content={seoContent} />
    </div>
  );
}
