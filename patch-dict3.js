const fs = require('fs');

const file = 'get-dictionary.js';
let content = fs.readFileSync(file, 'utf-8');

const additions = {
  en: `      title: "JSON Diff Checker",\n      subtitle: "Compare JSON side-by-side to find additions, removals, and changes.",`,
  hi: `      title: "JSON अंतर चेकर",\n      subtitle: "परिवर्धन, हटाने और परिवर्तन खोजने के लिए JSON की तुलना करें।",`,
  pt: `      title: "Verificador de Diferença JSON",\n      subtitle: "Compare JSON lado a lado para encontrar adições, remoções e alterações.",`,
  es: `      title: "Comprobador de Diferencias JSON",\n      subtitle: "Compare JSON lado a lado para encontrar adiciones, eliminaciones y cambios.",`,
  de: `      title: "JSON Diff Checker",\n      subtitle: "Vergleichen Sie JSON nebeneinander, um Hinzufügungen, Entfernungen und Änderungen zu finden.",`,
  id: `      title: "Pemeriksa Perbedaan JSON",\n      subtitle: "Bandingkan JSON berdampingan untuk menemukan penambahan, penghapusan, dan perubahan.",`,
};

Object.keys(additions).forEach(loc => {
  const regex = new RegExp(`(  ${loc}: \\{[\\s\\S]*?jsonDiff: \\{)`);
  const match = content.match(regex);
  if (match && !content.includes(additions[loc].split('\\n')[0].trim())) {
    const orig = match[1];
    const replacement = orig + '\n' + additions[loc];
    content = content.replace(orig, replacement);
  }
});

fs.writeFileSync(file, content, 'utf-8');
console.log('Dictionaries updated with jsonDiff title/subtitle!');
