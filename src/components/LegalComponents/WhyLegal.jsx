"use client"
import { useState, useEffect } from "react";
import { Title } from "../Title"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const WhyLegal = ({ data, text, text1 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(1);
    const [scrollTo, setScrollTo] = useState(10);


    // Update itemsToShow based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setItemsToShow(3);
                setScrollTo(30)
            } else if (window.innerWidth >= 768) {
                setItemsToShow(2);
                setScrollTo(30)
            } else {
                setItemsToShow(1);
                setScrollTo(16)
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
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, data.length - itemsToShow));
    };

    return (
        <>
            <section className="py-20">
                <Title text1={text1} text={text} className={'md:mx-24 2xl:mx-80 mx-5'} />
                <div className={`relative carousel w-[100%]`}>
                    <div
                        className="grid grid-flow-col gap-5 transform transition-transform duration-500 ease-in-out py-10"
                        style={{ transform: `translateX(-${currentIndex * (scrollTo / itemsToShow)}%)` }}
                    >
                        {data.map((el, idx) => (
                            <div
                                key={idx}
                                className={`${idx === 0 ? 'ml-5 md:ml-24 2xl:ml-80' : ''} ${idx === data.length - 1 ? 'mr-5 md:mr-24 2xl:mr-80' : ''} shimmer relative group md:w-[20lvw] w-[90lvw] h-[60lvh] p-8 rounded-3xl dark:from-[#1f1f1f] dark:to-black from-gray-200 to-white bg-gradient-to-b flex flex-col duration-300 ease-in-out hover:scale-105 origin-bottom hover:brightness-105 hover:shadow-mainShadow`}
                            >
                                <h1 className="text-2xl font-semibold h-[30lvh] bg-gradient-to-tr dark:from-gray-100 from-gray-800 dark:via-gray-300 via-gray-600 to-sky-800 dark:to-sky-300 bg-clip-text text-transparent">
                                    {el.title}
                                </h1>
                                <div>
                                    {el.points.map((point, id) => (
                                        <div key={id}>
                                            <h2 className="text-lg font-medium mb-1">
                                                {point.heading}
                                            </h2>
                                            <p>
                                                {point.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center w-full items-center space-x-2">
                    <button onClick={handlePrevClick} className={`${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100 dark:hover:from-sky-900 hover:from-sky-200"} bg-gradient-radial dark:from-black dark:to-darkColor from-white to-gray-100 dark:text-gray-100 text-gray-700 md:px-7 md:py-7 px-5 py-5 rounded-full hover:scale-95 duration-300 ease-in-out`}>
                        <IoIosArrowBack className="text-2xl md:text-[2rem]" />
                    </button>
                    <button onClick={handleNextClick} className={`${currentIndex >= data.length - itemsToShow ? "opacity-50 cursor-not-allowed" : "opacity-100 dark:hover:from-sky-900 hover:from-sky-200"} bg-gradient-radial dark:from-black dark:to-darkColor from-white to-gray-100 dark:text-gray-100 text-gray-700 md:px-7 md:py-7 px-5 py-5 rounded-full hover:scale-95 duration-300 ease-in-out`}>
                        <IoIosArrowForward className="text-2xl md:text-[2rem]" />
                    </button>
                </div>
            </section>
        </>
    );
};

