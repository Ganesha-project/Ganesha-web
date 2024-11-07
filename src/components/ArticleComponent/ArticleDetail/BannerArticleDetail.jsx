import Head from "next/head";
import Breadcrumbs from "./Breadcrumbs";
import { formatDateTime } from "@/helper/formatDateTime";

const baseURLImg = process.env.NEXT_PUBLIC_URL_STRAPI_IMG;

export const BannerArticleDetail = ({ data }) => {
    const detail = data?.attributes;
    const title = detail?.Title || "Article Detail";
    const description = detail?.Description || "Read more about this topic.";
    const imageUrl = `${baseURLImg}${detail?.Thumbnail?.data?.attributes?.url}`;
    const url = `${process.env.NEXT_PUBLIC_SITE_URL}/article/${detail?.Slug}`;

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
                            datePublished: detail?.PublishTime,
                            author: {
                                "@type": "Person",
                                name: "Author Name", // replace with dynamic author data if available
                            },
                            publisher: {
                                "@type": "Organization",
                                name: "Your Site Name", // replace with your site name
                                logo: {
                                    "@type": "ImageObject",
                                    url: "https://www.ganeshaconsulting.co.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FArtboard2.b33b65bb.png&w=96&q=75" // replace with your logo URL
                                }
                            }
                        })
                    }}
                />
            </Head>


            <section className="min-h-screen pt-10">
                <div className="flex justify-center flex-col gap-2 h-screen relative">
                    <Breadcrumbs slug={detail?.Slug} categories={detail?.category?.data?.attributes?.ArticleCategory} title={detail?.Title} />
                    <h1 className="font-bold text-3xl dark:text-white text-gray-900">
                        {detail?.Title}
                    </h1>
                    <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-baseColor dark:text-white bg-opacity-50 text-sm font-semibold text-mainColor w-fit rounded-full">
                            {detail?.category?.data?.attributes?.ArticleCategory}
                        </span>
                        <h2>
                            {formatDateTime(detail?.PublishTime)}
                        </h2>
                    </div>
                    <img
                        width={500}
                        height={500}
                        className="h-[70lvh] z-30 w-full rounded-3xl object-cover"
                        src={`${baseURLImg}${detail?.Thumbnail?.data?.attributes?.url}`}
                        alt={detail?.Title}
                    />
                    <img
                        width={30}
                        height={30}
                        className="absolute bottom-20 h-[20lvh] w-[200lvw] rounded-3xl object-cover blur-[100px]"
                        src={`${baseURLImg}${detail?.Thumbnail?.data?.attributes?.url}`}
                        alt={detail?.Title}
                    />
                </div>
            </section>
        </>
    )
}