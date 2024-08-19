import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";

export const Searchbar = ({
    onSearch,
    placeholder = "Find Articles...",
    resetButtonText = "Reset Search",
    searchButtonText = "Search",
    searchIconColor = "text-gray-800 dark:text-white",
    resetButtonColor = "bg-red-500",
    searchButtonColor = "bg-mainColor",
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
            <label className={`input rounded-3xl bg-white dark:bg-baseColor dark:bg-opacity-20 bg-opacity-80 backdrop-blur-xl shadow flex items-center gap-2`}>
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
                        className={`flex items-center gap-1 md:pr-3 p-1 md:pl-1 py-1 ${resetButtonColor} rounded-full text-white font-semibold md:ml-2 ${resetButtonHoverColor} duration-300 ease-in-out`}
                        onClick={handleResetSearch}
                    >
                        <TiDelete className="text-xl" />
                        <span className="hidden md:block">
                            {resetButtonText}
                        </span>
                    </button>
                )}
                <button type="submit" className="">
                    <span className="block md:hidden p-2 rounded-full -mr-2">
                        <IoIosSearch className={`text-white ${searchButtonColor}`} />
                    </span>
                    <span className={`hidden md:block md:px-3 md:py-1 btnbtncir ${searchButtonColor} rounded-full text-white font-semibold -mr-2 ${searchButtonHoverColor} duration-300 ease-in-out`}>
                        {searchButtonText}
                    </span>
                </button>
            </label>
        </form>
    );
};
