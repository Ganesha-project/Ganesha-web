import { HiMiniDevicePhoneMobile, } from "react-icons/hi2";
import { Tb24Hours, TbMail, TbMailFilled, TbWorldWww } from "react-icons/tb";
import { GoLaw } from "react-icons/go";
import { FaBuildingWheat, FaUserTie } from "react-icons/fa6";
import { RiFacebookBoxFill, RiFilePaperFill, RiInstagramFill, RiLinkedinFill, RiWhatsappFill } from "react-icons/ri";
import { MdHomeRepairService } from "react-icons/md";
import { TbMathSymbols } from "react-icons/tb";
import { RiAppsFill } from "react-icons/ri";
import { SiReadthedocs } from "react-icons/si";
import { HiLightningBolt, HiReceiptTax } from "react-icons/hi";
import { BiMedal } from "react-icons/bi";
import { IoSearchCircle } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { RiBuilding2Fill } from "react-icons/ri";


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
]

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
            icon: <GoLaw />,
            label: 'Legalitas PT',
            desc: "Ayo Mulai Bisnis Anda dengan Langkah Tepat! Kami menyediakan layanan pendirian PT yang cepat.",
            accent: "dark:bg-[#8BD9D2] bg-[#8bd9d370]",
        },
        {
            href: '/pendirian-cv',
            icon: <GoLaw />,
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
]

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
}

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
]

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
}

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


// export const DataCategoriesArticle = [
//     {
//         href: '/perizinan',
//         name: 'perizinan',
//         icon: <GoLaw />
//     },
//     {
//         href: '/konstruksi',
//         name: 'konstruksi',
//         icon: <GoLaw />
//     },
//     {
//         href: '/kementrian perdaagngan',
//         name: 'kementrian perdaagngan',
//         icon: <GoLaw />
//     },
//     {
//         href: '/legalitas',
//         name: 'legalitas',
//         icon: <GoLaw />
//     },
//     {
//         href: '/kemenkumham',
//         name: 'kemenkumham',
//         icon: <GoLaw />
//     },
//     {
//         href: '/perpajakan',
//         name: 'perpajakan',
//         icon: <GoLaw />
//     },
//     {
//         href: '/notaris',
//         name: 'notaris',
//         icon: <GoLaw />
//     },
//     {
//         href: '/oss',
//         name: 'OSS',
//         icon: <GoLaw />
//     },
//     {
//         href: '/bkpm',
//         name: 'BKPM',
//         icon: <GoLaw />
//     },
//     {
//         href: '/badan-usaha',
//         name: 'badan usaha',
//         icon: <GoLaw />
//     },
//     {
//         href: '/perseroan-terbatas',
//         name: 'perseroan terbatas',
//         icon: <GoLaw />
//     },
//     {
//         href: '/halal',
//         name: 'halal',
//         icon: <GoLaw />
//     },
//     {
//         href: '/HAKI',
//         name: 'HAKI',
//         icon: <GoLaw />
//     },
//     {
//         href: '/pariwisata',
//         name: 'pariwisata',
//         icon: <GoLaw />
//     },
//     {
//         href: '/IZIN',
//         name: 'IZIN',
//         icon: <GoLaw />
//     },
//     {
//         href: '/merek',
//         name: 'merek',
//         icon: <GoLaw />
//     }
// ]

// export const DataSelectFilterArticle = [
//     { label: "Newest", value: "desc" },
//     { label: "Oldest", value: "asc" }
// ]

// export const DataArticles = {
//     label: {
//         new: 'Latest Update',
//         trend: 'Trending',
//     },
//     new: [
//         {
//             hot: true,
//             title: "An unprecedented debate could shake up a White House race like no other",
//             thumbnailImg: "https://media.cnn.com/api/v1/images/stellar/prod/03-screenshot-2024-06-25-at-1-43-21-am.png?c=16x9&q=h_653,w_1160,c_fill/f_webp",
//             exerp: "Judge Aileen Cannon wants to hold additional hearings on Donald Trump's attempts to challenge key evidence in his classified documents case and will allow the former president's lawyers to question witnesses about the investigation and search of Mar-a-Lago.",
//             date: "20 Mins Ago | 28 June 2024",
//             categories: "Perizinan",
//             content: (
//                 <>
//                     <p>
//                         Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
//                         tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
//                         Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
//                         sunyi.
//                         <br />
//                         <br />
//                         Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
//                         muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
//                         tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
//                         jeda iklan atau ucapan DJ antar lagu.
//                         <br />
//                         <br />
//                         Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
//                         namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
//                         lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
//                         dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
//                         terakhir di lagu tengah diputar dinyanyikan.
//                         <br />
//                         Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
//                         diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
//                         lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
//                         mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
//                         <br />
//                         <br />
//                         Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
//                         hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
//                         beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
//                         <br />
//                         <br />
//                         Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
//                         tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
//                         mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
//                         inginkan.
//                         <br />
//                         <br />
//                         Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
//                         Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
//                         baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
//                         headset Vision Pro karyanya.
//                         <br />
//                         <br />
//                         Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
//                         pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
//                         memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
//                         di Inggris, Prancis, Jerman, Australia dan Kanada.
//                         <br />
//                         <br />
//                         Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
//                         Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
//                         berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
//                         tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
//                         eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
//                         <br />
//                         <br />
//                         Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
//                         Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
//                         berbagai layar di perangkat dengan tombol Option + Space.
//                         <br />
//                         <br />
//                         Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
//                         mendukung opsi pencarian multi-modal.
//                     </p>

