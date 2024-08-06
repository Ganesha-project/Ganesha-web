// import fs from 'fs'
// import socmed from '../../../public/BG/web.png';
// import { BannerText } from '@/components/BannerText';
// import { ImgProduk } from '@/components/ImgProduk';
// import { CardWeb } from '@/components/WebComponents/CardWeb';
// import { HeaderWeb } from '@/components/WebComponents/HeaderWeb';
// import { WebBody } from '@/components/WebComponents/WebBody';

import { BannerService } from "@/components/ServicesComponent/BannerService";

export const metadata = {
    title: "Jasa Pembuatan Website - Ganesha Consulting",
    description: "Ganesha Consulting menawarkan layanan pembuatan website dengan desain estetik, fungsionalitas prima, dan pengalaman pengguna yang menarik. Optimalkan presensi digital perusahaan Anda sekarang!",
    keywords: "jasa pembuatan website, pembuatan website, desain website, Ganesha Consulting, optimasi website",
    image: "/BG/web.png", // Path ke gambar banner
    url: "https://www.ganeshaconsulting.co.id/all-products/web", // URL halaman Anda
    author: "Ganesha Consulting",
    siteName: "Ganesha Consulting",
    type: "website",
    robots: "index, follow", // Aturan indeks dan pengikutan
    locale: "id_ID", // Lokalisasi halaman (misalnya, Indonesia)
    // Open Graph metadata untuk berbagi di media sosial
    openGraph: {
        type: "website",
        url: "https://www.ganeshaconsulting.co.id/all-products/web",
        title: "Jasa Pembuatan Website - Ganesha Consulting",
        description: "Ganesha Consulting menawarkan layanan pembuatan website dengan desain estetik, fungsionalitas prima, dan pengalaman pengguna yang menarik. Optimalkan presensi digital perusahaan Anda sekarang!",
        image: {
            url: "https://www.ganeshaconsulting.co.id/BG/web.png",
            alt: "Ganesha Consulting - Jasa Pembuatan Website"
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
            "https://twitter.com/ganeshaconsulting",
            "https://www.linkedin.com/company/ganeshaconsulting"
        ]
    }
};


export default async function WebPage() {
    // const main = "Website";
    // const other = "";
    // const other2 = "Jasa Pembuatan";
    // const secondary =
    //     "Optimalkan presensi digital perusahaan Anda dengan layanan pembuatan website kami. Desain estetik, fungsionalitas prima, dan pengalaman pengguna yang menarik, semuanya dalam satu paket. Bersama kami, hadirkan daya tarik dan kekuatan online untuk memperluas jangkauan bisnis Anda.";
    // let rawData = await fs.promises.readFile('public/JSON/WebPrice.json', 'utf-8');
    // let data = JSON.parse(rawData);

    return (
        <>
            <BannerService />
            {/* <ImgProduk socmed={socmed} styles='bg-sky-300' stylesImg="translate-y-[7%]" />
            <BannerText
                other={other} other2={other2} main={main} secondary={secondary}
                styles='bg-sky-400'
                btn1='Lebih Lanjut'
                btn2='Konsultasi Sekarang'
                styleL='bg-sky-200'
                styleR='bg-sky-200'
                href1='#packages' />
            <CardWeb data={data} />
            <HeaderWeb />
            <WebBody /> */}
        </>
    );
}

