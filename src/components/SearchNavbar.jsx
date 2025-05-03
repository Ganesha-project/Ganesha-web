'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { PiMagnifyingGlassBold } from 'react-icons/pi';
import { RxCross2 } from 'react-icons/rx';
import { FiLoader } from 'react-icons/fi';

export const SearchNavbar = ({ className, onClose, scroll, variant = 'default' }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleResetSearch = () => {
        setSearchTerm('');
    };

    const executeSearch = () => {
        if (searchTerm.trim() !== '') {
            const formatted = searchTerm.trim().replace(/\s+/g, '-');
            startTransition(() => {
                router.push(`/search/${encodeURIComponent(formatted)}`);
                onClose?.();
            });
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            executeSearch();
        }
    };

    // ====== DEFAULT VARIANT (besar, elegan) ======
    if (variant === 'default') {
        return (
            <div className={`${className} relative space-y-5 pt-8`}>
                <div className="w-full h-auto z-50 group">
                    <label className={`${searchTerm !== "" && "!border-b"} z-[60] input input-md md:input-xl w-full input-ghost focus-within:bg-transparent rounded-none !px-0 focus-within:!border-b focus-within:border-b-darkColor/40 dark:focus-within:border-b-lightColor/40 bg-opacity-0 focus:border-none focus:bg-none focus-within:outline-none outline-none border-0 focus:outline-transparent focus:outline-offset-0 text-neutral-800 dark:text-neutral-200 flex items-center gap-[6px]`}>
                        {isPending && (
                            <div className="text-4xl animate-spin">
                                <FiLoader />
                            </div>
                        )}

                        <PiMagnifyingGlassBold className={`${searchTerm !== "" && "hidden"} order-last text-black/80 dark:text-white/80 text-2xl md:text-3xl`} />

                        <input
                            type="text"
                            className="h-12 grow text-2xl md:text-4xl py-2 font-semibold placeholder:text-black/80 dark:placeholder:text-white/80 placeholder:text-lg md:placeholder:text-4xl placeholder:font-semibold text-darkColor dark:text-lightColor"
                            placeholder="Cari di Ganeshaconsulting.co.id"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            onKeyDown={handleKeyDown}
                        />

                        {searchTerm !== '' && (
                            <button type="button" onClick={handleResetSearch}>
                                <RxCross2 className="text-3xl hover:text-red-600 duration-200 mr-[-6px] text-black dark:text-white text-opacity-50 dark:text-opacity-50" />
                            </button>
                        )}
                    </label>

                    <div className={`${searchTerm !== "" && "opacity-40"} group-hover:opacity-40 opacity-0 w-full h-[1px] group-focus-within:opacity-0 bg-darkColor dark:bg-lightColor`}></div>
                </div>
            </div>
        );
    }

    // ====== COMPACT VARIANT (rounded, kecil) ======
    return (
        <>
            <label className={`input input-ghost focus-within:bg-white dark:focus-within:bg-black !text-secondaryDark w-full h-[2.5rem] backdrop-blur-lg dark:bg-secondaryDark/80 bg-secondaryLight/80 border border-darkColor/5 dark:border-lightColor/5 rounded-full shadow-custom`}>
                <PiMagnifyingGlassBold className='text-black/50 dark:text-white/50' />
                <input
                    required
                    type="search"
                    placeholder="Search"
                    className={`${!searchTerm && !scroll && "hidden"} grow px-2 bg-transparent text-sm text-secondaryDark dark:text-lightColor outline-none`}
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onKeyDown={handleKeyDown}
                />
            </label>
        </>
    );
};