//                 </>
//             )
//         },
//         {
//             hot: true,
//             title: "Adegan Seks Teraneh Bagi Scarlett Johansson",
//             thumbnailImg: "https://akcdn.detik.net.id/community/media/visual/2017/11/23/8aae36dd-ed53-471b-aef9-65635b915115_43.jpg?w=700&q=90",
//             exerp: "Scarlett Johansson telah melakoni banyak sekali proyek dan melakukan berbagai adegan intim. Ada salah satu film yang ternyata cukup membekas untuknya, yakni Her. Baca artikel detikpop",
//             date: "12 Mins Ago | 28 June 2024",
//             categories: "Pajak",
//             content: (
//                 <>
//                     <p>
//                         Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
//                         tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
//                         Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
//                         sunyi.
//                         <br />
//                         <br />
//                         Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
//                         muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
//                         tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
//                         jeda iklan atau ucapan DJ antar lagu.
//                         <br />
//                         <br />
//                         Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
//                         namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
//                         lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
//                         dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
//                         terakhir di lagu tengah diputar dinyanyikan.
//                         <br />
//                         Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
//                         diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
//                         lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
//                         mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
//                         <br />
//                         <br />
//                         Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
//                         hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
//                         beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
//                         <br />
//                         <br />
//                         Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
//                         tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
//                         mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
//                         inginkan.
//                         <br />
//                         <br />
//                         Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
//                         Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
//                         baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
//                         headset Vision Pro karyanya.
//                         <br />
//                         <br />
//                         Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
//                         pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
//                         memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
//                         di Inggris, Prancis, Jerman, Australia dan Kanada.
//                         <br />
//                         <br />
//                         Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
//                         Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
//                         berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
//                         tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
//                         eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
//                         <br />
//                         <br />
//                         Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
//                         Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
//                         berbagai layar di perangkat dengan tombol Option + Space.
//                         <br />
//                         <br />
//                         Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
//                         mendukung opsi pencarian multi-modal.
//                     </p>

//                 </>
//             )
//         },
//         {
//             hot: false,
//             title: "Artificial Intelligence Revolutionizing the Tech Industry",
//             thumbnailImg: "https://picsum.photos/500/500?random=431",
//             exerp: "AI technology is rapidly transforming the tech industry with advancements in machine learning and data processing.",
//             date: "1 Hour Ago | 28 June 2024",
//             categories: "Teknologi",
//             content: (
//                 <>
//                     <p>
//                         Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
//                         tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
//                         Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
//                         sunyi.
//                         <br />
//                         <br />
//                         Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
//                         muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
//                         tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
//                         jeda iklan atau ucapan DJ antar lagu.
//                         <br />
//                         <br />
//                         Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
//                         namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
//                         lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
//                         dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
//                         terakhir di lagu tengah diputar dinyanyikan.
//                         <br />
//                         Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
//                         diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
//                         lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
//                         mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
//                         <br />
//                         <br />
//                         Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
//                         hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
//                         beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
//                         <br />
//                         <br />
//                         Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
//                         tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
//                         mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
//                         inginkan.
//                         <br />
//                         <br />
//                         Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
//                         Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
//                         baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
//                         headset Vision Pro karyanya.
//                         <br />
//                         <br />
//                         Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
//                         pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
//                         memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
//                         di Inggris, Prancis, Jerman, Australia dan Kanada.
//                         <br />
//                         <br />
//                         Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
//                         Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
//                         berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
//                         tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
//                         eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
//                         <br />
//                         <br />
//                         Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
//                         Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
//                         berbagai layar di perangkat dengan tombol Option + Space.
//                         <br />
//                         <br />
//                         Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
//                         mendukung opsi pencarian multi-modal.
//                     </p>

//                 </>
//             )
//         },
//         {
//             hot: true,
//             title: "Climate Change: A Global Call to Action",
//             thumbnailImg: "https://picsum.photos/500/500?random=555",
//             exerp: "World leaders are coming together to address the pressing issue of climate change and to discuss sustainable solutions.",
//             date: "30 Mins Ago | 28 June 2024",
//             categories: "Lingkungan",
//             content: (
//                 <>
//                     <p>
//                         Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
//                         tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
//                         Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
//                         sunyi.
//                         <br />
//                         <br />
//                         Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
//                         muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
//                         tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
//                         jeda iklan atau ucapan DJ antar lagu.
//                         <br />
//                         <br />
//                         Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
//                         namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
//                         lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
//                         dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
//                         terakhir di lagu tengah diputar dinyanyikan.
//                         <br />
//                         Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
//                         diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
//                         lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
//                         mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
//                         <br />
//                         <br />
//                         Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
//                         hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
//                         beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
//                         <br />
//                         <br />
//                         Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
//                         tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
//                         mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
//                         inginkan.
//                         <br />
//                         <br />
//                         Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
//                         Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
//                         baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
//                         headset Vision Pro karyanya.
//                         <br />
//                         <br />
//                         Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
//                         pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
//                         memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
//                         di Inggris, Prancis, Jerman, Australia dan Kanada.
//                         <br />
//                         <br />
//                         Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
//                         Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
//                         berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
//                         tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
//                         eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
//                         <br />
//                         <br />
//                         Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
//                         Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
//                         berbagai layar di perangkat dengan tombol Option + Space.
//                         <br />
//                         <br />
//                         Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
//                         mendukung opsi pencarian multi-modal.
//                     </p>

//                 </>
//             )
//         },
//         {
//             hot: false,
//             title: "Exploring the Wonders of the Deep Sea",
//             thumbnailImg: "https://picsum.photos/500/500?random=177",
//             exerp: "Marine biologists have discovered new species in the depths of the ocean, unveiling the mysteries of the deep sea.",
//             date: "2 Hours Ago | 28 June 2024",
//             categories: "Sains",
//             content: (
//                 <>
//                     <p>
//                         Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
//                         tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
//                         Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
//                         sunyi.
//                         <br />
//                         <br />
//                         Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
//                         muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
//                         tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
//                         jeda iklan atau ucapan DJ antar lagu.
//                         <br />
//                         <br />
//                         Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
//                         namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
//                         lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
//                         dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
//                         terakhir di lagu tengah diputar dinyanyikan.
//                         <br />
//                         Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
//                         diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
//                         lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
//                         mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
//                         <br />
//                         <br />
//                         Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
//                         hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
//                         beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
//                         <br />
//                         <br />
//                         Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
//                         tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
//                         mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
//                         inginkan.
//                         <br />
//                         <br />
//                         Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
//                         Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
//                         baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
//                         headset Vision Pro karyanya.
//                         <br />
//                         <br />
//                         Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
//                         pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
//                         memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
//                         di Inggris, Prancis, Jerman, Australia dan Kanada.
//                         <br />
//                         <br />
//                         Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
//                         Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
//                         berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
//                         tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
//                         eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
//                         <br />
//                         <br />
//                         Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
//                         Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
//                         berbagai layar di perangkat dengan tombol Option + Space.
//                         <br />
//                         <br />
//                         Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
//                         mendukung opsi pencarian multi-modal.
//                     </p>

