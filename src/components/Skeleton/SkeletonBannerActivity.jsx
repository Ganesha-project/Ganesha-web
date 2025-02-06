export const SkeletonBannerActivity = () => {
    return (
        <>
            <section className="pt-16">
                <div className=" mx-5 md:mx-24 2xl:mx-80 mb-1 md:mb-2 overflow-hidden rounded-3xl" >
                    <div className="relative w-full h-[40lvh] bg-gray-400 dark:bg-baseColor dark:bg-opacity-50 rounded-lg animate-pulse bg-opacity-50">
                        <div className="absolute inset-0 p-3 md:p-5 space-y-3 h-full">
                            <div className="flex flex-col items-center justify-center gap-1 md:gap-3 h-full">
                                <div className="w-36 h-8 bg-gray-400 dark:bg-baseColor dark:bg-opacity-50 rounded-lg animate-pulse bg-opacity-50"></div>
                                <div className="w-56 h-5 bg-gray-400 dark:bg-baseColor dark:bg-opacity-50 rounded-lg animate-pulse bg-opacity-50"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}