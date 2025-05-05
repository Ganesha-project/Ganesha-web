import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";

export const Searchbar = ({
    onSearch,
    placeholder = "Cari judul artikel...",
    resetButtonText = "Reset Pencarian",
    searchButtonText = "Cari",
    searchIconColor = "text-neutral-800 dark:text-white",
    resetButtonColor = "bg-red-500",
    searchButtonColor = "dark:bg-secondaryColor bg-mainColor",
    searchButtonHoverColor = "hover:bg-secondaryColor",
    resetButtonHoverColor = "hover:bg-red-600"
}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    const handleResetSearch = () => {
        setSearchTerm(""); // Reset search term
        onSearch(""); // Trigger search with empty string to reset page
    };

    return (
        <form onSubmit={handleSearchSubmit} className="md:mx-0">
            <label className={`input border-0 shadow-none w-full focus-within:bg-baseColor/20 rounded-3xl bg-baseColor/20 backdrop-blur-xl flex items-center gap-2`}>
                <IoIosSearch className={`hidden md:block ${searchIconColor}`} />
                <input
                    type="text"
                    className="grow"
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                {searchTerm !== "" && (
                    <button
                        type="button"
                        className={`flex items-center gap-1 md:pr-3 p-1 md:pl-1 py-1 ${resetButtonColor} rounded-full text-secondaryLight font-semibold md:ml-2 ${resetButtonHoverColor} duration-300 ease-in-out`}
                        onClick={handleResetSearch}
                    >
                        <TiDelete className="text-xl" />
                        <span className="hidden md:block">
                            {resetButtonText}
                        </span>
                    </button>
                )}
                <button type="submit" className="">
                    <span className={` md:block md:px-3 py-1 px-2 md:py-1 btnbtncir ${searchButtonColor} rounded-full text-white font-semibold -mr-2 ${searchButtonHoverColor} duration-300 ease-in-out`}>
                        {searchButtonText}
                    </span>
                </button>
            </label>
        </form>
    );
};