//                 </>
//             )
//         },
//         {
//             hot: true,
//             title: "Economic Growth in Southeast Asia",
//             thumbnailImg: "https://picsum.photos/500/500?random=810",
//             exerp: "Southeast Asian countries are experiencing significant economic growth, attracting foreign investments and boosting trade.",
//             date: "45 Mins Ago | 28 June 2024",
//             categories: "Ekonomi",
//             content: (
//                 <>
//                     <p>
//                         Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
//                         tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
//                         Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
//                         sunyi.
//                         <br />
//                         <br />
//                         Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
//                         muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
//                         tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
//                         jeda iklan atau ucapan DJ antar lagu.
//                         <br />
//                         <br />
//                         Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
//                         namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
//                         lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
//                         dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
//                         terakhir di lagu tengah diputar dinyanyikan.
//                         <br />
//                         Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
//                         diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
//                         lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
//                         mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
//                         <br />
//                         <br />
//                         Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
//                         hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
//                         beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
//                         <br />
//                         <br />
//                         Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
//                         tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
//                         mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
//                         inginkan.
//                         <br />
//                         <br />
//                         Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
//                         Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
//                         baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
//                         headset Vision Pro karyanya.
//                         <br />
//                         <br />
//                         Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
//                         pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
//                         memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
//                         di Inggris, Prancis, Jerman, Australia dan Kanada.
//                         <br />
//                         <br />
//                         Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
//                         Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
//                         berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
//                         tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
//                         eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
//                         <br />
//                         <br />
//                         Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
//                         Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
//                         berbagai layar di perangkat dengan tombol Option + Space.
//                         <br />
//                         <br />
//                         Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
//                         mendukung opsi pencarian multi-modal.
//                     </p>

//                 </>
//             )
//         },
//         {
//             hot: false,
//             title: "The Rise of Electric Vehicles",
//             thumbnailImg: "https://picsum.photos/500/500?random=719",
//             exerp: "Electric vehicles are becoming more popular as consumers seek eco-friendly and cost-effective transportation options.",
//             date: "3 Hours Ago | 28 June 2024",
//             categories: "Otomotif",
//             content: (
//                 <>
//                     <p>
//                         Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
//                         tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
//                         Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
//                         sunyi.
//                         <br />
//                         <br />
//                         Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
//                         muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
//                         tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
//                         jeda iklan atau ucapan DJ antar lagu.
//                         <br />
//                         <br />
//                         Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
//                         namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
//                         lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
//                         dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
//                         terakhir di lagu tengah diputar dinyanyikan.
//                         <br />
//                         Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
//                         diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
//                         lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
//                         mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
//                         <br />
//                         <br />
//                         Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
//                         hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
//                         beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
//                         <br />
//                         <br />
//                         Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
//                         tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
//                         mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
//                         inginkan.
//                         <br />
//                         <br />
//                         Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
//                         Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
//                         baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
//                         headset Vision Pro karyanya.
//                         <br />
//                         <br />
//                         Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
//                         pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
//                         memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
//                         di Inggris, Prancis, Jerman, Australia dan Kanada.
//                         <br />
//                         <br />
//                         Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
//                         Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
//                         berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
//                         tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
//                         eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
//                         <br />
//                         <br />
//                         Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
//                         Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
//                         berbagai layar di perangkat dengan tombol Option + Space.
//                         <br />
//                         <br />
//                         Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
//                         mendukung opsi pencarian multi-modal.
//                     </p>

//                 </>
//             )
//         },
//         {
//             hot: true,
//             title: "Advancements in Medical Technology",
//             thumbnailImg: "https://picsum.photos/500/500?random=532",
//             exerp: "Recent advancements in medical technology are improving patient outcomes and revolutionizing healthcare practices.",
//             date: "25 Mins Ago | 28 June 2024",
//             categories: "Kesehatan",
//             content: (
//                 <>
//                     <p>
//                         Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
//                         tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
//                         Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
//                         sunyi.
//                         <br />
//                         <br />
//                         Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
//                         muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
//                         tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
//                         jeda iklan atau ucapan DJ antar lagu.
//                         <br />
//                         <br />
//                         Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
//                         namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
//                         lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
//                         dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
//                         terakhir di lagu tengah diputar dinyanyikan.
//                         <br />
//                         Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
//                         diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
//                         lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
//                         mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
//                         <br />
//                         <br />
//                         Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
//                         hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
//                         beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
//                         <br />
//                         <br />
//                         Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
//                         tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
//                         mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
//                         inginkan.
//                         <br />
//                         <br />
//                         Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
//                         Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
//                         baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
//                         headset Vision Pro karyanya.
//                         <br />
//                         <br />
//                         Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
//                         pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
//                         memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
//                         di Inggris, Prancis, Jerman, Australia dan Kanada.
//                         <br />
//                         <br />
//                         Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
//                         Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
//                         berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
//                         tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
//                         eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
//                         <br />
//                         <br />
//                         Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
//                         Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
//                         berbagai layar di perangkat dengan tombol Option + Space.
//                         <br />
//                         <br />
//                         Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
//                         mendukung opsi pencarian multi-modal.
//                     </p>

