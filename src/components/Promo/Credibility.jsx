"use client";

import { BgMainGradient } from "@/utils/ReueseClass";
import clsx from "clsx";
import React from "react";
import { PiSealCheckFill } from "react-icons/pi";
import { Title } from "../Title";
import Image from "next/image";
import { event } from "@/lib/metaPixel";
import { usePathname } from "next/navigation";

export const Credibility = () => {
  const path = usePathname();

  const registeredData = [
    {
      name: "DJKI",
      logo: "/images/government-logo/djki.png",
      link: "https://www.dgip.go.id/",
      // size: "md:w-[48%] lg:w-[32%]", // medium
    },
    {
      name: "Kominfo",
      logo: "/images/government-logo/kominfo.png",
      link: "https://www.komdigi.go.id/",
      // size: "md:w-[32%] lg:w-[20%]", // kecil
    },
    {
      name: "PSE Kominfo",
      logo: "/images/government-logo/pse.png",
      link: "https://pse.kominfo.go.id/",
      // size: "md:w-[48%] lg:w-[32%]", // medium
    },
    {
      name: "DJP",
      logo: "/images/government-logo/djp.png",
      link: "https://pajak.go.id/",
      // size: "md:w-[32%] lg:w-[20%]", // kecil
    },
    {
      name: "OSS",
      logo: "/images/government-logo/oss.png",
      link: "https://oss.go.id/",
      // size: "md:w-[100%] lg:w-[44%]", // besar
    },
  ];

  const bankPartner = [
    {
      name: "mandiri",
      logo: "/images/promo-assets/mandiri.png",
    },
    {
      name: "bsi",
      logo: "/images/promo-assets/bsi.png",
    },
    {
      name: "bca",
      logo: "/images/promo-assets/bca.png",
    },
  ];

  function handleIgDirect() {
    event("ButtonDirectIG", {
      content_name: "Direct to Instagram",
      value: 0,
      // currency: "IDR",
    });

    window.open("https://www.instagram.com/ganeshamultikreatif", "_blank");
  }

  return (
    <>
      {/* Section 1 - Header */}
      <section className="mx-4 md:mx-20 my-10 md:my-20 flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="bg-linear-to-tr from-lightColor to-mainColor/40 dark:bg-darkColor w-full md:w-fit px-6 md:px-10 flex flex-col md:flex-row justify-center items-center rounded-[30px] overflow-hidden relative max-w-4xl">
          {/* Left */}
          <div className="py-7 flex flex-col justify-center gap-3 items-center md:items-start text-center md:text-left">
            <PiSealCheckFill className="text-5xl md:text-6xl text-blue-600" />
            <h1
              className={clsx(
                "text-xl sm:text-2xl md:text-3xl pb-1 font-bold bg-gradient-to-br",
                "",
                "from-neutral-800 via-neutral-800 to-secondaryColor",
                "bg-clip-text text-transparent leading-snug"
              )}
            >
              Layanan di Ganesha Consulting Terverifikasi dan Terpercaya
            </h1>

            <button
              // href="https://www.instagram.com/ganeshamultikreatif"
              // target="_blank"
              onClick={handleIgDirect}
              rel="noopener noreferrer"
              className={`text-center text-white py-2 font-bold ease-in-out duration-300 hover:scale-95 rounded-2xl mt-2 flex items-center justify-center gap-3 transition-all w-fit px-8 ${BgMainGradient}`}
            >
              Kunjungi Instagram
            </button>
          </div>

          {/* Right */}
          <div className="flex items-end justify-end mt-5 md:mt-0 w-full md:w-auto">
            <img
              src="/images/promo-assets/woman-ig.png"
              alt="Instagram preview"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Section 2 - Flex Bento Grid */}
      {path.startsWith("/promo") && (
        <section className="md:mx-24 2xl:mx-80 mx-5 space-y-10 mb-30">
          <Title text1="Terdaftar di" text="Instansi Resmi" />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5">
            {registeredData.map((el, idx) => (
              <a
                key={idx}
                href={el.link}
                target="_blank"
                className={clsx(
                  "group relative overflow-hidden rounded-3xl p-4 flex flex-col items-center justify-start text-center bg-neutral-200 dark:bg-darkColor",
                  "hover:-translate-y-2 hover:shadow-mainShadow hover:invert duration-300 ease-in-out",
                  "transition-all"
                )}
              >
                <div className="relative w-16 h-16 md:w-20 md:h-20">
                  <Image
                    src={el.logo}
                    width={1000}
                    height={1000}
                    alt={el.name}
                    className="object-contain rounded-xl group-hover:scale-105 duration-300"
                  />
                </div>
                <h2 className="mt-3 font-semibold text-xs sm:text-sm md:text-base bg-gradient-to-bl dark:from-secondaryColor dark:to-neutral-100 from-mainColor to-darkColor bg-clip-text text-transparent">
                  {el.name}
                </h2>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Bank Partner */}
      <section className="flex flex-col space-y-10 mb-20 md:mx-24 2xl:mx-80 mx-5">
        <Title text1="Berkerja Sama" text="Dengan Beberapa Bank" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5">
          {bankPartner.map((el, idx) => (
            <div
              key={idx}
              className={clsx(
                "group relative overflow-hidden rounded-3xl p-3 flex flex-col items-center justify-center text-center bg-neutral-200 dark:bg-white/90",
                "hover:-translate-y-2 hover:shadow-mainShadow hover:invert duration-300 ease-in-out",
                "transition-all py-6 md:py-8"
              )}
            >
              <div className="relative w-24 md:w-28">
                <Image
                  src={el.logo}
                  width={1000}
                  height={500}
                  alt={el.name}
                  className="group-hover:scale-105 duration-300 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

// adjust responsiveness di layar lebar dan mobile tanpa merubah style sekarang di dekstop
