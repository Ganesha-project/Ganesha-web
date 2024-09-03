import Image from "next/image";
import { Title } from "../Title";
import { DataPageLegal } from "@/app/Database";

export const metadata = {
    title: "Pengertian PT dan Undang-Undang Terkait - Ganesha Consulting",
    description: "Pelajari pengertian Perseroan Terbatas (PT) dan undang-undang terkait di Indonesia. Temukan informasi penting tentang pendirian, pengelolaan, dan persyaratan PT.",
    keywords: "pengertian PT, undang-undang PT, Perseroan Terbatas, pendirian PT, regulasi PT, hukum PT, Ganesha Consulting",
    image: "/IMG/IconVector/checkgreen.png", // Path ke gambar terkait pengertian PT
    url: "https://www.ganeshaconsulting.co.id/all-products/legalitas/pendirian-pt", // URL halaman Anda
    author: "Ganesha Consulting",
    siteName: "Ganesha Consulting",
    type: "website",
    robots: "index, follow", // Aturan indeks dan pengikutan
    locale: "id_ID", // Lokalisasi halaman (misalnya, Indonesia)
    // Open Graph metadata untuk berbagi di media sosial
    openGraph: {
        type: "website",
        url: "https://www.ganeshaconsulting.co.id/all-products/legalitas/pendirian-pt",
        title: "Pengertian PT dan Undang-Undang Terkait - Ganesha Consulting",
        description: "Pelajari pengertian Perseroan Terbatas (PT) dan undang-undang terkait di Indonesia. Temukan informasi penting tentang pendirian, pengelolaan, dan persyaratan PT.",
        image: {
            url: "https://www.ganeshaconsulting.co.id/IMG/IconVector/checkgreen.png",
            alt: "Ganesha Consulting - Pengertian PT dan Undang-Undang Terkait"
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

export const BodyPT = () => {
    return (
        <>
            <section className="md:mx-24 mx-5 space-y-10 md:py-20 py-10">
                <Title text1={'Undang - undang'} text={'Terkait PT di Indonesia'} />
                <div className="md:grid md:grid-cols-2 flex flex-col gap-5">
                    {DataPageLegal.legalTexts.map((el, idx) => (
                        <div key={idx} className="space-y-10 p-10 rounded-3xl dark:from-darkColor dark:to-transparent bg-gradient-to-b from-gray-200 to-transparent duration-300 ease-in-out hover:scale-105 origin-bottom hover:brightness-105 hover:shadow-mainShadow">
                            <div className="h-14 w-14 bg-gradient-to-bl dark:from-darkColor dark:to-sky-600 from-gray-200 to-sky-300 rounded-full flex items-center justify-center text-2xl md:text-4xl">
                                {el.number}
                            </div>
                            <h1 className="font-medium">
                                {el.text}
                            </h1>
                        </div>
                    ))}
                </div>
            </section>

        </>
    )
}