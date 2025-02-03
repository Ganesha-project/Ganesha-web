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
            <section className="md:mx-24 2xl:mx-80 mx-5 md:py-20 py-10">
                <div className="flex md:flex-row flex-col gap-5">
                    <div className="p-5 rounded-[35px] md:w-[30lvw] md:h-[30lvw] 2xl:h-[25lvw] bg-[#f5eafa] transition-transform duration-500 hover:rotate-y-180 hover:scale-95 hover:shadow-mainShadow">
                        <Image
                            width={100}
                            height={100}
                            className="w-full h-auto object-cover"
                            src={'https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236550/GaneshaAssets/cp0gzma6qaoa9p3nfxcv.svg'}
                            alt="image socmed"
                        />
                    </div>
                    <div className="p-5 rounded-[35px] md:w-[30lvw] md:h-[30lvw] 2xl:h-[25lvw] bg-gradient-radial from-fuchsia-200 to-white dark:from-fuchsia-950 dark:to-darkColor flex items-center justify-center transition-transform duration-500 hover:rotate-y-180 hover:scale-95 hover:shadow-mainShadow">
                        <div className="flex flex-col justify-evenly text-2xl md:text-5xl font-bold w-full md:w-fit h-full rounded-md lg:text-left md:text-right tracking-wider">
                            <p>
                                Apa itu
                            </p>
                            <p className="bg-gradient-to-tr dark:from-gray-100 from-gray-800 dark:via-gray-300 via-gray-600 to-violet-500 dark:to-violet-300 bg-clip-text text-transparent">
                                Social Media
                            </p>
                            <p>
                                Management
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-5 rounded-[35px] md:w-[30lvw] md:h-[30lvw] 2xl:h-[25lvw] bg-gradient-radial from-white to-gray-50 dark:from-black dark:to-darkColor transition-transform duration-500 hover:rotate-y-180 hover:scale-95 hover:shadow-mainShadow">
                        <p className="flex items-center justify-center text-justify text-xl leading-relaxed tracking-wide md:text-justify h-full bg-gradient-to-tr dark:from-gray-100 from-gray-800 dark:via-gray-300 via-gray-600 to-fuchsia-800 dark:to-fuchsia-300 bg-clip-text text-transparent">
                            Sosial Media Manajemen adalah proses pengelolaan dan pengelolaan aktivitas serta konten di platform media sosial untuk mencapai tujuan tertentu, seperti membangun merek, meningkatkan visibilitas, atau berinteraksi dengan audiens.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}