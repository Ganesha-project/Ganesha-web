'use client'
import Link from "next/link";
import { BtmNavigationLinks, NavLinks } from "@/app/Database";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { WALINK } from "./Links/Links";
import { RiAppsFill, RiAppsLine, RiArrowDropLeftLine, RiWhatsappFill } from "react-icons/ri";
import { IoArrowUp } from "react-icons/io5";
import { SearchNavbar } from "./SearchNavbar";

export const NavigationMobile = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isMinimized, setIsMinimized] = useState(false);

    const path = usePathname();

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

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Fungsi yang dijalankan setiap kali komponen di-mount atau nilai isVisible berubah
        const handleScroll = () => {
            // Tentukan titik scroll ketika tombol muncul
            const scrollThreshold = 200;

            // Periksa posisi scroll
            if (window.scrollY > scrollThreshold) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Pasang event listener untuk memantau scroll
        window.addEventListener('scroll', handleScroll);

        // Membersihkan event listener saat komponen di-unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Dependency array kosong agar useEffect hanya dijalankan sekali saat komponen di-mount

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Animasi scroll ke atas
        });
    };

    return (
        <>
            <section className="lg:hidden block">
                <div className={`fixed bottom-3 left-3 right-3 z-[150] duration-500 ease-in-out transition-all origin-bottom-right
                            ${visible ? 'transform translate-y-0' : 'translate-y-[120%]'}
                            ${isMinimized ? 'transform translate-x-[105%] scale-0' : 'scale-100'}
                            `}>
                    <div className="flex flex-col gap-2 w-full items-end">
                        <div className="space-x-2">
                            <Link
                                href={WALINK}
                            >
                                <button
                                    className={`${isVisible ? "" : "translate-x-[52px]"} self-end bg-[#4ded6a87] hover:bg-[#35a549] backdrop-blur-md hover:scale-95 duration-300 ease-in-out text-white font-bold text-xl p-3 rounded-full shadow-custom`}>
                                    <RiWhatsappFill className="drop-shadow-md" />
                                </button>
                            </Link>

                            <button
                                onClick={scrollToTop}
                                className={`${isVisible ? "scale-100 " : 'scale-0 translate-x-full'} bg-baseColor bg-opacity-50 duration-300 backdrop-blur-md text-xl hover:bg-mainColor hover:text-baseColor dark:text-white  text-mainColor rounded-full p-3 shadow-custom`}
                            >
                                <IoArrowUp className="drop-shadow-md" />
                            </button>
                        </div>
                        <div className="w-full flex justify-between items-center gap-2 relative">
                            <div className="flex justify-between items-center w-full py-3 px-10 shadow-custom dark:bg-[#1c1c1c] dark:bg-opacity-50 dark:shadow bg-gray-200 bg-opacity-50 backdrop-blur-md rounded-full">
                                {BtmNavigationLinks.main.map((el, idx) => (
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
                                <button
                                    onClick={() => document.getElementById('my_modal_5').showModal()}
                                    className="swap swap-rotate hover:swap-active opacity-60 hover:opacity-100 duration-300 ease-in-out !place-items-center">
                                    <span className="swap-off">
                                        <RiAppsLine className="text-xl duration-300 ease-in-out hover:drop-shadow-[0px_0px_5px_#aa0ab5] dark:hover:drop-shadow-[0px_0px_5px_#e600ff] hover:scale-[1.1] hover:animate-bounce" />
                                    </span>
                                    <span className="swap-on">
                                        <RiAppsFill className="text-xl duration-300 ease-in-out hover:drop-shadow-[0px_0px_5px_#aa0ab5] dark:hover:drop-shadow-[0px_0px_5px_#e600ff] hover:scale-[1.1] hover:animate-bounce" />
                                    </span>
                                </button>
                                <dialog id="my_modal_5" className="modal modal-bottom origin-center snap-center place-self-center">
                                    <div className="modal-box dark:bg-opacity-80 dark:bg-darkColor bg-gray-50 bg-opacity-50 backdrop-blur-lg shadow-custom space-y-5 max-h-[80%]">
                                        <SearchNavbar label={false} className={'rounded-xl !h-[40px] !outline-none !border-none '}/>
                                        <div>
                                            <h3 className="font-bold mb-3 text-[16px]">Main Menu</h3>
                                            <div className="w-full flex">
                                                {BtmNavigationLinks.drawerMain.map((el, idx) => (
                                                    <Link
                                                        key={idx}
                                                        className={`w-[25%] flex flex-col items-center justify-center gap-1`}
                                                        href={el.href}
                                                    >
                                                        <div className={`${el.accent} p-3 text-2xl w-fit rounded-full shadow-custom`}>
                                                            {el.icon}
                                                        </div>
                                                        <span className="text-[10px] text-center truncate-last-1">
                                                            {el.label}
                                                        </span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-bold mb-3 text-[16px]" >Legalitas Menu</h3>
                                            <div className="w-full flex">
                                                {BtmNavigationLinks.legalities.map((el, idx) => (
                                                    <Link
                                                        key={idx}
                                                        className={`w-[25%] flex flex-col items-center justify-center gap-1`}
                                                        href={el.href}
                                                    >
                                                        <div className={`${el.accent} p-3 text-2xl w-fit rounded-full shadow-custom`}>
                                                            {el.icon}
                                                        </div>
                                                        <span className="text-[10px] text-center truncate-last-1">
                                                            {el.label}
                                                        </span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="-mx-6">
                                            <h3 className="font-bold mb-3 text-[16px]  ml-6">Layanan Lainnya</h3>
                                            <div className="w-full carousel2 gap-8">
                                                {BtmNavigationLinks.other.map((el, idx) => (
                                                    <Link
                                                        key={idx}
                                                        className={`${idx === 0 ? 'ml-10 md:ml-0' : ''} ${idx === BtmNavigationLinks.other.length - 1 ? 'mr-10 md:mr-0' : ''} w-[25%] flex flex-col items-center justify-center gap-1`}
                                                        href={el.href}
                                                    >
                                                        <div className={`${el.accent} p-3 text-2xl w-fit rounded-full shadow-custom`}>
                                                            {el.icon}
                                                        </div>
                                                        <span className="text-[10px] text-center truncate-last-1">
                                                            {el.label}
                                                        </span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <form method="dialog" className="modal-backdrop">
                                        <button>close</button>
                                    </form>
                                </dialog>
                                <button onClick={toggleMinimize} className={`${isMinimized ? "scale-0" : "rotate-180"} bg-baseColor bg-opacity-50 h-fit -mr-7 p-1 rounded-full text-2xl flex flex-col items-center duration-300 ease-in-out`}>
                                    <RiArrowDropLeftLine />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={toggleMinimize} className={`${isMinimized ? "scale-100" : "scale-0"}  z-50 p-2 shadow-secondaryShadow bg-opacity-45 dark:bg-opacity-45 backdrop-blur-md bg-white dark:bg-darkColor rounded-full fixed bottom-5 right-5 text-3xl flex flex-col items-center duration-300 ease-in-out`}>
                    <RiArrowDropLeftLine className="drop-shadow-lg" />
                </button>

            </section>
        </>
    );
};