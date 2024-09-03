import { RWhyUs } from "@/components/LegalComponents/RWhyUs";
import { ReusableCards } from "@/components/ReusableCards";
import { BannerService } from "@/components/ServicesComponent/BannerService";
import { BadanUsahaPackages } from "../../../public/DB/PTPackages";
import { Benefit } from "@/components/LegalComponents/Benefit";
import { ClientPhotos } from "@/components/ClientPhotos";
import { Faqs } from "@/components/LegalComponents/Faqs";
import { WhyLegal } from "@/components/LegalComponents/WhyLegal";
import { dataPageBadanUsaha, undangUndangTerkait, whyBadanUsaha } from "../../../public/Data/BadanUsahaData";
import { Laws } from "@/components/LegalComponents/Laws";
import { DataPageLegal } from "../../../public/Data/LegalitasData";

const metadata = {
    title: "Pendirian Badan Usaha dengan Ganesha Consulting - Solusi Terbaik untuk Bisnis Anda",
    description: "Pendirian badan usaha tanpa ribet dengan Ganesha Consulting! Dapatkan layanan cepat, terpercaya, dan harga terjangkau untuk memastikan badan usaha Anda tumbuh sukses. Hubungi kami sekarang untuk memulai langkah pertama menuju kesuksesan bisnis Anda!",
    keywords: "pendirian badan usaha, layanan pendirian badan usaha, Ganesha Consulting, layanan cepat badan usaha, layanan terpercaya badan usaha, harga terjangkau badan usaha",
    image: "/BG/Yayasan.png", // Path ke gambar terkait pendirian badan usaha
    url: "https://www.ganeshaconsulting.co.id/all-products/legalitas/badan-usaha", // URL halaman Anda
    author: "Ganesha Consulting",
    siteName: "Ganesha Consulting",
    type: "website",
    robots: "index, follow", // Aturan indeks dan pengikutan
    locale: "id_ID", // Lokalisasi halaman (misalnya, Indonesia)
    // Open Graph metadata untuk berbagi di media sosial
    openGraph: {
        type: "website",
        url: "https://www.ganeshaconsulting.co.id/all-products/legalitas/badan-usaha",
        title: "Pendirian Badan Usaha dengan Ganesha Consulting - Solusi Terbaik untuk Bisnis Anda",
        description: "Pendirian badan usaha tanpa ribet dengan Ganesha Consulting! Dapatkan layanan cepat, terpercaya, dan harga terjangkau untuk memastikan badan usaha Anda tumbuh sukses. Hubungi kami sekarang untuk memulai langkah pertama menuju kesuksesan bisnis Anda!",
        image: {
            url: "https://www.ganeshaconsulting.co.id/BG/Yayasan.png",
            alt: "Ganesha Consulting - Pendirian Badan Usaha"
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

export default async function PendirianBadanUsaha() {
    return (
        <>
            <BannerService />
            <ReusableCards
                data={BadanUsahaPackages}
                cardColor={'bg-gray-200'}
                typeColor={'text-gray-600'}
                priceColor={'text-gray-800'}
                buttonColor={'bg-gray-500'}
                label={'Paket Pendirian Badan Usaha'}
            />
            <Benefit
                data={DataPageLegal.benefit}
                opening={'Benefit'}
                title={'Dari Pendirian Badan Usaha di Ganesha Consulting'}
            />
            <WhyLegal
                data={whyBadanUsaha}
                text1={'Mengapa'}
                text={'Badan Usaha diperlukan?'}
            />
            <ClientPhotos />
            <Laws
                data={undangUndangTerkait}
                text1={'Undang - Undang'}
                text={'Terkait Badan Usaha di Indonesia'}
            />
            <RWhyUs />
            <Faqs
                className2={'!bg-gray-300 dark:!bg-opacity-25 w-full'}
                text={'FAQ'}
                color={'gray'}
                data={dataPageBadanUsaha.faqDataBU}
            />
        </>
    )
}