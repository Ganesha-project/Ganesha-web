import { BodyPT } from '@/components/LegalComponents/BodyPt';
import { RWhyUs } from '@/components/LegalComponents/RWhyUs';
import { ReusableCards } from '@/components/ReusableCards';
import { BannerService } from "@/components/ServicesComponent/BannerService";
import { ExtrasPackages, PMAPackages, PTPackages } from '../../../public/DB/PTPackages';
import { Benefit } from '@/components/LegalComponents/Benefit';
import { WhyLegal } from '@/components/LegalComponents/WhyLegal';
import { Faqs } from '@/components/LegalComponents/Faqs';
import { ClientPhotos } from '@/components/ClientPhotos';
import { DataPageLegal } from '../Database';

export const metadata = {
    title: "Pendirian PT - Ganesha Consulting",
    description: "Ganesha Consulting menawarkan layanan pendirian PT tanpa ribet. Dapatkan layanan cepat, terpercaya, dan harga terjangkau untuk memastikan PT Anda tumbuh sukses. Hubungi kami sekarang!",
    keywords: "pendirian PT, pembangunan PT, Ganesha Consulting, layanan PT, konsultasi bisnis",
    image: "/BG/VectorPT.png", // Path ke gambar terkait pendirian PT
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
        title: "Pendirian PT - Ganesha Consulting",
        description: "Ganesha Consulting menawarkan layanan pendirian PT tanpa ribet. Dapatkan layanan cepat, terpercaya, dan harga terjangkau untuk memastikan PT Anda tumbuh sukses. Hubungi kami sekarang!",
        image: {
            url: "https://www.ganeshaconsulting.co.id/BG/VectorPT.png",
            alt: "Ganesha Consulting - Pendirian PT"
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

export default async function PendirianPtPage() {

    return (
        <>
            <BannerService />
            <ReusableCards
                data={[...PTPackages, ...PMAPackages, ...ExtrasPackages]}
                cardColor={'bg-cyan-100'}
                typeColor={'text-cyan-600'}
                priceColor={'text-cyan-800'}
                buttonColor={'bg-cyan-500'}
                label={'Paket Pendirian PT'}
            />
            <Benefit
                color={'cyan'}
                title={'Yang Kamu Dapatkan dari pendirian PT di Ganesha Consulting'}
            />
            <ClientPhotos />
            <WhyLegal />
            <BodyPT />
            <Faqs
                text={'FAQ'}
                color={'cyan'}
                data={DataPageLegal.faqData}
            />
            <RWhyUs color={"cyan"} />
        </>
    )
}