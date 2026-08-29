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
  }
};
