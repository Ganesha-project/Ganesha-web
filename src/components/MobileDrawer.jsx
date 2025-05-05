'use client';

import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { HiHome } from 'react-icons/hi';
import { AboutUsLinks, categorizedServices } from '@/DB/Database';
import ThemeSwitch from './ThemeSwitch';
import Link from 'next/link';

const CardItem = ({ cat, onClose }) => (
    <Link onClick={onClose} href={cat.href}>
        <div className="grow aspect-square group transition-transform relative overflow-hidden w-full h-full dark:bg-darkColor/50 bg-lightColor/50 rounded-3xl flex flex-col items-center justify-center p-3 hover:bg-opacity-20 hover:scale-95">
            <div
                className="absolute top-0 left-0 w-[50%] h-[50%] rounded-full blur-3xl opacity-100"
                style={{
                    backgroundColor: cat.accentLight,
                    transform: 'translate(-50%, -50%)',
                }}
            />
            <div
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    backgroundColor: cat.accentLight,
                    mixBlendMode: 'multiply',
                }}
            />
            <div className="flex flex-col items-center justify-center text-center gap-2 text-sm z-10">
                <div
                    className="text-xl p-2 rounded-full"
                    style={{
                        color: cat.accentLight,
                        backgroundColor: cat.accentDark,
                    }}
                >
                    {cat.icon}
                </div>
                <p
                    className="text-xs font-bold brightness-50 dark:brightness-100 leading-tight truncate-last-2"
                    style={{ color: cat.accentDark }}
                >
                    {cat.label}
                </p>
            </div>
        </div>
    </Link>
);

export const MobileDrawer = ({ expandedId, onClose }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const allServices = [
        ...categorizedServices.main,
        ...categorizedServices.law,
        ...categorizedServices.creative,
        ...categorizedServices.management,
        ...categorizedServices.finance,
        ...categorizedServices.workspace,
    ].filter((cat) => cat.visibility);

    const displayedServices = isExpanded ? allServices : allServices.slice(0, 6);

    const expandAnimationClass = expandedId
        ? 'opacity-100 translate-y-0 duration-500 ease-out'
        : 'opacity-0 translate-y-4 duration-500 ease-in';

    return (
        <nav className="px-5 pt-14 pb-24">
            <div className={`${expandAnimationClass} transition-transform flex flex-col gap-3`}>
                <div onClick={() => setIsExpanded(!isExpanded)} className="flex items-center justify-between">
                    <p

                        className="font-bold text-sm opacity-60 dark:opacity-70 cursor-pointer"
                    >
                        Produk & Layanan
                    </p>
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        aria-expanded={isExpanded}
                        className="text-sm font-semibold flex items-center justify-center"
                    >
                        <span className="flex items-center justify-center gap-1 opacity-60 dark:opacity-70 w-fit bg-transparent rounded-3xl px-2 py-2 text-md">
                            <IoIosArrowDown
                                className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
                            />
                        </span>
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-2">
                    {displayedServices.map((cat, index) => (
                        <CardItem onClose={onClose} key={index} cat={cat} />
                    ))}
                </div>

                <p className="font-bold opacity-60 dark:opacity-70 text-sm">Kenali Kami</p>
                <div className="grid grid-cols-3 gap-2">
                    {AboutUsLinks.filter((cat) => cat.visibility).map((cat, index) => (
                        <CardItem onClose={onClose} key={index} cat={cat} />
                    ))}
                </div>

   
            </div>
        </nav>
    );
};
