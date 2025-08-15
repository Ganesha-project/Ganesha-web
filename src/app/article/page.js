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
                setLoad(true);
                
                let fetchArticlesUrl = `${process.env.NEXT_PUBLIC_APIURL}/api/articles?sort[0]=createdAt:${sort}&populate=*&pagination[page]=1&pagination[pageSize]=${itemsToShow}`;
                let fetchCategoriesUrl = `${process.env.NEXT_PUBLIC_APIURL}/api/categories?populate=*`;
                let fetchTrending = `${process.env.NEXT_PUBLIC_APIURL}/api/articles?sort[0]=createdAt:DESC&filters[Trending][$eq]=true&populate=*&pagination[page]=1&pagination[pageSize]=${itemsToShow}`;

                const [articlesRes, categoriesRes, trendingRes] = await Promise.all([
                    fetch(fetchArticlesUrl),
                    fetch(fetchCategoriesUrl),
                    fetch(fetchTrending),
                ]);

                if (!articlesRes.ok || !categoriesRes.ok || !trendingRes.ok) {
                    throw new Error("Network response was not ok");
                }

                const articlesData = await articlesRes.json();
                const categoriesData = await categoriesRes.json();
                const trendingData = await trendingRes.json();

                // Validasi data sebelum set state
                const validArticlesData = {
                    ...articlesData,
                    data: articlesData.data ? articlesData.data.filter(item => item && item.attributes) : []
                };

                const validTrendingData = {
                    ...trendingData,
                    data: trendingData.data ? trendingData.data.filter(item => item && item.attributes) : []
                };

                setNewData(validArticlesData);
                setCategories(categoriesData);
                setTrendingData(validTrendingData);
                setTotalItems(articlesData?.meta?.pagination?.total || 0);
                setloadNew(false);
                setLoad(false);
            } catch (error) {
                console.error('Fetch error:', error);
                setError(error.message);
                setLoad(false);
                setloadNew(false);
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
            
            // Validasi data filtered
            const validFilteredData = {
                ...articlesData,
                data: articlesData.data ? articlesData.data.filter(item => item && item.attributes) : []
            };
            
            setNewData(validFilteredData);
            setLoad(false);
        } catch (error) {
            console.error('Filter fetch error:', error);
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
    const metaDescription = firstArticle?.attributes?.Summary || "Pelajari panduan lengkap mengenai izin minuman beralkohol di Ganesha Consulting.";
    const metaImage = firstArticle?.attributes?.Thumbnail?.data?.attributes?.url || "/default-thumbnail.jpg";

    return (
        <>
            <Head>
                <title>{metaTitle}</title>
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:image" content={metaImage} />
                <meta property="og:url" content={typeof window !== "undefined" ? window.location.href : ""} />
                <meta property="og:type" content="article" />
            </Head>

            <BannerArticle>
                {error ? (
                    <div className="flex items-center justify-center h-64">
                        <div className="text-center">
                            <p className="text-red-500 font-semibold">Error: {error}</p>
                            <button 
                                onClick={() => window.location.reload()} 
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Reload Page
                            </button>
                        </div>
                    </div>
                ) : load ? (
                    <SkeletonBanner />
                ) : (
                    <HighlightCarousel data={trendingData} />
                )}
            </BannerArticle>

            <section className="md:px-24 2xl:px-80 px-5 space-y-5 pt-10 mb-10">
                <Searchbar onSearch={handleSearch} />
                
                {error ? (
                    <div className="text-center py-8">
                        <p className="text-red-500">Error: {error}</p>
                    </div>
                ) : load ? (
                    <SkeletonTiles />
                ) : (
                    <TilesFilter categories={categories} />
                )}

                {error ? (
                    <div className="text-center py-8">
                        <p className="text-red-500">Error: {error}</p>
                    </div>
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
                ) : newData && newData.data ? (
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
                ) : null}
            </section>
        </>
    );
}