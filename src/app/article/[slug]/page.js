"use client";

import { TopCategory } from "@/components/ArticleComponent/TopCategory";
import { ArticleCardCategory } from "@/components/ArticleComponent/ArticleCardCategory";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { SkeletonCard } from "@/components/Skeleton/SkeletonCard";
import { SkeletonTopCategory } from "@/components/Skeleton/SkeletonTopCategory";
import { Headtag } from "@/components/ArticleComponent/HeadTag";
import { slugify } from "@/helper/slugify";

export default function ArticlesCategoriesPage() {
    const { slug } = useParams()  // Ambil slug dari URL

    const [newData, setNewData] = useState(null);
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState(null);

    useEffect(() => {
        async function fetchData() {
            if (!slug) return;  // Jangan lakukan apa-apa jika slug belum ada
            try {
                let fetchCategoryUrl = `${process.env.NEXT_PUBLIC_APIURL}/api/categories/${slug}?populate[articles]=*`;

                const categoryRes = await fetch(fetchCategoryUrl);

                if (!categoryRes.ok) {
                    throw new Error("Network response was not ok");
                }

                const categoryData = await categoryRes.json();
                setCategory(categoryData.data.attributes)
                setNewData(categoryData.data.attributes.articles);  // Ambil artikel dari data kategori
                setLoad(false);
            } catch (error) {
                setError(error.message);
                setLoad(false);
            }
        }
        fetchData();
    }, [slug]);  // Tambahkan slug sebagai dependency


    return (
        <>
            {error ? (
                <div>Error: {error}</div>
            ) : load ? (
                <SkeletonTopCategory />
            ) : (
                <TopCategory category={category} />
            )}
            <div className="lg:mx-24 mx-5">
                {error ? (
                    <div>Error: {error}</div>
                ) : load ? (
                    <SkeletonCard />
                ) : newData && newData.data && newData.data.length === 0 ? (
                    <div className="h-[30lvh] flex items-center justify-center">
                        <p className="text-xl text-center">
                            No articles found for
                            <br />
                            <span className="font-semibold text text-mainColor dark:text-baseColor">"{category.ArticleCategory}"</span>
                            <br />
                            Please check the other categories!
                        </p>
                    </div>
                ) : (
                    <ArticleCardCategory
                        category={category}
                        data={newData}
                        moms={<Headtag label={'Latest Update'} hide={true} />}
                    />
                )}
            </div>
        </>
    );
}

