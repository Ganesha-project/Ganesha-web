import { ReusableCards } from "@/components/ReusableCards";
import { BannerService } from "@/components/ServicesComponent/BannerService";
import { WebPackages } from "../../../public/DB/WebPackages";
import { WebBody } from "@/components/WebComponents/WebBody";
import { Clients } from "@/components/WebComponents/Clients";
import { WhyLegal } from "@/components/LegalComponents/WhyLegal";
import { Benefit } from "@/components/LegalComponents/Benefit";
import { BenefitWeb, dataPageWeb, FAQ } from "../../../public/Data/WebData";
import { Faqs } from "@/components/LegalComponents/Faqs";
import { Header } from "@/components/WebComponents/Header";

export const metadata = {
    title: "Jasa Pembuatan Website - Ganesha Consulting",
    description: "Ganesha Consulting menawarkan layanan pembuatan website dengan desain estetik, fungsionalitas prima, dan pengalaman pengguna yang menarik. Optimalkan presensi digital perusahaan Anda sekarang!",
    keywords: "jasa pembuatan website, pembuatan website, desain website, Ganesha Consulting, optimasi website",
    image: "/BG/web.png", // Path ke gambar banner
    url: "https://www.ganeshaconsulting.co.id/all-products/web", // URL halaman Anda
    author: "Ganesha Consulting",
    siteName: "Ganesha Consulting",
    type: "website",
    robots: "index, follow", // Aturan indeks dan pengikutan
    locale: "id_ID", // Lokalisasi halaman (misalnya, Indonesia)
    // Open Graph metadata untuk berbagi di media sosial
    openGraph: {
        type: "website",
        url: "https://www.ganeshaconsulting.co.id/all-products/web",
        title: "Jasa Pembuatan Website - Ganesha Consulting",
        description: "Ganesha Consulting menawarkan layanan pembuatan website dengan desain estetik, fungsionalitas prima, dan pengalaman pengguna yang menarik. Optimalkan presensi digital perusahaan Anda sekarang!",
        image: {
            url: "https://www.ganeshaconsulting.co.id/BG/web.png",
            alt: "Ganesha Consulting - Jasa Pembuatan Website"
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
            "https://twitter.com/ganeshaconsulting",
            "https://www.linkedin.com/company/ganeshaconsulting"
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
            <Clients />
            <Header
                data={dataPageWeb.contentData}
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

