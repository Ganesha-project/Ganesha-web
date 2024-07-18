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
import { BiMedal } from "react-icons/bi";

export const DataProduct = [
    {
        href: "/all-products/legalitas",
        icon: <GoLaw />,
        text: "Legalitas Usaha",
        keywords: ["legalitas usaha", "pendirian usaha", "dokumen legal", "perijinan usaha", "badan usaha", "usaha resmi"]
    },
    {
        href: "/all-products/web",
        icon: <TbWorldWww />,
        text: "Website Development",
        keywords: ["website development", "pembuatan website", "pengembangan situs web", "desain web", "web developer", "jasa pembuatan website"]
    },
    {
        href: "/all-products/sosmed",
        icon: <HiMiniDevicePhoneMobile />,
        text: "Social Media Management",
        keywords: ["social media management", "manajemen media sosial", "sosmed", "pengelolaan sosmed", "strategi media sosial", "konten sosmed"]
    },
    {
        href: "/all-products/legalitas/badan-usaha",
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
    }
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
            href: '/all-products',
            label: 'All Products'
        },
        {
            href: '/all-products/sosmed',
            label: 'Social Media Management'
        },
        {
            href: '/all-products/web',
            label: 'Website Development'
        },
        {
            href: '/all-products/legalitas',
            label: 'Legalitas Bisnis'
        },
        {
            href: '/all-products/legalitas/badan-usaha',
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
            href: '/all-products/legalitas/pendirian-pt',
            label: 'Legalitas PT'
        },
        {
            href: '/all-products/legalitas/pendirian-cv',
            label: 'Legalitas CV'
        },
        {
            href: '/all-products/legalitas/badan-usaha',
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
            logo: <Tb24Hours/>,
            desc: "Kami memberikan pelayanan konsultasi kepada Client 24 Jam, Admin kami yang fast response siap melayani segala kebutuhan anda! Terjamin dan Terpercaya"
        },
        {
            head: "Terjamin dan Terpercaya",
            logo: <BiMedal/>,
            desc: "Kami berkomitmen untuk memberikan solusi yang efektif dan efisien untuk menjamin kesuksesan bisnis anda, selain itu kami juga berkomitmen untuk menjaga kerahasiaan data pribadi perusahaan Anda."
        },
        {
            head: "Pelayanan Cepat",
            logo: <HiLightningBolt/>,
            desc: "Jaminan konsultasi kapanpun anda butuhkan, Admin kami yang FastResponse akan siap melayani anda!"
        },
        {
            head: "Layanan Lengkap",
            logo: <RiAppsFill/>,
            desc: "Jaminan konsultasi kapanpun anda butuhkan, Admin kami yang FastResponse akan siap melayani anda!"
        }
    ]
};