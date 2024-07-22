import { DataWhyUs } from "@/app/Database"
import { Headtag } from "./ArticleComponent/HeadTag"
import { Title } from "./Title"

export const WhyUs = () => {
    return (
        <>
            <section className="md:mx-24 mx-5 space-y-8 mb-20 2xl:mx-80">
                <Title text={DataWhyUs.tag} />

                <div className="flex md:flex-row flex-col gap-5">
                    {DataWhyUs.points.map((el, idx) => (
                        <>
                            <div key={idx} className="group flex flex-col md:w-[25%] duration-300 hover:shadow-secondaryShadow ease-in-out md:hover:w-[50%] p-5 rounded-3xl bg-mainColor dark:bg-baseColor dark:bg-opacity-25 hover:bg-opacity-40 dark:hover:bg-opacity-50 bg-opacity-15">
                                <div className="md:text-3xl text-xl p-3 w-fit mb-5 bg-white rounded-full dark:bg-black">
                                    {el.logo}
                                </div>
                                <h2 className="text-lg md:text-xl font-semibold mb-3 text-mainColor dark:text-baseColor">
                                    {el.head}
                                </h2>
                                <h3>
                                    {el.desc}
                                </h3>
                            </div>
                        </>
                    ))}
                </div>
            </section>
        </>
    )
}