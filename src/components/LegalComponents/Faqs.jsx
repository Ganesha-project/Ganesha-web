import { BsFillQuestionCircleFill } from "react-icons/bs"

export const Faqs = ({ data, text, color, className, iconClassName, icons, className2 }) => {
    return (
        <>
            <section className="md:px-24 2xl:px-80 2xl:py-24 py-10 px-5 space-y-5 bg-secondaryneutral dark:bg-darkColor">
                <h1 className={`text-2xl md:text-4xl font-semibold bg-gradient-to-br dark:from-white dark:via-baseColor dark:to-mainColor from-neutral-800  via-mainColor to-baseColor bg-clip-text text-transparent flex items-center gap-2`}>
                    <div className={iconClassName}>
                        {icons}
                    </div>
                    {text}
                </h1>
                <div className="md:grid md:grid-cols-2 flex flex-col gap-2">
                    {data.map((el, idx) => (
                        <div key={idx} className={`collapse collapse-arrow`}>
                            <input type="checkbox" className="w-full" name="my-accordion-3" />
                            <div className={`${className2} min-h-[15lvh] h-full collapse-title flex items-center px-10 gap-3 md:text-xl font-medium rounded-3xl from-white to-neutral-200 dark:from-black dark:to-darkColor bg-gradient-to-tl`}>
                                <span className="h-5 w-5">
                                    <BsFillQuestionCircleFill />
                                </span>
                                {el.question}
                            </div>
                            <div className="collapse-content">
                                <div className={`-m-3 from-white to-neutral-200 dark:from-black dark:to-darkColor bg-gradient-to-bl dark:text-white mt-3 rounded-3xl p-5`}>
                                    {el.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}