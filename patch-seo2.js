const fs = require('fs');

const file = 'src/data/seo/en.js';
let content = fs.readFileSync(file, 'utf-8');

const updatedJsonDiffSeo = `jsonDiff: {
    metaTitle: "Semantic JSON Diff Checker - Compare JSON Objects Online",
    metaDescription: "Free online semantic JSON diff tool. Ignore key order, format instantly, and compare JSON APIs side-by-side with line-level highlights.",
    h1: "Semantic JSON Diff Checker",
    subtitle: "Compare two JSON payloads side-by-side. Sort keys semantically, format instantly, and highlight additions, removals, and changes.",
    features: {
      title: "Advanced Semantic JSON Diff Features",
      items: [
        "Semantic Comparison (Ignore Key Order): Automatically sort keys alphabetically before diffing to prevent false positives from rearranged API properties.",
        "Side-by-Side Unified View: Instantly visualize the exact structural differences between two JSON payloads in a clean, developer-friendly interface.",
        "Auto-Formatting: Format and prettify both JSON inputs with a single click before comparing.",
        "Local Execution: All semantic parsing and diffing computation happens securely in your browser. No proprietary data is sent to external servers."
      ]
    },
    howToUse: {
      title: "How to Compare JSON Objects",
      steps: [
        "Paste your first (original) JSON payload into the left input pane.",
        "Paste your second (modified) JSON payload into the right input pane.",
        "Toggle 'Sort Keys (Semantic Diff)' if you want the engine to ignore the order of object properties.",
        "Click 'Format Both' to prettify your inputs, and scroll through the 'Diff Output' pane to see exact line-by-line differences."
      ]
    },
    example: {
      title: "Semantic JSON Diff Example",
      inputLabel: "Original vs Modified",
      input: "Left: {\\"version\\": 1, \\"a\\": 2}\\nRight: {\\"a\\": 2, \\"version\\": 2, \\"newKey\\": true}",
      outputLabel: "Diff Output (With Sort Keys)",
      output: '  "a": 2\\n+ "newKey": true\\n- "version": 1\\n+ "version": 2'
    },
    commonErrors: {
      title: "Common Comparison Pitfalls",
      errors: [
        {
          title: "False Positives from Unordered Keys",
          description: "A standard text diff might flag two identical JSON objects as completely different simply because their keys are listed in a different order. Enabling Semantic Diff solves this."
        },
        {
          title: "Whitespace Noise",
          description: "Comparing minified JSON against pretty-printed JSON will highlight every line. Our auto-formatting normalizes whitespace before comparing."
        }
      ]
    },
    technical: {
      title: "Technical Process of Semantic JSON Diffing",
      paragraphs: [
        "Comparing two JSON objects is notoriously difficult for standard text-comparison tools because JSON is fundamentally an unordered set of keys and values. This causes standard tools to fail when an API returns the same data but in a different property order.",
        "Our JSON Diff Checker solves this by implementing a structural semantic comparison algorithm. When 'Sort Keys' is enabled, the engine recursively traverses the Abstract Syntax Trees (ASTs) of both inputs and sorts all object keys alphabetically.",
        "Once parsed and sorted, the engine normalizes the data by pretty-printing both objects with a standardized 2-space indentation. Finally, a strict line-by-line diffing algorithm is applied to the normalized strings, guaranteeing that only true structural or value changes are highlighted."
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      questions: [
        {
          q: "Does this tool ignore the order of keys in JSON objects?",
          a: "Yes! By enabling the 'Sort Keys (Semantic Diff)' option, the tool will recursively sort the properties of all objects in your JSON. This ensures that {\\"a\\": 1, \\"b\\": 2} and {\\"b\\": 2, \\"a\\": 1} are evaluated as identical."
        },
        {
          q: "Is my JSON data sent to a server?",
          a: "No. All parsing, formatting, sorting, and diffing occurs entirely client-side within your browser. Your sensitive API payloads are completely secure and never leave your machine."
        }
      ]
    }
  }`;

content = content.replace(/jsonDiff: \{[\s\S]*?faq: \{[\s\S]*?\}\n    \}\n  \}/, updatedJsonDiffSeo + '\n  }');
fs.writeFileSync(file, content, 'utf-8');
console.log('en.js SEO updated!');
