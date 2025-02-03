"use client"

import Image from "next/image";
import Link from "next/link";
import { DataBanner } from "@/app/Database";
import { usePathname } from "next/navigation";
import { WALINK } from "../Links/Links";

export const BannerService = () => {
    const pathname = usePathname();

    const bannerData = DataBanner.find(el => pathname.includes(el.href));

    if (!bannerData) return null;

    const { bannerImage, mainText, desc, accent, accent2, textAccent, visibility } = bannerData.data;

    return (
        <section className="relative overflow-hidden">
            <div className="flex justify-center">
                <img
                    src={bannerImage}
                    alt={mainText}
                    width={500}
                    height={1000}
                    className="absolute object-cover z-20 md:bottom-0 md:right-0 w-[60vw] md:w-[50vw] 2xl:w-[40lvw] h-auto md:top-auto top-20"
                />
            </div>
            <div className="absolute w-full">
                <div className={`absolute ${accent} md:right-[-15rem] md:top-[-20rem] top-0 rounded-full w-[80lvw] h-[80lvw] blur-[100px] md:blur-[200px]`} />
                <div className={`absolute ${accent2} md:right-[-15rem] md:top-[-20rem] top-0 rounded-full w-[40lvw] h-[40lvw] blur-[100px] md:blur-[200px]`} />
            </div>

            <div className="min-h-screen mx-5 z-40 flex flex-col gap-3 justify-end md:justify-center md:mx-24 2xl:mx-80 pb-20 md:w-[40%]">
                <h1 className={`${textAccent} text-2xl md:text-5xl font-semibold z-40`}>
                    {mainText}
                </h1>
                <h2 className="z-40">
                    {desc}
                </h2>
                <Link
                    href={WALINK}
                    className={`${accent} ${visibility} dark:text-white font-bold z-40 w-fit px-4 py-1 text-gray-800 rounded-full duration-300 ease-in-out hover:brightness-75`}>
                    Contact
                </Link>
            </div>
        </section>
    );
}
