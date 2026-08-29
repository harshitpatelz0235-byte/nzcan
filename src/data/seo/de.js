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
      input: "Left: {\"version\": 1, \"a\": 2}\nRight: {\"a\": 2, \"version\": 2, \"newKey\": true}",
      outputLabel: "Diff Output (With Sort Keys)",
      output: '  "a": 2\n+ "newKey": true\n- "version": 1\n+ "version": 2'
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
          question: "Does this tool ignore the order of keys in JSON objects?",
          answer: "Yes! By enabling the 'Sort Keys (Semantic Diff)' option, the tool will recursively sort the properties of all objects in your JSON. This ensures that {\"a\": 1, \"b\": 2} and {\"b\": 2, \"a\": 1} are evaluated as identical."
        },
        {
          question: "Is my JSON data sent to a server?",
          answer: "No. All parsing, formatting, sorting, and diffing occurs entirely client-side within your browser. Your sensitive API payloads are completely secure and never leave your machine."
        }
      ]
    }
  }
};
