import { whyUsData } from "@/Data/GoSpace/WhyUsData";
import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

// Desktop Component - render function untuk setiap tipe item
const renderDesktopItem = (item) => {
  switch (item.type) {
    case "text-with-icon":
      const IconComponent = item.icon;
      return (
        <div key={item.id} className={item.className}>
          <h1 className={item.titleClassName}>{item.title}</h1>
          <IconComponent className={item.iconClassName} />
        </div>
      );  

    case "text-with-icon-desc":
      const IconComponentTxt = item.icon;
      return (
        <div key={item.id} className={item.className}>
          <div className="flex flex-col items-start" >
            <h1 className={item.titleClassName}>{item.title}</h1>
            <p className="text-start text-sm text-black/80 font-medium " >
              {item.desc}
            </p>
          </div>
          <div >
            <IconComponentTxt className={item.iconClassName} />
          </div>
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
          <div className={item.overlayClassName}>{item.title}</div>
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
    <main id="why-us" className="py-8 px-4 sm:px-8 md:px-16 lg:px-24">
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
  const mobileData = whyUsData.filter((item) => item.mobileTitle);
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
    <main id="why-us" className="md:px-24 2xl:px-70 px-5">
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
                      <h2 className="text-xl font-semibold">
                        {item.mobileTitle}
                      </h2>
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
