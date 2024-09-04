import Link from "next/link"
import { Title } from "../Title"
const baseURLImg = process.env.NEXT_PUBLIC_URL_STRAPI_IMG;

export const ArticleReccomendation = ({ data }) => {
    return (
        <>
            <section className="md:px-24 space-y-5 py-24 flex flex-col justify-center items-center">
                <Title text={'Read Our Articles'} />
                <div className="flex md:flex-row flex-col md:flex-wrap gap-5 md:items-center md:justify-center ">
                    {data?.data?.map((el, idx) => (
                        <a
                            href={'/article/' + el.attributes.Slug}
                            key={idx}
                            className={`md:w-[30%] carousel-item relative hover:scale-95 duration-300 ease-in-out rounded-3xl`}
                        >
                            <img
                                width={500}
                                height={500} 
                                className="md:w-full w-[70lvw] h-[40lvh] md:h-[25lvw] object-cover rounded-3xl bg-baseColor"
                                src={`${baseURLImg}${el?.attributes?.Thumbnail?.data?.attributes?.url}`}
                                alt={el?.attributes?.Title}
                            />
                            <div className="absolute bottom-0 text-gray-100 z-20 p-3 space-y-2">
                                <h1 className="md:text-lg font-semibold">
                                    {el?.attributes?.Title}
                                </h1>
                                <h2 className="px-2 py-[1px] bg-[#ffffff3c] backdrop-blur-lg w-fit rounded-full font-semibold text-sm">
                                    {el?.attributes?.category?.data?.attributes?.ArticleCategory}
                                </h2>
                            </div>
                            <span className="w-full from-[#0000006f] bg-gradient-to-t rounded-3xl to-transparent absolute z-10 h-[50%] bottom-0"></span>
                        </a>
                    ))}
                </div>
                <a
                    href="/article"
                    className="btn btn-ghost rounded-full bg-baseColor bg-opacity-20 w-fit"
                >
                    See More
                </a>
            </section>
        </>
    )
}
