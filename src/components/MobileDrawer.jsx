import Link from "next/link"
import { ExpandableButton } from "./ExpandableButton"
import { NavLinks } from "@/app/Database"
import { SearchNavbar } from "./SearchNavbar"

export const MobileDrawer = () => {
    return (
        <>
            <ul className={`flex z-50 flex-col mx-5 my-10 min-h-full text-base-content noBar`}>
                <div className='flex flex-col gap-3 font-bold'>
                    {NavLinks.main.slice(0, 1).map(link => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`flex flex-col items-start group duration-200 hover:bg-white px-3 py-1 rounded-full dark:hover:bg-mainColor hover:text-mainColor dark:text-white text-gray-800 dark:hover:text-baseColor`}
                                aria-current="page"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <ExpandableButton label={'Produk & Layanan'} order={'order-last'} className={'hover:bg-baseColor px-3 py-1 rounded-xl dark:hover:bg-mainColor dark:bg-opacity-50 bg-opacity-50'}>
                            <div className={`z-10 rounded-xl mt-2 text-gray-800 dark:text-white divide-y divide-gray-100 shadow`}>
                                <ul className="text-sm text-gray-800 dark:text-white">
                                    {NavLinks.productsAndServices.map(link => (
                                        <li key={link.href} className="bg-gray-800 dark:bg-white font-medium dark:bg-opacity-10 dark:hover:bg-opacity-40 hover:bg-opacity-45 bg-opacity-5 rounded-xl block px-3 py-2 m-2 duration-300 hover:bg-[#bca0be72]">
                                            <a href={link.href}
                                                className="flex items-center gap-2"
                                            >
                                                <span>
                                                    {link.icon}
                                                </span>
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ExpandableButton>
                    </li>
                    <li>
                        <ExpandableButton label={'Legalitas'} order={'order-last'} className={'hover:bg-baseColor px-3 py-1 rounded-xl dark:hover:bg-mainColor dark:bg-opacity-50 bg-opacity-50'}>
                            <div className={`z-10 rounded-xl mt-2 text-gray-800 dark:text-white divide-y divide-gray-100 shadow`}>
                                <ul className="text-sm text-gray-800 dark:text-white">
                                    {NavLinks.legalities.map(link => (
                                        <li key={link.href} className="bg-gray-800 dark:bg-white font-medium dark:bg-opacity-10 dark:hover:bg-opacity-40 hover:bg-opacity-45 bg-opacity-5 rounded-xl block px-3 py-2 m-2 duration-300 hover:bg-[#bca0be72]">
                                            <a href={link.href}
                                                className="flex items-center gap-2"
                                            >
                                                <span>
                                                    {link.icon}
                                                </span>
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ExpandableButton>
                    </li>
                    <li>
                            <a
                                href={'/activity'}
                                className={`flex flex-col items-start group duration-200 hover:bg-white px-3 py-1 rounded-full dark:hover:bg-mainColor hover:text-mainColor dark:text-white text-gray-800 dark:hover:text-baseColor`}
                            >
                               Activity
                            </a>
                        </li>
                    {[...NavLinks.others, ...NavLinks.about].map(link => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={`flex flex-col items-start group duration-200 hover:bg-white px-3 py-1 rounded-full dark:hover:bg-mainColor hover:text-mainColor dark:text-white text-gray-800 dark:hover:text-baseColor`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                        <div className="flex flex-col justify-center gap-3 md:px-5 py-5 px-3">
                            <SearchNavbar />
                        </div>
                </div>
            </ul>
        </>
    )
}