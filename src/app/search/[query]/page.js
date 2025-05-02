"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { RxCross2 } from "react-icons/rx";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { useArticles } from "@/hooks/useArticle";
import { ExtrasPackages, PMAPackages, PTPackages } from "../../../DB/PTPackages";
import { AccountantPackages } from "../../../DB/AccountantPackages";
import { CVPackages } from "../../../DB/CVPackages";
import { HakiPackages } from "../../../DB/HakiPackages";
import { VirtualOfficePackages } from "../../../DB/VOPackages";
import { KonsultanPajakPackages, konsultanPajakPMA, konsultanPajakPMDN, pelaporanSPT, pendaftaranPajakDaerah, perpajakanLainnya } from "../../../DB/PajakPackages";
import { SMPackages } from "../../../DB/SMPackages";
import { WebPackages } from "../../../DB/WebPackages";
import { BadanUsahaPackages } from "../../../DB/BuPackages";
import { servicePackages } from "../../../DB/IzinPackages";
import { useRouter } from "next/navigation";
import { slugify } from "@/helper/slugify";
import Link from "next/link";


export default function SearchPageQuery() {
    const { query } = useParams();
    const router = useRouter();
    const initialQuery = decodeURIComponent(query).replace(/-/g, " ").toLowerCase();

    const [searchQuery, setSearchQuery] = useState(initialQuery);
    const [staticResults, setStaticResults] = useState([]);
    const [staticLoad, setStaticLoad] = useState(false);
    const [offset, setOffset] = useState(0);

    const {
        articles,
        handleSearch,
        fetchMore,
        hasMore,
        loadArticles,
    } = useArticles({ initialLimit: 9 });

    // Fetch artikel dari server berdasarkan query
    useEffect(() => {
        if (searchQuery) {
            handleSearch(searchQuery, 0);
        }
    }, [searchQuery]);

    const isQueryValid = searchQuery.trim() !== "";

    const rawArticles = articles?.data || [];

    const articleResults = isQueryValid
        ? rawArticles
            .filter((item) => {
                const title = item.attributes?.Title?.toLowerCase() || "";
                const excerpt = item.attributes?.Excerpt?.toLowerCase() || "";
                return title.includes(searchQuery.toLowerCase()) || excerpt.includes(searchQuery.toLowerCase());
            })
            .map((item) => {
                const attr = item.attributes || {};
                return {
                    id: item.id,
                    title: attr.Title || "No Title",
                    slug: attr.Slug || "",
                    categorySlug: attr.category?.data?.attributes?.ArticleCategory,
                    trending: attr.Trending || false,
                    content: attr.Excerpt || "",
                };
            })
        : [];

    // Static search
    const staticData = [
        ...PTPackages,
        ...PMAPackages,
        ...ExtrasPackages,
        ...CVPackages,
        ...BadanUsahaPackages,
        ...VirtualOfficePackages,
        ...AccountantPackages,
        ...HakiPackages,
        ...servicePackages,
        ...KonsultanPajakPackages,
        ...pelaporanSPT,
        ...konsultanPajakPMDN,
        ...konsultanPajakPMA,
        ...pendaftaranPajakDaerah,
        ...perpajakanLainnya,
        ...SMPackages,
        ...WebPackages
    ];

    useEffect(() => {
        setStaticLoad(true);
        const lowerSearch = searchQuery.toLowerCase();

        const filtered = staticData.filter((item) => {
            const matchType = (item.type || "").toLowerCase().includes(lowerSearch);
            const matchKeyword = Array.isArray(item.keywords)
                ? item.keywords.some((keyword) =>
                    (keyword || "").toLowerCase().includes(lowerSearch)
                )
                : false;

            return matchType || matchKeyword;
        });

        setStaticResults(filtered);
        setStaticLoad(false);
    }, [searchQuery]);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setOffset(0);
        handleSearch(searchQuery, 0);
    };

    console.log('====================================');
    console.log(staticResults);
    console.log('====================================');

    const handleClear = () => {
        setSearchQuery("");
        setStaticResults([]);
        router.push("/search");
    };

    const handleLoadMore = () => {
        const nextOffset = offset + 9;
        setOffset(nextOffset);
        fetchMore(searchQuery, nextOffset);
    };

    const highlightText = (text, query) => {
        if (!query || !text) return text;
        const regex = new RegExp(`(${query})`, "gi");
        return text.split(regex).map((part, idx) =>
            part.toLowerCase() === query.toLowerCase() ? (
                <mark key={idx} className="font-extrabold dark:text-blue-300 text-blue-600 bg-transparent">
                    {part}
                </mark>
            ) : (
                part
            )
        );
    };

    const combinedResults = [...staticResults, ...articleResults];

    const filteredFeatures = (features, searchQuery) => {
        return features.filter((el) =>
            el.feature.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    const filteredKeywords = (keywords, searchQuery) => {
        return keywords.filter((k) =>
            k.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    return (
        <div>
            {/* Search Bar */}
            <div className="md:px-24 px-5 pt-24 sticky -top-10 backdrop-blur-sm bg-white/50 dark:bg-black/50 z-20">
                <form onSubmit={handleSearchSubmit}>
                    <label className={`${searchQuery !== "" && "!border-b"} z-[60] input w-full input-md md:input-xl rounded-none !px-0 focus-within:!border-b bg-transparent focus-within:bg-transparent focus-within:border-b-darkColor/40 dark:focus-within:border-b-lightColor/40 bg-opacity-0 focus:border-none focus:bg-none focus-within:outline-none outline-none border-0 focus:outline-transparent focus:outline-offset-0 flex items-center gap-[6px]`}>
                        {/* <PiMagnifyingGlassBold className={`${searchQuery !== "" && "hidden"} order-last text-black dark:text-white text-opacity-50 dark:text-opacity-50 text-2xl md:text-3xl`} /> */}

                        <input
                            type="text"
                            placeholder="Cari di Ganeshaconsulting.co.id"
                            className="grow text-2xl md:text-4xl h-12 font-semibold placeholder:text-black dark:placeholder:text-white dark:placeholder:text-opacity-50 placeholder:text-opacity-50 placeholder:text-2xl md:placeholder:text-4xl placeholder:font-semibold text-darkColor dark:text-lightColor"
                            defaultValue={searchQuery}
                            onBlur={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    setSearchQuery(e.target.value);
                                    handleSearchSubmit(e);
                                }
                            }}
                        />
                        {searchQuery !== "" ? (
                            <button type="button" onClick={handleClear}>
                                <RxCross2 className="text-xl hover:text-red-600 text-darkColor/50 dark:text-lightColor/50 duration-200 mr-[-3px]" />
                            </button>
                        ) : (
                            <button type="submit" className={`btn btn-ghost border-none order-last text-black dark:text-white text-opacity-50 dark:text-opacity-50 text-2xl md:text-3xl`}>
                                <PiMagnifyingGlassBold />
                            </button>
                        )}
                    </label>
                </form>
                <div className={`opacity-40 w-full h-[1px] group-focus-within:opacity-0 bg-darkColor dark:bg-lightColor`}></div>

            </div>

            {/* Results */}
            <div className="md:px-24 px-5 flex flex-col">
                {(!loadArticles || !staticLoad) && (
                    <h1 className="opacity-50 py-1 text-sm !order-first">{combinedResults.length} hasil yang ditemukan</h1>
                )}

                {/* Static Results */}
                {staticLoad ? (
                    <SkeletonList />
                ) : (
                    staticResults.length > 0 && (
                        <ul className="flex flex-col gap-2 mt-2">
                            {staticResults.map((item, idx) => {
                                const filtered = filteredFeatures(item.features || [], searchQuery);
                                const keyoworded = filteredKeywords(item.keywords || [], searchQuery);
                                return (
                                    <Link key={idx} href={`/${item.sourcePage}`}>
                                        <li className="p-5 bg-lightColor dark:bg-darkColor rounded-3xl hover:scale-[.99] transition-all">
                                            <h2 className="font-semibold text-lg mb-3">
                                                {highlightText(item.type, searchQuery)}
                                            </h2>
                                            <p className="flex flex-wrap gap-1">
                                                {filtered.length > 0 ? (
                                                    filtered.map((el, i) => (
                                                        <span
                                                            className="text-xs px-2 py-1 bg-white dark:bg-black rounded-full"
                                                            key={i}
                                                        >
                                                            {highlightText(el.feature, searchQuery)}
                                                        </span>
                                                    ))
                                                ) : (
                                                    <>
                                                        {item.features?.map((el, i) => (
                                                            <span
                                                                className="text-xs px-2 py-1 bg-white dark:bg-black rounded-full"
                                                                key={i}
                                                            >
                                                                {highlightText(el.feature, searchQuery)}
                                                            </span>
                                                        ))}
                                                    </>
                                                )}
                                            </p>
                                            {keyoworded.length > 0 && searchQuery !== "" &&
                                                (
                                                    <>
                                                        <p className="flex gap-1 flex-wrap text-xs mt-3 opacity-70 italic">
                                                            Terkait:
                                                            {keyoworded.map((key, i) => (
                                                                <span key={i}>
                                                                    {highlightText(key, searchQuery)}
                                                                    {i < keyoworded.length - 1 && ','}
                                                                </span>
                                                            ))}
                                                        </p>
                                                    </>
                                                )}
                                        </li>
                                    </Link>
                                )
                            })}
                        </ul>
                    )
                )}

                {/* Article Results */}
                {loadArticles ? (
                    <SkeletonList />
                ) : (
                    <>
                        <ul className={`flex flex-col gap-2 mt-2 ${articleResults.length > 0 && "order-first"}`}>
                            {articleResults?.map((item, idx) => (
                                <a key={idx} href={`/article/${slugify(item.categorySlug)}/${item.slug}`}>
                                    <li className="p-5 bg-lightColor dark:bg-darkColor rounded-3xl">
                                        <h2 className="font-semibold text-lg">
                                            {highlightText(item.title, searchQuery)}
                                        </h2>
                                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                            {highlightText(item.content?.slice(0, 100), searchQuery)}{" "}
                                            <span className="italic hover:underline">Baca Lebih Lanjut...</span>
                                        </p>
                                        <span className="text-xs italic">Artikel - {item.categorySlug}</span>
                                    </li>
                                </a>
                            ))}
                        </ul>

                        {hasMore && articleResults.length > 0 && (
                            <div className="text-center mt-6">
                                <button onClick={handleLoadMore} className="btn btn-sm bg-neutral-800 hover:bg-black text-white px-6">
                                    Tampilkan lebih banyak
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div >
    );
}

// Skeleton Loading List
function SkeletonList() {
    return (
        <div className="flex flex-col gap-2 mt-2">
            {[...Array(3)].map((_, idx) => (
                <div
                    key={idx}
                    style={{ transitionDelay: `${idx * 10}ms` }}
                    className="rounded-3xl w-full h-[80px] dark:bg-darkColor bg-lightColor animate-pulse"
                ></div>
            ))}
        </div>
    );
}
