import { DataPageLegal } from "@/app/Database"
import { Title } from "../Title"

export const WhyLegal = () => {
    return (
        <>
            <section className="md:mx-24 mx-5 py-20 space-y-10">
                <Title text={'Mengapa Legalitas Usaha Diperlukan?'} className={'!text-cyan-800 dark:!text-cyan-300'} />
                <div className="flex flex-col justify-center gap-5">
                    {DataPageLegal.whyLegal.map((el, idx) => (
                        <div key={idx}
                            className="space-y-2"
                        >
                            <h1 className="text-cyan-600 dark:text-cyan-200 font-bold text-xl">
                                {el.title}
                            </h1>
                            <div className="flex flex-col md:flex-row gap-3">
                                {el.points.map((el, idx) => (
                                    <div key={idx} className="md:w-[50%] hover:w-[100%] duration-300 ease-in-out p-5 !grow bg-cyan-100 dark:bg-opacity-20 rounded-3xl">
                                        <h2 className="font-semibold mb-2 text-cyan-800 dark:text-cyan-300 text-lg">
                                            {el.heading}
                                        </h2>
                                        <h3 className="text-justify">
                                            {el.description}
                                        </h3>
                                    </div>

                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}