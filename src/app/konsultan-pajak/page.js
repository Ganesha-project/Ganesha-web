
import { BannerService } from '@/components/ServicesComponent/BannerService';

export const metadata = {
    title: "Konsultan Pajak - Ganesha Consulting",
    description: "Optimalkan struktur pajak perusahaan Anda dengan bantuan Konsultan Pajak kami. Solusi efisien untuk mengelola kewajiban pajak dan memastikan kepatuhan peraturan. Hubungi kami untuk konsultasi lebih lanjut!",
    keywords: "konsultan pajak, optimasi pajak, manajemen pajak, kewajiban pajak, kepatuhan pajak, Ganesha Consulting",
    image: "/BG/tax.png", // Path ke gambar terkait Konsultan Pajak
    url: "https://www.ganeshaconsulting.co.id/konsultan-pajak", // URL halaman Konsultan Pajak Anda
    author: "Ganesha Consulting",
    siteName: "Ganesha Consulting",
    type: "website",
    robots: "index, follow", // Aturan indeks dan pengikutan
    locale: "id_ID", // Lokalisasi halaman (misalnya, Indonesia)
    // Open Graph metadata untuk berbagi di media sosial
    openGraph: {
        type: "website",
        url: "https://www.ganeshaconsulting.co.id/konsultan-pajak",
        title: "Konsultan Pajak - Ganesha Consulting",
        description: "Optimalkan struktur pajak perusahaan Anda dengan bantuan Konsultan Pajak kami. Solusi efisien untuk mengelola kewajiban pajak dan memastikan kepatuhan peraturan. Hubungi kami untuk konsultasi lebih lanjut!",
        image: {
            url: "https://www.ganeshaconsulting.co.id/BG/tax.png",
            alt: "Ganesha Consulting - Konsultan Pajak"
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


export default async function KonsultanPajakPage() {
    return (
        <>
            <BannerService />

        </>
    );
}

