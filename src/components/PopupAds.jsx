"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { IoClose } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiArrowRightWideLine } from "react-icons/ri";
import Link from "next/link";

const PopupAds = () => {
  const [promos, setPromos] = useState();
  const [loading, setLoading] = useState();
  const [isMinimized, setIsMinimized] = useState(false);
  const [visible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(
          "https://ganesha-cms.vercel.app/api/business/promos?limit=100"
        );
        const data = await res.json();
        if (data) {
          setPromos(data.data);
        }
      } catch (err) {
        const errMsg =
          err instanceof Error ? err.message : "Internal Server Error";
        console.log(errMsg);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (!promos?.length) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === promos.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [promos]);

  return (
    <>
      {promos?.map((el, index) => (
        <section
          key={`dekstop-${index}`}
          className={`hidden md:block fixed bottom-5 left-2 z-[100] `}
        >
          <div
            className={`flex flex-col items-start gap-0 duration-300
                     ${
                       isMinimized
                         ? "transform -translate-x-[105%] scale-0"
                         : "scale-100"
                     }`}
          >
            <Link
              href={el.url}
              target="_blank"
              className={` h-fit w-65 p-2 bg-white/20 shadow-mainShadow backdrop-blur-sm rounded-parent
                ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}
                `}
            >
              {el.url_mobile ? (
                <Image
                  src={el.url_mobile}
                  alt={el.alt}
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-auto rounded-children"
                />
              ) : (
                <p>Coming Soon for new Promo!</p>
              )}
            </Link>
            <div className="aspect-square ps-1 py-2 pe-2 rounded-r-full ">
              <button
                onClick={() => {
                  setIsMinimized(!isMinimized);
                }}
                variant={"secondary"}
                className={
                  "rounded-full p-2 bg-darkColor/10 backdrop-blur-xl text-mainColor hover:text-white text-sm"
                }
              >
                <span>
                  <IoIosArrowBack className="text-sm" />
                </span>
              </button>
            </div>
          </div>
        </section>
      ))}
      <section className={`hidden md:block fixed bottom-5 z-[100] `}>
        <div
          className={`duration-300
                ${isMinimized ? "scale-100" : "-translate-x-full scale-0"}`}
        >
          <button
            onClick={() => {
              setIsMinimized(!isMinimized);
            }}
            className={
              "bg-darkColor/10 text-2xl backdrop-blur-2xl h-10 -ml-0.5 -mr-1 hover:text-white rounded-r-lg "
            }
          >
            <RiArrowRightWideLine className="opacity-50" />
          </button>
        </div>
      </section>
    </>
  );
};

export default PopupAds;
