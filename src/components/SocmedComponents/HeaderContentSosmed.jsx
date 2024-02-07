import { FaChildReaching } from "react-icons/fa6";
import { IoExtensionPuzzle } from "react-icons/io5";
import { SiFireship } from "react-icons/si";
import { TbBrandFunimation } from "react-icons/tb";

export const metadata = {
    title: "Pengelolaan Sosial Media - Ganesha Consulting",
    description: "Temukan layanan pengelolaan sosial media yang ekonomis, cepat, dan terpercaya di Ganesha Consulting. Kami membantu bisnis Anda untuk sukses digital dengan kreativitas, keberanian, dan keahlian dalam mengelola sosial media.",
    keywords: "pengelolaan sosial media, layanan sosial media, manajemen sosmed, Ganesha Consulting",
    image: "/IMG/IconVector/checkgreen.png", // Path ke gambar terkait pengelolaan sosial media
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
        title: "Pengelolaan Sosial Media - Ganesha Consulting",
        description: "Temukan layanan pengelolaan sosial media yang ekonomis, cepat, dan terpercaya di Ganesha Consulting. Kami membantu bisnis Anda untuk sukses digital dengan kreativitas, keberanian, dan keahlian dalam mengelola sosial media.",
        image: {
            url: "https://www.ganeshaconsulting.co.id/IMG/IconVector/checkgreen.png",
            alt: "Ganesha Consulting - Pengelolaan Sosial Media"
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


export const HeaderContentSosmed = () => {
    return (
        <>
            <div className='lg:m-32 m-10 flex flex-col md:flex-row py-20 px-6 md:px-20 gap-6'>
                <div className='flex flex-col gap-6'>
                    <div
                        className="order-3 lg:order-1 flex justify-center items-center flex-col gap-3 w-full md:w-56 h-56 max-w-lg p-6 bg-violet-400 rounded-full hover:bg-violet-500"
                    >
                        <FaChildReaching
                            color='white'
                            size={50}
                        />
                        <h5 className="text-2xl font-bold text-center tracking-tight text-white">

                            Digital Sukses
                        </h5>
                    </div>
                    <div
                        className="flex justify-center items-center flex-col gap-3 w-full md:w-56 h-56 max-w-lg p-6 bg-violet-500 rounded-[40px] hover:bg-violet-500"
                    >
                            <SiFireship
                            color='white'
                            size={50}
                        />
                        <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-white">
                            Bisnis Booming
                        </h5>
                    </div>
                </div>
                <div className='flex flex-col gap-6'>
                    <div
                        className="flex justify-center items-center flex-col gap-3 w-full md:w-56 h-56 max-w-lg p-6 bg-violet-500 rounded-[40px] hover:bg-violet-500"
                    >
                            <TbBrandFunimation
                            color='white'
                            size={50}
                        />
                        <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-white">
                            Berani Beda
                        </h5>
                    </div>
                    <div
                        className="flex justify-center items-center flex-col gap-3 w-full md:w-56 h-56 max-w-lg p-6 bg-violet-500 rounded-[40px] hover:bg-violet-500"
                    >
                            <IoExtensionPuzzle
                            color='white'
                            size={50}
                        />
                        <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-white">
                            Kreatif Seru
                        </h5>
                    </div>
                </div>
                <div className='order-first lg:order-last p-5 flex bg-violet-400 rounded-[40px] justify-center items-center w-full md:w-auto'>
                    <h1 className="text-white text-3xl lg:text-6xl font-extrabold capitalize font-poppins text-center md:text-left">

                        Pengelolaan Sosial Media di Seluruh Indonesia, <span className='bg-yellow-300 text-transparent bg-clip-text rounded-2xl'>Ekonomis</span>, <span className='bg-sky-300 text-transparent bg-clip-text rounded-2xl'>Cepat</span>, dan <span className='bg-teal-300 text-transparent bg-clip-text rounded-2xl'>Terpecaya</span>
                    </h1>
                </div>
            </div>
        </>
    )
}
