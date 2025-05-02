const defaultSourcePage = "badan-usaha";

const lembagaHukumKeywords = [
    // Yayasan
    "pendirian yayasan",
    "akta notaris yayasan",
    "pengurus yayasan",
    "legalitas yayasan",
    "yayasan pendidikan",
    "NPWP yayasan",
    "izin operasional yayasan",
    "badan hukum yayasan",
    "anggaran dasar yayasan",
    "perubahan data yayasan",
  
    // Firma Hukum
    "pendirian firma hukum",
    "firma advokat",
    "akta firma hukum",
    "biaya firma hukum",
    "NPWP firma hukum",
    "firma hukum dan OSS",
    "nama firma hukum",
    "layanan firma hukum",
    "pengacara dalam firma",
    "firma hukum besar",
  
    // Perkumpulan / Asosiasi
    "pendirian perkumpulan",
    "bikin asosiasi resmi",
    "struktur organisasi asosiasi",
    "asosiasi profesi",
    "legalitas asosiasi",
    "SK Kemenkumham asosiasi",
    "asosiasi bidang sosial",
    "peraturan asosiasi",
    "asosiasi terdaftar",
    "asosiasi berbadan hukum"
  ];
  
const BadanUsahaPackagesRaw = [
    {
        type: "Pendirian Yayasan",
        price: 4000000,
        priceOriginal: 6820000,
        link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo%20MinGans!%20Aku%20mau%20konsultasi%20terkait%20Pendirian%20Yayasan%20nih!%20",
        discount: 36,
        features: [
            { feature: "Free Konsultasi", status: true },
            { feature: "Pesan Nama Yayasan", status: true },
            { feature: "Akta Pendirian Yayasan", status: true },
            { feature: "Surat Keputusan Kemenkumham", status: true },
            { feature: "NPWP Yayasan", status: true },
            { feature: "Surat Keterangan Terdaftar Pajak Yayasan (SKT)", status: true },
            { feature: "Nomor Induk Berusaha (NIB)", status: true },
            { feature: "Pernyataan Mandiri OSS (K3L, Tata Ruang dan SPPL)", status: true },
            { feature: "Sertifikat Standar (Jika resiko KBLI Menengah Rendah)", status: true },
            { feature: "Hak Akses OSS", status: true },
            { feature: "Free Email Yayasan", status: true },
            { feature: "Free Stempel Nama Yayasan", status: true }
        ]
    },
    {
        type: "Pendirian Perkumpulan/Asosiasi",
        price: 4000000,
        priceOriginal: 6820000,
        link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo%20MinGans!%20Aku%20mau%20konsultasi%20terkait%20Pendirian%20Asosiasi/Perkumpulan%20nih!%20",
        discount: 36,
        features: [
            { feature: "Free Konsultasi", status: true },
            { feature: "Pesan Nama Perkumpulan", status: true },
            { feature: "Akta Pendirian Yayasan", status: true },
            { feature: "Surat Keputusan Kemenkumham", status: true },
            { feature: "NPWP Yayasan", status: true },
            { feature: "Surat Keterangan Terdaftar Pajak Yayasan (SKT)", status: true },
            { feature: "Nomor Induk Berusaha (NIB)", status: true },
            { feature: "Pernyataan Mandiri OSS (K3L, Tata Ruang dan SPPL)", status: true },
            { feature: "Sertifikat Standar (Jika resiko KBLI Menengah Rendah)", status: true },
            { feature: "Hak Akses OSS", status: true },
            { feature: "Free Email Perkumpulan", status: true },
            { feature: "Free Stempel Nama Perkumpulan", status: true }
        ]
    },
    {
        type: "Pendirian Firma Hukum",
        price: 3000000,
        priceOriginal: 4710000,
        link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo%20MinGans!%20Aku%20mau%20konsultasi%20terkait%20Pendirian%20Firma%20Hukum%20nih!%20",
        discount: 36,
        features: [
            { feature: "Free Konsultasi", status: true },
            { feature: "Pesan Nama Firma Hukum", status: true },
            { feature: "Akta Pendirian Perkumpulan", status: true },
            { feature: "Surat Keputusan Kemenkumham", status: true },
            { feature: "NPWP Yayasan", status: true },
            { feature: "Surat Keterangan Terdaftar Pajak Yayasan (SKT)", status: true },
            { feature: "Nomor Induk Berusaha (NIB)", status: true },
            { feature: "Pernyataan Mandiri OSS (K3L, Tata Ruang dan SPPL)", status: true },
            { feature: "Sertifikat Standar (Jika resiko KBLI Menengah Rendah)", status: true },
            { feature: "Hak Akses OSS", status: true },
            { feature: "Free Email Firma Hukum", status: true },
            { feature: "Free Stempel Firma Hukum", status: true }
        ]
    },
];

export const BadanUsahaPackages = BadanUsahaPackagesRaw.map((pkg) => ({
    ...pkg,
    sourcePage: pkg.sourcePage || defaultSourcePage,
    keywords: pkg.keywords?.length ? pkg.keywords : lembagaHukumKeywords,
}));