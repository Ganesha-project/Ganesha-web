import fs from 'fs'
import { ExtrasCard } from '@/components/ReusableComponents/ExtrasCard';
import { BannerService } from '@/components/ServicesComponent/BannerService';

export const metadata = {
    title: "Layanan Audit Profesional - Ganesha Consulting",
    description: "Layanan Audit profesional kami memberikan keyakinan terhadap informasi keuangan Anda, mengidentifikasi risiko, dan memperbaiki kontrol internal. Hubungi kami sekarang untuk konsultasi lebih lanjut!",
    keywords: "layanan audit, audit keuangan, audit internal, audit eksternal, Ganesha Consulting, konsultasi audit",
    image: "/BG/audit.jpg", // Path ke gambar terkait audit
    url: "https://www.ganeshaconsulting.co.id/audit", // URL halaman Anda
    author: "Ganesha Consulting",
    siteName: "Ganesha Consulting",
    type: "website",
    robots: "index, follow", // Aturan indeks dan pengikutan
    locale: "id_ID", // Lokalisasi halaman (misalnya, Indonesia)
    // Open Graph metadata untuk berbagi di media sosial
    openGraph: {
        type: "website",
        url: "https://www.ganeshaconsulting.co.id/audit",
        title: "Layanan Audit Profesional - Ganesha Consulting",
        description: "Layanan Audit profesional kami memberikan keyakinan terhadap informasi keuangan Anda, mengidentifikasi risiko, dan memperbaiki kontrol internal. Hubungi kami sekarang untuk konsultasi lebih lanjut!",
        image: {
            url: "https://www.ganeshaconsulting.co.id/BG/audit.jpg",
            alt: "Ganesha Consulting - Layanan Audit Profesional"
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


export default async function AuditPage() {
    let rawData = await fs.promises.readFile('public/JSON/Audit.json', 'utf-8');
    let data = JSON.parse(rawData);

    return (
        <>
            <BannerService />
            <ExtrasCard data={data} accent1={'bg-[#305782]'} accent2={'bg-[#B2DEE2]'} />
        </>
    );
}

