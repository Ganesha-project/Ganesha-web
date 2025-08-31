import React, { useState } from "react";
import { FaWifi } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import {
  FaMapMarkerAlt,
  FaWallet,
  FaFileSignature,
  FaLaptopHouse,
  FaUserTie,
  FaHandshake,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const whyUsData = [
  {
    id: 1,
    // Desktop properties
    type: "text-with-icon",
    title: "Alamat Bisnis Strategis & Bergengsi",
    icon: FaLocationDot,
    className: "flex justify-center items-center bg-goPurple-secondary dark:text-black/90 rounded-2xl lg:row-span-4 lg:col-span-2 px-7 font-bold gap-5 text-center",
    titleClassName: "text-start text-xl sm:text-2xl lg:text-3xl py-5",
    iconClassName: "text-4xl lg:text-5xl",
    // Mobile properties
    mobileTitle: "Alamat Strategis",
    mobileDesc: "Tingkatkan kredibilitas dengan alamat kantor bergengsi yang bisa digunakan untuk legalitas dan branding bisnismu.",
    mobileIcon: FaMapMarkerAlt,
    mobileColor: "from-blue-500 to-cyan-500",
    mobileTextColor: "text-blue-600",
  },
  {
    id: 2,
    type: "text-with-image",
    title: "Hemat Biaya Operasional",
    imageSrc: "/go-space-assets/icon/money.png",
    imageAlt: "money-3d",
    className: "font-semibold flex flex-col justify-center items-center bg-goPurple rounded-2xl lg:row-span-4 text-white p-3 text-center gap-4",
    imageClassName: "w-16 sm:w-20",
    // Mobile properties
    mobileTitle: "Hemat Biaya",
    mobileDesc: "Nikmati fasilitas kantor tanpa harus membayar sewa fisik. Lebih efisien, lebih fleksibel, tetap profesional.",
    mobileIcon: FaWallet,
    mobileColor: "from-green-500 to-emerald-500",
    mobileTextColor: "text-green-600",
  },
  {
    id: 3,
    type: "background-image-with-overlay",
    title: "Proses Cepat & Mudah – Aktivasi dalam 1 hari",
    backgroundImage: "/go-space-assets/spaces/room-2-2.jpg",
    backgroundAlt: "proses cepat",
    className: "relative rounded-2xl lg:row-span-4 overflow-hidden min-h-[200px]",
    imageClassName: "absolute inset-0 w-full h-full object-cover",
    overlayClassName: "absolute inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center p-4 text-white font-semibold text-center",
    // Mobile properties
    mobileTitle: "Legalitas Terjamin",
    mobileDesc: "Alamat Go Space bisa digunakan untuk kebutuhan pendaftaran PT, CV, dan perizinan usaha secara resmi.",
    mobileIcon: FaFileSignature,
    mobileColor: "from-purple-500 to-pink-500",
    mobileTextColor: "text-purple-600",
  },
  {
    id: 4,
    type: "text-with-image",
    title: "Layanan Resepsionis Profesional",
    imageSrc: "/go-space-assets/icon/resepsionis.png",
    imageAlt: "resepsionis",
    className: "font-semibold flex justify-center items-center bg-goPurple rounded-2xl lg:row-span-6 text-white p-4 flex-col gap-4 text-center",
    imageClassName: "w-20 sm:w-24",
    // Mobile properties
    mobileTitle: "Fleksibel & Praktis",
    mobileDesc: "Tidak perlu repot urus kantor fisik. Semua bisa dijalankan dari mana saja, kapan saja.",
    mobileIcon: FaLaptopHouse,
    mobileColor: "from-orange-500 to-red-500",
    mobileTextColor: "text-orange-600",
  },
  {
    id: 5,
    type: "text-only",
    title: "Legalitas Lengkap & Dukungan Pengurusan Dokumen",
    className: "text-start font-semibold flex justify-center items-center bg-goPurple rounded-2xl lg:row-span-4 text-white p-4",
    // Mobile properties
    mobileTitle: "Tim Support Profesional",
    mobileDesc: "Dibantu oleh tim yang berpengalaman dan responsif, siap menjawab kebutuhan bisnismu.",
    mobileIcon: FaUserTie,
    mobileColor: "from-yellow-500 to-orange-500",
    mobileTextColor: "text-yellow-600",
  },
  {
    id: 6,
    type: "background-image-only",
    backgroundImage: "/go-space-assets/spaces/room-12-2.jpg",
    backgroundAlt: "bg-legal",
    className: "relative rounded-2xl lg:row-span-4 lg:col-span-3 overflow-hidden min-h-[200px]",
    imageClassName: "absolute inset-0 w-full h-full object-cover",
    // Mobile properties
    mobileTitle: "Terpercaya",
    mobileDesc: "Bagian dari ekosistem Ganesha Group yang berpengalaman dalam layanan bisnis & konsultasi.",
    mobileIcon: FaHandshake,
    mobileColor: "from-indigo-500 to-blue-500",
    mobileTextColor: "text-indigo-600",
  },
  {
    id: 7,
    type: "background-image-with-overlay",
    title: "Dukungan Tim yang Profesional",
    backgroundImage: "/go-space-assets/spaces/room-4-2.jpg",
    backgroundAlt: "tim profesional",
    className: "relative rounded-2xl lg:row-span-6 overflow-hidden min-h-[200px]",
    imageClassName: "absolute inset-0 w-full h-full object-cover",
    overlayClassName: "absolute inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center p-4 text-white font-semibold text-center"
  },
  {
    id: 8,
    type: "text-with-icon",
    title: "Akses Internet dan penggunaan Smart TV gratis selama penggunaan ruang rapat",
    icon: FaWifi,
    className: "font-semibold flex justify-center items-center rounded-2xl lg:row-span-4 lg:col-span-2 p-4 bg-goPurple-secondary dark:text-black/90 gap-4 text-start",
    titleClassName: "text-base sm:text-lg lg:text-xl",
    iconClassName: "text-4xl lg:text-5xl"
  },
  {
    id: 9,
    type: "text-only",
    title: "Akses Ruang Meeting & Coworking",
    className: "font-semibold flex justify-center items-center bg-goPurple rounded-2xl lg:row-span-4 text-white p-4 text-center"
  },
  {
    id: 10,
    type: "text-only",
    title: "Jaringan Komunitas dan Kolaborasi",
    className: "font-semibold flex justify-center items-center bg-goYellow dark:text-black/90 rounded-2xl lg:row-span-4 p-4 text-center"
  }
];

// Desktop Component - render function untuk setiap tipe item
const renderDesktopItem = (item) => {
  switch (item.type) {
    case "text-with-icon":
      const IconComponent = item.icon;
      return (
        <div key={item.id} className={item.className}>
          <h1 className={item.titleClassName}>
            {item.title}
          </h1>
          <IconComponent className={item.iconClassName} />
        </div>
      );
    
    case "text-with-image":
      return (
        <div key={item.id} className={item.className}>
          <img
            src={item.imageSrc}
            alt={item.imageAlt}
            className={item.imageClassName}
          />
          <h1>{item.title}</h1>
        </div>
      );
    
    case "background-image-with-overlay":
      return (
        <div key={item.id} className={item.className}>
          <img
            src={item.backgroundImage}
            alt={item.backgroundAlt}
            className={item.imageClassName}
          />
          <div className={item.overlayClassName}>
            {item.title}
          </div>
        </div>
      );
    
    case "background-image-only":
      return (
        <div key={item.id} className={item.className}>
          <img
            src={item.backgroundImage}
            alt={item.backgroundAlt}
            className={item.imageClassName}
          />
        </div>
      );
    
    case "text-only":
      return (
        <div key={item.id} className={item.className}>
          {item.title}
        </div>
      );
    
    default:
      return null;
  }
};

export const WhyUsDekstop = () => {
  return (
    <main className="py-8 px-4 sm:px-8 md:px-16 lg:px-24">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
        Why Go Space
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:grid-rows-6 gap-5">
        {whyUsData.map(renderDesktopItem)}
      </div>
    </main>
  );
};

// Mobile Component
export const WhyUsMobile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getCardsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 4;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }
    return 4;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView);

  React.useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter data yang memiliki mobile properties
  const mobileData = whyUsData.filter(item => item.mobileTitle);
  const maxIndex = Math.max(0, mobileData.length - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  return (
    <main className="md:px-24 2xl:px-70 px-5">
      <section className="bg-gradient-to-b from-goPurple via-purple-700/80 to-purple-500  sm:p-10 py-10 px-3 rounded-parent ">
        {/* Header + Controls */}
        <div className="flex px-3 text-white justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Why Us</h1>
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="bg-white text-goPurple rounded-full p-2 shadow-md hover:scale-110 transition disabled:bg-gray-200 disabled:text-gray-400 disabled:hover:scale-100"
            >
              <FaChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="bg-white text-goPurple rounded-full p-2 shadow-md hover:scale-110 transition disabled:bg-gray-200 disabled:text-gray-400 disabled:hover:scale-100"
            >
              <FaChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsPerView)
                }%)`,
              }}
            >
              {mobileData.map((item, index) => {
                const Icon = item.mobileIcon;
                return (
                  <div
                    key={item.id}
                    className="flex-shrink-0 px-3"
                    style={{ width: `${100 / cardsPerView}%` }}
                  >
                    <div
                      className="p-6 flex flex-col gap-5 justify-start 
                                 bg-white/10 backdrop-blur-lg border border-white/20
                                 rounded-children text-white shadow-lg 
                                 transition-transform duration-300 h-full"
                    >
                      <div
                        className={`w-12 h-12 flex items-center justify-center rounded-full bg-white ${item.mobileTextColor}`}
                      >
                        <Icon size={24} />
                      </div>
                      <h2 className="text-xl font-semibold">{item.mobileTitle}</h2>
                      <p className="text-gray-200 text-sm leading-relaxed flex-grow">
                        {item.mobileDesc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === index
                    ? "bg-goPurple scale-110"
                    : "bg-purple-400 hover:bg-purple-600"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};