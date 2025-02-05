"use client";

import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Fungsi untuk mengacak array & mengambil 10 item pertama
const getRandomActivities = (arr, count) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};
export const BannerActivity = ({ data }) => {
    const delay = 6000; 
    const [index, setIndex] = useState(0);
    const [randomActivities, setRandomActivities] = useState([]);

    useEffect(() => {
        setRandomActivities(getRandomActivities(data, 10)); // Ambil 10 item acak saat komponen pertama kali dimuat
    }, [data]);

    useEffect(() => {
        if (randomActivities.length > 1) {
            const timer = setTimeout(() => {
                setIndex((prevIndex) =>
                    prevIndex === randomActivities.length - 1 ? 0 : prevIndex + 1
                );
            }, delay);

            return () => clearTimeout(timer);
        }
    }, [index, randomActivities]);

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? randomActivities.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setIndex((prevIndex) =>
            prevIndex === randomActivities.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section className="pt-24">
            <section className="relative mx-5 md:mx-24 2xl:mx-80 mb-1 md:mb-2 overflow-hidden rounded-3xl">
                <div
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                    className="whitespace-nowrap transition-transform ease-in-out duration-700 relative"
                >
                    {randomActivities.map((el, idx) => (
                        <img
                            key={idx}
                            className="w-full h-[50lvh] object-cover rounded-3xl inline-block bg-mainColor"
                            src={el.imageUrl}
                            alt={el.title}
                        />
                    ))}
                </div>

                {/* Overlay Text */}
                <div className="gradient-blur h-[40%] md:h-[30%] bg-gradient-to-t from-[rgba(80,80,80,0.36)] to-transparent absolute bottom-0"></div>
                <div className="absolute bottom-5 px-5 text-white flex justify-between items-end w-full">
                    <div className="">
                        <h1 className="md:text-3xl text-xl font-medium">Our Activity</h1>
                        <p className="text-sm">
                            Update terbaru seputar aktivitas, program, dan proyek Ganesha Consulting.
                        </p>
                    </div>
                    {randomActivities.length > 1 && (
                        <div className="space-x-3 hidden md:block">
                            <button
                                onClick={prevSlide}
                                className="p-3 bg-gray-100 bg-opacity-20 dark:bg-darkColor dark:bg-opacity-20 hover:bg-opacity-100 hover:scale-105 hover:shadow-custom ease-in-out duration-300 rounded-full"
                            >
                                <IoIosArrowBack />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="p-3 bg-gray-100 bg-opacity-20 dark:bg-darkColor dark:bg-opacity-20 hover:bg-opacity-100 hover:scale-105 hover:shadow-custom ease-in-out duration-300 rounded-full"
                            >
                                <IoIosArrowForward />
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </section>
    );
};
