import Image from "next/image"
import Link from "next/link"
import { FaFire } from "react-icons/fa6"
import { Headtag } from "./HeadTag"
import { formatDateTime } from "@/helper/formatDateTime"
import { slugify } from "@/helper/slugify"
import { Pagination } from "./Pagination"
import { SkeletonCard } from "../Skeleton/SkeletonCard"
const baseURLImg = process.env.NEXT_PUBLIC_URL_STRAPI_IMG;

export const ArticleCard = ({ data, moms, isSearching, loadMore, items, loadNew }) => {
    return (
        <>
            <section className="space-y-5">
                {moms}
                <div className="md:grid md:grid-cols-4 flex flex-col gap-5">
                    {data?.data?.map((el, idx) => (
                        <Link
                            key={idx}
                            href={'/article/' + slugify(el?.attributes?.category?.data?.attributes?.ArticleCategory) + "/" + el.attributes.Slug}
                            className="md:min-h-[60lvh] group rounded-3xl space-y-2 p-0 flex flex-col justify-between duration-300"
                        >
                            <div className="space-y-1 flex flex-col gap-2 w-full h-[50lvh] md:h-full relative">
                                <div className="relative overflow-hidden rounded-3xl md:w-full ">
                                    <img
                                        className="w-full h-[50lvh] md:h-[60lvh] object-cover rounded-3xl group-hover:scale-125 duration-150"
                                        width={500}
                                        height={500}
                                        src={`${baseURLImg}${el?.attributes?.Thumbnail?.data?.attributes?.url}`}
                                        alt={el?.attributes?.Title}
                                    />
                                </div>
                                <div className="absolute z-10 bottom-0 left-0 m-5">
                                    <h1 className="font-bold text-secondaryGray group-hover:text-white group-hover:scale-105 duration-150 truncate-last">
                                        {el.attributes.Title}
                                    </h1>
                                </div>
                                <div className="absolute z-10 top-0 left-0 flex items-center gap-1 mx-5 my-4">
                                    {el.attributes.Trending === true ? (
                                        <div className="shimmer-animate px-2 py-1 border bg-darkColor/10 border-secondaryGray/5 text-secondaryYellow dark:border-secondaryColor/20 text-[10px] font-bold tracking-wider backdrop-blur-xl rounded-lg">
                                            Trending
                                        </div>
                                    ) : null}
                                    <p className="dark:text-secondaryDark/60 text-secondaryGray/90 px-2 py-1 border border-mainColor/5 dark:border-secondaryColor/20 bg-darkColor/10 text-[10px] font-bold tracking-wider backdrop-blur-xl rounded-lg">
                                        {el.attributes.category.data.attributes.ArticleCategory}
                                    </p>
                                </div>

                                <div className="gradient-blur h-[40%] duration-300 ease-in-out bg-gradient-to-t from-darkColor/50 via-darkColor/5 to-transparent"></div>
                            </div>
                        </Link>
                    ))}
                </div>

            </section>
        </>
    )
}