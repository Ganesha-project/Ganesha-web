"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdArrowRoundDown } from "react-icons/io";

const PromoBanner = () => {
  return (
    <section className="relative overflow-hidden flex justify-end h-fit mx-4 sm:mx-6 md:mx-8 rounded-b-2xl md:rounded-b-4xl">
      {/* === Layer 1: Background Image === */}
      <Image
        src="https://images.pexels.com/photos/32156209/pexels-photo-32156209.jpeg"
        alt="Promo Background"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
        priority
      />

      {/* === Layer 2: Gradient Overlay === */}
      <div className="absolute inset-0 bg-gradient-to-tr from-mainColor/95 to-[#090040]/90 z-10" />

      {/* === Layer 3: Content === */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 gap-5 pt-14 md:pt-0 px-6 sm:px-8 md:px-10 text-white">
        {/* Left Side */}
        <div className="flex flex-col justify-center space-y-4 md:space-y-5 text-start">
          <p className="text-base sm:text-lg md:text-xl font-medium">
            Layanan Pendirian PT & CV
          </p>
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Pendirian PT & CV Terjangkau
          </h1>
          <p className="text-[10px] md:text-base max-w-xl leading-relaxed">
            Mulai Bisnis Anda dengan Langkah Tepat! Kami menyediakan layanan
            pendirian PT dan CV yang cepat dan terpercaya yang akan membantu Anda
            dengan semua aspek legalitas dan perizinan yang dibutuhkan!
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 md:gap-4">
            <Button className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-3 rounded-xl w-full sm:w-auto">
              <span>Konsultasi Gratis</span>
              <FaWhatsapp className="text-lg" />
            </Button>

            <Button className="flex items-center justify-center gap-2 bg-white text-darkColor hover:bg-darkColor hover:text-white font-bold px-5 py-3 rounded-xl w-full sm:w-auto">
              <span>Lihat Selengkapnya</span>
              <IoMdArrowRoundDown className="text-lg" />
            </Button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-end justify-center mt-6 md:mt-0">
          <Image
            src="/images/promo-assets/erlin.png"
            alt="Promo Model"
            width={400}
            height={400}
            className="object-contain drop-shadow-lg w-64 sm:w-80 md:w-96 lg:w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
