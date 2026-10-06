/* --- 1) IDENTITAS MATERI & PROFIL --- */
const CONFIG = {
  judul:    "Jelajah Bentuk Molekul",
  subJudul: "Teori VSEPR dan Kepolaran Molekul",
  fase:     "Kelas XI / Fase F",
  mapel:    "Kimia",
  unit:     "Ikatan Kimia",
  subUnit:  "Bentuk Molekul",
  tp:       "Murid mampu menganalisis bentuk molekul berdasarkan teori tolakan pasangan elektron (VSEPR) dan hubungannya dengan kepolaran molekul secara tepat dan kritis.",
  logo:     "./asset/img/logo.png",
  bgJudul:  "./asset/img/bg_judul.jpg",
  profil: {
    nama:     "Sukarni",
    instansi: "SMAN 1 Tarumajaya",
    surel:    "sukarni94@guru.sma.belajar.id",
    tahun:    "2026",
    jenis:    "Media Pembelajaran Interaktif (MPI)",
    foto:     "./asset/img/profil.png"
  },
  referensi: {
    materi: [
      "Badan Standar, Kurikulum, dan Asesmen Pendidikan. (2025). Keputusan Kepala BSKAP Nomor 046/H/KR/2025 tentang Capaian Pembelajaran pada Pendidikan Anak Usia Dini, Jenjang Pendidikan Dasar, dan Jenjang Pendidikan Menengah. Kementerian Pendidikan Dasar dan Menengah.",
      "Chang, R., & Goldsby, K. A. (2016). Chemistry (12th ed.). McGraw-Hill Education.",
      "Petrucci, R. H., Herring, F. G., Madura, J. D., & Bissonnette, C. (2017). General Chemistry: Principles and Modern Applications (11th ed.). Pearson."
    ],
    aset: [
      "OpenAI. (2026). ChatGPT (Versi GPT-4o). Seluruh ilustrasi, elemen visual, dan desain dalam media pembelajaran ini dihasilkan melalui prompting pada layanan OpenAI. Ketentuan Penggunaan OpenAI (Terms of Use). https://openai.com/policies/row-terms-of-use/",
      "MyInstants. (2026). Efek suara (sound effect) yang digunakan pada media pembelajaran. Lisensi sesuai ketentuan penggunaan MyInstants. https://www.myinstants.com/"
    ],
    ai: [
      "Ilustrasi dan gambar pada halaman muka dan halaman materi, bermain, dan berlatih dibuat menggunakan ChatGPT.",
      "Seluruh materi, soal, dan pembahasan disusun oleh pengembang."
    ]
  }
};

