
import { BannerService } from '@/components/ServicesComponent/BannerService';

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
    return (
        <>
            <BannerService />
        </>
    );
}

