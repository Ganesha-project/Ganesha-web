'use client'

import { useRef, useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AboutUsLinks, categorizedServices } from "@/DB/Database";
import { HiHome } from "react-icons/hi";
import ThemeSwitch from "./ThemeSwitch";

export const MobileDrawer = ({ expandedId }) => {
    const expandAnimationClass = expandedId
        ? "opacity-100 translate-y-0 duration-300 ease-out"
        : "opacity-0 translate-y-4 duration-200 ease-in";


    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef(null);
    const minimizedRef = useRef(null);
    const [contentHeight, setContentHeight] = useState('0px');
    const [minimizedHeight, setMinimizedHeight] = useState('0px');

    const allServices = [
        ...categorizedServices.main,
        ...categorizedServices.law,
        ...categorizedServices.creative,
        ...categorizedServices.management,
        ...categorizedServices.finance,
        ...categorizedServices.workspace,
    ].filter(cat => cat.visibility);

    const displayedServices = isExpanded ? allServices : allServices.slice(0, 6);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(`${contentRef.current.scrollHeight}px`);
        }
        if (minimizedRef.current) {
            setMinimizedHeight(`${minimizedRef.current.scrollHeight}px`);
        }
    }, [isExpanded, allServices]);

    return (
        <ul className="px-5 pt-14 pb-24">
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <p onClick={() => setIsExpanded(!isExpanded)} className="font-bold text-sm opacity-60 dark:opacity-70">Produk & Layanan</p>
                    {/* Expand/Minimize Button */}
                    {allServices.length > 6 && (
                 <button
                 onClick={() => setIsExpanded(!isExpanded)}
                 className={`text-sm font-semibold flex items-center justify-center`}
               >
                 <span className="flex items-center justify-center gap-1 opacity-60 dark:opacity-70 w-fit bg-transparent rounded-3xl px-2 py-2 text-md">
                   <IoIosArrowDown
                     className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : "rotate-0"}`}
                   />
                 </span>
               </button>
               
                    )}
                </div>

                {/* Services with Animated Height */}
                <div
                    className={`${expandAnimationClass} transition-all duration-200 ease-in-out overflow-hidden`}
                    style={{ maxHeight: isExpanded ? contentHeight : minimizedHeight }}
                >
                    <div ref={contentRef} className="grid grid-cols-3 gap-2">
                        {allServices.map((cat, index) => (
                            <a href={cat.href} key={index}>
                                <div
                                    className={` grow aspect-square group transition-transform relative overflow-hidden w-full h-full dark:bg-darkColor/50 bg-lightColor/50 rounded-3xl flex flex-col items-center justify-center p-3 hover:bg-opacity-20 hover:scale-95`}
                                >
                                    <div
                                        className="absolute top-0 left-0 w-[50%] h-[50%] rounded-full blur-3xl opacity-100"
                                        style={{
                                            backgroundColor: cat.accentLight,
                                            transform: "translate(-50%, -50%)",
                                        }}
                                    />
                                    <div
                                        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{
                                            backgroundColor: cat.accentLight,
                                            mixBlendMode: "multiply",
                                        }}
                                    />
                                    <div className="flex flex-col items-center justify-center text-center gap-2 text-sm z-10">
                                        <div
                                            className="text-xl p-2 rounded-full"
                                            style={{
                                                color: cat.accentLight,
                                                backgroundColor: cat.accentDark,
                                            }}
                                        >
                                            {cat.icon}
                                        </div>
                                        <p
                                            className="text-xs font-bold brightness-50 dark:brightness-100 leading-tight truncate-last-2"
                                            style={{ color: cat.accentDark }}
                                        >
                                            {cat.label}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Ref container to measure minimized height */}
                <div className="absolute invisible pointer-events-none h-0 overflow-hidden">
                    <div ref={minimizedRef} className="grid grid-cols-3 gap-2 w-[calc(100vw-2.5rem)]">
                        {allServices.slice(0, 6).map((cat, index) => (
                            <div key={index} className="aspect-square"></div>
                        ))}
                    </div>
                </div>

                <p className="font-bold opacity-60 dark:opacity-70 text-sm">
                    Kenali Kami
                </p>
                <div className="grid grid-cols-3 gap-2">
                    {AboutUsLinks.filter(cat => cat.visibility).map((cat, index) => (
                        <a href={cat.href} key={index}>
                            <div
                                className={`${expandAnimationClass} grow aspect-square group transition-transform relative overflow-hidden w-full h-full dark:bg-darkColor/50 bg-lightColor/50 rounded-3xl flex flex-col items-center justify-center p-3 hover:bg-opacity-20 hover:scale-95`}
                            >
                                <div
                                    className="absolute top-0 left-0 w-[50%] h-[50%] rounded-full blur-3xl opacity-80"
                                    style={{
                                        backgroundColor: cat.accentLight,
                                        transform: "translate(-50%, -50%)",
                                    }}
                                />
                                <div
                                    className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        backgroundColor: cat.accentLight,
                                        mixBlendMode: "multiply",
                                    }}
                                />
                                <div className="flex flex-col items-center justify-center text-center gap-2 text-sm z-10">
                                    <div
                                        className="text-xl p-2 rounded-full"
                                        style={{
                                            color: cat.accentLight,
                                            backgroundColor: cat.accentDark,
                                        }}
                                    >
                                        {cat.icon}
                                    </div>
                                    <p
                                        className="text-xs font-bold brightness-50 dark:brightness-100 leading-tight truncate-last-2"
                                        style={{ color: cat.accentDark }}
                                    >
                                        {cat.label}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                <div className=" flex self-end gap-2 px-3 py-2 bg-lightColor/50 dark:bg-darkColor/50 rounded-full">
                    <a href="/"
                    >
                        <HiHome className="text-xl" />
                    </a>
                    <ThemeSwitch />
                </div>
            </div>
        </ul>
    );
};
