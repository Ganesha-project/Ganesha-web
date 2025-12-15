"use client";
import React from "react";
import { usePathname } from "next/navigation";
import {
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { useState, useEffect } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { SkeletonCardPromos } from "@/components/Skeleton/SkeletonCardPromos";

const sendCounter = async (activity, pathParams) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APIURL}/system/counter`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: pathParams.startsWith("/promo")
          ? JSON.stringify({
              refId: activity.id,
              type: "PROMO",
            })
          : JSON.stringify({
              refId: activity.id,
              type: "ACTIVITY",
            }),
      }
    );

    const data = await res.json();
    // console.log("Counter response:", data);
  } catch (err) {
    console.log("Counter error:", err);
  }
};

export const PromoScroll = ({ activities, loading = false }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [cardImageIndex, setCardImageIndex] = useState({});
  const [mounted, setMounted] = useState(false);

  const path = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Group activities by month
  const groupActivitiesByMonth = (activities) => {
    if (!activities || !Array.isArray(activities)) {
      return [];
    }

    const grouped = {};
    activities.forEach((activity) => {
      const date = new Date(
        activity.uploadDate || activity.createdAt || activity.date
      );
      const monthYear = date.toLocaleDateString("id-ID", {
        month: "long",
        year: "numeric",
      });

      if (!grouped[monthYear]) {
        grouped[monthYear] = {
          activities: [],
          sortDate: date,
        };
      }
      grouped[monthYear].activities.push(activity);
    });

    // Sort months in descending order (newest first)
    const sortedMonths = Object.keys(grouped).sort((a, b) => {
      return grouped[b].sortDate - grouped[a].sortDate;
    });

    return sortedMonths.map((month) => ({
      month,
      activities: grouped[month].activities,
    }));
  };

  const groupedActivities = groupActivitiesByMonth(activities || []);
  console.log("groupedActivities: ", groupedActivities);
  

  const handlePrevCardImage = (idx, e) => {
    e.stopPropagation();
    setCardImageIndex((prev) => ({
      ...prev,
      [idx]:
        (prev[idx] || 0) > 0
          ? (prev[idx] || 0) - 1
          : activities[idx].imageUrl.length - 1,
    }));
  };

  const handleNextCardImage = (idx, e) => {
    e.stopPropagation();
    setCardImageIndex((prev) => ({
      ...prev,
      [idx]:
        (prev[idx] || 0) < activities[idx].imageUrl.length - 1
          ? (prev[idx] || 0) + 1
          : 0,
    }));
  };

  const handleInstagramClick = (e, url) => {
    e.stopPropagation();
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleOpenModal = (index) => {
    const activity = activities[index];
    // console.log("COUNTER STRIKE ", activity.id);
    sendCounter(activity, path);

    setSelectedIndex(index);
    setImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedIndex(null);
    setImageIndex(0);
    document.body.style.overflow = "unset";
  };

  const handlePrevActivity = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prevIndex) =>
      prevIndex !== null && prevIndex > 0
        ? prevIndex - 1
        : activities.length - 1
    );
    setImageIndex(0);
  };

  const handleNextActivity = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prevIndex) =>
      prevIndex !== null && prevIndex < activities.length - 1
        ? prevIndex + 1
        : 0
    );
    setImageIndex(0);
  };

  const handlePrevImage = () => {
    if (selectedIndex === null) return;
    setImageIndex((prev) =>
      prev > 0 ? prev - 1 : activities[selectedIndex].imageUrl.length - 1
    );
  };

  const handleNextImage = () => {
    if (selectedIndex === null) return;
    setImageIndex((prev) =>
      prev < activities[selectedIndex].imageUrl.length - 1 ? prev + 1 : 0
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selectedIndex !== null) {
        handleCloseModal();
      }
    };

    if (selectedIndex !== null) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  const handlePrev = () => {
    document
      .querySelectorAll(".promo-scroll-container")
      .forEach((container) => {
        container.scrollBy({ left: -300, behavior: "smooth" });
      });
  };

  const handleNext = () => {
    document
      .querySelectorAll(".promo-scroll-container")
      .forEach((container) => {
        container.scrollBy({ left: 300, behavior: "smooth" });
      });
  };

  return (
    <>
      {loading ? (
        <>
          <SkeletonCardPromos count={6} showHeader={true} showNavigation={true} />
          <SkeletonCardPromos count={4} showHeader={true} showNavigation={false} />
          <SkeletonCardPromos count={3} showHeader={true} showNavigation={false} />
        </>
      ) : (
        <>
          <section>
        {groupedActivities.map((group, groupIdx) => (
          <div key={group.month} className="mb-8">
            {/* Month Header */}
            <div className="mt-12 mb-5 px-5 md:px-24 2xl:px-80 flex items-center justify-between">
              <h2
                className={`${TextMainGradient} text-xl md:text-2xl font-bold`}
              >
                Promo {group.month}
              </h2>

              {group.activities?.length > 3 && (
                <div className="z-10 items-center space-x-2 md:flex hidden">
                  <button
                    onClick={handlePrev}
                    className="bg-radial dark:from-black dark:to-darkColor from-white to-neutral-100 dark:text-neutral-100 text-neutral-700 md:p-3 p-1 rounded-full hover:scale-95 duration-300 ease-in-out"
                    aria-label="Previous card"
                  >
                    <IoIosArrowBack className="text-lg md:text-xl" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="bg-radial dark:from-black dark:to-darkColor from-white to-neutral-100 dark:text-neutral-100 text-neutral-700 md:p-3 p-1 rounded-full hover:scale-95 duration-300 ease-in-out"
                    aria-label="Next card"
                  >
                    <IoIosArrowForward className="text-lg md:text-xl" />
                  </button>
                </div>
              )}
            </div>

            {/* Scrollable Cards */}
            <div className="promo-scroll-container flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth px-5 md:px-24 2xl:px-80 hide-scrollbar w-full pb-4">
              {group.activities.map((el, idx) => {
                // Calculate global index for handlers
                const globalIdx =
                  groupedActivities
                    .slice(0, groupIdx)
                    .reduce((acc, g) => acc + g.activities.length, 0) + idx;

                return (
                  <div
                    key={globalIdx}
                    onClick={() => handleOpenModal(globalIdx)}
                    className="relative group cursor-pointer rounded-xl md:rounded-2xl overflow-hidden flex-shrink-0 w-47 md:w-80 h-60 md:h-100"
                  >
                    <Image
                      width={500}
                      height={500}
                      className="w-full h-full object-cover group-hover:brightness-90 duration-300"
                      src={el.imageUrl[cardImageIndex[globalIdx] || 0]}
                      alt={el.title}
                    />
                    {el.imageUrl.length > 1 && (
                      <>
                        <button
                          onClick={(e) => handlePrevCardImage(globalIdx, e)}
                          className="absolute group-hover:opacity-100 opacity-0 duration-300 cursor-pointer left-4 top-1/2 transform invert -translate-y-1/2 p-1 bg-black/50 text-white z-40 rounded-full"
                        >
                          <IoIosArrowBack />
                        </button>
                        <button
                          onClick={(e) => handleNextCardImage(globalIdx, e)}
                          className="absolute group-hover:opacity-100 opacity-0 duration-300 cursor-pointer right-4 top-1/2 transform invert -translate-y-1/2 p-1 bg-black/50 text-white z-40 rounded-full"
                        >
                          <IoIosArrowForward />
                        </button>
                      </>
                    )}

                    {/* Instagram button on card hover */}
                    {el.ig && (
                      <button
                        onClick={(e) =>
                          handleInstagramClick(e, el.instagramUrl)
                        }
                        className="md:flex hidden absolute top-3 right-3 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 p-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-full shadow-lg z-50 hover:scale-110"
                        title="View on Instagram"
                      >
                        <FaInstagram className="text-sm" />
                      </button>
                    )}

                    <div className="absolute inset-0 flex items-end p-1 md:p-3">
                      <h1
                        className={`${
                          el.ig &&
                          "scale-0 group-hover:scale-100 translate-y-full group-hover:translate-y-0"
                        } duration-300 text-white md:text-sm bg-black/25 px-2 py-1 rounded-lg backdrop-blur-lg truncate text-[10px]`}
                      >
                        {el.title}
                      </h1>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      {/* Render modal using createPortal */}
      {selectedIndex !== null &&
        mounted &&
        createPortal(
          <PromoModal
            selectedIndex={selectedIndex}
            activities={activities}
            imageIndex={imageIndex}
            handlePrevActivity={handlePrevActivity}
            handleNextActivity={handleNextActivity}
            handleCloseModal={handleCloseModal}
            handlePrevImage={handlePrevImage}
            handleNextImage={handleNextImage}
            handleInstagramClick={handleInstagramClick}
          />,
          document.body
        )}
        </>
      )}
    </>
  );
};
