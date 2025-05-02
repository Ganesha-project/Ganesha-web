const defaultSourcePage = "pendirian-pt";

// Keywords by product
const ptKeywords = [
    "legalitas pt",
    "pendirian pt",
    "jasa pembuatan pt",
    "bikin pt murah",
    "pt cepat",
    "akta pendirian pt",
    "surat keputusan kemenkumham",
    "nib pt",
    "npwp badan",
    "izin usaha online",
    "pt dasar"
];
const pmaKeywords = [
    "pendirian PT PMA",
    "izin investasi asing",
    "modal asing di Indonesia",
    "syarat pendirian PT PMA",
    "struktur kepemilikan asing",
    "investasi asing langsung",
    "izin usaha PMA",
    "pendaftaran PT PMA",
    "legalitas usaha asing",
    "pengurusan PT PMA",
    "akomodasi investor asing",
    "prosedur pendirian PT PMA",
    "penanaman modal asing",
    "badan usaha asing",
    "regulasi PT PMA"
];
const pkpNibKeywords = [
    "pengurusan PKP",
    "pengukuhan PKP",
    "PKP pajak",
    "cara daftar PKP",
    "dokumen PKP",
    "NPWP dan PKP",
    "apa itu PKP",
    "syarat menjadi PKP",
    "pengajuan PKP online",
    "pengurusan NIB",
    "Nomor Induk Berusaha",
    "daftar NIB OSS",
    "NIB dan izin usaha",
    "OSS RBA",
    "legalitas usaha NIB"
];


