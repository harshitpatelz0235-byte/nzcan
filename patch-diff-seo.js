const fs = require('fs');
const path = require('path');

const seoDir = path.join(__dirname, 'src', 'data', 'seo');
const files = ['en.js', 'hi.js', 'pt.js', 'es.js', 'de.js', 'id.js'];

const updatedJsonDiffSeo = `jsonDiff: {
    metaTitle: "JSON Diff - The semantic JSON compare tool",
    metaDescription: "Free online JSON diff tool. Validate, format, and compare two JSON documents. See the differences between the objects instead of just the new lines and mixed up properties.",
    h1: "JSON Diff Checker",
    subtitle: "The semantic JSON compare tool. Compare two JSON payloads side-by-side to instantly highlight additions, removals, and structural changes.",
    features: {
      title: "Powerful Semantic JSON Diff Features",
      items: [
        "Semantic Comparison: See the differences between the objects instead of just the new lines and mixed up properties.",
        "Side-by-Side Comparison: Instantly visualize the exact differences between two JSON payloads in a clean, developer-friendly interface.",
        "Deep JSON Parsing: Automatically parses, formats, and semantically sorts JSON keys before comparing to prevent false positives from formatting differences.",
        "Line-Level Highlighting: Clearly highlights added lines in green and removed lines in red.",
        "Local Execution: All diffing computation happens securely in your browser. No data is sent to external servers."
      ]
    },
    howToUse: {
      title: "How to Semantically Compare JSON Files",
      steps: [
        "Paste your first (original) JSON payload into the left input pane.",
        "Paste your second (modified) JSON payload into the right input pane.",
        "Click the 'Sort Keys (Semantic Diff)' toggle if you want to automatically alphabetize the keys of both objects. This allows you to find true structural differences even if the properties are mixed up in order.",
        "The engine will automatically format both JSON strings and compute the semantic diff dynamically.",
        "Scroll through the 'Diff Output' pane to see exact line-by-line differences highlighted in red and green."
      ]
    },
    example: {
      title: "Semantic JSON Diff Example",
      inputLabel: "Original JSON vs Modified JSON (Mixed Order)",
      input: 'Left: {"version": 1, "status": "ok"}\\nRight: {"status": "error", "version": 2, "newKey": true}',
      outputLabel: "Semantic Diff Output",
      output: '- "status": "ok"\\n+ "status": "error"\\n- "version": 1\\n+ "version": 2\\n+ "newKey": true'
    },
    commonErrors: {
      title: "Common Comparison Pitfalls",
      errors: [
        {
          name: "Formatting Differences",
          description: "Simple text diff tools often show the entire file as changed if one file is minified and the other is pretty-printed. Our semantic tool parses the JSON first to eliminate this issue."
        },
        {
          name: "Mixed up Properties",
          description: "If an object has the same keys but in a different order, standard text diffs flag them as different. Using our Semantic Sort feature normalizes the order so you only see actual value changes."
        }
      ]
    },
    technical: {
      title: "Technical Process of Semantic JSON Diffing",
      paragraphs: [
        "Comparing two JSON objects is a notoriously difficult task for standard text-comparison tools because JSON is fundamentally an unordered set of keys and values. A standard text diff might flag two identical JSON objects as completely different simply because their keys are listed in a different order.",
        "Our JSON Diff Checker solves this by implementing a structural, semantic comparison algorithm. Before any diffing occurs, both input panes are parsed into native JavaScript Abstract Syntax Trees (ASTs) using \`JSON.parse\`.",
        "When you activate the Semantic Diff toggle, the engine recursively traverses both objects, alphabetically sorting every key at every depth level. Once parsed and sorted, the engine normalizes the data by pretty-printing both objects with a standardized 2-space indentation. Finally, a strict line-by-line diffing algorithm is applied to the normalized strings, guaranteeing that only true structural or value changes are highlighted."
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
          question: "What is semantic comparison?",
          answer: "Semantic comparison focuses on the actual data meaning rather than the text layout. For JSON, this means understanding that \`{\\\"a\\\":1, \\\"b\\\":2}\` is identical to \`{\\\"b\\\":2, \\\"a\\\":1}\`. Our Semantic Sort toggle allows you to compare objects this way."
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
  
  if (content.includes('jsonDiff: {')) {
    // Replace the old jsonDiff block with the new one
    content = content.replace(/jsonDiff: \{[\s\S]*?faq: \{[\s\S]*?\}\n    \}\n  \}/, updatedJsonDiffSeo);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Updated Semantic SEO for ' + file);
  }
});
