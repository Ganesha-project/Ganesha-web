import Image from "next/image"
import Link from "next/link"
import { FaFire } from "react-icons/fa6"

export const ArticleCard = ({ data, categories, }) => {
    return (
        <>
            <section className="space-y-5">
                <div className="flex items-center justify-between">
                    <h1 className="text-mainColor text-2xl font-semibold">
                        Latest Update
                    </h1>
                    <a href=""
                        className="px-3 py-1 bg-baseColor text-white rounded-full font-semibold duration-300 ease-in-out hover:bg-mainColor"
                    >
                        See More
                    </a>
                </div>

                <div className="md:grid md:grid-cols-3 flex flex-col gap-5">
                    {data?.slice(0, 6).map((el, idx) => (
                        <Link
                            href="/article/1"
                            key={idx} className="md:h-[45lvh] group bg-white rounded-2xl space-y-2 p-3 shadow-mainShadow flex flex-col justify-between duration-300 hover:bg-baseColor hover:bg-opacity-90">
                            <div className="space-y-1 flex md:flex-col flex-row gap-2 w-full h-full">
                                <div className="relative overflow-hidden rounded-xl md:w-full w-[50%]">
                                    <Image
                                        className="w-full h-full md:h-[25lvh] object-cover rounded-xl group-hover:scale-125 duration-150"
                                        width={500}
                                        height={500}
                                        src={el.thumbnailImg}
                                        alt={el.title} />
                                    <div className="absolute inset-1 flex flex-col justify-between gap-2 group">
                                        <h1 className="px-2 py-1 h-fit text-sm bg-baseColor bg-opacity-40 backdrop-blur-lg text-white font-semibold rounded-lg w-fit">
                                            {el.categories}
                                        </h1>
                                        {el.hot === true ? (
                                            <span className="flex gap-1 animate-pulse w-fit self-end items-center px-2 py-1 h-fit text-xs font-semibold bg-red-500 text-white rounded-lg bg-opacity-40 backdrop-blur-lg">
                                                HOT
                                                <FaFire className="text-sm" />
                                            </span>
                                        ) : null}
                                    </div>
                                </div>

                                <div className="space-y-1 md:w-full w-[50%] flex flex-col justify-between h-auto">
                                    <div>
                                        <h1 className="font-bold text-xl group-hover:text-mainColor duration-150 truncate-last">
                                            {el.title}
                                        </h1>
                                        <h2 className="truncate">
                                            {el.exerp}
                                        </h2>
                                    </div>
                                    <span className="block md:hidden text-mainColor mt-auto">
                                        {el.date}
                                    </span>
                                </div>
                            </div>

                            <span className="text-mainColor mt-auto md:block hidden">
                                {el.date}
                            </span>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    )
}