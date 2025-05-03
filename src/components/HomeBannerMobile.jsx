"use client";

import { BgMainGradient } from "@/utils/ReueseClass";
import Image from "next/image";
import { useState, useEffect } from "react";

export const HomeBannerMobile = () => {
    const sources = [
        "https://cms-ganesha.ganeshaconsulting.co.id/uploads/DECEMBER_DEALS_38_OFF_GANESHA_a67d3b687a.webp",
        "https://cms-ganesha.ganeshaconsulting.co.id/uploads/WEB_Banner_Ganesha_Consulting_72bc3c5c78.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sources.length);
        }, 10000); // Ganti gambar setiap 3 detik

        return () => clearInterval(interval);
    }, [sources.length]);

    return (
        <section className="relative block md:hidden">
            <div className="absolute inset-0 z-50 bg-gradient-to-b dark:from-black/35 dark:via-black/15 from-white/35 via-white/15 to-transparent w-full h-[50%]"></div>
            <div
                className={`${BgMainGradient} w-full h-[220px] relative rounded-b-3xl overflow-hidden`}
            >
                {sources.map((src, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                    >
                        <Image
                            src={src}
                            alt={`Banner Promo ${index + 1}`}
                            fill
                            className="object-cover w-full h-full"
                            priority={index === 0}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};
