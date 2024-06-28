'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const HighlightCarousel = ({ data }) => {
    const delay = 4000;
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex(prevIndex =>
                prevIndex === data.length - 1 ? 0 : prevIndex + 1
            );
        }, delay);

        return () => clearTimeout(timer);
    }, [index]);

    return (
        <>
            <div className="overflow-hidden rounded-box h-[50lvh] shadow">
                <div
                    className="whitespace-nowrap transition-transform ease-in-out duration-700 w-full h-full"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {data.map((el, i) => (
                        <Link
                            href={''}
                            key={i}
                            className="inline-block shadow w-full relative overflow-hidden rounded-2xl h-full"
                        >
                            <Image
                                width={500}
                                height={500}
                                className="w-full h-full object-cover rounded-2xl hover:scale-125 duration-150"
                                src={el.imgUrl}
                                alt={el.title}
                            />
                            <span className="w-full from-transparent dark:from-[#000000d6] bg-gradient-to-t rounded-2xl to-[#000000] absolute z-10 h-[50%] bottom-0"></span>
                            <div className="absolute inset-5 flex flex-col self-end z-20">
                                <h1 className="text-xl text-white font-semibold text-wrap truncate-last">
                                    {el.title}
                                </h1>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
