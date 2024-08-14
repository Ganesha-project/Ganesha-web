import { BsFillQuestionCircleFill } from "react-icons/bs"

export const Faqs = ({ data, text, color, className, iconClassName, icons, className2 }) => {
    return (
        <>
            <section className="md:m-24 m-5 space-y-5">
                <h1 className={`${className} text-xl md:text-4xl font-semibold !text-${color}-800 dark:!text-${color}-300 text-center flex items-center gap-2 justify-center`}>
                    {text}
                    <div className={iconClassName}>
                        {icons}
                    </div>
                </h1>
                {data.map((el, idx) => (
                    <div key={idx} className={`collapse collapse-plus h-fit `}>
                        <input type="checkbox" className="w-full" name="my-accordion-3" />
                        <div className={`${className2} collapse-title flex items-center gap-3 text-xl font-medium rounded-full dark:bg-opacity-25 bg-${color}-100`}>
                            <BsFillQuestionCircleFill />
                            {el.question}
                        </div>
                        <div className="collapse-content">
                            <div className={`bg-${color}-100 dark:bg-opacity-30 mt-3 rounded-3xl p-5`}>
                                {el.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}