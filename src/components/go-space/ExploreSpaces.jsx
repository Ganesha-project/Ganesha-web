"use client";

import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const spaces = [
  {
    title: "Smoking Office",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: "/go-space-assets/spaces/room-2-1.jpg",
  },
  {
    title: "Private Office",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: "/go-space-assets/spaces/room-4-1.jpg",
  },
  {
    title: "Exclusive Office",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: "/go-space-assets/spaces/room-12-1.jpg",
  },
];

export const ExploreSpaces = () => {
  return (
    <main className="md:px-24 2xl:px-70 px-5 my-24">
      <section>
        <h1 className="text-3xl font-bold mb-10">Explore Spaces</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {spaces.map((space, index) => (
            <div key={index} className="relative rounded-2xl overflow-hidden group">
              {/* Gambar */}
              <img
                src={space.img}
                alt={space.title}
                className="object-cover w-full h-120 transition-all duration-500 group-hover:scale-110"
              />

              {/* Overlay gradien + blur saat hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:backdrop-blur-lg transition-all duration-300"></div>

              {/* Icon pojok kanan atas tetap dengan rounded-out */}
              <div className="absolute top-0 right-0 p-3 bg-white text-purple-800 text-2xl shadow-lg flex justify-start rounded-out-rb-2xl flex-nowrap rounded-bl-4xl">
                <div className="bg-white rounded-out-tl-2xl text-white rounded-bl-4xl">.</div>
                <div className="bg-white rounded-out-rb-2xl  ">
                  <BsArrowUpRightCircleFill className="text-3xl" />
                </div>
              </div>

              {/* Konten teks di atas gambar */}
              <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                <div className="translate-y-[50%] group-hover:translate-y-0 transition-transform duration-300">
                  <h2 className="font-bold text-2xl">{space.title}</h2>
                  <p className="text-sm text-gray-200 mt-2">{space.desc}</p>
                  <button className="mt-3 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full font-semibold transition-all duration-300">
                    Cek Detail <BsArrowUpRightCircleFill className="inline ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
