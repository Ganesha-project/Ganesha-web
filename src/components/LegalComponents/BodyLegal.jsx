import Image from "next/image"
import Head from 'next/head';
import { Title } from "../Title";
import { DataPageLegal } from "../../../public/Data/LegalitasData";

export const BodyLegal = () => {
    return (
        <>
            <Head>
                {/* Metadata Umum */}
                <title>Apa Itu Legalitas Usaha? - Ganesha Consulting</title>
                <meta name="description" content="Temukan arti dan pentingnya legalitas usaha bagi bisnis Anda. Ganesha Consulting hadir memberikan layanan legalitas terpercaya dan terjangkau." />
                <link rel="canonical" href="https://www.ganeshaconsulting.co.id/all-products/legalitas" />

                {/* Metadata Gambar */}
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Gambar ilustrasi legalitas usaha" />
                <meta name="twitter:image" content="https://example.com/bodylegal.jpg" />

                {/* Metadata Open Graph */}
                <meta property="og:title" content="Apa Itu Legalitas Usaha? - Ganesha Consulting" />
                <meta property="og:description" content="Temukan arti dan pentingnya legalitas usaha bagi bisnis Anda. Ganesha Consulting hadir memberikan layanan legalitas terpercaya dan terjangkau." />
                <meta property="og:type" content="website" />

                {/* Metadata Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Apa Itu Legalitas Usaha? - Ganesha Consulting" />
                <meta name="twitter:description" content="Temukan arti dan pentingnya legalitas usaha bagi bisnis Anda. Ganesha Consulting hadir memberikan layanan legalitas terpercaya dan terjangkau." />

                {/* Metadata Schema.org */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Article",
                            "mainEntityOfPage": {
                                "@type": "WebPage",
                                "@id": "https://www.ganeshaconsulting.co.id/all-products/legalitas"
                            },
                            "headline": "Apa Itu Legalitas Usaha?",
                            "description": "Temukan arti dan pentingnya legalitas usaha bagi bisnis Anda. Ganesha Consulting hadir memberikan layanan legalitas terpercaya dan terjangkau.",
                            "image": {
                                "@type": "ImageObject",
                                "url": "https://www.ganeshaconsulting.co.id/all-products/legalitas",
                                "width": 1200,
                                "height": 630
                            },
                            "author": {
                                "@type": "Organization",
                                "name": "Ganesha Consulting"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Ganesha Consulting",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://www.ganeshaconsulting.co.id/all-products/legalitas",
                                    "width": 600,
                                    "height": 60
                                }
                            },
                            "datePublished": "2024-02-08",  
                            "dateModified": "2024-02-08"
                        }
                    `}
                </script>
            </Head>

            <section className="from-gray-100 via-white dark:from-darkColor to-transparent bg-gradient-to-b md:my-20 my-5">
                <div className="md:px-24 px-5 from-gray-100 via-white to-transparent dark:from-darkColor dark:via-black space-y-10 bg-gradient-to-t md:py-20 py-10">
                    <Title text={'Legalitas Usaha?'} text1={'Apa itu'} />
                    <div className="md:text-2xl bg-gradient-to-bl from-darkColor via-gray-800 to-sky-500 dark:from-white dark:via-gray-200 dark:to-sky-300 bg-clip-text text-transparent">
                        {DataPageLegal.desc}
                    </div>
                </div>
            </section>
        </>
    )
}