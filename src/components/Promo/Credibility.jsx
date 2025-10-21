import React from "react";
import { MdVerified } from "react-icons/md";
import { GiPin } from "react-icons/gi";
import { governLogo } from "@/app/Database";
import Image from "next/image";

const Credibility = () => {
  return (
    <>
      <section className="mx-8 md:mx-24 my-20 flex flex-col items-center h-fit gap-12">
        <div className="flex flex-col items-center gap-2 text-center">
          <MdVerified className="text-5xl text-blue-700" />
          <h1 className="text-xl sm:text-4xl font-semibold">
            Layanan di{" "}
            <span className="font-bold text-mainColor">Ganesha Consulting</span>{" "}
          </h1>
          <h1 className="text-xl sm:text-4xl font-semibold">
            Terverifikasi dan Terpercaya{" "}
          </h1>
        </div>
        <div className="flex flex-col w-full">
          <div className=" overflow-hidden py-8 rounded-2xl bg-black border-3 border-mainColor flex justify-center items-center">
            <img
              src="/images/promo-assets/ig-acc.png"
              alt="instagram follower"
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <h1 className="text-xl sm:text-4xl font-semibold text-center">
            Dan Resmi Terdaftar di:
          </h1>
        </div>
        <div className="flex gap-3 relative px-3 bg-white rounded-2xl w-fit">
          {governLogo?.map((el, idx) => (
            <Image
              key={idx}
              width={85}
              height={85}
              className="w-[85px] h-[85px] object-contain z-20 relative" // Ganti object-cover jadi object-contain
              src={el.logoPath}
              alt={el.name}
              unoptimized // Tambahkan ini
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Credibility;
