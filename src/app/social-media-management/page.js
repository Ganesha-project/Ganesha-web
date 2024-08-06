// import socmed from '../../../public/BG/socmed.png'
// import fs from 'fs'
// import { BannerSosmed } from '@/components/BannerSosmed';
// import { BannerText } from '@/components/BannerText';
// import { HeaderContentSosmed } from '@/components/SocmedComponents/HeaderContentSosmed';
// import { ImgProduk } from '@/components/ImgProduk'
// import { CardPriceSocmed } from '@/components/SocmedComponents/CardPriceSocmed';
// import { CardPriceDesign } from '@/components/SocmedComponents/CardPrideDesign';
// import { AccordionSocmed } from '@/components/SocmedComponents/AccordionSocmed';

import { BannerService } from "@/components/ServicesComponent/BannerService";

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
    // const other = "Manajemen"
    // const main = "Sosial Media"
    // const secondary = "Sosial Media Manajemen adalah kunci sukses modern untuk membentuk citra merek yang kuat, berinteraksi secara efektif dengan pelanggan, dan menavigasi dinamika digital dengan kesan yang positif."
    // let rawData = await fs.promises.readFile('public/JSON/SocmedPrice.json', 'utf-8');
    // let rawData2 = await fs.promises.readFile('public/JSON/DesignPrice.json', 'utf-8');
    // let data = JSON.parse(rawData);
    // let data2 = JSON.parse(rawData2);
    return (
        <>
            <BannerService />
            {/* <ImgProduk socmed={socmed} styles='bg-violet-300' />
            <BannerText main={main} other={other} secondary={secondary}
                styles='bg-violet-400'
                btn1='Pilih Paket'
                btn2='Konsultasi Sekarang'
                styleL='bg-violet-200'
                styleR='bg-violet-200'
                href1='#packages'
                href2=''

            />
            <CardPriceSocmed data={data}/>
            <CardPriceDesign data={data2} />
            <HeaderContentSosmed />
            <BannerSosmed />
            <AccordionSocmed/> */}
        </>
    )
}