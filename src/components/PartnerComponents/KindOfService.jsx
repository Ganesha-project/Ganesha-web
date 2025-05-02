import { Title } from "../Title"

export const KindOfService = ({ data, text, text1 }) => {
    return (
        <>
            <section className="md:m-24 m-5 2xl:mx-80 py-10 md:py-16 space-y-10">
                <Title text={text} text1={text1} />
                <div className={`${data.length >= 3 ? "flex flex-wrap" : "flex md:flex-row flex-col"}  gap-5 md:justify-evenly`}>
                    {data.map((el, idx) => (
                        <div key={idx} className={`${idx === 0 && data.length <= 3 ? "md:w-[50%]" : "md:w-[25%]"} ${data.length >= 3 ? "md:hover:scale-105 hover:shadow-mainShadow origin-bottom" : "md:hover:w-[100%]"} grow overflow-hidden flex flex-col min-w-[100%] md:min-w-[5%] ease-in-out transition-all duration-500 space-y-5 dark:from-[#1f1f1f] dark:to-black from-neutral-200 to-white bg-gradient-to-b rounded-3xl p-6 md:p-10`}>
                            <span className="text-3xl md:text-5xl mb-5">
                                {el.icon}
                            </span>
                            <div className="space-y-2">
                                <h1 className="font-bold text-2xl md:text-3xl bg-gradient-to-tr dark:from-neutral-100 from-neutral-800 dark:via-neutral-300 via-neutral-600 to-sky-800 dark:to-sky-300 bg-clip-text text-transparent">
                                    {el.type}
                                </h1>
                                <h2 className="text-sm">
                                    {el.description}
                                </h2>
                            </div>
                        </div>
                    ))}  
                </div>
            </section >
        </>
    )
}