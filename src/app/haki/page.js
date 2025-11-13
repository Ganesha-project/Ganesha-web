import { KindOfService } from '@/components/PartnerComponents/KindOfService';
import { BannerService } from '@/components/ServicesComponent/BannerService';
import { dataPageHaki, HakiFAQ, HakiTypes, whyHaki } from '../../../public/Data/HakiData';
import { Explanation } from '@/components/LegalComponents/Explanation';
import { WhyLegal } from '@/components/LegalComponents/WhyLegal';
import { Faqs } from '@/components/LegalComponents/Faqs';
import { HakiPackages } from '../../../public/DB/HakiPackages';
import { ReusableCards } from '@/components/ReusableCards';
import { RWhyUs } from '@/components/LegalComponents/RWhyUs';
import { getPackagesByServiceId } from '@/lib/getPackagesByServiceId';

export const metadata = {
    title: "HAKI | Hak Kekayaan Intelektual - Ganesha Consulting",
    description: "Lindungi merek, hak cipta, dan paten bisnis Anda dengan layanan HAKI kami, memberikan keunggulan kompetitif. Hubungi kami untuk konsultasi lebih lanjut!",
    keywords: "HAKI, hak kekayaan intelektual, merek, hak cipta, paten, Ganesha Consulting, konsultasi bisnis",
    image: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236555/GaneshaAssets/gzm4wdyvieietlozpwbt.svg", // Path ke gambar terkait HAKI
    url: "https://www.ganeshaconsulting.co.id/haki", // URL halaman HAKI Anda
    author: "Ganesha Consulting",
    siteName: "Ganesha Consulting",
    type: "website",
    robots: "index, follow", // Aturan indeks dan pengikutan
    locale: "id_ID", // Lokalisasi halaman (misalnya, Indonesia)
    // Open Graph metadata untuk berbagi di media sosial
    openGraph: {
        type: "website",
        url: "https://www.ganeshaconsulting.co.id/haki",
        title: "HAKI | Hak Kekayaan Intelektual - Ganesha Consulting",
        description: "Lindungi merek, hak cipta, dan paten bisnis Anda dengan layanan HAKI kami, memberikan keunggulan kompetitif. Hubungi kami untuk konsultasi lebih lanjut!",
        image: {
            url: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236555/GaneshaAssets/gzm4wdyvieietlozpwbt.svg",
            alt: "Ganesha Consulting - HAKI | Hak Kekayaan Intelektual"
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
            "https://www.facebook.com/ganeshaconsulting",
            "https://twitter.com/ganeshaconsult",
            "https://www.linkedin.com/company/ganeshaconsulting"
        ]
    }
};

export default async function HakiPage() {

    const HAKIPackagesAPI = await getPackagesByServiceId(5)
    return (
        <>
            <BannerService />
            <ReusableCards
                // data={HakiPackages}
                data={HAKIPackagesAPI}
                label={'Paket HAKI'}
            />
            <Explanation
                text1={'Apa itu'}
                text={'Hak Kekayaan Intelektual (HAKI)?'}
                desc={dataPageHaki.what.desc}
            />
            <KindOfService
                data={HakiTypes}
                text1={'Jenis - jenis'}
                text={'Hak Kekayaan Intelektual (HAKI)'}
            />
            <WhyLegal
                data={whyHaki}
                text1={'Mengapa'}
                text={'Perusahaan membutuhkan HAKI?'}
            />
            <Faqs
                text={'FAQs'}
                data={HakiFAQ}
            />
            <RWhyUs />
        </>
    );
}

