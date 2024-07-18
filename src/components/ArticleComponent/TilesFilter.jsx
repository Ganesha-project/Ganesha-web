import Link from "next/link";

export const TilesFilter = ({ categories }) => {
    return (
        <>
            <div className="flex md:flex-row flex-col justify-between gap-5">
                <div className="carousel md:flex gap-2 py-2 -my-2">
                    {categories?.data?.map((el, idx) => (
                        <Link
                            href={`/articles/${el.attributes.Slug}`} key={idx}
                            className="flex items-center gap-2 px-4 py-2 rounded-full dark:bg-baseColor dark:bg-opacity-20 bg-white bg-opacity-80 backdrop-blur-xl shadow hover:bg-mainColor hover:text-white dark:hover:text-baseColor duration-200 dark:text-white text-gray-900"
                        >
                            <span className="capitalize font-semibold truncate">
                                {el.attributes.ArticleCategory}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}