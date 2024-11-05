import Link from "next/link";
import { WALINK } from "./Links/Links";


export const Popup = ({ isOpen, onClose, title, content }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md">
            <div className="fixed inset-0 bg-black opacity-20 shadow-none" onClick={onClose}></div>
            <div className="space-y-3">
                <div className="flex gap-3 justify-between w-full">
                    <div className="shimmer-animate bg-white dark:bg-darkColor px-6 py-3 rounded-2xl w-full">
                        <h2 className="text-xl md:text-2xl font-bold text-center bg-gradient-to-bl text-transparent bg-clip-text dark:from-secondaryColor dark:to-purple-300 from-mainColor to-purple-400">
                            {title}
                        </h2>
                    </div>
                    <button
                        className="px-6 py-2 bg-red-500 dark:bg-red-800 hover:bg-red-600 dark:hover:bg-red-900 hover:cursor-pointer font-bold text-white rounded-2xl"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
                <div className="shimmer-animate bg-white dark:bg-darkColor rounded-2xl z-10 flex flex-col items-center justify-center">
                    <div className=" p-6">{content}</div>

                </div>
                <button
                    className="shimmer-animate ease-in-out duration-300 hover:scale-95 shadow-[0px_2px_35px_0px_#5dbed6c2] hover:shadow-[0px_2px_50px_0px_#48b0cae9] dark:hover:shadow-[0px_2px_50px_0px_#5dbed6e9] dark:hover:brightness-125 hover:brightness-105 mt-10 font-bold text-lg px-5 py-3 w-full bg-gradient-to-bl dark:from-darkColor dark:to-sky-700 from-secondaryGray to-sky-300 rounded-2xl"
                >
                    <Link href={WALINK}>
                        Konsultasi Sekarang
                    </Link>
                </button>
            </div>
        </div>
    );
};
