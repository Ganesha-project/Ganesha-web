import { dataAboutus } from "@/app/Database"

export const Support = () => {
    return (
        <>
            <section className="bg-white py-10 flex items-center md:flex-row flex-col gap-5 justify-between md:px-24 2xl:px-80 my-10">
                <h1 className="text-xl md:text-3xl text-mainColor font-semibold">
                    Supported By:
                </h1>
                <div className="flex items-center justify-center gap-5 md:w-[50%]">
                    {dataAboutus.support.map(el => (
                        <>
                            <img className="w-[25%] md:w-[65%] h-[10lvh] bg-blend-multiply object-contain" src={el} alt="" />
                        </>
                    ))}
                </div>
            </section>
        </>
    )
}