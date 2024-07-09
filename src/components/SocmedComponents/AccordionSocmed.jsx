import { FaInfoCircle } from "react-icons/fa";

export const metadata = {
    title: "Kenapa Perusahaan Membutuhkan Sosial Media Manajemen - Ganesha Consulting",
    description: "Temukan mengapa sosial media manajemen penting bagi perusahaan. Dari membangun merek hingga pemasaran dan analisis kinerja, Ganesha Consulting memberikan solusi terbaik untuk kebutuhan bisnis Anda.",
    keywords: "sosial media manajemen, kebutuhan perusahaan, Ganesha Consulting, pemasaran online, analisis kinerja, interaksi pelanggan",
    image: "/IMG/VectorBg/medsos.jpg", // Path ke gambar terkait sosial media manajemen
    url: "https://www.ganeshaconsulting.co.id/all-products/sosmed", // URL halaman Anda
    author: "Ganesha Consulting",
    siteName: "Ganesha Consulting",
    type: "website",
    robots: "index, follow", // Aturan indeks dan pengikutan
    locale: "id_ID", // Lokalisasi halaman (misalnya, Indonesia)
    // Open Graph metadata untuk berbagi di media sosial
    openGraph: {
        type: "website",
        url: "https://www.ganeshaconsulting.co.id/all-products/sosmed",
        title: "Kenapa Perusahaan Membutuhkan Sosial Media Manajemen - Ganesha Consulting",
        description: "Temukan mengapa sosial media manajemen penting bagi perusahaan. Dari membangun merek hingga pemasaran dan analisis kinerja, Ganesha Consulting memberikan solusi terbaik untuk kebutuhan bisnis Anda.",
        image: {
            url: "https://www.ganeshaconsulting.co.id/IMG/VectorBg/medsos.jpg",
            alt: "Ganesha Consulting - Sosial Media Manajemen"
        }
    },
    // Twitter metadata untuk berbagi di Twitter
    twitter: {
        handle: "@ganeshaconsult",
        site: "@ganeshaconsult",
        cardType: "summary_large_image",
    },
    // Structured data untuk membantu mesin pencari memahami konten halaman
    structuredData: {
        "@context": "http://schema.org",
        "@type": "Organization",
        name: "Ganesha Consulting",
        url: "https://www.ganeshaconsulting.co.id/",
        logo: "https://www.ganeshaconsulting.co.id/logo.png",
        sameAs: [
            "https://www.facebook.com/ganeshaconsulting",
            "https://twitter.com/ganeshaconsult",
            "https://www.linkedin.com/company/ganeshaconsulting"
        ]
    }
};


