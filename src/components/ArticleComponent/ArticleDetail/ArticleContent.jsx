import Head from "next/head";
import Link from 'next/link';

export const ArticleContent = ({ data }) => {
    // PERBAIKAN: Struktur data Prisma
    const content = data?.content || "";
    const title = data?.title || "Article Content";
    const description = data?.excerpt || "Detailed article content.";
    const imageUrl = data?.thumbnail?.url || "/default-thumbnail.jpg";
    const url = `${process.env.NEXT_PUBLIC_SITE_URL}/article/${data?.slug}`;
    const authorName = data?.author?.name || "Anonymous";

    // Check if content exists
    if (!content || content.trim() === "") {
        return (
            <section className="prose lg:prose-xl max-w-none">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-6 text-center">
                    <p className="text-yellow-800 dark:text-yellow-200 font-semibold mb-2">
                        No Content Available
                    </p>
                    <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                        This article doesn't have any content yet.
                    </p>
                </div>
            </section>
        );
    }

    // Function to render HTML content safely
    const renderContent = () => {
        return { __html: content };
    };

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:url" content={url} />
                
                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={imageUrl} />

                {/* Structured Data for SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Article",
                            headline: title,
                            description: description,
                            image: imageUrl,
                            datePublished: data?.publishedAt || data?.createdAt,
                            author: {
                                "@type": "Person",
                                name: authorName,
                            },
                            publisher: {
                                "@type": "Organization",
                                name: "Ganesha Consulting",
                                logo: {
                                    "@type": "ImageObject",
                                    url: "https://www.ganeshaconsulting.co.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FArtboard2.b33b65bb.png&w=96&q=75"
                                }
                            }
                        })
                    }}
                />
            </Head>
            
            <section className="prose lg:prose-xl max-w-none py-8">
                {/* Render content as HTML */}
                <div 
                    className="article-content"
                    dangerouslySetInnerHTML={renderContent()}
                />
                
                {/* Author Info */}
                {data?.author && (
                    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 not-prose">
                        <div className="flex items-start gap-4 bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                                    {data.author.name.charAt(0).toUpperCase()}
                                </div>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Written by</p>
                                <p className="font-bold text-xl text-gray-900 dark:text-white mb-1">
                                    {data.author.name}
                                </p>
                                {data.author.email && (
                                    <p className="text-sm text-gray-600 dark:text-gray-300">
                                        {data.author.email}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                )}

               
            </section>

            {/* Custom styling untuk article content */}
            <style jsx global>{`
                .article-content {
                    color: inherit;
                }
                
                .article-content h1 {
                    font-size: 2.25rem;
                    font-weight: 700;
                    color: rgb(64 64 64 / 1);
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                    line-height: 1.2;
                }
                
                .dark .article-content h1 {
                    color: rgb(229 229 229 / 1);
                }
                
                .article-content h2 {
                    font-size: 1.875rem;
                    font-weight: 700;
                    color: rgb(64 64 64 / 1);
                    margin-top: 1.75rem;
                    margin-bottom: 0.875rem;
                    line-height: 1.3;
                }
                
                .dark .article-content h2 {
                    color: rgb(229 229 229 / 1);
                }
                
                .article-content h3 {
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: rgb(64 64 64 / 1);
                    margin-top: 1.5rem;
                    margin-bottom: 0.75rem;
                    line-height: 1.4;
                }
                
                .dark .article-content h3 {
                    color: rgb(229 229 229 / 1);
                }
                
                .article-content h4 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: rgb(64 64 64 / 1);
                    margin-top: 1.25rem;
                    margin-bottom: 0.625rem;
                }
                
                .dark .article-content h4 {
                    color: rgb(229 229 229 / 1);
                }
                
                .article-content p {
                    color: rgb(23 23 23 / 1);
                    margin-bottom: 1rem;
                    line-height: 1.75;
                    font-size: 1.125rem;
                }
                
                .dark .article-content p {
                    color: rgb(245 245 245 / 1);
                }
                
                .article-content a {
                    color: rgb(37 99 235 / 1);
                    text-decoration: underline;
                    transition: color 0.2s;
                }
                
                .article-content a:hover {
                    color: rgb(59 130 246 / 1);
                }
                
                .dark .article-content a {
                    color: rgb(96 165 250 / 1);
                }
                
                .dark .article-content a:hover {
                    color: rgb(147 197 253 / 1);
                }
                
                .article-content ul, 
                .article-content ol {
                    color: rgb(64 64 64 / 1);
                    margin-bottom: 1rem;
                    margin-left: 1.5rem;
                    line-height: 1.75;
                }
                
                .dark .article-content ul,
                .dark .article-content ol {
                    color: rgb(229 229 229 / 1);
                }
                
                .article-content ul {
                    list-style-type: disc;
                }
                
                .article-content ol {
                    list-style-type: decimal;
                }
                
                .article-content li {
                    margin-bottom: 0.5rem;
                    padding-left: 0.25rem;
                }
                
                .article-content strong, 
                .article-content b {
                    color: rgb(64 64 64 / 1);
                    font-weight: 700;
                }
                
                .dark .article-content strong,
                .dark .article-content b {
                    color: rgb(229 229 229 / 1);
                }
                
                .article-content em, 
                .article-content i {
                    font-style: italic;
                }
                
                .article-content code {
                    background-color: rgb(229 229 229 / 1);
                    border-radius: 0.25rem;
                    padding: 0.125rem 0.375rem;
                    font-size: 0.875rem;
                    font-family: ui-monospace, monospace;
                }
                
                .dark .article-content code {
                    background-color: rgb(51 65 85 / 1);
                }
                
                .article-content pre {
                    background-color: rgb(23 23 23 / 1);
                    color: rgb(255 255 255 / 1);
                    padding: 1rem;
                    border-radius: 0.5rem;
                    overflow-x: auto;
                    margin-bottom: 1rem;
                    font-size: 0.875rem;
                }
                
                .article-content pre code {
                    background-color: transparent;
                    padding: 0;
                    color: inherit;
                }
                
                .article-content blockquote {
                    border-left: 4px solid rgb(212 212 212 / 1);
                    padding-left: 1rem;
                    font-style: italic;
                    margin: 1.5rem 0;
                    color: rgb(115 115 115 / 1);
                }
                
                .dark .article-content blockquote {
                    border-left-color: rgb(245 245 245 / 1);
                    color: rgb(212 212 212 / 1);
                }
                
                .article-content img {
                    border-radius: 0.5rem;
                    margin: 1.5rem 0;
                    width: 100%;
                    height: auto;
                }
                
                .article-content table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 1.5rem 0;
                }
                
                .article-content table th,
                .article-content table td {
                    border: 1px solid rgb(212 212 212 / 1);
                    padding: 0.75rem;
                    text-align: left;
                }
                
                .dark .article-content table th,
                .dark .article-content table td {
                    border-color: rgb(64 64 64 / 1);
                }
                
                .article-content table th {
                    background-color: rgb(243 244 246 / 1);
                    font-weight: 600;
                }
                
                .dark .article-content table th {
                    background-color: rgb(31 41 55 / 1);
                }
                
                .article-content hr {
                    border: none;
                    border-top: 1px solid rgb(212 212 212 / 1);
                    margin: 2rem 0;
                }
                
                .dark .article-content hr {
                    border-top-color: rgb(64 64 64 / 1);
                }
            `}</style>
        </>
    );
};