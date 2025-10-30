"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdArrowRoundDown } from "react-icons/io";
import { Badge } from "../ui/badge";
import { IoArrowDown } from "react-icons/io5";
import clsx from "clsx";
import { BgMainGradient, TextMainGradient } from "@/utils/ReueseClass";

export const PromoBanner = ({
  badge,
  title,
  desc,
  modelImage,
  scrollTargetId
}) => {
  const handleScroll = () => {
    if (scrollTargetId) {
      const section = document.getElementById(scrollTargetId);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="mt-10 sm:mt-0 py-2 px-2 gap-2 overflow-hidden flex flex-col lg:flex-row"
      style={{ height: "calc(100vh - 0.5rem)" }}
    >
      {/* left grid */}
      <div className="bg-white shadow-custom h-auto lg:w-1/2 w-full border rounded-2xl px-4 sm:px-6 lg:px-7 py-6 sm:py-8 lg:py-10 flex flex-col justify-between">
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          <Badge variant="outline" className="text-sm sm:text-base border">
            {badge}
          </Badge>
          <h1 className={clsx("text-darkColor text-2xl sm:text-3xl lg:text-5xl font-bold pb-2", TextMainGradient)}>
            {title}
          </h1>
          <p className="text-darkColor/80 text-sm sm:text-base">
            {desc}
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Button className={clsx("text-sm sm:text-base w-full sm:w-auto", BgMainGradient)}>
              <span>Konsultasi Sekarang</span>
              <FaWhatsapp />
            </Button>
            <Button variant="outline" className="text-sm sm:text-base w-full sm:w-auto" onClick={handleScroll}>
              <span>Lihat Selengkapnya</span>
              <IoArrowDown />
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center sm:justify-start gap-6 sm:gap-8 lg:gap-10 mt-6 lg:mt-0">
          <div className="space-y-2 lg:space-y-3 text-center sm:text-start">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">400+</h1>
            <p className="text-sm sm:text-base text-darkColor/80">Clients</p>
          </div>
          <div className="space-y-2 lg:space-y-3 text-center sm:text-start">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">2±</h1>
            <p className="text-sm sm:text-base text-darkColor/80">Proses Pengerjaan</p>
          </div>
        </div>
      </div>

      {/* right grid */}
      <div className="relative overflow-hidden rounded-2xl shadow-custom h-64 sm:h-80 lg:h-auto lg:w-1/2 w-full grow">
        <img
          className="absolute inset-0 object-cover h-full w-full"
          src="https://i.pinimg.com/1200x/ec/ba/9b/ecba9b63fe15f9cc4de57598f3f6b955.jpg"
          alt="background"
        />

        <div className="absolute inset-0 flex justify-center items-center">
          <img
            src={modelImage}
            alt="models"
            className="absolute w-1/2 sm:w-2/3  h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};