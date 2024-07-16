"use client";
import { ArticleContent } from "@/components/ArticleComponent/ArticleDetail/ArticleContent";
import { BannerArticleDetail } from "@/components/ArticleComponent/ArticleDetail/BannerArticleDetail";
import { SideRec } from "@/components/ArticleComponent/ArticleDetail/SideRec";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ArticleDetail() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [articles, setArticles] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const req = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/articles/${id}?populate[category]=*`);
                if (!req.ok) {
                    throw new Error("Network response was not ok");
                }
                const res = await req.json();
                setData(res.data);
              } catch (error) {
                setError(error.message);
              } finally {
                setLoad(!load);
              }
            }
            fetchData();        

        async function fetchAllArticles() {
            try {
                const req = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/articles?populate=*`);
                if (!req.ok) {
                    throw new Error("Network response was not ok");
                }
                const res = await req.json();
                setArticles(res.data);
            } catch (error) {
                console.error("Error fetching all articles:", error);
            }
        }
        fetchAllArticles();

    }, []);

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
            <section className="flex md:flex-row flex-col gap-20 mx-5 md:mx-24 2xl:mx-80">
                <div className="md:w-[70%]">
                    {load ? (
                        data ? (
                            <>
                                <BannerArticleDetail data={data} />
                                <ArticleContent data={data} />
                            </>
                        ) : (
                            <p>No article data available</p>
                        )
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <div className="md:w-[30%]">
                    <SideRec data={articles} />
                </div>
            </section>
        </>
    );
}
