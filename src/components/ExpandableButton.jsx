'use client'
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowDropdown } from "react-icons/io";

export const ExpandableButton = ({ children, label, className, order, align }) => {
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
            <div className={`${align} flex flex-col`}>
                <div className={`${order} overflow-hidden transition-all duration-700 ease-in-out`}
                    style={{ maxHeight: contentHeight }}
                >
                    <div ref={contentRef} className="">
                        {children}
                    </div>
                </div>

                <button
                    className={`${className} dark:text-white text-gray-900 flex items-center gap-1 rounded-full transition duration-300 ease-in-out transform`}
                    onClick={toggleExpand}
                >
                    {label}

                    <div className={`${isExpanded ? 'rotate-180' : 'rotate-0'} duration-300 ease-in-out text-xl`}>
                        <IoIosArrowDown />
                    </div>
                </button>
            </div>
        </>
    )
}