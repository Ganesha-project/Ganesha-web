"use client";
import Link from "next/link";
import { formatToRupiah } from "@/helper/formatToRupiah";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef, useCallback } from "react";
import {
  BsFillCheckCircleFill,
  BsFillXCircleFill,
  BsInfoCircleFill,
} from "react-icons/bs";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
} from "react-icons/io";
import { PiStarFourFill } from "react-icons/pi";
import { FiArrowUpRight } from "react-icons/fi";
import { BgMainGradient, TextMainGradient } from "@/utils/ReueseClass";
import { FaClipboardList, FaFileCode } from "react-icons/fa6";
import { Button } from "./ui/button";
import { MdOutlineArrowDownward } from "react-icons/md";

// Helper function to calculate original price from discounted price
const calculateOriginalPrice = (discountedPrice, discountPercentage) => {
  if (discountPercentage === 0 || discountedPrice === 0) return 0;
  const originalPrice = discountedPrice / (1 - discountPercentage / 100);
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
      if (a.highlight && !b.highlight) return -1;
      if (!a.highlight && b.highlight) return 1;
      return 0;
    });
};

export const ReusableCards = ({
  data,
  label,
  visibility,
  seePackageWorks = false,
  availablePackageTypes = [],
}) => {
  const [activeDot, setActiveDot] = useState(0);
  const carouselRef = useRef(null);
  const containerRef = useRef(null);

  // Process data to calculate original prices automatically
  const processedData = processCardData(data);

  const totalItems = processedData.length;
  const totalDots = processedData.length;

  const path = usePathname();

  // Simple and reliable scroll functions
  const scrollToIndex = useCallback((index) => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll("[data-card]");
    if (cards[index]) {
      const card = cards[index];
      const scrollLeft = card.offsetLeft - container.offsetLeft - 20;

      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
      setActiveDot(index);
    }
  }, []);

  const handleNext = useCallback(() => {
    const nextIndex = (activeDot + 1) % totalDots;
    scrollToIndex(nextIndex);
  }, [activeDot, totalDots, scrollToIndex]);

  const handlePrev = useCallback(() => {
    const prevIndex = (activeDot - 1 + totalDots) % totalDots;
    scrollToIndex(prevIndex);
  }, [activeDot, totalDots, scrollToIndex]);

  // Handle scroll to update active dot
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;

      // Calculate which card is currently most visible
      const cardIndex = Math.round(scrollLeft / containerWidth);
      setActiveDot(Math.min(cardIndex, totalDots - 1));
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [totalDots]);

  // Reset active dot when data changes
  useEffect(() => {
    setActiveDot(0);
  }, [data]);

  const handlePackagePortos = (packageType) => {
    // Format package type menjadi ID yang valid
    const formattedId = `package-${packageType
      .toLowerCase()
      .replace(/\s+/g, "-")}`;
    const element = document.getElementById(formattedId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const hasPackageWork = (packageType) => {
    return availablePackageTypes.includes(packageType);
  };

  return (
    <>
      <section id="price-list" className={`py-10 space-y-5`}>
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
                  onClick={handlePrev}
                  className={`bg-radial dark:from-black dark:to-darkColor from-white to-neutral-100 dark:text-neutral-100 text-neutral-700 md:px-7 md:py-7 px-5 py-5 rounded-full hover:scale-95 duration-300 ease-in-out`}
                  aria-label="Previous card"
                >
                  <IoIosArrowBack className="text-2xl md:text-[2rem]" />
                </button>
                <button
                  onClick={handleNext}
                  className={`bg-radial dark:from-black dark:to-darkColor from-white to-neutral-100 dark:text-neutral-100 text-neutral-700 md:px-7 md:py-7 px-5 py-5 rounded-full hover:scale-95 duration-300 ease-in-out`}
                  aria-label="Next card"
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
                onClick={handlePrev}
                className={`bg-radial dark:from-black dark:to-darkColor from-white to-neutral-100 dark:text-neutral-100 text-neutral-700 md:px-7 md:py-7 px-5 py-5 rounded-full hover:scale-95 duration-300 ease-in-out`}
                aria-label="Previous card"
              >
                <IoIosArrowBack className="text-2xl md:text-[2rem]" />
              </button>
              <button
                onClick={handleNext}
                className={`bg-radial dark:from-black dark:to-darkColor from-white to-neutral-100 dark:text-neutral-100 text-neutral-700 md:px-7 md:py-7 px-5 py-5 rounded-full hover:scale-95 duration-300 ease-in-out`}
                aria-label="Next card"
              >
                <IoIosArrowForward className="text-2xl md:text-[2rem]" />
              </button>
            </div>
          )}
        </div>

        <div
          ref={carouselRef}
          className={`relative w-full ${
            processedData.length <= 3 ? "flex justify-center" : ""
          }`}
        >
          <div
            ref={containerRef}
            className={`${
              processedData.length <= 3
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-7xl mx-auto px-5"
                : "flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth px-5 md:px-24 2xl:px-80"
            } py-5`}
          >
            {processedData.map((el, idx) => (
              <div
                key={idx}
                data-card="true" // Simple data attribute
                className={`max-w-sm h-fit pb-8 bg-gradient-to-b from-neutral-200 to-white dark:from-[#232323] dark:to-black rounded-3xl space-y-4 relative hover:scale-[1.01] origin-bottom duration-300 ease-in-out hover:shadow-mainShadow hover:brightness-105 dark:hover:brightness-90 shadow-custom border border-neutral-300 dark:border-neutral-700 flex-shrink-0 snap-center
          ${processedData.length <= 3 ? "w-full" : "w-[85vw] md:w-[30vw]"}
        `}
              >
                {/* KOTAK HIGHLIGHT */}
                {el.highlight ? (
                  // HIGLIGHT KONTENT
                  seePackageWorks && hasPackageWork(el.type) ? (
                    // PORTO SCROLL
                    <div className="flex flex-col justify-between gap-3 mx-2 mt-2 p-4 relative rounded-2xl text-white text-start bg-linear-to-br from-[#6F00FF] to-[#3B0270] min-h-[320px]">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center bg-white/50 dark:bg-darkColor/60 backdrop-blur-2xl rounded-full border border-white/20">
                        <div className="rounded-full bg-secondaryLight dark:text-white dark:bg-[#232323] w-fit text-darkColor p-1 sm:p-2 sm:block hidden text-center sm:text-start">
                          <PiStarFourFill />
                        </div>
                        <p className=" font-semibold text-xs px-3 py-2  rounded-r-full text-darkColor dark:text-white">
                          Popular
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        
                          <a
                            href={`/web-development#${el.type
                              .split(" ")
                              .join("-")
                              .toLowerCase()}`}
                          >
                            <Button
                              onClick={() => handlePackagePortos(el.type)}
                              variant={"secondary"}
                              className={
                                "bg-white/30 dark:bg-darkColor/30 backdrop-blur-2xl border border-white/20 text-white text-xs rounded-full font-semibold hover:scale-105"
                              }
                            >
                              Lihat Portofolio <MdOutlineArrowDownward />
                            </Button>
                          </a>
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
                    // NON PORTO SCROLL
                    <div className="flex flex-col justify-between gap-3 mx-2 mt-2 p-4 relative rounded-2xl text-white text-start bg-linear-to-br from-[#6F00FF] to-[#3B0270] min-h-[320px]">
                    {/* ... (highlight content sama seperti sebelumnya) */}
                    <div className="flex items-center justify-between">
                      <div className="rounded-full bg-secondaryLight dark:text-white dark:bg-[#232323] w-fit text-darkColor p-2">
                        <PiStarFourFill />
                      </div>
                      <div>
                        <p className="bg-white/30 dark:bg-black/40 backdrop-blur-2xl font-regular text-sm px-3 py-2 text-white rounded-full border border-white/20">
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
                  )
                ) : (
                  // NON HIGLIGHT
                  <div className="flex flex-col justify-between gap-3 mx-2 mt-2 p-4 relative rounded-2xl text-white text-start min-h-[320px]">
                    <div className="flex items-center justify-between">
                      <div className="rounded-full bg-white dark:bg-black dark:text-white w-fit text-darkColor p-2">
                        <PiStarFourFill />
                      </div>
                      <div className="min-h-[32px] flex items-center">
                        {seePackageWorks && hasPackageWork(el.type) && (
                          <a
                            href={`/web-development#${el.type
                              .split(" ")
                              .join("-")
                              .toLowerCase()}`}
                          >
                            <Button
                              onClick={() => handlePackagePortos(el.type)}
                              variant={"secondary"}
                              className={
                                "dark:bg-black text-[12px] rounded-full font-semibold hover:scale-105"
                              }
                            >
                              Lihat Portofolio <IoIosArrowDown />
                            </Button>
                          </a>
                        )}
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
                  {el.requirements?.length > 0 && (
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
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Progress Dots */}
        {totalItems >= 4 && (
          <div className="flex justify-center items-center mt-4">
            <div className="flex justify-center items-center bg-white dark:bg-darkColor px-2 py-2 rounded-full space-x-2">
              {Array.from({ length: totalDots }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeDot
                      ? "bg-mainColor dark:bg-baseColor scale-125"
                      : "bg-stone-300 dark:bg-stone-600 hover:bg-stone-400"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
};
