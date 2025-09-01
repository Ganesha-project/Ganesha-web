"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCircleArrowRight } from "react-icons/fa6";

export const GoBanner = () => {
  const images = ["/go-banner-1.png", "/go-banner-2.png", "/go-banner-3.png"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const waNumber = "628871510044"; 
  const waMessage = "Halo, saya tertarik dengan layanan Go Space!";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    waMessage
  )}`;

  return (
    <main className="py-20 flex items-center justify-center px-5">
      <section 
      className="relative overflow-hidden rounded-parent w-full"
      style={{ height: "calc(100vh - 6.5rem )" }}
      >
        {/* slideshow image */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={`banner-${current}`}
              src={images[current]}
              alt={`Hero Banner ${current + 1}`}
              className="w-full h-full object-cover bg-mainColor/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

        {/* overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent z-10" />

        {/* === Desktop Content === */}
        <div className="hidden md:flex absolute inset-0 flex-col justify-between z-20">
          {/* atas */}
          <div className="flex items-start justify-between">
            <div className="bg-white dark:bg-black dark:text-white px-6 py-4 rounded-br-2xl rounded-out-bl-2xl text-goPurple font-bold text-4xl relative">
              <div className="bg-white dark:bg-black dark:text-white rounded-out-lb-2xl"></div>
              <div className="text-xl sm:text-2xl font-bold rounded-out-tr-2xl bg-white dark:bg-black dark:text-white font dark:shadow-2xl dark:shadow-white">
                Go Space
              </div>
            </div>

            <div className="mx-6 mt-8">
              <a href={waLink} target="_blank"  className="bg-goPurple text-white rounded-full sm:px-5 py-2 px-2 sm:text-sm text-[10px] md:text-base hover:bg-gray-800 transition">
                Get Started
              </a>
            </div>
          </div>

          {/* bawah */}
          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10">
            {/* bawah kiri */}
            <div className="flex flex-col gap-5 flex-1 text-white p-6">
              <h1 className="text-xl md:text-5xl font-bold leading-tight">
                Work Better, <br /> Together
              </h1>
              <div className="flex gap-3">
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="bg-goPurple text-white rounded-full sm:px-5 py-2 px-2 sm:text-sm text-[10px] md:text-base hover:bg-gray-800 transition">
                  Book Now
                </a>
                <a  href="#why-us"className="border border-white text-white rounded-full sm:px-5 py-2 px-2 sm:text-sm text-[10px] md:text-base hover:bg-white hover:text-black transition">
                  Read More
                </a>
              </div>
            </div>

            {/* bawah kanan */}
            <div className="flex flex-col md:flex-row items-start md:items-end gap-5 text-sm text-white flex-1">
              <div className="md:max-w-sm">
                <p className="pb-6 sm:text-sm text-[10px] px-4">
                  Go Space membantu bisnis tampil profesional dengan alamat
                  kantor virtual strategis yang bisa digunakan untuk legalitas,
                  branding, dan kebutuhan operasional.
                </p>
              </div>

              <div className="relative">
                <div className="bg-white dark:bg-black text-purple-800 font-semibold rounded-tl-4xl p-6 text-xs md:text-sm flex flex-col gap-3">
                  <div className="bg-white dark:bg-black rounded-out-rt-2xl flex items-start justify-between  ">
                    <img
                      src="/go-logo.png"
                      alt="go space logo"
                      className="sm:w-20 w-15 mb-2 dark:bg-white dark:p-2 dark:rounded-2xl"
                    />
                    <FaCircleArrowRight className="text-2xl dark:text-purple-300" />
                  </div>
                  <div className="bg-white dark:bg-black dark:text-purple-300 rounded-out-bl-2xl sm:pb-0 pb-5">
                    Go Space by Ganesha Consulting. Alamat bisnis strategis,
                    kredibilitas naik, biaya operasional lebih hemat.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* === Mobile Content === */}
        <div className="flex md:hidden absolute inset-0 flex-col justify-between z-20 h-full">
          {/* atas */}
          <div className="flex items-start justify-between">
            <div className="bg-white dark:bg-black dark:text-white px-4 py-3 rounded-br-2xl rounded-out-bl-2xl text-goPurple font-bold text-lg relative">
              <div className="bg-white dark:bg-black dark:text-white rounded-out-lb-2xl"></div>
              <div className="text-xs rounded-out-tr-2xl bg-white dark:bg-black dark:text-white dark:shadow-2xl dark:shadow-white">
                Go Space
              </div>
            </div>

            <div className="px-4 py-2 z-50">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="bg-goPurple block text-white rounded-full px-3 py-1 text-xs hover:bg-gray-800 transition">
                Get Started
              </a>
            </div>
          </div>

          {/* bawah */}
          <div className="flex flex-col gap-6 text-white pb-0">
            <h1 className="text-2xl font-bold leading-tight px-5">
              Work Better, <br /> Together
            </h1>
            <div className="flex gap-2 px-5">
              <button className="bg-goPurple text-white rounded-full px-3 py-1 text-xs hover:bg-gray-800 transition">
                Book Now
              </button>
              <button className="border border-white text-white rounded-full px-3 py-1 text-xs hover:bg-white hover:text-black transition">
                Read More
              </button>
            </div>

            <p className="text-xs px-5">
              Go Space membantu bisnis tampil profesional dengan alamat kantor
              virtual strategis yang bisa digunakan untuk legalitas, branding,
              dan kebutuhan operasional.
            </p>

            <div className="relative">
              <div className="bg-white dark:bg-black text-purple-800 font-semibold rounded-tl-4xl p-4 text-xs flex flex-col gap-3">
                <div className="bg-white dark:bg-black rounded-out-rt-2xl flex items-start justify-between">
                  <img
                    src="/go-logo.png"
                    alt="go space logo"
                    className="w-17 mb-2 dark:bg-white dark:p-2 dark:rounded-2xl"
                  />
                  <FaCircleArrowRight className="text-xl dark:text-purple-300" />
                </div>
                <div className="bg-white dark:bg-black dark:text-purple-300 rounded-out-bl-2xl pb-3">
                  Go Space by Ganesha Consulting. Alamat bisnis strategis,
                  kredibilitas naik, biaya operasional lebih hemat.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};