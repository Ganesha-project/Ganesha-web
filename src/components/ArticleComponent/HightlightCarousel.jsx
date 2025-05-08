'use client'
import { slugify } from "@/helper/slugify";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const baseURLImg = process.env.NEXT_PUBLIC_URL_STRAPI_IMG;

export const HighlightCarousel = ({ data }) => {
    const delay = 4000;
    const [index, setIndex] = useState(0);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const featuredArticles = data?.data?.filter(el => el.attributes.Trending === true) || [];
        setFilteredData(featuredArticles);
    }, [data]);

    useEffect(() => {
        if (filteredData.length > 1) {
            const timer = setTimeout(() => {
                setIndex(prevIndex =>
                    prevIndex === filteredData.length - 1 ? 0 : prevIndex + 1
                );
            }, delay);

            return () => clearTimeout(timer);
        }
    }, [index, filteredData.length]);

    return (
        <>
            <div className="overflow-hidden rounded-b-3xl md:rounded-3xl md:h-[50lvh] h-[50lvh] md:mx-24 md:mt-20 shadow-mainShadow relative flex items-center justify-center">
                <div
                    className="whitespace-nowrap transition-transform ease-in-out duration-700 w-full h-full"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {filteredData.map((el, i) => (
                        <Link
                            key={i}
                            href={'article/' + slugify(el?.attributes?.category?.data?.attributes?.ArticleCategory) + "/" + el.attributes.Slug}
                            className="inline-block shadow w-full relative overflow-hidden h-full"
                        >
                            <img
                                width={500}
                                height={500}
                                className="w-full h-full object-cover rounded-b-3xl md:rounded-3xl hover:scale-110 duration-150 bg-baseColor"
                                src={`${baseURLImg}${el?.attributes?.Thumbnail?.data?.attributes?.url}`}
                                alt={el.attributes.Title}
                            />
                            <span className="w-full from-[#0000006f] bg-gradient-to-t rounded-2xl to-transparent absolute z-10 h-[50%] bottom-0"></span>
                            <span className="md:hidden w-full from-[#ffffff6f] dark:from-[#0000006f] bg-gradient-to-b to-transparent absolute z-10 h-[20%] top-0"></span>
                            <div className="absolute mb-5 md:mb-0 inset-5 flex flex-col self-end z-20">
                                <h1 className="md:text-2xl text-white font-semibold text-wrap truncate-last max-w-4xl">
                                    {el.attributes.Title}
                                </h1>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="absolute bottom-4 flex justify-end md:right-4 mt-4">
                    {filteredData.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-2 h-2 mx-1 rounded-full ${i === index ? 'bg-white' : 'bg-gray-300/20'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
