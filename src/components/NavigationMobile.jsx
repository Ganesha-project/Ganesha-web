'use client'

import { NavLinks } from "@/app/Database";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// pindahhin nanti
import { RiAppsLine, RiArrowDropLeftLine, RiBookOpenLine, RiHomeLine, RiSearchLine } from "react-icons/ri";

export const NavigationMobile = () => {
    const [isMinimized, setIsMinimized] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const path = usePathname();

    const NavigationLinks = [
        {
            icon: <RiHomeLine />,
            label: "Home",
            link: "/"
        },
        {
            icon: <RiSearchLine />,
            label: "Search",
            link: "/services"
        },
        {
            icon: <RiBookOpenLine />,
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

    const toggleClicked = () => {
        setIsClicked(true);
    };

    return (
        <>
            <section className="lg:hidden block">
                <div className={`fixed bottom-3 left-3 right-3 z-50 duration-300 ease-in-out transition-all
                            ${visible ? 'transform translate-y-0' : 'translate-y-[120%]'}
                            ${isMinimized ? 'transform -translate-x-[105%]' : ''}
                    `}>
                    <div className="w-full flex justify-between items-center gap-2 relative">
                        <div className="flex justify-between items-center w-full py-3 px-10 shadow-custom dark:bg-[#1c1c1c] dark:bg-opacity-50 dark:shadow bg-gray-200 bg-opacity-50 backdrop-blur-md rounded-full">
                            {NavigationLinks.map((el, idx) => (
                                <Link href={el.link} key={idx}>
                                    <button
                                        className={`${
                                            (el.link === "/" && path === "/") ||
                                            (el.link !== "/" && path.startsWith(el.link))
                                                ? "bg-gray-300 dark:bg-darkColor px-3 py-[6px] rounded-full"
                                                : "bg-opacity-0"
                                        } ${idx === 0 && path.startsWith(el.link) ? "!-ml-7" : ""} text-xl flex flex-row items-center gap-2 opacity-60`}>
                                        {el.icon}
                                        <span className={`${
                                            (el.link === "/" && path === "/") ||
                                            (el.link !== "/" && path.startsWith(el.link))
                                                ? "block font-semibold"
                                                : "hidden"
                                        } text-xs`}>
                                            {el.label}
                                        </span>
                                    </button>
                                </Link>
                            ))}
                            <div className="dropdown dropdown-top dropdown-end">
                                <button
                                    tabIndex={0}
                                    className={`text-xl flex flex-row items-center gap-2 opacity-60 group`}>
                                    <RiAppsLine className="duration-300 ease-in-out group-hover:drop-shadow-[0px_0px_5px_#aa0ab5] dark:group-hover:drop-shadow-[0px_0px_5px_#e600ff] group-hover:scale-[1.1] group-hover:animate-bounce" />
                                </button>
                                <ul tabIndex={0} className="mb-5 dropdown-content menu bg-gray-200 dark:bg-darkColor rounded-box z-[1] w-52 p-2 shadow">
                                    {NavLinks.productsAndServices.map((el, id) => (
                                        <li key={id}>
                                            <a href={el.href}>
                                                {el.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button onClick={toggleMinimize} className={`${isMinimized ? "rotate-180 scale-0" : ""} bg-baseColor bg-opacity-50 h-fit -mr-7 p-1 rounded-full text-2xl flex flex-col items-center duration-300 ease-in-out`}>
                                <RiArrowDropLeftLine />
                            </button>
                        </div>
                    </div>
                </div>
                <button onClick={toggleMinimize} className={`${isMinimized ? "scale-100" : "scale-0"} z-50 rotate-180 shadow-secondaryShadow bg-opacity-45 backdrop-blur-md bg-white rounded-full fixed bottom-3 left-3 text-3xl flex flex-col items-center duration-300 ease-in-out`}>
                    <RiArrowDropLeftLine />
                </button>
            </section>
        </>
    );
};