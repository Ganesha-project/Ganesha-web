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

    const fetchArticles = async (searchQuery = "", categorySlug = "") => {
        try {
            setLoad(true);
            
            // Base URL untuk articles
            let fetchArticlesUrl = `${process.env.NEXT_PUBLIC_APIURL}/api/articles?sort[0]=createdAt:${sort}&populate=*&pagination[page]=1&pagination[pageSize]=${itemsToShow}`;
            
            // Tambahkan filter search jika ada
            if (searchQuery) {
                fetchArticlesUrl += `&filters[Title][$containsi]=${searchQuery}`;
            }
            
            // Tambahkan filter category jika ada
            if (categorySlug) {
                fetchArticlesUrl += `&filters[category][Slug][$eq]=${categorySlug}`;
            }

            const articlesRes = await fetch(fetchArticlesUrl);

            if (!articlesRes.ok) {
                throw new Error("Failed to fetch articles");
            }

            const articlesData = await articlesRes.json();

            // Validasi data sebelum set state
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
            
            // URLs untuk fetch data
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

            // Validasi dan transformasi data articles
            const validArticlesData = {
                ...articlesData,
                data: articlesData.data ? articlesData.data.filter(item => 
                    item && 
                    item.attributes && 
                    item.attributes.Title
                ) : []
            };

            // Validasi dan transformasi data trending
            const validTrendingData = {
                ...trendingData,
                data: trendingData.data ? trendingData.data.filter(item => 
                    item && 
                    item.attributes && 
                    item.attributes.Title
                ) : []
            };

            // Extract categories dari articles data - hanya yang memiliki category
            const categoriesFromArticles = validArticlesData.data
                .map(article => article.attributes.category?.data)
                .filter(category => category && category.attributes) // Filter out null categories
                .reduce((unique, category) => {
                    // Remove duplicates berdasarkan id
                    if (!unique.find(item => item.id === category.id)) {
                        unique.push(category);
                    }
                    return unique;
                }, []);

            // Format categories data sesuai dengan yang diharapkan TilesFilter
            const validCategoriesData = {
                data: categoriesFromArticles
            };

            console.log('===============Articles Data=====================');
            console.log(validArticlesData);
            console.log('===============Categories Data==================');
            console.log(validCategoriesData);
            console.log('====================================');

            setNewData(validArticlesData);
            setCategories(validCategoriesData);
            setTrendingData(validTrendingData);
            setTotalItems(articlesData?.meta?.pagination?.total || 0);
            setloadNew(false);
            setLoad(false);
            
        } catch (error) {
            console.error('Fetch initial data error:', error);
            setError(error.message);
            setLoad(false);
            setloadNew(false);
        }
    };

    // Effect untuk initial load
    useEffect(() => {
        fetchInitialData();
    }, [itemsToShow, sort]);

    // Handler untuk search
    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
        if (searchTerm.trim()) {
            fetchArticles(searchTerm);
        } else {
            fetchInitialData(); // Reset ke data awal jika search kosong
        }
    };

    // Handler untuk load more
    const loadMore = () => {
        setloadNew(true);
        setItemsToShow(prev => prev + 4);
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

    // Get first valid article for meta tags
    const firstArticle = getFirstValidArticle();

    // Safe meta data extraction
    const metaTitle = firstArticle?.attributes?.Title || "Artikel Ganesha Consulting";
    const metaDescription = firstArticle?.attributes?.Summary || firstArticle?.attributes?.Excerpt || "Pelajari panduan lengkap mengenai berbagai topik bisnis di Ganesha Consulting.";
    const metaImage = firstArticle?.attributes?.Thumbnail?.data?.attributes?.url || "/default-thumbnail.jpg";

    // Error handler component
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

    // No results component
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
                            loadNew={loadNew}
                        />

                        {loadNew && <SkeletonCard header={"hidden"} />}

                        {!searchTerm && itemsToShow < totalItems && !loadNew && (
                            <Pagination loadMore={loadMore} />
                        )}
                    </>
                ) : null}
            </section>
        </>
    );
}