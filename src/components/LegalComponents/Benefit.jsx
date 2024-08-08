import { DataPageLegal } from "@/app/Database"

export const Benefit = ({ color, title, className, iconClassName, icons }) => {
    return (
        <>
            <section className="md:mx-24 mx-5 space-y-5">
                <h1 className={`${className} text-xl md:text-4xl font-semibold !text-${color}-800 dark:!text-${color}-300 text-center flex items-center gap-2 justify-center`}>
                    {title}
                    <div className={iconClassName}>
                        {icons}
                    </div>
                </h1>
                <div className="flex flex-col md:flex-row md:flex-wrap gap-5 justify-center">
                    {DataPageLegal.benefit.map((el, idx) => (
                        <div
                            key={idx}
                            className={`p-5 md:w-[30%] grow bg-${color}-100 dark:bg-opacity-15 rounded-3xl flex items-center flex-col space-y-5`}
                        >
                            <span className={`text-5xl text-${color}-700`}>
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