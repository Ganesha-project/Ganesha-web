import { dataContact } from "@/app/Database"
import { Title } from "../Title"

export const Maps = () => {
    return (
        <>
           <section class="m-5 lg:m-24 space-y-5">
                <Title text={"Our Address"} className={'!text-red-300'} />
                <div className="flex flex-col lg:flex-row gap-5 justify-center">
                    <div className="space-y-5">
                        {dataContact.address.map((el, idx) => (
                            <div key={idx} class="self-end duration-300 hover:invert">
                                <h1 class="text-right text text-lg md:text-2xl font-extrabold px-3 py-2 bg-gray-200 dark:bg-darkColor dark:brightness-125 rounded-t-3xl pr-7">{el.label}</h1>
                                <a href="https://maps.app.goo.gl/XYd5ADAXJhwPgAKJ7" class="w-full lg:w-[40vw] hover:brightness-110 duration-300 ease-in-out flex items-center gap-4 bg-gray-100 dark:bg-darkColor rounded-b-3xl px-4 py-2 md:p-6">
                                    <p class="text-sm pb-2 md:pb-0 bg-gradient-to-tr dark:from-gray-100 from-gray-800 dark:via-gray-300 via-gray-600 to-mainColor dark:to-baseColor bg-clip-text text-transparent md:text-right md:text-xl font-extrabold">
                                        {el.data}
                                    </p>
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="mapouter rounded-3xl overflow-hidden grow h-[50lvh] md:h-auto w-full">
                        <div className="overflow-hidden rounded-box h-full">
                            <iframe
                                className="w-full h-full dark:invert dark:contrast-75"
                                src={dataContact.address[0].embed}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}