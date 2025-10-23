"use client"

import { useState, useEffect } from "react"
import { SkeletonCard } from "@/components/Skeleton/SkeletonCard"
import { ArticleCard } from "@/components/ArticleComponent/ArticleCard";
import { Pagination } from "@/components/ArticleComponent/Pagination";

const API_URL = "https://ganesha-cms.vercel.app/api/article";

export default function ArticlePage() {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);

    // Fetch articles
    const fetchArticles = async (page = 1, search = "") => {
        try {
            setLoading(true);
            setIsSearching(!!search);
            
            const params = new URLSearchParams({
                page: page.toString(),
                limit: "12", // Sesuaikan dengan kebutuhan
                ...(search && { search })
            });

            const response = await fetch(`${API_URL}?${params}`);
            
            if (!response.ok) {
                throw new Error("Failed to fetch articles");
            }

            const result = await response.json();
            
            if (result.success) {
                setArticles(result);
                setError(null);
            } else {
                throw new Error(result.message || "Failed to load articles");
            }
        } catch (err) {
            console.error("Error fetching articles:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Initial load
    useEffect(() => {
        fetchArticles(currentPage, searchQuery);
    }, [currentPage]);

    // Handle search
    const handleSearch = (e) => {
        e.preventDefault();
        setCurrentPage(1); // Reset ke halaman 1 saat search
        fetchArticles(1, searchQuery);
    };

    // Handle pagination
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Search Bar */}
            <div className="mb-8">
                <form onSubmit={handleSearch} className="flex gap-2">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search articles..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Search
                    </button>
                    {searchQuery && (
                        <button
                            type="button"
                            onClick={() => {
                                setSearchQuery("");
                                setCurrentPage(1);
                                fetchArticles(1, "");
                            }}
                            className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                        >
                            Clear
                        </button>
                    )}
                </form>
            </div>

            {/* Error State */}
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    <p>Error: {error}</p>
                    <button 
                        onClick={() => fetchArticles(currentPage, searchQuery)}
                        className="mt-2 text-sm underline"
                    >
                        Try again
                    </button>
                </div>
            )}

            {/* Loading State */}
            {loading ? (
                <SkeletonCard count={8} />
            ) : (
                <>
                    {/* Article Cards */}
                    {articles?.data?.length > 0 ? (
                        <>
                            <ArticleCard 
                                data={articles}
                                isSearching={isSearching}
                            />
                            
                            {/* Pagination */}
                            {articles?.pagination && articles.pagination.totalPages > 1 && (
                                <div className="mt-8">
                                    <Pagination
                                        currentPage={articles.pagination.currentPage}
                                        totalPages={articles.pagination.totalPages}
                                        onPageChange={handlePageChange}
                                    />
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">
                                {searchQuery 
                                    ? `No articles found for "${searchQuery}"`
                                    : "No articles available"
                                }
                            </p>
                        </div>
                    )}
                </>
            )}

            {/* Results Info */}
            {articles?.pagination && !loading && (
                <div className="mt-4 text-center text-sm text-gray-600">
                    Showing {articles.data.length} of {articles.pagination.totalItems} articles
                    {searchQuery && ` for "${searchQuery}"`}
                </div>
            )}
        </div>
    );
}