//                 </>
//             )
//         },
//         {
//             hot: false,
//             title: "The Future of Space Exploration",
//             thumbnailImg: "https://picsum.photos/500/500?random=264",
//             exerp: "Space agencies are planning ambitious missions to explore distant planets and expand our understanding of the universe.",
//             date: "4 Hours Ago | 28 June 2024",
//             categories: "Astronomi",
//             content: (
//                 <>
//                     <p>
//                         Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
//                         tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
//                         Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
//                         sunyi.
//                         <br />
//                         <br />
//                         Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
//                         muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
//                         tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
//                         jeda iklan atau ucapan DJ antar lagu.
//                         <br />
//                         <br />
//                         Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
//                         namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
//                         lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
//                         dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
//                         terakhir di lagu tengah diputar dinyanyikan.
//                         <br />
//                         Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
//                         diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
//                         lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
//                         mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
//                         <br />
//                         <br />
//                         Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
//                         hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
//                         beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
//                         <br />
//                         <br />
//                         Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
//                         tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
//                         mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
//                         inginkan.
//                         <br />
//                         <br />
//                         Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
//                         Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
//                         baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
//                         headset Vision Pro karyanya.
//                         <br />
//                         <br />
//                         Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
//                         pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
//                         memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
//                         di Inggris, Prancis, Jerman, Australia dan Kanada.
//                         <br />
//                         <br />
//                         Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
//                         Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
//                         berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
//                         tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
//                         eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
//                         <br />
//                         <br />
//                         Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
//                         Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
//                         berbagai layar di perangkat dengan tombol Option + Space.
//                         <br />
//                         <br />
//                         Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
//                         mendukung opsi pencarian multi-modal.
//                     </p>

//                 </>
//             )
//         },
//         {
//             hot: true,
//             title: "Innovations in Renewable Energy",
//             thumbnailImg: "https://picsum.photos/500/500?random=284",
//             exerp: "Innovations in renewable energy sources are paving the way for a sustainable future and reducing our reliance on fossil fuels.",
//             date: "10 Mins Ago | 28 June 2024",
//             categories: "Energi",
//             content: (
//                 <>
//                     <p>
//                         Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
//                         tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
//                         Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
//                         sunyi.
//                         <br />
//                         <br />
//                         Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
//                         muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
//                         tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
//                         jeda iklan atau ucapan DJ antar lagu.
//                         <br />
//                         <br />
//                         Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
//                         namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
//                         lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
//                         dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
//                         terakhir di lagu tengah diputar dinyanyikan.
//                         <br />
//                         Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
//                         diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
//                         lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
//                         mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
//                         <br />
//                         <br />
//                         Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
//                         hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
//                         beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
//                         <br />
//                         <br />
//                         Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
//                         tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
//                         mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
//                         inginkan.
//                         <br />
//                         <br />
//                         Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
//                         Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
//                         baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
//                         headset Vision Pro karyanya.
//                         <br />
//                         <br />
//                         Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
//                         pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
//                         memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
//                         di Inggris, Prancis, Jerman, Australia dan Kanada.
//                         <br />
//                         <br />
//                         Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
//                         Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
//                         berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
//                         tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
//                         eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
//                         <br />
//                         <br />
//                         Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
//                         Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
//                         berbagai layar di perangkat dengan tombol Option + Space.
//                         <br />
//                         <br />
//                         Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
//                         mendukung opsi pencarian multi-modal.
//                     </p>

//                 </>
//             )
//         },
//         {
//             hot: false,
//             title: "The Impact of Social Media on Society",
//             thumbnailImg: "https://picsum.photos/500/500?random=331",
//             exerp: "Social media platforms are having a profound impact on society, influencing communication, politics, and culture.",
//             date: "5 Hours Ago | 28 June 2024",
//             categories: "Sosial"
//         },
//         {
//             hot: true,
//             title: "Breakthroughs in Quantum Computing",
//             thumbnailImg: "https://picsum.photos/500/500?random=429",
//             exerp: "Quantum computing is making significant strides, promising to solve complex problems that are beyond the capabilities of classical computers.",
//             date: "15 Mins Ago | 28 June 2024",
//             categories: "Teknologi"
//         }
//     ],
//     trend: [

//         {
//             hot: false,
//             title: "The Rise of Electric Vehicles",
//             thumbnailImg: "https://picsum.photos/500/500?random=719",
//             exerp: "Electric vehicles are becoming more popular as consumers seek eco-friendly and cost-effective transportation options.",
//             date: "3 Hours Ago | 28 June 2024",
//             categories: "Otomotif",
//             content: (
//                 <>
//                     <p>
//                         Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
//                         tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
//                         Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
//                         sunyi.
//                         <br />
//                         <br />
//                         Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
//                         muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
//                         tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
//                         jeda iklan atau ucapan DJ antar lagu.
//                         <br />
//                         <br />
//                         Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
//                         namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
//                         lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
//                         dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
//                         terakhir di lagu tengah diputar dinyanyikan.
//                         <br />
//                         Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
//                         diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
//                         lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
//                         mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
//                         <br />
//                         <br />
//                         Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
//                         hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
//                         beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
//                         <br />
//                         <br />
//                         Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
//                         tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
//                         mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
//                         inginkan.
//                         <br />
//                         <br />
//                         Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
//                         Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
//                         baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
//                         headset Vision Pro karyanya.
//                         <br />
//                         <br />
//                         Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
//                         pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
//                         memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
//                         di Inggris, Prancis, Jerman, Australia dan Kanada.
//                         <br />
//                         <br />
//                         Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
//                         Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
//                         berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
//                         tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
//                         eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
//                         <br />
//                         <br />
//                         Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
//                         Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
//                         berbagai layar di perangkat dengan tombol Option + Space.
//                         <br />
//                         <br />
//                         Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
//                         mendukung opsi pencarian multi-modal.
//                     </p>

