import { HiMiniDevicePhoneMobile, } from "react-icons/hi2";
import { Tb24Hours, TbWorldWww } from "react-icons/tb";
import { GoLaw } from "react-icons/go";
import { FaBuildingWheat, FaUserTie } from "react-icons/fa6";
import { RiFilePaperFill } from "react-icons/ri";
import { MdHomeRepairService } from "react-icons/md";
import { TbMathSymbols } from "react-icons/tb";
import { RiAppsFill } from "react-icons/ri";
import { SiReadthedocs } from "react-icons/si";
import { HiLightningBolt, HiReceiptTax } from "react-icons/hi";
import { BiMedal, BiSolidConversation } from "react-icons/bi";
import { FaBuilding } from "react-icons/fa6";
import { PiStampFill } from "react-icons/pi";
import { BiSolidReport } from "react-icons/bi";
import { RiBankCardFill } from "react-icons/ri";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FaBoltLightning } from "react-icons/fa6";
import { TbBulbFilled } from "react-icons/tb";
import { IoSparkles } from "react-icons/io5";
import { IoLeaf } from "react-icons/io5";

export const legalitasUsaha = [
    {
        title: "Kepatuhan Hukum",
        points: [
            {
                heading: "Mematuhi Peraturan dan Undang-Undang",
                description: "Legalitas usaha memastikan bahwa bisnis mematuhi semua peraturan dan undang-undang yang berlaku. Ini termasuk peraturan tentang perpajakan, ketenagakerjaan, lingkungan, dan lain-lain."
            },
            {
                heading: "Menghindari Sanksi",
                description: "Tanpa legalitas yang sesuai, bisnis dapat menghadapi sanksi hukum, denda, atau bahkan penutupan oleh otoritas yang berwenang."
            }
        ]
    },
    {
        title: "Kepercayaan dan Kredibilitas",
        points: [
            {
                heading: "Kepercayaan Pelanggan",
                description: "Usaha yang legal memberikan rasa aman dan kepercayaan kepada pelanggan, mitra bisnis, dan investor. Mereka cenderung lebih percaya dan merasa aman bertransaksi dengan bisnis yang memiliki legalitas yang jelas."
            },
            {
                heading: "Reputasi yang Baik",
                description: "Memiliki legalitas usaha yang lengkap dan sesuai juga meningkatkan reputasi bisnis di mata publik dan pemangku kepentingan lainnya."
            }
        ]
    },
    {
        title: "Perlindungan Hukum",
        points: [
            {
                heading: "Hak Kekayaan Intelektual",
                description: "Legalitas usaha memungkinkan bisnis untuk mendaftarkan merek dagang, paten, atau hak cipta, sehingga melindungi kekayaan intelektual mereka dari penyalahgunaan."
            },
            {
                heading: "Perlindungan Bisnis",
                description: "Legalitas usaha memberikan perlindungan hukum terhadap perselisihan atau konflik yang mungkin timbul, baik dengan pelanggan, pemasok, maupun karyawan."
            }
        ]
    },
    {
        title: "Akses ke Pembiayaan",
        points: [
            {
                heading: "Pinjaman dan Investasi",
                description: "Bank dan lembaga keuangan lainnya biasanya hanya memberikan pinjaman atau investasi kepada bisnis yang memiliki legalitas yang lengkap dan sesuai. Investor juga lebih cenderung berinvestasi pada bisnis yang legal."
            },
            {
                heading: "Subsidi dan Hibah",
                description: "Banyak program subsidi atau hibah dari pemerintah yang hanya dapat diakses oleh bisnis yang memiliki legalitas usaha yang sah."
            }
        ]
    },
    {
        title: "Kemudahan Ekspansi",
        points: [
            {
                heading: "Ekspansi Pasar",
                description: "Legalitas usaha memudahkan proses ekspansi ke pasar baru, baik di dalam negeri maupun internasional. Bisnis yang legal lebih mudah mendapatkan izin dan lisensi untuk beroperasi di wilayah baru."
            },
            {
                heading: "Kemitraan Bisnis",
                description: "Legalitas usaha memungkinkan bisnis untuk menjalin kemitraan strategis dengan perusahaan lain yang mungkin memiliki persyaratan legalitas tertentu."
            }
        ]
    },
    {
        title: "Kepastian Usaha",
        points: [
            {
                heading: "Perlindungan Aset Pribadi",
                description: "Struktur bisnis yang legal, seperti perseroan terbatas, dapat melindungi aset pribadi pemilik dari kewajiban bisnis."
            },
            {
                heading: "Keberlanjutan Usaha",
                description: "Legalitas usaha memberikan dasar yang kuat untuk kelangsungan dan perkembangan bisnis dalam jangka panjang."
            }
        ]
    }
];

export const DataProduct = [
    {
        href: "/legalitas",
        icon: <GoLaw />,
        text: "Legalitas Usaha",
        keywords: ["legalitas usaha", "pendirian usaha", "dokumen legal", "perijinan usaha", "badan usaha", "usaha resmi"]
    },
    {
        href: "/web-development",
        icon: <TbWorldWww />,
        text: "Website Development",
        keywords: ["website development", "pembuatan website", "pengembangan situs web", "desain web", "web developer", "jasa pembuatan website"]
    },
    {
        href: "/sosmed",
        icon: <HiMiniDevicePhoneMobile />,
        text: "Social Media Management",
        keywords: ["social media management", "manajemen media sosial", "sosmed", "pengelolaan sosmed", "strategi media sosial", "konten sosmed"]
    },
    {
        href: "/legalitas/badan-usaha",
        icon: <FaBuildingWheat />,
        text: "Badan Usaha Lainnya",
        keywords: ["badan usaha lainnya", "jenis badan usaha", "pendirian badan usaha", "dokumen badan usaha", "usaha kecil", "usaha menengah"]
    },
    {
        href: "/konsultan-pajak",
        icon: <HiReceiptTax />,
        text: "Konsultan Pajak",
        keywords: ["konsultan pajak", "jasa konsultan pajak", "perencanaan pajak", "penyusunan pajak", "laporan pajak", "konsultasi pajak"]
    },
    {
        href: "/izin-tambahan",
        icon: <RiFilePaperFill />,
        text: "Izin Tambahan",
        keywords: ["izin tambahan", "perijinan tambahan", "dokumen izin", "proses perijinan", "syarat perijinan", "izin usaha"]
    },
    {
        href: "/pelayanan-manajemen",
        icon: <MdHomeRepairService />,
        text: "Pelayanan Managemen",
        keywords: ["pelayanan manajemen", "jasa manajemen", "manajemen bisnis", "konsultan manajemen", "strategi manajemen", "pengelolaan bisnis"]
    },
    {
        href: "/pelayanan-akuntansi",
        icon: <TbMathSymbols />,
        text: "Pelayanan Akuntansi",
        keywords: ["pelayanan akuntansi", "jasa akuntansi", "pembukuan", "laporan keuangan", "auditing", "akuntan"]
    },
    {
        href: "/software-management-system",
        icon: <RiAppsFill />,
        text: "Software Management System",
        keywords: ["software management system", "sistem manajemen perangkat lunak", "pengelolaan perangkat lunak", "software enterprise", "manajemen proyek", "software bisnis"]
    },
    {
        href: "/haki",
        icon: <SiReadthedocs />,
        text: "Haki",
        keywords: ["haki", "hak atas kekayaan intelektual", "paten", "merek dagang", "hak cipta", "perlindungan kekayaan intelektual"]
    },
    {
        href: "/audit",
        icon: <FaUserTie />,
        text: "Audit",
        keywords: ["audit", "jasa audit", "auditor", "audit keuangan", "audit internal", "audit eksternal", "laporan audit"]
    },
    {
        href: "/pendirian-pt",
        icon: <GoLaw />,
        text: "Pendirian PT",
        keywords: ["legalitas PT", "pendirian PT", "dokumen PT", "izin usaha PT", "badan hukum PT", "perusahaan resmi"]
    },
    {
        href: "/pendirian-badan-usaha",
        icon: <GoLaw />,
        text: "Pendirian Badan Usaha",
        keywords: ["legalitas badan usaha", "pendirian badan usaha", "dokumen badan usaha", "izin badan usaha", "jenis badan usaha", "perusahaan legal"]
    },
    {
        href: "/pendirian-cv",
        icon: <GoLaw />,
        text: "Pendirian CV",
        keywords: ["legalitas CV", "pendirian CV", "dokumen CV", "izin usaha CV", "badan usaha CV", "perusahaan CV"]
    },
]

