import { slugify } from "@/helper/slugify";
import Link from "next/link";

export const TilesFilter = ({ categories }) => {
    const uniqueCategories = [];

    categories.data.forEach(el => {
        if (!uniqueCategories.includes(el?.attributes?.category?.data?.attributes?.ArticleCategory)) {
            uniqueCategories.push(el?.attributes?.category?.data?.attributes?.ArticleCategory);
        }
    });
    return (
        <>
            <div className="flex md:flex-row flex-col justify-between gap-5 -mx-5 md:-mx-0">
                <div className="carousel2 md:flex gap-2 py-2 -my-2">
                    {uniqueCategories.map((el, idx) => (
                        <Link
                            href={`/article/${slugify(el)}`} key={idx}
                            className={`${idx === 0 ? 'ml-5 md:ml-0' : ''} ${idx === uniqueCategories.length - 1 ? 'mr-5 md:mr-0' : ''} lowercase flex items-center gap-2 px-4 py-2 rounded-full dark:bg-baseColor dark:bg-opacity-20 bg-white bg-opacity-80 backdrop-blur-xl shadow hover:bg-mainColor hover:text-white dark:hover:text-baseColor duration-200 dark:text-white text-gray-900`}
                        >
                            <span className="capitalize font-semibold truncate">
                                {el}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}