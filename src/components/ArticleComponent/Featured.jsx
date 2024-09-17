import Image from "next/image"
import Link from "next/link"
import { HighlightCarousel } from "./HightlightCarousel"
import { FaFire } from "react-icons/fa6"
import { formatDateTime } from "@/helper/formatDateTime"
const baseURLImg = process.env.NEXT_PUBLIC_URL_STRAPI_IMG;

export const Featured = ({ data }) => {
    return (
        <>
            <div className="relative md:mx-0 mx-5">
                <div className="z-10 md:bg-white md:dark:bg-[#2525256b] md:bg-opacity-25 md:backdrop-blur-xl md:p-5 md:shadow md:rounded-3xl w-fit">
                    <h1 className="text-xl md:text-3xl font-semibold text-mainColor dark:text-baseColor">
                        Ganesha News & Article
                    </h1>
                    <h2 className="md:text-xl text-gray-900 dark:text-white">
                        Artikel Berkualitas untuk Pembaca Cerdas, Hanya di Ganesha News!
                    </h2>
                </div>
                <span className="bg-white dark:bg-transparent w-[30lvw] blur-2xl -z-10 h-16 absolute inset-0"></span>
            </div>
            <div className="bg-white bg-opacity-25 dark:bg-[#2525256b] md:bg-opacity-25 backdrop-blur-xl p-5 shadow rounded-3xl">
                <div className="flex md:flex-row flex-col gap-5">
                    <div className="md:w-[50%]">
                        <HighlightCarousel data={data} />
                    </div>
                    <div className="md:w-[50%] md:h-[50lvh] h-[50lvh] overflow-y-scroll noBar">
                        <div className="flex flex-col gap-5">
                            {data?.data?.filter(el => el.attributes.Trending === true).map((el, idx) => (
                                <Link
                                    href={'article/' + el.attributes.Slug}
                                    key={idx} className="flex gap-3 bg-white dark:bg-[#2d2d2da7] bg-opacity-50 p-3 shadow rounded-2xl group dark:hover:bg-opacity-80 dark:bg-opacity-50 hover:bg-gray-50 duration-150">
                                    <div className="relative h-[20lvh] w-[50%] overflow-hidden rounded-xl">
                                        <img
                                            className="w-full h-[21lvh] object-cover rounded-xl group-hover:scale-125 duration-150"
                                            width={500}
                                            height={500}
                                            src={`${baseURLImg}${el?.attributes?.Thumbnail?.data?.attributes?.url}`}
                                            alt={el.attributes.Title} />
                                        <div className="absolute inset-1 flex flex-col justify-between gap-2 group">
                                            <h1 className="px-2 py-1 h-fit text-sm bg-baseColor bg-opacity-40 backdrop-blur-lg text-white font-semibold rounded-lg w-fit">
                                                {el?.attributes?.category?.data?.attributes?.ArticleCategory}
                                            </h1>
                                            {el.attributes.Trending === true ? (
                                                <span className="flex gap-1 animate-pulse w-fit self-end items-center px-2 py-1 h-fit text-xs font-semibold bg-red-500 text-white rounded-lg ">
                                                    HOT
                                                    <FaFire className="text-sm" />
                                                </span>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="w-[50%] flex flex-col justify-between gap-1">
                                        <div className="space-y-1">
                                            <h1 className="font-bold text-xl text-gray-900 dark:text-gray-100 dark:group-hover:text-baseColor group-hover:text-mainColor duration-150 truncate-last">
                                                {el?.attributes?.Title}
                                            </h1>
                                            <h2 className="truncate text-gray-800 dark:text-gray-400">
                                                {el?.attributes?.Excerpt}
                                            </h2>
                                        </div>
                                        <span className="text-mainColor dark:text-baseColor">
                                            {formatDateTime(el?.attributes?.PublishTime)}
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
