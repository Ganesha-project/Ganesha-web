"use client";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { FiLoader } from "react-icons/fi";

export default function SearchPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleResetSearch = () => {
        setSearchTerm("");
    };

    const executeSearch = () => {
        if (searchTerm.trim() !== "") {
            const formatted = searchTerm.trim().replace(/\s+/g, "-"); // ubah spasi jadi dash
            startTransition(() => {
                router.push(`/search/${encodeURIComponent(formatted)}`);
                onClose?.();
            });
        }
    };    

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            executeSearch();
        }
    };

    return (
        <div className="md:px-24 px-5 pt-24 sticky -top-10 backdrop-blur-sm bg-white/50 dark:bg-black/50 z-20">
            <div className="w-full h-auto z-50 group">
                <label className={`${searchTerm !== "" && "!border-b"} z-[60] input input-md md:input-lg rounded-none !px-0 focus-within:!border-b focus-within:border-b-darkColor/40 dark:focus-within:border-b-lightColor/40 bg-opacity-0 focus:border-none focus:bg-none focus-within:outline-none outline-none border-0 focus:outline-transparent focus:outline-offset-0 text-gray-800 dark:text-gray-200 flex items-center gap-[6px]`}>
                    {isPending && (
                        <div className="text-4xl animate-spin" >
                            <FiLoader />
                        </div>
                    )}

                    <PiMagnifyingGlassBold className={`${searchTerm !== "" && "hidden"} order-last text-black dark:text-white text-opacity-50 dark:text-opacity-50 text-2xl md:text-3xl`} />
                    <input
                        type="text"
                        className="grow text-2xl md:text-4xl py-2 font-semibold placeholder:text-black dark:placeholder:text-white dark:placeholder:text-opacity-50 placeholder:text-opacity-50 placeholder:text-2xl md:placeholder:text-4xl placeholder:font-semibold text-darkColor dark:text-lightColor"
                        placeholder="Cari di Ganeshaconsulting.co.id"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        onKeyDown={handleKeyDown}
                    />
                    {searchTerm !== "" && (
                        <button
                            type="button"
                            onClick={handleResetSearch}
                        >
                            <RxCross2 className="text-3xl hover:text-red-600 duration-200 mr-[-6px] text-black dark:text-white text-opacity-50 dark:text-opacity-50" />
                        </button>
                    )}
                </label>
                <div className={`${searchTerm === "" && "opacity-40"} group-hover:opacity-40 opacity-0 w-full h-[1px] group-focus-within:opacity-0 bg-darkColor dark:bg-lightColor`}></div>
            </div>
        </div>
    );
}
