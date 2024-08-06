// import fs from 'fs'
// import legal from '../../../../public/BG/VectorPT.png'
// import { BannerText } from '@/components/BannerText';
// import { ImgProduk } from '@/components/ImgProduk'
// import { BodyPT } from '@/components/LegalComponents/BodyPt';
// import { CardPricePt } from '@/components/LegalComponents/CardPricePt';
// import { RWhyUs } from '@/components/LegalComponents/RWhyUs';
// import { CardPricePma } from '@/components/LegalComponents/CardPricePma';

import { BannerService } from "@/components/ServicesComponent/BannerService";

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
    // const other = ""
    // const other2 = "Layanan"
    // const main = "Pendirian PT"
    // const secondary = "Pembangunan PT tanpa ribet, hanya dengan Ganesha Consulting! Dapatkan layanan cepat, terpercaya, dan harga terjangkau untuk memastikan PT Anda tumbuh sukses. Hubungi kami sekarang untuk memulai langkah pertama menuju kesuksesan bisnis Anda!."
    // let rawData = await fs.promises.readFile('public/JSON/PaketPT.json', 'utf-8');
    // let data = JSON.parse(rawData);

    // let rawDataPma = await fs.promises.readFile('public/JSON/PaketPma.json', 'utf-8');
    // let dataPma = JSON.parse(rawDataPma);

    return (
        <>
            {/* <ImgProduk socmed={legal} stylesImg={'h-[90vh] w-auto'} styles='bg-white' />
            <BannerText
                main={main}
                other2={other2}
                other={other}
                secondary={secondary}
                styles='bg-cyan-600 text-transparent bg-clip-text'
                btn1='Pilih Paket'
                btn2='Konsultasi Sekarang'
                styleL='bg-cyan-200'
                styleR='bg-cyan-200'
                href1='#packages'
            />
            <CardPricePt data={data} />
            <CardPricePma data={dataPma}/>
            <BodyPT />
            <RWhyUs color={"cyan"} /> */}
            <BannerService />
        </>
    )
}