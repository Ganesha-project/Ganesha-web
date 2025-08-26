"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <main className="h-screen flex items-center justify-center md:px-24 2xl:px-70 px-5 mt-10">
      {/* hero image card */}
      <section className="relative overflow-hidden rounded-2xl w-full max-w-6xl h-[85vh]">
        {/* image dengan animasi */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={`banner-${current}`}
              src={images[current]}
              alt={`Hero Banner ${current + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 1.2,
                ease: [0.4, 0, 0.2, 1],
              }}
              onLoad={() => console.log(`Image ${current + 1} loaded`)}
              onError={() => console.log(`Image ${current + 1} failed to load`)}
            />
          </AnimatePresence>
        </div>

        {/* overlay gradient gelap */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5  0 to-transparent z-10" />

        {/* text di atas gambar */}
        <div className="absolute inset-0 flex flex-col justify-between z-20">
          {/* atas */}
          <div className="flex items-start justify-between">
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white dark:bg-black dark:text-white px-6 py-4 rounded-br-2xl  rounded-out-bl-4xl text-purple-900 font-bold text-4xl relative">
                <div className="bg-white dark:bg-black dark:text-white rounded-out-lb-2xl"></div>
                <div className="text-lg md:text-xl rounded-out-tr-3xl bg-white dark:bg-black dark:text-white font">
                  Go Space
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="px-6 py-4"
            >
              <button className="bg-purple-900 text-white rounded-full px-5 py-2 text-sm md:text-base hover:bg-gray-800 transition">
                Get Started
              </button>
            </motion.div>
          </div>

          {/* bawah */}
          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10">
            {/* bawah kiri */}
            <motion.div
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col gap-5 flex-1 text-white p-6"
            >
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Work Better, <br /> Together
              </h1>
              <div className="flex gap-3">
                <button className="bg-purple-900 text-white rounded-full px-4 py-2 text-sm md:text-base hover:bg-gray-800 transition">
                  Book Now
                </button>
                <button className="border border-white text-white rounded-full px-4 py-2 text-sm md:text-base hover:bg-white hover:text-black transition">
                  Read More
                </button>
              </div>
            </motion.div>

            {/* bawah kanan */}
            <motion.div
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex flex-col md:flex-row items-start md:items-end gap-5 text-sm text-white flex-1"
            >
              <div className="md:max-w-sm">
                <p className="pb-6">
                  Go Space membantu bisnis tampil profesional dengan alamat
                  kantor virtual strategis yang bisa digunakan untuk legalitas,
                  branding, dan kebutuhan operasional.
                </p>
              </div>

              {/* Container untuk rounded out dengan key unik */}
              <div key="rounded-out-container" className="relative">
                <div className="bg-white dark:bg-black text-purple-800 font-semibold rounded-tl-4xl p-6 text-xs md:text-sm flex flex-col gap-3">
                  <div className="bg-white dark:bg-black rounded-out-rt-4xl">
                    <img
                      src="/go-logo.png"
                      alt="go space logo"
                      className="w-20 mb-2"
                    />
                  </div>
                  <div className="bg-white dark:bg-black rounded-out-bl-4xl">
                    Go Space by Ganesha Consulting. Alamat bisnis strategis,
                    kredibilitas naik, biaya operasional lebih hemat.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};
