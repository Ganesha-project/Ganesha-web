"use client";
import React from "react";

export const GoFeedback = () => {
  return (
    <main className="md:px-24 2xl:px-70 px-5 my-24">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left side form */}
        <div className="bg-gray-100 dark:bg-gray-900 h-full flex flex-col justify-center px-8 rounded-4xl drop-shadow-2xl">
          <h1 className="text-3xl font-bold mb-10">
            Kritik & Saran
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Suara kamu penting untuk kami. Yuk, bagikan pengalaman atau
            masukanmu agar kami bisa terus berkembang.
          </p>
          {/* form contact */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 
                         border-gray-300 dark:border-gray-700 
                         bg-white dark:bg-gray-800 
                         text-gray-900 dark:text-gray-100 
                         placeholder-gray-400 dark:placeholder-gray-500"
            />
            <input
              type="email"
              placeholder="Alamat Email"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 
                         border-gray-300 dark:border-gray-700 
                         bg-white dark:bg-gray-800 
                         text-gray-900 dark:text-gray-100 
                         placeholder-gray-400 dark:placeholder-gray-500"
            />
            <textarea
              placeholder="Tulis pesan atau masukanmu di sini..."
              className="w-full border rounded-lg px-4 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 
                         border-gray-300 dark:border-gray-700 
                         bg-white dark:bg-gray-800 
                         text-gray-900 dark:text-gray-100 
                         placeholder-gray-400 dark:placeholder-gray-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 w-full py-5 text-white font-medium rounded-lg 
                         hover:bg-indigo-700 transition 
                         dark:bg-indigo-500 dark:hover:bg-indigo-600"
            >
              Kirim Feedback
            </button>
          </form>
        </div>

        {/* Right side background image with overlay + text */}
        <div className="relative w-full h-[300px] md:h-[600px] rounded-2xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/1181735/pexels-photo-1181735.jpeg')`,
            }}
          ></div>
          {/* overlay gelap biar teks kebaca */}
          <div className="absolute inset-0 bg-black/40"></div>
          {/* teks di atas background */}
          <div className="relative z-10 flex items-end justify-start h-full p-6">
            <div className="relative bg-white/30 dark:bg-black/40 backdrop-blur-md border border-white/40 dark:border-gray-700 shadow-lg rounded-4xl py-4 px-6">
              <h2 className="text-2xl font-bold text-white drop-shadow">
                Dengarkan Suaramu 🚀
              </h2>
              <p className="text-gray-100 mt-2 text-sm md:text-base drop-shadow">
                Setiap masukan akan membantu kami memberikan layanan terbaik.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
