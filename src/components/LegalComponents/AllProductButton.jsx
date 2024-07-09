import Image from "next/image"
import Head from 'next/head';
import pt from "../../public/IMG/IconVector/building.png"

export const AllProductButton = () => {
    const items = [
        {
            "name": "Pendirian PT",
            "link": "legalitas/pendirian-pt",
            "image": pt
        },
        {
            "name": "Pendirian CV",
            "link": "legalitas/pendirian-cv",
            "image": pt
        },
        {
            "name": "Pendirian Yayasan",
            "link": "legalitas/badan-usaha",
            "image": pt
        },
        {
            "name": "Pendirian Firma Hukum",
            "link": "legalitas/badan-usaha",
            "image": pt
        },
        {
            "name": "Pendirian Perkumpulan/Asosiasi",
            "link": "legalitas/badan-usaha",
            "image": pt
        },
        {
            "name": "Pendirian Virtual Office | PKP | NIB",
            "link": "legalitas/badan-usaha",
            "image": pt
        },
        {
            "name": "Konsultan Pajak",
            "link": "legalitas/badan-usaha",
            "image": pt
        },
    ]

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

                {/* Metadata Schema.org */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "ItemList",
                            "name": "Layanan Kami",
                            "description": "Temukan berbagai layanan legalitas bisnis yang ditawarkan oleh Ganesha Consulting. Mulai dari pendirian PT, CV, yayasan, hingga konsultan pajak.",
                            "url": "https://www.ganeshaconsulting.co.id/all-products/legalitas",
                            "itemListElement": [
                                ${items.map((item, index) => `
                                    {
                                        "@type": "ListItem",
                                        "position": ${index + 1},
                                        "item": {
                                            "@type": "Service",
                                            "name": "${item.name}",
                                            "description": "Layanan ${item.name}",
                                            "url": "https://ganeshaconsulting.co.id/${item.link}",
                                            "image": "https://ganeshaconsulting.co.id/${item.image}",
                                            "provider": {
                                                "@type": "Organization",
                                                "name": "Ganesha Consulting"
                                            }
                                        }
                                    }
                                `).join(',')}
                            ]
                        }
                    `}
                </script>
            </Head>

            <div className="bg-white dark:bg-black p-10 lg:p-32 sm:p-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                <p className="font-extrabold text-6xl text-left flex items-center justify-center bg-indigo-200 text-gray-800 rounded-[40px] p-5">
                    Layanan Kami
                </p>
                {items.map((el, index) => (
                    <a
                        key={index}
                        href={el.link}
                        className={`w-full h-full flex items-center gap-3 p-8 sm:p-14 hover:bg-opacity-70
                ${index === 3 ? 'bg-orange-200' : index === 6 ? 'bg-slate-200' : index === 1 ? 'bg-pink-200' : 'bg-teal-300'}
                rounded-[40px]`}
                    >
                        <Image
                            src={el.image === "" ? "" : pt}
                            className="h-10 w-10 object-cover"
                        />

                        <div
                            className=" text-lg sm:text-2xl font-bold"
                        >
                            <p className="text-gray-700">{el.name}</p>
                        </div>
                    </a>
                ))}
                <p className="font-extrabold text-4xl sm:text-6xl text-right flex items-center justify-center bg-[#dffbff] rounded-[40px]"></p>
            </div>

        </>
    )
}
