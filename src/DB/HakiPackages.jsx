const defaultSourcePage = "haki"

const HAKIKeywords = [
    "pendaftaran merek dagang",
    "jasa hak cipta",
    "jasa haki terpercaya",
    "cara daftar merek usaha",
    "hak kekayaan intelektual",
    "perlindungan merek bisnis",
    "pendaftaran logo usaha",
    "jasa paten produk",
    "daftar merek online",
    "hak paten dan hak cipta",
    "konsultan haki",
    "biaya pendaftaran merek",
    "daftar haki usaha",
    "jasa legal merek",
    "pendaftaran paten inovasi",
    "hak cipta karya tulis",
    "hak kekayaan industri",
    "perlindungan desain produk",
    "merek dagang usaha kecil",
    "jasa perpanjangan merek",
    "daftar desain industri",
    "jasa paten teknologi",
    "perlindungan brand",
    "hak eksklusif merek",
    "izin merek usaha",
    "hak paten produk lokal",
    "konsultasi haki murah",
    "daftar merek UMKM",
    "jasa pengecekan merek",
    "pelindungan kekayaan intelektual"
];

const HakiPackagesRaw = [
    {
        type: "Pengurusan HAKI (Merek, Hak Cipta, Paten, dll.)",
        price: 3800000,
        priceOriginal: 5937500,
        link: "https://api.whatsapp.com/send?phone=628887127000",
        discount: 36,
        features: [
            { feature: "Free Konsultasi", status: true },
            { feature: "Proses 1-2 Hari Kerja", status: true }
        ]
    }
];

export const HakiPackages = HakiPackagesRaw.map((pkg) => ({
    ...pkg,
    sourcePage: pkg.sourcePage || defaultSourcePage,
    keywords: pkg.keywords?.length ? pkg.keywords : HAKIKeywords,
}));