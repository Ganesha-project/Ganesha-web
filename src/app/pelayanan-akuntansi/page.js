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
    keywords: "pelayanan akuntansi, dukungan akuntansi, pencatatan keuangan, pelaporan pajak, analisis keuangan, Ganesha Consulting",
    image: "/BG/accounting.jpg", // Path ke gambar terkait Pelayanan Akuntansi
    url: "https://www.ganeshaconsulting.co.id/pelayanan-akuntansi", // URL halaman Pelayanan Akuntansi Anda
    author: "Ganesha Consulting",
    siteName: "Ganesha Consulting",
    type: "website",
    robots: "index, follow", // Aturan indeks dan pengikutan
    locale: "id_ID", // Lokalisasi halaman (misalnya, Indonesia)
    // Open Graph metadata untuk berbagi di media sosial
    openGraph: {
        type: "website",
        url: "https://www.ganeshaconsulting.co.id/pelayanan-akuntansi",
        title: "Pelayanan Akuntansi - Ganesha Consulting",
        description: "Dapatkan dukungan akuntansi terpercaya untuk pencatatan keuangan, pelaporan pajak, dan analisis keuangan yang akurat. Hubungi kami untuk konsultasi lebih lanjut!",
        image: {
            url: "https://www.ganeshaconsulting.co.id/BG/accounting.jpg",
            alt: "Ganesha Consulting - Pelayanan Akuntansi"
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
                scrollToLg={13}
                scrollToMd={13}
                scrollToSm={4.5}
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