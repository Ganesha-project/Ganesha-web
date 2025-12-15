import React from 'react'

export const SkeletonCardPromos = ({ count = 6, showHeader = true, showNavigation = false }) => {
  return (
    <div className="mb-8 animate-pulse">
      {/* Month Header Skeleton */}
      {showHeader && (
        <div className="mt-12 mb-5 px-5 md:px-24 2xl:px-80 flex items-center justify-between">
          <div className="h-6 md:h-8 bg-gray-300 dark:bg-gray-700 rounded w-48 md:w-64"></div>

          {showNavigation && (
            <div className="z-10 items-center space-x-2 md:flex hidden">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
            </div>
          )}
        </div>
      )}

      {/* Cards Skeleton */}
      <div className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth px-5 md:px-24 2xl:px-80 hide-scrollbar w-full pb-4">
        {Array.from({ length: count }).map((_, idx) => (
          <div
            key={idx}
            className="relative group rounded-xl md:rounded-2xl overflow-hidden flex-shrink-0 w-47 md:w-80 h-60 md:h-100"
          >
            {/* Image skeleton */}
            <div className="w-full h-full bg-gray-300 dark:bg-gray-700"></div>

            {/* Navigation arrows skeleton */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 p-1 bg-gray-400 dark:bg-gray-600 rounded-full opacity-60">
              <div className="w-4 h-4 bg-gray-500 dark:bg-gray-500 rounded"></div>
            </div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 bg-gray-400 dark:bg-gray-600 rounded-full opacity-60">
              <div className="w-4 h-4 bg-gray-500 dark:bg-gray-500 rounded"></div>
            </div>

            {/* Instagram button skeleton */}
            <div className="md:flex hidden absolute top-3 right-3 p-2 bg-gray-400 dark:bg-gray-600 rounded-full opacity-60">
              <div className="w-4 h-4 bg-gray-500 dark:bg-gray-500 rounded"></div>
            </div>

            {/* Title skeleton */}
            <div className="absolute inset-0 flex items-end p-1 md:p-3">
              <div className="bg-black/25 px-2 py-1 rounded-lg backdrop-blur-lg">
                <div className="h-3 md:h-4 bg-gray-400 dark:bg-gray-600 rounded w-24 md:w-32"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
