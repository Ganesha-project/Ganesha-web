import { DataArticles } from "@/app/Database"
import Image from "next/image"
import { FaFire } from "react-icons/fa6"

export const ArticleCard = () => {
    return (
        <>
            <section className="min-h-screen md:mx-24 mx-5">
                <div className="grid grid-cols-3 gap-5">
                    {DataArticles.map((el, idx) => (
                        <div key={idx} className="h-[45lvh] group rounded-2xl space-y-2 p-3 shadow flex flex-col justify-between">
                            <div className="">
                                <div className="relative overflow-hidden rounded-2xl">
                                    <Image
                                        className="w-full h-[25lvh] object-cover rounded-xl group-hover:scale-125 duration-150"
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

                                <div className="space-y-1">
                                    <h1 className="font-bold text-xl group-hover:text-mainColor duration-150 truncate-last">
                                        {el.title}
                                    </h1>
                                    <h2 className="truncate">
                                        {el.exerp}
                                    </h2>
                                </div>
                            </div>

                            <span className="text-mainColor mt-auto">
                                {el.date}
                            </span>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}