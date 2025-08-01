"use client"
import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { Title } from "../Title";
import { dataPageVO } from "../../../public/Data/VOData";
import Image from "next/image";

export const CardVO = () => {
    const data = dataPageVO.Location;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(1);
    const [scrollTo, setScrollTo] = useState(10);

    // Update itemsToShow based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setItemsToShow(3);
                setScrollTo(50);
            } else if (window.innerWidth >= 768) {
                setItemsToShow(2);
                setScrollTo(20);
            } else {
                setItemsToShow(1);
                setScrollTo(20);
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
                <Title text1={'Preview'} text={'Lokasi Virtual Office Kami'} className={'md:mx-24 mx-5 2xl:mx-80'} />
                <div className={`w-full carousel2`}>
                    <div
                        className="grid grid-flow-col gap-5 transform transition-transform duration-500 ease-in-out py-10"
                        style={{ transform: `translateX(-${currentIndex * (scrollTo / itemsToShow)}%)` }}
                    >
                        {data.map((el, idx) => (
                            <div
                                key={idx} // Perbaikan: Menambahkan key yang unik untuk setiap elemen
                                className={`
                                ${idx === 0 ? 'ml-5 md:ml-24 2xl:ml-80' : ''} 
                                ${idx === data.length - 1 ? 'mr-5 md:mr-24 2xl:mr-80' : ''} 
                                carousel-item w-[80lvw] md:w-[25lvw] h-[80lvh] relative group duration-300 ease-in-out hover:-translate-y-3 overflow-hidden hover:shadow-mainShadow rounded-3xl`}>
                                
                                <img
                                    className="w-full h-[80lvh] rounded-3xl object-cover"
                                    src={el.image}
                                    alt={"Virtual Office " + el.name} 
                                />
                                <div className="z-10 absolute inset-0 w-[80lvw] md:w-[25lvw] rounded-t-3xl h-[50%] bg-gradient-to-b from-[#0000008c] to-transparent" />
                                <div className="z-30 my-5 absolute top-0 left-0">
                                    <h1 className="mx-5 md:text-xl font-medium text-white">{el.location}</h1>
                                    <h1 className="mx-5 text-xl md:text-2xl font-bold text-white">{el.name}</h1>
                                </div>
                                <div className={`absolute !z-50 right-5 bottom-5 ${idx === data.length - 1 ? 'right-28' : ''}`}>
                                    <button
                                        onClick={() => document.getElementById(`modal-${idx}`).showModal()}
                                        className="h-10 w-10 flex items-center justify-center rounded-full dark:bg-black bg-white">
                                        <FaPlus className="dark:text-neutral-100 text-neutral-600 text-xl group-hover:rotate-90 duration-300 ease-in-out" />
                                    </button>
                                </div>
                                <div className="absolute inset-0 group-hover:backdrop-blur-lg group-hover:bg-black/15 rounded-2xl duration-300 ease-in-out">
                                    <div
                                        className="group-hover:scale-100 space-x-2 scale-0 duration-300 w-full h-full flex justify-center items-center text-neutral-200">
                                        <button
                                            onClick={() => document.getElementById(`modal-${idx}`).showModal()}
                                            className="flex font-semibold items-center pl-2 py-1 bg-white/20 dark:bg-darkColor/20 rounded-full">
                                            Preview <span className="mx-1 p-1 bg-white dark:bg-darkColor dark:text-white rounded-full text-[13px] text-neutral-800"><FaPlus /></span>
                                        </button>
                                    </div>
                                </div>
                                <dialog id={`modal-${idx}`} className="modal backdrop-blur-md py-5">
                                    <div className="modal-box dark:bg-[#151515] bg-white md:w-[80lvw] h-full max-h-full max-w-full noBar">
                                        <form method="dialog" className="sticky top-0 right-0">
                                            <button className="z-[100] btn btn-circle border-none bg-neutral-200 focus:ring-0 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-900 absolute right-0 top-0 rotate-45">
                                                <FaPlus className="text-2xl text-neutral-800 dark:text-neutral-100" />
                                            </button>
                                        </form>
                                        <section className="md:mx-14 mt-5 space-y-10">
                                            <div className="space-y-3 mb-5">
                                                <span className="text-lg">Gallery.</span>
                                                <h1 className="text-2xl md:text-4xl font-bold mb-5">All Views of Our Virtual Office</h1>
                                            </div>
                                            <div className="flex flex-col gap-10 w-full items-center justify-center">
                                                {el.images.map((image, imgIdx) => (
                                                    <Image
                                                        key={imgIdx} // Perbaikan: Menambahkan key yang unik untuk setiap gambar
                                                        width={500}
                                                        height={500}
                                                        className="z-50 max-h-screen rounded-2xl object-contain"
                                                        src={image}
                                                        alt={image} 
                                                    />
                                                ))}
                                            </div>
                                        </section>
                                    </div>
                                </dialog>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center w-full items-center space-x-2">
                    <button onClick={handlePrevClick} className={`${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100 dark:hover:from-sky-900 hover:from-sky-200"} bg-gradient-radial dark:from-black dark:to-darkColor from-white to-neutral-100 dark:text-neutral-100 text-neutral-700 md:px-7 md:py-7 px-5 py-5 rounded-full hover:scale-95 duration-300 ease-in-out`}>
                        <IoIosArrowBack className="text-2xl md:text-[2rem]" />
                    </button>
                    <button onClick={handleNextClick} className={`${currentIndex >= data.length - itemsToShow ? "opacity-50 cursor-not-allowed" : "opacity-100 dark:hover:from-sky-900 hover:from-sky-200"} bg-gradient-radial dark:from-black dark:to-darkColor from-white to-neutral-100 dark:text-neutral-100 text-neutral-700 md:px-7 md:py-7 px-5 py-5 rounded-full hover:scale-95 duration-300 ease-in-out`}>
                        <IoIosArrowForward className="text-2xl md:text-[2rem]" />
                    </button>
                </div>
            </section>
        </>
    );
};