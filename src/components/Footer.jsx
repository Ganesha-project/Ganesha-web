import { BtmNavigationLinks, dataContact, NavLinks } from "@/app/Database"
import { ExpandableButton } from "./ExpandableButton"

export const Footer = () => {
    return (
        <>
            <footer className="h-full mt-5 md:px-24 2xl:px-80">
                <div className="w-full h-full px-5 py-5 bg-gray-200 dark:bg-darkColor rounded-t-[35px] bg-opacity-20 dark:bg-opacity-50 ">
                    <div className="flex md:flex-row gap-5 flex-col md:items-center md:justify-between">
                        <div className="md:w-[50%] flex items-center gap-3">
                            <img
                                width={40}
                                height={40}
                                src="https://www.ganeshaconsulting.co.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FArtboard2.b33b65bb.png&w=96&q=75"
                                alt="Ganesha Consulting Logo"
                            />
                            <p className="font-bold text-lg">
                                PT Ganesha Multi Kreatif
                            </p>
                        </div>

                        <div className="md:w-[40%] flex md:justify-end items-center">
                            <p className="md:block hidden w-fit  font-bold text-lg bg-baseColor bg-opacity-10 px-5 py-[10px] rounded-l-full">
                                Connect With Us!
                            </p>
                            <div className="md:flex carousel md:max-w-[60%] items-center gap-4 md:gap-5 px-1 py-1 rounded-l-full md:rounded-l-none w-full md:w-full justify-between rounded-r-full bg-gray-100 dark:bg-darkColor">
                                {[...dataContact.media, ...dataContact.phone, ...dataContact.mail].map((el, idx) => (
                                    <a
                                        key={idx}
                                        href={el.link}
                                        className="text-2xl px-2 py-2 hover:bg-white dark:hover:bg-black duration-200 rounded-full"
                                    >
                                        {el.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[2px] bg-stone-300 dark:bg-stone-600 rounded-full mt-5 mb-10" />

                    <div className="flex md:items-start items-center text-center md:text-start md:justify-between md:flex-row flex-col gap-10 md:gap-5">
                        <div className="md:w-[30%]">
                            <p className="uppercase text-sm font-semibold text-mainColor dark:text-baseColor tracking-wide mb-5">
                                Address
                            </p>
                            <div className="space-y-4">
                                {dataContact.address.map((el, idx) => (
                                    <div key={idx} className="flex items-center md:items-start flex-col gap-1">
                                        <span className="text-xs w-fit uppercase">
                                            {el.label}
                                        </span>
                                        <h3 className="font-medium">
                                            {el.data}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="md:w-[15%]">
                            <p className="uppercase text-sm font-semibold text-mainColor dark:text-baseColor tracking-wide mb-5">
                                About
                            </p>
                            <div className="space-y-4">
                                {NavLinks.others
                                    .sort((a, b) => a.sort - b.sort)
                                    .map((el, idx) => (
                                        <div key={idx} className="flex flex-col">
                                            <a href={el.href} className="font-medium link link-hover">
                                                {el.label}
                                            </a>
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div className="md:w-[15%]">
                            <p className="uppercase text-sm font-semibold text-mainColor dark:text-baseColor tracking-wide mb-5">
                                Our Services
                            </p>
                            <div className="space-y-4">
                                {[...BtmNavigationLinks.legalities]
                                    .slice(1, 4)
                                    .map((el, idx) => (
                                        <div key={idx} className="flex flex-col">
                                            <a href={el.href} className="font-medium link link-hover">
                                                {el.label}
                                            </a>
                                        </div>
                                    ))}
                                <ExpandableButton align={'md:items-start items-center'} label={'More'} classNameInner={'space-y-4'} className={'font-medium'}>
                                    {[...BtmNavigationLinks.legalities]
                                        .map((el, idx) => (
                                            <div key={idx} className="flex flex-col">
                                                <a href={el.href} className="font-medium link link-hover">
                                                    {el.label}
                                                </a>
                                            </div>
                                        ))}
                                </ExpandableButton>
                            </div>
                        </div>
                        <div className="md:w-[15%]">
                            <p className="uppercase text-sm font-semibold text-mainColor dark:text-baseColor tracking-wide mb-5">
                                Permit
                            </p>
                            <div className="space-y-4">
                                {BtmNavigationLinks.other.map((el, idx) => (
                                    <div key={idx} className="flex lex-col">
                                        <a href={el.href} className="font-medium link link-hover">
                                            {el.label}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="dark:bg-darkColor bg-gray-200 rounded-full bg-opacity-50 mt-10 text-right object-right flex justify-center lg:justify-center">
                        <div className="dark:text-white w-full p-5 rounded-[40px] flex justify-center items-center h-fit self-end">
                            <span>© 2024 Copyright:{' '}</span>
                            <a
                                className="font-semibold text-neutral-600 dark:text-gray-100"
                                href="/"
                            >
                                Ganesha Consulting
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}