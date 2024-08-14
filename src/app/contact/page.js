import { BodyContact } from "@/components/BodyContact";
import { Form } from "@/components/ContactComponents/Form";
import { Maps } from "@/components/ContactComponents/Maps";
import { BannerService } from '@/components/ServicesComponent/BannerService';

export const metadata = {
    title: "Hubungi Kami - Ganesha Consulting",
    description: "Hubungi kami untuk konsultasi lebih lanjut, pertanyaan, atau informasi tambahan tentang layanan kami. Kami siap membantu Anda dalam memajukan bisnis Anda.",
    keywords: "hubungi kami, konsultasi bisnis, layanan konsultasi, Ganesha Consulting, kontak",
    image: "/BG/cs.jpg", // Path ke gambar terkait layanan konsultasi
    url: "https://www.ganeshaconsulting.co.id/contact", // URL halaman kontak Anda
    author: "Ganesha Consulting",
    siteName: "Ganesha Consulting",
    type: "website",
    robots: "index, follow", // Aturan indeks dan pengikutan
    locale: "id_ID", // Lokalisasi halaman (misalnya, Indonesia)
    // Open Graph metadata untuk berbagi di media sosial
    openGraph: {
        type: "website",
        url: "https://www.ganeshaconsulting.co.id/contact",
        title: "Hubungi Kami - Ganesha Consulting",
        description: "Hubungi kami untuk konsultasi lebih lanjut, pertanyaan, atau informasi tambahan tentang layanan kami. Kami siap membantu Anda dalam memajukan bisnis Anda.",
        image: {
            url: "https://www.ganeshaconsulting.co.id/BG/cs.jpg",
            alt: "Ganesha Consulting - Hubungi Kami"
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


export default async function ContactPage() {

    return (
        <>
            <BannerService />
            <BodyContact />
            <Maps/>
            <Form />
        </>
    )
}