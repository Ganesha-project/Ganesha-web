import { DataPageLegal } from "@/app/Database"
import { Title } from "../Title"

export const Faqs = ({ data, text, color, className, iconClassName, icons }) => {
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
                    <div key={idx} className={`collapse collapse-arrow dark:bg-opacity-25 bg-${color}-100`}>
                        <input type="checkbox" className="w-full" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">{el.question}</div>
                        <div className="collapse-content">
                            {el.answer}
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}