"use client";
import Link from "next/link";
import { formatToRupiah } from "@/helper/formatToRupiah";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import {
  BsFillCheckCircleFill,
  BsFillXCircleFill,
  BsInfoCircleFill,
} from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { PiStarFourFill } from "react-icons/pi";
import { FiArrowUpRight } from "react-icons/fi";
import { IoChevronDown } from "react-icons/io5";
import { BgMainGradient, TextMainGradient } from "@/utils/ReueseClass";

// === Helper Function ===
const calculateOriginalPrice = (discountedPrice, discountPercentage) => {
  if (discountPercentage === 0 || discountedPrice === 0) return 0;
  const originalPrice = discountedPrice / (1 - discountPercentage / 100);
  return Math.round(originalPrice / 1000) * 1000;
};

const processCardData = (data) => {
  return data.map((item) => ({
    ...item,
    priceOriginal:
      item.discount > 0 ? calculateOriginalPrice(item.price, item.discount) : 0,
  }));
};

// === Main Component ===
export const PromoPriceList = ({ data, label, visibility }) => {
  const [scrollTo, setScrollTo] = useState(10);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedCards, setExpandedCards] = useState({});
  const processedData = processCardData(data);
  const totalItems = processedData.length;
  const [activeDot, setActiveDot] = useState(0);
  const carouselRef = useRef(null);
  const totalDots = processedData.length;
  const path = usePathname();
  

  useEffect(() => {
    const handleScroll = () => {
      const element = carouselRef.current;
      if (element) {
        const scrollLeft = element.scrollLeft;
        const maxScrollLeft = element.scrollWidth - element.clientWidth;
        const progress = (scrollLeft / maxScrollLeft) * (totalDots - 1);
        setActiveDot(Math.round(progress));
      }
    };
    const element = carouselRef.current;
    if (element) {
      element.addEventListener("scroll", handleScroll);
      return () => element.removeEventListener("scroll", handleScroll);
    }
  }, [totalDots]);

  const handleDotClick = (index) => {
    const element = carouselRef.current;
    if (element) {
      const scrollToPosition = (element.scrollWidth / totalDots) * index;
      element.scrollTo({
        left: scrollToPosition,
        behavior: "smooth",
      });
      setActiveDot(index);
    }
  };

  const toggleAccordion = (idx) => {
    setExpandedCards((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <section className={`py-12 space-y-8`}>
      <div
        className={`${
          visibility === false ? "hidden" : "block"
        } md:mx-24 2xl:mx-80 mx-5 space-y-6`}
      >
        {/* === HEADER === */}
        {totalItems <= 3 ? (
          <div className="flex justify-center items-center">
            <div className="flex justify-center dark:text-neutral-50 px-7 py-5 bg-gradient-to-bl from-neutral-200 to-transparent dark:from-darkColor dark:to-transparent text-center rounded-full font-semibold md:text-5xl text-2xl shadow-md">
              <p className="bg-gradient-to-tr from-black via-darkColor to-mainColor dark:from-white dark:via-neutral-100 dark:to-secondaryColor bg-clip-text text-transparent">
                {label}
              </p>
            </div>
          </div>
        ) : (
          <div className="relative overflow-hidden flex justify-center md:justify-between items-center bg-gradient-to-bl from-neutral-200 to-transparent dark:from-darkColor dark:to-transparent text-center rounded-full font-semibold md:text-5xl text-2xl shadow-inner p-2">
            <div
              className="absolute inset-0 z-0 bg-gradient-to-r from-[#e3cce6aa] to-transparent dark:from-[#331c3ae9] dark:to-transparent rounded-full transition-all duration-500"
              style={{ width: `${((activeDot + 1) / totalDots) * 100}%` }}
            ></div>
            <div className="z-10 dark:text-neutral-50 px-7 py-5 rounded-full">
              <p className="bg-gradient-to-tr from-black via-darkColor to-mainColor dark:from-white dark:via-neutral-100 dark:to-secondaryColor bg-clip-text text-transparent">
                {label}
              </p>
            </div>
            <div className="z-10 items-center space-x-2 md:flex hidden">
              <button
                onClick={() =>
                  handleDotClick(activeDot > 0 ? activeDot - 1 : totalDots - 1)
                }
                className="bg-radial dark:from-black dark:to-darkColor from-white to-neutral-100 dark:text-neutral-100 text-neutral-700 md:px-7 md:py-7 px-5 py-5 rounded-full hover:scale-95 transition-all duration-300 shadow-sm"
              >
                <IoIosArrowBack className="text-2xl md:text-[2rem]" />
              </button>
              <button
                onClick={() =>
                  handleDotClick(activeDot < totalDots - 1 ? activeDot + 1 : 0)
                }
                className="bg-radial dark:from-black dark:to-darkColor from-white to-neutral-100 dark:text-neutral-100 text-neutral-700 md:px-7 md:py-7 px-5 py-5 rounded-full hover:scale-95 transition-all duration-300 shadow-sm"
              >
                <IoIosArrowForward className="text-2xl md:text-[2rem]" />
              </button>
            </div>
          </div>
        )}

        {/* === MOBILE ARROWS === */}
        {totalItems > 3 && (
          <div className="flex justify-center items-center gap-3 md:hidden">
            <button
              onClick={() =>
                handleDotClick(activeDot > 0 ? activeDot - 1 : totalDots - 1)
              }
              className="bg-radial dark:from-black dark:to-darkColor from-white to-neutral-100 dark:text-neutral-100 text-neutral-700 px-5 py-5 rounded-full hover:scale-95 transition-all duration-300 shadow-sm"
            >
              <IoIosArrowBack className="text-2xl" />
            </button>
            <button
              onClick={() =>
                handleDotClick(activeDot < totalDots - 1 ? activeDot + 1 : 0)
              }
              className="bg-radial dark:from-black dark:to-darkColor from-white to-neutral-100 dark:text-neutral-100 text-neutral-700 px-5 py-5 rounded-full hover:scale-95 transition-all duration-300 shadow-sm"
            >
              <IoIosArrowForward className="text-2xl" />
            </button>
          </div>
        )}
      </div>

      {/* === CAROUSEL === */}
      <div
        ref={carouselRef}
        className={`${
          processedData.length <= 3
            ? "flex justify-center items-center flex-wrap 2xl:px-80 md:px-24"
            : "carousel scroll-smooth snap-x snap-mandatory"
        } relative w-full`}
      >
        <div
          className={`${
            processedData.length <= 3
              ? "flex-col md:flex-row flex-wrap justify-center"
              : ""
          } flex gap-6 transform transition-transform duration-500 ease-in-out py-6`}
          style={{ transform: `translateX(-${currentIndex * scrollTo}%)` }}
        >
          {processedData.map((el, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-b from-neutral-200 to-white dark:from-[#232323] dark:to-black ${
                idx === 0 && totalItems > 4 ? "ml-5 md:ml-24 2xl:ml-80" : ""
              } ${
                idx === totalItems - 1 && totalItems > 4
                  ? "mr-5 md:mr-24 2xl:mr-80"
                  : ""
              } ${
                totalItems < 4 && "2xl:w-[32%]"
              } md:w-[30lvw] w-[90lvw] px-6 py-4 rounded-3xl space-y-5 relative hover:scale-[1.015] origin-bottom transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl hover:brightness-105 dark:hover:brightness-90 snap-center`}
            >
              {/* === Highlighted Card === */}
              {el.highlight ? (
                <div
                  className={`flex flex-col justify-center gap-3 mt-3 relative p-4 rounded-2xl text-white ${BgMainGradient} shadow-lg`}
                >
                  <div className="flex items-center justify-between">
                    <div className="rounded-full bg-secondaryLight w-fit text-mainColor p-2">
                      <PiStarFourFill />
                    </div>
                    <p className="bg-secondaryGray font-bold px-2 py-1 text-mainColor rounded-full text-sm">
                      Most Popular
                    </p>
                  </div>
                  <h1 className="mt-2 text-2xl font-bold tracking-tight">
                    {el.type}
                  </h1>
                  <h3 className="text-base line-through dark:text-red-500 text-red-600">
                    {el.priceOriginal !== 0 &&
                      formatToRupiah(el.priceOriginal)}
                  </h3>
                  <h2 className="font-bold text-2xl md:text-3xl flex items-center gap-2">
                    {path === "/web-development" && el.price !== 0 && (
                      <span className="text-xs px-2 py-1 bg-white/20 rounded-full">
                        Start From
                      </span>
                    )}
                    {el.price === 0
                      ? "Talk With Us!"
                      : formatToRupiah(el.price)}
                  </h2>
                  <a
                    href={el.link}
                    className="bg-white text-mainColor w-full text-center py-2 font-bold rounded-2xl mt-3 flex items-center justify-center gap-3 hover:gap-6 transition-all duration-300 shadow-sm"
                  >
                    <span>Konsultasi Sekarang</span>
                    <FiArrowUpRight className="text-xl" />
                  </a>
                </div>
              ) : (
                <div className="flex flex-col justify-center gap-3 mt-3 relative p-4 rounded-2xl">
                  <div className="flex items-center justify-between">
                    <div className="rounded-full bg-white w-fit text-mainColor p-2 shadow-sm">
                      <PiStarFourFill />
                    </div>
                    {path !== "/social-media-management" && (
                      <p className="bg-red-500 font-bold px-2 py-1 text-white rounded-full animate-pulse text-sm">
                        OFF {el.discount}%
                      </p>
                    )}
                  </div>
                  <h1
                    className={`mt-2 text-2xl font-bold tracking-tight ${TextMainGradient}`}
                  >
                    {el.type}
                  </h1>
                  {path !== "/social-media-management" && (
                    <h3 className="text-base line-through dark:text-red-500 text-red-600">
                      {el.priceOriginal !== 0 &&
                        formatToRupiah(el.priceOriginal)}
                    </h3>
                  )}
                  <h2
                    className={`font-bold text-2xl md:text-3xl flex gap-2 items-center ${TextMainGradient}`}
                  >
                    {path !== "/social-media-management" && (
                      <>
                        {path === "/web-development" && el.price !== 0 && (
                          <span className="text-xs px-2 py-1 bg-gradient-to-bl from-baseColor/50 to-neutral-500/20 rounded-full">
                            Start From
                          </span>
                        )}
                        {el.price === 0
                          ? "Talk With Us!"
                          : formatToRupiah(el.price)}
                      </>
                    )}
                  </h2>
                  <a
                    href={el.link}
                    className={`w-full text-center text-white py-2 font-bold rounded-2xl mt-2 flex items-center justify-center gap-3 hover:gap-6 transition-all duration-300 shadow-sm ${BgMainGradient}`}
                  >
                    <span>Konsultasi Sekarang</span>
                    <FiArrowUpRight className="text-xl" />
                  </a>
                </div>
              )}

              {/* === Accordion Section === */}
              <div>
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between py-3 px-4 bg-secondary/80 backdrop-blur-md cursor-pointer rounded-xl mb-3 hover:scale-[1.02] transition-all duration-300"
                >
                  <span className="font-semibold dark:text-neutral-100 text-neutral-900">
                    Lihat Benefit
                  </span>
                  <IoChevronDown
                    className={`text-2xl transition-transform duration-300 dark:text-neutral-100 text-neutral-900 ${
                      expandedCards[idx] ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedCards[idx]
                      ? "min-h-[2000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="space-y-2 pb-3">
                    {el.features?.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3">
                        {feature.status ? (
                          <BsFillCheckCircleFill className="text-green-500" />
                        ) : (
                          <BsFillXCircleFill className="text-red-500" />
                        )}
                        <h4 className="font-medium dark:text-neutral-100 text-neutral-900">
                          {feature.feature}
                        </h4>
                      </div>
                    ))}
                  </div>

                  {el.requirements && (
                    <>
                      <p className="mt-5 mb-2 font-semibold px-2 bg-yellow-400 dark:bg-amber-500 rounded-full w-fit">
                        Persyaratan
                      </p>
                      {el.requirements.map((req, reqIdx) => (
                        <div
                          key={reqIdx}
                          className="flex items-center gap-3 text-sm"
                        >
                          <BsInfoCircleFill className="dark:text-amber-500 text-yellow-400" />
                          <span className="font-medium dark:text-neutral-100 text-neutral-900">
                            {req}
                          </span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === Dots === */}
      {totalItems >= 4 && (
        <div className="flex justify-center items-center mt-6">
          <div className="flex justify-center items-center bg-white dark:bg-darkColor px-3 py-2 rounded-full shadow-md space-x-2">
            {Array.from({ length: totalDots }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeDot
                    ? "bg-mainColor dark:bg-baseColor scale-125"
                    : "bg-stone-300 dark:bg-stone-600"
                }`}
              ></button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