export const NavLinks = {
    main: [
        {
            href: '/',
            label: 'Home'
        },
        {
            href: '/contact',
            label: 'Hubungi Kami'
        },
    ],
    productsAndServices: [
        {
            href: '/services',
            label: 'All Services'
        },
        {
            href: '/sosmed',
            label: 'Social Media Management'
        },
        {
            href: '/web',
            label: 'Website Development'
        },
        {
            href: '/legalitas',
            label: 'Legalitas Bisnis'
        },
        {
            href: '/legalitas/badan-usaha',
            label: 'Badan Usaha Lainnya'
        },
        {
            href: '/konsultan-pajak',
            label: 'Konsultan Pajak'
        },
        {
            href: '/izin-tambahan',
            label: 'Izin Tambahan'
        },
        {
            href: '/pelayanan-manajemen',
            label: 'Pelayanan Manajemen'
        },
        {
            href: '/pelayanan-akuntansi',
            label: 'Pelayanan Akuntansi'
        },
        {
            href: '/software-management-system',
            label: 'Software Management System'
        },
        {
            href: '/haki',
            label: 'HAKI'
        },
        {
            href: '/audit',
            label: 'Audit'
        },
    ],
    legalities: [
        {
            href: '/legalitas/pendirian-pt',
            label: 'Legalitas PT'
        },
        {
            href: '/legalitas/pendirian-cv',
            label: 'Legalitas CV'
        },
        {
            href: '/legalitas/badan-usaha',
            label: 'Legalitas Badan Usaha Lainnya'
        },
    ],
    others: [
        {
            href: '/price-list',
            label: 'List Harga'
        },
        {
            href: '/article',
            label: 'Artikel'
        },
        {
            href: '/about-us',
            label: 'About Us'
        },
    ]
}

export const DataBanner = [
    {
        href: "legalitas",
        data: {
            bannerImage: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236582/GaneshaAssets/ks0afkihiqamf7bjzgfi.png",
            mainText: "Jasa Legalitas Bisnis",
            desc: "Kami hadir bersama Konsultan yang profesional untuk memberikan pelayanan Legalitas terbaik yang akan memastikan Bisnis mu sesuai dengan aturan hukum yang berlaku di Indonesia, Legalkan Bisnis Mu Bersama Ganesha Consulting!.",
            accent: "bg-[#adb9f1] dark:bg-[#6077e749]",
            accent2: "bg-[#D89DC7] dark:bg-[#d89dc75f]",
            textAccent: "dark:text-[#adb9f1] text-[#6370ac]"
        },
    },
    {
        href: "pendirian-pt",
        data: {
            bannerImage: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1721729237/GaneshaAssets/PT.png",
            mainText: "Layanan Pendirian PT",
            desc: "Ayo Mulai Bisnis Anda dengan Langkah Tepat! Kami menyediakan layanan pendirian PT yang cepat dan terpercaya yang akan membantu Anda dengan semua aspek legalitas dan perizinan yang dibutuhkan!",
            accent: "bg-[#8BD9D2] dark:bg-[#8bd9d370]",
            accent2: "bg-[#FECC86] dark:bg-[#fecc8671]",
            textAccent: "dark:text-[#8BD9D2] text-[#5c9d97]"
        },
    },
    {
        href: "pendirian-cv",
        data: {
            bannerImage: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236555/GaneshaAssets/felydyeo20nq7t3zlvfu.svg",
            mainText: "Layanan Pendirian CV",
            desc: "Ayo Mulai Bisnis Anda dengan Langkah Tepat! Kami menyediakan layanan pendirian CV yang cepat dan terpercaya yang akan membantu Anda dengan semua aspek legalitas dan perizinan yang dibutuhkan!",
            accent: "bg-[#E8D0BE] dark:bg-[#e8d0be93]",
            accent2: "bg-[#84514F] dark:bg-[#84514F]",
            textAccent: "dark:text-[#E8D0BE] text-[#caa68a]"
        },
    },
    {
        href: "badan-usaha",
        data: {
            bannerImage: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236584/GaneshaAssets/vvl30klk2osin5jcrvi3.png",
            mainText: "Layanan Pendirian Badan Usaha",
            desc: "Mulai Bisnis Anda dengan Langkah Yang Tepat! Kami menyediakan layanan pendirian badan usaha yang cepat dan andal untuk membantu Anda dalam melengkapi semua aspek legalitas dan perizinan yang diperlukan!",
            accent: "bg-[#F9A7A0] dark:bg-[#f9a7a095]",
            accent2: "bg-[#F6B81C] dark:bg-[#f6b81c99]",
            textAccent: "dark:text-[#F9A7A0] text-[#f09087]"
        },
    },
    {
        href: "badan-usaha",
        data: {
            bannerImage: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236584/GaneshaAssets/vvl30klk2osin5jcrvi3.png",
            mainText: "Layanan Pendirian Badan Usaha",
            desc: "Mulai Bisnis Anda dengan Langkah Yang Tepat! Kami menyediakan layanan pendirian badan usaha yang cepat dan andal untuk membantu Anda dalam melengkapi semua aspek legalitas dan perizinan yang diperlukan!",
            accent: "bg-[#F9A7A0] dark:bg-[#f9a7a095]",
            accent2: "bg-[#F6B81C] dark:bg-[#f6b81c99]",
            textAccent: "dark:text-[#F9A7A0] text-[#f09087]"
        },
    },
    {
        href: "web-development",
        data: {
            bannerImage: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236584/GaneshaAssets/dktt01pu9es4cmoyr31t.png",
            mainText: "Web Development Service",
            desc: "Optimalkan presensi digital perusahaan Anda dengan layanan pembuatan website kami. Desain estetik, fungsionalitas prima, dan pengalaman pengguna yang menarik, semuanya dalam satu paket. Bersama kami, hadirkan daya tarik dan kekuatan online untuk memperluas jangkauan bisnis Anda.",
            accent: "bg-[#6ABDE7] dark:bg-[#6abde776]",
            accent2: "bg-[#ec8e8e] dark:bg-[#ff515177]",
            textAccent: "dark:text-[#6ABDE7] text-[#42aade]"
        },
    },
    {
        href: "web-development",
        data: {
            bannerImage: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236584/GaneshaAssets/dktt01pu9es4cmoyr31t.png",
            mainText: "Web Development Service",
            desc: "Optimalkan presensi digital perusahaan Anda dengan layanan pembuatan website kami. Desain estetik, fungsionalitas prima, dan pengalaman pengguna yang menarik, semuanya dalam satu paket. Bersama kami, hadirkan daya tarik dan kekuatan online untuk memperluas jangkauan bisnis Anda.",
            accent: "bg-[#6ABDE7] dark:bg-[#6abde776]",
            accent2: "bg-[#ec8e8e] dark:bg-[#ff515177]",
            textAccent: "dark:text-[#6ABDE7] text-[#42aade]"
        },
    },
    {
        href: "social-media-management",
        data: {
            bannerImage: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236583/GaneshaAssets/phln59clbvfecosy0msj.png",
            mainText: "Social Media Management",
            desc: "Sosial Media Manajemen adalah kunci sukses modern untuk membentuk citra merek yang kuat, berinteraksi secara efektif dengan pelanggan, dan menavigasi dinamika digital dengan kesan yang positif.",
            accent: "bg-[#A6DCA2] dark:bg-[#A6DCA276]",
            accent2: "bg-[#D89BC6] dark:bg-[#d89bc6a3]",
            textAccent: "dark:text-[#A6DCA2] text-[#7ddb76]"
        },
    },
    {
        href: "konsultan-pajak",
        data: {
            bannerImage: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236583/GaneshaAssets/sltm2ppackpygizjbiuh.png",
            mainText: "Tax Consultant",
            accent: "bg-[#a5908e] dark:bg-[#89524F76]",
            desc: "Optimalisasi Pajak Anda dengan Bantuan Ahli Pajak Terpercaya! Bingung dengan urusan pajak? Ganesha Consulting hadir untuk memberikan solusi tepat dan efisien bagi bisnis Anda. Dapatkan konsultasi profesional dan layanan yang komprehensif untuk semua kebutuhan perpajakan Anda. ",
            accent: "bg-[#a5908e] dark:bg-[#89524F76]",
            accent2: "bg-[#8A865C] dark:bg-[#8A865Ca3]",
            textAccent: "dark:text-[#aa7a77] text-[#89524F]"
        },
    },
    {
        href: "audit",
        data: {
            bannerImage: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722231099/GaneshaAssets/av6v4iikb50xagea3vwx.svg",
            mainText: "System Audit",
            desc: "Layanan Audit profesional kami memberikan keyakinan terhadap informasi keuangan Anda, mengidentifikasi risiko, dan memperbaiki kontrol internal.",
            accent: "bg-[#cfe5dd] dark:bg-[#8cb0d380]",
            accent2: "bg-[#ec8e8e] dark:bg-[#ff515177]",
            textAccent: "dark:text-[#cfe5dd] text-[#657871]"
        },
    },
    {
        href: "perizinan",
        data: {
            bannerImage: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236562/GaneshaAssets/lxcyp5lzimn5rv6fusir.svg",
            mainText: "Perizinan Tambahan",
            desc: "Bantuan penuh pengalaman untuk memperoleh izin tambahan secara cepat dan efisien. Solusi mudah untuk semua kendala perizinan.",
            accent: "bg-[#cfe5dd] dark:bg-[#cfe5ddb5]",
            accent2: "bg-[#669EF0] dark:bg-[#669df0b5]",
            textAccent: "dark:text-[#cfe5dd] text-[#657871]"
        },
    },
    {
        href: "pelayanan-manajemen",
        data: {
            bannerImage: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236552/GaneshaAssets/nqpcv7r6kvy4xg9x4dyc.svg",
            mainText: "Pelayanan Manajemen",
            desc: "Bantuan penuh pengalaman untuk memperoleh izin tambahan secara cepat dan efisien. Solusi mudah untuk semua kendala perizinan.",
            accent: "bg-[#e39f8c] dark:bg-[#e39f8cb5]",
            accent2: "bg-[#006AA4] dark:bg-[#006ba4ab]",
            textAccent: "dark:text-[#e39f8c] text-[#DF6443]"
        },
    },
    {
        href: "pelayanan-akuntansi",
        data: {
            bannerImage: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236557/GaneshaAssets/f7ivo4yqe6wkvzvrkcun.svg",
            mainText: "Pelayanan Akuntantsi",
            desc: "Dukungan akuntansi terpercaya untuk pencatatan keuangan, pelaporan pajak, dan analisis keuangan yang akurat.",
            accent: "bg-[#27b19c] dark:bg-[#019C85b5]",
            accent2: "bg-[#FF9092] dark:bg-[#ff9092d1]",
            textAccent: "dark:text-[#019c85b2] text-[#019C85]"
        },
    },
    {
        href: "software-management-system",
        data: {
            bannerImage: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236554/GaneshaAssets/c1ej5hdt6vdu6nrqy8ee.svg",
            mainText: "Software Management System",
            desc: "Solusi terkini, dari Accounting Software hingga AR System, untuk meningkatkan efisiensi dan kinerja operasional.",
            accent: "bg-[#ecace7] dark:bg-[#fd8cf49d]",
            accent2: "bg-[#265D6C] dark:bg-[#265d6cb2]",
            textAccent: "dark:text-[#ecace7] text-[#FD8CF3]"
        },
    },
    {
        href: "haki",
        data: {
            bannerImage: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236555/GaneshaAssets/gzm4wdyvieietlozpwbt.svg",
            mainText: "HAKI - Hak Kekayaan Intelektual",
            desc: "Lindungi merek, hak cipta, dan paten bisnis Anda dengan layanan HAKI kami, memberikan keunggulan kompetitif.",
            accent: "bg-[#eb9090] dark:bg-[#eb9090]",
            accent2: "bg-[#FFEFD5] dark:bg-[#FFEFD5]",
            textAccent: "dark:text-[#eb9090] text-[#eb9090]"
        },
    },
]