export const AccordionSocmed = () => {
    return (
        <>
            <div className="m-10 flex-col lg:flex-row lg:m-32 flex gap-5 items-center justify-center">
                <h1 className="mt-5 text-gray-900 dark:text-baseColor md:bg-transparent lg:bg-transparent lg:rounded-none bg-violet-200 rounded-[40px] lg:p-0 p-5 font-bold text-3xl md:text-5xl lg:text-7xl w-full lg:w-[40vw] capitalize text-center lg:text-right font-poppin">
                    Kenapa perusahaan{' '}
                    <span className="font-extrabold text-violet-700">membutuhkan</span> Sosial Media Manajemen
                </h1>
                <div className="lg:left-1/2 -ml-0.5 w-2.5 h-[55vh] rounded-lg bg-violet-900 hidden lg:block"></div>

                {/* Accordion */}
                <div
                    id="accordion-collapse"
                    data-accordion="collapse"
                    data-active-classes="bg-violet-300 text-white"
                    className='flex flex-col justify-center w-[80vw] md:w-[50vw] lg:w-[40vw]'
                >

                    {/* Accordion Items */}
                    {/* Item 1 */}
                    <h2 id="accordion-collapse-heading-1">
                        <button
                            className="mb-3 flex bg-violet-500 items-center justify-between w-full md:w-[40vw] p-5 font-medium rtl:text-right text-white border border-gray-200 rounded-[40px] focus:ring-4 focus:bg-violet-500 focus:ring-violet-200 hover:bg-violet-400 gap-3"
                            data-accordion-target="#accordion-collapse-body-1"
                            aria-expanded="true"
                            aria-controls="accordion-collapse-body-1"
                        >
                            <div className="flex items-center gap-2">
                                <FaInfoCircle color='white' size={20} />
                                <span className="font-bold text-white lg:text-2xl text-xl">Membangun Merek dan Identitas Online</span>
                            </div>
                            <svg
                                data-accordion-icon=""
                                className="w-3 h-3 rotate-180 shrink-0"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id="accordion-collapse-body-1"
                        className="hidden mt-[-11px] mb-3"
                        aria-labelledby="accordion-collapse-heading-1"
                    >
                        <div className="p-5 border w-full md:w-[40vw] rounded-[40px] bg-violet-500 border-gray-200">
                            <ul className="ps-5 text-white list-disc">
                                <li>
                                    <p className="mb-2 text-lg text-white">
                                        Sosial Media Manajemen membantu perusahaan dalam membangun dan mengelola citra merek mereka secara online.
                                    </p>
                                </li>
                                <li>
                                    <p className="text-lg mb-2 text-white">
                                        Memastikan konsistensi pesan, gaya visual, dan nilai-nilai merek di seluruh platform media sosial.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <h2 id="accordion-collapse-heading-2">
                        <button
                            className="mb-3 bg-violet-600 flex items-center justify-between w-full md:w-[40vw] p-5 font-medium rtl:text-right text-white border border-gray-200 rounded-[40px] focus:ring-4 focus:bg-violet-600 focus:ring-violet-200 hover:bg-violet-500 gap-3"
                            data-accordion-target="#accordion-collapse-body-2"
                            aria-expanded="false"
                            aria-controls="accordion-collapse-body-2"
                        >
                            <div className="flex items-center gap-2">
                                <FaInfoCircle color='white' size={20} />
                                <span className="font-bold text-white lg:text-2xl text-xl text-left">Interaksi dengan Pelanggan</span>
                            </div>
                            <svg
                                data-accordion-icon=""
                                className="w-3 h-3 rotate-180 shrink-0"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id="accordion-collapse-body-2"
                        className="hidden mb-3 mt-[-11px]"
                        aria-labelledby="accordion-collapse-heading-2"
                    >
                        <div className="p-5 border w-full md:w-[40vw] rounded-[40px] bg-violet-600 border-gray-200">
                            <ul className="ps-5 text-white list-disc">
                                <li>
                                    <p className="mb-2 text-lg text-white">
                                        Menyediakan platform untuk berinteraksi langsung dengan pelanggan.
                                    </p>
                                </li>
                                <li>
                                    <p className="mb-2 text-lg text-white">
                                        Menanggapi pertanyaan, umpan balik, dan komentar pelanggan secara cepat dan efektif.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <h2 id="accordion-collapse-heading-3">
                        <button
                            className="mb-3 flex bg-violet-700 items-center justify-between w-full md:w-[40vw] p-5 font-medium rtl:text-right text-white border border-gray-200 rounded-[40px] focus:ring-4 focus:bg-violet-700 focus:ring-violet-200 hover:bg-violet-500 gap-3"
                            data-accordion-target="#accordion-collapse-body-3"
                            aria-expanded="false"
                            aria-controls="accordion-collapse-body-3"
                        >
                            <div className="flex items-center gap-2">
                                <FaInfoCircle color='white' size={20} />
                                <span className="font-bold text-white lg:text-2xl text-xl text-left">Pemasaran dan Promosi</span>
                            </div>
                            <svg
                                data-accordion-icon=""
                                className="w-3 h-3 rotate-180 shrink-0"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id="accordion-collapse-body-3"
                        className="hidden mb-3 mt-[-11px]"
                        aria-labelledby="accordion-collapse-heading-3"
                    >
                        <div className="p-5 border w-full md:w-[40vw] rounded-[40px] bg-violet-700 border-gray-200">
                            <ul className="ps-5 text-white list-disc">
                                <li>
                                    <p className="mb-2 text-lg text-white">
                                        Membantu perusahaan dalam merancang dan melaksanakan kampanye pemasaran online.
                                    </p>
                                </li>
                                <li>
                                    <p className="mb-2 text-lg text-white">
                                        Menjangkau audiens target melalui iklan yang disesuaikan dan promosi produk atau layanan.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <h2 id="accordion-collapse-heading-4">
                        <button
                            className=" bg-violet-800 flex items-center justify-between w-full md:w-[40vw] p-5 font-medium rtl:text-right text-white border border-gray-200 rounded-[40px] focus:ring-4 focus:bg-violet-800 focus:ring-violet-200 hover:bg-violet-500 gap-3"
                            data-accordion-target="#accordion-collapse-body-4"
                            aria-expanded="false"
                            aria-controls="accordion-collapse-body-4"
                        >
                            <div className="flex items-center gap-2">
                                <FaInfoCircle color='white' size={20} />
                                <span className="font-bold text-white lg:text-2xl text-xl text-left">Analisis Kinerja dan Penelitian Pasar</span>
                            </div>
                            <svg
                                data-accordion-icon=""
                                className="w-3 h-3 rotate-180 shrink-0"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id="accordion-collapse-body-4"
                        className="hidden"
                        aria-labelledby="accordion-collapse-heading-4"
                    >
                        <div className="p-5 border w-full md:w-[40vw] rounded-[40px] bg-violet-800 border-gray-200">
                            <ul className="ps-5 text-white list-disc">
                                <li>
                                    <p className="mb-2 text-lg text-white">
                                        Menyediakan alat analisis untuk melacak kinerja kampanye dan konten.
                                    </p>
                                </li>
                                <li>
                                    <p className="mb-2 text-lg text-white">
                                        Memantau tren pasar dan mengumpulkan wawasan yang dapat membantu perusahaan dalam mengambil keputusan strategis.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Accordion */}
            </div>
        </>
    )
}