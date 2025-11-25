"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { IoIosClose, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaArrowDown, FaInstagram } from "react-icons/fa6";
import { formatDate } from "@/helper/formatDateTime";
import { ActivityLongDesc } from "./ActivityLongDesc";
import { usePathname } from "next/navigation";

const sendCounter = async (activity, pathParams) => {
  try {
    const res = await fetch("https://ganesha-cms.vercel.app/api/counter", {
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
    });

    const data = await res.json();
    console.log("Counter response:", data);
  } catch (err) {
    console.log("Counter error:", err);
  }
};

export const CardActivity = ({ activities, items }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [cardImageIndex, setCardImageIndex] = useState({});
  const [mounted, setMounted] = useState(false);
  const path = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const handlePrevCardImage = (idx, e) => {
    e.stopPropagation();
    setCardImageIndex((prev) => ({
      ...prev,
      [idx]:
        prev[idx] > 0 ? prev[idx] - 1 : activities[idx].imageUrl.length - 1,
    }));
  };

  const handleNextCardImage = (idx, e) => {
    e.stopPropagation();
    setCardImageIndex((prev) => ({
      ...prev,
      [idx]:
        prev[idx] < activities[idx].imageUrl.length - 1 ? prev[idx] + 1 : 0,
    }));
  };

  const handleInstagramClick = (e, url) => {
    e.stopPropagation();
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const Modal = () => {
    if (selectedIndex === null) return null;

    const activity = activities[selectedIndex];

    return (
      <div
        className="fixed inset-0 flex items-center justify-center bg-black/30 z-[99999] backdrop-blur-md px-3 md:px-0"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          transform: "none",
          zIndex: 99999,
        }}
      >
        <button
          className="absolute top-2 right-2 text-[39px] hover:bg-black rounded-full text-white z-50"
          onClick={handleCloseModal}
        >
          <IoIosClose />
        </button>
        <div className="relative flex flex-col md:flex-row w-full md:min-h-[87.5lvh] md:max-h-[87.5lvh] max-w-5xl bg-lightColor dark:bg-darkColor rounded-3xl overflow-hidden">
          <div className="md:w-2/3 bg-black/90 dark:bg-black/40 flex items-center justify-center relative overflow-hidden">
            <Image
              width={500}
              height={500}
              src={activity.imageUrl[imageIndex]}
              alt={activity.title}
              className="w-full h-full rounded-3xl max-h-[55lvh] md:max-h-full object-contain z-20"
            />
            <Image
              width={1}
              height={1}
              src={activity.imageUrl[imageIndex]}
              alt={activity.title}
              className="w-full h-full rounded-3xl object-cover absolute inset-0 z-10 blur-xl scale-125"
            />
            {activity.imageUrl.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute z-20 left-4 p-2 bg-black/50 text-white rounded-full"
                >
                  <IoIosArrowBack />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute z-20 right-4 p-2 bg-black/50 text-white rounded-full"
                >
                  <IoIosArrowForward />
                </button>
              </>
            )}
          </div>

          <div className="md:w-1/3 flex flex-col relative">
            <div className="absolute w-full backdrop-blur-md flex p-4 items-center gap-2 border-b pb-3 border-neutral-500/50">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/logo-ganesha.png"}
                    className="w-5 md:w-8"
                    width={30}
                    height={30}
                    alt="Ganesha Logo"
                  />
                  <a
                    href=""
                    className="text-sm md:text-base font-[500] bg-gradient-to-br dark:from-white dark:via-baseColor dark:to-mainColor from-neutral-800 via-mainColor to-baseColor bg-clip-text text-transparent"
                  >
                    Ganesha Consulting
                  </a>
                </div>
                {activity.ig && activity.instagramUrl && (
                  <button
                    onClick={(e) =>
                      handleInstagramClick(e, activity.instagramUrl)
                    }
                    className="cursor-pointer p-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-full hover:scale-110 transition-transform duration-300 shadow-md"
                    title="View on Instagram"
                  >
                    <FaInstagram className="text-sm" />
                  </button>
                )}
              </div>
            </div>
            <div className="flex flex-col justify-between h-full p-4 py-14 md:py-16 md:max-h-full max-h-[30lvh] overflow-x-scroll noBar">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="md:text-lg font-bold">{activity.title}</h3>
                </div>

                <ActivityLongDesc content={activity.longDesc} />
              </div>
            </div>
            <div className="absolute bottom-0 flex items-center gap-2 w-full">
              <div className="px-5 py-2 md:py-3 w-full flex items-center gap-2 border-t border-neutral-500/50 backdrop-blur-md">
                <p className="text-xs md:text-sm text-neutral-500">
                  {formatDate(activity.date)}
                </p>
                {activity.location && (
                  <p className="text-xs md:text-sm text-neutral-500">
                    - {activity.location}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <button
            onClick={handlePrevActivity}
            className="absolute left-4 top-1/2 transform invert -translate-y-1/2 p-2 text-xl bg-black/80 text-white hover:bg-black rounded-full"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={handleNextActivity}
            className="absolute right-4 top-1/2 transform invert -translate-y-1/2 p-2 text-xl bg-black/80 text-white hover:bg-black rounded-full"
          >
            <IoIosArrowForward />
          </button>
        </div>

        <div className="absolute bottom-[-3px] space-x-5 md:hidden">
          <button
            onClick={handlePrevActivity}
            className="invert -translate-y-1/2 p-2 text-xl bg-black/80 text-white hover:bg-black rounded-full"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={handleNextActivity}
            className="invert -translate-y-1/2 p-2 text-xl bg-black/80 text-white hover:bg-black rounded-full"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    );
  };

  const displayedActivities = activities.slice(0, items);

  return (
    <>
      <section className="mx-5 md:mx-24 2xl:mx-80">
        <div
          className={`grid grid-cols-2 ${
            path.startsWith("/promo") ? "md:grid-cols-3" : "md:grid-cols-4"
          } gap-1 md:gap-2 auto-cols-auto`}
        >
          {displayedActivities.map((el, idx) => (
            <div
              key={idx}
              onClick={() => handleOpenModal(idx)}
              className={`relative group cursor-pointer rounded-xl md:rounded-2xl overflow-hidden

                        ${
                          path.startsWith("/promo")
                            ? ""
                            : `${
                                idx % 3 === 0
                                  ? "md:col-span-2  md:row-span-2 "
                                  : "col-span-1 row-span-1"
                              }
                                     ${
                                       idx % 5 === 0
                                         ? "md:col-span-1 col-span-2 row-span-1"
                                         : "col-span-1 row-span-1"
                                     }`
                        }
                                     `}
            >
              <Image
                width={500}
                height={500}
                className="w-full h-full min-h-[10vh] object-cover group-hover:brightness-90 duration-300"
                src={el.imageUrl[cardImageIndex[idx] || 0]}
                alt={el.title}
              />
              {el.imageUrl.length > 1 && (
                <>
                  <button
                    onClick={(e) => handlePrevCardImage(idx, e)}
                    className="absolute group-hover:opacity-100 opacity-0 duration-300 cursor-pointer left-4 top-1/2 transform invert -translate-y-1/2 p-1 bg-black/50 text-white z-40 rounded-full"
                  >
                    <IoIosArrowBack />
                  </button>
                  <button
                    onClick={(e) => handleNextCardImage(idx, e)}
                    className="absolute group-hover:opacity-100 opacity-0 duration-300 cursor-pointer right-4 top-1/2 transform invert -translate-y-1/2 p-1 bg-black/50 text-white z-40 rounded-full"
                  >
                    <IoIosArrowForward />
                  </button>
                </>
              )}

              {/* Instagram button on card hover */}
              {el.ig && (
                <button
                  onClick={(e) => handleInstagramClick(e, el.instagramUrl)}
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
          ))}
        </div>

        {/* Load More Button - Tetap dipertahankan untuk konsistensi */}
        {activities.length > items && (
          <>
            <div className="w-full h-auto flex justify-center items-center pt-10">
              <button
                onClick={() => setItemsToShow((prev) => prev + 3)}
                className="flex gap-2 items-center px-4 py-2 group border-2 border-mainColor text-mainColor dark:border-baseColor dark:text-baseColor dark:hover:bg-baseColor dark:hover:text-neutral-800 rounded-full font-semibold duration-300 ease-in-out hover:bg-mainColor hover:text-white"
              >
                Load More <FaArrowDown className="group-hover:animate-bounce" />
              </button>
            </div>
          </>
        )}
      </section>

      {/* Render modal menggunakan createPortal */}
      {selectedIndex !== null &&
        mounted &&
        createPortal(<Modal />, document.body)}
    </>
  );
};
