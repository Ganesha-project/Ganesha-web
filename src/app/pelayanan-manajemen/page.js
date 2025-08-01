import { BannerService } from '@/components/ServicesComponent/BannerService';

export const metadata = {
    title: "Pelayanan Manajemen - Ganesha Consulting",
    description: "Tingkatkan efisiensi operasional dengan Pelayanan Manajemen kami, fokus pada perencanaan strategis dan implementasi praktik manajemen terbaik. Hubungi kami untuk konsultasi lebih lanjut!",
    keywords: "pelayanan manajemen, efisiensi operasional, perencanaan strategis, implementasi manajemen, Ganesha Consulting",
    image: "/BG/management.jpg", // Path ke gambar terkait Pelayanan Manajemen
    url: "https://www.ganeshaconsulting.co.id/pelayanan-manajemen", // URL halaman Pelayanan Manajemen Anda
    author: "Ganesha Consulting",
    siteName: "Ganesha Consulting",
    type: "website",
    robots: "index, follow", // Aturan indeks dan pengikutan
    locale: "id_ID", // Lokalisasi halaman (misalnya, Indonesia)
    // Open Graph metadata untuk berbagi di media sosial
    openGraph: {
        type: "website",
        url: "https://www.ganeshaconsulting.co.id/pelayanan-manajemen",
        title: "Pelayanan Manajemen - Ganesha Consulting",
        description: "Tingkatkan efisiensi operasional dengan Pelayanan Manajemen kami, fokus pada perencanaan strategis dan implementasi praktik manajemen terbaik. Hubungi kami untuk konsultasi lebih lanjut!",
        image: {
            url: "https://www.ganeshaconsulting.co.id/BG/management.jpg",
            alt: "Ganesha Consulting - Pelayanan Manajemen"
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

export default async function PelayananManajemenPage() {
    return (
        <>
            <BannerService />
        </>
    );
}