// Packages
const PTPackagesRaw = [
    {
        type: "PT DASAR",
        price: 4500000,
        priceOriginal: 8550000,
        link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo%20MinGans!%20Aku%20mau%20konsultasi%20terkait%20Pembuatan%20PT%20nih!%20",
        discount: 36,
        features: [
            { feature: "Free Konsultasi", status: true },
            { feature: "Akta Pendirian Perusahaan", status: true },
            { feature: "Surat Keputusan Kemenkumham", status: true },
            { feature: "NPWP Badan", status: true },
            { feature: "Surat Keterangan Terdaftar Pajak ( SKT )", status: true },
            { feature: "Efin Badan", status: true },
            { feature: "Nomor Induk Berusaha ( NIB )", status: true },
            { feature: "Pernyataan Mandiri OSS ( K3L, Tata Ruang dan SPPL )", status: true },
            { feature: "Sertifikat Standar ( Jika resiko KBLI Menengah Rendah )", status: true },
            { feature: "Hak Akses OSS", status: true },
            { feature: "Free Account Gmail", status: true },
            { feature: "Free Stempel Nama Perusahaan", status: true },
            { feature: "Free Template Laporan Keuangan", status: true },
            { feature: "Kop Surat", status: false },
            { feature: "Logo Perusahaan", status: false },
            { feature: "Company Profile", status: false },
            { feature: "Kartu Nama", status: false },
            { feature: "Invoice", status: false },
            { feature: "Surat Pengukuhan Kena Pajak ( SPPKP )", status: false },
            { feature: "Sertifikat Elektronik", status: false },
            { feature: "Website Company", status: false },
            { feature: "Logo Perusahaan", status: false }
        ]
    },
    {
        sourcePage: "pendirian-pt",
        keywords: [],
        type: "PT LENGKAP",
        price: 5000000,
        priceOriginal: 9500000,
        link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo%20MinGans!%20Aku%20mau%20konsultasi%20terkait%20Pembuatan%20PT%20nih!%20",
        discount: 36,
        features: [
            { feature: "Free Konsultasi", status: true },
            { feature: "Akta Pendirian Perusahaan", status: true },
            { feature: "Surat Keputusan Kemenkumham", status: true },
            { feature: "NPWP Badan", status: true },
            { feature: "Surat Keterangan Terdaftar Pajak ( SKT )", status: true },
            { feature: "Efin Badan", status: true },
            { feature: "Nomor Induk Berusaha ( NIB )", status: true },
            { feature: "Pernyataan Mandiri OSS ( K3L, Tata Ruang dan SPPL )", status: true },
            { feature: "Sertifikat Standar ( Jika resiko KBLI Menengah Rendah )", status: true },
            { feature: "Hak Akses OSS", status: true },
            { feature: "Free Account Gmail", status: true },
            { feature: "Free Stempel Nama Perusahaan", status: true },
            { feature: "Free Template Laporan Keuangan", status: true },
            { feature: "Kop Surat", status: true },
            { feature: "Logo Perusahaan", status: true },
            { feature: "Company Profile", status: true },
            { feature: "Kartu Nama", status: true },
            { feature: "Invoice", status: true },
            { feature: "Surat Pengukuhan Kena Pajak ( SPPKP )", status: false },
            { feature: "Sertifikat Elektronik", status: false },
            { feature: "Website Company", status: false },
            { feature: "Logo Perusahaan", status: false }
        ]
    },
    {
        sourcePage: "pendirian-pt",
        keywords: [],
        type: "PT LENGKAP + PKP",
        price: 6000000,
        priceOriginal: 11400000,
        link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo%20MinGans!%20Aku%20mau%20konsultasi%20terkait%20Pembuatan%20PT%20nih!%20",
        discount: 36,
        features: [
            { feature: "Free Konsultasi", status: true },
            { feature: "Akta Pendirian Perusahaan", status: true },
            { feature: "Surat Keputusan Kemenkumham", status: true },
            { feature: "NPWP Badan", status: true },
            { feature: "Surat Keterangan Terdaftar Pajak ( SKT )", status: true },
            { feature: "Efin Badan", status: true },
            { feature: "Nomor Induk Berusaha ( NIB )", status: true },
            { feature: "Pernyataan Mandiri OSS ( K3L, Tata Ruang dan SPPL )", status: true },
            { feature: "Sertifikat Standar ( Jika resiko KBLI Menengah Rendah )", status: true },
            { feature: "Hak Akses OSS", status: true },
            { feature: "Free Account Gmail", status: true },
            { feature: "Free Stempel Nama Perusahaan", status: true },
            { feature: "Free Template Laporan Keuangan", status: true },
            { feature: "Kop Surat", status: true },
            { feature: "Logo Perusahaan", status: true },
            { feature: "Company Profile", status: true },
            { feature: "Kartu Nama", status: true },
            { feature: "Invoice", status: true },
            { feature: "Surat Pengukuhan Kena Pajak ( SPPKP )", status: true },
            { feature: "Sertifikat Elektronik", status: true },
            { feature: "Website Company", status: false },
            { feature: "Logo Perusahaan", status: false }
        ]
    },
    {
        sourcePage: "pendirian-pt",
        keywords: [],
        type: "PT LENGKAP + WEBSITE COMPANY",
        price: 6500000,
        priceOriginal: 10205000,
        link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo%20MinGans!%20Aku%20mau%20konsultasi%20terkait%20Pembuatan%20PT%20nih!%20",
        discount: 36,
        features: [
            { feature: "Free Konsultasi", status: true },
            { feature: "Akta Pendirian Perusahaan", status: true },
            { feature: "Surat Keputusan Kemenkumham", status: true },
            { feature: "NPWP Badan", status: true },
            { feature: "Surat Keterangan Terdaftar Pajak ( SKT )", status: true },
            { feature: "Efin Badan", status: true },
            { feature: "Nomor Induk Berusaha ( NIB )", status: true },
            { feature: "Pernyataan Mandiri OSS ( K3L, Tata Ruang dan SPPL )", status: true },
            { feature: "Sertifikat Standar ( Jika resiko KBLI Menengah Rendah )", status: true },
            { feature: "Hak Akses OSS", status: true },
            { feature: "Free Account Gmail", status: true },
            { feature: "Free Stempel Nama Perusahaan", status: true },
            { feature: "Free Template Laporan Keuangan", status: true },
            { feature: "Kop Surat", status: true },
            { feature: "Logo Perusahaan", status: true },
            { feature: "Company Profile", status: true },
            { feature: "Kartu Nama", status: true },
            { feature: "Invoice", status: true },
            { feature: "Website Company", status: true },
            { feature: "Surat Pengukuhan Kena Pajak ( SPPKP )", status: false },
            { feature: "Sertifikat Elektronik", status: false }
        ]
    },
    {
        sourcePage: "pendirian-pt",
        keywords: [],
        type: "PT LENGKAP + PKP + WEBSITE COMPANY",
        price: 7000000,
        priceOriginal: 10990000,
        link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo%20MinGans!%20Aku%20mau%20konsultasi%20terkait%20Pembuatan%20PT%20nih!%20",
        discount: 36,
        features: [
            { feature: "Free Konsultasi", status: true },
            { feature: "Akta Pendirian Perusahaan", status: true },
            { feature: "Surat Keputusan Kemenkumham", status: true },
            { feature: "NPWP Badan", status: true },
            { feature: "Surat Keterangan Terdaftar Pajak ( SKT )", status: true },
            { feature: "Efin Badan", status: true },
            { feature: "Nomor Induk Berusaha ( NIB )", status: true },
            { feature: "Pernyataan Mandiri OSS ( K3L, Tata Ruang dan SPPL )", status: true },
            { feature: "Sertifikat Standar ( Jika resiko KBLI Menengah Rendah )", status: true },
            { feature: "Hak Akses OSS", status: true },
            { feature: "Free Account Gmail", status: true },
            { feature: "Free Stempel Nama Perusahaan", status: true },
            { feature: "Free Template Laporan Keuangan", status: true },
            { feature: "Kop Surat", status: true },
            { feature: "Logo Perusahaan", status: true },
            { feature: "Company Profile", status: true },
            { feature: "Kartu Nama", status: true },
            { feature: "Invoice", status: true },
            { feature: "Website Company", status: true },
            { feature: "Surat Pengukuhan Kena Pajak ( SPPKP )", status: true },
            { feature: "Sertifikat Elektronik", status: true }
        ]
    },
    {
        sourcePage: "pendirian-pt",
        keywords: [],
        type: "PAKET SILVER PT PERORANGAN (1 Hari Kerja)",
        price: 600000,
        priceOriginal: 942000,
        link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo%20MinGans!%20Aku%20mau%20konsultasi%20terkait%20Pembuatan%20PT%20nih!%20",
        discount: 36,
        features: [
            { feature: "Free Konsultasi", status: true },
            { feature: "Pesan Nama PT Perorangan", status: true },
            { feature: "Surat Keputusan Kemenkumham", status: true },
            { feature: "Surat Pernyataan Kemenkumham", status: true },
            { feature: "NPWP PT Perorangan", status: true },
            { feature: "Surat Keterangan Terdaftar Pajak PT (SKT)", status: true },
            { feature: "Nomor Induk Berusaha (NIB)", status: true },
            { feature: "Pernyataan Mandiri OSS (K3L, Tata Ruang dan SPPL)", status: true },
            { feature: "Sertifikat Standar (Jika resiko KBLI Menengah Rendah)", status: true },
            { feature: "Hak Akses OSS", status: true },
            { feature: "Free Email PT Perorangan", status: true },
            { feature: "Free Stempel PT Perorangan", status: true },
            { feature: "Kop Surat", status: false },
            { feature: "Logo Perusahaan", status: false },
            { feature: "Company Profile", status: false },
            { feature: "Kartu Nama", status: false },
            { feature: "Invoice", status: false },
            { feature: "Surat Pengukuhan Kena Pajak (SPPKP)", status: false },
            { feature: "Sertifikat Elektronik", status: false },
            { feature: "Website Company", status: false }
        ]
    },
    {
        sourcePage: "pendirian-pt",
        keywords: [],
        type: "PAKET GOLD PT PERORANGAN (2 Hari Kerja)",
        price: 1500000,
        priceOriginal: 2350000,
        link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo%20MinGans!%20Aku%20mau%20konsultasi%20terkait%20Pembuatan%20PT%20nih!%20",
        discount: 36,
        features: [
            { feature: "Free Konsultasi", status: true },
            { feature: "Pesan Nama PT Perorangan", status: true },
            { feature: "Akta Penegasan Pendirian", status: true },
            { feature: "Surat Keputusan Kemenkumham", status: true },
            { feature: "Surat Pernyataan Kemenkumham", status: true },
            { feature: "NPWP PT Perorangan", status: true },
            { feature: "Surat Keterangan Terdaftar Pajak PT (SKT)", status: true },
            { feature: "Nomor Induk Berusaha (NIB)", status: true },
            { feature: "Pernyataan Mandiri OSS (K3L, Tata Ruang dan SPPL)", status: true },
            { feature: "Sertifikat Standar (Jika resiko KBLI Menengah Rendah)", status: true },
            { feature: "Hak Akses OSS", status: true },
            { feature: "Free Email PT Perorangan", status: true },
            { feature: "Free Stempel PT Perorangan", status: true },
            { feature: "Kop Surat", status: false },
            { feature: "Logo Perusahaan", status: false },
            { feature: "Company Profile", status: false },
            { feature: "Kartu Nama", status: false },
            { feature: "Invoice", status: false },
            { feature: "Surat Pengukuhan Kena Pajak (SPPKP)", status: false },
            { feature: "Sertifikat Elektronik", status: false },
            { feature: "Website Company", status: false }
        ]
    }
];

