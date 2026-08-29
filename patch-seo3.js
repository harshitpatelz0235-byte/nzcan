const fs = require('fs');
const path = require('path');

const seoDir = path.join(__dirname, 'src', 'data', 'seo');
const enContent = fs.readFileSync(path.join(seoDir, 'en.js'), 'utf-8');

// Extract the new jsonDiff block from en.js
const match = enContent.match(/jsonDiff: \{[\s\S]*?faq: \{[\s\S]*?\}\n    \}\n  \}/);
if (!match) {
  console.error('Could not find jsonDiff in en.js');
  process.exit(1);
}
const newJsonDiffSeo = match[0];

const files = ['hi.js', 'pt.js', 'es.js', 'de.js', 'id.js'];

files.forEach(file => {
  const filePath = path.join(seoDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace the old jsonDiff block with the new one
  if (content.includes('jsonDiff: {')) {
    content = content.replace(/jsonDiff: \{[\s\S]*?faq: \{[\s\S]*?\}\n    \}\n  \}/, newJsonDiffSeo);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Updated ' + file);
  }
});

console.log('All SEO files updated with the new semantic content!');
