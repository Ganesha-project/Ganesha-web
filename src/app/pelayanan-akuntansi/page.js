import fs from 'fs'
import socmed from '../../public/BG/accounting.jpg';
import { BannerText } from '@/components/BannerText';
import { ImgProduk } from '@/components/ImgProduk';
import { ExtrasCard } from '@/components/ReusableComponents/ExtrasCard';
import { BannerService } from '@/components/ServicesComponent/BannerService';

export const metadata = {
    title: "Pelayanan Akuntansi - Ganesha Consulting",
    description: "Dapatkan dukungan akuntansi terpercaya untuk pencatatan keuangan, pelaporan pajak, dan analisis keuangan yang akurat. Hubungi kami untuk konsultasi lebih lanjut!",
    keywords: "pelayanan akuntansi, dukungan akuntansi, pencatatan keuangan, pelaporan pajak, analisis keuangan, Ganesha Consulting",
    image: "/BG/accounting.jpg", // Path ke gambar terkait Pelayanan Akuntansi
    url: "https://www.ganeshaconsulting.co.id/pelayanan-akuntansi", // URL halaman Pelayanan Akuntansi Anda
    author: "Ganesha Consulting",
    siteName: "Ganesha Consulting",
    type: "website",
    robots: "index, follow", // Aturan indeks dan pengikutan
    locale: "id_ID", // Lokalisasi halaman (misalnya, Indonesia)
    // Open Graph metadata untuk berbagi di media sosial
    openGraph: {
        type: "website",
        url: "https://www.ganeshaconsulting.co.id/pelayanan-akuntansi",
        title: "Pelayanan Akuntansi - Ganesha Consulting",
        description: "Dapatkan dukungan akuntansi terpercaya untuk pencatatan keuangan, pelaporan pajak, dan analisis keuangan yang akurat. Hubungi kami untuk konsultasi lebih lanjut!",
        image: {
            url: "https://www.ganeshaconsulting.co.id/BG/accounting.jpg",
            alt: "Ganesha Consulting - Pelayanan Akuntansi"
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


export default async function PelayananAkuntansi() {
    let rawData = await fs.promises.readFile('public/JSON/Manajemen.json', 'utf-8');
    let data = JSON.parse(rawData);

    return (
        <>
            <BannerService />
            <ExtrasCard data={data} accent1={'bg-[#019C85]'} accent2={'bg-[#A4F5EC]'} />
        </>
    );
}

