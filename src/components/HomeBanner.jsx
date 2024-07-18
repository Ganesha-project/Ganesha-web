'use client'
import { ppl } from "@/app/Database";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

export const HomeBanner = () => {

    const delay = 4000;
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex(prevIndex =>
                prevIndex === ppl.length - 1 ? 0 : prevIndex + 1
            );
        }, delay);

        return () => clearTimeout(timer);
    }, [index]);

    return (
        <>
            <section className="hidden md:block min-h-screen">
                <div className="flex justify-between gap-10 px-24 2xl:px-80">
                    <div className="w-[60%] flex flex-col gap-20 relative">
                        <div className="flex flex-col justify-center h-full gap-3">
                            <div className="flex flex-col justify-between py-5  gap-5">
                                <h1 className="text-4xl font-[500] tracking-[1px] capitalize relative py-5">
                                    <span className="text-rose-400">
                                        no ribet!
                                    </span> <br />
                                    <span className="textsec darl:text-baseColor">
                                        transparan <br />
                                    </span>
                                    <span className="text-teal-500">
                                        Pasti cepat <br />
                                    </span>
                                    <span className="text-amber-500 dark:text-amber-200">
                                        Proses terpercaya <br />
                                    </span>
                                    <span className="w-24 h-1 rounded-full absolute bottom-0 bg-baseColor"></span>

                                </h1>
                                <div className="relative textsec darl:text-baseColor">
                                    <p className="">
                                        Apakah Anda membutuhkan bantuan dalam mengelola risiko hukum perusahaan Anda? Tim kami siap mendukung dengan memberikan analisis hukum yang mendetail dan strategi mitigasi risiko yang efektif. Kami berkomitmen untuk melindungi kepentingan hukum Anda dengan pendekatan yang proaktif dan terukur.
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
                                <buttospann className="py-2 w-fit flex items-center gap-1 bg-mainColor dark:bg-secondaryColor bg-opacity-80 px-4 rounded-full font-bold text-white hover:scale-95 duration-300 ease-in-out hover:bg-opacity-100">
                                    Cari Layanan
                                </buttospann>
                            </a>
                        </div>
                    </div>
                    <div className="w-[40%] mr-[-6rem] 2xl:mr-[-20rem] relative group overflow-hidden">
                        <div
                            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                            className="whitespace-nowrap transition-transform ease-in-out duration-700">
                            {ppl.map((el, idx) => (
                                <img
                                    key={idx}
                                    className="w-full h-screen object-cover inline-block shadow"
                                    src={el}
                                    alt="" />
                            ))}
                        </div>
                        <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-l from-transparent to-[#ffffff] dark:to-black w-[80%] group-hover:w-[100%] group-hover:backdrop-blur-xl duration-300 ease-in-out">
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
                        {ppl.map((el, idx) => (
                            <img
                                key={idx}
                                className="w-full h-screen object-cover inline-block shadow "
                                src={el}
                                alt="" />
                        ))}
                    </div>
                    <div className="absolute z-10 inset-0 flex flex-col justify-center h-full gap-3">
                        <div className="flex flex-col justify-between py-5 gap-5 mx-5">
                            <h1 className="text-xl font-[500] tracking-[1px] capitalize relative py-5 ">
                                <span className="text-rose-200">
                                    no ribet!
                                </span> <br />
                                <span className="text-white">
                                    transparan <br />
                                </span>
                                <span className="text-green-200">
                                    Pasti cepat <br />
                                </span>
                                <span className="text-white">
                                    Proses terpercaya <br />
                                </span>
                                <span className="w-24 h-1 rounded-full absolute bottom-0 bg-baseColor"></span>

                            </h1>
                            <div className="relative text-white">
                                <p className="truncate-last">
                                    Apakah Anda membutuhkan bantuan dalam mengelola risiko hukum perusahaan Anda? Tim kami siap mendukung dengan memberikan analisis hukum yang mendetail dan strategi mitigasi risiko yang efektif. Kami berkomitmen untuk melindungi kepentingan hukum Anda dengan pendekatan yang proaktif dan terukur.
                                </p>
                            </div>
                            <h1 className="text-xl font-[600] text-violet-100 capitalize">
                                percayakan pada ganesha consulting!
                            </h1>
                            <div className="flex gap-2">
                                <span className="h-[2.5rem] w-[2.5rem] justify-center flex items-center gap-1 bg-mainColor bg-opacity-80 rounded-full font-bold text-white hover:scale-95 duration-300 ease-in-out hover:bg-opacity-100">
                                    <FiSearch className="text-xl" />
                                </span>
                                <buttospann className="py-2 w-fit flex items-center gap-1 bg-mainColor bg-opacity-80 px-4 rounded-full font-bold text-white hover:scale-95 duration-300 ease-in-out hover:bg-opacity-100">
                                    Cari Layanan
                                </buttospann>
                            </div>
                        </div>
                        <span className="absolute bottom-[10px] left-[-100px] mt-auto w-[50lvh] blur-[200px] h-[50lvh] bg-white rounded-full -z-10"></span>
                    </div>
                    <span className="absolute bottom-0 bg-[#00000094] w-full h-full duration-300 ease-in-out"></span>
                </div>
            </section>
        </>
    )
}