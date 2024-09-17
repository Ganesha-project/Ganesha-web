import Image from "next/image"
import Link from "next/link"
import { FaFire } from "react-icons/fa6"
import { Headtag } from "./HeadTag"
import { formatDateTime } from "@/helper/formatDateTime"
import { slugify } from "@/helper/slugify"
const baseURLImg = process.env.NEXT_PUBLIC_URL_STRAPI_IMG;

export const ArticleCardCategory = ({ data, moms, category }) => {
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    return (
        <>
            <section className="space-y-5">
                {moms}
                <div className="md:grid md:grid-cols-3 flex flex-col gap-5">
                    {data?.data?.slice(0, 6).map((el, idx) => (
                        <>
                            <Link
                                href={'/article/' + slugify(category?.ArticleCategory) + "/" + el.attributes.Slug}
                                key={idx} className="md:min-h-[45lvh] group bg-white dark:bg-baseColor dark:bg-opacity-20 rounded-2xl space-y-2 p-3 shadow-mainShadow flex flex-col justify-between duration-300 hover:bg-baseColor hover:bg-opacity-90">
                                <div className="space-y-1 flex md:flex-col flex-row gap-2 w-full h-[20lvh] md:h-full">
                                    <div className="relative overflow-hidden rounded-xl md:w-full w-[50%]">
                                        <img
                                            className="w-full h-[20lvh] md:h-[25lvh] object-cover rounded-xl group-hover:scale-125 duration-150"
                                            width={500}
                                            height={500}
                                            src={`${baseURLImg}${el?.attributes?.Thumbnail?.data?.attributes?.url}`}
                                            alt={el?.attributes?.Title} />
                                        <div className="absolute inset-1 flex flex-col justify-between gap-2 group">
                                            {/* <h1 className="px-2 py-1 h-fit text-sm bg-baseColor bg-opacity-40 backdrop-blur-lg text-white font-semibold rounded-lg w-fit">
                                                {category?.ArticleCategory}
                                            </h1> */}
                                            {el.attributes.Trending === true ? (
                                                <span className="flex gap-1 animate-pulse w-fit self-end items-center px-2 py-1 h-fit text-xs font-semibold bg-red-500 text-white rounded-lg ">
                                                    HOT
                                                    <FaFire className="text-sm" />
                                                </span>
                                            ) : null}
                                        </div>
                                    </div>

                                    <div className="space-y-1 md:w-full w-[50%] flex flex-col md:justify-between h-auto dark:text-white">
                                        <div>
                                            <h1 className="font-bold md:text-xl text-gray-900 dark:text-gray-100 group-hover:text-mainColor dark:group-hover:text-baseColor duration-150 truncate-last">
                                                {el?.attributes?.Title}
                                            </h1>
                                            <h2 className="truncate text-sm md:text-base dark:text-gray-200 text-gray-700">
                                                {el?.attributes?.Excerpt}
                                            </h2>
                                        </div>
                                        <span className="block md:hidden text-mainColor mt-auto dark:text-baseColor">
                                            {formatDateTime(el?.attributes?.PublishTime)}
                                        </span>
                                    </div>
                                </div>

                                <span className="text-mainColor mt-auto md:block hidden  dark:text-baseColor">
                                    {formatDateTime(el?.attributes?.PublishTime)}
                                </span>
                            </Link>
                        </>
                    ))}
                </div>
            </section>
        </>
    )
}