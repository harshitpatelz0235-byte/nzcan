export const deSeo = {
  jsonValidator: {
    features: {
      title: "JSON Validator Funktionen",
      items: [
        "Echtzeit-Validierung: Syntaxfehler sofort finden.",
        "Automatische Formatierung: Bereinigen Sie unübersichtliches JSON.",
        "Datenschutz: Alles läuft in Ihrem Browser ab."
      ]
    },
    howToUse: {
      title: "JSON validieren",
      steps: [
        "Fügen Sie Ihre Rohdaten in den Editor ein.",
        "Klicken Sie auf 'JSON validieren'.",
        "Klicken Sie auf 'Formatieren', um den Code einzurücken."
      ]
    },
    example: {
      title: "Beispiel",
      inputLabel: "Rohe Eingabe",
      input: '{"id":1}',
      outputLabel: "Ausgabe",
      output: '{\n  "id": 1\n}'
    },
    commonErrors: {
      title: "Häufige Fehler",
      errors: [
        { name: "Nachgestellte Kommas", description: "Striktes JSON erlaubt keine nachgestellten Kommas." }
      ]
    },
    technical: {
      title: "Wie es funktioniert",
      paragraphs: ["Wir verwenden native JavaScript-Parsing-Engines."]
    },
    faq: {
      title: "FAQ",
      questions: [
        { question: "Werden meine Daten an einen Server gesendet?", answer: "Nein. Das Tool läuft lokal." }
      ]
    }
  },
  jsonMinifier: {
    features: {
      title: "JSON Minifier",
      items: ["Maximale Komprimierung", "Echtzeit-Metriken"]
    },
    howToUse: {
      title: "Wie man es benutzt",
      steps: ["JSON einfügen", "Auf Minimieren klicken"]
    },
    example: {
      title: "Beispiel",
      inputLabel: "Groß",
      input: '{\n "a": 1\n}',
      outputLabel: "Minimiert",
      output: '{"a":1}'
    },
    technical: {
      title: "Auswirkungen",
      paragraphs: ["Reduziert die Netzwerkbandbreite."]
    },
    faq: {
      title: "FAQ",
      questions: [{ question: "Ändert es die Daten?", answer: "Nein, nur Leerzeichen." }]
    }
  },
  jsonRepair: {
    features: { title: "Intelligente Reparatur", items: ["Autokorrektur", "Formatierung"] },
    howToUse: { title: "Wie man repariert", steps: ["Kaputtes JSON einfügen", "Auf Reparieren klicken"] },
    example: { title: "Beispiel", inputLabel: "Kaputt", input: "{a:1}", outputLabel: "Repariert", output: '{"a":1}' },
    commonErrors: { title: "Fehler", errors: [{ name: "Einfache Anführungszeichen", description: "In doppelte konvertiert." }] },
    technical: { title: "Technik", paragraphs: ["Benutzerdefinierter lexikalischer Analysator."] },
    faq: { title: "FAQ", questions: [{ question: "Ist es sicher?", answer: "Ja, alles läuft auf dem Client." }] }
  },
  jsonViewer: {
    features: { title: "JSON Viewer", items: ["Interaktiver Baum", "Syntax-Hervorhebung"] },
    howToUse: { title: "Wie man es benutzt", steps: ["JSON einfügen", "Baum ansehen klicken"] },
    example: { title: "Beispiel", inputLabel: "Roh", input: "{}", outputLabel: "Baum", output: "▼ {}" },
    commonErrors: { title: "Fehler", errors: [{ name: "Syntax", description: "JSON muss gültig sein." }] },
    technical: { title: "Technik", paragraphs: ["Rendert DOM-Knoten dynamisch."] },
    faq: { title: "FAQ", questions: [{ question: "Privat?", answer: "Ja." }] }
  },
  jsonToCsv: {
    features: { title: "JSON zu CSV", items: ["Abflachen", "Excel-kompatibel"] },
    howToUse: { title: "Wie man konvertiert", steps: ["JSON-Array einfügen", "Auf Konvertieren klicken"] },
    example: { title: "Beispiel", inputLabel: "JSON", input: '[{"id":1}]', outputLabel: "CSV", output: "id\n1" },
    commonErrors: { title: "Fehler", errors: [{ name: "Kein Array-Objekt", description: "Erfordert ein Array." }] },
    technical: { title: "Prozess", paragraphs: ["Extrahiert eindeutige Schlüssel für Header."] },
    faq: { title: "FAQ", questions: [{ question: "Öffnet in Excel?", answer: "Ja." }] }
  },
  csvToJson: {
    features: { title: "CSV zu JSON", items: ["Schnelle Konvertierung", "Automatische Typisierung"] },
    howToUse: { title: "Wie man es benutzt", steps: ["CSV einfügen", "Klicken Sie auf Konvertieren"] },
    example: { title: "Beispiel", inputLabel: "CSV", input: "id,name\n1,John", outputLabel: "JSON", output: '[\n  {\n    "id": 1,\n    "name": "John"\n  }\n]' },
    commonErrors: { title: "Fehler", errors: [{ name: "Kein Header", description: "CSV benötigt einen Header." }] },
    technical: { title: "Technik", paragraphs: ["Analysiert Text und leitet Typen ab."] },
    faq: { title: "FAQ", questions: [{ question: "Ist es sicher?", answer: "Ja, alles läuft lokal." }] }
  },
  jsonToTs: {
    features: { title: "JSON zu TypeScript", items: ["Sofortige Generierung", "Verschachtelte Objekte"] },
    howToUse: { title: "Wie man es benutzt", steps: ["JSON einfügen", "TS kopieren"] },
    example: { title: "Beispiel", inputLabel: "JSON", input: '{"id": 1}', outputLabel: "TS", output: "export interface RootObject { id: number; }" },
    commonErrors: { title: "Fehler", errors: [{ name: "Primitiver Stamm", description: "Muss ein Objekt sein." }] },
    technical: { title: "Technik", paragraphs: ["Generiert AST rekursiv."] },
    faq: { title: "FAQ", questions: [{ question: "Behandelt es null?", answer: "Ja, als any | null." }] }
  },

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
      input: 'Left: {"version": 1}\nRight: {"version": 2, "newKey": true}',
      outputLabel: "Diff Output",
      output: '- "version": 1\n+ "version": 2\n+ "newKey": true'
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
        "Our JSON Diff Checker solves this by implementing a structural comparison algorithm. Before any diffing occurs, both input panes are parsed into native JavaScript Abstract Syntax Trees (ASTs) using `JSON.parse`.",
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
  }
};
