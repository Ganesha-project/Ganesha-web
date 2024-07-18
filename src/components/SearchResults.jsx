import { FiSearch } from "react-icons/fi";
import Link from "next/link";

export const SearchResults = ({ results }) => {
    return (
        <div className="flex flex-col gap-3 items-center w-full group">
            {results.length > 0 ? (
                results.map((result, idx) => (
                    <Link href={result.href} key={idx} className="p-5 group flex items-center gap-3 w-full group-hover:rounded-2xl border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-950 duration-200 ease-in-out">
                        <div className="hidden md:block flex-shrink-0 p-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full">
                            <FiSearch className="text-xl" />
                        </div>
                        <div>
                            <h2 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                                <span className="block md:hidden">
                                    <FiSearch/>
                                </span>
                                {result.text}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                {result.keywords.join(", ")}
                            </p>
                        </div>
                    </Link>

                ))
            ) : (
                <p className="text-gray-600 dark:text-gray-400 text-center">No results found</p>
            )}
        </div>
    );
};
