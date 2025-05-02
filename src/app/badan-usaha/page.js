import { RWhyUs } from "@/components/LegalComponents/RWhyUs";
import { ReusableCards } from "@/components/ReusableCards";
import { BannerService } from "@/components/ServicesComponent/BannerService";
import { BadanUsahaPackages } from "../../../public/DB/PTPackages";
import { Benefit } from "@/components/LegalComponents/Benefit";
import { ClientPhotos } from "@/components/ClientPhotos";
import { Faqs } from "@/components/LegalComponents/Faqs";
import { WhyLegal } from "@/components/LegalComponents/WhyLegal";
import { dataPageBadanUsaha, undangUndangTerkait, whyBadanUsaha } from "../../../public/Data/BadanUsahaData";
import { Laws } from "@/components/LegalComponents/Laws";
import { DataPageLegal } from "../../../public/Data/LegalitasData";
import { AdsBanner } from "@/components/AdsBanner";

export const metadata = {
    title: "Pendirian Badan Usaha - Yayasan, Firma Hukum, & Asosiasi dengan Ganesha Consulting",
    description: "Ganesha Consulting menyediakan layanan pendirian badan usaha termasuk yayasan, firma hukum, dan perkumpulan/asosiasi. Dapatkan solusi terpercaya dan harga terjangkau untuk memulai badan usaha Anda di Indonesia. Hubungi kami untuk layanan profesional dan cepat!",
    keywords: "pendirian badan usaha, yayasan, firma hukum, perkumpulan, asosiasi, Ganesha Consulting, layanan pendirian badan usaha, konsultasi bisnis",
    canonical: "https://www.ganeshaconsulting.co.id/badan-usaha",
    image: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236584/GaneshaAssets/vvl30klk2osin5jcrvi3.png", // Path ke gambar terkait pendirian badan usaha
    url: "https://www.ganeshaconsulting.co.id/badan-usaha",
    author: "Ganesha Consulting",
    siteName: "Ganesha Consulting",
    type: "website",
    robots: "index, follow",
    locale: "id_ID",
    // Open Graph metadata
    openGraph: {
        type: "website",
        url: "https://www.ganeshaconsulting.co.id/all-products/legalitas/badan-usaha",
        title: "Pendirian Badan Usaha - Yayasan, Firma Hukum, & Asosiasi dengan Ganesha Consulting",
        description: "Ganesha Consulting menyediakan layanan pendirian badan usaha termasuk yayasan, firma hukum, dan perkumpulan/asosiasi. Dapatkan solusi terpercaya dan harga terjangkau untuk memulai badan usaha Anda di Indonesia. Hubungi kami untuk layanan profesional dan cepat!",
        image: {
            url: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236584/GaneshaAssets/vvl30klk2osin5jcrvi3.png",
            alt: "Ganesha Consulting - Pendirian Badan Usaha"
        }
    },
    // Structured data
    structuredData: {
        "@context": "http://schema.org",
        "@type": "Organization",
        name: "Ganesha Consulting",
        url: "https://www.ganeshaconsulting.co.id/",
        logo: "https://www.ganeshaconsulting.co.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FArtboard2.b33b65bb.png&w=96&q=75",
        description: "Ganesha Consulting menyediakan layanan pendirian badan usaha dengan solusi cepat dan terpercaya untuk yayasan, firma hukum, dan asosiasi di Indonesia.",
        sameAs: [
            "https://www.instagram.com/ganeshamultikreatif?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
            "https://www.facebook.com/profile.php?id=61555739807086",
            "https://www.linkedin.com/company/ganesha-multi-kreatif/",
            "https://api.whatsapp.com/send?phone=628887127000&text=Halo%20Ganesha%20Consulting"
        ],
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+628887127000",
            contactType: "Customer Service"
        }
    }
};


export default async function PendirianBadanUsaha() {
    return (
        <>
            <BannerService />
            <ReusableCards
                data={BadanUsahaPackages}
                label={'Paket Pendirian Badan Usaha'}
            />
            <Benefit
                data={DataPageLegal.benefit}
                opening={'Benefit'}
                title={'Dari Pendirian Badan Usaha di Ganesha Consulting'}
            />
            <WhyLegal
                data={whyBadanUsaha}
                text1={'Mengapa'}
                text={'Badan Usaha diperlukan?'}
            />
            <ClientPhotos />
            <AdsBanner/>
            <Laws
                data={undangUndangTerkait}
                text1={'Undang - Undang'}
                text={'Terkait Badan Usaha di Indonesia'}
            />
            <RWhyUs />
            <Faqs
                text={'FAQ'}
                color={'neutral'}
                data={dataPageBadanUsaha.faqDataBU}
            />
        </>
    )
}