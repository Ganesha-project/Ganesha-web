import fs from 'fs'
import socmed from '../../public/BG/patent.jpg';
import { BannerText } from '@/components/BannerText';
import { ImgProduk } from '@/components/ImgProduk';
import { ExtrasCard } from '@/components/ReusableComponents/ExtrasCard';

export const metadata = {
    title: "HAKI | Hak Kekayaan Intelektual - Ganesha Consulting",
    description: "Lindungi merek, hak cipta, dan paten bisnis Anda dengan layanan HAKI kami, memberikan keunggulan kompetitif. Hubungi kami untuk konsultasi lebih lanjut!",
    keywords: "HAKI, hak kekayaan intelektual, merek, hak cipta, paten, Ganesha Consulting, konsultasi bisnis",
    image: "/BG/patent.jpg", // Path ke gambar terkait HAKI
    url: "https://www.ganeshaconsulting.co.id/haki", // URL halaman HAKI Anda
    author: "Ganesha Consulting",
    siteName: "Ganesha Consulting",
    type: "website",
    robots: "index, follow", // Aturan indeks dan pengikutan
    locale: "id_ID", // Lokalisasi halaman (misalnya, Indonesia)
    // Open Graph metadata untuk berbagi di media sosial
    openGraph: {
        type: "website",
        url: "https://www.ganeshaconsulting.co.id/haki",
        title: "HAKI | Hak Kekayaan Intelektual - Ganesha Consulting",
        description: "Lindungi merek, hak cipta, dan paten bisnis Anda dengan layanan HAKI kami, memberikan keunggulan kompetitif. Hubungi kami untuk konsultasi lebih lanjut!",
        image: {
            url: "https://www.ganeshaconsulting.co.id/BG/patent.jpg",
            alt: "Ganesha Consulting - HAKI | Hak Kekayaan Intelektual"
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


export default async function HakiPage() {
    const main = "HAKI";
    const other = "| Hak Kekayaan Intelektual";
    const other2 = "";
    const secondary =
        "Lindungi merek, hak cipta, dan paten bisnis Anda dengan layanan HAKI kami, memberikan keunggulan kompetitif.";
    let rawData = await fs.promises.readFile('public/JSON/HAKI.json', 'utf-8');
    let data = JSON.parse(rawData);

    return (
        <>

            <ImgProduk socmed={socmed} styles='bg-sky-300' stylesImg="translate-y-[7%] dark:invert saturate-150 dark:hue-rotate-180" />
            <BannerText
                other={other} other2={other2} main={main} secondary={secondary}
                styles='bg-[#E43B3B]'
                btn1='Lebih Lanjut'
                btn2='Konsultasi Sekarang'
                styleL='bg-[#FFECD5]'
                styleR='bg-[#FFECD5]'
                href1='#packages' />
            <ExtrasCard data={data} accent1={'bg-[#E43B3B]'} accent2={'bg-[#FFECD5]'} />
        </>
    );
}

