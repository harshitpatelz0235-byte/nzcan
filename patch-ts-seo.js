const fs = require('fs');
const path = require('path');

const seoDir = path.join(__dirname, 'src', 'data', 'seo');
const files = ['en.js', 'hi.js', 'pt.js', 'es.js', 'de.js', 'id.js'];

const updatedJsonToTsSeo = `jsonToTs: {
    metaTitle: "JSON to TypeScript - Generate TS Interfaces from JSON",
    metaDescription: "Free online JSON to TypeScript converter. Instantly generate strict TS interfaces and schema types from API JSON payloads with automatic type inference.",
    h1: "JSON to TypeScript Converter",
    subtitle: "Instantly generate strict TypeScript interfaces and types from your JSON API payloads.",
    features: {
      title: "Comprehensive JSON to TypeScript Features",
      items: [
        "Instant Interface Generation: Automatically generate strict TypeScript interfaces from any valid JSON object or array payload in milliseconds.",
        "Deep Nested Object Parsing: Intelligently recursively traverses nested objects and arrays, generating separate named interfaces for each distinct child object.",
        "Accurate Type Inference: Correctly maps JSON data types (strings, numbers, booleans, and nulls) to their native TypeScript equivalents (\`string\`, \`number\`, \`boolean\`, \`any | null\`).",
        "Array Type Resolution: Detects arrays of objects vs arrays of primitives, outputting clean syntaxes like \`User[]\` or \`number[]\`."
      ]
    },
    howToUse: {
      title: "Step-by-step guide to generating TypeScript Interfaces",
      steps: [
        "Acquire the JSON payload you wish to type (e.g., from an API endpoint response or a Swagger definition).",
        "Paste the raw JSON data into the editor pane on the left.",
        "Optionally, define a custom 'Root Interface Name' in the top bar (defaults to 'RootObject').",
        "The engine will instantly evaluate the JSON and render the exported TypeScript interfaces on the right.",
        "Click 'Copy' to copy the interfaces to your clipboard, or 'Download .ts' to save them as a local file."
      ]
    },
    example: {
      title: "Real-world Interface Generation Example",
      inputLabel: "Raw JSON API Response",
      input: '{\\n  "id": 1,\\n  "name": "Leanne Graham",\\n  "isActive": true,\\n  "address": {\\n    "street": "Kulas Light",\\n    "city": "Gwenborough"\\n  }\\n}',
      outputLabel: "Generated TypeScript Interfaces",
      output: 'export interface Address {\\n  street: string;\\n  city: string;\\n}\\n\\nexport interface RootObject {\\n  id: number;\\n  name: string;\\n  isActive: boolean;\\n  address: Address;\\n}'
    },
    commonErrors: {
      title: "Common Type Generation Pitfalls",
      errors: [
        {
          title: "Non-Object Root Types",
          description: "TypeScript interfaces can only describe object shapes. If you input a raw primitive (like just the number \`42\`), the engine will throw an error as it cannot be cast into an interface."
        },
        {
          title: "Inconsistent Array Elements",
          description: "If you provide an array containing multiple different data types (e.g., \`[1, \"string\", true]\`), TypeScript typically handles this as an array of unions or \`any[]\`. For best results, arrays should contain homogeneous elements."
        }
      ]
    },
    technical: {
      title: "Technical Explanation: Recursive Type Inference",
      paragraphs: [
        "TypeScript is an incredible superset of JavaScript that provides strict static typing. However, when consuming REST APIs, developers are often forced to manually type out massive, complex JSON responses, which is both tedious and prone to human error.",
        "Our JSON to TypeScript engine completely automates this process using a recursive Abstract Syntax Tree (AST) traversal algorithm. When you provide a JSON string, it first uses \`JSON.parse\` to convert it into a native JavaScript object.",
        "The engine then iterates through every key-value pair. If it encounters a primitive (string, number, boolean), it maps it directly. If it encounters a nested object, it recursively invokes the generator function, creating a brand new isolated interface with a capitalized name based on the key.",
        "Finally, it resolves all the generated interfaces and concatenates them in reverse order, ensuring that child interfaces are declared before the parent interfaces that depend on them. This guarantees the resulting code compiles instantly in any standard TypeScript environment without hoisting errors."
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      questions: [
        {
          question: "What happens if a JSON key is null?",
          answer: "Because JSON \`null\` values lack intrinsic type data, the engine cannot safely assume it is a string or number. Therefore, it strictly types it as \`any | null\` to alert the developer that manual type clarification is needed."
        },
        {
          question: "Can it handle empty arrays?",
          answer: "Yes, but since there is no data inside an empty array to infer from, the engine will safely default the type to \`any[]\`."
        },
        {
          question: "Is my JSON payload sent to a server?",
          answer: "No. The entire recursive parsing engine executes 100% locally within your browser using Client Components. Your sensitive API payloads never touch our servers."
        }
      ]
    }
  }`;

files.forEach(file => {
  const filePath = path.join(seoDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  if (content.includes('jsonToTs: {')) {
    // Replace the old jsonToTs block with the new one
    content = content.replace(/jsonToTs: \{[\s\S]*?faq: \{[\s\S]*?\}\n    \}\n  \},/, updatedJsonToTsSeo + ',');
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Updated SEO for ' + file);
  }
});
