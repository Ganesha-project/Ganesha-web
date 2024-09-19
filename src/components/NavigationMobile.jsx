'use client'

import Link from "next/link";
import { NavLinks } from "@/app/Database";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// pindahhin nanti
import { RiAppsFill, RiAppsLine, RiArrowDropLeftLine, RiBookOpenFill, RiBookOpenLine, RiHomeFill, RiHomeLine, RiSearchFill, RiSearchLine, RiWhatsappFill } from "react-icons/ri";

export const NavigationMobile = () => {
    const [isMinimized, setIsMinimized] = useState(false);

    const path = usePathname();

    const NavigationLinks = [
        {
            icon: <RiHomeLine />,
            iconActive: <RiHomeFill />,
            label: "Home",
            link: "/"
        },
        {
            icon: <RiSearchLine />,
            iconActive: <RiSearchFill />,
            label: "Search",
            link: "/services"
        },
        {
            icon: <RiBookOpenLine />,
            iconActive: <RiBookOpenFill />,
            label: "Articles",
            link: "/article"
        },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible, handleScroll]);

    const toggleMinimize = () => {
        setIsMinimized(!isMinimized);
    };

    return (
        <>
            <section className="lg:hidden block">
                <div className={`fixed bottom-3 left-3 right-3 z-[150] duration-300 ease-in-out transition-all
                            ${visible ? 'transform translate-y-0' : 'translate-y-[120%]'}
                            ${isMinimized ? 'transform translate-x-[105%]' : ''}
                    `}>
                    <div className="w-full flex justify-between items-center gap-2 relative">
                        <div className="flex justify-between items-center w-full py-3 px-10 shadow-custom dark:bg-[#1c1c1c] dark:bg-opacity-50 dark:shadow bg-gray-200 bg-opacity-50 backdrop-blur-md rounded-full">
                            {NavigationLinks.map((el, idx) => (
                                <Link href={el.link} key={idx}>
                                    <button
                                        className={`${(el.link === "/" && path === "/") || (el.link !== "/" && path.startsWith(el.link))
                                            ? "bg-gray-300 dark:bg-darkColor px-3 py-[6px] rounded-full opacity-100"
                                            : "bg-opacity-0 opacity-60"
                                            } 
                                            ${(el.link === "/" && path === "/") ? "!-ml-7" : ""} text-xl flex flex-row items-center gap-2`}
                                    >
                                        {(el.link === "/" && path === "/") || (el.link !== "/" && path.startsWith(el.link)) ? el.iconActive : el.icon}

                                        <span className={`${(el.link === "/" && path === "/") ||
                                            (el.link !== "/" && path.startsWith(el.link))
                                            ? "block font-semibold"
                                            : "hidden"
                                            } text-xs`}>
                                            {el.label}
                                        </span>
                                    </button>
                                </Link>
                            ))}
                            <div className="dropdown dropdown-top dropdown-end flex items-center">
                                <label
                                    tabIndex={0}
                                    className="swap swap-rotate hover:swap-active opacity-60 hover:opacity-100 duration-300 ease-in-out !place-items-center">
                                    <span className="swap-off">
                                        <RiAppsLine className="text-xl duration-300 ease-in-out hover:drop-shadow-[0px_0px_5px_#aa0ab5] dark:hover:drop-shadow-[0px_0px_5px_#e600ff] hover:scale-[1.1] hover:animate-bounce" />
                                    </span>
                                    <span className="swap-on">
                                        <RiAppsFill className="text-xl duration-300 ease-in-out hover:drop-shadow-[0px_0px_5px_#aa0ab5] dark:hover:drop-shadow-[0px_0px_5px_#e600ff] hover:scale-[1.1] hover:animate-bounce" />
                                    </span>
                                </label>
                                <ul tabIndex={0} className="mb-5 dropdown-content menu bg-gray-200 dark:bg-darkColor rounded-box z-[1] w-52 p-2 shadow">
                                    {NavLinks.productsAndServices.map((el, id) => (
                                        <li key={id}>
                                            <a href={el.href} className="flex items-center gap-2">
                                                <span>{el.icon}</span>
                                                <span className="font-semibold">{el.label}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button onClick={toggleMinimize} className={`${isMinimized ? "scale-0" : "rotate-180"} bg-baseColor bg-opacity-50 h-fit -mr-7 p-1 rounded-full text-2xl flex flex-col items-center duration-300 ease-in-out`}>
                                <RiArrowDropLeftLine />
                            </button>
                        </div>
                    </div>
                </div>
                <button onClick={toggleMinimize} className={`${isMinimized ? "scale-100" : "scale-0"} z-50 p-2 shadow-secondaryShadow bg-opacity-45 dark:bg-opacity-45 backdrop-blur-md bg-white dark:bg-darkColor rounded-full fixed bottom-5 right-5 text-3xl flex flex-col items-center duration-300 ease-in-out`}>
                    <RiArrowDropLeftLine />
                </button>
            </section>
        </>
    );
};