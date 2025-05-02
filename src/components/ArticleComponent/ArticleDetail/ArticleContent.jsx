import Head from "next/head";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import Link from 'next/link';

export const ArticleContent = ({ data }) => {
    const content = data?.attributes?.Content || [];
    const title = data?.attributes?.Title || "Article Content";
    const description = data?.attributes?.Description || "Detailed article content.";
    const imageUrl = `${process.env.NEXT_PUBLIC_URL_STRAPI_IMG}${data?.attributes?.Thumbnail?.data?.attributes?.url}`;
    const url = `${process.env.NEXT_PUBLIC_SITE_URL}/article/${data?.attributes?.Slug}`;

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
                            datePublished: data?.attributes?.PublishTime,
                            author: {
                                "@type": "Person",
                                name: "Author Name", // replace with the actual author if available
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
            <section className="prose lg:prose-xl">
                <BlocksRenderer
                    blocks={{
                        // You can use the default components to set class names...
                        paragraph: ({ children }) => <p className="text-neutral-900 dark:text-neutral-100 prose lg:prose-xl">{children}</p>,
                        // ...or point to a design system
                        heading: ({ children, level }) => {
                            switch (level) {
                                case 1:
                                    return <h1 className='text-neutral-700 dark:text-neutral-200'>{children}</h1>;
                                case 2:
                                    return <h2 className='text-neutral-700 dark:text-neutral-200'>{children}</h2>;
                                case 3:
                                    return <h3 className='text-neutral-700 dark:text-neutral-200'>{children}</h3>;
                                case 4:
                                    return <h4 className='text-neutral-700 dark:text-neutral-200'>{children}</h4>;
                                case 5:
                                    return <h5 className='text-neutral-700 dark:text-neutral-200'>{children}</h5>;
                                case 6:
                                    return <h6 className='text-neutral-700 dark:text-neutral-200'>{children}</h6>;
                                default:
                                    return <h1 className='text-neutral-700 dark:text-neutral-200'>{children}</h1>;
                            }
                        },
                        // For links, you may want to use the component from your router or framework
                        link: ({ children, url }) => url ? <Link className='text-mainColor dark:text-baseColor link hover:text-blue-500 dark:hover:text-blue-300' href={url}>{children}</Link> : <span>{children}</span>,
                        // Handle bulleted lists
                        list: ({ children, ordered }) => {
                            return ordered ? <ol className='text-neutral-700 dark:text-neutral-200'>{children}</ol> : <ul className='text-neutral-700 dark:text-neutral-200'>{children}</ul>;
                        },
                        listItem: ({ children }) => <li>{children}</li>,
                    }}
                    modifiers={{
                        bold: ({ children }) => <strong className='text-neutral-700 dark:text-neutral-200'>{children}</strong>,
                        italic: ({ children }) => <span className="italic">{children}</span>,
                        underline: ({ children }) => <span className="underline">{children}</span>,
                        strikethrough: ({ children }) => <span className="line-through">{children}</span>,
                        code: ({ children }) => <code className="bg-neutral-200 dark:bg-slate-700 rounded p-1">{children}</code>,
                        blockquote: ({ children }) => <blockquote className="border-l-4 border-neutral-300 dark:border-neutral-100 pl-4">{children}</blockquote>,
                        preformatted: ({ children }) => <pre className="bg-neutral-900 text-white p-2 rounded">{children}</pre>,
                        superscript: ({ children }) => <sup>{children}</sup>,
                        subscript: ({ children }) => <sub>{children}</sub>,
                    }}
                    content={content}
                />
            </section>
        </>
    );
};
