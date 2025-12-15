import React from "react";
import { formatDate } from "@/helper/formatDateTime";
import {
  IoIosClose,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import { ActivityLongDesc } from "../ActivityLongDesc";
import { FaInstagram } from "react-icons/fa6";
import Image from "next/image";

export const PromoModal = ({
  selectedIndex,
  activities,
  imageIndex,
  handlePrevActivity,
  handleNextActivity,
  handleCloseModal,
  handlePrevImage,
  handleNextImage,
  handleInstagramClick
}) => {
  if (selectedIndex === null) return null;

  const activity = activities[selectedIndex];

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/30 z-[99999] backdrop-blur-md px-3 md:px-0"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        transform: "none",
        zIndex: 99999,
      }}
      onClick={handleCloseModal}
    >
      <button
        className="absolute top-2 right-2 text-[39px] hover:bg-black rounded-full text-white z-[100000]"
        onClick={handleCloseModal}
      >
        <IoIosClose />
      </button>

      <div
        className="relative flex flex-col md:flex-row w-full md:min-h-[87.5lvh] md:max-h-[87.5lvh] max-w-5xl bg-white dark:bg-gray-900 rounded-3xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="md:w-2/3 bg-black/90 dark:bg-black/40 flex items-center justify-center relative overflow-hidden">
          <Image
            width={500}
            height={500}
            src={activity?.imageUrl[imageIndex]}
            alt={activity?.title}
            className="w-full h-full rounded-3xl max-h-[55lvh] md:max-h-full object-contain z-20"
          />
          <Image
            width={1}
            height={1}
            src={activity?.imageUrl[imageIndex]}
            alt={activity?.title}
            className="w-full h-full rounded-3xl object-cover absolute inset-0 z-10 blur-xl scale-125"
          />
          {activity?.imageUrl.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute z-20 left-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              >
                <IoIosArrowBack />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute z-20 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              >
                <IoIosArrowForward />
              </button>
            </>
          )}
        </div>

        <div className="md:w-1/3 flex flex-col relative">
          <div className="absolute w-full backdrop-blur-md flex p-4 items-center gap-2 border-b pb-3 border-neutral-500/50 bg-white/50 dark:bg-gray-900/50">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <Image
                  src={"/logo-ganesha.png"}
                  className="w-5 md:w-8"
                  width={30}
                  height={30}
                  alt="Ganesha Logo"
                />
                <span className="text-sm md:text-base font-[500] bg-gradient-to-br dark:from-white dark:via-blue-400 dark:to-purple-500 from-neutral-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Ganesha Consulting
                </span>
              </div>
              {activity?.ig && activity?.instagramUrl && (
                <button
                  onClick={(e) =>
                    handleInstagramClick(e, activity?.instagramUrl)
                  }
                  className="cursor-pointer p-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-full hover:scale-110 transition-transform duration-300 shadow-md"
                  title="View on Instagram"
                >
                  <FaInstagram className="text-sm" />
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-between h-full p-4 py-14 md:py-16 md:max-h-full max-h-[30lvh] overflow-y-auto">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="md:text-lg font-bold text-gray-900 dark:text-white">
                  {activity?.title}
                </h3>
              </div>
              <ActivityLongDesc content={activity?.longDesc} />
            </div>
          </div>

          <div className="absolute bottom-0 flex items-center gap-2 w-full">
            <div className="px-5 py-2 md:py-3 w-full flex items-center gap-2 border-t border-neutral-500/50 backdrop-blur-md bg-gray-50/50 dark:bg-gray-800/50">
              <p className="text-xs md:text-sm text-neutral-500 dark:text-gray-400">
                {formatDate(activity?.date)}
              </p>
              {activity?.location && (
                <p className="text-xs md:text-sm text-neutral-500 dark:text-gray-400">
                  - {activity?.location}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <button
          onClick={handlePrevActivity}
          className="absolute left-4 top-1/2 transform invert -translate-y-1/2 p-2 text-xl bg-black/80 text-white hover:bg-black rounded-full transition-colors"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={handleNextActivity}
          className="absolute right-4 top-1/2 transform invert -translate-y-1/2 p-2 text-xl bg-black/80 text-white hover:bg-black rounded-full transition-colors"
        >
          <IoIosArrowForward />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className="absolute bottom-[-3px] space-x-5 md:hidden">
        <button
          onClick={handlePrevActivity}
          className="invert -translate-y-1/2 p-2 text-xl bg-black/80 text-white hover:bg-black rounded-full transition-colors"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={handleNextActivity}
          className="invert -translate-y-1/2 p-2 text-xl bg-black/80 text-white hover:bg-black rounded-full transition-colors"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};
