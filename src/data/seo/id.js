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
