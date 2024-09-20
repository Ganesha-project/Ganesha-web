"use client";

import Link from "next/link";
import { DataProduct } from "@/app/Database";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { TiDelete } from "react-icons/ti";

export const SearchNavbar = ({ label, className }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleResetSearch = () => {
        setSearchTerm(""); // Reset search term
    };

    const filteredProducts = DataProduct.filter(product =>
        product.keywords.some(keyword =>
            keyword.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    return (
        <div className="relative space-y-5">
            <div className="w-full h-auto z-50">
                {label === true && (
                    <h1 className="text-gray-800 dark:text-gray-200 md:text-2xl font-semibold z-20 mb-2">
                        Find Products & Services
                    </h1>
                )}

                <label className={`${className} z-[60] input text-gray-800 dark:text-gray-200 rounded-3xl bg-gray-300 dark:bg-baseColor dark:bg-opacity-30 bg-opacity-50 flex items-center gap-[6px] shadow-mainShadow`}>
                    <IoIosSearch className="text-gray-800 dark:text-gray-200 text-xl" />
                    <input
                        type="text"
                        className="grow placeholder:text-gray-800 dark:placeholder:text-gray-200 text-white"
                        placeholder="Cari Layanan"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    {searchTerm !== "" && (
                        <button
                            type="button"
                            onClick={handleResetSearch}
                        >
                            <TiDelete className="text-3xl hover:text-red-600 duration-200 mr-[-6px]" />
                        </button>
                    )}
                </label>
            </div>

            {/* Render products only when there's a search term */}
            {searchTerm !== "" && (
                <>
                    {filteredProducts.length > 0 ? (
                        <div className="space-y-3 h-auto md:max-h-[75lvh] carousel carousel-vertical w-full z-30">
                            {filteredProducts.map((el, idx) => (
                                <Link
                                    href={el.href}
                                    key={idx}
                                    style={{ transitionDelay: `${idx * 100}ms` }} // Stagger the animation
                                    className="p-3 bg-baseColor bg-opacity-15 rounded-3xl flex w-full items-center hover:bg-opacity-35 gap-4 ease-in-out duration-300"
                                >
                                    <div className="p-3 bg-white text-gray-800 dark:text-gray-200 dark:bg-secondaryGray w-fit rounded-full bg-opacity-50 dark:bg-opacity-20 text-xl">
                                        {el.icon}
                                    </div>
                                    <div>
                                        <h1 className="md:text-lg font-semibold  text-gray-800 dark:text-gray-200">
                                            {el.text}
                                        </h1>
                                        <h3 className="md:text-base text-sm truncate-last-1 text-gray-600 font-medium dark:text-gray-300 capitalize">
                                            {el.keywords.join(", ")}
                                        </h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center text-gray-700 dark:text-gray-300 mt-20">
                            <p>No products found of <span className="font-bold dark:text-baseColor text-mainColor">{searchTerm}</span>. Please try a different search term.</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};
