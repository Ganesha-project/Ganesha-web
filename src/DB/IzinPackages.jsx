const defaultSourcePage = "perizinan";

const keywordsServicePackages = [
  "pengurusan izin SKPL A",
  "jasa sertifikat SKPL A",
  "pengurusan SBUJK kecil",
  "pengurusan SBUJK menengah",
  "pengurusan SBUJK besar",
  "sertifikat badan usaha jasa konstruksi",
  "pengurusan KTA konstruksi",
  "jasa SKK konstruksi jenjang 4-6",
  "jasa SKK jenjang 7",
  "jasa SKK jenjang 8-9",
  "pengurusan SKK resmi",
  "konsultan ISO 9001 IAS IAF",
  "sertifikasi ISO 9001 terakreditasi",
  "pengurusan ISO 45001 IAS IAF",
  "jasa ISO 45001 keselamatan kerja",
  "sertifikasi ISO 37001 akreditasi KAN",
  "jasa ISO 37001 anti suap",
  "sertifikasi ISO 37001 IAS IAF",
  "audit barcode izin SBU",
  "jasa audit barcode SBUJK",
  "pengurusan SMK3 perusahaan",
  "sertifikat SMK3 lengkap",
  "konsultan SMK3 K3",
  "jasa SBUJK cepat dan resmi",
  "pengurusan ISO seluruh Indonesia",
  "jasa legalitas konstruksi",
  "sertifikasi ISO bersertifikat internasional",
  "pengurusan dokumen SKK cepat",
  "layanan perizinan jasa konstruksi",
  "jasa konsultasi ISO & SKK"
];

