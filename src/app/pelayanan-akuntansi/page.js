import { Explanation } from '@/components/LegalComponents/Explanation';
import { BannerService } from '@/components/ServicesComponent/BannerService';
import { dataPageAccounting, faqAccounting, whyAccounting } from '../../../public/Data/AccountingData';
import { WhyLegal } from '@/components/LegalComponents/WhyLegal';
import { CopyWriting } from '@/components/PajakCompontns/CopyWriting';
import { RWhyUs } from '@/components/LegalComponents/RWhyUs';
import { Faqs } from '@/components/LegalComponents/Faqs';
import { ReusableCards } from '@/components/ReusableCards';
import { AccountantPackages } from '../../../public/DB/AccountantPackages';

export const metadata = {
    title: "Pelayanan Akuntansi - Ganesha Consulting",
    description: "Dapatkan dukungan akuntansi terpercaya untuk pencatatan keuangan, pelaporan pajak, dan analisis keuangan yang akurat. Hubungi kami untuk konsultasi lebih lanjut!",
    keywords: "pelayanan akuntansi, dukungan akuntansi, pencatatan keuangan, pelaporan pajak, analisis keuangan, Jasa Akuntansi Omzet Kurang dari 2,5M, Jasa Akuntansi Omzet 2,5M s/d 5M, Jasa Akuntansi Omzet 5M s/d 7,5M, Jasa Akuntansi Omzet 7,5M s/d 10M, Jasa Akuntansi Omzet 10M s/d 12,5M, Jasa Akuntansi Omzet 12,5M s/d 15M, Jasa Akuntansi Omzet 15M s/d 17,5M, Jasa Akuntansi Omzet 17,5M s/d 20M, Jasa Akuntansi Omzet 20M s/d 25M, Jasa Akuntansi Omzet 25M s/d 30M, Ganesha Consulting",
    image: "\https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236557/GaneshaAssets/f7ivo4yqe6wkvzvrkcun.svg",
    url: "https://www.ganeshaconsulting.co.id/pelayanan-akuntansi",
    author: "Ganesha Consulting",
    siteName: "Ganesha Consulting",
    type: "website",
    robots: "index, follow",
    locale: "id_ID",
    openGraph: {
        type: "website",
        url: "https://www.ganeshaconsulting.co.id/pelayanan-akuntansi",
        title: "Pelayanan Akuntansi - Ganesha Consulting",
        description: "Dapatkan dukungan akuntansi terpercaya untuk pencatatan keuangan, pelaporan pajak, dan analisis keuangan yang akurat. Hubungi kami untuk konsultasi lebih lanjut!",
        image: {
            url: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236557/GaneshaAssets/f7ivo4yqe6wkvzvrkcun.svg",
            alt: "Ganesha Consulting - Pelayanan Akuntansi"
        }
    },
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

export default async function PelayananAkuntansi() {
    return (
        <>
            <BannerService />
            <ReusableCards  
                data={AccountantPackages}
                label={'Paket Pelayanan Akuntansi'}
            />
            <Explanation
                text1={'Apa itu'}
                text={'Accounting?'}
                desc={dataPageAccounting.what.desc}
            />
            <WhyLegal
                data={whyAccounting}
                text1={'Kenapa'}
                text={'Accounting Penting untuk Bisnis Anda?'}
            />
            <CopyWriting data={dataPageAccounting.copywriting}/>
            <Faqs
                text={'FAQs'}
                data={faqAccounting}
            />
            <RWhyUs/>
        </>
    );
}