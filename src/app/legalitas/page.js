import { AllProductButton } from "@/components/LegalComponents/AllProductButton";
import { Benefit } from "@/components/LegalComponents/Benefit";
import { BodyLegal } from "@/components/LegalComponents/BodyLegal";
import { BannerService } from "@/components/ServicesComponent/BannerService";
import { AccordionLegal } from "@/components/LegalComponents/AccrodionLegal";
import { RWhyUs } from "@/components/LegalComponents/RWhyUs";
import { DataPageLegal } from "../../../public/Data/LegalitasData";

export const metadata = {
    title: 'Jasa Legalitas Bisnis - Ganesha Consulting',
    description: 'Ganesha Consulting menyediakan jasa legalitas bisnis untuk membantu pendirian PT, CV, dan badan usaha lainnya. Kami siap membantu legalitas usaha Anda sesuai aturan hukum Indonesia.',
    keywords: 'jasa legalitas bisnis, pendirian PT, pendirian CV, pendirian badan usaha, legalitas usaha, konsultasi hukum, Ganesha Consulting',
    image: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236582/GaneshaAssets/ks0afkihiqamf7bjzgfi.png", // Path ke gambar banner
    url: 'https://www.ganeshaconsulting.co.id/legalitas',
    author: 'Ganesha Consulting',
    siteName: 'Ganesha Consulting',
    type: 'website',
    robots: 'index, follow', // Aturan indeks dan pengikutan
    locale: 'id_ID', // Lokalisasi halaman (misalnya, Indonesia)
    // Open Graph metadata untuk berbagi di media sosial
    openGraph: {
        type: 'website',
        url: 'https://www.ganeshaconsulting.co.id/legalitas',
        title: 'Jasa Legalitas Bisnis - Ganesha Consulting',
        description: 'Ganesha Consulting menyediakan jasa legalitas bisnis yang profesional untuk pendirian PT, CV, dan badan usaha lainnya. Legalkan bisnis Anda sekarang!',
        image: {
            url: 'https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236582/GaneshaAssets/ks0afkihiqamf7bjzgfi.png',
            alt: 'Ganesha Consulting - Jasa Legalitas Bisnis'
        }
    },
    // Structured data untuk membantu mesin pencari memahami konten halaman
    structuredData: {
        "@context": "http://schema.org",
        "@type": "Organization",
        name: "Ganesha Consulting",
        url: "https://www.ganeshaconsulting.co.id/",
        logo: "https://www.ganeshaconsulting.co.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FArtboard2.b33b65bb.png&w=96&q=75",
        sameAs: [
            "https://www.instagram.com/ganeshamultikreatif?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
            "https://www.facebook.com/profile.php?id=61555739807086",
            "https://www.linkedin.com/company/ganesha-multi-kreatif/",
            "https://api.whatsapp.com/send?phone=628887127000&text=Halo%20Ganesha%20Consulting"
        ]
    }
};

export default function LegalitasPage() {
    return (
        <>
            <BannerService />
            <AllProductButton />
            <BodyLegal />
            <Benefit
                data={DataPageLegal.whyUs}
                opening={'Kemudahan'}
                title={'Yang Kamu dapatkan di Ganesha Consulting'}
            />
            <AccordionLegal />
            <RWhyUs />
        </>
    )
}