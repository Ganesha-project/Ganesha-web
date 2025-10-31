import { FaWifi } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import {
  FaMapMarkerAlt,
  FaWallet,
  FaFileSignature,
  FaLaptopHouse,
  FaUserTie,
  FaHandshake,
} from "react-icons/fa";


export const whyUsData = [
  {
    id: 1,
    // Desktop properties
    type: "text-with-icon-desc",
    title: "Alamat Bisnis Strategis & Bergengsi",
    icon: FaLocationDot,
    className:
      "hover:scale-103 transition-all flex justify-center items-center bg-goPurple-secondary dark:text-black/90 rounded-2xl lg:row-span-4 lg:col-span-2 px-7 py-5 font-bold gap-5 text-center ",
    titleClassName: "text-start text-xl sm:text-2xl py-5",
    iconClassName: "text-4xl lg:text-5xl",
    desc: "Gedung Fancy Mampang, Jl. Mampang Prapatan Raya No. 151 Lantai 4 Unit A7, RT.3/RW.001, Duren Tiga, Kec. Pancoran, Kota Jakarta Selatan, Jakarta, Indonesia 12760",
    // Mobile properties
    mobileTitle: "Alamat Strategis",
    mobileDesc:
      "Tingkatkan kredibilitas dengan alamat kantor bergengsi yang bisa digunakan untuk legalitas dan branding bisnismu.",
    mobileIcon: FaMapMarkerAlt,
    mobileColor: "from-blue-500 to-cyan-500",
    mobileTextColor: "text-blue-600",
  },
  {
    id: 2,
    type: "text-with-image",
    title: "Hemat Biaya Operasional",
    imageSrc: "/images/go-space-assets/icon/money.png",
    imageAlt: "money-3d",
    className:
      "hover:scale-103 transition-all font-semibold flex flex-col justify-center items-center bg-gradient-to-b from-goPurple via-purple-700/80 to-purple-500 rounded-2xl lg:row-span-4 text-white p-3 text-center gap-4",
    imageClassName: "w-16 sm:w-25",
    // Mobile properties
    mobileTitle: "Hemat Biaya",
    mobileDesc:
      "Nikmati fasilitas kantor tanpa harus membayar sewa fisik. Lebih efisien, lebih fleksibel, tetap profesional.",
    mobileIcon: FaWallet,
    mobileColor: "from-green-500 to-emerald-500",
    mobileTextColor: "text-green-600",
  },
  {
    id: 3,
    type: "background-image-with-overlay",
    title: "Layanan Resepsionis Profesional",
    backgroundImage: "/images/go-space-assets/resepsionist.jpg",
    backgroundAlt: "proses cepat",
    className:
      "hover:scale-103 transition-all relative rounded-2xl lg:row-span-4 overflow-hidden min-h-[200px] text-2xl font-bold",
    imageClassName: "absolute inset-0 w-full h-full object-cover",
    overlayClassName:
      "hover:scale-103 transition-all absolute inset-0 bg-black/5 backdrop-blur-sm flex justify-center items-center p-4 text-white font-semibold text-center",
    // Mobile properties
    mobileTitle: "Legalitas Terjamin",
    mobileDesc:
      "Alamat Go Space bisa digunakan untuk kebutuhan pendaftaran PT, CV, dan perizinan usaha secara resmi.",
    mobileIcon: FaFileSignature,
    mobileColor: "from-purple-500 to-pink-500",
    mobileTextColor: "text-purple-600",
  },
  {
    id: 4,
    type: "text-with-image",
    title: "Legalitas Lengkap & Dukungan Pengurusan Dokumen",
    imageSrc: "/images/go-space-assets/legal.png",
    imageAlt: "resepsionis",
    className:
      "hover:scale-103 transition-all font-semibold flex justify-center items-center bg-gradient-to-b from-goPurple via-purple-700/80 to-purple-500 rounded-2xl lg:row-span-6 text-white p-4 flex-col text-center text-xl",
    imageClassName: "sm:w-20 md:w-50",
    // Mobile properties
    mobileTitle: "Fleksibel & Praktis",
    mobileDesc:
      "Tidak perlu repot urus kantor fisik. Semua bisa dijalankan dari mana saja, kapan saja.",
    mobileIcon: FaLaptopHouse,
    mobileColor: "from-orange-500 to-red-500",
    mobileTextColor: "text-orange-600",
  },
  {
    id: 5,
    type: "text-only",
    title: "Proses Cepat & Mudah – Aktivasi dalam 1 hari",
    className:
      "hover:scale-103 transition-all text-xl text-start font-semibold flex justify-center items-center bg-gradient-to-b from-goPurple via-purple-700/80 to-purple-500 rounded-2xl lg:row-span-4 text-white p-4",
    // Mobile properties
    mobileTitle: "Tim Support Profesional",
    mobileDesc:
      "Dibantu oleh tim yang berpengalaman dan responsif, siap menjawab kebutuhan bisnismu.",
    mobileIcon: FaUserTie,
    mobileColor: "from-yellow-500 to-orange-500",
    mobileTextColor: "text-yellow-600",
  },
  {
    id: 6,
    type: "background-image-only",
    backgroundImage: "/images/go-space-assets/spaces/room-12-2.jpg",
    backgroundAlt: "bg-legal",
    className:
      "hover:scale-103 transition-all relative rounded-2xl lg:row-span-4 lg:col-span-3 overflow-hidden min-h-[200px]",
    imageClassName: "absolute inset-0 w-full h-full object-cover",
    // Mobile properties
    mobileTitle: "Terpercaya",
    mobileDesc:
      "Bagian dari ekosistem Ganesha Group yang berpengalaman dalam layanan bisnis & konsultasi.",
    mobileIcon: FaHandshake,
    mobileColor: "from-indigo-500 to-blue-500",
    mobileTextColor: "text-indigo-600",
  },
  {
    id: 7,
    type: "background-image-with-overlay",
    title: "Dukungan Tim yang Profesional",
    backgroundImage: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    backgroundAlt: "tim profesional",
    className:
      "hover:scale-103 transition-all relative rounded-2xl lg:row-span-6 overflow-hidden min-h-[200px] sm:text-2xl text-lg ",
    imageClassName: "absolute inset-0 w-full h-full object-cover",
    overlayClassName:
      "hover:scale-103 transition-all absolute inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center p-4 text-white font-semibold text-center",
  },
  {
    id: 8,
    type: "text-with-icon",
    title:
      "Akses Internet dan penggunaan Smart TV gratis selama penggunaan ruang rapat",
    icon: FaWifi,
    className:
      "hover:scale-103 transition-all font-semibold flex justify-center items-center rounded-2xl lg:row-span-4 lg:col-span-2 p-4 bg-goPurple-secondary dark:text-black/90 gap-4 text-start",
    titleClassName: "text-base sm:text-lg lg:text-xl",
    iconClassName: "text-6xl",
  },
  {
    id: 9,
    type: "text-only",
    title: "Akses Ruang Meeting & Coworking",
    className:
      "hover:scale-103 transition-all font-semibold flex justify-center items-center bg-gradient-to-b from-goPurple via-purple-700/80 to-purple-500 rounded-2xl lg:row-span-4 text-white p-4 text-center",
  },
  {
    id: 10,
    type: "text-only",
    title: "Jaringan Komunitas dan Kolaborasi",
    className:
      "hover:scale-103 transition-all font-semibold flex justify-center items-center bg-goYellow dark:text-black/90 rounded-2xl lg:row-span-4 p-4 text-center",
  },
];