//                 </>
//             )
//         },
//         {
//             hot: true,
//             title: "Advancements in Medical Technology",
//             thumbnailImg: "https://picsum.photos/500/500?random=532",
//             exerp: "Recent advancements in medical technology are improving patient outcomes and revolutionizing healthcare practices.",
//             date: "25 Mins Ago | 28 June 2024",
//             categories: "Kesehatan",
//             content: (
//                 <>
//                     <p>
//                         Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
//                         tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
//                         Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
//                         sunyi.
//                         <br />
//                         <br />
//                         Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
//                         muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
//                         tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
//                         jeda iklan atau ucapan DJ antar lagu.
//                         <br />
//                         <br />
//                         Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
//                         namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
//                         lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
//                         dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
//                         terakhir di lagu tengah diputar dinyanyikan.
//                         <br />
//                         Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
//                         diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
//                         lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
//                         mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
//                         <br />
//                         <br />
//                         Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
//                         hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
//                         beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
//                         <br />
//                         <br />
//                         Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
//                         tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
//                         mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
//                         inginkan.
//                         <br />
//                         <br />
//                         Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
//                         Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
//                         baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
//                         headset Vision Pro karyanya.
//                         <br />
//                         <br />
//                         Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
//                         pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
//                         memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
//                         di Inggris, Prancis, Jerman, Australia dan Kanada.
//                         <br />
//                         <br />
//                         Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
//                         Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
//                         berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
//                         tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
//                         eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
//                         <br />
//                         <br />
//                         Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
//                         Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
//                         berbagai layar di perangkat dengan tombol Option + Space.
//                         <br />
//                         <br />
//                         Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
//                         mendukung opsi pencarian multi-modal.
//                     </p>

//                 </>
//             )
//         },
//         {
//             hot: false,
//             title: "The Future of Space Exploration",
//             thumbnailImg: "https://picsum.photos/500/500?random=264",
//             exerp: "Space agencies are planning ambitious missions to explore distant planets and expand our understanding of the universe.",
//             date: "4 Hours Ago | 28 June 2024",
//             categories: "Astronomi",
//             content: (
//                 <>
//                     <p>
//                         Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
//                         tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
//                         Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
//                         sunyi.
//                         <br />
//                         <br />
//                         Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
//                         muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
//                         tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
//                         jeda iklan atau ucapan DJ antar lagu.
//                         <br />
//                         <br />
//                         Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
//                         namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
//                         lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
//                         dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
//                         terakhir di lagu tengah diputar dinyanyikan.
//                         <br />
//                         Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
//                         diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
//                         lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
//                         mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
//                         <br />
//                         <br />
//                         Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
//                         hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
//                         beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
//                         <br />
//                         <br />
//                         Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
//                         tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
//                         mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
//                         inginkan.
//                         <br />
//                         <br />
//                         Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
//                         Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
//                         baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
//                         headset Vision Pro karyanya.
//                         <br />
//                         <br />
//                         Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
//                         pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
//                         memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
//                         di Inggris, Prancis, Jerman, Australia dan Kanada.
//                         <br />
//                         <br />
//                         Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
//                         Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
//                         berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
//                         tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
//                         eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
//                         <br />
//                         <br />
//                         Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
//                         Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
//                         berbagai layar di perangkat dengan tombol Option + Space.
//                         <br />
//                         <br />
//                         Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
//                         mendukung opsi pencarian multi-modal.
//                     </p>

//                 </>
//             )
//         },
//         {
//             hot: true,
//             title: "Innovations in Renewable Energy",
//             thumbnailImg: "https://picsum.photos/500/500?random=284",
//             exerp: "Innovations in renewable energy sources are paving the way for a sustainable future and reducing our reliance on fossil fuels.",
//             date: "10 Mins Ago | 28 June 2024",
//             categories: "Energi",
//             content: (
//                 <>
//                     <p>
//                         Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
//                         tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
//                         Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
//                         sunyi.
//                         <br />
//                         <br />
//                         Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
//                         muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
//                         tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
//                         jeda iklan atau ucapan DJ antar lagu.
//                         <br />
//                         <br />
//                         Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
//                         namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
//                         lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
//                         dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
//                         terakhir di lagu tengah diputar dinyanyikan.
//                         <br />
//                         Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
//                         diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
//                         lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
//                         mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
//                         <br />
//                         <br />
//                         Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
//                         hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
//                         beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
//                         <br />
//                         <br />
//                         Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
//                         tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
//                         mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
//                         inginkan.
//                         <br />
//                         <br />
//                         Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
//                         Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
//                         baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
//                         headset Vision Pro karyanya.
//                         <br />
//                         <br />
//                         Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
//                         pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
//                         memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
//                         di Inggris, Prancis, Jerman, Australia dan Kanada.
//                         <br />
//                         <br />
//                         Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
//                         Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
//                         berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
//                         tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
//                         eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
//                         <br />
//                         <br />
//                         Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
//                         Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
//                         berbagai layar di perangkat dengan tombol Option + Space.
//                         <br />
//                         <br />
//                         Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
//                         mendukung opsi pencarian multi-modal.
//                     </p>

//                 </>
//             )
//         },
//         {
//             hot: false,
//             title: "The Impact of Social Media on Society",
//             thumbnailImg: "https://picsum.photos/500/500?random=331",
//             exerp: "Social media platforms are having a profound impact on society, influencing communication, politics, and culture.",
//             date: "5 Hours Ago | 28 June 2024",
//             categories: "Sosial"
//         },
//         {
//             hot: true,
//             title: "Breakthroughs in Quantum Computing",
//             thumbnailImg: "https://picsum.photos/500/500?random=429",
//             exerp: "Quantum computing is making significant strides, promising to solve complex problems that are beyond the capabilities of classical computers.",
//             date: "15 Mins Ago | 28 June 2024",
//             categories: "Teknologi"
//         },
//         {
//             hot: true,
//             title: "An unprecedented debate could shake up a White House race like no other",
//             thumbnailImg: "https://media.cnn.com/api/v1/images/stellar/prod/03-screenshot-2024-06-25-at-1-43-21-am.png?c=16x9&q=h_653,w_1160,c_fill/f_webp",
//             exerp: "Judge Aileen Cannon wants to hold additional hearings on Donald Trump's attempts to challenge key evidence in his classified documents case and will allow the former president's lawyers to question witnesses about the investigation and search of Mar-a-Lago.",
//             date: "20 Mins Ago | 28 June 2024",
//             categories: "Perizinan",
//             content: (
//                 <>
//                     <p>
//                         Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
//                         tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
//                         Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
//                         sunyi.
//                         <br />
//                         <br />
//                         Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
//                         muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
//                         tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
//                         jeda iklan atau ucapan DJ antar lagu.
//                         <br />
//                         <br />
//                         Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
//                         namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
//                         lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
//                         dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
//                         terakhir di lagu tengah diputar dinyanyikan.
//                         <br />
//                         Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
//                         diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
//                         lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
//                         mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
//                         <br />
//                         <br />
//                         Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
//                         hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
//                         beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
//                         <br />
//                         <br />
//                         Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
//                         tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
//                         mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
//                         inginkan.
//                         <br />
//                         <br />
//                         Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
//                         Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
//                         baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
//                         headset Vision Pro karyanya.
//                         <br />
//                         <br />
//                         Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
//                         pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
//                         memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
//                         di Inggris, Prancis, Jerman, Australia dan Kanada.
//                         <br />
//                         <br />
//                         Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
//                         Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
//                         berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
//                         tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
//                         eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
//                         <br />
//                         <br />
//                         Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
//                         Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
//                         berbagai layar di perangkat dengan tombol Option + Space.
//                         <br />
//                         <br />
//                         Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
//                         mendukung opsi pencarian multi-modal.
//                     </p>

