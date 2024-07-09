'use client'
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

export const ExpandableButton = ({ children }) => {
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState('0px');
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(isExpanded ? `${contentRef.current.scrollHeight + 20}px` : '0px');
        }
    }, [isExpanded]);

    return (
        <>
            <div
                className="overflow-hidden transition-all duration-700 ease-in-out"
                style={{ maxHeight: contentHeight }}
            >
                <div ref={contentRef} className="">
                    {children}
                </div>
            </div>
            <div className="flex items-center justify-center">
                <button
                    className={`${isExpanded ? "animate-none" : "animate-pulse"} bg-mainColor px-4 py-2 gap-2 font-semibold dark:text-gray-800 dark:bg-baseColor text-white flex items-center rounded-full transition duration-300 ease-in-out transform hover:scale-105`}
                    onClick={toggleExpand}
                >
                    Cek Semua Produk

                    <div className={`${isExpanded ? 'rotate-180' : 'rotate-0'} duration-300 ease-in-out text-xl`}>
                        <IoIosArrowDropdown />
                    </div>
                </button>
            </div>
        </>
    )
}