"use client"
import Link from "next/link"
import Image from "next/image"
import { Title } from "../Title"
import { useEffect, useState } from "react";
import { dataClientWeb } from "../../../public/Data/WebData"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";

export const WebWork = ({ text1, text }) => {
    let data = dataClientWeb
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(1);
    const [scrollTo, setScrollto] = useState(10);

    // Update itemsToShow based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setItemsToShow(2); // 3 items for large screens
                setScrollto(30)
            } else {
                setItemsToShow(1); // 1 item for smaller screens
                setScrollto(15)
            }
        };

        handleResize(); // Call on initial render
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handlePrevClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleNextClick = () => {
        if (currentIndex < data.length - itemsToShow) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };
    return (
        <>
            <section className="bg-neutral-100 dark:bg-darkColor h-fit md:py-20 py-10 md:my-10 my-5">
                <div className={'md:mx-24 mx-5 2xl:mx-80 flex md:items-center justify-between md:flex-row flex-col'} >
                    <Title text1={text1 || "Explore"} text={text || "Our Works"} />
                    <div className="hidden md:block">
                        <div className={`flex justify-end w-full items-center gap-3`}>
                            <button onClick={handlePrevClick} className={`${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"} bg-radial dark:from-black dark:hover:from-sky-900 hover:from-sky-200 dark:to-darkColor from-white to-neutral-100 dark:text-neutral-100 text-neutral-700 md:px-7 md:py-7 px-5 py-5 rounded-full hover:scale-95 duration-300 ease-in-out`}>
                                <IoIosArrowBack className="text-2xl md:text-[2rem]" />
                            </button>
                            <button onClick={handleNextClick} className={`${currentIndex >= data.length - itemsToShow ? "opacity-50 cursor-not-allowed" : "opacity-100"} bg-radial dark:from-black dark:hover:from-sky-900 hover:from-sky-200 dark:to-darkColor from-white to-neutral-100 dark:text-neutral-100 text-neutral-700 md:px-7 md:py-7 px-5 py-5 rounded-full hover:scale-95 duration-300 ease-in-out`}>
                                <IoIosArrowForward className="text-2xl md:text-[2rem]" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="relative carousel w-[100%]">
                    <div
                        className="grid grid-flow-col gap-3 transform transition-transform duration-500 ease-in-out py-10"
                        style={{ transform: `translateX(-${currentIndex * (scrollTo / itemsToShow)}%)` }}
                    >
                        {data.map((el, idx) => (
                            <Link
                                key={idx}
                                href={el.link}
                                className={`duration-300 ease-in-out hover:scale-[1.05] hover:shadow-mainShadow origin-bottom space-y-10 p-3 md:p-5 bg-gradient-to-b min-w-[80lvw] md:min-w-[40lvw] h-fit from-white to-neutral-100 dark:from-black dark:to-darkColor rounded-3xl w-fit 
                                    ${idx === 0 ? 'ml-5 md:ml-24 2xl:ml-80' : ''} ${idx === data.length - 1 ? 'mr-5 md:mr-24 2xl:mr-80' : ''}`}
                            >
                                <Image
                                    className="rounded-xl w-full h-fit object-cover"
                                    width={500}
                                    height={500}
                                    src={el.preview}
                                    alt={el.name} />
                                <div>
                                    <h1 className="text-xl md:text-2xl font-bold">
                                        {el.brandName ? el.brandName : el.name}
                                    </h1>
                                    <h2 className="text-sm">
                                        {el.brandName ? el.name : null}
                                    </h2>
                                    <h2 className="md:text-lg text-sm my-2 px-3 py-1 bg-gradient-to-t font-medium dark:from-neutral-700 from-neutral-200 to-transparent rounded-full w-fit">
                                        {el.package}
                                    </h2>
                                    <button className="text-sm md:text-lg hover:brightness-75 flex items-center gap-2 group dark:hover:brightness-125 duration-200 px-3 py-1 bg-gradient-to-tl from-neutral-200 via-neutral-100 to-sky-200 dark:from-darkColor dark:via-darkColor dark:to-sky-900 rounded-full text-neutral-600 dark:text-white font-bold">
                                        Visit <FaLongArrowAltRight className="group-hover:scale-125 origin-left duration-200 ease-in-out" />
                                    </button>
                                </div>

                            </Link>
                        ))}
                    </div>
                </div>


            </section >
        </>
    )
}