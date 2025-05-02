'use client'
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const ExpandableButton = ({ children, label, className, order, align, classNameInner, labelClassName }) => {
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
                <div
                    className={`overflow-hidden transition-all w-full duration-700 ease-in-out ${order} hover:cursor-pointer ${isExpanded ? 'max-h-[500px]' : 'max-h-0'}`}
                    style={{ maxHeight: contentHeight }}
                    onMouseEnter={() => setIsExpanded(true)}
                >
                    <div ref={contentRef} className={classNameInner}>
                        {children}
                    </div>
                </div>

                <button
                    onMouseEnter={() => setIsExpanded(true)}
                    className={`${className} dark:text-white text-neutral-900 flex items-center gap-1 rounded-full transition duration-300 ease-in-out transform`}
                    onClick={toggleExpand}
                >
                    <span className={labelClassName}>
                        {label}
                    </span>
                    <div className={`${isExpanded ? 'rotate-180' : 'rotate-0'} duration-300 ease-in-out text-xl `}>
                        <IoIosArrowDown />
                    </div>
                </button>
            </div>
        </>
    )
}
