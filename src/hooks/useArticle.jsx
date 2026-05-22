import { useEffect, useState } from "react";

const getCategoriesFromArticles = (items = []) =>
    items
        .map((article) => article.category)
        .filter((category) => category && category.name)
        .reduce((unique, category) => {
            if (!unique.find((item) => item.id === category.id)) {
                unique.push({
                    id: category.id,
                    name: category.name,
                    slug: category.slug,
                });
            }
            return unique;
        }, []);

export function useArticles({ initialLimit = 9 }) {
    const [articles, setArticles] = useState(null);
    const [categories, setCategories] = useState(null);
    const [trending, setTrending] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [itemsToShow, setItemsToShow] = useState(initialLimit);
    const [sortOrder, setSortOrder] = useState("DESC");
    const [hasMore, setHasMore] = useState(false);

    const apiUrl = process.env.NEXT_PUBLIC_APIURL;

    const fetchArticlesPage = async ({ page = 1, limit = initialLimit, search = "", highlight = false } = {}) => {
        const params = new URLSearchParams({
            page: page.toString(),
            limit: limit.toString(),
            sort: sortOrder,
            status: "PUBLISH",
        });

        if (search) params.append("search", search);
        if (highlight) params.append("highlight", "true");

        const res = await fetch(`${apiUrl}/content/articles?${params}`);
        if (!res.ok) throw new Error("Network response was not ok");

        const data = await res.json();
        if (!data?.success) {
            throw new Error(data?.message || "Failed to load articles");
        }

        return {
            ...data,
            data: Array.isArray(data.data) ? data.data : [],
        };
    };

    const fetchAllData = async () => {
        setLoading(true);
        try {
            const [articlesData, categoriesData, trendingData] = await Promise.all([
                fetchArticlesPage({ page: 1, limit: itemsToShow }),
                fetchArticlesPage({ page: 1, limit: 100 }),
                fetchArticlesPage({ page: 1, limit: itemsToShow, highlight: true }),
            ]);

            setArticles(articlesData);
            setCategories({ data: getCategoriesFromArticles(categoriesData.data) });
            setTrending(trendingData);
            setHasMore(
                articlesData.pagination?.currentPage < articlesData.pagination?.totalPages
            );
            setError(null);
        } catch (err) {
            setError(err.message);
            setArticles({ data: [], pagination: null });
            setCategories({ data: [] });
            setTrending({ data: [] });
            setHasMore(false);
        } finally {
            setLoading(false);
        }
    };

    const fetchFilteredArticles = async (search, offset = 0, append = false) => {
        setLoading(true);
        try {
            const page = Math.floor(offset / initialLimit) + 1;
            const data = await fetchArticlesPage({ page, limit: initialLimit, search });

            setArticles((prev) =>
                append
                    ? {
                        ...data,
                        data: [...(prev?.data || []), ...data.data],
                    }
                    : data
            );
            setHasMore(data.pagination?.currentPage < data.pagination?.totalPages);
            setError(null);
        } catch (err) {
            setError(err.message);
            if (!append) {
                setArticles({ data: [], pagination: null });
            }
            setHasMore(false);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (search, offset = 0) => {
        setSearchTerm(search);
        fetchFilteredArticles(search, offset);
    };

    const fetchMore = (search, offset = 0) => {
        fetchFilteredArticles(search, offset, true);
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
        fetchMore,
        hasMore,
        loadMore,
        setSortOrder,
    };
}
