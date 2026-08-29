export const esSeo = {
  jsonValidator: {
    features: {
      title: "Características Completas del Validador JSON",
      items: [
        "Validación de sintaxis en tiempo real: Detecta instantáneamente errores de sintaxis, corchetes faltantes, comas finales y problemas estructurales en el momento en que pegas tu código.",
        "Formateo y embellecimiento automático: Limpia cargas JSON desordenadas, de una sola línea o mal sangradas en estructuras hermosas y altamente legibles con espacios y saltos de línea adecuados.",
        "Arquitectura de privacidad primero: Todos los algoritmos de análisis y validación se ejecutan de forma segura dentro del entorno aislado de su navegador. Absolutamente ningún dato se transmite a través de la red o se guarda en nuestros servidores, lo que garantiza el cumplimiento de estrictos estándares de seguridad de datos.",
        "Interfaz optimizada para desarrolladores: Experimente un editor de alto rendimiento, sin distracciones, que no se bloquea al manejar respuestas API de varios megabytes."
      ]
    },
    howToUse: {
      title: "Guía paso a paso para validar JSON",
      steps: [
        "Copie sus datos JSON sin formato de su respuesta API, volcado de base de datos o archivo de configuración.",
        "Pegue los datos sin formato en el panel del editor masivo en el lado izquierdo de la pantalla.",
        "Haga clic en el botón prominente 'Validar JSON'. Nuestro motor analizará instantáneamente los datos y marcará cualquier anomalía de sintaxis.",
        "Si los datos son válidos, haga clic en 'Formatear' para aplicar instantáneamente la sangría estándar de 2 espacios y los saltos de línea, transformándolos en una estructura altamente legible.",
        "Use el botón de copiar para colocar instantáneamente los datos limpios de nuevo en su portapapeles."
      ]
    },
    example: {
      title: "Ejemplo de entrada y salida del mundo real",
      inputLabel: "Respuesta API sin formato",
      input: '{"status":"success","data":{"users":[{"id":1,"name":"Alice","role":"admin"}]}}',
      outputLabel: "Salida formateada y validada",
      output: '{\n  "status": "success",\n  "data": {\n    "users": [\n      {\n        "id": 1,\n        "name": "Alice",\n        "role": "admin"\n      }\n    ]\n  }\n}'
    },
    commonErrors: {
      title: "Errores comunes de JSON explicados",
      errors: [
        { name: "Comas finales (SyntaxError: token inesperado ] en JSON)", description: "A diferencia de los objetos estándar de JavaScript, las especificaciones estrictas de JSON no permiten comas finales al final de objetos o matrices. Ejemplo: {'a':1,} no es válido." },
        { name: "Claves sin comillas", description: "Cada clave en un objeto JSON debe estar envuelta explícitamente en comillas dobles. {name: \"Alice\"} fallará; debe ser {\"name\": \"Alice\"}." },
        { name: "Comillas simples", description: "Los valores de cadena y las claves JSON deben usar exclusivamente comillas dobles (\"). El uso de comillas simples (') desencadenará inmediatamente un error de análisis." }
      ]
    },
    technical: {
      title: "Explicación técnica: cómo funciona la validación JSON",
      paragraphs: [
        "JSON (JavaScript Object Notation) se adopta universalmente como el formato principal de intercambio de datos para las API REST modernas debido a su naturaleza liviana. Sin embargo, opera bajo un conjunto de reglas sintácticas notoriamente estrictas definidas por la especificación RFC 8259.",
        "Nuestro validador JSON en línea aprovecha los motores de análisis nativos de JavaScript V8 directamente dentro de su navegador. Cuando hace clic en validar, la herramienta pasa su cadena sin formato a través de un estricto método `JSON.parse()`."
      ]
    },
    faq: {
      title: "Preguntas frecuentes",
      questions: [
        { question: "¿Se envían mis datos JSON a un servidor para su validación?", answer: "Absolutamente no. Esta herramienta está construida con una arquitectura de privacidad primero. Todo el formateo, análisis y validación ocurren localmente dentro de la memoria de su navegador." },
        { question: "¿Por qué mi JSON dice 'Token inesperado'?", answer: "Este es el error más común arrojado por el analizador JSON nativo de JavaScript. Casi siempre significa que tiene un error tipográfico en su estructura: una comilla doble faltante o una coma final." }
      ]
    }
  },
  jsonMinifier: {
    features: {
      title: "Potentes funciones de Minificador JSON",
      items: [
        "Compresión máxima de datos: Elimina automáticamente todos los espacios innecesarios, tabulaciones y caracteres de nueva línea de su carga útil.",
        "Métricas de ahorro de bytes en tiempo real: Calcula y muestra instantáneamente el porcentaje exacto de tamaño de archivo que ahorró.",
        "100% de integridad de datos: El algoritmo de minificación garantiza que la estructura de sus datos, claves y valores permanezcan completamente intactos."
      ]
    },
    howToUse: {
      title: "Cómo comprimir y minificar JSON",
      steps: [
        "Pegue su carga JSON grande y legible por humanos en el cuadro 'Entrada'.",
        "Haga clic en el botón principal 'Minificar JSON'.",
        "El motor eliminará instantáneamente los espacios en blanco y renderizará la carga útil minificada.",
        "Copie o descargue el resultado."
      ]
    },
    example: {
      title: "Antes y después de la minificación",
      inputLabel: "JSON formateado e inflado",
      input: '{\n  "metadata": {\n    "version": "1.0"\n  }\n}',
      outputLabel: "JSON minificado altamente comprimido",
      output: '{"metadata":{"version":"1.0"}}'
    },
    technical: {
      title: "El impacto técnico de la minificación JSON",
      paragraphs: [
        "En la arquitectura web moderna, el ancho de banda y la latencia son los cuellos de botella principales. Cuando los desarrolladores formatean JSON para la legibilidad, inyectan miles de caracteres de espacio en blanco.",
        "Un minificador JSON resuelve esto analizando el objeto JSON válido en la memoria y luego transformándolo en cadena sin ningún argumento de espaciado. Esto da como resultado la representación más compacta."
      ]
    },
    faq: {
      title: "Preguntas frecuentes",
      questions: [
        { question: "¿Minificar JSON cambia mis datos?", answer: "No. La minificación es una operación estrictamente segura. Solo elimina los espacios en blanco estructurales." }
      ]
    }
  },
  jsonRepair: {
    features: {
      title: "Funciones inteligentes de reparación JSON",
      items: [
        "Autocorrección inteligente: Identifica y repara automáticamente comillas faltantes.",
        "Resolución de comas finales: Elimina de forma segura las comas finales ilegales.",
        "Formateo instantáneo: Las cargas útiles reparadas se imprimen automáticamente para su legibilidad inmediata."
      ]
    },
    howToUse: {
      title: "Cómo arreglar JSON malformado",
      steps: [
        "Pegue su cadena JSON rota o malformada en el editor.",
        "Haga clic en el botón 'Reparar JSON' para activar el analizador léxico.",
        "El motor escaneará el árbol de sintaxis e intentará resolver errores humanos comunes."
      ]
    },
    example: {
      title: "Recuperación JSON del mundo real",
      inputLabel: "JSON roto (comillas simples, coma final)",
      input: "{ name: 'John Doe', age: 30, }",
      outputLabel: "JSON válido y reparado",
      output: '{\n  "name": "John Doe",\n  "age": 30\n}'
    },
    commonErrors: {
      title: "Errores comunes que este motor corrige",
      errors: [
        { name: "Claves de propiedad sin comillas", description: "En JavaScript, {name: 'John'} es válido. En JSON, es un error fatal. Nuestro motor envuelve automáticamente en comillas dobles." }
      ]
    },
    technical: {
      title: "Análisis léxico avanzado",
      paragraphs: [
        "Los analizadores JSON estándar fallan rápidamente y arrojan un error fatal en cuanto encuentran un carácter inesperado.",
        "Nuestra herramienta no utiliza un analizador estándar. En cambio, utiliza un analizador léxico personalizado para construir un árbol de sintaxis abstracta (AST) mientras emplea heurísticas de recuperación de errores."
      ]
    },
    faq: {
      title: "Preguntas frecuentes",
      questions: [
        { question: "¿Puede la herramienta reparar datos muy dañados?", answer: "La herramienta es increíblemente inteligente para arreglar errores sintácticos (comillas, comas, corchetes). Sin embargo, si faltan datos reales, no puede adivinarlos." }
      ]
    }
  },
  jsonViewer: {
    features: {
      title: "Características avanzadas del Visor JSON",
      items: [
        "Árbol plegable interactivo: Navegue fácilmente por cargas masivas expandiendo y colapsando objetos.",
        "Resaltado de sintaxis: Diferencie instantáneamente entre cadenas, números, booleanos y valores nulos.",
        "Privacidad de datos: Todo el árbol DOM se renderiza localmente en su dispositivo."
      ]
    },
    howToUse: {
      title: "Cómo visualizar árboles JSON",
      steps: [
        "Pegue sus datos JSON masivos en el panel 'Entrada JSON'.",
        "Haga clic en el botón 'Ver Árbol'.",
        "Haga clic en las flechas junto a cualquier objeto para colapsar o expandir su contenido."
      ]
    },
    example: {
      title: "Ejemplo de visualización",
      inputLabel: "Datos en bruto",
      input: '{"user":{"id":1}}',
      outputLabel: "Árbol renderizado",
      output: '▼ {\n  ▼ "user": {\n      "id": 1\n    }\n  }'
    },
    commonErrors: {
      title: "Problemas comunes del visor",
      errors: [
        { name: "Error de sintaxis", description: "El visor de árbol requiere JSON 100% válido para construir los nodos DOM. Si nada se renderiza, su JSON probablemente contenga un error de sintaxis." }
      ]
    },
    technical: {
      title: "Ejecución técnica",
      paragraphs: [
        "Un Visor JSON resuelve la sobrecarga cognitiva analizando la cadena de texto plana en un objeto nativo de JavaScript. Luego utiliza un algoritmo recursivo para recorrer cada nodo de ese objeto."
      ]
    },
    faq: {
      title: "Preguntas frecuentes",
      questions: [
        { question: "¿Por qué no se renderiza mi JSON?", answer: "El visor JSON requiere JSON estrictamente válido. Si tiene comas finales o comillas faltantes, el analizador fallará." }
      ]
    }
  },
  jsonToCsv: {
    features: {
      title: "Potentes características del Convertidor JSON a CSV",
      items: [
        "Conversión instantánea: Convierta matrices JSON masivas en archivos CSV limpios y estructurados.",
        "Aplanamiento automático: Maneja de manera inteligente objetos JSON anidados y los aplana.",
        "Compatibilidad con Excel: Genera archivos CSV compatibles con el estándar RFC 4180 que se abren perfectamente en Microsoft Excel."
      ]
    },
    howToUse: {
      title: "Cómo convertir datos JSON a formato CSV",
      steps: [
        "Copie sus datos de matriz JSON. El convertidor funciona mejor con una matriz de objetos `[{}, {}]`.",
        "Pegue la carga JSON en el editor 'Entrada JSON'.",
        "Haga clic en el botón 'Convertir a CSV'.",
        "Haga clic en 'Descargar CSV' para guardar el archivo al instante."
      ]
    },
    example: {
      title: "Ejemplo de conversión",
      inputLabel: "Entrada de matriz JSON",
      input: '[\n  {\n    "id": 1,\n    "name": "Harsh"\n  }\n]',
      outputLabel: "Salida CSV",
      output: 'id,name\n1,Harsh'
    },
    commonErrors: {
      title: "Errores comunes de conversión",
      errors: [
        { name: "Objeto raíz no matricial", description: "Los archivos CSV representan inherentemente filas y columnas. Si su carga JSON es un solo objeto `{}` en lugar de una matriz `[{}]`, la herramienta puede tener problemas." }
      ]
    },
    technical: {
      title: "Proceso técnico",
      paragraphs: [
        "Nuestro motor convertidor de JSON a CSV opera en tres fases distintas. Primero, analiza la cadena JSON. Segundo, realiza un escaneo profundo para extraer dinámicamente una lista de claves únicas: estos se convierten en los encabezados CSV. Finalmente, itera a través de los datos, haciendo coincidir los valores."
      ]
    },
    faq: {
      title: "Preguntas frecuentes",
      questions: [
        { question: "¿Cómo maneja el convertidor los objetos anidados?", answer: "El convertidor intenta aplanar los objetos anidados uniendo las claves padre e hijo." }
      ]
    }
  },
  csvToJson: {
    features: {
      title: "Convertidor CSV a JSON",
      items: [
        "Análisis rápido: Convierte archivos CSV en JSON.",
        "Inferencia de tipos: Detecta números y booleanos.",
        "Compatible con RFC 4180: Maneja comas dentro de comillas."
      ]
    },
    howToUse: {
      title: "Cómo usar",
      steps: [
        "Copia tus datos CSV.",
        "Asegúrate de que haya una fila de encabezado.",
        "Pega en el editor.",
        "Haz clic en 'Convertir a JSON'."
      ]
    },
    example: {
      title: "Ejemplo",
      inputLabel: "CSV",
      input: "id,name\n1,John",
      outputLabel: "JSON",
      output: '[\n  {\n    "id": 1,\n    "name": "John"\n  }\n]'
    },
    commonErrors: {
      title: "Errores comunes",
      errors: [
        { name: "Sin encabezado", description: "La primera fila debe ser encabezados." }
      ]
    },
    technical: {
      title: "Técnico",
      paragraphs: ["Esta herramienta analiza CSV y deduce tipos de datos de forma automática."]
    },
    faq: {
      title: "FAQ",
      questions: [
        { question: "¿Puede manejar archivos grandes?", answer: "Sí, funciona en tu navegador." }
      ]
    }
  }
};