const PMAPackagesRaw = [
    {
        sourcePage: "pendirian-pt",
        keywords: [],
        type: "PT PMA (Penanaman Modal Asing)",
        price: 7500000,
        priceOriginal: 11625000,
        link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo%20MinGans!%20Aku%20mau%20konsultasi%20terkait%20Pembuatan%20PT%20PMA%20nih!%20",
        discount: 36,
        features: [
            { feature: "Free Konsultasi", status: true },
            { feature: "Akta Pendirian Perusahaan", status: true },
            { feature: "Surat Keputusan Kemenkumham", status: true },
            { feature: "NPWP Badan", status: true },
            { feature: "Surat Keterangan Terdaftar Pajak ( SKT )", status: true },
            { feature: "Efin Badan", status: true },
            { feature: "Nomor Induk Berusaha ( NIB )", status: true },
            { feature: "Pernyataan Mandiri OSS ( K3L dan  SPPL )", status: true },
            { feature: "KKKPR ( Konfirmasi Kesesuaian Kegiatan Pemanfaatan Ruang )", status: true },
            { feature: "Sertifikat Standar ( Jika resiko KBLI Menengah Rendah )", status: true },
            { feature: "Hak Akses OSS", status: true },
            { feature: "Free Stempel Nama Perusahaan", status: true },
            { feature: "Free Template Laporan Keuangan", status: true },
        ]
    }
];

