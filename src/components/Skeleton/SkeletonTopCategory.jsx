export const SkeletonTopCategory = () => {
    return (
        <>
            <section className="pt-24 px-24 mb-5 animate-pulse">
                <div className="p-5 bg-baseColor/25 space-y-5 text-baseColor rounded-r-3xl max-w-[70lvh] w-fit -ml-24 pl-24">
                    <span className="text-lg w-24 h-5 bg-neutral-200 flex-1 rounded-full"></span>
                    <span className="text-3xl font-semibold w-52 h-7 flex-1 rounded-full bg-neutral-200"></span>
                </div>
            </section>
        </>
    )
}