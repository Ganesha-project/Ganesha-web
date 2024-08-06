import Image from "next/image";
import Link from "next/link";
import { FaFire } from "react-icons/fa6";
const baseURLImg = process.env.NEXT_PUBLIC_URL_STRAPI_IMG;

export const SideRec = ({ data }) => {
    return (
        <>
            <section className="flex flex-col gap-5 sticky top-24">
                <h1 className="text-2xl flex items-center gap-2 font-bold text-mainColor dark:text-baseColor pb-1 relative">
                   Our Collections <FaFire />
                    <span className="absolute bottom-0 w-[30px] h-1 bg-red-600 rounded-full"></span>
                </h1>
                <div className="flex flex-col gap-3">
                    {data?.slice(0, 5).map((el, idx) => (
                        <> 
                        {console.log(el)}
                            <Link
                                href={el.attributes.Slug}
                                key={idx}
                                className="carousel-item h-[15lvh] group flex flex-col justify-between duration-300">
                                <div className="space-y-1 flex  flex-row gap-4 w-full h-full">
                                    <div className="overflow-hidden rounded-xl max-w-[15lvh] min-w-[15lvh]">
                                        <img
                                            className="w-full h-full object-cover rounded-xl group-hover:scale-125 duration-150"
                                            width={500}
                                            height={500}
                                            src={`${baseURLImg}${el?.attributes?.Thumbnail?.data?.attributes?.url}`}
                                            alt={el.attributes.Title} />
                                    </div>

                                    <div className="space-y-1 w-full flex flex-col h-auto">
                                        <h1 className="font-bold text-base group-hover:text-mainColor dark:group-hover:text-baseColor dark:text-gray-100 duration-150 truncate-last">
                                            {el.attributes.Title}
                                        </h1>
                                        <h2 className="text-mainColor dark:text-baseColor">
                                            {el.attributes.category.data.attributes.ArticleCategory}
                                        </h2>
                                    </div>
                                </div>
                            </Link>
                        </>
                    ))}
                </div>
            </section>
        </>
    )
}