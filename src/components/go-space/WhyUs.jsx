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
          <div key={idx} className="flex flex-col border b-2 bg-white border-mainColor rounded-xl">
            <div className="flex justify-between">
              <div className="ps-4 mt-3" >
                <h1 className={clsx(fontCustom, "font-semibold text-3xl")}>{e.title}</h1>
              </div>
              <div className="bg-white p-1 text-[40px] text-mainColor mr-[-5px] mt-[-5px]" >
                <TiStarburst />
              </div>
            </div>
            <div className="px-4 py-5" >
              <p>{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
