// ========== PromoPriceList.jsx ==========
"use client";

import { formatToRupiah } from "@/helper/formatToRupiah";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BsFillCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";
import { PiStarFourFill } from "react-icons/pi";
import { FiArrowUpRight } from "react-icons/fi";
import { IoChevronDown } from "react-icons/io5";
import { BgMainGradient, TextDarkPurple, TextMainGradient } from "@/utils/ReueseClass";
import { MorePackages } from "./MorePackages";
import clsx from "clsx";

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
export const PromoPriceList = ({
  data,
  label,
  visibility,
  showOnlyHighlight = true,
}) => {
  const [expandedCards, setExpandedCards] = useState({});
  const [showMore, setShowMore] = useState(false);

  const processedData = processCardData(data);
  const highlightedData = processedData.filter(
    (item) => item.highlight === true
  );
  const nonHighlightedData = processedData.filter(
    (item) => item.highlight === false
  );

  const displayData = showOnlyHighlight ? highlightedData : processedData;
  const path = usePathname();

  const toggleAccordion = (idx) => {
    setExpandedCards((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <section id="promo-price" className="py-12 space-y-8">
      {/* === HEADER === */}
      {visibility !== false && (
        <div className="flex justify-center items-center md:mx-24 2xl:mx-80 mx-5 space-y-6 mb-15">
          <div className="flex justify-center dark:text-neutral-50 px-10 w-full py-2 text-center rounded-full font-semibold md:text-5xl text-2xl">
            <p className={TextMainGradient}>{label}</p>
          </div>
        </div>
      )}

      {/* === HIGHLIGHTED PACKAGES GRID === */}
      <div
        className={`w-full ${
          highlightedData.length <= 3
            ? "flex justify-center items-start flex-wrap gap-6 2xl:px-80 md:px-24 px-5"
            : "grid gap-6 px-5 md:px-24 2xl:px-80 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-start"
        }`}
      >
        {displayData.map((el, idx) => (
          <div
            key={idx}
            className={`bg-neutral-100 dark:bg-darkColor ${
              highlightedData.length <= 3
                ? "w-full sm:w-[45%] lg:w-[30%]"
                : "w-full"
            } h-full flex flex-col px-2 rounded-3xl space-y-5 relative hover:scale-[1.015] origin-bottom transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl hover:brightness-105 dark:hover:brightness-90`}
          >
            {/* === Highlighted Card === */}
            <div
              className={`flex flex-col justify-center gap-3 mt-3 p-4 rounded-2xl dark:text-white bg-neutral-100/90 backdrop-blur-2xl shadow-secondaryShadow relative overflow-hidden`}
            >
              {/* layer 2 */}
              <img
                src="https://i.pinimg.com/736x/54/21/e5/5421e5e3ee46cc6e5695eacf9e9f1b99.jpg"
                alt="bg-highlight light"
                className="absolute inset-0 object-cover w-full h-full dark:hidden opacity-40 scale-125 "
              />
              <img
                src="https://i.pinimg.com/736x/64/0d/83/640d83ea218b5ca23164a9ec2fcd2846.jpg"
                alt="bg-highlight dark"
                className="absolute inset-0 object-cover w-full h-full hidden dark:block"
              />

              {/* layer 3 - content */}
              <div className="relative space-y-3">
                <div className="flex items-center justify-between">
                  <div className="rounded-full bg-neutral-100 dark:bg-darkColor w-fit p-2">
                    <PiStarFourFill />
                  </div>
                  <p className="bg-gradient-to-br from-yellow-300 to-yellow-600 text-white dark:bg-secondaryGray darK:text-mainColor font-bold px-2 py-1 rounded-full text-sm">
                    Most Popular
                  </p>
                </div>
                <h1
                  className={clsx("mt-2 text-2xl font-bold tracking-tight", TextDarkPurple)}
                >
                  {el.type}
                </h1>

                <h3 className="text-base line-through dark:text-red-500 text-red-600 ">
                  {el.priceOriginal !== 0 && formatToRupiah(el.priceOriginal)}
                </h3>
                <h2
                  className={clsx(" text-2xl md:text-3xl flex items-center gap-2 font-bold tracking-tight", TextDarkPurple)}
                >
                  {el.price === 0 ? "Talk With Us!" : formatToRupiah(el.price)}
                </h2>
                <a
                  href={el.link}
                  className={`dark:bg-white dark:text-mainColor w-full text-center py-2 font-bold rounded-2xl mt-3 flex items-center justify-center gap-3 hover:gap-6 transition-all duration-300 shadow-sm ${BgMainGradient} text-white`}
                >
                  <span>Konsultasi Sekarang</span>
                  <FiArrowUpRight className="text-xl" />
                </a>
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full flex items-center justify-between py-3 px-4 cursor-pointer rounded-xl mb-3 hover:scale-[1.02] transition-all duration-300"
              >
                <span className="font-semibold text-darkColor dark:text-white">
                  Apa yang anda dapat?
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
                    ? "max-h-[3000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-2 pb-3">
                  {el.features?.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      {feature.status ? (
                        <BsFillCheckCircleFill className="text-green-500 flex-shrink-0" />
                      ) : (
                        <BsFillXCircleFill className="text-red-500 flex-shrink-0" />
                      )}
                      <h4 className="font-medium dark:text-neutral-100 text-neutral-900">
                        {feature.feature}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* === SEE MORE BUTTON === */}
      {showOnlyHighlight && nonHighlightedData.length > 0 && (
        <div className="flex justify-center pt-6">
          <button
            onClick={() => setShowMore(!showMore)}
            className={`px-8 py-3 font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 ${BgMainGradient} text-white`}
          >
            <span>{showMore ? "Show Less" : "See More Packages"}</span>
            <IoChevronDown
              className={`text-xl transition-transform duration-300 ${
                showMore ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      )}

      {/* === MORE PACKAGES CAROUSEL === */}
      {showMore && nonHighlightedData.length > 0 && (
        <MorePackages data={nonHighlightedData} />
      )}
    </section>
  );
};
