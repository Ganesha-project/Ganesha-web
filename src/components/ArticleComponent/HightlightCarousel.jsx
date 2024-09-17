'use client'
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
            <div className="overflow-hidden rounded-box md:h-[50lvh] h-[30lvh] shadow">
                <div
                    className="whitespace-nowrap transition-transform ease-in-out duration-700 w-full h-full"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {filteredData.map((el, i) => (
                        <Link
                            key={i}
                            href={'article/' + el.attributes.Slug}
                            className="inline-block shadow w-full relative overflow-hidden rounded-2xl h-full"
                        >
                            <img
                                width={500}
                                height={500}
                                className="w-full h-full object-cover rounded-2xl hover:scale-125 duration-150 bg-baseColor"
                                src={`${baseURLImg}${el?.attributes?.Thumbnail?.data?.attributes?.url}`}
                                alt={el.attributes.Title}
                            />
                            <span className="w-full from-[#0000006f] bg-gradient-to-t rounded-2xl to-transparent absolute z-10 h-[50%] bottom-0"></span>
                            <div className="absolute inset-5 flex flex-col self-end z-20">
                                <h1 className="text-xl text-white font-semibold text-wrap truncate-last">
                                    {el.attributes.Title}
                                </h1>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
