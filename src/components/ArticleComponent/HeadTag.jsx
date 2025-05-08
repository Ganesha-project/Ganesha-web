import { DataSelectFilterArticle } from "@/app/Database";
import Link from "next/link";
import { FaSort } from "react-icons/fa6"

export const Headtag = ({ label, visibility, children, filter, hide, setSortOrder }) => {
    const handleSort = (order) => {
        setSortOrder(order); // Set order ketika user memilih opsi sort
    };

    return (
        <>
            <div className={`${visibility} flex items-center justify-between`}>
                <h1 className="text-mainColor dark:text-baseColor md:text-2xl font-semibold">
                    {label || 'Latest Update'}
                </h1>
                {children ? (
                    { children }
                ) : filter === true ? (
                    <>
                        <div className="dropdown dropdown-bottom dropdown-end flex justify-end">
                            <div tabIndex={0} role="button" className="flex text-xs md:text-sm items-center gap-2 px-4 py-2 rounded-full dark:bg-baseColor/20 bg-mainColor/10 truncate font-semibold dark:text-white text-mainColor">
                                <FaSort />
                                Urutkan
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu bg-lightColor dark:bg-darkColor dark:shadow-mainShadow rounded-3xl z-[1] w-45 p-2 mt-1 shadow">
                                {DataSelectFilterArticle.map((el, idx) => (
                                    <li key={idx}>
                                        <button
                                            className="capitalize cursor-pointer rounded-3xl"
                                            onClick={() => handleSort(el.value)} // Panggil handleSort
                                        >
                                            {el.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                ) : hide === true ? (
                    <>
                    </>
                ) : (
                    <Link href=""
                        className="px-3 py-1 bg-baseColor dark:text-neutral-900 dark:hover:text-white text-white rounded-full font-semibold duration-300 ease-in-out hover:bg-mainColor"
                    >
                        See More
                    </Link>
                )}
            </div>
        </>
    );
};