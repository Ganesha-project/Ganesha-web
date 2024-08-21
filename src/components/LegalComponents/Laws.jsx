import { Title } from "../Title"

export const Laws = ({ text, text1, data, classNameTitle }) => {
    return (
        <>
            <section className="md:mx-24 mx-5 space-y-10 md:py-20 py-10">
                <Title text1={text1} text={text} />
                <div className="md:grid md:grid-cols-2 flex flex-col gap-5">
                    {data.map((el, idx) => (
                        <div key={idx} className="space-y-10 p-5 md:p-10 rounded-3xl dark:from-darkColor dark:to-transparent bg-gradient-to-b from-gray-200 to-transparent duration-300 ease-in-out hover:scale-105 origin-bottom hover:brightness-105 hover:shadow-mainShadow">
                            <div className="h-14 w-14 bg-gradient-to-bl dark:from-darkColor dark:to-sky-600 from-gray-200 to-sky-300 rounded-full flex items-center justify-center text-2xl md:text-4xl">
                                {el.number}
                            </div>
                            <div className="space-y-3">
                                <h1 className={`${classNameTitle} font-medium`}>
                                    {el.text}
                                </h1>
                                {el.points ? (
                                    <ul className="list-item list-disc ml-4">
                                        {el.points.map(el => (
                                            <li>
                                                {el}
                                            </li>
                                        ))}
                                    </ul>
                                )
                                    :
                                    null}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}