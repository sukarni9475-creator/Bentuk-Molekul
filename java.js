const CONFIG = {
  title: "Bentuk Molekul & Kepolaran",
  subject: "Kimia",
  grade: "Kelas XI / Fase F",
  author: "Sukarni",
  school: "SMAN 1 Tarumajaya",
  email: "sukarni94@guru.sma.belajar.id",
  year: "2026",
  theme: {
    primary: "#2e7d32",
    secondary: "#e91e63",
    accent: "#8e24aa",
    warning: "#ff9800"
  }
};

const MATERI = [
  {
    id: 1,
    title: "Pengantar Teori VSEPR & PEB/PEI",
    subtitle: "Konsep Dasar Bentuk Molekul",
    content: `
      <p>Halo Anak-anak cerdas! Selamat datang di media pembelajaran interaktif Kimia.</p>
      <p>Pernahkah kalian membayangkan bagaimana bentuk molekul air ($\text{H}_2\text{O}$) atau gas metana ($\text{CH}_4$) di alam semesta ini?</p>
      <p>Bentuk molekul dijelaskan melalui <strong>Teori VSEPR</strong> (<em>Valence Shell Electron Pair Repulsion</em>) atau Teori Tolakan Pasangan Elektron Valensi. Teori ini menyatakan bahwa pasangan elektron di sekitar atom pusat akan saling tolakan sedemikian rupa sehingga berada pada jarak sejauh mungkin untuk meminimalkan tolakan tersebut.</p>
      <div class="info-box">
        <h4>Komponen Pasangan Elektron:</h4>
        <ul>
          <li><strong>PEI (Pasangan Elektron Ikatan):</strong> Pasangan elektron yang digunakan bersama untuk berikatan dengan atom lain.</li>
          <li><strong>PEB (Pasangan Elektron Bebas):</strong> Pasangan elektron valensi atom pusat yang tidak digunakan untuk berikatan.</li>
        </ul>
      </div>
      <p>Kekuatan tolakan antar pasangan elektron: <strong>PEB - PEB > PEB - PEI > PEI - PEI</strong>.</p>
    `
  },
  {
    id: 2,
    title: "Rumus VSEPR, Hibridisasi & Geometri Molekul",
    subtitle: "Penentuan Rumus $AX_n E_m$ dan Domain Elektron",
    content: `
      <p>Untuk menentukan bentuk molekul dan hibridisasi elektronnya, kita menggunakan notasi umum VSEPR berikut:</p>
      <div class="code-box">
        <strong>Rumus: $AX_n E_m$</strong><br>
        • A = Atom Pusat<br>
        • X = Pasangan Elektron Ikatan (PEI), dengan jumlah $n$<br>
        • E = Pasangan Elektron Bebas (PEB), dengan jumlah $m$<br>
        • $m = \frac{EV - X}{2}$ (untuk ikatan tunggal)
      </div>
      <p>Jumlah Domain Elektron ($n + m$) menentukan jenis <strong>Hibridisasi Elektron</strong> pada atom pusat:</p>
      <ul>
        <li><strong>Domain 2 ($sp$):</strong> Geometri dasar Linier (Sudut $180^\circ$)</li>
        <li><strong>Domain 3 ($sp^2$):</strong> Geometri dasar Trigonal Planar (Sudut $120^\circ$)</li>
        <li><strong>Domain 4 ($sp^3$):</strong> Geometri dasar Tetrahedral (Sudut $109,5^\circ$)</li>
        <li><strong>Domain 5 ($sp^3d$):</strong> Geometri dasar Trigonal Bipiramida</li>
        <li><strong>Domain 6 ($sp^3d^2$):</strong> Geometri dasar Oktahedral</li>
      </ul>
    `
  },
  {
    id: 3,
    title: "Molekul Domain 2 & 3: Linier dan Trigonal Planar",
    subtitle: "Studi Kasus $\text{BeCl}_2$, $\text{BF}_3$, dan $\text{SO}_2$",
    content: `
      <p>Mari kita pelajari contoh molekul dengan 2 dan 3 domain elektron:</p>
      <div class="cards-container">
        <div class="card">
          <h4>1. Barium Klorida ($\text{BeCl}_2$) / $\text{CO}_2$</h4>
          <p>• Rumus: $AX_2$ (PEI = 2, PEB = 0)</p>
          <p>• Hibridisasi: $sp$</p>
          <p>• Bentuk Molekul: <strong>Linier</strong></p>
          <p>• Sudut Ikatan: $180^\circ$</p>
        </div>
        <div class="card">
          <h4>2. Boron Trifluorida ($\text{BF}_3$)</h4>
          <p>• Rumus: $AX_3$ (PEI = 3, PEB = 0)</p>
          <p>• Hibridisasi: $sp^2$</p>
          <p>• Bentuk Molekul: <strong>Trigonal Planar / Segitiga Sama Sisi</strong></p>
          <p>• Sudut Ikatan: $120^\circ$</p>
        </div>
        <div class="card">
          <h4>3. Sulfur Dioksida ($\text{SO}_2$)</h4>
          <p>• Rumus: $AX_2E$ (PEI = 2, PEB = 1)</p>
          <p>• Hibridisasi: $sp^2$</p>
          <p>• Bentuk Molekul: <strong>Bengkok / Bentuk V</strong></p>
        </div>
      </div>
    `
  },
  {
    id: 4,
    title: "Molekul Domain 4: Tetrahedral, Piramida Trigonal, dan Bentuk V",
    subtitle: "Studi Kasus $\text{CH}_4$, $\text{NH}_3$, dan $\text{H}_2\text{O}$",
    content: `
      <p>Domain 4 memiliki hibridisasi $sp^3$. Perbedaan jumlah PEB mengubah bentuk molekulnya secara signifikan:</p>
      <table class="styled-table">
        <thead>
          <tr>
            <th>Molekul</th>
            <th>Tipe ($AX_n E_m$)</th>
            <th>Hibridisasi</th>
            <th>Bentuk Molekul</th>
            <th>Sudut Ikatan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Metana ($\text{CH}_4$)</td>
            <td>$AX_4$</td>
            <td>$sp^3$</td>
            <td>Tetrahedral</td>
            <td>$109,5^\circ$</td>
          </tr>
          <tr>
            <td>Amoniak ($\text{NH}_3$)</td>
            <td>$AX_3E$</td>
            <td>$sp^3$</td>
            <td>Piramida Trigonal</td>
            <td>$107,3^\circ$</td>
          </tr>
          <tr>
            <td>Air ($\text{H}_2\text{O}$)</td>
            <td>$AX_2E_2$</td>
            <td>$sp^3$</td>
            <td>Bengkok / Bentuk V</td>
            <td>$104,5^\circ$</td>
          </tr>
        </tbody>
      </table>
      <p><em>Catatan Guru:</em> Adanya PEB memberikan tekanan tolakan lebih besar sehingga memperkecil sudut ikatan antar PEI!</p>
    `
  },
  {
    id: 5,
    title: "Molekul Domain 5 & 6: Trigonal Bipiramida dan Oktahedral",
    subtitle: "Studi Kasus $\text{PCl}_5$, $\text{SF}_6$, dan $\text{XeF}_4$",
    content: `
      <p>Untuk molekul yang melampaui kaidah oktet (oktet berkembang):</p>
      <ul>
        <li><strong>$\text{PCl}_5$ ($AX_5$ - Hibridisasi $sp^3d$):</strong> Bentuk <strong>Trigonal Bipiramida</strong>. Pasangan elektron berada pada posisi aksial dan ekuatorial.</li>
        <li><strong>$\text{SF}_4$ ($AX_4E$ - Hibridisasi $sp^3d$):</strong> Bentuk <strong>Tetrahedral Terdistorsi / Jungkitan (Seesaw)</strong>.</li>
        <li><strong>$\text{ClF}_3$ ($AX_3E_2$ - Hibridisasi $sp^3d$):</strong> Bentuk <strong>Huruf T</strong>.</li>
        <li><strong>$\text{SF}_6$ ($AX_6$ - Hibridisasi $sp^3d^2$):</strong> Bentuk <strong>Oktahedral</strong>. Sudut ikatan $90^\circ$.</li>
        <li><strong>$\text{XeF}_4$ ($AX_4E_2$ - Hibridisasi $sp^3d^2$):</strong> Bentuk <strong>Segi Empat Planar</strong>.</li>
      </ul>
    `
  },
  {
    id: 6,
    title: "Hubungan Bentuk Molekul dengan Kepolaran Molekul",
    subtitle: "Kepolaran dan Momen Dipol ($\mu$)",
    content: `
      <p>Kepolaran suatu molekul ditentukan oleh kepolaran ikatan kovalen (keelektronegatifan) dan <strong>simetri bentuk molekulnya</strong>.</p>
      <div class="grid-2">
        <div class="box polar">
          <h4>Molekul Polar</h4>
          <ul>
            <li>Bentuk molekul <strong>asimetris</strong> (tidak simetris).</li>
            <li>Memiliki pasangan elektron bebas (PEB) pada atom pusat (seperti $\text{NH}_3$, $\text{H}_2\text{O}$).</li>
            <li>Momen dipol total $\mu > 0$.</li>
            <li>Dapat ditarik oleh medan listrik.</li>
          </ul>
        </div>
        <div class="box nonpolar">
          <h4>Molekul Nonpolar</h4>
          <ul>
            <li>Bentuk molekul <strong>simetris</strong>.</li>
            <li>Tidak memiliki PEB pada atom pusat, atau PEB saling meniadakan dipol (seperti $\text{CH}_4$, $\text{CO}_2$, $\text{BF}_3$, $\text{XeF}_4$).</li>
            <li>Momen dipol total $\mu = 0$.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: 7,
    title: "Visualisasi Gambar Bentuk Molekul",
    subtitle: "Galeri Ilustrasi Geometri Molekul Utama",
    content: `
      <p>Berikut adalah representasi visual geometri molekul berdasarkan VSEPR:</p>
      <div class="gallery-grid">
        <div class="gallery-item">
          <div class="img-placeholder">[Gambar Molekul Linier - CO2/BeCl2]</div>
          <p><strong>Linier ($AX_2$)</strong><br>Sudut $180^\circ$</p>
        </div>
        <div class="gallery-item">
          <div class="img-placeholder">[Gambar Molekul Trigonal Planar - BF3]</div>
          <p><strong>Trigonal Planar ($AX_3$)</strong><br>Sudut $120^\circ$</p>
        </div>
        <div class="gallery-item">
          <div class="img-placeholder">[Gambar Molekul Tetrahedral - CH4]</div>
          <p><strong>Tetrahedral ($AX_4$)</strong><br>Sudut $109,5^\circ$</p>
        </div>
        <div class="gallery-item">
          <div class="img-placeholder">[Gambar Molekul Piramida Trigonal - NH3]</div>
          <p><strong>Piramida Trigonal ($AX_3E$)</strong><br>Sudut $107^\circ$</p>
        </div>
        <div class="gallery-item">
          <div class="img-placeholder">[Gambar Molekul Oktahedral - SF6]</div>
          <p><strong>Oktahedral ($AX_6$)</strong><br>Sudut $90^\circ$</p>
        </div>
      </div>
    `
  },
  {
    id: 8,
    title: "Kuis Pemahaman Cepat Sub-Materi",
    subtitle: "Uji Pemahaman Singkat",
    quiz: {
      question: "Molekul $\text{NH}_3$ memiliki 3 pasang elektron ikatan (PEI) dan 1 pasang elektron bebas (PEB). Apa bentuk molekul dan jenis hibridisasinya?",
      options: [
        "Tetrahedral dan sp3",
        "Piramida Trigonal dan sp3",
        "Trigonal Planar dan sp2",
        "Bentuk V dan sp3"
      ],
      answer: 1,
      explanation: "Atom N pada NH3 memiliki rumus AX3E (3 PEI dan 1 PEB). Domain elektron = 4 (hibridisasi sp3), dan bentuk molekulnya adalah Piramida Trigonal."
    }
  },
  {
    id: 9,
    title: "Rangkuman & Kesimpulan",
    subtitle: "Intisari Pembelajaran Bentuk Molekul & Kepolaran",
    content: `
      <p>Hebat sekali! Kalian telah mempelajari keseluruhan konsep Bentuk Molekul dan Kepolaran. Mari kita simpulkan:</p>
      <ol>
        <li><strong>Teori VSEPR:</strong> Bentuk molekul ditentukan oleh tolakan antar pasangan elektron valensi atom pusat agar terjadi tolakan minimum.</li>
        <li><strong>Hibridisasi:</strong> Penggabungan orbital atomik menentukan geometri dasar domain elektron ($sp$, $sp^2$, $sp^3$, $sp^3d$, $sp^3d^2$).</li>
        <li><strong>Pengaruh PEB:</strong> PEB menekan ikatan sehingga mengubah sudut ikatan dan geometri molekul dari bentuk dasarnya.</li>
        <li><strong>Kepolaran:</strong> Molekul simetris tanpa PEB (atau dipol saling meniadakan) bersifat <strong>nonpolar</strong> ($\mu = 0$). Molekul asimetris dengan PEB umumnya bersifat <strong>polar</strong> ($\mu > 0$).</li>
      </ol>
      <p class="highlight-text">Siapkan diri kalian untuk beraksi di fitur Bermain Game Interaktif dan Uji Kompetensi Berlatih!</p>
    `
  }
];

const dataBermain = [
  {
    id: 1,
    type: "multiple-choice",
    title: "Game 1: Detektif Pasangan Elektron",
    question: "Atom pusat oksigen pada molekul air ($\text{H}_2\text{O}$) memiliki nomor atom 8. Berapakah jumlah PEI dan PEB pada molekul $\text{H}_2\text{O}$?",
    options: ["2 PEI dan 0 PEB", "2 PEI dan 1 PEB", "2 PEI dan 2 PEB", "3 PEI dan 1 PEB"],
    answer: 2,
    feedback: "Tepat sekali! Oksigen memiliki 6 elektron valensi. 2 dipakai berikatan dengan H (PEI = 2), sisa 4 elektron menjadi 2 PEB."
  },
  {
    id: 2,
    type: "multiple-choice",
    title: "Game 2: Teberkas Hibridisasi",
    question: "Molekul Metana ($\text{CH}_4$) memiliki geometri tetrahedral. Jenis hibridisasi orbital pada atom C ($\text{Z}=6$) adalah...",
    options: ["sp", "sp2", "sp3", "sp3d"],
    answer: 2,
    feedback: "Pintar! Pada CH4 terdapat 4 ikatan tunggal (4 domain elektron), sehingga hibridisasinya adalah sp3."
  },
  {
    id: 3,
    type: "multiple-choice",
    title: "Game 3: Misteri Sudut Ikatan",
    question: "Mengapa sudut ikatan pada $\text{H}_2\text{O}$ ($104,5^\circ$) lebih kecil dibanding sudut ikatan pada $\text{CH}_4$ ($109,5^\circ$)?",
    options: [
      "Karena massa H2O lebih besar",
      "Karena tolakan PEB-PEB pada H2O menekan ikatan O-H",
      "Karena ikatan C-H lebih kuat dari O-H",
      "Karena H2O berbentuk linier"
    ],
    answer: 1,
    feedback: "Benar! Tolakan pasangan elektron bebas (PEB) lebih kuat daripada PEI, sehingga menekan sudut ikatan menjadi lebih kecil."
  },
  {
    id: 4,
    type: "multiple-choice",
    title: "Game 4: Pengelompokan Kepolaran",
    question: "Di antara molekul berikut, manakah yang bersifat NONPOLAR meskipun memiliki ikatan kovalen polar?",
    options: ["NH3", "H2O", "CCl4", "HCl"],
    answer: 2,
    feedback: "Hebat! CCl4 berbentuk Tetrahedral simetris ($AX_4$) tanpa PEB, sehingga momen dipolnya nol ($\mu = 0$) dan bersifat nonpolar."
  },
  {
    id: 5,
    type: "multiple-choice",
    title: "Game 5: Pemburu Rumus VSEPR",
    question: "Suatu molekul $XY_3$ memiliki atom pusat $X$ dengan 5 elektron valensi dan $Y$ menyumbang 1 elektron. Rumus VSEPR molekul ini adalah...",
    options: ["AX3", "AX3E", "AX3E2", "AX2E2"],
    answer: 1,
    feedback: "Luar biasa! EV = 5, PEI = 3, maka PEB (E) = (5 - 3)/2 = 1. Rumusnya adalah AX3E."
  },
  {
    id: 6,
    type: "multiple-choice",
    title: "Game 6: Teka-Teki Oktahedral",
    question: "Molekul $\text{SF}_6$ memiliki 6 ikatan tunggal S-F tanpa PEB. Bentuk molekul dan sudut ikatan yang terbentuk adalah...",
    options: [
      "Trigonal Bipiramida, 120°",
      "Oktahedral, 90°",
      "Tetrahedral, 109,5°",
      "Segi Empat Planar, 90°"
    ],
    answer: 1,
    feedback: "Tepat! AX6 memiliki geometri Oktahedral dengan semua sudut ikatan sebesar 90°."
  },
  {
    id: 7,
    type: "multiple-choice",
    title: "Game 7: Tantangan XeF4",
    question: "Xenon Tetrafluorida ($\text{XeF}_4$) memiliki 8 elektron valensi pada Xe. Rumus VSEPR dan bentuk molekulnya adalah...",
    options: [
      "AX4E - Tetrahedral Terdistorsi",
      "AX4E2 - Segi Empat Planar",
      "AX4 - Tetrahedral",
      "AX5 - Trigonal Bipiramida"
    ],
    answer: 1,
    feedback: "Benar! PEI = 4, PEB = (8 - 4)/2 = 2. Tipe AX4E2 membentuk molekul Segi Empat Planar."
  },
  {
    id: 8,
    type: "multiple-choice",
    title: "Game 8: Atraksi Medan Listrik",
    question: "Jika dialirkan dari buret, senyawa berikut yang jalurnya BENGKOK ketika didekatkan penggaris bermuatan listrik adalah...",
    options: ["CCl4", "CO2", "H2O", "BCl3"],
    answer: 2,
    feedback: "Pintar! H2O adalah molekul polar yang memiliki momen dipol, sehingga dapat ditarik oleh medan listrik."
  },
  {
    id: 9,
    type: "multiple-choice",
    title: "Game 9: Identifikasi Bentuk V",
    question: "Pasangan molekul yang keduanya memiliki bentuk molekul Bengkok / Bentuk V adalah...",
    options: [
      "H2O dan SO2",
      "CO2 dan BeCl2",
      "CH4 dan CCl4",
      "BF3 dan NH3"
    ],
    answer: 0,
    feedback: "Tepat! H2O (AX2E2) dan SO2 (AX2E) keduanya berbentuk V/Bengkok."
  },
  {
    id: 10,
    type: "multiple-choice",
    title: "Game 10: Tebak Hibridisasi PCl5",
    question: "Atom P ($\text{Z}=15$) pada $\text{PCl}_5$ membentuk 5 ikatan kovalen ekivalen. orbital hibrida yang digunakan oleh atom P adalah...",
    options: ["sp2", "sp3", "sp3d", "sp3d2"],
    answer: 2,
    feedback: "Luar biasa! 5 domain elektron pada PCl5 membutuhkan 5 orbital hibrida, yaitu sp3d."
  }
];

const dtLatih = [
  {
    id: 1,
    question: "Berdasarkan teori VSEPR, bentuk molekul ditinjau dari tolakan antar pasangan elektron valensi. Manakah urutan kekuatan tolakan yang benar?",
    options: [
      "PEI - PEI > PEB - PEI > PEB - PEB",
      "PEB - PEB > PEB - PEI > PEI - PEI",
      "PEB - PEI > PEB - PEB > PEI - PEI",
      "PEI - PEI > PEB - PEB > PEB - PEI"
    ],
    answer: 1,
    explanation: "Pasangan elektron bebas (PEB) terikat hanya pada satu inti atom, sehingga ruang edarnya lebih luas dan memberikan tolakan paling besar. Urutan tolakan: PEB-PEB > PEB-PEI > PEI-PEI."
  },
  {
    id: 2,
    question: "Unsur X dengan nomor atom 7 berikatan dengan unsur Y dengan nomor atom 1 membentuk senyawa $XY_3$. Bentuk molekul $XY_3$ adalah...",
    options: [
      "Trigonal Planar",
      "Piramida Trigonal",
      "Tetrahedral",
      "Bentuk T"
    ],
    answer: 1,
    explanation: "X (Konfigurasi 2, 5 -> EV=5). Membentuk 3 ikatan dengan Y -> PEI = 3. PEB = (5 - 3)/2 = 1. Rumus AX3E, geometri molekul adalah Piramida Trigonal."
  },
  {
    id: 3,
    question: "Senyawa $\text{BF}_3$ ($\text{Z B}=5, \text{Z F}=9$) bersifat nonpolar, sedangkan $\text{NH}_3$ ($\text{Z N}=7, \text{Z H}=1$) bersifat polar. Penyebab utama perbedaan kepolaran ini adalah...",
    options: [
      "Jumlah elektron valensi B lebih banyak dari N",
      "BF3 berbentuk simetris (Trigonal Planar) tanpa PEB, sedangkan NH3 asimetris (Piramida Trigonal) dengan 1 PEB",
      "Ikatan B-F bersifat nonpolar, sedangkan N-H bersifat polar",
      "Massa molekul relatif BF3 lebih besar dari NH3"
    ],
    answer: 1,
    explanation: "BF3 memiliki rumus AX3 (simetris, momen dipol = 0 -> nonpolar). NH3 memiliki rumus AX3E (asimetris karena ada PEB, momen dipol > 0 -> polar)."
  },
  {
    id: 4,
    question: "Hibridisasi yang terjadi pada atom pusat senyawa $\text{SF}_6$ ($\text{Z S}=16, \text{Z F}=9$) adalah...",
    options: ["sp3", "sp3d", "sp3d2", "dsp2"],
    answer: 2,
    explanation: "Sulfur memiliki 6 elektron valensi dan semuanya berikatan dengan 6 atom F (6 domain elektron). Gabungan 1 orbital s, 3 orbital p, dan 2 orbital d membentuk hibridisasi sp3d2."
  },
  {
    id: 5,
    question: "Suatu molekul netral memiliki rumus VSEPR $AX_4E_2$. Bentuk geometri molekul tersebut adalah...",
    options: [
      "Tetrahedral",
      "Jungkitan (Seesaw)",
      "Segi Empat Planar",
      "Oktahedral"
    ],
    answer: 2,
    explanation: "Tipe AX4E2 memiliki 6 domain elektron (geometri dasar oktahedral) dengan 2 PEB di posisi berseberangan (aksial), sehingga geometri molekulnya adalah Segi Empat Planar."
  },
  {
    id: 6,
    question: "Molekul Karbon Dioksida ($\text{CO}_2$) memiliki ikatan kovalen polar antara C dan O, tetapi molekul $\text{CO}_2$ secara keseluruhan bersifat nonpolar. Hal ini terjadi karena...",
    options: [
      "Bentuk molekul linier sehingga momen dipol kedua ikatan saling meniadakan ($\mu=0$)",
      "Atom C tidak memiliki elektron valensi",
      "Ikatan antara C dan O sangat lemah",
      "Terdapat 2 pasang elektron bebas pada atom pusat C"
    ],
    answer: 0,
    explanation: "CO2 berbentuk Linier ($O=C=O$). Vektor momen dipol dari ikatan C=O berlawanan arah dengan besar sama sehingga saling meniadakan (momen dipol total = 0)."
  },
  {
    id: 7,
    question: "Di antara molekul-molekul berikut:\n1) $\text{CH}_4$\n2) $\text{H}_2\text{O}$\n3) $\text{BeCl}_2$\n4) $\text{PCl}_5$\nMolekul yang atom pusatnya TIDAK memenuhi kaidah oktet (mengalami penyimpangan oktet) adalah...",
    options: ["1 dan 2", "2 dan 3", "3 dan 4", "1 dan 4"],
    answer: 2,
    explanation: "BeCl2 atom pusat Be memiliki 4 elektron valensi di sekitar pusat (oktet kurang). PCl5 atom pusat P memiliki 10 elektron valensi di sekitar pusat (oktet berkembang)."
  },
  {
    id: 8,
    question: "Diketahui nomor atom $\text{S}=16$ dan $\text{F}=9$. Bentuk molekul dari $\text{SF}_4$ adalah...",
    options: [
      "Tetrahedral",
      "Jungkitan / Tetrahedron Terdistorsi (Seesaw)",
      "Segi Empat Planar",
      "Piramida Trigonal"
    ],
    answer: 1,
    explanation: "S (EV=6). Berikatan dengan 4 F -> PEI = 4. PEB = (6 - 4)/2 = 1. Rumus AX4E menghasilkan bentuk molekul Jungkitan (Seesaw)."
  },
  {
    id: 9,
    question: "Berapakah sudut ikatan $\text{F-B-F}$ dalam molekul Boron Trifluorida ($\text{BF}_3$)?",
    options: ["90°", "109,5°", "120°", "180°"],
    answer: 2,
    explanation: "BF3 memiliki bentuk molekul Trigonal Planar (AX3) dengan pembagian ruang simetris 360° / 3 = 120°."
  },
  {
    id: 10,
    question: "Molekul $\text{ICl}_3$ ($\text{Z I}=53, \text{Z Cl}=17$) memiliki 3 ikatan tunggal. Tentukan rumus VSEPR dan bentuk molekulnya!",
    options: [
      "AX3E, Piramida Trigonal",
      "AX3E2, Bentuk T",
      "AX3, Trigonal Planar",
      "AX3E3, Linier"
    ],
    answer: 1,
    explanation: "Iodin memiliki 7 elektron valensi. PEI = 3. PEB = (7 - 3)/2 = 2. Rumus AX3E2 memiliki geometri molekul berbentuk T (T-shaped)."
  }
];