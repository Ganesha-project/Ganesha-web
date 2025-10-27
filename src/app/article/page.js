"use client";

import { useState, useEffect } from "react";
import { SkeletonCard } from "@/components/Skeleton/SkeletonCard";
import { SkeletonBanner } from "@/components/Skeleton/SkeletonBanner";
import { SkeletonTiles } from "@/components/Skeleton/SkeletonTiles";
import { ArticleCard } from "@/components/ArticleComponent/ArticleCard";
import { BannerArticle } from "@/components/ArticleComponent/Banner";
import { Searchbar } from "@/components/ArticleComponent/Searchbar";
import { TilesFilter } from "@/components/ArticleComponent/TilesFilter";
import { StatusFilter } from "@/components/ArticleComponent/StatusFilter";
import { Headtag } from "@/components/ArticleComponent/HeadTag";
import { HighlightCarousel } from "@/components/ArticleComponent/HightlightCarousel";
import { Pagination } from "@/components/ArticleComponent/Pagination";
import Head from "next/head";
import Maintenance from "@/components/Maintenance";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://ganesha-cms.vercel.app/api";

export default function ArticlePage() {
  const [articles, setArticles] = useState(null);
  const [highlightData, setHighlightData] = useState(null);
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sort, setSort] = useState('DESC');
  const [isMaintenance, setIsMaintenance] = useState(false);

  // Fetch all articles including highlight and categories data
  const fetchArticles = async (page = 1, search = "", status = "all", sortOrder = "DESC") => {
    try {
      setLoading(true);

      const params = new URLSearchParams({
        page: page.toString(),
        limit: "12",
        sort: sortOrder,
        ...(search && { search }),
        ...(status !== "all" && { status: status.toUpperCase() }),
      });

      console.log("Fetching articles with params:", params.toString());

      const response = await fetch(`${API_URL}/article?${params}`);

      if (!response.ok) {
        throw new Error("Failed to fetch articles");
      }

      const result = await response.json();

      if (result.success) {
        setArticles(result);
        
        // Extract highlight articles (articles with highlight=true)
        const highlightArticles = result.data.filter((article) => article.highlight === true);
        
        // Format highlight data for HighlightCarousel component
        const formattedHighlightData = {
          data: highlightArticles
        };
        
        setHighlightData(formattedHighlightData);
        
        // Extract categories from all articles
        const categoriesFromArticles = result.data
          .map((article) => article.category)
          .filter((category) => category && category.name)
          .reduce((unique, category) => {
            if (!unique.find(item => item.id === category.id)) {
              unique.push({
                id: category.id,
                name: category.name,
                slug: category.slug
              });
            }
            return unique;
          }, []);

        setCategories({
          data: categoriesFromArticles
        });
        
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

  // Fetch highlight articles separately for banner
  const fetchHighlightArticles = async () => {
    try {
      const response = await fetch(`${API_URL}/article?limit=50&status=PUBLISH&highlight=true`);
      
      if (!response.ok) {
        throw new Error("Failed to fetch highlight articles");
      }

      const result = await response.json();

      if (result.success) {
        const highlightArticles = result.data.filter((article) => article.highlight === true);
        
        const formattedHighlightData = {
          data: highlightArticles
        };
        
        setHighlightData(formattedHighlightData);
      }
    } catch (err) {
      console.error("Error fetching highlight articles:", err);
    }
  };

  // Initial load
  useEffect(() => {
    const fetchData = async () => {
      await fetchArticles(currentPage, searchQuery, statusFilter, sort);
      await fetchHighlightArticles();
    };
    
    fetchData();
  }, [currentPage, statusFilter, sort]);

  // Handle search
  const handleSearch = (searchTerm) => {
    setSearchQuery(searchTerm);
    setCurrentPage(1);
    fetchArticles(1, searchTerm, statusFilter, sort);
  };

  // Handle status filter change
  const handleStatusChange = (status) => {
    setStatusFilter(status);
    setCurrentPage(1);
    fetchArticles(1, searchQuery, status, sort);
  };

  // Handle pagination
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle sorting
  const handleSortChange = (order) => {
    setSort(order);
    setCurrentPage(1);
    fetchArticles(1, searchQuery, statusFilter, order);
  };

  // Format articles data for ArticleCard component
  const formatArticlesForCard = (articlesData) => {
    if (!articlesData || !articlesData.data) return null;

    return {
      data: articlesData.data
    };
  };

  const firstArticle = articles?.data?.[0];
  const metaTitle = firstArticle?.title || "Artikel Ganesha Consulting";
  const metaDescription = firstArticle?.excerpt || "Pelajari panduan lengkap mengenai berbagai topik bisnis di Ganesha Consulting.";
  const metaImage = firstArticle?.thumbnail?.url || "/default-thumbnail.jpg";

  const ErrorDisplay = ({ message, showReload = true }) => (
    <div className="flex items-center justify-center h-64">
      <div className="text-center">
        <p className="text-red-500 font-semibold">Error: {message}</p>
        {showReload && (
          <button
            onClick={() => fetchArticles(currentPage, searchQuery, statusFilter, sort)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );

  const NoResults = () => (
    <div className="h-[30lvh] flex items-center justify-center">
      <p className="text-xl text-center">
        No articles found
        {(searchQuery || statusFilter !== "all") && (
          <>
            <br />
            {searchQuery && (
              <>for <span className="font-semibold text-mainColor dark:text-baseColor">"{searchQuery}"</span></>
            )}
            {statusFilter !== "all" && (
              <> with status <span className="font-semibold text-mainColor dark:text-baseColor">{statusFilter}</span></>
            )}
            <br />
            Please try adjusting your filters.
          </>
        )}
      </p>
    </div>
  );

  if (isMaintenance) {
    return <Maintenance />;
  }

  const formattedArticles = formatArticlesForCard(articles);

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

      {/* Banner with highlight articles */}
      <BannerArticle>
        {error ? (
          <ErrorDisplay message={error} />
        ) : loading ? (
          <SkeletonBanner />
        ) : highlightData && highlightData.data.length > 0 ? (
          <HighlightCarousel data={highlightData} />
        ) : (
          articles?.data && articles.data.length > 0 && (
            <HighlightCarousel data={{
              data: articles.data.slice(0, 3)
            }} />
          )
        )}
      </BannerArticle>

      <section className="md:px-24 2xl:px-80 px-5 space-y-5 pt-10 mb-10">
        {/* Search Bar */}
        <Searchbar onSearch={handleSearch} />

        {/* Status Filter */}
        <StatusFilter 
          onStatusChange={handleStatusChange} 
          currentStatus={statusFilter}
        />

        {/* Categories Filter */}
        {error ? (
          <ErrorDisplay message={error} showReload={false} />
        ) : loading ? (
          <SkeletonTiles />
        ) : categories && categories.data.length > 0 ? (
          <TilesFilter categories={categories} />
        ) : null}

        {/* Main Content */}
        {error ? (
          <ErrorDisplay message={error} showReload={false} />
        ) : loading ? (
          <SkeletonCard />
        ) : articles?.data?.length === 0 ? (
          <NoResults />
        ) : formattedArticles ? (
          <>
            <ArticleCard
              data={formattedArticles}
              isSearching={!!searchQuery}
              moms={
                <Headtag
                  label={
                    searchQuery 
                      ? 'Search Results' 
                      : statusFilter !== "all"
                      ? `${statusFilter.charAt(0).toUpperCase() + statusFilter.slice(1)} Articles`
                      : 'Artikel Populer'
                  }
                  filter={!searchQuery}
                  setSortOrder={handleSortChange}
                  currentSort={sort}
                />
              }
              showStatus={true}
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
        ) : null}

        {/* Results Info */}
        {articles?.pagination && !loading && (
          <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
            Showing {articles.data.length} of {articles.pagination.totalItems}{" "}
            articles
            {searchQuery && ` for "${searchQuery}"`}
            {statusFilter !== "all" && ` (${statusFilter})`}
          </div>
        )}
      </section>
    </>
  );
}