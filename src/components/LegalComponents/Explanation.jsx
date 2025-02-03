import { DataPageLegal } from "@/app/Database"
import { Title } from "../Title"

export const Explanation = ({ desc, text, text1 }) => {
    return (
        <>
            <section className="from-gray-100 via-white dark:from-darkColor to-transparent bg-gradient-to-b md:my-20 my-10">
                <div className="md:px-24 px-5 2xl:px-80 from-gray-100 via-white to-transparent dark:from-darkColor dark:via-black space-y-10 bg-gradient-to-t md:py-20 py-10">
                    <Title text={text} text1={text1} />
                    <p className="md:text-2xl bg-gradient-to-bl from-darkColor via-gray-800 to-sky-500 dark:from-white dark:via-gray-200 dark:to-sky-300 bg-clip-text text-transparent">
                        {desc}
                    </p>
                </div>
            </section>
        </>
    )
}