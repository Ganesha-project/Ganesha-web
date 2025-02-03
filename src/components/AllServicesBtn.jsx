'use client'
import { DataProduct } from "@/app/Database"
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Title } from "./Title";
import { ExpandableButton } from "./ExpandableButton";
import { SearchResults } from "./SearchResults";
import Link from "next/link";
import { TiDelete } from "react-icons/ti";

export const AllServicesBtn = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(DataProduct);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);
        const filtered = DataProduct.filter((product) =>
            product.text.toLowerCase().includes(value) ||
            product.keywords.some(keyword => keyword.toLowerCase().includes(value))
        );
        setFilteredProducts(filtered);
    };

    const handleResetSearch = () => {
        setSearchTerm('');
        setFilteredProducts(DataProduct);
    };

    return (
        <>
            <div id="search" />
            <section className="bg-baseColor bg-opacity-10">
                <div className="md:px-24 2xl:px-80 px-5 flex space-y-5 py-14 md:py-24 flex-col h-full">
                    <Title text1={'Explore Our'} text={'Services & Products Selection'} />
                    <label className="input flex items-center gap-2 bg-opacity-60 rounded-full bg-baseColor dark:bg-opacity-10 text-gray-800 dark:text-white">
                        <div className="flex w-full items-center justify-between">
                            <div className="flex items-center gap-2">
                                <FiSearch />
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={handleSearch}
                                    placeholder="Search for a service..."
                                    className="placeholder:text-gray-800 font-semibold dark:placeholder:text-white"
                                />
                            </div>
                            {searchTerm !== "" && (
                                <button
                                    type="button"
                                    className="flex items-center gap-1 md:pr-3 p-1 md:pl-1 py-1 bg-gray-200 dark:bg-darkColor rounded-full  font-semibold md:ml-2 hover:bg-red-600 duration-300 ease-in-out"
                                    onClick={handleResetSearch}
                                >
                                    <TiDelete className="text-xl" />
                                    <span className="hidden md:block">
                                        Reset Search
                                    </span>
                                </button>
                            )}
                        </div>
                    </label>
                    {searchTerm && (
                        <div className="w-full bg-white dark:bg-baseColor dark:bg-opacity-20 md:p-5 rounded-3xl shadow-md mt-5">
                            <SearchResults results={filteredProducts} />
                        </div>
                    )}
                    <div className="flex lg:flex-row flex-col flex-wrap items-center justify-center gap-5 md:pb-5 md:gap-10">
                        {filteredProducts.slice(0, 5).map((el, idx) => (
                            <Link
                                href={el.href}
                                key={idx} className="p-5 group md:space-y-4 transition-all flex dark:bg-mainColor bg-baseColor bg-opacity-20 dark:bg-opacity-20 md:flex-col gap-3 md:justify-between items-center w-full overflow-hidden md:w-[15lvw] md:h-[15lvw] border border-secondaryColor rounded-3xl border-opacity-[100%] hover:border-opacity-[0%] hover:shadow-mainShadow hover:scale-95 translate-y-4 duration-300 ease-in-out">
                                <span className="scale-0 group-hover:scale-[10] dark:bg-black bg-white w-full h-full duration-1000 rounded-full -z-30 absolute inset-0 ease-in"></span>
                                <div className="md:h-[5rem] w-[3rem] md:w-[5rem] h-[3rem] justify-center flex items-center gap-1 group-hover:bg-mainColor ease-in-out duration-300 bg-secondaryColor bg-opacity-10 text-mainColor dark:text-baseColor group-hover:text-white text-xl md:text-3xl rounded-full font-bold ">
                                    {el.icon}
                                </div>
                                <div>
                                    <h2 className="font-semibold text-gray-900 dark:text-white text-center md:mb-3">
                                        {el.text}
                                    </h2>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <ExpandableButton label={'Cek Semua Layanan'} className={'px-3 py-2 bg-mainColor text-white w-fit font-semibold mt-5 md:mt-0'} align={'items-center'}>
                        <span className="rounded-full bg-mainColor w-full h-1"></span>
                        <div className="flex lg:flex-row flex-col flex-wrap items-center grow w-full justify-center gap-5 md:gap-10 pb-10 ">
                            {filteredProducts.slice(5).map((el, idx) => (
                                <Link
                                    href={el.href}
                                    key={idx} className="p-5 group md:space-y-4 transition-all flex dark:bg-mainColor bg-baseColor bg-opacity-20 dark:bg-opacity-20 md:flex-col gap-3 md:justify-between items-center w-full overflow-hidden md:w-[15lvw] md:h-[15lvw] border border-secondaryColor rounded-3xl border-opacity-[100%] hover:border-opacity-[0%] hover:shadow-mainShadow hover:scale-95 translate-y-4 duration-300 ease-in-out">
                                    <span className="scale-0 group-hover:scale-[10] dark:bg-black bg-white w-full h-full duration-1000 rounded-full -z-30 absolute inset-0 ease-in"></span>
                                    <div className="md:h-[5rem] w-[3rem] md:w-[5rem] h-[3rem] justify-center flex items-center gap-1 group-hover:bg-mainColor ease-in-out duration-300 bg-secondaryColor bg-opacity-10 text-mainColor dark:text-baseColor group-hover:text-white text-xl md:text-3xl rounded-full font-bold ">
                                        {el.icon}
                                    </div>
                                    <div>
                                        <h2 className="font-semibold text-gray-900 dark:text-white md:text-center md:mb-3">
                                            {el.text}
                                        </h2>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </ExpandableButton>
                </div>
            </section>
        </>
    );
};
