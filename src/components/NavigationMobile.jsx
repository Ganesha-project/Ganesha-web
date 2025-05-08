'use client';
import Link from "next/link";
import { BtmNavigationLinks } from "@/app/Database";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { WALINK } from "./Links/Links";
import { RiAppsFill, RiAppsLine, RiArrowDropLeftLine, RiWhatsappFill } from "react-icons/ri";
import { IoArrowUp } from "react-icons/io5";
import { SearchNavbar } from "./SearchNavbar";
import { IoIosArrowBack } from "react-icons/io";

export const NavigationMobile = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const path = usePathname();

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

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
    }, [prevScrollPos, visible]);

    const toggleMinimize = () => {
        // Jika tombol maximize ditekan, setVisible(true) untuk menampilkan navigasi
        setIsMinimized(!isMinimized);
        if (isMinimized) {
            setVisible(true); // Pasti tampilkan navigasi saat maximize
        }
    };

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 200;
            if (window.scrollY > scrollThreshold) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Fungsi pelacakan konversi Google Ads
    const gtag_report_conversion = (url) => {
        const callback = () => {
            if (typeof url === 'string') {
                window.location = url;
            }
        };
        window.gtag('event', 'conversion', {
            'send_to': 'AW-16462531026/BMEZCLa_z9QZENKT-ak9',
            'event_callback': callback,
            'event_timeout': 2000,
        });
        return false;
    };

    return (
        <>
            <section className="lg:hidden block duration-300 ease-in-out">
                <div className={`fixed bottom-3 left-3 right-3 z-[70] duration-500 ease-in-out transition-all origin-bottom-right
                            ${visible ? 'transform translate-y-0' : 'translate-y-[120%]'}
                            ${isMinimized ? 'transform translate-x-[105%] scale-0' : 'scale-100'}
                            `}>
                    <div className="flex flex-col gap-2 w-full items-end">
                        <div className="space-x-2">
                            <button
                                onClick={() => gtag_report_conversion(WALINK)}
                                className={`${isVisible ? "" : "translate-x-[52px]"} self-end bg-[#4ded6a87] hover:bg-[#35a549] backdrop-blur-md hover:scale-95 duration-300 ease-in-out text-white font-bold text-xl p-3 rounded-full shadow-custom`}
                            >
                                <RiWhatsappFill className="drop-shadow-md" />
                            </button>

                            <button
                                onClick={scrollToTop}
                                className={`${isVisible ? "scale-100 " : 'scale-0 translate-x-full'} bg-baseColor bg-opacity-50 duration-300 backdrop-blur-md text-xl hover:bg-mainColor hover:text-baseColor dark:text-white text-mainColor rounded-full p-3 shadow-custom`}
                            >
                                <IoArrowUp className="drop-shadow-md" />
                            </button>
                        </div>
                    <div className="w-full flex justify-between items-center gap-2">
                            <div className="flex justify-between items-center w-full py-2 px-9 shadow-custom bg-lightColor/80 dark:bg-darkColor/80 backdrop-blur-md rounded-full">
                                <div className="flex items-center justify-between w-full">
                                    {BtmNavigationLinks.main.map((el, idx) => (
                                        <Link href={el.link} key={idx}>
                                            <button
                                                className={`${(el.link === "/" && path === "/") || (el.link !== "/" && path.startsWith(el.link))
                                                    ? "bg-white dark:bg-black px-3 py-[6px] rounded-full opacity-100"
                                                    : "bg-opacity-0 opacity-60"
                                                    } 
                                            ${(el.link === "/" && path === "/") ? "!-ml-7" : "!-ml-4"} text-xl flex flex-row items-center gap-2`}
                                            >
                                                {(el.link === "/" && path === "/") || (el.link !== "/" && path.startsWith(el.link)) ? el.iconActive : el.icon}
                                                <span className={`${(el.link === "/" && path === "/") || (el.link !== "/" && path.startsWith(el.link)) ? "block font-semibold" : "hidden"} text-xs`}>
                                                    {el.label}
                                                </span>
                                            </button>
                                        </Link>
                                    ))}
                                    <button
                                        onClick={() => document.getElementById('my_modal_5').showModal()}
                                        className="swap swap-rotate hover:swap-active opacity-60 hover:opacity-100 duration-300 ease-in-out !place-items-center -ml-4">
                                        <span className="swap-off">
                                            <RiAppsLine className="text-xl duration-300 ease-in-out hover:drop-shadow-[0px_0px_5px_#aa0ab5] dark:hover:drop-shadow-[0px_0px_5px_#e600ff] hover:scale-[1.1] hover:animate-bounce" />
                                        </span>
                                        <span className="swap-on">
                                            <RiAppsFill className="text-xl duration-300 ease-in-out hover:drop-shadow-[0px_0px_5px_#aa0ab5] dark:hover:drop-shadow-[0px_0px_5px_#e600ff] hover:scale-[1.1] hover:animate-bounce" />
                                        </span>
                                    </button>
                                </div>

                                <button onClick={toggleMinimize} className={`${isMinimized ? "scale-0" : "rotate-180"} bg-baseColor/50 h-fit ml-7 -mr-7 p-1 rounded-full text-2xl flex flex-col items-center duration-300 ease-in-out`}>
                                    <RiArrowDropLeftLine />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={toggleMinimize} className={`${isMinimized ? "scale-100" : "translate-x-full scale-0"} shadow-[0px_2px_35px_0px_#cfa5d1] newCorner z-50 pl-[5.5px] pr-[5.5px] py-[7px] text-white bg-black rounded-l-3xl fixed bottom-5 right-0 text-[15px] flex flex-col items-center duration-300 ease-in-out`}>
                    <IoIosArrowBack className="drop-shadow-lg" />
                </button>
            </section>

            {/* Menu */}
            <dialog id="my_modal_5" className="modal modal-bottom origin-center snap-center place-self-center">
                <div className="modal-box dark:bg-opacity-80 dark:bg-darkColor bg-neutral-50 bg-opacity-50 backdrop-blur-lg shadow-custom space-y-5 rounded-t-3xl max-h-[80%]">
                    <SearchNavbar
                        variant="compact"
                        label={false}
                        className={'rounded-xl !h-[40px] !outline-none !border-none'}
                        readOnly={isDrawerOpen}
                        onFocus={() => setIsDrawerOpen(false)}
                    />
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
                        <h3 className="font-bold mb-3 text-[16px]">Legalitas Menu</h3>
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
        </>

    );
};