export const DataCategoriesArticle = [
    {
        href: '/perizinan',
        name: 'perizinan',
        icon: <GoLaw />
    },
    {
        href: '/konstruksi',
        name: 'konstruksi',
        icon: <GoLaw />
    },
    {
        href: '/kementrian perdaagngan',
        name: 'kementrian perdaagngan',
        icon: <GoLaw />
    },
    {
        href: '/legalitas',
        name: 'legalitas',
        icon: <GoLaw />
    },
    {
        href: '/kemenkumham',
        name: 'kemenkumham',
        icon: <GoLaw />
    },
    {
        href: '/perpajakan',
        name: 'perpajakan',
        icon: <GoLaw />
    },
    {
        href: '/notaris',
        name: 'notaris',
        icon: <GoLaw />
    },
    {
        href: '/oss',
        name: 'OSS',
        icon: <GoLaw />
    },
    {
        href: '/bkpm',
        name: 'BKPM',
        icon: <GoLaw />
    },
    {
        href: '/badan-usaha',
        name: 'badan usaha',
        icon: <GoLaw />
    },
    {
        href: '/perseroan-terbatas',
        name: 'perseroan terbatas',
        icon: <GoLaw />
    },
    {
        href: '/halal',
        name: 'halal',
        icon: <GoLaw />
    },
    {
        href: '/HAKI',
        name: 'HAKI',
        icon: <GoLaw />
    },
    {
        href: '/pariwisata',
        name: 'pariwisata',
        icon: <GoLaw />
    },
    {
        href: '/IZIN',
        name: 'IZIN',
        icon: <GoLaw />
    },
    {
        href: '/merek',
        name: 'merek',
        icon: <GoLaw />
    }
]

export const DataSelectFilterArticle = [
    { label: "Newest", value: "desc" },
    { label: "Oldest", value: "asc" }
]

