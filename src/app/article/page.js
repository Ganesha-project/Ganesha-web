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
    const [newData, setNewData] = useState(null);
    const [categories, setCategories] = useState(null);
    const [trendingData, setTrendingData] = useState(null);
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [sort, setSort] = useState('DESC');
    const [itemsToShow, setItemsToShow] = useState(8);
    const [loadNew, setloadNew] = useState(false);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        async function fetchData() {
            try {
                let fetchArticlesUrl = `${process.env.NEXT_PUBLIC_APIURL}/api/articles?sort[0]=createdAt:${sort}&populate=*&pagination[page]=1&pagination[pageSize]=${itemsToShow}`;
                let fetchCategoriesUrl = `${process.env.NEXT_PUBLIC_APIURL}/api/categories?populate=*`;
                let fetchTrending = `${process.env.NEXT_PUBLIC_APIURL}/api/articles?sort[0]=createdAt:DESC&filters[Trending][$eq]=true&populate=*&pagination[page]=1&pagination[pageSize]=${itemsToShow}`;

                const [articlesRes, categoriesRes, trendingRes] = await Promise.all([
                    fetch(fetchArticlesUrl),
                    fetch(fetchCategoriesUrl),
                    fetch(fetchTrending),
                ]);

                if (!articlesRes.ok || !categoriesRes.ok) {
                    throw new Error("Network response was not ok");
                }

                const articlesData = await articlesRes.json();
                const categoriesData = await categoriesRes.json();
                const trendingData = await trendingRes.json();

                setNewData(articlesData);
                setCategories(categoriesData);
                setTrendingData(trendingData);
                setTotalItems(articlesData.meta.pagination.total); // NEW
                setloadNew(false); // reset loading indicator
                setLoad(false);
            } catch (error) {
                setError(error.message);
                setLoad(false);
            }
        }
        fetchData();
    }, [itemsToShow, sort]);

    const fetchFilteredData = async (search) => {
        try {
            setLoad(true);
            let fetchFilteredArticlesUrl = `${process.env.NEXT_PUBLIC_APIURL}/api/articles?filters[Title][$containsi]=${search}&populate=*`;
            const articlesRes = await fetch(fetchFilteredArticlesUrl);

            if (!articlesRes.ok) {
                throw new Error("Network response was not ok");
            }

            const articlesData = await articlesRes.json();
            setNewData(articlesData);
            setLoad(false);
        } catch (error) {
            setError(error.message);
            setLoad(false);
        }
    };

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
        fetchFilteredData(searchTerm);
    };

    const loadMore = () => {
        setloadNew(true);
        setItemsToShow(prev => prev + 4);
    };

    const setSortOrder = (order) => {
        setSort(order);
    };

    return (
        <>
            <Head>
                <title>{newData ? newData.data[0]?.attributes.Title : "Artikel Ganesha Consulting"}</title>
                <meta property="og:title" content={newData ? newData.data[0]?.attributes.Title : "Artikel Ganesha Consulting"} />
                <meta property="og:description" content={newData ? newData.data[0]?.attributes.Summary || "Pelajari panduan lengkap mengenai izin minuman beralkohol di Ganesha Consulting." : "Artikel Ganesha Consulting"} />
                <meta property="og:image" content={newData ? newData.data[0]?.attributes.Thumbnail.url : "/default-thumbnail.jpg"} />
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
                    <TilesFilter categories={newData} />
                )}

                {error ? (
                    <div>Error: {error}</div>
                ) : load ? (
                    <SkeletonCard />
                ) : newData && newData.data && newData.data.length === 0 ? (
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
                            moms={<Headtag label={'Artikel Populer'} filter={true} setSortOrder={setSortOrder} />}

                            items={itemsToShow}
                            loadNew={loadNew}
                        />

                        {loadNew && <SkeletonCard header={"hidden"} />}

                        {itemsToShow < totalItems && !loadNew && (
                            <Pagination loadMore={loadMore} />
                        )}
                    </>
                )}
            </section>
        </>
    );
}
