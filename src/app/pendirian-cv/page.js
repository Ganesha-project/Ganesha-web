import { RWhyUs } from "@/components/LegalComponents/RWhyUs";
import { ReusableCards } from "@/components/ReusableCards";
import { BannerService } from "@/components/ServicesComponent/BannerService";
import { CVPackages } from "../../../public/DB/CVPackages";
import { ExtrasPackages } from "../../../public/DB/PTPackages";
import { Benefit } from "@/components/LegalComponents/Benefit";
import { Faqs } from "@/components/LegalComponents/Faqs";
import { dataPageCV, DataPageLegal } from "../Database";
import { ClientPhotos } from "@/components/ClientPhotos";
import { Explanation } from "@/components/LegalComponents/Explanation";
import { Laws } from "@/components/LegalComponents/Laws";
import { WhyLegal } from "@/components/LegalComponents/WhyLegal";

export const metadata = {
    title: "Pendirian CV dengan Ganesha Consulting - Solusi Terbaik untuk Bisnis Anda",
    description: "Pembangunan CV tanpa ribet dengan Ganesha Consulting! Dapatkan layanan cepat, terpercaya, dan harga terjangkau untuk memastikan CV Anda tumbuh sukses. Hubungi kami sekarang untuk memulai langkah pertama menuju kesuksesan bisnis Anda!",
    keywords: "pendirian CV, layanan pembangunan CV, Ganesha Consulting, layanan cepat CV, layanan terpercaya CV, harga terjangkau CV",
    image: "/BG/VectorCV.jpg", // Path ke gambar terkait pendirian CV
    url: "https://www.ganeshaconsulting.co.id/all-products/legalitas/pendirian-cv", // URL halaman Anda
    author: "Ganesha Consulting",
    siteName: "Ganesha Consulting",
    type: "website",
    robots: "index, follow", // Aturan indeks dan pengikutan
    locale: "id_ID", // Lokalisasi halaman (misalnya, Indonesia)
    // Open Graph metadata untuk berbagi di media sosial
    openGraph: {
        type: "website",
        url: "https://www.ganeshaconsulting.co.id/all-products/legalitas/pendirian-cv",
        title: "Pendirian CV dengan Ganesha Consulting - Solusi Terbaik untuk Bisnis Anda",
        description: "Pembangunan CV tanpa ribet dengan Ganesha Consulting! Dapatkan layanan cepat, terpercaya, dan harga terjangkau untuk memastikan CV Anda tumbuh sukses. Hubungi kami sekarang untuk memulai langkah pertama menuju kesuksesan bisnis Anda!",
        image: {
            url: "https://www.ganeshaconsulting.co.id/BG/VectorCV.jpg",
            alt: "Ganesha Consulting - Pendirian CV"
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

export default async function PendirianCvPage() {
    return (
        <>
            <BannerService />
            <ReusableCards
                data={[...CVPackages, ...ExtrasPackages]}
                label={'Paket Pendirian CV'}
                scrollToLg={29}
                scrollToMd={29}
                scrollToSm={15}
            />
            <ClientPhotos />
            <Benefit
                data={DataPageLegal.benefit}
                opening={'Yang Kamu Dapatkan'}
                title={'Dari Pendirian CV di Ganesha Consulting'}
            />
            <Explanation
                desc={dataPageCV.whatCv.desc}
                text={'Apa Itu CV?'}
            />
            <Laws
                data={dataPageCV.undangUndangTerkait}
                text1={'Undang - Undang'}
                text={'Terkait CV di Indonesia'}
                classNameTitle={'!font-bold text-2xl'}
            />
            <WhyLegal
                data={dataPageCV.whyCV}
                text1={'Mengapa'}
                text={'Legalitas Usaha diperlukan?'}
            />
            <Faqs
                text={'FAQ'}
                color={'orange'}
                data={dataPageCV.faqcv}
            />
            <RWhyUs color={"orange"} />
        </>
    )
}