"use client";
import { ArticleContent } from "@/components/ArticleComponent/ArticleDetail/ArticleContent";
import { BannerArticleDetail } from "@/components/ArticleComponent/ArticleDetail/BannerArticleDetail";
import { SideRec } from "@/components/ArticleComponent/ArticleDetail/SideRec";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Head from 'next/head';
import { ArticleDetailSkeleton } from "@/components/Skeleton/ArticleDetailSkeleton";

const baseURLImg = process.env.NEXT_PUBLIC_URL_STRAPI_IMG;

export default function ArticleDetail() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/articles/${id}?populate[category]=*`);
                if (!response.ok) throw new Error("Network response was not ok");

                const result = await response.json();
                setData(result.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        async function fetchAllArticles() {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/articles?populate=*`);
                if (!response.ok) throw new Error("Network response was not ok");

                const result = await response.json();
                setArticles(result.data);
            } catch (err) {
                console.error("Error fetching all articles:", err);
            }
        }

        fetchData();
        fetchAllArticles();
    }, [id]);

    if (error) return <p>Error: {error}</p>;

    const formattedContent = data?.attributes?.Content
        ? data.attributes.Content.map((el) => el.children[0].text).join("")
        : "";

    return (
        <>
            <Head>
                <title>{data?.attributes?.Title || 'Loading...'}</title>
                <meta name="description" content={formattedContent || 'Loading...'} />
                <meta property="og:title" content={data?.attributes?.Title || 'Loading...'} />
                <meta property="og:description" content={formattedContent || 'Loading...'} />
                <meta property="og:image" content={baseURLImg + data?.attributes?.Thumbnail?.data?.attributes?.url || '/default-image.jpg'} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`https://ganeshaconsulting.co.id/articles/${id}`} />
            </Head>
            {isLoading ? (
                <ArticleDetailSkeleton />
            ) : data ? (
                <section className="flex flex-col gap-20">
                    <div className="mx-5 md:mx-24 2xl:mx-80">
                        <BannerArticleDetail data={data} />
                        <ArticleContent data={data} />
                    </div>
                    <SideRec data={articles} />
                </section>
            ) : (
                <p>No article data available</p>
            )}
        </>
    );
}