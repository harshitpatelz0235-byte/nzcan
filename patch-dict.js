const fs = require('fs');

const file = 'get-dictionary.js';
let content = fs.readFileSync(file, 'utf-8');

const locales = ['en', 'hi', 'pt', 'es', 'de'];

locales.forEach(loc => {
  // Find the closing brace of the locale object
  const regex = new RegExp(`  ${loc}: \\{[\\s\\S]*?\\n  \\},`);
  const match = content.match(regex);
  if (match) {
    const orig = match[0];
    if (!orig.includes('jsonDiff: {')) {
      const diffObj = `
    jsonDiff: {
      breadcrumbs: { home: "Home", tools: "Tools", current: "JSON Diff" },
      originalJson: "Original JSON",
      originalPlaceholder: "Paste original JSON here...",
      modifiedJson: "Modified JSON",
      modifiedPlaceholder: "Paste modified JSON here...",
      diffResult: "Diff Output",
      waitingForInput: "Enter JSON in both panels to see differences...",
      errorMessageLeft: "Invalid JSON in original panel",
      errorMessageRight: "Invalid JSON in modified panel",
      sampleData: "Load Sample",
      clearButton: "Clear",
    },
  },`;
      const replaced = orig.replace(/  \},\n?$/, diffObj);
      content = content.replace(orig, replaced);
    }
  } else {
      // Check for the last one without a trailing comma (id)
      const regex2 = new RegExp(`  ${loc}: \\{[\\s\\S]*?\\n  \\}\\n\\};`);
      const match2 = content.match(regex2);
      if (match2) {
          const orig = match2[0];
          if (!orig.includes('jsonDiff: {')) {
             const diffObj = `
    jsonDiff: {
      breadcrumbs: { home: "Home", tools: "Tools", current: "JSON Diff" },
      originalJson: "Original JSON",
      originalPlaceholder: "Paste original JSON here...",
      modifiedJson: "Modified JSON",
      modifiedPlaceholder: "Paste modified JSON here...",
      diffResult: "Diff Output",
      waitingForInput: "Enter JSON in both panels to see differences...",
      errorMessageLeft: "Invalid JSON in original panel",
      errorMessageRight: "Invalid JSON in modified panel",
      sampleData: "Load Sample",
      clearButton: "Clear",
    }
  }
};`;
              const replaced = orig.replace(/  \}\n\};$/, diffObj);
              content = content.replace(orig, replaced);
          }
      }
  }
});

fs.writeFileSync(file, content, 'utf-8');
console.log('Dictionaries patched!');
