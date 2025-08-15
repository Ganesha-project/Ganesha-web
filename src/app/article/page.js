"use client";
import { ArticleCard } from "@/components/ArticleComponent/ArticleCard";
import { BannerArticle } from "@/components/ArticleComponent/Banner";
import { Searchbar } from "@/components/ArticleComponent/Searchbar";
import { TilesFilter } from "@/components/ArticleComponent/TilesFilter";
import { useEffect, useState } from "react";
import { SkeletonBanner } from "@/components/Skeleton/SkeletonBanner";
import { SkeletonTiles } from "@/components/Skeleton/SkeletonTiles";
import { SkeletonCard } from "@/components/Skeleton/SkeletonCard";
import { Headtag } from "@/components/ArticleComponent/HeadTag";
import Head from "next/head";
import { HighlightCarousel } from "@/components/ArticleComponent/HightlightCarousel";
import { Pagination } from "@/components/ArticleComponent/Pagination";

export default function ArticlePage() {
    const [newData, setNewData] = useState({ data: [], meta: { pagination: { total: 0 } } });
    const [categories, setCategories] = useState({ data: [], meta: { pagination: { total: 0 } } });
    const [trendingData, setTrendingData] = useState({ data: [], meta: { pagination: { total: 0 } } });
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [sort, setSort] = useState("DESC");
    const [itemsToShow, setItemsToShow] = useState(8);
    const [loadNew, setLoadNew] = useState(false);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoad(true);

                const fetchArticlesUrl = `${process.env.NEXT_PUBLIC_APIURL}/api/articles?sort[0]=createdAt:${sort}&populate=*&pagination[page]=1&pagination[pageSize]=${itemsToShow}`;
                const fetchCategoriesUrl = `${process.env.NEXT_PUBLIC_APIURL}/api/categories?populate=*`;
                const fetchTrendingUrl = `${process.env.NEXT_PUBLIC_APIURL}/api/articles?sort[0]=createdAt:DESC&filters[Trending][$eq]=true&populate=*&pagination[page]=1&pagination[pageSize]=${itemsToShow}`;

                const [articlesRes, categoriesRes, trendingRes] = await Promise.all([
                    fetch(fetchArticlesUrl),
                    fetch(fetchCategoriesUrl),
                    fetch(fetchTrendingUrl),
                ]);

                if (!articlesRes.ok || !categoriesRes.ok || !trendingRes.ok) {
                    throw new Error("Failed to fetch data");
                }

                const articlesData = await articlesRes.json();
                const categoriesData = await categoriesRes.json();
                const trendingDataJson = await trendingRes.json();

                setNewData(articlesData ?? { data: [], meta: { pagination: { total: 0 } } });
                setCategories(categoriesData ?? { data: [], meta: { pagination: { total: 0 } } });
                setTrendingData(trendingDataJson ?? { data: [], meta: { pagination: { total: 0 } } });
                setTotalItems(articlesData?.meta?.pagination?.total ?? 0);

                setLoad(false);
                setLoadNew(false);
            } catch (err) {
                setError(err.message || "Something went wrong");
                setLoad(false);
                setLoadNew(false);
            }
        }
        fetchData();
    }, [itemsToShow, sort]);

    const fetchFilteredData = async (search) => {
        try {
            setLoad(true);
            const fetchFilteredArticlesUrl = `${process.env.NEXT_PUBLIC_APIURL}/api/articles?filters[Title][$containsi]=${search}&populate=*`;
            const articlesRes = await fetch(fetchFilteredArticlesUrl);

            if (!articlesRes.ok) {
                throw new Error("Failed to fetch filtered data");
            }

            const articlesData = await articlesRes.json();
            setNewData(articlesData ?? { data: [], meta: { pagination: { total: 0 } } });
            setLoad(false);
        } catch (err) {
            setError(err.message || "Something went wrong");
            setLoad(false);
        }
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
        fetchFilteredData(term);
    };

    const loadMore = () => {
        setLoadNew(true);
        setItemsToShow((prev) => prev + 4);
    };

    const setSortOrder = (order) => {
        setSort(order);
    };

    const firstArticle = newData?.data?.[0]?.attributes;

    return (
        <>
            <Head>
                <title>{firstArticle?.Title ?? "Artikel Ganesha Consulting"}</title>
                <meta property="og:title" content={firstArticle?.Title ?? "Artikel Ganesha Consulting"} />
                <meta property="og:description" content={firstArticle?.Summary ?? "Pelajari panduan lengkap mengenai izin minuman beralkohol di Ganesha Consulting."} />
                <meta property="og:image" content={firstArticle?.Thumbnail?.url ?? "/default-thumbnail.jpg"} />
                <meta property="og:url" content={typeof window !== "undefined" ? window.location.href : ""} />
                <meta property="og:type" content="article" />
            </Head>

            <BannerArticle>
                {error ? (
                    <div>Error: {error}</div>
                ) : load ? (
                    <SkeletonBanner />
                ) : (
                    <HighlightCarousel data={trendingData} />
                )}
            </BannerArticle>

            <section className="md:px-24 2xl:px-80 px-5 space-y-5 pt-10 mb-10">
                <Searchbar onSearch={handleSearch} />

                {error ? (
                    <div>Error: {error}</div>
                ) : load ? (
                    <SkeletonTiles />
                ) : (
                    <TilesFilter categories={categories} />
                )}

                {error ? (
                    <div>Error: {error}</div>
                ) : load ? (
                    <SkeletonCard />
                ) : newData?.data?.length === 0 ? (
                    <div className="h-[30lvh] flex items-center justify-center">
                        <p className="text-xl text-center">
                            No articles found for
                            <br />
                            <span className="font-semibold text text-mainColor dark:text-baseColor">"{searchTerm}"</span>
                            <br />
                            Please try a different search term.
                        </p>
                    </div>
                ) : (
                    <>
                        <ArticleCard
                            isSearching={!!searchTerm}
                            data={newData}
                            moms={<Headtag label="Artikel Populer" filter={true} setSortOrder={setSortOrder} />}
                            items={itemsToShow}
                            loadNew={loadNew}
                        />

                        {loadNew && <SkeletonCard header="hidden" />}

                        {itemsToShow < totalItems && !loadNew && (
                            <Pagination loadMore={loadMore} />
                        )}
                    </>
                )}
            </section>
        </>
    );
}