//                 </>
//             )
//         },
//         {
//             hot: true,
//             title: "Adegan Seks Teraneh Bagi Scarlett Johansson",
//             thumbnailImg: "https://akcdn.detik.net.id/community/media/visual/2017/11/23/8aae36dd-ed53-471b-aef9-65635b915115_43.jpg?w=700&q=90",
//             exerp: "Scarlett Johansson telah melakoni banyak sekali proyek dan melakukan berbagai adegan intim. Ada salah satu film yang ternyata cukup membekas untuknya, yakni Her. Baca artikel detikpop",
//             date: "12 Mins Ago | 28 June 2024",
//             categories: "Pajak",
//             content: (
//                 <>
//                     <p>
//                         Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
//                         tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
//                         Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
//                         sunyi.
//                         <br />
//                         <br />
//                         Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
//                         muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
//                         tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
//                         jeda iklan atau ucapan DJ antar lagu.
//                         <br />
//                         <br />
//                         Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
//                         namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
//                         lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
//                         dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
//                         terakhir di lagu tengah diputar dinyanyikan.
//                         <br />
//                         Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
//                         diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
//                         lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
//                         mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
//                         <br />
//                         <br />
//                         Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
//                         hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
//                         beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
//                         <br />
//                         <br />
//                         Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
//                         tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
//                         mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
//                         inginkan.
//                         <br />
//                         <br />
//                         Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
//                         Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
//                         baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
//                         headset Vision Pro karyanya.
//                         <br />
//                         <br />
//                         Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
//                         pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
//                         memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
//                         di Inggris, Prancis, Jerman, Australia dan Kanada.
//                         <br />
//                         <br />
//                         Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
//                         Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
//                         berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
//                         tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
//                         eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
//                         <br />
//                         <br />
//                         Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
//                         Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
//                         berbagai layar di perangkat dengan tombol Option + Space.
//                         <br />
//                         <br />
//                         Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
//                         mendukung opsi pencarian multi-modal.
//                     </p>

//                 </>
//             )
//         },
//         {
//             hot: false,
//             title: "Artificial Intelligence Revolutionizing the Tech Industry",
//             thumbnailImg: "https://picsum.photos/500/500?random=431",
//             exerp: "AI technology is rapidly transforming the tech industry with advancements in machine learning and data processing.",
//             date: "1 Hour Ago | 28 June 2024",
//             categories: "Teknologi",
//             content: (
//                 <>
//                     <p>
//                         Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
//                         tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
//                         Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
//                         sunyi.
//                         <br />
//                         <br />
//                         Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
//                         muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
//                         tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
//                         jeda iklan atau ucapan DJ antar lagu.
//                         <br />
//                         <br />
//                         Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
//                         namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
//                         lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
//                         dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
//                         terakhir di lagu tengah diputar dinyanyikan.
//                         <br />
//                         Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
//                         diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
//                         lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
//                         mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
//                         <br />
//                         <br />
//                         Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
//                         hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
//                         beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
//                         <br />
//                         <br />
//                         Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
//                         tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
//                         mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
//                         inginkan.
//                         <br />
//                         <br />
//                         Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
//                         Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
//                         baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
//                         headset Vision Pro karyanya.
//                         <br />
//                         <br />
//                         Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
//                         pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
//                         memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
//                         di Inggris, Prancis, Jerman, Australia dan Kanada.
//                         <br />
//                         <br />
//                         Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
//                         Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
//                         berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
//                         tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
//                         eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
//                         <br />
//                         <br />
//                         Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
//                         Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
//                         berbagai layar di perangkat dengan tombol Option + Space.
//                         <br />
//                         <br />
//                         Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
//                         mendukung opsi pencarian multi-modal.
//                     </p>

//                 </>
//             )
//         },
//         {
//             hot: true,
//             title: "Climate Change: A Global Call to Action",
//             thumbnailImg: "https://picsum.photos/500/500?random=555",
//             exerp: "World leaders are coming together to address the pressing issue of climate change and to discuss sustainable solutions.",
//             date: "30 Mins Ago | 28 June 2024",
//             categories: "Lingkungan",
//             content: (
//                 <>
//                     <p>
//                         Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
//                         tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
//                         Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
//                         sunyi.
//                         <br />
//                         <br />
//                         Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
//                         muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
//                         tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
//                         jeda iklan atau ucapan DJ antar lagu.
//                         <br />
//                         <br />
//                         Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
//                         namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
//                         lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
//                         dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
//                         terakhir di lagu tengah diputar dinyanyikan.
//                         <br />
//                         Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
//                         diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
//                         lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
//                         mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
//                         <br />
//                         <br />
//                         Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
//                         hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
//                         beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
//                         <br />
//                         <br />
//                         Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
//                         tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
//                         mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
//                         inginkan.
//                         <br />
//                         <br />
//                         Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
//                         Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
//                         baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
//                         headset Vision Pro karyanya.
//                         <br />
//                         <br />
//                         Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
//                         pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
//                         memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
//                         di Inggris, Prancis, Jerman, Australia dan Kanada.
//                         <br />
//                         <br />
//                         Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
//                         Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
//                         berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
//                         tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
//                         eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
//                         <br />
//                         <br />
//                         Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
//                         Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
//                         berbagai layar di perangkat dengan tombol Option + Space.
//                         <br />
//                         <br />
//                         Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
//                         mendukung opsi pencarian multi-modal.
//                     </p>

