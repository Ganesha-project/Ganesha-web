import React from "react";
import { TextGradientYellowPurple } from "@/utils/ReueseClass";
import clsx from "clsx";
import { TiStarburst } from "react-icons/ti";

const data = [
  {
    title: "Lorem Ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  },
  {
    title: "Lorem Ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  },
  {
    title: "Lorem Ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  },
];

export const WhyUs = ({ fontCustom }) => {
  return (
    <section className="mb-12 mx-7">
      <div className={clsx(TextGradientYellowPurple, fontCustom, "text-center text-4xl font-bold mb-10")}>
        <h1>WHY US?</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {data.map((e, idx) => (
          <div key={idx} className="group flex flex-col border b-2 bg-white border-mainColor rounded-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
            <div className="flex justify-between">
              <div className="ps-4 mt-3">
                <h1 className={`font-semibold text-3xl ${fontCustom}`}>{e.title}</h1>
              </div>
              <div className="bg-white rounded-full p-1 text-[40px] text-mainColor mr-[-10px] mt-[-10px] group-hover:rotate-180 transition-transform duration-500 ease-in-out">
                <TiStarburst />
              </div>
            </div>
            <div className="px-4 py-5">
              <p>{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
