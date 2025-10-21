"use client";

import { motion } from "framer-motion";
import { RiDoubleQuotesR } from "react-icons/ri";
import { testimonyPromoEdition } from "@/app/Database";

// Gandakan array agar animasi tidak terputus
const duplicatedReviews = [
  ...testimonyPromoEdition,
  ...testimonyPromoEdition,
  ...testimonyPromoEdition,
  ...testimonyPromoEdition,
];

// Fungsi untuk menampilkan bintang sesuai rating
const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < rating ? "text-yellow-400" : "text-gray-600"}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export const Testimonies = () => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="space-y-8 relative">
        <div className="md:hidden mx-5 backdrop-blur-xl bg-gradient-to-tl from-mainColor/40 to-[#471396]/80 z-30 rounded-xl p-5 shadow-custom flex flex-col justify-between text-white">
          <h1 className="text-2xl">
            Apa Kata Mereka?
          </h1>
          <div className="text-2xl absolute -right-3 -top-3 p-1 dark:bg-darkColor/60 bg-lightColor/30 rounded-full backdrop-blur-2xl">
            <RiDoubleQuotesR className="drop-shadow-[0px_0px_15px_#ebe658]" />
          </div>
          <p className="mt-5 opacity-70 text-sm">
            See what our clients say! Our verified contractors deliver top-rated
            services with real customer feedback—helping you choose the best for
            your project!
          </p>
        </div>

        <div className="hidden absolute top-1/2 transform -translate-y-1/2 w-[30lvw] h-[120%] ml-5 backdrop-blur-xl bg-gradient-to-tl from-mainColor/40 to-[#471396]/80 z-30 rounded-xl p-5 text-white shadow-custom md:flex flex-col justify-between">
          <h1 className="font-semibold text-5xl">Apa Kata Mereka?</h1>
          <div className="text-5xl absolute right-5 top-5">
            <RiDoubleQuotesR className=" drop-shadow-[0px_0px_15px_#ebe658]" />
          </div>
          <p className="opacity-70 text-sm">
            See what our clients say! Our verified contractors deliver top-rated
            services with real customer feedback—helping you choose the best for
            your project!
          </p>
        </div>

        {/* Baris 1 - Bergerak dari kiri ke kanan */}
        <motion.div
          className="flex space-x-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        >
          {duplicatedReviews.slice(0, 10).map((el, idx) => (
            <div
              key={idx}
              className="p-4 bg-secondary border border-mainColor drop-shadow-2xl to-lightColor dark:to-darkColor rounded-xl max-w-[250px] font-semibold"
            >
              <p className="">{el.client}</p>
              <StarRating rating={Math.round(el.rating)} />
              <p className="mt-3 text-sm">"{el.review}"</p>
            </div>
          ))}
        </motion.div>

        {/* Baris 2 - Bergerak dari kanan ke kiri */}
        <motion.div
          className="flex space-x-8 w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        >
          {duplicatedReviews.slice(10, 20).map((el, idx) => (
            <div
              key={idx}
              className="p-4 bg-secondary border border-mainColor drop-shadow-2xl rounded-xl max-w-[250px] font-semibold"
            >
              <p className="">{el.client}</p>
              <StarRating rating={Math.round(el.rating)} />
              <p className="mt-3 text-sm">"{el.review}"</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
