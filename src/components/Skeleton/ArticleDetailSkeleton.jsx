export const ArticleDetailSkeleton = () => {
    return (
        <>
            <section className="min-h-screen">
                <div className="md:mx-24 md:py-24 mx-5 py-16 flex flex-col gap-5">
                    <div className="space-y-5">
                        <div className="md:w-full h-[20lvh] bg-neutral-400/50 dark:bg-baseColor/50 animate-pulse rounded-3xl"></div>
                        <div className="md:w-full h-[50lvh] bg-neutral-400/50 dark:bg-baseColor/50 animate-pulse rounded-3xl"></div>
                        <div className="space-y-5">
                            <div className="md:w-full h-[5lvh] bg-neutral-400/50 dark:bg-baseColor/50 animate-pulse rounded-3xl"></div>
                            <div className="md:w-full h-[5lvh] bg-neutral-400/50 dark:bg-baseColor/50 animate-pulse rounded-3xl"></div>
                            <div className="md:w-full h-[5lvh] bg-neutral-400/50 dark:bg-baseColor/50 animate-pulse rounded-3xl"></div>
                        </div>
                    </div>
                    <div className="space-y-5">
                        <div className="md:w-full h-[20lvh] bg-neutral-400/50 dark:bg-baseColor/50 animate-pulse rounded-3xl"></div>
                        <div className="md:w-full h-[20lvh] bg-neutral-400/50 dark:bg-baseColor/50 animate-pulse rounded-3xl"></div>
                        <div className="md:w-full h-[20lvh] bg-neutral-400/50 dark:bg-baseColor/50 animate-pulse rounded-3xl"></div>
                        <div className="md:w-full h-[20lvh] bg-neutral-400/50 dark:bg-baseColor/50 animate-pulse rounded-3xl"></div>
                        <div className="md:w-full h-[20lvh] bg-neutral-400/50 dark:bg-baseColor/50 animate-pulse rounded-3xl"></div>
                    </div>
                </div>
            </section>
        </>
    )
}