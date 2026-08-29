import { getDictionary, getSeoDictionary } from "../../../../get-dictionary";
import JsonDiffClient from "../../../components/JsonDiffClient";
import ToolSeoContent from "../../../components/ToolSeoContent";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const seo = (await getSeoDictionary(lang)).jsonDiff;
  
  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    alternates: {
      canonical: `https://errordocs.com/${lang}/json-diff`,
      languages: {
        en: 'https://errordocs.com/en/json-diff',
        hi: 'https://errordocs.com/hi/json-diff',
        pt: 'https://errordocs.com/pt/json-diff',
        es: 'https://errordocs.com/es/json-diff',
        de: 'https://errordocs.com/de/json-diff',
        id: 'https://errordocs.com/id/json-diff',
        'x-default': 'https://errordocs.com/en/json-diff'
      }
    }
  };
}

export default async function JsonDiffPage({ params }) {
  const { lang } = await params;
  const dict = (await getDictionary(lang)).jsonDiff;
  const seo = (await getSeoDictionary(lang)).jsonDiff;
  
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 pt-24">
      {/* Breadcrumbs */}
      <nav className="flex text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a href={`/${lang}`} className="hover:text-gray-900 dark:hover:text-gray-300">
              {dict.breadcrumbs.home}
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
              <span className="ml-1 md:ml-2">{dict.breadcrumbs.tools}</span>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
              <span className="ml-1 text-gray-700 font-medium md:ml-2 dark:text-gray-200">
                {dict.breadcrumbs.current}
              </span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
          {seo.h1}
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {seo.subtitle}
        </p>
      </div>

      {/* Main Tool Area */}
      <div className="mb-16">
        <JsonDiffClient dict={dict} />
      </div>

      {/* SEO Content Section */}
      <ToolSeoContent seo={seo} />
    </div>
  );
}
