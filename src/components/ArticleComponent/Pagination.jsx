import { FaArrowDown } from "react-icons/fa6";
import { LuLoader } from "react-icons/lu";
export const Pagination = ({ loadMore, className }) => {
    return (
        <>
            <div className="w-full h-auto flex flex-col justify-center items-center pt-10">
                <button
                    onClick={loadMore}
                    className={`${className} flex gap-2 items-center px-4 py-2 group text-sm bg-mainColor/20 dark:bg-baseColor/30 rounded-full font-semibold text-mainColor dark:text-baseColor hover:bg-mainColor/10 dark:hover:bg-baseColor/10 duration-300 ease-in-out`}
                >
                    Muat Lagi <FaArrowDown className="group-hover:animate-bounce" />
                </button>
            </div>
        </>
    );
};