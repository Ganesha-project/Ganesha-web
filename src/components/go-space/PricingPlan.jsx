"use client";

import React from "react";
import { MdOutlineDiamond } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { goSpacePackagesData } from "@/Data/GoSpace/PricingData"; // pastikan path sesuai
import { calculateOriginalPrice } from "@/helper/calculateOriginalPrice";
import { formatToRupiah } from "@/helper/formatToRupiah";

export const PricingPlan = ({ data }) => {
  return (
    <main className="px-5 md:px-24 2xl:px-70 my-24">
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Virtual Office Space Plans
        </h1>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Pilih paket virtual office yang sesuai dengan kebutuhan bisnis Anda. 
          Dapatkan alamat prestisius dan fasilitas lengkap dengan diskon khusus.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {data?.map((plan, index) => {
            const originalPrice = calculateOriginalPrice(plan.price, plan.discount)
            const originalPriceFormatted = formatToRupiah(originalPrice)
            const priceFormatted = formatToRupiah(plan.price)

            return (
              <div
                key={`price-id-${index}`}
                className={`${
                  plan.highlight
                    ? "bg-gradient-to-br from-purple-600 to-blue-600"
                    : "bg-gradient-to-br from-gray-700 to-gray-800"
                } z-10 overflow-hidden px-2 pb-2 rounded-parent transform hover:scale-105 transition-transform duration-300 shadow-xl relative`}
              >
                {plan.highlight && (
                  <div className="flex justify-between items-center py-6 px-4 text-white">
                    <span className="font-semibold text-xl">{plan.type}</span>
                    <div className="flex items-center gap-2">
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                        {plan.discount}%
                      </span>
                      <MdOutlineDiamond className="text-xl" />
                    </div>
                  </div>
                )}

                <div className="-z-10 blur-[120px] w-100 h-100 bg-yellow-400 absolute -right-53 top-5"></div>

                <div className="!z-50 bg-gradient-to-br from-slate-900 via-gray-900 to-black flex flex-col rounded-children p-6 text-white gap-5">
                  <div className="flex-1">
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-gray-400 line-through text-lg">
                          {originalPriceFormatted}
                        </span>
                        <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                          {plan.discount}%
                        </span>
                      </div>
                      <div className="flex items-end gap-2">
                        <h2 className="text-xl md:text-3xl font-bold bg-clip-text text-gray-200">
                          {priceFormatted}
                        </h2>
                      </div>
                    </div>

                    <a
                      href={plan.link}
                      target="_blank"
                      className={`${
                        plan.highlight
                          ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                          : "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600"
                      } py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg mb-8 w-full mx-0 block text-center`}
                    >
                      Book Now
                    </a>

                    <ul className="space-y-3 mt-8">
                      {plan.features.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <IoMdCheckmarkCircleOutline className="text-gray-200 text-xl mt-0.5 flex-shrink-0" />
                          <span className="text-gray-200 text-sm">
                            {item.feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};
