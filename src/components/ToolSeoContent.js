export default function ToolSeoContent({ content }) {
  if (!content) return null;

  return (
    <div className="w-full mt-12 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm text-gray-800 dark:text-gray-200">
      
      {/* 1. Features */}
      {content.features && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">✨</span>
            {content.features.title}
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.features.items.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 2. How to use */}
      {content.howToUse && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">📖</span>
            {content.howToUse.title}
          </h2>
          <div className="space-y-4">
            {content.howToUse.steps.map((step, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800">
                <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 flex items-center justify-center font-bold text-gray-500 dark:text-gray-400 shrink-0 shadow-sm">
                  {idx + 1}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-1">{step}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. Input/Output Example */}
      {content.example && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center text-orange-600 dark:text-orange-400">⚡</span>
            {content.example.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase text-xs tracking-wider">{content.example.inputLabel}</h3>
              <div className="p-4 rounded-xl bg-gray-900 text-gray-300 font-mono text-sm overflow-x-auto border border-gray-800 shadow-inner">
                <pre><code>{content.example.input}</code></pre>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase text-xs tracking-wider">{content.example.outputLabel}</h3>
              <div className="p-4 rounded-xl bg-gray-900 text-emerald-400 font-mono text-sm overflow-x-auto border border-gray-800 shadow-inner">
                <pre><code>{content.example.output}</code></pre>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. Common Errors */}
      {content.commonErrors && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center text-red-600 dark:text-red-400">⚠️</span>
            {content.commonErrors.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {content.commonErrors.errors.map((error, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30">
                <h4 className="font-bold text-red-800 dark:text-red-400 mb-1">{error.name}</h4>
                <p className="text-sm text-red-600 dark:text-red-300">{error.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. Technical Explanation */}
      {content.technical && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">⚙️</span>
            {content.technical.title}
          </h2>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            {content.technical.paragraphs.map((p, idx) => (
              <p key={idx} className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{p}</p>
            ))}
          </div>
        </section>
      )}

      {/* 6. FAQ */}
      {content.faq && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400">❓</span>
            {content.faq.title}
          </h2>
          <div className="space-y-6">
            {content.faq.questions.map((q, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">{q.question}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{q.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