//                 </>
//             )
//         },
//         {
//             hot: false,
//             title: "Exploring the Wonders of the Deep Sea",
//             thumbnailImg: "https://picsum.photos/500/500?random=177",
//             exerp: "Marine biologists have discovered new species in the depths of the ocean, unveiling the mysteries of the deep sea.",
//             date: "2 Hours Ago | 28 June 2024",
//             categories: "Sains",
//             content: (
//                 <>
//                     <p>
//                         Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
//                         tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
//                         Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
//                         sunyi.
//                         <br />
//                         <br />
//                         Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
//                         muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
//                         tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
//                         jeda iklan atau ucapan DJ antar lagu.
//                         <br />
//                         <br />
//                         Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
//                         namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
//                         lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
//                         dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
//                         terakhir di lagu tengah diputar dinyanyikan.
//                         <br />
//                         Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
//                         diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
//                         lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
//                         mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
//                         <br />
//                         <br />
//                         Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
//                         hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
//                         beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
//                         <br />
//                         <br />
//                         Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
//                         tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
//                         mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
//                         inginkan.
//                         <br />
//                         <br />
//                         Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
//                         Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
//                         baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
//                         headset Vision Pro karyanya.
//                         <br />
//                         <br />
//                         Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
//                         pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
//                         memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
//                         di Inggris, Prancis, Jerman, Australia dan Kanada.
//                         <br />
//                         <br />
//                         Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
//                         Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
//                         berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
//                         tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
//                         eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
//                         <br />
//                         <br />
//                         Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
//                         Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
//                         berbagai layar di perangkat dengan tombol Option + Space.
//                         <br />
//                         <br />
//                         Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
//                         mendukung opsi pencarian multi-modal.
//                     </p>

//                 </>
//             )
//         },
//         {
//             hot: true,
//             title: "Economic Growth in Southeast Asia",
//             thumbnailImg: "https://picsum.photos/500/500?random=810",
//             exerp: "Southeast Asian countries are experiencing significant economic growth, attracting foreign investments and boosting trade.",
//             date: "45 Mins Ago | 28 June 2024",
//             categories: "Ekonomi",
//             content: (
//                 <>
//                     <p>
//                         Jakarta: Bulan Mei lalu, beredar sejumlah informasi terkait fitur baru akan
//                         tersedia di Apple Music melalui update iOS 18. Fitur ini bertajuk Smart
//                         Crossfade dan disebut akan menjadikan transisi antar lagu mulus tanpa jeda
//                         sunyi.
//                         <br />
//                         <br />
//                         Saat lagu yang saat ini diputar menghilang perlahan, lagu selanjutnya akan
//                         muncul secara perlahan. Hal ini serupa metode pemutaran di radio beberapa
//                         tahun lalu, kerap dilakukan saat dua lagu diputar secara terus menerus tanpa
//                         jeda iklan atau ucapan DJ antar lagu.
//                         <br />
//                         <br />
//                         Mengutip Phone Arena, Apple menambahkan Crossfade untuk Apple Music di iOS 17
//                         namun berencana untuk menjadikannya lebih cerdas di iOS 18. Smart Crossfade
//                         lebih mulus dan tidak setiap transisi antara lagu akan memungkinkan kemunculan
//                         dan menghilang secara perlahan, beberapa lagi akan dimulai segera setelah kata
//                         terakhir di lagu tengah diputar dinyanyikan.
//                         <br />
//                         Apple juga memastikan fitur ini tidak akan mengubah suara album saat fitur ini
//                         diaktifkan. Dengan fitur Smart Crossfade, lagu-lagu akan dipisahkan satu sama
//                         lain seperti di album. Fitur Smart Crossfade aktif setelah pengguna
//                         mengaktifkan Crossfire di pengaturan aplikasi Apple Music.
//                         <br />
//                         <br />
//                         Dengan Crossfade, pengguna dapat mengatur durasi crossfade dari satu detik
//                         hingga 12 detik. Jika pengguna merupakan pelanggan Apple Music dengan iOS 18
//                         beta, pengguna dapat mencoba fitur Smart Crossfade tersebut.
//                         <br />
//                         <br />
//                         Untuk mengakses fitur ini, pengguna dapat membuka Settings, lalu Music dan
//                         tuas di Crossfade. Pengguna dapat menyesuaikan pengaturan tersebut hingga
//                         mendapatkan durasi Crossfade, dari satu hingga 12 detik, yang pengguna
//                         inginkan.
//                         <br />
//                         <br />
//                         Pengguna juga masih dapat melakukan langkah tersebut untuk mengaktifkan
//                         Crossfade di iOS 17 kendati tidak dapat memanfaatkan fitur Smart Crossfade
//                         baru hingga iOS 18 diinstal. Sebelumnya, Apple telah memulai pendistribusian
//                         headset Vision Pro karyanya.
//                         <br />
//                         <br />
//                         Tiongkok, Hong Kong, Jepang dan Singapura menjadi empat pasar pertama di luar
//                         pasar Amerika Serikat yang memasarkan Vision Pro. Apple dijadwalkan untuk
//                         memperluas ketersediaan Vision Pro di lima pasar lainnya mulai tanggal 12 Juli
//                         di Inggris, Prancis, Jerman, Australia dan Kanada.
//                         <br />
//                         <br />
//                         Perangkat ini dipasarkan seharga CNY30.000 di Tiongkok, HKD28.000 di Hong
//                         Kong, JPY600.000 di Jepang dan SGD5.300 (Rp63,8 juta) di Singapura untuk model
//                         berpenyimpanan 256GB. Sementara itu, aplikasi ChatGPT OpenAI untuk macOS kini
//                         tersedia untuk diunduh secara gratis, setelah sebelumnya tersedia secara
//                         eksklusif untuk ChatGPT Plus sejak bulan Mei lalu.
//                         <br />
//                         <br />
//                         Aplikasi desktop ini hanya tersedia untuk perangkat macOS 14+ dengan Apple
//                         Silicon M1 atau lebih baik. Pengguna dapat mengakses form ChatGPT untuk
//                         berbagai layar di perangkat dengan tombol Option + Space.
//                         <br />
//                         <br />
//                         Antarmuka pengguna (UI) aplikasi ini serupa dengan ChatGPT versi web, dan
//                         mendukung opsi pencarian multi-modal.
//                     </p>

