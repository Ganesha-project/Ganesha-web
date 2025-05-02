export const SkeletonTiles = () => {
    return (
        <>
            <section className="flex justify-between md:flex-row flex-col gap-5">
                <div className="md:flex carousel w-full gap-5">
                    <div className="w-[10lvh] md:w-[10lvw] h-[30px] bg-neutral-300/50 carousel-item dark:bg-baseColor/50 rounded-full animate-pulse"></div>
                    <div className="w-[10lvh] md:w-[10lvw] h-[30px] bg-neutral-300/50 carousel-item dark:bg-baseColor/50 rounded-full animate-pulse"></div>
                    <div className="w-[10lvh] md:w-[10lvw] h-[30px] bg-neutral-300/50 carousel-item dark:bg-baseColor/50 rounded-full animate-pulse"></div>
                    <div className="w-[10lvh] md:w-[10lvw] h-[30px] bg-neutral-300/50 carousel-item dark:bg-baseColor/50 rounded-full animate-pulse"></div>
                    <div className="w-[10lvh] md:w-[10lvw] h-[30px] bg-neutral-300/50 carousel-item dark:bg-baseColor/50 rounded-full animate-pulse"></div>
                </div>
                <div className="self-end">
                    <div className="w-[7lvh] md:w-[7lvw] h-[30px] bg-neutral-300/50 carousel-item dark:bg-baseColor/50 rounded-full animate-pulse"></div>
                </div>
            </section>
        </>
    )
}