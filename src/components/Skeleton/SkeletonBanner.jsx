import { TextMainGradient } from "@/utils/ReueseClass";

export const SkeletonBanner = () => {
    return (
        <>
            <div className="mx-5 md:mx-0 min-w-[91rem] overflow-hidden">
                <section className=" h-[80lvh] md:h-[98vh] shimmer-animate backdrop-blur-xl p-0 rounded-3xl">
                    <div className="flex-1 h-full rounded-3xl bg-mainColor/25 dark:bg-baseColor/50"></div>
                </section>
            </div>
        </>
    );
};
