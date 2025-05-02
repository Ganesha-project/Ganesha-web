import Image from "next/image"
import Link from "next/link"
import { FaFire } from "react-icons/fa6"
import { Headtag } from "./HeadTag"
import { formatDateTime } from "@/helper/formatDateTime"
import { slugify } from "@/helper/slugify"
import { Pagination } from "./Pagination"
const baseURLImg = process.env.NEXT_PUBLIC_URL_STRAPI_IMG;

export const ArticleCard = ({ data, moms, isSearching, loadMore, items }) => {
    return (
        <>
            <section className="space-y-5">
                {moms}
                <div className="md:grid md:grid-cols-4 flex flex-col gap-5">
                    {data?.data?.map((el, idx) => (
                        <>
                            <Link
                                href={'/article/' + slugify(el?.attributes?.category?.data?.attributes?.ArticleCategory) + "/" + el.attributes.Slug}
                                key={idx} className="md:min-h-[45lvh] group rounded-2xl space-y-2 p-0 flex flex-col justify-between duration-300">
                                <div className="space-y-1 flex md:flex-col flex-row gap-2 w-full h-[20lvh] md:h-full">
                                    <div className="relative overflow-hidden rounded-xl md:w-full w-[50%]">
                                        <img
                                            className="w-full h-[20lvh] md:h-[50lvh] object-cover rounded-2xl group-hover:scale-125 duration-150"
                                            width={500}
                                            height={500}
                                            src={`${baseURLImg}${el?.attributes?.Thumbnail?.data?.attributes?.url}`}
                                            alt={el?.attributes?.Title} />

                                    </div>

                                    <div className="space-y-2 md:w-full w-[50%] flex flex-col md:justify-between h-auto dark:text-white">
                                        <h1 className="font-semibold text-md text-secondaryDark dark:text-secondaryLight dark:group-hover:text-baseColor group-hover:text-mainColor duration-150 truncate-last">
                                            {el?.attributes?.Title}
                                        </h1>
                                        <div className="flex gap-2 items-center">
                                            {el.attributes.Trending === true ? (
                                                <div className="shimmer-animate px-2 py-1 border border-mainColor/5 text-mainColor dark:text-secondaryColor dark:border-secondaryColor/20 bg-mainColor/10 text-[10px] font-bold tracking-wider rounded-lg">
                                                    Trending
                                                </div>
                                            ) : null}
                                            <p className="text-xs font-bold tracking-wide opacity-50">
                                                {el?.attributes?.category?.data?.attributes?.ArticleCategory}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </>
                    ))}
                </div>
                <Pagination
                    loadMore={loadMore} />
            </section>
        </>
    )
}