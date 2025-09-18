"use client";

import { useArticles } from "@/hooks/useArticle";
import { useState } from "react";
import { useActivities } from "@/hooks/useActivities";
import { ActivityLoader } from "./Loading/ActivityLoader";
import { ArticleLoader } from "./Loading/ArticleLoader";
import { AboutUsLinks } from "@/DB/Database";
import { slugify } from "@/helper/slugify";
import Link from "next/link";

export const AboutMenu = ({ expandedId, onClose }) => {
  const expandAnimationClass = expandedId
    ? "scale-100 -translate-y-0 opacity-100 duration-500 ease-in-out"
    : "scale-[.90] -translate-y-12 opacity-0 duration-500 ease-in-out";
  const { activities, loadActivity, errorActivity } = useActivities({
    initialShow: 2,
  });
  const { articles } = useArticles({ initialLimit: 6 });
  const [images, setImages] = useState([]);
  ("");
  const [orientations, setOrientations] = useState([]);

  const handleImageLoad = (e, idx) => {
    const { naturalWidth, naturalHeight } = e.target;
    const isPortrait = naturalHeight > naturalWidth;
    setOrientations((prev) => {
      const newOrientations = [...prev];
      newOrientations[idx] = isPortrait ? "portrait" : "landscape";
      return newOrientations;
    });
  };

  const getGridClass = () => {
    if (orientations.length < images.length) return "grid-cols-2"; // Default while loading
    const [a, b] = orientations;

    if (a === "portrait" && b === "portrait") return "grid-cols-2";
    return "grid-cols-1";
  };

  return (
    <>
      <section className={`${expandAnimationClass}`}>
        {/* Labels */}
        <div className={`duration-300  grid grid-cols-8 gap-4`}>
          <div className="col-span-2">
            <p
              className={`${expandAnimationClass} text-darkColor/70 tracking-normal dark:text-lightColor/70 text-xs font-bold block rounded-full mb-3 w-fit`}
            >
              Kenali Kami
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-8 gap-4">
        {/* Tiles */}
        <div className="col-span-3">
          <div className="grid grid-cols-3 gap-4">
            {AboutUsLinks.filter((cat) => cat.visibility).map((cat, index) => (
              <Link
                onClick={onClose}
                href={cat.href}
                key={index}
                className="block w-full"
              >
                {/* square wrapper */}
                <div className="relative w-full pb-[100%]">
                  {/* content */}
                  <div
                    className={`${expandAnimationClass} absolute inset-0 transition-transform overflow-hidden dark:bg-darkColor/50 bg-lightColor/50 rounded-3xl shadow-mainShadow flex flex-col items-center justify-center p-5 hover:bg-opacity-20 hover:scale-95`}
                    style={{ transitionDelay: `${index * 30}ms` }}
                  >
                    <div className="flex flex-col items-center justify-center gap-2 text-sm z-10">
                      <div
                        className="text-xl p-2 rounded-full shadow"
                        style={{
                          color: cat.accentLight,
                          backgroundColor: cat.accentDark,
                        }}
                      >
                        {cat.icon}
                      </div>
                      <p
                        className="text-xs font-bold leading-tight truncate-last-2 text-center"
                        style={{ color: cat.accentDark }}
                      >
                        {cat.label}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Activity
                <div className="col-span-3">
                    {loadActivity ? (
                        <ActivityLoader />
                    ) : (
                        <div className={`grid ${getGridClass()} gap-4 ${expandAnimationClass}`}>
                            {activities.map((item, idx) => (
                                <img
                                    key={idx}
                                    src={item.imageUrl[0]}
                                    alt=""
                                    className="hover:scale-95 duration-500 ease-in-out rounded-3xl shadow-mainShadow w-fit h-auto max-h-[45lvh] object-contain dark:bg-darkColor/50 bg-lightColor/50"
                                    onLoad={(e) => handleImageLoad(e, idx)}
                                />
                            ))}
                        </div>
                    )}

                </div> */}

        {/* Article */}
        <div className="col-span-3">
          {articles?.data?.length ? (
            <div className="grid grid-cols-1 gap-4">
              {articles.data.map((article) => (
                <Link
                  onClick={onClose}
                  href={
                    "/article/" +
                    slugify(
                      article?.attributes?.category?.data?.attributes
                        ?.ArticleCategory
                    ) +
                    "/" +
                    article.attributes.Slug
                  }
                  key={article.id}
                  className={`${expandAnimationClass} hover:scale-95 hover:dark:bg-darkColor/80 hover:bg-lightColor/80 grow transition-transform relative overflow-hidden w-full h-full dark:bg-darkColor/50 bg-lightColor/50 rounded-3xl shadow-mainShadow flex flex-col py-3 px-5 hover:bg-opacity-20`}
                >
                  <p className="font-bold text-md capitalize bg-gradient-to-br from-darkColor via-darkColor to-mainColor  dark:from-lightColor dark:via-lightColor dark:to-secondaryColor bg-clip-text text-transparent w-fit hover:underline">
                    {article.attributes?.Title}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <></>
            // <ArticleLoader />
          )}
        </div>
      </section>
      {/* <section className={`${expandAnimationClass}`}>
                // Labels
                <div className={`duration-300  grid grid-cols-8 gap-4`}>
                    <div className="col-span-2">
                        <p className={`${expandAnimationClass} text-darkColor/70 tracking-normal dark:text-lightColor/70 text-xs font-bold block rounded-full mb-3 w-fit`}>
                            Kenali Kami
                        </p>
                    </div>
                    <div className="col-span-3">
                        <p className={`${expandAnimationClass} text-darkColor/70 tracking-normal dark:text-lightColor/70 text-xs font-bold block  rounded-full mb-3 w-fit`}>
                            Aktifitas
                        </p>
                    </div>
                    <div className="col-span-2">
                        <p className={`${expandAnimationClass} text-darkColor/70 tracking-normal dark:text-lightColor/70 text-xs font-bold block  rounded-full mb-3 w-fit`}>
                            Info Terbaru
                        </p>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-8 gap-4">

                // Tiles
                <div className="col-span-2">
                    <div className="grid grid-cols-2 gap-4">
                        {AboutUsLinks.filter(cat => cat.visibility).map((cat, index) => (
                            <Link
                                onClick={onClose}
                                href={cat.href}
                                key={index}>
                                <div
                                    key={index}
                                    className={`${cat.visibility === true ? "block" : "hidden"} ${expandAnimationClass} grow aspect-square parent transition-transform relative overflow-hidden w-full h-full dark:bg-darkColor/50 bg-lightColor/50 rounded-3xl shadow-mainShadow flex flex-col items-center justify-center p-5 hover:bg-opacity-20  hover:scale-95`}
                                    style={{ transitionDelay: `${index * 30}ms` }}
                                >
                                    {/* Glow element 
                                    <div
                                        className="absolute top-0 left-0 w-[50%] h-[50%] rounded-full blur-3xl opacity-80"
                                        style={{
                                            backgroundColor: cat.accentLight,
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                    />

                                    {/* Hover Element 
                                    <div
                                        className="absolute inset-0 z-0 opacity-0 child transition-opacity duration-300"
                                        style={{
                                            backgroundColor: cat.accentLight,
                                            mixBlendMode: 'multiply',
                                        }}
                                    />

                                    {/* Icon 
                                    <div className="">
                                        <div className="flex flex-col items-center justify-center text-center gap-2 text-sm w-fit h-fit z-10"                                        >
                                            <div
                                                className="text-xl p-2 rounded-full w-fit h-fit z-10 shadow"
                                                style={{
                                                    color: cat.accentLight,
                                                    backgroundColor: cat.accentDark,
                                                }}
                                            >
                                                {cat.icon}
                                            </div>
                                            <p
                                                className="text-xs font-bold brightness-50 dark:brightness-100 leading-tight truncate-last-2"
                                                style={{ color: cat.accentDark }}
                                            >
                                                {cat.label}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Activity 
                <div className="col-span-3">
                    {loadActivity ? (
                        <ActivityLoader />
                    ) : (
                        <div className={`grid ${getGridClass()} gap-4 ${expandAnimationClass}`}>
                            {activities.map((item, idx) => (
                                <img
                                    key={idx}
                                    src={item.imageUrl[0]}
                                    alt=""
                                    className="hover:scale-95 duration-500 ease-in-out rounded-3xl shadow-mainShadow w-fit h-auto max-h-[45lvh] object-contain dark:bg-darkColor/50 bg-lightColor/50"
                                    onLoad={(e) => handleImageLoad(e, idx)}
                                />
                            ))}
                        </div>
                    )}

                </div>


                {/* Article 
                <div className="col-span-3">
                    {articles?.data?.length ? (
                        <div className="grid grid-cols-1 gap-4">
                            {articles.data.map((article) => (
                                <Link
                                    onClick={onClose}
                                    href={'/article/' + slugify(article?.attributes?.category?.data?.attributes?.ArticleCategory) + "/" + article.attributes.Slug}
                                    key={article.id}
                                    className={`${expandAnimationClass} hover:scale-95 hover:dark:bg-darkColor/80 hover:bg-lightColor/80 grow transition-transform relative overflow-hidden w-full h-full dark:bg-darkColor/50 bg-lightColor/50 rounded-3xl shadow-mainShadow flex flex-col py-3 px-5 hover:bg-opacity-20`}
                                >
                                    <p className="font-bold text-md capitalize bg-gradient-to-br from-darkColor via-darkColor to-mainColor  dark:from-lightColor dark:via-lightColor dark:to-secondaryColor bg-clip-text text-transparent w-fit hover:underline">
                                        {article.attributes?.Title}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <ArticleLoader />
                    )}
                </div>
            </section> */}
    </>
  );
};
