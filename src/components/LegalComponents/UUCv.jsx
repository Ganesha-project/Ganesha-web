import { dataPageCV } from "@/app/Database"
import { Title } from "../Title"

export const UUCv = () => {
    return (
        <>
            <section className="md:mx-24 mx-5 py-10 space-y-10">
                <div className="flex items-center justify-center">
                    <Title text={'Undang Untang Terkait'} className={'!text-orange-700 dark:!text-orange-300 px-3 py-2 bg-orange-100 rounded-full dark:bg-opacity-30 w-fit'} />
                </div>
                <div className="flex flex-wrap gap-5 justify-center">
                    {dataPageCV.undangUndangTerkait.map((el, idx) => (
                        <>
                            <div key={idx} className="md:w-[30%] p-5 bg-orange-200 rounded-3xl dark:bg-opacity-25 flex flex-col gap-2 h-auto ">
                                <h1 className=" md:text-2xl font-semibold text-center mb-5 text-orange-700 dark:text-orange-300">
                                    {el.title}
                                </h1>
                                <ul className="">
                                    {el.points.map((el, idx) => (
                                        <li key={idx} className="list-item list-decimal mx-5 grow">
                                            {el}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    ))}
                </div>
            </section>
        </>
    )
}