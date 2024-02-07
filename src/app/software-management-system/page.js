import fs from 'fs'
import socmed from '../../public/BG/software.jpg';
import { BannerText } from '@/components/BannerText';
import { ImgProduk } from '@/components/ImgProduk';
import { ExtrasCard } from '@/components/ReusableComponents/ExtrasCard';

export const metadata = {
    title: "Software Management System - Ganesha Consulting",
    description: "Temukan solusi terkini untuk meningkatkan efisiensi dan kinerja operasional bisnis Anda dengan Software Management System dari Ganesha Consulting. Kami menyediakan berbagai macam perangkat lunak, mulai dari software akuntansi hingga sistem AR. Hubungi kami untuk konsultasi lebih lanjut!",
    keywords: "software management system, software akuntansi, AR system, Ganesha Consulting",
    image: "/BG/software.jpg", // Path ke gambar terkait Software Management System
    url: "https://www.ganeshaconsulting.co.id/software-management-system", // URL halaman Software Management System Anda
    author: "Ganesha Consulting",
    siteName: "Ganesha Consulting",
    type: "website",
    robots: "index, follow", // Aturan indeks dan pengikutan
    locale: "id_ID", // Lokalisasi halaman (misalnya, Indonesia)
    // Open Graph metadata untuk berbagi di media sosial
    openGraph: {
        type: "website",
        url: "https://www.ganeshaconsulting.co.id/software-management-system",
        title: "Software Management System - Ganesha Consulting",
        description: "Temukan solusi terkini untuk meningkatkan efisiensi dan kinerja operasional bisnis Anda dengan Software Management System dari Ganesha Consulting. Kami menyediakan berbagai macam perangkat lunak, mulai dari software akuntansi hingga sistem AR. Hubungi kami untuk konsultasi lebih lanjut!",
        image: {
            url: "https://www.ganeshaconsulting.co.id/BG/software.jpg",
            alt: "Ganesha Consulting - Software Management System"
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


export default async function SoftwareManagementSystem() {
    const main = "Software Management";
    const other = "System";
    const other2 = "";
    const secondary =
        "Solusi terkini, dari Accounting Software hingga AR System, untuk meningkatkan efisiensi dan kinerja operasional.";
    let rawData = await fs.promises.readFile('public/JSON/Software.json', 'utf-8');
    let data = JSON.parse(rawData);

    return (
        <>

            <ImgProduk socmed={socmed} styles='bg-sky-300' stylesImg="translate-y-[7%]" />
            <BannerText
                other={other} other2={other2} main={main} secondary={secondary}
                styles='bg-[#D268CB]'
                btn1='Lebih Lanjut'
                btn2='Konsultasi Sekarang'
                styleL='bg-[#EFC4E9]'
                styleR='bg-[#EFC4E9]'
                href1='#packages' />
            <ExtrasCard data={data} accent1={'bg-[#D268CB]'} accent2={'bg-[#EFC4E9]'} />
        </>
    );
}

