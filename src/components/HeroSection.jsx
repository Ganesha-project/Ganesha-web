'use client'

import { ClientsReview } from "@/Data/Clients";
import { TextMainGradient } from "@/utils/ReueseClass";
import Image from "next/image";
import { useEffect, useState } from "react";
import { governLogo } from "@/app/Database";
import { ClientPhotos } from "./ClientPhotos";
import { useTheme } from "next-themes";

export const HeroSection = () => {
    const filteredClients = ClientsReview.filter(el => el.clientPhoto);
    const delay = 4000;
    const [index, setIndex] = useState(0);
    const [scale, setScale] = useState(1);
    const [rounded, setRounded] = useState(0); // max 24
    const [bgOpacity, setBgOpacity] = useState(0); // from 10 to 90
    const { theme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    const currentTheme = theme === "system" ? systemTheme : theme;

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (filteredClients.length > 0) {
            const timer = setTimeout(() => {
                setIndex(prevIndex =>
                    prevIndex === filteredClients.length - 1 ? 0 : prevIndex + 1
                );
            }, delay);
            return () => clearTimeout(timer);
        }
    }, [index, filteredClients.length]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newScale = Math.max(1 - scrollY / 1000, 0.87); // scale decreases to a minimum of 85%
            const newRounded = Math.min(Math.floor(scrollY / 10), 24); // max 24px
            const newOpacity = Math.min(0 + Math.floor(scrollY / 5), 100); // max 90%

            setScale(newScale);
            setRounded(newRounded);
            setBgOpacity(newOpacity);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="relative z-0 min-h-screen h-[170lvh] md:h-[185lvh] 2xl:h-[165lvh] flex flex-col items-center bg-lightColor/70 dark:bg-darkColor/50 overflow-hidden">

            {/* Glow Elements */}
            <div className="absolute top-0 left-0 w-[50%] h-[50%] rounded-full blur-3xl opacity-80 bg-[#ff562267] dark:bg-[#ff562243] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-0 left-0 w-[30%] h-[30%] rounded-full blur-3xl opacity-80 bg-[#6a00c19d] dark:bg-[#6a00c175] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-0 -right-24 w-[10%] h-[10%] rounded-full blur-3xl opacity-80 bg-[#ce93ffe3] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute -top-24 -right-12 w-[20%] h-[20%] rounded-full blur-3xl opacity-80 bg-[#33aac0] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute z-10 bottom-[50px] right-[-300px] w-[20%] h-[20%] rounded-full blur-3xl opacity-80 bg-[#e24ac1] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute z-10 bottom-[50px] left-[-0px] w-[10%] h-[10%] rounded-full blur-3xl opacity-80 bg-[#1ebd6e] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute inset-0 z-10 pattern-overlay dark:invert"></div>
            <div className="absolute bottom-0 w-full h-[20%] bg-gradient-to-b from-lightColor/70 to-white dark:invert"></div>

            {/* Text Content */}
            <div className="relative z-20 flex flex-col items-center text-center mx-5 mt-18 md:mt-40">
                <div className="mb-1 w-fit relative flex flex-col items-center gap-[3px]">
                    <p className="tracking-wider text-sm shimmer-text">
                        One Stop Solution
                    </p>
                    <div className="w-10 h-[2px] bg-mainColor/50 dark:bg-baseColor/50 rounded-full"></div>
                </div>
                <div>
                    <span className={`absolute mx-auto py-4 flex border w-fit blur-[20px] opacity-50 ${TextMainGradient} text-3xl md:text-6xl box-content font-extrabold text-center select-none`}>
                        Transformasi Bisnis Anda <br /> Bersama{" "}
                        Ganesha Consulting
                    </span>
                    <h1 className={`relative py-4 justify-center flex items-center ${TextMainGradient} text-3xl md:text-6xl font-extrabold text-center`}>
                        Transformasi Bisnis Anda <br /> Bersama{" "}
                        Ganesha Consulting
                    </h1>
                </div>
                <p className="text-sm md:text-lg mb-6 max-w-3xl opacity-90">
                    Temukan solusi lengkap untuk semua kebutuhan bisnis Anda di Ganesha Consulting! Kami memberikan layanan all-in-one untuk memenuhi segala kebutuhan Anda!
                </p>
                <button className="cursor-pointer duration-300 hover:scale-95 active:scale-90 px-3 py-2 font-semibold text-white dark:text-black text-sm rounded-full from-baseColor via-mainColor to-mainColor bg-gradient-to-br dark:from-baseColor dark:via-baseColor dark:to-secondaryColor">
                    Hubungi Kami
                </button>
            </div>

            {/* Client Photo Marquee */}

            {mounted && (
                <div
                    className="hidden md:block relative z-20 mt-16 md:w-full transition-transform duration-500 ease-out rounded-3xl md:overflow-hidden pointer-events-none md:my-0 !my-auto"
                    style={{
                        transform: `scale(${scale})`,
                        borderRadius: `${rounded}px`,
                        backgroundColor:
                            currentTheme === "dark"
                                ? `rgba(230, 230, 230, ${bgOpacity / 100})`
                                : `rgba(37, 37, 37, ${bgOpacity / 100})`,
                        backdropFilter: "blur(6px)",
                        WebkitBackdropFilter: "blur(6px)",
                    }}
                >
                    <ClientPhotos
                        titleVisibility="hidden"
                        padding="!p-0"
                        padding2="!p-10"
                    />
                </div>
            )}

            {mounted && (
                <div
                    className="block md:hidden relative z-20 mt-16 md:w-full transition-transform duration-500 ease-out rounded-3xl md:overflow-hidden pointer-events-none md:my-0 !my-auto"
                >
                    <ClientPhotos
                        titleVisibility="hidden"
                        padding="!p-0"
                        padding2="!p-10"
                    />
                </div>
            )}


            {/* Govern Logo Section */}
            <p className="text-sm text-center z-20">
                Resmi terdaftar di:
            </p>
            <div className="relative z-20 flex flex-wrap justify-center gap-6 mt-4 mb-10 md:mb-0">
                {governLogo.map((logo, idx) => (
                    <div key={idx} className="md:w-16 md:h-16 w-14 h-14 flex items-center justify-center relative">
                        <Image
                            src={logo.logoUrl}
                            alt={`Govern Logo ${idx + 1}`}
                            width={64}
                            height={64}
                            className="object-contain drop-shadow-[0px_0px_10px_#ffffff] blur-lg"
                        />
                        <Image
                            src={logo.logoUrl}
                            alt={`Govern Logo ${idx + 1}`}
                            width={64}
                            height={64}
                            className="absolute object-contain drop-shadow-[0px_0px_10px_#ffffff]"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};
