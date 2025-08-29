"use client";

import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import Image from "next/image";

const spaces = [
  {
    title: "Smoking Office",
    desc: "Ruang kerja khusus dengan area smoking-friendly. Tetap produktif sambil menikmati suasana santai tanpa mengganggu rekan kerja lainnya.",
    images: [
      "/go-space-assets/spaces/room-2-1.jpg",
      "/go-space-assets/spaces/room-2-2.jpg",
      "/go-space-assets/spaces/room-2-3.jpg",
    ],
  },
  {
    title: "Private Office",
    desc: "Nikmati privasi penuh di ruang kantor eksklusif untuk tim atau individu. Cocok untuk rapat penting, fokus kerja, atau kebutuhan harian tanpa distraksi.",
    images: [
      "/go-space-assets/spaces/room-4-1.jpg",
      "/go-space-assets/spaces/room-4-2.jpg",
    ],
  },
  {
    title: "Exclusive Office",
    desc: "Ruang kantor premium dengan fasilitas lengkap dan desain modern. Memberikan kenyamanan sekaligus prestise untuk mendukung bisnis Anda.",
    images: [
      "/go-space-assets/spaces/room-12-1.jpg",
      "/go-space-assets/spaces/room-12-2.jpg",
      "/go-space-assets/spaces/room-12-3.jpg",
    ],
  },
];

export const ExploreSpaces = () => {
  return (
    <main className="md:px-24 2xl:px-70 px-5 my-24">
      <section>
        <h1 className="text-3xl font-bold mb-10">Explore Spaces</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {spaces.map((space, idx) => (
            <div
              key={idx}
              className="relative rounded-parent overflow-hidden shadow-lg group"
            >
              {/* Gambar utama */}
              <img
                src={space.images[0]}
                alt={space.title}
                className="object-cover w-full h-130 transition-all duration-500 md:group-hover:scale-110"
              />

              {/* Overlay gradien */}
              <div className=" absolute inset-0 bg-gradient-to-t from-black/70 to-transparent md:group-hover:backdrop-blur-lg transition-all duration-300"></div>

              {/* Icon pojok kanan atas */}
              <div className="absolute top-0 right-0 p-3 bg-white dark:bg-black text-purple-800 text-2xl shadow-lg flex justify-start rounded-out-rb-parent flex-nowrap rounded-bl-parent">
                {" "}
                <div className="bg-white dark:bg-black dark:text-black rounded-out-tl-parent text-white rounded-bl-parent">
                  .
                </div>{" "}
                <div className="bg-white dark:bg-black rounded-out-rb-parent">
                  {" "}
                  <BsArrowUpRightCircleFill className="text-3xl" />{" "}
                </div>{" "}
              </div>

              {/* Konten teks di atas gambar */}
              <div className="absolute bottom-5 left-5 right-5 text-white z-10 pb-5">
                <div className="translate-y-0 md:translate-y-[50%] md:group-hover:translate-y-0 transition-transform duration-300">
                  <h2 className="font-bold text-2xl">{space.title}</h2>
                  <p className="text-sm text-gray-200 mt-7 line-clamp-none md:line-clamp-2 md:group-hover:line-clamp-none transition-all duration-300">
                    {space.desc}
                  </p>
                  <button
                    onClick={() =>
                      document.getElementById(`modal-${idx}`).showModal()
                    }
                    className="mt-5 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full font-semibold transition-all duration-300 flex items-center"
                  >
                    Cek Detail <BsArrowUpRightCircleFill className="ml-2" />
                  </button>
                </div>
              </div>

              {/* Modal */}
              <dialog
                id={`modal-${idx}`}
                className="modal backdrop-blur-md py-5"
              >
                <div className="modal-box dark:bg-[#151515] bg-white md:w-[80lvw] h-full max-h-full max-w-full noBar">
                  {/* Close */}
                  <form method="dialog" className="sticky top-0 right-0">
                    <button className="z-[100] btn btn-circle border-none bg-neutral-200 focus:ring-0 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-900 absolute right-0 top-0 rotate-45">
                      <FaPlus className="text-2xl text-neutral-800 dark:text-neutral-100" />
                    </button>
                  </form>

                  {/* Content */}
                  <section className="md:mx-14 mt-5 space-y-10">
                    <div className="space-y-3 mb-5">
                      <span className="text-lg">Gallery.</span>
                      <h1 className="text-2xl md:text-4xl font-bold mb-5">
                        {space.title}
                      </h1>
                      <p className="text-gray-600 dark:text-gray-300">
                        {space.desc}
                      </p>
                    </div>
                    <div className="flex flex-col gap-10 w-full items-center justify-center">
                      {space.images.map((image, imgIdx) => (
                        <Image
                          key={imgIdx}
                          width={800}
                          height={600}
                          className="z-50 max-h-screen roundedparentl object-contain"
                          src={image}
                          alt={`${space.title}-${imgIdx}`}
                        />
                      ))}
                    </div>
                  </section>
                </div>
              </dialog>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
