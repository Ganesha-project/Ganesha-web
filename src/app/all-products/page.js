import Head from 'next/head';
import socmed from "../../public/BG/allproducts.png"
import { ImgProduk } from '@/components/ImgProduk';
import { CardProduct } from '@/components/CardProduct'

export default function AllProductsPage() {
    const imgProduct = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <>
            <Head>
                {/* Metadata Umum */}
                <title>Semua Produk - Ganesha Consulting</title>
                <meta name="description" content="Temukan semua produk yang ditawarkan oleh Ganesha Consulting. Mulai dari Legalitas, Konsultan Pajak, Pembuatan PT, CV, Badan Usaha Lainnya, Pembuatan Website, Company Profile, hingga Manajemen Sosial Media." />
                <link rel="canonical" href="https://ganeshaconsulting.co.id/all-products" />

                {/* Metadata Gambar */}
                <meta property="og:image" content="https://ganeshaconsulting.co.id/all-products.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Semua Produk" />
                <meta name="twitter:image" content="https://ganeshaconsulting.co.id/all-products.jpg" />

                {/* Metadata Open Graph */}
                <meta property="og:title" content="Semua Produk - Ganesha Consulting" />
                <meta property="og:description" content="Temukan semua produk yang ditawarkan oleh Ganesha Consulting. Mulai dari produk A, produk B, hingga produk C." />
                <meta property="og:url" content="https://ganeshaconsulting.co.id/all-products" />
                <meta property="og:type" content="website" />

                {/* Metadata Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Semua Produk - Ganesha Consulting" />
                <meta name="twitter:description" content="Temukan semua produk yang ditawarkan oleh Ganesha Consulting. Mulai dari produk A, produk B, hingga produk C." />

                {/* Metadata Schema.org */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "ItemList",
                            "name": "Semua Produk",
                            "description": "Temukan semua produk yang ditawarkan oleh Ganesha Consulting. Mulai dari produk A, produk B, hingga produk C.",
                            "url": "https://ganeshaconsulting.co.id/all-products",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "item": {
                                        "@type": "Product",
                                        "name": "Nama Produk A",
                                        "description": "Deskripsi Produk A",
                                        "url": "https://ganeshaconsulting.co.id/product-a",
                                        "image": "https://ganeshaconsulting.co.id/product-a.jpg",
                                        "brand": {
                                            "@type": "Brand",
                                            "name": "Ganesha Consulting"
                                        }
                                    }
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "item": {
                                        "@type": "Product",
                                        "name": "Nama Produk B",
                                        "description": "Deskripsi Produk B",
                                        "url": "https://ganeshaconsulting.co.id/product-b",
                                        "image": "https://ganeshaconsulting.co.id/product-b.jpg",
                                        "brand": {
                                            "@type": "Brand",
                                            "name": "Ganesha Consulting"
                                        }
                                    }
                                },
                                // Add more product items...
                            ]
                        }
                    `}
                </script>
            </Head>

            <ImgProduk image={imgProduct} socmed={socmed} />
            <CardProduct />
        </>
    )
}