/* --- 2) BELAJAR — 8 slide sub-materi & kuis + 1 slide Kesimpulan --- */
const MATERI = [
  { judul:"1. Mengapa Bentuk Molekul Itu Penting?", img:"./asset/img/materi_1.png",
    intro:"Anak-anak, pernahkah kalian bertanya mengapa gula larut dalam air, tetapi minyak tidak? Jawabannya ada pada bentuk molekulnya!",
    isi:"<p><b>Bentuk molekul</b> menggambarkan susunan atom-atom dalam satu molekul secara <b>tiga dimensi</b>.</p><ul><li>Bentuk molekul menentukan <b>sudut ikatan</b> antaratom.</li><li>Bersama beda keelektronegatifan, bentuk molekul menentukan <b>kepolaran</b> molekul.</li><li>Kepolaran memengaruhi sifat zat, misalnya kelarutan dan titik didih.</li></ul>",
    kuis:{ tanya:"Bentuk molekul menggambarkan susunan atom dalam ruang ...", o:["dua dimensi","tiga dimensi"], j:1 } },

  { judul:"2. Teori VSEPR: Elektron Saling Tolak", img:"./asset/img/materi_2.png",
    intro:"Bayangkan beberapa balon diikat pada satu titik. Balon-balon itu pasti saling menjauh, bukan? Pasangan elektron pun begitu.",
    isi:"<p><b>VSEPR</b> (<i>Valence Shell Electron Pair Repulsion</i>) adalah teori tolakan pasangan elektron kulit valensi.</p><ul><li>Pasangan elektron bermuatan negatif sehingga saling tolak-menolak.</li><li>Pasangan elektron menempati posisi <b>sejauh mungkin</b> agar tolakannya minimum.</li><li>Susunan pasangan elektron inilah yang menentukan bentuk molekul.</li></ul>",
    kuis:{ tanya:"Agar tolakannya minimum, pasangan elektron pada atom pusat akan berada ...", o:["sejauh mungkin","sedekat mungkin"], j:0 } },

  { judul:"3. Menghitung Domain Elektron", img:"./asset/img/materi_3.png",
    intro:"Langkah pertama meramal bentuk molekul adalah menghitung berapa kelompok elektron di sekitar atom pusat.",
    isi:"<p>Satu <b>domain elektron</b> adalah satu kelompok elektron di sekitar atom pusat.</p><ul><li><b>Pasangan elektron ikatan (PEI)</b>: ikatan tunggal, rangkap dua, maupun rangkap tiga dihitung <b>1 domain</b>.</li><li><b>Pasangan elektron bebas (PEB)</b>: setiap pasangan bebas dihitung <b>1 domain</b>.</li><li>NH₃: 3 PEI + 1 PEB = <b>4 domain</b>.</li><li>CO₂: 2 ikatan rangkap = <b>2 domain</b>.</li></ul>",
    kuis:{ tanya:"Atom pusat pada H₂O memiliki 2 PEI dan 2 PEB. Jumlah domain elektronnya ...", o:["3","4"], j:1 } },

  { judul:"4. Notasi AXₘEₙ dan Susunan Domain", img:"./asset/img/materi_4.png",
    intro:"Ibu punya kode singkat supaya kalian tidak bingung: AXₘEₙ. Setelah itu, kita lihat susunan domainnya.",
    isi:"<p><b>A</b> = atom pusat, <b>X</b> = pasangan elektron ikatan, <b>E</b> = pasangan elektron bebas.</p><ul><li>2 domain: <b>linear</b> (180°)</li><li>3 domain: <b>segitiga datar</b> (120°)</li><li>4 domain: <b>tetrahedral</b> (109,5°)</li><li>5 domain: <b>trigonal bipiramida</b> (120° dan 90°)</li><li>6 domain: <b>oktahedral</b> (90°)</li></ul>",
    kuis:{ tanya:"BF₃ memiliki 3 domain elektron tanpa PEB. Bentuk molekulnya ...", o:["segitiga datar","tetrahedral"], j:0 } },

  { judul:"5. Langkah Meramal Bentuk Molekul", img:"./asset/img/materi_5.png",
    intro:"Sekarang kita berlatih dengan langkah yang runtut. Perhatikan contoh CCl₄ berikut.",
    isi:"<ul><li><b>Langkah 1:</b> jumlahkan elektron di sekitar atom pusat. C = 4 dan 4 atom Cl = 4, total <b>8 elektron</b>.</li><li><b>Langkah 2:</b> bagi 2, diperoleh <b>4 domain</b>.</li><li><b>Langkah 3:</b> 4 domain berarti susunan <b>tetrahedral</b>.</li><li><b>Langkah 4:</b> tidak ada PEB (AX₄), jadi bentuk molekulnya <b>tetrahedral</b>.</li></ul><p>Cara hitung ini cocok untuk atom pusat yang berikatan tunggal dengan atom lain.</p>",
    kuis:{ tanya:"CCl₄ berumus AX₄. Bentuk molekulnya ...", o:["piramida trigonal","tetrahedral"], j:1 } },

  { judul:"6. Pengaruh Pasangan Elektron Bebas", img:"./asset/img/materi_6.png",
    intro:"Ini bagian serunya! PEB menempati ruang lebih besar sehingga tolakannya lebih kuat daripada PEI.",
    isi:"<p>Urutan kekuatan tolakan: <b>PEB–PEB &gt; PEB–PEI &gt; PEI–PEI</b>.</p><ul><li><b>CH₄</b> (AX₄): tetrahedral, 109,5°.</li><li><b>NH₃</b> (AX₃E): <b>piramida trigonal</b>, sudut ±107°.</li><li><b>H₂O</b> (AX₂E₂): <b>bengkok</b>, sudut ±104,5°.</li><li><b>SF₄</b> (AX₄E): <b>jungkat-jungkit</b> (tetrahedral terdistorsi).</li><li><b>XeF₂</b> (AX₂E₃): tetap <b>linear</b> (180°).</li></ul>",
    kuis:{ tanya:"Sudut ikatan NH₃ lebih kecil daripada CH₄ karena adanya ...", o:["pasangan elektron bebas","ikatan rangkap"], j:0 } },

  { judul:"7. Bentuk Molekul dan Kepolaran", img:"./asset/img/materi_7.png",
    intro:"Sekarang kita hubungkan bentuk dengan kepolaran. Ingat, bentuk saja belum cukup; beda keelektronegatifan juga ikut menentukan.",
    isi:"<p>Ikatan polar menimbulkan <b>momen dipol</b>. Kepolaran molekul ditentukan oleh resultan momen dipol dari seluruh ikatan.</p><ul><li><b>Simetris</b>: momen dipol saling meniadakan, molekul <b>nonpolar</b> (CO₂, BF₃, CCl₄, XeF₂).</li><li><b>Tidak simetris</b>: resultan tidak nol, molekul <b>polar</b> (H₂O, NH₃, CHCl₃).</li></ul>",
    kuis:{ tanya:"CO₂ berbentuk linear dan simetris, sehingga molekulnya bersifat ...", o:["polar","nonpolar"], j:1 } },

  { judul:"8. Contoh Lengkap: NH₃", img:"./asset/img/materi_8.png",
    intro:"Mari kita gabungkan semua langkah untuk meramal bentuk dan kepolaran NH₃.",
    isi:"<ul><li>Elektron di sekitar N: N = 5 dan 3 atom H = 3, total 8, berarti <b>4 domain</b> (susunan tetrahedral).</li><li>PEI = 3 dan PEB = 1, jadi notasinya <b>AX₃E</b>.</li><li>PEB menolak lebih kuat, sehingga bentuknya <b>piramida trigonal</b> dengan sudut ±107°.</li><li>Bentuknya tidak simetris, sehingga NH₃ bersifat <b>polar</b>.</li></ul>",
    kuis:{ tanya:"Bentuk molekul NH₃ (AX₃E) adalah ...", o:["piramida trigonal","segitiga datar"], j:0 } },

  { judul:"9. Kesimpulan", img:"./asset/img/materi_9.png",
    intro:"Bagus, anak-anak. Sekarang rangkumlah bentuk molekul sebagai satu alur yang utuh.",
    isi:"<ul><li>Pasangan elektron saling tolak dan menempati posisi <b>sejauh mungkin</b> (teori VSEPR).</li><li>Hitung <b>domain elektron</b> (PEI + PEB) pada atom pusat, lalu tentukan notasi <b>AXₘEₙ</b>.</li><li>Domain elektron menentukan susunan: linear, segitiga datar, tetrahedral, trigonal bipiramida, oktahedral.</li><li><b>PEB</b> menolak lebih kuat sehingga sudut ikatan mengecil (NH₃ ±107°, H₂O ±104,5°).</li><li>Molekul <b>simetris</b> bersifat nonpolar, molekul <b>tidak simetris</b> bersifat polar.</li></ul><p><b>Pesan Ibu:</b> jangan menghafal bentuk satu per satu. Hitung domainnya, cari PEB-nya, lalu periksa simetrinya.</p>"
  }
];

