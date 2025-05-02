'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import { WALINK } from "./Links/Links";
import { createPortal } from "react-dom";
import { RxCross2 } from "react-icons/rx";

export const Popup = ({ content }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 flex items-center justify-center z-[9999] backdrop-blur-[5px]">
            {/* backdrop */}
            <div className="fixed inset-0 bg-black opacity-20" onClick={() => setIsOpen(false)}></div>

            {/* popup content */}
            <div className="space-y-3 relative z-10">
                <button
                    className="btn btn-circle btn-ghost border-0 shadow-none hover:scale-95 duration-300 bg-darkColor/10 dark:bg-lightColor/10 text-white absolute top-[-55px] right-0"
                    onClick={() => setIsOpen(false)}
                >
                    <RxCross2 />
                </button>

                <div className="shimmer-animate rounded-2xl flex flex-col items-center justify-center">
                    {content}
                </div>

                <button
                    className="shimmer-animate ease-in-out duration-300 hover:scale-95 shadow-[0px_2px_35px_0px_#5dbed6c2] hover:shadow-[0px_2px_50px_0px_#48b0cae9] dark:hover:shadow-[0px_2px_50px_0px_#5dbed6e9] dark:hover:brightness-125 hover:brightness-105 font-bold text-lg px-5 py-3 w-full bg-gradient-to-bl dark:from-darkColor dark:to-sky-700 from-secondaryneutral to-sky-300 rounded-2xl"
                >
                    <Link href={WALINK}>
                        Konsultasi Sekarang
                    </Link>
                </button>
            </div>
        </div>,
        document.body
    );
};
