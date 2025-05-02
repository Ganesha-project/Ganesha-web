export const SkeletonBannerActivity = () => {
    return (
        <>
            <section className="pt-16">
                <div className=" mx-5 md:mx-24 2xl:mx-80 mb-1 md:mb-2 overflow-hidden rounded-3xl" >
                    <div className="relative w-full h-[40lvh] bg-neutral-400/50 dark:bg-baseColor/50 rounded-lg animate-pulse">
                        <div className="absolute inset-0 p-3 md:p-5 space-y-3 h-full">
                            <div className="flex flex-col items-center justify-center gap-1 md:gap-3 h-full">
                                <div className="w-36 h-8 bg-neutral-400/50 dark:bg-baseColor/50 rounded-lg animate-pulse"></div>
                                <div className="w-56 h-5 bg-neutral-400/50 dark:bg-baseColor/50 rounded-lg animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}