/* --- 3) BERMAIN — 10 permainan --- */
const dataBermain = [
  { t:'jodoh', sub:'Domain dan Bentuk Molekul', ins:'Anak-anak, jodohkan jumlah domain elektron (tanpa PEB) dengan bentuk molekulnya!',
    pairs:[{n:1,teks:'2 domain elektron (AX₂)'},{n:2,teks:'3 domain elektron (AX₃)'},{n:3,teks:'4 domain elektron (AX₄)'}],
    imgs:[{n:1,i:'./asset/img/game_linear.png',name:'Linear'},{n:2,i:'./asset/img/game_segitiga.png',name:'Segitiga datar'},{n:3,i:'./asset/img/game_tetrahedral.png',name:'Tetrahedral'}] },

  { t:'klik', sub:'Pilih Molekul Bengkok', ins:'Manakah molekul yang berbentuk bengkok (AX₂E₂)? Pilih yang tepat!',
    opsi:[
      {imgPath:'./asset/img/game_h2o.png', t:'H₂O', b:true, msg:'Benar. H₂O memiliki 2 PEI dan 2 PEB (AX₂E₂) sehingga bentuknya bengkok.'},
      {imgPath:'./asset/img/game_co2.png', t:'CO₂', b:false, msg:'CO₂ tidak memiliki PEB pada atom pusat (AX₂) sehingga bentuknya linear.'},
      {imgPath:'./asset/img/game_ch4.png', t:'CH₄', b:false, msg:'CH₄ adalah AX₄ sehingga bentuknya tetrahedral.'},
      {imgPath:'./asset/img/game_bf3.png', t:'BF₃', b:false, msg:'BF₃ adalah AX₃ sehingga bentuknya segitiga datar.'}
    ] },

  { t:'urut', sub:'Urutkan Langkah VSEPR', ins:'Susun langkah meramal bentuk molekul dengan teori VSEPR dari awal sampai akhir!',
    urut:['Hitung jumlah elektron di sekitar atom pusat','Tentukan jumlah domain elektron','Tentukan susunan domain elektron','Tentukan bentuk molekul dengan memperhitungkan PEB','Periksa simetri untuk menentukan kepolaran'] },

  { t:'kumpul', sub:'Kumpulkan Molekul Linear', ins:'Ketuk hanya gambar molekul yang berbentuk LINEAR. Hindari bentuk lain!',
    benar:'./asset/img/game_linear_co2.png',
    salah:['./asset/img/game_bengkok_h2o.png','./asset/img/game_tetra_ch4.png'] },

  { t:'sambung', sub:'Sambung Konsep Tolakan', ins:'Pilih lanjutan pernyataan yang paling tepat!',
    hasil:'PEB menolak lebih kuat daripada PEI, sehingga sudut ikatan NH₃ menjadi lebih kecil daripada CH₄.',
    steps:[
      { prev:'Pasangan elektron pada atom pusat saling tolak sehingga posisinya ...', benar:'sejauh mungkin', salah:['sedekat mungkin','tidak beraturan'] },
      { prev:'Tolakan yang paling kuat terjadi antara ...', benar:'PEB dan PEB', salah:['PEI dan PEI','dua atom terminal'] },
      { prev:'Sudut ikatan NH₃ (±107°) lebih kecil daripada CH₄ (109,5°) karena ...', benar:'adanya satu PEB pada atom N', salah:['adanya ikatan rangkap pada atom N','ukuran atom H yang lebih besar'] }
    ] },

  { t:'jodoh', sub:'Rumus AXₘEₙ dan Bentuk', ins:'Jodohkan notasi AXₘEₙ dengan bentuk molekul yang sesuai!',
    pairs:[{n:1,teks:'AX₃E (contoh: NH₃)'},{n:2,teks:'AX₂E₂ (contoh: H₂O)'},{n:3,teks:'AX₆ (contoh: SF₆)'}],
    imgs:[{n:1,i:'./asset/img/game_piramida.png',name:'Piramida trigonal'},{n:2,i:'./asset/img/game_bengkok.png',name:'Bengkok'},{n:3,i:'./asset/img/game_oktahedral.png',name:'Oktahedral'}] },

  { t:'klik', sub:'Pilih Molekul Nonpolar', ins:'Pilih molekul yang bersifat NONPOLAR karena bentuknya simetris!',
    opsi:[
      {imgPath:'./asset/img/game_ccl4.png', t:'CCl₄', b:true, msg:'Tepat. CCl₄ tetrahedral simetris sehingga momen dipol ikatan C–Cl saling meniadakan.'},
      {imgPath:'./asset/img/game_h2o.png', t:'H₂O', b:false, msg:'H₂O bengkok dan tidak simetris sehingga bersifat polar.'},
      {imgPath:'./asset/img/game_nh3.png', t:'NH₃', b:false, msg:'NH₃ piramida trigonal dan tidak simetris sehingga bersifat polar.'},
      {imgPath:'./asset/img/game_chcl3.png', t:'CHCl₃', b:false, msg:'CHCl₃ tetrahedral tetapi atom terikatnya berbeda sehingga tidak simetris dan bersifat polar.'}
    ] },

  { t:'urut', sub:'Urutkan Penentuan Kepolaran', ins:'Susun langkah menentukan kepolaran molekul dari awal sampai akhir!',
    urut:['Gambarkan bentuk molekul dengan teori VSEPR','Tentukan ikatan yang polar dari beda keelektronegatifan','Gambarkan arah momen dipol tiap ikatan','Jumlahkan momen dipol (resultan)','Simpulkan: resultan nol berarti nonpolar, resultan tidak nol berarti polar'] },

  { t:'kumpul', sub:'Kumpulkan Molekul Polar', ins:'Ketuk hanya gambar molekul yang bersifat POLAR. Hindari yang nonpolar!',
    benar:'./asset/img/game_polar_h2o.png',
    salah:['./asset/img/game_nonpolar_co2.png','./asset/img/game_nonpolar_bf3.png'] },

  { t:'sambung', sub:'Sambung Bentuk dan Kepolaran', ins:'Lengkapi hubungan bentuk molekul dan kepolaran berikut!',
    hasil:'H₂O berbentuk bengkok dan tidak simetris sehingga polar, sedangkan CO₂ linear dan simetris sehingga nonpolar.',
    steps:[
      { prev:'H₂O memiliki 2 PEI dan 2 PEB sehingga bentuknya ...', benar:'bengkok', salah:['linear','segitiga datar'] },
      { prev:'Karena bentuknya bengkok, momen dipol kedua ikatan O–H ...', benar:'tidak saling meniadakan', salah:['saling meniadakan','bernilai nol'] },
      { prev:'Pada CO₂ yang linear, momen dipol kedua ikatan C=O saling meniadakan sehingga molekulnya ...', benar:'nonpolar', salah:['polar','bersifat ionik'] }
    ] }
];

