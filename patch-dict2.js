const fs = require('fs');

const file = 'get-dictionary.js';
let content = fs.readFileSync(file, 'utf-8');

const additions = {
  en: `      formatBoth: "Format Both",\n      sortKeysToggle: "Sort Keys (Semantic Diff)",\n      identicalMessage: "JSON objects are identical!",`,
  hi: `      formatBoth: "दोनों फ़ॉर्मेट करें",\n      sortKeysToggle: "कुंजियाँ क्रमबद्ध करें (सिमेंटिक अंतर)",\n      identicalMessage: "JSON ऑब्जेक्ट समान हैं!",`,
  pt: `      formatBoth: "Formatar Ambos",\n      sortKeysToggle: "Ordenar Chaves (Diferença Semântica)",\n      identicalMessage: "Objetos JSON são idênticos!",`,
  es: `      formatBoth: "Formatear Ambos",\n      sortKeysToggle: "Ordenar Claves (Diferencia Semántica)",\n      identicalMessage: "¡Los objetos JSON son idénticos!",`,
  de: `      formatBoth: "Beide formatieren",\n      sortKeysToggle: "Schlüssel sortieren (Semantisches Diff)",\n      identicalMessage: "JSON-Objekte sind identisch!",`,
  id: `      formatBoth: "Format Keduanya",\n      sortKeysToggle: "Urutkan Kunci (Beda Semantik)",\n      identicalMessage: "Objek JSON identik!",`,
};

Object.keys(additions).forEach(loc => {
  const regex = new RegExp(`(  ${loc}: \\{[\\s\\S]*?jsonDiff: \\{[\\s\\S]*?)(      clearButton: ".*?|      clearButton: ".*?",)(.*?)`);
  const match = content.match(regex);
  if (match && !match[0].includes('formatBoth:')) {
    const orig = match[0];
    const replacement = match[1] + match[2] + '\n' + additions[loc] + match[3];
    content = content.replace(orig, replacement);
  }
});

fs.writeFileSync(file, content, 'utf-8');
console.log('Dictionaries updated with UI strings!');
