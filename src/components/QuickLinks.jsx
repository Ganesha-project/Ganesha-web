import { dataContact } from '@/DB/Database';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

export const QuickLinks = () => {
    const links = [
        {
            title: 'Kontak',
            url: '/contact'
        },
        {
            title: 'Whatsapp',
            url: '/https://api.whatsapp.com/send?phone=628887127000&text=Halo%20Ganesha%20Consulting'

        },
        {
            title: 'iPhone',
            url: '/iphone'
        },
        {
            title: 'Watch',
            url: '/watch'
        },
        {
            title: 'AirPods',
            url: '/airpods'
        },
        {
            title: 'Accessories',
            url: '/accessories'
        },
        {
            title: 'Support',
            url: '/support'
        },
    ];

    return (
        <div className="flex flex-col gap-3 mx-5 mt-24">
            <p className='text-sm tracking-wide opacity-70 mb-2'>
                Sosial Media
            </p>
            {dataContact.media.map((link, index) => (
                <Link
                    key={index}
                    href={link.link}
                    className="opacity-80 font-medium flex items-center gap-2 w-full"
                >
                    <span className='pb-3 text-lg'>
                        {link.icon}
                    </span>
                    <div className='flex items-center justify-between gap-2 border-b pb-3 border-b-neutral-500/50 dark:border-b-neutral-100/30 w-full'>
                        {link.label}
                        <IoIosArrowForward />
                    </div>
                </Link>
            ))}
        </div>
    );
};
