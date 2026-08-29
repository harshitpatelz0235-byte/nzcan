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
  }
};
