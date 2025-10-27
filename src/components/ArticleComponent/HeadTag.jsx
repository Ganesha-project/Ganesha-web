"use client";

import Link from "next/link";
import { FaSort } from "react-icons/fa6";

// Data untuk dropdown filter
const DataSelectFilterArticle = [
  { label: "Terbaru", value: "DESC" },
  { label: "Terlama", value: "ASC" },
];

export const Headtag = ({ 
  label, 
  visibility = "", 
  children, 
  filter = false, 
  hide = false, 
  setSortOrder,
  currentSort = "DESC" 
}) => {
  const handleSort = (order) => {
    if (setSortOrder) {
      setSortOrder(order);
    }
  };

  return (
    <div className={`${visibility} flex items-center justify-between`}>
      {/* Title */}
      <h1 className="text-mainColor dark:text-baseColor md:text-2xl text-xl font-semibold">
        {label || 'Latest Update'}
      </h1>
      
      {/* Conditional Right Side Content */}
      {children ? (
        <div>{children}</div>
      ) : filter === true ? (
        // Sort Dropdown
        <div className="dropdown dropdown-bottom dropdown-end flex justify-end">
          <div 
            tabIndex={0} 
            role="button" 
            className="flex text-xs md:text-sm items-center gap-2 px-4 py-2 rounded-full dark:bg-baseColor/20 bg-mainColor/10 truncate font-semibold dark:text-white text-mainColor hover:bg-mainColor/20 dark:hover:bg-baseColor/30 transition-colors duration-200 cursor-pointer"
          >
            <FaSort className="text-sm" />
            <span>Urutkan</span>
            {currentSort && (
              <span className="hidden sm:inline text-xs opacity-70">
                ({currentSort === "DESC" ? "Terbaru" : "Terlama"})
              </span>
            )}
          </div>
          <ul 
            tabIndex={0} 
            className="dropdown-content menu bg-lightColor dark:bg-darkColor dark:shadow-mainShadow rounded-2xl z-[1] w-40 p-2 mt-2 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            {DataSelectFilterArticle.map((el, idx) => (
              <li key={idx}>
                <button
                  className={`capitalize cursor-pointer rounded-xl transition-colors duration-200 ${
                    currentSort === el.value 
                      ? "bg-mainColor/10 dark:bg-baseColor/20 text-mainColor dark:text-baseColor font-semibold" 
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => handleSort(el.value)}
                >
                  {el.label}
                  {currentSort === el.value && (
                    <span className="ml-auto">✓</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : hide === true ? (
        // Hidden - no content
        null
      ) : (
        // See More Link
        <Link 
          href="/article"
          className="px-4 py-2 bg-baseColor dark:bg-baseColor dark:text-neutral-900 dark:hover:text-white text-white rounded-full font-semibold text-sm duration-300 ease-in-out hover:bg-mainColor dark:hover:bg-mainColor dark:hover:text-white transition-all hover:scale-105 active:scale-95"
        >
          See More
        </Link>
      )}
    </div>
  );
};