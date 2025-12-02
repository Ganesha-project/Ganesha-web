"use client";

import { BgMainGradient } from "@/utils/ReueseClass";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export const HomeBannerMobile = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // touch control
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Fetch banners
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(
          "https://ganesha-cms.vercel.app/api/business/promos?limit=100"
        );
        const data = await res.json();

        if (data) {
          setBanners(data.data);
        }
      } catch (err) {
        console.error("error");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Auto slide
  useEffect(() => {
    if (!banners.length) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === banners.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [banners]);

  // Swipe handlers
  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const onTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;

    if (swipeDistance > 50) {
      // swipe left
      setCurrentIndex((prev) =>
        prev === banners.length - 1 ? 0 : prev + 1
      );
    }

    if (swipeDistance < -50) {
      // swipe right
      setCurrentIndex((prev) =>
        prev === 0 ? banners.length - 1 : prev - 1
      );
    }
  };

  return (
    <section className="relative block md:hidden">
      <div className="absolute inset-0 z-50 bg-gradient-to-b dark:from-black/35 dark:via-black/15 from-white/35 via-white/15 to-transparent w-full h-[50%]"></div>

      <div
        className={`${BgMainGradient} w-full h-[220px] relative rounded-b-3xl overflow-hidden`}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {banners?.map((el, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex
                ? "opacity-100 z-10"
                : "opacity-0 z-0"
            }`}
          >
            <Image
              src={el.url_desktop}
              alt={`Banner Promo ${index + 1}`}
              fill
              className="object-cover w-full h-full"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {banners?.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition ${
              index === currentIndex
                ? "bg-white dark:bg-white"
                : "bg-white/40 dark:bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
