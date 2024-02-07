import Image from "next/image"
import Head from 'next/head';
import bodylegal from "../../public/BG/legalbody.jpg"
import judge from "../../public/BG/judge_set1.jpg"

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

            <div className="bg-[#1ab49d] w-auto h-auto m-10 md:m-32 rounded-[40px]">
                <div className="p-6 md:p-10 flex flex-col md:flex-col lg:flex-row gap-7">
                    <Image
                        src={bodylegal}
                        className="w-full md:w-[54%] h-auto object-cover rounded-[35px]"
                    />
                    <h1 className="text-4xl md:text-5xl lg:text-8xl text-left font-extrabold tracking-wide leading-normal text-white self-end">
                        Apa Itu <span className="text-[#0d4c42] rounded-3xl">Legalitas</span> Usaha?
                    </h1>
                </div>
                <div className="px-6 md:px-10 pb-6 md:pb-10">
                    <p className="font-medium text-white text-justify text-lg md:text-4xl">
                        Legalitas Usaha adalah kepatuhan suatu bisnis dengan aturan hukum yang berlaku untuk memastikan bahwa <span className="font-extrabold bg-yellow-200 bg-clip-text text-transparent">Bisnis mu beroperasi secara sah</span> dan sesuai dengan ketentuan hukum yang berlaku di Indonesia.
                    </p>
                </div>
            </div>


            <div className="m-10 md:m-32">
                <div className="flex flex-col md:flex-row">
                    <h1 className="self-end leading-snug tracking-wide font-extrabold text-3xl md:text-6xl my-5 px-8 text-gray-800 p-5 rounded-[40px] bg-[#E7F2F2]">
                        Apa Kelebihan Memiliki <span className="bg-[#1ab49d] text-transparent bg-clip-text">Legalitas</span>?
                    </h1>
                    <Image
                        src={judge}
                        className="order-first lg:order-none w-full md:w-[50%] h-auto object-cover"
                    />
                </div>
                <div className="flex">
                    <div className="">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                            <p className="font-extrabold text-lg md:text-2xl text-gray-800 p-3 md:p-5 rounded-[40px] bg-[#5EEAD4]">
                                Menciptakan citra kredibilitas yang tinggi.
                            </p>
                            <p className="font-extrabold text-lg md:text-2xl text-white p-3 md:p-5 rounded-[40px] bg-[#1ab49d]">
                                Perlindungan hukum bagi pemilik usaha
                            </p>
                            <p className="font-extrabold text-lg md:text-2xl text-white p-3 md:p-5 rounded-[40px] bg-[#1ab49d]">
                                Akses ke pembiayaan seperti pinjaman bank atau investasi lebih baik
                            </p>
                            <p className="font-extrabold text-lg md:text-2xl text-white p-3 md:p-5 rounded-[40px] bg-[#1ab49d]">
                                Pemenuhan persyaratan bisnis yang berlaku di Indonesia
                            </p>
                            <p className="font-extrabold text-lg md:text-2xl text-gray-800 p-3 md:p-5 rounded-[40px] bg-[#E7F2F2]">
                                Kemudahan beroperasi tanpa kendala hukum
                            </p>
                            <p className="font-extrabold text-lg md:text-2xl text-gray-800 p-3 md:p-5 rounded-[40px] bg-[#5EEAD4]">
                                Meningkatnya kepercayaan dimata pelanggan dan mitra bisnis
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="m-10 md:m-32 flex flex-col items-center justify-center">
                <div className=" ">
                    <h1 className="bg-[#08695b] text-transparent bg-clip-text font-extrabold py-3 text-4xl md:text-7xl">Kemudahan Yang Kamu Dapatkan Di <span className="bg-[#682D79] text-transparent bg-clip-text">Ganesha Consulting </span>!</h1>
                </div>
                <div className="mt-6 flex flex-col gap-5 md:flex-row">
                    <div className="flex justify-center items-center w-full md:w-40 h-40 bg-[#08695b] rounded-full">
                        <p className="font-bold text-2xl md:text-center text-white p-10">Fasilitas Lengkap</p>
                    </div>
                    <div className="flex justify-center items-center w-full md:w-[70vw] h-auto bg-[#179f8a] rounded-[40px]">
                        <p className="font-medium text-xl md:text-left p-10 text-white">Ganesha Consulting menyediakan fasilitas lengkap melalui layanan legalitasnya, memastikan bahwa bisnis Anda diakui secara resmi di mata hukum.</p>
                    </div>
                </div>
                <div className="mt-6 flex flex-col gap-5 md:flex-row">
                    <div className="flex justify-center items-center w-full md:w-[70vw] h-auto bg-[#179f8a] rounded-[40px]">
                        <p className="font-medium text-xl md:text-right p-10 text-white">Layanan Ganesha Consulting tidak hanya cepat, tetapi juga terpercaya. Kami memastikan proses legalitas berjalan lancar dan sesuai dengan standar hukum yang berlaku.</p>
                    </div>
                    <div className="order-first lg:order-none flex justify-center items-center w-full md:w-40 h-40 bg-[#08695b] rounded-full">
                        <p className="font-bold text-2xl md:text-center text-white p-10">Cepat dan Terpercaya</p>
                    </div>
                </div>
                <div className="mt-6 flex flex-col gap-5 md:flex-row">
                    <div className="flex justify-center items-center w-full md:w-40 h-40 bg-[#08695b] rounded-full">
                        <p className="font-bold text-2xl md:text-center text-white p-10">Harga Terjangkau</p>
                    </div>
                    <div className="flex justify-center items-center w-full md:w-[70vw] h-auto bg-[#179f8a] rounded-[40px]">
                        <p className="font-medium text-xl md:text-left p-10 text-white">Menawarkan harga yang sangat terjangkau, Ganesha Consulting memahami pentingnya efisiensi biaya bagi bisnis Anda tanpa mengorbankan kualitas pelayanan.</p>
                    </div>
                </div>
                <div className="mt-6 flex flex-col gap-5 md:flex-row">
                    <div className="flex justify-center items-center w-full md:w-[70vw] h-auto bg-[#179f8a] rounded-[40px]">
                        <p className="font-medium text-xl md:text-right p-10 text-white">Ganesha Consulting memberikan fasilitas konsultasi gratis, memberikan pelanggan informasi dan panduan tambahan tanpa biaya tambahan.</p>
                    </div>
                    <div className="order-first lg:order-none flex justify-center items-center w-full md:w-40 h-40 bg-[#08695b] rounded-full">
                        <p className="font-bold text-2xl md:text-center text-white p-10">Konsultasi Gratis</p>
                    </div>
                </div>
                <div className="mt-6 flex flex-col gap-5 md:flex-row">
                    <div className="flex justify-center items-center w-full md:w-40 h-40 bg-[#08695b] rounded-full">
                        <p className="font-bold text-2xl md:text-center text-white p-10">Pelayanan Satu Atap</p>
                    </div>
                    <div className="flex justify-center items-center w-full md:w-[70vw] h-auto bg-[#179f8a] rounded-[40px]">
                        <p className="font-medium text-xl md:text-left p-10 text-white">Dengan Ganesha Consulting, Anda mendapatkan pelayanan satu atap yang mencakup semua kebutuhan legalitas bisnis Anda, memberikan kenyamanan dan efisiensi.</p>
                    </div>
                </div>
            </div>

        </>
    )
}