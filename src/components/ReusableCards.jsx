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
import { BgMainGradient, TextMainGradient } from "@/utils/ReueseClass";
import { FaClipboardList } from "react-icons/fa6";

// Helper function to calculate original price from discounted price
const calculateOriginalPrice = (discountedPrice, discountPercentage) => {
  if (discountPercentage === 0 || discountedPrice === 0) return 0;

  // Formula: originalPrice = discountedPrice / (1 - discount/100)
  const originalPrice = discountedPrice / (1 - discountPercentage / 100);

  // Round to nearest thousand for cleaner look
  return Math.round(originalPrice / 1000) * 1000;
};

// Helper function to process data and calculate original prices
const processCardData = (data) => {
  return data
    .map((item) => ({
      ...item,
      priceOriginal:
        item.discount > 0
          ? calculateOriginalPrice(item.price, item.discount)
          : 0,
    }))
    .sort((a, b) => {
      // Sort by highlight: true items first
      if (a.highlight && !b.highlight) return -1;
      if (!a.highlight && b.highlight) return 1;
      return 0;
    });
};

export const ReusableCards = ({ data, label, visibility }) => {
  const [scrollTo, setScrollTo] = useState(10);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Process data to calculate original prices automatically
  const processedData = processCardData(data);
  const totalItems = processedData.length;

  const [activeDot, setActiveDot] = useState(0);
  const carouselRef = useRef(null);
  const totalDots = processedData.length;
  const [isHighlight, setIsHighlight] = useState(false);

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

  // Function to scroll to the specific item based on the dot clicked
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

  return (
    <>
      <section className={`py-10 space-y-5`}>
        <div
          className={`${
            visibility === false ? "hidden" : "block"
          }  space-y-5 md:mx-24 2xl:mx-80 mx-5`}
        >
          {totalItems <= 3 ? (
            <div className="flex justify-center w-full items-center ">
              <div
                className={`flex justify-center dark:text-neutral-50 px-7 py-5 bg-gradient-to-bl from-neutral-200 to-transparent dark:from-darkColor dark:to-transparent text-center rounded-full p-2 font-semibold md:text-5xl text-2xl  w-fit`}
              >
                <p className="bg-gradient-to-tr from-black via-darkColor to-mainColor dark:from-white dark:via-neutral-100 dark:to-secondaryColor bg-clip-text text-transparent">
                  {label}
                </p>
              </div>
            </div>
          ) : (
            <div
              className={`relative overflow-hidden flex justify-center md:justify-between w-full items-center bg-gradient-to-bl from-neutral-200 to-transparent dark:from-darkColor dark:to-transparent text-center rounded-full p-2 font-semibold md:text-5xl text-2xl  `}
            >
              <div
                className="absolute inset-0 z-0 bg-gradient-to-r from-[#e3cce6aa] to-transparent dark:from-[#331c3ae9] dark:to-transparent rounded-full transition-all duration-300"
                style={{ width: `${((activeDot + 1) / totalDots) * 100}%` }}
              ></div>
              {label ? (
                <>
                  <div
                    className={`z-10 dark:text-neutral-50 px-7 py-5 rounded-full`}
                  >
                    <p className="bg-gradient-to-tr from-black via-darkColor to-mainColor dark:from-white dark:via-neutral-100 dark:to-secondaryColor bg-clip-text text-transparent">
                      {label}
                    </p>
                  </div>
                </>
              ) : null}
              <div className={`z-10 items-center space-x-2 md:block hidden`}>
                <button
                  onClick={() =>
                    handleDotClick(
                      activeDot > 0 ? activeDot - 1 : totalDots - 1
                    )
                  }
                  className={`bg-radial dark:from-black  dark:to-darkColor from-white to-neutral-100 dark:text-neutral-100 text-neutral-700 md:px-7 md:py-7 px-5 py-5 rounded-full hover:scale-95 duration-300 ease-in-out`}
                >
                  <IoIosArrowBack className="text-2xl md:text-[2rem]" />
                </button>
                <button
                  onClick={() =>
                    handleDotClick(
                      activeDot < totalDots - 1 ? activeDot + 1 : 0
                    )
                  }
                  className={` bg-radial dark:from-black  dark:to-darkColor from-white to-neutral-100 dark:text-neutral-100 text-neutral-700 md:px-7 md:py-7 px-5 py-5 rounded-full hover:scale-95 duration-300 ease-in-out`}
                >
                  <IoIosArrowForward className="text-2xl md:text-[2rem]" />
                </button>
              </div>
            </div>
          )}
          {totalItems <= 3 ? null : (
            <div
              className={`flex justify-center w-full items-center gap-3 md:hidden`}
            >
              <button
                onClick={() =>
                  handleDotClick(activeDot > 0 ? activeDot - 1 : totalDots - 1)
                }
                className={`bg-radial dark:from-black  dark:to-darkColor from-white to-neutral-100 dark:text-neutral-100 text-neutral-700 md:px-7 md:py-7 px-5 py-5 rounded-full hover:scale-95 duration-300 ease-in-out`}
              >
                <IoIosArrowBack className="text-2xl md:text-[2rem]" />
              </button>
              <button
                onClick={() =>
                  handleDotClick(activeDot < totalDots - 1 ? activeDot + 1 : 0)
                }
                className={` bg-radial dark:from-black  dark:to-darkColor from-white to-neutral-100 dark:text-neutral-100 text-neutral-700 md:px-7 md:py-7 px-5 py-5 rounded-full hover:scale-95 duration-300 ease-in-out`}
              >
                <IoIosArrowForward className="text-2xl md:text-[2rem]" />
              </button>
            </div>
          )}
        </div>

        <div
          ref={carouselRef}
          className={`relative w-full ${
            processedData.length <= 3
              ? "flex justify-center"
              : "overflow-hidden"
          }`}
        >
          <div
            className={`${
              processedData.length <= 3
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-7xl mx-auto px-5"
                : "flex gap-5 transform transition-transform duration-500 ease-in-out"
            } py-5`}
            style={
              processedData.length > 3
                ? { transform: `translateX(-${currentIndex * scrollTo}%)` }
                : {}
            }
          >
            {processedData.map((el, idx) => (
              <div
                key={idx}
                className={`h-fit pb-8 bg-gradient-to-b from-neutral-200 to-white dark:from-[#232323] dark:to-black rounded-3xl space-y-4 relative hover:scale-[1.01] origin-bottom duration-300 ease-in-out hover:shadow-mainShadow hover:brightness-105 dark:hover:brightness-90 shadow-custom border border-neutral-300 dark:border-neutral-700
          ${
            processedData.length <= 3
              ? "w-full" // Grid item akan auto-size sesuai cols
              : `min-w-[90vw] md:min-w-[30vw] ${
                  idx === 0 && totalItems > 4 ? "ml-5 md:ml-24 2xl:ml-80" : ""
                } ${
                  idx === totalItems - 1 && totalItems > 4
                    ? "mr-5 md:mr-24 2xl:mr-80"
                    : ""
                }`
          }
        `}
              >
                {/* KOTAK HIGHLIGHT */}
                {el.highlight ? (
                  <div className="flex flex-col justify-between gap-3 mx-2 mt-2 p-4 relative rounded-2xl text-white text-start bg-linear-to-br from-[#6F00FF] to-[#3B0270] min-h-[320px]">
                    <div className="flex items-center justify-between">
                      <div className="rounded-full bg-secondaryLight dark:text-white dark:bg-[#232323] w-fit text-darkColor p-2">
                        <PiStarFourFill />
                      </div>
                      <div>
                        <p className="bg-white/30 backdrop-blur-2xl font-regular text-sm px-3 py-2 text-white rounded-full border border-white/20">
                          Most popular
                        </p>
                      </div>
                    </div>

                    <h1 className="mt-2 text-2xl text-white font-medium tracking-tight min-h-[60px] flex items-center">
                      {el.type}
                    </h1>

                    <div className="flex items-center gap-3">
                      <h3 className="text-base line-through text-red-400 min-h-[24px]">
                        {el.priceOriginal === 0
                          ? null
                          : formatToRupiah(el.priceOriginal)}
                      </h3>
                      <div className="flex items-center text-xs">
                        <p className="bg-red-400 font-medium px-2 py-1 text-white rounded-full animate-pulse">
                          OFF {el.discount}%
                        </p>
                      </div>
                    </div>

                    <h2 className="font-bold text-2xl md:text-3xl text-white flex gap-2 items-center flex-wrap">
                      {path === "/web-development" && el.price !== 0 && (
                        <span className="text-xs px-2 py-1 bg-gradient-to-bl from-baseColor/50 to-neutral-500/20 rounded-full">
                          Start From
                        </span>
                      )}
                      {el.price === 0
                        ? "Talk With Us!"
                        : formatToRupiah(el.price)}
                    </h2>

                    <a
                      href={el.link}
                      className="bg-linear-to-bl from-neutral-50 to-neutral-300 text-darkColor border border-white/20 font-semibold text-base w-full py-2.5 shadow-custom text-center ease-in-out duration-300 hover:scale-95 rounded-lg mt-2 flex items-center justify-center gap-3 hover:gap-10 transition-all"
                    >
                      <span>Konsultasi Sekarang</span>
                      <FiArrowUpRight className="text-xl" />
                    </a>
                  </div>
                ) : (
                  <div className="flex flex-col justify-between gap-3 mx-2 mt-2 p-4 relative rounded-2xl text-white text-start min-h-[320px]">
                    <div className="flex items-center justify-between">
                      <div className="rounded-full bg-white dark:bg-black dark:text-white w-fit text-darkColor p-2">
                        <PiStarFourFill />
                      </div>
                      <div className="min-h-[32px] flex items-center">
                        {/* Placeholder for discount badge */}
                      </div>
                    </div>

                    <h1 className="mt-2 text-2xl font-semibold tracking-tight min-h-[60px] flex items-center max-w-sm capitalize text-darkColor dark:text-white/90">
                      {el.type}
                    </h1>

                    <div className="flex items-center gap-3">
                      <h3 className="text-base line-through dark:text-red-500 text-red-600 min-h-[24px]">
                        {el.priceOriginal === 0
                          ? null
                          : formatToRupiah(el.priceOriginal)}
                      </h3>
                      <div className="flex items-center text-xs">
                        <p className="bg-red-500 font-medium px-2 py-1 text-white rounded-full animate-pulse">
                          OFF {el.discount}%
                        </p>
                      </div>
                    </div>

                    <h2
                      className={`font-bold text-2xl md:text-3xl flex gap-2 items-center flex-wrap ${TextMainGradient}`}
                    >
                      {path === "/web-development" && el.price !== 0 && (
                        <span className="text-xs px-2 py-1 bg-gradient-to-bl from-baseColor/50 to-neutral-500/20 rounded-full">
                          Start From
                        </span>
                      )}
                      {el.price === 0
                        ? "Talk With Us!"
                        : formatToRupiah(el.price)}
                    </h2>

                    <a
                      href={el.link}
                      className="w-full text-center text-white py-2.5 shadow-custom border border-darkColor/50 font-medium ease-in-out duration-300 hover:scale-95 rounded-lg mt-2 flex items-center justify-center gap-3 hover:gap-10 transition-all bg-linear-to-br from-[#6F00FF] to-[#3B0270]"
                    >
                      <span>Konsultasi Sekarang</span>
                      <FiArrowUpRight className="text-xl" />
                    </a>
                  </div>
                )}

                <div>
                  {/* feature / benefit */}
                  <div className="space-y-2 mx-5">
                    <div className="flex items-center gap-3 mb-3 pb-3 border-b-1 border-darkColor/50 dark:border-white/30 text-darkColor/90 dark:text-neutral-300">
                      <FaClipboardList />
                      <h1 className="font-semibold text-base">
                        Apa yang Kamu Dapat?
                      </h1>
                    </div>
                    {el.features?.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="items-start">
                          {feature.status === true ? (
                            <BsFillCheckCircleFill className="text-mainColor" />
                          ) : (
                            <BsFillXCircleFill className="text-red-500" />
                          )}
                        </span>
                        <h4 className="font-medium dark:text-neutral-100 text-neutral-900">
                          {feature.feature}
                        </h4>
                      </div>
                    ))}
                  </div>
                  {el.requirements ? (
                    <>
                      <p className="mt-5 mx-5 mb-3 font-semibold px-2 bg-yellow-400 dark:bg-amber-500 rounded-full w-fit">
                        Persyaratan
                      </p>
                      <div className="space-y-1">
                        {el.requirements?.map((requirement, reqIdx) => (
                          <div
                            key={reqIdx}
                            className="flex items-center gap-3 mx-5"
                          >
                            <BsInfoCircleFill className="dark:text-amber-500 text-yellow-400" />
                            <span className="font-medium dark:text-neutral-100 text-neutral-900">
                              {requirement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Scroll Progress Dots */}
        {totalItems >= 4 && (
          <>
            <div className="flex justify-center items-center mt-4">
              <div className="flex justify-center items-center bg-white dark:bg-darkColor px-2 py-2 rounded-full space-x-2">
                {Array.from({ length: totalDots }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-2 h-2 rounded-full ${
                      index === activeDot
                        ? "bg-mainColor dark:bg-baseColor"
                        : "bg-stone-300 dark:bg-stone-600"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};
