"use client"
import { useState, useEffect } from "react";
import { Title } from "../Title"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const WhyLegal = ({data, text, text1}) => {
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
            <section className="py-20">
                <Title text1={text1} text={text} className={'md:mx-24 mx-5'} />
                <div className="relative overflow-x-scroll noBar">
                    <div
                        className="grid grid-flow-col gap-5 transform transition-transform duration-500 ease-in-out py-10"
                        style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
                    >
                        {data.map((el, idx) => (
                            <div
                                key={idx}
                                className={`${idx === 0 ? 'ml-5 md:ml-24' : ''} ${idx === data.length - 1 ? 'mr-5 md:mr-24' : ''} md:min-w-[20lvw] min-w-[60lvw] h-[60lvh] p-8 rounded-3xl dark:from-[#1f1f1f] dark:to-black from-gray-200 to-white bg-gradient-to-b flex flex-col duration-300 ease-in-out hover:scale-105 origin-bottom hover:brightness-105 hover:shadow-mainShadow`}
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
                    <button onClick={handlePrevClick} className="dark:bg-darkColor dark:text-gray-100 bg-gray-100 text-gray-700 md:px-7 md:py-7 px-5 py-5 rounded-full hover:scale-95 duration-300 ease-in-out">
                        <IoIosArrowBack className="text-2xl md:text-[2rem]" />
                    </button>
                    <button onClick={handleNextClick} className="dark:bg-darkColor dark:text-gray-100 bg-gray-100 text-gray-700 md:px-7 md:py-7 px-5 py-5 rounded-full hover:scale-95 duration-300 ease-in-out">
                        <IoIosArrowForward className="text-2xl md:text-[2rem]" />
                    </button>
                </div>
            </section>
        </>
    );
};
