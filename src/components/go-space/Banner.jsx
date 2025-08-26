"use client";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

export const Banner = ({ titleComponent }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="py-12 mt-12">
        {/* Header section with title on left and rating card on right */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 md:px-24 2xl:px-80">
          {/* Title section */}
          <div className="flex-1 max-w-2xl">
            <h1
              className={`text-5xl lg:text-6xl font-bold text-purple-700 leading-tight mb-4 ${titleComponent || ""
                }`}
            >
              Virtual Office
              <br />
              Real Growth
            </h1>
            <p className="text-xl text-purple-700/60 font-medium">
              Alamat bisnis strategis, kredibilitas naik, biaya operasional lebih hemat.
            </p>
          </div>

          {/* Rating card */}
          <div className="flex-shrink-0">
            <div className="bg-goPurple text-white p-6 max-w-sm rounded-lg relative overflow-hidden">
              {/* diagonal cut overlay */}
              <div
                className="absolute top-0 left-0 bg-white"
                style={{
                  width: "40px",
                  height: "40px",
                  clipPath: "polygon(0 0, 100% 0, 0 100%)",
                }}
              ></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6 pb-4 border-b border-gray-700">
                  <div>
                    <h3 className="text-2xl font-bold">4.9/5</h3>
                    <p className="text-gray-300 text-sm">Client Satisfaction</p>
                  </div>
                  <div className="text-yellow-400">
                    <FaStar className="text-2xl" />
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Go Space membantu bisnis tampil profesional dengan alamat
                  kantor virtual strategis yang bisa digunakan untuk legalitas,
                  branding, dan kebutuhan operasional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image - positioned absolutely outside parent margins when not scrolled */}
      <div
        className={`transition-all duration-500 ease-in-out ${isScrolled ? "md:px-24 2xl:px-80" : ""
          }`}
      >
        <img
          src="/go-space-banner.jpg"
          alt="Modern office workspace representing Go Space virtual office"
          className={`w-full h-[60vh] object-cover shadow-2xl transition-all duration-500 ease-in-out ${isScrolled ? "rounded-2xl" : "rounded-none"
            }`}
        />
      </div>
    </>
  );
};
