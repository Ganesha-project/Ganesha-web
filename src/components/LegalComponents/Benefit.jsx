import { Title } from "../Title"

export const Benefit = ({ data, color, title, className, iconClassName, icons, opening }) => {
    return (
        <>
            <section className="md:m-24 m-5 py-10 md:py-16 space-y-5">
                <div className="space-y-1">
             
                    <Title text1={opening} text={title}/>
                </div>
                <div className={`${data?.length > 4 ? "flex flex-wrap" : "flex md:flex-row flex-col flex-nowrap"} gap-5`}>
                    {data?.map((el, idx) => (
                        <div key={idx} className="grow overflow-hidden group flex flex-col hover:shadow-mainShadow min-w-[100%] md:min-w-[5%] md:w-[25%] origin-bottom hover:scale-105 ease-in-out transition-all duration-500 space-y-5 dark:from-[#1f1f1f] dark:to-black from-gray-200 to-white bg-gradient-to-b rounded-3xl p-6 md:p-10">
                            <div className="text-3xl md:text-5xl group-hover:drop-shadow-2xl duration-300 ease-in-out">
                                {el.icon}
                            </div>
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