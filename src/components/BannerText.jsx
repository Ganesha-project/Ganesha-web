import Link from "next/link"

export const BannerText = ({ main, other, other2, secondary, styles, href1, href2, styleL, styleR, btn1, btn2, ganesha }) => {
    const link = "https://api.whatsapp.com/send?phone=628887127000&text=Halo%20MinGans!%20Aku%20mau%20konsultasi%20nih!"
    return (
        <>
            <div className="z-40 absolute top-[50%] md:top-[50%] lg:top-[50%] left-[35%] lg:left-[25%] md:left-[40%] ml-10 transform -translate-x-1/2 -translate-y-1/2">
                <div className="">
                    <h1 className="text-neutral-800 dark:text-white font-semibold text-xl md:text-xl lg:text-2xl md:w-[50vw]"><span className={`${styles} lg:text-clip text-transparent bg-clip-text`}>{ganesha}</span></h1>
                    <h1 className="text-neutral-800 dark:text-white font-extrabold text-6xl md:text-7xl lg:text-8xl md:w-[50vw]">{other2} <span className={`${styles} lg:text-clip text-transparent bg-clip-text rounded-3xl`}>{main}</span> {other}</h1>
                    <h1 className="mt-3 text-neutral-700 dark:text-neutral-200 font-normal text-xl lg:text-xl md:w-[47vw]">{secondary}</h1>
                    <div className="mt-4 flex flex-col md:flex-row gap-3">
                        <Link
                            href={href1}
                            className={`${styleL} text-lg w-fit p-10 text-neutral-800 backdrop-blur-sm hover:bg-opacity-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full lg:text-sm px-4 py-2 text-center md:inline-block md:order-1`}
                        >
                            {btn1}
                        </Link>
                        <Link
                            href={link}
                            className={`${styleR} text-lg w-fit p-10 text-neutral-800 backdrop-blur-sm hover:bg-opacity-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full lg:text-sm px-4 py-2 text-center md:inline-block md:order-2`}
                        >
                            {btn2}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