/* --- 4) BERLATIH — 10 soal evaluasi --- */
const dtLatih = [
  { t:'pg',
    stimulus:'<b>Perhatikan:</b> Atom pusat S pada SF₄ memiliki 4 pasangan elektron ikatan dan 1 pasangan elektron bebas.',
    soal:'Notasi VSEPR dan susunan domain elektron SF₄ yang tepat adalah ...',
    opsi:['AX₄; tetrahedral','AX₄E; tetrahedral','AX₄E; trigonal bipiramida','AX₅; trigonal bipiramida','AX₃E₂; oktahedral'], j:2,
    msg:'S memiliki 4 PEI dan 1 PEB sehingga notasinya AX₄E dengan 5 domain. Susunan 5 domain adalah trigonal bipiramida, dan bentuk molekulnya jungkat-jungkit.' },

  { t:'bs', soal:'CH₄ dan NH₃ sama-sama memiliki 4 domain elektron, sehingga sudut ikatan keduanya pasti sama besar.', j:false,
    msg:'Pernyataan salah. Sudut CH₄ adalah 109,5°, sedangkan NH₃ sekitar 107° karena 1 PEB pada NH₃ menolak PEI lebih kuat.' },

  { t:'drag_word', soal:'Lengkapi kalimat: molekul NH₃ memiliki <span class="blank-slot" data-id="1">___</span> pasangan elektron ikatan dan <span class="blank-slot" data-id="2">___</span> pasangan elektron bebas.', w:['3','1','2','4'], j:['3','1'],
    msg:'Atom N memiliki 5 elektron valensi. Tiga di antaranya berikatan dengan 3 atom H, sisanya membentuk 1 pasangan elektron bebas.' },

  { t:'pg_kompleks',
    soal:'Pilih semua molekul yang berbentuk linear.',
    opsi:['CO₂','BeH₂','H₂O','XeF₂','NH₃'], j:[0,1,3],
    msg:'CO₂ (AX₂), BeH₂ (AX₂), dan XeF₂ (AX₂E₃) berbentuk linear. H₂O bengkok dan NH₃ piramida trigonal.' },

  { t:'jodoh', soal:'Jodohkan molekul dengan bentuknya!',
    pairs:[{n:1,t:'BF₃ (AX₃)'},{n:2,t:'SF₆ (AX₆)'},{n:3,t:'PF₅ (AX₅)'}],
    imgs:[{n:1,i:'./asset/img/latih_segitiga.png',name:'Segitiga datar'},{n:2,i:'./asset/img/latih_oktahedral.png',name:'Oktahedral'},{n:3,i:'./asset/img/latih_bipiramida.png',name:'Trigonal bipiramida'}],
    msg:'BF₃ (3 domain) berbentuk segitiga datar, SF₆ (6 domain) oktahedral, dan PF₅ (5 domain) trigonal bipiramida.' },

  { t:'pg', soal:'Sudut ikatan H–O–H pada H₂O (±104,5°) lebih kecil daripada H–N–H pada NH₃ (±107°). Penyebab utamanya adalah ...',
    opsi:['Atom O lebih kecil daripada atom N','H₂O tidak memiliki PEB','Ikatan O–H berupa ikatan rangkap','H₂O memiliki 2 PEB yang menolak lebih kuat daripada 1 PEB pada NH₃','NH₃ memiliki 4 pasangan elektron ikatan'], j:3,
    msg:'H₂O memiliki 2 PEB, sedangkan NH₃ hanya 1 PEB. Semakin banyak PEB, semakin kuat tolakan terhadap PEI sehingga sudut ikatan semakin kecil.' },

  { t:'bs', soal:'Molekul yang memiliki ikatan polar pasti bersifat polar.', j:false,
    msg:'Pernyataan salah. CO₂ memiliki ikatan C=O yang polar, tetapi bentuknya linear dan simetris sehingga momen dipol saling meniadakan dan molekulnya nonpolar.' },

  { t:'pg_kompleks',
    stimulus:'Diketahui keelektronegatifan: C = 2,5; H = 2,1; Cl = 3,0.',
    soal:'Pilih semua pernyataan yang benar tentang CCl₄ dan CHCl₃.',
    opsi:['CCl₄ berbentuk tetrahedral','Momen dipol ikatan C–Cl pada CCl₄ saling meniadakan','CCl₄ bersifat polar','CHCl₃ bersifat polar karena bentuknya tidak simetris','CHCl₃ berbentuk linear'], j:[0,1,3],
    msg:'CCl₄ tetrahedral simetris sehingga nonpolar. CHCl₃ juga tetrahedral, tetapi atom terikatnya berbeda (H dan Cl) sehingga tidak simetris dan polar.' },

  { t:'drag_word', soal:'Molekul yang bentuknya <span class="blank-slot" data-id="1">___</span> memiliki resultan momen dipol <span class="blank-slot" data-id="2">___</span>, sehingga bersifat <span class="blank-slot" data-id="3">___</span>.', w:['simetris','nol','nonpolar','polar','tidak simetris'], j:['simetris','nol','nonpolar'],
    msg:'Pada molekul simetris, momen dipol tiap ikatan saling meniadakan sehingga resultannya nol dan molekul bersifat nonpolar.' },

  { t:'jodoh', soal:'Jodohkan ciri molekul dengan contohnya!',
    pairs:[{n:1,t:'Bengkok dan polar'},{n:2,t:'Tetrahedral simetris dan nonpolar'},{n:3,t:'Piramida trigonal dan polar'}],
    imgs:[{n:1,i:'./asset/img/latih_h2o.png',name:'H₂O'},{n:2,i:'./asset/img/latih_ccl4.png',name:'CCl₄'},{n:3,i:'./asset/img/latih_nh3.png',name:'NH₃'}],
    msg:'H₂O (AX₂E₂) bengkok dan polar, CCl₄ (AX₄) tetrahedral simetris dan nonpolar, NH₃ (AX₃E) piramida trigonal dan polar.' }
];