export const DataArticles = {
    label: {
        new: 'Latest Update',
        trend: 'Trending',
    },
    new: [
        {
            hot: true,
            title: "An unprecedented debate could shake up a White House race like no other",
            thumbnailImg: "https://media.cnn.com/api/v1/images/stellar/prod/03-screenshot-2024-06-25-at-1-43-21-am.png?c=16x9&q=h_653,w_1160,c_fill/f_webp",
            exerp: "Judge Aileen Cannon wants to hold additional hearings on Donald Trump's attempts to challenge key evidence in his classified documents case and will allow the former president's lawyers to question witnesses about the investigation and search of Mar-a-Lago.",
            date: "20 Mins Ago | 28 June 2024",
            categories: "Perizinan",
            content: (
                <>
                    <p>
                        Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
                        tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
                        Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
                        sunyi.
                        <br />
                        <br />
                        Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
                        muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
                        tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
                        jeda iklan atau ucapan DJ antar lagu.
                        <br />
                        <br />
                        Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
                        namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
                        lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
                        dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
                        terakhir di lagu tengah diputar dinyanyikan.
                        <br />
                        Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
                        diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
                        lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
                        mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
                        <br />
                        <br />
                        Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
                        hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
                        beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
                        <br />
                        <br />
                        Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
                        tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
                        mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
                        inginkan.
                        <br />
                        <br />
                        Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
                        Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
                        baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
                        headset Vision Pro karyanya.
                        <br />
                        <br />
                        Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
                        pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
                        memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
                        di Inggris, Prancis, Jerman, Australia dan Kanada.
                        <br />
                        <br />
                        Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
                        Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
                        berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
                        tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
                        eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
                        <br />
                        <br />
                        Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
                        Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
                        berbagai layar di perangkat dengan tombol Option + Space.
                        <br />
                        <br />
                        Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
                        mendukung opsi pencarian multi-modal.
                    </p>

                </>
            )
        },
        {
            hot: true,
            title: "Adegan Seks Teraneh Bagi Scarlett Johansson",
            thumbnailImg: "https://akcdn.detik.net.id/community/media/visual/2017/11/23/8aae36dd-ed53-471b-aef9-65635b915115_43.jpg?w=700&q=90",
            exerp: "Scarlett Johansson telah melakoni banyak sekali proyek dan melakukan berbagai adegan intim. Ada salah satu film yang ternyata cukup membekas untuknya, yakni Her. Baca artikel detikpop",
            date: "12 Mins Ago | 28 June 2024",
            categories: "Pajak",
            content: (
                <>
                    <p>
                        Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
                        tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
                        Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
                        sunyi.
                        <br />
                        <br />
                        Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
                        muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
                        tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
                        jeda iklan atau ucapan DJ antar lagu.
                        <br />
                        <br />
                        Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
                        namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
                        lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
                        dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
                        terakhir di lagu tengah diputar dinyanyikan.
                        <br />
                        Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
                        diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
                        lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
                        mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
                        <br />
                        <br />
                        Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
                        hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
                        beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
                        <br />
                        <br />
                        Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
                        tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
                        mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
                        inginkan.
                        <br />
                        <br />
                        Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
                        Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
                        baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
                        headset Vision Pro karyanya.
                        <br />
                        <br />
                        Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
                        pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
                        memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
                        di Inggris, Prancis, Jerman, Australia dan Kanada.
                        <br />
                        <br />
                        Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
                        Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
                        berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
                        tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
                        eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
                        <br />
                        <br />
                        Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
                        Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
                        berbagai layar di perangkat dengan tombol Option + Space.
                        <br />
                        <br />
                        Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
                        mendukung opsi pencarian multi-modal.
                    </p>

                </>
            )
        },
        {
            hot: false,
            title: "Artificial Intelligence Revolutionizing the Tech Industry",
            thumbnailImg: "https://picsum.photos/500/500?random=431",
            exerp: "AI technology is rapidly transforming the tech industry with advancements in machine learning and data processing.",
            date: "1 Hour Ago | 28 June 2024",
            categories: "Teknologi",
            content: (
                <>
                    <p>
                        Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
                        tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
                        Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
                        sunyi.
                        <br />
                        <br />
                        Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
                        muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
                        tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
                        jeda iklan atau ucapan DJ antar lagu.
                        <br />
                        <br />
                        Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
                        namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
                        lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
                        dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
                        terakhir di lagu tengah diputar dinyanyikan.
                        <br />
                        Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
                        diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
                        lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
                        mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
                        <br />
                        <br />
                        Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
                        hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
                        beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
                        <br />
                        <br />
                        Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
                        tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
                        mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
                        inginkan.
                        <br />
                        <br />
                        Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
                        Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
                        baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
                        headset Vision Pro karyanya.
                        <br />
                        <br />
                        Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
                        pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
                        memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
                        di Inggris, Prancis, Jerman, Australia dan Kanada.
                        <br />
                        <br />
                        Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
                        Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
                        berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
                        tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
                        eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
                        <br />
                        <br />
                        Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
                        Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
                        berbagai layar di perangkat dengan tombol Option + Space.
                        <br />
                        <br />
                        Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
                        mendukung opsi pencarian multi-modal.
                    </p>

                </>
            )
        },
        {
            hot: true,
            title: "Climate Change: A Global Call to Action",
            thumbnailImg: "https://picsum.photos/500/500?random=555",
            exerp: "World leaders are coming together to address the pressing issue of climate change and to discuss sustainable solutions.",
            date: "30 Mins Ago | 28 June 2024",
            categories: "Lingkungan",
            content: (
                <>
                    <p>
                        Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
                        tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
                        Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
                        sunyi.
                        <br />
                        <br />
                        Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
                        muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
                        tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
                        jeda iklan atau ucapan DJ antar lagu.
                        <br />
                        <br />
                        Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
                        namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
                        lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
                        dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
                        terakhir di lagu tengah diputar dinyanyikan.
                        <br />
                        Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
                        diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
                        lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
                        mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
                        <br />
                        <br />
                        Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
                        hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
                        beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
                        <br />
                        <br />
                        Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
                        tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
                        mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
                        inginkan.
                        <br />
                        <br />
                        Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
                        Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
                        baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
                        headset Vision Pro karyanya.
                        <br />
                        <br />
                        Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
                        pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
                        memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
                        di Inggris, Prancis, Jerman, Australia dan Kanada.
                        <br />
                        <br />
                        Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
                        Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
                        berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
                        tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
                        eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
                        <br />
                        <br />
                        Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
                        Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
                        berbagai layar di perangkat dengan tombol Option + Space.
                        <br />
                        <br />
                        Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
                        mendukung opsi pencarian multi-modal.
                    </p>

                </>
            )
        },
        {
            hot: false,
            title: "Exploring the Wonders of the Deep Sea",
            thumbnailImg: "https://picsum.photos/500/500?random=177",
            exerp: "Marine biologists have discovered new species in the depths of the ocean, unveiling the mysteries of the deep sea.",
            date: "2 Hours Ago | 28 June 2024",
            categories: "Sains",
            content: (
                <>
                    <p>
                        Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
                        tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
                        Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
                        sunyi.
                        <br />
                        <br />
                        Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
                        muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
                        tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
                        jeda iklan atau ucapan DJ antar lagu.
                        <br />
                        <br />
                        Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
                        namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
                        lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
                        dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
                        terakhir di lagu tengah diputar dinyanyikan.
                        <br />
                        Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
                        diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
                        lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
                        mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
                        <br />
                        <br />
                        Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
                        hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
                        beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
                        <br />
                        <br />
                        Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
                        tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
                        mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
                        inginkan.
                        <br />
                        <br />
                        Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
                        Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
                        baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
                        headset Vision Pro karyanya.
                        <br />
                        <br />
                        Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
                        pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
                        memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
                        di Inggris, Prancis, Jerman, Australia dan Kanada.
                        <br />
                        <br />
                        Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
                        Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
                        berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
                        tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
                        eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
                        <br />
                        <br />
                        Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
                        Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
                        berbagai layar di perangkat dengan tombol Option + Space.
                        <br />
                        <br />
                        Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
                        mendukung opsi pencarian multi-modal.
                    </p>

                </>
            )
        },
        {
            hot: true,
            title: "Economic Growth in Southeast Asia",
            thumbnailImg: "https://picsum.photos/500/500?random=810",
            exerp: "Southeast Asian countries are experiencing significant economic growth, attracting foreign investments and boosting trade.",
            date: "45 Mins Ago | 28 June 2024",
            categories: "Ekonomi",
            content: (
                <>
                    <p>
                        Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
                        tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
                        Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
                        sunyi.
                        <br />
                        <br />
                        Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
                        muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
                        tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
                        jeda iklan atau ucapan DJ antar lagu.
                        <br />
                        <br />
                        Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
                        namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
                        lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
                        dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
                        terakhir di lagu tengah diputar dinyanyikan.
                        <br />
                        Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
                        diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
                        lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
                        mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
                        <br />
                        <br />
                        Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
                        hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
                        beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
                        <br />
                        <br />
                        Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
                        tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
                        mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
                        inginkan.
                        <br />
                        <br />
                        Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
                        Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
                        baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
                        headset Vision Pro karyanya.
                        <br />
                        <br />
                        Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
                        pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
                        memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
                        di Inggris, Prancis, Jerman, Australia dan Kanada.
                        <br />
                        <br />
                        Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
                        Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
                        berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
                        tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
                        eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
                        <br />
                        <br />
                        Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
                        Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
                        berbagai layar di perangkat dengan tombol Option + Space.
                        <br />
                        <br />
                        Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
                        mendukung opsi pencarian multi-modal.
                    </p>

                </>
            )
        },
        {
            hot: false,
            title: "The Rise of Electric Vehicles",
            thumbnailImg: "https://picsum.photos/500/500?random=719",
            exerp: "Electric vehicles are becoming more popular as consumers seek eco-friendly and cost-effective transportation options.",
            date: "3 Hours Ago | 28 June 2024",
            categories: "Otomotif",
            content: (
                <>
                    <p>
                        Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
                        tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
                        Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
                        sunyi.
                        <br />
                        <br />
                        Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
                        muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
                        tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
                        jeda iklan atau ucapan DJ antar lagu.
                        <br />
                        <br />
                        Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
                        namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
                        lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
                        dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
                        terakhir di lagu tengah diputar dinyanyikan.
                        <br />
                        Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
                        diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
                        lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
                        mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
                        <br />
                        <br />
                        Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
                        hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
                        beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
                        <br />
                        <br />
                        Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
                        tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
                        mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
                        inginkan.
                        <br />
                        <br />
                        Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
                        Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
                        baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
                        headset Vision Pro karyanya.
                        <br />
                        <br />
                        Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
                        pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
                        memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
                        di Inggris, Prancis, Jerman, Australia dan Kanada.
                        <br />
                        <br />
                        Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
                        Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
                        berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
                        tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
                        eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
                        <br />
                        <br />
                        Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
                        Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
                        berbagai layar di perangkat dengan tombol Option + Space.
                        <br />
                        <br />
                        Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
                        mendukung opsi pencarian multi-modal.
                    </p>

                </>
            )
        },
        {
            hot: true,
            title: "Advancements in Medical Technology",
            thumbnailImg: "https://picsum.photos/500/500?random=532",
            exerp: "Recent advancements in medical technology are improving patient outcomes and revolutionizing healthcare practices.",
            date: "25 Mins Ago | 28 June 2024",
            categories: "Kesehatan",
            content: (
                <>
                    <p>
                        Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
                        tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
                        Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
                        sunyi.
                        <br />
                        <br />
                        Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
                        muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
                        tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
                        jeda iklan atau ucapan DJ antar lagu.
                        <br />
                        <br />
                        Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
                        namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
                        lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
                        dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
                        terakhir di lagu tengah diputar dinyanyikan.
                        <br />
                        Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
                        diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
                        lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
                        mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
                        <br />
                        <br />
                        Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
                        hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
                        beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
                        <br />
                        <br />
                        Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
                        tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
                        mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
                        inginkan.
                        <br />
                        <br />
                        Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
                        Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
                        baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
                        headset Vision Pro karyanya.
                        <br />
                        <br />
                        Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
                        pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
                        memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
                        di Inggris, Prancis, Jerman, Australia dan Kanada.
                        <br />
                        <br />
                        Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
                        Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
                        berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
                        tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
                        eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
                        <br />
                        <br />
                        Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
                        Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
                        berbagai layar di perangkat dengan tombol Option + Space.
                        <br />
                        <br />
                        Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
                        mendukung opsi pencarian multi-modal.
                    </p>

                </>
            )
        },
        {
            hot: false,
            title: "The Future of Space Exploration",
            thumbnailImg: "https://picsum.photos/500/500?random=264",
            exerp: "Space agencies are planning ambitious missions to explore distant planets and expand our understanding of the universe.",
            date: "4 Hours Ago | 28 June 2024",
            categories: "Astronomi",
            content: (
                <>
                    <p>
                        Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
                        tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
                        Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
                        sunyi.
                        <br />
                        <br />
                        Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
                        muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
                        tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
                        jeda iklan atau ucapan DJ antar lagu.
                        <br />
                        <br />
                        Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
                        namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
                        lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
                        dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
                        terakhir di lagu tengah diputar dinyanyikan.
                        <br />
                        Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
                        diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
                        lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
                        mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
                        <br />
                        <br />
                        Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
                        hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
                        beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
                        <br />
                        <br />
                        Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
                        tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
                        mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
                        inginkan.
                        <br />
                        <br />
                        Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
                        Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
                        baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
                        headset Vision Pro karyanya.
                        <br />
                        <br />
                        Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
                        pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
                        memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
                        di Inggris, Prancis, Jerman, Australia dan Kanada.
                        <br />
                        <br />
                        Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
                        Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
                        berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
                        tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
                        eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
                        <br />
                        <br />
                        Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
                        Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
                        berbagai layar di perangkat dengan tombol Option + Space.
                        <br />
                        <br />
                        Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
                        mendukung opsi pencarian multi-modal.
                    </p>

                </>
            )
        },
        {
            hot: true,
            title: "Innovations in Renewable Energy",
            thumbnailImg: "https://picsum.photos/500/500?random=284",
            exerp: "Innovations in renewable energy sources are paving the way for a sustainable future and reducing our reliance on fossil fuels.",
            date: "10 Mins Ago | 28 June 2024",
            categories: "Energi",
            content: (
                <>
                    <p>
                        Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
                        tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
                        Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
                        sunyi.
                        <br />
                        <br />
                        Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
                        muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
                        tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
                        jeda iklan atau ucapan DJ antar lagu.
                        <br />
                        <br />
                        Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
                        namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
                        lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
                        dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
                        terakhir di lagu tengah diputar dinyanyikan.
                        <br />
                        Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
                        diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
                        lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
                        mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
                        <br />
                        <br />
                        Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
                        hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
                        beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
                        <br />
                        <br />
                        Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
                        tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
                        mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
                        inginkan.
                        <br />
                        <br />
                        Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
                        Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
                        baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
                        headset Vision Pro karyanya.
                        <br />
                        <br />
                        Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
                        pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
                        memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
                        di Inggris, Prancis, Jerman, Australia dan Kanada.
                        <br />
                        <br />
                        Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
                        Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
                        berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
                        tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
                        eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
                        <br />
                        <br />
                        Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
                        Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
                        berbagai layar di perangkat dengan tombol Option + Space.
                        <br />
                        <br />
                        Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
                        mendukung opsi pencarian multi-modal.
                    </p>

                </>
            )
        },
        {
            hot: false,
            title: "The Impact of Social Media on Society",
            thumbnailImg: "https://picsum.photos/500/500?random=331",
            exerp: "Social media platforms are having a profound impact on society, influencing communication, politics, and culture.",
            date: "5 Hours Ago | 28 June 2024",
            categories: "Sosial"
        },
        {
            hot: true,
            title: "Breakthroughs in Quantum Computing",
            thumbnailImg: "https://picsum.photos/500/500?random=429",
            exerp: "Quantum computing is making significant strides, promising to solve complex problems that are beyond the capabilities of classical computers.",
            date: "15 Mins Ago | 28 June 2024",
            categories: "Teknologi"
        }
    ],
    trend: [

        {
            hot: false,
            title: "The Rise of Electric Vehicles",
            thumbnailImg: "https://picsum.photos/500/500?random=719",
            exerp: "Electric vehicles are becoming more popular as consumers seek eco-friendly and cost-effective transportation options.",
            date: "3 Hours Ago | 28 June 2024",
            categories: "Otomotif",
            content: (
                <>
                    <p>
                        Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
                        tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
                        Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
                        sunyi.
                        <br />
                        <br />
                        Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
                        muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
                        tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
                        jeda iklan atau ucapan DJ antar lagu.
                        <br />
                        <br />
                        Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
                        namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
                        lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
                        dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
                        terakhir di lagu tengah diputar dinyanyikan.
                        <br />
                        Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
                        diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
                        lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
                        mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
                        <br />
                        <br />
                        Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
                        hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
                        beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
                        <br />
                        <br />
                        Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
                        tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
                        mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
                        inginkan.
                        <br />
                        <br />
                        Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
                        Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
                        baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
                        headset Vision Pro karyanya.
                        <br />
                        <br />
                        Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
                        pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
                        memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
                        di Inggris, Prancis, Jerman, Australia dan Kanada.
                        <br />
                        <br />
                        Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
                        Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
                        berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
                        tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
                        eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
                        <br />
                        <br />
                        Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
                        Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
                        berbagai layar di perangkat dengan tombol Option + Space.
                        <br />
                        <br />
                        Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
                        mendukung opsi pencarian multi-modal.
                    </p>

                </>
            )
        },
        {
            hot: true,
            title: "Advancements in Medical Technology",
            thumbnailImg: "https://picsum.photos/500/500?random=532",
            exerp: "Recent advancements in medical technology are improving patient outcomes and revolutionizing healthcare practices.",
            date: "25 Mins Ago | 28 June 2024",
            categories: "Kesehatan",
            content: (
                <>
                    <p>
                        Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
                        tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
                        Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
                        sunyi.
                        <br />
                        <br />
                        Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
                        muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
                        tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
                        jeda iklan atau ucapan DJ antar lagu.
                        <br />
                        <br />
                        Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
                        namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
                        lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
                        dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
                        terakhir di lagu tengah diputar dinyanyikan.
                        <br />
                        Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
                        diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
                        lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
                        mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
                        <br />
                        <br />
                        Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
                        hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
                        beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
                        <br />
                        <br />
                        Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
                        tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
                        mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
                        inginkan.
                        <br />
                        <br />
                        Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
                        Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
                        baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
                        headset Vision Pro karyanya.
                        <br />
                        <br />
                        Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
                        pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
                        memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
                        di Inggris, Prancis, Jerman, Australia dan Kanada.
                        <br />
                        <br />
                        Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
                        Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
                        berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
                        tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
                        eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
                        <br />
                        <br />
                        Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
                        Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
                        berbagai layar di perangkat dengan tombol Option + Space.
                        <br />
                        <br />
                        Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
                        mendukung opsi pencarian multi-modal.
                    </p>

                </>
            )
        },
        {
            hot: false,
            title: "The Future of Space Exploration",
            thumbnailImg: "https://picsum.photos/500/500?random=264",
            exerp: "Space agencies are planning ambitious missions to explore distant planets and expand our understanding of the universe.",
            date: "4 Hours Ago | 28 June 2024",
            categories: "Astronomi",
            content: (
                <>
                    <p>
                        Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
                        tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
                        Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
                        sunyi.
                        <br />
                        <br />
                        Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
                        muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
                        tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
                        jeda iklan atau ucapan DJ antar lagu.
                        <br />
                        <br />
                        Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
                        namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
                        lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
                        dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
                        terakhir di lagu tengah diputar dinyanyikan.
                        <br />
                        Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
                        diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
                        lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
                        mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
                        <br />
                        <br />
                        Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
                        hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
                        beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
                        <br />
                        <br />
                        Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
                        tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
                        mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
                        inginkan.
                        <br />
                        <br />
                        Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
                        Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
                        baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
                        headset Vision Pro karyanya.
                        <br />
                        <br />
                        Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
                        pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
                        memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
                        di Inggris, Prancis, Jerman, Australia dan Kanada.
                        <br />
                        <br />
                        Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
                        Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
                        berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
                        tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
                        eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
                        <br />
                        <br />
                        Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
                        Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
                        berbagai layar di perangkat dengan tombol Option + Space.
                        <br />
                        <br />
                        Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
                        mendukung opsi pencarian multi-modal.
                    </p>

                </>
            )
        },
        {
            hot: true,
            title: "Innovations in Renewable Energy",
            thumbnailImg: "https://picsum.photos/500/500?random=284",
            exerp: "Innovations in renewable energy sources are paving the way for a sustainable future and reducing our reliance on fossil fuels.",
            date: "10 Mins Ago | 28 June 2024",
            categories: "Energi",
            content: (
                <>
                    <p>
                        Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
                        tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
                        Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
                        sunyi.
                        <br />
                        <br />
                        Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
                        muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
                        tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
                        jeda iklan atau ucapan DJ antar lagu.
                        <br />
                        <br />
                        Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
                        namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
                        lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
                        dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
                        terakhir di lagu tengah diputar dinyanyikan.
                        <br />
                        Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
                        diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
                        lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
                        mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
                        <br />
                        <br />
                        Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
                        hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
                        beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
                        <br />
                        <br />
                        Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
                        tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
                        mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
                        inginkan.
                        <br />
                        <br />
                        Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
                        Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
                        baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
                        headset Vision Pro karyanya.
                        <br />
                        <br />
                        Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
                        pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
                        memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
                        di Inggris, Prancis, Jerman, Australia dan Kanada.
                        <br />
                        <br />
                        Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
                        Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
                        berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
                        tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
                        eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
                        <br />
                        <br />
                        Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
                        Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
                        berbagai layar di perangkat dengan tombol Option + Space.
                        <br />
                        <br />
                        Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
                        mendukung opsi pencarian multi-modal.
                    </p>

                </>
            )
        },
        {
            hot: false,
            title: "The Impact of Social Media on Society",
            thumbnailImg: "https://picsum.photos/500/500?random=331",
            exerp: "Social media platforms are having a profound impact on society, influencing communication, politics, and culture.",
            date: "5 Hours Ago | 28 June 2024",
            categories: "Sosial"
        },
        {
            hot: true,
            title: "Breakthroughs in Quantum Computing",
            thumbnailImg: "https://picsum.photos/500/500?random=429",
            exerp: "Quantum computing is making significant strides, promising to solve complex problems that are beyond the capabilities of classical computers.",
            date: "15 Mins Ago | 28 June 2024",
            categories: "Teknologi"
        },
        {
            hot: true,
            title: "An unprecedented debate could shake up a White House race like no other",
            thumbnailImg: "https://media.cnn.com/api/v1/images/stellar/prod/03-screenshot-2024-06-25-at-1-43-21-am.png?c=16x9&q=h_653,w_1160,c_fill/f_webp",
            exerp: "Judge Aileen Cannon wants to hold additional hearings on Donald Trump's attempts to challenge key evidence in his classified documents case and will allow the former president's lawyers to question witnesses about the investigation and search of Mar-a-Lago.",
            date: "20 Mins Ago | 28 June 2024",
            categories: "Perizinan",
            content: (
                <>
                    <p>
                        Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
                        tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
                        Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
                        sunyi.
                        <br />
                        <br />
                        Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
                        muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
                        tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
                        jeda iklan atau ucapan DJ antar lagu.
                        <br />
                        <br />
                        Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
                        namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
                        lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
                        dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
                        terakhir di lagu tengah diputar dinyanyikan.
                        <br />
                        Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
                        diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
                        lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
                        mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
                        <br />
                        <br />
                        Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
                        hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
                        beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
                        <br />
                        <br />
                        Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
                        tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
                        mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
                        inginkan.
                        <br />
                        <br />
                        Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
                        Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
                        baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
                        headset Vision Pro karyanya.
                        <br />
                        <br />
                        Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
                        pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
                        memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
                        di Inggris, Prancis, Jerman, Australia dan Kanada.
                        <br />
                        <br />
                        Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
                        Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
                        berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
                        tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
                        eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
                        <br />
                        <br />
                        Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
                        Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
                        berbagai layar di perangkat dengan tombol Option + Space.
                        <br />
                        <br />
                        Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
                        mendukung opsi pencarian multi-modal.
                    </p>

                </>
            )
        },
        {
            hot: true,
            title: "Adegan Seks Teraneh Bagi Scarlett Johansson",
            thumbnailImg: "https://akcdn.detik.net.id/community/media/visual/2017/11/23/8aae36dd-ed53-471b-aef9-65635b915115_43.jpg?w=700&q=90",
            exerp: "Scarlett Johansson telah melakoni banyak sekali proyek dan melakukan berbagai adegan intim. Ada salah satu film yang ternyata cukup membekas untuknya, yakni Her. Baca artikel detikpop",
            date: "12 Mins Ago | 28 June 2024",
            categories: "Pajak",
            content: (
                <>
                    <p>
                        Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
                        tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
                        Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
                        sunyi.
                        <br />
                        <br />
                        Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
                        muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
                        tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
                        jeda iklan atau ucapan DJ antar lagu.
                        <br />
                        <br />
                        Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
                        namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
                        lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
                        dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
                        terakhir di lagu tengah diputar dinyanyikan.
                        <br />
                        Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
                        diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
                        lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
                        mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
                        <br />
                        <br />
                        Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
                        hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
                        beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
                        <br />
                        <br />
                        Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
                        tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
                        mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
                        inginkan.
                        <br />
                        <br />
                        Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
                        Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
                        baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
                        headset Vision Pro karyanya.
                        <br />
                        <br />
                        Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
                        pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
                        memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
                        di Inggris, Prancis, Jerman, Australia dan Kanada.
                        <br />
                        <br />
                        Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
                        Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
                        berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
                        tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
                        eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
                        <br />
                        <br />
                        Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
                        Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
                        berbagai layar di perangkat dengan tombol Option + Space.
                        <br />
                        <br />
                        Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
                        mendukung opsi pencarian multi-modal.
                    </p>

                </>
            )
        },
        {
            hot: false,
            title: "Artificial Intelligence Revolutionizing the Tech Industry",
            thumbnailImg: "https://picsum.photos/500/500?random=431",
            exerp: "AI technology is rapidly transforming the tech industry with advancements in machine learning and data processing.",
            date: "1 Hour Ago | 28 June 2024",
            categories: "Teknologi",
            content: (
                <>
                    <p>
                        Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
                        tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
                        Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
                        sunyi.
                        <br />
                        <br />
                        Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
                        muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
                        tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
                        jeda iklan atau ucapan DJ antar lagu.
                        <br />
                        <br />
                        Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
                        namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
                        lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
                        dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
                        terakhir di lagu tengah diputar dinyanyikan.
                        <br />
                        Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
                        diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
                        lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
                        mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
                        <br />
                        <br />
                        Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
                        hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
                        beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
                        <br />
                        <br />
                        Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
                        tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
                        mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
                        inginkan.
                        <br />
                        <br />
                        Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
                        Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
                        baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
                        headset Vision Pro karyanya.
                        <br />
                        <br />
                        Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
                        pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
                        memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
                        di Inggris, Prancis, Jerman, Australia dan Kanada.
                        <br />
                        <br />
                        Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
                        Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
                        berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
                        tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
                        eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
                        <br />
                        <br />
                        Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
                        Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
                        berbagai layar di perangkat dengan tombol Option + Space.
                        <br />
                        <br />
                        Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
                        mendukung opsi pencarian multi-modal.
                    </p>

                </>
            )
        },
        {
            hot: true,
            title: "Climate Change: A Global Call to Action",
            thumbnailImg: "https://picsum.photos/500/500?random=555",
            exerp: "World leaders are coming together to address the pressing issue of climate change and to discuss sustainable solutions.",
            date: "30 Mins Ago | 28 June 2024",
            categories: "Lingkungan",
            content: (
                <>
                    <p>
                        Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
                        tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
                        Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
                        sunyi.
                        <br />
                        <br />
                        Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
                        muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
                        tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
                        jeda iklan atau ucapan DJ antar lagu.
                        <br />
                        <br />
                        Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
                        namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
                        lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
                        dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
                        terakhir di lagu tengah diputar dinyanyikan.
                        <br />
                        Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
                        diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
                        lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
                        mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
                        <br />
                        <br />
                        Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
                        hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
                        beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
                        <br />
                        <br />
                        Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
                        tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
                        mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
                        inginkan.
                        <br />
                        <br />
                        Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
                        Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
                        baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
                        headset Vision Pro karyanya.
                        <br />
                        <br />
                        Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
                        pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
                        memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
                        di Inggris, Prancis, Jerman, Australia dan Kanada.
                        <br />
                        <br />
                        Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
                        Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
                        berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
                        tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
                        eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
                        <br />
                        <br />
                        Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
                        Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
                        berbagai layar di perangkat dengan tombol Option + Space.
                        <br />
                        <br />
                        Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
                        mendukung opsi pencarian multi-modal.
                    </p>

                </>
            )
        },
        {
            hot: false,
            title: "Exploring the Wonders of the Deep Sea",
            thumbnailImg: "https://picsum.photos/500/500?random=177",
            exerp: "Marine biologists have discovered new species in the depths of the ocean, unveiling the mysteries of the deep sea.",
            date: "2 Hours Ago | 28 June 2024",
            categories: "Sains",
            content: (
                <>
                    <p>
                        Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
                        tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
                        Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
                        sunyi.
                        <br />
                        <br />
                        Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
                        muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
                        tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
                        jeda iklan atau ucapan DJ antar lagu.
                        <br />
                        <br />
                        Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
                        namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
                        lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
                        dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
                        terakhir di lagu tengah diputar dinyanyikan.
                        <br />
                        Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
                        diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
                        lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
                        mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
                        <br />
                        <br />
                        Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
                        hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
                        beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
                        <br />
                        <br />
                        Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
                        tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
                        mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
                        inginkan.
                        <br />
                        <br />
                        Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
                        Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
                        baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
                        headset Vision Pro karyanya.
                        <br />
                        <br />
                        Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
                        pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
                        memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
                        di Inggris, Prancis, Jerman, Australia dan Kanada.
                        <br />
                        <br />
                        Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
                        Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
                        berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
                        tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
                        eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
                        <br />
                        <br />
                        Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
                        Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
                        berbagai layar di perangkat dengan tombol Option + Space.
                        <br />
                        <br />
                        Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
                        mendukung opsi pencarian multi-modal.
                    </p>

                </>
            )
        },
        {
            hot: true,
            title: "Economic Growth in Southeast Asia",
            thumbnailImg: "https://picsum.photos/500/500?random=810",
            exerp: "Southeast Asian countries are experiencing significant economic growth, attracting foreign investments and boosting trade.",
            date: "45 Mins Ago | 28 June 2024",
            categories: "Ekonomi",
            content: (
                <>
                    <p>
                        Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
                        tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
                        Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
                        sunyi.
                        <br />
                        <br />
                        Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
                        muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
                        tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
                        jeda iklan atau ucapan DJ antar lagu.
                        <br />
                        <br />
                        Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
                        namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
                        lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
                        dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
                        terakhir di lagu tengah diputar dinyanyikan.
                        <br />
                        Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
                        diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
                        lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
                        mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
                        <br />
                        <br />
                        Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
                        hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
                        beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
                        <br />
                        <br />
                        Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
                        tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
                        mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
                        inginkan.
                        <br />
                        <br />
                        Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
                        Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
                        baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
                        headset Vision Pro karyanya.
                        <br />
                        <br />
                        Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
                        pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
                        memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
                        di Inggris, Prancis, Jerman, Australia dan Kanada.
                        <br />
                        <br />
                        Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
                        Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
                        berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
                        tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
                        eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
                        <br />
                        <br />
                        Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
                        Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
                        berbagai layar di perangkat dengan tombol Option + Space.
                        <br />
                        <br />
                        Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
                        mendukung opsi pencarian multi-modal.
                    </p>

                </>
            )
        },
    ]
}

