import { RWhyUs } from "@/components/LegalComponents/RWhyUs";
import { ReusableCards } from "@/components/ReusableCards";
import { BannerService } from "@/components/ServicesComponent/BannerService";
import { CVPackages } from "../../../public/DB/CVPackages";
import { ExtrasPackages } from "../../../public/DB/PTPackages";
import { Benefit } from "@/components/LegalComponents/Benefit";
import { Faqs } from "@/components/LegalComponents/Faqs";
import { ClientPhotos } from "@/components/ClientPhotos";
import { Explanation } from "@/components/LegalComponents/Explanation";
import { Laws } from "@/components/LegalComponents/Laws";
import { WhyLegal } from "@/components/LegalComponents/WhyLegal";
import { DataPageLegal } from "../../../public/Data/LegalitasData";
import { dataPageCV } from "../../../public/Data/CVData";
import { AdsBanner } from "@/components/AdsBanner";
import { ClientLogo } from "@/components/ClientLogo";
import { Support } from "@/components/AboutUs/Support";
import { PseCertificate } from "@/components/PseCertificate";

export const metadata = {
    title: "Jasa Pendirian CV - Ganesha Consulting",
    description: "Ganesha Consulting menyediakan layanan pendirian CV dengan proses cepat dan terpercaya. Dapatkan solusi terbaik untuk memulai bisnis Anda dengan CV yang sah di Indonesia. Hubungi kami untuk informasi lebih lanjut!",
    keywords: "pendirian CV, layanan pendirian CV, Ganesha Consulting, legalitas CV, konsultasi bisnis CV, harga pendirian CV",
    canonical: "https://www.ganeshaconsulting.co.id/pendirian-cv",
    // Open Graph metadata
    openGraph: {
        type: "website",
        url: "https://www.ganeshaconsulting.co.id/pendirian-cv",
        title: "Jasa Pendirian CV - Ganesha Consulting",
        description: "Ganesha Consulting menyediakan layanan pendirian CV dengan proses cepat dan terpercaya. Dapatkan solusi terbaik untuk memulai bisnis Anda dengan CV yang sah di Indonesia. Hubungi kami untuk informasi lebih lanjut!",
        image: {
            url: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236555/GaneshaAssets/felydyeo20nq7t3zlvfu.svg",
            alt: "Ganesha Consulting - Pendirian CV"
        }
    },
    // Structured data
    structuredData: {
        "@context": "http://schema.org",
        "@type": "Organization",
        name: "Ganesha Consulting",
        url: "https://www.ganeshaconsulting.co.id/",
        logo: "https://www.ganeshaconsulting.co.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FArtboard2.b33b65bb.png&w=96&q=75",
        description: "Ganesha Consulting menawarkan layanan pendirian CV dengan proses yang cepat, terpercaya, dan harga terjangkau. Hubungi kami untuk memulai bisnis Anda dengan legalitas yang sah.",
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

export default async function PendirianCvPage() {
    return (
        <>
            <BannerService />
            <ReusableCards
                data={[...CVPackages, ...ExtrasPackages]}
                label={'Paket Pendirian CV'}
            />
            <ClientPhotos />
            <Benefit
                data={DataPageLegal.benefit}
                opening={'Yang Kamu Dapatkan'}
                title={'Dari Pendirian CV di Ganesha Consulting'}
            />
            <ClientLogo />
            <Support />
            <PseCertificate />
            <Explanation
                desc={dataPageCV.whatCv.desc}
                text={'Apa Itu CV?'}
            />
            <AdsBanner />
            <Laws
                data={dataPageCV.undangUndangTerkait}
                text1={'Undang - Undang'}
                text={'Terkait CV di Indonesia'}
                classNameTitle={'!font-bold text-2xl'}
            />
            <WhyLegal
                data={dataPageCV.whyCV}
                text1={'Mengapa'}
                text={'Legalitas Usaha diperlukan?'}
            />
            <Faqs
                text={'FAQ'}
                color={'orange'}
                data={dataPageCV.faqcv}
            />
            <RWhyUs color={"orange"} />
        </>
    )
}