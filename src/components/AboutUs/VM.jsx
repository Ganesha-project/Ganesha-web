import { dataAboutus } from "@/app/Database"
import { VscDebugBreakpointLog } from "react-icons/vsc"

export const VM = () => {
    return (
        <>
            <section className="md:m-24 m-5 py-10 md:py-20">
                <div className="flex md:flex-row justify-between flex-col gap-5">
                    <div className="md:border-r-2 md:border-b-0 border-b pb-2 md:pb-0 border-gray-500  md:pr-5 md:w-[70%]">
                        <h1 className="text-secondaryColor text-3xl md:text-5xl tracking-wider font-bold">
                            Vision
                        </h1>
                        <h1 className="truncate text-3xl md:text-5xl tracking-wider text-gray-500 dark:text-gray-300">
                            & Mission
                        </h1>
                    </div>
                    <div className="space-y-5">
                        <div className="md:pl-5 space-y-5">
                            <div className="space-y-2">
                                <h1 className="bg-gradient-to-t from-baseColor text-gray-900 tracking-wider font-semibold dark:from-secondaryColor to-transparent px-3 py-1 dark:text-white rounded-full w-fit text-sm uppercase">
                                    Vision
                                </h1>
                                <div className="text-lg md:text-3xl bg-gradient-to-bl dark:from-yellow-200 from-yellow-600 via-mainColor dark:via-secondaryColor to-mainColor dark:to-violet-300 font-semibold text-transparent bg-clip-text">
                                    {dataAboutus.vision}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h1 className="bg-gradient-to-t from-baseColor text-gray-900 tracking-wider font-semibold dark:from-secondaryColor to-transparent px-3 py-1 dark:text-white rounded-full w-fit text-sm uppercase">
                                    Mision
                                </h1>
                                {dataAboutus.mission.map(el => (
                                    <div className="text-lg lg:text-xl flex items-center gap-2 bg-gradient-to-bl dark:from-yellow-200 from-mainColor via-violet-700 dark:via-violet-400 to-yellow-600 dark:to-secondaryColor font-semibold text-transparent bg-clip-text">
                                        <span className="text-mainColor">
                                            <VscDebugBreakpointLog />
                                        </span>
                                        {el}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}