export const DataHighlight = [
    {
        title: 'Mau Kredit Mobil Listrik BYD Dolphin? Segini Cicilannya Tiap Bulan',
        imgUrl: 'https://images.unsplash.com/photo-1613690399151-65ea69478674?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Mau Kredit Mobil Listrik BYD Dolphin? Segini Cicilannya Tiap Bulan',
        imgUrl: 'https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Mau Kredit Mobil Listrik BYD Dolphin? Segini Cicilannya Tiap Bulan',
        imgUrl: 'https://images.unsplash.com/photo-1518527989017-5baca7a58d3c?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Mau Kredit Mobil Listrik BYD Dolphin? Segini Cicilannya Tiap Bulan',
        imgUrl: 'https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Mau Kredit Mobil Listrik BYD Dolphin? Segini Cicilannya Tiap Bulan',
        imgUrl: 'https://plus.unsplash.com/premium_photo-1661963456199-ba147a77e2a7?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
]

export const ppl = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1552642986-ccb41e7059e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]

export const DataReview = [
    {
        photo: 'https://picsum.photos/200/300?random=1',
        name: 'John Doe',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.',
        service: 'Legalitas Usaha'
    },
    {
        photo: 'https://picsum.photos/200/300?random=2',
        name: 'Jane Smith',
        review: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        service: 'Website Development'
    },
    {
        photo: 'https://picsum.photos/200/300?random=3',
        name: 'James Brown',
        review: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        service: 'Social Media Management'
    },
    {
        photo: 'https://picsum.photos/200/300?random=4',
        name: 'Mary Johnson',
        review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        service: 'Badan Usaha Lainnya'
    },
    {
        photo: 'https://picsum.photos/200/300?random=5',
        name: 'Robert Wilson',
        review: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        service: 'Konsultan Pajak'
    },
    {
        photo: 'https://picsum.photos/200/300?random=6',
        name: 'Linda Martinez',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
        service: 'Izin Tambahan'
    },
    {
        photo: 'https://picsum.photos/200/300?random=7',
        name: 'Michael Anderson',
        review: 'Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.',
        service: 'Pelayanan Managemen'
    },
    {
        photo: 'https://picsum.photos/200/300?random=8',
        name: 'Patricia Thomas',
        review: 'Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.',
        service: 'Pelayanan Akuntansi'
    },
    {
        photo: 'https://picsum.photos/200/300?random=9',
        name: 'Charles Jackson',
        review: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        service: 'Software Management System'
    },
    {
        photo: 'https://picsum.photos/200/300?random=10',
        name: 'Barbara Harris',
        review: 'Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.',
        service: 'Haki'
    },
    {
        photo: 'https://picsum.photos/200/300?random=11',
        name: 'Joseph Martin',
        review: 'Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.',
        service: 'Audit'
    },
    {
        photo: 'https://picsum.photos/200/300?random=12',
        name: 'Susan Lee',
        review: 'Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel.',
        service: 'Legalitas Usaha'
    },
    {
        photo: 'https://picsum.photos/200/300?random=13',
        name: 'Thomas Young',
        review: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
        service: 'Website Development'
    },
    {
        photo: 'https://picsum.photos/200/300?random=14',
        name: 'Jessica Walker',
        review: 'Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum.',
        service: 'Social Media Management'
    },
    {
        photo: 'https://picsum.photos/200/300?random=15',
        name: 'Daniel Hall',
        review: 'Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.',
        service: 'Badan Usaha Lainnya'
    }
];

