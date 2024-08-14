import { BannerSosmed } from "@/components/BannerSosmed";
import { ReusableCards } from "@/components/ReusableCards";
import { BannerService } from "@/components/ServicesComponent/BannerService";
import { AccordionSocmed } from "@/components/SocmedComponents/AccordionSocmed";
import { HeaderContentSosmed } from "@/components/SocmedComponents/HeaderContentSosmed";
import { SMPackages } from "../../../public/DB/SMPackages";

export const metadata = {
    title: "Manajemen Sosial Media & Desain - Ganesha Consulting",
    description: "Ganesha Consulting menyediakan layanan manajemen sosial media dan desain untuk membantu bisnis Anda membangun citra merek yang kuat dan berinteraksi secara efektif dengan pelanggan. Temukan paket yang sesuai dengan kebutuhan Anda sekarang!",
    keywords: "manajemen sosial media, desain grafis, layanan sosial media, layanan desain, Ganesha Consulting",
    image: "/BG/socmed.png", // Path ke gambar banner
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
        title: "Manajemen Sosial Media & Desain - Ganesha Consulting",
        description: "Ganesha Consulting menyediakan layanan manajemen sosial media dan desain untuk membantu bisnis Anda membangun citra merek yang kuat dan berinteraksi secara efektif dengan pelanggan. Temukan paket yang sesuai dengan kebutuhan Anda sekarang!",
        image: {
            url: "https://www.ganeshaconsulting.co.id/BG/socmed.png",
            alt: "Ganesha Consulting - Manajemen Sosial Media & Desain"
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


export default async function SosmedPage() {
    return (
        <>
            <BannerService />
            <ReusableCards
                data={SMPackages}
                cardColor={'bg-violet-100'}
                typeColor={'text-violet-600'}
                priceColor={'text-violet-800'}
                buttonColor={'bg-violet-500'}
                label={'Paket Social Media Management'}
            />
            <HeaderContentSosmed />
            <BannerSosmed />
            <AccordionSocmed />
        </>
    )
}