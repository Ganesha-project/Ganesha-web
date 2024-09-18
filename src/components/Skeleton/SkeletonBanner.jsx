export const SkeletonBanner = () => {
    return (
        <>
            <div className="mx-5 md:mx-0">
                <div className="z-10 md:bg-white animate-pulse md:dark:bg-[#2525256b] md:bg-opacity-25 md:backdrop-blur-xl md:p-5 md:shadow md:rounded-3xl w-fit">
                    <h1 className="text-3xl md:text-3xl font-semibold text-mainColor dark:text-baseColor">
                        Ganesha News & Article
                    </h1>
                    <h2 className="md:text-xl text-gray-900 dark:text-white">
                        Artikel Berkualitas untuk Pembaca Cerdas, Hanya di Ganesha News!
                    </h2>
                </div>
            </div>
            <section className="bg-white bg-opacity-25 h-[80lvh] md:h-[55vh] animate-pulse dark:bg-[#2525256b] md:bg-opacity-25 backdrop-blur-xl p-5 shadow rounded-3xl">
                <div className="flex md:flex-row flex-col gap-5 h-full">
                    <div className="flex-1 h-full rounded-xl bg-gray-200 bg-opacity-50 dark:bg-baseColor dark:bg-opacity-50"></div>
                    <div className="flex-1 flex flex-col gap-5">
                        <div className="flex-1 h-full rounded-xl bg-gray-200 bg-opacity-50 dark:bg-baseColor dark:bg-opacity-50"></div>
                        <div className="flex-1 h-full rounded-xl bg-gray-200 bg-opacity-50 dark:bg-baseColor dark:bg-opacity-50"></div>
                    </div>
                </div>
            </section>
        </>
    );
};
