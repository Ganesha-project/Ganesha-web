import Head from 'next/head'
import Link from "next/link";
import { DataPageLegal } from "@/app/Database";

export const AllProductButton = () => {

    return (
        <>
            <Head>
                {/* Metadata Umum */}
                <title>Layanan Kami - Ganesha Consulting</title>
                <meta name="description" content="Temukan berbagai layanan legalitas bisnis yang ditawarkan oleh Ganesha Consulting. Mulai dari pendirian PT, CV, yayasan, hingga konsultan pajak." />
                <link rel="canonical" href="https://www.ganeshaconsulting.co.id/all-products/legalitas" />

                {/* Metadata Gambar */}
                <meta property="og:image" content="https://www.ganeshaconsulting.co.id/all-products/legalitas" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Layanan Legalitas Bisnis" />
                <meta name="twitter:image" content="https://www.ganeshaconsulting.co.id/all-products/legalitas" />

                {/* Metadata Open Graph */}
                <meta property="og:title" content="Layanan Kami - Ganesha Consulting" />
                <meta property="og:description" content="Temukan berbagai layanan legalitas bisnis yang ditawarkan oleh Ganesha Consulting. Mulai dari pendirian PT, CV, yayasan, hingga konsultan pajak." />
                <meta property="og:url" content="https://www.ganeshaconsulting.co.id/all-products/legalitas" />
                <meta property="og:type" content="website" />

                {/* Metadata Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Layanan Kami - Ganesha Consulting" />
                <meta name="twitter:description" content="Temukan berbagai layanan legalitas bisnis yang ditawarkan oleh Ganesha Consulting. Mulai dari pendirian PT, CV, yayasan, hingga konsultan pajak." />

            </Head>
            <section className="md:mx-24 mx-5 py-24 space-y-5">
                <h1 className="text-4xl font-bold">
                    Layanan  Legalitas Kami
                </h1>
                <div className="md:grid md:grid-cols-3 flex flex-col gap-5">
                    {DataPageLegal.legalItems.map((el, idx) => (
                        <Link
                            key={idx}
                            href={el.link}
                            className="group flex flex-row items-center gap-3 duration-300 hover:shadow-secondaryShadow ease-in-out p-5 rounded-3xl bg-mainColor dark:bg-baseColor dark:bg-opacity-25 hover:bg-opacity-40 dark:hover:bg-opacity-50 bg-opacity-15"
                        >
                            <div className="md:text-3xl text-xl p-3 w-fit bg-white text-mainColor rounded-full dark:bg-black">
                                {el.icon}
                            </div>
                            <h2 className="text-lg md:text-xl font-semibold text-mainColor dark:text-baseColor">
                                {el.name}
                            </h2>
                        </Link>
                    ))}
                </div>
            </section>

        </>
    )
}
