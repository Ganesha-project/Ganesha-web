'use client'
import { IoIosArrowDown } from 'react-icons/io';
import { RxCross2 } from "react-icons/rx";

export const MegaMenuNavbar = ({
    id,
    title,
    expandedId,
    setExpandedId,
    children,
    arrowVisibility,
    icon,
    iconClassName,
    mobile
}) => {

    const isExpanded = expandedId === id;

    const handleToggleExpand = () => {
        setExpandedId(isExpanded ? null : id);
    };


    return (
        <div
            className="relative"
            onMouseEnter={() => setExpandedId(id)}
            onMouseLeave={() => setExpandedId(null)}
        >
            {/* Trigger */}
            <div className="z-[500] relative">
                {title ? (
                    <div
                        className="cursor-pointer gap-1 py-[6px] px-3 flex items-center text-gray-800 dark:text-white rounded-full hover:bg-darkColor/5 dark:hover:bg-lightColor/5 duration-200 ease-in-out"
                        onClick={handleToggleExpand}
                    >
                        {title}
                        <span className={`${arrowVisibility} ${isExpanded ? 'rotate-180' : ''} duration-300 ease-in-out`}>
                            <IoIosArrowDown />
                        </span>
                    </div>
                ) : (
                    <label className="swap swap-rotate">
                        <input type="checkbox" onChange={handleToggleExpand} checked={isExpanded} readOnly />
                        <div className="swap-off">
                            <div className={iconClassName}>{icon}</div>
                        </div>
                        <div className="swap-on">
                            <div className={iconClassName}><RxCross2 className="text-xl" /></div>
                        </div>
                    </label>
                )}
            </div>

            {/* Mega Menu */}
            <div
                className={`fixed inset-0 top-0 left-0 w-screen pt-16 pb-24 transition-all duration-300 ease-in-out transform noBar
                         ${isExpanded ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
            >
                <div
                    onMouseEnter={() => setExpandedId(id)}
                    onMouseLeave={() => setExpandedId(null)}
                    className="2xl:px-80 md:px-24 min-h-[50lvh] pt-5 noBar">
                    {children}
                </div>
            </div>
            {mobile && (
                <div
                    className={`fixed inset-0 w-full transition-all duration-300 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] 
      ${isExpanded ? 'translate-y-0 opacity-100 pointer-events-auto h-full' : '-translate-y-5 opacity-0 pointer-events-none h-0'} 
      bg-white/70 dark:bg-black/30 backdrop-blur-sm`}
                >
                    {mobile}
                </div>
            )}



        </div>


    );
};