const ExtrasPackagesRaw = [
    {
        sourcePage: "pendirian-pt",
        keywords: [],
        type: "Pengurusan PKP (Pengusaha Kena Pajak)",
        price: 1500000,
        priceOriginal: 2500000,
        link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo%20MinGans!%20Aku%20mau%20konsultasi%20terkait%20Pengurusan%20PKP%20nih!%20",
        discount: 40,
        features: [
            { feature: "Free Consultasi", status: true },
            { feature: "SPPKP (Surat Pengukuhan Pengusaha Kena Pajak)", status: true },
            { feature: "Sertifikat Elektronik (SE)", status: true }
        ]
    },
    {
        sourcePage: "pendirian-pt",
        keywords: [],
        type: "Pengurusan NIB (Nomor Induk Berusaha)",
        price: 500000,
        priceOriginal: 1000000,
        link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo%20MinGans!%20Aku%20mau%20konsultasi%20terkait%20Pengurusan%20NIB%20nih!%20",
        discount: 50,
        features: [
            { feature: "NIB (Nomor Induk Berusaha)", status: true },
            { feature: "Pernyataan Mandiri (K3L, SPPL dan Tata Ruang)", status: true },
            { feature: "Sertifikat Standar (Jika Skala Resiko Menengah Rendah)", status: true },
            { feature: "Hak Akses OSS", status: true }
        ]
    }
]


// Combined Exports 
export const PTPackages = PTPackagesRaw.map((pkg) => ({
    ...pkg,
    sourcePage: pkg.sourcePage || defaultSourcePage,
    keywords: pkg.keywords?.length ? pkg.keywords : ptKeywords,
}));

export const PMAPackages = PMAPackagesRaw.map((pkg) => ({
    ...pkg,
    sourcePage: pkg.sourcePage || defaultSourcePage,
    keywords: pkg.keywords?.length ? pkg.keywords : pmaKeywords,
}));

export const ExtrasPackages = ExtrasPackagesRaw.map((pkg) => ({
    ...pkg,
    sourcePage: pkg.sourcePage || defaultSourcePage,
    keywords: pkg.keywords?.length ? pkg.keywords : pkpNibKeywords,
}));