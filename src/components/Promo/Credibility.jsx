"use client";

import React from "react";
import { MdVerified } from "react-icons/md";
import { useTheme } from "next-themes";
import Image from "next/image";
import { governLogo } from "@/app/Database";

const Credibility = () => {
  const { theme } = useTheme();

  const igImage =
    theme === "dark"
      ? "/images/promo-assets/ig-profile-dark.png"
      : "/images/promo-assets/ig-profile-light.png";

  const partnerBank = [
    {
      name: "bca",
      path: "/images/promo-assets/bca.png",
    },
    {
      name: "bsi",
      path: "/images/promo-assets/bsi.png",
    },
    {
      name: "mandiri",
      path: "/images/promo-assets/mandiri.png",
    },
  ];

  return (
    <section className="mx-8 md:mx-24 my-20 flex flex-col items-center h-fit gap-12">
      {/* Header */}
      <div className="flex flex-col items-center gap-2 text-center">
        <MdVerified className="text-5xl text-blue-700" />
        <h1 className="text-xl sm:text-4xl font-semibold">
          Layanan di{" "}
          <span className="font-bold text-mainColor">Ganesha Consulting</span>
        </h1>
        <h1 className="text-xl sm:text-4xl font-semibold">
          Terverifikasi dan Terpercaya
        </h1>
      </div>

      {/* Instagram Section */}
      <div className="flex flex-col w-full">
        <div className="overflow-hidden py-8 rounded-2xl bg-white dark:bg-black border-mainColor flex justify-center items-center">
          <Image
            src={igImage}
            alt="Instagram follower"
            width={700}
            height={400}
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Registered Section */}
      <div>
        <h1 className="text-xl sm:text-4xl font-semibold text-center">
          Resmi <span className="text-mainColor">Terdaftar</span> di:
        </h1>
      </div>

      {/* Government Logos */}
      <div className="flex flex-wrap justify-center gap-3 relative px-3 bg-white rounded-2xl w-fit p-4">
        {governLogo?.map((el, idx) => (
          <Image
            key={idx}
            width={85}
            height={85}
            className="w-[85px] h-[85px] object-contain z-20 relative"
            src={el.logoPath}
            alt={el.name}
            unoptimized
          />
        ))}
      </div>

      <div>
        <h1 className="text-xl sm:text-4xl font-semibold text-center">
          dan Berkerja Sama dengan:
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-8 relative bg-white rounded-2xl w-fit px-10 py-3">
        {partnerBank.map((el, idx) => (
          <Image
            key={idx}
            width={120}
            height={120}
            className="w-[120px] h-[70px] object-contain z-20 relative"
            src={el.path}
            alt={el.name}
            unoptimized
          />
        ))}
      </div>

    </section>
  );
};

export default Credibility;
