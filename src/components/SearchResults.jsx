import { FiSearch } from "react-icons/fi";
import Link from "next/link";

export const SearchResults = ({ results }) => {
    return (
        <div className="flex flex-col md:gap-3 items-center w-full group p-2">
            {results.length > 0 ? (
                results.map((result, idx) => (
                    <Link href={result.href} key={idx} className="p-5 group flex items-center gap-3 w-full group-hover:rounded-2xl border-neutral-300 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-950 duration-200 ease-in-out">
                        <div className="hidden md:block flex-shrink-0 p-2 bg-baseColor dark:bg-mainColor text-neutral-800 dark:text-neutral-200 rounded-full">
                            <FiSearch className="text-xl" />
                        </div>
                        <div>
                            <h2 className="font-semibold text-neutral-900 dark:text-white flex items-center gap-2">
                                <span className="block md:hidden">
                                    <FiSearch/>
                                </span>
                                {result.text}
                            </h2>
                            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                                {result.keywords.join(", ")}
                            </p>
                        </div>
                    </Link>

                ))
            ) : (
                <p className="text-neutral-600 dark:text-neutral-400 text-center">No results found</p>
            )}
        </div>
    );
};
