import { useEffect, useState } from "react";

export function useArticles({ initialLimit = 9 }) {
    const [articles, setArticles] = useState(null);
    const [categories, setCategories] = useState(null);
    const [trending, setTrending] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [itemsToShow, setItemsToShow] = useState(initialLimit);
    const [sortOrder, setSortOrder] = useState("DESC");

    const apiUrl = process.env.NEXT_PUBLIC_APIURL;

    const fetchAllData = async () => {
        setLoading(true);
        try {
            const [articlesRes, categoriesRes, trendingRes] = await Promise.all([
                fetch(`${apiUrl}/api/articles?sort[0]=createdAt:${sortOrder}&populate=*&pagination[page]=1&pagination[pageSize]=${itemsToShow}`),
                fetch(`${apiUrl}/api/categories?populate=*`),
                fetch(`${apiUrl}/api/articles?sort[0]=createdAt:DESC&filters[Trending][$eq]=true&populate=*&pagination[page]=1&pagination[pageSize]=${itemsToShow}`),
            ]);

            if (!articlesRes.ok || !categoriesRes.ok || !trendingRes.ok) {
                throw new Error("Network response was not ok");
            }

            const articlesData = await articlesRes.json();
            const categoriesData = await categoriesRes.json();
            const trendingData = await trendingRes.json();

            setArticles(articlesData);
            setCategories(categoriesData);
            setTrending(trendingData);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchFilteredArticles = async (search) => {
        setLoading(true);
        try {
            const res = await fetch(`${apiUrl}/api/articles?filters[Title][$containsi]=${search}&populate=*`);
            if (!res.ok) throw new Error("Network response was not ok");
            const data = await res.json();
            setArticles(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (search) => {
        setSearchTerm(search);
        fetchFilteredArticles(search);
    };

    const loadMore = () => {
        setItemsToShow((prev) => prev + 3);
    };

    useEffect(() => {
        fetchAllData();
    }, [itemsToShow, sortOrder]);

    return {
        articles,
        categories,
        trending,
        loadArticles: loading,
        errorArticles: error,
        searchTerm,
        handleSearch,
        loadMore,
        setSortOrder,
    };
}
