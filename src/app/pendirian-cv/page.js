// import fs from 'fs'
// import legal from '../../../../public/BG/VectorCV.jpg'
// import { BannerText } from '@/components/BannerText';
// import { ImgProduk } from '@/components/ImgProduk'
// import { BodyCV } from '@/components/LegalComponents/BodyCv';
// import { RWhyUs } from '@/components/LegalComponents/RWhyUs';
// import { CardPriceCV } from '@/components/LegalComponents/CardPriceCv';

import { BannerService } from "@/components/ServicesComponent/BannerService";

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
    // const other = ""
    // const other2 = "Layanan"
    // const main = "Pendirian CV"
    // const secondary = "Pembangunan PT tanpa ribet, hanya dengan Ganesha Consulting! Dapatkan layanan cepat, terpercaya, dan harga terjangkau untuk memastikan PT Anda tumbuh sukses. Hubungi kami sekarang untuk memulai langkah pertama menuju kesuksesan bisnis Anda!."
    // let rawData = await fs.promises.readFile('public/JSON/PaketCV.json', 'utf-8');
    // let data = JSON.parse(rawData);

    return (
        <>
        <BannerService/>
            {/* <ImgProduk socmed={legal} stylesImg={'dark:invert saturate-150 dark:hue-rotate-180'} />
            <BannerText
                main={main}
                other2={other2}
                other={other}
                secondary={secondary}
                styles='bg-orange-600 text-transparent bg-clip-text'
                btn1='Pilih Paket'
                btn2='Konsultasi Sekarang'
                styleL='bg-orange-200'
                styleR='bg-orange-200'
                href1='#packages'
            />
            <CardPriceCV data={data} />
            <BodyCV />
            <RWhyUs color={"orange"} /> */}
        </>
    )
}