const servicePackagesRaw = [
  {
    type: "Pengurusan Izin SKPL A",
    price: 3500000,
    priceOriginal: 5468750,
    link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo!%20Saya%20mau%20konsultasi%20terkait%20pengurusan%20Izin%20SKPL%20A!",
    discount: 36,
    features: [
      { feature: "Free Konsultasi 24jam", status: true },
      { feature: "Sertifikat Standar SKPL - A", status: true }
    ]
  },
  {
    type: "Pengurusan SBUJK Skala Kecil",
    price: 9000000,
    priceOriginal: 14062500,
    link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo!%20Saya%20mau%20konsultasi%20terkait%20pengurusan%20SBUJK%20Skala%20Kecil!",
    discount: 36,
    features: [
      { feature: "Free Konsultasi 24jam", status: true },
      { feature: "Sertifikat Badan Usaha Jasa Konstruksi (SBJUK)", status: true },
      { feature: "Kartu Tanda Anggota (KTA)", status: true }
    ]
  },
  {
    type: "Pengurusan SBUJK Skala Menengah",
    price: 11000000,
    priceOriginal: 17187500,
    link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo!%20Saya%20mau%20konsultasi%20terkait%20pengurusan%20SBUJK%20Skala%20Menengah!",
    discount: 36,
    features: [
      { feature: "Free Konsultasi 24jam", status: true },
      { feature: "Sertifikat Badan Usaha Jasa Konstruksi (SBJUK)", status: true },
      { feature: "Kartu Tanda Anggota (KTA)", status: true }
    ]
  },
  {
    type: "Pengurusan SBUJK Skala Besar",
    price: 15000000,
    priceOriginal: 23437500,
    link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo!%20Saya%20mau%20konsultasi%20terkait%20pengurusan%20SBUJK%20Skala%20Besar!",
    discount: 36,
    features: [
      { feature: "Free Konsultasi 24jam", status: true },
      { feature: "Sertifikat Badan Usaha Jasa Konstruksi (SBJUK)", status: true },
      { feature: "Kartu Tanda Anggota (KTA)", status: true }
    ]
  },
  {
    type: "Sertifikat Kompetensi Kerja (SKK) Jenjang 4-6",
    price: 3500000,
    priceOriginal: 5468750,
    link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo!%20Saya%20mau%20konsultasi%20terkait%20Sertifikat%20Kompetensi%20Kerja%20(SKK)%20Jenjang%204-6!",
    discount: 36,
    features: [
      { feature: "Free Konsultasi 24jam", status: true },
      { feature: "Sertifikat Kompetensi Kerja (SKK)", status: true },
      { feature: "Kartu Tanda Anggota (KTA)", status: true }
    ]
  },
  {
    type: "Sertifikat Kompetensi Kerja (SKK) Jenjang 7",
    price: 5000000,
    priceOriginal: 7812500,
    link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo!%20Saya%20mau%20konsultasi%20terkait%20Sertifikat%20Kompetensi%20Kerja%20(SKK)%20Jenjang%207!",
    discount: 36,
    features: [
      { feature: "Free Konsultasi 24jam", status: true },
      { feature: "Sertifikat Kompetensi Kerja (SKK)", status: true },
      { feature: "Kartu Tanda Anggota (KTA)", status: true }
    ]
  },
  {
    type: "Sertifikat Kompetensi Kerja (SKK) Jenjang 8-9",
    price: 6000000,
    priceOriginal: 9375000,
    link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo!%20Saya%20mau%20konsultasi%20terkait%20Sertifikat%20Kompetensi%20Kerja%20(SKK)%20Jenjang%208-9!",
    discount: 36,
    features: [
      { feature: "Free Konsultasi 24jam", status: true },
      { feature: "Sertifikat Kompetensi Kerja (SKK)", status: true },
      { feature: "Kartu Tanda Anggota (KTA)", status: true }
    ]
  },
  {
    type: "ISO 9001 Terakreditasi IAS/IAF",
    price: 9500000,
    priceOriginal: 14843750,
    link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo!%20Saya%20mau%20konsultasi%20terkait%20ISO%209001%20Terakreditasi%20IAS/IAF!",
    discount: 36,
    features: [
      { feature: "Free Konsultasi 24jam", status: true },
      { feature: "Sertifikat ISO 9001 Terakreditasi IAS/IAF", status: true }
    ]
  },
  {
    type: "ISO 45001 Terakreditasi IAS/IAF",
    price: 12500000,
    priceOriginal: 19531250,
    link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo!%20Saya%20mau%20konsultasi%20terkait%20ISO%2045001%20Terakreditasi%20IAS/IAF!",
    discount: 36,
    features: [
      { feature: "Free Konsultasi 24jam", status: true },
      { feature: "Sertifikat ISO 45001 Terakreditasi IAS/IAF", status: true }
    ]
  },
  {
    type: "ISO 37001 Smap Akreditasi KAN",
    price: 45000000,
    priceOriginal: 70312500,
    link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo!%20Saya%20mau%20konsultasi%20terkait%20ISO%2037001%20Smap%20Akreditasi%20KAN!",
    discount: 36,
    features: [
      { feature: "Free Konsultasi 24jam", status: true },
      { feature: "Sertifikat ISO 37001 Smap Akreditasi KAN", status: true }
    ]
  },
  {
    type: "ISO 37001 Smap Akreditasi IAS/IAF",
    price: 19500000,
    priceOriginal: 30468750,
    link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo!%20Saya%20mau%20konsultasi%20terkait%20ISO%2037001%20Smap%20Akreditasi%20IAS/IAF!",
    discount: 36,
    features: [
      { feature: "Free Konsultasi 24jam", status: true },
      { feature: "Sertifikat ISO 37001 Smap Akreditasi IAS/IAF", status: true }
    ]
  },
  {
    type: "Audit Barcode Untuk Izin SBU Skala Menengah dan Besar",
    price: 17500000,
    priceOriginal: 27343750,
    link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo!%20Saya%20mau%20konsultasi%20terkait%20Audit%20Barcode%20Untuk%20Izin%20SBU!",
    discount: 36,
    features: [
      { feature: "Free Konsultasi 24jam", status: true },
      { feature: "Audit Barcode", status: true }
    ]
  },
  {
    type: "Sistem Manajemen Keselamatan Dan Kesehatan Kerja (SMK3)",
    price: 27500000,
    priceOriginal: 42968750,
    link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo!%20Saya%20mau%20konsultasi%20terkait%20Sistem%20Manajemen%20Keselamatan%20Dan%20Kesehatan%20Kerja%20(SMK3)!",
    discount: 36,
    features: [
      { feature: "Free Konsultasi 24jam", status: true },
      { feature: "Sertifikat Sistem Manajemen Keselamatan Dan Kesehatan Kerja (SMK3)", status: true }
    ]
  }
];

export const servicePackages = servicePackagesRaw.map((pkg) => ({
  ...pkg,
  sourcePage: pkg.sourcePage || defaultSourcePage,
  keywords: pkg.keywords?.length ? pkg.keywords : keywordsServicePackages,
}));