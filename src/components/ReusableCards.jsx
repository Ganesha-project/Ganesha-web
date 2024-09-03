"use client"
import { useEffect, useState } from "react";
import { formatToRupiah } from "@/helper/formatToRupiah";
import { BsFillCheckCircleFill, BsFillXCircleFill, BsInfoCircle, BsInfoCircleFill } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward, IoMdInformationCircle } from "react-icons/io";
import { TbInfoSquareFilled } from "react-icons/tb";

export const ReusableCards = ({ data, label, scrollToLg, scrollToMd, scrollToSm, }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(1);
    const [scrollTo, setScrollTo] = useState(10);
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / itemsToShow); // Total pages based on itemsToShow

    // Update itemsToShow based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setItemsToShow(3);
                setScrollTo(scrollToLg ? scrollToLg : 30)
            } else if (window.innerWidth >= 768) {
                setItemsToShow(2);
                setScrollTo(scrollToMd ? scrollToMd : 30)
            } else {
                setItemsToShow(1);
                setScrollTo(scrollToSm ? scrollToSm : 10)
            }
        };

        handleResize(); // Call on initial render
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalPages - 1));
    };

    return (
        <>
            <section className="py-10 space-y-5">
                <div className="md:mx-24 mx-5 space-y-5">
                    {totalItems <= 3 ? (
                        <div className="flex justify-center w-full items-center">
                            <div className={`flex justify-center dark:text-gray-50 px-7 py-5 bg-gradient-to-bl from-gray-200 to-transparent dark:from-darkColor dark:to-transparent text-center rounded-full p-2 font-semibold md:text-5xl text-2xl uppercase w-fit`}>
                                <p className="bg-gradient-to-tr from-black via-darkColor to-mainColor dark:from-white dark:via-gray-100 dark:to-secondaryColor bg-clip-text text-transparent">
                                    {label}
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className={`flex justify-center md:justify-between w-full items-center bg-gradient-to-bl from-gray-200 to-transparent dark:from-darkColor dark:to-transparent text-center rounded-full p-2 font-semibold md:text-5xl text-2xl uppercase `}>
                            {label ? (
                                <>
                                    <div className={`dark:text-gray-50 px-7 py-5 rounded-full`}>
                                        <p className="bg-gradient-to-tr from-black via-darkColor to-mainColor dark:from-white dark:via-gray-100 dark:to-secondaryColor bg-clip-text text-transparent">
                                            {label}
                                        </p>
                                    </div>
                                </>
                            ) : null}
                            <div className={`items-center space-x-2 md:block hidden`}>
                                <button onClick={handlePrevClick} className={`${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100 dark:hover:from-sky-900 hover:from-sky-200"} bg-gradient-radial dark:from-black  dark:to-darkColor from-white to-gray-100 dark:text-gray-100 text-gray-700 md:px-7 md:py-7 px-5 py-5 rounded-full hover:scale-95 duration-300 ease-in-out`}>
                                    <IoIosArrowBack className="text-2xl md:text-[2rem]" />
                                </button>
                                <button onClick={handleNextClick} className={`${currentIndex >= data.length - itemsToShow ? "opacity-50 cursor-not-allowed" : "opacity-100 dark:hover:from-sky-900 hover:from-sky-200"} bg-gradient-radial dark:from-black  dark:to-darkColor from-white to-gray-100 dark:text-gray-100 text-gray-700 md:px-7 md:py-7 px-5 py-5 rounded-full hover:scale-95 duration-300 ease-in-out`}>
                                    <IoIosArrowForward className="text-2xl md:text-[2rem]" />
                                </button>
                            </div>
                        </div>
                    )}
                    {totalItems <= 3 ? null : (
                        <div className={`flex justify-center w-full items-center gap-3 md:hidden`}>
                            <button onClick={handlePrevClick} className={`${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100 dark:hover:from-sky-900 hover:from-sky-200"} bg-gradient-radial dark:from-black dark:to-darkColor from-white to-gray-100 dark:text-gray-100 text-gray-700 md:px-7 md:py-7 px-5 py-5 rounded-full hover:scale-95 duration-300 ease-in-out`}>
                                <IoIosArrowBack className="text-2xl md:text-[2rem]" />
                            </button>
                            <button onClick={handleNextClick} className={`${currentIndex >= data.length - itemsToShow ? "opacity-50 cursor-not-allowed" : "opacity-100 dark:hover:from-sky-900 hover:from-sky-200"} bg-gradient-radial dark:from-black dark:to-darkColor from-white to-gray-100 dark:text-gray-100 text-gray-700 md:px-7 md:py-7 px-5 py-5 rounded-full hover:scale-95 duration-300 ease-in-out`}>
                                <IoIosArrowForward className="text-2xl md:text-[2rem]" />
                            </button>
                        </div>
                    )}
                </div>

                <div className={`${data.length <= 3 ? "flex justify-center" : "carousel"} relative  w-[100%]`}>
                    <div
                        className={`${data.length <= 3 ? "flex-col md:flex-row" : ""} flex gap-5 transform transition-transform duration-500 ease-in-out py-5`}
                        style={{ transform: `translateX(-${currentIndex * scrollTo}%)` }} // Removed itemsToShow from calculation
                    >
                        {data.map((el, idx) => (
                            <div
                                key={idx}
                                className={`bg-gradient-to-b from-gray-200 to-white dark:from-[#232323] dark:to-black ${idx === 0 && totalItems > 4 ? 'ml-5 md:ml-24' : ''} ${idx === totalItems - 1 && totalItems > 4 ? 'mr-5 md:mr-24' : ''} md:w-[30vw] w-[90vw] p-5 rounded-3xl space-y-5 relative hover:scale-[1.01] origin-bottom duration-300 ease-in-out hover:shadow-mainShadow hover:brightness-105 dark:hover:brightness-90`}
                            >
                                <div className="flex flex-col justify-center items-center gap-3 mt-5">
                                    <h1 className={`text-gray-700 dark:text-white mt-2 uppercase text-center text-xl md:text-3xl font-bold tracking-tight`}>
                                        {el.type}
                                    </h1>
                                    <h3 className="text-center line-through text-lg dark:text-red-500 text-red-600">
                                        {el.priceOriginal === 0 ? null : formatToRupiah(el.priceOriginal)}
                                    </h3>
                                    <h2 className={`text-gray-950 dark:text-gray-100 font-bold text-xl md:text-3xl`}>
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
                                    {el.features?.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <span className="items-start">
                                                {feature.status === true ? (<BsFillCheckCircleFill className="text-green-500" />) : (<BsFillXCircleFill className="text-red-500" />)}
                                            </span>
                                            <h4 className="font-medium dark:text-gray-100 text-gray-900">
                                                {feature.feature}
                                            </h4>
                                        </div>
                                    ))}
                                    {el.requirements ? (
                                        <>
                                            <p className="mt-5 mb-2 font-semibold px-2 bg-yellow-400 dark:bg-amber-500 rounded-full w-fit">
                                                Persyaratan
                                            </p>
                                            {el.requirements?.map(el => (
                                                <div className="flex items-center gap-3" >
                                                    <BsInfoCircleFill className="dark:text-amber-500 text-yellow-400" />  {el}
                                                </div>
                                            ))}
                                        </>
                                    ) : null}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};