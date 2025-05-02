'use client'
import { categorizedServices } from "@/DB/Database"
import { useState, useMemo, useEffect } from "react";
import { HiMiniMagnifyingGlass, HiMiniSquares2X2, HiMiniSquare2Stack, HiMiniArrowSmallRight, HiMiniArrowSmallLeft, HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { PiMagnifyingGlass } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { Title } from "./Title";

export const AllServicesBtn = () => {
    const expandAnimationClass = "scale-100 -translate-y-0 opacity-100 duration-500 ease-in-out";
    const [searchQuery, setSearchQuery] = useState("");
    const [visible, setVisible] = useState(false);
    const [viewMode, setViewMode] = useState('carousel');

    const [carouselRef, setCarouselRef] = useState(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const filteredMain = useMemo(() => {
        return [...categorizedServices.main, ...categorizedServices.law, ...categorizedServices.creative, ...categorizedServices.management, ...categorizedServices.finance, ...categorizedServices.workspace]
            .filter(cat => cat.visibility)
            .filter(cat =>
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
        setVisible(false);
    }

    const updateCarouselPosition = () => {
        if (carouselRef) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef;
            setIsAtStart(scrollLeft <= 0);
            setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 5);
        }
    };

    useEffect(() => {
        const ref = carouselRef;
        if (ref) {
            ref.addEventListener('scroll', updateCarouselPosition);
            updateCarouselPosition();
        }
        return () => {
            if (ref) {
                ref.removeEventListener('scroll', updateCarouselPosition);
            }
        };
    }, [carouselRef]);

    return (
        <section className="py-12">
            {/* Search Bar & Labels */}
            <section className={`${expandAnimationClass} md:mx-24 2xl:mx-80 mx-5`}>
                <div className={`${visible ? "opacity-100 scale-100 translate-y-10" : "translate-y-[500%] opacity-0 scale-95"} duration-300 ease-in-out flex items-center justify-center gap-2 w-full`}>
                    <label className="origin-bottom duration-300 ease-in-out input !max-h-[40px] input-md dark:bg-darkColor bg-lightColor focus-within:dark:bg-darkColor/50 focus-within:bg-lightColor/50 focus-within:ring-opacity-0 focus-within:outline-none rounded-full flex items-center w-full gap-2 shadow-mainShadow">
                        <HiMiniMagnifyingGlass className="opacity-50" />
                        <input
                            type="text"
                            placeholder="Cari layanan..."
                            className="grow placeholder:text-darkColor/50 dark:placeholder:text-lightColor/50"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {searchQuery !== "" && (
                            <button type="button" onClick={handleResetSearch}>
                                <RxCross2 className="text-xl hover:text-red-600 text-darkColor/50 dark:text-lightColor/50 duration-200" />
                            </button>
                        )}
                    </label>
                    <button onClick={closeSearch} className="h-[40px] w-[40px] rounded-full dark:bg-darkColor bg-lightColor flex items-center justify-center shadow-mainShadow">
                        <RxCross2 className="opacity-50" />
                    </button>
                </div>

                <div className={`${visible ? "translate-y-[500%] opacity-0 scale-95" : "opacity-100 scale-100 -translate-y-8"} duration-300 ease-in-out gap-4 mb-5 flex flex-wrap items-center justify-between w-full`}>
                    <div className={expandAnimationClass}>
                        <Title text={'Layanan & Produk Kami'} />
                    </div>
                    <div className="flex items-center gap-2 ">
                        {visible === false && (
                            <div className="p-1 bg-lightColor/80 dark:bg-darkColor/80 rounded-full shadow-mainShadow flex items-center gap-2">
                                <button
                                    onClick={() => setViewMode('carousel')}
                                    className={`cursor-pointer gap-2 py-1 px-2 rounded-full ${viewMode === 'carousel' ? 'bg-mainColor text-white' : 'bg-lightColor dark:bg-darkColor text-darkColor/90 dark:text-lightColor/90'} font-medium tracking-normal`}
                                >
                                    <HiMiniSquare2Stack />
                                </button>
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`cursor-pointer gap-2 py-1 px-2 rounded-full ${viewMode === 'grid' ? 'bg-mainColor text-white' : 'bg-lightColor dark:bg-darkColor text-darkColor/90 dark:text-lightColor/90'} font-medium tracking-normal`}
                                >
                                    <HiMiniSquares2X2 />
                                </button>
                            </div>
                        )}
                        <button onClick={() => setVisible(!visible)} className="cursor-pointer flex items-center gap-2 py-1 px-3 rounded-full bg-lightColor/80 dark:bg-darkColor/80 font-medium text-darkColor/90 dark:text-lightColor/90">
                            {visible ? 'Tutup' : 'Cari Layanan'}
                            {visible ? <RxCross2 /> : <PiMagnifyingGlass />}
                        </button>
                    </div>
                </div>
            </section>

            {/* Services Content */}
            <section className={`${visible === false ? "-translate-y-16" : "translate-y-1"} duration-300 ease-in-out ${viewMode === "carousel" ? "max-h-[55lvh]" : "max-h-[110lvh] 2xl:max-h-[90lvh]"}`}>
                {filteredMain.length > 0 && (
                    <>
                        {/* Carousel View */}
                        <div className="relative w-full">
                            {/* Prev Button */}
                            {viewMode === 'carousel' && (
                                <>
                                    <button
                                        onClick={() => carouselRef?.scrollBy({ left: -300, behavior: "smooth" })}
                                        className={`absolute left-24 top-1/2 transform -translate-y-1/2 z-10 text-xl p-2 rounded-full shadow-lg bg-lightColor/50 backdrop-blur-md dark:bg-darkColor/50 hover:text-white hover:bg-mainColor/70 active:scale-95 transition-opacity duration-300 ${isAtStart ? 'opacity-10 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
                                    >
                                        <HiChevronLeft />
                                    </button>
                                    <button
                                        onClick={() => carouselRef?.scrollBy({ left: 300, behavior: "smooth" })}
                                        className={`absolute right-24 top-1/2 transform -translate-y-1/2 z-10 text-xl p-2 rounded-full shadow-lg bg-lightColor/50 backdrop-blur-md dark:bg-darkColor/50 hover:text-white hover:bg-mainColor/70 active:scale-95 transition-opacity duration-300 ${isAtEnd ? 'opacity-10 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
                                    >
                                        <HiChevronRight />
                                    </button>
                                </>
                            )}

                            <div
                                ref={ref => setCarouselRef(ref)}
                                className={`${viewMode === "carousel" ? "translate-x-0 opacity-100 scale-100" : "translate-x-full opacity-0 scale-50"} py-10 duration-500 ease-in-out carousel2 w-full gap-3 overflow-x-auto scroll-smooth`}
                                onScroll={updateCarouselPosition}
                            >
                                {filteredMain.map((cat, index) => (
                                    <a
                                        href={cat.href}
                                        key={index}
                                        className={`${expandAnimationClass} ${index === 0 && "ml-5 md:ml-24 2xl:ml-80"} ${index === filteredMain.length - 1 && "mr-5 md:mr-24 2xl:mr-80"} carousel-item max-w-[15lvw] 2xl:max-w-[12lvw] h-[40lvh] group transition-transform relative overflow-hidden w-full dark:bg-darkColor bg-lightColor rounded-3xl shadow-mainShadow flex flex-col p-5 hover:bg-opacity-20 hover:scale-95`}
                                        style={{ transitionDelay: `${index * 10}ms` }}
                                    >
                                        <div className="absolute top-0 left-0 w-[50%] h-[50%] rounded-full blur-3xl opacity-80" style={{ backgroundColor: cat.accentDark, transform: 'translate(-50%, -50%)' }} />
                                        <div className="absolute inset-0 z-0 group-hover:opacity-20 dark:group-hover:opacity-100 opacity-10 dark:opacity-50 transition-opacity duration-300" style={{ backgroundColor: cat.accentDark, mixBlendMode: 'multiply' }} />
                                        <div className="h-[65%] 2xl:h-[75%]">
                                            <div className="text-3xl p-2 rounded-full w-fit h-fit z-10 shadow-inner" style={{ color: cat.accentLight, backgroundColor: cat.accentDark }}>{cat.icon}</div>
                                        </div>
                                        <div className="z-10 space-y-1">
                                            <h1 className="text-[18px] font-bold brightness-50 dark:brightness-150" style={{ color: cat.accentDark }}>{cat.label}</h1>
                                            <p className="flex gap-1 flex-wrap">
                                                {cat.subs.map((sub, subIndex) => (
                                                    <span key={subIndex} className="text-darkColor/50 dark:text-lightColor/50 text-[9px] block px-2 py-1 bg-darkColor/10 dark:bg-lightColor/10 rounded-full">{sub}</span>
                                                ))}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Grid View */}
                        <div className={`${viewMode === "grid" ? "-translate-y-[51%] 2xl:-translate-y-[61%] opacity-100 scale-100" : "translate-y-full opacity-0 scale-50"} duration-500 ease-in-out grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:mx-24 2xl:mx-80 mx-5`}>
                            {filteredMain.map((cat, index) => (
                                <a
                                    href={cat.href}
                                    key={index}
                                    className={`${expandAnimationClass} group aspect-square transition-transform relative overflow-hidden w-full dark:bg-darkColor bg-lightColor rounded-3xl shadow-mainShadow flex flex-col p-5 hover:bg-opacity-20 hover:scale-95`}
                                    style={{ transitionDelay: `${index * 10}ms` }}
                                >
                                    <div className="absolute top-0 left-0 w-[50%] h-[50%] rounded-full blur-3xl opacity-80" style={{ backgroundColor: cat.accentDark, transform: 'translate(-50%, -50%)' }} />
                                    <div className="absolute inset-0 z-0 group-hover:opacity-20 dark:group-hover:opacity-50 opacity-10 dark:opacity-30 transition-opacity duration-300" style={{ backgroundColor: cat.accentLight, mixBlendMode: 'multiply' }} />
                                    <div className="h-[60%]">
                                        <div className="text-3xl p-2 rounded-full w-fit h-fit z-10 shadow-inner" style={{ color: cat.accentLight, backgroundColor: cat.accentDark }}>{cat.icon}</div>
                                    </div>
                                    <div className="z-10 space-y-1">
                                        <h1 className="text-[15px] font-bold brightness-50 dark:brightness-150" style={{ color: cat.accentDark }}>{cat.label}</h1>
                                        <p className="flex gap-1 flex-wrap">
                                            {cat.subs.map((sub, subIndex) => (
                                                <span key={subIndex} className="text-darkColor/50 dark:text-lightColor/50 text-[9px] block px-2 py-1 bg-darkColor/10 dark:bg-lightColor/10 rounded-full">{sub}</span>
                                            ))}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </>
                )}
            </section>

            {/* Not Found Label */}
            <div>
                {filteredOthers.length === 0 && filteredMain.length === 0 && (
                    <div className="col-span-8 order-first">
                        <p className="opacity-60 text-sm font-semibold text-center">
                            Tidak ada layanan yang ditemukan.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};
