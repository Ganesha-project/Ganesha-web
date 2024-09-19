import { ReusableCards } from "@/components/ReusableCards";
import { BannerService } from "@/components/ServicesComponent/BannerService";
import { WebPackages } from "../../../public/DB/WebPackages";
import { WebBody } from "@/components/WebComponents/WebBody";
import { WhyLegal } from "@/components/LegalComponents/WhyLegal";
import { Benefit } from "@/components/LegalComponents/Benefit";
import { BenefitWeb, dataHeader, dataPageWeb, FAQ } from "../../../public/Data/WebData";
import { Faqs } from "@/components/LegalComponents/Faqs";
import { Header } from "@/components/WebComponents/Header";
import { WebWork } from "@/components/WebComponents/WebWork";

export const metadata = {
    title: "Jasa Pembuatan Website Profesional - Ganesha Consulting",
    description: "Ganesha Consulting menawarkan jasa pembuatan website profesional dengan desain estetik, fungsionalitas prima, dan pengalaman pengguna yang optimal. Tingkatkan presensi digital bisnis Anda sekarang.",
    keywords: "jasa pembuatan website, pembuatan website profesional, desain website responsif, Ganesha Consulting, website bisnis, optimasi website SEO",
    image: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236584/GaneshaAssets/dktt01pu9es4cmoyr31t.png", // Gambar banner yang digunakan
    url: "hhttps://www.ganeshaconsulting.co.id/web-development", // URL halaman
    author: "Ganesha Consulting",
    siteName: "Ganesha Consulting",
    type: "website",
    robots: "index, follow", // Mengizinkan indexing
    locale: "id_ID", // Lokalisasi untuk pasar Indonesia
    openGraph: {
        type: "website",
        url: "hhttps://www.ganeshaconsulting.co.id/web-development",
        title: "Jasa Pembuatan Website Profesional - Ganesha Consulting",
        description: "Layanan pembuatan website profesional dengan desain responsif dan SEO-friendly dari Ganesha Consulting. Optimalkan bisnis Anda dengan website terbaik.",
        image: {
            url: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236584/GaneshaAssets/dktt01pu9es4cmoyr31t.png",
            alt: "Jasa Pembuatan Website - Ganesha Consulting"
        }
    },
    structuredData: {
        "@context": "http://schema.org",
        "@type": "Organization",
        name: "Ganesha Consulting",
        url: "https://www.ganeshaconsulting.co.id/",
        logo: "https://www.ganeshaconsulting.co.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FArtboard2.b33b65bb.png&w=96&q=75",
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+628887127000",
            contactType: "Customer Service"
        },
        sameAs: [
            "https://www.instagram.com/ganeshamultikreatif?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
            "https://www.facebook.com/profile.php?id=61555739807086",
            "https://www.linkedin.com/company/ganesha-multi-kreatif/",
            "https://api.whatsapp.com/send?phone=628887127000&text=Halo%20Ganesha%20Consulting"
        ]
    }
};

export default async function WebPage() {
    return (
        <>
            <BannerService />
            <ReusableCards
                data={WebPackages}
                label={'Paket Pembuatan Website'}
                scrollToLg={50}
                scrollToMd={40}
                scrollToSm={17}
            />
            <WebWork />
            <Header
                data={dataHeader.contentData}
            />
            <WhyLegal
                data={dataPageWeb.whyWebsite}
                text1={'Mengapa'}
                text={'Perusahaan membutuhkan Website?'}
            />
            <WebBody />
            <Benefit
                data={BenefitWeb}
                opening={'Yang kamu dapatkan dari'}
                title={'Pembuatan Web di Ganesha Consulting'}
            />
            <Faqs
                text={'FAQs'}
                data={FAQ}
            />
        </>
    );
}

