import { dataPageCV } from "@/app/Database"
import { Title } from "../Title"

export const  WhyCv = () => {
    return (
        <>
            <section className="md:mx-24 mx-5 py-10 md:py-20 space-y-10">
                <Title text={'Mengapa Legalitas Usaha Diperlukan?'} className={'!text-orange-700 dark:!text-orange-300'} />
                <div className="flex flex-wrap gap-5 justify-center">
                    {dataPageCV.whyCV.map((el, idx) => (
                        <div key={idx} className="space-y-5 md:w-[30%] dark:bg-opacity-15 bg-orange-300 rounded-3xl">
                            <h1 className="p-3 text-center font-extrabold text-xl bg-orange-500 dark:bg-opacity-25 rounded-full">
                                {el.title}
                            </h1>
                            <div className="space-y-3 pb-5">
                                {el.points.map(e => (
                                    <ul className="px-7 text-justify">
                                        <li className="list-item list-disc">
                                            {e}
                                        </li>
                                    </ul>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}