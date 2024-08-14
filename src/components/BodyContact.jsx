import Image from "next/image"
import Link from "next/link"
import { dataContact } from "@/app/Database"

export const BodyContact = () => {
    return (
        <>
            <section className="m-5 lg:m-24 space-y-10">
                <div className="flex flex-col items-center lg:flex-row justify-between">
                    <Image
                        width={500}
                        height={500}
                        src={'https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236562/GaneshaAssets/yglkieiqquwszhg3vedd.svg'}
                        className="w-full lg:w-[50%] md:w-auto h-auto"
                    />
                    <div className="md:w-[50%] text-gray-900 space-y-5">
                        <h1 className="text-xl lg:text-4xl font-extrabold text-mainColor dark:text-baseColor">Kontak Kami</h1>
                        {[...dataContact.mail, ...dataContact.phone].map((el, idx) => (
                            <Link
                                key={idx}
                                href={el.link}
                                className="hover:brightness-110 ease-in-out duration-300 flex gap-4 bg-violet-100 rounded-3xl py-2 px-4">
                                <div className="text-xl md:text-3xl flex md:flex-row flex-col md:items-center gap-1 mt-1 md:mt-0 md:gap-3">
                                    <span className="text-[#42497A] flex items-center gap-2">
                                        {el.icon}
                                        <p className="block md:hidden font-semibold text-base">
                                            {el.label}
                                        </p>
                                    </span>
                                    <p className="text-xl lg:text-2xl font-extrabold">{el.data}</p>
                                </div>
                            </Link>
                        ))}
                        <div className="flex justify-end lg:justify-end gap-3">
                            {dataContact.media.slice(0, 3).map((el, idx) => (
                                <Link
                                    key={idx}
                                    href={el.link}
                                    className={`${el.class ? el.class : "bg-violet-100 "} text-[#42497A] flex hover:bg-opacity-50 flex-col w-fit items-center gap-4 rounded-[40px] p-4`}>
                                    <span className="text-2xl md:text-4xl">
                                        {el.icon}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}