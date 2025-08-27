"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCircleArrowRight } from "react-icons/fa6";

export const Banner = () => {
  const images = ["/go-banner-1.png", "/go-banner-2.png", "/go-banner-3.png"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className="py-26 flex items-center justify-center md:px-24 2xl:px-70 px-5">
      <section className="relative overflow-hidden rounded-2xl w-full h-[60vh]">
        {/* slideshow image */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={`banner-${current}`}
              src={images[current]}
              alt={`Hero Banner ${current + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

        {/* overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent z-10" />

        {/* konten di atas gambar */}
        <div className="absolute inset-0 flex flex-col justify-between z-20">
          {/* atas */}
          <div className="flex items-start justify-between">
            <div className="bg-white dark:bg-black dark:text-white px-6 py-4 rounded-br-2xl rounded-out-bl-4xl text-purple-900 font-bold text-4xl relative">
              <div className="bg-white dark:bg-black dark:text-white rounded-out-lb-2xl"></div>
              <div className="md:text-xl text-sm rounded-out-tr-3xl bg-white dark:bg-black dark:text-white font dark:shadow-2xl dark:shadow-white">
                Go Space
              </div>
            </div>

            <div className="px-6 py-4">
              <button className="bg-purple-900 text-white rounded-full sm:px-5 py-2 px-2 sm:text-sm text-[10px] md:text-base hover:bg-gray-800 transition">
                Get Started
              </button>
            </div>
          </div>

          {/* bawah */}
          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10">
            {/* bawah kiri */}
            <div className="flex flex-col gap-5 flex-1 text-white p-6">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Work Better, <br /> Together
              </h1>
              <div className="flex gap-3">
                <button className="bg-purple-900 text-white rounded-full sm:px-5 py-2 px-2 sm:text-sm text-[10px] md:text-base hover:bg-gray-800 transition">
                  Book Now
                </button>
                <button className="border border-white text-white rounded-full sm:px-5 py-2 px-2 sm:text-sm text-[10px] md:text-base hover:bg-white hover:text-black transition">
                  Read More
                </button>
              </div>
            </div>

            {/* bawah kanan */}
            <div className="flex flex-col md:flex-row items-start md:items-end gap-5 text-sm text-white flex-1">
              <div className="md:max-w-sm">
                <p className="pb-6 sm:text-sm text-[10px] px-4">
                  Go Space membantu bisnis tampil profesional dengan alamat kantor virtual strategis yang bisa digunakan untuk legalitas, branding, dan kebutuhan operasional.
                </p>
              </div>

              {/* Container untuk rounded out */}
              <div className="relative">
                <div className="bg-white dark:bg-black text-purple-800 font-semibold rounded-tl-4xl p-6 text-xs md:text-sm flex flex-col gap-3">
                  <div className="bg-white dark:bg-black rounded-out-rt-4xl flex items-start justify-between ">
                    <img
                      src="/go-logo.png"
                      alt="go space logo"
                      className="sm:w-20 w-15 mb-2 dark:drop-shadow-[0px_0px_10px_#ffffff]"
                    />
                    <FaCircleArrowRight className="text-2xl" />
                  </div>
                  <div className="bg-white dark:bg-black rounded-out-bl-4xl sm:pb-0 pb-5">
                    Go Space by Ganesha Consulting. Alamat bisnis strategis, kredibilitas naik, biaya operasional lebih hemat.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
