"use client";

import React, { useState } from "react";
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

const data = [
  {
    title: "Alamat Strategis",
    desc: "Tingkatkan kredibilitas dengan alamat kantor bergengsi yang bisa digunakan untuk legalitas dan branding bisnismu.",
    icon: FaMapMarkerAlt,
    color: "from-blue-500 to-cyan-500",
    textColor: "text-blue-600",
  },
  {
    title: "Hemat Biaya",
    desc: "Nikmati fasilitas kantor tanpa harus membayar sewa fisik. Lebih efisien, lebih fleksibel, tetap profesional.",
    icon: FaWallet,
    color: "from-green-500 to-emerald-500",
    textColor: "text-green-600",
  },
  {
    title: "Legalitas Terjamin",
    desc: "Alamat Go Space bisa digunakan untuk kebutuhan pendaftaran PT, CV, dan perizinan usaha secara resmi.",
    icon: FaFileSignature,
    color: "from-purple-500 to-pink-500",
    textColor: "text-purple-600",
  },
  {
    title: "Fleksibel & Praktis",
    desc: "Tidak perlu repot urus kantor fisik. Semua bisa dijalankan dari mana saja, kapan saja.",
    icon: FaLaptopHouse,
    color: "from-orange-500 to-red-500",
    textColor: "text-orange-600",
  },
  {
    title: "Tim Support Profesional",
    desc: "Dibantu oleh tim yang berpengalaman dan responsif, siap menjawab kebutuhan bisnismu.",
    icon: FaUserTie,
    color: "from-yellow-500 to-orange-500",
    textColor: "text-yellow-600",
  },
  {
    title: "Terpercaya",
    desc: "Bagian dari ekosistem Ganesha Group yang berpengalaman dalam layanan bisnis & konsultasi.",
    icon: FaHandshake,
    color: "from-indigo-500 to-blue-500",
    textColor: "text-indigo-600",
  },
];

export const WhyUs = () => {
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

  const maxIndex = Math.max(0, data.length - cardsPerView);

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
      <section className="bg-gradient-to-b from-purple-900 via-purple-700/80 to-purple-500  sm:p-10 py-10 px-3 rounded-parent ">
        {/* Header + Controls */}
        <div className="flex px-3 text-white justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Why Us</h1>
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="bg-white text-purple-900 rounded-full p-2 shadow-md hover:scale-110 transition disabled:bg-gray-200 disabled:text-gray-400 disabled:hover:scale-100"
            >
              <FaChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="bg-white text-purple-900 rounded-full p-2 shadow-md hover:scale-110 transition disabled:bg-gray-200 disabled:text-gray-400 disabled:hover:scale-100"
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
              {data.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
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
                        className={`w-12 h-12 flex items-center justify-center rounded-full bg-white ${item.textColor}`}
                      >
                        <Icon size={24} />
                      </div>
                      <h2 className="text-xl font-semibold">{item.title}</h2>
                      <p className="text-gray-200 text-sm leading-relaxed flex-grow">
                        {item.desc}
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
                    ? "bg-purple-900 scale-110"
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
