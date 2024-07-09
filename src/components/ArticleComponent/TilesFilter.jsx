import { DataCategoriesArticle, DataSelectFilterArticle } from "@/app/Database"
import { FaSort } from "react-icons/fa6"

export const TilesFilter = () => {
    return (
        <>
            <div className="flex md:flex-row flex-col gap-5">
                <div className="carousel md:flex gap-2 py-2 -my-2">
                    {DataCategoriesArticle.map((el, idx) => (
                        <a href={el.href} key={idx}
                            className="flex items-center gap-2 px-4 py-2 rounded-full dark:bg-baseColor dark:bg-opacity-20 bg-white bg-opacity-80 backdrop-blur-xl shadow hover:bg-mainColor hover:text-white dark:hover:text-baseColor duration-200 dark:text-white text-gray-900"
                        >
                            <span className="capitalize font-semibold truncate">
                                {el.name}
                            </span>
                        </a>
                    ))}
                </div>

                <div className="flex justify-end">
                    <div className="dropdown dropdown-bottom dropdown-end flex justify-end">
                        <div tabIndex={0} role="button" className="flex items-center gap-2 px-4 py-2 rounded-full dark:bg-baseColor dark:bg-opacity-20 bg-white shadow bg-opacity-80 backdrop-blur-xl truncate font-semibold dark:text-white text-mainColor">
                            <FaSort />
                            Sort By
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-white dark:bg-black dark:shadow-mainShadow rounded-box z-[1] w-52 p-2 shadow">
                            {DataSelectFilterArticle.map((el, idx) => (
                                <>
                                    <li key={idx}>
                                        <a
                                            className="capitalize"
                                        >
                                            {el}
                                        </a>
                                    </li>
                                </>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}