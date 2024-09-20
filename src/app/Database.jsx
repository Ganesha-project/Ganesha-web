import { HiMiniDevicePhoneMobile, } from "react-icons/hi2";
import { TbMail, TbMailFilled, TbWorldWww, TbMathSymbols, TbHours24 } from "react-icons/tb";
import { GoLaw } from "react-icons/go";
import { FaBuildingWheat, FaUserTie } from "react-icons/fa6";
import { RiAppsFill, RiBookOpenFill, RiBookOpenLine, RiFacebookBoxFill, RiFilePaperFill, RiHomeFill, RiHomeLine, RiInstagramFill, RiLinkedinFill, RiSearchFill, RiSearchLine, RiWhatsappFill } from "react-icons/ri";
import { MdHomeRepairService } from "react-icons/md";
import { SiReadthedocs } from "react-icons/si";
import { HiDeviceMobile, HiLightningBolt, HiOfficeBuilding, HiReceiptTax } from "react-icons/hi";
import { IoSearchCircle } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { RiBuilding2Fill } from "react-icons/ri";
import { BiMedal } from "react-icons/bi";
import { BsBuildingAdd, BsBuildingFillAdd } from "react-icons/bs";

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
        href: "/social-media-management",
        icon: <HiMiniDevicePhoneMobile />,
        text: "Social Media Management",
        keywords: ["social media management", "manajemen media sosial", "sosmed", "pengelolaan sosmed", "strategi media sosial", "konten sosmed"]
    },
    {
        href: "/badan-usaha",
        icon: <FaBuildingWheat />,
        text: "Badan Usaha Lainnya",
        keywords: ["badan usaha lainnya", "jenis badan usaha", "pendirian badan usaha", "dokumen badan usaha", "usaha kecil", "usaha menengah"]
    },
    {
        href: "/virtual-office",
        icon: <RiBuilding2Fill />,
        text: "Virtual Office",
        keywords: ["vrtual office", "virtual", "ofice"]
    },
    {
        href: "/konsultan-pajak",
        icon: <HiReceiptTax />,
        text: "Konsultan Pajak",
        keywords: ["konsultan pajak", "jasa konsultan pajak", "perencanaan pajak", "penyusunan pajak", "laporan pajak", "konsultasi pajak"]
    },
    {
        href: "/perizinan",
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
];

