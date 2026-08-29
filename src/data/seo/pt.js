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
