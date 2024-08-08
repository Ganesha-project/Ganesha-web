"use client"

import Image from "next/image";
import Link from "next/link";
import { DataBanner } from "@/app/Database";
import { usePathname } from "next/navigation";

export const BannerService = () => {
    const pathname = usePathname();

    const bannerData = DataBanner.find(el => pathname.includes(el.href));

    if (!bannerData) return null;

    const { bannerImage, mainText, desc, accent, accent2, textAccent } = bannerData.data;

    return (
        <section className="relative overflow-hidden">
            <div className="flex justify-center">
                <Image
                    src={bannerImage}
                    alt={mainText}
                    width={500}
                    height={500}
                    className="absolute z-20 md:bottom-0 md:right-0 w-[60vw] md:w-[50vw] h-auto top-20"
                />
            </div>
            <div className="absolute w-full">
                <div className={`absolute ${accent} md:right-[-15rem] md:top-[-20rem] rounded-full w-[80lvw] h-[80lvw] blur-[200px]`} />
                <div className={`absolute ${accent2} md:right-[-15rem] md:top-[-20rem] rounded-full w-[40lvw] h-[40lvw] blur-[200px]`} />
            </div>

            <div className="min-h-screen mx-5 z-40 flex flex-col gap-3 justify-end md:justify-center md:mx-10 pb-20 md:w-[40%]">
                <h1 className={`${textAccent} text-2xl md:text-5xl font-semibold z-40`}>
                    {mainText}
                </h1>
                <h2 className="z-40">
                    {desc}
                </h2>
                <Link
                    href={bannerData.href}
                    className={`${accent} dark:text-white font-bold z-40 w-fit px-4 py-1 text-gray-800 rounded-full duration-300 ease-in-out hover:brightness-75`}>
                    Check
                </Link>
            </div>
        </section>
    );
}
