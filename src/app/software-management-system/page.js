
import { Explanation } from '@/components/LegalComponents/Explanation';
import { BannerService } from '@/components/ServicesComponent/BannerService';
import { dataPageSMS, faqsSMS, reasonsCompaniesNeedSMS, softwareManagementSystems } from '../../../public/Data/SMSData';
import { WhyLegal } from '@/components/LegalComponents/WhyLegal';
import { Faqs } from '@/components/LegalComponents/Faqs';
import { KindOfService } from '@/components/PartnerComponents/KindOfService';

export const metadata = {
    title: "Software Management System - Ganesha Consulting",
    description: "Temukan solusi terkini untuk meningkatkan efisiensi dan kinerja operasional bisnis Anda dengan Software Management System dari Ganesha Consulting. Kami menyediakan berbagai macam perangkat lunak, mulai dari software akuntansi hingga sistem AR. Hubungi kami untuk konsultasi lebih lanjut!",
    keywords: "software management system, software akuntansi, AR system, Ganesha Consulting",
    image: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236583/GaneshaAssets/phln59clbvfecosy0msj.png", // Path ke gambar terkait Software Management System
    url: "https://www.ganeshaconsulting.co.id/software-management-system", // URL halaman Software Management System Anda
    author: "Ganesha Consulting",
    siteName: "Ganesha Consulting",
    type: "website",
    robots: "index, follow", // Aturan indeks dan pengikutan
    locale: "id_ID", // Lokalisasi halaman (misalnya, Indonesia)
    // Open Graph metadata untuk berbagi di media sosial
    openGraph: {
        type: "website",
        url: "https://www.ganeshaconsulting.co.id/software-management-system",
        title: "Software Management System - Ganesha Consulting",
        description: "Temukan solusi terkini untuk meningkatkan efisiensi dan kinerja operasional bisnis Anda dengan Software Management System dari Ganesha Consulting. Kami menyediakan berbagai macam perangkat lunak, mulai dari software akuntansi hingga sistem AR. Hubungi kami untuk konsultasi lebih lanjut!",
        image: {
            url: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236583/GaneshaAssets/phln59clbvfecosy0msj.png",
            alt: "Ganesha Consulting - Software Management System"
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

export default async function SoftwareManagementSystem() {
    return (
        <>
            <BannerService />
            <Explanation
                text1={'Apa itu'}
                text={'Software Management System (SMS)?'}
                desc={dataPageSMS.what.desc}
            />
            <KindOfService
                data={softwareManagementSystems}
                text1={'Jenis - jenis'}
                text={'Software Management Systems (SMS)'}
            />
            <WhyLegal
                data={reasonsCompaniesNeedSMS}
                text1={'Mengapa'}
                text={'Perusahaan Membutuhkan SMS?'}
            />
              <Faqs
                text={'FAQs'}
                data={faqsSMS}
            />
        </>
    );
}

