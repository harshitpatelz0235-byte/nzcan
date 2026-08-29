const dictionaries = {
  en: {
    layout: {
      allRightsReserved: "All rights reserved."
    },
    homepage: {
      titlePrefix: "Developer Tools for",
      titleHighlight: "Error Resolution",
      subtitle: "Free, secure, client-side tools to validate, format, and debug your code instantly."
    },
    jsonValidator: {
      title: "JSON Validator & Formatter",
      subtitle: "Instantly find syntax errors and beautifully format your JSON.",
      validateButton: "Validate JSON",
      formatButton: "Format",
      clearButton: "Clear",
      validMessage: "Valid JSON!",
      invalidMessage: "Invalid JSON",
      breadcrumbs: { home: "Home", tools: "Tools", current: "JSON Validator" },
      placeholder: "Paste your JSON here..."
    },
    jsonMinifier: {
      title: "JSON Minifier",
      subtitle: "Compress your JSON payload by removing spaces and newlines.",
      minifyButton: "Minify JSON",
      downloadButton: "Download",
      copyButton: "Copy",
      clearButton: "Clear",
      savedMessage: "Reduced size by",
      errorMessage: "Invalid JSON",
      breadcrumbs: { home: "Home", tools: "Tools", current: "JSON Minifier" },
      inputPlaceholder: "Paste your formatted JSON here...",
      outputPlaceholder: "Minified JSON will appear here..."
    },
    jsonRepair: {
      title: "JSON Repair",
      subtitle: "Automatically fix broken JSON (missing quotes, trailing commas, unclosed brackets).",
      repairButton: "Repair JSON",
      downloadButton: "Download",
      copyButton: "Copy",
      clearButton: "Clear",
      successMessage: "JSON Repaired Successfully!",
      errorMessage: "Could not repair JSON",
      breadcrumbs: { home: "Home", tools: "Tools", current: "JSON Repair" },
      inputPlaceholder: "Paste your broken or malformed JSON here...",
      outputPlaceholder: "Repaired and formatted JSON will appear here..."
    },
    jsonViewer: {
      title: "JSON Viewer",
      subtitle: "Visualize your large JSON payloads in an interactive, collapsible tree.",
      viewButton: "View Tree",
      clearButton: "Clear",
      errorMessage: "Invalid JSON",
      breadcrumbs: { home: "Home", tools: "Tools", current: "JSON Viewer" },
      inputPlaceholder: "Paste raw JSON here..."
    },
    jsonToCsv: {
      title: "JSON to CSV Converter",
      subtitle: "Flatten complex JSON arrays and convert them directly into CSV format for Excel.",
      convertButton: "Convert to CSV",
      downloadButton: "Download CSV",
      copyButton: "Copy",
      clearButton: "Clear",
      errorMessage: "Input must be a valid JSON array of objects.",
      breadcrumbs: { home: "Home", tools: "Tools", current: "JSON to CSV" },
      inputPlaceholder: "Paste your JSON array here (e.g., [{\"id\":1, \"name\":\"John\"}])",
      outputPlaceholder: "Converted CSV will appear here..."
    },
    csvToJson: {
      title: "CSV to JSON Converter",
      subtitle: "Instantly parse CSV files and tabular data into clean, structured JSON arrays.",
      convertButton: "Convert to JSON",
      downloadButton: "Download JSON",
      copyButton: "Copy",
      clearButton: "Clear",
      errorMessage: "Invalid CSV data.",
      breadcrumbs: { home: "Home", tools: "Tools", current: "CSV to JSON" },
      inputPlaceholder: "Paste your CSV data here (e.g., id,name\\n1,John)",
      outputPlaceholder: "Converted JSON array will appear here..."
    }
  },
  hi: {
    layout: {
      allRightsReserved: "सर्वाधिकार सुरक्षित।"
    },
    homepage: {
      titlePrefix: "डेवलपर उपकरण",
      titleHighlight: "त्रुटि समाधान के लिए",
      subtitle: "आपके कोड को तुरंत मान्य, स्वरूपित और डीबग करने के लिए मुफ़्त, सुरक्षित, क्लाइंट-साइड टूल।"
    },
    jsonValidator: {
      title: "JSON वैलिडेटर और फ़ॉर्मेटर",
      subtitle: "तुरंत सिंटैक्स त्रुटियों का पता लगाएं और अपने JSON को सुंदर बनाएं।",
      validateButton: "JSON वैलिडेट करें",
      formatButton: "फ़ॉर्मेट",
      clearButton: "साफ़ करें",
      validMessage: "वैध JSON!",
      invalidMessage: "अवैध JSON",
      breadcrumbs: { home: "होम", tools: "उपकरण", current: "JSON वैलिडेटर" },
      placeholder: "अपना JSON यहाँ पेस्ट करें..."
    },
    jsonMinifier: {
      title: "JSON मिनीफ़ायर",
      subtitle: "स्पेस और नई लाइनों को हटाकर अपने JSON पेलोड को कंप्रेस करें।",
      minifyButton: "JSON मिनीफ़ाई करें",
      downloadButton: "डाउनलोड करें",
      copyButton: "कॉपी करें",
      clearButton: "साफ़ करें",
      savedMessage: "आकार कम हुआ",
      errorMessage: "अवैध JSON",
      breadcrumbs: { home: "होम", tools: "उपकरण", current: "JSON मिनीफ़ायर" },
      inputPlaceholder: "अपना फ़ॉर्मेट किया हुआ JSON यहाँ पेस्ट करें...",
      outputPlaceholder: "मिनीफ़ाई किया हुआ JSON यहाँ दिखाई देगा..."
    },
    jsonRepair: {
      title: "JSON रिपेयर",
      subtitle: "टूटे हुए JSON (गायब उद्धरण, अतिरिक्त कॉमा, अनक्लोज़्ड ब्रैकेट) को स्वचालित रूप से ठीक करें।",
      repairButton: "JSON रिपेयर करें",
      downloadButton: "डाउनलोड करें",
      copyButton: "कॉपी करें",
      clearButton: "साफ़ करें",
      successMessage: "JSON सफलतापूर्वक रिपेयर किया गया!",
      errorMessage: "JSON रिपेयर नहीं हो सका",
      breadcrumbs: { home: "होम", tools: "उपकरण", current: "JSON रिपेयर" },
      inputPlaceholder: "अपना टूटा या खराब JSON यहाँ पेस्ट करें...",
      outputPlaceholder: "रिपेयर किया गया और फ़ॉर्मेट किया गया JSON यहाँ दिखाई देगा..."
    },
    jsonViewer: {
      title: "JSON व्यूअर",
      subtitle: "एक इंटरैक्टिव ट्री में अपने बड़े JSON पेलोड की कल्पना करें।",
      viewButton: "ट्री देखें",
      clearButton: "साफ़ करें",
      errorMessage: "अवैध JSON",
      breadcrumbs: { home: "होम", tools: "उपकरण", current: "JSON व्यूअर" },
      inputPlaceholder: "कच्चा JSON यहाँ पेस्ट करें..."
    },
    jsonToCsv: {
      title: "JSON से CSV कनवर्टर",
      subtitle: "जटिल JSON सरणियों को समतल करें और उन्हें सीधे Excel के लिए CSV स्वरूप में बदलें।",
      convertButton: "CSV में बदलें",
      downloadButton: "CSV डाउनलोड करें",
      copyButton: "कॉपी करें",
      clearButton: "साफ़ करें",
      errorMessage: "इनपुट ऑब्जेक्ट्स की एक वैध JSON सरणी होनी चाहिए।",
      breadcrumbs: { home: "होम", tools: "उपकरण", current: "JSON से CSV" },
      inputPlaceholder: "अपनी JSON सरणी यहाँ पेस्ट करें (उदा., [{\"id\":1, \"name\":\"John\"}])",
      outputPlaceholder: "कनवर्ट किया गया CSV यहाँ दिखाई देगा..."
    },
    csvToJson: {
      title: "CSV से JSON कनवर्टर",
      subtitle: "CSV फ़ाइलों और सारणीबद्ध डेटा को तुरंत साफ़, संरचित JSON सरणियों में पार्स करें।",
      convertButton: "JSON में बदलें",
      downloadButton: "JSON डाउनलोड करें",
      copyButton: "कॉपी करें",
      clearButton: "साफ़ करें",
      errorMessage: "अवैध CSV डेटा।",
      breadcrumbs: { home: "होम", tools: "उपकरण", current: "CSV से JSON" },
      inputPlaceholder: "अपना CSV डेटा यहाँ पेस्ट करें (उदा., id,name\\n1,John)",
      outputPlaceholder: "कनवर्ट की गई JSON सरणी यहाँ दिखाई देगी..."
    }
  },
  pt: {
    layout: {
      allRightsReserved: "Todos os direitos reservados."
    },
    homepage: {
      titlePrefix: "Ferramentas para",
      titleHighlight: "Resolução de Erros",
      subtitle: "Ferramentas gratuitas, seguras e do lado do cliente para validar, formatar e depurar seu código instantaneamente."
    },
    jsonValidator: {
      title: "Validador e Formatador JSON",
      subtitle: "Encontre erros de sintaxe instantaneamente e formate seu JSON.",
      validateButton: "Validar JSON",
      formatButton: "Formatar",
      clearButton: "Limpar",
      validMessage: "JSON Válido!",
      invalidMessage: "JSON Inválido",
      breadcrumbs: { home: "Início", tools: "Ferramentas", current: "Validador JSON" },
      placeholder: "Cole seu JSON aqui..."
    },
    jsonMinifier: {
      title: "Minificador JSON",
      subtitle: "Comprima seu payload JSON removendo espaços e quebras de linha.",
      minifyButton: "Minificar JSON",
      downloadButton: "Baixar",
      copyButton: "Copiar",
      clearButton: "Limpar",
      savedMessage: "Tamanho reduzido em",
      errorMessage: "JSON Inválido",
      breadcrumbs: { home: "Início", tools: "Ferramentas", current: "Minificador JSON" },
      inputPlaceholder: "Cole seu JSON formatado aqui...",
      outputPlaceholder: "O JSON minificado aparecerá aqui..."
    },
    jsonRepair: {
      title: "Reparador JSON",
      subtitle: "Corrija automaticamente JSON quebrado (aspas faltando, vírgulas finais, colchetes abertos).",
      repairButton: "Reparar JSON",
      downloadButton: "Baixar",
      copyButton: "Copiar",
      clearButton: "Limpar",
      successMessage: "JSON reparado com sucesso!",
      errorMessage: "Não foi possível reparar o JSON",
      breadcrumbs: { home: "Início", tools: "Ferramentas", current: "Reparador JSON" },
      inputPlaceholder: "Cole seu JSON quebrado ou malformado aqui...",
      outputPlaceholder: "O JSON reparado e formatado aparecerá aqui..."
    },
    jsonViewer: {
      title: "Visualizador JSON",
      subtitle: "Visualize seus grandes payloads JSON em uma árvore interativa e recolhível.",
      viewButton: "Ver Árvore",
      clearButton: "Limpar",
      errorMessage: "JSON Inválido",
      breadcrumbs: { home: "Início", tools: "Ferramentas", current: "Visualizador JSON" },
      inputPlaceholder: "Cole o JSON bruto aqui..."
    },
    jsonToCsv: {
      title: "Conversor JSON para CSV",
      subtitle: "Achate arrays JSON complexos e converta-os diretamente para o formato CSV para Excel.",
      convertButton: "Converter para CSV",
      downloadButton: "Baixar CSV",
      copyButton: "Copiar",
      clearButton: "Limpar",
      errorMessage: "A entrada deve ser um array JSON válido de objetos.",
      breadcrumbs: { home: "Início", tools: "Ferramentas", current: "JSON para CSV" },
      inputPlaceholder: "Cole seu array JSON aqui (ex., [{\"id\":1, \"name\":\"John\"}])",
      outputPlaceholder: "O CSV convertido aparecerá aqui..."
    },
    csvToJson: {
      title: "Conversor CSV para JSON",
      subtitle: "Analise arquivos CSV e dados tabulares instantaneamente em arrays JSON estruturados.",
      convertButton: "Converter para JSON",
      downloadButton: "Baixar JSON",
      copyButton: "Copiar",
      clearButton: "Limpar",
      errorMessage: "Dados CSV inválidos.",
      breadcrumbs: { home: "Início", tools: "Ferramentas", current: "CSV para JSON" },
      inputPlaceholder: "Cole seus dados CSV aqui (ex., id,name\\n1,John)",
      outputPlaceholder: "O array JSON convertido aparecerá aqui..."
    }
  },
  es: {
    layout: {
      allRightsReserved: "Todos los derechos reservados."
    },
    homepage: {
      titlePrefix: "Herramientas para",
      titleHighlight: "Resolución de Errores",
      subtitle: "Herramientas gratuitas, seguras y del lado del cliente para validar, formatear y depurar tu código al instante."
    },
    jsonValidator: {
      title: "Validador y Formateador JSON",
      subtitle: "Encuentra errores de sintaxis al instante y formatea tu JSON.",
      validateButton: "Validar JSON",
      formatButton: "Formatear",
      clearButton: "Limpiar",
      validMessage: "¡JSON Válido!",
      invalidMessage: "JSON Inválido",
      breadcrumbs: { home: "Inicio", tools: "Herramientas", current: "Validador JSON" },
      placeholder: "Pega tu JSON aquí..."
    },
    jsonMinifier: {
      title: "Minificador JSON",
      subtitle: "Comprime tu payload JSON eliminando espacios y saltos de línea.",
      minifyButton: "Minificar JSON",
      downloadButton: "Descargar",
      copyButton: "Copiar",
      clearButton: "Limpiar",
      savedMessage: "Tamaño reducido en",
      errorMessage: "JSON Inválido",
      breadcrumbs: { home: "Inicio", tools: "Herramientas", current: "Minificador JSON" },
      inputPlaceholder: "Pega tu JSON formateado aquí...",
      outputPlaceholder: "El JSON minificado aparecerá aquí..."
    },
    jsonRepair: {
      title: "Reparador JSON",
      subtitle: "Repara automáticamente JSON roto (comillas faltantes, comas finales, corchetes sin cerrar).",
      repairButton: "Reparar JSON",
      downloadButton: "Descargar",
      copyButton: "Copiar",
      clearButton: "Limpiar",
      successMessage: "¡JSON reparado con éxito!",
      errorMessage: "No se pudo reparar el JSON",
      breadcrumbs: { home: "Inicio", tools: "Herramientas", current: "Reparador JSON" },
      inputPlaceholder: "Pega tu JSON roto o malformado aquí...",
      outputPlaceholder: "El JSON reparado y formateado aparecerá aquí..."
    },
    jsonViewer: {
      title: "Visor JSON",
      subtitle: "Visualiza tus grandes payloads JSON en un árbol interactivo y colapsable.",
      viewButton: "Ver Árbol",
      clearButton: "Limpiar",
      errorMessage: "JSON Inválido",
      breadcrumbs: { home: "Inicio", tools: "Herramientas", current: "Visor JSON" },
      inputPlaceholder: "Pega el JSON en bruto aquí..."
    },
    jsonToCsv: {
      title: "Convertidor JSON a CSV",
      subtitle: "Aplana matrices JSON complejas y conviértelas directamente a formato CSV para Excel.",
      convertButton: "Convertir a CSV",
      downloadButton: "Descargar CSV",
      copyButton: "Copiar",
      clearButton: "Limpiar",
      errorMessage: "La entrada debe ser una matriz JSON válida de objetos.",
      breadcrumbs: { home: "Inicio", tools: "Herramientas", current: "JSON a CSV" },
      inputPlaceholder: "Pega tu matriz JSON aquí (ej., [{\"id\":1, \"name\":\"John\"}])",
      outputPlaceholder: "El CSV convertido aparecerá aquí..."
    },
    csvToJson: {
      title: "Convertidor CSV a JSON",
      subtitle: "Analiza archivos CSV y datos tabulares al instante en matrices JSON estructuradas.",
      convertButton: "Convertir a JSON",
      downloadButton: "Descargar JSON",
      copyButton: "Copiar",
      clearButton: "Limpiar",
      errorMessage: "Datos CSV inválidos.",
      breadcrumbs: { home: "Inicio", tools: "Herramientas", current: "CSV a JSON" },
      inputPlaceholder: "Pega tus datos CSV aquí (ej., id,name\\n1,John)",
      outputPlaceholder: "La matriz JSON convertida aparecerá aquí..."
    }
  },
  de: {
    layout: {
      allRightsReserved: "Alle Rechte vorbehalten."
    },
    homepage: {
      titlePrefix: "Entwicklertools für",
      titleHighlight: "Fehlerbehebung",
      subtitle: "Kostenlose, sichere clientseitige Tools zum sofortigen Validieren, Formatieren und Debuggen Ihres Codes."
    },
    jsonValidator: {
      title: "JSON Validator & Formatter",
      subtitle: "Finden Sie sofort Syntaxfehler und formatieren Sie Ihr JSON schön.",
      validateButton: "JSON validieren",
      formatButton: "Formatieren",
      clearButton: "Löschen",
      validMessage: "Gültiges JSON!",
      invalidMessage: "Ungültiges JSON",
      breadcrumbs: { home: "Startseite", tools: "Werkzeuge", current: "JSON Validator" },
      placeholder: "Fügen Sie Ihr JSON hier ein..."
    },
    jsonMinifier: {
      title: "JSON Minifier",
      subtitle: "Komprimieren Sie Ihre JSON-Nutzdaten, indem Sie Leerzeichen und Zeilenumbrüche entfernen.",
      minifyButton: "JSON minifizieren",
      downloadButton: "Herunterladen",
      copyButton: "Kopieren",
      clearButton: "Löschen",
      savedMessage: "Größe reduziert um",
      errorMessage: "Ungültiges JSON",
      breadcrumbs: { home: "Startseite", tools: "Werkzeuge", current: "JSON Minifier" },
      inputPlaceholder: "Fügen Sie hier Ihr formatiertes JSON ein...",
      outputPlaceholder: "Minifiziertes JSON wird hier angezeigt..."
    },
    jsonRepair: {
      title: "JSON Repair",
      subtitle: "Reparieren Sie fehlerhaftes JSON automatisch (fehlende Anführungszeichen, nachgestellte Kommas, offene Klammern).",
      repairButton: "JSON reparieren",
      downloadButton: "Herunterladen",
      copyButton: "Kopieren",
      clearButton: "Löschen",
      successMessage: "JSON erfolgreich repariert!",
      errorMessage: "JSON konnte nicht repariert werden",
      breadcrumbs: { home: "Startseite", tools: "Werkzeuge", current: "JSON Repair" },
      inputPlaceholder: "Fügen Sie hier Ihr kaputtes oder fehlerhaftes JSON ein...",
      outputPlaceholder: "Das reparierte und formatierte JSON wird hier angezeigt..."
    },
    jsonViewer: {
      title: "JSON Viewer",
      subtitle: "Visualisieren Sie Ihre großen JSON-Nutzdaten in einem interaktiven, einklappbaren Baum.",
      viewButton: "Baum ansehen",
      clearButton: "Löschen",
      errorMessage: "Ungültiges JSON",
      breadcrumbs: { home: "Startseite", tools: "Werkzeuge", current: "JSON Viewer" },
      inputPlaceholder: "Fügen Sie rohes JSON hier ein..."
    },
    jsonToCsv: {
      title: "JSON zu CSV Konverter",
      subtitle: "Flachen Sie komplexe JSON-Arrays ab und konvertieren Sie sie direkt in das CSV-Format für Excel.",
      convertButton: "In CSV konvertieren",
      downloadButton: "CSV Herunterladen",
      copyButton: "Kopieren",
      clearButton: "Löschen",
      errorMessage: "Die Eingabe muss ein gültiges JSON-Array von Objekten sein.",
      breadcrumbs: { home: "Startseite", tools: "Werkzeuge", current: "JSON zu CSV" },
      inputPlaceholder: "Fügen Sie hier Ihr JSON-Array ein (z.B., [{\"id\":1, \"name\":\"John\"}])",
      outputPlaceholder: "Konvertiertes CSV wird hier angezeigt..."
    },
    csvToJson: {
      title: "CSV zu JSON Konverter",
      subtitle: "Analysieren Sie CSV-Dateien sofort in saubere, strukturierte JSON-Arrays.",
      convertButton: "In JSON konvertieren",
      downloadButton: "JSON Herunterladen",
      copyButton: "Kopieren",
      clearButton: "Löschen",
      errorMessage: "Ungültige CSV-Daten.",
      breadcrumbs: { home: "Startseite", tools: "Werkzeuge", current: "CSV zu JSON" },
      inputPlaceholder: "Fügen Sie hier Ihre CSV-Daten ein (z.B., id,name\\n1,John)",
      outputPlaceholder: "Das konvertierte JSON-Array wird hier angezeigt..."
    }
  },
  id: {
    layout: {
      allRightsReserved: "Hak cipta dilindungi undang-undang."
    },
    homepage: {
      titlePrefix: "Alat Pengembang untuk",
      titleHighlight: "Penyelesaian Kesalahan",
      subtitle: "Alat sisi klien yang aman dan gratis untuk memvalidasi, memformat, dan men-debug kode Anda secara instan."
    },
    jsonValidator: {
      title: "Validator & Pemformat JSON",
      subtitle: "Temukan kesalahan sintaks secara instan dan format JSON Anda.",
      validateButton: "Validasi JSON",
      formatButton: "Format",
      clearButton: "Bersihkan",
      validMessage: "JSON Valid!",
      invalidMessage: "JSON Tidak Valid",
      breadcrumbs: { home: "Beranda", tools: "Alat", current: "Validator JSON" },
      placeholder: "Tempel JSON Anda di sini..."
    },
    jsonMinifier: {
      title: "Peminiasi JSON",
      subtitle: "Kompres payload JSON Anda dengan menghapus spasi dan baris baru.",
      minifyButton: "Minifikasi JSON",
      downloadButton: "Unduh",
      copyButton: "Salin",
      clearButton: "Bersihkan",
      savedMessage: "Ukuran berkurang",
      errorMessage: "JSON Tidak Valid",
      breadcrumbs: { home: "Beranda", tools: "Alat", current: "Peminiasi JSON" },
      inputPlaceholder: "Tempel JSON yang diformat di sini...",
      outputPlaceholder: "JSON yang diminifikasi akan muncul di sini..."
    },
    jsonRepair: {
      title: "Perbaikan JSON",
      subtitle: "Secara otomatis memperbaiki JSON yang rusak (tanda kutip hilang, koma di akhir, tanda kurung tidak tertutup).",
      repairButton: "Perbaiki JSON",
      downloadButton: "Unduh",
      copyButton: "Salin",
      clearButton: "Bersihkan",
      successMessage: "JSON Berhasil Diperbaiki!",
      errorMessage: "Tidak dapat memperbaiki JSON",
      breadcrumbs: { home: "Beranda", tools: "Alat", current: "Perbaikan JSON" },
      inputPlaceholder: "Tempelkan JSON Anda yang rusak atau salah format di sini...",
      outputPlaceholder: "JSON yang telah diperbaiki dan diformat akan muncul di sini..."
    },
    jsonViewer: {
      title: "Penampil JSON",
      subtitle: "Visualisasikan payload JSON besar Anda dalam pohon interaktif.",
      viewButton: "Lihat Pohon",
      clearButton: "Bersihkan",
      errorMessage: "JSON Tidak Valid",
      breadcrumbs: { home: "Beranda", tools: "Alat", current: "Penampil JSON" },
      inputPlaceholder: "Tempel JSON mentah di sini..."
    },
    jsonToCsv: {
      title: "Konverter JSON ke CSV",
      subtitle: "Ratakan array JSON yang kompleks dan konversikan langsung ke format CSV untuk Excel.",
      convertButton: "Konversi ke CSV",
      downloadButton: "Unduh CSV",
      copyButton: "Salin",
      clearButton: "Bersihkan",
      errorMessage: "Masukan harus berupa array JSON objek yang valid.",
      breadcrumbs: { home: "Beranda", tools: "Alat", current: "JSON ke CSV" },
      inputPlaceholder: "Tempelkan array JSON Anda di sini (mis., [{\"id\":1, \"name\":\"John\"}])",
      outputPlaceholder: "CSV yang dikonversi akan muncul di sini..."
    },
    csvToJson: {
      title: "Konverter CSV ke JSON",
      subtitle: "Uraikan file CSV secara instan ke dalam array JSON yang terstruktur.",
      convertButton: "Konversi ke JSON",
      downloadButton: "Unduh JSON",
      copyButton: "Salin",
      clearButton: "Bersihkan",
      errorMessage: "Data CSV tidak valid.",
      breadcrumbs: { home: "Beranda", tools: "Alat", current: "CSV ke JSON" },
      inputPlaceholder: "Tempelkan data CSV Anda di sini (mis., id,name\\n1,John)",
      outputPlaceholder: "Array JSON yang dikonversi akan muncul di sini..."
    }
  }
};

export const getDictionary = async (locale) => dictionaries[locale] || dictionaries.en;

export const getSeoDictionary = async (locale) => {
  try {
    const seoData = await import(`./src/data/seo/${locale}.js`);
    return seoData[`${locale}Seo`];
  } catch (error) {
    // Fallback to English if translation is missing
    const enData = await import(`./src/data/seo/en.js`);
    return enData.enSeo;
  }
};

