import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";

export const Searchbar = ({ onSearch }) => {
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
            <label className="input rounded-3xl bg-white dark:bg-baseColor dark:bg-opacity-20 bg-opacity-80 backdrop-blur-xl shadow flex items-center gap-2">
                <IoIosSearch className="hidden md:block" />
                <input
                    type="text"
                    className="grow"
                    placeholder="Find Articles..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                {searchTerm !== "" && (
                    <button
                        type="button"
                        className="flex items-center gap-1 md:pr-3 p-1 md:pl-1 py-1 bg-red-500 rounded-full text-white font-semibold md:ml-2 hover:bg-red-600 duration-300 ease-in-out"
                        onClick={handleResetSearch}
                    >
                        <TiDelete className="text-xl" />
                        <span className="hidden md:block">
                            Reset Search
                        </span>
                    </button>
                )}
                <button type="submit" className="">
                    <span className="block md:hidden p-2 bg-mainColor dark:bg-baseColor text-white dark:text-gray-800 rounded-full -mr-2">
                        <IoIosSearch />
                    </span>
                    <span className="hidden md:block md:px-3 md:py-1 btnbtncir bg-mainColor rounded-full text-white font-semibold -mr-2 hover:bg-secondaryColor duration-300 ease-in-out">
                        Search
                    </span>
                </button>
            </label>
        </form>
    );
};
