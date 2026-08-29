const fs = require('fs');
const path = require('path');

const seoDir = path.join(__dirname, 'src', 'data', 'seo');
const files = ['hi.js', 'pt.js', 'es.js', 'de.js', 'id.js'];

const diffSeo = `
  jsonDiff: {
    metaTitle: "JSON Diff Checker - Compare JSON Objects Online",
    metaDescription: "Free online JSON diff tool. Compare two JSON objects side-by-side, highlight differences, and easily spot added, removed, or changed values.",
    h1: "JSON Diff Checker",
    subtitle: "Compare two JSON payloads side-by-side to instantly highlight additions, removals, and changes.",
    features: {
      title: "Powerful JSON Diff Features",
      items: [
        "Side-by-Side Comparison: Instantly visualize the exact differences between two JSON payloads in a clean, developer-friendly interface.",
        "Deep JSON Parsing: Automatically parses, formats, and sorts JSON keys before comparing to prevent false positives from formatting differences.",
        "Line-Level Highlighting: Clearly highlights added lines in green and removed lines in red.",
        "Local Execution: All diffing computation happens securely in your browser. No data is sent to external servers."
      ]
    },
    howToUse: {
      title: "How to Compare JSON Files",
      steps: [
        "Paste your first (original) JSON payload into the left input pane.",
        "Paste your second (modified) JSON payload into the right input pane.",
        "The engine will automatically format both JSON strings and compute the diff dynamically.",
        "Scroll through the 'Diff Output' pane to see exact line-by-line differences highlighted in red and green."
      ]
    },
    example: {
      title: "JSON Diff Example",
      inputLabel: "Original JSON vs Modified JSON",
      input: 'Left: {"version": 1}\\nRight: {"version": 2, "newKey": true}',
      outputLabel: "Diff Output",
      output: '- "version": 1\\n+ "version": 2\\n+ "newKey": true'
    },
    commonErrors: {
      title: "Common Comparison Pitfalls",
      errors: [
        {
          name: "Formatting Differences",
          description: "Simple text diff tools often show the entire file as changed if one file is minified and the other is pretty-printed. Our tool parses the JSON first to eliminate this issue."
        }
      ]
    },
    technical: {
      title: "Technical Process of JSON Diffing",
      paragraphs: [
        "Comparing two JSON objects is a notoriously difficult task for standard text-comparison tools because JSON is fundamentally an unordered set of keys and values. A standard text diff might flag two identical JSON objects as completely different simply because their keys are listed in a different order.",
        "Our JSON Diff Checker solves this by implementing a structural comparison algorithm. Before any diffing occurs, both input panes are parsed into native JavaScript Abstract Syntax Trees (ASTs) using \`JSON.parse\`.",
        "Once parsed, the engine normalizes the data by pretty-printing both objects with a standardized 2-space indentation. Finally, a strict line-by-line diffing algorithm is applied to the normalized strings, guaranteeing that only true structural or value changes are highlighted."
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      questions: [
        {
          question: "Why does my JSON show as 'Invalid'?",
          answer: "The diff tool requires both the left and right inputs to be strictly valid JSON. If one panel contains a syntax error (like a trailing comma or single quotes), the diff cannot be computed. Use our JSON Repair tool first if you have malformed data."
        },
        {
          question: "Is my sensitive JSON data uploaded anywhere?",
          answer: "Absolutely not. The entire diffing process runs entirely client-side within your browser using JavaScript. Your data never leaves your computer."
        }
      ]
    }
  }`;

files.forEach(file => {
  const filePath = path.join(seoDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  if (!content.includes('jsonDiff: {')) {
    // Find the last "};\n" and replace it with "},\n" + diffSeo + "\n};\n"
    content = content.replace(/}\n};\n?$/, '},\n' + diffSeo + '\n};\n');
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Updated ' + file);
  }
});
