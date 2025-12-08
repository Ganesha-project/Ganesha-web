"use client";
import { ArticleContent } from "@/components/ArticleComponent/ArticleDetail/ArticleContent";
import { BannerArticleDetail } from "@/components/ArticleComponent/ArticleDetail/BannerArticleDetail";
import { SideRec } from "@/components/ArticleComponent/ArticleDetail/SideRec";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Head from 'next/head';
import { ArticleDetailSkeleton } from "@/components/Skeleton/ArticleDetailSkeleton";

const API_URL = process.env.NEXT_PUBLIC_APIURL

export default function ArticleDetail() {
    // PERBAIKAN: Gunakan 'slug' bukan 'id'
    const { slug } = useParams();
    const [data, setData] = useState(null);
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchData() {
            if (!slug) return;
            
            try {
                // PERBAIKAN: Gunakan endpoint yang benar dengan slug
                const response = await fetch(`${API_URL}/content/articles/${slug}`);
                
                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error("Article not found");
                    }
                    throw new Error("Failed to fetch article");
                }

                const result = await response.json();
                
                if (result.success) {
                    setData(result.data);
                } else {
                    throw new Error(result.message || "Failed to load article");
                }
            } catch (err) {
                console.error("Error fetching article:", err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        async function fetchRecommendedArticles() {
            try {
                // Fetch artikel terkait untuk rekomendasi
                const response = await fetch(`${API_URL}/content/articles?limit=6&status=PUBLISHED`);
                
                if (!response.ok) throw new Error("Failed to fetch recommended articles");

                const result = await response.json();
                
                if (result.success) {
                    setArticles(result.data);
                }
            } catch (err) {
                console.error("Error fetching recommended articles:", err);
            }
        }

        fetchData();
        fetchRecommendedArticles();
    }, [slug]);

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-red-500 mb-4">Error</h1>
                    <p className="text-gray-600 dark:text-gray-400">{error}</p>
                    <button
                        onClick={() => window.history.back()}
                        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    // Meta tags untuk SEO
    const metaTitle = data?.title || 'Loading...';
    const metaDescription = data?.excerpt || data?.content?.substring(0, 160) || 'Loading...';
    const metaImage = data?.thumbnail?.url || '/default-image.jpg';

    return (
        <>
            <Head>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:image" content={metaImage} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={typeof window !== "undefined" ? window.location.href : ""} />
            </Head>
            
            {isLoading ? (
                <ArticleDetailSkeleton />
            ) : data ? (
                <section className="flex flex-col gap-20">
                    <div className="mx-5 md:mx-24 2xl:mx-80">
                        <BannerArticleDetail data={data} />
                        <ArticleContent data={data} />
                    </div>
                    {articles.length > 0 && <SideRec data={articles} />}
                </section>
            ) : (
                <div className="flex items-center justify-center min-h-screen">
                    <p className="text-xl text-gray-600 dark:text-gray-400">No article data available</p>
                </div>
            )}
        </>
    );
}