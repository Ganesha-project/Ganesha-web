import { DataCategoriesArticle, DataSelectFilterArticle } from "@/app/Database"
import { FaSort } from "react-icons/fa6"

export const TilesFilter = () => {
    return (
        <>
            <div className="mx-5 md:mx-0 flex md:flex-row flex-col gap-5">
                <div className="carousel md:flex gap-2 py-2 -my-2">
                    {DataCategoriesArticle.map((el, idx) => (
                        <a href={el.href} key={idx}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white bg-opacity-80 backdrop-blur-xl shadow hover:bg-mainColor hover:text-white duration-200"
                        >
                            <span className="capitalize font-semibold truncate">
                                {el.name}
                            </span>
                        </a>
                    ))}
                </div>

                <div className="flex justify-between items-center">
                    <div className="relative block md:hidden">
                        <span className="absolute top-1  w-full  h-10 z-30 text-2xl font-bold text-mainColor">
                            Trending
                        </span>
                        <div className="w-28 blur-xl h-10 bg-white "/>
                    </div>
                    <div className="dropdown dropdown-bottom dropdown-end flex justify-end">
                        <div tabIndex={0} role="button" className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow bg-opacity-80 backdrop-blur-xl truncate font-semibold text-mainColor">
                            <FaSort />
                            Sort By
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
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