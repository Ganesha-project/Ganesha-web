import medsosPict from "../public/IMG/VectorBg/medsos.jpg"
import bulb from "../public/IMG/IconVector/lightbulb-exclamation.png"
import twentyfour from '../public/IMG/IconVector/24white.png'
import Image from "next/image"

export const metadata = {
    title: "Sosial Media Manajemen - Ganesha Consulting",
    description: "Apa itu sosial media manajemen? Temukan definisi, kelebihan, dan layanan terbaik di Ganesha Consulting. Kami menawarkan solusi sosial media yang kreatif, inovatif, dan terkini untuk memenuhi kebutuhan bisnis Anda.",
    keywords: "sosial media manajemen, layanan sosmed, Ganesha Consulting, manajemen konten sosial media",
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
        title: "Sosial Media Manajemen - Ganesha Consulting",
        description: "Apa itu sosial media manajemen? Temukan definisi, kelebihan, dan layanan terbaik di Ganesha Consulting. Kami menawarkan solusi sosial media yang kreatif, inovatif, dan terkini untuk memenuhi kebutuhan bisnis Anda.",
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


export const BannerSosmed = () => {

    return (
        <>

            <div className="px-10 md:px-20 lg:px-36 py-10 md:py-16 lg:py-24">
                <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
                    <Image src={medsosPict} className="w-full order-1 md:w-[50%] h-auto md:h-[50vw] lg:h-auto object-cover" alt="medsos image" />
                    <div className="mx-10 bg-violet-100 p-5 rounded-[40px] w-full md:w-[50%]">
                        <h1 className="lg:mt-4 md:mt-0 text-gray-900 font-bold lg:text-right text-3xl md:text-6xl lg:text-7xl font-poppins">Apa itu Sosial Media Manajemen?</h1>
                        <h1 className="mt-4 text-justify lg:text-justify text-gray-900 text-xl md:text-2xl lg:text-xl tracking-wide leading-relaxed">
                            Sosial Media Manajemen adalah proses pengelolaan dan pengelolaan aktivitas serta konten di platform media sosial untuk mencapai tujuan tertentu, seperti membangun merek, meningkatkan visibilitas, atau berinteraksi dengan audiens.
                        </h1>
                    </div>
                </div>
            </div>

            <div className="m-10 lg:m-32 md:m-10 flex flex-wrap gap-5 md:gap-7 justify-center">
                <p className="bg-violet-100 p-5 rounded-[40px] text-3xl lg:text-5xl lg:leading-normal font-bold lg:w-[70vw] text-left capitalize">Apasih Kelebihan Social Media Management Di <span className='bg-violet-800 bg-clip-text text-transparent font-extrabold '>Ganesha Consulting</span>?</p>
                <div className="flex justify-center items-center flex-row gap-3 w-fit h-auto lg:w-full lg:h-auto p-4 md:p-6 bg-violet-600 rounded-[40px] hover:bg-violet-500">
                    <h5 className="mb-2 text-xl md:text-2xl font-medium text-justify tracking-tight text-white">
                        Karena kami berkomitmen untuk memberikan pelayanan Social Media yang terbaik, ditangani oleh para tenaga professional dengan memberikan strategi yang kreatif, inovatif, serta menyediakan konten-konten yang Up to Date!
                    </h5>
                </div>
            </div>

        </>
    )
}