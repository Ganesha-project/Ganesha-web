"use client"
import { categorizedServices } from "@/DB/Database"
import { useHookMenu } from "@/hooks/useHookMenu";
import Link from "next/link";
import { useState, useMemo } from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { PiMagnifyingGlass } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";

export const ServicesMenu = ({ expandedId }) => {
    const expandAnimationClass = expandedId ? "scale-100 -translate-y-0 opacity-100 duration-500 ease-in-out" : "scale-[.90] -translate-y-12 opacity-0 duration-500 ease-in-out";
    const { mediaUrl, loadingHookMenu, errorHookMenu } = useHookMenu();
    const [searchQuery, setSearchQuery] = useState("");
    const [visible, setVisible] = useState(false);

    const filteredMain = useMemo(() => {
        return categorizedServices.main.filter(cat =>
            cat.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
            cat.subs.some(sub => sub.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    }, [searchQuery]);

    const filteredOthers = useMemo(() => {
        return [...categorizedServices.law, ...categorizedServices.creative, ...categorizedServices.management, ...categorizedServices.finance, ...categorizedServices.workspace]
            .filter(cat => cat.visibility)
            .filter(cat =>
                cat.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
                cat.subs.some(sub => sub.toLowerCase().includes(searchQuery.toLowerCase()))
            );
    }, [searchQuery]);

    const handleResetSearch = () => {
        setSearchQuery("");
    };

    const closeSearch = () => {
        setSearchQuery("");
        setVisible(false)
    }

    return (
        <>
            {/* Search Bar  & Labels*/}
            <section className={`${expandAnimationClass}`}>

                {/* Search Bar */}
                <div className={`${visible === true ? "opacity-100 scale-100 translate-y-4 " : "translate-y-[500%] opacity-0 scale-95"} duration-300 ease-in-out flex items-center justify-center gap-2 w-full`}>
                    <button onClick={closeSearch} className="h-[40px] w-[40px] aspect-square rounded-full dark:bg-darkColor/50 bg-lightColor/50 text-[14px] flex items-center justify-center shadow-mainShadow">
                        <RxCross2 className="opacity-50" />
                    </button>
                    <label className={`origin-bottom duration-300 ease-in-out z-[60] input !max-h-[40px] input-md dark:bg-darkColor/50 bg-lightColor/50 focus-within:dark:bg-darkColor/50 focus-within:bg-lightColor/50  focus-within:ring-opacity-0 focus-within:outline-none rounded-full flex items-center w-full gap-[6px] shadow-mainShadow`}>
                        <HiMiniMagnifyingGlass className="opacity-50" />
                        <input
                            type="text"
                            placeholder="Cari layanan..."
                            className="grow  placeholder:text-darkColor/50 dark:placeholder:text-lightColor/50"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {searchQuery !== "" && (
                            <button
                                type="button"
                                onClick={handleResetSearch}
                            >
                                <RxCross2 className="text-xl hover:text-red-600 text-darkColor/50 dark:text-lightColor/50 duration-200 mr-[-3px]" />
                            </button>
                        )}
                    </label>
                </div>

                {/* Labels */}
                <div className={`${visible === true ? "translate-y-[500%] opacity-0 scale-95" : "opacity-100 scale-100 -translate-y-8"} duration-300 ease-in-out grid grid-cols-8 gap-4`}>
                    <div className="col-span-3">
                        {visible === false ? (
                            <button onClick={() => setVisible(true)} className="flex items-center gap-[2px] py-[1px] px-2 rounded-full bg-neutral-300/30 dark:bg-neutral-500/20 text-[12px] font-bold text-darkColor/90 tracking-normal dark:text-lightColor/90">
                                Cari Layanan
                                <div className="">
                                    <PiMagnifyingGlass className="text-[12px]" />
                                </div>
                            </button>
                        ) : (
                            <button onClick={() => setVisible(false)} className="flex items-center gap-[2px] py-[1px] px-2 rounded-full bg-neutral-500/20 text-[10px] font-bold text-darkColor/90 tracking-normal dark:text-lightColor/90">
                                Tutup
                                <div className="">
                                    <RxCross2 className="text-[12px]" />
                                </div>
                            </button>
                        )}
                    </div>
                    <div className="col-span-3">
                        <p className={`${expandAnimationClass} duration-500 text-darkColor/70 tracking-normal dark:text-lightColor/70 text-xs font-bold block  rounded-full mb-3 w-fit`}>
                            Layanan Lainnya
                        </p>
                    </div>
                    <div className="col-span-2">
                        <p className={`${expandAnimationClass} duration-500 text-darkColor/70 tracking-normal dark:text-lightColor/70 text-xs font-bold block  rounded-full mb-3 w-fit`}>
                            Rekomendasi
                        </p>
                    </div>
                </div>
            </section>

            {/* Tiles */}
            <section className={`${visible === false ? "-translate-y-8" : "translate-y-1"} duration-300 ease-in-out grid gap-4 grid-cols-8`}>
                {filteredMain.length > 0 && (
                    <>
                        {/* Main content */}
                        <div className="col-span-3">
                            <div className="grid gap-4 grid-cols-2">
                                {filteredMain.map((cat, index) => (
                                    <Link
                                        href={cat.href}
                                        key={index}
                                        className={`${expandAnimationClass} parent aspect-square transition-transform relative overflow-hidden w-full dark:bg-darkColor/50 bg-lightColor/50 rounded-3xl shadow-mainShadow flex flex-col p-5 hover:bg-opacity-20 hover:scale-95`}
                                        style={{ transitionDelay: `${index * 10}ms` }}
                                    >

                                        {/* Glow element */}
                                        <div
                                            className="absolute top-0 left-0 w-[50%] h-[50%] rounded-full blur-3xl opacity-80"
                                            style={{
                                                backgroundColor: cat.accentDark,
                                                transform: 'translate(-50%, -50%)',
                                            }}
                                        />

                                        {/* Hover Element */}
                                        <div
                                            className="absolute inset-0 z-0 opacity-0 child transition-opacity duration-300"
                                            style={{
                                                backgroundColor: cat.accentLight,
                                                mixBlendMode: 'multiply',
                                            }}
                                        />

                                        {/* Icon */}
                                        <div className="grow">
                                            <div
                                                className="text-3xl p-2 rounded-full w-fit h-fit z-10 shadow-inner"
                                                style={{
                                                    color: cat.accentLight,
                                                    backgroundColor: cat.accentDark,
                                                }}
                                            >
                                                {cat.icon}
                                            </div>
                                        </div>

                                        {/* Text */}
                                        <div className="z-10 space-y-1">
                                            <h1
                                                className="text-[15px] font-bold brightness-50 dark:brightness-150 opacity-60 dark:opacity-70"
                                            >
                                                {cat.label}
                                            </h1>
                                            <p className="flex gap-1 flex-wrap">
                                                {cat.subs.map((sub, subIndex) => (
                                                    <span key={subIndex} className="text-darkColor/50 dark:text-lightColor/50 text-[9px] block px-2 py-1 bg-darkColor/10 dark:bg-lightColor/10 rounded-full">
                                                        {sub}
                                                    </span>
                                                ))}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </>
                )}


                {/* Subcategories */}
                {filteredOthers.length > 0 && (
                    <>
                        <div className="col-span-3">
                            <div className="grid grid-cols-2 gap-4">
                                {filteredOthers.filter(cat => cat.visibility).map((cat, index) => (
                                    <Link href={cat.href} key={index}>
                                        <div
                                            key={index}
                                            className={`${cat.visibility === true ? "block" : "hidden"} ${expandAnimationClass} grow parent transition-transform relative overflow-hidden w-full h-full dark:bg-darkColor/50 bg-lightColor/50 rounded-3xl shadow-mainShadow flex p-3 hover:bg-opacity-20 hover:scale-95`}
                                        >
                                            {/* Glow element */}
                                            <div
                                                className="absolute top-0 left-0 w-[50%] h-[50%] rounded-full blur-3xl opacity-80"
                                                style={{
                                                    backgroundColor: cat.accentLight,
                                                    transform: 'translate(-50%, -50%)',
                                                }}
                                            />

                                            {/* Hover Element */}
                                            <div
                                                className="absolute inset-0 z-0 opacity-0 child transition-opacity duration-300"
                                                style={{
                                                    backgroundColor: cat.accentLight,
                                                    mixBlendMode: 'multiply',
                                                }}
                                            />

                                            {/* Icon & Label */}
                                            <div className="flex flex-row items-center gap-2 text-sm w-fit h-fit z-10"                                        >
                                                <div
                                                    className="text-xl p-2 rounded-full shadow-inner w-fit h-fit z-10"
                                                    style={{
                                                        color: cat.accentLight,
                                                        backgroundColor: cat.accentDark 
                                                    }}
                                                >
                                                    {cat.icon}
                                                </div>
                                                <p
                                                    className="font-bold text-xs brightness-50 dark:brightness-100 leading-tight truncate-last-2 opacity-60 dark:opacity-70"
                                                >
                                                    {cat.label}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </>
                )}

                {/* Hook */}
                {loadingHookMenu && (
                    <div className="col-span-2">
                        <div
                            className="animate-pulse rounded-3xl w-full h-[50lvh] aspect-square dark:bg-darkColor/30 bg-lightColor/30 shadow-mainShadow"
                        ></div>
                    </div>
                )}

                {errorHookMenu && (
                    <div className="col-span-2 flex items-center justify-center">
                        <p className="text-sm font-semibold text-center text-red-500">
                            Terjadi kesalahan saat memuat data.
                        </p>
                    </div>
                )}

                {!loadingHookMenu && !errorHookMenu && searchQuery === "" && (
                    <div className={`${expandAnimationClass} hover:scale-95 col-span-2 w-fit h-fit rounded-3xl overflow-hidden`}>
                        <img
                            src={mediaUrl}
                            alt="Hook Menu Media"
                            className="w-full h-auto rounded-xl object-cover"
                        />
                    </div>
                )}

                {/* Not Found Label */}
                {filteredOthers.length === 0 && filteredMain.length === 0 && (
                    <div className="col-span-8 order-first">
                        <p className="opacity-60 text-sm font-semibold text-center">
                            Tidak ada layanan yang ditemukan.
                        </p>
                    </div>
                )}
            </section>
        </>
    )
}