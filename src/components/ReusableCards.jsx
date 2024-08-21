"use client"
import { useEffect, useState } from "react";
import { formatToRupiah } from "@/helper/formatToRupiah";
import { BsFillCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const ReusableCards = ({ data, cardColor, typeColor, priceColor, buttonColor, label }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(1);

    // Update itemsToShow based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setItemsToShow(3); // 3 items for large screens
            } else {
                setItemsToShow(1); // 1 item for smaller screens
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

            <section className="py-10 space-y-5">
                <div className="md:mx-24 mx-5 space-y-5">
                    <div className={`flex justify-center md:justify-between w-full items-center bg-gradient-to-bl from-gray-200 to-transparent dark:from-darkColor dark:to-transparent text-center rounded-full p-2 font-semibold md:text-5xl text-2xl uppercase `}>
                        {label ? (
                            <>
                                <h1 className={`dark:text-gray-50 px-7 py-5 rounded-full`}>
                                    {label}
                                </h1>
                            </>
                        ) : null}
                        <div className={`items-center space-x-2 md:block hidden`}>
                            <button onClick={handlePrevClick} className={`dark:bg-[#373737] dark:text-gray-100 bg-gray-100 text-gray-700 px-7 py-7 rounded-full hover:scale-95 duration-300 ease-in-out`}>
                                <IoIosArrowBack className="text-[2rem]" />
                            </button>
                            <button onClick={handleNextClick} className={`dark:bg-[#373737] dark:text-gray-100 bg-gray-100 text-gray-700 px-7 py-7 rounded-full hover:scale-95 duration-300 ease-in-out`}>
                                <IoIosArrowForward className="text-[2rem]" />
                            </button>
                        </div>
                    </div>
                    {data.length <= 3 ? null : (
                        <div className={`flex justify-center w-full items-center gap-3 md:hidden`}>
                            <button onClick={handlePrevClick} className="dark:bg-darkColor dark:text-gray-100 bg-gray-100 text-gray-700 md:px-7 md:py-7 px-5 py-5 rounded-full hover:scale-95 duration-300 ease-in-out">
                                <IoIosArrowBack className="text-2xl md:text-[2rem]" />
                            </button>
                            <button onClick={handleNextClick} className="dark:bg-darkColor dark:text-gray-100 bg-gray-100 text-gray-700 md:px-7 md:py-7 px-5 py-5 rounded-full hover:scale-95 duration-300 ease-in-out">
                                <IoIosArrowForward className="text-2xl md:text-[2rem]" />
                            </button>
                        </div>
                    )}
                </div>

                <div className="relative overflow-x-scroll noBar">
                    <div
                        className={`${data.length <= 3 ? "flex md:flex-row flex-col justify-center px-5 md:mx-0" : "grid grid-flow-col"}  gap-5 transform transition-transform duration-500 ease-in-out py-5`}
                        style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}

                    >
                        {data.map((el, idx) => (
                            <div
                                key={idx}
                                className={`hover:brightness-105 bg-gradient-to-b from-gray-200 to-white dark:from-[#232323] dark:to-black ${idx === 0 && data.length > 4 ? 'ml-5 md:ml-24' : ''} ${idx === data.length - 1 && data.length > 4 ? 'mr-5 md:mr-24' : ''} md:w-[30vw] w-[90vw] p-5 rounded-3xl space-y-5 relative hover:scale-[.97] duration-300 ease-in-out hover:shadow-secondaryShadow hover:brightness-105`}
                            >
                                <div className="flex flex-col justify-center items-center gap-3 mt-5">
                                    <h1 className={`text-gray-700 dark:text-white mt-2 uppercase text-center text-3xl font-bold tracking-tight`}>
                                        {el.type}
                                    </h1>
                                    <h3 className="text-center line-through text-lg text-red-600">
                                        {el.priceOriginal === 0 ? null : formatToRupiah(el.priceOriginal)}
                                    </h3>
                                    <h2 className={`text-gray-950 dark:text-gray-100 font-bold text-3xl`}>
                                        {el.price === 0 ? ("Talk With Us!") : formatToRupiah(el.price)}
                                    </h2>
                                    <a
                                        href={el.link}
                                        className={`bg-gray-600 dark:bg-gray-200 w-full text-center dark:text-gray-800 text-white py-2 rounded-full font-bold ease-in-out duration-300 hover:scale-95`}>
                                        Konsultasi Sekarang
                                    </a>
                                </div>
                                {el.discount !== 0 ? (
                                    <div className="absolute top-[-30px] right-[-10px]">
                                        <p className="bg-red-500 font-bold px-2 py-1 text-white rounded-xl animate-pulse">
                                            OFF {el.discount}%
                                        </p>
                                    </div>
                                ) : null}
                                <div>
                                    {el.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <span className="items-start">
                                                {feature.status === true ? (<BsFillCheckCircleFill className="text-green-500" />) : (<BsFillXCircleFill className="text-red-500" />)}
                                            </span>
                                            <h4 className="font-medium dark:text-gray-100 text-gray-900">
                                                {feature.feature}
                                            </h4>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </>
    );
};
