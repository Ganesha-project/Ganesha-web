import { FaArrowDown } from "react-icons/fa6";

export const Pagination = ({ loadMore, className }) => {
    return (
        <>
            <div className="w-full h-auto flex justify-center items-center pt-10">
                <button
                    onClick={loadMore}
                    className={`${className} flex gap-2 items-center px-4 py-2 group border-2 border-mainColor text-mainColor dark:border-baseColor dark:text-baseColor dark:hover:bg-baseColor dark:hover:text-gray-800 rounded-full font-semibold duration-300 ease-in-out hover:bg-mainColor hover:text-white`}
                >
                    Load More <FaArrowDown className="group-hover:animate-bounce" />
                </button>
            </div>
        </>
    );
};