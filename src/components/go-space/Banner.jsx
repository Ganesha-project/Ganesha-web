import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import clsx from "clsx";
import { TextMainGradient } from "@/utils/ReueseClass";

export const Banner = () => {
  return (
    <section>
      {/* Bagian “Our Story, Vision” */}
      <div className="flex mt-25  justify-between items-end text-white">

        <div className={clsx("py-3 px-5 text-goPurple text-4xl font-semibold", TextMainGradient)}>Our Story, Vision</div>
        <div className="max-w-lg bg-white p-3 text-goPurple rounded-tr-2xl rounded-bl-2xl text-right font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>

      {/* Banner utama */}
      <div
        className=" rounded-2xl relative flex flex-col justify-between"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "55svh",
        }}
      >

        {/* Kiri atas: “and Values” */}
        <div className="flex justify-between items-start text-white">
        {/* // ini dibuat rounded out top right, tapi rounded nya keluar bisa ga */}
          <div className="bg-white pb-3 px-5 text-goPurple text-4xl rounded-out-tr-2xl rounded-out-bl-2xl rounded-br-2xl font-semibold">and Values</div>
        </div>

        {/* Kanan bawah: tombol Go Space */}
        <div className="self-end bg-white px-2 pt-2 rounded-tl-2xl rounded-out-bl-2xl rounded-out-tr-2xl">
          <img className="w-30" src="/go-space-logo.png" alt="go space logo" />
        </div>

      </div>
    </section>
  );
};