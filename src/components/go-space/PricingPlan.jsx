"use client";

import React from "react";
import { MdOutlineDiamond } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const dataPricing = [
  {
    title: "Standard",
    benefit: [
      "Semua fitur Basic",
      "Ruang meeting 5 jam / bulan",
      "Loker pribadi",
      "Akses 24/7",
      "Printing & scanning",
    ],
    price: "Rp 2.500.000",
    period: "/ bulan",
    description:
      "Solusi sempurna untuk profesional dan tim kecil yang memerlukan fasilitas lebih lengkap untuk produktivitas maksimal.",
    img: "/go-space-assets/spaces/room-4-1.jpg",
    popular: true,
  },
  {
    title: "Premium",
    benefit: [
      "Semua fitur Standard",
      "Ruang meeting unlimited",
      "Alamat bisnis resmi",
      "Resepsionis virtual",
      "Priority support",
    ],
    price: "Rp 5.000.000",
    period: "/ bulan",
    description:
      "Paket eksklusif untuk perusahaan dan tim besar yang menginginkan layanan premium dan fleksibilitas penuh.",
    img: "/go-space-assets/spaces/room-12-1.jpg",
    popular: true,
  },
];

export const PricingPlan = () => {
  return (
    <main className="px-5 md:px-24 2xl:px-70 my-24">
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Pricing Plan
        </h1>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Pilih paket yang sesuai dengan kebutuhan Anda. Semua paket dilengkapi
          dengan fasilitas terbaik untuk mendukung produktivitas kerja Anda.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {dataPricing.map((plan, index) => (
            <div
              key={`price-id-${index}`}
              className={`${
                plan.popular
                  ? "bg-gradient-to-br from-purple-600 to-blue-600"
                  : "bg-gradient-to-br from-gray-700 to-gray-800"
              } px-2 pb-2 rounded-3xl transform hover:scale-105 transition-transform duration-300 shadow-xl`}
            >
              {plan.popular && (
                <div className="flex justify-between items-center py-6 px-4 text-white">
                  <span className=" font-semibold text-xl">{plan.title}</span>
                  <MdOutlineDiamond className="text-xl" />
                </div>
              )}

                {/* kenapa div ini ngelebihin container nya panjangnya */}
              <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-black flex flex-col rounded-3xl p-6 text-white gap-5">
                <div className="flex-1">
                  <h3 className="text-xl text-gray-200 mb-2">{plan.title}</h3>

                  <div className="flex items-end gap-2 mb-4">
                    <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-gray-200">
                      {plan.price}
                    </h2>
                    <span className="text-gray-200 text-sm pb-1">
                      {plan.period}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  <button
                    className={`${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                        : "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600"
                    } py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg w-full mb-8`}
                  >
                    Book Now
                  </button>

                  <ul className="space-y-3">
                    {plan.benefit.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-3">
                        <IoMdCheckmarkCircleOutline className="text-gray-200 text-xl mt-0.5 flex-shrink-0" />
                        <span className="text-gray-200 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
