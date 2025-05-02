const defaultSourcePage = "virtual-office";

const virtualOfficekeywords = [
    "virtual office murah",
    "alamat virtual office",
    "sewa virtual office",
    "virtual office jakarta",
    "virtual office legal",
    "layanan virtual office",
    "paket virtual office",
    "virtual office terbaik",
    "alamat domisili virtual",
    "virtual office untuk PT",
    "harga virtual office",
    "virtual office legalitas",
    "alamat bisnis premium",
    "virtual office profesional",
    "sewa alamat kantor",
    "domisili usaha virtual",
    "legalitas perusahaan virtual",
    "virtual office dan PKP",
    "surat domisili virtual office",
    "izin usaha virtual office",
    "virtual office dan OSS",
    "NPWP dengan virtual office",
    "virtual office cepat",
    "fitur virtual office",
    "kantor virtual lengkap",
    "pengurusan legalitas virtual",
    "alamat virtual resmi",
    "domisili hukum virtual",
    "alamat virtual akta notaris",
    "registrasi virtual office"
  ];
  

const VirtualOfficePackagesRaw = [
    {
        type: "VIRTUAL OFFICE",
        price: 2650000,
        priceOriginal: 3948500,
        discount: 30,
        duration: "1 Tahun",
        features: [
            { feature: "Perjanjian Sewa Menyewa 1 Tahun", status: true },
            { feature: "Sudah Termasuk PPN dan PPH", status: true },
            { feature: "Alamat Virtual Office Bisa PKP", status: true },
            { feature: "Bisa Pakai Ruang Meeting diseluruh Cabang Virtual Office", status: true },
            { feature: "Layanan Surat Menyurat", status: true },
            { feature: "Notifikasi Atas Dokumen Atau Surat Masuk", status: true },
            { feature: "Free Surat Domisili Gedung", status: true },
            { feature: "Free Wifi", status: true },
            { feature: "Self Service Pantry", status: true },
            { feature: "Alamat Komersil dan Prestisius", status: true },
            { feature: "Bonus Meeting Room Gratis 60-90 Jam Pertahun", status: true },
            { feature: "Fasilitas Live Streaming", status: true },
            { feature: "Fasilitas Podcast", status: true },
            { feature: "Fasilitas Proyektor", status: true }
        ]
    },
    {
        type: "VIRTUAL OFFICE PREMIUM (SCBD)",
        price: 3999000,
        priceOriginal: 5718570,
        discount: 30,
        duration: "1 Tahun",
        features: [
            { feature: "Perjanjian Sewa Menyewa 1 Tahun", status: true },
            { feature: "Sudah Termasuk PPN dan PPH", status: true },
            { feature: "Alamat Virtual Office Bisa PKP", status: true },
            { feature: "Bisa Pakai Ruang Meeting diseluruh Cabang Virtual Office", status: true },
            { feature: "Layanan Surat Menyurat", status: true },
            { feature: "Notifikasi Atas Dokumen Atau Surat Masuk", status: true },
            { feature: "Free Surat Domisili Gedung", status: true },
            { feature: "Free Wifi", status: true },
            { feature: "Self Service Pantry", status: true },
            { feature: "Alamat Komersil dan Prestisius", status: true },
            { feature: "Bonus Meeting Room Gratis 60-90 Jam Pertahun", status: true },
            { feature: "Fasilitas Live Streaming", status: true },
            { feature: "Fasilitas Podcast", status: true },
            { feature: "Fasilitas Proyektor", status: true }
        ]
    }
];

export const VirtualOfficePackages = VirtualOfficePackagesRaw.map((pkg) => ({
    ...pkg,
    sourcePage: pkg.sourcePage || defaultSourcePage,
    keywords: pkg.keywords?.length ? pkg.keywords : virtualOfficekeywords,
}));