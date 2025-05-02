import Image from "next/image"
import Link from "next/link"
import { dataContact } from "@/app/Database"
import { Title } from "./Title"

export const BodyContact = () => {
    return (
        <>
            <section className="md:mx-24 2xl:mx-80 mx-5 space-y-10 md:py-20 py-10">
                <Title text1={'List'} text={'Kontak Kami'} />
                <div className="flex flex-wrap gap-5">
                    <Image
                        width={500}
                        height={500}
                        src={'https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236562/GaneshaAssets/yglkieiqquwszhg3vedd.svg'}
                        className="w-full lg:w-[25%] md:w-auto h-auto p-5 rounded-3xl bg-[#F7EEFF] duration-300 ease-in-out hover:-translate-y-3 origin-bottom hover:shadow-mainShadow"
                    />
                    {[...dataContact.mail, ...dataContact.phone, ...dataContact.media].map((el, idx) => (
                        <Link
                            href={el.link}
                            key={idx}
                            className="grow flex flex-col justify-between p-5 rounded-3xl dark:bg-darkColor bg-neutral-200 hover:invert duration-300 ease-in-out hover:-translate-y-3 origin-bottom hover:shadow-mainShadow"
                        >
                            <div className="text-3xl md:text-5xl mb-10">
                                {el.icon}
                            </div>
                            <div className="flex flex-col gap-1">
                                <h1 className="font-medium text-lg md:text-xl">
                                    {el.label}
                                </h1>
                                <h2 className="font-bold text-xl bg-gradient-to-bl dark:from-secondaryColor dark:to-neutral-100 from-mainColor to-darkColor bg-clip-text text-transparent">
                                    {el.data}
                                </h2>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    )
}