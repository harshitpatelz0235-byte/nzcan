const fs = require('fs');

const file = 'get-dictionary.js';
let content = fs.readFileSync(file, 'utf-8');

// The issue is:
//       clearButton: "
//       formatBoth: "...",
//       sortKeysToggle: "...",
//       identicalMessage: "...",Clear",
// Let's fix this for all occurrences.
// We can use a regex to match this exact broken pattern and replace it properly.

const regex = /clearButton: "\n      formatBoth: "(.*?)",\n      sortKeysToggle: "(.*?)",\n      identicalMessage: "(.*?)",(.*?)",/g;

content = content.replace(regex, (match, p1, p2, p3, p4) => {
  return `clearButton: "${p4}",\n      formatBoth: "${p1}",\n      sortKeysToggle: "${p2}",\n      identicalMessage: "${p3}",`;
});

fs.writeFileSync(file, content, 'utf-8');
console.log('Fixed broken strings in get-dictionary.js');
