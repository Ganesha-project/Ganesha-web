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
import Maintenance from "@/components/Maintenance";

export default function ArticlePage() {
    const [newData, setNewData] = useState(null);
    const [categories, setCategories] = useState(null);
    const [trendingData, setTrendingData] = useState(null);
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [sort, setSort] = useState('DESC');
    const [itemsToShow, setItemsToShow] = useState(8);
    const [loadingMore, setLoadingMore] = useState(false); // Renamed from loadNew
    const [totalItems, setTotalItems] = useState(0);
    const [isMaintenance, setIsMaintenance] = useState(true)

    const fetchMoreArticles = async () => {
        try {
            setLoadingMore(true);

            // Calculate next page based on current items
            const nextPage = Math.ceil((itemsToShow + 4) / 4);
            const newItemsToShow = itemsToShow + 4;

            let fetchArticlesUrl = `${process.env.NEXT_PUBLIC_APIURL}/api/articles?sort[0]=createdAt:${sort}&populate=*&pagination[page]=1&pagination[pageSize]=${newItemsToShow}`;

            if (searchTerm) {
                fetchArticlesUrl += `&filters[Title][$containsi]=${searchTerm}`;
            }

            const articlesRes = await fetch(fetchArticlesUrl);

            if (!articlesRes.ok) {
                throw new Error("Failed to fetch more articles");
            }

            const articlesData = await articlesRes.json();

            const validArticlesData = {
                ...articlesData,
                data: articlesData.data ? articlesData.data.filter(item =>
                    item &&
                    item.attributes &&
                    item.attributes.Title
                ) : []
            };

            setNewData(validArticlesData);
            setItemsToShow(newItemsToShow);
            setLoadingMore(false);

        } catch (error) {
            console.error('Fetch more articles error:', error);
            setError(error.message);
            setLoadingMore(false);
        }
    };

    const fetchArticles = async (searchQuery = "", categorySlug = "") => {
        try {
            setLoad(true);

            let fetchArticlesUrl = `${process.env.NEXT_PUBLIC_APIURL}/api/articles?sort[0]=createdAt:${sort}&populate=*&pagination[page]=1&pagination[pageSize]=${itemsToShow}`;

            if (searchQuery) {
                fetchArticlesUrl += `&filters[Title][$containsi]=${searchQuery}`;
            }

            if (categorySlug) {
                fetchArticlesUrl += `&filters[category][Slug][$eq]=${categorySlug}`;
            }

            const articlesRes = await fetch(fetchArticlesUrl);

            if (!articlesRes.ok) {
                throw new Error("Failed to fetch articles");
            }

            const articlesData = await articlesRes.json();

            const validArticlesData = {
                ...articlesData,
                data: articlesData.data ? articlesData.data.filter(item =>
                    item &&
                    item.attributes &&
                    item.attributes.Title
                ) : []
            };

            setNewData(validArticlesData);
            setTotalItems(articlesData?.meta?.pagination?.total || 0);
            setLoad(false);

        } catch (error) {
            console.error('Fetch articles error:', error);
            setError(error.message);
            setLoad(false);
        }
    };

    const fetchInitialData = async () => {
        try {
            setLoad(true);

            const fetchArticlesUrl = `${process.env.NEXT_PUBLIC_APIURL}/api/articles?sort[0]=createdAt:${sort}&populate=*&pagination[page]=1&pagination[pageSize]=${itemsToShow}`;
            const fetchTrendingUrl = `${process.env.NEXT_PUBLIC_APIURL}/api/articles?sort[0]=createdAt:DESC&filters[Trending][$eq]=true&populate=*&pagination[page]=1&pagination[pageSize]=${itemsToShow}`;

            const [articlesRes, trendingRes] = await Promise.all([
                fetch(fetchArticlesUrl),
                fetch(fetchTrendingUrl),
            ]);

            if (!articlesRes.ok || !trendingRes.ok) {
                throw new Error("One or more network requests failed");
            }

            const [articlesData, trendingData] = await Promise.all([
                articlesRes.json(),
                trendingRes.json()
            ]);

            const validArticlesData = {
                ...articlesData,
                data: articlesData.data ? articlesData.data.filter(item =>
                    item &&
                    item.attributes &&
                    item.attributes.Title
                ) : []
            };

            const validTrendingData = {
                ...trendingData,
                data: trendingData.data ? trendingData.data.filter(item =>
                    item &&
                    item.attributes &&
                    item.attributes.Title
                ) : []
            };

            const categoriesFromArticles = validArticlesData.data
                .map(article => article.attributes.category?.data)
                .filter(category => category && category.attributes)
                .reduce((unique, category) => {
                    if (!unique.find(item => item.id === category.id)) {
                        unique.push(category);
                    }
                    return unique;
                }, []);

            const validCategoriesData = {
                data: categoriesFromArticles
            };

            setNewData(validArticlesData);
            setCategories(validCategoriesData);
            setTrendingData(validTrendingData);
            setTotalItems(articlesData?.meta?.pagination?.total || 0);
            setLoadingMore(false);
            setLoad(false);

        } catch (error) {
            console.error('Fetch initial data error:', error);
            setError(error.message);
            setLoad(false);
            setLoadingMore(false);
        }
    };

    // Effect untuk initial load
    useEffect(() => {
        fetchInitialData();
    }, [sort]); // Removed itemsToShow from dependency

    // Handler untuk search
    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
        if (searchTerm.trim()) {
            fetchArticles(searchTerm);
        } else {
            fetchInitialData();
        }
    };

    // Handler untuk load more - updated
    const loadMore = () => {
        fetchMoreArticles();
    };

    // Handler untuk sorting
    const setSortOrder = (order) => {
        setSort(order);
    };

    // Helper function untuk mendapatkan first article yang valid
    const getFirstValidArticle = () => {
        if (!newData || !newData.data || !Array.isArray(newData.data)) {
            return null;
        }

        return newData.data.find(article =>
            article &&
            article.attributes &&
            article.attributes.Title
        );
    };

    const firstArticle = getFirstValidArticle();
    const metaTitle = firstArticle?.attributes?.Title || "Artikel Ganesha Consulting";
    const metaDescription = firstArticle?.attributes?.Summary || firstArticle?.attributes?.Excerpt || "Pelajari panduan lengkap mengenai berbagai topik bisnis di Ganesha Consulting.";
    const metaImage = firstArticle?.attributes?.Thumbnail?.data?.attributes?.url || "/default-thumbnail.jpg";

    const ErrorDisplay = ({ message, showReload = true }) => (
        <div className="flex items-center justify-center h-64">
            <div className="text-center">
                <p className="text-red-500 font-semibold">Error: {message}</p>
                {showReload && (
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    >
                        Reload Page
                    </button>
                )}
            </div>
        </div>
    );

    const NoResults = () => (
        <div className="h-[30lvh] flex items-center justify-center">
            <p className="text-xl text-center">
                No articles found
                {searchTerm && (
                    <>
                        <br />
                        for <span className="font-semibold text-mainColor dark:text-baseColor">"{searchTerm}"</span>
                        <br />
                        Please try a different search term.
                    </>
                )}
            </p>
        </div>
    );

    if(isMaintenance){
        return (
            <Maintenance/>
        )
    }

    return (
        <>
            <Head>
                <title>{metaTitle}</title>
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:image" content={metaImage} />
                <meta property="og:url" content={typeof window !== "undefined" ? window.location.href : ""} />
                <meta property="og:type" content="article" />
                <meta name="description" content={metaDescription} />
            </Head>

            <BannerArticle>
                {error ? (
                    <ErrorDisplay message={error} />
                ) : load ? (
                    <SkeletonBanner />
                ) : (
                    <HighlightCarousel data={trendingData} />
                )}
            </BannerArticle>

            <section className="md:px-24 2xl:px-80 px-5 space-y-5 pt-10 mb-10">
                <Searchbar onSearch={handleSearch} />

                {error ? (
                    <ErrorDisplay message={error} showReload={false} />
                ) : load ? (
                    <SkeletonTiles />
                ) : categories ? (
                    <TilesFilter categories={categories} />
                ) : null}

                {error ? (
                    <ErrorDisplay message={error} showReload={false} />
                ) : load ? (
                    <SkeletonCard />
                ) : newData && newData.data && newData.data.length === 0 ? (
                    <NoResults />
                ) : newData && newData.data ? (
                    <>
                        <ArticleCard
                            isSearching={!!searchTerm}
                            data={newData}
                            moms={
                                <Headtag
                                    label={searchTerm ? 'Search Results' : 'Artikel Populer'}
                                    filter={!searchTerm}
                                    setSortOrder={setSortOrder}
                                />
                            }
                            items={itemsToShow}
                            loadNew={false} // Always false since we handle loading separately
                        />

                        {/* Show skeleton cards only when loading more */}
                        {loadingMore && <SkeletonCard header={"hidden"} count={4} />}

                        {!searchTerm && itemsToShow < totalItems && !loadingMore && (
                            <Pagination loadMore={loadMore} loading={loadingMore} />
                        )}
                    </>
                ) : null}
            </section>
        </>
    );
}