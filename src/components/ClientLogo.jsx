"use client"

import { useState, useEffect } from "react";
import { ClientsReview } from "../../public/Data/Clients";
import { Title } from "./Title";

export const ClientLogo = () => {
    const [index, setIndex] = useState(0);
    const delay = 5000; // 5 detik delay untuk auto-slide

    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        // Memastikan hanya data dengan logo yang valid (URL) yang diambil
        const withLogo = ClientsReview.filter(el => el.clientLogo && typeof el.clientLogo === 'string');
        setFilteredData(withLogo);
    }, []);

    useEffect(() => {
        if (filteredData.length > 0) {
            const timer = setTimeout(() => {
                setIndex(prevIndex => (prevIndex === filteredData.length - 1 ? 0 : prevIndex + 1));
            }, delay);
            return () => clearTimeout(timer);
        }
    }, [index, filteredData]);

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768; // Hanya untuk mobile

    return (
        <>
            <section className="block py-10 md:py-24 space-y-5">
                <Title text={'Our Clients'} className={'mb-5 md:mb-10 md:mx-24 mx-5 flex justify-center'} />
                <div className="md:mx-24 mx-0">
                    <div className={`carousel2 w-[100%] ${isMobile ? 'overflow-hidden whitespace-nowrap gap-5 space-x-3' : 'md:flex md:flex-wrap md:gap-5 md:justify-center'}`}>
                        {filteredData.map((el, idx) => (
                            <div
                                key={idx}
                                style={{ transform: `translateX(${isMobile ? -index * 100 : 0}%)` }}
                                className={`${idx === 0 ? 'ml-5 md:ml-0' : ''} ${idx === filteredData.length - 1 ? 'mr-5 md:mr-0' : ''} inline-block carousel-item transition-transform ease-in-out duration-700`}
                            >
                                <div className="dark:bg-white bg-opacity-50 rounded-[25px] h-32 w-32 flex items-center p-2 relative group">
                                    <img
                                        className="object-contain w-full h-full bg-blend-multiply"
                                        src={el.clientLogo}
                                        alt={el.ptName}
                                    />
                                    <div className="absolute inset-0 group-hover:opacity-100 opacity-0 backdrop-blur-md duration-300 bg-white flex flex-col justify-center bg-opacity-50 ease-in-out rounded-[25px]">
                                        <h4 className="text-center text-gray-900 font-semibold text-wrap">
                                            {el.ptName}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};