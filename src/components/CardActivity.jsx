"use client";

import { useState } from "react";
import { IoIosClose, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa6";

export const CardActivity = ({ activities, loadMore, items }) => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleOpenModal = (index) => {
        setSelectedIndex(index);
    };

    const handleCloseModal = () => {
        setSelectedIndex(null);
    };

    const handlePrev = () => {
        setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : activities.length - 1));
    };

    const handleNext = () => {
        setSelectedIndex((prevIndex) => (prevIndex < activities.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <>
            <section className="mx-5 md:mx-24 2xl:mx-80">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 auto-cols-auto">
                    {activities.map((el, idx) => (
                        <div
                            key={idx}
                            onClick={() => handleOpenModal(idx)}
                            className={`relative group cursor-pointer rounded-xl md:rounded-2xl overflow-hidden 
                                     ${idx % 6 === 0 ? "md:col-span-2  md:row-span-2 " : "col-span-1 row-span-1"}
                                     ${idx % 5 === 0 ? "md:col-span-1 col-span-2 row-span-1" : "col-span-1 row-span-1"}
                                     `}
                        >
                            <img
                                className="w-full h-full min-h-[25vh] group-hover:object-contain object-cover group-hover:brightness-75 duration-300 bg-bgLight dark:bg-darkColor"
                                src={el.imageUrl}
                                alt={el.title}
                            />
                            <div className="absolute inset-0 flex items-end p-1 md:p-3">
                                <h1 className={`${el.ig === true && "scale-0 group-hover:scale-100 translate-y-full group-hover:translate-y-0"} duration-300 text-white md:text-sm bg-black/25 px-2 py-1 rounded-lg backdrop-blur-lg truncate text-xs`}>
                                    {el.title}
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>
                {activities.length > items && (
                    <>
                        <div className="w-full h-auto flex justify-center items-center pt-10">
                            <button
                                onClick={loadMore}
                                className="flex gap-2 items-center px-4 py-2 group border-2 border-mainColor text-mainColor dark:border-baseColor dark:text-baseColor dark:hover:bg-baseColor dark:hover:text-gray-800 rounded-full font-semibold duration-300 ease-in-out hover:bg-mainColor hover:text-white"
                            >
                                Load More <FaArrowDown className="group-hover:animate-bounce" />
                            </button>
                        </div>
                    </>
                )}
            </section>

            {selectedIndex !== null && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-[99999] backdrop-blur-md px-3 md:px-0">
                    <button
                        className="absolute top-2 right-2 text-[39px] hover:bg-black rounded-full text-white"
                        onClick={handleCloseModal}
                    >
                        <IoIosClose />
                    </button>
                    <div className="relative flex flex-col md:flex-row w-full md:min-h-[87.5lvh] max-w-5xl bg-bgLight dark:bg-darkColor rounded-3xl overflow-hidden">
                        <div className="md:w-2/3 bg-black/90 dark:bg-black/40 flex items-center justify-center relative overflow-hidden">
                            <img
                                src={activities[selectedIndex].imageUrl}
                                alt={activities[selectedIndex].title}
                                className="w-full h-full object-contain z-20"
                            />
                        </div>

                        <div className="md:w-1/3 p-4 flex flex-col">
                            <h3 className="text-lg font-bold">{activities[selectedIndex].title}</h3>
                            <p className="text-sm text-gray-500">{activities[selectedIndex].date} - {activities[selectedIndex].location}</p>
                            <p className="text-sm mt-2">{activities[selectedIndex].description}</p>
                        </div>

                    </div>
                    <div className="hidden md:block">
                        <button
                            onClick={handlePrev}
                            className="absolute left-4 top-1/2 transform invert -translate-y-1/2 p-2 text-xl bg-black/80 text-white hover:bg-black rounded-full"
                        >
                            <IoIosArrowBack />
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-4 top-1/2 transform invert -translate-y-1/2 p-2 text-xl bg-black/80 text-white hover:bg-black rounded-full"
                        >
                            <IoIosArrowForward />
                        </button>
                    </div>

                    <div className="absolute bottom-0 space-x-5 md:hidden">
                        <button
                            onClick={handlePrev}
                            className="invert -translate-y-1/2 p-2 text-xl bg-black/80 text-white hover:bg-black rounded-full"
                        >
                            <IoIosArrowBack />
                        </button>
                        <button
                            onClick={handleNext}
                            className="invert -translate-y-1/2 p-2 text-xl bg-black/80 text-white hover:bg-black rounded-full"
                        >
                            <IoIosArrowForward />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
