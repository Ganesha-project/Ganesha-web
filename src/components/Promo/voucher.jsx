import React from "react";
import { Button } from "../ui/button";
// import { IoTicket } from "react-icons/io5";
import { GiTicket } from "react-icons/gi";
import { BgMainGradient, TextMainGradient } from "@/utils/ReueseClass";
import clsx from "clsx";

export const Voucher = () => {
  const WaLink = "https://api.whatsapp.com/send?phone=628887127000";
  return (
    <section className="my-12 sm:my-16 lg:my-20 space-y-6 sm:space-y-8 lg:space-y-10 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-2 sm:gap-3 text-center max-w-xs sm:max-w-lg lg:max-w-2xl">
        {/* <MdVerified className="text-5xl text-blue-700" /> */}
        <h1 className="text-lg sm:text-2xl lg:text-4xl font-semibold">
          Hanya Hari ini
          <span className={clsx("font-bold", TextMainGradient)}>
            {" "}
            Dirikan PT atau CV{" "}
          </span>{" "}
          dan klaim Voucher dibawah ini
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 sm:gap-5 lg:gap-7 w-full max-w-sm sm:max-w-md lg:max-w-3xl">
        <div className="relative overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-custom hover:scale-95 ease-in-out duration-300 transition-all">
          {/* ganti jadi Image */}
          <img
            src="/images/promo-assets/voucher.png"
            alt="voucher"
            className="w-full h-auto object-cover"
          />
        </div>

        <a
          href={WaLink}
          target="_blank"
          className={`w-full text-center text-white py-2.5 sm:py-3 lg:py-3.5 px-4 font-bold ease-in-out duration-300 hover:scale-95 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 sm:gap-3 transition-all ${BgMainGradient}`}
        >
          <span className="text-base sm:text-lg lg:text-xl">Klaim Sekarang</span>
          <GiTicket className="text-xl sm:text-2xl lg:text-2xl" />
        </a>
      </div>
    </section>
  );
};