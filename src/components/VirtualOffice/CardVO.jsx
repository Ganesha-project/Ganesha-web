"use client"
import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa6"
import { Title } from "../Title"
import { dataPageVO } from "../../../public/Data/VOData";

export const CardVO = () => {
    const data = dataPageVO.Location
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(1);
    const [scrollTo, setScrollTo] = useState(10);


    // Update itemsToShow based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setItemsToShow(3);
                setScrollTo(80)
            } else if (window.innerWidth >= 768) {
                setItemsToShow(2);
                setScrollTo(80)
            } else {
                setItemsToShow(1);
                setScrollTo(100)
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
                <Title text1={'Preview'} text={'Lokasi Vitrual Office Kami'} className={'md:mx-24 mx-5'} />
                <div className={`w-[100%] overflow-x-scroll noBar`}>
                    <div
                        className="grid grid-flow-col gap-5 transform transition-transform duration-500 ease-in-out py-10"
                        style={{ transform: `translateX(-${currentIndex * (scrollTo / itemsToShow)}%)` }}
                    >
                        {dataPageVO.Location.map((el, idx) => (
                            <>
                                <div
                                    key={idx}
                                    onClick={() => document.getElementById(`modal-${idx}`).showModal()}
                                    className={`${idx === 0 ? 'ml-5 md:ml-24' : ''} ${idx === dataPageVO.Location.length - 1 ? 'mr-5 md:mr-24' : ''} cursor-pointer carousel-item w-[80lvw] md:w-[25lvw] h-[80lvh] relative group duration-300 ease-in-out hover:-translate-y-3 overflow-hidden hover:shadow-mainShadow rounded-3xl`}>
                                    <img
                                        className="w-full h-[80lvh] rounded-3xl object-cover"
                                        src={el.image}
                                        alt={"Virtual Office " + el.name} />
                                    <div className="z-10 absolute inset-0 w-[80lvw] md:w-[25lvw] rounded-t-3xl h-[50%] bg-gradient-to-b from-[#0000008c] to-transparent" />
                                    <div className="z-30 my-5 absolute top-0 left-0">
                                        <h1 className="mx-5 md:text-xl font-medium text-white">
                                            {el.location}
                                        </h1>
                                        <h1 className="mx-5 text-xl md:text-2xl font-bold text-white">
                                            {el.name}
                                        </h1>
                                    </div>
                                    <div className="z-30 absolute bottom-0 left-0">
                                    </div>
                                    <div className={`absolute right-5 bottom-5  ${idx === dataPageVO.Location.length - 1 ? 'right-28' : ''}`}>
                                        <button className="h-10 w-10 flex items-center justify-center rounded-full dark:bg-black bg-white">
                                            <FaPlus className="dark:text-gray-100 text-gray-600 text-xl group-hover:rotate-90 duration-300 ease-in-out" />
                                        </button>
                                    </div>
                                </div>
                                <dialog id={`modal-${idx}`} className="modal backdrop-blur-md py-5">
                                    <div className="modal-box dark:bg-[#151515] bg-white md:w-[80lvw] h-full max-h-full max-w-full noBar">
                                        <form method="dialog" className="sticky top-0 right-0">
                                            <button className="z-[!100] btn btn-circle border-none bg-gray-200 focus:ring-0 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-900 absolute right-0 top-0 rotate-45"><FaPlus className="text-2xl text-gray-800 dark:text-gray-100" /></button>
                                        </form>
                                        <section className="md:mx-14 mt-5 space-y-10">
                                            <div className="space-y-3 mb-5">
                                                <span className="text-lg">
                                                    Gallery.
                                                </span>
                                                <h1 className="text-2xl md:text-4xl font-bold mb-5">
                                                    All Views of Our Virtual Office
                                                </h1>
                                            </div>
                                            <div className="flex flex-col gap-10 w-full">
                                                {el.images.map(el => (
                                                    <div className="relative overflow-hidden rounded-2xl shadow-mainShadow">
                                                        <img
                                                            className="z-50 rounded-2xl w-full h-auto max-h-screen object-contain"
                                                            src={el}
                                                            alt={el} />
                                                        <img
                                                            width={10}
                                                            height={10}
                                                            className="absolute inset-0 -z-10 rounded-2xl w-full h-auto max-h-screen object-cover brightness-105 blur-[100px]"
                                                            src={el}
                                                            alt={el} />
                                                    </div>
                                                ))}
                                            </div>
                                        </section>
                                    </div>
                                </dialog>
                            </>
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
    )
}
