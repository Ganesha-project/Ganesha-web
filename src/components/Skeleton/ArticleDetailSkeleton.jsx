export const ArticleDetailSkeleton = () => {
    return (
        <>
            <section className="min-h-screen">
                <div className="md:mx-24 md:py-24 mx-5 py-16 flex md:flex-row flex-col gap-5">
                    <div className="md:w-[60%] space-y-5">
                        <div className="md:w-[52lvw] h-[20lvh] bg-gray-400 dark:bg-baseColor dark:bg-opacity-50 bg-opacity-50 animate-pulse rounded-3xl"></div>
                        <div className="md:w-[52lvw] h-[50lvh] bg-gray-400 dark:bg-baseColor dark:bg-opacity-50 bg-opacity-50 animate-pulse rounded-3xl"></div>
                        <div className="space-y-5">
                            <div className="md:w-[52lvw] h-[5lvh] bg-gray-400 dark:bg-baseColor dark:bg-opacity-50 bg-opacity-50 animate-pulse rounded-3xl"></div>
                            <div className="md:w-[52lvw] h-[5lvh] bg-gray-400 dark:bg-baseColor dark:bg-opacity-50 bg-opacity-50 animate-pulse rounded-3xl"></div>
                            <div className="md:w-[52lvw] h-[5lvh] bg-gray-400 dark:bg-baseColor dark:bg-opacity-50 bg-opacity-50 animate-pulse rounded-3xl"></div>
                        </div>
                    </div>
                    <div className="md:w-[30%] space-y-5">
                        <div className="md:w-[33lvw] h-[20lvh] bg-gray-400 dark:bg-baseColor dark:bg-opacity-50 bg-opacity-50 animate-pulse rounded-3xl"></div>
                        <div className="md:w-[33lvw] h-[20lvh] bg-gray-400 dark:bg-baseColor dark:bg-opacity-50 bg-opacity-50 animate-pulse rounded-3xl"></div>
                        <div className="md:w-[33lvw] h-[20lvh] bg-gray-400 dark:bg-baseColor dark:bg-opacity-50 bg-opacity-50 animate-pulse rounded-3xl"></div>
                        <div className="md:w-[33lvw] h-[20lvh] bg-gray-400 dark:bg-baseColor dark:bg-opacity-50 bg-opacity-50 animate-pulse rounded-3xl"></div>
                        <div className="md:w-[33lvw] h-[20lvh] bg-gray-400 dark:bg-baseColor dark:bg-opacity-50 bg-opacity-50 animate-pulse rounded-3xl"></div>
                    </div>
                </div>
            </section>
        </>
    )
}