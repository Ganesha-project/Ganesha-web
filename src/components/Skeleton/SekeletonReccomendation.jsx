import { Title } from "../Title"

export const SkeletonReccomendation = () => {
    return (
        <>
            <section className="md:px-24 space-y-5 py-24 flex flex-col justify-center items-center">
                <Title text={'Read Our Articles'} />
                <div className="flex flex-wrap gap-5 animate-pulse">
                    <div className="w-[25lvw] h-[25lvw] rounded-3xl dark:bg-baseColor/20 bg-neutral-200/20 relative">
                        <div className="absolute bottom-0 space-y-3 m-5">
                            <div className="w-[15lvw] h-6 rounded-full flex-1 bg-neutral-300/50">
                            </div>
                            <div className="w-[7lvw] h-6 rounded-full flex-1 bg-neutral-300/50">
                            </div>
                        </div>
                    </div>
                    <div className="w-[25lvw] h-[25lvw] rounded-3xl dark:bg-baseColor/20 bg-neutral-200/20 relative">
                        <div className="absolute bottom-0 space-y-3 m-5">
                            <div className="w-[15lvw] h-6 rounded-full flex-1 bg-neutral-300/50">
                            </div>
                            <div className="w-[7lvw] h-6 rounded-full flex-1 bg-neutral-300/50">
                            </div>
                        </div>
                    </div>
                    <div className="w-[25lvw] h-[25lvw] rounded-3xl dark:bg-baseColor/20 bg-neutral-200/20 relative">
                        <div className="absolute bottom-0 space-y-3 m-5">
                            <div className="w-[15lvw] h-6 rounded-full flex-1 bg-neutral-300/50">
                            </div>
                            <div className="w-[7lvw] h-6 rounded-full flex-1 bg-neutral-300/50">
                            </div>
                        </div>
                    </div>
                </div>
                <a
                    href="/article"
                    className="btn btn-ghost rounded-full bg-baseColor/20 w-fit"
                >
                    See More
                </a>
            </section>
        </>
    )
}