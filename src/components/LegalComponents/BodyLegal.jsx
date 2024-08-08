import Image from "next/image"
import Head from 'next/head';
import bodylegal from "../../public/BG/legalbody.jpg"
import judge from "../../public/BG/judge_set1.jpg"
import { DataPageLegal } from "@/app/Database";

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

            <section className="space-y-20 mb-10">
                <div className="md:mx-24 mx-5">
                    <div className="flex flex-col md:flex-row items-center md:gap-5 rounded-3xl">
                        <Image
                            width={500}
                            height={500}
                            src={DataPageLegal.explainImg}
                            className="w-full md:w-[54%] h-[35lvh] md:h-[50lvh] object-cover rounded-[35px]"
                        />
                        <div className="space-y-3 md:space-y-5">
                            <div className="text-2xl md:text-4xl text-left font-extrabold tracking-wide leading-normal dark:text-white">
                                {DataPageLegal.head}
                            </div>
                            <div className="font-medium dark:text-white text-justify text-lg md:text-4xl">
                                {DataPageLegal.desc}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mx-5 md:mx-24 space-y-5">
                    <div className="flex md:flex-row flex-col">
                        <h1 className="self-end leading-snug tracking-wide font-extrabold text-3xl md:text-6xl  text-gray-800 p-5 rounded-3xl bg-[#E7F2F2]">
                            Apa Kelebihan Memiliki <span className="bg-secondaryColor text-transparent bg-clip-text">Legalitas</span>?
                        </h1>
                        <Image
                            width={500}
                            height={500}
                            src={'https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236548/GaneshaAssets/vakr9ynkwlrqy3lb4qwb.svg'}
                            className="order-first lg:order-none w-full md:w-[60%] h-[40lvh] object-cover"
                        />
                    </div>
                    <div className="flex">
                        <div className="">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                                <p className="font-extrabold text-lg md:text-2xl dark:text-white p-3 md:p-5 rounded-3xl bg-secondaryColor bg-opacity-25">
                                    Menciptakan citra kredibilitas yang tinggi.
                                </p>
                                <p className="font-extrabold text-lg md:text-2xl dark:text-white p-3 md:p-5 rounded-3xl bg-secondaryColor bg-opacity-25">
                                    Perlindungan hukum bagi pemilik usaha
                                </p>
                                <p className="font-extrabold text-lg md:text-2xl dark:text-white p-3 md:p-5 rounded-3xl bg-secondaryColor bg-opacity-25">
                                    Akses ke pembiayaan seperti pinjaman bank atau investasi lebih baik
                                </p>
                                <p className="font-extrabold text-lg md:text-2xl dark:text-white p-3 md:p-5 rounded-3xl bg-secondaryColor bg-opacity-25">
                                    Pemenuhan persyaratan bisnis yang berlaku di Indonesia
                                </p>
                                <p className="font-extrabold text-lg md:text-2xl dark:text-white p-3 md:p-5 rounded-3xl bg-secondaryColor bg-opacity-25">
                                    Kemudahan beroperasi tanpa kendala hukum
                                </p>
                                <p className="font-extrabold text-lg md:text-2xl dark:text-white p-3 md:p-5 rounded-3xl bg-secondaryColor bg-opacity-25">
                                    Meningkatnya kepercayaan dimata pelanggan dan mitra bisnis
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="m-5 md:m-24 flex flex-col space-y-5">
                    <h1 className="bg-[#000000] text-transparent bg-clip-text font-extrabold text-center text-xl md:text-4xl">Kemudahan Yang Kamu Dapatkan Di <span className="text-mainColor dark:text-secondaryColor">Ganesha Consulting </span>!</h1>
                    <div className="md:grid md:grid-cols-3 flex flex-col gap-5">
                        {DataPageLegal.whyUs.map((el, idx) => (
                            <div
                                key={idx}
                                className="space-y-3"
                            >
                                <h2 className="py-3 px-5 bg-mainColor bg-opacity-25 rounded-full md:text-2xl text-xl font-semibold text-center">
                                    {el.title}
                                </h2>
                                <h3 className="py-4 px-5 bg-mainColor bg-opacity-15 rounded-3xl grow font-medium text-justify">
                                    {el.description}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}