export const DataWhyUs = {
    tag: "Kenapa Harus di Ganesha Consulting?",
    points: [
        {
            head: "Konsultasi 24 Jam!",
            logo: <Tb24Hours />,
            desc: "Kami memberikan pelayanan konsultasi kepada Client 24 Jam, Admin kami yang fast response siap melayani segala kebutuhan anda! Terjamin dan Terpercaya"
        },
        {
            head: "Terjamin dan Terpercaya",
            logo: <BiMedal />,
            desc: "Kami berkomitmen untuk memberikan solusi yang efektif dan efisien untuk menjamin kesuksesan bisnis anda, selain itu kami juga berkomitmen untuk menjaga kerahasiaan data pribadi perusahaan Anda."
        },
        {
            head: "Pelayanan Cepat",
            logo: <HiLightningBolt />,
            desc: "Jaminan konsultasi kapanpun anda butuhkan, Admin kami yang FastResponse akan siap melayani anda!"
        },
        {
            head: "Layanan Lengkap",
            logo: <RiAppsFill />,
            desc: "Jaminan konsultasi kapanpun anda butuhkan, Admin kami yang FastResponse akan siap melayani anda!"
        }
    ]
};

export const LegalItems = [
    {
        "name": "Pendirian PT",
        "link": "legalitas/pendirian-pt",
        "icon": <FaBuilding />
    },
    {
        "name": "Pendirian CV",
        "link": "legalitas/pendirian-cv",
        "icon": <FaBuilding />
    },
    {
        "name": "Pendirian Yayasan",
        "link": "legalitas/badan-usaha",
        "icon": <FaBuilding />
    },
    {
        "name": "Pendirian Firma Hukum",
        "link": "legalitas/badan-usaha",
        "icon": <FaBuilding />
    },
    {
        "name": "Pendirian Perkumpulan/Asosiasi",
        "link": "legalitas/badan-usaha",
        "icon": <FaBuilding />
    },
    {
        "name": "Pendirian Virtual Office | PKP | NIB",
        "link": "legalitas/badan-usaha",
        "icon": <FaBuilding />
    },
    {
        "name": "Konsultan Pajak",
        "link": "legalitas/badan-usaha",
        "icon": <FaBuilding />
    },
]

