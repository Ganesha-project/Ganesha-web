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
import { AdsBanner } from '@/components/AdsBanner';
import { Support } from '@/components/AboutUs/Support';
import { PseCertificate } from '@/components/PseCertificate';
import { ClientLogo } from '@/components/ClientLogo';
import Head from 'next/head';
import { ReccomendationCard } from '@/components/ReccomendationCard';
import { getPackagesByServiceId } from '@/lib/getPackagesByServiceId';

export default async function PendirianPtPage() {

    const PTPackagesAPI = await getPackagesByServiceId(1)
    // console.log("PTPackagesAPI", PTPackagesAPI);
    
    return (
        <>
            <Head>
                {/* Title */}
                <title>Jasa Pendirian PT - Ganesha Consulting</title>
                {/* Meta Descriptions */}
                <meta name="description" content="Ganesha Consulting menawarkan jasa pendirian PT yang cepat dan terpercaya. Dapatkan bantuan profesional untuk memulai bisnis Anda dengan legalitas yang sah di Indonesia." />
                <meta name="keywords" content="pendirian PT, jasa pendirian PT, PT PMA, legalitas PT, Ganesha Consulting, layanan pendirian perusahaan, bisnis, konsultan bisnis" />
                {/* Canonical Link */}
                <link rel="canonical" href="https://www.ganeshaconsulting.co.id/pendirian-pt" />
                {/* Open Graph Metadata */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.ganeshaconsulting.co.id/pendirian-pt" />
                <meta property="og:title" content="Jasa Pendirian PT - Ganesha Consulting" />
                <meta property="og:description" content="Ganesha Consulting menawarkan jasa pendirian PT yang cepat dan terpercaya. Dapatkan bantuan profesional untuk memulai bisnis Anda dengan legalitas yang sah di Indonesia." />
                <meta property="og:image" content="https://www.ganeshaconsulting.co.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FArtboard2.b33b65bb.png&w=96&q=75" />
                <meta property="og:image:alt" content="Ganesha Consulting - Pendirian PT" />
                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
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
                    })}
                </script>
            </Head>
            <BannerService />
            <ReusableCards
                // data={[...PTPackages, ...PMAPackages, ...ExtrasPackages]}
                data={PTPackagesAPI}
                label={'Paket Pendirian PT'}
            />
            <Benefit
                data={DataPageLegal.benefit}
                opening={'Benefit'}
                title={'Dari Pendirian PT di Ganesha Consulting'}
            />
            <ClientPhotos />
            <ClientLogo />
            <Support />
            <PseCertificate />
            <WhyLegal
                data={DataPageLegal.whyLegal}
                text1={'Mengapa'}
                text={'Legalitas Usaha diperlukan?'}
            />
            <Explanation
                text={'Apa itu PT?'}
                desc={DataPageLegal.whatPt.desc}
            />
            <AdsBanner />
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
            <ReccomendationCard />
        </>
    )
}