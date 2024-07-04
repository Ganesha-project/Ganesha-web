'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

export const HomeBanner = () => {
    const ppl = [
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1552642986-ccb41e7059e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
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
            <section className="hidden md:block min-h-screen bg-white dark:bg-black">
                <div className="flex justify-between gap-10 px-24 2xl:px-80">
                    <div className="w-[60%] flex flex-col gap-20">
                        <div className="flex flex-col justify-center h-full gap-3">
                            <div className="flex flex-col justify-between py-5  gap-5">
                                <h1 className="text-4xl font-[500] tracking-[1px] capitalize relative py-5">
                                    <span className="text-rose-400">
                                        no ribet!
                                    </span> <br />
                                    <span className="text-secondaryColor">
                                        transparan <br />
                                    </span>
                                    <span className="text-green-600">
                                        Pasti cepat <br />
                                    </span>
                                    <span className="text-mainColor">
                                        Proses terpercaya <br />
                                    </span>
                                    <span className="w-24 h-1 rounded-full absolute bottom-0 bg-baseColor"></span>

                                </h1>
                                <div className="relative text-secondaryColor">
                                    <p className="">
                                        Apakah Anda membutuhkan bantuan dalam mengelola risiko hukum perusahaan Anda? Tim kami siap mendukung dengan memberikan analisis hukum yang mendetail dan strategi mitigasi risiko yang efektif. Kami berkomitmen untuk melindungi kepentingan hukum Anda dengan pendekatan yang proaktif dan terukur.
                                    </p>
                                </div>
                            </div>
                            <h1 className="text-4xl font-[600] text-mainColor capitalize">
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
                            <span className="absolute bottom-[-100px] left-[-100px] mt-auto w-[50lvh] blur-[200px] h-[50lvh] bg-amber-500 rounded-full -z-10"></span>
                        </div>
                    </div>
                    <div className="w-[40%] mr-[-6rem] 2xl:mr-[-20rem] relative group overflow-hidden">
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
                        <span className="absolute inset-0 bg-gradient-to-l  from-transparent to-[#ffffff] dark:to-black w-[80%] hover:w-[100%] group-hover:backdrop-blur-xl duration-300 ease-in-out"></span>
                    </div>
                </div>
            </section>

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