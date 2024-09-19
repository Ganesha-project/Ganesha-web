
import { RWhyUs } from '@/components/LegalComponents/RWhyUs';
import { ReusableCards } from '@/components/ReusableCards';
import { BannerService } from "@/components/ServicesComponent/BannerService";
import { ExtrasPackages, PMAPackages, PTPackages } from '../../../public/DB/PTPackages';
import { Benefit } from '@/components/LegalComponents/Benefit';
import { WhyLegal } from '@/components/LegalComponents/WhyLegal';
import { Faqs } from '@/components/LegalComponents/Faqs';
import { ClientPhotos } from '@/components/ClientPhotos';
import { Explanation } from '@/components/LegalComponents/Explanation';
import { Laws } from '@/components/LegalComponents/Laws';
import { DataPageLegal } from '../../../public/Data/LegalitasData';

export const metadata = {
    title: "Jasa Pendirian PT - Ganesha Consulting",
    description: "Ganesha Consulting menawarkan jasa pendirian PT yang cepat dan terpercaya. Dapatkan bantuan profesional untuk memulai bisnis Anda dengan legalitas yang sah di Indonesia.",
    keywords: "pendirian PT, jasa pendirian PT, PT PMA, legalitas PT, Ganesha Consulting, layanan pendirian perusahaan, bisnis, konsultan bisnis",
    canonical: "https://www.ganeshaconsulting.co.id/pendirian-pt",
    // Open Graph metadata
    openGraph: {
        type: "website",
        url: "https://www.ganeshaconsulting.co.id/pendirian-pt",
        title: "Jasa Pendirian PT - Ganesha Consulting",
        description: "Ganesha Consulting menawarkan jasa pendirian PT yang cepat dan terpercaya. Dapatkan bantuan profesional untuk memulai bisnis Anda dengan legalitas yang sah di Indonesia.",
        image: {
            url: "https://www.ganeshaconsulting.co.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FArtboard2.b33b65bb.png&w=96&q=75",
            alt: "Ganesha Consulting - Pendirian PT"
        }
    },
    // Structured data
    structuredData: {
        "@context": "http://schema.org",
        "@type": "Organization",
        name: "Ganesha Consulting",
        url: "https://www.ganeshaconsulting.co.id/",
        logo: "https://www.ganeshaconsulting.co.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FArtboard2.b33b65bb.png&w=96&q=75",
        description: "Ganesha Consulting menyediakan jasa pendirian PT yang cepat dan terpercaya untuk membantu bisnis Anda memulai dengan legalitas yang sah.",
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

export default function PendirianPtPage() {
    return (
        <>
            <BannerService />
            <ReusableCards
                data={[...PTPackages, ...PMAPackages, ...ExtrasPackages]}
                label={'Paket Pendirian PT'}
                scrollToLg={25}
            />
            <Benefit
                data={DataPageLegal.benefit}
                opening={'Benefit'}
                title={'Dari Pendirian PT di Ganesha Consulting'}
            />
            <ClientPhotos />
            <WhyLegal
                data={DataPageLegal.whyLegal}
                text1={'Mengapa'}
                text={'Legalitas Usaha diperlukan?'}
            />
            <Explanation
                text={'Apa itu PT?'}
                desc={DataPageLegal.whatPt.desc}
            />
            <Laws
                data={DataPageLegal.legalTexts}
                text={'Terkait PT di Indonesia'}
                text1={'Undang - Undang'}
            />
            <Faqs
                text={'FAQs'}
                data={DataPageLegal.faqData}
            />
            <RWhyUs />
        </>
    )
}