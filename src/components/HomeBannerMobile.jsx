"use client";

import { usePromos } from "@/hooks/usePromos";
import { BgMainGradient } from "@/utils/ReueseClass";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export const HomeBannerMobile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // touch control
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoPlayRef = useRef(null);

  const { promos: banners, setPromos: setBanners, loading, error } = usePromos()

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  // Auto slide with pause/resume functionality 
  useEffect(() => {
    if (!banners.length || banners.length <= 1 || !isAutoPlaying) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === banners.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [banners, isAutoPlaying]);

  // Pause auto slide on user interaction
  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  // Resume auto slide after user interaction
  const resumeAutoPlay = () => {
    setIsAutoPlaying(true);
  };

  // Handle manual navigation
  const goToSlide = (index) => {
    pauseAutoPlay();
    setCurrentIndex(index);
    // Resume auto play after 5 seconds of inactivity
    setTimeout(resumeAutoPlay, 5000);
  };

  // Swipe handlers
  const onTouchStart = (e) => {
    pauseAutoPlay();
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const onTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;

    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance > 50) {
        // swipe left - next slide
        setCurrentIndex((prev) =>
          prev === banners.length - 1 ? 0 : prev + 1
        );
      } else {
        // swipe right - previous slide
        setCurrentIndex((prev) =>
          prev === 0 ? banners.length - 1 : prev - 1
        );
      }
      // Resume auto play after swipe
      setTimeout(resumeAutoPlay, 5000);
    } else {
      // If swipe wasn't significant, resume immediately
      resumeAutoPlay();
    }
  };

  const mobileBanners = banners.filter((x) => x.url_desktop )

  return (
    <section className="relative block md:hidden">
      <div className="absolute inset-0 z-50 bg-gradient-to-b dark:from-black/35 dark:via-black/15 from-white/35 via-white/15 to-transparent w-full h-[50%]"></div>
      
      <div
        className={`${BgMainGradient} w-full h-[220px] sm:h-[300px] relative rounded-b-3xl overflow-hidden`}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >

        {mobileBanners?.map((el, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Image
              src={el.url_desktop || "/placeholder-image.png"}
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
        {mobileBanners?.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition ${index === currentIndex
                ? "bg-white dark:bg-white"
                : "bg-white/40 dark:bg-white/40"
              }`}
          />
        ))}
      </div>
    </section>
  );
};
