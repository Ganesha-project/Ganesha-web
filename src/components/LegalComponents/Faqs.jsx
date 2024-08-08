import { DataPageLegal } from "@/app/Database"
import { Title } from "../Title"

export const Faqs = () => {
    return (
        <>
            <section className="md:m-24 m-5 space-y-5">
                <Title text={"FAQ"} className={"!text-cyan-700 dark:!text-cyan-300"} />
                {DataPageLegal.faqData.map((el, idx) => (
                    <div key={idx} className="collapse collapse-arrow dark:bg-opacity-25 bg-cyan-100">
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