export const NavLinks = {
    main: [
        {
            href: '/',
            label: 'Home',
            desc: "Mulai perjalanan Anda bersama kami!",
            accent: "dark:bg-[#b5b9dd] bg-[#42497A]",
        },
        {
            href: '/contact',
            label: 'Hubungi Kami',
            desc: "Selalu Siap Memberikan Solusi Terbaik untuk Anda!",
            accent: "dark:bg-[#b5b9dd] bg-[#42497A]",
        },
    ],
    productsAndServices: [
        {
            href: '/services',
            icon: <IoSearchCircle />,
            label: 'Find Services',
            desc: "Temukan berbagai layanan terbaik kami untuk membantu bisnis Anda berkembang.",
            accent: "dark:bg-[#b0f1ad] bg-[#cbdfc9]",
        },
        {
            href: '/social-media-management',
            icon: <HiMiniDevicePhoneMobile />,
            label: 'Social Media Management',
            desc: "Sosial Media Manajemen adalah kunci sukses modern untuk membentuk citra merek yang kuat.",
            accent: "dark:bg-[#a889ef] bg-[#a889ef96]",
        },
        {
            href: '/web-development',
            icon: <TbWorldWww />,
            label: 'Website Development',
            desc: "Optimalkan presensi digital perusahaan Anda dengan layanan pembuatan website kami.",
            accent: "dark:bg-[#6ABDE7] bg-[#6abde776]",
        },
        {
            href: '/legalitas',
            icon: <GoLaw />,
            label: 'Legalitas Bisnis',
            desc: "Kami hadir bersama Konsultan yang profesional untuk memberikan pelayanan Legalitas terbaik.",
            accent: "dark:bg-[#adb9f1] bg-[#6077e749]",
        },
        {
            href: '/badan-usaha',
            icon: <FaBuildingWheat />,
            label: 'Badan Usaha Lainnya',
            desc: "Mulai Bisnis Anda dengan Langkah Yang Tepat! Kami menyediakan layanan pendirian badan usaha yang cepat.",
            accent: "dark:bg-[#9da8b6] bg-[#64758B95]",
        },
        {
            href: '/virtual-office',
            icon: <RiBuilding2Fill />,
            label: 'Virtual Office',
            desc: "Layanan audit profesional kami memberikan keyakinan terhadap informasi keuangan Anda.",
            accent: "dark:bg-[#b4bdc6] bg-[#D1D2D399]",
        },
        {
            href: '/konsultan-pajak',
            icon: <HiReceiptTax />,
            label: 'Konsultan Pajak',
            desc: "Optimalisasi Pajak Anda dengan Bantuan Ahli Pajak Terpercaya!",
            accent: "dark:bg-[#a5908e] bg-[#89524F76]",
        },
        {
            href: '/perizinan',
            icon: <RiFilePaperFill />,
            label: 'Izin Tambahan',
            desc: "Bantuan penuh pengalaman untuk memperoleh izin tambahan secara cepat dan efisien.",
            accent: "dark:bg-[#cfe5dd] bg-[#cfe5ddb5]",
        },
        {
            href: '/pelayanan-manajemen',
            icon: <MdHomeRepairService />,
            label: 'Pelayanan Manajemen',
            desc: "Bantuan penuh pengalaman untuk memperoleh izin tambahan secara cepat dan efisien.",
            accent: "dark:bg-[#e39f8c] bg-[#e39f8cb5]",
        },
        {
            href: '/pelayanan-akuntansi',
            icon: <TbMathSymbols />,
            label: 'Pelayanan Akuntansi',
            desc: "Dukungan akuntansi terpercaya untuk pencatatan keuangan dan pelaporan pajak.",
            accent: "dark:bg-[#70bcb1] bg-[#70bcb1a8]",
        },
        {
            href: '/software-management-system',
            icon: <RiAppsFill />,
            label: 'Software Management System',
            desc: "Solusi terkini untuk meningkatkan efisiensi dan kinerja operasional.",
            accent: "dark:bg-[#ecace7] bg-[#fd8cf49d]",
        },
        {
            href: '/haki',
            icon: <SiReadthedocs />,
            label: 'HAKI',
            desc: "Lindungi merek, hak cipta, dan paten bisnis Anda dengan layanan HAKI kami.",
            accent: "dark:bg-[#eb9090] bg-[#eb9090]",
        },
        {
            href: '/audit',
            icon: <FaUserTie />,
            label: 'Audit',
            desc: "Layanan Audit profesional kami memberikan keyakinan terhadap informasi keuangan Anda.",
            accent: "dark:bg-[#ead08d] bg-[#ead08d99]",
        },
    ],
    legalities: [
        {
            href: '/pendirian-pt',
            icon: <BsBuildingAdd />,
            label: 'Legalitas PT',
            desc: "Ayo Mulai Bisnis Anda dengan Langkah Tepat! Kami menyediakan layanan pendirian PT yang cepat.",
            accent: "dark:bg-[#8BD9D2] bg-[#8bd9d370]",
        },
        {
            href: '/pendirian-cv',
            icon: <HiOfficeBuilding />,
            label: 'Legalitas CV',
            desc: "Ayo Mulai Bisnis Anda dengan Langkah Tepat! Kami menyediakan layanan pendirian CV yang cepat.",
            accent: "dark:bg-[#E8D0BE] bg-[#e8d0be93]",
        },
        {
            href: '/badan-usaha',
            icon: <FaBuildingWheat />,
            label: 'Legalitas Badan Usaha Lainnya',
            desc: "Mulai Bisnis Anda dengan Langkah Yang Tepat! Kami menyediakan layanan pendirian badan usaha yang cepat.",
            accent: "dark:bg-[#9da8b6] bg-[#64758B95]",
        },
    ],
    others: [
        {
            href: '/price-list',
            label: 'List Harga',
            desc: "Jelajahi pilihan paket kami dan temukan opsi yang sesuai dengan kebutuhan Anda.",
            accent: "dark:bg-[#cf9898] bg-[#cd7575]",
        },
        {
            href: '/article',
            label: 'Artikel',
            desc: "Baca artikel terbaru kami untuk mendapatkan wawasan lebih lanjut.",
            accent: "dark:bg-[#adb9f1] bg-[#6077e749]",
        },
        {
            href: '/about-us',
            label: 'About Us',
            desc: "Kami menyediakan solusi all-in-one untuk bisnis Anda, lebih lanjut.",
            accent: "dark:bg-[#D398D9] bg-[#d298d98e]",
        },
        {
            href: '/contact',
            label: 'Hubungi Kami',
            desc: "Selalu Siap Memberikan Solusi Terbaik untuk Anda!",
            accent: "dark:bg-[#b5b9dd] bg-[#42497A]",
        },
    ]
};

