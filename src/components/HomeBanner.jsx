'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { ClientsReview } from "../../public/Data/Clients";
import { governLogo } from "@/app/Database";

export const HomeBanner = () => {
    // Filter only items with a client photo
    const filteredClients = ClientsReview.filter(el => el.clientPhoto);
    const delay = 4000;
    const [index, setIndex] = useState(0);

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

    return (
        <>
            <section className="hidden md:block min-h-screen">
                <div className="flex justify-between gap-10 px-24 2xl:px-80">
                    <div className="w-[50%] flex flex-col gap-20 relative">
                        <div className="flex flex-col justify-center h-full gap-3">
                            <div className="flex flex-col justify-between py-5 gap-5">
                                <h1 className="text-4xl font-[500] tracking-[1px] capitalize relative py-5">
                                    <span className="text-rose-400">
                                        one
                                    </span> <br />
                                    <span className="textsec darl:text-baseColor">
                                        stop <br />
                                    </span>
                                    <span className="text-teal-500">
                                        solutions <br />
                                    </span>
                                    <span className="text-amber-500 dark:text-amber-200">
                                        for your buisness <br />
                                    </span>
                                    <span className="w-24 h-1 rounded-full absolute bottom-0 bg-baseColor"></span>
                                </h1>
                                <div className="relative textsec darl:text-baseColor">
                                    <p className="">
                                        Temukan solusi lengkap untuk semua kebutuhan bisnis Anda di Ganesha Consulting! Kami memberikan layanan all-in-one untuk memenuhi segala kebutuhan Anda!
                                    </p>
                                </div>
                            </div>
                            <h1 className="text-4xl font-[600] text-mainColor dark:text-secondaryColor capitalize">
                                percayakan pada ganesha consulting!
                            </h1>
                            <a className="flex gap-2" href="#search">
                                <span className="h-[2.5rem] w-[2.5rem] justify-center flex items-center gap-1 dark:bg-secondaryColor bg-mainColor bg-opacity-80 rounded-full font-bold text-white hover:scale-95 duration-300 ease-in-out hover:bg-opacity-100">
                                    <FiSearch className="text-xl" />
                                </span>
                                <button className="py-2 w-fit flex items-center gap-1 bg-mainColor dark:bg-secondaryColor bg-opacity-80 px-4 rounded-full font-bold text-white hover:scale-95 duration-300 ease-in-out hover:bg-opacity-100">
                                    Cari Layanan
                                </button>
                            </a>
                            <div className="space-y-1 mt-10">
                                <p className="text-sm text-mainColor dark:text-baseColor">
                                    Supported by:
                                </p>
                                <div className="flex gap-3 relative px-3 bg-white rounded-2xl w-fit">
                                    {governLogo.map((el, idx) => (
                                        <>
                                            <Image
                                                key={idx}
                                                width={100}
                                                height={100}
                                                className="w-[70px] h-[70px] object-fill z-20 drop-shadow-[0px_0px_20px_#ffffff] relative"
                                                src={el.logoUrl}
                                                alt={el.name} />
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%] mr-[-6rem] 2xl:mr-[-20rem] relative group overflow-hidden">
                        <div
                            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                            className="whitespace-nowrap transition-transform ease-in-out duration-700">
                            {filteredClients.map((el, idx) => (
                                <Image
                                    width={500}
                                    height={500}
                                    key={idx}
                                    className="w-full h-screen object-cover inline-block shadow"
                                    src={el.clientPhoto}
                                    alt="client ganesha consulting"
                                />
                            ))}
                        </div>
                        <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-l from-transparent to-[#ffffff] dark:to-black w-[80%] group-hover:w-[100%] group-hover:backdrop-blur-[3px] duration-300 ease-in-out">
                            <p className="dark:text-white text-gray-900 opacity-0 group-hover:opacity-100 ease-in-out duration-300 font-semibold text-2xl">
                                Our Clients
                            </p>
                        </span>
                    </div>
                </div>
            </section>

            {/* Mobile */}
            <section className="block md:hidden min-h-screen bg-white dark:bg-black">
                <div className="relative group overflow-hidden">
                    <div
                        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                        className="whitespace-nowrap transition-transform ease-in-out duration-700">
                        {filteredClients.map((el, idx) => (
                            <img
                                width={500}
                                height={500}
                                key={idx}
                                className="w-full h-screen object-cover inline-block shadow"
                                src={el.clientPhoto}
                                alt="client ganesha consulting"
                            />
                        ))}
                    </div>
                    <div className="absolute z-10 inset-0 flex flex-col justify-center h-full gap-3">
                        <div className="flex flex-col justify-between py-5 gap-5 mx-5">
                            <h1 className="text-xl font-[500] tracking-[1px] capitalize relative py-5">
                                <span className="text-rose-200">
                                    one
                                </span> <br />
                                <span className="text-white">
                                    stop <br />
                                </span>
                                <span className="text-green-200">
                                    solutions <br />
                                </span>
                                <span className="text-white">
                                    for your buisnes <br />
                                </span>
                                <span className="w-24 h-1 rounded-full absolute bottom-0 bg-baseColor"></span>
                            </h1>
                            <div className="relative text-white">
                                <p className="truncate-last">
                                    Temukan solusi lengkap untuk semua kebutuhan bisnis Anda di Ganesha Consulting! Kami memberikan layanan all-in-one untuk memenuhi segala kebutuhan Anda!
                                </p>
                            </div>
                            <h1 className="text-xl font-[600] text-violet-100 capitalize">
                                percayakan pada ganesha consulting!
                            </h1>
                            <a className="flex gap-2" href="#search">
                                <span className="h-[2.5rem] w-[2.5rem] justify-center flex items-center gap-1 bg-mainColor bg-opacity-80 rounded-full font-bold text-white hover:scale-95 duration-300 ease-in-out hover:bg-opacity-100">
                                    <FiSearch className="text-xl" />
                                </span>
                                <buttospann className="py-2 w-fit flex items-center gap-1 bg-mainColor bg-opacity-80 px-4 rounded-full font-bold text-white hover:scale-95 duration-300 ease-in-out hover:bg-opacity-100">
                                    Cari Layanan
                                </buttospann>
                            </a>
                            <div className="space-y-1 mt-10">
                                <p className="text-sm text-white">
                                    Supported by:
                                </p>
                                <div className="flex flex-wrap gap-3 relative">
                                    {governLogo.map((el, idx) => (
                                        <>
                                            <Image
                                                key={idx}
                                                width={100}
                                                height={100}
                                                className="w-[50px] h-[50px] object-fill z-20 drop-shadow-[0px_0px_20px_#ffffff] relative"
                                                src={el.logoUrl}
                                                alt={el.name} />
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <span className="absolute bottom-[10px] left-[-100px] mt-auto w-[50lvh] blur-[200px] h-[50lvh] bg-white rounded-full -z-10"></span>
                    </div>
                    <span className="absolute bottom-0 bg-[#00000094] w-full h-full duration-300 ease-in-out"></span>
                </div>
            </section>
        </>
    );
};