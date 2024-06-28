import Image from "next/image"
import Link from "next/link"
import { DataArticles, DataHighlight } from "@/app/Database"
import { HighlightCarousel } from "./HightlightCarousel"
import { FaFire } from "react-icons/fa6"

export const Featured = () => {
    return (
        <>
            <div className="bg-white bg-opacity-80 backdrop-blur-xl p-5 shadow rounded-3xl">
                <div className="flex md:flex-row flex-col gap-5">
                    <div className="md:w-[50%]">
                        <HighlightCarousel data={DataHighlight} />
                    </div>
                    <div className="md:w-[50%]">
                        <div className="flex flex-col gap-5">
                            {DataArticles.slice(0, 2).map((el, idx) => (
                                <Link
                                    href=""
                                    key={idx} className="flex gap-3 bg-white p-3 shadow rounded-2xl  group hover:bg-gray-50 duration-150">
                                    <div className="relative h-[21lvh] w-[50%] overflow-hidden rounded-xl">
                                        <Image
                                            className="w-full h-[21lvh] object-cover rounded-xl group-hover:scale-125 duration-150"
                                            width={500}
                                            height={500}
                                            src={el.thumbnailImg}
                                            alt={el.title} />
                                        <div className="absolute inset-1 flex flex-col justify-between gap-2 group">
                                            <h1 className="px-2 py-1 h-fit text-sm bg-baseColor bg-opacity-40 backdrop-blur-lg text-white font-semibold rounded-lg w-fit">
                                                {el.categories}
                                            </h1>
                                            <span className="flex gap-1 animate-pulse w-fit self-end items-center px-2 py-1 h-fit text-xs font-semibold bg-red-500 text-white rounded-lg bg-opacity-40 backdrop-blur-lg">
                                                HOT
                                                <FaFire className="text-sm" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="w-[50%] flex flex-col justify-between gap-1">
                                        <div className="space-y-1">
                                            <h1 className="font-bold text-xl group-hover:text-mainColor duration-150 truncate-last">
                                                {el.title}
                                            </h1>
                                            <h2 className="truncate">
                                                {el.exerp}
                                            </h2>
                                        </div>
                                        <span className="text-mainColor">
                                            {el.date}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}