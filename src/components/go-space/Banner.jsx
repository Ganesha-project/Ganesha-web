import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import clsx from "clsx";
import { TextMainGradient } from "@/utils/ReueseClass";

export const Banner = () => {
  return (
    <>
      {/* Bagian “Our Story, Vision” */}
      <div className="flex mt-25 mx-7 justify-between items-end text-white">
        <div className={clsx("bg-white py-3 px-5 text-mainColor text-4xl rounded-tl-2xl rounded-br-2xl font-semibold", TextMainGradient)}>Our Story, Vision</div>
        <div className="max-w-lg bg-white p-3 text-mainColor rounded-tr-2xl rounded-bl-2xl text-right font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>

      {/* Banner utama */}
      <section
        className="mx-7 rounded-2xl relative flex flex-col justify-between"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "55svh",
        }}
      >
        {/* Kiri atas: “and Values” */}
        <div className="flex justify-between items-start text-white">
          <div className="bg-white pb-3 px-5 text-mainColor text-4xl rounded-tl-2xl rounded-br-2xl font-semibold">and Values</div>
        </div>

        {/* Kanan bawah: tombol Go Space */}
        <div className="self-end bg-white px-5 py-3 rounded-tl-2xl">
          <button className="cursor-pointer flex items-center gap-2 bg-green-500 text-white rounded-full px-5 py-3 text-lg font-semibold shadow-md hover:bg-green-600 transition">
            <FaLocationArrow />
            Go Space
          </button>
        </div>
      </section>
    </>
  );
};
