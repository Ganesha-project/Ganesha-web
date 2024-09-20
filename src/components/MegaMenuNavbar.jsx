'use client'
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';
import { RxCross2 } from "react-icons/rx";

export const MegaMenuNavbar = ({ title, links, isExpanded, setIsExpanded, children, arrowVisibility, icon, iconClassName, label }) => {

    const handleToggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="relative group flex items-center">
            {title ? (
                <div
                    className="cursor-pointer gap-1 py-2 px-3 flex items-center text-gray-800 dark:text-white rounded hover:bg-slate-100 md:hover:bg-transparent dark:hover:text-baseColor hover:text-mainColor md:p-0"
                    onClick={handleToggleExpand} // Toggle on click
                    onMouseEnter={() => setIsExpanded(true)}
                    onMouseLeave={() => setIsExpanded(false)}
                >
                    {title}
                    <span className={`${arrowVisibility} group-hover:rotate-180 duration-300 ease-in-out`}>
                        <IoIosArrowDown />
                    </span>
                </div>
            ) : (
                <label
                    className="swap swap-rotate"
                    onMouseEnter={() => setIsExpanded(true)}
                    onMouseLeave={() => setIsExpanded(false)}
                >
                    {/* Hidden checkbox to control the state */}
                    <input type="checkbox" onChange={handleToggleExpand} checked={isExpanded} />

                    {/* Icon when not expanded */}
                    <div className="swap-off">
                        <div className={iconClassName}>
                            {icon}
                        </div>
                    </div>

                    {/* Icon when expanded */}
                    <div className="swap-on">
                        <div className="p-2 rounded-full bg-white bg-opacity-25 backdrop-blur-md hover:bg-opacity-100 hover:bg-mainColor hover:text-white duration-300 dark:hover:bg-secondaryColor">
                            <RxCross2 className="text-xl" />
                        </div>
                    </div>
                </label>
            )}
            {/* Mega Menu Dropdown */}
            <div
                onMouseEnter={() => setIsExpanded(true)}
                onMouseLeave={() => setIsExpanded(false)}
                className={`-z-50 fixed left-0 right-0 top-0 pt-10 transform opacity-0 max-h-0 pointer-events-none transition-all duration-500 ease-in-out origin-top bg-white dark:bg-black dark:bg-opacity-80 bg-opacity-80 backdrop-blur-lg shadow-mainShadow
                    ${isExpanded
                        ?
                        "group-hover:opacity-100 group-hover:max-h-screen md:group-hover:max-h-[800px] overflow-y-scroll noBar group-hover:pointer-events-auto "
                        :
                        "opacity-0 max-h-0 "
                    } 
                   `}
            >
                <div className={`${isExpanded ? "flex justify-center md:min-h-fit opacity-100 min-h-screen duration-300 ease-in-out transition-all" : "opacity-0 min-h-0 duration-300 ease-in-out transition-all"} `}>
                    <div className="grid gap-6 md:p-8 md:max-w-7xl w-full md:mx-auto">
                        {label ? (
                            <h1 className="text-2xl font-semibold">
                                {label}
                            </h1>
                        ) : null}
                        {links ? (
                            <div className={`${links.length <= 4 ? "flex flex-col" : "grid grid-cols-2"} -mx-3 hover:cursor-pointer`}>
                                {links.map((link, index) => (
                                    <Link
                                        href={link.href}
                                        key={link.href}
                                        className={`flex items-center px-3 py-3 gap-3 duration-300 ease-out hover:bg-baseColor dark:hover:bg-baseColor hover:bg-opacity-20 dark:hover:bg-opacity-35 hover:shadow-mainShadow rounded-box transform transition-transform ${isExpanded ? `translate-y-0 opacity-100` : `translate-y-5 opacity-0`}`}
                                        style={{ transitionDelay: `${index * 20}ms` }} // Stagger the animation
                                        onClick={() => setIsExpanded(false)} // Close menu on link click
                                    >
                                        <div className={`${link.accent} h-12 min-w-12 min-h-12 w-12 text-2xl rounded-lg flex dark:bg-opacity-70 items-center justify-center`}>
                                            {link.icon}
                                        </div>
                                        <div className="text-lg font-semibold flex flex-col">
                                            {link.label}
                                            <span className='text-sm font-normal dark:text-gray-300 text-gray-600 truncate-last-1'>
                                                {link.desc}
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div
                                onMouseEnter={() => setIsExpanded(true)}
                                onMouseLeave={() => setIsExpanded(false)}
                            >
                                {children}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
