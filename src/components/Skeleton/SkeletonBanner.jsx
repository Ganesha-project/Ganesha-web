import { TextMainGradient } from "@/utils/ReueseClass";

export const SkeletonBanner = () => {
    return (
        <>
            <div className="mx-5 md:mx-0 min-w-7xl">
                <h1 className={`text-left text-xl md:text-3xl font-semibold ${TextMainGradient}`}>
                    Ganesha News & Article
                </h1>
            </div>
            <section className="bg-white/25 h-[80lvh] md:h-[60vh] animate-pulse dark:bg-[#2525256b] backdrop-blur-xl p-0">
                <div className="flex-1 h-full rounded-3xl bg-neutral-200/50 dark:bg-baseColor/50"></div>
            </section>
        </>
    );
};
