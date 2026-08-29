import "../globals.css";
import Link from 'next/link';
import { getDictionary } from "../../../get-dictionary";

export async function generateMetadata({ params }) {
  // We can fetch dictionary here to set localized title format
  const { lang } = await params;
  return {
    title: {
      template: '%s | ErrorDocs',
      default: 'ErrorDocs - Developer Tools',
    },
    description: "Free developer tools to validate, format, and debug your code.",
  }
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} className="dark" suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 min-h-screen flex flex-col font-sans">
        
        {/* Navbar */}
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href={`/${lang}`} className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              ErrorDocs
            </Link>
            <nav className="flex gap-6">
              <Link href={`/${lang}/json-validator`} className="text-sm font-medium hover:text-indigo-600 transition-colors">
                {dict.jsonValidator.title}
              </Link>
              <div className="flex gap-2 text-sm text-gray-500">
                <Link href="/en">EN</Link>
                <Link href="/hi">HI</Link>
                <Link href="/pt">PT</Link>
                <Link href="/es">ES</Link>
                <Link href="/de">DE</Link>
                <Link href="/id">ID</Link>
              </div>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-800 py-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} ErrorDocs. {dict.layout.allRightsReserved}</p>
        </footer>

      </body>
    </html>
  );
}
