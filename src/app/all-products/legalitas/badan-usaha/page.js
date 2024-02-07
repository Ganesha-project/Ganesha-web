import legal from '../../../../public/BG/Yayasan.png'
import fs from 'fs'
import { ImgProduk } from '@/components/ImgProduk'
import { RWhyUs } from '@/components/LegalComponents/RWhyUs';
import { BannerBadanUsaha } from '@/components/LegalComponents/BannerBadanUsaha';
import { CardPriceBadanUsaha } from '@/components/LegalComponents/CardPriceBadanUsaha';
import { FaqProduct } from '@/components/LegalComponents/FaqProduct';

export const metadata = {
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
    let rawData = await fs.promises.readFile('public/JSON/BadanUsaha.json', 'utf-8');
    let data = JSON.parse(rawData);

    return (
        <>
            <ImgProduk socmed={legal} styles='bg-teal-300' />
            <CardPriceBadanUsaha data={data} />
            <BannerBadanUsaha />
            <FaqProduct />
            <RWhyUs color={"slate"} />
        </>
    )
}