"use client";
import Image from "next/image";
import { DataProduct } from "@/app/Database";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import Link from "next/link";

export const SearchBanner = () => {
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
        <section className="min-h-screen">
            <Image
                width={500}
                height={500}
                className="md:dark:brightness-100 dark:brightness-[.3] md:brightness-100 w-[85lvh] absolute bottom-0 right-0 md:blur-0 blur-[50px]"
                src="https://res.cloudinary.com/dzrh2ogbn/image/upload/f_auto,q_auto/v1/GaneshaAssets/searchBanner"
                alt=""
            />
            <div className="flex flex-col justify-center gap-3 px-5 pt-[10lvh] md:pt-[30lvh] md:px-24 md:w-[55lvw]">
                <h1 className="text-2xl font-semibold z-20">
                    Find Products & Services
                </h1>

                <label className="input rounded-3xl bg-baseColor dark:bg-baseColor dark:bg-opacity-20 bg-opacity-50 backdrop-blur-xl flex items-center gap-2">
                    <IoIosSearch className="hidden md:block text-gray-800 dark:text-white" />
                    <input
                        type="text"
                        className="grow placeholder:text-gray-800 dark:placeholder:text-white"
                        placeholder="Find..."
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

                {filteredProducts.length > 0 ? (
                    <div className="space-y-3 md:h-[42lvh] carousel carousel-vertical z-30">
                        {filteredProducts.map((el, idx) => (
                            <Link
                                href={el.href}
                                key={idx}
                                className="p-3 bg-baseColor bg-opacity-15 rounded-3xl flex items-center hover:bg-opacity-35 gap-4 ease-in-out duration-300"
                            >
                                <div className="p-3 bg-white dark:bg-secondaryGray w-fit rounded-full bg-opacity-50 dark:bg-opacity-20 text-xl">
                                    {el.icon}
                                </div>
                                <div>
                                    <h1 className="text-lg font-semibold">
                                        {el.text}
                                    </h1>
                                    <h3 className="truncate-last-1 text-gray-700 dark:text-gray-300 capitalize">
                                        {el.keywords.join(", ")}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-700 dark:text-gray-300 mt-4">
                        <p>No products found. Please try a different search term.</p>
                    </div>
                )}
            </div>
        </section>
    );
};
