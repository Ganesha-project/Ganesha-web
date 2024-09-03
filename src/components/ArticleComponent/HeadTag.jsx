import { DataSelectFilterArticle } from "@/app/Database";
import { FaSort } from "react-icons/fa6"

export const Headtag = ({ label, visibility, children, filter, hide, setSortOrder }) => {
    const handleSort = (order) => {
        setSortOrder(order);
    };

    return (
        <>
            <div className={`${visibility} flex items-center justify-between`}>
                <h1 className="text-mainColor dark:text-baseColor text-2xl font-semibold">
                    {label || 'Latest Update'}
                </h1>
                {children ? (
                    { children }
                ) : filter === true ? (
                    <>
                        <div className="dropdown dropdown-bottom dropdown-end flex justify-end">
                            <div tabIndex={0} role="button" className="flex items-center gap-2 px-4 py-2 rounded-full dark:bg-baseColor dark:bg-opacity-20 bg-white shadow bg-opacity-80 backdrop-blur-xl truncate font-semibold dark:text-white text-mainColor">
                                <FaSort />
                                Sort By
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu bg-white dark:bg-black dark:shadow-mainShadow rounded-box z-[1] w-52 p-2 shadow">
                                {DataSelectFilterArticle.map((el, idx) => (
                                    <li key={idx}>
                                        <a
                                            className="capitalize cursor-pointer"
                                            onClick={() => handleSort(el.value)}
                                        >
                                            {el.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                ) : hide === true ? (
                    <>
                    </>
                ) : (
                    <a href=""
                        className="px-3 py-1 bg-baseColor dark:text-gray-900 dark:hover:text-white text-white rounded-full font-semibold duration-300 ease-in-out hover:bg-mainColor"
                    >
                        See More
                    </a>
                )}
            </div>
        </>
    );
}
