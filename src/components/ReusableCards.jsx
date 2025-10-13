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
  return data.map((item) => ({
    ...item,
    priceOriginal:
      item.discount > 0 ? calculateOriginalPrice(item.price, item.discount) : 0,
  }));
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
          } md:mx-24 2xl:mx-80 mx-5 space-y-5`}
        >
          {totalItems <= 3 ? (
            <div className="flex justify-center w-full items-center">
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
          className={`${
            processedData.length <= 3
              ? "flex justify-center items-center flex-wrap 2xl:px-80 md:px-24"
              : "carousel"
          } relative w-[100%]`}
        >
          <div
            ref={carouselRef}
            className={`${
              processedData.length <= 3
                ? "flex-col md:flex-row flex-wrap justify-center"
                : ""
            } flex gap-5 transform transition-transform duration-500 ease-in-out py-5`}
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
                } md:w-[30lvw] w-[90lvw] px-5 rounded-3xl space-y-5 relative hover:scale-[1.01] origin-bottom duration-300 ease-in-out hover:shadow-mainShadow hover:brightness-105 dark:hover:brightness-90`}
              >
                {/* kotak */}
                {el.highlight ? (
                  <div
                    className={`flex flex-col justify-center gap-3 mt-5 relative  p-3 rounded-2xl text-white text-start ${BgMainGradient}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="rounded-full bg-secondaryLight w-fit text-mainColor p-2">
                        <PiStarFourFill />
                      </div>
                      <div>
                        <p className="bg-secondaryGray font-bold px-2 py-1 text-mainColor rounded-full ">
                          Most Popular
                        </p>
                        {/* <p className="bg-red-500 font-bold px-2 py-1 text-white rounded-full animate-pulse">
                        OFF {el.discount}%
                      </p> */}
                      </div>
                    </div>
                    {/* JUDUL */}
                    <h1
                      className={`mt-2 text-2xl text-white font-bold tracking-tight `}
                    >
                      {el.type}
                    </h1>
                    <h3 className="text-base line-through dark:text-red-500 text-red-600">
                      {el.priceOriginal === 0
                        ? null
                        : formatToRupiah(el.priceOriginal)}
                    </h3>
                    <h2
                      className={`font-bold text-2xl md:text-3xl text-white flex gap-2 items-center`}
                    >
                      {path === "/web-development" && el.price !== 0 && (
                        <span className="text-xs px-2 py-1 bg-gradient-to-bl from-baseColor/50 to-neutral-500/20 rounded-full">
                          {" "}
                          Start From{" "}
                        </span>
                      )}
                      {el.price === 0
                        ? "Talk With Us!"
                        : formatToRupiah(el.price)}
                    </h2>
                    <a
                      href={el.link}
                      className={`bg-white text-mainColor w-full text-center py-2 font-bold ease-in-out duration-300 hover:scale-95 rounded-2xl mt-2 flex items-center justify-center gap-3 hover:gap-10 transition-all`}
                    >
                      <span>Konsultasi Sekarang</span>
                      <FiArrowUpRight className="text-xl" />
                    </a>
                  </div>
                ) : (
                  <div className="flex flex-col justify-center gap-3 mt-5 relative  p-3 rounded-2xl text-white text-start">
                    <div className="flex items-center justify-between">
                      <div className="rounded-full bg-white w-fit text-mainColor p-2">
                        <PiStarFourFill />
                      </div>
                      <div>
                        <p className="bg-red-500 font-bold px-2 py-1 text-white rounded-full animate-pulse">
                          OFF {el.discount}%
                        </p>
                      </div>
                    </div>
                    {/* JUDUL */}
                    <h1
                      className={` mt-2 text-2xl font-bold tracking-tight ${TextMainGradient}`}
                    >
                      {el.type}
                    </h1>
                    <h3 className="text-base line-through dark:text-red-500 text-red-600">
                      {path !== "/social-media-management" && (
                        <>
                          {el.priceOriginal === 0
                            ? null
                            : formatToRupiah(el.priceOriginal)}
                        </>
                      )}
                    </h3>
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
                      className={`w-full text-center text-white py-2 font-bold ease-in-out duration-300 hover:scale-95 rounded-2xl mt-2 flex items-center justify-center gap-3 hover:gap-10 transition-all ${BgMainGradient}`}
                    >
                      <span>Konsultasi Sekarang</span>
                      <FiArrowUpRight className="text-xl" />
                    </a>
                  </div>
                )}
                {/* {el.discount !== 0 ? (
                                    <div className="absolute top-[-10px] right-[-10px]">
                                        <p className="bg-red-500 font-bold px-2 py-1 text-white rounded-xl animate-pulse">
                                            OFF {el.discount}%
                                        </p>
                                    </div>
                                ) : null} */}
                <div>
                  <div className="space-y-2">
                    {el.features?.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="items-start">
                          {feature.status === true ? (
                            <BsFillCheckCircleFill className="text-green-500" />
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
                      <p className="mt-5 mb-2 font-semibold px-2 bg-yellow-400 dark:bg-amber-500 rounded-full w-fit">
                        Persyaratan
                      </p>
                      {el.requirements?.map((requirement, reqIdx) => (
                        <div key={reqIdx} className="flex items-center gap-3">
                          <BsInfoCircleFill className="dark:text-amber-500 text-yellow-400" />
                          <span className="font-medium dark:text-neutral-100 text-neutral-900">
                            {requirement}
                          </span>
                        </div>
                      ))}
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
