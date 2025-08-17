import { slugify } from "@/helper/slugify";
import Link from "next/link";

export const TilesFilter = ({ categories }) => {
    // Extract unique categories dari data yang sudah difilter
    const uniqueCategories = [];

    if (categories?.data) {
        categories.data.forEach(category => {
            const categoryName = category?.attributes?.ArticleCategory;
            if (categoryName && !uniqueCategories.some(cat => cat.name === categoryName)) {
                uniqueCategories.push({
                    name: categoryName,
                    slug: category?.attributes?.Slug || slugify(categoryName)
                });
            }
        });
    }

    return (
        <>
            <div className="flex md:flex-row flex-col justify-between gap-5 -mx-5 md:-mx-0">
                <div className="carousel2 md:flex gap-2 py-2 -my-2">
                    {/* Add "All" category as first option */}
                    <Link
                        href="/article"
                        className="ml-5 md:ml-0 text-xs md:text-sm flex items-center gap-2 px-4 py-2 rounded-full bg-baseColor/20 hover:bg-mainColor hover:text-white dark:hover:text-baseColor duration-200 dark:text-white text-neutral-900"
                    >
                        <span className="capitalize font-semibold truncate">
                            Semua Kategori
                        </span>
                    </Link>

                    {uniqueCategories.map((category, idx) => (
                        <Link
                            href={`/article/${category.slug}`}
                            key={idx}
                            className={`${idx === uniqueCategories.length - 1 ? 'mr-5 md:mr-0' : ''} text-xs md:text-sm flex items-center gap-2 px-4 py-2 rounded-full bg-baseColor/20 hover:bg-mainColor hover:text-white dark:hover:text-baseColor duration-200 dark:text-white text-neutral-900`}
                        >
                            <span className="capitalize font-semibold truncate">
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}