//                 </>
//             )
//         },
//     ]
// }

// export const DataHighlight = [
//     {
//         title: 'Mau Kredit Mobil Listrik BYD Dolphin? Segini Cicilannya Tiap Bulan',
//         imgUrl: 'https://images.unsplash.com/photo-1613690399151-65ea69478674?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//     },
//     {
//         title: 'Mau Kredit Mobil Listrik BYD Dolphin? Segini Cicilannya Tiap Bulan',
//         imgUrl: 'https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//     },
//     {
//         title: 'Mau Kredit Mobil Listrik BYD Dolphin? Segini Cicilannya Tiap Bulan',
//         imgUrl: 'https://images.unsplash.com/photo-1518527989017-5baca7a58d3c?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//     },
//     {
//         title: 'Mau Kredit Mobil Listrik BYD Dolphin? Segini Cicilannya Tiap Bulan',
//         imgUrl: 'https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//     },
//     {
//         title: 'Mau Kredit Mobil Listrik BYD Dolphin? Segini Cicilannya Tiap Bulan',
//         imgUrl: 'https://plus.unsplash.com/premium_photo-1661963456199-ba147a77e2a7?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//     },
// ]

// export const ppl = [
//     'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1552642986-ccb41e7059e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
// ]

// export const legalitasUsaha = [
//     {
//         title: "Kepatuhan Hukum",
//         points: [
//             {
//                 heading: "Mematuhi Peraturan dan Undang-Undang",
//                 description: "Legalitas usaha memastikan bahwa bisnis mematuhi semua peraturan dan undang-undang yang berlaku. Ini termasuk peraturan tentang perpajakan, ketenagakerjaan, lingkungan, dan lain-lain."
//             },
//             {
//                 heading: "Menghindari Sanksi",
//                 description: "Tanpa legalitas yang sesuai, bisnis dapat menghadapi sanksi hukum, denda, atau bahkan penutupan oleh otoritas yang berwenang."
//             }
//         ]
//     },
//     {
//         title: "Kepercayaan dan Kredibilitas",
//         points: [
//             {
//                 heading: "Kepercayaan Pelanggan",
//                 description: "Usaha yang legal memberikan rasa aman dan kepercayaan kepada pelanggan, mitra bisnis, dan investor. Mereka cenderung lebih percaya dan merasa aman bertransaksi dengan bisnis yang memiliki legalitas yang jelas."
//             },
//             {
//                 heading: "Reputasi yang Baik",
//                 description: "Memiliki legalitas usaha yang lengkap dan sesuai juga meningkatkan reputasi bisnis di mata publik dan pemangku kepentingan lainnya."
//             }
//         ]
//     },
//     {
//         title: "Perlindungan Hukum",
//         points: [
//             {
//                 heading: "Hak Kekayaan Intelektual",
//                 description: "Legalitas usaha memungkinkan bisnis untuk mendaftarkan merek dagang, paten, atau hak cipta, sehingga melindungi kekayaan intelektual mereka dari penyalahgunaan."
//             },
//             {
//                 heading: "Perlindungan Bisnis",
//                 description: "Legalitas usaha memberikan perlindungan hukum terhadap perselisihan atau konflik yang mungkin timbul, baik dengan pelanggan, pemasok, maupun karyawan."
//             }
//         ]
//     },
//     {
//         title: "Akses ke Pembiayaan",
//         points: [
//             {
//                 heading: "Pinjaman dan Investasi",
//                 description: "Bank dan lembaga keuangan lainnya biasanya hanya memberikan pinjaman atau investasi kepada bisnis yang memiliki legalitas yang lengkap dan sesuai. Investor juga lebih cenderung berinvestasi pada bisnis yang legal."
//             },
//             {
//                 heading: "Subsidi dan Hibah",
//                 description: "Banyak program subsidi atau hibah dari pemerintah yang hanya dapat diakses oleh bisnis yang memiliki legalitas usaha yang sah."
//             }
//         ]
//     },
//     {
//         title: "Kemudahan Ekspansi",
//         points: [
//             {
//                 heading: "Ekspansi Pasar",
//                 description: "Legalitas usaha memudahkan proses ekspansi ke pasar baru, baik di dalam negeri maupun internasional. Bisnis yang legal lebih mudah mendapatkan izin dan lisensi untuk beroperasi di wilayah baru."
//             },
//             {
//                 heading: "Kemitraan Bisnis",
//                 description: "Legalitas usaha memungkinkan bisnis untuk menjalin kemitraan strategis dengan perusahaan lain yang mungkin memiliki persyaratan legalitas tertentu."
//             }
//         ]
//     },
//     {
//         title: "Kepastian Usaha",
//         points: [
//             {
//                 heading: "Perlindungan Aset Pribadi",
//                 description: "Struktur bisnis yang legal, seperti perseroan terbatas, dapat melindungi aset pribadi pemilik dari kewajiban bisnis."
//             },
//             {
//                 heading: "Keberlanjutan Usaha",
//                 description: "Legalitas usaha memberikan dasar yang kuat untuk kelangsungan dan perkembangan bisnis dalam jangka panjang."
//             }
//         ]
//     }
// ];
