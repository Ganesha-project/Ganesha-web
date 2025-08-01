import { TextMainGradient } from "@/utils/ReueseClass";
import Image from "next/image";
import Link from "next/link";
import { FaFire } from "react-icons/fa6";
const baseURLImg = process.env.NEXT_PUBLIC_URL_STRAPI_IMG;

export const SideRec = ({ data }) => {
    return (
        <>
            <section className="flex flex-col gap-5 sticky top-24">
                <h1 className={`${TextMainGradient} md:mx-24 2xl:mx-80 mx-5 text-2xl flex items-center gap-2 font-bold pb-1 relative`}>
                    Koleksi Kami
                    <span className="absolute bottom-0 w-[30px] h-1 bg-baseColor dark:bg-mainColor rounded-full"></span>
                </h1>
                <div className="carousel2 w-full gap-5 py-5">
                    {data?.map((el, idx) => (
                        <Link
                            href={el.attributes.Slug}
                            key={idx}
                            className={`${idx === 0 && "md:ml-24 2xl:ml-80 ml-5"} ${idx === data.length - 1 && "md:mr-24 2xl:mr-80 mr-5"} md:min-w-[25lvw] min-w-[85lvw] h-[70lvh] rounded-3xl overflow-hidden group relative brightness-95`}
                        >
                            <div className="space-y-1 flex flex-col gap-4 w-full h-full">
                                <img
                                    className="group-hover:scale-110 scale-105 duration-200 h-full w-full object-cover"
                                    width={500}
                                    height={500}
                                    src={`${baseURLImg}${el?.attributes?.Thumbnail?.data?.attributes?.url}`}
                                    alt={el.attributes.Title} />

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
                                <div className="gradient-blur h-[40%] duration-300 ease-in-out bg-gradient-to-t from-darkColor/50 via-darkColor/5 dark:from-lightColor/50 dark:via-lightColor/5 to-transparent"></div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    )
}