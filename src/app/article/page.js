"use client";
import { ArticleCard } from "@/components/ArticleComponent/ArticleCard";
import { BannerArticle } from "@/components/ArticleComponent/Banner";
import { Featured } from "@/components/ArticleComponent/Featured";
import { Searchbar } from "@/components/ArticleComponent/Searchbar";
import { TilesFilter } from "@/components/ArticleComponent/TilesFilter";
import { useEffect, useState } from "react";
import { SkeletonBanner } from "@/components/Skeleton/SkeletonBanner";
import { SkeletonTiles } from "@/components/Skeleton/SkeletonTiles";
import { SkeletonCard } from "@/components/Skeleton/SkeletonCard";
import { Headtag } from "@/components/ArticleComponent/HeadTag";
import { Pagination } from "@/components/ArticleComponent/Pagination";

export default function ArticlePage() {
    const [newData, setNewData] = useState(null);
    const [categories, setCategories] = useState(null);
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [itemsToShow, setItemsToShow] = useState(6); // Inisialisasi dengan 6 item

    useEffect(() => {
        async function fetchData() {
            try {
                let fetchArticlesUrl = `${process.env.NEXT_PUBLIC_APIURL}/api/articles?populate=*&pagination[page]=1&pagination[pageSize]=${itemsToShow}`;
                let fetchCategoriesUrl = `${process.env.NEXT_PUBLIC_APIURL}/api/categories?populate=*`;

                const [articlesRes, categoriesRes] = await Promise.all([
                    fetch(fetchArticlesUrl),
                    fetch(fetchCategoriesUrl),
                ]);

                if (!articlesRes.ok || !categoriesRes.ok) {
                    throw new Error("Network response was not ok");
                }

                const articlesData = await articlesRes.json();
                const categoriesData = await categoriesRes.json();

                setNewData(articlesData);
                setCategories(categoriesData);
                setLoad(false);
            } catch (error) {
                setError(error.message);
                setLoad(false);
            }
        }
        fetchData();
    }, [itemsToShow]); // Menambahkan itemsToShow sebagai dependensi untuk useEffect

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
        setItemsToShow(prevItems => prevItems + 3);
    };

    return (
        <>
            <BannerArticle>
                {error ? (
                    <div>Error: {error}</div>
                ) : load ? (
                    <SkeletonBanner />
                ) : (
                    <Featured data={newData} />
                )}
            </BannerArticle>
            <section className="md:px-24 2xl:px-80 px-5 space-y-5 pt-24 mb-10">
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
                    <ArticleCard
                        isSearching={!!searchTerm}
                        data={newData}
                        moms={<Headtag label={'Fresh Articles'} hide={true} />}
                        loadMore={loadMore}
                        items={itemsToShow}
                    />
                )}
           
            </section>
        </>
    );
}
