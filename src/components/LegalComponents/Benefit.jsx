import { DataPageLegal } from "@/app/Database"
import { Title } from "../Title"

export const Benefit = () => {
    return (
        <>
            <section className="md:mx-24 mx-5 space-y-5">
                <Title text={'Yang Kamu Dapatkan dari pendirian PT di Ganesha Consulting'} className={'!text-cyan-800 dark:!text-cyan-300'} />
                <div className="flex flex-col md:flex-row md:flex-wrap gap-5 justify-center">
                    {DataPageLegal.benefit.map((el, idx) => (
                        <div
                            key={idx}
                            className="p-5 md:w-[30%] grow bg-cyan-100 dark:bg-opacity-15 rounded-3xl flex items-center flex-col space-y-5"
                        >
                            <span className="text-5xl text-cyan-700">
                                {el.icon}
                            </span>
                            <h1 className="font-semibold text-xl">
                                {el.text}
                            </h1>
                            <div className="flex flex-wrap justify-center w-full items-center gap-5">
                                {el?.desc?.map((el, idx) => (
                                    <div key={idx} className="md:w-[30lvh] h-auto p-2 bg-white rounded-2xl">
                                        <img
                                            src={el.url}
                                            alt={el.bank} 
                                            className="w-[30lvw] h-[10lvh] object-contain "
                                            />
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