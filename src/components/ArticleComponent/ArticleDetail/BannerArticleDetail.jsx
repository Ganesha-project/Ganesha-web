import Head from "next/head";
import Breadcrumbs from "./Breadcrumbs";
import { formatDateTime } from "@/helper/formatDateTime";

export const BannerArticleDetail = ({ data }) => {
    // PERBAIKAN: Prisma tidak menggunakan 'attributes', data langsung accessible
    const title = data?.title || "Article Detail";
    const description = data?.excerpt || "Read more about this topic.";
    const imageUrl = data?.thumbnail?.url || "/default-thumbnail.jpg";
    const url = `${process.env.NEXT_PUBLIC_SITE_URL}/article/${data?.slug}`;
    const categoryName = data?.category?.name || "Uncategorized";
    const authorName = data?.author?.name || "Anonymous";

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

            <section className="min-h-screen pt-10">
                <div className="flex justify-center flex-col gap-2 h-screen relative">
                    <Breadcrumbs 
                        slug={data?.slug} 
                        categories={categoryName} 
                        title={title} 
                    />
                    <h1 className="font-bold text-3xl dark:text-white text-neutral-900">
                        {title}
                    </h1>
                    <div className="flex items-center gap-3 mb-3">
                        <span className="px-2 py-1 border border-mainColor/5 text-mainColor dark:text-secondaryColor dark:border-secondaryColor/20 bg-mainColor/10 text-[10px] font-bold tracking-wider rounded-lg">
                            {categoryName}
                        </span>
                        <h2 className="text-sm">
                            {formatDateTime(data?.publishedAt || data?.createdAt)}
                        </h2>
                    </div>
                    <img
                        width={500}
                        height={500}
                        className="h-[70lvh] z-30 w-full rounded-3xl object-cover"
                        src={imageUrl}
                        alt={data?.thumbnail?.alt || title}
                    />
                    <img
                        width={30}
                        height={30}
                        className="absolute bottom-20 h-[20lvh] w-[200lvw] rounded-3xl object-cover blur-[100px]"
                        src={imageUrl}
                        alt={title}
                    />
                </div>
            </section>
        </>
    );
};