import { DataWhyUs } from "@/app/Database"
import { Title } from "./Title"

export const WhyUs = () => {
    return (
        <>
            <section className="md:mx-24 mx-5 space-y-8 mb-20 2xl:mx-80">
                <Title text1={'Kenapa'} text={'Harus Ganesha Consulting?'} />
                <div className="flex md:flex-row flex-col gap-5">
                    {DataWhyUs.points.map((el, idx) => (
                        <>
                            <div key={idx} className="md:h-[50lvh] group hover:brightness-110 flex flex-col min-w-[100%] md:min-w-[5%] md:w-[25%] md:hover:w-[100%] group duration-500 hover:shadow-mainShadow ease-in-out p-5 rounded-3xl bg-gradient-to-b from-[#64076f53] to-white dark:from-[#ccb3cfb9] dark:to-black dark:bg-opacity-25 hover:bg-opacity-40 dark:hover:bg-opacity-50 bg-opacity-15">
                                <div className="md:h-[10lvh] md:text-5xl text-4xl p-0 w-fit mb-5 group-hover:rotate-[360deg] duration-500 ease-in-out">
                                    {el.logo}
                                </div>
                                <div className="flex flex-col items-start">
                                    <h2 className="text-xl md:text-2xl font-semibold mb-3">
                                        {el.head}
                                    </h2>
                                    <h3 className="text-sm text-gray-600 dark:text-gray-200">
                                        {el.desc}
                                    </h3>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </section>
        </>
    )
}