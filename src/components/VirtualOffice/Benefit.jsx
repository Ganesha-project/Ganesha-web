import { dataPageVO } from "../../../public/Data/VOData"

export const Benefit = () => {
    return (
        <>
            <section className="md:m-24 2xl:mx-80 m-5 py-10 md:py-16 space-y-5">
                <div className="space-y-1">
                    <span className="text-lg md:text-xl">
                        Kenapa
                    </span>
                    <h1 className="font-bold text-2xl md:text-4xl">
                        Sewa <span className="bg-gradient-to-tr dark:from-gray-100 from-gray-800 dark:via-gray-300 via-gray-600 to-sky-800 dark:to-sky-300 bg-clip-text text-transparent"> Virtual Office </span> Di Ganesha Consulting ?
                    </h1>
                </div>
                <div className="flex md:flex-row flex-col gap-5 md:justify-between">
                    {dataPageVO.benefit.map((el, idx) => (
                        <div key={idx} className="shimmer relative overflow-hidden flex flex-col min-w-[100%] md:min-w-[5%] md:w-[25%] md:hover:w-[100%] ease-in-out transition-all duration-500 space-y-5 dark:from-[#1f1f1f] dark:to-black from-gray-200 to-white bg-gradient-to-b rounded-3xl p-6 md:p-10">
                            <span className="text-3xl md:text-5xl">
                                {el.icon}
                            </span>
                            <div className="space-y-2">
                                <h1 className="font-bold text-2xl md:text-3xl bg-gradient-to-tr dark:from-gray-100 from-gray-800 dark:via-gray-300 via-gray-600 to-sky-800 dark:to-sky-300 bg-clip-text text-transparent">
                                    {el.text}
                                </h1>
                                <h2 className=" text-sm">
                                    {el.description}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}