export const BtmNavigationLinks = {
    main: [
        {
            icon: <RiHomeLine />,
            iconActive: <RiHomeFill />,
            label: "Home",
            link: "/"
        },
        {
            icon: <RiSearchLine />,
            iconActive: <RiSearchFill />,
            label: "Search",
            link: "/services"
        },
        {
            icon: <RiBookOpenLine />,
            iconActive: <RiBookOpenFill />,
            label: "Articles",
            link: "/article"
        },
    ],
    drawerMain: [
        {
            href: '/services',
            icon: <IoSearchCircle />,
            label: 'Find Services',
            desc: "Temukan berbagai layanan terbaik kami untuk membantu bisnis Anda berkembang.",
            accent: "bg-[#89af85]",
        },

        {
            href: '/social-media-management',
            icon: <RiInstagramFill />,
            label: 'Social Media Management',
            accent: " bg-[#a889ef96]",
        },
        {
            href: '/web-development',
            icon: <TbWorldWww />,
            label: 'Website Development',
            accent: " bg-[#6abde776]",
        },
        {
            href: '/virtual-office',
            icon: <RiBuilding2Fill />,
            label: 'Virtual Office',
            desc: "Layanan audit profesional kami memberikan keyakinan terhadap informasi keuangan Anda.",
            accent: "bg-[#D1D2D399]",
        },
    ],
    legalities: [
        {
            href: '/legalitas',
            icon: <GoLaw />,
            label: 'Legalitas Bisnis',
            accent: " bg-[#6077e749]",
        },
        {
            href: '/pendirian-pt',
            icon: <BsBuildingFillAdd />,
            label: 'Pendirian PT',
            desc: "Ayo Mulai Bisnis Anda dengan Langkah Tepat! Kami menyediakan layanan pendirian PT yang cepat.",
            accent: "bg-[#8bd9d370]",
        },
        {
            href: '/pendirian-cv',
            icon: <HiOfficeBuilding />,
            label: 'Pendirian CV',
            desc: "Ayo Mulai Bisnis Anda dengan Langkah Tepat! Kami menyediakan layanan pendirian CV yang cepat.",
            accent: "bg-[#e8d0be93]",
        },
        {
            href: '/badan-usaha',
            icon: <FaBuildingWheat />,
            label: 'Badan Usaha',
            desc: "Mulai Bisnis Anda dengan Langkah Yang Tepat! Kami menyediakan layanan pendirian badan usaha yang cepat.",
            accent: "bg-[#64758B95]",
        },
    ],
    other: [
        {
            href: '/konsultan-pajak',
            icon: <HiReceiptTax />,
            label: 'Pajak',
            desc: "Optimalisasi Pajak Anda dengan Bantuan Ahli Pajak Terpercaya!",
            accent: "bg-[#89524F76]",
        },
        {
            href: '/perizinan',
            icon: <RiFilePaperFill />,
            label: 'Perizinan',
            desc: "Bantuan penuh pengalaman untuk memperoleh izin tambahan secara cepat dan efisien.",
            accent: "bg-[#cfe5ddb5]",
        },
        // {
        //     href: '/pelayanan-manajemen',
        //     icon: <MdHomeRepairService />,
        //     label: 'Pelayanan Manajemen',
        //     desc: "Bantuan penuh pengalaman untuk memperoleh izin tambahan secara cepat dan efisien.",
        //     accent: "bg-[#e39f8cb5]",
        // },
        {
            href: '/pelayanan-akuntansi',
            icon: <TbMathSymbols />,
            label: 'Pelayanan Akuntansi',
            desc: "Dukungan akuntansi terpercaya untuk pencatatan keuangan dan pelaporan pajak.",
            accent: "bg-[#70bcb1a8]",
        },
        // {
        //     href: '/software-management-system',
        //     icon: <RiAppsFill />,
        //     label: 'Software Management System',
        //     desc: "Solusi terkini untuk meningkatkan efisiensi dan kinerja operasional.",
        //     accent: "bg-[#fd8cf49d]",
        // },
        {
            href: '/haki',
            icon: <SiReadthedocs />,
            label: 'HAKI',
            desc: "Lindungi merek, hak cipta, dan paten bisnis Anda dengan layanan HAKI kami.",
            accent: "bg-[#eb9090]",
        },
        // {
        //     href: '/audit',
        //     icon: <FaUserTie />,
        //     label: 'Audit',
        //     desc: "Layanan Audit profesional kami memberikan keyakinan terhadap informasi keuangan Anda.",
        //     accent: "bg-[#ead08d99]",
        // },
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
            accent: "bg-[#9da8b6] dark:bg-[#64758B95]",
            accent2: "bg-[#F6B81C] dark:bg-[#f6b81c99]",
            textAccent: "dark:text-[#bac6da] text-[#4e4e4e]"
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
            accent: "bg-[#a889ef] dark:bg-[#a889ef96]",
            accent2: "bg-[#D89BC6] dark:bg-[#d89bc6a3]",
            textAccent: "dark:text-[#baa9e3] text-[#8B5CF6]"
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
        href: "virtual-office",
        data: {
            bannerImage: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1723691284/GaneshaAssets/bqp9x1unwnsqwx1ulgmr.png",
            mainText: "Virtual Office",
            desc: "Layanan Audit profesional kami memberikan keyakinan terhadap informasi keuangan Anda, mengidentifikasi risiko, dan memperbaiki kontrol internal.",
            accent: "bg-[#b4bdc6] dark:bg-[#D1D2D399]",
            accent2: "bg-[#89CEE8] dark:bg-[#89CEE8]",
            textAccent: "dark:text-[#D1D2D3] text-[#636b74]"
        },
    },
    {
        href: "audit",
        data: {
            bannerImage: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722231099/GaneshaAssets/av6v4iikb50xagea3vwx.svg",
            mainText: "System Audit",
            desc: "Layanan Audit profesional kami memberikan keyakinan terhadap informasi keuangan Anda, mengidentifikasi risiko, dan memperbaiki kontrol internal.",
            accent: "bg-[#ead08d] dark:bg-[#ead08d99]",
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
        href: "pelayanan-akuntansi",
        data: {
            bannerImage: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236557/GaneshaAssets/f7ivo4yqe6wkvzvrkcun.svg",
            mainText: "Pelayanan Akuntantsi",
            desc: "Dukungan akuntansi terpercaya untuk pencatatan keuangan, pelaporan pajak, dan analisis keuangan yang akurat.",
            accent: "bg-[#70bcb1] dark:bg-[#70bcb1a8]",
            accent2: "bg-[#FF9092] dark:bg-[#ff9092d1]",
            textAccent: "dark:text-[#26d3b9] text-[#019C85]"
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
        href: "haki",
        data: {
            bannerImage: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236555/GaneshaAssets/gzm4wdyvieietlozpwbt.svg",
            mainText: "HAKI - Hak Kekayaan Intelektual",
            desc: "Lindungi merek, hak cipta, dan paten bisnis Anda dengan layanan HAKI kami, memberikan keunggulan kompetitif.",
            accent: "bg-[#eb9090] dark:bg-[#eb9090]",
            accent2: "bg-[#aa9168] dark:bg-[#aa9168]",
            textAccent: "dark:text-[#eb9090] text-[#eb9090]"
        },
    },
    {
        href: "price-list",
        data: {
            bannerImage: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236551/GaneshaAssets/gdoh9ffyjrko6vj4gms3.svg",
            mainText: "Daftar Harga Paket Kami",
            desc: "Jelajahi pilihan paket kami dan temukan opsi yang sesuai dengan kebutuhan Anda. Klik untuk melihat harga dan dapatkan layanan terbaik dari kami!",
            accent: "bg-[#cf9898] dark:bg-[#cd7575]",
            accent2: "bg-[#7FAEF1] dark:bg-[#7FAEF1]",
            textAccent: "dark:text-[#eb9090] text-[#eb9090]"
        },
    },
    {
        href: "contact",
        data: {
            bannerImage: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236562/GaneshaAssets/lless9yoyqqflx15prvq.svg",
            mainText: "Layanan Konsultasi 24 jam!",
            desc: "Selalu Siap Memberikan Solusi Terbaik untuk Anda!",
            accent: "bg-[#b5b9dd] dark:bg-[#42497A]",
            accent2: "bg-[#FE5455] dark:bg-[#FE5455]",
            textAccent: "dark:text-[#c0c4e8] text-[#6f79c3]"
        },
    },
    {
        href: "about-us",
        data: {
            bannerImage: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236582/GaneshaAssets/jdmjdjpcfgaa51jxv85u.png",
            mainText: "Ganesha Consulting",
            desc: "Kami menyediakan solusi all-in-one untuk bisnis anda, mulai dari pengembangan website, sosial media manajemen, legalitas usaha, desain grafis, perpajakan, dan perizinan lainnya. Lebih Lanjut",
            accent: "bg-[#D398D9] dark:bg-[#d298d98e]",
            accent2: "bg-[#75297C] dark:bg-[#75297C]",
            textAccent: "dark:text-[#D398D9] text-[#71237a]",
            visibility: "hidden"
        },
    },
];

export const WhyUsData = {
    tag: "Kenapa Harus di Ganesha Consulting?",
    points: [
        {
            head: "Konsultasi 24 Jam!",
            logo: <TbHours24 />,
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

export const dataContact = {
    mail: [
        {
            label: "Email",
            icon: <TbMailFilled />,
            data: "ganehsamultikreatif@gmail.com",
            link: "mailto:ganehsamultikreatif@gmail.com"
        },
        {
            label: "Email",
            icon: <TbMail />,
            data: "commercial@ganeshaconsulting.co.id",
            link: "mailto:commercial@ganeshaconsulting.co.id"
        }
    ],
    phone: [
        {
            label: "Phone",
            icon: <IoIosCall />,
            data: "+62 888 712 7000",
            link: "tel:628887127000"
        }
    ],
    media: [
        {
            label: "Instagram",
            icon: <RiInstagramFill />,
            data: "@ganeshamultikreatif",
            link: "https://www.instagram.com/ganeshamultikreatif?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        },
        {
            label: "Facebook",
            icon: <RiFacebookBoxFill />,
            class: "bg-gradient-to-b to-transparent from-[#EA5554] !text-white",
            data: "Ganesha Consulting",
            link: "https://www.facebook.com/profile.php?id=61555739807086"
        },
        {
            label: "LinkedIn",
            icon: <RiLinkedinFill />,
            data: "Ganesha Multi Kreatif",
            link: "https://www.linkedin.com/company/ganesha-multi-kreatif/"
        },
        {
            label: "WhatsApp",
            icon: <RiWhatsappFill />,
            data: "+62 888 712 7000",
            link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo%20Ganesha%20Consulting"
        }
    ],
    address: [
        {
            label: "Operational Office",
            data: "Jl. Raya Masjid Al Hidayah No.5, RT.6/RW.7, Pejaten Barat, Pasar Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12510",
            embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126905.92489499568!2d106.7575353514891!3d-6.288666897638287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3007a6e8e39%3A0xf83b477d03a6931f!2sGANESHA%20CONSULTING%20-%20OPERATIONAL!5e0!3m2!1sid!2sid!4v1723453298072!5m2!1sid!2sid",
            link: "https://maps.app.goo.gl/jvz8ScJZtUmAnT7SA"
        },
        {
            label: "Head Office",
            data: "Menara Cakrawala 12th Floor Unit 5A, Jalan M.H. Thamrin, Desa/Kelurahan Kebon Sirih, Kec. Menteng, Kota Adm. Jakarta Pusat, Provinsi DKI Jakarta 10340",
            embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.586712234682!2d106.82116857499005!3d-6.1860248938015285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f428abe15763%3A0x7c3a05b23a1bfef!2sMenara%20Cakrawala!5e0!3m2!1sid!2sid!4v1723453764481!5m2!1sid!2sid",
            link: "https://maps.app.goo.gl/8wg4sGKQiffsFRML8"
        }
    ]
};

export const dataFormContact = [
    {
        placeholder: "Nama",
        name: "nama"
    },
    {
        placeholder: "Email",
        name: "email"
    },
    {
        placeholder: "Telepon",
        name: "phone"
    },
];

export const dataAboutus = {
    content: (
        <>
            <p>
                Kami Ganesha Multi Kreatif adalah penyedia layanan terpadu yang mengedepankan profesionalisme dan inovasi untuk mendukung kesuksesan bisnis Anda. Kami adalah semangat anak muda yang mengedepankan kreativitas dan professionalitas. "Ganesha" merupakan simbol dari harapan dan keberuntungan, sementara "Multi Kreatif" mencerminkan kemampuan serbaguna kami.
            </p>
            <p>
                Sebagai konsultan yang inovatif, kami menawarkan berbagai macam layanan diantaranya adalah Pendirian Badan Usaha, Pengurusan Perizinan, Pembuatan Website, Desain Grafis, Pengelolaan Sosial Media, Konsultasi Pajak dan layanan eksklusif lainnya. Kami berkomitmen untuk memberikan pelayanan yang berkualitas dan kreatif, menjadikan kami destinasi satu atap untuk mejadi solusi kesuksesan bisnis Anda.
            </p>
        </>
    ),
    vision: (
        <>
            <p>
                Menjadikan kami pusat kreativitas dan solusi bisnis terkemuka kepada klien untuk mencapai potensi penuh melalui berbagai macam layanan yang kami berikan.
            </p>
        </>
    ),
    mission: [
        "Menjadi Mitra Terpercaya dalam Solusi Legalitas",
        "Menciptakan Website yang Menarik dan Fungsional",
        "Memberikan Layanan Perpajakan yang Profesional",
        "Menyediakan Layanan Perizinan yang Cepat dan Efisien",
        "Menyediakan Beragam Jasa Lainnya dengan Kualitas Terbaik"
    ],
    support: [
        "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236583/GaneshaAssets/dyk0z2tljjojwiu6sjiy.png",
        "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236582/GaneshaAssets/ujefi3yj3hdylvkfy8cj.png",
        "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236582/GaneshaAssets/isqbllhdm2budvmyd005.png",
    ]
};

export const FaqMainData = {
    BadanUsaha: [
        {
            question: "Apa itu pendirian badan usaha?",
            answer: "Pendirian badan usaha adalah proses formal untuk mendirikan sebuah entitas hukum yang sah, seperti PT (Perseroan Terbatas) atau CV (Commanditaire Vennootschap), yang akan menjalankan kegiatan bisnis secara legal."
        },
        {
            question: "Apa yang diperlukan untuk mendirikan badan usaha?",
            answer: "Dokumen yang diperlukan termasuk Akta Pendirian, NPWP, NIB Berbasis Resiko, dan dokumen pendukung lainnya sesuai jenis badan usaha yang didirikan."
        },
        {
            question: "Berapa lama proses pendirian badan usaha?",
            answer: "Proses pendirian badan usaha biasanya memakan waktu antara 2-3 Hari kerja setelah Akta Perusahaan ditandatangani."
        }
    ],
    Haki: [
        {
            question: "Apa itu HAKI?",
            answer: "HAKI (Hak Atas Kekayaan Intelektual) mencakup hak cipta, hak paten, hak merek, dan hak desain industri yang memberikan perlindungan hukum terhadap hasil kreativitas dan inovasi."
        },
        {
            question: "Mengapa penting untuk mendaftarkan HAKI?",
            answer: "Pendaftaran HAKI penting untuk melindungi hak cipta dan kekayaan intelektual Anda dari pelanggaran dan penyalahgunaan oleh pihak lain, serta memberikan hak eksklusif atas penggunaan dan eksploitasi."
        },
        {
            question: "Bagaimana cara mendaftarkan HAKI?",
            answer: "Proses pendaftaran HAKI melibatkan pengajuan permohonan ke lembaga terkait seperti DJKI (Direktorat Jenderal Kekayaan Intelektual) dengan menyertakan dokumen dan bukti pendukung."
        }
    ],
    Web: [
        {
            question: "Apa saja yang termasuk dalam jasa pembuatan website?",
            answer: "Jasa pembuatan website mencakup desain, pengembangan, pemrograman, pengaturan hosting, dan optimisasi SEO untuk memastikan website berfungsi dengan baik dan sesuai kebutuhan Anda."
        },
        {
            question: "Berapa lama waktu yang dibutuhkan untuk membuat website?",
            answer: "Waktu pembuatan website bervariasi tergantung pada kompleksitas dan fitur yang diinginkan."
        },
        {
            question: "Apakah ada biaya tambahan setelah website selesai dibuat?",
            answer: "Biaya tambahan mungkin dikenakan untuk layanan pemeliharaan, pembaruan, atau fitur tambahan yang tidak termasuk dalam paket awal."
        }
    ],
    Software: [
        {
            question: "Apa itu Software Management System?",
            answer: "Software Management System adalah sistem perangkat lunak yang dirancang untuk mengelola dan mengatur penggunaan, distribusi, dan pemeliharaan perangkat lunak di dalam organisasi."
        },
        {
            question: "Apa manfaat menggunakan Software Management System?",
            answer: "Manfaatnya termasuk efisiensi dalam pengelolaan lisensi perangkat lunak, pengurangan risiko hukum, dan peningkatan produktivitas serta keamanan TI."
        },
        {
            question: "Apakah sistem ini memerlukan pelatihan khusus?",
            answer: "Ya, pelatihan mungkin diperlukan untuk memastikan staf dapat menggunakan sistem dengan efektif dan memanfaatkan semua fiturnya."
        }
    ],
    Pajak: [
        {
            question: "Apa itu konsultasi perpajakan?",
            answer: "Konsultasi perpajakan adalah layanan profesional yang membantu perusahaan dan individu dalam perencanaan pajak, kepatuhan, dan pengelolaan kewajiban pajak mereka."
        },
        {
            question: "Apa manfaat dari konsultasi perpajakan?",
            answer: "Manfaatnya termasuk optimasi pengurangan pajak, kepatuhan terhadap regulasi perpajakan, dan perlindungan dari potensi masalah hukum terkait pajak."
        },
        {
            question: "Bagaimana cara memulai konsultasi perpajakan?",
            answer: "Anda dapat memulai dengan menghubungi kami untuk penjadwalan sesi konsultasi di mana kami akan membahas kebutuhan perpajakan Anda dan merancang strategi yang sesuai."
        }
    ],
    Perizinan: [
        {
            question: "Apa yang dimaksud dengan perizinan?",
            answer: "Perizinan adalah proses mendapatkan izin resmi dari pemerintah atau lembaga terkait untuk menjalankan aktivitas bisnis tertentu secara legal."
        },
        {
            question: "Apa saja jenis izin yang diperlukan untuk bisnis?",
            answer: "Jenis izin bervariasi tergantung pada jenis bisnis dan lokasi, seperti Izin Lokasi, dan izin khusus sesuai dengan industri."
        },
        {
            question: "Berapa lama proses perizinan?",
            answer: "Waktu proses perizinan tergantung pada jenis izin dan kecepatan lembaga pemerintahan dalam memproses permohonan."
        }
    ],
    Sosmed: [
        {
            question: "Apa itu Social Media management?",
            answer: "Social media management adalah layanan yang mengelola akun media sosial perusahaan, termasuk pembuatan konten, penjadwalan, interaksi dengan audiens, dan analisis hasil."
        },
        {
            question: "Mengapa penting untuk menggunakan Social Media Management?",
            answer: "Social media management membantu membangun dan mempertahankan kehadiran online yang konsisten, meningkatkan keterlibatan audiens, dan memanfaatkan peluang pemasaran."
        },
        {
            question: "Apa saja yang termasuk dalam layanan Social Media Management?",
            answer: "Layanan termasuk pengelolaan akun, pembuatan dan kurasi konten, penjadwalan posting, pemantauan interaksi, serta laporan dan analisis performa."
        }
    ],
    Audit: [
        {
            question: "Apa itu audit?",
            answer: "Audit adalah evaluasi sistematis terhadap laporan keuangan, sistem, dan proses bisnis untuk memastikan akurasi, kepatuhan, dan efektivitas."
        },
        {
            question: "Apa perbedaan antara audit internal dan audit eksternal?",
            answer: "Audit internal dilakukan oleh auditor internal untuk menilai kontrol internal dan proses operasional, sedangkan audit eksternal dilakukan oleh auditor independen untuk menilai laporan keuangan perusahaan."
        },
        {
            question: "Mengapa perusahaan memerlukan audit?",
            answer: "Audit membantu memastikan laporan keuangan akurat, mematuhi regulasi, mengidentifikasi risiko, dan meningkatkan kepercayaan investor serta pemangku kepentingan lainnya."
        }
    ],
    Accounting: [
        {
            question: "Apa yang dimaksud dengan accounting?",
            answer: "Accounting adalah proses pencatatan, klasifikasi, dan pelaporan transaksi keuangan perusahaan untuk menyediakan informasi yang akurat tentang kondisi keuangan dan hasil operasional."
        },
        {
            question: "Apa manfaat dari layanan accounting?",
            answer: "Layanan accounting membantu perusahaan dalam pengelolaan keuangan yang efektif, kepatuhan perpajakan, pembuatan laporan keuangan, dan perencanaan keuangan."
        },
        {
            question: "Apakah layanan accounting termasuk pelaporan pajak?",
            answer: "Ya, layanan accounting sering kali mencakup pelaporan pajak dan membantu perusahaan mematuhi kewajiban perpajakan serta mengoptimalkan kewajiban pajak."
        }
    ]
};

export const DataSelectFilterArticle = [
    { label: "Newest", value: "desc" },
    { label: "Oldest", value: "asc" }
]