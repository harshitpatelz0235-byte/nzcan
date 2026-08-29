export const idSeo = {
  jsonValidator: {
    features: {
      title: "Fitur Validator JSON",
      items: [
        "Validasi Waktu Nyata: Temukan kesalahan sintaks secara instan.",
        "Pemformatan Otomatis: Bersihkan JSON yang berantakan.",
        "Privasi Pertama: Semuanya berjalan di browser Anda."
      ]
    },
    howToUse: {
      title: "Cara memvalidasi JSON",
      steps: [
        "Tempelkan data JSON mentah Anda ke editor.",
        "Klik tombol 'Validasi JSON'.",
        "Klik 'Format' untuk membuat indentasi kode."
      ]
    },
    example: {
      title: "Contoh",
      inputLabel: "Masukan Mentah",
      input: '{"id":1}',
      outputLabel: "Keluaran",
      output: '{\n  "id": 1\n}'
    },
    commonErrors: {
      title: "Kesalahan Umum",
      errors: [
        { name: "Koma Akhir", description: "JSON ketat tidak mengizinkan koma akhir." }
      ]
    },
    technical: {
      title: "Cara kerjanya",
      paragraphs: ["Kami menggunakan mesin penguraian JavaScript asli."]
    },
    faq: {
      title: "FAQ",
      questions: [
        { question: "Apakah data saya dikirim ke server?", answer: "Tidak. Alat ini berjalan secara lokal." }
      ]
    }
  },
  jsonMinifier: {
    features: {
      title: "Minifier JSON",
      items: ["Kompresi Maksimal", "Metrik waktu nyata"]
    },
    howToUse: {
      title: "Cara menggunakan",
      steps: ["Tempel JSON", "Klik Minify"]
    },
    example: {
      title: "Contoh",
      inputLabel: "Besar",
      input: '{\n "a": 1\n}',
      outputLabel: "Diminimalkan",
      output: '{"a":1}'
    },
    technical: {
      title: "Dampak",
      paragraphs: ["Mengurangi bandwidth jaringan."]
    },
    faq: {
      title: "FAQ",
      questions: [{ question: "Apakah mengubah data?", answer: "Tidak, hanya spasi." }]
    }
  },
  jsonRepair: {
    features: { title: "Perbaikan Cerdas", items: ["Koreksi otomatis", "Pemformatan"] },
    howToUse: { title: "Cara memperbaiki", steps: ["Tempel JSON rusak", "Klik Perbaiki"] },
    example: { title: "Contoh", inputLabel: "Rusak", input: "{a:1}", outputLabel: "Diperbaiki", output: '{"a":1}' },
    commonErrors: { title: "Kesalahan", errors: [{ name: "Kutipan tunggal", description: "Dikonversi ke ganda." }] },
    technical: { title: "Teknis", paragraphs: ["Penganalisis leksikal khusus."] },
    faq: { title: "FAQ", questions: [{ question: "Apakah aman?", answer: "Ya, semuanya berjalan di klien." }] }
  },
  jsonViewer: {
    features: { title: "Penampil JSON", items: ["Pohon Interaktif", "Penyorotan Sintaks"] },
    howToUse: { title: "Cara menggunakan", steps: ["Tempel JSON", "Klik Lihat Pohon"] },
    example: { title: "Contoh", inputLabel: "Mentah", input: "{}", outputLabel: "Pohon", output: "▼ {}" },
    commonErrors: { title: "Kesalahan", errors: [{ name: "Sintaks", description: "JSON harus valid." }] },
    technical: { title: "Teknis", paragraphs: ["Menerjemahkan node DOM secara dinamis."] },
    faq: { title: "FAQ", questions: [{ question: "Pribadi?", answer: "Ya." }] }
  },
  jsonToCsv: {
    features: { title: "JSON ke CSV", items: ["Perataan", "Kompatibel Excel"] },
    howToUse: { title: "Cara mengonversi", steps: ["Tempel array JSON", "Klik Konversi"] },
    example: { title: "Contoh", inputLabel: "JSON", input: '[{"id":1}]', outputLabel: "CSV", output: "id\n1" },
    commonErrors: { title: "Kesalahan", errors: [{ name: "Bukan Objek Array", description: "Membutuhkan array." }] },
    technical: { title: "Proses", paragraphs: ["Mengekstrak kunci unik untuk header."] },
    faq: { title: "FAQ", questions: [{ question: "Buka di Excel?", answer: "Ya." }] }
  },
  csvToJson: {
    features: { title: "CSV ke JSON", items: ["Konversi Cepat", "Pengetikan Otomatis"] },
    howToUse: { title: "Cara menggunakan", steps: ["Tempel CSV", "Klik Konversi"] },
    example: { title: "Contoh", inputLabel: "CSV", input: "id,name\n1,John", outputLabel: "JSON", output: '[\n  {\n    "id": 1,\n    "name": "John"\n  }\n]' },
    commonErrors: { title: "Kesalahan", errors: [{ name: "Tidak ada header", description: "CSV harus memiliki header." }] },
    technical: { title: "Teknis", paragraphs: ["Menguraikan teks dan menyimpulkan jenis data."] },
    faq: { title: "FAQ", questions: [{ question: "Apakah aman?", answer: "Ya, di sisi klien." }] }
  },
  jsonToTs: {
    features: { title: "JSON ke TypeScript", items: ["Pembuatan Instan", "Objek Bersarang"] },
    howToUse: { title: "Cara menggunakan", steps: ["Tempel JSON", "Salin TS"] },
    example: { title: "Contoh", inputLabel: "JSON", input: '{"id": 1}', outputLabel: "TS", output: "export interface RootObject { id: number; }" },
    commonErrors: { title: "Kesalahan", errors: [{ name: "Akar primitif", description: "Harus berupa objek." }] },
    technical: { title: "Teknis", paragraphs: ["Menghasilkan AST secara rekursif."] },
    faq: { title: "FAQ", questions: [{ question: "Menangani null?", answer: "Ya, sebagai any | null." }] }
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
