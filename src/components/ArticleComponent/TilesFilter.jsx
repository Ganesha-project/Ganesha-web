import { slugify } from "@/helper/slugify";
import Link from "next/link";
import { Button } from "../ui/button";

export const TilesFilter = ({ categories, onChangeCategory, activeCategory = "all" }) => {
    // Extract unique categories dari data yang sudah difilter
    const uniqueCategories = [];

    if (categories?.data) {
        categories?.data?.forEach(category => {
            const categoryName = category?.name
            if (categoryName && !uniqueCategories.some(cat => cat.name === categoryName)) {
                uniqueCategories.push({
                    name: categoryName,
                    slug: category?.slug
                });
            }
        });
    }

    return (
        <>
            <div className="flex md:flex-row flex-col justify-between gap-5 -mx-5 md:-mx-0">
                <div className="carousel2 md:flex gap-2 py-2 -my-2">
                    {/* Button Semua Kategori */}
                    <Button
                        onClick={() => onChangeCategory("all")}
                        className={`ml-5 md:ml-0 text-xs md:text-sm flex items-center gap-2 px-4 py-2 rounded-full duration-200 ${
                            activeCategory === "all"
                                ? "bg-mainColor text-white dark:text-baseColor"
                                : "bg-baseColor/20 hover:bg-mainColor hover:text-white dark:hover:text-baseColor dark:text-white text-neutral-900"
                        }`}
                    >
                        <span className="capitalize font-semibold truncate">
                            Semua Kategori
                        </span>
                    </Button>

                    {/* Category Buttons */}
                    {uniqueCategories.map((el, idx) => (
                        <Button
                            onClick={() => onChangeCategory(el.slug)}
                            key={idx}
                            className={`${
                                idx === uniqueCategories.length - 1 ? 'mr-5 md:mr-0' : ''
                            } text-xs md:text-sm flex items-center gap-2 px-4 py-2 rounded-full duration-200 ${
                                activeCategory === el.slug
                                    ? "bg-mainColor text-white dark:text-baseColor"
                                    : "bg-baseColor/20 hover:bg-mainColor hover:text-white dark:hover:text-baseColor dark:text-white text-neutral-900"
                            }`}
                        >
                            <span className="capitalize font-semibold truncate">
                                {el.name}
                            </span>
                        </Button>
                    ))}
                </div>
            </div>
        </>
    )
}