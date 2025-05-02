export const SkeletonCard = () => {
    return (
        <>
            <section className="space-y-5">
                <div className="flex items-center justify-between animate-pulse">
                    <span className="bg-neutral-200 text-neutral-200 rounded-full text-2xl dark:text-baseColor dark:bg-baseColor">
                        {'Latest Update'}
                    </span>
                    <span
                        className="px-3 py-1 bg-neutral-200 text-neutral-200 dark:text-baseColor dark:bg-baseColor rounded-full"
                    >
                        See More
                    </span>
                </div>
                <div className="md:grid md:grid-cols-3 flex flex-col gap-5">
                    <span className="md:h-[45lvh] h-[70lvh] p-3 flex-1 flex md:flex-col flex-row gap-2 justify-between group bg-neutral-200 dark:bg-baseColor/20 rounded-2xl ">
                        <div className="bg-neutral-400/50 dark:bg-baseColor/50 dark md:flex-1 md:w-auto w-[30lvw] md:h-[10lvh] h-[30lvw] rounded-xl animate-pulse"></div>
                        <div className="flex flex-col gap-2 flex-1 md:flex-[0]">
                            <span className="md:mt-3 bg-neutral-400/50 dark:bg-baseColor/50 dark animate-pulse rounded-lg h-[3lvh]"></span>
                            <span className="bg-neutral-400/50 dark:bg-baseColor/50 dark rounded-lg animate-pulse h-[3lvh]"></span>
                            <span className="bg-neutral-400/50 dark:bg-baseColor/50 dark rounded-lg animate-pulse h-[3lvh]"></span>
                        </div>
                    </span>
                    <span className="md:h-[45lvh] h-[70lvh] p-3 flex-1 flex md:flex-col flex-row gap-2 justify-between group bg-neutral-200 dark:bg-baseColor/20 rounded-2xl ">
                        <div className="bg-neutral-400/50 dark:bg-baseColor/50 dark md:flex-1 md:w-auto w-[30lvw] md:h-[10lvh] h-[30lvw] rounded-xl animate-pulse"></div>
                        <div className="flex flex-col gap-2 flex-1 md:flex-[0]">
                            <span className="md:mt-3 bg-neutral-400/50 dark:bg-baseColor/50 dark animate-pulse rounded-lg h-[3lvh]"></span>
                            <span className="bg-neutral-400/50 dark:bg-baseColor/50 dark rounded-lg animate-pulse h-[3lvh]"></span>
                            <span className="bg-neutral-400/50 dark:bg-baseColor/50 dark rounded-lg animate-pulse h-[3lvh]"></span>
                        </div>
                    </span>
                    <span className="md:h-[45lvh] h-[70lvh] p-3 flex-1 flex md:flex-col flex-row gap-2 justify-between group bg-neutral-200 dark:bg-baseColor/20 rounded-2xl ">
                        <div className="bg-neutral-400/50 dark:bg-baseColor/50 dark md:flex-1 md:w-auto w-[30lvw] md:h-[10lvh] h-[30lvw] rounded-xl animate-pulse"></div>
                        <div className="flex flex-col gap-2 flex-1 md:flex-[0]">
                            <span className="md:mt-3 bg-neutral-400/50 dark:bg-baseColor/50 dark animate-pulse rounded-lg h-[3lvh]"></span>
                            <span className="bg-neutral-400/50 dark:bg-baseColor/50 dark rounded-lg animate-pulse h-[3lvh]"></span>
                            <span className="bg-neutral-400/50 dark:bg-baseColor/50 dark rounded-lg animate-pulse h-[3lvh]"></span>
                        </div>
                    </span>
                </div>
            </section>
        </>
    )
}