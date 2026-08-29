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
  }
};
