"use client"

import { dataAdsBanner } from "@/app/Database";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const AdsBanner = () => {
    const data = dataAdsBanner
    const delay = 6000;
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (data.length > 1) {
            const timer = setTimeout(() => {
                setIndex(prevIndex =>
                    prevIndex === data.length - 1 ? 0 : prevIndex + 1
                ); 
            }, delay);

            return () => clearTimeout(timer);
        }
    }, [index]);

    const prevSlide = () => {
        setIndex(prevIndex => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setIndex(prevIndex => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
            <section className="md:mx-24 2xl:mx-80 mx-5 py-20 relative group overflow-hidden">
                <div
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                    className="whitespace-nowrap transition-transform ease-in-out duration-700 relative"
                >
                    {data.map((el, idx) => (
                        <Link key={idx} href={el.href}>
                            <img
                                key={idx}
                                className="w-full h-full object-cover rounded-3xl hidden md:inline-block bg-mainColor"
                                src={el.bannerImg}
                                alt={el.alt}
                            />
                            <img
                                className="md:hidden w-full h-full object-cover rounded-3xl inline-block bg-mainColor"
                                src={el.bannerMobile}
                                alt={el.alt}
                            />
                        </Link>
                    ))}
                </div>
                {data.length >= 2 && (
                    <>
                        <button
                            onClick={prevSlide}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 p-3 bg-neutral-100/20 dark:bg-darkColor/20 group-hover:bg-neutral-100/20 dark:group-hover:bg-dark-color hover:scale-105 hover:shadow-custom ease-in-out duration-300 rounded-full"
                        >
                            <IoIosArrowBack />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-3 bg-neutral-100/20 dark:bg-darkColor/20 group-hover:bg-neutral-100/20 dark:group-hover:bg-dark-color hover:scale-105 hover:shadow-custom ease-in-out duration-300 rounded-full"
                        >
                            <IoIosArrowForward />
                        </button>
                    </>
                )}
            </section>
        </>
    );
};