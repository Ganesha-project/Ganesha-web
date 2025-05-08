export const SkeletonBanner = () => {
    return (
        <>
            <div className="md:hidden w-full h-[50lvh] bg-mainColor/15 dark:bg-baseColor/25 rounded-b-3xl shimmer-animate"></div>
            <div className="md:block w-full h-[50lvh] mx-24 mt-20 my-2 bg-mainColor/15 dark:bg-baseColor/25 rounded-3xl shimmer-animate"></div>
        </>
    );
};
