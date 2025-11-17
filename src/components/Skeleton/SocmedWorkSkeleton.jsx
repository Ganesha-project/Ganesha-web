export const SocmedWorkSkeleton = ({ itemsToShow }) => {
  return (
    <div className="grid grid-flow-col gap-5 py-10">
      {Array.from({ length: itemsToShow }).map((_, idx) => (
        <div
          key={idx}
          className={`space-y-10 p-3 md:p-5 bg-gradient-to-b min-w-[80lvw] md:min-w-[25lvw] h-fit from-white to-neutral-100 dark:from-black dark:to-darkColor rounded-3xl w-fit animate-pulse
            ${idx === 0 ? "ml-5 md:ml-24 2xl:ml-80" : ""}
          `}
        >
          {/* Image Skeleton - Square aspect ratio */}
          <div className="rounded-2xl w-full aspect-square bg-neutral-300 dark:bg-neutral-700"></div>
          
          {/* Content Skeleton */}
          <div className="space-y-3">
            {/* Username Skeleton */}
            <div className="h-6 md:h-7 bg-neutral-300 dark:bg-neutral-700 rounded-lg w-2/3"></div>
            
            {/* Company Name Skeleton */}
            <div className="h-4 bg-neutral-300 dark:bg-neutral-700 rounded-lg w-1/2"></div>
            
            {/* Package Tag Skeleton */}
            <div className="h-8 bg-neutral-300 dark:bg-neutral-700 rounded-full w-32"></div>
            
            {/* Button Skeleton */}
            <div className="h-10 bg-neutral-300 dark:bg-neutral-700 rounded-full w-24"></div>
          </div>
        </div>
      ))}
    </div>
  );
};