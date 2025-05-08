export const SkeletonCard = ({ header, items = 4 }) => {
    const renderSkeletonItem = () => (
        <span className="md:h-[55lvh] h-[70lvh] p-0 flex-1 flex md:flex-col flex-row gap-2 justify-between group rounded-2xl relative">
            <div className="bg-neutral-400/50 dark:bg-baseColor/50 dark flex-1 w-auto md:h-[30lvh] h-[100lvw] rounded-3xl shimmer-animate"></div>
        </span>
    );

    return (
        <>
            <section className="space-y-5">
                <div className={`${header} flex items-center justify-between animate-pulse`}>
                    <span className="bg-neutral-200 text-neutral-200 rounded-full text-2xl dark:text-baseColor dark:bg-baseColor">
                        {'Latest Update'}
                    </span>
                    <span
                        className="px-3 py-1 bg-neutral-200 text-neutral-200 dark:text-baseColor dark:bg-baseColor rounded-full"
                    >
                        See More
                    </span>
                </div>
                <div className="md:grid md:grid-cols-4 flex flex-col md:gap-5">
                    {Array.from({ length: items }).map((_, index) => (
                        <div key={index}>{renderSkeletonItem()}</div>
                    ))}
                </div>
            </section>
        </>
    );
};
