import { ImgProduk } from '@/components/ImgProduk';
import socmed from "../../public/BG/list.jpg"
import { PriceListBanner } from '@/components/PriceListBanner';
import fs from 'fs'
import { CardWeb } from '@/components/WebComponents/CardWeb';
import { CardPriceDesign } from '@/components/SocmedComponents/CardPrideDesign';
import { CardPriceSocmed } from '@/components/SocmedComponents/CardPriceSocmed';
import { CardPricePt } from '@/components/LegalComponents/CardPricePt';
import { CardPricePma } from '@/components/LegalComponents/CardPricePma';
import { CardPriceBadanUsaha } from '@/components/LegalComponents/CardPriceBadanUsaha';
import { CardPriceCV } from '@/components/LegalComponents/CardPriceCv';

export const metadata = {
    title: "Semua Produk - Ganesha Consulting",
    description: "Lihat semua produk dan layanan yang ditawarkan oleh Ganesha Consulting, termasuk pembuatan website, manajemen media sosial, desain grafis, pendirian PT, dan banyak lagi. Hubungi kami untuk konsultasi lebih lanjut!",
    keywords: "semua produk, layanan, pembuatan website, manajemen media sosial, desain grafis, pendirian PT, Ganesha Consulting",
    image: "/BG/list.jpg", // Path ke gambar terkait Semua Produk
    url: "https://www.ganeshaconsulting.co.id/price-list", // URL halaman Semua Produk Anda
    author: "Ganesha Consulting",
    siteName: "Ganesha Consulting",
    type: "website",
    robots: "index, follow", // Aturan indeks dan pengikutan
    locale: "id_ID", // Lokalisasi halaman (misalnya, Indonesia)
    // Open Graph metadata untuk berbagi di media sosial
    openGraph: {
        type: "website",
        url: "https://www.ganeshaconsulting.co.id/price-list",
        title: "Semua Produk - Ganesha Consulting",
        description: "Lihat semua produk dan layanan yang ditawarkan oleh Ganesha Consulting, termasuk pembuatan website, manajemen media sosial, desain grafis, pendirian PT, dan banyak lagi. Hubungi kami untuk konsultasi lebih lanjut!",
        image: {
            url: "https://www.ganeshaconsulting.co.id/BG/list.jpg",
            alt: "Ganesha Consulting - Semua Produk"
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


export default async function AllProductsPage() {
    let rawDataWeb = await fs.promises.readFile('public/JSON/WebPrice.json', 'utf-8');
    let dataWeb = JSON.parse(rawDataWeb);

    let rawDataSocmed = await fs.promises.readFile('public/JSON/SocmedPrice.json', 'utf-8');
    let dataSocmed = JSON.parse(rawDataSocmed);

    let rawDataDesign = await fs.promises.readFile('public/JSON/DesignPrice.json', 'utf-8');
    let dataDesign = JSON.parse(rawDataDesign);

    let rawDataPt = await fs.promises.readFile('public/JSON/PaketPT.json', 'utf-8');
    let dataPt = JSON.parse(rawDataPt);

    let rawDataCv = await fs.promises.readFile('public/JSON/PaketCV.json', 'utf-8');
    let dataCv = JSON.parse(rawDataCv);

    let rawDataPma = await fs.promises.readFile('public/JSON/PaketPma.json', 'utf-8');
    let dataPma = JSON.parse(rawDataPma);

    let rawDataBU = await fs.promises.readFile('public/JSON/BadanUsaha.json', 'utf-8');
    let dataBU = JSON.parse(rawDataBU);

    return (
        <>
            <ImgProduk styles={'mt-[2vw]'} socmed={socmed} stylesImg={'h-[90vh] w-auto dark:invert saturate-150 dark:hue-rotate-180'} />
            <PriceListBanner />
            <CardPriceSocmed data={dataSocmed} />
            <CardPriceDesign data={dataDesign} />
            <CardWeb data={dataWeb} />
            <CardPricePt data={dataPt} />
            <CardPriceCV data={dataCv} />
            <CardPricePma data={dataPma} />
            <CardPriceBadanUsaha data={dataBU} />
        </>
    )
}