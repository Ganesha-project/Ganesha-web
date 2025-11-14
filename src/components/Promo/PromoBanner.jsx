"use client";

import React from "react";
import { Button } from "../ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { Badge } from "../ui/badge";
import { IoArrowDown, IoGiftSharp, IoLogoWhatsapp } from "react-icons/io5";
import clsx from "clsx";
import { TextMainGradient } from "@/utils/ReueseClass";
import { event } from "@/lib/metaPixel";
import { TbBrandWhatsapp } from "react-icons/tb";

export const PromoBanner = ({ badge, title, desc, modelImage, priceNav }) => {
  const handleKonsultasiSekarang = () => {
    event("KonsultasiButtonClicked", {
      content_name: "Konsultasi Sekarang",
      value: 0,
      // currency: "IDR",
    });

    const waNumber = "628887127000";
    const waMessage = encodeURIComponent(
      `Halo, saya tertarik untuk konsultasi mengenai ${badge}`
    );
    const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;
    window.open(waLink, "_blank");
    ("https://api.whatsapp.com/send?phone=");
  };

  return (
    // adjust h nya biar sesuai layar monitor user, kalau biasanya saya pakai style={{ height: "calc(100vh - 5.35rem)" }}
    <section className="mt-12 sm:mt-0 p-3 gap-3 overflow-hidden flex flex-col-reverse lg:flex-row items-stretch min-h-[calc(100vh-0.5rem)] 2xl:justify-center w-full ">
      {/* LEFT GRID */}
      <div className="bg-white dark:bg-secondaryDark shadow-custom h-auto lg:w-1/2 w-full border rounded-2xl p-5 sm:p-8 lg:p-10 items-center flex flex-col justify-between  2xl:gap-10 max-w-3xl">
        {/* badge */}
        <Badge
          variant="outline"
          className="text-xs sm:text-sm md:text-base 2xl:text-xl border self-start mb-4"
        >
          {badge}
        </Badge>

        {/* text area */}
        <div className=" space-y-4 sm:space-y-6 lg:space-y-8 flex-1 flex flex-col justify-center">
          <h1
            className={clsx(
              "text-darkColor text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold pb-2",
              TextMainGradient
            )}
          >
            {title}
          </h1>
          <p className="text-darkColor/80 dark:text-white/90 text-sm sm:text-base 2xl:text-2xl leading-relaxed">
            {desc}
          </p>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <Button
              onClick={handleKonsultasiSekarang}
              className="text-sm 2xl:text-xl 2xl:py-5 lg:py-2 text-white font-semibold sm:text-base w-full sm:w-auto bg-gradient-to-br from-green-500 to-green-800 hover:from-green-600 hover:to-green-900"
            >
              <span>Konsultasi Sekarang</span>
              <span>
                <IoLogoWhatsapp/>
              </span>
            </Button>

            <a href={priceNav}>
              <Button
                variant="outline"
                className="text-sm sm:text-base w-full sm:w-auto 2xl:text-xl 2xl:py-5"
              >
                <span>Cek List Harga</span>
                <span>
                  <IoArrowDown />
                </span>
              </Button>
            </a>
          </div>
        </div>

        {/* stats */}
        <div className="flex items-center justify-center sm:justify-between gap-6 sm:gap-8 lg:gap-10 mt-8 w-full">
          <div className="space-y-2 text-center sm:text-start">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              400+
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-darkColor/80 dark:text-white/70">
              Clients
            </p>
          </div>
          <div className="space-y-2 text-center sm:text-start">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              2±
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-darkColor/80 dark:text-white/70">
              Hari Kerja
            </p>
          </div>
          <div className="space-y-2 flex flex-col items-center sm:items-start text-center sm:text-start">
            <IoGiftSharp className="text-3xl sm:text-4xl" />
            <p className="text-xs sm:text-sm md:text-base text-darkColor/80 dark:text-white/70">
              Banyak Bonusnya
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT GRID */}
      <div className="relative overflow-hidden rounded-2xl shadow-custom w-full lg:w-1/2 h-[280px] sm:h-[400px] md:h-[480px] lg:h-auto">
        <img
          className="absolute inset-0 object-cover h-full w-full"
          src="https://i.pinimg.com/1200x/ec/ba/9b/ecba9b63fe15f9cc4de57598f3f6b955.jpg"
          alt="background"
        />

        <div className="absolute inset-0 flex justify-center items-center">
          <img
            src={modelImage}
            alt="models"
            className="w-[60%] sm:w-[50%] md:w-[45%] lg:w-[55%] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};
