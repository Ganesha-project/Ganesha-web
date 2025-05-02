import { BtmNavigationLinks, dataContact, NavLinks } from "@/app/Database"
import { ExpandableButton } from "./ExpandableButton"
import { TextMainGradient } from "@/utils/ReueseClass"

export const Footer = () => {
    return (
        <>
            <footer className="h-full mt-5 md:px-24 2xl:px-80">
                <div className="w-full h-full px-5 py-5 bg-lightColor/50 dark:bg-darkColor/50 rounded-t-[35px]">
                    <div className="flex md:flex-row gap-5 flex-col md:items-center md:justify-between mb-10 bg-gradient-to-b md:bg-gradient-to-t from-baseColor/15 rounded-[35px] p-5 -m-5">
                        <div className="md:w-[50%] flex items-center justify-center md:justify-start gap-2">
                            <img
                                width={40}
                                height={40}
                                className="dark:brightness-[135%]"
                                src="https://www.ganeshaconsulting.co.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FArtboard2.b33b65bb.png&w=96&q=75"
                                alt="Ganesha Consulting Logo"
                            />
                            <p className={`${TextMainGradient} font-bold text-lg`}>
                                PT Ganesha Multi Kreatif
                            </p>
                        </div>

                        <div className="md:w-fit flex md:justify-end items-center bg-baseColor/10 rounded-full px-1">
                           
                            <div className="md:flex carousel items-center gap-4 md:gap-5 md:rounded-l-none w-full md:w-full justify-between">
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
                    {/* <div className="w-full h-[2px] bg-stone-300 dark:bg-stone-600 rounded-full mt-5 mb-10" /> */}

                    <div className="flex md:items-start items-center text-center md:text-start md:justify-between md:flex-row flex-col gap-10 md:gap-5">
                        <div className="md:w-[30%]">
                            <p className="uppercase text-sm font-semibold text-mainColor dark:text-baseColor tracking-wide mb-5">
                                Alamat
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
                                Tentang Kami
                            </p>
                            <div className="space-y-4">
                                <div className="flex flex-col space-y-4">
                                    {[...NavLinks.about, ...NavLinks.others]
                                        .sort((a, b) => a.sort - b.sort)
                                        .map((el, idx) => (
                                            <a key={idx} href={el.href} className="font-medium link link-hover">
                                                {el.label}
                                            </a>
                                        ))}
                                    <a href={'/activity'} className="font-medium link link-hover">
                                        Activity
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-[15%]">
                            <p className="uppercase text-sm font-semibold text-mainColor dark:text-baseColor tracking-wide mb-5">
                                Layanan Kami
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
                                    {[...BtmNavigationLinks.drawerMain]
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
                                Cek juga
                            </p>
                            <div className="space-y-4">
                                {BtmNavigationLinks.other.map((el, idx) => (
                                    <div key={idx} className="flex flex-col md:items-start items-center">
                                        <a href={el.href} className="font-medium link link-hover">
                                            {el.label}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="dark:bg-darkColor bg-neutral-200 rounded-full bg-opacity-50 mt-10 text-right object-right flex justify-center lg:justify-center">
                        <div className="dark:text-white w-full p-5 rounded-[40px] flex justify-center items-center h-fit self-end">
                            <span>© 2026 Hak Cipta:{' '}</span>
                            <a
                                className="font-semibold text-neutral-600 dark:text-neutral-100"
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