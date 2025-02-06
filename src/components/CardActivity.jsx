"use client";

import { useState } from "react";
import { IoIosClose, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa6";
import Image from "next/image";
import { formatDate, formatDateTime } from "@/helper/formatDateTime";
import { ArticleContent } from "./ArticleComponent/ArticleDetail/ArticleContent";
import { ActivityLongDesc } from "./ActivityLongDesc";

export const CardActivity = ({ activities, loadMore, items }) => {
    console.log('=sadsa===================================');
    console.log(activities);
    console.log('====================================');
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [imageIndex, setImageIndex] = useState(0);
    const [cardImageIndex, setCardImageIndex] = useState({});

    const handleOpenModal = (index) => {
        setSelectedIndex(index);
        setImageIndex(0);
    };

    const handleCloseModal = () => {
        setSelectedIndex(null);
        setImageIndex(0);
    };

    const handlePrevImage = () => {
        setImageIndex((prev) => (prev > 0 ? prev - 1 : activities[selectedIndex].imageUrl.length - 1));
    };

    const handleNextImage = () => {
        setImageIndex((prev) => (prev < activities[selectedIndex].imageUrl.length - 1 ? prev + 1 : 0));
    };

    const handlePrevActivity = () => {
        setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : activities.length - 1));
        setImageIndex(0);
    };

    const handleNextActivity = () => {
        setSelectedIndex((prevIndex) => (prevIndex < activities.length - 1 ? prevIndex + 1 : 0));
        setImageIndex(0);
    };

    const handlePrevCardImage = (idx) => {
        setCardImageIndex((prev) => ({
            ...prev,
            [idx]: prev[idx] > 0 ? prev[idx] - 1 : activities[idx].imageUrl.length - 1,
        }));
    };

    const handleNextCardImage = (idx) => {
        setCardImageIndex((prev) => ({
            ...prev,
            [idx]: prev[idx] < activities[idx].imageUrl.length - 1 ? prev[idx] + 1 : 0,
        }));
    };


    return (
        <>
            <section className="mx-5 md:mx-24 2xl:mx-80">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-1 md:gap-2 auto-cols-auto">
                    {activities.map((el, idx) => (
                        <div
                            key={idx}
                            onClick={() => handleOpenModal(idx)}
                            className={`relative group cursor-pointer rounded-xl md:rounded-2xl overflow-hidden
                                     ${idx % 6 === 0 ? "md:col-span-2  md:row-span-2 " : "col-span-1 row-span-1"}
                                     ${idx % 5 === 0 ? "md:col-span-1 col-span-2 row-span-1" : "col-span-1 row-span-1"}
                                     `}
                        >
                            <Image
                                width={500}
                                height={500}
                                className="w-full h-full min-h-[25vh] object-cover group-hover:brightness-90 duration-300"
                                src={el.imageUrl[cardImageIndex[idx] || 0]}
                                alt={el.title}
                            />
                            {el.imageUrl.length > 1 && (
                                <>
                                    <button onClick={(e) => { e.stopPropagation(); handlePrevCardImage(idx); }} className="absolute group-hover:opacity-100 opacity-0 duration-300 cursor-pointer left-4 top-1/2 transform invert -translate-y-1/2 p-1 bg-black/50 text-white z-40 rounded-full">
                                        <IoIosArrowBack />
                                    </button>
                                    <button onClick={(e) => { e.stopPropagation(); handleNextCardImage(idx); }} className="absolute group-hover:opacity-100 opacity-0 duration-300 cursor-pointer right-4 top-1/2 transform invert -translate-y-1/2 p-1 bg-black/50 text-white z-40 rounded-full">
                                        <IoIosArrowForward />
                                    </button>
                                </>
                            )}
                            <div className="absolute inset-0 flex items-end p-1 md:p-3">
                                <h1 className={`${el.ig === true && "scale-0 group-hover:scale-100 translate-y-full group-hover:translate-y-0"} duration-300 text-white md:text-sm bg-black/25 px-2 py-1 rounded-lg backdrop-blur-lg truncate text-[10px]`}>
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
                        className="absolute top-2 right-2 text-[39px] hover:bg-black rounded-full text-white z-50"
                        onClick={handleCloseModal}
                    >
                        <IoIosClose />
                    </button>
                    <div className="relative flex flex-col md:flex-row w-full md:min-h-[87.5lvh] md:max-h-[87.5lvh] max-w-5xl bg-bgLight dark:bg-darkColor rounded-3xl overflow-hidden">
                        <div className="md:w-2/3 bg-black/90 dark:bg-black/40 flex items-center justify-center relative overflow-hidden">
                            <Image
                                width={500}
                                height={500}
                                src={activities[selectedIndex].imageUrl[imageIndex]}
                                alt={activities[selectedIndex].title}
                                className="w-full h-full max-h-[55lvh] md:max-h-full object-contain z-20"
                            />
                            <Image
                                width={1}
                                height={1}
                                src={activities[selectedIndex].imageUrl[imageIndex]}
                                alt={activities[selectedIndex].title}
                                className="w-full h-full object-cover absolute inset-0 z-10 blur-xl scale-125"
                            />
                            {activities[selectedIndex].imageUrl.length > 1 && (
                                <>
                                    <button onClick={handlePrevImage} className="absolute z-20 left-4 p-2 bg-black/50 text-white rounded-full">
                                        <IoIosArrowBack />
                                    </button>
                                    <button onClick={handleNextImage} className="absolute z-20 right-4 p-2 bg-black/50 text-white rounded-full">
                                        <IoIosArrowForward />
                                    </button>
                                </>
                            )}
                        </div>

                        <div className="md:w-1/3 flex flex-col relative">
                            <div className="absolute w-full backdrop-blur-md flex p-4 items-center gap-2 border-b pb-3 border-neutral-500/50">
                                <Image src={'/Artboard2.png'} className="w-5 md:w-8" width={30} height={30} alt="Ganesha Logo" />
                                <a
                                    href=""
                                    className="text-sm md:text-base font-[500] bg-gradient-to-br dark:from-white dark:via-baseColor dark:to-mainColor from-gray-800 via-mainColor to-baseColor bg-clip-text text-transparent"
                                >
                                    Ganesha Consulting
                                </a>
                            </div>
                            <div className="flex flex-col justify-between h-full p-4 py-14 md:py-16 md:max-h-full max-h-[30lvh] overflow-x-scroll noBar">
                                <div>
                                    <h3 className="md:text-lg font-bold">{activities[selectedIndex].title}</h3>
                                    {activities[selectedIndex].longDesc === null ?
                                        (
                                            <p className="text-sm mt-2">{activities[selectedIndex].description}</p>
                                        )
                                        :
                                        (
                                            <>
                                                <ActivityLongDesc content={activities[selectedIndex].longDesc} />
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="absolute bottom-0 flex items-center gap-2 w-full">
                                <div className="px-5 py-2 md:py-3 w-full flex items-center gap-2 border-t border-neutral-500/50 backdrop-blur-md">
                                    <p className="text-xs md:text-sm text-neutral-500">
                                        {formatDate(activities[selectedIndex].date)}
                                    </p>
                                    {activities[selectedIndex].location !== null && (
                                        <p className="text-xs md:text-sm text-neutral-500">
                                            - {activities[selectedIndex].location}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="hidden md:block">
                        <button
                            onClick={handlePrevActivity}
                            className="absolute left-4 top-1/2 transform invert -translate-y-1/2 p-2 text-xl bg-black/80 text-white hover:bg-black rounded-full"
                        >
                            <IoIosArrowBack />
                        </button>
                        <button
                            onClick={handleNextActivity}
                            className="absolute right-4 top-1/2 transform invert -translate-y-1/2 p-2 text-xl bg-black/80 text-white hover:bg-black rounded-full"
                        >
                            <IoIosArrowForward />
                        </button>
                    </div>

                    <div className="absolute bottom-[-3px] space-x-5 md:hidden">
                        <button
                            onClick={handlePrevActivity}
                            className="invert -translate-y-1/2 p-2 text-xl bg-black/80 text-white hover:bg-black rounded-full"
                        >
                            <IoIosArrowBack />
                        </button>
                        <button
                            onClick={handleNextActivity}
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
