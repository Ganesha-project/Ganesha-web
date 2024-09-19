import { BannerSosmed } from "@/components/BannerSosmed";
import { ReusableCards } from "@/components/ReusableCards";
import { BannerService } from "@/components/ServicesComponent/BannerService";
import { AccordionSocmed } from "@/components/SocmedComponents/AccordionSocmed";
import { SMPackages } from "../../../public/DB/SMPackages";
import { Header } from "@/components/WebComponents/Header";
import { dataPageSocmed, faqSocialMediaManagement } from "../../../public/Data/SocmedData";
import { WhyLegal } from "@/components/LegalComponents/WhyLegal";
import { Explanation } from "@/components/LegalComponents/Explanation";
import { Faqs } from "@/components/LegalComponents/Faqs";
import { SocmedWork } from "@/components/SocmedComponents/SocmedWork";

export const metadata = {
    title: "Manajemen Sosial Media & Desain - Ganesha Consulting",
    description: "Ganesha Consulting menyediakan layanan manajemen sosial media dan desain untuk membantu bisnis Anda membangun citra merek yang kuat dan berinteraksi secara efektif dengan pelanggan. Temukan paket yang sesuai dengan kebutuhan Anda sekarang!",
    keywords: "manajemen sosial media, desain grafis, layanan sosial media, layanan desain, Ganesha Consulting",
    image: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236583/GaneshaAssets/phln59clbvfecosy0msj.png", // Path ke gambar banner
    url: "https://www.ganeshaconsulting.co.id/social-media-management", // URL halaman Anda
    author: "Ganesha Consulting",
    siteName: "Ganesha Consulting",
    type: "website",
    robots: "index, follow", // Aturan indeks dan pengikutan
    locale: "id_ID", // Lokalisasi halaman (misalnya, Indonesia)
    // Open Graph metadata untuk berbagi di media sosial
    openGraph: {
        type: "website",
        url: "https://www.ganeshaconsulting.co.id/social-media-management",
        title: "Manajemen Sosial Media & Desain - Ganesha Consulting",
        description: "Ganesha Consulting menyediakan layanan manajemen sosial media dan desain untuk membantu bisnis Anda membangun citra merek yang kuat dan berinteraksi secara efektif dengan pelanggan. Temukan paket yang sesuai dengan kebutuhan Anda sekarang!",
        image: {
            url: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236583/GaneshaAssets/phln59clbvfecosy0msj.png",
            alt: "Ganesha Consulting - Manajemen Sosial Media & Desain"
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

export default async function SosmedPage() {
    return (
        <>
            <BannerService />
            <ReusableCards
                data={SMPackages}
                cardColor={'bg-violet-100'}
                typeColor={'text-violet-600'}
                priceColor={'text-violet-800'}
                buttonColor={'bg-violet-500'}
                label={'Paket Social Media Management'}
            />
            <SocmedWork />
            <Header
                data={dataPageSocmed.contentData}
            />
            <WhyLegal
                data={dataPageSocmed.whySocmed}
                text1={'Mengapa'}
                text={'Perusahaan membutuhkan Social Media?'}
            />
            <BannerSosmed />
            <Explanation
                text1={'Apa sih kelebihan'}
                text={'Social Media Managemet di Ganesha Consulting?'}
                desc={dataPageSocmed.whywe.desc}
            />
            <AccordionSocmed />
            <Faqs
                text={'FAQs'}
                data={faqSocialMediaManagement}
            />
        </>
    )
}