export const DataPageLegal = {
    legalItems: [
        {
            "name": "Pendirian PT",
            "link": "pendirian-pt",
            "icon": <FaBuilding />
        },
        {
            "name": "Pendirian CV",
            "link": "pendirian-cv",
            "icon": <FaBuilding />
        },
        {
            "name": "Pendirian Yayasan",
            "link": "badan-usaha",
            "icon": <FaBuilding />
        },
        {
            "name": "Pendirian Firma Hukum",
            "link": "badan-usaha",
            "icon": <FaBuilding />
        },
        {
            "name": "Pendirian Perkumpulan/Asosiasi",
            "link": "badan-usaha",
            "icon": <FaBuilding />
        },
        {
            "name": "Pendirian Virtual Office | PKP | NIB",
            "link": "badan-usaha",
            "icon": <FaBuilding />
        },
    ],
    explainImg: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236549/GaneshaAssets/xbmc8qinkfrafxaiudw5.svg",
    head: (
        <h1>
            Apa Itu <span className="text-mainColor dark:text-baseColor rounded-3xl">Legalitas</span> Usaha?
        </h1>
    ),
    desc: (
        <h1>
            Legalitas Usaha adalah kepatuhan suatu bisnis dengan aturan hukum yang berlaku untuk memastikan bahwa <span className="font-extrabold text-yellow-500">Bisnis mu beroperasi secara sah</span> dan sesuai dengan ketentuan hukum yang berlaku di Indonesia.
        </h1>
    ),
    whyUs: [
        {
            title: "Fasilitas Lengkap",
            description: "Ganesha Consulting menyediakan fasilitas lengkap melalui layanan legalitasnya, memastikan bahwa bisnis Anda diakui secara resmi di mata hukum."
        },
        {
            title: "Cepat dan Terpercaya",
            description: "Layanan Ganesha Consulting tidak hanya cepat, tetapi juga terpercaya. Kami memastikan proses legalitas berjalan lancar dan sesuai dengan standar hukum yang berlaku."
        },
        {
            title: "Harga Terjangkau",
            description: "Menawarkan harga yang sangat terjangkau, Ganesha Consulting memahami pentingnya efisiensi biaya bagi bisnis Anda tanpa mengorbankan kualitas pelayanan."
        },
        {
            title: "Konsultasi Gratis",
            description: "Ganesha Consulting memberikan fasilitas konsultasi gratis, memberikan pelanggan informasi dan panduan tambahan tanpa biaya tambahan."
        },
        {
            title: "Pelayanan Satu Atap",
            description: "Dengan Ganesha Consulting, Anda mendapatkan pelayanan satu atap yang mencakup semua kebutuhan legalitas bisnis Anda, memberikan kenyamanan dan efisiensi."
        }
    ],
    benefit: [
        {
            icon: <BiSolidConversation />,
            text: 'Free Konsultasi',
        },
        {
            icon: <PiStampFill />,
            text: 'Free Stempel Nama Perusahaan',
        },
        {
            icon: <BiSolidReport />,
            text: 'Free Template Laporan Keuangan',
        },
        {
            icon: <RiBankCardFill />,
            text: 'Free Pembukaan Rekening Baru',
            desc: [
                {
                    bank: 'BCA',
                    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png'
                },
                {
                    bank: 'MayBank',
                    url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjoVofoAlnBTk1SLiKLa_H8mZSGbrYOgOyj_ZDA_bxUAmeghVMUD9Hm11HPzCeg2ddZV-T1M4V3Nv1Hhmi0AuOxUiHFycqEuMF6eZr0j1Wc-hTz6JUMDzImK6zISbFFnluNHIljxUAK0--kTNbjgOxwJr9UCeX8hENG97ibxdElrdMYoswj2HXvHw/w640-h146/Maybank.png'
                },
                {
                    bank: 'Sinarmas',
                    url: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Bank_Sinarmas.png'
                },
                {
                    bank: 'Bank DKI',
                    url: 'https://cdn.healthtechalpha.com/static/corporatesById/895.png'
                }
            ]
        },
    ],
    whyLegal: [
        {
            title: "Kepatuhan Hukum",
            points: [
                {
                    heading: "Mematuhi Peraturan dan Undang-Undang",
                    description: "Legalitas usaha memastikan bahwa bisnis mematuhi semua peraturan dan undang-undang yang berlaku. Ini termasuk peraturan tentang perpajakan, ketenagakerjaan, lingkungan, dan lain-lain."
                },
                {
                    heading: "Menghindari Sanksi",
                    description: "Tanpa legalitas yang sesuai, bisnis dapat menghadapi sanksi hukum, denda, atau bahkan penutupan oleh otoritas yang berwenang."
                }
            ]
        },
        {
            title: "Kepercayaan dan Kredibilitas",
            points: [
                {
                    heading: "Kepercayaan Pelanggan",
                    description: "Usaha yang legal memberikan rasa aman dan kepercayaan kepada pelanggan, mitra bisnis, dan investor. Mereka cenderung lebih percaya dan merasa aman bertransaksi dengan bisnis yang memiliki legalitas yang jelas."
                },
                {
                    heading: "Reputasi yang Baik",
                    description: "Memiliki legalitas usaha yang lengkap dan sesuai juga meningkatkan reputasi bisnis di mata publik dan pemangku kepentingan lainnya."
                }
            ]
        },
        {
            title: "Perlindungan Hukum",
            points: [
                {
                    heading: "Hak Kekayaan Intelektual",
                    description: "Legalitas usaha memungkinkan bisnis untuk mendaftarkan merek dagang, paten, atau hak cipta, sehingga melindungi kekayaan intelektual mereka dari penyalahgunaan."
                },
                {
                    heading: "Perlindungan Bisnis",
                    description: "Legalitas usaha memberikan perlindungan hukum terhadap perselisihan atau konflik yang mungkin timbul, baik dengan pelanggan, pemasok, maupun karyawan."
                }
            ]
        },
        {
            title: "Akses ke Pembiayaan",
            points: [
                {
                    heading: "Pinjaman dan Investasi",
                    description: "Bank dan lembaga keuangan lainnya biasanya hanya memberikan pinjaman atau investasi kepada bisnis yang memiliki legalitas yang lengkap dan sesuai. Investor juga lebih cenderung berinvestasi pada bisnis yang legal."
                },
                {
                    heading: "Subsidi dan Hibah",
                    description: "Banyak program subsidi atau hibah dari pemerintah yang hanya dapat diakses oleh bisnis yang memiliki legalitas usaha yang sah."
                }
            ]
        },
        {
            title: "Kemudahan Ekspansi",
            points: [
                {
                    heading: "Ekspansi Pasar",
                    description: "Legalitas usaha memudahkan proses ekspansi ke pasar baru, baik di dalam negeri maupun internasional. Bisnis yang legal lebih mudah mendapatkan izin dan lisensi untuk beroperasi di wilayah baru."
                },
                {
                    heading: "Kemitraan Bisnis",
                    description: "Legalitas usaha memungkinkan bisnis untuk menjalin kemitraan strategis dengan perusahaan lain yang mungkin memiliki persyaratan legalitas tertentu."
                }
            ]
        },
        {
            title: "Kepastian Usaha",
            points: [
                {
                    heading: "Perlindungan Aset Pribadi",
                    description: "Struktur bisnis yang legal, seperti perseroan terbatas, dapat melindungi aset pribadi pemilik dari kewajiban bisnis."
                },
                {
                    heading: "Keberlanjutan Usaha",
                    description: "Legalitas usaha memberikan dasar yang kuat untuk kelangsungan dan perkembangan bisnis dalam jangka panjang."
                }
            ]
        }
    ],
    faqData: [
        {
            question: "Berapa lama pembuatan PT?",
            answer: "Lama Proses Pembuatan PT di Ganesha Consulting adalah 2 Hari Kerja setelah proses tandatangan akta pendirian."
        },
        {
            question: "Berapa banyak KBLI yang bisa dipilih?",
            answer: "Total KBLI yang bisa dipilih di Ganesha Consulting sebanyak 15 KBLI."
        },
        {
            question: "Apa saja syarat mendirikan PT?",
            answer: (
                <>
                    <ul className="list-item list-decimal mx-5">
                        <li>
                            Minimal dua pendiri yang merupakan WNI atau badan hukum Indonesia.,
                        </li>
                        <li>
                            Akta pendirian yang disahkan oleh notaris.,
                        </li>
                        <li>
                            Modal dasar minimal sesuai dengan ketentuan yang berlaku.,
                        </li>
                        <li>
                            Nama perusahaan yang disetujui oleh Kemenkumham.,
                        </li>
                        <li>
                            Domisili perusahaan yang jelas.,
                        </li>
                        <li>
                            NPWP perusahaan.,
                        </li>
                        <li>
                            Izin usaha dan dokumen pendukung lainnya.
                        </li>
                    </ul>
                </>
            )
        },
        {
            question: "Apakah pendirian PT membutuhkan modal besar?",
            answer: "Modal dasar minimal PT ditentukan oleh ketentuan yang berlaku, dan dapat disesuaikan dengan kemampuan pendiri."
        },
        {
            question: "Apa itu KBLI?",
            answer: "KBLI, atau Klasifikasi Baku Lapangan Usaha Indonesia, adalah sistem klasifikasi yang digunakan untuk menggolongkan berbagai jenis kegiatan usaha di Indonesia. KBLI disusun oleh Badan Pusat Statistik (BPS) dan digunakan sebagai acuan resmi dalam pendaftaran dan perizinan usaha di Indonesia."
        },
        {
            question: "Apa Kegunaan KBLI?",
            answer: (
                <>
                    <ul className="list-item list-decimal mx-5">
                        <li>
                            Pendaftaran Usaha: Mengidentifikasi jenis kegiatan usaha saat pendaftaran.
                        </li>
                        <li>
                            Perizinan: Membantu pemerintah dalam mengeluarkan izin usaha.
                        </li>
                        <li>
                            Statistik dan Data: Mengumpulkan data ekonomi untuk perencanaan dan kebijakan.
                        </li>
                        <li>
                            Penyusunan Regulasi: Dasar dalam membuat kebijakan dan regulasi.
                        </li>
                        <li>
                            Analisis Ekonomi: Memfasilitasi analisis dan pengembangan sektor usaha.
                        </li>
                    </ul>
                </>
            )
        },
        {
            question: "Bolehkah pemegang saham menjadi pengurus PT?",
            answer: "Boleh! Pemegang saham boleh menjadi Direktur ataupun menjadi Komisaris. Namun tidak boleh menjadi Direktur yang merangkap sebagai Komisaris."
        },
        {
            question: "Bagaimana cara melakukan setor modal?",
            answer: "Modal bisa langsung saja disetorkan ke dalam kas perusahaan."
        },
        {
            question: "Apa saja jenis badan usaha selain PT?",
            answer: (
                <>
                    <ul className="list-item list-decimal mx-5">
                        <li>
                            CV (Commanditaire Vennootschap): Persekutuan komanditer.
                        </li>
                        <li>
                            Firma (Fa): Persekutuan yang didirikan untuk menjalankan usaha bersama.
                        </li>
                        <li>
                            Perusahaan Perorangan: Usaha yang dimiliki dan dijalankan oleh satu orang.
                        </li>
                    </ul>
                </>
            )
        },
        {
            question: "Apa saja tanggung jawab pemegang saham dalam PT?",
            answer: "Pemegang saham bertanggung jawab atas kewajiban perusahaan sebatas jumlah saham yang dimiliki."
        }
    ],
    whyUsData: [
        {
            text: "Harga Ekonomis",
            icon: <FaMoneyBill1Wave />
        },
        {
            text: "Proses Super Cepat",
            icon: <FaBoltLightning />
        },
        {
            text: "Anti Ribet",
            icon: <IoLeaf />
        },
        {
            text: "Kreatif & Inovatif",
            icon: <TbBulbFilled />
        },
        {
            text: "Ditangani Profesional",
            icon: <IoSparkles />
        }
    ]
}
