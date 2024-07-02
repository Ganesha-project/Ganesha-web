import { IoIosSearch } from "react-icons/io"

export const Searchbar = () => {
    return (
        <>
            <form
                action=""
                className="md:mx-0"
            >
                <label className="input rounded-3xl bg-white bg-opacity-80 backdrop-blur-xl shadow flex items-center gap-2">
                    <IoIosSearch />
                    <input type="text" className="grow" placeholder="Find Articles..." />
                    <button className="px-3 py-1 bg-mainColor rounded-full text-white font-semibold -mr-2 hover:bg-secondaryColor duration-300 ease-in-out">
                        Search
                    </button>
                </label>
            </form>
        </>
    )
}