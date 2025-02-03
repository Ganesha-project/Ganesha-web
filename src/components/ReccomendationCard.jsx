"use client"
import { useEffect, useState, useRef } from "react";
import { Title } from "./Title";
import { FaPlus } from "react-icons/fa6";
import { ReccomendationData } from "@/app/Database";
import Link from "next/link";
import Image from "next/image";

export const ReccomendationCard = () => {
    const [activeDot, setActiveDot] = useState(0);
    const carouselRef = useRef(null);
    const totalDots = ReccomendationData.length;

    useEffect(() => {
        const handleScroll = () => {
            const element = carouselRef.current;
            if (element) {
                const scrollLeft = element.scrollLeft;
                const maxScrollLeft = element.scrollWidth - element.clientWidth;
                const progress = (scrollLeft / maxScrollLeft) * (totalDots - 1);
                setActiveDot(Math.round(progress));
            }
        };

        const element = carouselRef.current;
        if (element) {
            element.addEventListener('scroll', handleScroll);
            return () => element.removeEventListener('scroll', handleScroll);
        }
    }, [totalDots]);

    // Function to scroll to the specific item based on the dot clicked
    const handleDotClick = (index) => {
        const element = carouselRef.current;
        if (element) {
            const scrollToPosition = (element.scrollWidth / totalDots) * index;
            element.scrollTo({
                left: scrollToPosition,
                behavior: "smooth",
            });
            setActiveDot(index);
        }
    };

    return (
        <>
            <section className="bg-baseColor bg-opacity-10 dark:bg-opacity-15 py-10 md:py-24 relative">
                <div className="md:mx-24 mx-5 2xl:mx-80">
                    <Title text1="Jelajahi" text="Layanan Lain Kami" />
                </div>
                <div
                    ref={carouselRef}
                    className="carousel2 w-full h-full mt-10 gap-5 overflow-x-scroll flex"
                >
                    {ReccomendationData.map((el, idx) => (
                        <Link
                            key={idx}
                            href={el.href}
                            className={`group relative min-w-[75vw] md:min-w-[25vw] h-[65vh] ${idx === 0 ? 'ml-5 md:ml-24 2xl:ml-80' : ''} ${idx === ReccomendationData.length - 1 ? 'mr-5 md:mr-24 2xl:mr-80' : ''}`}
                        >
                            <Image
                                width={500}
                                height={500}
                                className="w-full h-full object-cover rounded-3xl bg-baseColor"
                                src={el.image}
                                alt={el.label}
                            />
                            <div className="gradient-blur2 h-[50%] duration-300 ease-in-out bg-gradient-to-t from-stone-700 to-transparent"></div>
                            <div className="absolute bottom-0">
                                <div className="m-5">
                                    <h1 className="text-white font-bold text-2xl">
                                        {el.label}
                                    </h1>
                                    <h2 className="text-sm text-slate-100 opacity-60 truncate-last-2">
                                        {el.desc}
                                    </h2>
                                </div>
                            </div>
                            <div className="absolute inset-0 group-hover:backdrop-blur-lg group-hover:bg-black group-hover:bg-opacity-15 rounded-3xl duration-300 ease-in-out">
                                <div
                                    className="group-hover:scale-100 space-x-2 scale-0 duration-300 w-full h-full flex justify-center items-center text-gray-200">
                                    <button
                                        className="flex font-semibold items-center pl-2 py-1 bg-white dark:bg-darkColor dark:bg-opacity-20 bg-opacity-20 rounded-full">
                                        Jelajahi <span className="mx-1 p-1 bg-white dark:bg-darkColor dark:text-white rounded-full text-[13px] text-gray-800"><FaPlus /></span>
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                {/* Scroll Progress Dots */}
                <div className="flex justify-center items-center mt-4">
                    <div className="flex justify-center items-center bg-white dark:bg-darkColor px-2 py-2 rounded-full space-x-2">
                        {Array.from({ length: totalDots }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`w-2 h-2 rounded-full ${index === activeDot ? 'bg-mainColor dark:bg-baseColor' : 'bg-stone-300 dark:bg-stone-600'}`}
                            ></button>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};