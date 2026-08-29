export const ptSeo = {
  jsonValidator: {
    features: {
      title: "Recursos do Validador JSON",
      items: [
        "Validação em tempo real: Encontre erros de sintaxe instantaneamente.",
        "Formatação automática: Limpe cargas JSON desorganizadas.",
        "Privacidade em primeiro lugar: Tudo é executado no seu navegador."
      ]
    },
    howToUse: {
      title: "Como validar JSON",
      steps: [
        "Cole seus dados JSON brutos no editor.",
        "Clique no botão 'Validar JSON'.",
        "Clique em 'Formatar' para identar o código."
      ]
    },
    example: {
      title: "Exemplo",
      inputLabel: "Entrada bruta",
      input: '{"id":1}',
      outputLabel: "Saída",
      output: '{\n  "id": 1\n}'
    },
    commonErrors: {
      title: "Erros Comuns",
      errors: [
        { name: "Vírgulas Finais", description: "O JSON estrito não permite vírgulas finais." }
      ]
    },
    technical: {
      title: "Como funciona",
      paragraphs: ["Utilizamos mecanismos de análise JavaScript nativos."]
    },
    faq: {
      title: "FAQ",
      questions: [
        { question: "Meus dados são enviados a um servidor?", answer: "Não. A ferramenta é executada localmente." }
      ]
    }
  },
  jsonMinifier: {
    features: {
      title: "Minificador JSON",
      items: ["Compressão Máxima", "Métricas em tempo real"]
    },
    howToUse: {
      title: "Como usar",
      steps: ["Cole o JSON", "Clique em Minificar"]
    },
    example: {
      title: "Exemplo",
      inputLabel: "Grande",
      input: '{\n "a": 1\n}',
      outputLabel: "Minificado",
      output: '{"a":1}'
    },
    technical: {
      title: "Impacto",
      paragraphs: ["Reduz a largura de banda da rede."]
    },
    faq: {
      title: "FAQ",
      questions: [{ question: "Altera os dados?", answer: "Não, apenas espaços em branco." }]
    }
  },
  jsonRepair: {
    features: { title: "Reparo Inteligente", items: ["Autocorreção", "Formatação"] },
    howToUse: { title: "Como reparar", steps: ["Cole o JSON quebrado", "Clique em Reparar"] },
    example: { title: "Exemplo", inputLabel: "Quebrado", input: "{a:1}", outputLabel: "Consertado", output: '{"a":1}' },
    commonErrors: { title: "Erros", errors: [{ name: "Aspas simples", description: "Convertidas para duplas." }] },
    technical: { title: "Técnico", paragraphs: ["Analisador léxico personalizado."] },
    faq: { title: "FAQ", questions: [{ question: "É seguro?", answer: "Sim, tudo roda no cliente." }] }
  },
  jsonViewer: {
    features: { title: "Visor JSON", items: ["Árvore Interativa", "Destaque de sintaxe"] },
    howToUse: { title: "Como usar", steps: ["Cole o JSON", "Clique em Ver Árvore"] },
    example: { title: "Exemplo", inputLabel: "Bruto", input: "{}", outputLabel: "Árvore", output: "▼ {}" },
    commonErrors: { title: "Erros", errors: [{ name: "Sintaxe", description: "O JSON deve ser válido." }] },
    technical: { title: "Técnico", paragraphs: ["Renderiza nós DOM dinamicamente."] },
    faq: { title: "FAQ", questions: [{ question: "Privado?", answer: "Sim." }] }
  },
  jsonToCsv: {
    features: { title: "JSON para CSV", items: ["Achatamento", "Compatível com Excel"] },
    howToUse: { title: "Como converter", steps: ["Cole um array JSON", "Clique em Converter"] },
    example: { title: "Exemplo", inputLabel: "JSON", input: '[{"id":1}]', outputLabel: "CSV", output: "id\n1" },
    commonErrors: { title: "Erros", errors: [{ name: "Objeto não array", description: "Requer um array." }] },
    technical: { title: "Processo", paragraphs: ["Extrai chaves exclusivas para cabeçalhos."] },
    faq: { title: "FAQ", questions: [{ question: "Abre no Excel?", answer: "Sim." }] }
  },
  csvToJson: {
    features: { title: "CSV para JSON", items: ["Conversão Rápida", "Tipagem Automática"] },
    howToUse: { title: "Como usar", steps: ["Cole o CSV", "Clique Converter"] },
    example: { title: "Exemplo", inputLabel: "CSV", input: "id,name\n1,John", outputLabel: "JSON", output: '[\n  {\n    "id": 1,\n    "name": "John"\n  }\n]' },
    commonErrors: { title: "Erros", errors: [{ name: "Sem cabeçalho", description: "O CSV precisa de cabeçalho." }] },
    technical: { title: "Técnico", paragraphs: ["Analisa texto e descobre tipos."] },
    faq: { title: "FAQ", questions: [{ question: "É seguro?", answer: "Sim, no lado cliente." }] }
  },
  jsonToTs: {
    features: { title: "JSON para TypeScript", items: ["Geração instantânea", "Objetos aninhados"] },
    howToUse: { title: "Como usar", steps: ["Cole JSON", "Copie TS"] },
    example: { title: "Exemplo", inputLabel: "JSON", input: '{"id": 1}', outputLabel: "TS", output: "export interface RootObject { id: number; }" },
    commonErrors: { title: "Erros", errors: [{ name: "Raiz primitiva", description: "Precisa ser objeto." }] },
    technical: { title: "Técnico", paragraphs: ["Gera AST recursivamente."] },
    faq: { title: "FAQ", questions: [{ question: "Lida com nulos?", answer: "Sim, como any | null." }] }
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
